"use client";

import React from "react";
import {
  Calendar,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  PhoneCall,
  Zap,
  Globe,
} from "lucide-react";
import { useSiteModals } from "@/context/ModalContext";
import PixelCard from "@/components/ui/PixelCard";
import SpecularButton from "@/components/ui/SpecularButton";

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
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-28 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="badge-pill inline-flex items-center gap-1.5 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>Transparent & Customized to Your Volume</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-white mb-4">
            Pricing <em className="font-editorial not-italic text-[#9a9a9a]">Tailored</em> to Your Scale
          </h1>
          <p className="text-base sm:text-lg text-[#9a9a9a] max-w-2xl mx-auto leading-relaxed">
            Every business has different call volumes and lead flows. We engineer custom-tailored systems with zero fluff so you only pay for what you actually need.
          </p>

          <div className="mt-5 p-4 rounded-[6px] bg-white/[0.03] border border-white/10 text-xs text-[#9a9a9a] max-w-xl mx-auto text-left sm:text-center">
            <strong className="text-white">Why no generic rigid pricing?</strong> A local dental office with 50 calls a month needs a different setup than a multi-truck plumbing company handling 600 emergency calls. A quick 15-minute call produces an exact quote with zero obligation.
          </div>
        </div>

        {/* Individual Offer Cards with PixelCard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {offers.map((offer, idx) => {
            const Icon = offer.icon;
            return (
              <PixelCard
                key={idx}
                variant="default"
                shape="square"
                gap={6}
                speed={28}
                spotlight={0.5}
                glow={0.4}
                opacity={0.65}
                radius={16}
                trigger="hover"
                clickPulse
                intro
                introDelay={idx * 120}
                className="h-full"
              >
                <div className="p-6 sm:p-8 flex flex-col justify-between h-full w-full">
                  <div>
                    <div className="w-10 h-10 rounded-[6px] border border-white/15 bg-white/[0.05] text-white flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#9a9a9a]">
                      {offer.subtitle}
                    </span>
                    <h3 className="text-xl font-medium text-white tracking-tight mt-1 mb-2">
                      {offer.name}
                    </h3>
                    <p className="text-xs text-[#9a9a9a] mb-5 leading-relaxed">
                      <strong className="text-white">Who it fits:</strong> {offer.whoItFits}
                    </p>

                    <div className="space-y-2 mb-6">
                      <span className="text-xs font-medium text-white/80 block">What is included:</span>
                      <ul className="space-y-2 text-xs text-white/90">
                        {offer.features.map((f, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button
                    onClick={() => openQuoteModal(offer.name)}
                    className="btn btn-ghost w-full h-[40px] text-xs sm:text-sm font-medium flex items-center justify-center gap-1.5 mt-2"
                  >
                    <span>{offer.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </button>
                </div>
              </PixelCard>
            );
          })}
        </div>

        {/* Bundles Breakdown */}
        <div className="apple-glass rounded-lg p-8 sm:p-12 mb-16 border border-white/20">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="badge-pill text-xs">
              Combine Systems for Maximum Savings
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white">
              Growth System <em className="font-editorial not-italic text-[#9a9a9a]">Bundles</em>
            </h2>
            <p className="text-xs sm:text-sm text-[#9a9a9a] leading-relaxed">
              Bundling offers saves you significant upfront engineering fees and ensures your marketing, phone answering, and outbound callbacks communicate in one synchronized pipeline.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left pt-4">
              <PixelCard
                variant="default"
                shape="square"
                gap={6}
                speed={25}
                spotlight={0.45}
                glow={0.35}
                opacity={0.6}
                radius={12}
                trigger="hover"
                clickPulse
                className="h-full"
              >
                <div className="p-5 flex flex-col justify-between h-full w-full">
                  <div>
                    <h4 className="font-medium text-base text-white mb-1">
                      Website + Speed-to-Lead Bundle
                    </h4>
                    <p className="text-xs text-[#9a9a9a] mb-4">
                      A high-converting website built specifically to feed leads straight into your automated 60-second callback agent.
                    </p>
                  </div>
                  <button
                    onClick={() => openQuoteModal("Website + Speed-to-Lead Bundle")}
                    className="btn btn-ghost w-full h-[38px] text-xs font-medium"
                  >
                    Request Bundle Quote
                  </button>
                </div>
              </PixelCard>

              <PixelCard
                variant="default"
                shape="square"
                gap={6}
                speed={30}
                spotlight={0.55}
                glow={0.45}
                opacity={0.7}
                radius={12}
                trigger="hover"
                clickPulse
                className="h-full relative"
              >
                <div className="p-5 flex flex-col justify-between h-full w-full relative">
                  <span className="absolute -top-2.5 right-4 bg-white text-black text-[10px] font-bold uppercase px-2 py-0.5 rounded-[4px] z-10">
                    Best Value
                  </span>
                  <div>
                    <h4 className="font-medium text-base text-white mb-1">
                      The Full Growth System
                    </h4>
                    <p className="text-xs text-[#9a9a9a] mb-4">
                      Website + Speed-to-Lead + AI Call Agent. Complete 360° coverage so no phone call and no web inquiry is ever lost.
                    </p>
                  </div>
                  <button
                    onClick={() => openQuoteModal("The Full Growth System")}
                    className="btn btn-solid w-full h-[38px] text-xs font-semibold"
                  >
                    Request Full System Quote
                  </button>
                </div>
              </PixelCard>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-medium tracking-tight text-white">
            Ready to find out the exact quote for your business?
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <SpecularButton
              onClick={openSchedule}
              size="sm"
              radius={8}
              tint="#ffffff"
              tintOpacity={0.08}
              blur={12}
              textColor="#ffffff"
              lineColor="#ffffff"
              baseColor="#525252"
              intensity={1.1}
              idleIntensity={0.35}
              shineSize={10}
              shineFade={32}
              thickness={1.3}
              glow={1}
              followMouse
              proximity={240}
              className="h-[42px] px-6 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Discovery Call</span>
            </SpecularButton>
            <button
              onClick={() => openQuoteModal()}
              className="btn btn-ghost h-[42px] px-6 text-xs sm:text-sm"
            >
              Send Free Quote Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
