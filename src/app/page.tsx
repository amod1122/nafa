"use client";

import React from "react";
import {
  ArrowRight,
  Clock,
  ShieldCheck,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { useSiteModals } from "@/context/ModalContext";
import CostSavingsCalculator from "@/components/CostSavingsCalculator";
import OfferBento from "@/components/OfferBento";
import AboutSection from "@/components/AboutSection";
import SocialProof from "@/components/SocialProof";
import FAQAccordion from "@/components/FAQAccordion";

export default function HomePage() {
  const { openSchedule, openQuoteModal } = useSiteModals();

  return (
    <div className="relative w-full overflow-hidden bg-black text-white selection:bg-white selection:text-black">
      {/* =========================================================================
          HERO SECTION (DIMENSIONAL SCROLL CRAFT WITH LEFT-DOCKED COPY & LIVE TELEMETRY)
          ========================================================================= */}
      <section
        id="top"
        className="relative pt-8 sm:pt-16 pb-12 sm:pb-20 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto flex flex-col justify-center min-h-[calc(88vh-80px)]"
      >
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Left-Docked Hero Copy */}
          <div className="lg:col-span-7 w-full max-w-2xl text-left flex flex-col items-start">
            {/* Live Operational Status Chip */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-sky-500/30 bg-sky-950/20 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(56,189,248,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span className="text-xs font-mono font-medium tracking-wider uppercase text-sky-200">
                Operational AI Voice & Speed-to-Lead
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-sans text-[36px] sm:text-[48px] lg:text-[56px] font-medium leading-[1.06] tracking-[-0.03em] text-white">
              Deploy{" "}
              <em className="font-editorial not-italic text-sky-300">
                AI call agents
              </em>{" "}
              that
              <br />
              answer every lead in seconds.
            </h1>

            {/* Subhead Lede */}
            <p className="mt-5 max-w-[56ch] text-[15px] sm:text-[16.5px] leading-[1.6] text-[#94a3b8]">
              Custom voice receptionists and immediate response pipelines that
              answer inbound phone calls, qualify caller intent, and book revenue onto
              your calendar 24/7/365. Zero hold times. Zero missed opportunities.
            </p>

            {/* Clean 2-Button CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <button
                onClick={openSchedule}
                className="btn btn-solid h-[46px] px-7 text-sm font-semibold gap-2 shadow-[0_0_25px_rgba(56,189,248,0.25)] hover:shadow-[0_0_35px_rgba(56,189,248,0.4)] transition-all"
              >
                <span>Book Discovery Call</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </button>

              <button
                onClick={() => openQuoteModal()}
                className="btn btn-ghost h-[46px] px-6 text-sm font-medium text-white/90 hover:text-white border border-white/16 hover:border-white/35 bg-white/[0.03] hover:bg-white/[0.08]"
              >
                <span>Get Custom Quote</span>
              </button>
            </div>

            {/* Trust Assurance Bar */}
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-[#94a3b8]">
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Keep your current phone number</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Live in 3 to 7 business days</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% direct engineering</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dimensional Live Voice & Telemetry Cockpit */}
          <div className="lg:col-span-5 w-full relative">
            {/* Ambient Radial Halo */}
            <div
              className="absolute -inset-4 bg-gradient-to-tr from-sky-500/15 via-indigo-600/10 to-transparent blur-2xl rounded-3xl pointer-events-none"
              aria-hidden="true"
            />

            {/* Main Console Surface (Flattened Hierarchy - No Nested Cards) */}
            <div className="relative rounded-2xl border border-white/16 bg-gradient-to-b from-white/[0.08] via-black/85 to-black/95 backdrop-blur-2xl p-6 shadow-2xl shadow-black/80 space-y-5">
              {/* Cockpit Top Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                  </span>
                  <span className="font-mono font-semibold tracking-wider text-white uppercase text-xs">
                    Nafa Core Telemetry
                  </span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-xs text-sky-300">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                  <span>0.38s LATENCY</span>
                </div>
              </div>

              {/* Active Inbound Live Call Module */}
              <div className="space-y-3.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#94a3b8] font-mono">
                    Inbound Caller: +1 (512) 892-XXXX
                  </span>
                  <span className="font-mono text-emerald-400 font-medium">
                    00:34
                  </span>
                </div>

                {/* Simulated Dialogue */}
                <div className="space-y-3 text-xs leading-relaxed">
                  <div className="border-l-2 border-white/20 pl-3 text-white/90">
                    <span className="font-mono uppercase text-[#94a3b8] text-xs block mb-0.5">Caller</span>
                    &ldquo;Hi, our main water heater burst and we need an emergency technician out today.&rdquo;
                  </div>
                  <div className="border-l-2 border-sky-400 pl-3 text-white">
                    <span className="font-mono uppercase text-sky-400 text-xs block mb-0.5">Nafa AI Agent</span>
                    &ldquo;I have got our master plumber Kevin available at 1:30 PM. I am reserving that right now on the calendar — could I get your service address?&rdquo;
                  </div>
                </div>

                {/* Animated Audio Equalizer Waveform */}
                <div className="pt-2 flex items-center justify-between gap-2 h-9 px-3 bg-black/40 rounded-lg border border-white/10">
                  <span className="text-xs font-mono text-[#94a3b8]">VOICE</span>
                  <div className="flex-1 flex items-center justify-center gap-1.5 h-full px-2">
                    <div className="w-1 bg-sky-400 rounded-full animate-eq-1" />
                    <div className="w-1 bg-sky-300 rounded-full animate-eq-2" />
                    <div className="w-1 bg-emerald-400 rounded-full animate-eq-3" />
                    <div className="w-1 bg-sky-400 rounded-full animate-eq-4" />
                    <div className="w-1 bg-emerald-300 rounded-full animate-eq-5" />
                    <div className="w-1 bg-sky-400 rounded-full animate-eq-2" />
                    <div className="w-1 bg-indigo-400 rounded-full animate-eq-1" />
                    <div className="w-1 bg-sky-300 rounded-full animate-eq-3" />
                    <div className="w-1 bg-emerald-400 rounded-full animate-eq-4" />
                    <div className="w-1 bg-sky-400 rounded-full animate-eq-5" />
                    <div className="w-1 bg-sky-300 rounded-full animate-eq-2" />
                    <div className="w-1 bg-emerald-300 rounded-full animate-eq-1" />
                    <div className="w-1 bg-sky-400 rounded-full animate-eq-4" />
                    <div className="w-1 bg-indigo-400 rounded-full animate-eq-3" />
                  </div>
                  <span className="text-xs font-mono text-emerald-400">ACTIVE</span>
                </div>
              </div>

              {/* Telemetry Status Strip */}
              <div className="pt-4 border-t border-white/10 grid grid-cols-3 gap-2 text-center text-xs">
                <div>
                  <span className="font-mono text-[#94a3b8] uppercase block">Mode</span>
                  <span className="font-semibold text-emerald-400 mt-1 block">24/7 After Hours</span>
                </div>
                <div>
                  <span className="font-mono text-[#94a3b8] uppercase block">Routing</span>
                  <span className="font-semibold text-sky-400 mt-1 block">Rollover Overflow</span>
                </div>
                <div>
                  <span className="font-mono text-[#94a3b8] uppercase block">Pipeline</span>
                  <span className="font-semibold text-amber-400 mt-1 block">&lt;45s Outbound</span>
                </div>
              </div>
            </div>

            {/* Floating Dimensional Badges */}
            <div className="hidden sm:flex items-center gap-2 absolute -top-3.5 -right-3.5 px-3 py-1.5 rounded-full border border-sky-500/30 bg-black/90 backdrop-blur-md shadow-xl text-xs font-mono text-sky-300 animate-float-subtle">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
              <span>⚡ &lt;60s Speed-to-Lead</span>
            </div>

            <div className="hidden sm:flex items-center gap-2 absolute -bottom-3.5 -left-3.5 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-black/90 backdrop-blur-md shadow-xl text-xs font-mono text-emerald-300 animate-float-delayed">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>📅 Calendar Confirmed: 1:30 PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          KEY TELEMETRY / 3-STAT METRICS BAR
          ========================================================================= */}
      <section className="relative z-10 stats-grid border-y border-white/10 bg-black/60 backdrop-blur-xl">
        {/* Stat 1: 24/7 Coverage */}
        <div className="stat-item group">
          <div className="stat-icon border-emerald-500/30 bg-emerald-500/10 text-emerald-400 group-hover:border-emerald-400/50 group-hover:bg-emerald-500/20 transition-all" aria-hidden="true">
            <Clock className="w-4 h-4 text-emerald-400" />
          </div>
          <div>
            <div className="stat-title text-white flex items-center gap-2">
              <span>24/7/365 Phone Answering</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            </div>
            <p className="stat-desc text-[#94a3b8]">
              Human-grade conversational AI that answers after hours, weekends, and holiday overflows. Zero voicemail.
            </p>
          </div>
        </div>

        {/* Stat 2: Speed-to-lead */}
        <div className="stat-item group">
          <div className="stat-icon border-amber-500/30 bg-amber-500/10 text-amber-400 group-hover:border-amber-400/50 group-hover:bg-amber-500/20 transition-all" aria-hidden="true">
            <Zap className="w-4 h-4 text-amber-400" />
          </div>
          <div>
            <div className="stat-title text-white flex items-center gap-2">
              <span>&lt;60-Second Speed-to-Lead</span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            </div>
            <p className="stat-desc text-[#94a3b8]">
              Instantly contacts web form submissions and leads via autonomous call and SMS before competitors wake up.
            </p>
          </div>
        </div>

        {/* Stat 3: 0s Hold time */}
        <div className="stat-item group">
          <div className="stat-icon border-sky-500/30 bg-sky-500/10 text-sky-400 group-hover:border-sky-400/50 group-hover:bg-sky-500/20 transition-all" aria-hidden="true">
            <ShieldCheck className="w-4 h-4 text-sky-400" />
          </div>
          <div>
            <div className="stat-title text-white flex items-center gap-2">
              <span>0s Hold Time &bull; Live Booking</span>
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
            </div>
            <p className="stat-desc text-[#94a3b8]">
              Books qualified jobs directly into your CRM or calendar with instant SMS confirmation and technician dispatch.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          THE INTERACTIVE COST SAVINGS & LOST REVENUE CALCULATOR
          ========================================================================= */}
      <CostSavingsCalculator />

      {/* =========================================================================
          THE 3 CORE SYSTEMS (AI RECEPTIONIST, SPEED-TO-LEAD AGENT, WEB BUILD & REDESIGN)
          ========================================================================= */}
      <OfferBento />

      {/* =========================================================================
          ABOUT US & THE NAFA STANDARD
          ========================================================================= */}
      <AboutSection />

      {/* =========================================================================
          VALIDATED CASE STUDIES & ROI RESULTS
          ========================================================================= */}
      <SocialProof />

      {/* =========================================================================
          INTERACTIVE FAQ ACCORDION
          ========================================================================= */}
      <FAQAccordion />

      {/* =========================================================================
          FINAL HIGH-CONVERTING CLOSING CTA BANNER
          ========================================================================= */}
      <section className="relative py-14 sm:py-24 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto">
        <div className="rounded-2xl border border-sky-500/25 bg-gradient-to-b from-sky-950/30 via-black/85 to-black p-8 sm:p-14 lg:p-16 text-center relative overflow-hidden shadow-2xl shadow-sky-500/10">
          {/* Subtle top edge glow */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" />
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-sky-500/15 blur-3xl pointer-events-none rounded-full" />

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[-0.03em] text-white leading-[1.1] max-w-3xl mx-auto relative z-10">
            Ready to deploy an AI voice receptionist that never sleeps?
          </h2>

          <p className="mt-4 text-[15px] sm:text-[16px] text-[#94a3b8] max-w-[58ch] mx-auto leading-relaxed relative z-10">
            Book a 15-minute technical discovery call. We will calculate your exact revenue at risk and demo your custom voice agent live on the phone.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 relative z-10">
            <button
              onClick={openSchedule}
              className="btn btn-solid h-[46px] px-8 text-sm font-semibold gap-2 shadow-[0_0_25px_rgba(56,189,248,0.3)] hover:shadow-[0_0_35px_rgba(56,189,248,0.5)] transition-all"
            >
              <span>Book Discovery Call</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </button>

            <button
              onClick={() => openQuoteModal()}
              className="btn btn-ghost h-[46px] px-7 text-sm font-medium text-white border border-white/20 hover:border-white/40 bg-white/[0.04] hover:bg-white/[0.08]"
            >
              <span>Get Custom Quote</span>
            </button>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-[#94a3b8] relative z-10">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              No contracts or long-term lock-in
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Keep your existing phone numbers
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Live within 3 to 7 business days
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
