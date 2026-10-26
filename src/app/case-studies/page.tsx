"use client";

import React from "react";
import {
  Star,
  CheckCircle2,
  Calendar,
  TrendingUp,
} from "lucide-react";
import { useSiteModals } from "@/context/ModalContext";

export default function CaseStudiesPage() {
  const { openSchedule, openQuoteModal } = useSiteModals();

  const studies = [
    {
      company: "Tri-County Heating & Plumbing",
      industry: "HVAC & Plumbing Services",
      location: "Columbus, OH",
      statPrimary: "+$18,400",
      statLabel: "Monthly Recovered Revenue",
      subStat: "Zero missed emergency weekend calls",
      challenge:
        "The company operates 6 service vans. On Friday evenings and weekends, calls would roll over to an outsourced answering service that frequently made mistakes, misquoted emergency rates, or simply sent callers to voicemail. Callers hung up and called the next plumber on Google.",
      solution:
        "Nafa deployed a 24/7 AI Call Agent customized with emergency pricing logic, service zone validation, and instant dispatch alerts directly into ServiceTitan.",
      results: [
        "100% of after-hours and weekend emergency calls answered on Ring 1",
        "28 new emergency jobs booked in the first month",
        "Estimated $18,400 in direct revenue captured that previously walked to competitors",
        "Zero overtime needed for office dispatchers",
      ],
      quote:
        "Before Nafa, our answering service was costing us thousands in lost jobs every month. The AI agent sounds so natural that customers frequently thank 'her' for being so helpful at 2 AM.",
      author: "Mark S., Operations Director",
    },
    {
      company: "Apex Family Dental Practice",
      industry: "Healthcare & Dental Clinic",
      location: "Austin, TX",
      statPrimary: "+34%",
      statLabel: "Increase in Booked Appointments",
      subStat: "Front-desk call overload eliminated",
      challenge:
        "During 8 AM to 11 AM peak clinic hours, the front-desk receptionist was checking in physical patients, processing copays, and answering continuous phone rings. Callers were placed on hold for 4+ minutes, leading to high drop-off rates.",
      solution:
        "Nafa built and deployed an AI Call Agent to handle routine appointment bookings, insurance carrier FAQs, and office directions, freeing staff to care for in-clinic patients.",
      results: [
        "Average caller wait time reduced from 4.2 minutes to 0 seconds",
        "34% increase in scheduled new patient hygiene cleanings",
        "Front desk patient satisfaction scores rose to 4.9/5 stars",
        "After-hours emergency dental inquiries captured seamlessly",
      ],
      quote:
        "Our staff used to feel overwhelmed and rushed. Now, in-office patients get our full attention, while our AI receptionist schedules appointments accurately around the clock.",
      author: "Dr. Elena R., Lead Dentist",
    },
    {
      company: "Vanguard Injury Law Group",
      industry: "Personal Injury & Legal Services",
      location: "Atlanta, GA",
      statPrimary: "< 60 Sec",
      statLabel: "Average Lead Response Time",
      subStat: "21x higher prospect qualification",
      challenge:
        "The firm spent $15,000/month on Google and digital ads. When prospective clients submitted forms after 6 PM, paralegals wouldn't see the email until 9 AM the next morning. In 90% of cases, the client had already hired another attorney.",
      solution:
        "Nafa implemented the Speed-to-Lead Outbound Agent. The instant a form or ad inquiry arrives, the AI dials the prospective client within 45 seconds to conduct initial case screening.",
      results: [
        "Speed-to-lead dropped from 14 hours to 48 seconds",
        "Case intake rate increased by 42% from the same digital ad spend",
        "Warm transfers deliver pre-screened clients straight to attorneys' mobile phones",
        "Zero ad budget wasted on leads that go cold overnight",
      ],
      quote:
        "In personal injury law, the first firm that reaches the accident victim signs the case. Nafa gave us an unfair speed advantage over firms 10 times our size.",
      author: "James H., Managing Partner",
    },
  ];

  return (
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-28 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="badge-pill inline-flex items-center gap-1.5 mb-4">
            <TrendingUp className="w-3.5 h-3.5 text-white" />
            <span>Case Studies & Proven Impact</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-white mb-4">
            How Local Businesses <em className="font-editorial not-italic text-[#9a9a9a]">Win</em> More Clients
          </h1>
          <p className="text-base sm:text-lg text-[#9a9a9a] max-w-2xl mx-auto leading-relaxed">
            Real-world breakdowns of how appointment-driven companies stop bleeding leads to missed calls and slow follow-ups.
          </p>
        </div>

        {/* Detailed Case Studies */}
        <div className="space-y-8 mb-16">
          {studies.map((study, idx) => (
            <div
              key={idx}
              className="apple-glass rounded-lg p-6 sm:p-10 space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#d8d8d8] bg-white/[0.05] border border-white/15 px-2.5 py-0.5 rounded-[4px]">
                      {study.industry}
                    </span>
                    <span className="text-xs text-[#9a9a9a]">{study.location}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-medium text-white tracking-tight">
                    {study.company}
                  </h2>
                </div>

                <div className="p-4 rounded-[6px] bg-white/[0.03] border border-white/15 text-center sm:text-right shrink-0">
                  <div className="text-2xl sm:text-3xl font-medium text-white font-mono tracking-tight">
                    {study.statPrimary}
                  </div>
                  <div className="text-xs font-medium text-white/90">{study.statLabel}</div>
                  <div className="text-[11px] text-[#9a9a9a]">{study.subStat}</div>
                </div>
              </div>

              {/* Challenge vs Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-4 rounded-[6px] bg-white/[0.02] border border-white/10 space-y-2">
                  <strong className="text-xs uppercase font-medium tracking-wider text-white/80 block">
                    The Challenge:
                  </strong>
                  <p className="text-[#9a9a9a] leading-relaxed">{study.challenge}</p>
                </div>

                <div className="p-4 rounded-[6px] bg-white/[0.04] border border-white/15 space-y-2">
                  <strong className="text-xs uppercase font-medium tracking-wider text-white block">
                    The Nafa Solution:
                  </strong>
                  <p className="text-[#9a9a9a] leading-relaxed">{study.solution}</p>
                </div>
              </div>

              {/* Measured Results */}
              <div className="space-y-2">
                <strong className="text-xs uppercase font-medium tracking-wider text-white/80 block">
                  Measured Business Results:
                </strong>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-white/90">
                  {study.results.map((r, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                      <span>{r}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="p-4 rounded-[6px] bg-white/[0.02] border border-white/10">
                <div className="flex items-center text-white mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current text-white/80" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-white/95 italic leading-relaxed mb-2">
                  "{study.quote}"
                </p>
                <span className="text-xs font-medium text-[#9a9a9a]">— {study.author}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-medium tracking-tight text-white">
            Want Similar Results for Your Business?
          </h3>
          <p className="text-xs sm:text-sm text-[#9a9a9a] max-w-xl mx-auto">
            Schedule a 15-minute discovery consultation to see how our AI call and speed-to-lead agents can be tailored to your workflow.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => openQuoteModal()}
              className="btn btn-solid h-[42px] px-6 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2"
            >
              <span>Get a Custom Quote</span>
            </button>
            <button
              onClick={openSchedule}
              className="btn btn-ghost h-[42px] px-6 text-xs sm:text-sm flex items-center justify-center gap-2 text-white/90"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Call</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
