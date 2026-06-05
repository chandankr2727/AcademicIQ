"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle, GraduationCap } from "@phosphor-icons/react";

const problemIcons = [
  {
    label: "LMS",
    svg: (
      <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden="true">
        <path fill="#2563eb" d="M32 12L8 24l24 12 24-12L32 12Z" />
        <path fill="#2563eb" d="M18 31v12c0 3 6 7 14 7s14-4 14-7V31L32 38 18 31Z" />
        <path fill="#2563eb" d="M53 26v17" stroke="#2563eb" strokeWidth="4" strokeLinecap="round" />
        <circle cx="53" cy="46" r="3" fill="#2563eb" />
      </svg>
    ),
  },
  {
    label: "Discord",
    svg: (
      <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden="true">
        <path fill="#5b21f3" d="M49.5 19.5C45.8 17.8 42 16.6 38 16c-.5.9-1 1.9-1.4 2.9a43.5 43.5 0 00-9.2 0C27 17.9 26.5 16.9 26 16c-4 .6-7.8 1.8-11.5 3.5C7.2 30.4 5.3 41 6.3 51.4A47 47 0 0020.7 58c1.2-1.6 2.2-3.4 3.1-5.3-1.7-.6-3.3-1.4-4.8-2.3l1.2-1a34.2 34.2 0 0023.6 0l1.2 1c-1.5.9-3.1 1.7-4.8 2.3.9 1.9 1.9 3.7 3.1 5.3a47 47 0 0014.4-6.6c1.2-12-2.1-22.5-8.2-31.9Z" />
        <circle cx="24.5" cy="38" r="4.2" fill="white" />
        <circle cx="39.5" cy="38" r="4.2" fill="white" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    svg: (
      <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden="true">
        <circle cx="32" cy="32" r="25" fill="#22c55e" />
        <path fill="#22c55e" d="M18 48l2.8-10.5L31 46 18 48Z" />
        <path fill="white" d="M43.8 37.3c-.6-.3-3.8-1.9-4.4-2.1-.6-.2-1-.3-1.5.3-.4.6-1.7 2.1-2.1 2.5-.4.4-.8.5-1.4.2a20.2 20.2 0 01-6-3.7 22.2 22.2 0 01-4.1-5.1c-.4-.7 0-1.1.3-1.4.3-.3.6-.8.9-1.2.3-.4.4-.7.6-1.1.2-.4.1-.8 0-1.2-.2-.3-1.5-3.6-2-4.9-.5-1.2-1.1-1.1-1.5-1.1h-1.3c-.4 0-1.2.2-1.8.8-.6.7-2.4 2.4-2.4 5.8s2.5 6.7 2.8 7.2c.3.4 4.9 7.5 11.9 10.5 1.7.7 3 1.1 4 1.4 1.7.5 3.2.4 4.4.3 1.4-.2 3.8-1.6 4.4-3.1.5-1.5.5-2.8.4-3.1-.2-.3-.6-.5-1.2-.8Z" />
      </svg>
    ),
  },
  {
    label: "Zoom",
    svg: (
      <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden="true">
        <circle cx="32" cy="32" r="25" fill="#2563eb" />
        <rect x="17" y="24" width="25" height="17" rx="4" fill="white" />
        <path fill="white" d="M43 29.5l8-5.5v16l-8-5.5v-5Z" />
      </svg>
    ),
  },
  {
    label: "Tutors",
    svg: (
      <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden="true">
        <circle cx="32" cy="17" r="8" fill="#fb5607" />
        <circle cx="32" cy="47" r="8" fill="#fb5607" />
        <circle cx="17" cy="32" r="8" fill="#fb5607" />
        <circle cx="47" cy="32" r="8" fill="#fb5607" />
        <circle cx="32" cy="32" r="5" fill="#fb5607" />
      </svg>
    ),
  },
  {
    label: "Drive",
    svg: (
      <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden="true">
        <path d="M24.8 8h14.4l16.7 28.8H41.5L24.8 8Z" fill="#0F9D58" />
        <path d="M8.1 36.8L24.8 8l16.7 28.8H27.1L17.6 53.2 8.1 36.8Z" fill="#F4B400" />
        <path d="M17.6 53.2l9.5-16.4h28.8l-9.5 16.4H17.6Z" fill="#4285F4" />
      </svg>
    ),
  },
  {
    label: "Email",
    svg: (
      <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden="true">
        <rect x="10" y="16" width="44" height="32" rx="3" fill="#2563eb" />
        <path d="M12 18l20 17 20-17" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 46l16-14M52 46L36 32" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "AI Tools",
    svg: (
      <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden="true">
        <path d="M32 6L40.5 24L58 32L40.5 40L32 58L23.5 40L6 32L23.5 24L32 6Z" fill="#2e054e" />
        <path d="M49 7L52.5 14.5L60 18L52.5 21.5L49 29L45.5 21.5L38 18L45.5 14.5L49 7Z" fill="#2e054e" />
      </svg>
    ),
  },
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

const panelLeft: Variants = {
  hidden: { opacity: 0, x: -50, filter: "blur(8px)" },
  show: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" } },
};

const panelCenter: Variants = {
  hidden: { opacity: 0, scale: 0.8, filter: "blur(8px)" },
  show: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 0.55, ease: "easeOut", delay: 0.1 } },
};

const panelRight: Variants = {
  hidden: { opacity: 0, x: 50, filter: "blur(8px)" },
  show: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut", delay: 0.15 } },
};

const panelFar: Variants = {
  hidden: { opacity: 0, x: 60, filter: "blur(8px)" },
  show: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut", delay: 0.22 } },
};

export function ProblemSolveSection() {
  return (
    <section
      className="bg-[#f8fbff] py-8 lg:py-10"
      aria-labelledby="problem-solve-heading"
    >
      {/* Section heading */}
      <div className="mx-auto max-w-[1536px] px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-6 text-center"
        >
          <h2
            id="problem-solve-heading"
            className="text-3xl font-black text-navy sm:text-4xl"
          >
            One Platform. Everything Connected.
          </h2>
          <p className="mt-4 mx-auto max-w-lg text-lg font-medium leading-relaxed text-slate-700">
            Education is fragmented. AcademIQ brings it all together in one place.
          </p>
        </motion.div>
      </div>

      <div className="mx-auto flex flex-col gap-4 px-4 sm:px-6 lg:flex-row lg:items-stretch lg:justify-between lg:px-6 xl:px-10">

        {/* Problem — slide from left */}
        <motion.article
          variants={panelLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="rounded-2xl border border-border bg-white p-5 text-center shadow-sm lg:flex-[1.6]"
        >
          <h3 className="text-xl font-bold text-navy">The Problem We Solve</h3>
          <p className="mt-2 text-base font-medium leading-relaxed text-slate-700">
            Students currently juggle many disconnected tools to learn.
          </p>
          <p className="mt-3 text-base font-semibold text-navy">Today: Students juggle many tools</p>

          <div className="mt-4 grid grid-cols-4 gap-3 sm:flex sm:justify-between sm:gap-2">
            {problemIcons.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16, scale: 0.85 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                whileHover={{ y: -4, scale: 1.08, transition: { type: "spring", stiffness: 340, damping: 20 } }}
                className="flex flex-col items-center gap-1.5"
              >
                <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-slate-50 p-2 shadow-sm border border-border">
                  {item.svg}
                </div>
                <span className="text-sm font-semibold leading-tight text-navy">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.article>

        {/* Arrow — desktop only */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6, x: -10 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden shrink-0 items-center justify-center lg:flex lg:-mx-3"
          aria-hidden="true"
        >
          <svg width="80" height="64" viewBox="0 0 120 90" fill="none" className="mt-4">
            <defs>
              <linearGradient id="arrowGrad" x1="9" y1="75" x2="102" y2="22" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#dbeafe" />
                <stop offset="0.5" stopColor="#60a5fa" />
                <stop offset="1" stopColor="#1d4ed8" />
              </linearGradient>
            </defs>
            <path d="M8 75C28 35 58 20 92 24" stroke="url(#arrowGrad)" strokeWidth="10" strokeLinecap="round" fill="none" />
            <path d="M88 7L115 28L87 50L89 34C58 33 33 47 13 77C34 35 60 15 90 18L88 7Z" fill="#1d4ed8" />
          </svg>
        </motion.div>

        {/* AcademIQ hub — scale in */}
        <motion.article
          variants={panelCenter}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center rounded-2xl border border-border bg-white p-5 text-center shadow-sm lg:flex-[0.7]"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 6 }}
            transition={{ type: "spring", stiffness: 340, damping: 18 }}
            className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 shadow-lg shadow-blue-200 text-white"
          >
            <GraduationCap weight="duotone" size={28} color="#fff" aria-hidden="true" />
          </motion.div>
          <h3 className="mt-3 text-xl font-black text-navy">AcademIQ</h3>
          <p className="text-base font-bold text-navy">One Platform.</p>
          <p className="text-base font-bold text-navy">Everything Connected.</p>
          <div className="mt-3 flex justify-center -space-x-1.5" aria-hidden="true">
            {platformAvatars.map((a, i) => (
              <span key={i} className="h-7 w-7 overflow-hidden rounded-full border-2 border-white">
                <img src={a.img} alt="" width="28" height="28" className="object-cover" />
              </span>
            ))}
          </div>
          <p className="mt-3 text-base font-medium text-slate-700">
            Everything you need in one place.
          </p>
        </motion.article>

        {/* Tomorrow — slide from right */}
        <motion.article
          variants={panelRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="rounded-2xl border border-border bg-white p-5 shadow-sm lg:flex-[1.1]"
        >
          <h3 className="text-center text-lg font-bold text-navy">
            Tomorrow: Learn Smarter. Together.
          </h3>
          <div className="mt-4 grid grid-cols-1 gap-y-3 sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-1 xl:grid-cols-2">
            {tomorrowPoints.map((point, i) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                className="flex items-center gap-2 text-base font-medium text-navy"
              >
                <CheckCircle
                  weight="duotone"
                  size={20}
                  className="shrink-0 text-emerald-500"
                  aria-hidden="true"
                />
                <span>{point}</span>
              </motion.div>
            ))}
          </div>
        </motion.article>

        {/* Emma — slide from far right */}
        <motion.article
          variants={panelFar}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm grid grid-cols-1 sm:grid-cols-[130px_1fr] lg:grid-cols-[100px_1fr] xl:grid-cols-[120px_1fr] lg:flex-[1.2]"
          aria-labelledby="emma-heading"
        >
          <div className="overflow-hidden bg-blue-50">
            <Image
              src="/emma.webp"
              alt="Emma, AcademIQ's AI assistant"
              width={0}
              height={0}
              sizes="(max-width: 640px) 100vw, 130px"
              className="h-auto w-full"
            />
          </div>
          <div className="flex flex-col justify-center p-5">
            <h3 id="emma-heading" className="text-lg font-bold text-navy">
              Hi! I&apos;m Emma 👋
            </h3>
            <p className="mt-2 text-base font-medium leading-relaxed text-slate-700">
              I help you navigate AcademIQ, find resources, stay on track, and achieve your goals.
            </p>
            <Link
              href="#"
              className="mt-4 inline-flex items-center gap-1.5 text-base font-semibold text-primary hover:underline"
            >
              Chat with Emma{" "}
              <ArrowRight weight="bold" size={15} aria-hidden="true" />
            </Link>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
