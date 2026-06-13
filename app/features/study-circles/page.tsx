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
  ChartBar,
} from "@phosphor-icons/react";

export default function StudyCirclesDetailPage() {
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
              <span className="text-slate-700">Study Circles</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-center">
              {/* Left Column: Text Content */}
              <div className="lg:col-span-5 flex flex-col">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-50 text-purple-600 mb-6 shrink-0 border border-purple-100 shadow-xs">
                  <UsersThree size={24} weight="duotone" />
                </div>
                <h1 className="text-[2.5rem] sm:text-[3rem] font-black text-navy leading-[1.08] tracking-tight">
                  Study Circles
                </h1>
                <h2 className="mt-4 text-[1.375rem] sm:text-[1.625rem] font-extrabold text-navy leading-snug tracking-tight">
                  Small groups. Big progress.
                </h2>
                <p className="mt-5 text-[1rem] sm:text-[1.0625rem] font-normal leading-[1.8] text-slate-600">
                  Create or join small study groups of 2–5 learners to collaborate, share resources, solve problems, and support each other.
                  Invite classmates, instructors, or tutors when you need extra help.
                </p>

                {/* Vertical Features list */}
                <div className="flex flex-col gap-6 mt-8 pt-8 border-t border-slate-100 text-left">
                  {/* Feature 1 */}
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600 border border-purple-100 shrink-0">
                      <UsersThree size={20} weight="duotone" />
                    </div>
                    <div>
                      <h4 className="text-[1rem] font-bold text-[#0a1628]">Small & Focused</h4>
                      <p className="text-[1rem] font-normal text-slate-600 leading-[1.7] mt-0.5">
                        2–5 members for meaningful collaboration.
                      </p>
                    </div>
                  </div>
                  {/* Feature 2 */}
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600 border border-purple-100 shrink-0">
                      <VideoCamera size={20} weight="duotone" />
                    </div>
                    <div>
                      <h4 className="text-[1rem] font-bold text-[#0a1628]">Collaborate Live</h4>
                      <p className="text-[1rem] font-normal text-slate-600 leading-[1.7] mt-0.5">
                        Video, audio, chat, and interactive whiteboard.
                      </p>
                    </div>
                  </div>
                  {/* Feature 3 */}
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600 border border-purple-100 shrink-0">
                      <FolderOpen size={20} weight="duotone" />
                    </div>
                    <div>
                      <h4 className="text-[1rem] font-bold text-[#0a1628]">Share & Learn</h4>
                      <p className="text-[1rem] font-normal text-slate-600 leading-[1.7] mt-0.5">
                        Share resources, notes, and help each other understand.
                      </p>
                    </div>
                  </div>
                  {/* Feature 4 */}
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600 border border-purple-100 shrink-0">
                      <Calendar size={20} weight="duotone" />
                    </div>
                    <div>
                      <h4 className="text-[1rem] font-bold text-[#0a1628]">Stay Consistent</h4>
                      <p className="text-[1rem] font-normal text-slate-600 leading-[1.7] mt-0.5">
                        Schedule sessions and stay accountable together.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Mockup Image */}
              <div className="lg:col-span-7 flex justify-center relative">
                {/* Decorative Blue Shapes in Background */}
                <div className="absolute -top-12 -right-12 w-[360px] h-[360px] bg-[#fdf4ff] rounded-full -z-10" />
                <div className="absolute -bottom-8 -left-8 w-[220px] h-[220px] bg-[#faf5ff] rounded-full -z-10" />

                <div className="relative w-full max-w-[620px] aspect-[1537/1023] rounded-[24px] border border-[#e2e8f0] bg-white shadow-[0_20px_50px_rgba(124,58,237,0.12)] overflow-hidden">
                  <Image
                    src="/StudycircleHero.png"
                    alt="Study Circles Mockup"
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

        {/* ── What You Can Do in Study Circles Section ── */}
        <section className="py-16 bg-[#ffffff]">
          <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
            <h2 className="typo-h2 font-black text-navy text-center mb-12 tracking-tight">
              What You Can Do in Study Circles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 items-stretch">

              {/* Card 1: Collaborate in Small Groups */}
              <div className="bg-white border border-[#e2e8f0] rounded-3xl p-6 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
                <div className="text-left">
                  <div className="h-10 w-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-4 shrink-0">
                    <UsersThree size={22} weight="duotone" />
                  </div>
                  <h3 className="text-[1.0625rem] font-bold text-[#0a1628] leading-tight mb-2 tracking-tight">
                    Collaborate in<br />Small Groups
                  </h3>
                  <p className="text-[1rem] font-normal text-slate-600 leading-[1.75]">
                    Join focused study circles with 2–5 learners to solve problems and master your subjects together.
                  </p>
                </div>
              </div>

              {/* Card 2: Invite Your Classmates */}
              <div className="bg-white border border-[#e2e8f0] rounded-3xl p-6 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
                <div className="text-left">
                  <div className="h-10 w-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 mb-4 shrink-0">
                    <UserPlus size={22} weight="duotone" />
                  </div>
                  <h3 className="text-[1.0625rem] font-bold text-[#0a1628] leading-tight mb-2 tracking-tight">
                    Invite Your<br />Classmates
                  </h3>
                  <p className="text-[1rem] font-normal text-slate-600 leading-[1.75]">
                    Create your own circle and invite classmates, friends, and network connections.
                  </p>
                </div>
              </div>

              {/* Card 3: Invite Instructors */}
              <div className="bg-white border border-[#e2e8f0] rounded-3xl p-6 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
                <div className="text-left">
                  <div className="h-10 w-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 mb-4 shrink-0">
                    <UserCheck size={22} weight="duotone" />
                  </div>
                  <h3 className="text-[1.0625rem] font-bold text-[#0a1628] leading-tight mb-2 tracking-tight">
                    Invite<br />Instructors
                  </h3>
                  <p className="text-[1rem] font-normal text-slate-600 leading-[1.75]">
                    Add instructors, tutors, or advisors to your circle when you need extra guidance.
                  </p>
                </div>
              </div>

              {/* Card 4: Share Resources & Notes */}
              <div className="bg-white border border-[#e2e8f0] rounded-3xl p-6 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
                <div className="text-left">
                  <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4 shrink-0">
                    <FolderOpen size={22} weight="duotone" />
                  </div>
                  <h3 className="text-[1.0625rem] font-bold text-[#0a1628] leading-tight mb-2 tracking-tight">
                    Share Resources<br />& Notes
                  </h3>
                  <p className="text-[1rem] font-normal text-slate-600 leading-[1.75]">
                    Share documents, study guides, links, and take notes together on the interactive whiteboard.
                  </p>
                </div>
              </div>

              {/* Card 5: Track Progress Together */}
              <div className="bg-white border border-[#e2e8f0] rounded-3xl p-6 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
                <div className="text-left">
                  <div className="h-10 w-10 rounded-xl bg-pink-50 flex items-center justify-center text-pink-500 mb-4 shrink-0">
                    <ChartBar size={22} weight="duotone" />
                  </div>
                  <h3 className="text-[1.0625rem] font-bold text-[#0a1628] leading-tight mb-2 tracking-tight">
                    Track Progress<br />Together
                  </h3>
                  <p className="text-[1rem] font-normal text-slate-600 leading-[1.75]">
                    Set goals, review key topics, and stay accountable to keep each other on track.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── How It Works Section ── */}
        <section className="py-16 bg-[#faf8ff] border-t border-b border-slate-100/80">
          <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
            <h2 className="typo-h2 font-black text-navy text-center mb-16 tracking-tight">
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
                  <UserPlus size={24} weight="duotone" />
                  <span className="absolute -top-1.5 -right-1.5 bg-purple-600 text-white font-black text-[12px] h-5 w-5 rounded-full flex items-center justify-center border border-white">
                    1
                  </span>
                </div>
                <h3 className="step-title">Create a Study Circle</h3>
                <p className="step-desc">
                  Start a new circle and give it a title and description.
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
                <h3 className="step-title">Invite Members</h3>
                <p className="step-desc">
                  Invite 2–5 classmates, instructors, tutors, or network connections.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white border border-[#e2e8f0] shadow-sm text-purple-600 mb-4 shrink-0 relative z-10">
                  <VideoCamera size={24} weight="duotone" />
                  <span className="absolute -top-1.5 -right-1.5 bg-purple-600 text-white font-black text-[12px] h-5 w-5 rounded-full flex items-center justify-center border border-white">
                    3
                  </span>
                </div>
                <h3 className="step-title">Meet & Collaborate</h3>
                <p className="step-desc">
                  Meet live using video, audio, chat, and the interactive whiteboard.
                </p>
              </div>

              {/* Step 4 */}
              <div className="relative flex flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white border border-[#e2e8f0] shadow-sm text-purple-600 mb-4 shrink-0 relative z-10">
                  <FolderOpen size={24} weight="duotone" />
                  <span className="absolute -top-1.5 -right-1.5 bg-purple-600 text-white font-black text-[12px] h-5 w-5 rounded-full flex items-center justify-center border border-white">
                    4
                  </span>
                </div>
                <h3 className="step-title">Share Resources</h3>
                <p className="step-desc">
                  Upload and share notes, documents, and other study materials.
                </p>
              </div>

              {/* Step 5 */}
              <div className="relative flex flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white border border-[#e2e8f0] shadow-sm text-purple-600 mb-4 shrink-0 relative z-10">
                  <ChartBar size={24} weight="duotone" />
                  <span className="absolute -top-1.5 -right-1.5 bg-purple-600 text-white font-black text-[12px] h-5 w-5 rounded-full flex items-center justify-center border border-white">
                    5
                  </span>
                </div>
                <h3 className="step-title">Track Progress Together</h3>
                <p className="step-desc">
                  Review, practice, and continue learning together.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Built For Every Role Section ── */}
        <section className="py-16 bg-[#ffffff]">
          <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
            <h2 className="typo-h2 font-black text-navy text-center mb-12 tracking-tight">
              Built For Every Role
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 3xl:grid-cols-4 gap-5">

              {/* Role 1: Students */}
              <div className="bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-row">
                {/* Image: Left side */}
                <div className="relative w-[40%] shrink-0 min-h-[160px]">
                  <Image
                    src="/studycircleStudent.png"
                    alt="Students"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 40vw, 12vw"
                  />
                </div>
                {/* Content: Right side */}
                <div className="flex flex-col justify-center p-5 sm:p-6 text-left flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-7 w-7 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                      <GraduationCap size={16} weight="duotone" />
                    </div>
                    <h3 className="role-card-title">Students</h3>
                  </div>
                  <ul className="space-y-1.5">
                    <li className="flex items-center gap-2 role-card-bullet">
                      <span className="text-emerald-600 font-extrabold text-[15px] shrink-0">✓</span>
                      Study together
                    </li>
                    <li className="flex items-center gap-2 role-card-bullet">
                      <span className="text-emerald-600 font-extrabold text-[15px] shrink-0">✓</span>
                      Prepare for exams
                    </li>
                    <li className="flex items-center gap-2 role-card-bullet">
                      <span className="text-emerald-600 font-extrabold text-[15px] shrink-0">✓</span>
                      Stay accountable
                    </li>
                    <li className="flex items-center gap-2 role-card-bullet">
                      <span className="text-emerald-600 font-extrabold text-[15px] shrink-0">✓</span>
                      Share resources
                    </li>
                  </ul>
                </div>
              </div>

              {/* Role 2: Instructors */}
              <div className="bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-row">
                {/* Image: Left side */}
                <div className="relative w-[40%] shrink-0 min-h-[160px]">
                  <Image
                    src="/studycircleInstructor.png"
                    alt="Instructors"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 40vw, 12vw"
                  />
                </div>
                {/* Content: Right side */}
                <div className="flex flex-col justify-center p-5 sm:p-6 text-left flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-7 w-7 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                      <UserCheck size={16} weight="duotone" />
                    </div>
                    <h3 className="role-card-title">Instructors</h3>
                  </div>
                  <ul className="space-y-1.5">
                    <li className="flex items-center gap-2 role-card-bullet">
                      <span className="text-blue-600 font-extrabold text-[15px] shrink-0">✓</span>
                      Join circles when invited
                    </li>
                    <li className="flex items-center gap-2 role-card-bullet">
                      <span className="text-blue-600 font-extrabold text-[15px] shrink-0">✓</span>
                      Provide guidance
                    </li>
                    <li className="flex items-center gap-2 role-card-bullet">
                      <span className="text-blue-600 font-extrabold text-[15px] shrink-0">✓</span>
                      Answer questions
                    </li>
                    <li className="flex items-center gap-2 role-card-bullet">
                      <span className="text-blue-600 font-extrabold text-[15px] shrink-0">✓</span>
                      Support understanding
                    </li>
                  </ul>
                </div>
              </div>

              {/* Role 3: Tutors */}
              <div className="bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-row">
                {/* Image: Left side */}
                <div className="relative w-[40%] shrink-0 min-h-[160px]">
                  <Image
                    src="/studycircletutar.png"
                    alt="Tutors"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 40vw, 12vw"
                  />
                </div>
                {/* Content: Right side */}
                <div className="flex flex-col justify-center p-5 sm:p-6 text-left flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-7 w-7 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 shrink-0">
                      <UsersThree size={16} weight="duotone" />
                    </div>
                    <h3 className="role-card-title">Tutors</h3>
                  </div>
                  <ul className="space-y-1.5">
                    <li className="flex items-center gap-2 role-card-bullet">
                      <span className="text-purple-600 font-extrabold text-[15px] shrink-0">✓</span>
                      Support small groups
                    </li>
                    <li className="flex items-center gap-2 role-card-bullet">
                      <span className="text-purple-600 font-extrabold text-[15px] shrink-0">✓</span>
                      Facilitate discussions
                    </li>
                    <li className="flex items-center gap-2 role-card-bullet">
                      <span className="text-purple-600 font-extrabold text-[15px] shrink-0">✓</span>
                      Review concepts
                    </li>
                    <li className="flex items-center gap-2 role-card-bullet">
                      <span className="text-purple-600 font-extrabold text-[15px] shrink-0">✓</span>
                      Help learners succeed
                    </li>
                  </ul>
                </div>
              </div>

              {/* Role 4: Advisors */}
              <div className="bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-row">
                {/* Image: Left side */}
                <div className="relative w-[40%] shrink-0 min-h-[160px]">
                  <Image
                    src="/StudycircleAdvisor.png"
                    alt="Advisors"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 40vw, 12vw"
                  />
                </div>
                {/* Content: Right side */}
                <div className="flex flex-col justify-center p-5 sm:p-6 text-left flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-7 w-7 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500 shrink-0">
                      <UserCheck size={16} weight="duotone" />
                    </div>
                    <h3 className="role-card-title">Advisors</h3>
                  </div>
                  <ul className="space-y-1.5">
                    <li className="flex items-center gap-2 role-card-bullet">
                      <span className="text-orange-500 font-extrabold text-[15px] shrink-0">✓</span>
                      Mentor students
                    </li>
                    <li className="flex items-center gap-2 role-card-bullet">
                      <span className="text-orange-500 font-extrabold text-[15px] shrink-0">✓</span>
                      Offer insights
                    </li>
                    <li className="flex items-center gap-2 role-card-bullet">
                      <span className="text-orange-500 font-extrabold text-[15px] shrink-0">✓</span>
                      Support decisions
                    </li>
                    <li className="flex items-center gap-2 role-card-bullet">
                      <span className="text-orange-500 font-extrabold text-[15px] shrink-0">✓</span>
                      Guide success
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
            <h2 className="text-[1.5rem] sm:text-[1.75rem] font-black text-navy text-center mb-8 tracking-tight">
              Works Seamlessly With
            </h2>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {/* Pill 1: ONE Channel */}
              <div className="flex items-center gap-2 bg-white border border-[#e2e8f0] rounded-full px-4.5 py-2 text-[15px] font-bold text-slate-600 shadow-xs">
                <ChatCircle size={16} weight="duotone" className="text-blue-500" />
                <span>ONE Channel</span>
              </div>

              {/* Pill 2: Study Sessions */}
              <div className="flex items-center gap-2 bg-white border border-[#e2e8f0] rounded-full px-4.5 py-2 text-[15px] font-bold text-slate-600 shadow-xs">
                <VideoCamera size={16} weight="duotone" className="text-emerald-500" />
                <span>Study Sessions</span>
              </div>

              {/* Pill 3: Threads */}
              <div className="flex items-center gap-2 bg-white border border-[#e2e8f0] rounded-full px-4.5 py-2 text-[15px] font-bold text-slate-600 shadow-xs">
                <Chats size={16} weight="duotone" className="text-purple-500" />
                <span>Threads</span>
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

              {/* Pill 6: Calendar */}
              <div className="flex items-center gap-2 bg-white border border-[#e2e8f0] rounded-full px-4.5 py-2 text-[15px] font-bold text-slate-600 shadow-xs">
                <Calendar size={16} weight="duotone" className="text-emerald-500" />
                <span>Calendar</span>
              </div>

              {/* Pill 7: Opportunities */}
              <div className="flex items-center gap-2 bg-white border border-[#e2e8f0] rounded-full px-4.5 py-2 text-[15px] font-bold text-slate-600 shadow-xs">
                <Briefcase size={16} weight="duotone" className="text-pink-500" />
                <span>Opportunities</span>
              </div>

              {/* Pill 8: Advising */}
              <div className="flex items-center gap-2 bg-white border border-[#e2e8f0] rounded-full px-4.5 py-2 text-[15px] font-bold text-slate-600 shadow-xs">
                <UserCheck size={16} weight="duotone" className="text-cyan-500" />
                <span>Advising</span>
              </div>

              {/* Pill 9: Network */}
              <div className="flex items-center gap-2 bg-white border border-[#e2e8f0] rounded-full px-4.5 py-2 text-[15px] font-bold text-slate-600 shadow-xs">
                <UsersThree size={16} weight="duotone" className="text-blue-500" />
                <span>Network</span>
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
              Explore Study Circles
              <ArrowRight size={16} weight="bold" />
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
