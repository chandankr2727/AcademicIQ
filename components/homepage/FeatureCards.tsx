"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import {
  Home,
  MessageSquare,
  Video,
  UsersRound,
  Bot,
  UserCheck,
  BookOpen,
  Heart,
  Network,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { exploreFeatures } from "@/constants/features";
import { cn } from "@/lib/utils";

const iconComponents: Record<string, LucideIcon> = {
  Home,
  MessageSquare,
  Video,
  UsersRound,
  Bot,
  UserCheck,
  BookOpen,
  Heart,
  Network,
};

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export function FeatureCards() {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-[1536px] px-4 sm:px-6 lg:px-10">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl font-black text-navy sm:text-4xl">
            Explore What AcademIQ Offers
          </h2>
          <p className="mt-3 mx-auto max-w-2xl text-[16px] leading-relaxed text-muted-foreground">
            Discover the tools, support, and communities that power your virtual
            learning journey — all in one place.
          </p>
        </motion.div>

        {/* 3 × 3 grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
        >
          {exploreFeatures.map((feature, index) => {
            const IconComp = iconComponents[feature.icon];
            const num = String(index + 1).padStart(2, "0");

            return (
              <motion.div key={feature.id} variants={cardVariants}>
                <motion.div
                  whileHover={{
                    y: -5,
                    transition: { type: "spring", stiffness: 320, damping: 26 },
                  }}
                  className="h-full"
                >
                  <Link
                    href={feature.href ?? "#"}
                    className={cn(
                      "group flex h-full flex-col rounded-2xl border border-border bg-white p-6 lg:p-7",
                      "shadow-[0_1px_6px_rgba(15,23,42,0.06)]",
                      "transition-shadow duration-250 hover:border-slate-300 hover:shadow-[0_10px_32px_rgba(15,23,42,0.1)]"
                    )}
                  >
                    {/* Number + icon row */}
                    <div className="flex items-start justify-between">
                      <div
                        className={cn(
                          "flex h-12 w-12 items-center justify-center rounded-xl",
                          feature.iconBg ?? "bg-primary/10"
                        )}
                      >
                        {IconComp && (
                          <IconComp
                            className={cn(
                              "h-6 w-6",
                              feature.iconColor ?? "text-primary"
                            )}
                            aria-hidden="true"
                          />
                        )}
                      </div>
                      <span className="text-[13px] font-bold tabular-nums text-slate-200 select-none">
                        {num}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-4 text-[17px] font-bold leading-snug text-navy">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>

                    {/* CTA */}
                    <div className="mt-5 flex items-center gap-1.5 text-[14px] font-semibold text-primary">
                      Learn more
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </div>
                  </Link>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
