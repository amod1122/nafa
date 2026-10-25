"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  PhoneCall,
  Cpu,
  CalendarCheck,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { useSiteModals } from "@/context/ModalContext";

export default function HowItWorks() {
  const { openSchedule } = useSiteModals();

  const steps = [
    {
      step: "01",
      badge: "Stage One",
      title: "Technical Discovery & Call Audit",
      description:
        "We audit your recent call volume, customer inquiry patterns, FAQs, scheduling rules, and CRM workflows in a 15-minute screen share. Zero preparation required.",
      points: [
        "Call volume and lost opportunity analysis",
        "Custom service menu and pricing guardrails",
        "Emergency escalation protocols mapping",
      ],
      icon: PhoneCall,
    },
    {
      step: "02",
      badge: "Stage Two",
      title: "Custom Voice Architecture & Tuning",
      description:
        "Our engineering team trains your dedicated neural voice model, programs objection-handling logic, and establishes API links to your calendar and CRM.",
      points: [
        "Sub-500ms voice response latency tuning",
        "Deep integration with ServiceTitan, Clio, or Google",
        "Edge-case stress testing with real call recordings",
      ],
      icon: Cpu,
    },
    {
      step: "03",
      badge: "Stage Three",
      title: "Live Staging & Multi-Scenario Test",
      description:
        "You and your team call the private staging number directly. We test tough customer scenarios, booking flows, and transfers together before switching to live traffic.",
      points: [
        "Live interactive team testing call",
        "Refinement of cadence and vocabulary",
        "100% approval before any public inbounds",
      ],
      icon: CalendarCheck,
    },
    {
      step: "04",
      badge: "Stage Four",
      title: "Turn On 24/7 Autopilot Booking",
      description:
        "Set simple call forwarding on your existing business line. Inbound callers are answered in <1 second, qualified, and booked straight onto your calendar 24/7/365.",
      points: [
        "Zero downtime or phone number changes",
        "Real-time SMS alerts on newly booked revenue",
        "Continuous weekly transcript & accuracy audits",
      ],
      icon: TrendingUp,
    },
  ];

  return (
    <section id="how-it-works" className="relative py-14 sm:py-20 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[-0.03em] text-white leading-[1.1]">
          Live in days, not months.
        </h2>

        <p className="mt-4 text-[15px] sm:text-[16px] text-[#A6B4C7] max-w-[65ch] mx-auto leading-relaxed">
          You don't need an internal IT team or AI experience. Our founding engineers program and deploy your entire infrastructure done-for-you.
        </p>
      </div>

      {/* 4-Step Deployment Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="interactive-card p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-mono font-bold text-white/60 group-hover:text-white transition-colors">
                    {item.step}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#A6B4C7] px-2 py-0.5 rounded bg-white/5 border border-white/10">
                    {item.badge}
                  </span>
                </div>

                <div className="flex items-center gap-2.5 mb-3">
                  <Icon className="w-5 h-5 text-white shrink-0" />
                  <h3 className="text-base font-semibold text-white tracking-[-0.01em]">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm text-[#A6B4C7] leading-relaxed mb-5">
                  {item.description}
                </p>

                <ul className="space-y-2.5 text-xs text-white/90 border-t border-white/8 pt-4">
                  {item.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-white/80 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-white/8">
                <span className="text-xs font-mono text-[#A6B4C7]">
                  Timeline: ~{idx === 0 ? "Day 1" : idx === 1 ? "Days 2-3" : idx === 2 ? "Days 4-5" : "Day 6-7"}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Deployment Guarantee Banner */}
      <div className="mt-12 text-center">
        <button
          onClick={openSchedule}
          className="btn btn-solid h-[44px] px-7 text-xs font-semibold gap-2 shadow-lg"
        >
          <span>Schedule Stage One Discovery</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
