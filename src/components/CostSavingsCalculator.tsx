"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import { useSiteModals } from "@/context/ModalContext";

export default function CostSavingsCalculator() {
  const { openSchedule } = useSiteModals();

  // State for interactive sliders
  const [inboundCallsPerMonth, setInboundCallsPerMonth] = useState<number>(180);
  const [avgTicketValue, setAvgTicketValue] = useState<number>(450);
  const [missedRatePercent, setMissedRatePercent] = useState<number>(28);

  // Industry benchmark: ~25% of missed callers would have booked if answered immediately
  const missedCallsPerMonth = Math.round((inboundCallsPerMonth * missedRatePercent) / 100);
  const estimatedLostJobsPerMonth = Math.round(missedCallsPerMonth * 0.28);
  const estimatedMonthlyLoss = Math.round(estimatedLostJobsPerMonth * avgTicketValue);
  const estimatedAnnualLoss = estimatedMonthlyLoss * 12;

  // Comparison vs Human Receptionist ($48,000 salary + benefits/taxes = ~$54,000)
  const humanReceptionistAnnualCost = 54000;
  // Estimated Nafa Growth plan annual cost (~$7,188)
  const nafaEstimatedAnnualCost = 7188;
  const annualOverheadSavings = humanReceptionistAnnualCost - nafaEstimatedAnnualCost;
  const totalAnnualImpact = estimatedAnnualLoss + annualOverheadSavings;

  return (
    <section id="roi-calculator" className="relative py-14 sm:py-20 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto">
      {/* Background radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-white/[0.02] blur-[120px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[-0.03em] text-white leading-[1.1]">
            How much revenue is slipping away from unanswered calls?
          </h2>

          <p className="mt-4 text-[15px] sm:text-[16px] text-[#A6B4C7] leading-relaxed max-w-[65ch] mx-auto">
            When potential clients call with an immediate need, 85% hang up rather than leave a voicemail. They call your closest competitor. Calculate the true bottom-line cost below:
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 rounded-lg border border-white/12 bg-black/60 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div>
                  <h3 className="text-lg font-semibold text-white tracking-[-0.02em]">
                    Your Operating Parameters
                  </h3>
                  <p className="text-xs text-[#A6B4C7] mt-0.5">
                    Adjust the sliders to match your current inbound metrics
                  </p>
                </div>
                <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white/80">
                  Live Model
                </span>
              </div>

              {/* Slider 1: Inbound Calls */}
              <div className="py-6 border-b border-white/10">
                <div className="flex justify-between items-baseline mb-2">
                  <label htmlFor="slider-calls" className="text-sm font-medium text-white/90 flex items-center gap-2">
                    <span>Monthly Inbound Calls</span>
                  </label>
                  <span className="text-xl font-mono font-semibold text-white">
                    {inboundCallsPerMonth.toLocaleString()}{" "}
                    <span className="text-xs text-[#A6B4C7] font-normal font-sans">calls/mo</span>
                  </span>
                </div>
                <input
                  id="slider-calls"
                  type="range"
                  min="30"
                  max="1200"
                  step="10"
                  value={inboundCallsPerMonth}
                  onChange={(e) => setInboundCallsPerMonth(Number(e.target.value))}
                  className="liquid-slider my-3"
                  aria-label="Monthly Inbound Calls"
                />
                <div className="flex justify-between text-xs text-[#A6B4C7] font-mono">
                  <span>30 calls</span>
                  <span>600 calls</span>
                  <span>1,200+ calls</span>
                </div>
              </div>

              {/* Slider 2: Average Job / Customer Value */}
              <div className="py-6 border-b border-white/10">
                <div className="flex justify-between items-baseline mb-2">
                  <label htmlFor="slider-ticket" className="text-sm font-medium text-white/90 flex items-center gap-2">
                    <span>Average Value Per Customer / Job</span>
                  </label>
                  <span className="text-xl font-mono font-semibold text-white">
                    ${avgTicketValue.toLocaleString()}{" "}
                    <span className="text-xs text-[#A6B4C7] font-normal font-sans">USD</span>
                  </span>
                </div>
                <input
                  id="slider-ticket"
                  type="range"
                  min="100"
                  max="4000"
                  step="50"
                  value={avgTicketValue}
                  onChange={(e) => setAvgTicketValue(Number(e.target.value))}
                  className="liquid-slider my-3"
                  aria-label="Average Value Per Customer"
                />
                <div className="flex justify-between text-xs text-[#A6B4C7] font-mono">
                  <span>$100 (Routine)</span>
                  <span>$2,000 (Install/Procedure)</span>
                  <span>$4,000+ (High-ticket)</span>
                </div>
              </div>

              {/* Slider 3: Missed Call Rate */}
              <div className="py-6">
                <div className="flex justify-between items-baseline mb-2">
                  <label htmlFor="slider-missed" className="text-sm font-medium text-white/90 flex items-center gap-2">
                    <span>Estimated Missed Call Rate</span>
                    <span className="text-xs text-[#A6B4C7] bg-white/5 px-2 py-0.5 rounded border border-white/10">
                      Industry avg 27-62%
                    </span>
                  </label>
                  <span className="text-xl font-mono font-semibold text-white">
                    {missedRatePercent}%{" "}
                    <span className="text-xs text-[#A6B4C7] font-normal font-sans">
                      ({missedCallsPerMonth} calls missed)
                    </span>
                  </span>
                </div>
                <input
                  id="slider-missed"
                  type="range"
                  min="10"
                  max="65"
                  step="1"
                  value={missedRatePercent}
                  onChange={(e) => setMissedRatePercent(Number(e.target.value))}
                  className="liquid-slider my-3"
                  aria-label="Estimated Missed Call Rate"
                />
                <div className="flex justify-between text-xs text-[#A6B4C7] font-mono">
                  <span>10% (Low)</span>
                  <span>28% (Typical SMB)</span>
                  <span>65% (Busy / High Miss)</span>
                </div>
              </div>
            </div>

            {/* Quick Stat Bar (Flattened - no nested box) */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10 mt-auto">
              <div>
                <div className="text-xs text-[#A6B4C7] uppercase tracking-wider font-mono">
                  Missed Inbounds
                </div>
                <div className="text-xl font-semibold text-white mt-1">
                  ~{missedCallsPerMonth} calls/mo
                </div>
              </div>
              <div>
                <div className="text-xs text-[#A6B4C7] uppercase tracking-wider font-mono">
                  Lost Booked Jobs
                </div>
                <div className="text-xl font-semibold text-white mt-1">
                  ~{estimatedLostJobsPerMonth} clients/mo
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results Column (5 cols) - Flattened hierarchy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 rounded-lg border border-white/16 bg-gradient-to-b from-white/[0.07] via-black/80 to-black/95 backdrop-blur-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden"
          >
            {/* Ambient top light */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

            <div>
              <div className="flex items-center gap-2 text-white/80 text-xs font-semibold tracking-wide uppercase font-mono">
                <AlertTriangle className="w-4 h-4 text-white/70" />
                <span>Revenue at Risk</span>
              </div>

              {/* Monthly Loss Display */}
              <div className="mt-4">
                <div className="text-xs text-[#A6B4C7]">Estimated Monthly Revenue Lost:</div>
                <div className="text-4xl sm:text-5xl font-mono font-bold text-white tracking-tight mt-1">
                  ${estimatedMonthlyLoss.toLocaleString()}
                  <span className="text-base text-[#A6B4C7] font-normal font-sans">/mo</span>
                </div>
              </div>

              {/* Annual Loss Breakdown */}
              <div className="mt-6 pt-5 border-t border-white/10 space-y-3">
                <div className="flex items-center justify-between text-xs text-[#A6B4C7]">
                  <span>Annual Lost Top-Line Revenue</span>
                  <span className="font-mono text-white text-sm font-semibold">
                    ${estimatedAnnualLoss.toLocaleString()}/yr
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-[#A6B4C7]">
                  <span>Avg Human Receptionist Cost</span>
                  <span className="font-mono text-white/90 text-sm">
                    ${humanReceptionistAnnualCost.toLocaleString()}/yr
                  </span>
                </div>
              </div>

              {/* Potential Net Value Recovered With Nafa */}
              <div className="mt-6 pt-5 border-t border-white/10">
                <div className="flex items-center gap-2 text-white text-xs font-semibold uppercase tracking-wider font-mono">
                  <TrendingUp className="w-4 h-4 text-white" />
                  <span>Total Value Recovered With Nafa</span>
                </div>
                <div className="text-3xl sm:text-4xl font-mono font-bold text-white tracking-tight mt-2">
                  +${totalAnnualImpact.toLocaleString()}
                  <span className="text-xs text-[#A6B4C7] font-normal font-sans block mt-0.5">
                    combined revenue capture + labor efficiency per year
                  </span>
                </div>
                <ul className="mt-4 space-y-2 text-xs text-white/90">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-white/80 shrink-0" />
                    <span>24/7/365 coverage answers in &lt;1 second</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-white/80 shrink-0" />
                    <span>Direct live calendar booking into your CRM</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-white/80 shrink-0" />
                    <span>Zero sick days, zero missed holiday calls</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Action CTA */}
            <div className="mt-8 pt-6 border-t border-white/12">
              <button
                onClick={openSchedule}
                className="btn btn-solid w-full h-[46px] text-sm font-semibold gap-2 shadow-lg"
              >
                <span>Plug The Leak: Book Free System Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-center text-xs text-[#A6B4C7] mt-3">
                No contract. We map your exact numbers on a 15-minute screen share.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
