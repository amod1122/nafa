"use client";

import React from "react";
import { Star, Building2, TrendingUp, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function SocialProof() {
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
      metric: "34%",
      metricLabel: "Increase in New Patient Bookings",
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
    <section className="py-16 sm:py-24 bg-nafa-canvas relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold mb-4">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
            Proven Real-World Impact
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-nafa-charcoal mb-4">
            Built for Local Businesses That Depend on Inquiries
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-nafa-muted max-w-2xl mx-auto leading-relaxed">
            See how appointment-driven service companies turn missed calls and slow follow-ups into booked revenue.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((study, idx) => (
            <div
              key={idx}
              className="apple-glass-card rounded-3xl p-6 sm:p-8 shadow-apple-card border border-white flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-nafa-gold bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                    {study.industry}
                  </span>
                  <div className="flex items-center text-amber-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                <h3 className="text-lg font-extrabold text-nafa-charcoal mb-4">
                  {study.title}
                </h3>

                {/* Highlight Metric */}
                <div className="p-4 rounded-2xl bg-nafa-canvas border border-nafa-border/60 mb-5">
                  <div className="text-3xl font-black text-nafa-charcoal tracking-tight">
                    {study.metric}
                  </div>
                  <div className="text-xs font-bold text-emerald-700 mt-0.5">
                    {study.metricLabel}
                  </div>
                  <div className="text-[11px] text-nafa-muted mt-1 font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    {study.stat}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-nafa-muted italic leading-relaxed mb-6">
                  "{study.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-nafa-border/50 text-xs text-nafa-charcoal font-bold">
                — {study.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
