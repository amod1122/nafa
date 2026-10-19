"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, ArrowLeft } from "lucide-react";

export default function PrivacyPolicyPage() {
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
              <ShieldCheck className="w-3.5 h-3.5 text-white" />
              <span>Compliance & Legal</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-white">
              Privacy Policy
            </h1>
            <p className="text-xs text-[#9a9a9a] mt-1 font-mono">
              Effective Date: October 2026 | Version 1.0
            </p>
          </div>

          <div className="space-y-6 text-xs sm:text-sm text-[#d8d8d8] leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-base font-medium text-white">1. Overview & Scope</h2>
              <p className="text-[#9a9a9a]">
                Nafa Technologies ("we," "our," or "us") provides conversational artificial intelligence systems, including 24/7 AI call agents, speed-to-lead outbound dialing pipelines, and custom web development for small and medium businesses in the United States. This Privacy Policy governs information collected via our website, interactive audio simulators, and lead generation forms.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-medium text-white">2. Information We Collect</h2>
              <p className="text-[#9a9a9a]">
                When you request a quote, book a discovery consultation, or test our speed-to-lead sandbox, we may collect:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-[#9a9a9a]">
                <li>Your name and business contact details (email address, phone number).</li>
                <li>Business type, industry, estimated call volume, and service requirements.</li>
                <li>Device metadata, referring source, and interaction timestamps.</li>
                <li>Call audio and transcripts when interacting with voice demonstration lines.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-medium text-white">3. Telephone Consumer Protection Act (TCPA) & Outbound Calling</h2>
              <p className="text-[#9a9a9a]">
                By submitting your phone number via our quote request forms or Speed-to-Lead test sandboxes, you expressly consent to receive informational and transactional communications (including automated phone calls, artificial or prerecorded voice calls, and SMS text messages) from Nafa Technologies regarding your inquiry.
              </p>
              <p className="text-[#9a9a9a]">
                Consent is not a condition of purchasing any goods or services. You may opt out of automated communications at any time by replying "STOP" to any text message or requesting exclusion during any phone call.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-medium text-white">4. Call Recording & AI Disclosure</h2>
              <p className="text-[#9a9a9a]">
                All voice calls handled by our systems utilize artificial intelligence and may be recorded for training, quality assurance, transcription, and appointment verification purposes. In compliance with applicable federal and state two-party consent laws, callers are explicitly informed of AI involvement and call recording at the initiation of every phone session.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-medium text-white">5. Data Retention & Security</h2>
              <p className="text-[#9a9a9a]">
                We implement industry-standard encryption protocols (HTTPS, TLS 1.3, encrypted database storage) to safeguard contact records and call logs. We never sell, rent, or lease your personal contact details to third-party data brokers or marketing lists.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-medium text-white">6. Contact Us</h2>
              <p className="text-[#9a9a9a]">
                If you have questions regarding this Privacy Policy or wish to exercise data access or deletion rights, please contact our legal team at <a href="mailto:privacy@nafatechnologies.com" className="text-white underline font-medium">privacy@nafatechnologies.com</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
