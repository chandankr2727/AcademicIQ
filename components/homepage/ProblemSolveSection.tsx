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
  Monitor,
  Phone,
  Video,
} from "lucide-react";

const problemIcons = [
  { icon: FolderOpen, label: "LMS", color: "text-blue-600" },
  { icon: MessageSquare, label: "Discord", color: "text-indigo-600" },
  { icon: Phone, label: "WhatsApp", color: "text-green-600" },
  { icon: Video, label: "Zoom", color: "text-blue-500" },
  { icon: Monitor, label: "Teams", color: "text-sky-600" },
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

const platformAvatars = [
  { img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { img: "https://randomuser.me/api/portraits/women/68.jpg" },
  { img: "https://randomuser.me/api/portraits/men/46.jpg" },
  { img: "https://randomuser.me/api/portraits/women/12.jpg" },
];

function CurvedArrow() {
  return (
    <svg width="100" height="50" viewBox="0 0 100 50" fill="none" className="mx-auto mt-2">
      <path
        d="M10 40 C 30 15, 60 10, 85 20"
        stroke="url(#arrowGrad)"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M 75 8 L 95 24 L 72 32 Z" fill="#1d4ed8" />
      <defs>
        <linearGradient id="arrowGrad" x1="10" y1="40" x2="85" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3b82f6" stopOpacity="0.1" />
          <stop offset="1" stopColor="#1d4ed8" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function ProblemSolveSection() {
  return (
    <section className="bg-white pt-3">
      <div className="mx-auto grid max-w-[1536px] grid-cols-1 gap-3 px-5 pb-3 lg:grid-cols-12 lg:px-10">
        {/* Problem We Solve */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden rounded-lg bg-[#fff5f7] p-3 text-center shadow-sm lg:col-span-3"
        >
          <h3 className="text-[13px] font-black text-navy">The Problem We Solve</h3>
          <p className="mt-0.5 text-[10px] font-semibold leading-snug text-muted-foreground">
            Education is fragmented. AcademIQ brings it all together.
          </p>
          <p className="mt-0.5 text-[10px] font-black text-navy">Today: Students juggle many tools</p>
          <div className="mt-2 grid grid-cols-4 gap-1.5">
            {problemIcons.map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-0.5 text-center">
                <item.icon className={`h-3.5 w-3.5 ${item.color}`} />
                <span className="text-[8px] font-black leading-tight text-navy">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.article>

        {/* Curved Arrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="hidden items-center justify-center lg:flex lg:col-span-1"
        >
          <CurvedArrow />
        </motion.div>

        {/* AcademIQ */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="flex flex-col items-center justify-center rounded-lg border border-border bg-white p-3 text-center shadow-sm lg:col-span-2"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
            <GraduationCap className="h-4 w-4" />
          </div>
          <h3 className="mt-1 text-[15px] font-black text-navy">AcademIQ</h3>
          <p className="text-[11px] font-black text-navy">One Platform.</p>
          <p className="text-[11px] font-black text-navy">Everything Connected.</p>
          <div className="mt-1.5 flex justify-center -space-x-1">
            {platformAvatars.map((a, i) => (
              <span key={i} className="h-4 w-4 overflow-hidden rounded-full border border-white">
                <img src={a.img} alt="Avatar" width="16" height="16" className="object-cover" />
              </span>
            ))}
          </div>
          <p className="mt-1 text-[9px] font-semibold text-muted-foreground">
            And everything you need in one place.
          </p>
        </motion.article>

        {/* Tomorrow */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="rounded-lg bg-[#f2fff8] p-3 shadow-sm lg:col-span-3"
        >
          <h3 className="text-center text-[12px] font-black text-navy">
            Tomorrow: Learn Smarter. Together.
          </h3>
          <div className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1.5">
            {tomorrowPoints.map((point) => (
              <div key={point} className="flex items-center gap-1.5 text-[10px] font-bold text-navy">
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-600" />
                {point}
              </div>
            ))}
          </div>
        </motion.article>

        {/* Emma */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="grid overflow-hidden rounded-lg bg-white shadow-sm grid-cols-1 sm:grid-cols-[100px_1fr] lg:col-span-3"
        >
          <div className="relative aspect-[4/5] w-full sm:aspect-auto sm:min-h-[100px] bg-blue-50">
            <Image src="/emma.webp" alt="Emma AI Assistant" fill sizes="(max-width: 640px) 100vw, 100px" className="object-cover object-top sm:object-center" />
          </div>
          <div className="flex flex-col justify-center p-3">
            <h3 className="text-[13px] font-black text-navy">Hi! I&apos;m Emma 👋</h3>
            <p className="mt-1 text-[10px] font-semibold leading-snug text-muted-foreground">
              I help you navigate AcademIQ, find resources, stay on track, and achieve your goals.
            </p>
            <Link href="#" className="mt-2 inline-flex items-center gap-1 text-[11px] font-black text-orange-600">
              Chat with Emma <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
