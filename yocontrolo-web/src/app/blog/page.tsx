import Link from "next/link";
import Image from "next/image";
import { BookOpen } from "lucide-react";
import { blogPosts } from "@/components/BlogPosts";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Blog</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow hover:shadow-xl transition-all">
              <div className="relative w-full h-56">
                <Image 
                  src={post.image ?? "/images/blog/default-image.png"} 
                  alt={post.title} 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{post.title}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{post.date} · {post.author}</p>
                <p className="text-gray-600 dark:text-gray-300">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
