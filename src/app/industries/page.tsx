"use client";

import React from "react";
import Link from "next/link";
import {
  Wrench,
  Stethoscope,
  Scale,
  Home,
  Car,
  Scissors,
  CheckCircle2,
  Calendar,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useSiteModals } from "@/context/ModalContext";

export default function IndustriesPage() {
  const { openSchedule, openQuoteModal } = useSiteModals();

  const industries = [
    {
      id: "home-services",
      name: "Home Services (HVAC, Plumbing, Roofing, Cleaning)",
      icon: Wrench,
      painPoint:
        "Emergency calls happen after 5 PM and on weekends. If a homeowner has a leaking pipe or broken furnace, they call the first company that picks up.",
      solution:
        "Our AI voice agent answers 24/7/365, screens the issue, confirms the home address, and books the dispatch directly into ServiceTitan, Housecall Pro, or your calendar.",
      stat: "Captures 100% of after-hours emergency jobs without paying high overtime to human dispatchers.",
    },
    {
      id: "dental-medical",
      name: "Dental & Medical Clinics",
      icon: Stethoscope,
      painPoint:
        "Front-desk staff get overwhelmed with phone calls while patients are standing right in front of them trying to check in.",
      solution:
        "Nafa handles routine appointment scheduling, office hours, location FAQs, and new patient intake, allowing clinical staff to focus on in-person care.",
      stat: "Reduces front desk hold times to zero and cuts missed patient intake calls by over 80%.",
    },
    {
      id: "legal",
      name: "Law Firms & Attorneys",
      icon: Scale,
      painPoint:
        "Personal injury and family law leads go cold within minutes. Potential clients submit forms to multiple law firms simultaneously.",
      solution:
        "Our Speed-to-Lead agent calls online submissions in under 60 seconds, pre-screens the case facts, and connects qualified callers to your intake paralegal.",
      stat: "21x higher prospect qualification rate compared to next-day follow-up.",
    },
    {
      id: "real-estate",
      name: "Real Estate Agencies & Property Management",
      icon: Home,
      painPoint:
        "Realtors are constantly on property showings or closing meetings, missing buyer calls and tenant inquiries.",
      solution:
        "AI agents qualify prospective buyers, capture property criteria, answer listing details, and schedule showing appointments automatically.",
      stat: "Never lose a high-value buyer lead because you were in an escrow closing.",
    },
    {
      id: "auto",
      name: "Auto Repair & Body Shops",
      icon: Car,
      painPoint:
        "Mechanics and service advisors are under hoods and dealing with walk-ins. Ringing phones go straight to voicemail.",
      solution:
        "The voice agent answers repair questions, books vehicle drop-off appointments, and confirms vehicle year, make, and model.",
      stat: "Converts high-ticket brake, transmission, and diagnostic inquiries into booked bay visits.",
    },
    {
      id: "salons",
      name: "Salons, MedSpas & Wellness",
      icon: Scissors,
      painPoint:
        "Stylists and injectors cannot pick up the phone with gloves on or mid-treatment without interrupting the client experience.",
      solution:
        "Our AI receptionist checks calendar availability, books treatments, explains cancellation policies, and sends SMS reminders.",
      stat: "Books appointments 24/7 while eliminating disrupted treatment sessions.",
    },
  ];

  return (
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-nafa-gold border border-amber-200 text-xs font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Specialized for Appointment-Driven Businesses
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-nafa-charcoal tracking-tight mb-4">
            Industries We Serve
          </h1>
          <p className="text-base sm:text-lg text-nafa-muted max-w-2xl mx-auto leading-relaxed">
            Every industry has unique caller expectations and intake questions. We pre-train our AI voice and speed-to-lead agents with terminology and qualification rules built specifically for your field.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.id}
                className="apple-glass rounded-3xl p-6 sm:p-8 shadow-apple-card border border-white flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-amber-100 text-nafa-gold flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-nafa-charcoal">
                      {ind.name}
                    </h2>
                  </div>

                  <div className="space-y-2 text-xs sm:text-sm">
                    <div>
                      <strong className="text-red-700 block text-xs uppercase tracking-wider mb-1">
                        The Pain Point:
                      </strong>
                      <p className="text-nafa-muted leading-relaxed">{ind.painPoint}</p>
                    </div>

                    <div className="pt-2">
                      <strong className="text-emerald-700 block text-xs uppercase tracking-wider mb-1">
                        The Nafa Solution:
                      </strong>
                      <p className="text-nafa-charcoal font-medium leading-relaxed">{ind.solution}</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 text-xs font-semibold text-amber-950">
                    💡 <strong>Result:</strong> {ind.stat}
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-nafa-border/40 flex items-center justify-between">
                  <button
                    onClick={() => openQuoteModal(`${ind.name} Automation`)}
                    className="press-scale text-xs font-bold text-nafa-gold hover:text-amber-800 flex items-center gap-1"
                  >
                    <span>Get quote for your industry</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={openSchedule}
                    className="press-scale text-xs font-bold text-nafa-charcoal hover:underline"
                  >
                    Book Call
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="apple-glass-card rounded-3xl p-8 sm:p-12 shadow-apple-card border border-nafa-border/60 text-center max-w-3xl mx-auto space-y-4">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-nafa-charcoal">
            Don't see your exact industry listed?
          </h3>
          <p className="text-xs sm:text-sm text-nafa-muted max-w-xl mx-auto">
            If your business relies on incoming phone calls, web quote forms, or scheduled calendar appointments, Nafa can build and deploy a custom system for you in 5 to 7 days.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={openSchedule}
              className="press-scale py-3.5 px-7 rounded-2xl bg-nafa-gold hover:bg-nafa-gold-hover text-white font-bold text-sm shadow-apple-gold flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Strategy Session</span>
            </button>
            <button
              onClick={() => openQuoteModal()}
              className="press-scale py-3.5 px-6 rounded-2xl bg-white border border-nafa-border text-nafa-charcoal font-semibold text-sm hover:bg-stone-50"
            >
              Request Custom Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
