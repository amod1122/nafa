"use client";

import React from "react";
import {
  Wrench,
  Stethoscope,
  Scale,
  Home,
  Car,
  Scissors,
  Calendar,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { useSiteModals } from "@/context/ModalContext";

export default function IndustriesPage() {
  const { openSchedule, openQuoteModal } = useSiteModals();

  const industries = [
    {
      id: "home-services",
      name: "Home Services (HVAC, Plumbing, Roofing)",
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
        "Our Speed-to-Lead agent calls online submissions in under 60 seconds, pre-screens the case facts, and connects qualified callers to your intake team.",
      stat: "21x higher prospect qualification rate compared to next-day follow-up.",
    },
    {
      id: "real-estate",
      name: "Real Estate & Property Management",
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
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-28 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="badge-pill inline-flex items-center gap-1.5 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>Specialized for Appointment-Driven Businesses</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-white mb-4">
            Industries We <em className="font-editorial not-italic text-[#9a9a9a]">Serve</em>
          </h1>
          <p className="text-base sm:text-lg text-[#9a9a9a] max-w-2xl mx-auto leading-relaxed">
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
                className="apple-glass rounded-lg p-6 sm:p-8 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-[6px] border border-white/15 bg-white/[0.05] text-white flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-medium text-white tracking-tight">
                      {ind.name}
                    </h2>
                  </div>

                  <div className="space-y-2.5 text-xs sm:text-sm">
                    <div>
                      <strong className="text-white/70 block text-xs uppercase tracking-wider mb-1">
                        The Pain Point:
                      </strong>
                      <p className="text-[#9a9a9a] leading-relaxed">{ind.painPoint}</p>
                    </div>

                    <div className="pt-1">
                      <strong className="text-white block text-xs uppercase tracking-wider mb-1">
                        The Nafa Solution:
                      </strong>
                      <p className="text-white/90 leading-relaxed">{ind.solution}</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-[6px] bg-white/[0.02] border border-white/10 text-xs text-[#9a9a9a]">
                    💡 <strong className="text-white">Result:</strong> {ind.stat}
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => openQuoteModal(`${ind.name} Automation`)}
                    className="text-xs font-medium text-white hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Get quote for your industry</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={openSchedule}
                    className="btn btn-ghost h-[32px] px-3 text-xs"
                  >
                    Book Call
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="apple-glass rounded-lg p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4 border border-white/20">
          <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">
            Don't see your exact industry listed?
          </h3>
          <p className="text-xs sm:text-sm text-[#9a9a9a] max-w-xl mx-auto">
            If your business relies on incoming phone calls, web quote forms, or scheduled calendar appointments, Nafa can build and deploy a custom system for you in 5 to 7 days.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={openSchedule}
              className="btn btn-solid h-[42px] px-7 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Strategy Session</span>
            </button>
            <button
              onClick={() => openQuoteModal()}
              className="btn btn-ghost h-[42px] px-6 text-xs sm:text-sm"
            >
              Request Custom Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
