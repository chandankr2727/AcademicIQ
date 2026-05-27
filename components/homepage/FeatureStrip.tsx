"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Users,
  MessageCircle,
  Trophy,
} from "lucide-react";
import { featureStrip } from "@/constants/features";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="h-6 w-6 text-primary" />,
  Users: <Users className="h-6 w-6 text-primary" />,
  MessageCircle: <MessageCircle className="h-6 w-6 text-primary" />,
  Trophy: <Trophy className="h-6 w-6 text-primary" />,
};

export function FeatureStrip() {
  return (
    <section className="relative z-10 -mt-6 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-7xl"
      >
        <div className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featureStrip.map((feature, i) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className={cn(
                  "flex items-start gap-4",
                  i < featureStrip.length - 1 &&
                    "sm:border-b sm:border-border sm:pb-6 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-6"
                )}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  {iconMap[feature.icon]}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-navy">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
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
