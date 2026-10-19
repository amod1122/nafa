"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, HelpCircle, PhoneCall } from "lucide-react";
import { useSiteModals } from "@/context/ModalContext";

export default function NotFound() {
  const { openSchedule } = useSiteModals();

  return (
    <div className="pt-32 pb-24 sm:pt-40 sm:pb-32 text-center">
      <div className="max-w-md mx-auto px-4 space-y-6">
        <div className="w-16 h-16 rounded-3xl bg-amber-50 text-nafa-gold border border-amber-200 mx-auto flex items-center justify-center font-black text-2xl font-mono">
          404
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold text-nafa-charcoal">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-nafa-muted leading-relaxed">
            Unlike our 24/7 AI Call Agents, this page seems to be out of the office. Let's get you back on track!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="press-scale w-full sm:w-auto py-3 px-5 rounded-2xl bg-nafa-charcoal text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <button
            onClick={openSchedule}
            className="press-scale w-full sm:w-auto py-3 px-5 rounded-2xl bg-nafa-gold text-white font-bold text-xs sm:text-sm hover:bg-nafa-gold-hover shadow-apple-gold flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a Meeting</span>
          </button>
        </div>
      </div>
    </div>
  );
}
