"use client";

import Image from "next/image";
import Link from "next/link";
import { Users, GraduationCap, Video, Bot, UserCheck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/common/Button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const avatarColors = ["bg-blue-400", "bg-purple-400", "bg-green-400", "bg-orange-400", "bg-pink-400"];

export function HeroSection() {
  return (
    <section className="relative min-h-[560px] overflow-hidden bg-gradient-to-b from-white to-muted">

      {/* ── FULL-BLEED HERO IMAGE — no border radius, bleeds to right viewport edge ── */}
      <div className="absolute inset-y-0 right-0 left-[44%] z-0">
        <Image
          src="/hero.webp"
          alt="Student studying with laptop and headphones"
          fill
          className="object-cover object-left"
          priority
        />
        {/* Soft left-edge blend so image merges into the white text area */}
        <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-white/60 to-transparent" />
      </div>

      {/* ── LEFT TEXT CONTENT ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-14 lg:max-w-[460px]"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-primary">
            LEARN &middot; TEACH &middot; SUCCEED
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl lg:text-6xl">
            Learn Smarter.
            <br />
            Teach Better.
            <br />
            Succeed{" "}
            <span className="text-primary">Together.</span>
          </h1>
          <p className="mt-5 max-w-sm text-base leading-relaxed text-muted-foreground">
            AcademIQ is the connected learning network for students and
            instructors. Collaborate, teach, learn, and get AI-powered
            support—anytime, anywhere.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Button href="/signup" size="lg">Join AcademIQ</Button>
            <Button href="/about" variant="secondary" size="lg">Explore the Platform</Button>
          </div>
          <p className="mt-5 text-sm font-medium text-primary">
            For Students. For Instructors. Together.
          </p>
        </motion.div>
      </div>

      {/* ── ALL 6 FLOATING CARDS — positioned relative to section, not inside image div ── */}

      {/* 1. For Students — top-left of image area */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="absolute top-[9%] left-[44%] z-20 w-40 rounded-xl bg-white p-3 shadow-lg sm:w-44"
      >
        <div className="flex items-start gap-2">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/10">
            <Users className="h-4 w-4 text-primary" />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold text-navy sm:text-sm">For Students</p>
            <p className="mt-0.5 text-[10px] leading-snug text-muted-foreground">
              Study, collaborate, and get support
            </p>
            <div className="mt-1.5 flex flex-col gap-0.5">
              <Link href="/learn/study-tools" className="text-[10px] font-medium text-primary hover:underline sm:text-xs">
                Study Tools
              </Link>
              <Link href="/learn/support" className="text-[10px] font-medium text-primary hover:underline sm:text-xs">
                Support &amp; Tutoring
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 2. For Instructors — top-right of image area */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.35 }}
        className="absolute top-[9%] right-[10%] z-20 w-40 rounded-xl bg-white p-3 shadow-lg sm:w-44"
      >
        <div className="flex items-start gap-2">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/10">
            <GraduationCap className="h-4 w-4 text-primary" />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold text-navy sm:text-sm">For Instructors</p>
            <p className="mt-0.5 text-[10px] leading-snug text-muted-foreground">
              Teach, engage, and empower
            </p>
            <div className="mt-1.5 flex flex-col gap-0.5">
              <Link href="/teach/tools" className="text-[10px] font-medium text-primary hover:underline sm:text-xs">
                Instructor Tools
              </Link>
              <Link href="/teach/resources" className="text-[10px] font-medium text-primary hover:underline sm:text-xs">
                Resources &amp; Training
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 3. Study Sessions — mid-left of image */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="absolute top-[40%] left-[43%] z-20 w-44 rounded-xl bg-white p-3 shadow-lg sm:w-52"
      >
        <div className="flex items-start gap-2">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/10">
            <Video className="h-4 w-4 text-primary" />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold text-navy sm:text-sm">Study Sessions</p>
            <p className="mt-0.5 text-[10px] leading-snug text-muted-foreground">
              Live sessions with peers and subject experts.
            </p>
            <p className="mt-1 text-[10px] font-medium text-primary sm:text-xs">Today · 7:00 PM ET</p>
            <div className="mt-1.5 flex items-center gap-1.5">
              <div className="flex -space-x-1.5">
                {avatarColors.map((color, idx) => (
                  <div key={idx} className={cn("h-4 w-4 rounded-full border-2 border-white sm:h-5 sm:w-5", color)} />
                ))}
              </div>
              <span className="text-[10px] font-medium text-muted-foreground sm:text-xs">+24</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 4. Assist — mid-right of image */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.45 }}
        className="absolute top-[36%] right-[5%] z-20 w-40 rounded-xl bg-white p-3 shadow-lg sm:w-44"
      >
        <div className="flex items-start gap-2">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/10">
            <Bot className="h-4 w-4 text-primary" />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold text-navy sm:text-sm">Assist</p>
            <p className="mt-0.5 text-[10px] leading-snug text-muted-foreground">
              AI-powered academic support to help you understand and grow.
            </p>
            <div className="mt-1.5 flex items-center gap-1">
              <CheckCircle2 className="h-3 w-3 text-emerald-500" />
              <span className="text-[10px] text-emerald-600 sm:text-xs">Always available</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 5. Study Circles — lower-left of image */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="absolute top-[62%] left-[41%] z-20 w-44 rounded-xl bg-white p-3 shadow-lg sm:w-48"
      >
        <div className="flex items-start gap-2">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/10">
            <Users className="h-4 w-4 text-primary" />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold text-navy sm:text-sm">Study Circles (Group Study)</p>
            <p className="mt-0.5 text-[10px] leading-snug text-muted-foreground">
              Collaborate in small groups and make progress together.
            </p>
            <div className="mt-1.5 flex items-center gap-1.5">
              <div className="flex -space-x-1.5">
                {avatarColors.map((color, idx) => (
                  <div key={idx} className={cn("h-4 w-4 rounded-full border-2 border-white sm:h-5 sm:w-5", color)} />
                ))}
              </div>
              <span className="text-[10px] font-medium text-muted-foreground sm:text-xs">+18</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 6. Tutoring — lower-right of image */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.55 }}
        className="absolute top-[62%] right-[5%] z-20 w-40 rounded-xl bg-white p-3 shadow-lg sm:w-44"
      >
        <div className="flex items-start gap-2">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/10">
            <UserCheck className="h-4 w-4 text-primary" />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold text-navy sm:text-sm">Tutoring</p>
            <p className="mt-0.5 text-[10px] leading-snug text-muted-foreground">
              Connect with instructors 1:1 when you need personalized support.
            </p>
          </div>
        </div>
      </motion.div>

    </section>
  );
}
