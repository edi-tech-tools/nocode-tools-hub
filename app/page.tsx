"use client";

import { useState, useMemo } from "react";
import { Search, Star, ArrowRight, BookOpen, Layers, Sparkles, Calendar, TrendingUp, Server, Code2, AppWindow, Bot, Workflow } from "lucide-react";
import Link from "next/link";
import { ALL_TOOLS } from "@/data/tools";
import { BLOG_POSTS } from "@/data/blog-posts";
import { GradientMesh } from "@/components/motion/gradient-mesh";
import { LiquidGlass } from "@/components/motion/liquid-glass";
import { Reveal, StaggerReveal } from "@/components/motion/reveal";
import { Magnetic } from "@/components/motion/magnetic";
import { MotionProvider } from "@/lib/motion";

const CATEGORIES = Array.from(new Set(ALL_TOOLS.map((t) => t.category)));

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredTools = ALL_TOOLS.filter((tool) => {
    const matchesSearch =
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Top-rated picks (top 6 by rating)
  const editorPicks = useMemo(
    () => [...ALL_TOOLS].sort((a, b) => b.rating - a.rating).slice(0, 6),
    []
  );

  // Latest blog posts
  const latestPosts = useMemo(
    () => [...BLOG_POSTS].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3),
    []
  );

  // Category stats
  const categoryStats = useMemo(() => {
    const stats: Record<string, { count: number; avgRating: number }> = {};
    for (const t of ALL_TOOLS) {
      if (!stats[t.category]) stats[t.category] = { count: 0, avgRating: 0 };
      stats[t.category].count++;
      stats[t.category].avgRating += t.rating;
    }
    for (const key of Object.keys(stats)) {
      stats[key].avgRating = Math.round((stats[key].avgRating / stats[key].count) * 10) / 10;
    }
    return Object.entries(stats).slice(0, 8);
  }, []);

  // Trending tools (top 8 by rating)
  const trendingTools = useMemo(
    () => [...ALL_TOOLS].sort((a, b) => b.rating - a.rating).slice(0, 8),
    []
  );

  // Top categories (all, for grid display)
  const topCategories = useMemo(() => {
    const stats: Record<string, { count: number; avgRating: number }> = {};
    for (const t of ALL_TOOLS) {
      if (!stats[t.category]) stats[t.category] = { count: 0, avgRating: 0 };
      stats[t.category].count++;
      stats[t.category].avgRating += t.rating;
    }
    for (const key of Object.keys(stats)) {
      stats[key].avgRating = Math.round((stats[key].avgRating / stats[key].count) * 10) / 10;
    }
    return Object.entries(stats).sort((a, b) => b[1].count - a[1].count);
  }, []);

  // Icon mapping for categories
  function getCategoryIcon(cat: string) {
    const tool = ALL_TOOLS.find(t => t.category === cat);
    return tool?.icon || Layers;
  }

  return (
    <MotionProvider>
      <div className="relative min-h-screen">
        {/* Background */}
        <div className="fixed inset-0 z-0">
          <GradientMesh
            colors={["#7c3aed", "#a78bfa", "#5b21b6"]}
            intensity={0.08}
          />
        </div>

        <div className="relative z-10">
          {/* ========== HERO ========== */}
          <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6">
            <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
              <Reveal>
                {/* Trust Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#7c3aed]/20 mb-8 card-liquid">
                  <span className="w-2 h-2 rounded-full bg-[#7c3aed] pulse-dot" />
                  <span className="text-sm font-medium text-white/80">
                    {ALL_TOOLS.length} Platforms Reviewed
                  </span>
                  <span className="mx-2 text-white/20">|</span>
                  <span className="text-sm font-medium text-[#a78bfa]">
                    {BLOG_POSTS.length} Expert Guides
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white tracking-tight leading-[1.05] mb-6 max-w-3xl">
                  Low-Code & No-Code{" "}
                  <span className="text-gradient" style={{ textShadow: "0 0 40px rgba(124,58,237,0.3)" }}>
                    Platform Reviews
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="text-lg md:text-xl text-white/60 max-w-2xl mb-10 leading-relaxed">
                  JuniperNode compares {ALL_TOOLS.length}+ low-code platforms with real G2 ratings and expert insights.
                  Find the perfect platform for your next project — curated by our team in Porto.
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="w-full max-w-[640px]">
                  <LiquidGlass intensity="heavy" tint="#7c3aed" sheen={false} noise={false} className="w-full rounded-full">
                    <div className="flex items-center relative px-1 py-1">
                      <Search className="ml-5 w-5 h-5 text-white/40 flex-shrink-0" />
                      <input
                        type="search"
                        placeholder="Search platforms, categories, or use cases..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="flex-1 py-3 px-3 bg-transparent text-white placeholder:text-white/30 outline-none text-base"
                      />
                      <Magnetic strength={12}>
                        <Link
                          href={filteredTools.length > 0 ? `/tools/${filteredTools[0].id}` : "/"}
                          className="mr-1 px-6 py-2.5 bg-[#7c3aed] hover:bg-[#6d28d9] text-white text-sm font-semibold rounded-full transition-colors flex-shrink-0"
                        >
                          Search
                        </Link>
                      </Magnetic>
                    </div>
                  </LiquidGlass>
                </div>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="mt-8 flex flex-wrap justify-center gap-2 max-w-2xl">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`px-3.5 py-1.5 rounded-full border text-sm transition-all ${
                      !selectedCategory
                        ? "bg-[#7c3aed] text-white border-[#7c3aed] font-semibold"
                        : "bg-white/5 text-white/70 border-white/10 hover:text-white hover:border-white/20"
                    }`}
                  >
                    All
                  </button>
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                      className={`px-3.5 py-1.5 rounded-full border text-sm transition-all ${
                        selectedCategory === cat
                          ? "bg-[#a78bfa] text-white border-[#a78bfa] font-semibold"
                          : "bg-white/5 text-white/70 border-white/10 hover:text-white hover:border-white/20"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>

          {/* ========== CATEGORY STATS STRIP ========== */}
          <section className="relative pb-10 px-6">
            <div className="max-w-[1200px] mx-auto">
              <Reveal>
                <div className="flex items-center gap-2 mb-6">
                  <Layers className="w-5 h-5 text-[#7c3aed]" />
                  <h2 className="text-lg font-bold text-white">Browse by Category</h2>
                </div>
              </Reveal>
              <StaggerReveal stagger={0.06} delay={0.1}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {categoryStats.map(([cat, stats]) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                      className="card-liquid rounded-xl p-4 text-left group cursor-pointer"
                    >
                      <p className="text-sm font-bold text-white group-hover:text-[#a78bfa] transition-colors">
                        {cat}
                      </p>
                      <div className="flex items-center gap-3 mt-1.5 text-xs text-white/50">
                        <span>{stats.count} platforms</span>
                        <span className="flex items-center gap-1 text-[#a78bfa]">
                          <Star className="w-3 h-3 fill-[#a78bfa]" /> {stats.avgRating}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </StaggerReveal>
            </div>
          </section>

          {/* ========== EDITOR'S PICKS ========== */}
          <section className="relative pb-16 px-6">
            <div className="max-w-[1200px] mx-auto">
              <Reveal>
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#7c3aed]/20 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-[#a78bfa]" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">Editor&apos;s Picks</h2>
                      <p className="text-sm text-white/50">Top-rated low-code platforms our team recommends</p>
                    </div>
                  </div>
                  <Link
                    href="/"
                    className="hidden md:flex items-center gap-1 text-sm text-[#a78bfa] hover:text-[#7c3aed] transition-colors"
                  >
                    View All Platforms <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Reveal>
              <StaggerReveal stagger={0.08} delay={0.15}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {editorPicks.map((tool, idx) => {
                    const Icon = tool.icon;
                    return (
                      <Link href={`/tools/${tool.id}`} key={tool.id} className="block group">
                        <LiquidGlass tint="#7c3aed" intensity="standard" glow className="rounded-xl p-6 h-full">
                          <div className="flex items-start gap-4 mb-4">
                            <div className="relative">
                              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Icon className="w-6 h-6 text-[#a78bfa]" />
                              </div>
                              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#7c3aed] flex items-center justify-center text-[10px] font-bold text-white">
                                #{idx + 1}
                              </div>
                            </div>
                            <div className="min-w-0 flex-1">
                              <h3 className="font-bold text-white group-hover:text-[#a78bfa] transition-colors truncate">
                                {tool.name}
                              </h3>
                              <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-[#a78bfa] bg-white/10 px-2 py-0.5 rounded mt-1">
                                {tool.category}
                              </span>
                            </div>
                            <div className="flex items-center gap-1 bg-white/10 px-2 py-1 rounded-md shrink-0">
                              <Star className="w-3.5 h-3.5 text-[#a78bfa] fill-[#a78bfa]" />
                              <span className="text-xs font-bold text-white">{tool.rating}</span>
                            </div>
                          </div>
                          <p className="text-sm text-white/60 leading-relaxed line-clamp-2">
                            {tool.description}
                          </p>
                          <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/10 text-xs text-white/40">
                            <span>★ Best for: {tool.useCase.split(".")[0]}</span>
                          </div>
                        </LiquidGlass>
                      </Link>
                    );
                  })}
                </div>
              </StaggerReveal>
              <Reveal delay={0.2}>
                <div className="mt-6 text-center md:hidden">
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-sm text-[#a78bfa] hover:text-[#7c3aed] transition-colors"
                  >
                    View All Platforms <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </section>

          {/* ========== TOOLS GRID ========== */}
          <section className="relative pb-20 px-6" id="all-tools">
            <div className="max-w-[1200px] mx-auto">
              <Reveal>
                <div className="flex items-center justify-between mb-10">
                  <div>
                    <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight">
                      {selectedCategory ? `${selectedCategory} Platforms` : "All Low-Code Platforms"}
                    </h2>
                    <p className="text-white/50 mt-1 text-base">
                      {filteredTools.length} platform{filteredTools.length !== 1 ? "s" : ""} found
                    </p>
                  </div>
                </div>
              </Reveal>

              {filteredTools.length > 0 ? (
                <StaggerReveal stagger={0.05} delay={0.1}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredTools.map((tool) => {
                      const Icon = tool.icon;
                      return (
                        <Link href={`/tools/${tool.id}`} key={tool.id} className="block group">
                          <LiquidGlass tint="#7c3aed" intensity="standard" glow className="rounded-xl p-6 h-full">
                            <div className="flex items-start justify-between mb-4">
                              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                <Icon className="w-6 h-6 text-[#a78bfa]" />
                              </div>
                              <div className="flex items-center gap-1 bg-white/10 px-2 py-1 rounded-md">
                                <Star className="w-4 h-4 text-[#a78bfa] fill-[#a78bfa]" />
                                <span className="text-sm font-semibold text-white">{tool.rating}</span>
                              </div>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#a78bfa] transition-colors">
                              {tool.name}
                            </h3>
                            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#a78bfa] bg-white/10 px-2.5 py-1 rounded-md mb-3">
                              {tool.category}
                            </span>
                            <p className="text-sm text-white/60 mb-6 leading-relaxed flex-grow">
                              {tool.description}
                            </p>
                            <div className="flex items-center justify-between pt-4 border-t border-white/10">
                              <span className="text-sm text-[#a78bfa] font-semibold group-hover:text-[#7c3aed] transition-colors flex items-center">
                                View Details <ArrowRight className="ml-1.5 w-4 h-4" />
                              </span>
                            </div>
                          </LiquidGlass>
                        </Link>
                      );
                    })}
                  </div>
                </StaggerReveal>
              ) : (
                <Reveal>
                  <div className="text-center py-20">
                    <p className="text-lg text-white/50">No platforms found matching your search.</p>
                    <button
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedCategory(null);
                      }}
                      className="mt-4 px-5 py-2 text-sm font-medium text-white bg-[#7c3aed] rounded-lg hover:bg-[#6d28d9] transition-colors"
                    >
                      Clear Filters
                    </button>
                  </div>
                </Reveal>
              )}
            </div>
          </section>

          {/* ========== LATEST FROM BLOG ========== */}
          <section className="relative pb-20 px-6">
            <div className="max-w-[1200px] mx-auto">
              <Reveal>
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-[#a78bfa]" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">Latest Expert Guides</h2>
                      <p className="text-sm text-white/50">In-depth comparisons by the JuniperNode team</p>
                    </div>
                  </div>
                  <Link
                    href="/blog"
                    className="hidden md:flex items-center gap-1 text-sm text-[#a78bfa] hover:text-[#7c3aed] transition-colors"
                  >
                    View All Posts <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Reveal>
              <StaggerReveal stagger={0.08} delay={0.15}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {latestPosts.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                      <LiquidGlass tint="#7c3aed" intensity="standard" glow className="rounded-xl p-6 h-full">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-semibold uppercase tracking-wider text-[#a78bfa] bg-white/10 px-2.5 py-1 rounded-md">
                            {post.category}
                          </span>
                          <span className="text-xs text-white/50">{post.readTime} min read</span>
                        </div>
                        <h3 className="font-bold text-white mb-3 group-hover:text-[#a78bfa] transition-colors leading-snug line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-sm text-white/60 leading-relaxed flex-grow line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/10 text-xs text-white/40">
                          <Calendar className="w-3.5 h-3.5" />
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                          <span className="mx-1">·</span>
                          {post.author}
                        </div>
                      </LiquidGlass>
                    </Link>
                  ))}
                </div>
              </StaggerReveal>
              <Reveal delay={0.2}>
                <div className="mt-6 text-center md:hidden">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-sm text-[#a78bfa] hover:text-[#7c3aed] transition-colors"
                  >
                    View All Posts <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </section>

          {/* ========== TRENDING TOOLS ========== */}
          <section className="relative pb-16 px-6">
            <div className="max-w-[1200px] mx-auto">
              <Reveal>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7c3aed]/20 to-[#a78bfa]/20 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-[#a78bfa]" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Trending Platforms</h2>
                    <p className="text-sm text-white/50">Highest-rated low-code platforms this month</p>
                  </div>
                </div>
              </Reveal>
              <StaggerReveal stagger={0.05} delay={0.1}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {trendingTools.map((tool) => {
                    const Icon = tool.icon;
                    return (
                      <Link href={`/tools/${tool.id}`} key={tool.id} className="block group">
                        <LiquidGlass tint="#a78bfa" intensity="subtle" glow className="rounded-xl p-4">
                          <div className="flex items-center justify-between mb-3">
                            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                              <Icon className="w-5 h-5 text-[#a78bfa]" />
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="w-3.5 h-3.5 text-[#a78bfa] fill-[#a78bfa]" />
                              <span className="text-xs font-bold text-white">{tool.rating}</span>
                            </div>
                          </div>
                          <h3 className="text-sm font-bold text-white group-hover:text-[#a78bfa] transition-colors truncate mb-1">
                            {tool.name}
                          </h3>
                          <p className="text-xs text-white/50 truncate">{tool.category}</p>
                        </LiquidGlass>
                      </Link>
                    );
                  })}
                </div>
              </StaggerReveal>
            </div>
          </section>

          {/* ========== POPULAR CATEGORIES ========== */}
          <section className="relative pb-16 px-6">
            <div className="max-w-[1200px] mx-auto">
              <Reveal>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <Layers className="w-5 h-5 text-[#a78bfa]" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Popular Categories</h2>
                    <p className="text-sm text-white/50">Browse platforms by category</p>
                  </div>
                </div>
              </Reveal>
              <StaggerReveal stagger={0.04} delay={0.1}>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {topCategories.map(([cat, stats]) => {
                    const CatIcon = getCategoryIcon(cat);
                    return (
                      <Link
                        key={cat}
                        href={`/category/${cat.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block group"
                      >
                        <LiquidGlass tint="#7c3aed" intensity="subtle" className="rounded-xl p-4 text-center">
                          <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                            <CatIcon className="w-5 h-5 text-[#a78bfa]" />
                          </div>
                          <p className="text-sm font-bold text-white group-hover:text-[#a78bfa] transition-colors">
                            {cat}
                          </p>
                          <div className="flex items-center justify-center gap-2 mt-1 text-xs text-white/50">
                            <span>{stats.count} platforms</span>
                            <span className="flex items-center gap-0.5 text-[#a78bfa]">
                              <Star className="w-3 h-3 fill-[#a78bfa]" /> {stats.avgRating}
                            </span>
                          </div>
                        </LiquidGlass>
                      </Link>
                    );
                  })}
                </div>
              </StaggerReveal>
            </div>
          </section>

          {/* ========== TRUST SIGNALS (stats strip) ========== */}
          <section className="relative pb-20 px-6">
            <div className="max-w-[1200px] mx-auto">
              <Reveal>
                <LiquidGlass tint="#7c3aed" intensity="heavy" glow className="rounded-2xl p-8 md:p-10">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                      <p className="text-3xl md:text-4xl font-extrabold text-white">{ALL_TOOLS.length}</p>
                      <p className="text-sm text-white/50 mt-1">Platforms Reviewed</p>
                    </div>
                    <div>
                      <p className="text-3xl md:text-4xl font-extrabold text-white">{BLOG_POSTS.length}</p>
                      <p className="text-sm text-white/50 mt-1">Expert Guides</p>
                    </div>
                    <div>
                      <p className="text-3xl md:text-4xl font-extrabold text-white">
                        {CATEGORIES.length}
                      </p>
                      <p className="text-sm text-white/50 mt-1">Categories</p>
                    </div>
                    <div>
                      <p className="text-3xl md:text-4xl font-extrabold text-white">3+</p>
                      <p className="text-sm text-white/50 mt-1">Team Members</p>
                    </div>
                  </div>
                </LiquidGlass>
              </Reveal>
            </div>
          </section>
        </div>
      </div>
    </MotionProvider>
  );
}
