"use client";

import { motion } from "framer-motion";
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
import { SectionHeader } from "@/components/common/SectionHeader";
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

export function FeatureCards() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Explore What AcademIQ Offers"
          action={{ label: "View All Features", href: "#" }}
          className="mb-8"
        />

        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9">
          {exploreFeatures.map((feature, i) => {
            const IconComp = iconComponents[feature.icon];
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <Link
                  href={feature.href || "#"}
                  className="group flex h-full flex-col items-start rounded-xl border border-border bg-white p-4 transition-all hover:border-primary/30 hover:shadow-md"
                >
                  <div
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-lg",
                      feature.iconBg || "bg-primary/10"
                    )}
                  >
                    {IconComp && (
                      <IconComp
                        className={cn(
                          "h-5 w-5",
                          feature.iconColor || "text-primary"
                        )}
                      />
                    )}
                  </div>
                  <h3 className="mt-3 text-xs font-semibold leading-snug text-navy sm:text-sm">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-[10px] leading-relaxed text-muted-foreground sm:text-xs">
                    {feature.description}
                  </p>
                  <span className="mt-auto flex items-center gap-0.5 pt-3 text-xs font-medium text-primary">
                    Learn more
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
