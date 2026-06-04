"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  Bot,
  CheckCircle2,
  CircleArrowRight,
  Globe2,
  GraduationCap,
  Headphones,
  LayoutGrid,
  Users,
  Video,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const avatarData = [
  { img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { img: "https://randomuser.me/api/portraits/women/68.jpg" },
  { img: "https://randomuser.me/api/portraits/men/46.jpg" },
  { img: "https://randomuser.me/api/portraits/women/12.jpg" },
];

function PersonAvatar({ small = false, img }: { small?: boolean; img: string }) {
  const size = small ? 18 : 30;
  return (
    <span
      className="inline-block overflow-hidden rounded-full border-2 border-white shadow-sm"
      style={{ width: size, height: size }}
    >
      <img
        src={img}
        alt=""
        width={size}
        height={size}
        className="object-cover"
        aria-hidden="true"
      />
    </span>
  );
}

function AvatarStack({ small = false }: { small?: boolean }) {
  return (
    <div className="flex -space-x-1.5" aria-hidden="true">
      {avatarData.slice(0, small ? 5 : 4).map((data, i) => (
        <PersonAvatar key={i} small={small} img={data.img} />
      ))}
    </div>
  );
}

// Entrance animation only — no continuous float
function FloatingCard({
  icon: Icon,
  title,
  description,
  iconClass,
  className,
  delay = 0,
  children,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  iconClass: string;
  className: string;
  delay?: number;
  children?: ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={cn("absolute z-20", className)}
      aria-hidden="true"
    >
      <div
        className={cn(
          "w-[11rem] rounded-xl border border-slate-100/80 bg-white/96 p-2.5",
          "shadow-[0_6px_24px_rgba(15,23,42,0.11)] backdrop-blur-sm"
        )}
      >
        <div className="flex items-start gap-2">
          <div
            className={cn(
              "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg",
              iconClass
            )}
          >
            <Icon className="h-4 w-4" />
          </div>
          <div className="min-w-0">
            <p className="text-[14px] font-bold leading-tight text-navy">{title}</p>
            <p className="mt-0.5 text-[13px] font-medium leading-snug text-slate-500">
              {description}
            </p>
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const heroContent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const heroItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function HeroSection() {
  return (
    <section
      className="relative flex min-h-[560px] flex-col overflow-hidden border-b border-border bg-[#f8fbff] md:block"
      aria-labelledby="hero-heading"
    >
      {/* Dot pattern */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_67%_42%,rgba(37,99,235,0.09)_0_1px,transparent_1.8px)] [background-size:10px_10px]"
        aria-hidden="true"
      />
      {/* Right fade */}
      <div
        className="pointer-events-none absolute inset-y-0 left-[33%] right-0 z-0 bg-[radial-gradient(ellipse_at_center,transparent_0_36%,#f8fbff_70%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-10">
        <motion.div
          variants={heroContent}
          initial="hidden"
          animate="show"
          className="py-10 md:max-w-[500px] lg:py-16"
        >
          {/* Badge */}
          <motion.div variants={heroItem}>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-white px-3.5 py-1 text-[13px] font-bold uppercase tracking-[0.1em] text-primary shadow-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              Learn &middot; Teach &middot; Succeed
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            id="hero-heading"
            variants={heroItem}
            className="mt-4 text-4xl font-black leading-[1.06] tracking-tight text-navy sm:text-5xl"
          >
            Learn Smarter.
            <br />
            Teach Better.
            <br />
            Succeed{" "}
            <span className="text-primary">Together.</span>
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            variants={heroItem}
            className="mt-4 max-w-[440px] text-[16px] font-normal leading-relaxed text-slate-600"
          >
            AcademIQ is the{" "}
            <strong className="font-semibold text-navy">
              global virtual learning network
            </strong>{" "}
            where students, educators, tutors, and institutions connect,
            collaborate, and grow — anytime, anywhere.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={heroItem}
            className="mt-6 flex flex-wrap items-center gap-3"
          >
            <Link
              href="/signup"
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-6 text-[15px] font-bold text-white transition-colors hover:bg-primary-dark"
            >
              <GraduationCap className="h-4 w-4" aria-hidden="true" />
              Join AcademIQ
            </Link>
            <Link
              href="/about"
              className="inline-flex h-11 items-center gap-2 rounded-lg border border-border bg-white px-6 text-[15px] font-bold text-primary transition-colors hover:bg-muted"
            >
              <CircleArrowRight className="h-4 w-4" aria-hidden="true" />
              Discover Your Network
            </Link>
          </motion.div>

          {/* App store links */}
          <motion.div
            variants={heroItem}
            className="mt-4 flex flex-wrap items-center gap-3"
          >
            <Link
              href="#"
              aria-label="Download on the App Store"
              className="inline-flex h-11 items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-5 text-[14px] font-semibold text-navy shadow-sm transition-colors hover:border-slate-300 hover:bg-slate-50"
            >
              <svg viewBox="0 0 384 512" className="h-5 w-5" fill="#0a1628" aria-hidden="true">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
              </svg>
              App Store
            </Link>
            <Link
              href="#"
              aria-label="Get it on Google Play"
              className="inline-flex h-11 items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-5 text-[14px] font-semibold text-navy shadow-sm transition-colors hover:border-slate-300 hover:bg-slate-50"
            >
              <svg viewBox="0 0 512 512" className="h-5 w-5" aria-hidden="true">
                <path fill="#2196f3" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z" />
                <path fill="#4caf50" d="M47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0z" />
                <path fill="#ffc107" d="M425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8z" />
                <path fill="#f44336" d="M104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
              </svg>
              Google Play
            </Link>
          </motion.div>

          {/* Globe stat */}
          <motion.div
            variants={heroItem}
            className="mt-5 flex items-center gap-2 text-[15px] font-semibold text-primary"
          >
            <Globe2 className="h-5 w-5 shrink-0" aria-hidden="true" />
            Connect with learners and educators from 72+ countries
          </motion.div>

          {/* Avatar row */}
          <motion.div variants={heroItem} className="mt-3 flex items-center gap-3">
            <AvatarStack />
            <p className="text-[14px] font-medium text-slate-600">
              Built for students, educators &amp; institutions worldwide
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Hero image + floating info cards */}
      <div className="relative z-0 h-[340px] w-full shrink-0 overflow-hidden md:absolute md:inset-y-0 md:left-[30%] md:right-0 md:h-auto md:w-auto md:overflow-visible">
        <Image
          src="/hero.webp"
          alt="Student studying with laptop and headphones in a modern learning environment"
          fill
          className="object-cover object-[80%_center]"
          priority
        />
        <div
          className="hidden md:absolute md:inset-y-0 md:left-0 md:block md:w-20 md:bg-gradient-to-r md:from-[#f8fbff] md:to-transparent"
          aria-hidden="true"
        />
        <div
          className="hidden md:absolute md:inset-y-0 md:right-0 md:block md:w-16 md:bg-gradient-to-l md:from-[#f8fbff] md:to-transparent"
          aria-hidden="true"
        />

        <FloatingCard
          icon={LayoutGrid}
          title="For Students"
          description="Study, collaborate & get support"
          iconClass="bg-blue-50 text-blue-600"
          className="left-[5%] top-[10%] origin-top-left scale-75 md:left-[20%] md:top-[6%] md:scale-100"
          delay={0.4}
        >
          <div className="mt-1 space-y-0.5 text-[13px] font-semibold text-primary">
            <p>Study Tools</p>
            <p>Support &amp; Tutoring</p>
          </div>
        </FloatingCard>

        <FloatingCard
          icon={GraduationCap}
          title="For Instructors"
          description="Teach, engage & empower"
          iconClass="bg-violet-50 text-violet-600"
          className="right-[5%] top-[10%] origin-top-right scale-75 md:right-[7%] md:top-[6%] md:scale-100"
          delay={0.5}
        >
          <div className="mt-1 space-y-0.5 text-[13px] font-semibold text-primary">
            <p>Instructor Tools</p>
            <p>Resources &amp; Training</p>
          </div>
        </FloatingCard>

        <FloatingCard
          icon={Video}
          title="Study Sessions"
          description="Live sessions with peers & experts"
          iconClass="bg-rose-50 text-rose-500"
          className="left-[2%] top-[40%] origin-top-left scale-75 md:left-[17%] md:top-[34%] md:scale-100"
          delay={0.55}
        >
          <div className="mt-1 flex items-center gap-1.5">
            <AvatarStack small />
            <span className="text-[13px] font-semibold text-slate-600">+24</span>
          </div>
        </FloatingCard>

        <FloatingCard
          icon={Bot}
          title="Assist (AI)"
          description="AI-powered support to understand and grow"
          iconClass="bg-emerald-50 text-emerald-600"
          className="right-[2%] top-[45%] origin-top-right scale-75 md:right-[7%] md:top-[36%] md:scale-100"
          delay={0.6}
        >
          <div className="mt-1.5 flex items-center gap-1 text-[13px] font-semibold text-emerald-700">
            <CheckCircle2 className="h-3 w-3" aria-hidden="true" />
            Always available
          </div>
        </FloatingCard>

        <FloatingCard
          icon={Users}
          title="Study Circles"
          description="Collaborate in small groups"
          iconClass="bg-orange-50 text-orange-500"
          className="left-[5%] top-[70%] origin-top-left scale-75 md:left-[20%] md:top-[64%] md:scale-100"
          delay={0.65}
        >
          <div className="mt-1 flex items-center gap-1.5">
            <AvatarStack small />
            <span className="text-[13px] font-semibold text-slate-600">+18</span>
          </div>
        </FloatingCard>

        <FloatingCard
          icon={Headphones}
          title="Tutoring"
          description="Connect with tutors for personalized help"
          iconClass="bg-purple-50 text-purple-600"
          className="right-[4%] top-[75%] origin-top-right scale-75 md:right-[8%] md:top-[66%] md:scale-100"
          delay={0.7}
        />
      </div>
    </section>
  );
}
