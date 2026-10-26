"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Calendar, Sparkles } from "lucide-react";

export default function ThankYouPage() {
  const CALENDLY_URL = "https://calendly.com/ahmadalimalik224/30min";

  return (
    <div className="relative min-h-[82vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 text-white">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-white/[0.03] blur-[120px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-xl w-full text-center">
        {/* Big Decor: Luminous Liquid Glass Orb */}
        <div className="relative inline-flex items-center justify-center mb-8">
          <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-2xl scale-125 animate-pulse" />
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-white/20 bg-gradient-to-b from-white/10 to-black/80 backdrop-blur-xl flex items-center justify-center shadow-2xl">
            <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-white stroke-[1.75]" />
          </div>
        </div>

        {/* Status Pill */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/15 bg-white/[0.04] text-[#A6B4C7] text-xs font-mono uppercase tracking-wider mb-5">
          <Sparkles className="w-3.5 h-3.5 text-white" />
          <span>Submission Confirmed</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-sans text-3xl sm:text-5xl font-medium tracking-tight text-white mb-3">
          Thank You!
        </h1>

        {/* Primary User Statement */}
        <p className="text-lg sm:text-xl text-white/95 font-medium mb-3">
          We will reach out to you soon.
        </p>

        {/* Description Lede */}
        <p className="text-xs sm:text-sm text-[#A6B4C7] max-w-md mx-auto leading-relaxed mb-8">
          Your project specifications have been sent directly to our team. We are reviewing your requirements and will follow up with you promptly.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="btn btn-solid w-full sm:w-auto h-[44px] px-6 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2"
          >
            <span>Return to Home</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost w-full sm:w-auto h-[44px] px-6 text-xs sm:text-sm font-medium flex items-center justify-center gap-2 text-white/90 hover:text-white"
          >
            <Calendar className="w-4 h-4" />
            <span>Schedule Directly (Optional)</span>
          </a>
        </div>
      </div>
    </div>
  );
}
