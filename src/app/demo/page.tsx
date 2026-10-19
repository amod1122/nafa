"use client";

import React from "react";
import Link from "next/link";
import InteractiveAudioDemo from "@/components/InteractiveAudioDemo";
import { Phone, Calendar, ArrowRight, Sparkles, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useSiteModals } from "@/context/ModalContext";

export default function DemoPage() {
  const { openSchedule, openQuoteModal } = useSiteModals();

  return (
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Live Audio & Speed Sandbox
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-nafa-charcoal tracking-tight mb-4">
            Experience Our AI in Action
          </h1>
          <p className="text-base sm:text-lg text-nafa-muted max-w-2xl mx-auto leading-relaxed">
            Hear actual synthesized call scenarios across home services, healthcare, and legal intake. Watch live waveforms, review synchronized transcripts, and test our automated speed-to-lead callback sandbox.
          </p>
        </div>

        {/* The Audio Demo Component */}
        <InteractiveAudioDemo />

        {/* Next Steps CTA */}
        <div className="apple-glass rounded-3xl p-8 sm:p-12 shadow-apple-card border border-nafa-gold/40 text-center max-w-3xl mx-auto space-y-4 mt-12">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-nafa-charcoal">
            Want to Test a Live Call on Your Own Phone?
          </h3>
          <p className="text-xs sm:text-sm text-nafa-muted max-w-xl mx-auto">
            Book a 15-minute discovery consultation. We will configure a live test line with your company's name and services so you can dial it and hear it for yourself.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={openSchedule}
              className="press-scale py-3.5 px-7 rounded-2xl bg-nafa-gold hover:bg-nafa-gold-hover text-white font-bold text-sm shadow-apple-gold flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Strategy Session</span>
            </button>
            <button
              onClick={() => openQuoteModal()}
              className="press-scale py-3.5 px-6 rounded-2xl bg-white border border-nafa-border text-nafa-charcoal font-semibold text-sm hover:bg-stone-50"
            >
              Get Custom Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
