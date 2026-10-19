"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Phone,
  PhoneCall,
  CheckCircle2,
  Clock,
  Sparkles,
  ShieldCheck,
  Send,
  Zap,
} from "lucide-react";

interface Scenario {
  id: string;
  name: string;
  industry: string;
  caller: string;
  summary: string;
  duration: number; // in seconds
  dialogue: {
    speaker: "caller" | "ai";
    time: number; // timestamp in seconds
    text: string;
  }[];
}

const SCENARIOS: Scenario[] = [
  {
    id: "plumbing",
    name: "Emergency Plumbing",
    industry: "Home Services",
    caller: "David M. (Homeowner)",
    summary: "Burst pipe in basement on Sunday evening",
    duration: 24,
    dialogue: [
      {
        speaker: "caller",
        time: 1,
        text: "Hi, I have water pouring into my basement from a burst pipe. Can anyone get out here right now?",
      },
      {
        speaker: "ai",
        time: 5,
        text: "I'm so sorry to hear that David! Let's get that stopped immediately. First, have you shut off the main water valve?",
      },
      {
        speaker: "caller",
        time: 11,
        text: "Yes, I just turned it off, but there's about two inches of water on the floor.",
      },
      {
        speaker: "ai",
        time: 15,
        text: "Good job shutting it off. Our master technician Kevin is finishing a job nearby and can be at your door within 45 minutes. May I confirm your street address?",
      },
      {
        speaker: "caller",
        time: 21,
        text: "Yes, 412 Maple Ridge Road.",
      },
      {
        speaker: "ai",
        time: 23,
        text: "Confirmed. Kevin is dispatched to 412 Maple Ridge Road. You'll receive a confirmation text shortly!",
      },
    ],
  },
  {
    id: "dental",
    name: "Dental Clinic",
    industry: "Healthcare",
    caller: "Sarah L. (New Patient)",
    summary: "Severe tooth pain + new patient booking",
    duration: 20,
    dialogue: [
      {
        speaker: "caller",
        time: 1,
        text: "Hello, I chipped a molar during dinner and I'm in a lot of pain. Do you have any emergency appointments tomorrow morning?",
      },
      {
        speaker: "ai",
        time: 6,
        text: "Ouch, tooth pain is the worst. We certainly have emergency slots reserved for tomorrow. Dr. Vance has an 8:30 AM or 10:15 AM available. Which works best for you?",
      },
      {
        speaker: "caller",
        time: 12,
        text: "8:30 AM would be great before work. Do you take Delta Dental?",
      },
      {
        speaker: "ai",
        time: 16,
        text: "Yes, we are in-network with Delta Dental Premier. I have you booked for 8:30 AM with Dr. Vance. I just texted you our quick digital intake form!",
      },
    ],
  },
  {
    id: "legal",
    name: "Legal Intake",
    industry: "Law Firm",
    caller: "Marcus T. (Accident Victim)",
    summary: "Auto collision inquiry & attorney consult",
    duration: 22,
    dialogue: [
      {
        speaker: "caller",
        time: 1,
        text: "Hi, I was rear-ended on Interstate 95 by a commercial van yesterday. I wanted to see if I need an injury lawyer.",
      },
      {
        speaker: "ai",
        time: 7,
        text: "I am glad you are safe, Marcus. Commercial vehicle accidents require immediate review to preserve evidence. Were you evaluated at the hospital or an urgent care?",
      },
      {
        speaker: "caller",
        time: 14,
        text: "Yes, they checked me at the ER for neck pain and whiplash.",
      },
      {
        speaker: "ai",
        time: 18,
        text: "Understood. Senior partner attorney Henderson offers free consultations for cases like yours. I can schedule a direct phone review with him today at 2:00 PM. Would that work?",
      },
    ],
  },
];

