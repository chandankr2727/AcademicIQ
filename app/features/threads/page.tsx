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
  Paperclip,
  MagnifyingGlass,
  Clock,
  UserPlus,
  PlayCircle,
} from "@phosphor-icons/react";

export default function ThreadsDetailPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[#ffffff] text-[#0a1628] font-sans">

        {/* ── Breadcrumb & Hero Section ── */}
        <section className="relative overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-24 bg-gradient-to-b from-[#faf5ff] to-white">
          <div className="relative mx-auto max-w-[1280px] px-5 lg:px-10">
            {/* Breadcrumb */}
            <nav className="mb-8 flex items-center gap-2 text-[14px] font-semibold" aria-label="Breadcrumb">
              <Link href="/" className="text-primary hover:underline transition-all">All Features</Link>
              <span className="text-slate-300 font-bold" aria-hidden="true">&gt;</span>
              <span className="text-slate-700">Threads</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-center">
              {/* Left Column: Text Content */}
              <div className="lg:col-span-5 flex flex-col">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-50 text-purple-600 mb-6 shrink-0 border border-purple-100 shadow-xs">
                  <ChatCircle size={24} weight="duotone" />
                </div>
                <h1 className="text-5xl font-black text-navy leading-none tracking-tight sm:text-6xl">
                  Threads
                </h1>
                <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold text-navy leading-snug">
                  Organized academic discussions that keep conversations focused, searchable, and connected.
                </h2>
                <p className="mt-5 text-[17px] sm:text-base font-medium leading-relaxed text-slate-600">
                  Threads bring structure to your academic conversations. Ask questions, share ideas, attach resources, watch videos, and continue learning together.
                </p>

                {/* 3-Column Features list */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-100">
                  {/* Feature 1 */}
                  <div className="flex flex-col gap-2 text-left">
                    <div className="text-purple-600">
                      <ChatCircle size={24} weight="duotone" />
                    </div>
                    <p className="text-[14px] font-extrabold text-[#0a1628] leading-snug">
                      Focused
                    </p>
                    <p className="text-[13px] font-medium text-slate-600 leading-snug">
                      Keep discussions on topic.
                    </p>
                  </div>
                  {/* Feature 2 */}
                  <div className="flex flex-col gap-2 text-left">
                    <div className="text-purple-600">
                      <UsersThree size={24} weight="duotone" />
                    </div>
                    <p className="text-[14px] font-extrabold text-[#0a1628] leading-snug">
                      Connected
                    </p>
                    <p className="text-[13px] font-medium text-slate-600 leading-snug">
                      The right people in the right place.
                    </p>
                  </div>
                  {/* Feature 3 */}
                  <div className="flex flex-col gap-2 text-left">
                    <div className="text-purple-600">
                      <MagnifyingGlass size={24} weight="duotone" />
                    </div>
                    <p className="text-[14px] font-extrabold text-[#0a1628] leading-snug">
                      Searchable
                    </p>
                    <p className="text-[13px] font-medium text-slate-600 leading-snug">
                      Find what you need, when you need it.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Mockup Image */}
              <div className="lg:col-span-7 flex justify-center relative">
                {/* Decorative Purple Shapes in Background */}
                <div className="absolute -top-12 -right-12 w-[360px] h-[360px] bg-[#fdf4ff] rounded-full -z-10" />
                <div className="absolute -bottom-8 -left-8 w-[220px] h-[220px] bg-[#faf5ff] rounded-full -z-10" />

                <div className="relative w-full max-w-[620px] aspect-[1390/1132] rounded-[24px] border border-[#e2e8f0] bg-white shadow-[0_20px_50px_rgba(124,58,237,0.12)] overflow-hidden">
                  <Image
                    src="/threatsHero.png"
                    alt="Threads Mockup"
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

        {/* ── What You Can Do in Threads Section ── */}
        <section className="py-16 bg-[#ffffff]">
          <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
            <h2 className="text-3xl font-black text-navy text-center mb-12 sm:text-4xl">
              What You Can Do in Threads
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">

              {/* Card 1: Start Academic Discussions */}
              <div className="bg-white border border-[#e2e8f0] rounded-3xl p-6 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
                <div className="mb-5 text-left">
                  <div className="h-10 w-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 mb-4 shrink-0">
                    <ChatCircle size={22} weight="duotone" />
                  </div>
                  <h3 className="text-[19px] font-bold text-[#0a1628] leading-tight mb-2">
                    Start Academic<br />Discussions
                  </h3>
                  <p className="text-[15px] font-medium text-slate-600 leading-relaxed">
                    Create focused conversations around courses, assignments, concepts, and academic topics.
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
                      <span className="text-[13.5px] font-bold text-[#0a1628] truncate">What is implicit differentiation?</span>
                    </div>
                    <span className="text-[12px] font-semibold text-slate-700 shrink-0">12 replies</span>
                  </div>

                  {/* Thread Item 2 */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="h-6 w-6 rounded-full bg-[#d1fae5] flex items-center justify-center text-[11px] font-black text-[#065f46] shrink-0 border border-emerald-100">
                        DW
                      </div>
                      <span className="text-[13.5px] font-bold text-[#0a1628] truncate">Chapter 4 Homework Help</span>
                    </div>
                    <span className="text-[12px] font-semibold text-slate-700 shrink-0">8 replies</span>
                  </div>

                  {/* Thread Item 3 */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="h-6 w-6 rounded-full bg-[#dbeafe] flex items-center justify-center text-[11px] font-black text-[#1d4ed8] shrink-0 border border-blue-100">
                        AC
                      </div>
                      <span className="text-[13.5px] font-bold text-[#0a1628] truncate">Exam Review Questions</span>
                    </div>
                    <span className="text-[12px] font-semibold text-slate-700 shrink-0">15 replies</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Collaborate With Others */}
              <div className="bg-white border border-[#e2e8f0] rounded-3xl p-6 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
                <div className="mb-5 text-left">
                  <div className="h-10 w-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-4 shrink-0">
                    <UsersThree size={22} weight="duotone" />
                  </div>
                  <h3 className="text-[19px] font-bold text-[#0a1628] leading-tight mb-2">
                    Collaborate<br />With Others
                  </h3>
                  <p className="text-[15px] font-medium text-slate-600 leading-relaxed">
                    Bring together classmates, instructors, tutors, advisors, and support staff.
                  </p>
                </div>

                {/* Mockup UI Box */}
                <div className="bg-white border border-[#e2e8f0] rounded-2xl p-4 text-left mt-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)] space-y-3">
                  <div className="flex items-center gap-2 justify-between">
                    <div className="flex -space-x-1.5">
                      <img src="https://randomuser.me/api/portraits/women/12.jpg" alt="J" className="h-6 w-6 rounded-full  border border-white  text-[10.5px] object-cover shrink-0" />
                      <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="A" className="h-6 w-6 rounded-full  border border-white  text-[10.5px] object-cover shrink-0" />
                      <img src="https://randomuser.me/api/portraits/men/22.jpg" alt="S" className="h-6 w-6 rounded-full  border border-white  text-[10.5px] object-cover shrink-0" />
                      <img src="https://randomuser.me/api/portraits/men/11.jpg" alt="K" className="h-6 w-6 rounded-full  border border-white  text-[10.5px] object-cover shrink-0" />
                      <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="E" className="h-6 w-6 rounded-full  border border-white  text-[10.5px] object-cover shrink-0" />
                    </div>
                    <span className="text-[12px] font-extrabold bg-[#f3e8ff] text-purple-600 px-2 py-0.5 rounded-md shrink-0">+7</span>
                  </div>

                  <div className="bg-[#f8fafc] border border-[#f1f5f9] rounded-xl p-2.5">
                    <p className="text-[13px] font-semibold text-slate-600 leading-normal">
                      <span className="text-purple-600 font-bold">@Dr. Williams</span> Could you review this explanation?
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3: Share Resources */}
              <div className="bg-white border border-[#e2e8f0] rounded-3xl p-6 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
                <div className="mb-5 text-left">
                  <div className="h-10 w-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 mb-4 shrink-0">
                    <FolderOpen size={22} weight="duotone" />
                  </div>
                  <h3 className="text-[19px] font-bold text-[#0a1628] leading-tight mb-2">
                    Share Resources
                  </h3>
                  <p className="text-[15px] font-medium text-slate-600 leading-relaxed">
                    Upload notes, study guides, links, documents, recordings, and other academic materials.
                  </p>
                </div>

                {/* Mockup UI Box */}
                <div className="bg-white border border-[#e2e8f0] rounded-2xl p-4 space-y-3 mt-4 text-left shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                  {/* File 1 */}
                  <div className="flex items-center gap-2.5">
                    <div className="h-7 w-7 rounded-lg bg-red-50 flex items-center justify-center text-red-500 shrink-0">
                      <FilePdf size={16} weight="fill" />
                    </div>
                    <div className="flex flex-col truncate">
                      <span className="text-[13px] font-bold text-[#0a1628] leading-none truncate">Study Guide.pdf</span>
                      <span className="text-[11px] font-semibold text-slate-700 mt-0.5">PDF • 1.2 MB</span>
                    </div>
                  </div>

                  {/* File 2 */}
                  <div className="flex items-center gap-2.5">
                    <div className="h-7 w-7 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                      <PlayCircle size={16} weight="fill" />
                    </div>
                    <div className="flex flex-col truncate">
                      <span className="text-[13px] font-bold text-[#0a1628] leading-none truncate">Lecture Recording.mp4</span>
                      <span className="text-[11px] font-semibold text-slate-700 mt-0.5">MP4 • 45:12</span>
                    </div>
                  </div>

                  {/* File 3 */}
                  <div className="flex items-center gap-2.5">
                    <div className="h-7 w-7 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500 shrink-0">
                      <FileDoc size={16} weight="fill" />
                    </div>
                    <div className="flex flex-col truncate">
                      <span className="text-[13px] font-bold text-[#0a1628] leading-none truncate">Problem Set 3.docx</span>
                      <span className="text-[11px] font-semibold text-slate-700 mt-0.5">DOCX • 1.1 MB</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 4: Continue Learning Over Time */}
              <div className="bg-white border border-[#e2e8f0] rounded-3xl p-6 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
                <div className="mb-5 text-left">
                  <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4 shrink-0">
                    <Clock size={22} weight="duotone" />
                  </div>
                  <h3 className="text-[19px] font-bold text-[#0a1628] leading-tight mb-2">
                    Continue Learning<br />Over Time
                  </h3>
                  <p className="text-[15px] font-medium text-slate-600 leading-relaxed">
                    Threads remain searchable and accessible so conversations can continue beyond a single session.
                  </p>
                </div>

                {/* Mockup UI Box */}
                <div className="bg-white border border-[#e2e8f0] rounded-2xl p-3 text-left mt-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)] space-y-2">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search this thread..."
                      disabled
                      className="w-full bg-[#f8fafc] border border-slate-200 rounded-lg py-1 pl-7 pr-2 text-[12px] text-slate-700 outline-none"
                    />
                    <MagnifyingGlass size={11} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-700" />
                  </div>

                  <span className="text-[10.5px] font-extrabold text-slate-700 uppercase tracking-wider block">From last week</span>

                  <div className="flex gap-2 items-start bg-slate-50/50 p-1.5 rounded-lg border border-slate-100">
                    <div className="h-5.5 w-5.5 rounded-full bg-blue-100 flex items-center justify-center text-[10px] font-bold text-blue-600 shrink-0">
                      DW
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[11.5px] font-bold text-[#0a1628] truncate">Dr. Williams</span>
                        <span className="text-[10.5px] font-semibold text-slate-700 shrink-0">May 6</span>
                      </div>
                      <p className="text-[11.5px] font-medium text-slate-600 leading-normal truncate">
                        Great explanation!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── How It Works Section ── */}
        <section className="py-16 bg-[#faf8ff] border-t border-b border-slate-100/80">
          <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
            <h2 className="text-3xl font-black text-navy text-center mb-16 sm:text-4xl">
              How It Works
            </h2>

            <div className="relative grid grid-cols-1 md:grid-cols-5 gap-8 text-center">
              {/* Dotted connector line across desktop steps */}
              <div
                className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-purple-200"
                aria-hidden="true"
              />

              {/* Step 1 */}
              <div className="relative flex flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white border border-[#e2e8f0] shadow-sm text-purple-600 mb-4 shrink-0 relative z-10">
                  <ChatCircle size={24} weight="duotone" />
                  <span className="absolute -top-1.5 -right-1.5 bg-purple-600 text-white font-black text-[12px] h-5 w-5 rounded-full flex items-center justify-center border border-white">
                    1
                  </span>
                </div>
                <h3 className="text-sm font-black text-[#0a1628] mb-1.5">Create a Thread</h3>
                <p className="text-xs font-medium text-slate-600 max-w-[180px] leading-relaxed">
                  Start a new thread around any topic, course, or assignment.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white border border-[#e2e8f0] shadow-sm text-purple-600 mb-4 shrink-0 relative z-10">
                  <UserPlus size={24} weight="duotone" />
                  <span className="absolute -top-1.5 -right-1.5 bg-purple-600 text-white font-black text-[12px] h-5 w-5 rounded-full flex items-center justify-center border border-white">
                    2
                  </span>
                </div>
                <h3 className="text-sm font-black text-[#0a1628] mb-1.5">Invite Participants</h3>
                <p className="text-xs font-medium text-slate-600 max-w-[180px] leading-relaxed">
                  Add classmates, instructors, tutors, or advisors to the conversation.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white border border-[#e2e8f0] shadow-sm text-purple-600 mb-4 shrink-0 relative z-10">
                  <Paperclip size={24} weight="duotone" />
                  <span className="absolute -top-1.5 -right-1.5 bg-purple-600 text-white font-black text-[12px] h-5 w-5 rounded-full flex items-center justify-center border border-white">
                    3
                  </span>
                </div>
                <h3 className="text-sm font-black text-[#0a1628] mb-1.5">Share Resources & Updates</h3>
                <p className="text-xs font-medium text-slate-600 max-w-[180px] leading-relaxed">
                  Post questions, files, links, videos, and updates to keep everyone informed.
                </p>
              </div>

              {/* Step 4 */}
              <div className="relative flex flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white border border-[#e2e8f0] shadow-sm text-purple-600 mb-4 shrink-0 relative z-10">
                  <Chats size={24} weight="duotone" />
                  <span className="absolute -top-1.5 -right-1.5 bg-purple-600 text-white font-black text-[12px] h-5 w-5 rounded-full flex items-center justify-center border border-white">
                    4
                  </span>
                </div>
                <h3 className="text-sm font-black text-[#0a1628] mb-1.5">Continue Discussions</h3>
                <p className="text-xs font-medium text-slate-600 max-w-[180px] leading-relaxed">
                  Reply, ask follow-ups, and collaborate to deepen understanding.
                </p>
              </div>

              {/* Step 5 */}
              <div className="relative flex flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white border border-[#e2e8f0] shadow-sm text-purple-600 mb-4 shrink-0 relative z-10">
                  <MagnifyingGlass size={24} weight="duotone" />
                  <span className="absolute -top-1.5 -right-1.5 bg-purple-600 text-white font-black text-[12px] h-5 w-5 rounded-full flex items-center justify-center border border-white">
                    5
                  </span>
                </div>
                <h3 className="text-sm font-black text-[#0a1628] mb-1.5">Access History Anytime</h3>
                <p className="text-xs font-medium text-slate-600 max-w-[180px] leading-relaxed">
                  Search and revisit past conversations whenever you need them.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Built for Every Role Section ── */}
        <section className="py-16 bg-[#ffffff]">
          <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
            <h2 className="text-3xl font-black text-navy text-center mb-12 sm:text-4xl">
              Built for Every Role
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

              {/* Role 1: Students */}
              <div className="bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-row">
                {/* Image: Left side */}
                <div className="relative w-[38%] shrink-0 min-h-[150px]">
                  <Image
                    src="/threatsStudent.png"
                    alt="For Students"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 40vw, 15vw"
                  />
                </div>
                {/* Content: Right side */}
                <div className="flex flex-col justify-center p-5 text-left flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <GraduationCap size={22} weight="duotone" className="text-purple-600 shrink-0" />
                    <h3 className="text-[18px] font-bold text-[#0a1628]">For Students</h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-[14.5px] font-semibold text-slate-600">
                      <span className="text-purple-600 font-extrabold text-[16px] shrink-0">✓</span>
                      Ask questions
                    </li>
                    <li className="flex items-center gap-2 text-[14.5px] font-semibold text-slate-600">
                      <span className="text-purple-600 font-extrabold text-[16px] shrink-0">✓</span>
                      Join discussions
                    </li>
                    <li className="flex items-center gap-2 text-[14.5px] font-semibold text-slate-600">
                      <span className="text-purple-600 font-extrabold text-[16px] shrink-0">✓</span>
                      Share resources
                    </li>
                    <li className="flex items-center gap-2 text-[14.5px] font-semibold text-slate-600">
                      <span className="text-purple-600 font-extrabold text-[16px] shrink-0">✓</span>
                      Receive support
                    </li>
                    <li className="flex items-center gap-2 text-[14.5px] font-semibold text-slate-600">
                      <span className="text-purple-600 font-extrabold text-[16px] shrink-0">✓</span>
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
                    src="/threatsInstructor.png"
                    alt="For Instructors"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 40vw, 15vw"
                  />
                </div>
                {/* Content: Right side */}
                <div className="flex flex-col justify-center p-5 text-left flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <UserCheck size={22} weight="duotone" className="text-purple-600 shrink-0" />
                    <h3 className="text-[18px] font-bold text-[#0a1628]">For Instructors</h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-[14.5px] font-semibold text-slate-600">
                      <span className="text-purple-600 font-extrabold text-[16px] shrink-0">✓</span>
                      Answer questions
                    </li>
                    <li className="flex items-center gap-2 text-[14.5px] font-semibold text-slate-600">
                      <span className="text-purple-600 font-extrabold text-[16px] shrink-0">✓</span>
                      Guide discussions
                    </li>
                    <li className="flex items-center gap-2 text-[14.5px] font-semibold text-slate-600">
                      <span className="text-purple-600 font-extrabold text-[16px] shrink-0">✓</span>
                      Share updates & material
                    </li>
                    <li className="flex items-center gap-2 text-[14.5px] font-semibold text-slate-600">
                      <span className="text-purple-600 font-extrabold text-[16px] shrink-0">✓</span>
                      Engage learners
                    </li>
                    <li className="flex items-center gap-2 text-[14.5px] font-semibold text-slate-600">
                      <span className="text-purple-600 font-extrabold text-[16px] shrink-0">✓</span>
                      Build community
                    </li>
                  </ul>
                </div>
              </div>

              {/* Role 3: Institutions */}
              <div className="bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-row">
                {/* Image: Left side */}
                <div className="relative w-[38%] shrink-0 min-h-[150px]">
                  <Image
                    src="/threatsInstitute.png"
                    alt="For Institutions"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 40vw, 15vw"
                  />
                </div>
                {/* Content: Right side */}
                <div className="flex flex-col justify-center p-5 text-left flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <Buildings size={22} weight="duotone" className="text-purple-600 shrink-0" />
                    <h3 className="text-[18px] font-bold text-[#0a1628]">For Institutions</h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-[14.5px] font-semibold text-slate-600">
                      <span className="text-purple-600 font-extrabold text-[16px] shrink-0">✓</span>
                      Support communication
                    </li>
                    <li className="flex items-center gap-2 text-[14.5px] font-semibold text-slate-600">
                      <span className="text-purple-600 font-extrabold text-[16px] shrink-0">✓</span>
                      Connect services
                    </li>
                    <li className="flex items-center gap-2 text-[14.5px] font-semibold text-slate-600">
                      <span className="text-purple-600 font-extrabold text-[16px] shrink-0">✓</span>
                      Improve engagement
                    </li>
                    <li className="flex items-center gap-2 text-[14.5px] font-semibold text-slate-600">
                      <span className="text-purple-600 font-extrabold text-[16px] shrink-0">✓</span>
                      Centralize conversations
                    </li>
                    <li className="flex items-center gap-2 text-[14.5px] font-semibold text-slate-600">
                      <span className="text-purple-600 font-extrabold text-[16px] shrink-0">✓</span>
                      Drive student success
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Works Seamlessly With Section ── */}
        <section className="py-12 bg-[#faf8ff] border-t border-slate-100">
          <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
            <h2 className="text-2xl font-black text-navy text-center mb-8">
              Works Seamlessly With
            </h2>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {/* Pill 1: ONE Channel */}
              <div className="flex items-center gap-2 bg-white border border-[#e2e8f0] rounded-full px-4.5 py-2 text-[15px] font-bold text-slate-600 shadow-xs">
                <ChatCircle size={16} weight="duotone" className="text-blue-500" />
                <span>ONE Channel</span>
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
              Explore Threads
              <ArrowRight size={16} weight="bold" />
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
