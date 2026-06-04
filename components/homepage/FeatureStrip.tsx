"use client";

import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import {
  Globe,
  Monitor,
  Shield,
  Headphones,
  Trophy,
} from "lucide-react";
import { featureStrip } from "@/constants/features";
import { cn } from "@/lib/utils";

const iconMap: Record<string, ReactNode> = {
  Globe:      <Globe      className="h-6 w-6 text-primary" aria-hidden="true" />,
  Accessible: <Monitor    className="h-6 w-6 text-primary" aria-hidden="true" />,
  Shield:     <Shield     className="h-6 w-6 text-primary" aria-hidden="true" />,
  Headphones: <Headphones className="h-6 w-6 text-primary" aria-hidden="true" />,
  Trophy:     <Trophy     className="h-6 w-6 text-primary" aria-hidden="true" />,
};

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export function FeatureStrip() {
  return (
    <section className="relative z-10 border-b border-border bg-white px-5 lg:px-10">
      <div className="mx-auto max-w-[1536px]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="py-7"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {featureStrip.map((feature, i) => (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                className={cn(
                  "flex items-center gap-4 px-4 first:pl-0 last:pr-0",
                  "border-b border-border pb-5 last:border-b-0 last:pb-0",
                  "sm:border-b-0 sm:pb-0 sm:pr-6",
                  i < featureStrip.length - 1 && "sm:border-r"
                )}
              >
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 6 }}
                  transition={{ type: "spring", stiffness: 360, damping: 18 }}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10"
                >
                  {iconMap[feature.icon]}
                </motion.div>
                <div>
                  <h3 className="text-[15px] font-bold leading-tight text-navy">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-[14px] leading-snug text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
