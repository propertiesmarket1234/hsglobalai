"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface FeatureTab {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  badge: string;
  userPrompt: string;
  botReply: string;
}

interface LadyOption {
  id: string;
  name: string;
  role: string;
  imageSrc: string;
}

const ladyOptions: LadyOption[] = [
  {
    id: "full-presenter",
    name: "Elena Rostova",
    role: "AI Chief Presenter",
    imageSrc: "/images/avatars/full_digital_human_presenter.png",
  },
  {
    id: "modern-presenter",
    name: "Sophia Vance",
    role: "Digital Executive Host",
    imageSrc: "/images/avatars/modern_digital_human_presenter.png",
  },
  {
    id: "mei-lin",
    name: "Mei Lin",
    role: "Global Concierge Lead",
    imageSrc: "/images/avatars/asian_lady.png",
  },
  {
    id: "victoria",
    name: "Victoria Vance",
    role: "Corporate Wealth Advisor",
    imageSrc: "/images/avatars/executive_lady.png",
  },
];

const features: FeatureTab[] = [
  {
    id: "knowledge",
    title: "Knowledge",
    subtitle: "Feed it your data. It speaks as your expert with instant document intelligence.",
    icon: "🧠",
    badge: "Built-in RAG",
    userPrompt: "How does it connect to our enterprise knowledge base?",
    botReply:
      "I ingest PDFs, internal documentation, and APIs via built-in RAG with 100% offline, air-gapped security.",
  },
  {
    id: "appearance",
    title: "Appearance",
    subtitle: "Face, hair, wardrobe. Every detail tailored to your brand brief.",
    icon: "👁️",
    badge: "Hyper-Realism",
    userPrompt: "Can we customize the avatar's face and wardrobe?",
    botReply:
      "Yes! Hair, facial structure, brand uniforms, accessories, and 3D environments are fully customizable.",
  },
  {
    id: "personality",
    title: "Personality",
    subtitle: "You set the character. It holds context and brand safety every time.",
    icon: "✨",
    badge: "Brand Aligned",
    userPrompt: "How do you ensure brand consistency across interactions?",
    botReply:
      "Custom neural system prompts enforce exact brand tone, empathetic responses, and strict guardrails.",
  },
  {
    id: "voice",
    title: "Voice",
    subtitle: "Cloned or synthetic. Multilingual support with sub-200ms real-time audio.",
    icon: "🎙️",
    badge: "Sub-200ms Voice",
    userPrompt: "What is the voice response latency?",
    botReply:
      "Sub-200ms ultra-low latency voice synthesis supporting 23+ spoken languages and custom voice cloning.",
  },
  {
    id: "memory",
    title: "Conversational Memory",
    subtitle: "Extract insights from every conversation and retain context across sessions.",
    icon: "💾",
    badge: "Session Memory",
    userPrompt: "Tell me more about digital human deployment packages.",
    botReply:
      "HS Global AI offers complete packages: On-Device Kiosk, 3D Hologram Box, and Spatial Display screens.",
  },
];

