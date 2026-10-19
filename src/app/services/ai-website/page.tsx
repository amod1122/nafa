"use client";

import React from "react";
import Link from "next/link";
import {
  Globe,
  Calendar,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { useSiteModals } from "@/context/ModalContext";

export default function AIWebsitePage() {
  const { openSchedule, openQuoteModal } = useSiteModals();

  return (
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-28 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-[#9a9a9a] mb-8">
          <Link href="/" className="hover:text-white">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/services" className="hover:text-white">Services</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="font-medium text-white">High-Converting AI Website</span>
        </nav>

        {/* Hero */}
        <div className="max-w-3xl mb-14">
          <div className="badge-pill inline-flex items-center gap-2 mb-4">
            <Globe className="w-3.5 h-3.5 text-white" />
            <span>Domain & Fast Cloud Hosting Included</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-white mb-4">
            Websites Built for One Action: <em className="font-editorial not-italic text-[#9a9a9a]">Booking Clients</em>.
          </h1>
          <p className="text-base sm:text-lg text-[#9a9a9a] leading-relaxed mb-8">
            Most local business websites are digital brochures that load slowly and fail to convert. Nafa designs and builds modern, lightning-fast websites engineered to turn visitors into phone calls and scheduled jobs.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => openQuoteModal("High-Converting AI Website")}
              className="btn btn-solid h-[42px] px-6 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2"
            >
              <Globe className="w-4 h-4" />
              <span>Get Website Quote</span>
            </button>
            <button
              onClick={openSchedule}
              className="btn btn-ghost h-[42px] px-6 text-xs sm:text-sm flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Discovery Call</span>
            </button>
          </div>
        </div>

        {/* The Problem */}
        <div className="apple-glass rounded-lg p-6 sm:p-10 mb-14">
          <h2 className="text-2xl font-medium tracking-tight text-white mb-4">
            The Problem: Outdated Websites Bleed Local Traffic
          </h2>
          <p className="text-xs sm:text-sm text-[#9a9a9a] leading-relaxed mb-6">
            If your website takes more than 3 seconds to load on a mobile phone, <strong className="text-white">over 50% of visitors leave immediately</strong>. Worse, generic template sites hide phone numbers, make forms painful to fill out on mobile, and have zero automation connecting to your team. Nafa builds sites that guide visitors directly into phone calls and scheduled meetings in under 10 seconds.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-medium text-white/90">
            <div className="p-3.5 rounded-[6px] bg-white/[0.03] border border-white/10">
              📱 Mobile-First One-Thumb Ergonomics
            </div>
            <div className="p-3.5 rounded-[6px] bg-white/[0.03] border border-white/10">
              🚀 Under 2-Second Load Times (Lighthouse 90+)
            </div>
            <div className="p-3.5 rounded-[6px] bg-white/[0.03] border border-white/10">
              🔌 Pre-Wired for AI Call & Speed-to-Lead Agents
            </div>
          </div>
        </div>

        {/* Features & What's Included */}
        <div className="apple-glass rounded-lg p-6 sm:p-10 mb-14">
          <h2 className="text-2xl font-medium tracking-tight text-white mb-6">
            Everything Included — No Nickel & Diming
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-white/90">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
              <span><strong className="text-white">Custom Domain & Managed Cloud Hosting:</strong> Enterprise SSL certificates, automatic backups, and high-speed CDN.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
              <span><strong className="text-white">Mobile-First Architecture:</strong> Optimized specifically for iPhone and Android touchscreens.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
              <span><strong className="text-white">Built-In Conversion Funnels:</strong> Frictionless quote forms, click-to-call buttons, and calendar booking embeds.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
              <span><strong className="text-white">Local SEO Foundations:</strong> Schema.org structured data, clean metadata, and Google Search Console integration.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
              <span><strong className="text-white">Direct Team Updates:</strong> Need text or images changed? We update it for you with zero hassle.</span>
            </div>
          </div>
        </div>

        {/* Bundle Banner */}
        <div className="apple-glass rounded-lg p-8 sm:p-10 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 border border-white/20">
          <div className="space-y-2">
            <span className="badge-pill text-xs">
              Combine and Save
            </span>
            <h3 className="text-2xl font-medium tracking-tight text-white">
              Pair Website + Speed-to-Lead
            </h3>
            <p className="text-xs sm:text-sm text-[#9a9a9a] max-w-xl">
              Get a new high-converting website bundled with our automated speed-to-lead agent that calls new prospects within 60 seconds.
            </p>
          </div>

          <button
            onClick={() => openQuoteModal("Website + Speed-to-Lead Bundle")}
            className="btn btn-solid h-[42px] px-6 text-xs sm:text-sm font-semibold shrink-0"
          >
            Get Website Bundle Quote
          </button>
        </div>
      </div>
    </div>
  );
}
