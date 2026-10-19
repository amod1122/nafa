"use client";

import React from "react";
import Link from "next/link";
import {
  Zap,
  Calendar,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Clock,
  Sparkles,
  PhoneCall,
  TrendingUp,
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
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-nafa-muted mb-8">
          <Link href="/" className="hover:text-nafa-charcoal">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/services" className="hover:text-nafa-charcoal">Services</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="font-bold text-nafa-charcoal">Speed-to-Lead Agent</span>
        </nav>

        {/* Hero */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 border border-amber-500/20 text-xs font-bold mb-4">
            <Zap className="w-3.5 h-3.5 fill-current" />
            Under 5-Minute Contact Pipeline
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-nafa-charcoal tracking-tight mb-4">
            Connect With Leads While They're Still Hot.
          </h1>
          <p className="text-base sm:text-lg text-nafa-muted leading-relaxed mb-8">
            An automated AI outbound agent that calls new inquiries within 60 seconds. Studies show that contacting within 5 minutes makes you 21x more likely to convert.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => openQuoteModal("Speed-to-Lead Outbound Agent")}
              className="press-scale py-3.5 px-7 rounded-2xl bg-nafa-gold hover:bg-nafa-gold-hover text-white font-bold text-sm shadow-apple-gold flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4" />
              <span>Get Speed-to-Lead Quote</span>
            </button>
            <button
              onClick={openSchedule}
              className="press-scale py-3.5 px-6 rounded-2xl bg-white border border-nafa-border text-nafa-charcoal font-semibold text-sm hover:bg-stone-50 flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Discovery Call</span>
            </button>
          </div>
        </div>

        {/* The Problem: Slow Follow-up Destroys Ad Spend */}
        <div className="apple-glass-card rounded-3xl p-6 sm:p-10 shadow-apple-card border border-white mb-14">
          <h2 className="text-2xl font-extrabold text-nafa-charcoal mb-4">
            The Problem: Average Lead Response Time is 42 Hours
          </h2>
          <p className="text-xs sm:text-sm text-nafa-muted leading-relaxed mb-6">
            When a homeowner or client requests a quote online, they typically fill out 2 to 3 forms on different websites. The business that calls them first wins the job 78% of the time. If you wait 2 hours or until tomorrow morning, that lead has already signed with a competitor. Speed-to-Lead guarantees that you are always the first to connect.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-semibold">
            <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200">
              ⚡ Sub-60-Second Reaction Time
            </div>
            <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200">
              ⚡ 21x Higher Prospect Qualification
            </div>
            <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200">
              ⚡ Works 24/7 Across Form & Ad Channels
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-nafa-charcoal mb-8 text-center sm:text-left">
            The Automated Workflow
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((st) => (
              <div key={st.num} className="p-5 rounded-2xl bg-white border border-nafa-border shadow-xs space-y-2">
                <span className="text-2xl font-black text-amber-500 font-mono">{st.num}</span>
                <h3 className="font-extrabold text-sm text-nafa-charcoal">{st.title}</h3>
                <p className="text-xs text-nafa-muted leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features & Benefits */}
        <div className="apple-glass rounded-3xl p-6 sm:p-10 shadow-apple-card border border-nafa-border/60 mb-14">
          <h2 className="text-2xl font-extrabold text-nafa-charcoal mb-6">
            Features & Capabilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-nafa-charcoal">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span><strong>Instant Webhook Integration:</strong> Connects to WordPress, Webflow, Shopify, Facebook Lead Ads, and Zapier.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span><strong>Intelligent Voicemail Drop:</strong> If the lead doesn't answer, drops a personalized AI audio message and sends a text.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span><strong>Live Warm Transfer:</strong> "Would you like me to connect you directly to our lead tech Mike right now?"</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span><strong>TCPA Compliant:</strong> Express consent disclosures and opt-out recognition built into every script.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span><strong>CRM Sync:</strong> Transcripts and qualification notes pushed to your CRM in real time.</span>
            </div>
          </div>
        </div>

        {/* Bundle Upsell */}
        <div className="apple-glass rounded-3xl p-8 sm:p-12 shadow-apple-card border border-nafa-gold/40 bg-gradient-to-r from-nafa-surface to-amber-50/40 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-nafa-gold bg-amber-100 px-3 py-1 rounded-full inline-block">
              Pair with High-Converting Website
            </span>
            <h3 className="text-2xl font-extrabold text-nafa-charcoal">
              A Website Designed Specifically for Instant Callbacks
            </h3>
            <p className="text-xs sm:text-sm text-nafa-muted max-w-xl">
              Upgrade your web presence with a lightning-fast site that captures phone numbers and triggers your Speed-to-Lead agent automatically.
            </p>
          </div>

          <button
            onClick={() => openQuoteModal("Website + Speed-to-Lead Bundle")}
            className="press-scale py-3.5 px-6 rounded-2xl bg-nafa-gold hover:bg-nafa-gold-hover text-white font-bold text-sm shadow-apple-gold flex-shrink-0"
          >
            Get Bundle Quote
          </button>
        </div>
      </div>
    </div>
  );
}
