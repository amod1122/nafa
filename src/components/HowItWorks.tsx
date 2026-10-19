"use client";

import React from "react";
import { PhoneCall, Hammer, CalendarCheck, ShieldCheck, ArrowRight } from "lucide-react";

interface HowItWorksProps {
  onOpenSchedule: () => void;
}

export default function HowItWorks({ onOpenSchedule }: HowItWorksProps) {
  const steps = [
    {
      number: "01",
      icon: PhoneCall,
      title: "15-Minute Discovery Call",
      description:
        "We discuss your business, common customer questions, pricing guidelines, and how you currently handle calls. No preparation needed.",
      badge: "Step 1",
    },
    {
      number: "02",
      icon: Hammer,
      title: "We Build & Tune It for You",
      description:
        "Our team configures your AI voice receptionist, writes the objection handling logic, and tests it rigorously. 100% done for you — zero outsourcing.",
      badge: "Step 2",
    },
    {
      number: "03",
      icon: CalendarCheck,
      title: "Turn On 24/7 Appointments",
      description:
        "We forward your calls or launch your system. Every incoming call is answered, every lead is contacted in minutes, and booked meetings land in your calendar.",
      badge: "Step 3",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-nafa-canvas-muted/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 text-nafa-charcoal border border-nafa-border text-xs font-bold mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-nafa-gold" />
            Simple 3-Step Process
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-nafa-charcoal mb-4">
            How We Get You Live in Days, Not Months
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-nafa-muted max-w-2xl mx-auto leading-relaxed">
            You don't need to learn prompt engineering or configure APIs. We handle the architecture end-to-end.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="apple-glass-card rounded-3xl p-6 sm:p-8 shadow-apple-card border border-white relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-12 h-12 rounded-2xl bg-amber-50 text-nafa-gold border border-amber-200/60 font-black text-lg flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </span>
                    <span className="text-3xl font-black text-nafa-charcoal/15 font-mono">
                      {step.number}
                    </span>
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-nafa-gold">
                    {step.badge}
                  </span>
                  <h3 className="text-xl font-extrabold text-nafa-charcoal mt-1 mb-2.5">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-nafa-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-nafa-border/40 flex items-center gap-2 text-xs font-semibold text-nafa-charcoal-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>Direct team support</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing action strip */}
        <div className="text-center">
          <button
            onClick={onOpenSchedule}
            className="press-scale inline-flex items-center gap-2.5 py-3.5 px-8 rounded-2xl bg-nafa-charcoal hover:bg-black text-white font-bold text-sm shadow-sm transition-all"
          >
            <span>Start Step 1: Book Your Discovery Call</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </button>
        </div>
      </div>
    </section>
  );
}
