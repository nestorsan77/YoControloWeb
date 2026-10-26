import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import { balanceGuide } from '../src/app/content/balance-guide.ts';

function luminance(hex) {
  const channels = hex.match(/[a-f\d]{2}/gi).map(value => {
    const channel = parseInt(value, 16) / 255;
    return channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
  });
  return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
}

test('text tokens meet 4.5:1 on every matching theme surface', async () => {
  const css = await readFile(new URL('../src/app/globals.css', import.meta.url), 'utf8');
  for (const selector of [':root', 'html.dark']) {
    const body = css.slice(css.indexOf(`${selector} {`)).split('}')[0];
    const token = name => body.match(new RegExp(`--yc-${name}: (#[a-f\\d]{6})`, 'i'))?.[1];
    for (const foreground of ['mint-dark', 'muted']) {
      for (const background of ['paper', 'surface', 'cream', 'mint-soft', 'gold-soft', 'coral-soft']) {
        const a = luminance(token(foreground));
        const b = luminance(token(background));
        const ratio = (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
        assert.ok(ratio >= 4.5, `${selector}: ${foreground} on ${background} is ${ratio.toFixed(2)}:1`);
      }
    }
  }
});

test('the statement guide has bilingual, substantive content and a local cover', async () => {
  assert.equal(balanceGuide.publishedAt, '2026-10-26T00:00:00.000Z');
  for (const content of [balanceGuide.content, balanceGuide.contentEn]) {
    assert.ok(content.split(/\s+/).length > 600);
    assert.match(content, /<caption>/);
    assert.match(content, /scope="col"/);
    assert.match(content, /settings\/integraciones/);
    assert.match(content, /ahorrar-objetivos-practica/);
  }
  assert.ok(balanceGuide.imageAlt && balanceGuide.imageAltEn);
  await readFile(new URL(`../public${balanceGuide.image}`, import.meta.url));
});
