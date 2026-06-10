import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/data/blog-posts";
import { Calendar, Clock, User, ArrowLeft, Tag, Star, ArrowRight, ExternalLink } from "lucide-react";
import { blogPostSchema, organizationSchema } from "@/lib/schema";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} — JuniperNode`,
    description: post.excerpt,
  };
}

function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    // Heading (## or ###)
    if (trimmed.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-xl md:text-2xl font-bold text-white mt-10 mb-4 tracking-tight">
          {trimmed.replace(/^##\s+/, "")}
        </h2>
      );
      i++;
      continue;
    }
    if (trimmed.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="text-lg font-bold text-white mt-8 mb-3">
          {trimmed.replace(/^###\s+/, "")}
        </h3>
      );
      i++;
      continue;
    }

    // Table
    if (trimmed.startsWith("|")) {
      const tableRows: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        tableRows.push(lines[i].trim());
        i++;
      }
      elements.push(renderTable(tableRows, `table-${i}`));
      continue;
    }

    // Horizontal rule (--- separator)
    if (trimmed === "---") {
      elements.push(<hr key={i} className="border-[#7c3aed]/20 my-8" />);
      i++;
      continue;
    }

    // Empty line (paragraph separator)
    if (trimmed === "") {
      i++;
      continue;
    }

    // Unordered list
    if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      const listItems: string[] = [];
      while (i < lines.length && (lines[i].trim().startsWith("- ") || lines[i].trim().startsWith("* "))) {
        listItems.push(lines[i].trim().replace(/^[-*]\s+/, ""));
        i++;
      }
      elements.push(
        <ul key={i} className="list-disc pl-6 space-y-1.5 text-white/70 mb-6">
          {listItems.map((item, idx) => (
            <li key={idx}>{renderInlineContent(item)}</li>
          ))}
        </ul>
      );
      continue;
    }

    // Regular paragraph
    elements.push(
      <p key={i} className="text-white/70 leading-relaxed mb-5">
        {renderInlineContent(trimmed)}
      </p>
    );
    i++;
  }

  return elements;
}

function renderInlineContent(text: string) {
  // Bold: **text**
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, idx) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={idx} className="font-bold text-white">{part.slice(2, -2)}</strong>;
    }
    // Italic: *text*
    const italicParts = part.split(/(\*[^*]+\*)/g);
    return italicParts.map((ip, iidx) => {
      if (ip.startsWith("*") && ip.endsWith("*") && !ip.startsWith("**")) {
        return <em key={`${idx}-${iidx}`} className="text-white/80">{ip.slice(1, -1)}</em>;
      }
      // Links: [text](url)
      const linkParts = ip.split(/(\[[^\]]+\]\([^)]+\))/g);
      return linkParts.map((lp, liidx) => {
        const linkMatch = lp.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (linkMatch) {
          return (
            <a key={`${idx}-${iidx}-${liidx}`} href={linkMatch[2]} target="_blank" rel="noopener noreferrer" className="text-[#a78bfa] hover:underline">
              {linkMatch[1]}
            </a>
          );
        }
        return lp;
      });
    });
  });
}

function renderTable(rows: string[], key: string) {
  if (rows.length < 2) return null;

  // Parse header
  const headerCells = rows[0].split("|").filter(Boolean).map((c) => c.trim());
  // Check for alignment row (|---|---|---)
  let dataStart = 2;
  if (rows.length > 1 && rows[1].trim().match(/^[\s|:]+$/)) {
    dataStart = 2;
  } else {
    dataStart = 1;
  }

  return (
    <div key={key} className="overflow-x-auto mb-8">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b border-[#7c3aed]/20">
            {headerCells.map((cell, idx) => (
              <th key={idx} className="text-left py-3 px-4 font-bold text-white whitespace-nowrap">
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.slice(dataStart).map((row, rowIdx) => {
            const cells = row.split("|").filter(Boolean).map((c) => c.trim());
            return (
              <tr key={rowIdx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                {cells.map((cell, cellIdx) => (
                  <td key={cellIdx} className="py-2.5 px-4 text-white/70">
                    {cell}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // JSON-LD structured data
  const jsonLd = blogPostSchema(post);

  // Related posts (same category, exclude current)
  const relatedPosts = BLOG_POSTS.filter(
    (p) => p.category === post.category && p.slug !== slug
  ).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="relative pt-32 pb-20 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10">
            {/* Main Content */}
            <article className="min-w-0">
              {/* Back link */}
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-sm text-[#a78bfa] hover:text-[#7c3aed] transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Blog
              </Link>

              {/* Category & Meta */}
              <div className="flex items-center flex-wrap gap-3 mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#a78bfa] bg-[#7c3aed]/10 px-2.5 py-1 rounded-md">
                  {post.category}
                </span>
                <div className="flex items-center gap-2 text-xs text-white/50">
                  <Calendar className="w-3.5 h-3.5" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-white/50">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime} min read
                </div>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
                {post.title}
              </h1>

              {/* Author */}
              <div className="flex items-center gap-3 mb-10 pb-6 border-b border-[#7c3aed]/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#a78bfa] flex items-center justify-center text-white font-bold text-sm">
                  {post.author.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{post.author}</p>
                  <p className="text-xs text-white/50">{post.authorRole} · JuniperNode</p>
                </div>
              </div>

              {/* Content */}
              <div className="prose-custom">
                {renderContent(post.content)}
              </div>

              {/* Tags */}
              <div className="mt-10 pt-6 border-t border-[#7c3aed]/10">
                <div className="flex items-center gap-2 mb-3">
                  <Tag className="w-4 h-4 text-[#a78bfa]" />
                  <span className="text-sm font-semibold text-white">Tags</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs text-white/70 bg-white/5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Table of Contents - simple */}
              <div className="card-liquid rounded-xl p-5">
                <h3 className="text-sm font-bold text-white mb-4">On This Page</h3>
                <div className="space-y-2 text-sm text-white/60">
                  <p>In-depth comparison guide covering features, pricing, and use cases.</p>
                </div>
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="card-liquid rounded-xl p-5">
                  <h3 className="text-sm font-bold text-white mb-4">Related Guides</h3>
                  <div className="space-y-3">
                    {relatedPosts.map((rp) => (
                      <Link
                        key={rp.slug}
                        href={`/blog/${rp.slug}`}
                        className="block group"
                      >
                        <h4 className="text-sm font-bold text-[#a78bfa] group-hover:text-[#7c3aed] transition-colors leading-snug">
                          {rp.title}
                        </h4>
                        <p className="text-xs text-white/50 mt-1">
                          {rp.readTime} min read
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="bg-gradient-to-br from-[#7c3aed]/20 to-[#5b21b6]/20 border border-[#7c3aed]/20 rounded-xl p-5 text-center">
                <div className="w-10 h-10 rounded-full bg-[#7c3aed]/20 flex items-center justify-center mx-auto mb-3">
                  <Star className="w-5 h-5 text-[#a78bfa]" />
                </div>
                <h3 className="text-sm font-bold text-white mb-2">Find the Right Platform</h3>
                <p className="text-xs text-white/60 mb-4">
                  Browse {BLOG_POSTS.length}+ low-code platform reviews
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center gap-1 px-4 py-2 bg-[#7c3aed] hover:bg-[#6d28d9] text-white text-xs font-bold rounded-lg transition-colors"
                >
                  Browse Platforms <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
