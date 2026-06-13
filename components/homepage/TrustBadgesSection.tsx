"use client";

import { motion, type Variants } from "framer-motion";
import {
  Globe,
  Lock,
  UsersThree,
  GraduationCap,
} from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";

const badges: {
  icon: Icon;
  title: string;
  desc: string;
  gradient: string;
  shadow: string;
}[] = [
  {
    icon: Globe,
    title: "Anytime, Anywhere",
    desc: "Learn on any device, at your own pace.",
    gradient: "bg-gradient-to-br from-blue-400 to-blue-600",
    shadow: "shadow-blue-200",
  },
  {
    icon: Lock,
    title: "Secure & Private",
    desc: "Your data is protected and encrypted.",
    gradient: "bg-gradient-to-br from-emerald-400 to-emerald-600",
    shadow: "shadow-emerald-200",
  },
  {
    icon: UsersThree,
    title: "Inclusive Community",
    desc: "A welcoming space for all learners.",
    gradient: "bg-gradient-to-br from-violet-400 to-violet-600",
    shadow: "shadow-violet-200",
  },
  {
    icon: GraduationCap,
    title: "Built for Education",
    desc: "Designed by educators, for educators.",
    gradient: "bg-gradient-to-br from-orange-400 to-orange-500",
    shadow: "shadow-orange-200",
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const badgeVariants: Variants = {
  hidden: { opacity: 0, rotateX: 70, scale: 0.85, y: 20 },
  show: {
    opacity: 1,
    rotateX: 0,
    scale: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export function TrustBadgesSection() {
  return (
    <section className="bg-[#f8fbff] py-8">
      <div className="mx-auto max-w-[1536px] px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-[1.5rem] sm:text-[1.75rem] font-black text-navy tracking-tight leading-snug">
            Trusted by learners, educators, and institutions worldwide.
          </h2>
          <p className="mt-3 text-[1rem] sm:text-[1.0625rem] font-normal leading-[1.8] text-slate-600">
            Built on trust, privacy, and a love for education.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          style={{ perspective: 1000 }}
          className="mx-auto mt-10 grid max-w-[960px] grid-cols-2 gap-5 sm:grid-cols-4"
        >
          {badges.map((badge) => (
            <motion.div
              key={badge.title}
              variants={badgeVariants}
              whileHover={{
                y: -6,
                transition: { type: "spring", stiffness: 300, damping: 22 },
              }}
              style={{ transformOrigin: "top center" }}
              className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-white p-5 text-center shadow-sm transition-shadow duration-250 hover:shadow-[0_8px_24px_rgba(15,23,42,0.09)]"
            >
              <motion.div
                whileHover={{ scale: 1.12, rotate: 8 }}
                transition={{ type: "spring", stiffness: 340, damping: 18 }}
                className={`flex h-13 w-13 items-center justify-center rounded-xl shadow-lg ${badge.gradient} ${badge.shadow}`}
                style={{ width: 52, height: 52 }}
              >
                <badge.icon
                  weight="duotone"
                  size={26}
                  color="#fff"
                  aria-hidden="true"
                />
              </motion.div>
              <div>
                <h3 className="text-[1.0625rem] font-bold text-navy">{badge.title}</h3>
                <p className="mt-2 text-[0.9375rem] font-normal leading-[1.7] text-slate-600">
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
