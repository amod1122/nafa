"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  PhoneCall,
  Zap,
  Globe,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { useSiteModals } from "@/context/ModalContext";

export default function OfferBento() {
  const { openSchedule, openQuoteModal } = useSiteModals();

  const systems = [
    {
      id: "ai-call-agent",
      badge: "Inbound Voice Infrastructure",
      title: "AI Voice Receptionist",
      subtitle: "24/7/365 Phone Answering",
      description:
        "Human-grade conversational AI that answers inbound phone calls in under one second. Qualifies caller intent, answers complex business FAQs, and books revenue onto your calendar.",
      features: [
        "Human speech cadence with zero robotic monotone delays",
        "Direct live calendar sync (Google, Outlook, CRM calendars)",
        "Handles after-hours, weekend shifts, and holiday overflows",
        "Seamless warm transfers to live technicians for emergencies",
      ],
      link: "/services/ai-call-agent",
      icon: PhoneCall,
      highlight: false,
    },
    {
      id: "speed-to-lead",
      badge: "High-ROI Conversion Engine",
      title: "Speed-to-Lead Pipeline",
      subtitle: "<60s Inbound Response Time",
      description:
        "The instant a prospect submits a lead form or requests a quote, our autonomous pipeline dials their phone and triggers conversational SMS in under 45 seconds.",
      features: [
        "78% of customers buy from the business that responds first",
        "Autonomous multi-channel trigger (instant phone call + SMS)",
        "Instant lead qualification and calendar booking",
        "Zero leads go cold in an unattended email inbox",
      ],
      link: "/services/speed-to-lead",
      icon: Zap,
      highlight: true,
    },
    {
      id: "ai-website",
      badge: "Conversion Architecture",
      title: "Conversion-Engineered AI Web",
      subtitle: "Sub-Second Load Speeds",
      description:
        "Ultra-fast, mobile-first web platforms built for immediate conversion. Embedded with interactive AI voice and chat intake widgets that turn visitors into scheduled bookings.",
      features: [
        "Ultra-fast performance (<1s LCP, 99+ PageSpeed score)",
        "Embedded interactive AI voice demo and quote simulators",
        "Designed for local service intent and high mobile conversion",
        "Zero lock-in with full client ownership of code and domain",
      ],
      link: "/services/ai-website",
      icon: Globe,
      highlight: false,
    },
  ];

  return (
    <section id="services" className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[-0.03em] text-white leading-[1.1]">
          Engineered to capture every dollar your competitors miss.
        </h2>

        <p className="mt-4 text-[15px] sm:text-[16px] text-[#A6B4C7] max-w-[65ch] mx-auto leading-relaxed">
          We don't hand you generic software subscriptions to manage yourself. Nafa designs, programs, integrates, and operates your autonomous client acquisition systems end-to-end.
        </p>
      </div>

      {/* 3 Core Systems Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {systems.map((system, idx) => {
          const Icon = system.icon;
          return (
            <motion.div
              key={system.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`interactive-card p-6 sm:p-8 flex flex-col justify-between group ${
                system.highlight
                  ? "border-white/30 bg-gradient-to-b from-white/[0.08] via-black/80 to-black/95 shadow-xl shadow-white/[0.02]"
                  : ""
              }`}
            >
              <div>
                {/* Card Top Row (Side-by-side - no stacked tile) */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-5 h-5 text-white" />
                    <span className="text-xs font-mono uppercase tracking-wider text-[#A6B4C7]">
                      {system.subtitle}
                    </span>
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#A6B4C7] px-2.5 py-1 rounded bg-white/5 border border-white/10">
                    {system.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-medium text-white tracking-[-0.02em] mb-3">
                  {system.title}
                </h3>
                <p className="text-sm text-[#A6B4C7] leading-relaxed mb-6">
                  {system.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 text-xs sm:text-sm text-white/90 mb-8 border-t border-white/8 pt-6">
                  {system.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-4 border-t border-white/10">
                <button
                  onClick={() => openQuoteModal(system.title)}
                  className="btn btn-solid w-full h-[40px] text-xs font-semibold"
                >
                  <span>Configure {system.title}</span>
                </button>
                <Link
                  href={system.link}
                  className="btn btn-ghost w-full h-[40px] text-xs font-medium gap-1 text-[#A6B4C7] hover:text-white"
                >
                  <span>Architecture Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Integration Assurance */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-12 rounded-lg border border-white/12 bg-white/[0.02] p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <div className="text-sm font-medium text-white">
              Zero Telephone Disruption • Keep Your Existing Phone Number
            </div>
            <div className="text-xs text-[#A6B4C7] mt-0.5">
              Configured via simple conditional forwarding. No phone line replacements, no hardware installations.
            </div>
          </div>
        </div>

        <button
          onClick={openSchedule}
          className="btn btn-ghost h-[40px] px-5 text-xs font-medium shrink-0"
        >
          <span>Schedule System Review</span>
        </button>
      </motion.div>
    </section>
  );
}
