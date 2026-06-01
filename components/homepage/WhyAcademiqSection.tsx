"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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
  { icon: HelpCircle, label: "Find Help", desc: "Get answers instantly" },
  { icon: Compass, label: "Discover", desc: "Find resources & opportunities" },
  { icon: CalendarDays, label: "Plan", desc: "Stay on track with your goals" },
  { icon: Users, label: "Connect", desc: "Find people & study groups" },
];

function PointList({
  points,
  color = "text-emerald-500",
}: {
  points: string[];
  color?: string;
}) {
  return (
    <ul className="mt-3 space-y-[5px]">
      {points.map((point) => (
        <li key={point} className="flex items-start gap-2 text-[11px] font-semibold leading-tight text-navy">
          <CheckCircle2 className={`mt-[1px] h-3.5 w-3.5 shrink-0 ${color}`} />
          <span>{point}</span>
        </li>
      ))}
    </ul>
  );
}

export function WhyAcademiqSection() {
  return (
    <section className="bg-white pt-1">
      <div className="mx-auto max-w-[1536px] px-5 lg:px-10">
        <h2 className="mb-1 text-center text-xl font-black leading-tight text-navy">
          Why AcademIQ?
        </h2>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden rounded-lg bg-[#f1fcf7] shadow-sm lg:col-span-4"
          >
            <div className="flex flex-col sm:grid sm:min-h-[145px] sm:grid-cols-[150px_1fr]">
              <div className="relative aspect-[4/5] w-full shrink-0 overflow-hidden sm:aspect-auto sm:h-auto sm:w-[150px]">
                <Image src="/why-students.webp" alt="Student" fill sizes="(max-width: 640px) 100vw, 150px" className="object-cover object-top sm:object-center" />
              </div>
              <div className="p-5">
                <h3 className="text-[15px] font-black text-navy">Why Students Choose Us</h3>
                <PointList points={studentPoints} />
                <Link href="/learn" className="mt-3 inline-flex items-center gap-1 text-[13px] font-black text-primary">
                  Explore for Students <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="overflow-hidden rounded-lg bg-[#f5f0ff] shadow-sm lg:col-span-4"
          >
            <div className="flex flex-col-reverse sm:grid sm:min-h-[145px] sm:grid-cols-[1fr_150px]">
              <div className="p-5">
                <h3 className="text-[15px] font-black text-navy">Why Instructors Join</h3>
                <PointList points={instructorPoints} color="text-violet-600" />
                <Link href="/teach" className="mt-3 inline-flex items-center gap-1 text-[13px] font-black text-primary">
                  Explore for Instructors <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="relative aspect-[4/5] w-full shrink-0 overflow-hidden sm:aspect-auto sm:h-auto sm:w-[150px]">
                <Image src="/why-instructor.webp" alt="Instructor" fill sizes="(max-width: 640px) 100vw, 150px" className="object-cover object-top sm:object-center" />
              </div>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="overflow-hidden rounded-lg bg-[#f3f7ff] shadow-sm lg:col-span-4"
          >
            <div className="flex flex-col sm:grid sm:min-h-[145px] sm:grid-cols-[1fr_122px]">
              <div className="p-5">
                <div className="flex items-center gap-3">
                  <Building2 className="h-7 w-7 text-primary" />
                  <h3 className="text-[16px] font-black text-navy">For Institutions</h3>
                </div>
                <PointList points={institutionPoints} color="text-blue-600" />
                <Link href="/solutions" className="mt-3 inline-flex items-center gap-1 text-[13px] font-black text-primary">
                  Schedule a Demo <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-1 divide-y divide-slate-200 border-t sm:border-t-0 sm:border-l border-slate-200 bg-white/45">
                {sideLinks.map((link) => (
                  <div key={link.label} className="flex items-center gap-2 px-3 py-2">
                    <link.icon className="h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <p className="text-[10px] font-black leading-tight text-navy">{link.label}</p>
                      <p className="text-[9px] font-semibold leading-tight text-muted-foreground">{link.desc}</p>
                    </div>
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
