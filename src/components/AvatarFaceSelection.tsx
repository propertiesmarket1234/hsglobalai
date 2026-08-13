"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export interface AvatarOption {
  id: string;
  name: string;
  category: string;
  badge: string;
  description: string;
  imageSrc: string;
}

const avatarOptions: AvatarOption[] = [
  {
    id: "einstein",
    name: "Albert Einstein",
    category: "Historical Genius & Educator",
    badge: "Education & Science",
    description: "Interactive historical persona with physics & philosophical knowledge base.",
    imageSrc: "/images/avatars/albert_einstein.png",
  },
  {
    id: "cleopatra",
    name: "Cleopatra",
    category: "Historical Queen & Cultural Guide",
    badge: "Museums & Culture",
    description: "Engaging ancient history expert for galleries, heritage sites & museum exhibits.",
    imageSrc: "/images/avatars/cleopatra.png",
  },
  {
    id: "kalam",
    name: "Dr. APJ Abdul Kalam",
    category: "Scientific Mentor & Inspiration",
    badge: "Science & Vision",
    description: "Inspirational educational avatar for universities, science centers & youth forums.",
    imageSrc: "/images/avatars/apj_abdul_kalam.png",
  },
  {
    id: "asian-lady",
    name: "Mei Lin",
    category: "Asian Customer Success Lead",
    badge: "Customer Relations",
    description: "Fluent Mandarin & English multi-lingual concierge for luxury retail & banking.",
    imageSrc: "/images/avatars/asian_lady.png",
  },
  {
    id: "executive-lady",
    name: "Victoria Vance",
    category: "Corporate Advisor & Wealth Lead",
    badge: "Real Estate & Banking",
    description: "Sophisticated corporate avatar for VIP lounges, financial advisory & governance.",
    imageSrc: "/images/avatars/executive_lady.png",
  },
  {
    id: "tata",
    name: "Ratan Tata",
    category: "Industrialist & Philanthropist",
    badge: "Business & Vision",
    description: "Visionary business leader avatar guiding corporate strategy, innovation, and ethical leadership.",
    imageSrc: "/images/avatars/ratan_tata.png",
  },
  {
    id: "business-events",
    name: "Tariq Al-Mansoor",
    category: "Business Events & Summit Host",
    badge: "Business Events",
    description: "Multilingual Middle Eastern executive avatar for international trade expos & VIP summits.",
    imageSrc: "/images/avatars/museum_guide.png",
  },
];

