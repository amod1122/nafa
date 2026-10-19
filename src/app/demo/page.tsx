"use client";

import React from "react";
import InteractiveAudioDemo from "@/components/InteractiveAudioDemo";
import { Calendar } from "lucide-react";
import { useSiteModals } from "@/context/ModalContext";

export default function DemoPage() {
  const { openSchedule, openQuoteModal } = useSiteModals();

  return (
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-28 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="badge-pill inline-flex items-center gap-1.5 mb-4">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            <span>Live Audio & Speed Sandbox</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-white mb-4">
            Experience Our AI in <em className="font-editorial not-italic text-[#9a9a9a]">Action</em>
          </h1>
          <p className="text-base sm:text-lg text-[#9a9a9a] max-w-2xl mx-auto leading-relaxed">
            Hear actual synthesized call scenarios across home services, healthcare, and legal intake. Watch live waveforms, review synchronized transcripts, and test our automated speed-to-lead callback sandbox.
          </p>
        </div>

        {/* The Audio Demo Component */}
        <InteractiveAudioDemo />

        {/* Next Steps CTA */}
        <div className="apple-glass rounded-lg p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4 mt-12 border border-white/20">
          <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">
            Want to Test a Live Call on Your Own Phone?
          </h3>
          <p className="text-xs sm:text-sm text-[#9a9a9a] max-w-xl mx-auto">
            Book a 15-minute discovery consultation. We will configure a live test line with your company's name and services so you can dial it and hear it for yourself.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={openSchedule}
              className="btn btn-solid h-[42px] px-6 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Discovery Call</span>
            </button>
            <button
              onClick={() => openQuoteModal()}
              className="btn btn-ghost h-[42px] px-6 text-xs sm:text-sm"
            >
              Get Custom Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