export default function InteractiveAudioDemo() {
  const [activeScenarioId, setActiveScenarioId] = useState("plumbing");
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [audioMuted, setAudioMuted] = useState(false);

  // Speed to lead simulator state
  const [testLeadName, setTestLeadName] = useState("");
  const [testLeadPhone, setTestLeadPhone] = useState("");
  const [speedTestRunning, setSpeedTestRunning] = useState(false);
  const [speedTestStep, setSpeedTestStep] = useState(0);

  const scenario = SCENARIOS.find((s) => s.id === activeScenarioId) || SCENARIOS[0];
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Web Audio simulated gentle speech tone synthesis
  const playSimulatedBeep = (freq: number, duration: number) => {
    if (audioMuted) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      if (!audioContextRef.current) {
        audioContextRef.current = new AudioCtx();
      }
      if (audioContextRef.current.state === "suspended") {
        audioContextRef.current.resume();
      }
      const ctx = audioContextRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {
      // AudioContext not permitted or supported; silent fallback
    }
  };

  // Playback timer loop
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= scenario.duration) {
            setIsPlaying(false);
            return 0;
          }
          // gentle audio pulse for speech cadence
          if (prev % 2 === 0) {
            playSimulatedBeep(440, 0.12);
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, scenario.duration, audioMuted]);

  const handleTogglePlay = () => {
    if (!isPlaying && currentTime >= scenario.duration) {
      setCurrentTime(0);
    }
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const handleScenarioChange = (id: string) => {
    setIsPlaying(false);
    setCurrentTime(0);
    setActiveScenarioId(id);
  };

  // Run Speed-to-lead simulation
  const handleStartSpeedTest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!testLeadName || !testLeadPhone) return;

    setSpeedTestRunning(true);
    setSpeedTestStep(1); // Form received

    setTimeout(() => {
      setSpeedTestStep(2); // AI Speed agent triggered in 0.8s
    }, 1200);

    setTimeout(() => {
      setSpeedTestStep(3); // Outbound call dialing
    }, 2600);

    setTimeout(() => {
      setSpeedTestStep(4); // Call connected & lead qualified
    }, 4500);
  };

  return (
    <section id="demo" className="py-8 sm:py-12 bg-transparent relative text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="badge-pill inline-flex items-center gap-1.5 mb-4">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            <span>Experience The Voice Technology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
            Hear What It Sounds Like in <em className="font-editorial not-italic text-[#9a9a9a]">Real Life</em>
          </h2>
          <p className="text-sm sm:text-base text-[#9a9a9a] max-w-2xl mx-auto leading-relaxed">
            Zero robotic monotone trees. Listen to our AI voice receptionists conduct realistic customer calls, qualify intent, and secure calendar appointments.
          </p>

          {/* Industry Selector Tabs */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 pt-6 no-scrollbar">
            {SCENARIOS.map((s) => (
              <button
                key={s.id}
                onClick={() => handleScenarioChange(s.id)}
                className={`shrink-0 px-4 py-2 rounded-[6px] text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  activeScenarioId === s.id
                    ? "btn-solid text-black font-semibold"
                    : "bg-white/[0.04] text-[#9a9a9a] border border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                {s.name}
              </button>
            ))}
          </div>
        </div>

        {/* Audio Simulation Player Card */}
        <div className="apple-glass rounded-lg p-5 sm:p-8 lg:p-10 border border-white/15 max-w-4xl mx-auto mb-14">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 pb-6 border-b border-white/10">
            {/* Scenario Meta */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-white/90 bg-white/[0.05] border border-white/15 px-2.5 py-0.5 rounded-[4px]">
                  {scenario.industry}
                </span>
                <span className="text-xs text-[#9a9a9a]">Simulated Inbound Call</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-medium text-white tracking-tight mt-1">
                {scenario.summary}
              </h3>
              <p className="text-xs sm:text-sm text-[#9a9a9a] mt-0.5">
                Caller: <span className="font-medium text-white">{scenario.caller}</span>
              </p>
            </div>

            {/* Audio Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleTogglePlay}
                className="btn btn-solid h-[40px] px-5 text-xs sm:text-sm font-semibold flex items-center gap-2"
                aria-label={isPlaying ? "Pause audio call" : "Play audio call"}
              >
                {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                <span>{isPlaying ? "Pause Call" : "Play Call"}</span>
              </button>

              <button
                onClick={handleReset}
                className="p-2.5 rounded-[6px] bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] text-white cursor-pointer"
                title="Restart Call"
                aria-label="Restart call"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <button
                onClick={() => setAudioMuted(!audioMuted)}
                className="p-2.5 rounded-[6px] bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] text-white cursor-pointer"
                title={audioMuted ? "Unmute Sound" : "Mute Sound"}
                aria-label="Toggle audio mute"
              >
                {audioMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Animated Waveform Visualizer */}
          <div className="py-6 sm:py-8">
            <div className="flex items-center justify-between text-xs text-[#9a9a9a] font-mono mb-2">
              <span>0:{currentTime < 10 ? `0${currentTime}` : currentTime}</span>
              <span className="flex items-center gap-1.5 font-sans font-medium text-white">
                {isPlaying ? (
                  <>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Call Active (0.3s latency)
                  </>
                ) : (
                  "Ready to play"
                )}
              </span>
              <span>0:{scenario.duration}</span>
            </div>

            {/* Waveform Bars */}
            <div className="h-16 bg-black/50 rounded-[6px] p-3 flex items-center justify-between gap-1 border border-white/10 overflow-hidden">
              {Array.from({ length: 42 }).map((_, i) => {
                const isAI = currentTime % 6 >= 3;
                const dynamicHeight = isPlaying
                  ? Math.min(
                      100,
                      Math.max(
                        15,
                        Math.sin(i * 0.4 + currentTime * 2) * 45 +
                          Math.cos(i * 0.7) * 35 +
                          20
                      )
                    )
                  : 12;
                return (
                  <div
                    key={i}
                    style={{ height: `${dynamicHeight}%` }}
                    className={`w-full rounded-full transition-all duration-150 ${
                      isPlaying
                        ? isAI
                          ? "bg-white"
                          : "bg-white/60"
                        : "bg-white/20"
                    }`}
                  />
                );
              })}
            </div>
          </div>

          {/* Live Synchronized Transcript */}
          <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
            {scenario.dialogue.map((item, index) => {
              const isPassed = currentTime >= item.time;
              const isCurrent =
                currentTime >= item.time &&
                (index === scenario.dialogue.length - 1 ||
                  currentTime < scenario.dialogue[index + 1].time);

              return (
                <div
                  key={index}
                  className={`p-3.5 rounded-[6px] transition-all duration-200 ${
                    item.speaker === "ai"
                      ? isCurrent
                        ? "bg-white/15 border border-white/40 shadow-sm"
                        : isPassed
                        ? "bg-white/[0.06] border border-white/15"
                        : "bg-white/[0.02] opacity-35 border border-transparent"
                      : isCurrent
                      ? "bg-white/10 border border-white/30 shadow-sm"
                      : isPassed
                      ? "bg-white/[0.03] border border-white/10"
                      : "bg-white/[0.02] opacity-35 border border-transparent"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className={`text-[11px] font-semibold uppercase tracking-wider ${
                        item.speaker === "ai" ? "text-white" : "text-[#9a9a9a]"
                      }`}
                    >
                      {item.speaker === "ai" ? "Nafa AI Agent" : "Caller"}
                    </span>
                    <span className="text-[10px] text-[#9a9a9a] font-mono">
                      0:{item.time < 10 ? `0${item.time}` : item.time}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-normal text-white leading-relaxed">
                    "{item.text}"
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Speed-to-Lead Sandbox Simulator */}
        <div className="apple-glass rounded-lg p-6 sm:p-10 border border-white/15 max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 justify-between">
            <div className="w-full lg:w-1/2 space-y-3">
              <span className="badge-pill text-xs inline-flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-white" />
                Live Speed-to-Lead Simulator
              </span>
              <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">
                See How Fast We Contact New Leads
              </h3>
              <p className="text-xs sm:text-sm text-[#9a9a9a] leading-relaxed">
                Test our outbound agent right now. Submit mock details to trigger a live simulation of the automated 60-second qualification workflow.
              </p>
              <div className="flex items-center gap-2 text-xs text-[#9a9a9a] pt-1">
                <ShieldCheck className="w-4 h-4 text-white" />
                <span>Simulated sandbox mode (safe test, no spam calls)</span>
              </div>
            </div>

            {/* Test Form & Progress State */}
            <div className="w-full lg:w-1/2 bg-[#0c0c0c] rounded-[6px] p-5 sm:p-6 border border-white/15">
              {!speedTestRunning ? (
                <form onSubmit={handleStartSpeedTest} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-medium text-white/90 mb-1">
                      Lead Name:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Michael Scott"
                      value={testLeadName}
                      onChange={(e) => setTestLeadName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-[6px] border border-white/15 bg-white/[0.04] text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/90 mb-1">
                      Phone Number:
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(555) 019-2834"
                      value={testLeadPhone}
                      onChange={(e) => setTestLeadPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-[6px] border border-white/15 bg-white/[0.04] text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/50"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-solid w-full h-[40px] text-xs sm:text-sm font-semibold flex items-center justify-center gap-2"
                  >
                    <Zap className="w-4 h-4" />
                    <span>Trigger Speed-to-Lead Test</span>
                  </button>
                </form>
              ) : (
                <div className="space-y-4 py-2">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="text-xs font-medium text-white">
                      Speed-to-Lead Workflow Active
                    </span>
                    <span className="text-xs font-mono font-medium text-white/90">
                      Target: &lt;60s
                    </span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="flex items-center gap-2.5 text-white font-medium">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                      <span>1. Web form lead received for {testLeadName}</span>
                    </div>

                    <div
                      className={`flex items-center gap-2.5 transition-opacity duration-300 ${
                        speedTestStep >= 2
                          ? "text-white font-medium"
                          : "text-[#9a9a9a] opacity-40"
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>2. AI Speed Agent triggered (0.8s reaction)</span>
                    </div>

                    <div
                      className={`flex items-center gap-2.5 transition-opacity duration-300 ${
                        speedTestStep >= 3
                          ? "text-white font-medium"
                          : "text-[#9a9a9a] opacity-40"
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>3. Outbound call dispatched to {testLeadPhone}</span>
                    </div>

                    <div
                      className={`flex items-center gap-2.5 transition-opacity duration-300 ${
                        speedTestStep >= 4
                          ? "text-white font-semibold bg-white/10 p-2.5 rounded-[6px] border border-white/20"
                          : "text-[#9a9a9a] opacity-40"
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4 text-white" />
                      <span>
                        4. Connected! Caller qualified & booked on calendar!
                      </span>
                    </div>
                  </div>

                  {speedTestStep === 4 && (
                    <button
                      onClick={() => {
                        setSpeedTestRunning(false);
                        setSpeedTestStep(0);
                      }}
                      className="btn btn-ghost w-full h-[36px] mt-2 text-xs font-medium"
                    >
                      Reset Test
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

