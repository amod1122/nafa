"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, Sparkles, Calendar, ArrowRight, User } from "lucide-react";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  time: string;
  action?: "schedule" | "quote";
}

interface AIChatWidgetProps {
  onOpenSchedule: () => void;
  onOpenQuote: () => void;
}

export default function AIChatWidget({ onOpenSchedule, onOpenQuote }: AIChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "bot",
      text: "Hi there! I'm Nafa's AI Assistant. How can I help you stop losing leads today?",
      time: "Just now",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const quickPrompts = [
    "How does Speed-to-Lead work?",
    "Will the AI voice sound robotic?",
    "What's in the Full Growth Bundle?",
    "How fast can you set this up?",
  ];

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: query,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput("");

    // Intelligent auto-response based on PRD knowledge
    setTimeout(() => {
      let botReply =
        "Thanks for asking! Nafa specializes in 24/7 AI call agents and <5-minute speed-to-lead follow-up so you never miss another customer inquiry.";
      let action: "schedule" | "quote" | undefined = undefined;

      const lower = query.toLowerCase();
      if (lower.includes("speed-to-lead") || lower.includes("speed")) {
        botReply =
          "Our Speed-to-Lead Agent contacts web leads in under 60 seconds. Studies show that contacting within 5 minutes makes you 21x more likely to convert the lead!";
        action = "quote";
      } else if (lower.includes("robot") || lower.includes("sound") || lower.includes("voice")) {
        botReply =
          "Not robotic at all! We use natural conversational neural voices with natural breathing and sub-second response times. You can test our interactive audio demo above to hear it!";
      } else if (lower.includes("bundle") || lower.includes("growth")) {
        botReply =
          "The Full Growth System combines our high-converting website, the Speed-to-Lead agent, and the 24/7 AI Call Agent. That way no call and no web lead is ever missed.";
        action = "quote";
      } else if (lower.includes("fast") || lower.includes("timeline") || lower.includes("setup")) {
        botReply =
          "We deploy most systems in 5 to 7 business days! We build everything done-for-you with zero outsourcing.";
        action = "schedule";
      } else if (lower.includes("cost") || lower.includes("price") || lower.includes("quote")) {
        botReply =
          "We customize pricing to your call volume so you don't overpay for unused minutes. Click below to get an exact custom quote!";
        action = "quote";
      } else {
        botReply =
          "I can schedule a quick 15-minute strategy call with our engineering team, or generate a custom quote for your business!";
        action = "schedule";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: botReply,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          action,
        },
      ]);
    }, 700);
  };

  return (
    <>
      {/* Floating Toggle Button (Pill on Desktop, Circle on Mobile) */}
      <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40">
        {!isOpen ? (
          <button
            onClick={() => setIsOpen(true)}
            className="press-scale flex items-center gap-2.5 p-3.5 sm:px-5 sm:py-3.5 rounded-full bg-nafa-charcoal hover:bg-black text-white shadow-apple-float border border-white/20 transition-all"
            aria-label="Open AI Assistant"
          >
            <div className="relative">
              <Bot className="w-5 h-5 text-amber-400" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-nafa-charcoal animate-pulse"></span>
            </div>
            <span className="hidden sm:inline font-bold text-xs sm:text-sm">
              Ask Nafa AI
            </span>
          </button>
        ) : null}
      </div>

      {/* Floating Chat Sheet / Window */}
      {isOpen && (
        <div
          className="fixed bottom-0 sm:bottom-6 right-0 sm:right-6 z-50 w-full sm:w-[380px] h-[85vh] sm:h-[540px] bg-nafa-canvas sm:rounded-3xl rounded-t-3xl border border-nafa-border shadow-apple-float flex flex-col overflow-hidden animate-in slide-in-from-bottom-6 duration-300"
          role="dialog"
          aria-label="Nafa AI Assistant Chat"
        >
          {/* Header */}
          <div className="apple-glass p-4 border-b border-nafa-border/60 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-nafa-charcoal flex items-center gap-1.5">
                  Nafa Assistant
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                </h4>
                <p className="text-[11px] text-nafa-muted">24/7 AI Automation Agent</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-stone-200/60 text-nafa-charcoal"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Stream */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-stone-50/50">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${
                  m.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-2xs ${
                    m.sender === "user"
                      ? "bg-nafa-charcoal text-white rounded-br-xs"
                      : "bg-white text-nafa-charcoal border border-nafa-border/60 rounded-bl-xs"
                  }`}
                >
                  {m.text}

                  {m.action === "quote" && (
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        onOpenQuote();
                      }}
                      className="mt-2.5 w-full py-2 px-3 rounded-xl bg-nafa-gold text-white font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-nafa-gold-hover"
                    >
                      <span>Request Free Quote</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}

                  {m.action === "schedule" && (
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        onOpenSchedule();
                      }}
                      className="mt-2.5 w-full py-2 px-3 rounded-xl bg-nafa-charcoal text-white font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-black"
                    >
                      <Calendar className="w-3.5 h-3.5 text-amber-400" />
                      <span>Book 15-Min Strategy Call</span>
                    </button>
                  )}
                </div>
                <span className="text-[10px] text-nafa-muted mt-1 px-1 font-mono">
                  {m.time}
                </span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick suggestions pills */}
          <div className="p-2 border-t border-nafa-border/40 bg-white/70 overflow-x-auto flex gap-1.5 no-scrollbar">
            {quickPrompts.map((qp, i) => (
              <button
                key={i}
                onClick={() => handleSend(qp)}
                className="flex-shrink-0 text-[11px] font-semibold bg-stone-100 hover:bg-stone-200 text-nafa-charcoal px-2.5 py-1 rounded-full border border-stone-200/60"
              >
                {qp}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <div className="p-3 border-t border-nafa-border bg-white flex items-center gap-2">
            <input
              type="text"
              placeholder="Ask about AI calls, speed-to-lead..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 px-3.5 py-2.5 rounded-xl border border-nafa-border bg-nafa-canvas text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button
              onClick={() => handleSend()}
              className="p-2.5 rounded-xl bg-nafa-gold hover:bg-nafa-gold-hover text-white transition-all"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
