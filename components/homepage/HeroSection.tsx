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
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const avatarData = [
  { bg: "#3b82f6", hair: "#1e3a8a" },
  { bg: "#a855f7", hair: "#581c87" },
  { bg: "#22c55e", hair: "#14532d" },
  { bg: "#f97316", hair: "#7c2d12" },
  { bg: "#ec4899", hair: "#831843" },
];

function PersonAvatar({ small = false, bg, hair }: { small?: boolean; bg: string; hair: string }) {
  const size = small ? 16 : 28;
  return (
    <span className="rounded-full border-2 border-white shadow-sm overflow-hidden inline-block" style={{ width: size, height: size }}>
      <svg viewBox="0 0 28 28" width={size} height={size}>
        <circle cx="14" cy="14" r="14" fill={bg} />
        <circle cx="14" cy="11" r="5" fill="#f8d7c0" />
        <path d="M9 22c0-3 2.5-5 5-5s5 2 5 5v3H9v-3z" fill="#f8d7c0" />
        <path d="M9 10c0-3 2-5 5-5s5 2 5 5c0 1-1 2-2 2-2 0-3-1-3-3s-1-2-1-2-1 1-1 2-1 3-3 3-2-1-2-2z" fill={hair} />
      </svg>
    </span>
  );
}

function AvatarStack({ small = false }: { small?: boolean }) {
  return (
    <div className="flex -space-x-1.5">
      {avatarData.slice(0, small ? 5 : 4).map((data, i) => (
        <PersonAvatar key={i} small={small} bg={data.bg} hair={data.hair} />
      ))}
    </div>
  );
}

function FloatingCard({
  icon: Icon,
  title,
  description,
  iconClass,
  className,
  children,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  iconClass: string;
  className: string;
  children?: ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn(
        "absolute z-20 hidden w-[10.5rem] rounded-xl border border-slate-100 bg-white/95 p-2 shadow-[0_12px_30px_rgba(15,23,42,0.12)] backdrop-blur md:block",
        className
      )}
    >
      <div className="flex items-start gap-2">
        <div className={cn("flex h-8 w-8 shrink-0 items-center justify-center rounded-lg", iconClass)}>
          <Icon className="h-4 w-4" />
        </div>
        <div className="min-w-0">
          <p className="text-[12px] font-extrabold leading-tight text-navy">{title}</p>
          <p className="mt-0.5 text-[10px] font-semibold leading-snug text-slate-600">{description}</p>
          {children}
        </div>
      </div>
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-[540px] overflow-hidden border-b border-border bg-[#f8fbff]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_67%_42%,rgba(37,99,235,0.11)_0_1px,transparent_1.8px)] [background-size:9px_9px]" />
      <div className="pointer-events-none absolute inset-y-0 left-[33%] right-0 bg-[radial-gradient(ellipse_at_center,transparent_0_36%,#f8fbff_70%)]" />

      <div className="absolute inset-y-0 right-0 left-[30%] z-0 hidden md:block">
        <Image
          src="/hero.webp"
          alt="Student studying with laptop and headphones"
          fill
          className="object-cover object-[25%_center]"
          priority
        />
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#f8fbff] to-transparent" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#f8fbff] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1536px] px-5 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-8 md:max-w-[460px] lg:py-11"
        >
          <p className="text-[12px] font-extrabold uppercase tracking-[0.15em] text-primary">
            LEARN &middot; TEACH &middot; SUCCEED
          </p>
          <h1 className="mt-2 text-4xl font-black leading-[1.04] tracking-tight text-[#050a2a] sm:text-5xl">
            Learn Smarter.
            <br />
            Teach Better.
            <br />
            Succeed <span className="text-primary">Together.</span>
          </h1>
          <p className="mt-3 max-w-[430px] text-[15px] font-medium leading-relaxed text-[#17213a]">
            AcademIQ is the <span className="font-extrabold text-primary">global virtual learning network</span> where students,
            educators, tutors, and institutions connect, collaborate, and grow-anytime, anywhere.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Link
              href="/signup"
              className="inline-flex h-10 items-center gap-2 rounded-lg bg-primary px-5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-primary-dark"
            >
              <GraduationCap className="h-4 w-4" />
              Join AcademIQ
            </Link>
            <Link
              href="/about"
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-border bg-white px-5 text-sm font-bold text-primary shadow-sm transition-colors hover:bg-muted"
            >
              <CircleArrowRight className="h-4 w-4" />
              Discover Your Network
            </Link>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm font-bold text-primary">
            <Globe2 className="h-5 w-5" />
            Connect with learners and educators from 72+ countries
          </div>
          <div className="mt-3 flex items-center gap-3">
            <AvatarStack />
            <p className="text-xs font-bold text-[#17213a]">
              Built for students, educators & institutions worldwide
            </p>
          </div>
        </motion.div>
      </div>

      <FloatingCard
        icon={LayoutGrid}
        title="For Students"
        description="Study, collaborate & get support"
        iconClass="bg-blue-50 text-blue-600"
        className="left-[44%] top-[6%]"
      >
        <div className="mt-1 space-y-0.5 text-[10px] font-extrabold text-primary">
          <p>Study Tools</p>
          <p>Support & Tutoring</p>
        </div>
      </FloatingCard>

      <FloatingCard
        icon={GraduationCap}
        title="For Instructors"
        description="Teach, engage & empower"
        iconClass="bg-violet-50 text-violet-600"
        className="right-[5%] top-[6%]"
      >
        <div className="mt-1 space-y-0.5 text-[10px] font-extrabold text-primary">
          <p>Instructor Tools</p>
          <p>Resources & Training</p>
        </div>
      </FloatingCard>

      <FloatingCard
        icon={Video}
        title="Study Sessions"
        description="Live sessions with peers & experts"
        iconClass="bg-rose-50 text-rose-500"
        className="left-[42%] top-[34%]"
      >
        <div className="mt-1 flex items-center gap-1.5">
          <AvatarStack small />
          <span className="text-[10px] font-extrabold text-slate-700">+24</span>
        </div>
      </FloatingCard>

      <FloatingCard
        icon={Bot}
        title="Assist (AI)"
        description="AI-powered support to understand and grow"
        iconClass="bg-emerald-50 text-emerald-600"
        className="right-[5%] top-[36%]"
      >
        <div className="mt-1 flex items-center gap-1 text-[9px] font-extrabold text-emerald-700">
          <CheckCircle2 className="h-3 w-3" />
          Always available
        </div>
      </FloatingCard>

      <FloatingCard
        icon={Users}
        title="Study Circles"
        description="Collaborate in small groups & make progress together"
        iconClass="bg-orange-50 text-orange-500"
        className="left-[44%] top-[64%]"
      >
        <div className="mt-1 flex items-center gap-1.5">
          <AvatarStack small />
          <span className="text-[10px] font-extrabold text-slate-700">+18</span>
        </div>
      </FloatingCard>

      <FloatingCard
        icon={Headphones}
        title="Tutoring"
        description="Connect with tutors for personalized help"
        iconClass="bg-purple-50 text-purple-600"
        className="right-[6%] top-[66%]"
      />
    </section>
  );
}
