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
  {
    label: "LMS",
    svg: (
      <svg viewBox="0 0 64 64" className="h-full w-full">
        <path
          fill="#2563eb"
          d="M32 12L8 24l24 12 24-12L32 12Z"
        />
        <path
          fill="#2563eb"
          d="M18 31v12c0 3 6 7 14 7s14-4 14-7V31L32 38 18 31Z"
        />
        <path
          fill="#2563eb"
          d="M53 26v17"
          stroke="#2563eb"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="53" cy="46" r="3" fill="#2563eb" />
      </svg>
    )
  },

  {
    label: "Discord",
    svg: (
      <svg viewBox="0 0 64 64" className="h-full w-full">
        <path
          fill="#5b21f3"
          d="M49.5 19.5C45.8 17.8 42 16.6 38 16c-.5.9-1 1.9-1.4 2.9a43.5 43.5 0 00-9.2 0C27 17.9 26.5 16.9 26 16c-4 .6-7.8 1.8-11.5 3.5C7.2 30.4 5.3 41 6.3 51.4A47 47 0 0020.7 58c1.2-1.6 2.2-3.4 3.1-5.3-1.7-.6-3.3-1.4-4.8-2.3l1.2-1a34.2 34.2 0 0023.6 0l1.2 1c-1.5.9-3.1 1.7-4.8 2.3.9 1.9 1.9 3.7 3.1 5.3a47 47 0 0014.4-6.6c1.2-12-2.1-22.5-8.2-31.9Z"
        />
        <circle cx="24.5" cy="38" r="4.2" fill="white" />
        <circle cx="39.5" cy="38" r="4.2" fill="white" />
      </svg>
    )
  },

  {
    label: "WhatsApp",
    svg: (
      <svg viewBox="0 0 64 64" className="h-full w-full">
        <circle cx="32" cy="32" r="25" fill="#22c55e" />
        <path
          fill="#22c55e"
          d="M18 48l2.8-10.5L31 46 18 48Z"
        />
        <path
          fill="white"
          d="M43.8 37.3c-.6-.3-3.8-1.9-4.4-2.1-.6-.2-1-.3-1.5.3-.4.6-1.7 2.1-2.1 2.5-.4.4-.8.5-1.4.2a20.2 20.2 0 01-6-3.7 22.2 22.2 0 01-4.1-5.1c-.4-.7 0-1.1.3-1.4.3-.3.6-.8.9-1.2.3-.4.4-.7.6-1.1.2-.4.1-.8 0-1.2-.2-.3-1.5-3.6-2-4.9-.5-1.2-1.1-1.1-1.5-1.1h-1.3c-.4 0-1.2.2-1.8.8-.6.7-2.4 2.4-2.4 5.8s2.5 6.7 2.8 7.2c.3.4 4.9 7.5 11.9 10.5 1.7.7 3 1.1 4 1.4 1.7.5 3.2.4 4.4.3 1.4-.2 3.8-1.6 4.4-3.1.5-1.5.5-2.8.4-3.1-.2-.3-.6-.5-1.2-.8Z"
        />
      </svg>
    )
  },

  {
    label: "Zoom",
    svg: (
      <svg viewBox="0 0 64 64" className="h-full w-full">
        <circle cx="32" cy="32" r="25" fill="#2563eb" />
        <rect x="17" y="24" width="25" height="17" rx="4" fill="white" />
        <path
          fill="white"
          d="M43 29.5l8-5.5v16l-8-5.5v-5Z"
        />
      </svg>
    )
  },

  {
    label: "Tutors",
    svg: (
      <svg viewBox="0 0 64 64" className="h-full w-full">
        <circle cx="32" cy="17" r="8" fill="#fb5607" />
        <circle cx="32" cy="47" r="8" fill="#fb5607" />
        <circle cx="17" cy="32" r="8" fill="#fb5607" />
        <circle cx="47" cy="32" r="8" fill="#fb5607" />
        <circle cx="32" cy="32" r="5" fill="#fb5607" />
      </svg>
    )
  },

  {
  label: "Google Drive",
  svg: (
    <svg viewBox="0 0 64 64" className="h-full w-full">
      <path
        d="M24.8 8h14.4l16.7 28.8H41.5L24.8 8Z"
        fill="#0F9D58"
      />
      <path
        d="M8.1 36.8L24.8 8l16.7 28.8H27.1L17.6 53.2 8.1 36.8Z"
        fill="#F4B400"
      />
      <path
        d="M17.6 53.2l9.5-16.4h28.8l-9.5 16.4H17.6Z"
        fill="#4285F4"
      />
    </svg>
  )
},

  {
    label: "Email",
    svg: (
      <svg viewBox="0 0 64 64" className="h-full w-full">
        <rect x="10" y="16" width="44" height="32" rx="3" fill="#2563eb" />
        <path
          d="M12 18l20 17 20-17"
          fill="none"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 46l16-14M52 46L36 32"
          fill="none"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    )
  },

  {
  label: "AI Tools",
  svg: (
    <svg viewBox="0 0 64 64" className="h-full w-full">
      <path
        d="M32 6L40.5 24L58 32L40.5 40L32 58L23.5 40L6 32L23.5 24L32 6Z"
        fill="#2e054e"
      />
      <path
        d="M49 7L52.5 14.5L60 18L52.5 21.5L49 29L45.5 21.5L38 18L45.5 14.5L49 7Z"
        fill="#2e054e"
      />
    </svg>
  )
}
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
  return null; // Removed as it is rendered inline now
}

