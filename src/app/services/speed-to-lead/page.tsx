"use client";

import React from "react";
import Link from "next/link";
import {
  Zap,
  Calendar,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { useSiteModals } from "@/context/ModalContext";

export default function SpeedToLeadPage() {
  const { openSchedule, openQuoteModal } = useSiteModals();

  const steps = [
    {
      num: "01",
      title: "New Lead Submits an Inquiry",
      desc: "A prospect submits a form on your website, fills out a Facebook lead form, or submits through Google Local Services.",
    },
    {
      num: "02",
      title: "Outbound AI Triggered in <60 Seconds",
      desc: "Our automated pipeline dials the lead immediately while they are still holding their phone and thinking about your service.",
    },
    {
      num: "03",
      title: "Instant Qualification & Screening",
      desc: "The AI agent introduces your company, verifies their interest, and confirms their address and project details.",
    },
    {
      num: "04",
      title: "Warm Transfer or Instant Booking",
      desc: "The agent books them directly on your calendar, or does a live warm transfer to connect the prospect straight to your phone.",
    },
  ];

  return (
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-28 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-[#9a9a9a] mb-8">
          <Link href="/" className="hover:text-white">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/services" className="hover:text-white">Services</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="font-medium text-white">Speed-to-Lead Agent</span>
        </nav>

        {/* Hero */}
        <div className="max-w-3xl mb-14">
          <div className="badge-pill inline-flex items-center gap-2 mb-4">
            <Zap className="w-3.5 h-3.5 text-white" />
            <span>Under 60-Second Contact Pipeline</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-white mb-4">
            Connect With Leads While They're Still <em className="font-editorial not-italic text-[#9a9a9a]">Hot</em>.
          </h1>
          <p className="text-base sm:text-lg text-[#9a9a9a] leading-relaxed mb-8">
            An automated AI outbound agent that calls new inquiries within 60 seconds. Studies show that contacting within 5 minutes makes you 21x more likely to convert.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => openQuoteModal("Speed-to-Lead Outbound Agent")}
              className="btn btn-solid h-[42px] px-6 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4" />
              <span>Get Speed-to-Lead Quote</span>
            </button>
            <button
              onClick={openSchedule}
              className="btn btn-ghost h-[42px] px-6 text-xs sm:text-sm flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Discovery Call</span>
            </button>
          </div>
        </div>

        {/* The Problem */}
        <div className="apple-glass rounded-lg p-6 sm:p-10 mb-14">
          <h2 className="text-2xl font-medium tracking-tight text-white mb-4">
            The Problem: Average Lead Response Time is 42 Hours
          </h2>
          <p className="text-xs sm:text-sm text-[#9a9a9a] leading-relaxed mb-6">
            When a homeowner or client requests a quote online, they typically fill out 2 to 3 forms on different websites. The business that calls them first wins the job 78% of the time. If you wait 2 hours or until tomorrow morning, that lead has already signed with a competitor. Speed-to-Lead guarantees that you are always the first to connect.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-medium text-white/90">
            <div className="p-3.5 rounded-[6px] bg-white/[0.03] border border-white/10">
              ⚡ Sub-60-Second Reaction Time
            </div>
            <div className="p-3.5 rounded-[6px] bg-white/[0.03] border border-white/10">
              ⚡ 21x Higher Prospect Qualification
            </div>
            <div className="p-3.5 rounded-[6px] bg-white/[0.03] border border-white/10">
              ⚡ Works 24/7 Across Form & Ad Channels
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white mb-8 text-center sm:text-left">
            The Automated <em className="font-editorial not-italic text-[#9a9a9a]">Workflow</em>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((st) => (
              <div key={st.num} className="p-5 rounded-[6px] bg-white/[0.03] border border-white/10 space-y-2">
                <span className="text-2xl font-medium text-white/90 font-mono">{st.num}</span>
                <h3 className="font-medium text-sm text-white">{st.title}</h3>
                <p className="text-xs text-[#9a9a9a] leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features & Benefits */}
        <div className="apple-glass rounded-lg p-6 sm:p-10 mb-14">
          <h2 className="text-2xl font-medium tracking-tight text-white mb-6">
            Features & Capabilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-white/90">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
              <span><strong className="text-white">Instant Webhook Integration:</strong> Connects to WordPress, Webflow, Shopify, Meta Ads, and Zapier.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
              <span><strong className="text-white">Intelligent Voicemail Drop:</strong> If the lead doesn't answer, drops a personalized AI audio message and sends a text.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
              <span><strong className="text-white">Live Warm Transfer:</strong> "Would you like me to connect you directly to our lead technician right now?"</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
              <span><strong className="text-white">TCPA Compliant:</strong> Express consent disclosures and opt-out recognition built into every script.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
              <span><strong className="text-white">CRM Sync:</strong> Transcripts and qualification notes pushed to your CRM in real time.</span>
            </div>
          </div>
        </div>

        {/* Bundle Upsell */}
        <div className="apple-glass rounded-lg p-8 sm:p-10 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 border border-white/20">
          <div className="space-y-2">
            <span className="badge-pill text-xs">
              Pair with High-Converting Website
            </span>
            <h3 className="text-2xl font-medium tracking-tight text-white">
              A Website Designed Specifically for Instant Callbacks
            </h3>
            <p className="text-xs sm:text-sm text-[#9a9a9a] max-w-xl">
              Upgrade your web presence with a lightning-fast site that captures phone numbers and triggers your Speed-to-Lead agent automatically.
            </p>
          </div>

          <button
            onClick={() => openQuoteModal("Website + Speed-to-Lead Bundle")}
            className="btn btn-solid h-[42px] px-6 text-xs sm:text-sm font-semibold shrink-0"
          >
            Get Bundle Quote
          </button>
        </div>
      </div>
    </div>
  );
}
