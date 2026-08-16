import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import { normalizeDeploymentUrl, validateDeploymentInputs } from './deploy-vercel-api.mjs';

const read = (path) => readFile(new URL(path, import.meta.url), 'utf8');

test('Vercel deployment inputs reject wrong repositories, revisions and hosts', () => {
  assert.doesNotThrow(() => validateDeploymentInputs('a'.repeat(40), '123456'));
  assert.throws(() => validateDeploymentInputs('main', '123456'), /commit SHA is invalid/);
  assert.throws(() => validateDeploymentInputs('a'.repeat(40), 'repo-name'), /repository ID is invalid/);
  assert.equal(normalizeDeploymentUrl('safe-build.vercel.app'), 'https://safe-build.vercel.app');
  assert.throws(() => normalizeDeploymentUrl('example.org'), /unexpected deployment URL/);
});

test('CI keeps dependencies, quality and secret scanning separate from deployment', async () => {
  const ci = await read('../../.github/workflows/ci.yml');

  assert.match(ci, /name: Dependency audit/);
  assert.match(ci, /name: Public website quality/);
  assert.match(ci, /name: Gitleaks/);
  assert.match(ci, /npm audit --audit-level=high/);
  assert.match(ci, /npm run test:smoke/);
  assert.match(ci, /gitleaks git --redact/);
  assert.match(ci, /name: Release gate/);
  assert.doesNotMatch(ci, /gitleaks\/gitleaks-action/);
});

test('production deploys only the exact main revision approved by CI', async () => {
  const [deployment, deploymentClient] = await Promise.all([
    read('../../.github/workflows/deploy-production.yml'),
    read('./deploy-vercel-api.mjs'),
  ]);

  assert.match(deployment, /workflow_run:/);
  assert.match(deployment, /workflow_run\.conclusion == 'success'/);
  assert.match(deployment, /workflow_run\.event == 'push'/);
  assert.match(deployment, /ref: \$\{\{ github\.event\.workflow_run\.head_sha \}\}/);
  assert.match(deployment, /node scripts\/deploy-vercel-api\.mjs/);
  assert.match(deployment, /github\.event\.repository\.id/);
  assert.match(deployment, /npm run test:deployment/);
  assert.doesNotMatch(deployment, /vercel pull|vercel build|vercel deploy/);
  assert.match(deploymentClient, /\/v13\/deployments\?teamId=/);
  assert.match(deploymentClient, /target: 'production'/);
  assert.match(deploymentClient, /sha: commitSha/);
  assert.match(deploymentClient, /repoId: Number\(repositoryId\)/);
  assert.match(deploymentClient, /TERMINAL_FAILURE_STATES/);
  assert.ok(
    deployment.indexOf('Smoke-test the generated deployment URL') <
      deployment.indexOf('Verify the public domain after deployment'),
  );
});

test('Vercel Git auto-deployments stay disabled to avoid bypasses and duplicates', async () => {
  const config = JSON.parse(await read('../vercel.json'));
  assert.equal(config.framework, 'nextjs');
  assert.equal(config.git.deploymentEnabled, false);
});

test('SEO discovery uses the native Next.js routes instead of generated files', async () => {
  const [sitemap, robots, packageJson] = await Promise.all([
    read('../src/app/sitemap.ts'),
    read('../src/app/robots.ts'),
    read('../package.json'),
  ]);

  assert.match(sitemap, /blogPosts\.map/);
  assert.match(robots, /sitemap: `\$\{PUBLIC_SITE_URL\}\/sitemap\.xml`/);
  assert.doesNotMatch(packageJson, /next-sitemap/);
});

test('Dependabot watches npm and pinned GitHub Actions', async () => {
  const dependabot = await read('../../.github/dependabot.yml');
  assert.match(dependabot, /package-ecosystem: npm/);
  assert.match(dependabot, /directory: \/yocontrolo-web/);
  assert.match(dependabot, /package-ecosystem: github-actions/);
  assert.match(dependabot, /directory: \/\n/);
});
