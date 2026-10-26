import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';

const articlePath = '/blog/cuadrar-saldo-importar-extracto-bancario';

async function expectAccessible(page: Page, selector?: string) {
  let scan = new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']);
  if (selector) scan = scan.include(selector);
  const { violations } = await scan.analyze();
  expect(violations.map(({ id, nodes }) => ({ id, nodes: nodes.map(node => ({ target: node.target, summary: node.failureSummary })) }))).toEqual([]);
}

for (const theme of ['light', 'dark'] as const) {
  test.describe(theme, () => {
    test.use({ colorScheme: theme, reducedMotion: 'reduce' });

    test('cookie choices and homepage meet WCAG AA, including reported contrast failures', async ({ page }) => {
      await page.goto('/');
      await expect(page.getByRole('dialog')).toBeVisible();
      await expectAccessible(page, '.yc-cookie-panel');
      await page.getByRole('button', { name: 'Personalizar', exact: true }).click();
      await expectAccessible(page, '.yc-cookie-panel');
      await page.getByRole('button', { name: 'Solo necesarias', exact: true }).click();
      await expect(page.getByRole('dialog')).toHaveCount(0);
      await expectAccessible(page);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    });

    for (const path of ['/gestion-finanzas-personales', '/precios', '/blog', articlePath, `/en${articlePath}`, '/blog/ahorrar-objetivos-practica', '/blog/controlar-gastos-sin-banco', '/privacy', '/en/terms']) {
      test(`accessible content: ${path}`, async ({ page }) => {
        await page.goto(path);
        await page.getByRole('dialog').getByRole('button', { name: /^(Solo necesarias|Essential only)$/ }).click();
        await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1);
        await expectAccessible(page);
      });
    }
  });
}

test('analytics is opt-in, tracks navigation once and stops on withdrawal', async ({ page }) => {
  const googleRequests: string[] = [];
  await page.route(/https:\/\/[^/]*(google-analytics|googletagmanager)\.com\//, async route => {
    googleRequests.push(route.request().url());
    await route.fulfill({ contentType: 'text/javascript', body: '/* Offline GA test double: never sends visitor data. */' });
  });
  await page.goto('/?private=do-not-send#private-fragment');
  await expect(page.getByRole('dialog')).toBeVisible();
  expect(googleRequests).toEqual([]);
  await page.getByRole('button', { name: 'Solo necesarias', exact: true }).click();
  await page.reload();
  await expect(page.getByRole('button', { name: /cookies/i })).toBeVisible();
  expect(googleRequests).toEqual([]);
  await page.getByRole('button', { name: /cookies/i }).click();
  await page.locator('.yc-cookie-options label').filter({ hasText: 'Analítica' }).click();
  await page.getByRole('button', { name: 'Guardar cambios', exact: true }).click();
  await expect.poll(() => page.evaluate(() => (window.dataLayer ?? []).filter((item: unknown) => (item as string[])[1] === 'page_view').length)).toBe(1);
  expect(googleRequests.filter(url => url.includes('/gtag/js?id=G-'))).toHaveLength(1);
  // Use a real Next.js client navigation, not a full reload.
  await page.locator('.yc-footer-links').getByRole('link', { name: 'Blog', exact: true }).click();
  await expect(page).toHaveURL(/\/blog$/);
  await expect.poll(() => page.evaluate(() => (window.dataLayer ?? []).filter((item: unknown) => (item as string[])[1] === 'page_view').length)).toBe(2);
  const events = await page.evaluate(() => JSON.stringify(window.dataLayer));
  expect(events).not.toContain('do-not-send');
  expect(events).not.toContain('private-fragment');
  await page.context().addCookies([{ name: '_ga', value: 'test-cookie', url: 'http://127.0.0.1:3108' }]);
  await page.getByRole('button', { name: /cookies/i }).click();
  await page.locator('.yc-cookie-options label').filter({ hasText: 'Analítica' }).click();
  await page.getByRole('button', { name: 'Guardar cambios', exact: true }).click();
  await expect.poll(async () => (await page.context().cookies()).filter(cookie => /^_ga(?:_|$)/.test(cookie.name)).length).toBe(0);
  const before = await page.evaluate(() => (window.dataLayer ?? []).filter((item: unknown) => (item as string[])[0] === 'event').length);
  await page.locator('.yc-footer-links a[href="/gestion-finanzas-personales"]').click();
  await expect(page).toHaveURL(/\/gestion-finanzas-personales$/);
  expect(await page.evaluate(() => (window.dataLayer ?? []).filter((item: unknown) => (item as string[])[0] === 'event').length)).toBe(before);
  await page.getByRole('button', { name: /cookies/i }).click();
  await page.locator('.yc-cookie-options label').filter({ hasText: 'Analítica' }).click();
  await page.getByRole('button', { name: 'Guardar cambios', exact: true }).click();
  await expect.poll(() => page.evaluate(() => (window.dataLayer ?? []).filter((item: unknown) => (item as string[])[1] === 'page_view').length)).toBe(3);
  expect(googleRequests.filter(url => url.includes('/gtag/js?id=G-'))).toHaveLength(1);
});