export default function AvatarFaceSelection() {
  const [selectedId, setSelectedId] = useState<string>("executive-lady");

  const selectedAvatar =
    avatarOptions.find((a) => a.id === selectedId) || avatarOptions[4];

  const totalCards = avatarOptions.length;
  const centerIndex = (totalCards - 1) / 2; // 3

  return (
    <section className="relative overflow-hidden bg-[#07080a] px-4 sm:px-6 py-24 sm:py-32 text-white border-t border-white/10">
      {/* Ambient Glow Effects matching site brand theme */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[850px] rounded-full bg-gradient-to-r from-cyan-600/20 via-sky-600/15 to-cyan-600/20 blur-[160px]" />
      <div className="pointer-events-none absolute left-1/2 bottom-10 -translate-x-1/2 h-[220px] w-[600px] rounded-full bg-cyan-500/15 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(6,182,212,0.25)]">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Interactive Digital Humans
            </span>
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Create the perfect face for{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-500 bg-clip-text text-transparent">
              your business.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
            Real-time talking avatars that engage and connect with your audience.
          </p>
        </motion.div>

        {/* FANNED CARD DECK CONTAINER (Matching Image 1 Pattern) */}
        <div className="mt-14 sm:mt-20 relative flex items-center justify-center min-h-[440px] sm:min-h-[500px] pt-8 pb-12 overflow-visible">
          <div className="relative flex items-center justify-center w-full max-w-6xl">
            {avatarOptions.map((avatar, idx) => {
              const isSelected = avatar.id === selectedId;
              const offsetFromCenter = idx - centerIndex; // -3, -2, -1, 0, 1, 2, 3

              // Clean Fanned Arc Geometry calculation (matching Image 1)
              const baseRotation = offsetFromCenter * 6.5; // -19.5 to +19.5 deg tilt
              const arcY = Math.abs(offsetFromCenter) * Math.abs(offsetFromCenter) * 6; // Slight arc curve upward/downward

              return (
                <motion.div
                  key={avatar.id}
                  onMouseEnter={() => setSelectedId(avatar.id)}
                  onClick={() => setSelectedId(avatar.id)}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.06 }}
                  style={{
                    zIndex: isSelected ? 50 : 10 + (3 - Math.abs(offsetFromCenter)),
                    transformOrigin: "50% 110%",
                    transform: isSelected
                      ? `translateY(-32px) scale(1.12) rotate(0deg)`
                      : `translateY(${arcY}px) scale(0.96) rotate(${baseRotation}deg)`,
                  }}
                  className={`group relative cursor-pointer select-none transition-all duration-500 ease-out -mx-3 sm:-mx-5 md:-mx-7 lg:-mx-8 ${
                    isSelected
                      ? "drop-shadow-[0_0_35px_rgba(6,182,212,0.6)]"
                      : "opacity-85 hover:opacity-100 hover:scale-100"
                  }`}
                >
                  {/* Outer Card Frame - Light Off-White Background matching Image 1 */}
                  <div
                    className={`relative w-[150px] h-[250px] sm:w-[185px] sm:h-[300px] md:w-[205px] md:h-[330px] overflow-hidden rounded-[24px] transition-all duration-500 bg-gradient-to-b from-[#f2f4f7] via-[#e5e7ea] to-[#d6d9de] shadow-xl ${
                      isSelected
                        ? "ring-4 ring-cyan-400 ring-offset-2 ring-offset-black/80 shadow-2xl scale-[1.02]"
                        : "border border-white/60 hover:border-cyan-400/60"
                    }`}
                  >
                    {/* Avatar Image (Half-body Bust Portrait) */}
                    <Image
                      src={avatar.imageSrc}
                      alt={avatar.name}
                      fill
                      priority={idx < 4}
                      sizes="(max-width: 768px) 150px, 205px"
                      className={`object-cover object-top transition-transform duration-700 ${
                        isSelected ? "scale-105" : "group-hover:scale-105"
                      }`}
                    />

                    {/* Subtle Bottom Vignette for text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                    {/* DARK PILL BADGE (Image 1 pattern: active card displays dark badge at bottom) */}
                    <AnimatePresence>
                      {isSelected ? (
                        <motion.div
                          key="pill-badge"
                          initial={{ opacity: 0, scale: 0.85, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.85, y: 6 }}
                          transition={{ duration: 0.25 }}
                          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 w-[85%] text-center"
                        >
                          <span className="inline-block w-full truncate rounded-full bg-black/85 border border-white/20 px-3.5 py-1.5 text-[11px] sm:text-xs font-semibold text-white shadow-xl backdrop-blur-md tracking-wide">
                            {avatar.badge}
                          </span>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="hover-name"
                          className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 w-[85%] text-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        >
                          <span className="inline-block w-full truncate rounded-full bg-black/75 border border-white/10 px-2.5 py-1 text-[10px] font-medium text-gray-200 backdrop-blur-sm">
                            {avatar.name}
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* SELECTED AVATAR SPOTLIGHT PANEL BELOW FAN */}
        <motion.div
          key={selectedAvatar.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-8 sm:mt-12 mx-auto max-w-3xl rounded-3xl border border-cyan-500/30 bg-neutral-950/90 p-6 sm:p-8 backdrop-blur-2xl shadow-[0_0_40px_rgba(6,182,212,0.15)]"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
                <span className="h-3 w-3 rounded-full bg-cyan-400 animate-pulse" />
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {selectedAvatar.name}
                </h3>
                <span className="rounded-full border border-cyan-500/40 bg-cyan-500/15 px-3 py-0.5 text-[11px] font-extrabold text-cyan-300 uppercase font-mono tracking-wider">
                  {selectedAvatar.badge}
                </span>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-gray-300 leading-relaxed max-w-xl">
                {selectedAvatar.description}
              </p>
            </div>

            <Link
              href="/contact"
              className="shrink-0 rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-cyan-600 px-7 py-3.5 text-xs sm:text-sm font-bold text-white shadow-xl transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
            >
              Deploy {selectedAvatar.name} →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
