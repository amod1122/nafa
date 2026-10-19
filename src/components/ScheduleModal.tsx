"use client";

import React, { useState } from "react";
import { X, Calendar, Clock, CheckCircle2, User, Mail, Phone, ArrowRight, Sparkles } from "lucide-react";

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
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/50 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full sm:max-w-lg bg-nafa-canvas sm:rounded-3xl rounded-t-3xl border border-nafa-border shadow-apple-float overflow-hidden max-h-[92vh] flex flex-col animate-in slide-in-from-bottom-8 duration-300">
        {/* Mobile Handle */}
        <div className="sm:hidden pt-3 pb-1 flex justify-center">
          <div className="w-12 h-1.5 rounded-full bg-stone-300"></div>
        </div>

        {/* Header */}
        <div className="p-5 sm:p-6 pb-4 border-b border-nafa-border/60 flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-50 text-nafa-gold text-[11px] font-black uppercase tracking-wider mb-1">
              <Calendar className="w-3 h-3 text-amber-600" />
              15-Minute Discovery Call
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-nafa-charcoal">
              Book Your Strategy Session
            </h3>
            <p className="text-xs text-nafa-muted">
              Select a time to speak directly with our automation engineers.
            </p>
          </div>
          <button
            onClick={handleReset}
            className="p-2 rounded-full hover:bg-stone-200/60 text-nafa-charcoal transition-colors"
            aria-label="Close scheduler"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!isBooked ? (
          <form onSubmit={handleBook} className="p-5 sm:p-6 space-y-4 overflow-y-auto">
            {/* Day Selector */}
            <div>
              <label className="block text-xs font-bold text-nafa-charcoal mb-2">
                1. Select Day:
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5">
                {days.map((d) => (
                  <button
                    type="button"
                    key={d}
                    onClick={() => setSelectedDay(d)}
                    className={`press-scale py-2 px-1 text-center rounded-xl text-xs font-bold transition-all ${
                      selectedDay === d
                        ? "bg-nafa-charcoal text-white shadow-xs"
                        : "bg-white text-nafa-muted border border-nafa-border hover:bg-stone-50"
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Selector */}
            <div>
              <label className="block text-xs font-bold text-nafa-charcoal mb-2">
                2. Select Time:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {times.map((t) => (
                  <button
                    type="button"
                    key={t}
                    onClick={() => setSelectedTime(t)}
                    className={`press-scale py-2.5 px-3 text-center rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                      selectedTime === t
                        ? "bg-nafa-gold text-white shadow-xs"
                        : "bg-white text-nafa-charcoal border border-nafa-border hover:bg-stone-50"
                    }`}
                  >
                    <Clock className="w-3 h-3" />
                    <span>{t}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Contact details */}
            <div className="space-y-3 pt-2 border-t border-nafa-border/50">
              <label className="block text-xs font-bold text-nafa-charcoal">
                3. Your Contact Details:
              </label>

              <div>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-nafa-border bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <input
                  type="email"
                  required
                  placeholder="Work Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-nafa-border bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Phone Number (for SMS confirmation)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-nafa-border bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            <button
              type="submit"
              className="press-scale w-full py-3.5 px-4 rounded-xl bg-nafa-gold hover:bg-nafa-gold-hover text-white font-extrabold text-sm shadow-apple-gold flex items-center justify-center gap-2 mt-2"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Confirm 15-Minute Booking</span>
            </button>
          </form>
        ) : (
          <div className="p-6 sm:p-8 space-y-5 text-center">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h4 className="text-2xl font-black text-nafa-charcoal mb-1">
                Meeting Confirmed!
              </h4>
              <p className="text-xs sm:text-sm text-nafa-muted">
                Your 15-minute discovery consultation has been secured.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-nafa-border text-left space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-nafa-muted">Scheduled Day:</span>
                <span className="font-bold text-nafa-charcoal">{selectedDay}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-nafa-muted">Time Slot:</span>
                <span className="font-bold text-nafa-gold font-mono">{selectedTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-nafa-muted">Host:</span>
                <span className="font-bold text-nafa-charcoal">Nafa Systems Lead</span>
              </div>
              <div className="flex justify-between">
                <span className="text-nafa-muted">Attendee:</span>
                <span className="font-bold text-nafa-charcoal">{name} ({email})</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-left text-xs text-amber-900 space-y-1">
              <div className="font-bold">Next Steps:</div>
              <div>• Check your inbox for the calendar invite & meeting link.</div>
              <div>• We'll review your website and current phone flow ahead of the call.</div>
            </div>

            <button
              onClick={handleReset}
              className="press-scale w-full py-3 px-4 rounded-xl bg-nafa-charcoal text-white font-bold text-xs sm:text-sm hover:bg-black"
            >
              Done & Return to Site
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