export function ProblemSolveSection() {
  return (
    <section className="bg-white pt-3">
      <div className="mx-auto flex flex-col gap-3 px-5 pb-3 lg:flex-row lg:items-stretch lg:justify-between lg:px-6 xl:px-10">
        {/* Problem We Solve */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden rounded-3xl bg-pink-50/50 p-4 text-center lg:flex-[1.6]"
        >
          <h3 className="text-[17px] font-black text-navy">The Problem We Solve</h3>
          <p className="mt-1 text-[12px] font-semibold leading-snug text-muted-foreground">
            Education is fragmented. AcademIQ brings it all together.
          </p>
          <p className="mt-1 text-[13px] font-black text-navy">Today: Students juggle many tools</p>
          <div className="mt-4 flex justify-between px-1 gap-1">
            {problemIcons.map((item) => (
              <div key={item.label} className="flex flex-col items-center flex-1 gap-1.5 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-white shadow-sm overflow-hidden p-2">
                  {item.svg}
                </div>
                <span className="text-[10px] font-black leading-tight text-navy whitespace-nowrap">{item.label}</span>
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
  className="hidden items-center justify-center shrink-0 lg:flex lg:-mx-4"
>
  <svg
    width="92"
    height="70"
    viewBox="0 0 120 90"
    fill="none"
    className="shrink-0 mt-4"
  >
    <defs>
      <linearGradient
        id="smallArrowGradient"
        x1="9"
        y1="75"
        x2="102"
        y2="22"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#dbeafe" />
        <stop offset="0.45" stopColor="#60a5fa" />
        <stop offset="1" stopColor="#1d4ed8" />
      </linearGradient>
    </defs>

    {/* thin at left, thick near arrow head */}
    <path
      d="M8 75C28 35 58 20 92 24"
      stroke="url(#smallArrowGradient)"
      strokeWidth="13"
      strokeLinecap="round"
      fill="none"
    />

    {/* hide extra thickness at start to make it look thinner */}
    <path
      d="M8 75C28 35 58 20 92 24"
      stroke="url(#smallArrowGradient)"
      strokeWidth="6"
      strokeLinecap="round"
      fill="none"
    />

    <path
      d="M88 7L115 28L87 50L89 34C58 33 33 47 13 77C34 35 60 15 90 18L88 7Z"
      fill="#1d4ed8"
    />
  </svg>
</motion.div>

        {/* AcademIQ */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="flex flex-col items-center justify-center rounded-3xl border border-border bg-white p-4 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] lg:flex-[0.7]"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
            <GraduationCap className="h-6 w-6" fill="currentColor" />
          </div>
          <h3 className="mt-3 text-[20px] font-black text-navy">AcademIQ</h3>
          <p className="text-[14px] font-black text-navy">One Platform.</p>
          <p className="text-[14px] font-black text-navy">Everything Connected.</p>
          <div className="mt-2 flex justify-center -space-x-1.5">
            {platformAvatars.map((a, i) => (
              <span key={i} className="h-7 w-7 overflow-hidden rounded-full border-2 border-white">
                <img src={a.img} alt="Avatar" width="28" height="28" className="object-cover" />
              </span>
            ))}
          </div>
          <p className="mt-2 text-[12px] font-semibold text-muted-foreground">
            And everything you need in one place.
          </p>
        </motion.article>

        {/* Tomorrow */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-col justify-center rounded-3xl bg-emerald-50/50 p-4 lg:flex-[1.1]"
        >
          <h3 className="text-center text-[16px] font-black text-navy">
            Tomorrow: Learn Smarter. Together.
          </h3>
          <div className="mt-3 grid grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-x-4 gap-y-2">
            {tomorrowPoints.map((point) => (
              <div key={point} className="flex items-center gap-2 text-[13px] font-bold text-navy">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" strokeWidth={2.5} />
                <span className="whitespace-nowrap sm:whitespace-normal">{point}</span>
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
          className="grid overflow-hidden rounded-3xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] grid-cols-1 sm:grid-cols-[140px_1fr] lg:grid-cols-[100px_1fr] xl:grid-cols-[120px_1fr] lg:flex-[1.2]"
        >
          <div className="relative aspect-[4/5] w-full sm:aspect-auto sm:min-h-[120px] bg-blue-50">
            <Image src="/emma.webp" alt="Emma AI Assistant" fill sizes="(max-width: 640px) 100vw, 120px" className="object-cover object-top sm:object-center" />
          </div>
          <div className="flex flex-col justify-center p-4">
            <h3 className="text-[17px] font-black text-navy">Hi! I&apos;m Emma 👋</h3>
            <p className="mt-1.5 text-[13px] font-semibold leading-snug text-muted-foreground">
              I help you navigate AcademIQ, find resources, stay on track, and achieve your goals.
            </p>
            <Link href="#" className="mt-3 inline-flex items-center gap-1.5 text-[14px] font-black text-orange-600">
              Chat with Emma <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
