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
  Users,
  Video,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const avatarColors = [
  "bg-blue-400",
  "bg-purple-400",
  "bg-green-400",
  "bg-orange-400",
  "bg-pink-400",
];

function AvatarStack({ small = false }: { small?: boolean }) {
  return (
    <div className="flex -space-x-1.5">
      {avatarColors.slice(0, small ? 5 : 4).map((color) => (
        <span
          key={color}
          className={cn(
            "rounded-full border-2 border-white shadow-sm",
            small ? "h-5 w-5" : "h-7 w-7",
            color
          )}
        />
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
        "absolute z-20 hidden w-44 rounded-xl border border-slate-100 bg-white/95 p-3 shadow-[0_12px_30px_rgba(15,23,42,0.12)] backdrop-blur md:block",
        className
      )}
    >
      <div className="flex items-start gap-2.5">
        <div className={cn("flex h-9 w-9 shrink-0 items-center justify-center rounded-lg", iconClass)}>
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <p className="text-[13px] font-extrabold leading-tight text-navy">{title}</p>
          <p className="mt-1 text-[11px] font-semibold leading-snug text-slate-700">{description}</p>
          {children}
        </div>
      </div>
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-[420px] overflow-hidden border-b border-border bg-[#f8fbff]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_67%_42%,rgba(37,99,235,0.11)_0_1px,transparent_1.8px)] [background-size:9px_9px]" />
      <div className="pointer-events-none absolute inset-y-0 left-[33%] right-0 bg-[radial-gradient(ellipse_at_center,transparent_0_36%,#f8fbff_70%)]" />

      <div className="absolute inset-y-0 right-0 left-[44%] z-0 hidden md:block">
        <Image
          src="/hero.webp"
          alt="Student studying with laptop and headphones"
          fill
          className="object-cover object-left"
          priority
        />
        <div className="absolute inset-y-0 left-0 w-36 bg-gradient-to-r from-[#f8fbff] to-transparent" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#f8fbff] to-transparent" />
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
        icon={Users}
        title="For Students"
        description="Study, collaborate & get support"
        iconClass="bg-blue-50 text-blue-600"
        className="left-[44.5%] top-4"
      >
        <div className="mt-2 space-y-1 text-[11px] font-extrabold text-primary">
          <p>Study Tools</p>
          <p>Support & Tutoring</p>
        </div>
      </FloatingCard>

      <FloatingCard
        icon={GraduationCap}
        title="For Instructors"
        description="Teach, engage & empower"
        iconClass="bg-violet-50 text-violet-600"
        className="right-[9%] top-4"
      >
        <div className="mt-2 space-y-1 text-[11px] font-extrabold text-primary">
          <p>Instructor Tools</p>
          <p>Resources & Training</p>
        </div>
      </FloatingCard>

      <FloatingCard
        icon={Video}
        title="Study Sessions"
        description="Live sessions with peers & experts"
        iconClass="bg-rose-50 text-rose-500"
        className="left-[43.5%] top-[33%]"
      >
        <div className="mt-2 flex items-center gap-2">
          <AvatarStack small />
          <span className="text-[11px] font-extrabold text-slate-700">+24</span>
        </div>
      </FloatingCard>

      <FloatingCard
        icon={Bot}
        title="Assist (AI)"
        description="AI-powered support to understand and grow"
        iconClass="bg-emerald-50 text-emerald-600"
        className="right-[9%] top-[35%]"
      >
        <div className="mt-2 flex items-center gap-1 text-[10px] font-extrabold text-emerald-700">
          <CheckCircle2 className="h-3 w-3" />
          Always available
        </div>
      </FloatingCard>

      <FloatingCard
        icon={Users}
        title="Study Circles"
        description="Collaborate in small groups & make progress together"
        iconClass="bg-orange-50 text-orange-500"
        className="left-[45%] top-[64%]"
      >
        <div className="mt-2 flex items-center gap-2">
          <AvatarStack small />
          <span className="text-[11px] font-extrabold text-slate-700">+18</span>
        </div>
      </FloatingCard>

      <FloatingCard
        icon={Headphones}
        title="Tutoring"
        description="Connect with tutors for personalized help"
        iconClass="bg-purple-50 text-purple-600"
        className="right-[10%] top-[66%]"
      />
    </section>
  );
}
