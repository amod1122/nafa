"use client";

import React from "react";
import Link from "next/link";
import {
  PhoneCall,
  Calendar,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
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
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-28 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-[#9a9a9a] mb-8">
          <Link href="/" className="hover:text-white">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/services" className="hover:text-white">Services</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="font-medium text-white">AI Call Agent</span>
        </nav>

        {/* Hero */}
        <div className="max-w-3xl mb-14">
          <div className="badge-pill inline-flex items-center gap-2 mb-4">
            <PhoneCall className="w-3.5 h-3.5 text-white" />
            <span>24/7 Voice Receptionist</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-white mb-4">
            Never Send a Customer to <em className="font-editorial not-italic text-[#9a9a9a]">Voicemail</em> Again.
          </h1>
          <p className="text-base sm:text-lg text-[#9a9a9a] leading-relaxed mb-8">
            An intelligent AI voice receptionist that handles inbound calls day and night, answers questions, qualifies prospects, and books jobs directly into your schedule.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={openSchedule}
              className="btn btn-solid h-[42px] px-6 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Strategy Call</span>
            </button>
            <Link
              href="/demo"
              className="btn btn-ghost h-[42px] px-6 text-xs sm:text-sm flex items-center justify-center gap-2"
            >
              <span>Listen to Voice Demos</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* The Problem This Solves */}
        <div className="apple-glass rounded-lg p-6 sm:p-10 mb-14">
          <h2 className="text-2xl font-medium text-white tracking-tight mb-4">
            The Problem: 62% of Small Business Calls Go Unanswered
          </h2>
          <p className="text-xs sm:text-sm text-[#9a9a9a] leading-relaxed mb-6">
            Small business owners cannot sit by the phone 24 hours a day. When you are in meetings, working with hands-on clients, driving, or asleep, calls go to voicemail. Studies show that <strong className="text-white">85% of callers who reach voicemail hang up</strong> and immediately call your competitor. A human receptionist costs $40k–$50k/year and only covers 40 hours a week. Nafa gives you 168 hours of flawless coverage.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-medium text-white/90">
            <div className="p-3.5 rounded-[6px] bg-white/[0.03] border border-white/10">
              ✓ Zero Hold Times (Picks up instantly)
            </div>
            <div className="p-3.5 rounded-[6px] bg-white/[0.03] border border-white/10">
              ✓ 24/7/365 After-Hours & Holiday Coverage
            </div>
            <div className="p-3.5 rounded-[6px] bg-white/[0.03] border border-white/10">
              ✓ Fraction of the Cost of Human Receptionists
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white mb-8 text-center sm:text-left">
            How It Works in <em className="font-editorial not-italic text-[#9a9a9a]">4 Steps</em>
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
              <span><strong className="text-white">Natural Human Voice:</strong> Realistic cadence, speech pauses, and conversational tone.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
              <span><strong className="text-white">Custom Knowledge Base:</strong> Trained on your specific services, pricing rules, and FAQs.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
              <span><strong className="text-white">Live Call Transfers:</strong> Routes VIP or emergency calls to your personal mobile instantly.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
              <span><strong className="text-white">Calendar Sync:</strong> Direct booking with Google Calendar, Outlook, ServiceTitan, and Clio.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
              <span><strong className="text-white">Full Transcripts & Audio:</strong> Review exact recordings and AI summaries after every call.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
              <span><strong className="text-white">Keep Your Number:</strong> Setup requires simple conditional call forwarding.</span>
            </div>
          </div>
        </div>

        {/* Who It Is For */}
        <div className="mb-14">
          <h2 className="text-2xl font-medium tracking-tight text-white mb-4">
            Who Is This Best For?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-[6px] bg-white/[0.03] border border-white/10">
              <h4 className="font-medium text-sm text-white mb-1">Home Service Contractors</h4>
              <p className="text-xs text-[#9a9a9a]">HVAC, plumbers, electricians, and roofers who lose after-hours emergency calls.</p>
            </div>
            <div className="p-5 rounded-[6px] bg-white/[0.03] border border-white/10">
              <h4 className="font-medium text-sm text-white mb-1">Medical & Dental Clinics</h4>
              <p className="text-xs text-[#9a9a9a]">Practices whose front desk is overwhelmed with phone calls during check-in hours.</p>
            </div>
            <div className="p-5 rounded-[6px] bg-white/[0.03] border border-white/10">
              <h4 className="font-medium text-sm text-white mb-1">Legal & Professional Services</h4>
              <p className="text-xs text-[#9a9a9a]">Law firms and agencies that need immediate caller intake without hiring shift workers.</p>
            </div>
          </div>
        </div>

        {/* Bundle Upsell & Final CTA */}
        <div className="apple-glass rounded-lg p-8 sm:p-10 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 border border-white/20">
          <div className="space-y-2">
            <span className="badge-pill text-xs">
              Pair It With Speed-to-Lead
            </span>
            <h3 className="text-2xl font-medium text-white tracking-tight">
              Combine Inbound Answering with Outbound Follow-Up
            </h3>
            <p className="text-xs sm:text-sm text-[#9a9a9a] max-w-xl">
              Add the Speed-to-Lead Agent so that in addition to answering inbound callers, you automatically call back all online form submissions within 60 seconds.
            </p>
          </div>

          <button
            onClick={() => openQuoteModal("AI Call Agent (Voice Receptionist)")}
            className="btn btn-solid h-[42px] px-6 text-xs sm:text-sm font-semibold shrink-0"
          >
            Get Custom Quote for Call Agent
          </button>
        </div>
      </div>
    </div>
  );
}
