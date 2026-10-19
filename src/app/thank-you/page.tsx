"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, Calendar, Clock } from "lucide-react";
import { useSiteModals } from "@/context/ModalContext";

export default function ThankYouPage() {
  const { openSchedule } = useSiteModals();

  return (
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-28 text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="w-12 h-12 rounded-[8px] border border-white/20 bg-white/10 text-white mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-6 h-6 text-white" />
        </div>

        <div>
          <span className="badge-pill text-xs">
            Request Confirmed
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight mt-3 mb-2">
            Thank You for Connecting With <em className="font-editorial not-italic text-[#9a9a9a]">Nafa</em>!
          </h1>
          <p className="text-sm sm:text-base text-[#9a9a9a] max-w-lg mx-auto">
            We practice the speed-to-lead standard we preach. Our team is already reviewing your details.
          </p>
        </div>

        {/* What Happens Next Card */}
        <div className="apple-glass rounded-lg p-6 sm:p-8 text-left space-y-4">
          <h2 className="text-base font-medium text-white flex items-center gap-2">
            <Clock className="w-4 h-4 text-white" />
            <span>What to Expect Next:</span>
          </h2>

          <div className="space-y-3 text-xs sm:text-sm text-white/90">
            <div className="p-3.5 rounded-[6px] bg-white/[0.03] border border-white/10 flex items-start gap-3">
              <span className="w-5 h-5 rounded-[4px] bg-white text-black font-semibold text-xs flex items-center justify-center shrink-0">
                1
              </span>
              <div>
                <strong className="text-white">Under 5-Minute Initial Confirmation:</strong> You will receive a direct notification verifying that your inquiry entered our engineering queue.
              </div>
            </div>

            <div className="p-3.5 rounded-[6px] bg-white/[0.03] border border-white/10 flex items-start gap-3">
              <span className="w-5 h-5 rounded-[4px] bg-white text-black font-semibold text-xs flex items-center justify-center shrink-0">
                2
              </span>
              <div>
                <strong className="text-white">Custom Strategy Assessment:</strong> We will review your website and current phone flow before contacting you with tailored recommendations.
              </div>
            </div>

            <div className="p-3.5 rounded-[6px] bg-white/[0.03] border border-white/10 flex items-start gap-3">
              <span className="w-5 h-5 rounded-[4px] bg-white text-black font-semibold text-xs flex items-center justify-center shrink-0">
                3
              </span>
              <div>
                <strong className="text-white">Optional Calendar Booking:</strong> If you haven't scheduled your 15-minute consultation yet, you can lock in a specific time slot below.
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={openSchedule}
            className="btn btn-solid w-full sm:w-auto h-[42px] px-6 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Lock In Discovery Call Slot</span>
          </button>
          <Link
            href="/"
            className="btn btn-ghost w-full sm:w-auto h-[42px] px-6 text-xs sm:text-sm flex items-center justify-center"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
