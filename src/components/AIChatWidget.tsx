"use client";

import React, { useState, useRef, useEffect } from "react";
import { X, Send, Bot, Calendar, ArrowRight } from "lucide-react";

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
      text: "Hello! I'm Nafa's AI Assistant. How can I help you deploy 24/7 call answering or <60s lead response?",
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
    "Will the voice sound robotic?",
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

    setTimeout(() => {
      let botReply =
        "Nafa engineers custom 24/7 AI voice receptionists and <60-second speed-to-lead follow-up systems so your business never misses revenue.";
      let action: "schedule" | "quote" | undefined = undefined;

      const lower = query.toLowerCase();
      if (lower.includes("speed-to-lead") || lower.includes("speed")) {
        botReply =
          "Our Speed-to-Lead system calls and messages new inquiries in under 60 seconds. Responding within 5 minutes increases conversion rates by up to 21x.";
        action = "quote";
      } else if (lower.includes("robot") || lower.includes("sound") || lower.includes("voice")) {
        botReply =
          "Zero robotic monotone. We use low-latency, natural conversational speech with human cadence, natural pauses, and full CRM integration. Listen to our live voice demo!";
      } else if (lower.includes("bundle") || lower.includes("growth")) {
        botReply =
          "The Full Growth Architecture includes the high-converting site, speed-to-lead outbound agent, and 24/7 inbound voice receptionist for full coverage.";
        action = "quote";
      } else if (lower.includes("fast") || lower.includes("timeline") || lower.includes("setup")) {
        botReply =
          "Systems go live in 5 to 7 business days! 100% done-for-you with direct engineer handoff.";
        action = "schedule";
      } else if (lower.includes("cost") || lower.includes("price") || lower.includes("quote")) {
        botReply =
          "Pricing scales cleanly based on your expected monthly call volume. Request a tailored proposal or book a call with our team!";
        action = "quote";
      } else {
        botReply =
          "Would you like to book a 15-minute architecture session with our engineering team, or receive a tailored quote?";
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
    }, 600);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40">
        {!isOpen ? (
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-[6px] border border-white/20 bg-black/90 hover:bg-neutral-900 text-white shadow-2xl backdrop-blur-xl transition-all cursor-pointer"
            aria-label="Open AI Assistant"
          >
            <div className="relative">
              <Bot className="w-4 h-4 text-white" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            </div>
            <span className="text-xs font-medium tracking-tight text-white/95">
              Ask Nafa AI
            </span>
          </button>
        ) : null}
      </div>

      {/* Floating Chat Sheet / Window */}
      {isOpen && (
        <div
          className="fixed bottom-0 sm:bottom-6 right-0 sm:right-6 z-50 w-full sm:w-[380px] h-[85vh] sm:h-[520px] bg-[#0c0c0c] sm:rounded-lg rounded-t-lg border border-white/15 shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-6 duration-200 text-white"
          role="dialog"
          aria-label="Nafa AI Assistant Chat"
        >
          {/* Header */}
          <div className="p-3.5 px-4 border-b border-white/10 bg-white/[0.02] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-[5px] border border-white/20 bg-white/10 text-white flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-white flex items-center gap-1.5">
                  Nafa AI Agent
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                </h4>
                <p className="text-[10px] text-[#9a9a9a]">24/7 Voice & Systems Assistant</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md border border-white/10 bg-white/[0.04] hover:bg-white/[0.1] text-white/70 hover:text-white transition-colors cursor-pointer"
              aria-label="Close chat"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Messages Stream */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-black/40">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${
                  m.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-[6px] text-xs leading-relaxed ${
                    m.sender === "user"
                      ? "bg-white text-black font-medium"
                      : "bg-white/[0.05] text-white border border-white/10"
                  }`}
                >
                  {m.text}

                  {m.action === "quote" && (
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        onOpenQuote();
                      }}
                      className="mt-2.5 w-full btn btn-solid h-[34px] text-xs"
                    >
                      <span>Request Free Quote</span>
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </button>
                  )}

                  {m.action === "schedule" && (
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        onOpenSchedule();
                      }}
                      className="mt-2.5 w-full btn btn-solid h-[34px] text-xs"
                    >
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>Book Strategy Call</span>
                    </button>
                  )}
                </div>
                <span className="text-[10px] text-[#9a9a9a] mt-1 px-1 font-mono">
                  {m.time}
                </span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick suggestions pills */}
          <div className="p-2 border-t border-white/10 bg-white/[0.02] overflow-x-auto flex gap-1.5 no-scrollbar">
            {quickPrompts.map((qp, i) => (
              <button
                key={i}
                onClick={() => handleSend(qp)}
                className="shrink-0 text-[11px] bg-white/[0.04] hover:bg-white/[0.08] text-[#9a9a9a] hover:text-white px-2.5 py-1 rounded-[5px] border border-white/10 transition-colors cursor-pointer"
              >
                {qp}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <div className="p-2.5 border-t border-white/10 bg-black/60 flex items-center gap-2">
            <input
              type="text"
              placeholder="Ask about AI calls, speed-to-lead..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 px-3 py-2 rounded-[6px] border border-white/15 bg-white/[0.04] text-xs text-white placeholder-white/40 focus:outline-none focus:border-white/50"
            />
            <button
              onClick={() => handleSend()}
              className="btn btn-solid h-[34px] px-3 text-xs"
              aria-label="Send message"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
