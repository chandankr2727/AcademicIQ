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

// Each card: its accent hex, soft background tint, gradient class for icon shadow
const palette: Record<string, { hex: string; soft: string; ring: string }> = {
  "one-channel": { hex: "#3b82f6", soft: "#eff6ff", ring: "rgba(59,130,246,0.18)" },
  threads: { hex: "#10b981", soft: "#ecfdf5", ring: "rgba(16,185,129,0.18)" },
  "study-sessions-feature": { hex: "#f43f5e", soft: "#fff1f2", ring: "rgba(244,63,94,0.18)" },
  "study-circle": { hex: "#a855f7", soft: "#faf5ff", ring: "rgba(168,85,247,0.18)" },
  "assist-feature": { hex: "#6366f1", soft: "#eef2ff", ring: "rgba(99,102,241,0.18)" },
  "tutoring-feature": { hex: "#14b8a6", soft: "#f0fdfa", ring: "rgba(20,184,166,0.18)" },
  library: { hex: "#6366f1", soft: "#eef2ff", ring: "rgba(99,102,241,0.18)" },
  community: { hex: "#ec4899", soft: "#fdf2f8", ring: "rgba(236,72,153,0.18)" },
  network: { hex: "#f97316", soft: "#fff7ed", ring: "rgba(249,115,22,0.18)" },
};

function ProgressDots({ progress }: { progress: number }) {
  return (
    <div className="flex items-center gap-1.5">
      {exploreFeatures.map((_, i) => {
        const active = progress >= i / (exploreFeatures.length - 1) - 0.02;
        return (
          <div
            key={i}
            className={cn(
              "rounded-full transition-all duration-300",
              active ? "bg-primary w-4 h-1.5" : "bg-slate-300 w-1.5 h-1.5"
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
  const [scrollRange, setScrollRange] = useState(1800);
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
      const excess = trackRef.current.scrollWidth - window.innerWidth + 60;
      setScrollRange(Math.max(100, excess));
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
    >
      <div
        className="sticky top-16 overflow-hidden flex flex-col bg-[#f8fbff]"
        style={{ height: winH - 64 }}
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="shrink-0 pt-8 pb-4 text-center px-4"
        >
          <h2 className="text-2xl font-black text-navy sm:text-3xl">
            Explore What AcademIQ Offers
          </h2>
          <p className="mt-3 text-base sm:text-lg text-muted-foreground">
            Every tool you need — study, teach, collaborate, and grow.
          </p>
        </motion.div>

        {/* Cards track — vertically centred, natural card height */}
        <div className="flex-1 flex items-center overflow-hidden">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex gap-6 pl-5 sm:pl-8 lg:pl-12 pr-10 will-change-transform"
          >
            {exploreFeatures.map((feature, index) => {
              const IconComp = iconComponents[feature.icon];
              const p = palette[feature.id] ?? { hex: "#64748b", soft: "#f8fafc", ring: "rgba(100,116,139,0.15)" };
              const num = String(index + 1).padStart(2, "0");

              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.38, delay: index * 0.03 }}
                  whileHover={{ y: -8, scale: 1.02, transition: { type: "spring", stiffness: 340, damping: 22 } }}
                  className="group relative w-[320px] min-w-[320px] flex flex-col rounded-3xl overflow-hidden cursor-pointer select-none bg-white"
                  style={{
                    background: `linear-gradient(145deg, #ffffff, ${p.soft})`,
                    border: `1px solid rgba(255,255,255,0.8)`,
                    boxShadow: `0 10px 30px -5px ${p.ring}, 0 0 0 1px ${p.hex}15`,
                  }}
                >
                  <div className="flex flex-col p-8 gap-6 h-full">

                    {/* Top row: white icon chip + number */}
                    <div className="flex items-center justify-between">
                      <motion.div
                        whileHover={{ scale: 1.12, rotate: -6 }}
                        transition={{ type: "spring", stiffness: 380, damping: 18 }}
                        className="flex h-16 w-16 items-center justify-center rounded-2xl"
                        style={{
                          background: `linear-gradient(135deg, #ffffff 0%, ${p.soft} 100%)`,
                          boxShadow: `
                            -4px -4px 8px rgba(255,255,255,0.9),
                            4px 4px 12px ${p.ring},
                            inset -2px -2px 4px rgba(0,0,0,0.04),
                            inset 2px 2px 4px rgba(255,255,255,0.9)
                          `,
                          border: `1px solid rgba(255,255,255,0.6)`
                        }}
                      >
                        {IconComp && (
                          <IconComp
                            weight="duotone"
                            size={32}
                            color={p.hex}
                            aria-hidden="true"
                            style={{ filter: `drop-shadow(2px 4px 4px ${p.ring})` }}
                          />
                        )}
                      </motion.div>
                      <span
                        className="text-[42px] font-black select-none leading-none"
                        style={{ color: `${p.hex}30` }}
                      >
                        {num}
                      </span>
                    </div>

                    {/* Text block */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold leading-snug text-navy">
                        {feature.title}
                      </h3>
                      <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>

                    {/* CTA */}
                    <Link
                      href={feature.href ?? "#"}
                      className="inline-flex items-center gap-1.5 text-[15px] font-bold transition-[gap] duration-200 group-hover:gap-2.5 mt-2"
                      style={{ color: p.hex }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      Learn more
                      <ArrowRight weight="bold" size={14} aria-hidden="true" />
                    </Link>
                  </div>

                  {/* Bottom glow bar on hover */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(90deg, ${p.hex}, ${p.hex}66)` }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Progress dots */}
        <div className="shrink-0 pb-6 flex flex-col items-center gap-2">
          <ProgressDots progress={progressVal} />
          <p className="text-sm font-medium text-slate-400">Scroll to explore all features</p>
        </div>
      </div>
    </section>
  );
}
