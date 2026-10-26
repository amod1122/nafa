"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export default function TermsOfServicePage() {
  return (
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-28 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-[#9a9a9a] hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        <div className="apple-glass rounded-lg p-6 sm:p-10 space-y-6">
          <div className="border-b border-white/10 pb-6">
            <div className="badge-pill inline-flex items-center gap-1.5 mb-3">
              <FileText className="w-3.5 h-3.5 text-white" />
              <span>Legal Agreements</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-white">
              Terms of Service
            </h1>
            <p className="text-xs text-[#9a9a9a] mt-1 font-mono">
              Effective Date: October 2026 | Version 1.0
            </p>
          </div>

          <div className="space-y-6 text-xs sm:text-sm text-[#d8d8d8] leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-base font-medium text-white">1. Acceptance of Terms</h2>
              <p className="text-[#9a9a9a]">
                By accessing this website, requesting a quote, scheduling a consultation, or testing our interactive voice demos, you agree to be bound by these Terms of Service. If you do not agree to these terms, please refrain from using our services.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-medium text-white">2. Nature of Services</h2>
              <p className="text-[#9a9a9a]">
                Nafa Technologies engineers, tunes, and deploys custom artificial intelligence call answering, outbound callback automation, and website solutions for commercial business clients. We do not guarantee specific sales revenues or client closing rates, as outcomes depend on individual market conditions, lead quality, and client sales execution.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-medium text-white">3. Client Responsibilities & Compliance</h2>
              <p className="text-[#9a9a9a]">
                Clients deploying Nafa AI Call Agents or Speed-to-Lead agents are responsible for maintaining valid business licensing, accurate pricing data, and compliance with all applicable local, state, and federal advertising, telemarketing, and consumer protection laws. Clients must ensure their website terms and privacy policies accurately disclose AI call recording and automated messaging.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-medium text-white">4. Intellectual Property</h2>
              <p className="text-[#9a9a9a]">
                All proprietary voice architectures, prompt handling frameworks, code scripts, and website designs created by Nafa Technologies remain the intellectual property of Nafa Technologies, unless explicitly transferred under a custom written master services agreement. Clients maintain complete ownership of their own business domains, registered marks, customer lists, and call data.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-medium text-white">5. Governing Law</h2>
              <p className="text-[#9a9a9a]">
                These Terms of Service are governed by and construed in accordance with the laws of the United States. Any disputes arising hereunder shall be resolved through binding arbitration.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-medium text-white">6. Contact</h2>
              <p className="text-[#9a9a9a]">
                Questions regarding these terms should be directed to <a href="mailto:contact@nafatech.xyz" className="text-white underline font-medium">contact@nafatech.xyz</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
