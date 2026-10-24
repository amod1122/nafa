"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, HelpCircle, PhoneCall } from "lucide-react";
import { useSiteModals } from "@/context/ModalContext";

export default function NotFound() {
  const { openSchedule } = useSiteModals();

  return (
    <div className="pt-32 pb-24 sm:pt-40 sm:pb-32 text-center text-white">
      <div className="max-w-md mx-auto px-4 space-y-6">
        <div className="w-16 h-16 rounded-xl bg-white/5 text-white border border-white/15 mx-auto flex items-center justify-center font-bold text-2xl font-mono">
          404
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-medium text-white tracking-tight">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-[#A6B4C7] leading-relaxed">
            Unlike our 24/7 AI Call Agents, this page is not available. Let's get you back on track.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="btn btn-solid w-full sm:w-auto h-[44px] px-5 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <button
            onClick={openSchedule}
            className="btn btn-ghost w-full sm:w-auto h-[44px] px-5 text-xs sm:text-sm font-medium flex items-center justify-center gap-2 text-white"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Discovery Call</span>
          </button>
        </div>
      </div>
    </div>
  );
}
