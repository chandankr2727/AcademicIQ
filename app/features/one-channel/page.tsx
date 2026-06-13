"use client";

import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  ChatCircle,
  UsersThree,
  ShieldCheck,
  FileText,
  VideoCamera,
  GraduationCap,
  Buildings,
  Briefcase,
  UserCheck,
  Calendar,
  ArrowLeft,
  ArrowRight,
  Chats,
  FolderOpen,
  FilePdf,
  FileDoc,
  FilePpt,
} from "@phosphor-icons/react";

export default function OneChannelDetailPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[#ffffff] text-[#0a1628] font-sans">

        {/* ── Breadcrumb & Hero Section ── */}
        <section className="relative overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-24 bg-gradient-to-b from-[#f8fbff] to-white">
          <div className="relative mx-auto max-w-[1280px] px-5 lg:px-10">
            {/* Breadcrumb */}
            <nav className="mb-8 flex items-center gap-2 text-[14px] font-semibold" aria-label="Breadcrumb">
              <Link href="/" className="text-primary hover:underline transition-all">All Features</Link>
              <span className="text-slate-300 font-bold" aria-hidden="true">&gt;</span>
              <span className="text-slate-700">ONE Channel</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-center">
              {/* Left Column: Text Content */}
              <div className="lg:col-span-5 flex flex-col">
                <h1 className="text-[2.5rem] sm:text-[3rem] font-black text-navy leading-[1.08] tracking-tight">
                  ONE Channel
                </h1>
                <h2 className="mt-4 text-[1.375rem] sm:text-[1.625rem] font-extrabold text-navy leading-snug tracking-tight">
                  All academic communication in one place.
                </h2>
                <p className="mt-5 text-[1rem] sm:text-[1.0625rem] font-normal leading-[1.8] text-slate-600">
                  Connect with instructors, tutors, advisors, study circles, and support services through organized threads — so nothing gets lost and every conversation moves learning forward.
                </p>

                {/* 3-Column Features list */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-100">
                  {/* Feature 1 */}
                  <div className="flex flex-col gap-2">
                    <div className="text-primary">
                      <ChatCircle size={24} weight="duotone" />
                    </div>
                    <p className="text-[0.9375rem] font-bold text-[#0a1628] leading-snug">
                      All conversations.<br />One place.
                    </p>
                  </div>
                  {/* Feature 2 */}
                  <div className="flex flex-col gap-2">
                    <div className="text-primary">
                      <UsersThree size={24} weight="duotone" />
                    </div>
                    <p className="text-[0.9375rem] font-bold text-[#0a1628] leading-snug">
                      The right people.<br />Right when you need them.
                    </p>
                  </div>
                  {/* Feature 3 */}
                  <div className="flex flex-col gap-2">
                    <div className="text-primary">
                      <ShieldCheck size={24} weight="duotone" />
                    </div>
                    <p className="text-[0.9375rem] font-bold text-[#0a1628] leading-snug">
                      Organized, searchable<br />&amp; always accessible.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Mockup Image */}
              <div className="lg:col-span-7 flex justify-center relative">
                {/* Decorative Blue Shapes in Background */}
                <div className="absolute -top-12 -right-12 w-[360px] h-[360px] bg-[#eff6ff] rounded-full -z-10" />
                <div className="absolute -bottom-8 -left-8 w-[220px] h-[220px] bg-[#e0f2fe]/70 rounded-full -z-10" />

                <div className="relative w-full max-w-[620px] aspect-[1390/1132] rounded-[24px] border border-[#e2e8f0] bg-white shadow-[0_20px_50px_rgba(59,130,246,0.12)] overflow-hidden">
                  <Image
                    src="/OneChannel Hero.png"
                    alt="ONE Channel Mockup"
                    fill
                    className="object-cover rounded-[24px]"
                    priority
                    sizes="(max-width: 768px) 100vw, 55vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── What You Can Do in ONE Channel Section ── */}
        <section className="py-16 bg-[#ffffff]">
          <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
            <h2 className="typo-h2 font-black text-navy text-center mb-12 tracking-tight">
              What You Can Do in ONE Channel
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">

              {/* Card 1: Start & Join Academic Threads */}
              <div className="bg-white border border-[#e2e8f0] rounded-3xl p-6 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
                <div className="mb-5 text-left">
                  <div className="h-10 w-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 mb-4 shrink-0">
                    <ChatCircle size={22} weight="duotone" />
                  </div>
                  <h3 className="text-[1.125rem] font-bold text-[#0a1628] leading-tight mb-2 tracking-tight">
                    Start &amp; Join<br />Academic Threads
                  </h3>
                  <p className="text-[1rem] font-normal text-slate-600 leading-[1.75]">
                    Have focused conversations around courses, topics, projects, and more.
                  </p>
                </div>

                {/* Mockup UI Box */}
                <div className="bg-white border border-[#e2e8f0] rounded-2xl p-4 space-y-3.5 mt-4 text-left shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                  {/* Thread Item 1 */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="h-6 w-6 rounded-full bg-[#f3e8ff] flex items-center justify-center text-[11px] font-black text-[#7c3aed] shrink-0 border border-purple-100">
                        MJ
                      </div>
                      <span className="text-[13.5px] font-bold text-[#0a1628] truncate">Data Structures Help</span>
                    </div>
                    <span className="text-[12px] font-semibold text-slate-700 shrink-0">12 replies</span>
                  </div>

                  {/* Thread Item 2 */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="h-6 w-6 rounded-full bg-[#d1fae5] flex items-center justify-center text-[11px] font-black text-[#065f46] shrink-0 border border-emerald-100">
                        DW
                      </div>
                      <span className="text-[13.5px] font-bold text-[#0a1628] truncate">Biology Lab Report</span>
                    </div>
                    <span className="text-[12px] font-semibold text-slate-700 shrink-0">8 replies</span>
                  </div>

                  {/* Thread Item 3 */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="h-6 w-6 rounded-full bg-[#dbeafe] flex items-center justify-center text-[11px] font-black text-[#1d4ed8] shrink-0 border border-blue-100">
                        AC
                      </div>
                      <span className="text-[13.5px] font-bold text-[#0a1628] truncate">Career Advice</span>
                    </div>
                    <span className="text-[12px] font-semibold text-slate-700 shrink-0">5 replies</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Collaborate in Study Circles */}
              <div className="bg-white border border-[#e2e8f0] rounded-3xl p-6 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
                <div className="mb-5 text-left">
                  <div className="h-10 w-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-4 shrink-0">
                    <UsersThree size={22} weight="duotone" />
                  </div>
                  <h3 className="text-[1.125rem] font-bold text-[#0a1628] leading-tight mb-2 tracking-tight">
                    Collaborate in<br />Study Circles
                  </h3>
                  <p className="text-[1rem] font-normal text-slate-600 leading-[1.75]">
                    Work together in private or public groups to learn and achieve more.
                  </p>
                </div>

                {/* Mockup UI Box */}
                <div className="bg-white border border-[#e2e8f0] rounded-2xl p-4 text-left mt-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                  <span className="text-[14px] font-bold text-[#0a1628] block truncate">Organic Chemistry Group</span>
                  <span className="text-[12px] font-semibold text-slate-700 block mt-0.5">5 members</span>

                  <div className="flex flex-wrap gap-1.5 mt-2.5">
                    <span className="text-[11px] font-extrabold bg-blue-50 text-blue-600 px-2 py-0.5 rounded-md">Study Group</span>
                    <span className="text-[11px] font-extrabold bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md">Chemistry</span>
                  </div>

                  <div className="flex -space-x-1.5 mt-4">
                    <img src="https://randomuser.me/api/portraits/women/12.jpg" alt="J" className="h-6 w-6 rounded-full  border border-white  text-[10.5px] object-cover shrink-0" />
                    <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="A" className="h-6 w-6 rounded-full  border border-white  text-[10.5px] object-cover shrink-0" />
                    <img src="https://randomuser.me/api/portraits/men/22.jpg" alt="S" className="h-6 w-6 rounded-full  border border-white  text-[10.5px] object-cover shrink-0" />
                    <img src="https://randomuser.me/api/portraits/men/11.jpg" alt="K" className="h-6 w-6 rounded-full  border border-white  text-[10.5px] object-cover shrink-0" />
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="E" className="h-6 w-6 rounded-full  border border-white  text-[10.5px] object-cover shrink-0" />
                  </div>
                </div>
              </div>

              {/* Card 3: Share & Access Resources */}
              <div className="bg-white border border-[#e2e8f0] rounded-3xl p-6 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
                <div className="mb-5 text-left">
                  <div className="h-10 w-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 mb-4 shrink-0">
                    <FileText size={22} weight="duotone" />
                  </div>
                  <h3 className="text-[1.125rem] font-bold text-[#0a1628] leading-tight mb-2 tracking-tight">
                    Share &amp; Access<br />Resources
                  </h3>
                  <p className="text-[1rem] font-normal text-slate-600 leading-[1.75]">
                    Share files, links, notes, and tools that keep everyone on the same page.
                  </p>
                </div>

                {/* Mockup UI Box */}
                <div className="bg-white border border-[#e2e8f0] rounded-2xl p-4 space-y-3.5 mt-4 text-left shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                  {/* File 1 */}
                  <div className="flex items-center gap-2.5">
                    <div className="h-7 w-7 rounded-lg bg-red-50 flex items-center justify-center text-red-500 shrink-0">
                      <FilePdf size={16} weight="fill" />
                    </div>
                    <div className="flex flex-col truncate">
                      <span className="text-[13.5px] font-bold text-[#0a1628] leading-none truncate">Lecture Notes.pdf</span>
                      <span className="text-[11.5px] font-semibold text-slate-700 mt-0.5">PDF - 2.4 MB</span>
                    </div>
                  </div>

                  {/* File 2 */}
                  <div className="flex items-center gap-2.5">
                    <div className="h-7 w-7 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                      <FileDoc size={16} weight="fill" />
                    </div>
                    <div className="flex flex-col truncate">
                      <span className="text-[13.5px] font-bold text-[#0a1628] leading-none truncate">Problem Set 3.docx</span>
                      <span className="text-[11.5px] font-semibold text-slate-700 mt-0.5">DOCX - 1.1 MB</span>
                    </div>
                  </div>

                  {/* File 3 */}
                  <div className="flex items-center gap-2.5">
                    <div className="h-7 w-7 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500 shrink-0">
                      <FilePpt size={16} weight="fill" />
                    </div>
                    <div className="flex flex-col truncate">
                      <span className="text-[13.5px] font-bold text-[#0a1628] leading-none truncate">Review Guide.pptx</span>
                      <span className="text-[11.5px] font-semibold text-slate-700 mt-0.5">PPTX - 3.2 MB</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 4: Launch a Huddle or Study Session */}
              <div className="bg-white border border-[#e2e8f0] rounded-3xl p-6 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
                <div className="mb-5 text-left">
                  <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4 shrink-0">
                    <VideoCamera size={22} weight="duotone" />
                  </div>
                  <h3 className="text-[1.125rem] font-bold text-[#0a1628] leading-tight mb-2 tracking-tight">
                    Launch a Huddle<br />or Study Session
                  </h3>
                  <p className="text-[1rem] font-normal text-slate-600 leading-[1.75]">
                    Move conversations into live sessions instantly.
                  </p>
                </div>

                {/* Mockup UI Box */}
                <div className="bg-white border border-[#e2e8f0] rounded-2xl p-4 text-left mt-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                  <span className="text-[14px] font-bold text-[#0a1628] block truncate">Math Office Hours</span>

                  <div className="mt-1 flex items-center gap-1 bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-md text-[11px] font-bold uppercase w-fit">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Live now</span>
                  </div>

                  <button className="w-full mt-3 bg-primary text-white text-[13px] font-black py-2 rounded-xl hover:opacity-90 shadow-xs transition-all cursor-pointer">
                    Join Huddle
                  </button>

                  <div className="flex items-center gap-2 mt-3.5">
                    <div className="flex -space-x-1.5 shrink-0">
                      <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="M" className="h-5 w-5 rounded-full  border border-white  text-[9px] object-cover shrink-0" />
                      <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="S" className="h-5 w-5 rounded-full  border border-white  text-[9px] object-cover shrink-0" />
                      <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="R" className="h-5 w-5 rounded-full  border border-white  text-[9px] object-cover shrink-0" />
                    </div>
                    <span className="text-[12px] font-bold text-slate-700">+6 joined</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── How It Works Section ── */}
        <section className="py-16 bg-[#f8fbff] border-t border-b border-slate-100">
          <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
            <h2 className="typo-h2 font-black text-navy text-center mb-12 tracking-tight">
              How It Works
            </h2>

            <div className="relative grid grid-cols-1 md:grid-cols-5 gap-8 text-center">
              {/* Dotted connector line across desktop steps */}
              <div
                className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-slate-200"
                aria-hidden="true"
              />

              {/* Step 1 */}
              <div className="relative flex flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white border border-[#e2e8f0] shadow-sm text-blue-500 mb-4 shrink-0 relative z-10">
                  <ChatCircle size={24} weight="duotone" />
                </div>
                <h3 className="step-title">1. Start a Thread</h3>
                <p className="step-desc">
                  Begin a conversation on any topic or course.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white border border-[#e2e8f0] shadow-sm text-emerald-500 mb-4 shrink-0 relative z-10">
                  <UsersThree size={24} weight="duotone" />
                </div>
                <h3 className="step-title">2. Invite the Right People</h3>
                <p className="step-desc">
                  Add classmates, instructors, tutors, or advisors.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white border border-[#e2e8f0] shadow-sm text-purple-500 mb-4 shrink-0 relative z-10">
                  <FileText size={24} weight="duotone" />
                </div>
                <h3 className="step-title">3. Share &amp; Collaborate</h3>
                <p className="step-desc">
                  Exchange ideas, files, and resources in one place.
                </p>
              </div>

              {/* Step 4 */}
              <div className="relative flex flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white border border-[#e2e8f0] shadow-sm text-orange-500 mb-4 shrink-0 relative z-10">
                  <VideoCamera size={24} weight="duotone" />
                </div>
                <h3 className="step-title">4. Take Action</h3>
                <p className="step-desc">
                  Join a huddle, start a study session, or continue the discussion anytime.
                </p>
              </div>

              {/* Step 5 */}
              <div className="relative flex flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white border border-[#e2e8f0] shadow-sm text-blue-600 mb-4 shrink-0 relative z-10">
                  <ShieldCheck size={24} weight="duotone" />
                </div>
                <h3 className="step-title">5. Stay Organized</h3>
                <p className="step-desc">
                  Find everything easily with search, filters, and pinned threads.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Built for Every Role Section ── */}
        <section className="py-16 bg-[#ffffff]">
          <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
            <h2 className="typo-h2 font-black text-navy text-center mb-12 tracking-tight">
              Built for Every Role
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

              {/* Role 1: Students */}
              <div className="bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-row">
                {/* Image: Left side */}
                <div className="relative w-[38%] shrink-0 min-h-[150px]">
                  <Image
                    src="/Student.png"
                    alt="For Students"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 40vw, 15vw"
                  />
                </div>
                {/* Content: Right side */}
                <div className="flex flex-col justify-center p-5 text-left flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <GraduationCap size={22} weight="duotone" className="text-[#14b8a6] shrink-0" />
                    <h3 className="role-card-title">For Students</h3>
                  </div>
                  <ul className="space-y-2.5">
                    <li className="flex items-center gap-2 role-card-bullet leading-snug">
                      <span className="text-[#14b8a6] font-bold shrink-0">✓</span>
                      Get answers faster
                    </li>
                    <li className="flex items-center gap-2 role-card-bullet leading-snug">
                      <span className="text-[#14b8a6] font-bold shrink-0">✓</span>
                      Collaborate with peers
                    </li>
                    <li className="flex items-center gap-2 role-card-bullet leading-snug">
                      <span className="text-[#14b8a6] font-bold shrink-0">✓</span>
                      Access support instantly
                    </li>
                    <li className="flex items-center gap-2 role-card-bullet leading-snug">
                      <span className="text-[#14b8a6] font-bold shrink-0">✓</span>
                      Stay organized
                    </li>
                  </ul>
                </div>
              </div>

              {/* Role 2: Instructors */}
              <div className="bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-row">
                {/* Image: Left side */}
                <div className="relative w-[38%] shrink-0 min-h-[150px]">
                  <Image
                    src="/Instructor.png"
                    alt="For Instructors"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 40vw, 15vw"
                  />
                </div>
                {/* Content: Right side */}
                <div className="flex flex-col justify-center p-5 text-left flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <UserCheck size={22} weight="duotone" className="text-[#14b8a6] shrink-0" />
                    <h3 className="role-card-title">For Instructors</h3>
                  </div>
                  <ul className="space-y-2.5">
                    <li className="flex items-center gap-2 role-card-bullet leading-snug">
                      <span className="text-[#14b8a6] font-bold shrink-0">✓</span>
                      Engage learners
                    </li>
                    <li className="flex items-center gap-2 role-card-bullet leading-snug">
                      <span className="text-[#14b8a6] font-bold shrink-0">✓</span>
                      Share updates &amp; resources
                    </li>
                    <li className="flex items-center gap-2 role-card-bullet leading-snug">
                      <span className="text-[#14b8a6] font-bold shrink-0">✓</span>
                      Support discussions
                    </li>
                    <li className="flex items-center gap-2 role-card-bullet leading-snug">
                      <span className="text-[#14b8a6] font-bold shrink-0">✓</span>
                      Strengthen communities
                    </li>
                  </ul>
                </div>
              </div>

              {/* Role 3: Institutions */}
              <div className="bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-row">
                {/* Image: Left side */}
                <div className="relative w-[38%] shrink-0 min-h-[150px]">
                  <Image
                    src="/Institute.png"
                    alt="For Institutions"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 40vw, 15vw"
                  />
                </div>
                {/* Content: Right side */}
                <div className="flex flex-col justify-center p-5 text-left flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <Buildings size={22} weight="duotone" className="text-[#14b8a6] shrink-0" />
                    <h3 className="role-card-title">For Institutions</h3>
                  </div>
                  <ul className="space-y-2.5">
                    <li className="flex items-center gap-2 role-card-bullet leading-snug">
                      <span className="text-[#14b8a6] font-bold shrink-0">✓</span>
                      Improve communication
                    </li>
                    <li className="flex items-center gap-2 role-card-bullet leading-snug">
                      <span className="text-[#14b8a6] font-bold shrink-0">✓</span>
                      Connect services
                    </li>
                    <li className="flex items-center gap-2 role-card-bullet leading-snug">
                      <span className="text-[#14b8a6] font-bold shrink-0">✓</span>
                      Increase engagement
                    </li>
                    <li className="flex items-center gap-2 role-card-bullet leading-snug">
                      <span className="text-[#14b8a6] font-bold shrink-0">✓</span>
                      Drive student success
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Works Seamlessly With Section ── */}
        <section className="py-12 bg-[#f8fbff] border-t border-slate-100">
          <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
            <h2 className="text-[1.5rem] sm:text-[1.75rem] font-black text-navy text-center mb-8 tracking-tight">
              Works Seamlessly With
            </h2>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {/* Pill 1: Threads */}
              <div className="flex items-center gap-2 bg-white border border-[#e2e8f0] rounded-full px-4.5 py-2 text-[15px] font-bold text-slate-600 shadow-xs">
                <ChatCircle size={16} weight="duotone" className="text-purple-600" />
                <span>Threads</span>
              </div>

              {/* Pill 2: Study Circles */}
              <div className="flex items-center gap-2 bg-white border border-[#e2e8f0] rounded-full px-4.5 py-2 text-[15px] font-bold text-slate-600 shadow-xs">
                <UsersThree size={16} weight="duotone" className="text-emerald-500" />
                <span>Study Circles</span>
              </div>

              {/* Pill 3: Study Sessions */}
              <div className="flex items-center gap-2 bg-white border border-[#e2e8f0] rounded-full px-4.5 py-2 text-[15px] font-bold text-slate-600 shadow-xs">
                <VideoCamera size={16} weight="duotone" className="text-orange-500" />
                <span>Study Sessions</span>
              </div>

              {/* Pill 4: Huddle */}
              <div className="flex items-center gap-2 bg-white border border-[#e2e8f0] rounded-full px-4.5 py-2 text-[15px] font-bold text-slate-600 shadow-xs">
                <Chats size={16} weight="duotone" className="text-blue-500" />
                <span>Huddle</span>
              </div>

              {/* Pill 5: Resources */}
              <div className="flex items-center gap-2 bg-white border border-[#e2e8f0] rounded-full px-4.5 py-2 text-[15px] font-bold text-slate-600 shadow-xs">
                <FolderOpen size={16} weight="duotone" className="text-purple-500" />
                <span>Resources</span>
              </div>

              {/* Pill 6: Opportunities */}
              <div className="flex items-center gap-2 bg-white border border-[#e2e8f0] rounded-full px-4.5 py-2 text-[15px] font-bold text-slate-600 shadow-xs">
                <Briefcase size={16} weight="duotone" className="text-pink-500" />
                <span>Opportunities</span>
              </div>

              {/* Pill 7: Advising */}
              <div className="flex items-center gap-2 bg-white border border-[#e2e8f0] rounded-full px-4.5 py-2 text-[15px] font-bold text-slate-600 shadow-xs">
                <UserCheck size={16} weight="duotone" className="text-cyan-500" />
                <span>Advising</span>
              </div>

              {/* Pill 8: Calendar */}
              <div className="flex items-center gap-2 bg-white border border-[#e2e8f0] rounded-full px-4.5 py-2 text-[15px] font-bold text-slate-600 shadow-xs">
                <Calendar size={16} weight="duotone" className="text-amber-500" />
                <span>Calendar</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Footer Button Strip ── */}
        <section className="py-12 bg-white border-t border-slate-100">
          <div className="mx-auto max-w-[1280px] px-5 lg:px-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 rounded-xl px-6 py-3 font-bold text-sm hover:bg-slate-50 transition-colors shadow-xs cursor-pointer"
            >
              <ArrowLeft size={16} weight="bold" />
              Back to All Features
            </Link>

            <Link
              href="/signup"
              className="inline-flex items-center gap-2 bg-primary text-white rounded-xl px-6 py-3 font-black text-sm hover:opacity-95 transition-opacity shadow-md cursor-pointer"
            >
              Explore ONE Channel
              <ArrowRight size={16} weight="bold" />
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
