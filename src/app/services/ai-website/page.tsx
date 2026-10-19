"use client";

import React from "react";
import Link from "next/link";
import {
  Globe,
  Calendar,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Sparkles,
  Smartphone,
  ChevronRight,
  Server,
} from "lucide-react";
import { useSiteModals } from "@/context/ModalContext";

export default function AIWebsitePage() {
  const { openSchedule, openQuoteModal } = useSiteModals();

  return (
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-nafa-muted mb-8">
          <Link href="/" className="hover:text-nafa-charcoal">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/services" className="hover:text-nafa-charcoal">Services</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="font-bold text-nafa-charcoal">High-Converting AI Website</span>
        </nav>

        {/* Hero */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 text-nafa-charcoal border border-nafa-border text-xs font-bold mb-4">
            <Globe className="w-3.5 h-3.5 text-nafa-gold" />
            Domain & Fast Hosting Included
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-nafa-charcoal tracking-tight mb-4">
            Websites Built for One Action: Booking Clients.
          </h1>
          <p className="text-base sm:text-lg text-nafa-muted leading-relaxed mb-8">
            Most local business websites are digital brochures that load slowly and fail to convert. Nafa designs and builds modern, lightning-fast websites engineered to turn visitors into phone calls and scheduled jobs.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => openQuoteModal("High-Converting AI Website")}
              className="press-scale py-3.5 px-7 rounded-2xl bg-nafa-gold hover:bg-nafa-gold-hover text-white font-bold text-sm shadow-apple-gold flex items-center justify-center gap-2"
            >
              <Globe className="w-4 h-4" />
              <span>Get Website Quote</span>
            </button>
            <button
              onClick={openSchedule}
              className="press-scale py-3.5 px-6 rounded-2xl bg-white border border-nafa-border text-nafa-charcoal font-semibold text-sm hover:bg-stone-50 flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Discovery Call</span>
            </button>
          </div>
        </div>

        {/* The Problem */}
        <div className="apple-glass-card rounded-3xl p-6 sm:p-10 shadow-apple-card border border-white mb-14">
          <h2 className="text-2xl font-extrabold text-nafa-charcoal mb-4">
            The Problem: Outdated Websites Bleed Local Traffic
          </h2>
          <p className="text-xs sm:text-sm text-nafa-muted leading-relaxed mb-6">
            If your website takes more than 3 seconds to load on a mobile phone, <strong>over 50% of visitors leave immediately</strong>. Worse, generic template sites hide phone numbers, make forms painful to fill out on mobile, and have zero automation connecting to your team. Nafa builds sites that guide visitors directly into phone calls and scheduled meetings in under 10 seconds.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-semibold">
            <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200">
              📱 Mobile-First One-Thumb Ergonomics
            </div>
            <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200">
              🚀 Under 2-Second Load Times (Lighthouse 90+)
            </div>
            <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200">
              🔌 Pre-Wired for AI Call & Speed-to-Lead Agents
            </div>
          </div>
        </div>

        {/* Features & What's Included */}
        <div className="apple-glass rounded-3xl p-6 sm:p-10 shadow-apple-card border border-nafa-border/60 mb-14">
          <h2 className="text-2xl font-extrabold text-nafa-charcoal mb-6">
            Everything Included — No Nickel & Diming
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-nafa-charcoal">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span><strong>Custom Domain & Managed Cloud Hosting:</strong> Enterprise SSL certificates, automatic backups, and high-speed CDN.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span><strong>Mobile-First Architecture:</strong> Optimized specifically for iPhone and Android touchscreens.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span><strong>Built-In Conversion Funnels:</strong> Frictionless quote forms, click-to-call buttons, and calendar booking embeds.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span><strong>Local SEO Foundations:</strong> Schema.org structured data, clean metadata, and Google Search Console integration.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span><strong>Direct Team Updates:</strong> Need text or images changed? We update it for you with zero hassle.</span>
            </div>
          </div>
        </div>

        {/* Bundle Banner */}
        <div className="apple-glass rounded-3xl p-8 sm:p-12 shadow-apple-card border border-nafa-gold/40 bg-gradient-to-r from-nafa-surface to-amber-50/40 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-nafa-gold bg-amber-100 px-3 py-1 rounded-full inline-block">
              Combine and Save
            </span>
            <h3 className="text-2xl font-extrabold text-nafa-charcoal">
              Pair Website + Speed-to-Lead
            </h3>
            <p className="text-xs sm:text-sm text-nafa-muted max-w-xl">
              Get a new high-converting website bundled with our automated speed-to-lead agent that calls new prospects within 60 seconds.
            </p>
          </div>

          <button
            onClick={() => openQuoteModal("Website + Speed-to-Lead Bundle")}
            className="press-scale py-3.5 px-6 rounded-2xl bg-nafa-gold hover:bg-nafa-gold-hover text-white font-bold text-sm shadow-apple-gold flex-shrink-0"
          >
            Get Website Bundle Quote
          </button>
        </div>
      </div>
    </div>
  );
}
