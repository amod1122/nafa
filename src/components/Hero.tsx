"use client";

import React from "react";
import { Phone, Calendar, ArrowRight, ShieldCheck, Zap, Sparkles, CheckCircle2, Clock } from "lucide-react";

interface HeroProps {
  onOpenSchedule: () => void;
  onOpenQuote: () => void;
}

export default function Hero({ onOpenSchedule, onOpenQuote }: HeroProps) {
  return (
    <section className="relative pt-24 pb-14 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] h-[340px] sm:h-[600px] bg-gradient-to-tr from-amber-200/20 via-nafa-gold-light/40 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-nafa-surface border border-nafa-border shadow-xs mb-6 sm:mb-8 animate-in fade-in duration-300">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold text-nafa-charcoal tracking-wide uppercase">
              Done-For-You AI Automation Agency
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-nafa-charcoal leading-[1.08] sm:leading-[1.05] mb-5 sm:mb-6">
            Never Miss a Lead.{" "}
            <span className="relative inline-block text-nafa-gold">
              Never.
              <span className="absolute left-0 bottom-1 sm:bottom-2 w-full h-[3px] sm:h-[4px] bg-nafa-gold/30 rounded-full"></span>
            </span>
          </h1>

          {/* Subheadline (Zero fluff, plain language) */}
          <p className="text-base sm:text-lg md:text-xl text-nafa-muted font-normal leading-relaxed max-w-2xl mb-8 sm:mb-10">
            Nafa builds and deploys 24/7 AI call agents and high-converting websites that answer every call, qualify leads within 5 minutes, and book more appointments while you sleep.
          </p>

          {/* Mobile-first CTA Group */}
          <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-14">
            <button
              onClick={onOpenSchedule}
              className="press-scale py-3.5 px-7 rounded-2xl bg-nafa-gold hover:bg-nafa-gold-hover text-white font-bold text-base shadow-apple-gold flex items-center justify-center gap-2.5 transition-all"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Discovery Meeting</span>
            </button>

            <button
              onClick={onOpenQuote}
              className="press-scale py-3.5 px-6 rounded-2xl bg-nafa-surface hover:bg-white text-nafa-charcoal border border-nafa-border font-semibold text-base shadow-xs flex items-center justify-center gap-2 transition-all"
            >
              <span>Get a Free Custom Quote</span>
              <ArrowRight className="w-4 h-4 text-nafa-muted" />
            </button>
          </div>

          {/* Quick Audio Teaser Chip */}
          <a
            href="#demo"
            className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full apple-glass border border-nafa-border/60 hover:border-nafa-gold/40 shadow-xs transition-all mb-12 sm:mb-16"
          >
            <div className="w-6 h-6 rounded-full bg-nafa-gold text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <Phone className="w-3 h-3 fill-current" />
            </div>
            <span className="text-xs sm:text-sm font-medium text-nafa-charcoal">
              Hear what our AI Call Agent sounds like{" "}
              <span className="text-nafa-gold font-bold underline decoration-nafa-gold/40">
                (Interactive Demo ↓)
              </span>
            </span>
          </a>

          {/* Interactive Hero Visual Mockup: Inbound Call Card */}
          <div className="w-full max-w-xl mx-auto apple-glass-card rounded-3xl p-5 sm:p-7 shadow-apple-card border border-white/80 text-left relative">
            <div className="flex items-center justify-between pb-4 border-b border-nafa-border/60">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center font-bold">
                  <Phone className="w-5 h-5 animate-bounce" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-full">
                      Live AI Receptionist
                    </span>
                    <span className="text-xs text-nafa-muted">0.4s response</span>
                  </div>
                  <p className="text-sm font-bold text-nafa-charcoal mt-0.5">
                    Inbound Lead Answering 24/7
                  </p>
                </div>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-nafa-muted">
                <Clock className="w-3.5 h-3.5" /> 11:42 PM Sunday
              </span>
            </div>

            <div className="mt-4 space-y-2.5 text-xs sm:text-sm">
              <div className="p-3 rounded-2xl bg-nafa-canvas border border-nafa-border/40 text-nafa-charcoal">
                <span className="font-bold text-nafa-charcoal-muted block text-[11px] uppercase tracking-wider mb-1">
                  Caller (Homeowner):
                </span>
                "Hi, our water heater burst and water is leaking everywhere. Can someone come out tonight?"
              </div>

              <div className="p-3 rounded-2xl bg-amber-50/70 border border-amber-200/60 text-nafa-charcoal">
                <span className="font-bold text-nafa-gold block text-[11px] uppercase tracking-wider mb-1">
                  Nafa AI Agent:
                </span>
                "I understand how urgent that is! Our emergency tech Mike is available in 30 minutes. Let me confirm your address and lock in that slot for you right now."
              </div>
            </div>

            <div className="mt-4 pt-3.5 border-t border-nafa-border/40 flex items-center justify-between text-xs text-nafa-muted">
              <span className="flex items-center gap-1.5 font-medium text-emerald-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Appointment booked into your CRM
              </span>
              <span className="font-semibold text-nafa-charcoal">0 hold time</span>
            </div>
          </div>

          {/* Trust Value Badges Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 mt-12 sm:mt-16 w-full pt-8 border-t border-nafa-border/60">
            <div className="p-3 rounded-2xl bg-white/60 border border-nafa-border/40 text-center">
              <div className="text-lg sm:text-xl font-extrabold text-nafa-charcoal">24/7/365</div>
              <div className="text-xs text-nafa-muted font-medium mt-0.5">Inbound Call Answering</div>
            </div>
            <div className="p-3 rounded-2xl bg-white/60 border border-nafa-border/40 text-center">
              <div className="text-lg sm:text-xl font-extrabold text-nafa-charcoal">&lt; 5 Minutes</div>
              <div className="text-xs text-nafa-muted font-medium mt-0.5">Speed-to-Lead Follow-up</div>
            </div>
            <div className="p-3 rounded-2xl bg-white/60 border border-nafa-border/40 text-center">
              <div className="text-lg sm:text-xl font-extrabold text-nafa-charcoal">100% Done-For-You</div>
              <div className="text-xs text-nafa-muted font-medium mt-0.5">No Tech Setup Required</div>
            </div>
            <div className="p-3 rounded-2xl bg-white/60 border border-nafa-border/40 text-center">
              <div className="text-lg sm:text-xl font-extrabold text-nafa-charcoal">Zero Outsourcing</div>
              <div className="text-xs text-nafa-muted font-medium mt-0.5">Direct Access to Builders</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
