import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blog-posts";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — JuniperNode",
  description:
    "Expert insights, comparisons, and strategies for choosing and using low-code and no-code platforms. Stay informed with the latest in low-code development.",
};

const CATEGORIES = Array.from(new Set(BLOG_POSTS.map((post) => post.category)));

export default function BlogPage() {
  // Sort by date, newest first
  const sortedPosts = [...BLOG_POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="relative pt-32 pb-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Hero */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#a78bfa] bg-[#7c3aed]/10 px-3 py-1.5 rounded-md mb-4">
            Blog
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
            JuniperNode{" "}
            <span className="text-gradient">Guides</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            In-depth guides and comparisons of low-code and no-code platforms. Expert reviews from our team in Porto.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {["All", ...CATEGORIES].map((cat) => (
            <a
              key={cat}
              href={cat === "All" ? "/blog" : `/blog?category=${cat}`}
              className="px-3.5 py-1.5 rounded-full border border-[#7c3aed]/20 card-liquid text-sm text-white/70 hover:text-white hover:border-[#a78bfa]/40 transition-colors"
            >
              {cat}
            </a>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group"
            >
              <article className="card-liquid rounded-xl p-6 h-full flex flex-col">
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#a78bfa] bg-white/10 px-2.5 py-1 rounded-md">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-white/50">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime} min read
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-lg font-bold text-white mb-3 group-hover:text-[#a78bfa] transition-colors leading-snug">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-sm text-white/60 mb-4 leading-relaxed flex-grow line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] text-white/40 bg-white/5 px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Meta */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 text-xs text-white/40">
                    <User className="w-3.5 h-3.5" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-white/40">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
