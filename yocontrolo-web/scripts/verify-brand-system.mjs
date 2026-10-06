import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8');

test('the public website ships the complete Gato Custodio brand set', async () => {
  const assets = await Promise.all([
    read('public/brand/gato-custodio-app.svg'),
    read('public/brand/gato-custodio-mark.svg'),
    read('public/brand/gato-custodio-ring.svg'),
  ]);

  for (const asset of assets) {
    assert.match(asset, /#17212B/i);
    assert.match(asset, /#58C6A5/i);
  }
});

test('the exact brand palette and both color schemes remain defined', async () => {
  const css = await read('src/app/globals.css');

  for (const color of ['#17212b', '#58c6a5', '#f2b84b', '#ef786a', '#f7f3ea']) {
    assert.ok(css.toLowerCase().includes(color), `Missing brand color ${color}`);
  }

  assert.match(css, /html\.dark/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /@media \(max-width: 720px\)/);
});

test('navigation exposes the complete public information architecture', async () => {
  const [nav, messages] = await Promise.all([
    read('src/app/components/NavMenu.tsx'),
    read('src/app/i18n.ts'),
  ]);

  for (const route of ['/', '/gestion-finanzas-personales', '/precios', '/sobre-nosotros', '/blog', '/contacto']) {
    assert.ok(nav.includes(`href: '${route}'`), `Missing public route ${route}`);
  }

  assert.match(nav, /yc-button yc-button-secondary yc-nav-login/);
  assert.match(nav, /yc-language-switch/);
  assert.match(nav, /aria-haspopup="menu"/);
  assert.match(nav, /role="menuitemradio"/);
  assert.match(nav, /aria-checked=\{selected\}/);
  assert.match(nav, /setLanguageOpen\(false\)/);
  assert.match(messages, /Activar modo claro/);
  assert.match(messages, /Switch to dark mode/);
  assert.match(messages, /Seleccionar idioma/);
  assert.match(messages, /Choose language/);
});

test('languages have stable URLs independent of cookies and browser headers', async () => {
  const [i18n, proxy, layout] = await Promise.all([
    read('src/app/i18n.ts'),
    read('src/proxy.ts'),
    read('src/app/[locale]/layout.tsx'),
  ]);

  assert.match(i18n, /baseLanguage === 'es'/);
  assert.match(i18n, /baseLanguage === 'en'/);
  assert.match(i18n, /return 'en'/);
  assert.match(proxy, /path === '\/en'/);
  assert.doesNotMatch(proxy, /accept-language|cookies\.get/);
  assert.match(layout, /<html lang=\{locale\}/);
});

test('marketing copy reflects the current client-server product', async () => {
  const [home, product, privacy, terms] = await Promise.all([
    read('src/app/LayoutClient.tsx'),
    read('src/app/[locale]/gestion-finanzas-personales/page.tsx'),
    read('src/app/[locale]/privacy/page.tsx'),
    read('src/app/[locale]/terms/page.tsx'),
  ]);
  const copy = [home, product, privacy, terms].join('\n').toLowerCase();

  assert.match(copy, /sincron/);
  assert.match(copy, /grupos/);
  assert.match(copy, /no se conecta a tus bancos/);
  assert.doesNotMatch(copy, /100% local/);
  assert.doesNotMatch(copy, /sin servidores/);
  assert.doesNotMatch(copy, /solo en tu dispositivo/);
});

test('the centralised accounts article explains Apple Wallet automation accurately in both languages', async () => {
  const [posts, smokeChecks] = await Promise.all([
    read('src/app/components/BlogPosts.ts'),
    read('scripts/site-checks.mjs'),
  ]);

  assert.match(posts, /slug: 'cuentas-y-tarjetas-en-un-solo-lugar'/);
  assert.match(posts, /contentEn:/);
  assert.match(posts, /sin apuntarlos a mano/);
  assert.match(posts, /para cada cuenta/);
  assert.match(posts, /hora de recepción/);
  assert.match(posts, /app\.yocontrolo\.net\/settings\/integraciones/);
  assert.match(smokeChecks, /blog\/cuentas-y-tarjetas-en-un-solo-lugar/);
});

test('analytics remains behind explicit consent', async () => {
  const [layout, analytics] = await Promise.all([
    read('src/app/[locale]/layout.tsx'),
    read('src/app/components/Analytics.tsx'),
  ]);

  assert.match(layout, /<Analytics/);
  assert.match(analytics, /preferences\?\.analytics/);
  assert.match(analytics, /useCookieConsent/);
  assert.match(analytics, /ga-disable-/);
});
