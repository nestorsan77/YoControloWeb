import { appendFile } from 'node:fs/promises';

const API_BASE_URL = 'https://api.vercel.com';
const PROJECT_NAME = 'yo-controlo-web';
const POLL_INTERVAL_MS = 10_000;
const MAX_POLL_ATTEMPTS = 90;
const TERMINAL_FAILURE_STATES = new Set(['ERROR', 'CANCELED']);

const requiredEnvironment = ['VERCEL_ORG_ID', 'VERCEL_PROJECT_ID', 'VERCEL_TOKEN'];

function requireValue(value, name) {
  if (!value) {
    throw new Error(`Missing required value: ${name}`);
  }
  return value;
}

export function normalizeDeploymentUrl(value) {
  const candidate = requireValue(value, 'deployment URL').replace(/^https?:\/\//, '');
  if (!/^[a-zA-Z0-9.-]+\.vercel\.app$/.test(candidate)) {
    throw new Error('Vercel returned an unexpected deployment URL');
  }
  return `https://${candidate}`;
}

export function validateDeploymentInputs(commitSha, repositoryId) {
  if (!/^[a-f0-9]{40}$/i.test(commitSha ?? '')) {
    throw new Error('The approved Git commit SHA is invalid');
  }
  if (!/^\d+$/.test(repositoryId ?? '')) {
    throw new Error('The GitHub repository ID is invalid');
  }
}

async function requestJson(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${process.env.VERCEL_TOKEN}`,
      'Content-Type': 'application/json',
      ...options.headers,
    },
    signal: AbortSignal.timeout(30_000),
  });

  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    const code = payload.error?.code ? ` (${payload.error.code})` : '';
    const message = payload.error?.message ?? `HTTP ${response.status}`;
    throw new Error(`Vercel API request failed${code}: ${message}`);
  }
  return payload;
}

async function createProductionDeployment(commitSha, repositoryId) {
  const teamId = encodeURIComponent(process.env.VERCEL_ORG_ID);
  return requestJson(`/v13/deployments?teamId=${teamId}&forceNew=1`, {
    method: 'POST',
    body: JSON.stringify({
      name: PROJECT_NAME,
      project: process.env.VERCEL_PROJECT_ID,
      target: 'production',
      gitSource: {
        type: 'github',
        repoId: Number(repositoryId),
        ref: 'main',
        sha: commitSha,
      },
      meta: {
        githubCommitSha: commitSha,
        githubCommitRef: 'main',
      },
    }),
  });
}

async function waitUntilReady(deploymentId) {
  const teamId = encodeURIComponent(process.env.VERCEL_ORG_ID);

  for (let attempt = 1; attempt <= MAX_POLL_ATTEMPTS; attempt += 1) {
    const deployment = await requestJson(
      `/v13/deployments/${encodeURIComponent(deploymentId)}?teamId=${teamId}`,
    );
    const state = deployment.readyState ?? deployment.state;

    if (state === 'READY') {
      return deployment;
    }
    if (TERMINAL_FAILURE_STATES.has(state)) {
      throw new Error(`Vercel deployment ended in state ${state}`);
    }

    if (attempt < MAX_POLL_ATTEMPTS) {
      console.log(`Vercel deployment state: ${state ?? 'UNKNOWN'} (${attempt}/${MAX_POLL_ATTEMPTS})`);
      await new Promise((resolve) => setTimeout(resolve, POLL_INTERVAL_MS));
    }
  }

  throw new Error('Timed out waiting for the Vercel production deployment');
}

async function publishOutputs(deployment) {
  const deploymentId = requireValue(deployment.id ?? deployment.uid, 'deployment ID');
  const deploymentUrl = normalizeDeploymentUrl(deployment.url);

  if (process.env.GITHUB_OUTPUT) {
    await appendFile(
      process.env.GITHUB_OUTPUT,
      `deployment_id=${deploymentId}\nurl=${deploymentUrl}\n`,
      'utf8',
    );
  }

  console.log(`Vercel deployment ready: ${deploymentUrl}`);
}

async function main() {
  for (const name of requiredEnvironment) {
    requireValue(process.env[name], name);
  }

  const [commitSha, repositoryId] = process.argv.slice(2);
  validateDeploymentInputs(commitSha, repositoryId);

  const created = await createProductionDeployment(commitSha, repositoryId);
  const deploymentId = requireValue(created.id ?? created.uid, 'deployment ID');
  const ready = await waitUntilReady(deploymentId);
  await publishOutputs(ready);
}

if (process.argv[1]?.endsWith('deploy-vercel-api.mjs')) {
  main().catch((error) => {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  });
}