export default function RealtimeTalkingAvatars() {
  const [activeTab, setActiveTab] = useState<string>("knowledge");
  const [selectedLadyId, setSelectedLadyId] = useState<string>("full-presenter");
  const [inputVal, setInputVal] = useState<string>("");
  const [chatMessages, setChatMessages] = useState<{ sender: "user" | "bot"; text: string }[]>([]);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [isListening, setIsListening] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  const activeFeature = features.find((f) => f.id === activeTab) || features[0];
  const activeLady = ladyOptions.find((l) => l.id === selectedLadyId) || ladyOptions[0];

  // Speech Synthesis
  const speakResponse = (text: string) => {
    if (!soundEnabled) {
      setIsSpeaking(true);
      setTimeout(() => setIsSpeaking(false), 3800);
      return;
    }

    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      setIsSpeaking(true);
      setTimeout(() => setIsSpeaking(false), 3800);
      return;
    }

    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.95;
      utterance.pitch = 1.05;

      const voices = window.speechSynthesis.getVoices();
      const preferredVoice =
        voices.find(
          (v) =>
            v.lang.startsWith("en") &&
            (v.name.toLowerCase().includes("female") ||
              v.name.toLowerCase().includes("natural") ||
              v.name.toLowerCase().includes("samantha") ||
              v.name.toLowerCase().includes("zira") ||
              v.name.toLowerCase().includes("google"))
        ) || voices[0];

      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      window.speechSynthesis.speak(utterance);
    } catch (err) {
      setIsSpeaking(true);
      setTimeout(() => setIsSpeaking(false), 3800);
    }
  };

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    const feature = features.find((f) => f.id === id);
    if (feature) {
      setChatMessages([
        { sender: "user", text: feature.userPrompt },
        { sender: "bot", text: feature.botReply },
      ]);
      speakResponse(feature.botReply);
    }
  };

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputVal.trim()) return;

    const userText = inputVal;
    setInputVal("");

    setChatMessages((prev) => [...prev, { sender: "user", text: userText }]);
    setIsSpeaking(false);

    setTimeout(() => {
      const botReplyText = `Thank you for asking about "${userText}". Our conversational avatars process requests in real-time with sub-200ms latency and interactive response.`;
      setChatMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: botReplyText,
        },
      ]);
      speakResponse(botReplyText);
    }, 600);
  };

  const handleMicClick = () => {
    if (isSpeaking) {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
      setIsSpeaking(false);
      setIsListening(false);
      return;
    }

    if (
      typeof window !== "undefined" &&
      ("webkitSpeechRecognition" in window || "SpeechRecognition" in window)
    ) {
      try {
        const SpeechRecognition =
          (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = "en-US";

        setIsListening(true);

        recognition.onresult = (event: any) => {
          const spokenText = event.results[0][0].transcript;
          setIsListening(false);
          if (spokenText) {
            triggerUserMessage(spokenText);
          }
        };

        recognition.onerror = () => {
          setIsListening(false);
          triggerUserMessage("Can you demonstrate your real-time conversational AI avatar capabilities?");
        };

        recognition.onend = () => {
          setIsListening(false);
        };

        recognition.start();
        return;
      } catch (e) {
        console.log("Speech recognition fallback");
      }
    }

    setIsListening(true);
    setTimeout(() => {
      setIsListening(false);
      triggerUserMessage("Can you demonstrate your real-time conversational AI avatar capabilities?");
    }, 1200);
  };

  const triggerUserMessage = (userText: string) => {
    setChatMessages((prev) => [...prev, { sender: "user", text: userText }]);
    setIsSpeaking(false);

    setTimeout(() => {
      const botText = `I hear you! Our real-time digital humans process live speech with sub-200ms ultra-low latency and full natural response.`;
      setChatMessages((prev) => [...prev, { sender: "bot", text: botText }]);
      speakResponse(botText);
    }, 600);
  };

  const displayMessages =
    chatMessages.length > 0
      ? chatMessages
      : [
          { sender: "user" as const, text: activeFeature.userPrompt },
          { sender: "bot" as const, text: activeFeature.botReply },
        ];

  return (
    <section className="relative overflow-hidden bg-black px-4 sm:px-6 py-24 sm:py-32 text-white border-b border-white/10">
      {/* Background cyan ambient light */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[1000px] rounded-full bg-cyan-900/15 blur-[170px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/60 px-4 py-1.5 backdrop-blur-md mb-4 shadow-[0_0_20px_rgba(6,182,212,0.25)]">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-300">
              Interactive Avatar AI
            </span>
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl">
            Real-time{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-500 bg-clip-text text-transparent">
              talking avatars
            </span>{" "}
            with memory
          </h2>

          <p className="mt-4 text-base leading-8 text-gray-300 sm:text-lg">
            Extract valuable insights from every conversation and interact with your visitors exactly the way you want.
          </p>
        </div>

        {/* LADY AVATAR SELECTOR CONTROL BAR */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-neutral-950/80 p-3.5 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase text-cyan-300 tracking-wider">
              Select Avatar Presenter:
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {ladyOptions.map((lady) => {
              const isSelected = lady.id === selectedLadyId;
              return (
                <button
                  key={lady.id}
                  onClick={() => setSelectedLadyId(lady.id)}
                  className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
                    isSelected
                      ? "border border-cyan-400 bg-cyan-950 text-cyan-200 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                      : "border border-white/15 bg-black/60 text-gray-400 hover:border-cyan-500/40 hover:text-white"
                  }`}
                >
                  <span
                    className={`h-2 w-2 rounded-full ${
                      isSelected ? "bg-cyan-400 animate-pulse" : "bg-gray-500"
                    }`}
                  />
                  <span>{lady.name}</span>
                  <span className="text-[10px] text-gray-400 font-mono">({lady.role})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* MAIN 2-COLUMN UNOBSTRUCTED LAYOUT (7 Cols Full Avatar | 5 Cols Side Chat & Features) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT COLUMN: 100% FULL UNCOVERED AVATAR SHOWCASE FRAME (7/12 Width) */}
          <div className="lg:col-span-7 relative min-h-[540px] sm:min-h-[620px] rounded-3xl border border-cyan-500/40 bg-neutral-950 overflow-hidden backdrop-blur-2xl shadow-[0_0_80px_rgba(6,182,212,0.25)] flex flex-col justify-between p-6">
            
            {/* Full Uncovered Avatar Presenter Image */}
            <div className="absolute inset-0 z-0 overflow-hidden bg-black">
              <Image
                src={activeLady.imageSrc}
                alt={activeLady.name}
                fill
                priority
                className="object-cover object-top filter brightness-105 contrast-105 transition-all duration-500"
              />
              {/* Soft Gradient Vignette for crisp badges & status readability */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 z-10" />
            </div>

            {/* TOP HEADER STATUS BADGES (Cleanly positioned at top, 0 covering avatar face) */}
            <div className="relative z-20 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3 rounded-full border border-cyan-500/40 bg-black/85 px-4 py-2 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-500" />
                </span>
                <span className="text-xs font-mono font-bold tracking-widest text-cyan-300 uppercase">
                  LIVE AI DIGITAL HUMAN STREAM
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-cyan-500/40 bg-black/85 px-4 py-2 backdrop-blur-md">
                <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider">
                  {activeLady.name}
                </span>
              </div>
            </div>

            {/* BOTTOM BAR: MIC & AUDIO CONTROLS (Cleanly positioned at bottom edge, 0 covering avatar face/body) */}
            <div className="relative z-20 flex items-center justify-between gap-4 pt-4 border-t border-white/10 backdrop-blur-md bg-black/60 -mx-6 -mb-6 p-6">
              <div className="flex items-center gap-3">
                <div className="relative flex items-center justify-center">
                  <span
                    className={`absolute h-14 w-14 rounded-full transition-all ${
                      isListening
                        ? "bg-emerald-400/50 animate-ping"
                        : isSpeaking
                        ? "bg-cyan-400/40 animate-ping"
                        : "bg-cyan-500/20 animate-pulse"
                    }`}
                  />
                  <button
                    onClick={handleMicClick}
                    title={isListening ? "Listening..." : "Click to speak with AI avatar"}
                    className={`relative flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 hover:scale-110 shadow-xl ${
                      isListening
                        ? "border-emerald-400 bg-emerald-950/90 text-emerald-300 shadow-[0_0_30px_rgba(52,211,153,0.8)]"
                        : isSpeaking
                        ? "border-cyan-300 bg-cyan-900/90 text-cyan-200 shadow-[0_0_30px_rgba(6,182,212,0.8)]"
                        : "border-cyan-400 bg-cyan-950/90 text-cyan-300 shadow-[0_0_25px_rgba(6,182,212,0.6)]"
                    }`}
                  >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                      />
                    </svg>
                  </button>
                </div>

                <button
                  onClick={handleMicClick}
                  className="rounded-full border border-cyan-500/40 bg-black/85 px-4 py-2 font-mono text-xs font-bold text-cyan-300 backdrop-blur-md shadow-lg hover:border-cyan-400 transition-colors"
                >
                  {isListening
                    ? "LISTENING TO VOICE..."
                    : isSpeaking
                    ? "AVATAR SPEAKING..."
                    : "Click to Speak with Avatar"}
                </button>
              </div>

              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                title={soundEnabled ? "Mute voice sound" : "Enable voice sound"}
                className="rounded-full border border-white/20 bg-black/80 px-3.5 py-2 font-mono text-xs text-gray-300 hover:text-white backdrop-blur-md transition-colors"
              >
                {soundEnabled ? "🔊 Voice On" : "🔇 Muted"}
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: DEDICATED INTERACTIVE CHAT & FEATURE CONTROLS PANEL (5/12 Width) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-white/15 bg-neutral-950/90 p-6 backdrop-blur-xl shadow-2xl space-y-5">
            
            {/* Top Feature Selector Tabs */}
            <div>
              <span className="block text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-400 mb-3">
                SELECT AVATAR CAPABILITY:
              </span>
              <div className="grid grid-cols-2 gap-2">
                {features.map((feature) => {
                  const isActive = activeTab === feature.id;
                  return (
                    <button
                      key={feature.id}
                      onClick={() => handleTabClick(feature.id)}
                      className={`text-left p-3 rounded-xl border transition-all text-xs font-medium ${
                        isActive
                          ? "border-cyan-400 bg-cyan-950/80 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                          : "border-white/10 bg-neutral-900/60 text-gray-300 hover:border-cyan-500/40 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-1.5">
                        <span>{feature.icon}</span>
                        <span className="font-bold">{feature.title}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Chat Interface Header */}
            <div className="flex items-center justify-between border-b border-white/15 pb-3 pt-2">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold tracking-wider text-cyan-400 uppercase">
                  CHAT INTERFACE
                </span>
                <span className="rounded-full bg-cyan-500/20 px-2.5 py-0.5 text-[10px] font-mono font-semibold text-cyan-300">
                  ONLINE
                </span>
              </div>
              <div
                className={`h-2.5 w-2.5 rounded-full ${
                  isSpeaking
                    ? "bg-cyan-300 animate-ping"
                    : isListening
                    ? "bg-emerald-400 animate-ping"
                    : "bg-emerald-400 animate-pulse"
                }`}
              />
            </div>

            {/* Chat Message Stream */}
            <div className="flex-1 overflow-y-auto space-y-3 pr-1 min-h-[220px] max-h-[300px] text-xs">
              <AnimatePresence mode="popLayout">
                {displayMessages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex flex-col ${
                      msg.sender === "user" ? "items-end" : "items-start"
                    }`}
                  >
                    <div
                      className={`max-w-[92%] rounded-2xl px-4 py-3 font-sans leading-relaxed ${
                        msg.sender === "user"
                          ? "bg-gradient-to-r from-cyan-500 to-sky-600 font-medium text-white shadow-[0_0_15px_rgba(6,182,212,0.3)] rounded-br-none"
                          : "border border-white/15 bg-neutral-900/90 text-gray-200 rounded-bl-none"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Chat Prompt Input Box */}
            <form onSubmit={handleSend} className="flex items-center gap-2 pt-2 border-t border-white/15">
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Type a message to avatar..."
                className="w-full rounded-full border border-white/20 bg-neutral-900/80 px-4 py-2.5 text-xs text-white placeholder-gray-400 backdrop-blur-sm focus:border-cyan-400 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 px-5 py-2.5 text-xs font-bold text-black transition-all hover:scale-105 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
              >
                Send
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}
