"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  PhoneCall,
  Zap,
  Globe,
  CheckCircle2,
  ArrowRight,
  Clock,
  Sparkles,
} from "lucide-react";
import { useSiteModals } from "@/context/ModalContext";

export default function OfferBento() {
  const { openQuoteModal } = useSiteModals();

  return (
    <section id="services" className="relative py-14 sm:py-20 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-500/30 bg-sky-950/20 text-xs font-mono text-sky-300 mb-4 uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-sky-400" />
          <span>Core Offerings & Architecture</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[-0.03em] text-white leading-[1.1]">
          Engineered to capture every dollar your competitors miss.
        </h2>

        <p className="mt-4 text-[15px] sm:text-[16px] text-[#94a3b8] max-w-[65ch] mx-auto leading-relaxed">
          Three dedicated systems built directly into your operations. High-speed, done-for-you, and zero template fluff.
        </p>
      </div>

      {/* 3 Asymmetric Architectural Bento Cards (Flattened Hierarchy) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {/* =========================================================================
            CARD 1: AI VOICE RECEPTIONIST (INBOUND INTELLIGENCE)
            ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="interactive-card p-6 sm:p-8 flex flex-col justify-between group border-sky-500/20 hover:border-sky-500/40 bg-gradient-to-b from-sky-950/20 via-black/80 to-black/95 relative overflow-hidden"
        >
          {/* Subtle top edge glow */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />

          <div>
            {/* Header row */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-sky-300 font-semibold">
                  24/7 Phone Answering
                </span>
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-sky-300 px-2.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/25">
                Inbound Voice
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-medium text-white tracking-[-0.02em] mb-3">
              AI Voice Receptionist
            </h3>

            <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed mb-4">
              Natural conversational voice model that picks up within 1 second, resolves common customer questions, and books qualified appointments.
            </p>

            {/* Flattened Telemetry Strip */}
            <div className="py-3.5 border-y border-white/10 my-4 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#94a3b8] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Latency: 0.38s
                </span>
                <span className="text-sky-300">Natural Cadence</span>
              </div>
              {/* Mini voice frequency animation */}
              <div className="flex items-center gap-1 h-3 pt-1">
                <div className="w-1 bg-sky-400/80 rounded-full animate-eq-1" />
                <div className="w-1 bg-sky-300/80 rounded-full animate-eq-2" />
                <div className="w-1 bg-emerald-400/80 rounded-full animate-eq-3" />
                <div className="w-1 bg-sky-400/80 rounded-full animate-eq-4" />
                <div className="w-1 bg-sky-300/80 rounded-full animate-eq-5" />
                <div className="w-1 bg-emerald-400/80 rounded-full animate-eq-2" />
                <div className="w-1 bg-sky-400/80 rounded-full animate-eq-1" />
                <div className="w-1 bg-sky-300/80 rounded-full animate-eq-3" />
              </div>
            </div>

            {/* Bullet Points */}
            <ul className="space-y-2.5 text-xs text-white/90 pt-1">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                <span className="leading-snug">Answers every inbound in &lt;1s (Zero voicemail)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                <span className="leading-snug">Handles after-hours, weekends, & overflow</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                <span className="leading-snug">Syncs directly with Google, Outlook, or CRM</span>
              </li>
            </ul>
          </div>

          {/* Action Row */}
          <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-3 mt-6">
            <button
              onClick={() => openQuoteModal("AI Voice Receptionist")}
              className="btn btn-solid flex-1 h-[40px] text-xs font-semibold shadow-[0_0_15px_rgba(56,189,248,0.2)]"
            >
              <span>Configure System</span>
            </button>
            <Link
              href="/services/ai-call-agent"
              className="text-xs font-medium text-sky-300 hover:text-white flex items-center gap-1 transition-colors px-2.5 py-2"
            >
              <span>Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.div>

        {/* =========================================================================
            CARD 2: SPEED-TO-LEAD AGENT (FEATURED CONVERSION ACCELERATOR)
            ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="interactive-card p-6 sm:p-8 flex flex-col justify-between group border-amber-500/30 hover:border-amber-500/50 bg-gradient-to-b from-amber-950/25 via-black/80 to-black/95 shadow-xl shadow-amber-500/5 relative overflow-hidden"
        >
          {/* Subtle top edge glow */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />

          <div>
            {/* Header row */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Zap className="w-4 h-4" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-amber-300 font-semibold">
                  &lt;60s Lead Response
                </span>
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-amber-300 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 font-semibold">
                High Conversion
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-medium text-white tracking-[-0.02em] mb-3">
              Speed-to-Lead Agent
            </h3>

            <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed mb-4">
              The instant a lead fills a form or clicks an ad, an autonomous outbound call & SMS contacts them in seconds before competitors wake up.
            </p>

            {/* Flattened 60s Response Timeline Strip */}
            <div className="py-3.5 border-y border-white/10 my-4 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-amber-300">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  Target: &lt;60s Outbound
                </span>
                <span className="text-emerald-400 font-semibold">94% Contact Rate</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-[#94a3b8] pt-1">
                <span>0s Form In</span>
                <span>→</span>
                <span className="text-amber-300 font-medium">12s AI Dial</span>
                <span>→</span>
                <span className="text-emerald-300 font-medium">45s Booked</span>
              </div>
            </div>

            {/* Bullet Points */}
            <ul className="space-y-2.5 text-xs text-white/90 pt-1">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-snug">Autonomously calls new website & ad leads in &lt;60s</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-snug">Qualifies project scope & budget requirements</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-snug">Direct dispatch to on-call technician or closer</span>
              </li>
            </ul>
          </div>

          {/* Action Row */}
          <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-3 mt-6">
            <button
              onClick={() => openQuoteModal("Speed-to-Lead Agent")}
              className="btn btn-solid flex-1 h-[40px] text-xs font-semibold shadow-[0_0_20px_rgba(245,158,11,0.25)] hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]"
            >
              <span>Deploy Speed Pipeline</span>
            </button>
            <Link
              href="/services/speed-to-lead"
              className="text-xs font-medium text-amber-300 hover:text-white flex items-center gap-1 transition-colors px-2.5 py-2"
            >
              <span>Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.div>

        {/* =========================================================================
            CARD 3: WEBSITE BUILD & REDESIGN (THE HIGH-CONVERTING FRONTEND)
            ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="interactive-card p-6 sm:p-8 flex flex-col justify-between group border-emerald-500/20 hover:border-emerald-500/40 bg-gradient-to-b from-emerald-950/20 via-black/80 to-black/95 relative overflow-hidden"
        >
          {/* Subtle top edge glow */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />

          <div>
            {/* Header row */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Globe className="w-4 h-4" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-300 font-semibold">
                  New Site or Redesign
                </span>
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-300 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25">
                Modern Web
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-medium text-white tracking-[-0.02em] mb-3">
              Website Build & Redesign
            </h3>

            <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed mb-4">
              Brand new custom web builds or full modern redesigns engineered for razor-sharp speed, mobile conversion, and seamless AI scheduling.
            </p>

            {/* Flattened Performance Metric Strip */}
            <div className="py-3.5 border-y border-white/10 my-4 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-emerald-300 font-semibold">Lighthouse 100/100</span>
                <span className="text-[#94a3b8]">0.1s First Paint</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-[#94a3b8] pt-1">
                <span className="text-emerald-400">✓ 100% Code Ownership</span>
                <span>Zero CMS Bloat</span>
              </div>
            </div>

            {/* Bullet Points */}
            <ul className="space-y-2.5 text-xs text-white/90 pt-1">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-snug">Brand new custom site or full modern redesign</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-snug">Embedded interactive scheduling & quote calculators</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-snug">Mobile-first performance & SEO architecture</span>
              </li>
            </ul>
          </div>

          {/* Action Row */}
          <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-3 mt-6">
            <button
              onClick={() => openQuoteModal("Website Build & Redesign")}
              className="btn btn-solid flex-1 h-[40px] text-xs font-semibold shadow-[0_0_15px_rgba(16,185,129,0.2)]"
            >
              <span>Request Web Build</span>
            </button>
            <Link
              href="/services/ai-website"
              className="text-xs font-medium text-emerald-300 hover:text-white flex items-center gap-1 transition-colors px-2.5 py-2"
            >
              <span>Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
