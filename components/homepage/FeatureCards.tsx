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
    <section className="bg-white py-2">
      <div className="mx-auto max-w-[1536px] px-5 lg:px-10">
        <div className="mb-2 text-center">
          <h2 className="text-xl font-black leading-tight text-navy">
            Explore What AcademIQ Offers
          </h2>
          <p className="text-[11px] font-medium text-muted-foreground">
            Discover the tools, support, and communities that power the AcademIQ virtual learning network.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9">
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
                  className="group flex h-[165px] flex-col items-center rounded-lg border border-border bg-white px-3 pt-4 pb-6 text-center shadow-[0_8px_18px_rgba(15,23,42,0.04)] transition-all hover:border-primary/30 hover:shadow-md"
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
                          "h-6 w-6",
                          feature.iconColor || "text-primary"
                        )}
                      />
                    )}
                  </div>
                  <h3 className="mt-3 min-h-[28px] text-xs font-black leading-tight text-navy">
                    {feature.title}
                  </h3>
                  <p className="mt-1 min-h-[38px] text-[11px] font-medium leading-tight text-muted-foreground">
                    {feature.description}
                  </p>
                  <span className="mt-auto flex items-center gap-1 pt-3 text-xs font-black text-primary">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
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
