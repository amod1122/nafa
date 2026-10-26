"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUp, ArrowUpRight, Mail } from "lucide-react";
import { useSiteModals } from "@/context/ModalContext";

const groups = [
  {
    label: "Solutions",
    links: [
      ["AI Call Agent", "/services/ai-call-agent"],
      ["Speed-to-Lead", "/services/speed-to-lead"],
      ["Website & Redesign", "/services/ai-website"],
      ["All Services", "/services"],
    ],
  },
  {
    label: "Platform",
    links: [
      ["How It Works", "/how-it-works"],
      ["Case Studies", "/case-studies"],
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
    <footer className="relative z-10 border-t border-white/10 bg-black/90 backdrop-blur-xl mt-12 sm:mt-16">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3 text-white no-underline group"
              aria-label="Nafa Technologies home"
            >
              <div className="relative w-8 h-8 rounded-[6px] overflow-hidden border border-white/20 bg-white/[0.04] backdrop-blur-md flex items-center justify-center p-0.5 shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/nafa-logo-white.png"
                  alt="Nafa Technologies Logo"
                  width={30}
                  height={30}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[15px] font-semibold tracking-[-0.03em] text-white leading-tight">
                  Nafa
                </span>
                <span className="text-[10px] font-mono tracking-wider uppercase text-[#A6B4C7] leading-none">
                  Technologies
                </span>
              </div>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-[#A6B4C7]">
              Operational AI voice infrastructure, immediate speed-to-lead systems, and high-converting web architecture for businesses that never miss an opportunity.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={openSchedule}
                className="btn btn-solid h-[40px] px-4 text-xs font-semibold"
              >
                Book Discovery Call <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
              </button>
            </div>

            <div className="mt-4 flex items-center gap-2.5">
              <a
                href="https://www.instagram.com/nafatechnologies?rpxt=YWZ0dmdiNDM2djMz&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 px-2.5 rounded-[5px] border border-white/10 bg-white/[0.03] hover:bg-white/10 text-[#A6B4C7] hover:text-white flex items-center gap-1.5 text-xs transition-colors"
                aria-label="Nafa Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span>Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/in/ahmad-ali-8527a93ba?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 px-2.5 rounded-[5px] border border-white/10 bg-white/[0.03] hover:bg-white/10 text-[#A6B4C7] hover:text-white flex items-center gap-1.5 text-xs transition-colors"
                aria-label="CEO LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 0 0 1.53-1.53A1.53 1.53 0 0 0 6.46 5.7a1.53 1.53 0 0 0-1.53 1.53c0 .85.68 1.53 1.53 1.53m1.39 9.74v-8.37H5.07v8.37z" />
                </svg>
                <span>CEO LinkedIn</span>
              </a>
              <a
                href="mailto:contact@nafatech.site"
                className="h-8 px-2.5 rounded-[5px] border border-white/10 bg-white/[0.03] hover:bg-white/10 text-[#A6B4C7] hover:text-white flex items-center gap-1.5 text-xs transition-colors"
                aria-label="Direct Email"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>contact@nafatech.site</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {groups.map((group) => (
              <div key={group.label}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#A6B4C7]">
                  {group.label}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {groups.find((g) => g.label === group.label)?.links.map(([label, href]) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="text-sm text-[#A6B4C7] transition-colors hover:text-white"
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

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-[#A6B4C7] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Nafa Technologies. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 self-start text-[#A6B4C7] transition-colors hover:text-white sm:self-auto cursor-pointer min-h-[44px]"
          >
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
