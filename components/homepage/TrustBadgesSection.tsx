"use client";

import { motion, type Variants } from "framer-motion";
import { Globe, Lock, Users, GraduationCap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const badges: {
  icon: LucideIcon;
  title: string;
  desc: string;
  iconBg: string;
  iconColor: string;
}[] = [
  {
    icon: Globe,
    title: "Anytime, Anywhere",
    desc: "Learn on any device, at your own pace.",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Lock,
    title: "Secure & Private",
    desc: "Your data is protected and encrypted.",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    icon: Users,
    title: "Inclusive Community",
    desc: "A welcoming space for all learners.",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    icon: GraduationCap,
    title: "Built for Education",
    desc: "Designed by educators, for educators.",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const badgeVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export function TrustBadgesSection() {
  return (
    <section className="border-t border-border bg-white py-14">
      <div className="mx-auto max-w-[1536px] px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-xl font-black text-navy sm:text-2xl">
            Trusted by learners, educators, and institutions worldwide.
          </h2>
          <p className="mt-2 text-[15px] text-muted-foreground">
            Built on trust, privacy, and a love for education.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mt-10 grid max-w-[960px] grid-cols-2 gap-5 sm:grid-cols-4"
        >
          {badges.map((badge) => (
            <motion.div
              key={badge.title}
              variants={badgeVariants}
              whileHover={{
                y: -4,
                transition: { type: "spring", stiffness: 300, damping: 22 },
              }}
              className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-white p-5 text-center shadow-sm transition-shadow duration-250 hover:shadow-[0_8px_24px_rgba(15,23,42,0.09)]"
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${badge.iconBg}`}>
                <badge.icon
                  className={`h-6 w-6 ${badge.iconColor}`}
                  aria-hidden="true"
                />
              </div>
              <div>
                <h3 className="text-[15px] font-bold text-navy">{badge.title}</h3>
                <p className="mt-1 text-[14px] leading-snug text-muted-foreground">
                  {badge.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
