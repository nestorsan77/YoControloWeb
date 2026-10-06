import assert from 'node:assert/strict';
import { mkdtemp, mkdir, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { createRequire } from 'node:module';
import { test } from 'node:test';
import { ESLint } from 'eslint';

const require = createRequire(import.meta.url);
const { getRootDirs } = require('@next/eslint-plugin-next/dist/utils/get-root-dirs.js');

test('Next lint still resolves project roots with the safe glob dependency', async () => {
  const root = await mkdtemp(path.join(tmpdir(), 'yocontrolo-lint-roots-'));
  const app = path.join(root, 'apps', 'web');
  const shared = path.join(root, 'packages', 'shared');
  try {
    await Promise.all([mkdir(app, { recursive: true }), mkdir(shared, { recursive: true })]);
    await writeFile(path.join(root, 'apps', 'README.md'), 'not a directory');
    const resolve = (rootDir) => getRootDirs({ cwd: root, settings: { next: { rootDir } } }).map(dir => path.resolve(dir)).sort();

    assert.deepEqual(getRootDirs({ cwd: root, settings: {} }), [root]);
    assert.deepEqual(resolve(app), [app]);
    assert.deepEqual(resolve(`${root}/{apps,packages}/*`), [app, shared].sort());
    assert.deepEqual(resolve([`${root}/apps/*`, `${root}/packages/*`]), [app, shared].sort());
    assert.deepEqual(resolve(`${root}/missing/*`), []);
    assert.deepEqual(resolve(`${root}/apps/*.md`), [], 'Only directories can be Next project roots');

    // Exercise the actual Next rule, not just discovery: replacing the glob
    // implementation must still flag a raw anchor pointing to an internal page.
    await mkdir(path.join(app, 'pages'));
    await writeFile(path.join(app, 'pages', 'dashboard.js'), 'export default function Page() { return null; }');
    const eslint = new ESLint({
      overrideConfigFile: true,
      overrideConfig: [{
        files: ['**/*.jsx'],
        languageOptions: { parserOptions: { ecmaVersion: 'latest', sourceType: 'module', ecmaFeatures: { jsx: true } } },
        plugins: { '@next/next': require('@next/eslint-plugin-next') },
        settings: { next: { rootDir: `${root}/apps/*` } },
        rules: { '@next/next/no-html-link-for-pages': 'error' },
      }],
    });
    const [result] = await eslint.lintText('export default function Page() { return <a href="/dashboard">Dashboard</a>; }', { filePath: 'glob-compatibility.jsx' });
    assert.ok(result.messages.some(message => message.ruleId === '@next/next/no-html-link-for-pages' && message.severity === 2), 'Next internal-link validation stopped working');
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});
