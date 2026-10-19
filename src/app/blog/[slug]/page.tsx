"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Sparkles,
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
    <article className="pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-nafa-muted hover:text-nafa-charcoal mb-8 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Articles</span>
        </Link>

        {/* Post Header */}
        <header className="space-y-4 pb-8 border-b border-nafa-border/60 mb-8">
          <div className="flex items-center gap-3 text-xs">
            <span className="font-extrabold uppercase tracking-wider text-nafa-gold bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              {post.category}
            </span>
            <span className="text-nafa-muted flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {post.readTime}
            </span>
            <span className="text-nafa-muted">•</span>
            <span className="text-nafa-muted">{post.date}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-nafa-charcoal tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-sm sm:text-base text-nafa-muted italic leading-relaxed">
            {post.excerpt}
          </p>
        </header>

        {/* Article Body Content */}
        <div className="space-y-6 text-sm sm:text-base text-nafa-charcoal leading-relaxed">
          <p>
            When a homeowner experiences a burst pipe on a Sunday night, a patient develops severe tooth pain, or an accident victim seeks an attorney, they do not wait around. They pull out their phone, search on Google, and tap the first link or phone number they find.
          </p>

          <h2 className="text-2xl font-extrabold text-nafa-charcoal pt-4">
            1. Why The 5-Minute Window Determines 78% of Deals
          </h2>
          <p>
            Groundbreaking sales research originally conducted by James Oldroyd, PhD at MIT and published in the <em>Harvard Business Review</em> analyzed thousands of inbound leads across business sectors. The findings were startling:
          </p>
          <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 space-y-2">
            <div className="font-bold text-amber-950">Key Research Takeaways:</div>
            <ul className="space-y-1.5 text-xs sm:text-sm text-amber-900">
              <li>• Reaching a lead within 5 minutes makes you <strong>21 times more likely</strong> to qualify them than waiting 30 minutes.</li>
              <li>• Qualification odds drop by over <strong>80% after just 10 minutes</strong> of silence.</li>
              <li>• <strong>78% of customers purchase</strong> from the vendor or service provider that responds to them first.</li>
            </ul>
          </div>

          <h2 className="text-2xl font-extrabold text-nafa-charcoal pt-4">
            2. The Failure of Traditional Voicemail and Email Notifications
          </h2>
          <p>
            Many service contractors and clinic owners believe that having a contact form or voicemail box is sufficient. In reality, over <strong>85% of people who reach a business voicemail immediately hang up without leaving a message</strong>. They don't want to wait for an ambiguous callback; they want an answer right now.
          </p>
          <p>
            Similarly, when someone fills out a contact form on your website, you might get an email notification while you are driving, treating a patient, or eating dinner. By the time you sit down at your desk 2 hours later, that prospective customer has already spoken to a competitor and booked an on-site estimate.
          </p>

          <h2 className="text-2xl font-extrabold text-nafa-charcoal pt-4">
            3. How Conversational AI Solves Both Inbound and Outbound Lag
          </h2>
          <p>
            This is where modern AI automation transforms business operations:
          </p>
          <ul className="space-y-2.5 text-xs sm:text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span><strong>Inbound 24/7 Voice Agents:</strong> Pick up on ring one, greet callers with human-like conversational voice models, answer questions, and lock appointments straight into your schedule.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span><strong>Outbound Speed-to-Lead Agents:</strong> The instant a form submission arrives, the agent calls the lead back in under 60 seconds, pre-qualifies their project, and warm-transfers hot buyers to your team.</span>
            </li>
          </ul>

          <h2 className="text-2xl font-extrabold text-nafa-charcoal pt-4">
            Actionable Next Steps
          </h2>
          <p>
            To stop losing leads to faster competitors, audit your current response time. Track how many phone calls went to voicemail last weekend, and measure how long it takes your team to respond to web form submissions.
          </p>
        </div>

        {/* Closing Post CTA Band (PRD Section 5.9: "Each post ends with a CTA") */}
        <div className="apple-glass rounded-3xl p-8 sm:p-10 shadow-apple-card border border-nafa-gold/40 bg-gradient-to-r from-nafa-surface via-amber-50/40 to-nafa-surface mt-12 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-nafa-gold bg-amber-100 px-3 py-1 rounded-full inline-block">
              Never Miss a Lead Again
            </span>
            <h3 className="text-2xl font-extrabold text-nafa-charcoal">
              Get an Automated Response System Built for Your Business
            </h3>
            <p className="text-xs sm:text-sm text-nafa-muted max-w-xl">
              Nafa builds, tunes, and deploys 24/7 AI call agents and sub-60-second speed-to-lead pipelines. Zero fluff, fully done for you.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5 flex-shrink-0 w-full sm:w-auto">
            <button
              onClick={openSchedule}
              className="press-scale py-3.5 px-6 rounded-2xl bg-nafa-gold hover:bg-nafa-gold-hover text-white font-bold text-sm shadow-apple-gold flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Strategy Call</span>
            </button>
            <button
              onClick={() => openQuoteModal()}
              className="press-scale py-3.5 px-5 rounded-2xl bg-white border border-nafa-border text-nafa-charcoal font-semibold text-sm hover:bg-stone-50"
            >
              Request Quote
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
