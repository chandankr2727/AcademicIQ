"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import {
  House,
  ChatCircle,
  VideoCamera,
  UsersThree,
  Robot,
  UserCircleCheck,
  BookOpen,
  Heart,
  Graph,
  ArrowRight,
  CheckCircle,
} from "@phosphor-icons/react";
import { exploreFeatures } from "@/constants/features";
import { cn } from "@/lib/utils";

const iconComponents: Record<string, React.ElementType> = {
  Home: House,
  MessageSquare: ChatCircle,
  Video: VideoCamera,
  UsersRound: UsersThree,
  Bot: Robot,
  UserCheck: UserCircleCheck,
  BookOpen: BookOpen,
  Heart: Heart,
  Network: Graph,
};

const palette: Record<string, { hex: string; soft: string; ring: string; tagBg: string; tagText: string }> = {
  "one-channel": { hex: "#3b82f6", soft: "#eff6ff", ring: "rgba(59,130,246,0.15)", tagBg: "#dbeafe", tagText: "#1d4ed8" },
  threads: { hex: "#10b981", soft: "#ecfdf5", ring: "rgba(16,185,129,0.15)", tagBg: "#d1fae5", tagText: "#065f46" },
  "study-sessions-feature": { hex: "#f43f5e", soft: "#fff1f2", ring: "rgba(244,63,94,0.15)", tagBg: "#ffe4e6", tagText: "#be123c" },
  "study-circle": { hex: "#a855f7", soft: "#faf5ff", ring: "rgba(168,85,247,0.15)", tagBg: "#ede9fe", tagText: "#6d28d9" },
  "assist-feature": { hex: "#6366f1", soft: "#eef2ff", ring: "rgba(99,102,241,0.15)", tagBg: "#e0e7ff", tagText: "#4338ca" },
  "tutoring-feature": { hex: "#14b8a6", soft: "#f0fdfa", ring: "rgba(20,184,166,0.15)", tagBg: "#ccfbf1", tagText: "#0f766e" },
  library: { hex: "#4f46e5", soft: "#eef2ff", ring: "rgba(79,70,229,0.15)", tagBg: "#e0e7ff", tagText: "#3730a3" },
  community: { hex: "#ec4899", soft: "#fdf2f8", ring: "rgba(236,72,153,0.15)", tagBg: "#fce7f3", tagText: "#9d174d" },
  network: { hex: "#f97316", soft: "#fff7ed", ring: "rgba(249,115,22,0.15)", tagBg: "#ffedd5", tagText: "#c2410c" },
};

const fallback = { hex: "#64748b", soft: "#f8fafc", ring: "rgba(100,116,139,0.12)", tagBg: "#f1f5f9", tagText: "#475569" };

function ProgressDots({ progress }: { progress: number }) {
  return (
    <div className="flex items-center gap-1.5" role="progressbar" aria-label="Feature scroll progress">
      {exploreFeatures.map((_, i) => {
        const active = progress >= i / (exploreFeatures.length - 1) - 0.02;
        return (
          <div
            key={i}
            className={cn(
              "rounded-full transition-all duration-300",
              active ? "bg-primary w-5 h-1.5" : "bg-slate-200 w-1.5 h-1.5"
            )}
          />
        );
      })}
    </div>
  );
}

