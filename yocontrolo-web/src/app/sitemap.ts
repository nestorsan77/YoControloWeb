import { pageAlternates } from './seo';
import type { MetadataRoute } from 'next';
import { blogPosts } from './components/BlogPosts';
import { PUBLIC_SITE_URL } from './site';

const lastModified = new Date('2026-10-06T00:00:00.000Z');

const pages: MetadataRoute.Sitemap = [
  ...['control-de-gastos', 'gastos-compartidos', 'pagos-recurrentes'].map(path => ({ url: `${PUBLIC_SITE_URL}/${path}`, lastModified })),
  { url: PUBLIC_SITE_URL, lastModified, changeFrequency: 'weekly', priority: 1 },
  { url: `${PUBLIC_SITE_URL}/gestion-finanzas-personales`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
  { url: `${PUBLIC_SITE_URL}/precios`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${PUBLIC_SITE_URL}/sobre-nosotros`, lastModified, changeFrequency: 'yearly', priority: 0.6 },
  { url: `${PUBLIC_SITE_URL}/blog`, lastModified: new Date('2026-09-28T00:00:00.000Z'), changeFrequency: 'weekly', priority: 0.8 },
  { url: `${PUBLIC_SITE_URL}/contacto`, lastModified, changeFrequency: 'yearly', priority: 0.6 },
  { url: `${PUBLIC_SITE_URL}/privacy`, lastModified, changeFrequency: 'yearly', priority: 0.4 },
  { url: `${PUBLIC_SITE_URL}/terms`, lastModified, changeFrequency: 'yearly', priority: 0.4 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const originals: MetadataRoute.Sitemap = [
    ...pages,
    ...blogPosts.map((post) => ({
      url: `${PUBLIC_SITE_URL}/blog/${post.slug}`,
      lastModified: post.publishedAt ? new Date(post.publishedAt) : lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
  return originals.flatMap((entry) => {
    const path = new URL(entry.url).pathname;
    return (['es', 'en'] as const).map((locale) => {
      const alternates = pageAlternates(path, locale);
      return { ...entry, url: alternates.canonical, alternates: { languages: alternates.languages } };
    });
  });
}
