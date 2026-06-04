"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CalendarDays,
  CheckCircle2,
  Compass,
  HelpCircle,
  Users,
} from "lucide-react";

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
  { icon: HelpCircle, label: "Find Help",  desc: "Get answers instantly" },
  { icon: Compass,    label: "Discover",   desc: "Find resources & opportunities" },
  { icon: CalendarDays, label: "Plan",     desc: "Stay on track with your goals" },
  { icon: Users,      label: "Connect",    desc: "Find people & study groups" },
];

function PointList({
  points,
  color = "text-emerald-500",
}: {
  points: string[];
  color?: string;
}) {
  return (
    <ul className="mt-3 space-y-2">
      {points.map((point) => (
        <li
          key={point}
          className="flex items-start gap-2.5 text-[15px] font-normal leading-snug text-navy"
        >
          <CheckCircle2
            className={cn(`mt-[2px] h-4 w-4 shrink-0`, color)}
            aria-hidden="true"
          />
          <span>{point}</span>
        </li>
      ))}
    </ul>
  );
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const articleVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function WhyAcademiqSection() {
  return (
    <section
      className="bg-white py-14 lg:py-20"
      aria-labelledby="why-academiq-heading"
    >
      <div className="mx-auto max-w-[1536px] px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h2
            id="why-academiq-heading"
            className="text-3xl font-black text-navy sm:text-4xl"
          >
            Why AcademIQ?
          </h2>
          <p className="mt-3 mx-auto max-w-lg text-[16px] leading-relaxed text-muted-foreground">
            Designed for every participant in the learning journey.
          </p>
        </motion.div>

        {/* Three articles */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 gap-5 lg:grid-cols-12"
        >
          {/* Students */}
          <motion.article
            variants={articleVariants}
            whileHover={{ y: -4, transition: { type: "spring", stiffness: 260, damping: 22 } }}
            className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm lg:col-span-4"
          >
            <div className="flex flex-col sm:grid sm:grid-cols-[150px_1fr]">
              <div className="overflow-hidden">
                <Image
                  src="/why-students.webp"
                  alt="Student using AcademIQ on their laptop"
                  width={0}
                  height={0}
                  sizes="(max-width: 640px) 100vw, 150px"
                  className="h-auto w-full"
                />
              </div>
              <div className="p-5 lg:p-6">
                <p className="text-[13px] font-bold uppercase tracking-wider text-emerald-600">
                  For Students
                </p>
                <h3 className="mt-1 text-[17px] font-bold text-navy">
                  Why Students Choose Us
                </h3>
                <PointList points={studentPoints} />
                <Link
                  href="/learn"
                  className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-primary hover:underline"
                >
                  Explore for Students{" "}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </motion.article>

          {/* Instructors */}
          <motion.article
            variants={articleVariants}
            whileHover={{ y: -4, transition: { type: "spring", stiffness: 260, damping: 22 } }}
            className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm lg:col-span-4"
          >
            <div className="flex flex-col sm:grid sm:grid-cols-[1fr_150px]">
              <div className="p-5 lg:p-6">
                <p className="text-[13px] font-bold uppercase tracking-wider text-violet-600">
                  For Instructors
                </p>
                <h3 className="mt-1 text-[17px] font-bold text-navy">
                  Why Instructors Join
                </h3>
                <PointList points={instructorPoints} color="text-violet-500" />
                <Link
                  href="/teach"
                  className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-primary hover:underline"
                >
                  Explore for Instructors{" "}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
              <div className="overflow-hidden">
                <Image
                  src="/why-instructor.webp"
                  alt="Instructor teaching online via AcademIQ"
                  width={0}
                  height={0}
                  sizes="(max-width: 640px) 100vw, 150px"
                  className="h-auto w-full"
                />
              </div>
            </div>
          </motion.article>

          {/* Institutions */}
          <motion.article
            variants={articleVariants}
            whileHover={{ y: -4, transition: { type: "spring", stiffness: 260, damping: 22 } }}
            className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm lg:col-span-4"
          >
            <div className="flex flex-col sm:grid sm:grid-cols-[1fr_120px]">
              <div className="p-5 lg:p-6">
                <p className="text-[13px] font-bold uppercase tracking-wider text-blue-600">
                  For Institutions
                </p>
                <div className="mt-1 flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-primary" aria-hidden="true" />
                  <h3 className="text-[17px] font-bold text-navy">For Institutions</h3>
                </div>
                <PointList points={institutionPoints} color="text-blue-500" />
                <Link
                  href="/solutions"
                  className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-primary hover:underline"
                >
                  Schedule a Demo{" "}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
              <div className="grid grid-cols-2 divide-y divide-border border-t sm:grid-cols-1 sm:border-l sm:border-t-0 border-border">
                {sideLinks.map((link) => (
                  <div key={link.label} className="flex items-center gap-2.5 px-3 py-3">
                    <link.icon className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <div>
                      <p className="text-[14px] font-bold leading-tight text-navy">
                        {link.label}
                      </p>
                      <p className="text-[13px] leading-tight text-muted-foreground">
                        {link.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