export function FeatureCards() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(2200);
  const [winH, setWinH] = useState(700);
  const [progressVal, setProgressVal] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const update = () => {
      setWinH(window.innerHeight);
      if (!trackRef.current) return;
      const excess = trackRef.current.scrollWidth - window.innerWidth + 80;
      setScrollRange(Math.max(200, excess));
    };
    const t = setTimeout(update, 120);
    window.addEventListener("resize", update);
    return () => { clearTimeout(t); window.removeEventListener("resize", update); };
  }, []);

  useEffect(() => scrollYProgress.on("change", setProgressVal), [scrollYProgress]);

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: winH + scrollRange }}
      aria-labelledby="explore-features-heading"
    >
      <div
        className="sticky top-16 overflow-hidden flex flex-col bg-[#f8fbff]"
        style={{ height: winH - 64 }}
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="shrink-0 pt-8 pb-4 text-center px-4"
        >
          <h2 id="explore-features-heading" className="typo-h2 font-black text-navy tracking-tight">
            Explore What AcademIQ Offers
          </h2>
          <p className="mt-3 text-[1.0625rem] sm:text-[1.125rem] text-slate-600 font-normal leading-[1.8] max-w-[600px] mx-auto">
            Every tool you need to study, teach, collaborate, and grow.
          </p>
        </motion.div>

        {/* Scrolling card track */}
        <div className="flex-1 flex items-start overflow-hidden py-4">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex gap-5 pl-5 sm:pl-8 lg:pl-12 pr-12 will-change-transform items-start"
          >
            {exploreFeatures.map((feature, index) => {
              const IconComp = iconComponents[feature.icon];
              const p = palette[feature.id] ?? fallback;

              return (
                <motion.article
                  key={feature.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  whileHover={{
                    y: -6,
                    scale: 1.015,
                    transition: { type: "spring", stiffness: 320, damping: 22 },
                  }}
                  // Mobile: ~1 card visible | sm/tablet: ~2 cards | lg/desktop: 3 cards
                  className="group relative flex flex-col
                    w-[80vw] min-w-[80vw]
                    sm:w-[42vw] sm:min-w-[42vw]
                    lg:w-[30vw] lg:min-w-[30vw]
                    rounded-3xl cursor-pointer select-none"
                  style={{
                    background: `linear-gradient(150deg, #ffffff 0%, ${p.soft} 100%)`,
                    border: `1px solid ${p.hex}22`,
                    boxShadow: `0 8px 28px -4px ${p.ring}, 0 0 0 1px ${p.hex}12`,
                  }}
                >
                  {/* Card body */}
                  <div className="flex flex-col p-5 sm:p-6 gap-4 flex-1">

                    {/* Header Row: Icon + Title + Tag */}
                    <div className="flex items-center justify-center gap-3">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        transition={{ type: "spring", stiffness: 380, damping: 18 }}
                        className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl"
                        style={{
                          background: `linear-gradient(135deg, #ffffff 0%, ${p.soft} 100%)`,
                          boxShadow: `
                            -3px -3px 7px rgba(255,255,255,0.95),
                            3px 3px 10px ${p.ring},
                            inset -1px -1px 3px rgba(0,0,0,0.03),
                            inset 1px 1px 3px rgba(255,255,255,0.9)
                          `,
                          border: `1px solid rgba(255,255,255,0.7)`,
                        }}
                        aria-hidden="true"
                      >
                        {IconComp && (
                          <IconComp
                            weight="duotone"
                            size={24}
                            color={p.hex}
                            style={{ filter: `drop-shadow(1px 2px 3px ${p.ring})` }}
                          />
                        )}
                      </motion.div>

                      <div className="flex items-center gap-2">
                        <h3 className="text-[1.125rem] sm:text-[1.25rem] font-black text-navy leading-snug text-center tracking-tight">
                          {feature.title}
                        </h3>
                        {feature.tag && (
                          <span
                            className="inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-wider leading-none shrink-0"
                            style={{ background: p.tagBg, color: p.tagText }}
                          >
                            {feature.tag}
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-[0.9375rem] sm:text-base leading-[1.75] text-slate-600 font-normal">
                      {feature.description}
                    </p>

                    {/* Row 3: bullet feature list */}
                    {feature.bullets && feature.bullets.length > 0 && (
                      <ul className="flex flex-col gap-2">
                        {feature.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-start gap-2.5 text-[0.9375rem] sm:text-base font-medium text-slate-700 leading-[1.7]"
                          >
                            <CheckCircle
                              weight="duotone"
                              size={18}
                              className="shrink-0 mt-[1px]"
                              color={p.hex}
                              aria-hidden="true"
                            />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Row 4: CTA link */}
                    <div className="pt-5 border-t mt-auto" style={{ borderColor: `${p.hex}18` }}>
                      <Link
                        href={feature.href ?? "#"}
                        className="inline-flex items-center gap-1.5 text-[0.9375rem] sm:text-base font-bold transition-all duration-200 group-hover:gap-3"
                        style={{ color: p.hex }}
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`Learn more about ${feature.title}`}
                      >
                        Learn more
                        <ArrowRight weight="bold" size={15} aria-hidden="true" />
                      </Link>
                    </div>
                  </div>

                  {/* Bottom accent glow bar on hover */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-3xl"
                    style={{ background: `linear-gradient(90deg, ${p.hex}, ${p.hex}55)` }}
                    aria-hidden="true"
                  />
                </motion.article>
              );
            })}
          </motion.div>
        </div>

        {/* Progress dots */}
        <div className="shrink-0 pb-5 flex flex-col items-center gap-2">
          <ProgressDots progress={progressVal} />
          <p className="text-sm font-semibold text-slate-800">
            Scroll to explore all {exploreFeatures.length} features
          </p>
        </div>
      </div>
    </section>
  );
}
