"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, CheckCircle2, ArrowRight } from "lucide-react";
import { useSiteModals } from "@/context/ModalContext";

export default function SocialProof() {
  const { openSchedule } = useSiteModals();

  const caseStudies = [
    {
      industry: "Home Services (HVAC & Plumbing)",
      title: "Tri-County Plumbing & Heating",
      metric: "+$18,400",
      metricLabel: "Recovered Monthly Revenue",
      stat: "0 Missed Emergency Calls",
      challenge: "Lost 10-15 evening & weekend calls every week to competitors.",
      solution: "Deployed 24/7 Nafa AI Call Agent with emergency dispatch logic.",
      quote:
        "Before Nafa, half our weekend calls went to voicemail. Now every caller is greeted, screened, and booked within 60 seconds.",
      author: "Mark S., Operations Director",
    },
    {
      industry: "Healthcare & Dental",
      title: "Apex Family Dental Practice",
      metric: "+38 Bookings",
      metricLabel: "New Monthly Patient Appointments",
      stat: "< 3 Min Follow-up",
      challenge: "Front desk staff overwhelmed with patient check-ins during peak phone hours.",
      solution: "Nafa Speed-to-Lead Agent handles online inquiries instantly.",
      quote:
        "Our staff can focus on in-person patients while the AI receptionist answers questions and books hygiene appointments flawlessly.",
      author: "Dr. Elena R., Lead Dentist",
    },
    {
      industry: "Legal Services",
      title: "Vanguard Injury Law Group",
      metric: "21x",
      metricLabel: "Faster Inquiry Response",
      stat: "100% Inbound Capture",
      challenge: "High-value accident leads went cold when submitting late at night.",
      solution: "Full Growth System with website integration & automated caller screening.",
      quote:
        "In personal injury law, speed is everything. Nafa calls web leads in under 2 minutes and screens them before transferring to our intake team.",
      author: "James H., Managing Partner",
    },
  ];

  return (
    <section id="case-studies" className="relative py-14 sm:py-20 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[-0.03em] text-white leading-[1.1]">
          Measured in revenue, not vanity metrics.
        </h2>

        <p className="mt-4 text-[15px] sm:text-[16px] text-[#A6B4C7] max-w-[65ch] mx-auto leading-relaxed">
          See how high-intent local businesses recover thousands in lost monthly pipeline with autonomous voice and response infrastructure.
        </p>
      </div>

      {/* Case Studies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {caseStudies.map((study, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="interactive-card p-6 sm:p-8 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-sky-300 px-2.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/25">
                  {study.industry}
                </span>
                <div className="flex items-center gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              <h3 className="text-lg font-semibold text-white tracking-[-0.01em] mb-4">
                {study.title}
              </h3>

              {/* Highlight Metric */}
              <div className="py-4 border-y border-white/10 my-5">
                <div className={`text-3xl font-mono font-bold tracking-tight ${
                  idx === 0 ? "text-emerald-400" : idx === 1 ? "text-sky-400" : "text-amber-400"
                }`}>
                  {study.metric}
                </div>
                <div className="text-xs font-semibold text-white mt-1">
                  {study.metricLabel}
                </div>
                <div className="text-xs text-[#94a3b8] mt-1.5 font-mono flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{study.stat}</span>
                </div>
              </div>

              <p className="text-sm text-[#94a3b8] italic leading-relaxed mb-6">
                &ldquo;{study.quote}&rdquo;
              </p>
            </div>

            <div className="pt-4 border-t border-white/8 flex items-center justify-between">
              <span className="text-xs font-medium text-white/90">
                {study.author}
              </span>
              <Link
                href="/case-studies"
                className="text-xs text-[#A6B4C7] hover:text-white flex items-center gap-1 transition-colors"
              >
                <span>Read Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Case Studies Link */}
      <div className="mt-12 text-center">
        <Link
          href="/case-studies"
          className="btn btn-ghost h-[42px] px-6 text-xs font-medium"
        >
          <span>View All Client Case Studies</span>
          <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  );
}
