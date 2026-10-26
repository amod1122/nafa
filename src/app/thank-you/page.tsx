"use client";

import React from "react";
import Link from "next/link";
import { Check, ArrowLeft, Calendar, ArrowRight, ShieldCheck } from "lucide-react";

export default function ThankYouPage() {
  const CALENDLY_URL = "https://calendly.com/ahmadalimalik224/30min";

  return (
    <div className="relative min-h-[85vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 text-white">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-white/[0.03] blur-[140px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-xl w-full">
        {/* Floating Card container matching the clean mock card design */}
        <div className="apple-glass rounded-2xl p-8 sm:p-12 border border-white/15 shadow-2xl text-center relative overflow-hidden backdrop-blur-2xl bg-black/60">
          
          {/* Subtle top edge glow */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          {/* Minimal Checkmark Badge (Clean circle with checkmark, like the mockup) */}
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-12 h-12 rounded-full border border-white/20 bg-white/[0.08] flex items-center justify-center text-white shadow-lg">
              <Check className="w-6 h-6 stroke-[2.5]" />
            </div>
          </div>

          {/* Elegant Display Title */}
          <h1 className="font-editorial text-4xl sm:text-6xl text-white tracking-wide mb-3">
            Thank You !
          </h1>

          {/* Subheading in clean serif / body */}
          <p className="text-base sm:text-lg text-white/90 font-light mb-2">
            We got your request. We'll get back to you soon.
          </p>

          <p className="text-xs sm:text-sm text-[#A6B4C7] max-w-md mx-auto leading-relaxed mb-8">
            Our engineering team reviews project specifications within 5 minutes during business hours.
          </p>

          {/* Action Buttons: Primary 'Go Back' pill like the mockup, plus secondary Book Call */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="btn btn-solid w-full sm:w-auto h-[44px] px-8 text-xs sm:text-sm font-semibold rounded-full flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Go Back</span>
            </Link>

            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost w-full sm:w-auto h-[44px] px-6 text-xs sm:text-sm font-medium rounded-full flex items-center justify-center gap-2 text-white/90 hover:text-white"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Call Too</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Verified Delivery Note */}
          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center gap-2 text-[11px] text-[#A6B4C7]">
            <ShieldCheck className="w-3.5 h-3.5 text-white/70" />
            <span>Submission received & routed directly to engineering</span>
          </div>
        </div>
      </div>
    </div>
  );
}
