"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
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
  Globe: <Globe className="h-6 w-6 text-primary" />,
  Accessible: <Monitor className="h-6 w-6 text-primary" />,
  Shield: <Shield className="h-6 w-6 text-primary" />,
  Headphones: <Headphones className="h-6 w-6 text-primary" />,
  Trophy: <Trophy className="h-6 w-6 text-primary" />,
};

export function FeatureStrip() {
  return (
    <section className="relative z-10 border-b border-border bg-white px-5 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-[1536px]"
      >
        <div className="py-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {featureStrip.map((feature, i) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className={cn(
                  "flex items-center gap-4 px-4 first:pl-0 last:pr-0",
                  i < featureStrip.length - 1 &&
                    "sm:border-b sm:border-border sm:pb-4 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-6"
                )}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  {iconMap[feature.icon]}
                </div>
                <div>
                  <h3 className="text-xs font-extrabold leading-tight text-navy">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-[11px] font-medium leading-tight text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
