"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle2, Clock, Zap, Building, Mail, Phone, Calendar, ArrowRight } from "lucide-react";
import { LeadData } from "./QuoteFormSection";

interface LeadCardModalProps {
  lead: LeadData | null;
  onClose: () => void;
  onOpenSchedule: () => void;
}

export default function LeadCardModal({ lead, onClose, onOpenSchedule }: LeadCardModalProps) {
  const [secondsRemaining, setSecondsRemaining] = useState(300); // 5 minutes (300 seconds)

  useEffect(() => {
    if (!lead) return;
    const interval = setInterval(() => {
      setSecondsRemaining((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [lead]);

  if (!lead) return null;

  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  const timeFormatted = `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/50 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      {/* Modal Container: Mobile bottom sheet / Desktop centered dialog */}
      <div className="w-full sm:max-w-lg bg-nafa-canvas sm:rounded-3xl rounded-t-3xl border border-nafa-border shadow-apple-float overflow-hidden max-h-[90vh] flex flex-col animate-in slide-in-from-bottom-8 duration-300">
        {/* Mobile Pull Handle */}
        <div className="sm:hidden pt-3 pb-1 flex justify-center">
          <div className="w-12 h-1.5 rounded-full bg-stone-300"></div>
        </div>

        {/* Modal Header */}
        <div className="p-5 sm:p-6 pb-4 border-b border-nafa-border/60 flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-black uppercase tracking-wider mb-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Lead Card Generated
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-nafa-charcoal">
              Request Received Successfully!
            </h3>
            <p className="text-xs text-nafa-muted">
              We practice what we sell: your lead card has been dispatched to our team.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-stone-200/60 text-nafa-charcoal transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Active Speed-to-Lead Countdown Banner */}
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-3.5 text-white flex items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 fill-current animate-bounce" />
            <span className="text-xs font-bold uppercase tracking-wider">
              5-Minute Response Clock:
            </span>
          </div>
          <div className="font-mono text-lg font-black tracking-wider bg-black/20 px-2.5 py-0.5 rounded-lg">
            {timeFormatted}
          </div>
        </div>

        {/* Lead Details Body */}
        <div className="p-5 sm:p-6 space-y-4 overflow-y-auto">
          <div className="p-4 rounded-2xl bg-white border border-nafa-border space-y-2.5 text-xs">
            <div className="flex justify-between pb-2 border-b border-stone-100">
              <span className="text-nafa-muted">Timestamp:</span>
              <span className="font-bold text-nafa-charcoal font-mono">{lead.submittedAt}</span>
            </div>
            <div className="flex justify-between pb-2 border-b border-stone-100">
              <span className="text-nafa-muted">Lead Name:</span>
              <span className="font-bold text-nafa-charcoal">{lead.name}</span>
            </div>
            <div className="flex justify-between pb-2 border-b border-stone-100">
              <span className="text-nafa-muted">Company:</span>
              <span className="font-bold text-nafa-charcoal">{lead.businessName}</span>
            </div>
            <div className="flex justify-between pb-2 border-b border-stone-100">
              <span className="text-nafa-muted">Email:</span>
              <span className="font-bold text-nafa-charcoal">{lead.email}</span>
            </div>
            <div className="flex justify-between pb-2 border-b border-stone-100">
              <span className="text-nafa-muted">Phone:</span>
              <span className="font-bold text-nafa-charcoal">{lead.phone}</span>
            </div>
            <div className="flex justify-between pb-2 border-b border-stone-100">
              <span className="text-nafa-muted">Industry:</span>
              <span className="font-bold text-nafa-charcoal">{lead.industry}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-nafa-muted">Selected Offer:</span>
              <span className="font-bold text-nafa-gold">{lead.serviceNeeded}</span>
            </div>
          </div>

          {/* Real-time Status Progress */}
          <div className="space-y-2 text-xs">
            <div className="flex items-center gap-2 text-emerald-700 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Lead card stored in internal queue</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-700 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Team notification alert dispatched</span>
            </div>
            <div className="flex items-center gap-2 text-amber-700 font-medium">
              <Clock className="w-3.5 h-3.5 text-amber-600 animate-spin" />
              <span>Reviewing your specs for customized quote & call</span>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 pt-3 border-t border-nafa-border/60 bg-white flex flex-col sm:flex-row gap-2.5">
          <button
            onClick={() => {
              onClose();
              onOpenSchedule();
            }}
            className="press-scale flex-1 py-3 px-4 rounded-xl bg-nafa-charcoal text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4 text-amber-400" />
            <span>Lock In Calendar Slot Directly</span>
          </button>
          <button
            onClick={onClose}
            className="press-scale py-3 px-4 rounded-xl border border-nafa-border text-nafa-muted font-semibold text-xs sm:text-sm hover:bg-stone-50"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
