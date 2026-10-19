"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Calendar,
  ArrowRight,
  CheckCircle2,
  Users,
  Sparkles,
  MapPin,
  Clock,
} from "lucide-react";
import { useSiteModals } from "@/context/ModalContext";

export default function AboutPage() {
  const { openSchedule, openQuoteModal } = useSiteModals();

  const values = [
    {
      title: "Zero Fluff, Zero Buzzwords",
      desc: "We don't sell theoretical AI or hand you a software login and wish you luck. We engineer working automated pipelines that produce real booked appointments.",
    },
    {
      title: "100% Done-For-You",
      desc: "Local business owners have enough on their plates. We build, program, test, and tune the entire system end-to-end so you never have to touch a line of code or complex API.",
    },
    {
      title: "No Outsourcing, No Middlemen",
      desc: "The engineers on your discovery calls are the ones configuring your voice models. We never farm work out to cheap overseas contractors.",
    },
    {
      title: "We Practice What We Preach",
      desc: "We sell speed-to-lead and 24/7 responsiveness — and we run our own business with the exact same standard. Submit a quote on our site and watch us respond in minutes.",
    },
  ];

  return (
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-nafa-gold border border-amber-200 text-xs font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Built for Local Business Owners
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-nafa-charcoal tracking-tight mb-4">
            About Nafa Technologies
          </h1>
          <p className="text-base sm:text-lg text-nafa-muted max-w-2xl mx-auto leading-relaxed">
            We exist to help local service businesses stop losing revenue to unanswered phone calls and slow follow-ups.
          </p>
        </div>

        {/* Mission & Story Card */}
        <div className="apple-glass rounded-3xl p-6 sm:p-10 shadow-apple-card border border-white mb-14 space-y-6">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-nafa-border/60 flex-shrink-0">
              <Image src="/logo.jpg" alt="Nafa Technologies" fill className="object-cover" />
            </div>
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-nafa-gold">
                Our Mission
              </span>
              <h2 className="text-2xl font-extrabold text-nafa-charcoal">
                Never Miss a Lead. Ever.
              </h2>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-nafa-muted leading-relaxed">
            <p>
              Nafa Technologies was founded in 2025 after witnessing a recurring tragedy across local small businesses: contractors, clinics, auto shops, and law firms were spending thousands of dollars on advertising and building their reputations, only to lose 50% or more of their leads simply because the phone rang while they were on a job or closed for the night.
            </p>
            <p>
              In today's on-demand economy, customers don't wait around or leave voicemails. If nobody answers, they tap the next link on Google.
            </p>
            <p>
              Hiring a full-time in-house receptionist costs upwards of $45,000/year and still only covers 40 hours a week. Traditional answering services sound generic, put callers on hold, and make costly errors.
            </p>
            <p>
              Nafa bridges this gap by deploying <strong>enterprise-grade conversational AI voice agents</strong> that answer every phone call in under 1 second, qualify callers, and lock in appointments 24/7/365 — at a fraction of the cost of a human hire.
            </p>
          </div>
        </div>

        {/* Company Facts (PRD Section 1 & 5.8) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
          <div className="p-4 rounded-2xl bg-white border border-nafa-border text-center shadow-xs">
            <div className="text-2xl font-extrabold text-nafa-charcoal">2025</div>
            <div className="text-xs text-nafa-muted mt-0.5">Founded</div>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-nafa-border text-center shadow-xs">
            <div className="text-2xl font-extrabold text-nafa-charcoal">United States</div>
            <div className="text-xs text-nafa-muted mt-0.5">Headquarters</div>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-nafa-border text-center shadow-xs">
            <div className="text-2xl font-extrabold text-nafa-charcoal">100% Direct</div>
            <div className="text-xs text-nafa-muted mt-0.5">No Outsourcing</div>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-nafa-border text-center shadow-xs">
            <div className="text-2xl font-extrabold text-nafa-charcoal">24/7/365</div>
            <div className="text-xs text-nafa-muted mt-0.5">Uptime & Coverage</div>
          </div>
        </div>

        {/* What We Believe / Values */}
        <div className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-nafa-charcoal mb-8 text-center sm:text-left">
            What Sets Nafa Apart
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((val, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-nafa-border shadow-xs space-y-2">
                <h3 className="font-extrabold text-base text-nafa-charcoal">{val.title}</h3>
                <p className="text-xs sm:text-sm text-nafa-muted leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Direct Access & Socials */}
        <div className="apple-glass rounded-3xl p-6 sm:p-10 shadow-apple-card border border-nafa-border/60 flex flex-col sm:flex-row items-center justify-between gap-6 mb-14">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-extrabold text-nafa-charcoal">
              Connect With Us on LinkedIn
            </h3>
            <p className="text-xs text-nafa-muted">
              Follow Nafa Technologies for automation case studies and insights.
            </p>
          </div>

          <a
            href="https://linkedin.com/company/nafa-technologies"
            target="_blank"
            rel="noopener noreferrer"
            className="press-scale py-3 px-5 rounded-xl bg-[#0A66C2] text-white font-bold text-xs flex items-center gap-2 shadow-xs"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 0 0 1.53-1.53A1.53 1.53 0 0 0 6.46 5.7a1.53 1.53 0 0 0-1.53 1.53c0 .85.68 1.53 1.53 1.53m1.39 9.74v-8.37H5.07v8.37z"/></svg>
            <span>Visit LinkedIn Page</span>
          </a>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold text-nafa-charcoal">
            Ready to work directly with our engineering team?
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={openSchedule}
              className="press-scale py-3.5 px-7 rounded-2xl bg-nafa-gold hover:bg-nafa-gold-hover text-white font-bold text-sm shadow-apple-gold flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Discovery Meeting</span>
            </button>
            <button
              onClick={() => openQuoteModal()}
              className="press-scale py-3.5 px-6 rounded-2xl bg-white border border-nafa-border text-nafa-charcoal font-semibold text-sm hover:bg-stone-50"
            >
              Request Custom Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
