import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, Tag } from 'lucide-react';
import { blogPosts } from '@/app/components/BlogPosts';
import SpendingGuide from '@/app/components/SpendingGuide';
import { getLocale } from '@/app/i18n.server';
import { PUBLIC_SITE_URL } from '@/app/site';

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await getLocale();
  const { slug } = await params;
  const post = blogPosts.find(item => item.slug === slug);
  if (!post) return {};
  const en = locale === 'en';
  const title = en ? post.seoTitleEn || post.titleEn || post.title : post.seoTitle || post.title;
  const description = en ? post.excerptEn || post.excerpt : post.excerpt;
  const url = `${PUBLIC_SITE_URL}/blog/${post.slug}`;
  const images = post.image ? [{ url: post.image, alt: en ? post.imageAltEn || post.imageAlt || post.title : post.imageAlt || post.title }] : undefined;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title, description, url, type: 'article', siteName: 'YoControlo',
      locale: en ? 'en_GB' : 'es_ES', publishedTime: post.publishedAt,
      authors: [`${PUBLIC_SITE_URL}/sobre-nosotros`], images,
    },
    twitter: { card: post.image ? 'summary_large_image' : 'summary', title, description, images },
  };
}

export default async function BlogArticle({ params }: Props) {
  const { slug } = await params;
  const locale = await getLocale();
  const post = blogPosts.find(item => item.slug === slug);
  if (!post) notFound();
  const title = locale === 'en' ? post.titleEn || post.title : post.title;
  const excerpt = locale === 'en' ? post.excerptEn || post.excerpt : post.excerpt;
  const content = locale === 'en' ? post.contentEn || post.content : post.content;
  const url = `${PUBLIC_SITE_URL}/blog/${post.slug}`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting', '@id': `${url}#article`, mainEntityOfPage: url,
        headline: title, description: excerpt, inLanguage: locale,
        ...(post.publishedAt ? { datePublished: post.publishedAt } : {}),
        ...(post.image ? { image: [new URL(post.image, PUBLIC_SITE_URL).href] } : {}),
        author: { '@type': 'Organization', name: post.author || 'YoControlo', url: `${PUBLIC_SITE_URL}/sobre-nosotros` },
        publisher: { '@type': 'Organization', name: 'YoControlo', url: PUBLIC_SITE_URL },
      },
      {
        '@type': 'BreadcrumbList', itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'YoControlo', item: PUBLIC_SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${PUBLIC_SITE_URL}/blog` },
          { '@type': 'ListItem', position: 3, name: title, item: url },
        ],
      },
    ],
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}/>
    {post.layout === 'spending-guide' ? <SpendingGuide locale={locale}/> : <article className="yc-article">
      <header className="yc-article-header"><Link href="/blog"><ArrowLeft/>{locale === 'es' ? 'Volver al blog' : 'Back to blog'}</Link><span className="yc-eyebrow">{locale === 'es' ? 'Guía YoControlo' : 'YoControlo guide'}</span><h1>{title}</h1><p>{excerpt}</p><div><span>{locale === 'en' ? post.dateEn || post.date : post.date}</span><span><Clock/>{post.readTime || '5 min'}</span></div></header>
      {post.image && <div className="yc-article-image"><Image src={post.image} alt={locale === 'en' ? post.imageAltEn || post.imageAlt || '' : post.imageAlt || ''} fill priority sizes="(max-width: 1000px) 100vw, 1000px"/></div>}
      {post.tags && <div className="yc-article-tags">{post.tags.map(tag => <span key={tag}><Tag/>{tag}</span>)}</div>}
      <div className="yc-article-content" dangerouslySetInnerHTML={{ __html: content || '' }}/>
    </article>}
  </>;
}
