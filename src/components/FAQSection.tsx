"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  category: string;
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    category: "AI Call Agent",
    question: "Will the AI sound robotic or irritate my callers?",
    answer:
      "Not at all. We utilize the latest conversational neural voice models with natural pacing, breathing, and sub-second response times. You can test our interactive audio demo above to hear for yourself. Most callers don't even realize they are speaking to an AI agent.",
  },
  {
    category: "AI Call Agent",
    question: "What happens if a caller asks something the AI cannot answer?",
    answer:
      "If a caller presents an unusual inquiry outside its trained parameters, the agent politely lets them know: 'I want to make sure you get the exact answer on that. Let me grab your best number and have our senior specialist follow up immediately,' or seamlessly warm-transfers the call directly to your cell phone.",
  },
  {
    category: "Setup & Numbers",
    question: "Do I need to change my current business phone number?",
    answer:
      "No! You keep your existing business phone number. We provide you with a dedicated forwarding route. You can forward all calls, only after-hours calls, or only unanswered calls when your line is busy.",
  },
  {
    category: "Speed-to-Lead",
    question: "How does the Speed-to-Lead Agent actually work?",
    answer:
      "The instant someone submits an inquiry on your website, Google Local Services ad, or Facebook form, our system triggers an outbound call to that lead within 60 seconds. It answers their initial questions, qualifies their needs, and books them on your calendar before they can click on a competitor's link.",
  },
  {
    category: "AI Website",
    question: "Do I own my website and domain?",
    answer:
      "Yes, 100%. You own your domain and all website content. We handle the high-speed hosting, maintenance, and technical updates so you never have to worry about plugin crashes or security certificates.",
  },
  {
    category: "Timeline & Pricing",
    question: "How fast can you get our system live?",
    answer:
      "Because our team works directly with you and never outsources, most custom AI call agents and websites are built, tuned, and deployed within 5 to 7 business days following your discovery call.",
  },
  {
    category: "Timeline & Pricing",
    question: "What does it cost?",
    answer:
      "Every business has different call volumes and requirements. Rather than forcing you into a bloated generic subscription, we offer custom tailored packages with zero fluff. Schedule a quick 15-minute discovery call or request a free quote to get an exact figure for your business.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "AI Call Agent", "Speed-to-Lead", "Setup & Numbers", "Timeline & Pricing"];

  const filteredFaqs =
    activeCategory === "All"
      ? FAQS
      : FAQS.filter((f) => f.category === activeCategory);

  return (
    <section id="faq" className="py-16 sm:py-24 bg-nafa-canvas-muted/40 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 text-nafa-charcoal border border-nafa-border text-xs font-bold mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-nafa-gold" />
            Clear Answers • No Fluff
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-nafa-charcoal mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-nafa-muted max-w-xl mx-auto">
            Everything you need to know about our AI receptionists, speed-to-lead follow-up, and website systems.
          </p>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 pt-6 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIndex(null);
                }}
                className={`press-scale flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? "bg-nafa-charcoal text-white shadow-xs"
                    : "bg-white text-nafa-muted border border-nafa-border hover:text-nafa-charcoal"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="apple-glass-card rounded-2xl border border-nafa-border/60 overflow-hidden shadow-xs transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full py-4.5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-black/[0.02]"
                  aria-expanded={isOpen}
                >
                  <span className="font-extrabold text-nafa-charcoal text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-stone-100 text-nafa-charcoal flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-amber-100 text-amber-900" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-nafa-muted leading-relaxed border-t border-nafa-border/30 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
