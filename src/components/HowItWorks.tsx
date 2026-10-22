"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  PhoneCall,
  Cpu,
  CalendarCheck,
  TrendingUp,
  ArrowRight,
  Workflow,
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
    <section id="how-it-works" className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="badge-pill inline-flex items-center gap-2 mb-4">
          <Workflow className="w-3.5 h-3.5 text-white" />
          <span className="text-[12.5px] text-white/90">Zero Friction Deployment</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[-0.035em] text-white leading-[1.1]">
          Live in days,{" "}
          <em className="font-editorial not-italic text-[#9a9a9a]">
            not months.
          </em>
        </h2>

        <p className="mt-4 text-[15px] sm:text-[16px] text-[#9a9a9a] max-w-2xl mx-auto leading-relaxed">
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
                <div className="flex items-center justify-between mb-5">
                  <span className="text-2xl font-mono font-bold text-white/20 group-hover:text-white/60 transition-colors">
                    {item.step}
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-white/60 px-2 py-0.5 rounded bg-white/5 border border-white/10">
                    {item.badge}
                  </span>
                </div>

                <div className="w-9 h-9 rounded bg-white/[0.06] border border-white/12 flex items-center justify-center text-white mb-4 group-hover:scale-105 transition-transform">
                  <Icon className="w-4 h-4 text-white" />
                </div>

                <h3 className="text-base font-semibold text-white tracking-[-0.01em] mb-2.5">
                  {item.title}
                </h3>

                <p className="text-xs text-[#9a9a9a] leading-relaxed mb-5">
                  {item.description}
                </p>

                <ul className="space-y-2 text-[12px] text-white/70 border-t border-white/8 pt-4">
                  {item.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white/90 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-white/8">
                <span className="text-[11px] font-mono text-[#9a9a9a]">
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
          className="btn btn-solid h-[42px] px-6 text-xs font-semibold gap-2 shadow-lg"
        >
          <span>Schedule Stage One Discovery</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </section>
  );
}
