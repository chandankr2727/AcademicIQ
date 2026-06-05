"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Buildings,
  CalendarBlank,
  CheckCircle,
  Compass,
  Question,
  Users,
} from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

const studentPoints = [
  "Find study partners & join study circles",
  "Get help when you're stuck",
  "Access tutoring & AI support",
  "Stay organized & on track",
  "Discover opportunities & build your future",
];

const instructorPoints = [
  "Teach live & engage students",
  "Create courses & resources",
  "Offer tutoring & office hours",
  "Build your audience",
  "Earn income & grow your brand",
];

const institutionPoints = [
  "Extend learning beyond the LMS",
  "Support student success",
  "Engagement & insights",
  "Tutoring, advising & communities",
  "Brand your academic network",
];

const sideLinks = [
  { icon: Question,      label: "Find Help", desc: "Get answers instantly",          color: "from-blue-400 to-blue-500",     shadow: "shadow-blue-200" },
  { icon: Compass,       label: "Discover",  desc: "Find resources & opportunities", color: "from-violet-400 to-violet-500", shadow: "shadow-violet-200" },
  { icon: CalendarBlank, label: "Plan",      desc: "Stay on track with your goals",  color: "from-emerald-400 to-emerald-500", shadow: "shadow-emerald-200" },
  { icon: Users,         label: "Connect",   desc: "Find people & study groups",     color: "from-orange-400 to-orange-500", shadow: "shadow-orange-200" },
];

function PointList({ points, color = "text-emerald-500" }: { points: string[]; color?: string }) {
  return (
    <ul className="mt-3 space-y-2">
      {points.map((point) => (
        <li key={point} className="flex items-start gap-2.5 text-base font-medium leading-snug text-slate-700">
          <CheckCircle weight="duotone" size={17} className={`mt-[2px] shrink-0 ${color}`} aria-hidden="true" />
          <span>{point}</span>
        </li>
      ))}
    </ul>
  );
}

// Card with parallax image
function ParallaxCard({
  label, labelColor, title, points, pointColor, href, ctaLabel,
  imageSrc, imageAlt, imageRight = false, delay = 0,
}: {
  label: string; labelColor: string; title: string; points: string[];
  pointColor?: string; href: string; ctaLabel: string;
  imageSrc: string; imageAlt: string; imageRight?: boolean; delay?: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 36, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      whileHover={{ y: -4, transition: { type: "spring", stiffness: 240, damping: 24 } }}
      className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm hover:shadow-[0_12px_40px_rgba(15,23,42,0.1)] transition-shadow duration-300"
    >
      <div className={`flex flex-col ${imageRight ? "sm:flex-row-reverse" : "sm:flex-row"}`}>
        <div className="relative h-[280px] sm:h-auto sm:w-[220px] lg:w-[240px] shrink-0 overflow-hidden">
          <motion.div style={{ y: imageY }} className="absolute inset-[-5%] will-change-transform">
            <Image src={imageSrc} alt={imageAlt} fill className="object-cover object-center" sizes="(max-width: 640px) 100vw, 240px" />
          </motion.div>
        </div>
        <div className="flex flex-col justify-center p-5 lg:p-6 flex-1">
          <p className={`text-sm font-bold uppercase tracking-wider ${labelColor}`}>{label}</p>
          <h3 className="mt-1 text-xl font-black text-navy">{title}</h3>
          <PointList points={points} color={pointColor} />
          <Link href={href} className="mt-4 inline-flex items-center gap-1.5 text-base font-semibold text-primary hover:underline">
            {ctaLabel} <ArrowRight weight="bold" size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export function WhyAcademiqSection() {
  return (
    <section
      className="bg-[#f8fbff] py-8 lg:py-10"
      aria-labelledby="why-academiq-heading"
    >
      <div className="mx-auto max-w-[1536px] px-4 sm:px-6 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-6 text-center"
        >
          <span className="inline-block mb-2 text-[12px] font-bold uppercase tracking-widest text-primary">
            Built for everyone
          </span>
          <h2 id="why-academiq-heading" className="text-3xl font-black text-navy sm:text-4xl">
            Why AcademIQ?
          </h2>
          <p className="mt-3 mx-auto max-w-lg text-lg font-medium leading-relaxed text-slate-700">
            Designed for every participant in the learning journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {/* 1. Students Card */}
          <ParallaxCard
            label="For Students" labelColor="text-emerald-600"
            title="Why Students Choose Us" points={studentPoints}
            href="/learn" ctaLabel="Explore for Students"
            imageSrc="/why-students.webp" imageAlt="Student using AcademIQ"
            delay={0}
          />

          {/* 2. Instructors Card */}
          <ParallaxCard
            label="For Instructors" labelColor="text-violet-600"
            title="Why Instructors Join" points={instructorPoints} pointColor="text-violet-500"
            href="/teach" ctaLabel="Explore for Instructors"
            imageSrc="/why-instructor.webp" imageAlt="Instructor teaching online" imageRight
            delay={0.08}
          />

          {/* 3. Institutions Card (Now using ParallaxCard for uniformity) */}
          <ParallaxCard
            label="For Institutions" labelColor="text-blue-600"
            title="For Institutions" points={institutionPoints} pointColor="text-blue-500"
            href="/solutions" ctaLabel="Schedule a Demo"
            imageSrc="/for-institution.webp" imageAlt="Institution using AcademIQ"
            delay={0.15}
          />

          {/* 4. Quick Access Card */}
          <motion.div
            initial={{ opacity: 0, x: 40, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
            className="flex flex-col justify-center rounded-2xl border border-border bg-white p-6 shadow-sm hover:shadow-[0_12px_40px_rgba(15,23,42,0.1)] transition-shadow duration-300"
          >
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-slate-500">
              Quick access
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1">
              {sideLinks.map((link) => (
                <motion.div
                  key={link.label}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 340, damping: 20 }}
                  className="flex items-center gap-3 rounded-xl border border-border bg-slate-50/60 p-3 hover:bg-white hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <div
                    className={cn(
                      "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br shadow-md",
                      link.color, link.shadow
                    )}
                  >
                    <link.icon weight="duotone" size={20} color="#fff" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-base font-bold leading-tight text-navy">{link.label}</p>
                    <p className="mt-1 text-sm font-medium leading-snug text-slate-700">{link.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
