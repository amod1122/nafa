"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useSiteModals } from "@/context/ModalContext";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: "Voice Quality",
    question: "Will our callers know they are speaking with an AI voice agent?",
    answer:
      "Most callers cannot distinguish our voice agents from a seasoned human receptionist. Our neural speech synthesis reproduces realistic speech cadence, breath pauses, active listening acknowledgments ('I understand', 'Sure thing', 'Let me check that for you'), and conversational tone. If a caller explicitly asks if they are speaking with an AI, the agent answers with complete honesty according to your compliance guidelines.",
  },
  {
    category: "Integration",
    question: "Do we need to switch our business phone number or telephone carrier?",
    answer:
      "No. You keep your current business phone number, VoIP provider, or cellular carrier. We provide a dedicated routing line, and you simply set up conditional call forwarding (e.g. forward when busy, after 3 rings, or after hours) or forward 100% of inbounds. It takes less than 5 minutes to configure.",
  },
  {
    category: "Edge Cases",
    question: "What happens if a caller asks a complex question or has an emergency?",
    answer:
      "During system onboarding, we define explicit escalation criteria with your team. If the caller mentions an urgent emergency (e.g. water leak, acute dental pain, urgent arrest), the AI triggers an immediate warm transfer to your on-call team member's cell phone or sends high-priority SMS alerts. If the question is outside its knowledge base, it gracefully notes the request and sets expectations for a callback.",
  },
  {
    category: "CRM & Calendar",
    question: "Which calendars and CRMs does Nafa synchronize with?",
    answer:
      "We natively integrate with Google Calendar, Outlook 365, GoHighLevel, ServiceTitan, Jobber, Housecall Pro, Clio, Dentrix, HubSpot, Salesforce, and Zapier/Make webhooks. Booked appointments and captured lead data are written to your calendar and CRM within seconds.",
  },
  {
    category: "Speed-to-Lead",
    question: "How does the Speed-to-Lead system work for website and Facebook form fills?",
    answer:
      "The instant an inbound lead submits a form on your website, Google Local Services ad, or Meta lead ad, Nafa's webhook triggers an outbound call to the lead within 45 seconds while their intent is peak. Simultaneously, an automated conversational SMS is sent to establish contact before your competitors can even open their inbox.",
  },
  {
    category: "Launch Timeline",
    question: "How long does deployment take from kickoff to going live?",
    answer:
      "Standard deployments take between 3 and 7 business days. We ingest your company FAQs, service menus, pricing policies, and intake criteria, build the custom voice agent in our staging environment, test edge cases together on a live call, and deploy when you are 100% satisfied.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { openSchedule } = useSiteModals();

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="relative py-14 sm:py-20 px-6 sm:px-10 lg:px-12 max-w-5xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[-0.03em] text-white leading-[1.1]">
          Everything you need to know about Nafa deployment.
        </h2>
        <p className="mt-4 text-[15px] sm:text-[16px] text-[#A6B4C7] max-w-[65ch] mx-auto leading-relaxed">
          Direct answers to common questions about voice fidelity, security, integrations, and deployment timelines.
        </p>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={`rounded-lg border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? "border-white/30 bg-white/[0.06] shadow-lg shadow-black/40"
                  : "border-white/10 bg-black/40 hover:border-white/20 hover:bg-white/[0.03]"
              }`}
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none min-h-[52px]"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border hidden sm:inline-block transition-colors ${
                    isOpen
                      ? "text-sky-300 bg-sky-500/10 border-sky-500/30"
                      : "text-[#94a3b8] bg-white/5 border-white/10"
                  }`}>
                    {faq.category}
                  </span>
                  <span className="text-[15px] sm:text-[16px] font-medium text-white tracking-[-0.01em]">
                    {faq.question}
                  </span>
                </div>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center border border-white/10 bg-white/5 text-white shrink-0 transition-all duration-300 ${
                    isOpen ? "rotate-180 bg-sky-500/20 border-sky-500/40 text-sky-300" : ""
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 text-sm leading-relaxed text-[#94a3b8] border-t border-white/5 max-w-[65ch]">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
