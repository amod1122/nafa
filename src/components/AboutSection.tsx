"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Terminal,
  Zap,
  CheckCircle2,
  Lock,
  Users,
  ArrowRight,
} from "lucide-react";
import { useSiteModals } from "@/context/ModalContext";

export default function AboutSection() {
  const { openSchedule } = useSiteModals();

  const standards = [
    {
      icon: Terminal,
      title: "100% Direct Systems Engineering",
      desc: "We do not resell white-labeled templates or generic wrappers. Every voice receptionist and automated pipeline is custom-coded, prompt-engineered, and tuned by our core engineering team.",
    },
    {
      icon: Zap,
      title: "Sub-Second Latency Benchmark",
      desc: "Real conversation demands sub-500ms voice response times. Our voice pipeline utilizes streaming inference so the caller experiences immediate, natural conversation without awkward pauses.",
    },
    {
      icon: Lock,
      title: "Zero Vendor Lock-In & Full Security",
      desc: "Your phone numbers remain 100% yours. All call logs, transcripts, and customer records are encrypted end-to-end and stored in compliance with TCPA and HIPAA data protection guidelines.",
    },
    {
      icon: Users,
      title: "Direct Engineer Support",
      desc: "No tier-1 call center script readers. When you need a script modification, service menu update, or new calendar rule, you communicate directly with the engineer who built your system.",
    },
  ];

  return (
    <section id="about-us" className="relative py-14 sm:py-20 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/3 left-1/4 w-[500px] h-[300px] bg-white/[0.02] blur-[100px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[-0.03em] text-white leading-[1.1]">
            We build the operational backbone for businesses that cannot afford to miss a call.
          </h2>

          <p className="mt-4 text-[15px] sm:text-[16px] text-[#A6B4C7] max-w-[65ch] mx-auto leading-relaxed">
            Founded on a single uncompromising principle: local service businesses lose millions every year simply because human phones are busy, closed, or slow. We solve that permanently with operational AI infrastructure.
          </p>
        </div>

        {/* Narrative & Standard 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          {/* Left Narrative Column (6 cols) - Pure Liquid Glass Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 interactive-card p-8 sm:p-10 flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#A6B4C7] mb-4">
                <span className="w-2 h-2 rounded-full bg-white/80"></span>
                <span>Our Founding Mission</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-[-0.02em] leading-snug mb-6">
                Bridging the critical gap between marketing spend and actual booked revenue.
              </h3>

              <div className="space-y-4 text-sm text-[#A6B4C7] leading-relaxed max-w-[65ch]">
                <p>
                  Most companies pour thousands of dollars into Google Ads, Local Services Ads, SEO, and social campaigns — only to let 25% to 50% of the resulting inbound calls roll to an empty voicemail box.
                </p>
                <p>
                  In high-intent local markets (emergency plumbing, dental, injury law, high-ticket home remodeling), customers do not wait. When nobody answers within three rings, they click the next business on Google Maps.
                </p>
                <p>
                  Nafa was engineered to close that leak forever. We deploy autonomous voice receptionists and speed-to-lead pipelines that answer instantly, screen qualifications, handle price inquiries, and schedule jobs right onto your calendar — 24 hours a day, 365 days a year.
                </p>
              </div>
            </div>

            {/* Micro Stats Bar */}
            <div className="grid grid-cols-3 gap-4 pt-8 mt-8 border-t border-white/10">
              <div>
                <div className="text-2xl font-mono font-bold text-white">&lt;0.4s</div>
                <div className="text-xs text-[#A6B4C7] mt-0.5">Voice Latency</div>
              </div>
              <div>
                <div className="text-2xl font-mono font-bold text-white">100%</div>
                <div className="text-xs text-[#A6B4C7] mt-0.5">Done-For-You</div>
              </div>
              <div>
                <div className="text-2xl font-mono font-bold text-white">24/7/365</div>
                <div className="text-xs text-[#A6B4C7] mt-0.5">Live Coverage</div>
              </div>
            </div>
          </motion.div>

          {/* Right Standard Cards Column (6 cols) - Pure Liquid Glass Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {standards.map((std, idx) => {
              const Icon = std.icon;
              return (
                <motion.div
                  key={std.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="interactive-card p-6 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <Icon className="w-5 h-5 text-white shrink-0" />
                      <h4 className="text-sm font-semibold text-white tracking-[-0.01em]">
                        {std.title}
                      </h4>
                    </div>
                    <p className="text-xs text-[#A6B4C7] leading-relaxed">
                      {std.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/8 flex items-center gap-1.5 text-xs text-[#A6B4C7] font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white/80" />
                    <span>Nafa Standard</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Leadership & Official Channels (Pure Liquid Glass Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {/* CEO & Founder Card */}
          <div className="interactive-card p-6 sm:p-7 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#A6B4C7]">
                  <span className="w-2 h-2 rounded-full bg-white/80"></span>
                  <span>Leadership</span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-[4px] border border-white/10 bg-white/[0.04] text-[#A6B4C7]">
                  CEO
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-medium text-white tracking-[-0.02em] mb-2">
                Ahmad Ali
              </h3>
              <p className="text-xs sm:text-sm text-[#A6B4C7] leading-relaxed mb-6">
                Leading systems engineering, autonomous voice agent architecture, and speed-to-lead pipelines at Nafa Technologies.
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
                <span>Connect on LinkedIn</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-[#A6B4C7] group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Official Instagram Card */}
          <div className="interactive-card p-6 sm:p-7 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#A6B4C7]">
                  <span className="w-2 h-2 rounded-full bg-white/80"></span>
                  <span>Official Channel</span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-[4px] border border-white/10 bg-white/[0.04] text-[#A6B4C7]">
                  @nafatechnologies
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-medium text-white tracking-[-0.02em] mb-2">
                Nafa on Instagram
              </h3>
              <p className="text-xs sm:text-sm text-[#A6B4C7] leading-relaxed mb-6">
                Follow our official channel for real-time voice demo recordings, speed-to-lead case studies, and engineering updates.
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
              <ArrowRight className="w-3.5 h-3.5 text-[#A6B4C7] group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Action Link to Full About Page */}
        <div className="rounded-lg border border-white/12 bg-white/[0.02] p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="max-w-[65ch]">
            <div className="text-sm font-semibold text-white">
              Want to learn more about our company background and security architecture?
            </div>
            <div className="text-xs text-[#A6B4C7] mt-0.5">
              Read our full story, leadership principles, and technical architecture specifications.
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/about"
              className="btn btn-ghost h-[40px] px-4 text-xs font-medium gap-1 text-white"
            >
              <span>Read Full About Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <button
              onClick={openSchedule}
              className="btn btn-solid h-[40px] px-4 text-xs font-semibold"
            >
              <span>Book Discovery</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
