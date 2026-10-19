"use client";

import React from "react";
import { PhoneCall, Zap, Globe, CheckCircle2, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

interface OfferBentoProps {
  onOpenSchedule: () => void;
  onOpenQuote: () => void;
}

export default function OfferBento({ onOpenSchedule, onOpenQuote }: OfferBentoProps) {
  return (
    <section id="services" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-nafa-gold border border-amber-200/80 text-xs font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Zero Fluff • Fully Done For You
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-nafa-charcoal mb-4">
            Three High-Impact Systems to Grow Your Business
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-nafa-muted max-w-2xl mx-auto leading-relaxed">
            We do not sell complicated software you have to configure yourself. Nafa designs, programs, and deploys every system for you.
          </p>
        </div>

        {/* 3 Core Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Offer 1: AI Call Agent */}
          <div className="apple-glass-card rounded-3xl p-6 sm:p-8 shadow-apple-card border border-white flex flex-col justify-between group hover:border-nafa-gold/40 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-100/70 text-nafa-gold flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <PhoneCall className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-nafa-gold">
                Inbound Voice
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-nafa-charcoal mt-1 mb-3">
                AI Call Agent
              </h3>
              <p className="text-xs sm:text-sm text-nafa-muted leading-relaxed mb-6">
                A 24/7 virtual voice receptionist that sounds human, answers every inbound call instantly, answers business FAQs, and locks appointments directly into your calendar.
              </p>

              <ul className="space-y-2.5 text-xs sm:text-sm text-nafa-charcoal mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero hold time & zero voicemail:</strong> Answers on the first ring 24/7/365.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Full qualification:</strong> Screens callers, checks job requirements, and collects addresses.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>No number change required:</strong> Simple forwarding from your existing business line.</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenQuote}
              className="press-scale w-full py-3 px-4 rounded-xl border border-nafa-charcoal/20 text-nafa-charcoal font-bold text-xs sm:text-sm hover:bg-black/5 flex items-center justify-center gap-1.5 transition-all mt-4"
            >
              <span>Get Quote for AI Receptionist</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Offer 2: Speed-to-Lead Agent */}
          <div className="apple-glass-card rounded-3xl p-6 sm:p-8 shadow-apple-card border border-nafa-gold/40 bg-gradient-to-b from-white to-amber-50/20 flex flex-col justify-between group relative">
            <div className="absolute -top-3 right-6 bg-nafa-gold text-white text-[11px] font-extrabold uppercase tracking-wider py-1 px-3 rounded-full shadow-xs">
              Highest ROI
            </div>

            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center mb-6 group-hover:scale-105 transition-transform shadow-xs">
                <Zap className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-nafa-gold">
                Outbound Follow-up
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-nafa-charcoal mt-1 mb-3">
                Speed-to-Lead Agent
              </h3>
              <p className="text-xs sm:text-sm text-nafa-muted leading-relaxed mb-6">
                An intelligent outbound AI agent that automatically calls new web leads within seconds of submitting a form, quotes, or inquiries, locking them in before competitors even wake up.
              </p>

              <ul className="space-y-2.5 text-xs sm:text-sm text-nafa-charcoal mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Under 5-minute contact:</strong> Beats the industry standard 42-hour response lag.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Warm transfer to your phone:</strong> Connects hot buyers straight to you or your techs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>21x higher qualification:</strong> Reaches customers while your service is top of mind.</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenQuote}
              className="press-scale w-full py-3 px-4 rounded-xl bg-nafa-gold text-white font-bold text-xs sm:text-sm hover:bg-nafa-gold-hover shadow-apple-gold flex items-center justify-center gap-1.5 transition-all mt-4"
            >
              <span>Get Quote for Speed-to-Lead</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Offer 3: High-Converting AI Website */}
          <div className="apple-glass-card rounded-3xl p-6 sm:p-8 shadow-apple-card border border-white flex flex-col justify-between group hover:border-nafa-gold/40 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-stone-100 text-nafa-charcoal flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Globe className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-nafa-muted">
                Digital Foundation
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-nafa-charcoal mt-1 mb-3">
                High-Converting Website
              </h3>
              <p className="text-xs sm:text-sm text-nafa-muted leading-relaxed mb-6">
                A custom, modern website built specifically for appointment-driven businesses. Optimized for mobile, fast loading, high conversion, and pre-wired for call and lead automation.
              </p>

              <ul className="space-y-2.5 text-xs sm:text-sm text-nafa-charcoal mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Domain and ultra-fast hosting included:</strong> Zero technical overhead for you.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Engineered for conversion:</strong> Turns passive search clicks into booked calls and form leads.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Pre-integrated with AI:</strong> Direct triggers to your Speed-to-Lead and voice agents.</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenQuote}
              className="press-scale w-full py-3 px-4 rounded-xl border border-nafa-charcoal/20 text-nafa-charcoal font-bold text-xs sm:text-sm hover:bg-black/5 flex items-center justify-center gap-1.5 transition-all mt-4"
            >
              <span>Get Quote for AI Website</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Growth Bundle Feature Box */}
        <div className="apple-glass rounded-3xl p-6 sm:p-10 shadow-apple-card border border-nafa-gold/30 bg-gradient-to-r from-nafa-surface via-amber-50/30 to-nafa-surface">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center lg:text-left">
              <span className="text-xs font-black uppercase tracking-wider text-nafa-gold bg-amber-100/70 px-3 py-1 rounded-full inline-block">
                ★ Recommended Package
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-nafa-charcoal">
                The Full Growth System
              </h3>
              <p className="text-xs sm:text-sm text-nafa-muted max-w-xl">
                Combine the <strong>High-Converting Website + Speed-to-Lead + AI Call Agent</strong> into a single automated pipeline. Never miss an inbound phone call, and contact every web inquiry within 5 minutes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
              <button
                onClick={onOpenQuote}
                className="press-scale w-full sm:w-auto py-3.5 px-6 rounded-2xl bg-nafa-gold hover:bg-nafa-gold-hover text-white font-bold text-sm shadow-apple-gold flex items-center justify-center gap-2"
              >
                <span>Request Bundle Pricing</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenSchedule}
                className="press-scale w-full sm:w-auto py-3.5 px-5 rounded-2xl bg-white hover:bg-stone-50 border border-nafa-border text-nafa-charcoal font-semibold text-sm flex items-center justify-center gap-2"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
