"use client";

import React from "react";
import { PhoneCall, Zap, Globe } from "lucide-react";
import { useSiteModals } from "@/context/ModalContext";
import SpecularButton from "@/components/ui/SpecularButton";

const systems = [
  {
    id: "ai-call-agent",
    title: "Voice Call AI Agent",
    copy: "Answers every call, qualifies intent, books the job.",
    icon: PhoneCall,
    highlight: false,
  },
  {
    id: "speed-to-lead",
    title: "Speed-to-Lead Agent",
    copy: "Calls and texts new leads in under 60 seconds.",
    icon: Zap,
    highlight: true,
  },
  {
    id: "ai-website",
    title: "Website Build & Redesign",
    copy: "Fast, mobile-first sites with booking built in.",
    icon: Globe,
    highlight: false,
  },
];

export default function HomePage() {
  const { openSchedule, openQuoteModal } = useSiteModals();

  return (
    <div className="relative w-full overflow-hidden bg-transparent text-white selection:bg-white selection:text-black">
      <section
        id="top"
        className="relative min-h-[80svh] flex flex-col justify-center max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-10 pb-20 sm:pt-16 sm:pb-28"
      >
        <div className="w-full max-w-2xl text-left flex flex-col items-start z-10">
          <h1 className="font-sans text-[36px] sm:text-[48px] lg:text-[58px] font-medium leading-[1.08] tracking-[-0.035em] text-white [text-wrap:balance]">
            Deploy{" "}
            <span className="font-voice-agent font-normal text-[1.12em] tracking-normal text-white pr-1">
              AI call agents
            </span>{" "}
            that
            <br />
            answer every lead in seconds.
          </h1>

          <p className="mt-6 max-w-[48ch] text-[16px] sm:text-[17px] leading-relaxed text-muted">
            Voice receptionists that answer every call and book revenue onto your calendar 24/7.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3.5">
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
              className="btn btn-ghost h-[44px] px-6 text-sm font-medium text-white/90"
            >
              <span>Book a Call</span>
            </button>
          </div>
        </div>
      </section>

      <section className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-20 sm:py-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {systems.map((system) => {
            const Icon = system.icon;
            return (
              <div
                key={system.id}
                className={`interactive-card p-6 sm:p-8 flex flex-col justify-between group ${
                  system.highlight
                    ? "border-white/30 bg-gradient-to-b from-white/[0.08] via-black/80 to-black/95 shadow-xl shadow-white/[0.02]"
                    : ""
                }`}
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-medium tracking-[-0.02em] text-white">
                    {system.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-muted leading-relaxed">
                    {system.copy}
                  </p>
                </div>

                <div className="pt-6 mt-8 border-t border-white/10">
                  <button
                    onClick={() => openQuoteModal(system.title)}
                    className="btn btn-solid w-full h-[44px] text-xs font-semibold"
                  >
                    <span>Configure</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
