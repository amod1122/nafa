"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";
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
    <section id="faqs" className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-12 max-w-5xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="badge-pill inline-flex items-center gap-2 mb-4">
          <HelpCircle className="w-3.5 h-3.5 text-white" />
          <span className="text-[12.5px] text-white/90">Frequently Asked Questions</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[-0.035em] text-white leading-[1.1]">
          Everything you need to know about{" "}
          <em className="font-editorial not-italic text-[#9a9a9a]">Nafa deployment.</em>
        </h2>
        <p className="mt-4 text-[15px] sm:text-[16px] text-[#9a9a9a]">
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
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-white/50 px-2 py-0.5 rounded bg-white/5 border border-white/10 hidden sm:inline-block">
                    {faq.category}
                  </span>
                  <span className="text-[15px] sm:text-[16px] font-medium text-white tracking-[-0.01em]">
                    {faq.question}
                  </span>
                </div>
                <div
                  className={`w-7 h-7 rounded flex items-center justify-center border border-white/10 bg-white/5 text-white shrink-0 transition-transform duration-300 ${
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
                    <div className="px-6 pb-6 pt-1 text-[14px] sm:text-[14.5px] leading-relaxed text-[#9a9a9a] border-t border-white/5">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Still have questions banner */}
      <div className="mt-12 rounded-lg border border-white/12 bg-white/[0.03] p-6 text-center sm:flex sm:items-center sm:justify-between sm:text-left">
        <div>
          <div className="text-sm font-semibold text-white">Have a specific technical question?</div>
          <div className="text-xs text-[#9a9a9a] mt-0.5">
            Our founding engineering team answers all questions directly on our 15-minute discovery call.
          </div>
        </div>
        <button
          onClick={openSchedule}
          className="btn btn-ghost h-[38px] px-5 text-xs font-medium mt-4 sm:mt-0 shrink-0"
        >
          <span>Ask An Engineer</span>
        </button>
      </div>
    </section>
  );
}
