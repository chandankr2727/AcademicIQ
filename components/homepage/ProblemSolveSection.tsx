"use client";

import { motion } from "framer-motion";

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

const tomorrowCol1 = [
  "Connected Community",
  "Real-time Collaboration",
  "AI-Powered Support",
];

const tomorrowCol2 = [
  "Tutoring & Study Groups",
  "Resources & Tools",
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
    <div className="hidden lg:flex items-center justify-center shrink-0 w-8 self-center" aria-hidden="true">
      <svg viewBox="0 0 32 32" className="w-8 h-8 text-blue-500 animate-pulse">
        <path
          d="M 2,16 C 10,12 18,12 26,15"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M 20,9 L 27,15 L 21,21"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function ProblemSolveSection() {
  return (
    <section
      className="bg-[#f8fbff] py-12 lg:py-16"
      aria-labelledby="problem-solve-heading"
    >
      {/* Section heading */}
      <div className="mx-auto max-w-[1536px] px-5 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-12 text-center"
        >
          <h2
            id="problem-solve-heading"
            className="text-4xl font-black text-navy sm:text-5xl"
          >
            One Platform. Everything Connected.
          </h2>
          <p className="mt-4 mx-auto max-w-3xl text-lg font-medium leading-relaxed text-slate-800">
            Education is fragmented. AcademIQ brings it all together in one place.
          </p>
        </motion.div>

        {/* 3 Horizontal Cards Stack */}
        <div className="flex flex-col lg:flex-row lg:items-stretch gap-4">

          {/* Card 1: The Problem We Solve — larger width */}
          <motion.article
            initial={{ opacity: 0, x: -50, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:flex-[2] rounded-3xl border border-border bg-white p-6 shadow-sm flex flex-col justify-between w-full"
          >
            <div className="text-center">
              <h3 className="text-xl font-bold text-navy">The Problem We Solve</h3>
              <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-700">
                Students currently juggle many disconnected tools to learn.
              </p>
            </div>

            <div className="mt-auto">
              <p className="text-sm font-bold text-navy text-center mb-3">Today: Students juggle many tools</p>

              <div className="border border-slate-100 bg-white shadow-xs rounded-2xl p-4">
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-4">
                  {problemIcons.map((item) => (
                    <div key={item.label} className="flex flex-col items-center gap-1.5 w-14 shrink-0">
                      <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-slate-50 p-2 shadow-xs border border-slate-100">
                        {item.svg}
                      </div>
                      <span className="text-[11px] font-bold text-slate-800 leading-tight text-center w-full">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>

          {/* Curved Arrow 1 */}
          <CurvedArrow />

          {/* Card 2: AcademIQ Center Hub — compact */}
          <motion.article
            initial={{ opacity: 0, scale: 0.8, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
            className="rounded-3xl border border-border bg-white p-5 shadow-sm hover:shadow-[0_12px_40px_rgba(15,23,42,0.08)] transition-all duration-300 flex flex-col items-center justify-center w-full lg:w-52 xl:w-56 shrink-0"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0066fe] shadow-lg shadow-blue-100 text-white shrink-0">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <h3 className="mt-3 text-lg font-black text-navy leading-none">AcademIQ</h3>
            <p className="mt-2 text-xs font-black text-navy leading-none">One Platform.</p>
            <p className="text-xs font-black text-navy mt-1 leading-none">Everything Connected.</p>

            <div className="mt-4 flex justify-center -space-x-1.5 shrink-0">
              {platformAvatars.map((a, i) => (
                <span key={i} className="h-7 w-7 overflow-hidden rounded-full border-2 border-white shadow-xs">
                  <img src={a.img} alt="" width="28" height="28" className="object-cover" />
                </span>
              ))}
            </div>

            <p className="mt-4 text-[11px] font-bold text-slate-700 text-center">
              Everything you need in one place.
            </p>
          </motion.article>

          {/* Curved Arrow 2 */}
          <CurvedArrow />

          {/* Card 3: Tomorrow: Learn Smarter. Together. — larger width */}
          <motion.article
            initial={{ opacity: 0, x: 50, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="lg:flex-[2] rounded-3xl border border-border bg-white p-6 shadow-sm flex flex-col justify-between w-full"
          >
            <div className="text-center">
              <h3 className="text-xl font-bold text-navy">Tomorrow: Learn Smarter. Together.</h3>
            </div>

            <div className="mt-6 flex justify-center">
              <div className="flex flex-col gap-y-3.5 p-1">
                {[...tomorrowCol1, ...tomorrowCol2].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-base font-bold text-slate-700">
                    <svg className="h-5 w-5 shrink-0 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.article>

        </div>
      </div>
    </section>
  );
}
