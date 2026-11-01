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
      "Most callers cannot distinguish our agents from a seasoned receptionist, thanks to sub-500ms response times and natural speech cadence. If explicitly asked, the agent answers honestly per your compliance guidelines.",
  },
  {
    category: "Integration",
    question: "Do we need to switch our business phone number or telephone carrier?",
    answer:
      "No. You keep your current carrier and phone numbers. We set up simple conditional call forwarding (when busy, after 3 rings, or after hours) in under 5 minutes.",
  },
  {
    category: "Edge Cases",
    question: "What happens if a caller asks a complex question or has an emergency?",
    answer:
      "Urgent calls trigger an immediate live warm transfer to your on-call staff alongside instant SMS alerts. Unrecognized questions are noted for team follow-up.",
  },
  {
    category: "CRM & Calendar",
    question: "Which calendars and CRMs does Nafa synchronize with?",
    answer:
      "We integrate directly with ServiceTitan, Jobber, Housecall Pro, Clio, GoHighLevel, Google Calendar, Outlook, and Zapier. Appointments sync in seconds.",
  },
  {
    category: "Speed-to-Lead",
    question: "How does the Speed-to-Lead system work for website and Facebook form fills?",
    answer:
      "When a lead submits a web or ad form, Nafa dials them within 45 seconds while buyer intent is highest. Simultaneously, an automated SMS reaches them immediately.",
  },
  {
    category: "Launch Timeline",
    question: "How long does deployment take from kickoff to going live?",
    answer:
      "Deployments take 3 to 7 business days. We configure your company knowledge base, test live calls together, and launch once you are 100% satisfied.",
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
                  <span className="text-xs font-mono uppercase tracking-wider text-[#A6B4C7] px-2.5 py-1 rounded bg-white/5 border border-white/10 hidden sm:inline-block">
                    {faq.category}
                  </span>
                  <span className="text-[15px] sm:text-[16px] font-medium text-white tracking-[-0.01em]">
                    {faq.question}
                  </span>
                </div>
                <div
                  className={`w-8 h-8 rounded flex items-center justify-center border border-white/10 bg-white/5 text-white shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180 bg-white/10 border-white/30" : ""
                  }`}
                >
                  <ChevronDown className="w-4 h-4 text-white/80" />
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
                    <div className="px-6 pb-6 pt-1 text-sm leading-relaxed text-[#A6B4C7] border-t border-white/5 max-w-[58ch]">
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
