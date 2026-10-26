"use client";

import React from "react";
import QuoteFormSection from "@/components/QuoteFormSection";
import {
  Mail,
  Phone,
  Clock,
  Calendar,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { useSiteModals } from "@/context/ModalContext";

export default function ContactPage() {
  const { openSchedule, submitLead } = useSiteModals();

  return (
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-28 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="badge-pill inline-flex items-center gap-1.5 mb-4">
            <Clock className="w-3.5 h-3.5 text-white" />
            <span>Response-Time Promise: Under 5 Minutes</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-white mb-4">
            Let's Stop Your <em className="font-editorial not-italic text-[#9a9a9a]">Lead Leakage</em>.
          </h1>
          <p className="text-base sm:text-lg text-[#9a9a9a] max-w-2xl mx-auto leading-relaxed">
            Choose how you'd like to connect. Book a 15-minute strategy call on our calendar, or submit a quote request to test our &lt;5-minute speed-to-lead response.
          </p>
        </div>

        {/* Dual Channels: Schedule Card vs Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {/* Schedule Direct Meeting (Primary) */}
          <div className="apple-glass rounded-lg p-6 sm:p-8 lg:col-span-2 flex flex-col justify-between border border-white/20">
            <div className="space-y-4">
              <span className="badge-pill text-xs">
                ★ Preferred Channel
              </span>
              <h2 className="text-2xl sm:text-3xl font-medium text-white tracking-tight">
                Book a 15-Minute Strategy Consultation
              </h2>
              <p className="text-xs sm:text-sm text-[#9a9a9a] leading-relaxed">
                Speak directly with a Nafa automation engineer. We will review your current call flow, examine your common caller questions, and map an automated pipeline tailored for your business.
              </p>

              <div className="space-y-2 pt-2 text-xs sm:text-sm text-white/90">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                  <span>No high-pressure sales pitch — purely technical architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                  <span>Exact pricing and timeline breakdown provided on the call</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                  <span>Live demonstration of our voice agent answering custom questions</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10">
              <button
                onClick={openSchedule}
                className="btn btn-solid w-full h-[46px] text-xs sm:text-sm font-semibold flex items-center justify-center gap-2.5"
              >
                <Calendar className="w-4 h-4" />
                <span>Launch Interactive Calendar Scheduler</span>
              </button>
            </div>
          </div>

          {/* Quick Contact & Company Info */}
          <div className="apple-glass rounded-lg p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <h3 className="text-base font-medium text-white">
                Direct Communications
              </h3>

              <div className="space-y-3.5 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-[5px] border border-white/15 bg-white/[0.05] text-white flex items-center justify-center shrink-0">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[#9a9a9a] block text-[11px] font-medium">Email:</span>
                    <a href="mailto:contact@nafatech.site" className="font-medium text-white hover:underline">
                      contact@nafatech.site
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-[5px] border border-white/15 bg-white/[0.05] text-white flex items-center justify-center shrink-0">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[#9a9a9a] block text-[11px] font-medium">Voice Demo Line:</span>
                    <span className="font-medium text-white">Available on discovery call</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-[5px] border border-white/15 bg-white/[0.05] text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[#9a9a9a] block text-[11px] font-medium">Location:</span>
                    <span className="font-medium text-white">United States (Serving all US time zones)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-[5px] border border-white/15 bg-white/[0.05] text-white flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 0 0 1.53-1.53A1.53 1.53 0 0 0 6.46 5.7a1.53 1.53 0 0 0-1.53 1.53c0 .85.68 1.53 1.53 1.53m1.39 9.74v-8.37H5.07v8.37z"/></svg>
                  </div>
                  <div>
                    <span className="text-[#9a9a9a] block text-[11px] font-medium">Social:</span>
                    <a
                      href="https://linkedin.com/company/nafa-technologies"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-white hover:underline"
                    >
                      LinkedIn Page
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-[6px] bg-white/[0.03] border border-white/10 text-xs text-[#9a9a9a]">
              ⚡ <strong className="text-white">5-Minute Promise:</strong> Inquiries submitted during business hours receive a direct response in under 5 minutes.
            </div>
          </div>
        </div>

        {/* Free Quote Form Section */}
        <QuoteFormSection onLeadSubmitted={submitLead} />
      </div>
    </div>
  );
}
