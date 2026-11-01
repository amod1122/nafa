"use client";

import React from "react";
import Link from "next/link";
import {
  PhoneCall,
  Zap,
  Globe,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowDown,
  Sparkles,
} from "lucide-react";
import { useSiteModals } from "@/context/ModalContext";
import { AnimatedShinyButton } from "@/components/eldoraui/animated-shiny-button";
import SubLetterSpotlightText from "@/components/ui/SubLetterSpotlightText";
import DetailsTailSection from "@/components/DetailsTailSection";

export default function HomePage() {
  const { openSchedule, openQuoteModal } = useSiteModals();

  const scrollToAnchor = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative w-full overflow-hidden bg-transparent text-white selection:bg-white selection:text-black">
      {/* =========================================================================
          HERO SECTION (CLEAN LEFT-DOCKED COPY ON PURE BLACK WITH ACTIVE ANIMATIONS)
          ========================================================================= */}
      <section
        id="top"
        className="relative pt-6 sm:pt-10 pb-12 sm:pb-16 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto flex flex-col justify-center min-h-[calc(80dvh-80px)]"
      >
        <div className="w-full flex justify-start">
          <div className="w-full max-w-2xl text-left flex flex-col items-start z-10">
            {/* Main Headline: Sub-letter cursor spotlight reveal animation */}
            <SubLetterSpotlightText radius={95} color="#38bdf8" />

            {/* Subhead Lede */}
            <p className="mt-5 max-w-[56ch] text-[15px] sm:text-[16.5px] leading-[1.6] text-muted">
              Custom voice receptionists and immediate response pipelines that
              answer inbound phone calls, qualify caller intent, and book revenue onto
              your calendar 24/7/365. Zero hold times. Zero missed opportunities.
            </p>

            {/* Clean 2-Button CTAs: Animated Glowing Border Button for Get a Quote */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <AnimatedShinyButton
                onClick={() => openQuoteModal()}
                colorScheme="white"
                className="h-[46px] px-7 text-sm font-semibold shadow-xl"
              >
                Get a Quote
              </AnimatedShinyButton>

              <button
                onClick={openSchedule}
                className="btn btn-ghost h-[44px] px-6 text-sm font-medium text-white/90 hover:text-white"
              >
                <span>Book a Call</span>
              </button>
            </div>

            {/* Trust Assurance Bar */}
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-muted">
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle2 className="w-4 h-4 text-white/80 shrink-0" />
                <span>Keep your current phone number</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle2 className="w-4 h-4 text-white/80 shrink-0" />
                <span>Live in 3 to 7 business days</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle2 className="w-4 h-4 text-white/80 shrink-0" />
                <span>100% direct engineering</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          KEY TELEMETRY / 3-STAT METRICS BAR
          ========================================================================= */}
      <section className="relative z-10 stats-grid border-y border-white/10 bg-black/80 backdrop-blur-xl">
        {/* Stat 1: 24/7 Coverage */}
        <div className="stat-item">
          <div className="stat-icon" aria-hidden="true">
            <Clock className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="stat-title">24/7/365 Phone Answering</div>
            <p className="stat-desc">
              Human-grade conversational AI that answers after hours, weekends, and holiday overflows. Zero voicemail.
            </p>
          </div>
        </div>

        {/* Stat 2: Speed-to-lead */}
        <div className="stat-item">
          <div className="stat-icon" aria-hidden="true">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="stat-title">&lt;60-Second Speed-to-Lead</div>
            <p className="stat-desc">
              Instantly contacts web form submissions and leads via autonomous call and SMS before competitors wake up.
            </p>
          </div>
        </div>

        {/* Stat 3: 0s Hold time */}
        <div className="stat-item">
          <div className="stat-icon" aria-hidden="true">
            <ShieldCheck className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="stat-title">0s Hold Time &bull; Live Booking</div>
            <p className="stat-desc">
              Books qualified jobs directly into your CRM or calendar with instant SMS confirmation and technician dispatch.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MINIMAL CORE SYSTEMS OVERVIEW (CLEAN 3-CARD LAYOUT WITHOUT BLOATED COPY)
          ========================================================================= */}
      <section className="relative py-16 sm:py-20 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="badge-pill inline-flex items-center gap-1.5 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>Core Systems</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white [text-wrap:balance]">
              Three Specialized Solutions. Zero Bloat.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-muted max-w-xl">
              High-performance operational infrastructure designed for local businesses. Click any card to jump directly to its complete technical specifications.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollToAnchor("details")}
              className="text-xs text-muted hover:text-white flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/10 transition-colors"
            >
              <span>Explore All Specifications</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 3 Minimal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Inbound Voice Call AI */}
          <div
            onClick={() => scrollToAnchor("details-voice")}
            className="group apple-glass rounded-xl p-6 sm:p-7 border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-muted px-2.5 py-1 rounded bg-white/[0.04] border border-white/5">
                  Zero Hold Time
                </span>
              </div>

              <h3 className="text-xl font-medium text-white mb-2 group-hover:text-cyan-300 transition-colors">
                AI Voice Receptionist
              </h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed mb-6">
                Human-grade voice agent answering 100% of incoming phone calls. Operates 24/7/365, eliminates hold times, and schedules bookings straight to your CRM.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
              <AnimatedShinyButton
                onClick={(e) => {
                  e?.stopPropagation();
                  openQuoteModal("AI Voice Agent Inbound");
                }}
                colorScheme="white"
                className="h-[38px] px-4 text-xs font-semibold shadow-md"
              >
                Get a Quote
              </AnimatedShinyButton>

              <span className="text-xs text-muted group-hover:text-white flex items-center gap-1 transition-colors">
                <span>View Spec</span>
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              </span>
            </div>
          </div>

          {/* Card 2: Speed-to-Lead Follow-Up */}
          <div
            onClick={() => scrollToAnchor("details-speed")}
            className="group apple-glass rounded-xl p-6 sm:p-7 border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                  <Zap className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-muted px-2.5 py-1 rounded bg-white/[0.04] border border-white/5">
                  &lt;60s Callback
                </span>
              </div>

              <h3 className="text-xl font-medium text-white mb-2 group-hover:text-cyan-300 transition-colors">
                Speed-to-Lead Pipeline
              </h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed mb-6">
                Instantly dials and texts incoming website inquiries within 60 seconds. Converts passive web forms into live calls before competitors even see the notification.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
              <AnimatedShinyButton
                onClick={(e) => {
                  e?.stopPropagation();
                  openQuoteModal("Speed to Lead Pipeline");
                }}
                colorScheme="white"
                className="h-[38px] px-4 text-xs font-semibold shadow-md"
              >
                Get a Quote
              </AnimatedShinyButton>

              <span className="text-xs text-muted group-hover:text-white flex items-center gap-1 transition-colors">
                <span>View Workflow</span>
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              </span>
            </div>
          </div>

          {/* Card 3: Web Build & Redesign */}
          <div
            onClick={() => scrollToAnchor("details-web")}
            className="group apple-glass rounded-xl p-6 sm:p-7 border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                  <Globe className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-muted px-2.5 py-1 rounded bg-white/[0.04] border border-white/5">
                  Next.js 15 & React 19
                </span>
              </div>

              <h3 className="text-xl font-medium text-white mb-2 group-hover:text-cyan-300 transition-colors">
                Web Build & Redesign
              </h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed mb-6">
                Bespoke, liquid-glass dark-theme web applications engineered with headless lead pipelines, sub-second TTFB, 99+ Core Web Vitals, and effortless booking flows.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
              <AnimatedShinyButton
                onClick={(e) => {
                  e?.stopPropagation();
                  openQuoteModal("Web Build & Redesign");
                }}
                colorScheme="white"
                className="h-[38px] px-4 text-xs font-semibold shadow-md"
              >
                Get a Quote
              </AnimatedShinyButton>

              <span className="text-xs text-muted group-hover:text-white flex items-center gap-1 transition-colors">
                <span>View Stack</span>
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              </span>
            </div>
          </div>
        </div>

        {/* Quick jump navigation footer bar */}
        <div className="mt-10 p-4 rounded-xl border border-white/10 bg-white/[0.02] flex flex-wrap items-center justify-between gap-4 text-xs text-muted">
          <div className="flex items-center gap-2 text-white">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Need full technical specs, formulas, or architecture?</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => scrollToAnchor("details-calculator")}
              className="text-white hover:text-cyan-300 underline underline-offset-4 decoration-white/20 transition-colors"
            >
              Interactive ROI Calculator ↓
            </button>
            <span className="text-white/20">&bull;</span>
            <button
              onClick={() => scrollToAnchor("details-standards")}
              className="text-white hover:text-cyan-300 underline underline-offset-4 decoration-white/20 transition-colors"
            >
              Engineering Standards ↓
            </button>
            <span className="text-white/20">&bull;</span>
            <button
              onClick={() => scrollToAnchor("details-faq")}
              className="text-white hover:text-cyan-300 underline underline-offset-4 decoration-white/20 transition-colors"
            >
              Technical FAQs ↓
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          THE TAIL SECTION: COMPLETE IN-DEPTH SPECIFICATIONS & DOCUMENTATION
          All extensive copywriting, formulas, architectures, and FAQs live here.
          ========================================================================= */}
      <DetailsTailSection />

      {/* =========================================================================
          FINAL HIGH-CONVERTING CLOSING CTA BANNER
          ========================================================================= */}
      <section className="relative py-14 sm:py-20 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto">
        <div className="rounded-xl border border-white/20 bg-gradient-to-b from-white/[0.08] via-black/90 to-black p-8 sm:p-12 lg:p-14 text-center relative overflow-hidden shadow-2xl">
          {/* Subtle top edge glow */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[-0.03em] text-white leading-[1.1] max-w-3xl mx-auto [text-wrap:balance]">
            Ready to deploy an AI voice receptionist that never sleeps?
          </h2>

          <p className="mt-4 text-[15px] sm:text-[16px] text-muted max-w-[58ch] mx-auto leading-relaxed">
            Book a 15-minute technical discovery call. We will calculate your exact revenue at risk and demo your custom voice agent live on the phone.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <AnimatedShinyButton
              onClick={() => openQuoteModal()}
              colorScheme="white"
              className="h-[46px] px-8 text-sm font-semibold shadow-xl"
            >
              Get a Quote
            </AnimatedShinyButton>

            <button
              onClick={openSchedule}
              className="btn btn-ghost h-[44px] px-7 text-sm font-medium text-white"
            >
              <span>Book a Call</span>
            </button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-muted">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-white/80" />
              No contracts or long-term lock-in
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-white/80" />
              Keep your existing phone numbers
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-white/80" />
              Live within 3 to 7 business days
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
