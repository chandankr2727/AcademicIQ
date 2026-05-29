"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  FolderOpen,
  GraduationCap,
  Mail,
  MessageSquare,
  Phone,
  Users,
  Video,
} from "lucide-react";

const problemIcons = [
  { icon: FolderOpen, label: "LMS", color: "text-blue-600" },
  { icon: MessageSquare, label: "Discord", color: "text-indigo-600" },
  { icon: Phone, label: "WhatsApp", color: "text-green-600" },
  { icon: Video, label: "Zoom", color: "text-blue-500" },
  { icon: Users, label: "Tutors", color: "text-rose-500" },
  { icon: FolderOpen, label: "Google Drive", color: "text-yellow-600" },
  { icon: Mail, label: "Email", color: "text-blue-700" },
  { icon: BrainCircuit, label: "AI Tools", color: "text-violet-600" },
];

const tomorrowPoints = [
  "Connected Community",
  "Tutoring & Study Groups",
  "Real-time Collaboration",
  "Resources & Tools",
  "AI-Powered Support",
  "Opportunities & Growth",
];

const avatarColors = ["bg-blue-400", "bg-purple-400", "bg-green-400", "bg-orange-400", "bg-pink-400"];

export function ProblemSolveSection() {
  return (
    <section className="bg-white pt-3">
      <div className="mx-auto grid max-w-[1536px] grid-cols-1 gap-4 px-5 pb-3 lg:grid-cols-12 lg:px-10">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="rounded-lg bg-[#fff5f7] p-4 text-center shadow-sm lg:col-span-4"
        >
          <h3 className="text-[16px] font-black text-navy">The Problem We Solve</h3>
          <p className="mt-1 text-[11px] font-semibold text-muted-foreground">
            Education is fragmented. AcademIQ brings it all together.
          </p>
          <p className="text-[12px] font-black text-navy">Today: Students juggle many tools</p>
          <div className="mt-3 grid grid-cols-4 gap-3 sm:grid-cols-8">
            {problemIcons.map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-1 text-center">
                <item.icon className={`h-5 w-5 ${item.color}`} />
                <span className="text-[9px] font-black leading-tight text-navy">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.article>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="hidden items-center justify-center lg:flex lg:col-span-1"
        >
          <ArrowRight className="h-20 w-20 rounded-full bg-primary p-3 text-white shadow-[0_12px_24px_rgba(37,99,235,0.22)]" />
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="rounded-lg border border-border bg-white p-4 text-center shadow-sm lg:col-span-2"
        >
          <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white">
            <GraduationCap className="h-5 w-5" />
          </div>
          <h3 className="mt-1 text-[17px] font-black text-navy">AcademIQ</h3>
          <p className="text-[12px] font-black text-navy">One Platform.</p>
          <p className="text-[12px] font-black text-navy">Everything Connected.</p>
          <div className="mt-2 flex justify-center -space-x-1.5">
            {avatarColors.map((color) => (
              <span key={color} className={`h-5 w-5 rounded-full border-2 border-white ${color}`} />
            ))}
          </div>
          <p className="mt-1 text-[10px] font-semibold text-muted-foreground">
            And everything you need in one place.
          </p>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="rounded-lg bg-[#f2fff8] p-4 shadow-sm lg:col-span-3"
        >
          <h3 className="text-center text-[13px] font-black text-navy">
            Tomorrow: Learn Smarter. Together.
          </h3>
          <div className="mt-3 grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
            {tomorrowPoints.map((point) => (
              <div key={point} className="flex items-center gap-2 text-[11px] font-bold text-navy">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                {point}
              </div>
            ))}
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="grid overflow-hidden rounded-lg bg-white shadow-sm sm:grid-cols-[120px_1fr] lg:col-span-2"
        >
          <div className="relative min-h-[140px] bg-blue-50">
            <Image src="/hero.webp" alt="Emma assistant placeholder" fill sizes="120px" className="object-cover object-[72%_30%]" />
          </div>
          <div className="p-4">
            <h3 className="text-[14px] font-black text-navy">Hi! I&apos;m Emma</h3>
            <p className="mt-2 text-[11px] font-semibold leading-snug text-muted-foreground">
              I help you navigate AcademIQ, find resources, stay on track, and achieve your goals.
            </p>
            <Link href="#" className="mt-3 inline-flex items-center gap-1 text-[12px] font-black text-orange-600">
              Chat with Emma <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
