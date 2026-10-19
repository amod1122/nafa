"use client";

import React, { useState } from "react";
import { X, Calendar, Clock, CheckCircle2 } from "lucide-react";

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ScheduleModal({ isOpen, onClose }: ScheduleModalProps) {
  const [selectedDay, setSelectedDay] = useState("Tomorrow");
  const [selectedTime, setSelectedTime] = useState("10:00 AM EST");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isBooked, setIsBooked] = useState(false);

  if (!isOpen) return null;

  const days = ["Today (Rush)", "Tomorrow", "Wednesday", "Thursday", "Friday"];
  const times = [
    "9:00 AM EST",
    "10:00 AM EST",
    "11:30 AM EST",
    "1:30 PM EST",
    "3:00 PM EST",
    "4:30 PM EST",
  ];

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setIsBooked(true);
  };

  const handleReset = () => {
    setIsBooked(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full sm:max-w-lg bg-[#0a0a0a] border border-white/15 sm:rounded-lg rounded-t-lg shadow-2xl overflow-hidden max-h-[92vh] flex flex-col animate-in slide-in-from-bottom-6 duration-200 text-white">
        {/* Mobile handle */}
        <div className="sm:hidden pt-3 pb-1 flex justify-center">
          <div className="w-10 h-1 rounded-full bg-white/20"></div>
        </div>

        {/* Header */}
        <div className="p-5 sm:p-6 pb-4 border-b border-white/10 flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[5px] border border-white/15 bg-white/[0.04] text-[#d8d8d8] text-[11px] font-medium tracking-wide mb-2">
              <Calendar className="w-3 h-3 text-white" />
              15-Minute Discovery Call
            </div>
            <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-white">
              Book Your Architecture Session
            </h3>
            <p className="text-xs text-[#9a9a9a] mt-1">
              Speak directly with an AI systems architect to map your call & lead flow.
            </p>
          </div>
          <button
            onClick={handleReset}
            className="p-1.5 rounded-md border border-white/10 bg-white/[0.04] hover:bg-white/[0.1] text-white/70 hover:text-white transition-colors"
            aria-label="Close scheduler"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {!isBooked ? (
          <form onSubmit={handleBook} className="p-5 sm:p-6 space-y-4 overflow-y-auto">
            {/* Day Selector */}
            <div>
              <label className="block text-xs font-medium text-white/90 mb-2">
                1. Select Preferred Day:
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5">
                {days.map((d) => (
                  <button
                    type="button"
                    key={d}
                    onClick={() => setSelectedDay(d)}
                    className={`py-2 px-1 text-center rounded-[6px] text-xs font-medium transition-all ${
                      selectedDay === d
                        ? "bg-white text-black font-semibold shadow-sm"
                        : "bg-white/[0.04] text-[#9a9a9a] border border-white/10 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Selector */}
            <div>
              <label className="block text-xs font-medium text-white/90 mb-2">
                2. Select Preferred Time Slot:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {times.map((t) => (
                  <button
                    type="button"
                    key={t}
                    onClick={() => setSelectedTime(t)}
                    className={`py-2 px-3 text-center rounded-[6px] text-xs font-medium transition-all flex items-center justify-center gap-1.5 ${
                      selectedTime === t
                        ? "btn-solid text-black font-semibold"
                        : "bg-white/[0.04] text-white/80 border border-white/10 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    <Clock className="w-3 h-3 text-[#9a9a9a]" />
                    <span>{t}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Contact details */}
            <div className="space-y-3 pt-3 border-t border-white/10">
              <label className="block text-xs font-medium text-white/90">
                3. Your Direct Contact Details:
              </label>

              <div>
                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-[6px] border border-white/15 bg-white/[0.04] text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/50"
                />
              </div>

              <div>
                <input
                  type="email"
                  required
                  placeholder="Work Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-[6px] border border-white/15 bg-white/[0.04] text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/50"
                />
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Phone Number (for calendar & SMS confirm)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-[6px] border border-white/15 bg-white/[0.04] text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/50"
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-solid w-full h-[44px] text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 mt-2"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Confirm 15-Minute Booking</span>
            </button>
          </form>
        ) : (
          <div className="p-6 sm:p-8 space-y-5 text-center">
            <div className="w-12 h-12 rounded-[8px] border border-white/20 bg-white/10 text-white mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-white" />
            </div>

            <div>
              <h4 className="text-xl sm:text-2xl font-medium text-white mb-1">
                Meeting Confirmed!
              </h4>
              <p className="text-xs sm:text-sm text-[#9a9a9a]">
                Your 15-minute discovery consultation has been secured.
              </p>
            </div>

            <div className="p-4 rounded-[6px] bg-white/[0.03] border border-white/10 text-left space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-[#9a9a9a]">Scheduled Day:</span>
                <span className="font-medium text-white">{selectedDay}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#9a9a9a]">Time Slot:</span>
                <span className="font-medium text-white font-mono">{selectedTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#9a9a9a]">Host:</span>
                <span className="font-medium text-white">Nafa Lead Architect</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#9a9a9a]">Attendee:</span>
                <span className="font-medium text-white">
                  {name} ({email})
                </span>
              </div>
            </div>

            <div className="p-3.5 rounded-[6px] bg-white/[0.02] border border-white/10 text-left text-xs text-[#9a9a9a] space-y-1">
              <div className="font-medium text-white">Next Steps:</div>
              <div>• Check your inbox for the Google Meet calendar invite.</div>
              <div>• We'll review your website and current phone flow ahead of the call.</div>
            </div>

            <button
              onClick={handleReset}
              className="btn btn-solid w-full h-[42px] text-xs sm:text-sm font-semibold"
            >
              Done & Return to Site
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
