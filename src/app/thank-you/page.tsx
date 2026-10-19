"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, Calendar, Clock, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { useSiteModals } from "@/context/ModalContext";

export default function ThankYouPage() {
  const { openSchedule } = useSiteModals();

  return (
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div>
          <span className="text-xs font-black uppercase tracking-wider text-nafa-gold bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
            Request Confirmed
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-nafa-charcoal tracking-tight mt-3 mb-2">
            Thank You for Connecting With Nafa!
          </h1>
          <p className="text-sm sm:text-base text-nafa-muted max-w-lg mx-auto">
            We practice the speed-to-lead standard we preach. Our team is already reviewing your details.
          </p>
        </div>

        {/* What Happens Next Card */}
        <div className="apple-glass rounded-3xl p-6 sm:p-8 shadow-apple-card border border-white text-left space-y-4">
          <h2 className="text-lg font-bold text-nafa-charcoal flex items-center gap-2">
            <Clock className="w-4 h-4 text-amber-600" />
            <span>What to Expect Next:</span>
          </h2>

          <div className="space-y-3 text-xs sm:text-sm text-nafa-charcoal">
            <div className="p-3 rounded-xl bg-white border border-nafa-border/60 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-amber-100 text-nafa-gold font-bold text-xs flex items-center justify-center flex-shrink-0">
                1
              </span>
              <div>
                <strong>Under 5-Minute Initial Confirmation:</strong> You will receive a text or email confirmation verifying that your inquiry entered our engineering queue.
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white border border-nafa-border/60 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-amber-100 text-nafa-gold font-bold text-xs flex items-center justify-center flex-shrink-0">
                2
              </span>
              <div>
                <strong>Custom Strategy Assessment:</strong> We will review your website and current phone flow before contacting you with tailored recommendations.
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white border border-nafa-border/60 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-amber-100 text-nafa-gold font-bold text-xs flex items-center justify-center flex-shrink-0">
                3
              </span>
              <div>
                <strong>Optional Calendar Booking:</strong> If you haven't scheduled your 15-minute consultation yet, you can lock in a specific time slot below.
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={openSchedule}
            className="press-scale w-full sm:w-auto py-3.5 px-6 rounded-2xl bg-nafa-gold hover:bg-nafa-gold-hover text-white font-bold text-sm shadow-apple-gold flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Lock In Discovery Call Slot</span>
          </button>
          <Link
            href="/"
            className="press-scale w-full sm:w-auto py-3.5 px-6 rounded-2xl bg-white border border-nafa-border text-nafa-charcoal font-semibold text-sm hover:bg-stone-50"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
