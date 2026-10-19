"use client";

import React from "react";
import Link from "next/link";
import { useSiteModals } from "@/context/ModalContext";

export default function HomePage() {
  const { openSchedule } = useSiteModals();

  return (
    <div className="flex flex-col justify-between min-h-[calc(100dvh-72px)] lg:h-[calc(100dvh-72px)] w-full">
      {/* Bottom-docked Hero Section */}
      <section
        id="top"
        className="mt-auto w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-12 pb-8 flex flex-col justify-end"
      >
        <div className="max-w-[860px]">
          {/* Badge */}
          <div
            className="badge-pill appear appear--soft inline-flex items-center gap-2 mb-5"
            style={{ animationDelay: "0.08s" }}
          >
            <svg
              className="badge-star text-white shrink-0"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
            </svg>
            <span className="text-[12.5px] tracking-[-0.01em] text-white/90">
              Operational AI Voice & Speed-to-Lead Infrastructure
            </span>
          </div>

          {/* Headline */}
          <h1
            className="appear appear--mask font-sans text-[32px] sm:text-[44px] lg:text-[48px] font-medium leading-[1.05] tracking-[-0.035em] text-white"
            style={{ animationDelay: "0.14s" }}
          >
            Deploy{" "}
            <em className="font-editorial not-italic text-[#9a9a9a]">
              AI call agents
            </em>{" "}
            that
            <br />
            answer every lead in seconds.
          </h1>

          {/* Lede Text */}
          <p
            className="appear appear--soft mt-4 max-w-[490px] text-[15px] sm:text-[15.5px] leading-[1.5] text-[#9a9a9a]"
            style={{ animationDelay: "0.22s" }}
          >
            Custom voice receptionists and immediate response pipelines that
            answer inbound phone calls, qualify intent, and book revenue onto
            your calendar 24/7/365. Zero missed opportunities.
          </p>

          {/* CTAs */}
          <div
            className="appear appear--btn mt-6 flex flex-wrap items-center gap-3.5"
            style={{ animationDelay: "0.28s" }}
          >
            <button
              onClick={openSchedule}
              className="btn btn-solid h-[42px] px-6 text-[13.5px]"
            >
              Book Discovery Call
            </button>
            <Link
              href="/demo"
              className="btn btn-ghost h-[42px] px-6 text-[13.5px]"
            >
              See Live Voice Demo
            </Link>
          </div>
        </div>
      </section>

      {/* 3-Stat Docked Footer */}
      <footer className="stats-grid appear appear--stat w-full" style={{ animationDelay: "0.34s" }}>
        {/* Stat 1: 24/7 Coverage */}
        <div className="stat-item">
          <div className="stat-icon" aria-hidden="true">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="4" width="8" height="16" rx="3.5" />
              <rect x="14" y="4" width="8" height="16" rx="3.5" />
            </svg>
          </div>
          <div>
            <div className="stat-title">24/7/365 Phone Answering</div>
            <p className="stat-desc">
              Human-grade conversational AI that answers after hours, weekends, and overflow times.
            </p>
          </div>
        </div>

        {/* Stat 2: Speed-to-lead */}
        <div className="stat-item">
          <div className="stat-icon" aria-hidden="true">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2v13" />
              <path d="m18 9-6 6-6-6" />
              <rect x="3" y="19" width="18" height="3" rx="1.5" />
            </svg>
          </div>
          <div>
            <div className="stat-title">&lt; 60-Second Lead Response</div>
            <p className="stat-desc">
              Instant voice and SMS engagement the second a web form, Google ad, or lead arrives.
            </p>
          </div>
        </div>

        {/* Stat 3: Done for you */}
        <div className="stat-item">
          <div className="stat-icon" aria-hidden="true">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <div>
            <div className="stat-title">100% Done-For-You Delivery</div>
            <p className="stat-desc">
              Full custom engineering, CRM synchronization, and live monitoring. Zero offshore bloat.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
