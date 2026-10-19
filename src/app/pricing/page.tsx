"use client";

import React from "react";
import Link from "next/link";
import {
  Calendar,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  HelpCircle,
  PhoneCall,
  Zap,
  Globe,
} from "lucide-react";
import { useSiteModals } from "@/context/ModalContext";

export default function PricingPage() {
  const { openSchedule, openQuoteModal } = useSiteModals();

  const offers = [
    {
      name: "AI Call Agent (Voice Receptionist)",
      icon: PhoneCall,
      subtitle: "Inbound 24/7 Coverage",
      whoItFits: "Businesses losing after-hours, weekend, or overflow customer phone calls.",
      features: [
        "24/7/365 AI voice answering (zero hold time)",
        "Answers custom company FAQs and pricing rules",
        "Qualifies callers and captures project/address specs",
        "Direct calendar scheduling & live warm transfer",
        "Full call recordings, transcripts, and lead cards",
        "Dedicated forwarding setup on existing business line",
      ],
      ctaText: "Get Quote for Call Agent",
    },
    {
      name: "Speed-to-Lead Outbound Agent",
      icon: Zap,
      subtitle: "Instant Inbound Follow-up",
      whoItFits: "Companies running paid ads or receiving web leads that go cold before contact.",
      features: [
        "Automated outbound call within 60 seconds of form submission",
        "Immediate qualification while the lead is active",
        "Direct warm transfer to your phone when lead is hot",
        "Automated calendar booking and text confirmations",
        "TCPA compliance and custom consent scripting",
        "Lead card delivery to your team with 5-minute audit timer",
      ],
      ctaText: "Get Quote for Speed-to-Lead",
    },
    {
      name: "High-Converting AI Website",
      icon: Globe,
      subtitle: "Digital Conversion Engine",
      whoItFits: "Businesses with slow, outdated websites that fail to generate phone calls.",
      features: [
        "Custom, modern design optimized for mobile conversions",
        "Sub-2-second load times (Lighthouse 90+ guaranteed)",
        "Managed cloud hosting and domain setup included",
        "Pre-integrated triggers for Speed-to-Lead and Call Agents",
        "Local SEO meta tags and Schema.org business markup",
        "Direct maintenance and team copy updates",
      ],
      ctaText: "Get Quote for Website",
    },
  ];

  return (
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-nafa-gold border border-amber-200 text-xs font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Transparent & Customized to Your Volume
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-nafa-charcoal tracking-tight mb-4">
            Pricing Tailored to Your Business
          </h1>
          <p className="text-base sm:text-lg text-nafa-muted max-w-2xl mx-auto leading-relaxed">
            Every business has different call volumes and lead flows. We build custom-tailored systems with zero fluff so you only pay for what you actually need.
          </p>

          <div className="mt-4 p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs text-amber-900 max-w-xl mx-auto">
            <strong>Why no one-size-fits-all prices?</strong> A local dental office with 50 calls a month needs a different setup than a multi-truck plumbing company handling 600 emergency calls. A quick 15-minute call produces an exact quote with zero obligation.
          </div>
        </div>

        {/* Individual Offer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {offers.map((offer, idx) => {
            const Icon = offer.icon;
            return (
              <div
                key={idx}
                className="apple-glass-card rounded-3xl p-6 sm:p-8 shadow-apple-card border border-white flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 text-nafa-gold flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-nafa-gold">
                    {offer.subtitle}
                  </span>
                  <h3 className="text-xl font-extrabold text-nafa-charcoal mt-1 mb-3">
                    {offer.name}
                  </h3>
                  <p className="text-xs text-nafa-muted mb-5 leading-relaxed">
                    <strong>Who it fits:</strong> {offer.whoItFits}
                  </p>

                  <div className="space-y-2 mb-6">
                    <span className="text-xs font-bold text-nafa-charcoal block">What is included:</span>
                    <ul className="space-y-2 text-xs text-nafa-charcoal">
                      {offer.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  onClick={() => openQuoteModal(offer.name)}
                  className="press-scale w-full py-3 px-4 rounded-xl border border-nafa-charcoal/20 text-nafa-charcoal hover:bg-black/5 font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all mt-2"
                >
                  <span>{offer.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Bundles Breakdown (PRD Section 4.4 & 5.5) */}
        <div className="apple-glass rounded-3xl p-8 sm:p-12 shadow-apple-card border border-nafa-gold/40 bg-gradient-to-r from-nafa-surface via-amber-50/40 to-nafa-surface mb-16">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-black uppercase tracking-wider text-nafa-gold bg-amber-100 px-3 py-1 rounded-full inline-block">
              Combine Systems for Maximum Savings
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-nafa-charcoal">
              Growth System Bundles
            </h2>
            <p className="text-xs sm:text-sm text-nafa-muted leading-relaxed">
              Bundling offers saves you significant upfront engineering fees and ensures your marketing, phone answering, and outbound callbacks communicate in one synchronized pipeline.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left pt-4">
              <div className="p-5 rounded-2xl bg-white border border-nafa-border">
                <h4 className="font-extrabold text-base text-nafa-charcoal mb-1">
                  Website + Speed-to-Lead Bundle
                </h4>
                <p className="text-xs text-nafa-muted mb-3">
                  A high-converting website built specifically to feed leads straight into your automated 60-second callback agent.
                </p>
                <button
                  onClick={() => openQuoteModal("Website + Speed-to-Lead Bundle")}
                  className="press-scale w-full py-2.5 px-3 rounded-xl bg-nafa-charcoal text-white font-bold text-xs"
                >
                  Request Bundle Quote
                </button>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-amber-300 shadow-xs relative">
                <span className="absolute -top-2.5 right-4 bg-nafa-gold text-white text-[10px] font-black uppercase px-2 py-0.5 rounded-full">
                  Best Value
                </span>
                <h4 className="font-extrabold text-base text-nafa-charcoal mb-1">
                  The Full Growth System
                </h4>
                <p className="text-xs text-nafa-muted mb-3">
                  Website + Speed-to-Lead + AI Call Agent. Complete 360° coverage so no phone call and no web inquiry is ever lost.
                </p>
                <button
                  onClick={() => openQuoteModal("The Full Growth System")}
                  className="press-scale w-full py-2.5 px-3 rounded-xl bg-nafa-gold hover:bg-nafa-gold-hover text-white font-bold text-xs shadow-apple-gold"
                >
                  Request Full System Quote
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold text-nafa-charcoal">
            Ready to find out the exact quote for your business?
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={openSchedule}
              className="press-scale py-3.5 px-7 rounded-2xl bg-nafa-charcoal hover:bg-black text-white font-bold text-sm shadow-sm flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>Book 15-Minute Strategy Call</span>
            </button>
            <button
              onClick={() => openQuoteModal()}
              className="press-scale py-3.5 px-6 rounded-2xl bg-white border border-nafa-border text-nafa-charcoal font-semibold text-sm hover:bg-stone-50"
            >
              Send Free Quote Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
