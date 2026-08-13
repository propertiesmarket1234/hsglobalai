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
  const [inputVal, setInputVal] = useState<string>("");
  const [chatMessages, setChatMessages] = useState<{ sender: "user" | "bot"; text: string }[]>([]);

  const activeFeature = features.find((f) => f.id === activeTab) || features[0];

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    const feature = features.find((f) => f.id === id);
    if (feature) {
      setChatMessages([
        { sender: "user", text: feature.userPrompt },
        { sender: "bot", text: feature.botReply },
      ]);
    }
  };

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputVal.trim()) return;

    const userText = inputVal;
    setInputVal("");

    setChatMessages((prev) => [...prev, { sender: "user", text: userText }]);

    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: `Thank you for asking about "${userText}". Our conversational avatars process requests in real-time with sub-200ms latency.`,
        },
      ]);
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
    <section className="relative overflow-hidden bg-black px-6 py-28 text-white border-b border-white/10">
      {/* Background cyan ambient light */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[1000px] rounded-full bg-cyan-900/15 blur-[170px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/60 px-4 py-1.5 backdrop-blur-md mb-4 shadow-[0_0_20px_rgba(6,182,212,0.25)]">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-300">
              Interactive Avatar AI
            </span>
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl">
            Real-time{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-500 bg-clip-text text-transparent">
              conversational avatars
            </span>{" "}
            with memory
          </h2>

          <p className="mt-4 text-base leading-8 text-gray-300 sm:text-lg">
            Extract valuable insights from every conversation and interact with your visitors exactly the way you want.
          </p>
        </div>

        {/* Top Horizontal Feature Selector Bar */}
        <div className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {features.map((feature) => {
            const isActive = activeTab === feature.id;
            return (
              <button
                key={feature.id}
                onClick={() => handleTabClick(feature.id)}
                className={`group text-left transition-all duration-300 rounded-2xl p-4 border backdrop-blur-xl relative overflow-hidden flex flex-col justify-between ${
                  isActive
                    ? "border-cyan-400 bg-neutral-900/90 shadow-[0_0_30px_rgba(6,182,212,0.3)]"
                    : "border-white/10 bg-neutral-950/60 hover:border-cyan-500/40 hover:bg-neutral-900/40"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFeatureBar"
                    className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-sky-500"
                  />
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">{feature.icon}</span>
                    <span
                      className={`text-[9px] font-mono font-semibold uppercase tracking-wider rounded-full px-2 py-0.5 border ${
                        isActive
                          ? "border-cyan-400/40 bg-cyan-950 text-cyan-300"
                          : "border-white/10 bg-white/5 text-gray-400"
                      }`}
                    >
                      {feature.badge}
                    </span>
                  </div>
                  <h3
                    className={`text-sm font-bold transition-colors ${
                      isActive ? "text-cyan-300" : "text-white group-hover:text-cyan-400"
                    }`}
                  >
                    {feature.title}
                  </h3>
                </div>

                <p className="mt-2 text-[11px] leading-relaxed text-gray-400 line-clamp-2">
                  {feature.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* HUGE PROMINENT FULL-SIZE LADY AVATAR VIDEO SHOWCASE */}
        <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-3xl border border-cyan-500/40 bg-neutral-950 p-3 backdrop-blur-2xl shadow-[0_0_80px_rgba(6,182,212,0.25)]">
          <div className="relative aspect-[16/9] md:aspect-[21/9] min-h-[520px] md:min-h-[620px] w-full overflow-hidden rounded-2xl bg-black">
            {/* Real-time Speaking Lady Avatar Video Stream */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover object-center filter brightness-100 contrast-105"
            >
              <source src="/talking-avatar-speaking.mp4" type="video/mp4" />
            </video>

            {/* Subtle Vignette Overlay for High-Contrast Readable Overlays */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/60" />

            {/* Top Left Live Status Badge */}
            <div className="absolute top-6 left-6 z-20 flex items-center gap-3 rounded-full border border-cyan-500/40 bg-black/80 px-4 py-2 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-500" />
              </span>
              <span className="text-xs font-mono font-bold tracking-widest text-cyan-300 uppercase">
                LIVE AI DIGITAL HUMAN STREAM
              </span>
            </div>

            {/* Real-Time Voice Equalizer */}
            <div className="absolute top-6 left-72 z-20 hidden md:flex items-center gap-2 rounded-full border border-cyan-500/30 bg-black/80 px-4 py-2 backdrop-blur-md">
              <div className="flex items-end gap-1 h-3.5">
                <span className="w-0.5 bg-cyan-400 animate-[bounce_1s_infinite_100ms] h-full" />
                <span className="w-0.5 bg-cyan-400 animate-[bounce_1s_infinite_300ms] h-2/3" />
                <span className="w-0.5 bg-cyan-400 animate-[bounce_1s_infinite_200ms] h-full" />
                <span className="w-0.5 bg-cyan-400 animate-[bounce_1s_infinite_400ms] h-1/2" />
              </div>
              <span className="text-xs font-mono font-semibold text-cyan-300 uppercase">
                SUB-200ms REAL-TIME VOICE
              </span>
            </div>

            {/* Bottom Left Mic Trigger Button ("Click to Speak") */}
            <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3">
              <div className="relative flex items-center justify-center">
                <span className="absolute h-14 w-14 rounded-full bg-cyan-500/30 animate-ping" />
                <button className="relative flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400 bg-cyan-950/90 text-cyan-300 shadow-[0_0_25px_rgba(6,182,212,0.6)] transition-transform hover:scale-110">
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
              <span className="rounded-full border border-cyan-500/30 bg-black/80 px-4 py-2 font-mono text-xs font-semibold text-cyan-300 backdrop-blur-md shadow-lg">
                Click to Speak with Avatar
              </span>
            </div>

            {/* Right Side Floating Interactive Glass Chat Overlay */}
            <div className="absolute top-6 right-6 bottom-6 z-20 w-80 md:w-96 flex flex-col rounded-2xl border border-white/20 bg-black/65 p-4 backdrop-blur-xl shadow-2xl">
              {/* Chat Header */}
              <div className="flex items-center justify-between border-b border-white/15 pb-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold tracking-wider text-cyan-400 uppercase">
                    CHAT INTERFACE
                  </span>
                  <span className="rounded-full bg-cyan-500/20 px-2.5 py-0.5 text-[10px] font-mono font-semibold text-cyan-300">
                    ONLINE
                  </span>
                </div>
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              {/* Chat Messages Body */}
              <div className="my-3 flex-1 overflow-y-auto space-y-3 pr-1 text-xs">
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

              {/* Chat Input Box */}
              <form onSubmit={handleSend} className="flex items-center gap-2 pt-2 border-t border-white/15">
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="Type a message..."
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
      </div>
    </section>
  );
}
