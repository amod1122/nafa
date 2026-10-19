"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BookOpen, Clock, ArrowRight, Calendar } from "lucide-react";
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
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-28 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="badge-pill inline-flex items-center gap-1.5 mb-4">
            <BookOpen className="w-3.5 h-3.5 text-white" />
            <span>Insights & Architectural Guides</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-white mb-4">
            The Nafa <em className="font-editorial not-italic text-[#9a9a9a]">Intelligence</em> Log
          </h1>
          <p className="text-base sm:text-lg text-[#9a9a9a] max-w-2xl mx-auto leading-relaxed">
            Practical strategies for eliminating phone lead loss, mastering sub-minute speed-to-lead, and scaling appointment bookings with AI automation.
          </p>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 pt-6 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`shrink-0 px-4 py-2 rounded-[6px] text-xs font-medium transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "btn-solid text-black font-semibold"
                    : "bg-white/[0.04] text-[#9a9a9a] border border-white/10 hover:border-white/30 hover:text-white"
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
              className="apple-glass rounded-lg p-6 sm:p-8 flex flex-col justify-between hover:border-white/30 transition-all duration-300"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-[#9a9a9a]">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-white/90 bg-white/[0.05] border border-white/15 px-2.5 py-0.5 rounded-[4px]">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {post.readTime}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-medium text-white tracking-tight leading-snug">
                  <Link href={`/blog/${post.slug}`} className="hover:text-white/80 transition-colors">
                    {post.title}
                  </Link>
                </h2>

                <p className="text-xs sm:text-sm text-[#9a9a9a] leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] text-[#9a9a9a]">{post.date}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="btn btn-ghost h-[34px] px-3.5 text-xs font-medium flex items-center gap-1"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Closing Newsletter / Strategy Session */}
        <div className="apple-glass rounded-lg p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4 border border-white/20">
          <h3 className="text-2xl font-medium tracking-tight text-white">
            Want to Implement These Strategies for Your Business?
          </h3>
          <p className="text-xs sm:text-sm text-[#9a9a9a] max-w-xl mx-auto">
            Book a 15-minute consultation with our automation engineers. We will inspect your current phone flow and outline an exact plan to capture missed leads.
          </p>
          <div className="pt-2">
            <button
              onClick={openSchedule}
              className="btn btn-solid h-[42px] px-7 text-xs sm:text-sm font-semibold inline-flex items-center gap-2"
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
