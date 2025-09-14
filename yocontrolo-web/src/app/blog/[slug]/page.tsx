import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Tag } from "lucide-react";
import { blogPosts, BlogPost } from "@/app/components/BlogPosts";
import { generateSEO } from "@/app/components/SEO";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};

  return generateSEO({
    title: `${post.title} | YoControlo`,
    description: post.excerpt,
    slug: post.slug,
    image: post.image,
  });
}

interface BlogSlugPageProps {
  params: { slug: string };
}

export default function BlogSlugPage({ params }: BlogSlugPageProps) {
  const post: BlogPost | undefined = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 px-4 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Volver */}
        <Link
          href="/blog"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 mb-6"
        >
          <ArrowRight className="w-4 h-4 rotate-180 mr-2" /> Volver al Blog
        </Link>

        {/* Título */}
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          {post.title}
        </h1>

        {/* Meta info */}
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          {post.date} · {post.author || "Equipo YoControlo"}
          {post.readTime && ` · ${post.readTime}`}
        </p>

        {/* Imagen destacada */}
        {post.image && (
          <div className="relative w-full h-80 mb-6 rounded-2xl overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Etiquetas */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
              >
                <Tag className="w-3 h-3 mr-1" /> {tag}
              </span>
            ))}
          </div>
        )}

        {/* Contenido */}
        <div
          className="prose dark:prose-invert max-w-full"
          dangerouslySetInnerHTML={{ __html: post.content || "" }}
        ></div>
      </div>
    </div>
  );
}
