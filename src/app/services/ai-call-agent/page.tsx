"use client";

import React from "react";
import Link from "next/link";
import {
  PhoneCall,
  Calendar,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Clock,
  Sparkles,
  Zap,
  Users,
  ChevronRight,
  HelpCircle,
} from "lucide-react";
import { useSiteModals } from "@/context/ModalContext";

export default function AICallAgentPage() {
  const { openSchedule, openQuoteModal } = useSiteModals();

  const steps = [
    {
      num: "01",
      title: "Inbound Call Picked Up on Ring 1",
      desc: "Caller dials your existing business number. The AI answers immediately 24/7 with zero hold time or automated IVR menus.",
    },
    {
      num: "02",
      title: "Conversational Qualification",
      desc: "The agent asks key intake questions (service needed, address, urgency, budget) tailored specifically to your business.",
    },
    {
      num: "03",
      title: "Direct Calendar Booking or Live Transfer",
      desc: "The AI agent books the appointment straight into your software, or transfers high-priority emergency callers directly to you.",
    },
    {
      num: "04",
      title: "Instant Confirmation & Notification",
      desc: "The caller receives a text confirmation, while your team gets a full recording, transcript, and lead card in your inbox.",
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
          <span className="font-bold text-nafa-charcoal">AI Call Agent</span>
        </nav>

        {/* Hero */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-nafa-gold border border-amber-200 text-xs font-bold mb-4">
            <PhoneCall className="w-3.5 h-3.5" />
            24/7 Voice Receptionist
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-nafa-charcoal tracking-tight mb-4">
            Never Send a Customer to Voicemail Again.
          </h1>
          <p className="text-base sm:text-lg text-nafa-muted leading-relaxed mb-8">
            An intelligent AI voice receptionist that handles inbound calls day and night, answers questions, qualifies prospects, and books jobs directly into your schedule.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={openSchedule}
              className="press-scale py-3.5 px-7 rounded-2xl bg-nafa-gold hover:bg-nafa-gold-hover text-white font-bold text-sm shadow-apple-gold flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Strategy Call</span>
            </button>
            <Link
              href="/demo"
              className="press-scale py-3.5 px-6 rounded-2xl bg-white border border-nafa-border text-nafa-charcoal font-semibold text-sm hover:bg-stone-50 flex items-center justify-center gap-2"
            >
              <span>Listen to Voice Demos</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* The Problem This Solves */}
        <div className="apple-glass-card rounded-3xl p-6 sm:p-10 shadow-apple-card border border-white mb-14">
          <h2 className="text-2xl font-extrabold text-nafa-charcoal mb-4">
            The Problem: 62% of Business Calls Go Unanswered
          </h2>
          <p className="text-xs sm:text-sm text-nafa-muted leading-relaxed mb-6">
            Small business owners cannot sit by the phone 24 hours a day. When you are in meetings, working with hands-on clients, driving, or asleep, calls go to voicemail. Studies show that <strong>85% of callers who reach voicemail hang up</strong> and immediately call your competitor. A human receptionist costs $40k–$50k/year and only covers 40 hours a week. Nafa gives you 168 hours of flawless coverage.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-semibold">
            <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200">
              ✓ Zero Hold Times (Picks up instantly)
            </div>
            <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200">
              ✓ 24/7/365 After-Hours & Holiday Coverage
            </div>
            <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200">
              ✓ Fraction of the Cost of Human Receptionists
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-nafa-charcoal mb-8 text-center sm:text-left">
            How It Works in 4 Steps
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
              <span><strong>Natural Human Voice:</strong> Realistic cadence, speech pauses, and conversational tone.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span><strong>Custom Knowledge Base:</strong> Trained on your specific services, pricing rules, and FAQs.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span><strong>Live Call Transfers:</strong> Routes VIP or emergency calls to your personal mobile instantly.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span><strong>Calendar Sync:</strong> Direct booking with Google Calendar, Outlook, ServiceTitan, and Clio.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span><strong>Full Transcripts & Audio:</strong> Review exact recordings and AI summaries after every call.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span><strong>Keep Your Number:</strong> Setup requires simple conditional call forwarding.</span>
            </div>
          </div>
        </div>

        {/* Who It Is For */}
        <div className="mb-14">
          <h2 className="text-2xl font-extrabold text-nafa-charcoal mb-4">
            Who Is This Best For?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-nafa-border">
              <h4 className="font-bold text-sm text-nafa-charcoal mb-1">Home Service Contractors</h4>
              <p className="text-xs text-nafa-muted">HVAC, plumbers, electricians, and roofers who lose after-hours emergency calls.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-nafa-border">
              <h4 className="font-bold text-sm text-nafa-charcoal mb-1">Medical & Dental Clinics</h4>
              <p className="text-xs text-nafa-muted">Practices whose front desk is overwhelmed with phone calls during check-in hours.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-nafa-border">
              <h4 className="font-bold text-sm text-nafa-charcoal mb-1">Legal & Professional Services</h4>
              <p className="text-xs text-nafa-muted">Law firms and agencies that need immediate caller intake without hiring shift workers.</p>
            </div>
          </div>
        </div>

        {/* Bundle Upsell & Final CTA */}
        <div className="apple-glass rounded-3xl p-8 sm:p-12 shadow-apple-card border border-nafa-gold/40 bg-gradient-to-r from-nafa-surface to-amber-50/40 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-nafa-gold bg-amber-100 px-3 py-1 rounded-full inline-block">
              Pair It With Speed-to-Lead
            </span>
            <h3 className="text-2xl font-extrabold text-nafa-charcoal">
              Combine Inbound Answering with Outbound Follow-Up
            </h3>
            <p className="text-xs sm:text-sm text-nafa-muted max-w-xl">
              Add the Speed-to-Lead Agent so that in addition to answering inbound callers, you automatically call back all online form submissions within 60 seconds.
            </p>
          </div>

          <button
            onClick={() => openQuoteModal("AI Call Agent (Voice Receptionist)")}
            className="press-scale py-3.5 px-6 rounded-2xl bg-nafa-gold hover:bg-nafa-gold-hover text-white font-bold text-sm shadow-apple-gold flex-shrink-0"
          >
            Get Custom Quote for Call Agent
          </button>
        </div>
      </div>
    </div>
  );
}
