"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar,
  Clock,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";
import { BLOG_POSTS } from "@/data/blogPosts";
import { useSiteModals } from "@/context/ModalContext";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function BlogPostPage({ params }: PageProps) {
  const { slug } = use(params);
  const { openSchedule, openQuoteModal } = useSiteModals();

  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="pt-28 pb-20 sm:pt-36 sm:pb-28 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-[#9a9a9a] hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Articles</span>
        </Link>

        {/* Post Header */}
        <header className="space-y-4 pb-8 border-b border-white/10 mb-8">
          <div className="flex items-center gap-3 text-xs">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-white/90 bg-white/[0.05] border border-white/15 px-2.5 py-0.5 rounded-[4px]">
              {post.category}
            </span>
            <span className="text-[#9a9a9a] flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {post.readTime}
            </span>
            <span className="text-[#9a9a9a]">•</span>
            <span className="text-[#9a9a9a]">{post.date}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-sm sm:text-base text-[#9a9a9a] italic leading-relaxed">
            {post.excerpt}
          </p>
        </header>

        {/* Article Body Content */}
        <div className="space-y-6 text-sm sm:text-base text-[#d8d8d8] leading-relaxed">
          <p>
            When a homeowner experiences a burst pipe on a Sunday night, a patient develops severe tooth pain, or an accident victim seeks an attorney, they do not wait around. They pull out their phone, search on Google, and tap the first link or phone number they find.
          </p>

          <h2 className="text-xl sm:text-2xl font-medium text-white pt-4 tracking-tight">
            1. Why The 5-Minute Window Determines 78% of Deals
          </h2>
          <p>
            Groundbreaking sales research originally conducted by James Oldroyd, PhD at MIT and published in the <em className="italic text-white">Harvard Business Review</em> analyzed thousands of inbound leads across business sectors. The findings were startling:
          </p>
          <div className="p-5 rounded-[6px] bg-white/[0.03] border border-white/10 space-y-2">
            <div className="font-semibold text-white text-xs sm:text-sm">Key Research Takeaways:</div>
            <ul className="space-y-1.5 text-xs sm:text-sm text-[#9a9a9a]">
              <li>• Reaching a lead within 5 minutes makes you <strong className="text-white">21 times more likely</strong> to qualify them than waiting 30 minutes.</li>
              <li>• Qualification odds drop by over <strong className="text-white">80% after just 10 minutes</strong> of silence.</li>
              <li>• <strong className="text-white">78% of customers purchase</strong> from the vendor or service provider that responds to them first.</li>
            </ul>
          </div>

          <h2 className="text-xl sm:text-2xl font-medium text-white pt-4 tracking-tight">
            2. The Failure of Traditional Voicemail and Email Notifications
          </h2>
          <p>
            Many service contractors and clinic owners believe that having a contact form or voicemail box is sufficient. In reality, over <strong className="text-white">85% of people who reach a business voicemail immediately hang up without leaving a message</strong>. They don't want to wait for an ambiguous callback; they want an answer right now.
          </p>
          <p>
            Similarly, when someone fills out a contact form on your website, you might get an email notification while you are driving, treating a patient, or eating dinner. By the time you sit down at your desk 2 hours later, that prospective customer has already spoken to a competitor and booked an on-site estimate.
          </p>

          <h2 className="text-xl sm:text-2xl font-medium text-white pt-4 tracking-tight">
            3. How Conversational AI Solves Both Inbound and Outbound Lag
          </h2>
          <p>
            This is where modern AI automation transforms business operations:
          </p>
          <ul className="space-y-2.5 text-xs sm:text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
              <span><strong className="text-white">Inbound 24/7 Voice Agents:</strong> Pick up on ring one, greet callers with human-like conversational voice models, answer questions, and lock appointments straight into your schedule.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
              <span><strong className="text-white">Outbound Speed-to-Lead Agents:</strong> The instant a form submission arrives, the agent calls the lead back in under 60 seconds, pre-qualifies their project, and warm-transfers hot buyers to your team.</span>
            </li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-medium text-white pt-4 tracking-tight">
            Actionable Next Steps
          </h2>
          <p>
            To stop losing leads to faster competitors, audit your current response time. Track how many phone calls went to voicemail last weekend, and measure how long it takes your team to respond to web form submissions.
          </p>
        </div>

        {/* Closing Post CTA Band */}
        <div className="apple-glass rounded-lg p-8 sm:p-10 border border-white/20 mt-12 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="badge-pill text-xs">
              Never Miss a Lead Again
            </span>
            <h3 className="text-2xl font-medium text-white tracking-tight">
              Get an Automated Response System Built for Your Business
            </h3>
            <p className="text-xs sm:text-sm text-[#9a9a9a] max-w-xl">
              Nafa builds, tunes, and deploys 24/7 AI call agents and sub-60-second speed-to-lead pipelines. Zero fluff, fully done for you.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5 shrink-0 w-full sm:w-auto">
            <button
              onClick={openSchedule}
              className="btn btn-solid h-[42px] px-6 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Strategy Call</span>
            </button>
            <button
              onClick={() => openQuoteModal()}
              className="btn btn-ghost h-[42px] px-5 text-xs sm:text-sm"
            >
              Request Quote
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
