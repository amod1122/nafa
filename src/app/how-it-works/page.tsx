"use client";

import React from "react";
import Link from "next/link";
import {
  PhoneCall,
  Hammer,
  Rocket,
  Headphones,
  CheckCircle2,
  Calendar,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { useSiteModals } from "@/context/ModalContext";

export default function HowItWorksPage() {
  const { openSchedule, openQuoteModal } = useSiteModals();

  const stages = [
    {
      step: "01",
      icon: PhoneCall,
      title: "15-Minute Strategy & Discovery Session",
      duration: "Day 1",
      desc: "We discuss your business model, typical customer inquiries, operating hours, emergency procedures, and how you currently handle calls. Zero prep needed on your end.",
      deliverables: [
        "Call intake questions & qualification criteria",
        "Objection handling rules & pricing guidelines",
        "Calendar & CRM integration mapping",
      ],
    },
    {
      step: "02",
      icon: Hammer,
      title: "Custom System Engineering & Script Tuning",
      duration: "Days 2 - 4",
      desc: "Our team configures your AI voice receptionist, builds out your knowledge base, programs speed-to-lead triggers, and tunes the conversational voice model. 100% in-house — no outsourcing.",
      deliverables: [
        "Natural speech synthesis tuning",
        "Sub-second voice response latency optimization",
        "Rigorous edge-case and scenario testing",
      ],
    },
    {
      step: "03",
      icon: Rocket,
      title: "Testing, Number Routing & Launch",
      duration: "Days 5 - 7",
      desc: "We test the live phone line with you so you can hear the AI agent handle realistic calls. We set up simple forwarding on your existing business number and turn on live lead handling.",
      deliverables: [
        "Zero disruption to your current phone number",
        "Simulated test calls with your team",
        "Live deployment with automated lead card notifications",
      ],
    },
    {
      step: "04",
      icon: Headphones,
      title: "Ongoing Monitoring & Continuous Tuning",
      duration: "Post-Launch",
      desc: "We monitor your system's performance weekly, review call transcripts, refine answers to new questions, and ensure your appointment booking rate stays high.",
      deliverables: [
        "Regular knowledge base updates",
        "Direct access to your systems engineer",
        "Monthly performance and ROI reviews",
      ],
    },
  ];

  return (
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 text-nafa-charcoal border border-nafa-border text-xs font-bold mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-nafa-gold" />
            Zero Fluff • Direct Access to Builders
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-nafa-charcoal tracking-tight mb-4">
            How We Get You Live in Days, Not Months
          </h1>
          <p className="text-base sm:text-lg text-nafa-muted max-w-2xl mx-auto leading-relaxed">
            You don't have to hire developers, learn complex software, or manage outsourced contractors. We engineer, deploy, and support your systems directly.
          </p>
        </div>

        {/* 4 Stages Detailed Walkthrough */}
        <div className="space-y-8 mb-16">
          {stages.map((stage) => {
            const Icon = stage.icon;
            return (
              <div
                key={stage.step}
                className="apple-glass rounded-3xl p-6 sm:p-10 shadow-apple-card border border-white flex flex-col md:flex-row gap-6 md:gap-8 items-start justify-between"
              >
                <div className="flex items-center gap-4 flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-amber-50 text-nafa-gold border border-amber-200 flex items-center justify-center font-bold">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs font-black uppercase text-amber-600 tracking-wider">
                      Stage {stage.step}
                    </span>
                    <div className="text-xs text-nafa-muted font-bold">{stage.duration}</div>
                  </div>
                </div>

                <div className="space-y-3 flex-1">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-nafa-charcoal">
                    {stage.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-nafa-muted leading-relaxed">
                    {stage.desc}
                  </p>

                  <div className="pt-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-nafa-charcoal block mb-1.5">
                      What We Deliver:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-nafa-charcoal font-medium">
                      {stage.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* No Outsourcing Guarantee Banner */}
        <div className="apple-glass-card rounded-3xl p-8 sm:p-12 shadow-apple-card border border-nafa-border/60 text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-nafa-gold mx-auto flex items-center justify-center font-bold">
            <Users className="w-6 h-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-nafa-charcoal">
            The Nafa Promise: No Outsourcing, No Middlemen
          </h2>
          <p className="text-xs sm:text-sm text-nafa-muted leading-relaxed max-w-xl mx-auto">
            When you partner with Nafa Technologies, the people on your strategy calls are the same engineers building and tuning your voice models. We never farm work out to cheap overseas contractors.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={openSchedule}
              className="press-scale py-3.5 px-7 rounded-2xl bg-nafa-gold hover:bg-nafa-gold-hover text-white font-bold text-sm shadow-apple-gold flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your 15-Minute Discovery Call</span>
            </button>
            <button
              onClick={() => openQuoteModal()}
              className="press-scale py-3.5 px-6 rounded-2xl bg-white border border-nafa-border text-nafa-charcoal font-semibold text-sm hover:bg-stone-50"
            >
              Get a Free Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
