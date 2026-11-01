"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  PhoneCall,
  Zap,
  Globe,
  Terminal,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Users,
  ChevronDown,
  ArrowUp,
  Sparkles,
} from "lucide-react";
import { useSiteModals } from "@/context/ModalContext";
import CostSavingsCalculator from "@/components/CostSavingsCalculator";
import FAQAccordion from "@/components/FAQAccordion";

export default function DetailsTailSection() {
  const { openSchedule, openQuoteModal } = useSiteModals();
  const [activeTab, setActiveTab] = useState<"all" | "voice" | "speed" | "web" | "standards" | "calculator" | "faq">("all");

  const scrollToAnchor = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="details" className="relative py-16 sm:py-24 border-t border-white/10 bg-black/60 backdrop-blur-2xl">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-white/[0.02] blur-[140px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        {/* Tail Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="badge-pill inline-flex items-center gap-1.5 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>Deep Dive & Complete Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-4 [text-wrap:balance]">
            The Details Section
          </h2>
          <p className="text-sm sm:text-base text-muted max-w-2xl mx-auto leading-relaxed">
            All detailed specifications, full technical workflows, engineering standards, calculator models, and complete documentation in one place.
          </p>

          {/* Quick-Jump Navigation Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs">
            <button
              onClick={() => scrollToAnchor("details-voice")}
              className="px-3.5 py-1.5 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/10 text-white transition-colors"
            >
              Voice Agent Spec ↓
            </button>
            <button
              onClick={() => scrollToAnchor("details-speed")}
              className="px-3.5 py-1.5 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/10 text-white transition-colors"
            >
              Speed-to-Lead Workflow ↓
            </button>
            <button
              onClick={() => scrollToAnchor("details-web")}
              className="px-3.5 py-1.5 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/10 text-white transition-colors"
            >
              Web Architecture ↓
            </button>
            <button
              onClick={() => scrollToAnchor("details-calculator")}
              className="px-3.5 py-1.5 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/10 text-white transition-colors"
            >
              ROI Model ↓
            </button>
            <button
              onClick={() => scrollToAnchor("details-standards")}
              className="px-3.5 py-1.5 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/10 text-white transition-colors"
            >
              Engineering Standards ↓
            </button>
            <button
              onClick={() => scrollToAnchor("details-faq")}
              className="px-3.5 py-1.5 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/10 text-white transition-colors"
            >
              Technical FAQs ↓
            </button>
          </div>
        </div>

        {/* =========================================================================
            DETAIL 1: VOICE CALL AI AGENT
            ========================================================================= */}
        <div id="details-voice" className="mb-20 scroll-mt-28">
          <div className="apple-glass rounded-xl p-8 sm:p-12 border border-white/15 relative overflow-hidden">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-8 pb-8 border-b border-white/10">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs text-muted font-mono">
                  <PhoneCall className="w-3.5 h-3.5 text-white" />
                  <span>Specification Sheet · Inbound Voice Architecture</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight">
                  Voice Call AI Agent: In-Depth Breakdown
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Engineered to answer 100% of incoming business phone calls with natural, latency-free speech. Operates 24/7/365, eliminates hold times, qualifies caller intent, and inserts scheduled appointments directly into your calendar.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => openQuoteModal("AI Voice Agent Inbound")}
                  className="btn btn-solid h-[42px] px-5 text-xs font-semibold"
                >
                  Get Voice Agent Quote
                </button>
                <Link
                  href="/services/ai-call-agent"
                  className="btn btn-ghost h-[42px] px-4 text-xs font-medium text-white"
                >
                  Full Route Page →
                </Link>
              </div>
            </div>

            {/* Technical Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="p-4 rounded-lg border border-white/10 bg-white/[0.02]">
                <div className="text-xs text-muted font-mono mb-1">Latency Floor</div>
                <div className="text-xl font-semibold text-white">&lt;500ms</div>
                <p className="text-xs text-muted mt-1">Streaming audio inference ensures natural interruption handling without robotic delays.</p>
              </div>

              <div className="p-4 rounded-lg border border-white/10 bg-white/[0.02]">
                <div className="text-xs text-muted font-mono mb-1">Telephony Bridge</div>
                <div className="text-xl font-semibold text-white">Keep Your #</div>
                <p className="text-xs text-muted mt-1">Simple SIP trunk forward from your current carrier (Verizon, AT&T, RingCentral, T-Mobile).</p>
              </div>

              <div className="p-4 rounded-lg border border-white/10 bg-white/[0.02]">
                <div className="text-xs text-muted font-mono mb-1">Calendar & CRM</div>
                <div className="text-xl font-semibold text-white">Live Sync</div>
                <p className="text-xs text-muted mt-1">Direct two-way booking into Google Calendar, Outlook, ServiceTitan, Jobber, and HubSpot.</p>
              </div>

              <div className="p-4 rounded-lg border border-white/10 bg-white/[0.02]">
                <div className="text-xs text-muted font-mono mb-1">Concurrency</div>
                <div className="text-xl font-semibold text-white">Unlimited Lines</div>
                <p className="text-xs text-muted mt-1">Answers 10 or 100 simultaneous calls during storm spikes or marketing surges with zero busy signals.</p>
              </div>
            </div>

            {/* Detailed Feature Points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5 p-3 rounded bg-white/[0.02] border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Custom Knowledge Base & Pricing Logic:</strong>
                  <span className="text-muted">Trained exclusively on your services, service areas, emergency rates, and dispatch rules.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded bg-white/[0.02] border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Warm Live Transfers:</strong>
                  <span className="text-muted">Can dial out to your on-call technician or manager for high-value VIP callers or emergency jobs.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded bg-white/[0.02] border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Automated SMS Follow-Up:</strong>
                  <span className="text-muted">Instantly texts the caller their booking confirmation, address link, and technician arrival window.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded bg-white/[0.02] border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Full Audio Recordings & Transcripts:</strong>
                  <span className="text-muted">Every call is transcribed in real-time with summary notes delivered directly to your email or SMS.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            DETAIL 2: SPEED-TO-LEAD OUTBOUND PIPELINE
            ========================================================================= */}
        <div id="details-speed" className="mb-20 scroll-mt-28">
          <div className="apple-glass rounded-xl p-8 sm:p-12 border border-white/15 relative overflow-hidden">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-8 pb-8 border-b border-white/10">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs text-muted font-mono">
                  <Zap className="w-3.5 h-3.5 text-white" />
                  <span>Workflow Specification · Outbound Lead Capture</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight">
                  Speed-to-Lead Agent: 4-Step Pipeline
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Average business response time is 42 hours. Studies prove that contacting leads within 5 minutes makes you 21x more likely to convert. Our outbound agent dials new form fills and ad inquiries in under 60 seconds.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => openQuoteModal("Speed-to-Lead Outbound Pipeline")}
                  className="btn btn-solid h-[42px] px-5 text-xs font-semibold"
                >
                  Get Speed-to-Lead Quote
                </button>
                <Link
                  href="/services/speed-to-lead"
                  className="btn btn-ghost h-[42px] px-4 text-xs font-medium text-white"
                >
                  Full Route Page →
                </Link>
              </div>
            </div>

            {/* 4-Step Detailed Workflow Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-lg border border-white/10 bg-white/[0.02] space-y-2">
                <div className="text-xs font-mono text-muted">STEP 01</div>
                <h4 className="text-base font-medium text-white">Lead Submits Form</h4>
                <p className="text-xs text-muted leading-relaxed">
                  Prospect submits through your website quote form, Google Local Services, Facebook Lead Ads, or Angi Leads.
                </p>
              </div>

              <div className="p-5 rounded-lg border border-white/10 bg-white/[0.02] space-y-2">
                <div className="text-xs font-mono text-muted">STEP 02</div>
                <h4 className="text-base font-medium text-white">Autonomous Call in &lt;60s</h4>
                <p className="text-xs text-muted leading-relaxed">
                  The automated pipeline triggers immediately, placing an outbound phone call while the homeowner is still on your site.
                </p>
              </div>

              <div className="p-5 rounded-lg border border-white/10 bg-white/[0.02] space-y-2">
                <div className="text-xs font-mono text-muted">STEP 03</div>
                <h4 className="text-base font-medium text-white">Instant Qualification</h4>
                <p className="text-xs text-muted leading-relaxed">
                  The AI introduces your company, verifies their timeline and address, and screens for scope and budget requirements.
                </p>
              </div>

              <div className="p-5 rounded-lg border border-white/10 bg-white/[0.02] space-y-2">
                <div className="text-xs font-mono text-muted">STEP 04</div>
                <h4 className="text-base font-medium text-white">Warm Transfer or Booking</h4>
                <p className="text-xs text-muted leading-relaxed">
                  Books them onto your estimator's calendar, or transfers the live phone call directly into your sales team's hands.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            DETAIL 3: WEB ARCHITECTURE & REDESIGN
            ========================================================================= */}
        <div id="details-web" className="mb-20 scroll-mt-28">
          <div className="apple-glass rounded-xl p-8 sm:p-12 border border-white/15 relative overflow-hidden">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-8 pb-8 border-b border-white/10">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs text-muted font-mono">
                  <Globe className="w-3.5 h-3.5 text-white" />
                  <span>Technical Blueprint · High-Performance Web Build</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight">
                  High-Converting Web Architecture
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Websites built on modern Next.js and React 19 engineering. Engineered from day one with one-thumb mobile ergonomics, sub-2-second load times, and pre-wired webhook pipelines for instant lead capture.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => openQuoteModal("Custom Website Build & Redesign")}
                  className="btn btn-solid h-[42px] px-5 text-xs font-semibold"
                >
                  Get Website Quote
                </button>
                <Link
                  href="/services/ai-website"
                  className="btn btn-ghost h-[42px] px-4 text-xs font-medium text-white"
                >
                  Full Route Page →
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-lg border border-white/10 bg-white/[0.02] space-y-1.5">
                <div className="font-semibold text-white">⚡ Sub-2-Second Load Times</div>
                <p className="text-muted leading-relaxed">Lighthouse 90+ across performance and accessibility. Over 50% of mobile users bounce if a page takes &gt;3s.</p>
              </div>

              <div className="p-4 rounded-lg border border-white/10 bg-white/[0.02] space-y-1.5">
                <div className="font-semibold text-white">📱 One-Thumb Mobile Ergonomics</div>
                <p className="text-muted leading-relaxed">Sticky booking and quote bars placed within natural thumb reach, converting traffic into calls in seconds.</p>
              </div>

              <div className="p-4 rounded-lg border border-white/10 bg-white/[0.02] space-y-1.5">
                <div className="font-semibold text-white">🔌 Pre-Wired Automation Hooks</div>
                <p className="text-muted leading-relaxed">Headless Formspree & CRM webhooks pre-configured to trigger speed-to-lead outbound calls automatically.</p>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            DETAIL 4: FULL INTERACTIVE CALCULATOR MODEL
            ========================================================================= */}
        <div id="details-calculator" className="mb-20 scroll-mt-28">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight">
              Interactive Revenue Recovery Model
            </h3>
            <p className="text-xs sm:text-sm text-muted mt-2">
              Calculate your exact monthly revenue at risk based on missed call volume and typical contract values.
            </p>
          </div>
          <CostSavingsCalculator />
        </div>

        {/* =========================================================================
            DETAIL 5: THE NAFA ENGINEERING STANDARDS
            ========================================================================= */}
        <div id="details-standards" className="mb-20 scroll-mt-28">
          <div className="apple-glass rounded-xl p-8 sm:p-12 border border-white/15 relative overflow-hidden">
            <div className="max-w-3xl mb-10">
              <div className="badge-pill inline-flex items-center gap-1.5 mb-3">
                <Terminal className="w-3.5 h-3.5 text-white" />
                <span>Quality & Security Commitments</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight mb-2">
                The Nafa Engineering Standards
              </h3>
              <p className="text-sm text-muted">
                How we build, deploy, and guarantee operational reliability for every client infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-lg border border-white/10 bg-white/[0.02] space-y-2">
                <div className="flex items-center gap-2 text-white font-medium">
                  <Terminal className="w-4 h-4 text-white" />
                  <h4>100% Direct Systems Engineering</h4>
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  We do not resell white-labeled templates or generic wrappers. Every voice receptionist and automated pipeline is custom-coded, prompt-engineered, and tuned by our core engineering team.
                </p>
              </div>

              <div className="p-5 rounded-lg border border-white/10 bg-white/[0.02] space-y-2">
                <div className="flex items-center gap-2 text-white font-medium">
                  <Zap className="w-4 h-4 text-white" />
                  <h4>Sub-Second Latency Benchmark</h4>
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  Real conversation demands sub-500ms voice response times. Our voice pipeline utilizes streaming inference so the caller experiences immediate, natural conversation without awkward pauses.
                </p>
              </div>

              <div className="p-5 rounded-lg border border-white/10 bg-white/[0.02] space-y-2">
                <div className="flex items-center gap-2 text-white font-medium">
                  <Lock className="w-4 h-4 text-white" />
                  <h4>Air-Gapped Privacy & Security</h4>
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  Caller PII, customer lists, and audio streams are processed in secure SOC2-compliant enterprise environments with strict tenant isolation. Your customer database is never shared or trained on public models.
                </p>
              </div>

              <div className="p-5 rounded-lg border border-white/10 bg-white/[0.02] space-y-2">
                <div className="flex items-center gap-2 text-white font-medium">
                  <Users className="w-4 h-4 text-white" />
                  <h4>Dedicated Systems Architect</h4>
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  You are assigned a named US-based systems architect who monitors your agent's performance, fine-tunes prompt models weekly, and handles custom calendar/CRM integrations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            DETAIL 6: COMPLETE TECHNICAL FAQS
            ========================================================================= */}
        <div id="details-faq" className="scroll-mt-28">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight">
              Technical Frequently Asked Questions
            </h3>
            <p className="text-xs sm:text-sm text-muted mt-2">
              Everything you need to know about phone setup, carrier compatibility, onboarding, and pricing.
            </p>
          </div>
          <FAQAccordion />
        </div>

        {/* Back to Top Button */}
        <div className="mt-16 text-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/10 text-xs text-muted hover:text-white transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Return to Top</span>
          </button>
        </div>
      </div>
    </section>
  );
}
