"use client";

import React from "react";
import Image from "next/image";
import {
  Calendar,
  Sparkles,
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
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-28 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="badge-pill inline-flex items-center gap-1.5 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>Engineered for Local Business Owners</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-white mb-4">
            About <em className="font-editorial not-italic text-[#9a9a9a]">Nafa</em> Technologies
          </h1>
          <p className="text-base sm:text-lg text-[#9a9a9a] max-w-2xl mx-auto leading-relaxed">
            We exist to help local service businesses stop losing revenue to unanswered phone calls and slow follow-ups.
          </p>
        </div>

        {/* Mission & Story Card */}
        <div className="apple-glass rounded-lg p-6 sm:p-10 mb-14 space-y-6">
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-[6px] overflow-hidden border border-white/20 shrink-0">
              <Image src="/logo.jpg" alt="Nafa Technologies" fill className="object-cover" />
            </div>
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#9a9a9a]">
                Our Mission
              </span>
              <h2 className="text-xl sm:text-2xl font-medium text-white tracking-tight">
                Never Miss a Lead. Ever.
              </h2>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-[#9a9a9a] leading-relaxed">
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
              Nafa bridges this gap by deploying <strong className="text-white">enterprise-grade conversational AI voice agents</strong> that answer every phone call in under 1 second, qualify callers, and lock in appointments 24/7/365 — at a fraction of the cost of a human hire.
            </p>
          </div>
        </div>

        {/* Company Facts */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-14">
          <div className="p-4 rounded-[6px] bg-white/[0.03] border border-white/10 text-center">
            <div className="text-xl sm:text-2xl font-medium text-white">2025</div>
            <div className="text-xs text-[#9a9a9a] mt-0.5">Founded</div>
          </div>
          <div className="p-4 rounded-[6px] bg-white/[0.03] border border-white/10 text-center">
            <div className="text-xl sm:text-2xl font-medium text-white">United States</div>
            <div className="text-xs text-[#9a9a9a] mt-0.5">Headquarters</div>
          </div>
          <div className="p-4 rounded-[6px] bg-white/[0.03] border border-white/10 text-center">
            <div className="text-xl sm:text-2xl font-medium text-white">100% Direct</div>
            <div className="text-xs text-[#9a9a9a] mt-0.5">No Outsourcing</div>
          </div>
          <div className="p-4 rounded-[6px] bg-white/[0.03] border border-white/10 text-center">
            <div className="text-xl sm:text-2xl font-medium text-white">24/7/365</div>
            <div className="text-xs text-[#9a9a9a] mt-0.5">Uptime & Coverage</div>
          </div>
        </div>

        {/* What We Believe / Values */}
        <div className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white mb-8 text-center sm:text-left">
            What Sets <em className="font-editorial not-italic text-[#9a9a9a]">Nafa</em> Apart
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((val, idx) => (
              <div key={idx} className="p-6 rounded-[6px] bg-white/[0.03] border border-white/10 space-y-2">
                <h3 className="font-medium text-base text-white">{val.title}</h3>
                <p className="text-xs sm:text-sm text-[#9a9a9a] leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Direct Access, Leadership & Social Channels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
          {/* CEO LinkedIn Card */}
          <div className="apple-glass rounded-lg p-6 sm:p-7 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#9a9a9a]">
                  Executive Leadership
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-[4px] border border-white/10 bg-white/[0.04] text-[#A6B4C7]">
                  CEO
                </span>
              </div>
              <h3 className="text-xl font-medium text-white mb-1.5">
                Ahmad Ali
              </h3>
              <p className="text-xs text-[#9a9a9a] leading-relaxed mb-6">
                Leading systems engineering and product vision for autonomous AI voice receptionists and speed-to-lead pipelines.
              </p>
            </div>

            <a
              href="https://www.linkedin.com/in/ahmad-ali-8527a93ba?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost h-[42px] px-4 text-xs font-medium flex items-center justify-between group-hover:border-white/30 text-white transition-all"
            >
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 fill-current text-white shrink-0" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 0 0 1.53-1.53A1.53 1.53 0 0 0 6.46 5.7a1.53 1.53 0 0 0-1.53 1.53c0 .85.68 1.53 1.53 1.53m1.39 9.74v-8.37H5.07v8.37z" />
                </svg>
                <span>Connect with Ahmad Ali</span>
              </div>
              <span className="text-[#A6B4C7] font-mono text-[11px]">LinkedIn ↗</span>
            </a>
          </div>

          {/* Official Instagram Card */}
          <div className="apple-glass rounded-lg p-6 sm:p-7 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#9a9a9a]">
                  Official Channel
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-[4px] border border-white/10 bg-white/[0.04] text-[#A6B4C7]">
                  @nafatechnologies
                </span>
              </div>
              <h3 className="text-xl font-medium text-white mb-1.5">
                Nafa Technologies Instagram
              </h3>
              <p className="text-xs text-[#9a9a9a] leading-relaxed mb-6">
                Watch raw voice model audio tests, real speed-to-lead benchmarks, and behind-the-scenes engineering builds.
              </p>
            </div>

            <a
              href="https://www.instagram.com/nafatechnologies?rpxt=YWZ0dmdiNDM2djMz&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost h-[42px] px-4 text-xs font-medium flex items-center justify-between group-hover:border-white/30 text-white transition-all"
            >
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 fill-none stroke-current stroke-2 shrink-0" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span>Follow @nafatechnologies</span>
              </div>
              <span className="text-[#A6B4C7] font-mono text-[11px]">Instagram ↗</span>
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-medium tracking-tight text-white">
            Ready to work directly with our engineering team?
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => openQuoteModal()}
              className="btn btn-solid h-[42px] px-6 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2"
            >
              <span>Get a Custom Quote</span>
            </button>
            <button
              onClick={openSchedule}
              className="btn btn-ghost h-[42px] px-6 text-xs sm:text-sm flex items-center justify-center gap-2 text-white/90"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Call</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
