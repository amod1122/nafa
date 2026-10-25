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
} from "lucide-react";
import { useSiteModals } from "@/context/ModalContext";

export default function OfferBento() {
  const { openQuoteModal } = useSiteModals();

  const systems = [
    {
      id: "ai-call-agent",
      badge: "Inbound Voice",
      title: "AI Voice Receptionist",
      subtitle: "24/7 Phone Answering",
      points: [
        "Answers calls within 1 second, 24/7/365",
        "Natural speech cadence with zero robotic delays",
        "Direct live calendar booking into your CRM",
        "Zero voicemail, zero hold times, zero missed leads",
      ],
      link: "/services/ai-call-agent",
      icon: PhoneCall,
      highlight: false,
    },
    {
      id: "speed-to-lead",
      badge: "Outbound Response",
      title: "Speed-to-Lead Agent",
      subtitle: "<60s Lead Response",
      points: [
        "Automated phone call & SMS in <60 seconds",
        "Engages new leads while buyer intent is highest",
        "Screens qualification details automatically",
        "Syncs with ServiceTitan, Clio, or any CRM",
      ],
      link: "/services/speed-to-lead",
      icon: Zap,
      highlight: true,
    },
    {
      id: "ai-website",
      badge: "Web Design & Redesign",
      title: "Website Build & Redesign",
      subtitle: "New Site or Modern Refresh",
      points: [
        "Brand new site build or complete modern redesign",
        "Ultra-fast performance & mobile-first conversion",
        "Embedded lead intake and online scheduling",
        "100% code ownership with zero platform lock-in",
      ],
      link: "/services/ai-website",
      icon: Globe,
      highlight: false,
    },
  ];

  return (
    <section id="services" className="relative py-14 sm:py-20 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[-0.03em] text-white leading-[1.1]">
          Engineered to capture every dollar your competitors miss.
        </h2>

        <p className="mt-4 text-[15px] sm:text-[16px] text-[#A6B4C7] max-w-[65ch] mx-auto leading-relaxed">
          Minimal, reliable infrastructure deployed directly into your existing business operations. Done-for-you end to end.
        </p>
      </div>

      {/* 3 Minimal Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {systems.map((system, idx) => {
          const Icon = system.icon;
          return (
            <motion.div
              key={system.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`interactive-card p-6 sm:p-7 flex flex-col justify-between group ${
                system.highlight
                  ? "border-white/30 bg-gradient-to-b from-white/[0.08] via-black/80 to-black/95 shadow-xl shadow-white/[0.02]"
                  : ""
              }`}
            >
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-white" />
                    <span className="text-xs font-mono uppercase tracking-wider text-[#A6B4C7]">
                      {system.subtitle}
                    </span>
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#A6B4C7] px-2.5 py-1 rounded bg-white/5 border border-white/10">
                    {system.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-medium text-white tracking-[-0.02em] mb-4">
                  {system.title}
                </h3>

                {/* Minimal Bullet Points */}
                <ul className="space-y-2.5 text-xs sm:text-sm text-white/90 mb-6 border-t border-white/8 pt-4">
                  {system.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white/80 shrink-0 mt-0.5" />
                      <span className="leading-snug text-white/90">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Single Clean Action Button */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                <button
                  onClick={() => openQuoteModal(system.title)}
                  className="btn btn-solid flex-1 h-[38px] text-xs font-semibold"
                >
                  <span>Configure</span>
                </button>
                <Link
                  href={system.link}
                  className="text-xs font-medium text-[#A6B4C7] hover:text-white flex items-center gap-1 transition-colors px-2 py-2"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
