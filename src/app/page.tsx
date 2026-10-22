"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  PhoneCall,
  Clock,
  TrendingDown,
  Users,
  ShieldCheck,
  Zap,
  Sparkles,
  CheckCircle2,
  PhoneForwarded,
  Volume2,
  Calendar,
  MessageSquareQuote,
  Star,
  Activity,
  Bot,
} from "lucide-react";
import { useSiteModals } from "@/context/ModalContext";
import CostSavingsCalculator from "@/components/CostSavingsCalculator";
import OfferBento from "@/components/OfferBento";
import InteractiveAudioDemo from "@/components/InteractiveAudioDemo";
import HowItWorks from "@/components/HowItWorks";
import AboutSection from "@/components/AboutSection";
import SocialProof from "@/components/SocialProof";
import FAQAccordion from "@/components/FAQAccordion";

export default function HomePage() {
  const { openSchedule, openQuoteModal } = useSiteModals();
  const [activeTab, setActiveTab] = useState<"after-hours" | "overflow" | "speed-to-lead">("after-hours");

  return (
    <div className="relative w-full overflow-hidden bg-black text-white selection:bg-white selection:text-black">
      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section
        id="top"
        className="relative pt-12 sm:pt-20 pb-16 sm:pb-24 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto flex flex-col justify-center min-h-[calc(100vh-80px)]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Copy (7 cols) */}
          <div className="lg:col-span-7 max-w-[720px]">
            {/* Live Operational Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="badge-pill appear appear--soft inline-flex items-center gap-2 mb-6"
            >
              <svg
                className="badge-star text-white shrink-0"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
              </svg>
              <span className="text-[12.5px] tracking-[-0.01em] text-white/90">
                Operational AI Voice & Speed-to-Lead Infrastructure
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-sans text-[36px] sm:text-[52px] lg:text-[58px] font-medium leading-[1.05] tracking-[-0.035em] text-white"
            >
              Deploy{" "}
              <em className="font-editorial not-italic text-[#9a9a9a]">
                AI call agents
              </em>{" "}
              that
              <br />
              answer every lead in seconds.
            </motion.h1>

            {/* Subhead Lede */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-[560px] text-[15px] sm:text-[17px] leading-[1.55] text-[#9a9a9a]"
            >
              Custom voice receptionists and immediate response pipelines that
              answer inbound phone calls, qualify caller intent, and book revenue onto
              your calendar 24/7/365. Zero hold times. Zero missed opportunities.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-3.5"
            >
              <button
                onClick={openSchedule}
                className="btn btn-solid h-[44px] px-6 text-[13.5px] font-semibold gap-2 shadow-lg"
              >
                <span>Book Discovery Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#demo"
                className="btn btn-ghost h-[44px] px-6 text-[13.5px] font-medium gap-2 text-white/90"
              >
                <Volume2 className="w-4 h-4 text-white/80" />
                <span>Hear Voice Demo</span>
              </a>

              <a
                href="#roi-calculator"
                className="btn btn-ghost h-[44px] px-5 text-[13.5px] font-medium text-[#9a9a9a] hover:text-white"
              >
                <span>Audit Lost Revenue</span>
              </a>
            </motion.div>

            {/* Trust Assurance Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-[#9a9a9a]"
            >
              <div className="flex items-center gap-1.5 text-white/80">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Keep your current phone number</span>
              </div>
              <div className="flex items-center gap-1.5 text-white/80">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Live in 3 to 7 business days</span>
              </div>
              <div className="flex items-center gap-1.5 text-white/80">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>100% US direct engineering</span>
              </div>
            </motion.div>
          </div>

          {/* Hero Live Signal Telemetry Console (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="interactive-card p-6 sm:p-7 relative border-white/20 bg-gradient-to-b from-white/[0.08] via-black/80 to-black/95 shadow-2xl">
              {/* Console Top Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="relative flex items-center justify-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                    <span className="absolute w-5 h-5 rounded-full bg-emerald-400/40 radar-ring"></span>
                  </div>
                  <span className="text-xs font-mono text-white font-medium uppercase tracking-wider">
                    Nafa Core Telemetry
                  </span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400/90 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                  STREAMING &bull; 0.38s LATENCY
                </span>
              </div>

              {/* Simulated Live Call Card */}
              <div className="mt-5 p-4 rounded-md bg-white/[0.03] border border-white/10 space-y-3">
                <div className="flex items-center justify-between text-xs text-[#9a9a9a]">
                  <span className="flex items-center gap-1.5">
                    <PhoneCall className="w-3.5 h-3.5 text-white" />
                    <span>Inbound Caller: +1 (512) 892-XXXX</span>
                  </span>
                  <span className="font-mono text-white/70">00:34</span>
                </div>

                {/* Animated Waveform Visualizer */}
                <div className="h-10 bg-black/60 rounded px-3 flex items-center justify-between gap-1 border border-white/8 overflow-hidden">
                  {Array.from({ length: 28 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-1 bg-white/70 rounded-full wave-anim"
                      style={{
                        animationDelay: `${(i % 7) * 0.15}s`,
                        animationDuration: `${0.8 + (i % 5) * 0.15}s`,
                      }}
                    />
                  ))}
                </div>

                {/* Live Transcript Snippet */}
                <div className="text-xs space-y-2 pt-1 font-sans">
                  <div className="text-[#9a9a9a]">
                    <span className="text-white/40 uppercase font-mono text-[10px] block">Caller</span>
                    &ldquo;Hi, our main water heater burst and we need an emergency technician out today.&rdquo;
                  </div>
                  <div className="text-white/90 pl-3 border-l-2 border-white/40">
                    <span className="text-emerald-400 uppercase font-mono text-[10px] block">Nafa AI</span>
                    &ldquo;I have got our master plumber Kevin available at 1:30 PM. I am reserving that right now on the calendar — could I get your service address?&rdquo;
                  </div>
                </div>
              </div>

              {/* Bottom Quick Toggles */}
              <div className="mt-5 pt-4 border-t border-white/10 grid grid-cols-3 gap-2">
                <button
                  onClick={() => setActiveTab("after-hours")}
                  className={`p-2 rounded text-center transition-all cursor-pointer ${
                    activeTab === "after-hours"
                      ? "bg-white/15 border border-white/30 text-white"
                      : "bg-white/[0.02] border border-white/8 text-[#9a9a9a] hover:text-white"
                  }`}
                >
                  <div className="text-[10px] uppercase font-mono">Mode</div>
                  <div className="text-xs font-semibold mt-0.5">24/7 After Hours</div>
                </button>

                <button
                  onClick={() => setActiveTab("overflow")}
                  className={`p-2 rounded text-center transition-all cursor-pointer ${
                    activeTab === "overflow"
                      ? "bg-white/15 border border-white/30 text-white"
                      : "bg-white/[0.02] border border-white/8 text-[#9a9a9a] hover:text-white"
                  }`}
                >
                  <div className="text-[10px] uppercase font-mono">Routing</div>
                  <div className="text-xs font-semibold mt-0.5">Rollover Overflow</div>
                </button>

                <button
                  onClick={() => setActiveTab("speed-to-lead")}
                  className={`p-2 rounded text-center transition-all cursor-pointer ${
                    activeTab === "speed-to-lead"
                      ? "bg-white/15 border border-white/30 text-white"
                      : "bg-white/[0.02] border border-white/8 text-[#9a9a9a] hover:text-white"
                  }`}
                >
                  <div className="text-[10px] uppercase font-mono">Pipeline</div>
                  <div className="text-xs font-semibold mt-0.5">&lt;45s Outbound</div>
                </button>
              </div>

              {/* Dynamic Description Box */}
              <div className="mt-3 p-3 rounded bg-white/[0.02] border border-white/5 text-[11px] text-[#9a9a9a] leading-relaxed">
                {activeTab === "after-hours" && (
                  <span>
                    <strong>After-Hours Protocol:</strong> Picks up on 1st ring when office is closed. Books appointments directly to Google/Outlook, dispatches emergency on-call team via SMS.
                  </span>
                )}
                {activeTab === "overflow" && (
                  <span>
                    <strong>Overflow Protocol:</strong> When your front desk is on another line, the AI answers simultaneously. Zero busy signals, zero callers sent to voicemail.
                  </span>
                )}
                {activeTab === "speed-to-lead" && (
                  <span>
                    <strong>Speed-to-Lead Protocol:</strong> Instantly connects with web and Facebook form fills in 45 seconds while buyer intent is at its highest point.
                  </span>
                )}
              </div>
            </div>
          </motion.div>
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
              Instantly contacts web form submissions and Facebook leads via autonomous call and SMS before competitors wake up.
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
          THE HARD REALITY OF LOCAL BUSINESS (WHY VOICEMAIL DESTROYS REVENUE)
          ========================================================================= */}
      <section className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-pill inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
            <span className="text-[12.5px] text-white/90">The Leaking Pipeline</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[-0.035em] text-white leading-[1.1]">
            Every unanswered call goes straight to{" "}
            <em className="font-editorial not-italic text-[#9a9a9a]">
              your competitor.
            </em>
          </h2>

          <p className="mt-4 text-[15px] sm:text-[16px] text-[#9a9a9a] max-w-2xl mx-auto leading-relaxed">
            When a customer has a broken pipe, severe toothache, legal emergency, or needs a project quote, they do not leave voicemails. They hang up and call the next link on Google.
          </p>
        </div>

        {/* 3 Reality Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="interactive-card p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div className="text-4xl sm:text-5xl font-mono font-bold text-white tracking-tight mb-2">
                78%
              </div>
              <h3 className="text-base font-semibold text-white mb-2">
                Buy from the First Responder
              </h3>
              <p className="text-xs sm:text-sm text-[#9a9a9a] leading-relaxed">
                Harvard Business Review research proves that calling an inbound lead within 5 minutes makes you <span className="text-white font-medium">21x more likely</span> to qualify them than waiting 30 minutes.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/8 text-[11px] font-mono text-white/50">
              Source: Harvard Business Review Lead Response Study
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="interactive-card p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
                <TrendingDown className="w-5 h-5 text-rose-400" />
              </div>
              <div className="text-4xl sm:text-5xl font-mono font-bold text-white tracking-tight mb-2">
                62%
              </div>
              <h3 className="text-base font-semibold text-white mb-2">
                Of Business Calls Go Unanswered
              </h3>
              <p className="text-xs sm:text-sm text-[#9a9a9a] leading-relaxed">
                Service business owners and technicians are busy servicing clients, driving, or closed for the night. More than half of calls hit voicemail — and <span className="text-white font-medium">85% hang up without leaving a message</span>.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/8 text-[11px] font-mono text-white/50">
              Source: Telecom & Inbound Consumer Behavior Audits
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="interactive-card p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div className="text-4xl sm:text-5xl font-mono font-bold text-white tracking-tight mb-2">
                $54,000+
              </div>
              <h3 className="text-base font-semibold text-white mb-2">
                Cost of a Single Human Receptionist
              </h3>
              <p className="text-xs sm:text-sm text-[#9a9a9a] leading-relaxed">
                Human staff require salaries, benefits, taxes, sick days, and only cover 8 hours a day, 5 days a week. Nafa provides 24/7/365 coverage for a tiny fraction of the cost with zero downtime.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/8 text-[11px] font-mono text-white/50">
              Source: Bureau of Labor Statistics US Receptionist Benchmarks
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          THE INTERACTIVE COST SAVINGS & LOST REVENUE CALCULATOR
          ========================================================================= */}
      <CostSavingsCalculator />

      {/* =========================================================================
          THE 3 CORE SYSTEMS BENTO
          ========================================================================= */}
      <OfferBento />

      {/* =========================================================================
          LIVE INTERACTIVE VOICE & SPEED-TO-LEAD SIMULATOR
          ========================================================================= */}
      <InteractiveAudioDemo />

      {/* =========================================================================
          DEPLOYMENT ARCHITECTURE (HOW IT WORKS)
          ========================================================================= */}
      <HowItWorks />

      {/* =========================================================================
          ABOUT US & THE NAFA STANDARD (EXPLICIT USER REQUIREMENT)
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
      <section className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-xl border border-white/20 bg-gradient-to-b from-white/[0.08] via-black/90 to-black p-8 sm:p-14 lg:p-16 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Subtle top edge glow */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

          <div className="badge-pill inline-flex items-center gap-2 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span className="text-[12.5px] text-white/90">
              Start Capturing Unanswered Revenue
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[-0.035em] text-white leading-[1.1] max-w-3xl mx-auto">
            Ready to deploy an AI voice receptionist that{" "}
            <em className="font-editorial not-italic text-[#9a9a9a]">
              never sleeps?
            </em>
          </h2>

          <p className="mt-5 text-[15px] sm:text-[17px] text-[#9a9a9a] max-w-xl mx-auto leading-relaxed">
            Book a 15-minute technical discovery call. We will calculate your exact revenue at risk and demo your custom voice agent live on the phone.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={openSchedule}
              className="btn btn-solid h-[46px] px-8 text-sm font-semibold gap-2 shadow-xl"
            >
              <span>Book Discovery Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => openQuoteModal()}
              className="btn btn-ghost h-[46px] px-7 text-sm font-medium text-white"
            >
              <MessageSquareQuote className="w-4 h-4 text-white/70 mr-1" />
              <span>Get Custom Quote</span>
            </button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-[#9a9a9a]">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              No contracts or long-term lock-in
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Keep your existing phone numbers
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Live within 3 to 7 business days
            </span>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
