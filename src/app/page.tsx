"use client";

import React from "react";
import dynamic from "next/dynamic";
import {
  Clock,
  ShieldCheck,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { useSiteModals } from "@/context/ModalContext";
import CostSavingsCalculator from "@/components/CostSavingsCalculator";
import OfferBento from "@/components/OfferBento";
import AboutSection from "@/components/AboutSection";
import SocialProof from "@/components/SocialProof";
import FAQAccordion from "@/components/FAQAccordion";
import { AnimatedShinyButton } from "@/components/eldoraui/animated-shiny-button";
import { InteractiveHeroHeadline } from "@/components/eldoraui/InteractiveHeroHeadline";

const CobeGlobe = dynamic(
  () => import("@/components/eldoraui/cobe-globe").then((m) => m.Cobe),
  { ssr: false }
);

const PhotonBeam = dynamic(
  () => import("@/components/eldoraui/photon-beam"),
  { ssr: false }
);

export default function HomePage() {
  const { openSchedule, openQuoteModal } = useSiteModals();

  return (
    <div className="relative w-full overflow-hidden bg-transparent text-white selection:bg-white selection:text-black">
      {/* =========================================================================
          ELDORAUI PHOTON-BEAM ANIMATED BACKGROUND (LANDING PAGE ONLY)
          ========================================================================= */}
      <div className="absolute -top-16 sm:-top-28 left-0 right-0 pointer-events-none overflow-hidden -z-10 opacity-35 h-[980px]">
        <PhotonBeam
          colorBg="#000000"
          colorLine="#1e293b"
          colorSignal="#ffffff"
          lineCount={70}
          speedGlobal={0.32}
          positionY={10}
        />
      </div>

      {/* =========================================================================
          HERO SECTION (LEFT-DOCKED COPY & DESKTOP COBE 3D GLOBE IN OPEN RIGHT SPACE)
          ========================================================================= */}
      <section
        id="top"
        className="relative pt-10 sm:pt-16 pb-12 sm:pb-16 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto flex flex-col justify-center min-h-[calc(88vh-80px)]"
      >
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Hero Copy */}
          <div className="lg:col-span-7 w-full max-w-2xl text-left flex flex-col items-start z-10">
            {/* Live Operational Status Chip */}
            <div className="badge-pill inline-flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-white/90" aria-hidden="true" />
              <span className="text-xs font-medium tracking-[-0.01em] text-white/90">
                Operational AI Voice & Speed-to-Lead Infrastructure
              </span>
            </div>

            {/* Main Headline (EldoraUI Blur-In + Interactive Scale-Letter Hover) */}
            <InteractiveHeroHeadline className="mb-2" />

            {/* Subhead Lede */}
            <p className="mt-5 max-w-[56ch] text-[15px] sm:text-[16.5px] leading-[1.6] text-[#A6B4C7]">
              Custom voice receptionists and immediate response pipelines that
              answer inbound phone calls, qualify caller intent, and book revenue onto
              your calendar 24/7/365. Zero hold times. Zero missed opportunities.
            </p>

            {/* Clean 2-Button CTAs: EldoraUI Animated Shiny Button for Booking Call */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <AnimatedShinyButton
                onClick={openSchedule}
                className="h-[44px] px-6 text-sm font-semibold shadow-lg"
              >
                Book Discovery Call
              </AnimatedShinyButton>

              <button
                onClick={() => openQuoteModal()}
                className="btn btn-ghost h-[44px] px-6 text-sm font-medium text-white/90 hover:text-white"
              >
                <span>Get Custom Quote</span>
              </button>
            </div>

            {/* Trust Assurance Bar */}
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-[#A6B4C7]">
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle2 className="w-4 h-4 text-white/80 shrink-0" />
                <span>Keep your current phone number</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle2 className="w-4 h-4 text-white/80 shrink-0" />
                <span>Live in 3 to 7 business days</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle2 className="w-4 h-4 text-white/80 shrink-0" />
                <span>100% direct engineering</span>
              </div>
            </div>
          </div>

          {/* Right Column (Desktop): EldoraUI Interactive Cobe 3D Globe */}
          <div className="lg:col-span-5 hidden lg:flex justify-center items-center relative min-h-[460px] pointer-events-auto">
            <div className="w-full max-w-[440px] aspect-square flex items-center justify-center relative">
              <CobeGlobe
                variant="auto-draggable"
                className="w-full h-full"
                dark={1}
                mapBrightness={2.2}
                baseColor="#ffffff"
                markerColor="#ffffff"
                glowColor="#ffffff"
                opacity={0.85}
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          KEY TELEMETRY / 3-STAT METRICS BAR
          ========================================================================= */}
      <section className="relative z-10 stats-grid border-y border-white/10 bg-black/80 backdrop-blur-xl">
        {/* Stat 1: 24/7 Coverage */}
        <div className="stat-item">
          <div className="stat-icon" aria-hidden="true">
            <Clock className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="stat-title">24/7/365 Phone Answering</div>
            <p className="stat-desc">
              Human-grade conversational AI that answers after hours, weekends, and holiday overflows. Zero voicemail.
            </p>
          </div>
        </div>

        {/* Stat 2: Speed-to-lead */}
        <div className="stat-item">
          <div className="stat-icon" aria-hidden="true">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="stat-title">&lt;60-Second Speed-to-Lead</div>
            <p className="stat-desc">
              Instantly contacts web form submissions and leads via autonomous call and SMS before competitors wake up.
            </p>
          </div>
        </div>

        {/* Stat 3: 0s Hold time */}
        <div className="stat-item">
          <div className="stat-icon" aria-hidden="true">
            <ShieldCheck className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="stat-title">0s Hold Time &bull; Live Booking</div>
            <p className="stat-desc">
              Books qualified jobs directly into your CRM or calendar with instant SMS confirmation and technician dispatch.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          THE INTERACTIVE COST SAVINGS & LOST REVENUE CALCULATOR
          ========================================================================= */}
      <CostSavingsCalculator />

      {/* =========================================================================
          THE 3 CORE SYSTEMS (AI RECEPTIONIST, SPEED-TO-LEAD AGENT, WEB BUILD & REDESIGN)
          ========================================================================= */}
      <OfferBento />

      {/* =========================================================================
          ABOUT US & THE NAFA STANDARD
          ========================================================================= */}
      <AboutSection />

      {/* =========================================================================
          VALIDATED CASE STUDIES & ROI RESULTS
          ========================================================================= */}
      <SocialProof />

      {/* =========================================================================
          INTERACTIVE FAQ ACCORDION
          ========================================================================= */}
      <FAQAccordion />

      {/* =========================================================================
          FINAL HIGH-CONVERTING CLOSING CTA BANNER
          ========================================================================= */}
      <section className="relative py-14 sm:py-20 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto">
        <div className="rounded-xl border border-white/20 bg-gradient-to-b from-white/[0.08] via-black/90 to-black p-8 sm:p-12 lg:p-14 text-center relative overflow-hidden shadow-2xl">
          {/* Subtle top edge glow */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[-0.03em] text-white leading-[1.1] max-w-3xl mx-auto">
            Ready to deploy an AI voice receptionist that never sleeps?
          </h2>

          <p className="mt-4 text-[15px] sm:text-[16px] text-[#A6B4C7] max-w-[58ch] mx-auto leading-relaxed">
            Book a 15-minute technical discovery call. We will calculate your exact revenue at risk and demo your custom voice agent live on the phone.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <AnimatedShinyButton
              onClick={openSchedule}
              className="h-[44px] px-8 text-sm font-semibold shadow-xl"
            >
              Book Discovery Call
            </AnimatedShinyButton>

            <button
              onClick={() => openQuoteModal()}
              className="btn btn-ghost h-[44px] px-7 text-sm font-medium text-white"
            >
              <span>Get Custom Quote</span>
            </button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-[#A6B4C7]">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-white/80" />
              No contracts or long-term lock-in
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-white/80" />
              Keep your existing phone numbers
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-white/80" />
              Live within 3 to 7 business days
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
