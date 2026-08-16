import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, Tag } from 'lucide-react';
import { blogPosts } from '@/app/components/BlogPosts';
import { getLocale } from '@/app/i18n.server';

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const locale = await getLocale();
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  return post ? { title: locale === 'en' ? post.titleEn || post.title : post.title, description: locale === 'en' ? post.excerptEn || post.excerpt : post.excerpt } : {};
}

export default async function BlogArticle({ params }: Props) {
  const { slug } = await params;
  const locale = await getLocale();
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();
  const title = locale === 'en' ? post.titleEn || post.title : post.title;
  const excerpt = locale === 'en' ? post.excerptEn || post.excerpt : post.excerpt;
  const content = locale === 'en' ? post.contentEn || post.content : post.content;
  return <article className="yc-article">
    <header className="yc-article-header"><Link href="/blog"><ArrowLeft/>{locale === 'es' ? 'Volver al blog' : 'Back to blog'}</Link><span className="yc-eyebrow">{locale === 'es' ? 'Guía YoControlo' : 'YoControlo guide'}</span><h1>{title}</h1><p>{excerpt}</p><div><span>{locale === 'en' ? post.dateEn || post.date : post.date}</span><span><Clock/>{post.readTime || '5 min'}</span></div></header>
    {post.image && <div className="yc-article-image"><Image src={post.image} alt="" fill priority sizes="(max-width: 1000px) 100vw, 1000px"/></div>}
    {post.tags && <div className="yc-article-tags">{post.tags.map((tag) => <span key={tag}><Tag/>{tag}</span>)}</div>}
    <div className="yc-article-content" dangerouslySetInnerHTML={{ __html: content || '' }}/>
  </article>;
}
