// components/SEO.tsx
import { Metadata } from "next";

interface SEOProps {
  title: string;
  description: string;
  slug: string;
  image?: string;
}

export function generateSEO({ title, description, slug, image }: SEOProps): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://yocontrolo.com/blog/${slug}`,
      siteName: "YoControlo",
      images: [
        {
          url: image || "/images/blog/seo-cover.jpg",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "es_ES",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image || "/images/blog/seo-cover.jpg"],
    },
  };
}
