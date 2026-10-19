"use client";

import React from "react";
import Link from "next/link";
import QuoteFormSection from "@/components/QuoteFormSection";
import {
  Mail,
  Phone,
  Clock,
  Calendar,
  ShieldCheck,
  Sparkles,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { useSiteModals } from "@/context/ModalContext";

export default function ContactPage() {
  const { openSchedule, submitLead } = useSiteModals();

  return (
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-nafa-gold border border-amber-200 text-xs font-bold mb-4">
            <Clock className="w-3.5 h-3.5" />
            Response-Time Promise: Under 5 Minutes
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-nafa-charcoal tracking-tight mb-4">
            Let's Stop Your Lead Leakage.
          </h1>
          <p className="text-base sm:text-lg text-nafa-muted max-w-2xl mx-auto leading-relaxed">
            Choose how you'd like to connect. Book a 15-minute strategy call on our calendar, or submit a quote request to test our &lt;5-minute speed-to-lead response.
          </p>
        </div>

        {/* Dual Channels: Schedule Card vs Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {/* Schedule Direct Meeting (Primary) */}
          <div className="apple-glass rounded-3xl p-6 sm:p-8 shadow-apple-card border border-nafa-gold/40 bg-gradient-to-br from-white via-amber-50/20 to-white lg:col-span-2 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-wider text-nafa-gold bg-amber-100 px-3 py-1 rounded-full inline-block">
                ★ Preferred Channel
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-nafa-charcoal">
                Book a 15-Minute Strategy Consultation
              </h2>
              <p className="text-xs sm:text-sm text-nafa-muted leading-relaxed">
                Speak directly with a Nafa automation engineer. We will review your current call flow, examine your common caller questions, and map an automated pipeline tailored for your business.
              </p>

              <div className="space-y-2 pt-2 text-xs sm:text-sm text-nafa-charcoal">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>No high-pressure sales pitch — purely technical architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Exact pricing and timeline breakdown provided on the call</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Live demonstration of our voice agent answering custom questions</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-nafa-border/40">
              <button
                onClick={openSchedule}
                className="press-scale w-full py-4 px-6 rounded-2xl bg-nafa-gold hover:bg-nafa-gold-hover text-white font-extrabold text-sm sm:text-base shadow-apple-gold flex items-center justify-center gap-2.5 transition-all"
              >
                <Calendar className="w-5 h-5" />
                <span>Launch Interactive Calendar Scheduler</span>
              </button>
            </div>
          </div>

          {/* Quick Contact & Company Info */}
          <div className="apple-glass-card rounded-3xl p-6 sm:p-8 shadow-apple-card border border-white flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <h3 className="text-lg font-extrabold text-nafa-charcoal">
                Direct Communications
              </h3>

              <div className="space-y-3.5 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-amber-50 text-nafa-gold flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-nafa-muted block text-[11px] font-bold">Email:</span>
                    <a href="mailto:hello@nafatechnologies.com" className="font-semibold text-nafa-charcoal hover:underline">
                      hello@nafatechnologies.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-amber-50 text-nafa-gold flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-nafa-muted block text-[11px] font-bold">Voice Demo Line:</span>
                    <span className="font-semibold text-nafa-charcoal">Available on discovery call</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-amber-50 text-nafa-gold flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-nafa-muted block text-[11px] font-bold">Location:</span>
                    <span className="font-semibold text-nafa-charcoal">United States (Serving all US time zones)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-amber-50 text-nafa-gold flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 0 0 1.53-1.53A1.53 1.53 0 0 0 6.46 5.7a1.53 1.53 0 0 0-1.53 1.53c0 .85.68 1.53 1.53 1.53m1.39 9.74v-8.37H5.07v8.37z"/></svg>
                  </div>
                  <div>
                    <span className="text-nafa-muted block text-[11px] font-bold">Social:</span>
                    <a
                      href="https://linkedin.com/company/nafa-technologies"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-blue-700 hover:underline"
                    >
                      LinkedIn Company Page
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 font-medium">
              ⚡ <strong>5-Minute Promise:</strong> Inquiries submitted during normal business hours (8am–8pm EST) receive a human or agent response in under 5 minutes.
            </div>
          </div>
        </div>

        {/* Free Quote Form Section (Secondary Channel) */}
        <QuoteFormSection onLeadSubmitted={submitLead} />
      </div>
    </div>
  );
}
