"use client";

import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import {
  Globe,
  Laptop,
  ShieldCheck,
  Headset,
  Trophy,
} from "@phosphor-icons/react";
import { featureStrip } from "@/constants/features";
import { cn } from "@/lib/utils";

const iconMap: Record<string, { icon: ReactNode; gradient: string; shadow: string }> = {
  Globe: {
    icon: <Globe weight="duotone" size={26} color="#fff" />,
    gradient: "bg-gradient-to-br from-blue-400 to-blue-600",
    shadow: "shadow-blue-200",
  },
  Accessible: {
    icon: <Laptop weight="duotone" size={26} color="#fff" />,
    gradient: "bg-gradient-to-br from-violet-400 to-violet-600",
    shadow: "shadow-violet-200",
  },
  Shield: {
    icon: <ShieldCheck weight="duotone" size={26} color="#fff" />,
    gradient: "bg-gradient-to-br from-emerald-400 to-emerald-600",
    shadow: "shadow-emerald-200",
  },
  Headphones: {
    icon: <Headset weight="duotone" size={26} color="#fff" />,
    gradient: "bg-gradient-to-br from-orange-400 to-orange-500",
    shadow: "shadow-orange-200",
  },
  Trophy: {
    icon: <Trophy weight="duotone" size={26} color="#fff" />,
    gradient: "bg-gradient-to-br from-amber-400 to-amber-500",
    shadow: "shadow-amber-200",
  },
};

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" },
  },
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
          className="py-5"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {featureStrip.map((feature, i) => {
              const entry = iconMap[feature.icon];
              return (
                <motion.div
                  key={feature.id}
                  variants={itemVariants}
                  className={cn(
                    "flex items-center gap-4 px-4 lg:first:pl-0 lg:last:pr-0",
                    "border-b border-border pb-5 last:border-b-0 last:pb-0",
                    "sm:border-b-0 sm:pb-0 sm:pr-6",
                    i < featureStrip.length - 1 && "sm:border-r"
                  )}
                >
                  <motion.div
                    whileHover={{ scale: 1.12, rotate: 6, y: -2 }}
                    transition={{ type: "spring", stiffness: 360, damping: 18 }}
                    className={cn(
                      "flex h-13 w-13 shrink-0 items-center justify-center rounded-xl shadow-lg",
                      entry?.gradient ?? "bg-primary",
                      entry?.shadow ?? ""
                    )}
                    style={{ width: 52, height: 52 }}
                  >
                    {entry?.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-bold leading-tight text-navy">
                      {feature.title}
                    </h3>
                    <p className="mt-1.5 text-base font-medium leading-snug text-slate-700">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
