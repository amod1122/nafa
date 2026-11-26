"use client";

import React from "react";
import {
  ArrowRight,
  Clock,
  ShieldCheck,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { useSiteModals } from "@/context/ModalContext";
import CostSavingsCalculator from "@/components/CostSavingsCalculator";
import OfferBento from "@/components/OfferBento";
import AboutSection from "@/components/AboutSection";
import FAQAccordion from "@/components/FAQAccordion";
import { AnimatedShinyButton } from "@/components/eldoraui/animated-shiny-button";
import SpecularButton from "@/components/ui/SpecularButton";

export default function HomePage() {
  const { openSchedule, openQuoteModal } = useSiteModals();

  return (
    <div className="relative w-full overflow-hidden bg-transparent text-white selection:bg-white selection:text-black">
      {/* =========================================================================
          HERO SECTION (CLEAN LEFT-DOCKED COPY ON PURE BLACK WITH MAGIC UI PARTICLES)
          ========================================================================= */}
      <section
        id="top"
        className="relative pt-6 sm:pt-10 pb-12 sm:pb-16 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto flex flex-col justify-center min-h-[calc(80dvh-80px)]"
      >
        <div className="w-full flex justify-start">
          <div className="w-full max-w-2xl text-left flex flex-col items-start z-10">
            {/* Main Headline (Clean, Razor-Sharp High-Contrast Typography) */}
            <h1 className="font-sans text-[36px] sm:text-[48px] lg:text-[58px] font-medium leading-[1.08] tracking-[-0.035em] text-white [text-wrap:balance]">
              Deploy{" "}
              <span className="font-voice-agent font-normal text-[1.12em] tracking-normal text-white pr-1">
                AI call agents
              </span>{" "}
              that
              <br />
              answer every lead in seconds.
            </h1>

            {/* Subhead Lede */}
            <p className="mt-4 max-w-[48ch] text-[16px] sm:text-[17px] leading-relaxed text-muted">
              Voice receptionists that answer every phone call, qualify caller intent, and book revenue onto your calendar 24/7. Zero hold times. Zero missed calls.
            </p>

            {/* Clean 2-Button CTAs: Specular Button with dynamic rim light */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <SpecularButton
                size="lg"
                radius={18}
                tint="#ffffff"
                tintOpacity={0.04}
                textColor="#f5f5f5"
                lineColor="#ffffff"
                baseColor="#525252"
                intensity={1}
                idleIntensity={0.35}
                shineSize={10}
                shineFade={34}
                thickness={1.2}
                glow={1}
                followMouse={true}
                proximity={250}
                onClick={() => openQuoteModal()}
              >
                Get a Quote
              </SpecularButton>

              <button
                onClick={openSchedule}
                className="btn btn-ghost h-[44px] px-6 text-sm font-medium text-white/90 hover:text-white"
              >
                <span>Book a Call</span>
              </button>
            </div>

            {/* Trust Assurance Bar */}
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-muted">
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
            <div className="stat-title">24/7 Phone Answering</div>
            <p className="stat-desc">
              Human-grade AI answering after-hours, weekends, and overflow calls. Zero voicemail.
            </p>
          </div>
        </div>

        {/* Stat 2: Speed-to-lead */}
        <div className="stat-item">
          <div className="stat-icon" aria-hidden="true">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="stat-title">&lt;60s Speed-to-Lead</div>
            <p className="stat-desc">
              Calls and texts inbound form leads in under 60 seconds before competitors respond.
            </p>
          </div>
        </div>

        {/* Stat 3: 0s Hold time */}
        <div className="stat-item">
          <div className="stat-icon" aria-hidden="true">
            <ShieldCheck className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="stat-title">Live CRM Booking</div>
            <p className="stat-desc">
              Books qualified appointments directly into your CRM or team calendar with instant SMS confirmation.
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

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[-0.03em] text-white leading-[1.1] max-w-3xl mx-auto [text-wrap:balance]">
            Ready to deploy an AI voice receptionist that never sleeps?
          </h2>

          <p className="mt-3 text-[15px] sm:text-[16px] text-muted max-w-[50ch] mx-auto leading-relaxed">
            Book a 15-minute call to calculate your revenue at risk and test a live custom voice agent on your phone.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <SpecularButton
              onClick={() => openQuoteModal()}
              size="md"
              radius={10}
              tint="#ffffff"
              tintOpacity={0.06}
              blur={12}
              textColor="#ffffff"
              lineColor="#ffffff"
              baseColor="#525252"
              intensity={1.2}
              idleIntensity={0.4}
              shineSize={14}
              shineFade={36}
              thickness={1.4}
              glow={1.2}
              followMouse={true}
              autoAnimate={true}
              speed={0.4}
              proximity={260}
              className="h-[46px] px-8 text-sm font-semibold shadow-xl"
            >
              Get a Quote
            </SpecularButton>

            <button
              onClick={openSchedule}
              className="btn btn-ghost h-[44px] px-7 text-sm font-medium text-white"
            >
              <span>Book a Call</span>
            </button>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-muted">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-white/80" />
              No long-term contracts
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-white/80" />
              Keep your numbers
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-white/80" />
              Live in 3 to 7 business days
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
