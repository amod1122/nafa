"use client";

import React from "react";
import Link from "next/link";
import {
  PhoneCall,
  Zap,
  Globe,
  CheckCircle2,
  ArrowRight,
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
        "Qualifies callers and captures exact project & appointment specs",
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
        "Warm transfers hot prospects directly to your team",
        "Handles objection questions and calendar booking automatically",
      ],
      bestFor: "Businesses running paid ads (Google LSA, Meta) or high-volume lead funnels.",
    },
    {
      id: "ai-website",
      name: "Custom Website Build & Redesign",
      icon: Globe,
      tag: "Web Design & Modern Redesign",
      href: "/services/ai-website",
      desc: "A clean, modern website built from scratch or a complete redesign of your existing site. Fast load times, mobile-first layouts, and integrated lead capture.",
      bullets: [
        "Engineered strictly for conversions: turns visitors into phone calls and booked appointments",
        "Lightning-fast mobile load times (under 2 seconds)",
        "High-performance hosting and custom domain included",
        "Pre-wired to feed leads directly into your Speed-to-Lead agent",
      ],
      bestFor: "Businesses needing a modern new site or looking to redesign their old website.",
    },
  ];

  return (
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="badge-pill inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>Core Capabilities • 100% Done For You</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-white mb-4">
            Our AI <em className="font-editorial not-italic text-[#9a9a9a]">Automation</em> Systems
          </h1>
          <p className="text-base sm:text-lg text-[#9a9a9a] max-w-2xl mx-auto leading-relaxed">
            We don't hand you software to figure out on your own. Nafa designs, builds, tests, and manages high-impact voice and response systems for your business.
          </p>
        </div>

        {/* 3 Core Offers Detail Cards */}
        <div className="space-y-6 mb-16 sm:mb-24">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                className="apple-glass rounded-lg p-6 sm:p-8 flex flex-col lg:flex-row gap-8 items-start justify-between text-white"
              >
                <div className="space-y-4 max-w-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-[6px] border border-white/15 bg-white/[0.05] text-white flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9a9a9a]">
                        {svc.tag}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-medium text-white tracking-tight">
                        {svc.name}
                      </h2>
                    </div>
                  </div>

                  <p className="text-sm sm:text-[15px] text-[#9a9a9a] leading-relaxed">
                    {svc.desc}
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-medium uppercase tracking-wider text-white/80 block">
                      Key Capabilities:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-white/90">
                      {svc.bullets.map((b, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 rounded-[6px] bg-white/[0.02] border border-white/10 text-xs text-[#9a9a9a]">
                    <strong className="text-white">Best for:</strong> {svc.bestFor}
                  </div>
                </div>

                <div className="w-full lg:w-60 flex flex-col gap-3 shrink-0 pt-2 lg:pt-0">
                  <Link
                    href={svc.href}
                    className="btn btn-ghost w-full h-[42px] text-xs sm:text-sm"
                  >
                    <span>View Service Details</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>

                  <button
                    onClick={() => openQuoteModal(svc.name)}
                    className="btn btn-solid w-full h-[42px] text-xs sm:text-sm font-semibold"
                  >
                    <span>Get Custom Quote</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Growth Bundles Section */}
        <div className="apple-glass rounded-lg p-8 sm:p-10 text-center lg:text-left mb-16 border border-white/20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="badge-pill text-xs">
                ★ Maximized Conversion Package
              </span>
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">
                The Full <em className="font-editorial not-italic text-[#9a9a9a]">Growth System</em>
              </h2>
              <p className="text-sm text-[#9a9a9a] leading-relaxed">
                Connect your <strong>High-Converting Website</strong> with both the <strong>Speed-to-Lead Agent</strong> and <strong>24/7 AI Call Agent</strong>. Inbound callers never hit voicemail, and every website form is called back in under 60 seconds.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs font-medium text-white/90">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-white" /> Complete End-to-End Setup
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-white" /> Bundled Architecture Discount
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-white" /> Ongoing Neural Voice Model Tuning
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-56 shrink-0">
              <button
                onClick={() => openQuoteModal("The Full Growth System")}
                className="btn btn-solid w-full h-[42px] text-xs sm:text-sm font-semibold"
              >
                Request Bundle Quote
              </button>
              <button
                onClick={openSchedule}
                className="btn btn-ghost w-full h-[42px] text-xs sm:text-sm"
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
