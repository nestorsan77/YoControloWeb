import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';
import { blogPosts } from '../components/BlogPosts';
import PageHero from '../components/PageHero';
import '../components/spending-guide.css';
import { getLocale } from '../i18n.server';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return locale === 'es' ? { title: 'Blog', alternates: { canonical: '/blog' }, description: 'Ideas prácticas para entender tus gastos, organizar varias cuentas y tomar decisiones financieras con calma.' } : { title: 'Blog', alternates: { canonical: '/blog' }, description: 'Practical ideas for understanding spending, organising several accounts and making calmer financial decisions.' };
}

export default async function BlogPage() {
  const locale = await getLocale();
  const copy = locale === 'es' ? ['Ideas para tu dinero','Menos trucos. Más hábitos que puedas mantener.','Guías sencillas para construir una visión financiera útil sin depender de que un banco te explique únicamente su parte.','Guía práctica','Leer artículo'] : ['Ideas for your money','Fewer tricks. More habits you can maintain.','Simple guides for building a useful financial view without relying on one bank to explain only its part.','Practical guide','Read article'];
  return <div className="yc-page">
    <PageHero eyebrow={copy[0]} icon={BookOpen} title={copy[1]} description={copy[2]} />
    <div className="yc-page-body"><div className="yc-blog-grid">{blogPosts.map((post, index) => {
      const title = locale === 'en' ? post.titleEn || post.title : post.title;
      const excerpt = locale === 'en' ? post.excerptEn || post.excerpt : post.excerpt;
      return <Link key={post.slug} href={`/blog/${post.slug}`} className={`yc-blog-card ${index === 0 ? 'is-featured' : ''}`}>
        {post.image && <div className="yc-blog-image"><Image src={post.image} alt="" fill sizes={index === 0 ? '(max-width: 800px) 100vw, 66vw' : '(max-width: 800px) 100vw, 33vw'} /></div>}
        <div><span className="yc-eyebrow">{copy[3]}</span><h2>{title}</h2><p>{excerpt}</p><footer><span><Clock/>{post.readTime || '5 min'}</span><strong>{copy[4]} <ArrowRight/></strong></footer></div>
      </Link>;
    })}</div></div>
  </div>;
}
