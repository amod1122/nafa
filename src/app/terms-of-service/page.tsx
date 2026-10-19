"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, ArrowLeft, FileText } from "lucide-react";

export default function TermsOfServicePage() {
  return (
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-nafa-muted hover:text-nafa-charcoal mb-8 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        <div className="apple-glass rounded-3xl p-6 sm:p-10 shadow-apple-card border border-white space-y-6">
          <div className="border-b border-nafa-border/60 pb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 text-nafa-charcoal text-xs font-bold mb-3">
              <FileText className="w-3.5 h-3.5 text-nafa-gold" />
              Legal Agreements
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-nafa-charcoal">
              Terms of Service
            </h1>
            <p className="text-xs text-nafa-muted mt-1">
              Effective Date: October 2026 | Version 1.0
            </p>
          </div>

          <div className="space-y-6 text-xs sm:text-sm text-nafa-charcoal leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-nafa-charcoal">1. Acceptance of Terms</h2>
              <p className="text-nafa-muted">
                By accessing this website, requesting a quote, scheduling a consultation, or testing our interactive voice demos, you agree to be bound by these Terms of Service. If you do not agree to these terms, please refrain from using our services.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-nafa-charcoal">2. Nature of Services</h2>
              <p className="text-nafa-muted">
                Nafa Technologies engineers, tunes, and deploys custom artificial intelligence call answering, outbound callback automation, and website solutions for commercial business clients. We do not guarantee specific sales revenues or client closing rates, as outcomes depend on individual market conditions, lead quality, and client sales execution.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-nafa-charcoal">3. Client Responsibilities & Compliance</h2>
              <p className="text-nafa-muted">
                Clients deploying Nafa AI Call Agents or Speed-to-Lead agents are responsible for maintaining valid business licensing, accurate pricing data, and compliance with all applicable local, state, and federal advertising, telemarketing, and consumer protection laws. Clients must ensure their website terms and privacy policies accurately disclose AI call recording and automated messaging.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-nafa-charcoal">4. Intellectual Property</h2>
              <p className="text-nafa-muted">
                All proprietary voice architectures, prompt handling frameworks, code scripts, and website designs created by Nafa Technologies remain the intellectual property of Nafa Technologies, unless explicitly transferred under a custom written master services agreement. Clients maintain complete ownership of their own business domains, registered marks, customer lists, and call data.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-nafa-charcoal">5. Limitation of Liability</h2>
              <p className="text-nafa-muted">
                In no event shall Nafa Technologies, its directors, employees, or contractors be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation lost revenues, lost appointments, or data interruptions arising out of the use or inability to use our automation systems.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-nafa-charcoal">6. Governing Law</h2>
              <p className="text-nafa-muted">
                These terms are governed by and construed in accordance with the laws of the United States. Any disputes arising hereunder shall be subject to binding arbitration under the rules of the American Arbitration Association.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
