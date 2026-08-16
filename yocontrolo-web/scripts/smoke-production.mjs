import { access } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { verifySite } from './site-checks.mjs';

const port = Number.parseInt(process.env.SMOKE_PORT ?? '3107', 10);
const baseUrl = `http://127.0.0.1:${port}`;
const nextCli = fileURLToPath(new URL('../node_modules/next/dist/bin/next', import.meta.url));
const buildId = new URL('../.next/BUILD_ID', import.meta.url);

await access(buildId);

let logs = '';
const server = spawn(process.execPath, [nextCli, 'start', '--hostname', '127.0.0.1', '--port', String(port)], {
  cwd: fileURLToPath(new URL('..', import.meta.url)),
  env: { ...process.env, NODE_ENV: 'production' },
  stdio: ['ignore', 'pipe', 'pipe'],
});

const record = (chunk) => {
  logs = `${logs}${chunk.toString()}`.slice(-20_000);
};
server.stdout.on('data', record);
server.stderr.on('data', record);

async function waitUntilReady() {
  const deadline = Date.now() + 30_000;
  while (Date.now() < deadline) {
    if (server.exitCode !== null) throw new Error(`Production server exited early.\n${logs}`);
    try {
      const response = await fetch(baseUrl, { signal: AbortSignal.timeout(1_500) });
      if (response.ok) return;
    } catch {
      // The server is still starting.
    }
    await new Promise((resolve) => setTimeout(resolve, 350));
  }
  throw new Error(`Production server did not become ready.\n${logs}`);
}

try {
  await waitUntilReady();
  await verifySite(baseUrl);
  console.log(`Production smoke tests passed at ${baseUrl}`);
} finally {
  server.kill('SIGTERM');
  await Promise.race([
    new Promise((resolve) => server.once('exit', resolve)),
    new Promise((resolve) => setTimeout(resolve, 3_000)),
  ]);
  if (server.exitCode === null) server.kill('SIGKILL');
}
