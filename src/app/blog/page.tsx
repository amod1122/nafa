"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BookOpen, Calendar, Clock, ArrowRight, Sparkles, ChevronRight } from "lucide-react";
import { useSiteModals } from "@/context/ModalContext";

import { BLOG_POSTS } from "@/data/blogPosts";

export default function BlogIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { openSchedule } = useSiteModals();

  const categories = ["All", "Missed Calls", "Lead Follow-Up", "Websites", "AI for Local Business"];

  const filteredPosts =
    selectedCategory === "All"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-nafa-gold border border-amber-200 text-xs font-bold mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            Insights & Guides
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-nafa-charcoal tracking-tight mb-4">
            The Nafa Technologies Blog
          </h1>
          <p className="text-base sm:text-lg text-nafa-muted max-w-2xl mx-auto leading-relaxed">
            Practical strategies for stopping lead loss, mastering speed-to-lead, and scaling appointment bookings with AI automation.
          </p>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 pt-6 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`press-scale flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? "bg-nafa-charcoal text-white shadow-xs"
                    : "bg-white text-nafa-muted border border-nafa-border hover:text-nafa-charcoal"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="apple-glass rounded-3xl p-6 sm:p-8 shadow-apple-card border border-white flex flex-col justify-between hover:border-nafa-gold/40 transition-all duration-300"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-nafa-muted">
                  <span className="font-extrabold uppercase tracking-wider text-nafa-gold bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {post.readTime}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-extrabold text-nafa-charcoal leading-snug">
                  <Link href={`/blog/${post.slug}`} className="hover:text-amber-700 transition-colors">
                    {post.title}
                  </Link>
                </h2>

                <p className="text-xs sm:text-sm text-nafa-muted leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-nafa-border/40 flex items-center justify-between">
                <span className="text-[11px] text-nafa-muted">{post.date}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="press-scale text-xs font-bold text-nafa-charcoal hover:text-nafa-gold flex items-center gap-1"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Closing Newsletter / Strategy Session */}
        <div className="apple-glass-card rounded-3xl p-8 sm:p-12 shadow-apple-card border border-nafa-border/60 text-center max-w-3xl mx-auto space-y-4">
          <h3 className="text-2xl font-extrabold text-nafa-charcoal">
            Want to Implement These Strategies for Your Business?
          </h3>
          <p className="text-xs sm:text-sm text-nafa-muted max-w-xl mx-auto">
            Book a 15-minute consultation with our automation engineers. We will inspect your current phone flow and outline an exact plan to capture missed leads.
          </p>
          <div className="pt-2">
            <button
              onClick={openSchedule}
              className="press-scale py-3.5 px-7 rounded-2xl bg-nafa-gold hover:bg-nafa-gold-hover text-white font-bold text-sm shadow-apple-gold inline-flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Strategy Session</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
