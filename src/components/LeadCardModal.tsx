"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle2, Clock, Zap, Calendar } from "lucide-react";
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
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full sm:max-w-lg bg-[#0a0a0a] border border-white/15 sm:rounded-lg rounded-t-lg shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-in slide-in-from-bottom-6 duration-200 text-white">
        {/* Mobile Pull Handle */}
        <div className="sm:hidden pt-3 pb-1 flex justify-center">
          <div className="w-10 h-1 rounded-full bg-white/20"></div>
        </div>

        {/* Modal Header */}
        <div className="p-5 sm:p-6 pb-4 border-b border-white/10 flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[5px] border border-white/15 bg-white/[0.04] text-[#d8d8d8] text-[11px] font-medium tracking-wide mb-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-white" />
              Lead Card Generated
            </div>
            <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-white">
              Request Received Successfully!
            </h3>
            <p className="text-xs text-[#9a9a9a] mt-1">
              We practice what we sell: your lead card has been dispatched to our team.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md border border-white/10 bg-white/[0.04] hover:bg-white/[0.1] text-white/70 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Active Speed-to-Lead Countdown Banner */}
        <div className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 border-y border-white/10 p-3 text-white flex items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-white fill-current animate-pulse" />
            <span className="text-xs font-medium uppercase tracking-wider text-white/90">
              5-Minute Response Clock:
            </span>
          </div>
          <div className="font-mono text-base font-semibold tracking-wider bg-black/40 border border-white/15 px-2.5 py-0.5 rounded-[5px]">
            {timeFormatted}
          </div>
        </div>

        {/* Lead Details Body */}
        <div className="p-5 sm:p-6 space-y-4 overflow-y-auto">
          <div className="p-4 rounded-[6px] bg-white/[0.03] border border-white/10 space-y-2.5 text-xs">
            <div className="flex justify-between pb-2 border-b border-white/5">
              <span className="text-[#9a9a9a]">Timestamp:</span>
              <span className="font-medium text-white font-mono">{lead.submittedAt}</span>
            </div>
            <div className="flex justify-between pb-2 border-b border-white/5">
              <span className="text-[#9a9a9a]">Lead Name:</span>
              <span className="font-medium text-white">{lead.name}</span>
            </div>
            <div className="flex justify-between pb-2 border-b border-white/5">
              <span className="text-[#9a9a9a]">Company:</span>
              <span className="font-medium text-white">{lead.businessName}</span>
            </div>
            <div className="flex justify-between pb-2 border-b border-white/5">
              <span className="text-[#9a9a9a]">Email:</span>
              <span className="font-medium text-white">{lead.email}</span>
            </div>
            <div className="flex justify-between pb-2 border-b border-white/5">
              <span className="text-[#9a9a9a]">Phone:</span>
              <span className="font-medium text-white">{lead.phone}</span>
            </div>
            <div className="flex justify-between pb-2 border-b border-white/5">
              <span className="text-[#9a9a9a]">Industry:</span>
              <span className="font-medium text-white">{lead.industry}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#9a9a9a]">Selected Offer:</span>
              <span className="font-medium text-white">{lead.serviceNeeded}</span>
            </div>
          </div>

          {/* Real-time Status Progress */}
          <div className="space-y-2 text-xs">
            <div className="flex items-center gap-2 text-white/90">
              <CheckCircle2 className="w-3.5 h-3.5 text-white" />
              <span>Lead card stored in internal queue</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <CheckCircle2 className="w-3.5 h-3.5 text-white" />
              <span>Team notification alert dispatched</span>
            </div>
            <div className="flex items-center gap-2 text-[#9a9a9a]">
              <Clock className="w-3.5 h-3.5 text-[#9a9a9a] animate-spin" />
              <span>Reviewing your specs for customized quote & architecture</span>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 pt-3 border-t border-white/10 flex flex-col sm:flex-row gap-2.5">
          <button
            onClick={() => {
              onClose();
              onOpenSchedule();
            }}
            className="btn btn-solid flex-1 h-[42px] text-xs sm:text-sm font-semibold flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Lock In Calendar Slot Directly</span>
          </button>
          <button
            onClick={onClose}
            className="btn btn-ghost h-[42px] px-4 text-xs sm:text-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
