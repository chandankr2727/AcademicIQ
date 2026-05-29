"use client";

import { motion } from "framer-motion";
import { Globe, Lock, Users, GraduationCap } from "lucide-react";

const badges = [
  {
    icon: Globe,
    title: "Anytime, Anywhere",
    desc: "Learn on any device, at your own pace.",
  },
  {
    icon: Lock,
    title: "Secure & Private",
    desc: "Your data is protected and encrypted.",
  },
  {
    icon: Users,
    title: "Inclusive Community",
    desc: "A welcoming space for all learners.",
  },
  {
    icon: GraduationCap,
    title: "Built for Education",
    desc: "Designed by educators, for educators.",
  },
];

export function TrustBadgesSection() {
  return (
    <section className="border-t border-border bg-white py-3">
      <div className="mx-auto max-w-[1536px] px-5 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center text-[15px] font-black text-navy"
        >
          Trusted by learners, educators, and institutions worldwide.
        </motion.p>

        <div className="mx-auto mt-3 grid max-w-[880px] grid-cols-2 divide-x divide-border sm:grid-cols-4">
          {badges.map((badge, i) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="flex items-center justify-center gap-3 px-4 text-center"
            >
              <badge.icon className="h-7 w-7 shrink-0 text-primary" />
              <h4 className="text-[13px] font-bold text-slate-700">{badge.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
