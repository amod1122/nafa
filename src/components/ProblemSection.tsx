"use client";

import React, { useState } from "react";
import { AlertCircle, Clock, TrendingDown, DollarSign, Users, ArrowRight } from "lucide-react";

interface ProblemSectionProps {
  onOpenSchedule: () => void;
}

export default function ProblemSection({ onOpenSchedule }: ProblemSectionProps) {
  const [missedCallsPerWeek, setMissedCallsPerWeek] = useState(6);
  const [avgJobValue, setAvgJobValue] = useState(450);

  // Conversion rate assumption: 25% of missed callers would have booked
  const estimatedMonthlyLoss = Math.round(
    missedCallsPerWeek * 4.33 * 0.25 * avgJobValue
  );

  return (
    <section id="problem" className="py-16 sm:py-24 bg-nafa-canvas-muted/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-700 border border-red-200/80 text-xs font-bold mb-4">
            <AlertCircle className="w-3.5 h-3.5" />
            The Hard Reality of Local Business
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-nafa-charcoal mb-4">
            Every Unanswered Call Goes Straight to Your Competitor.
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-nafa-muted max-w-2xl mx-auto leading-relaxed">
            When a customer has a broken pipe, a toothache, or a legal inquiry, they do not leave voicemails. They hang up and call the next business on Google.
          </p>
        </div>

        {/* 3 Core Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          <div className="apple-glass-card rounded-3xl p-6 sm:p-8 shadow-apple-card border border-white">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-nafa-gold border border-amber-200 flex items-center justify-center font-bold text-lg mb-5">
              <Clock className="w-6 h-6" />
            </div>
            <div className="text-4xl sm:text-5xl font-extrabold text-nafa-charcoal tracking-tight mb-2">
              78%
            </div>
            <h3 className="text-base font-bold text-nafa-charcoal mb-2">
              Buy from the First Responder
            </h3>
            <p className="text-xs sm:text-sm text-nafa-muted leading-relaxed">
              Harvard Business Review research proves that responding within 5 minutes makes you <span className="font-semibold text-nafa-charcoal">21x more likely</span> to qualify a lead compared to waiting 30 minutes.
            </p>
          </div>

          <div className="apple-glass-card rounded-3xl p-6 sm:p-8 shadow-apple-card border border-white">
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 border border-red-200 flex items-center justify-center font-bold text-lg mb-5">
              <TrendingDown className="w-6 h-6" />
            </div>
            <div className="text-4xl sm:text-5xl font-extrabold text-nafa-charcoal tracking-tight mb-2">
              62%
            </div>
            <h3 className="text-base font-bold text-nafa-charcoal mb-2">
              Of Calls Go Unanswered
            </h3>
            <p className="text-xs sm:text-sm text-nafa-muted leading-relaxed">
              Small business owners are busy servicing clients, driving, or closed for the night. More than half of calls hit voicemail — and 85% of people hang up without leaving one.
            </p>
          </div>

          <div className="apple-glass-card rounded-3xl p-6 sm:p-8 shadow-apple-card border border-white">
            <div className="w-12 h-12 rounded-2xl bg-stone-100 text-stone-700 border border-stone-300 flex items-center justify-center font-bold text-lg mb-5">
              <Users className="w-6 h-6" />
            </div>
            <div className="text-4xl sm:text-5xl font-extrabold text-nafa-charcoal tracking-tight mb-2">
              $45,000+
            </div>
            <h3 className="text-base font-bold text-nafa-charcoal mb-2">
              Cost of a Full-Time Receptionist
            </h3>
            <p className="text-xs sm:text-sm text-nafa-muted leading-relaxed">
              Human receptionists require salaries, benefits, sick days, and only cover 8 hours a day. Nafa provides 24/7 coverage for a fraction of the cost.
            </p>
          </div>
        </div>

        {/* Interactive Loss Calculator */}
        <div className="apple-glass rounded-3xl p-6 sm:p-10 shadow-apple-card border border-white/80 max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 justify-between">
            <div className="w-full lg:w-1/2 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-nafa-gold bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
                  Interactive Revenue Audit
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-nafa-charcoal mt-2.5">
                  How Much Are Missed Calls Costing Your Business?
                </h3>
                <p className="text-xs sm:text-sm text-nafa-muted mt-1">
                  Adjust the sliders to estimate your monthly lost revenue:
                </p>
              </div>

              {/* Slider 1: Missed Calls */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs sm:text-sm font-semibold">
                  <span className="text-nafa-charcoal">Missed calls per week:</span>
                  <span className="text-nafa-gold font-bold text-base">{missedCallsPerWeek} calls</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  value={missedCallsPerWeek}
                  onChange={(e) => setMissedCallsPerWeek(Number(e.target.value))}
                  className="w-full accent-amber-600 h-2 bg-stone-200 rounded-lg cursor-pointer"
                  aria-label="Missed calls per week"
                />
              </div>

              {/* Slider 2: Average Job Value */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs sm:text-sm font-semibold">
                  <span className="text-nafa-charcoal">Average customer / job value:</span>
                  <span className="text-nafa-gold font-bold text-base">${avgJobValue}</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="2500"
                  step="50"
                  value={avgJobValue}
                  onChange={(e) => setAvgJobValue(Number(e.target.value))}
                  className="w-full accent-amber-600 h-2 bg-stone-200 rounded-lg cursor-pointer"
                  aria-label="Average customer job value"
                />
              </div>
            </div>

            {/* Result Box */}
            <div className="w-full lg:w-1/2 p-6 sm:p-8 rounded-2xl bg-nafa-surface border border-nafa-border text-center shadow-xs">
              <span className="text-xs uppercase font-extrabold tracking-wider text-nafa-muted">
                Estimated Lost Revenue Every Month
              </span>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-red-600 tracking-tight my-3">
                ${estimatedMonthlyLoss.toLocaleString()}
                <span className="text-sm font-bold text-nafa-muted tracking-normal">/mo</span>
              </div>
              <p className="text-xs sm:text-sm text-nafa-muted mb-6">
                That is <span className="font-bold text-nafa-charcoal">${(estimatedMonthlyLoss * 12).toLocaleString()} a year</span> walking over to your competitors.
              </p>
              <button
                onClick={onOpenSchedule}
                className="press-scale w-full py-3.5 px-4 rounded-xl bg-nafa-charcoal text-white font-bold text-sm hover:bg-black shadow-sm flex items-center justify-center gap-2 transition-all"
              >
                <span>Plug The Leak: Book a Free Audit</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
