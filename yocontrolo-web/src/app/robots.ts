import type { MetadataRoute } from 'next';
import { PUBLIC_SITE_URL } from './site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    host: PUBLIC_SITE_URL,
    sitemap: `${PUBLIC_SITE_URL}/sitemap.xml`,
  };
}
