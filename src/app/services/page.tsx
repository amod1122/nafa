"use client";

import React from "react";
import Link from "next/link";
import {
  PhoneCall,
  Zap,
  Globe,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Calendar,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { useSiteModals } from "@/context/ModalContext";

export default function ServicesPage() {
  const { openSchedule, openQuoteModal } = useSiteModals();

  const services = [
    {
      id: "ai-call-agent",
      name: "AI Call Agent (Voice Receptionist)",
      icon: PhoneCall,
      tag: "Inbound Phone Automation",
      href: "/services/ai-call-agent",
      desc: "A 24/7 AI-powered voice receptionist that answers every inbound call on ring one, qualifies prospective customers, handles FAQs, and books appointments directly into your calendar.",
      bullets: [
        "24/7/365 coverage — nights, weekends, and holidays",
        "Never puts callers on hold or routes to voicemail",
        "Qualifies callers and captures exact project/appointment specs",
        "Integrates with your existing phone number with zero friction",
      ],
      bestFor: "Contractors, clinics, law firms, and service businesses losing after-hours leads.",
    },
    {
      id: "speed-to-lead",
      name: "Speed-to-Lead Outbound Agent",
      icon: Zap,
      tag: "Highest Conversion ROI",
      href: "/services/speed-to-lead",
      desc: "An automated outbound AI agent that calls new web form submissions and ad leads within 60 seconds to qualify them and book appointments before competitors even check their email.",
      bullets: [
        "Calls web inquiries within 60 seconds (Harvard 5-minute rule)",
        "21x higher qualification rate than 30-minute follow-ups",
        "Warm transfers hot prospects directly to your technician or desk",
        "Handles objection questions and calendar booking automatically",
      ],
      bestFor: "Businesses running paid ads (Google LSA, Facebook) or getting web inquiries.",
    },
    {
      id: "ai-website",
      name: "High-Converting AI Website",
      icon: Globe,
      tag: "Digital Foundation",
      href: "/services/ai-website",
      desc: "A modern, ultra-fast website designed specifically for appointment-driven local businesses. Pre-configured with call capture, instant quote triggers, and AI agent integrations.",
      bullets: [
        "Engineered strictly for conversions: turns visitors into phone calls and forms",
        "Lightning-fast mobile load times (under 2 seconds)",
        "High-performance hosting and custom domain included",
        "Pre-wired to feed leads directly into your Speed-to-Lead agent",
      ],
      bestFor: "Local businesses with outdated sites that fail to convert traffic into calls.",
    },
  ];

  return (
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-nafa-gold border border-amber-200 text-xs font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Core Capabilities • 100% Done For You
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-nafa-charcoal tracking-tight mb-4">
            Our AI Automation Services
          </h1>
          <p className="text-base sm:text-lg text-nafa-muted max-w-2xl mx-auto leading-relaxed">
            We don't hand you software to figure out on your own. Nafa designs, builds, tests, and manages high-impact automation systems for your business.
          </p>
        </div>

        {/* 3 Core Offers Detail Cards */}
        <div className="space-y-8 mb-16 sm:mb-24">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                className="apple-glass rounded-3xl p-6 sm:p-10 shadow-apple-card border border-white flex flex-col lg:flex-row gap-8 items-start justify-between"
              >
                <div className="space-y-4 max-w-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-amber-100 text-nafa-gold flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-nafa-gold">
                        {svc.tag}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-nafa-charcoal">
                        {svc.name}
                      </h2>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-nafa-muted leading-relaxed">
                    {svc.desc}
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-nafa-charcoal block">
                      Key Capabilities:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-nafa-charcoal">
                      {svc.bullets.map((b, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/50 text-xs text-amber-900">
                    <strong>Best for:</strong> {svc.bestFor}
                  </div>
                </div>

                <div className="w-full lg:w-64 flex flex-col gap-3 flex-shrink-0 pt-2 lg:pt-0">
                  <Link
                    href={svc.href}
                    className="press-scale w-full py-3 px-4 rounded-xl bg-nafa-charcoal text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 hover:bg-black shadow-sm"
                  >
                    <span>View Service Details</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>

                  <button
                    onClick={() => openQuoteModal(svc.name)}
                    className="press-scale w-full py-3 px-4 rounded-xl bg-nafa-gold text-white font-bold text-xs sm:text-sm hover:bg-nafa-gold-hover shadow-apple-gold flex items-center justify-center gap-1.5"
                  >
                    <span>Get Custom Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Growth Bundles Section (PRD Section 4.4 & 5.2) */}
        <div className="apple-glass rounded-3xl p-8 sm:p-12 shadow-apple-card border border-nafa-gold/40 bg-gradient-to-br from-nafa-surface via-amber-50/30 to-nafa-surface text-center lg:text-left mb-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-black uppercase tracking-wider text-nafa-gold bg-amber-100 px-3 py-1 rounded-full inline-block">
                ★ Maximized Conversion Package
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-nafa-charcoal">
                The Full Growth System
              </h2>
              <p className="text-sm text-nafa-muted leading-relaxed">
                Connect your <strong>High-Converting Website</strong> with both the <strong>Speed-to-Lead Agent</strong> and <strong>24/7 AI Call Agent</strong>. Inbound callers never hit voicemail, and every website form is called back in under 60 seconds.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs font-semibold text-nafa-charcoal">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Complete End-to-End Setup
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Bundled Package Discount
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Ongoing Voice Model Tuning
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-60 flex-shrink-0">
              <button
                onClick={() => openQuoteModal("The Full Growth System")}
                className="press-scale py-3.5 px-6 rounded-2xl bg-nafa-gold hover:bg-nafa-gold-hover text-white font-extrabold text-sm shadow-apple-gold flex items-center justify-center gap-2"
              >
                Request Bundle Quote
              </button>
              <button
                onClick={openSchedule}
                className="press-scale py-3.5 px-5 rounded-2xl bg-white border border-nafa-border text-nafa-charcoal font-bold text-sm hover:bg-stone-50"
              >
                Schedule Walkthrough
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
