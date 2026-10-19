"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { useSiteModals } from "@/context/ModalContext";

const groups = [
  {
    label: "Solutions",
    links: [
      ["AI Call Agent", "/services/ai-call-agent"],
      ["Speed-to-Lead", "/services/speed-to-lead"],
      ["AI Website", "/services/ai-website"],
      ["All Services", "/services"],
    ],
  },
  {
    label: "Platform",
    links: [
      ["How It Works", "/how-it-works"],
      ["Case Studies", "/case-studies"],
      ["Live Demo", "/demo"],
      ["Industries", "/industries"],
      ["Pricing & Bundles", "/pricing"],
    ],
  },
  {
    label: "Company",
    links: [
      ["About Nafa", "/about"],
      ["Insights", "/blog"],
      ["Contact", "/contact"],
      ["Privacy Policy", "/privacy-policy"],
      ["Terms of Service", "/terms-of-service"],
    ],
  },
];

export default function Footer() {
  const { openSchedule } = useSiteModals();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/90 backdrop-blur-xl mt-24">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 text-white no-underline group"
              aria-label="Nafa Technologies home"
            >
              <span className="grid h-[22px] w-[22px] place-items-center text-white transition-transform duration-300 group-hover:scale-110">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g transform="rotate(-30 12 12)">
                    <circle cx="7.3" cy="3.2" r="1.45" />
                    <rect x="5.5" y="4.7" width="3.6" height="14.6" rx="1.8" />
                    <rect x="14.9" y="4.7" width="3.6" height="14.6" rx="1.8" />
                    <circle cx="16.7" cy="20.8" r="1.45" />
                  </g>
                </svg>
              </span>
              <span className="text-[15.5px] font-semibold tracking-[-0.03em] text-white">
                Nafa<span className="font-normal text-[#9a9a9a]">.tech</span>
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-[#9a9a9a]">
              Operational AI voice infrastructure, immediate speed-to-lead systems, and high-converting web architecture for businesses that never miss an opportunity.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={openSchedule}
                className="btn btn-solid h-[38px] px-4 text-xs font-medium"
              >
                Book Discovery Call <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {groups.map((group) => (
              <div key={group.label}>
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9a9a9a]">
                  {group.label}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {group.links.map(([label, href]) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="text-[13.5px] text-[#9a9a9a] transition-colors hover:text-white"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-[#9a9a9a] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Nafa Technologies. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 self-start text-[#9a9a9a] transition-colors hover:text-white sm:self-auto cursor-pointer"
          >
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
