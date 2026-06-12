"use client";

import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  VideoCamera,
  UsersThree,
  PlayCircle,
  Globe,
  Calendar,
  ArrowLeft,
  ArrowRight,
  FolderOpen,
  FileText,
  UserPlus,
  UserCheck,
  Buildings,
  Briefcase,
  Chats,
  WifiHigh,
} from "@phosphor-icons/react";

export default function StudySessionsDetailPage() {
  const p = {
    hex: "#4f46e5", // premium Indigo
    soft: "#f5f3ff", // soft Indigo/Violet
    ring: "rgba(79,70,229,0.15)",
    tagBg: "#e0e7ff",
    tagText: "#4338ca",
  };

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[#ffffff] text-[#0a1628] font-sans">
        {/* ── Breadcrumb & Hero Section ── */}
        <section className="relative overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-24 bg-gradient-to-b from-[#f5f3ff] to-white">
          {/* Decorative glow blob */}
          <div
            className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl"
            style={{ background: p.hex }}
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-[1280px] px-5 lg:px-10">
            {/* Breadcrumb */}
            <nav className="mb-8 flex items-center gap-2 text-[14px] font-semibold" aria-label="Breadcrumb">
              <Link href="/" className="text-primary hover:underline transition-all">All Features</Link>
              <span className="text-slate-300 font-bold" aria-hidden="true">&gt;</span>
              <span className="text-slate-700">Study Sessions</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-center">
              {/* Left Column: Text Content */}
              <div className="lg:col-span-5 flex flex-col">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e0e7ff] text-[#4f46e5] mb-6 shrink-0 border border-[#c7d2fe] shadow-xs">
                  <VideoCamera size={24} weight="duotone" />
                </div>
                <h1 className="text-5xl font-black text-navy leading-none tracking-tight sm:text-6xl">
                  Study Sessions
                </h1>
                <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold text-[#4f46e5] leading-snug">
                  Live virtual study sessions. Big impact.
                </h2>
                <p className="mt-5 text-[17px] sm:text-base font-medium leading-relaxed text-slate-600">
                  Join live academic sessions led by students, instructors, institutions, and communities from around the world.
                </p>
                <p className="mt-3 text-[17px] sm:text-base font-medium leading-relaxed text-slate-600">
                  Learn together, ask questions, access resources, and keep learning–live or on your schedule.
                </p>

                {/* 4-Column Features list */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-100">
                  {/* Feature 1 */}
                  <div className="flex flex-col gap-2 text-left">
                    <div className="text-[#4f46e5]">
                      <WifiHigh size={24} weight="duotone" />
                    </div>
                    <p className="text-[14px] font-extrabold text-[#0a1628] leading-tight">
                      Live & Interactive
                    </p>
                    <p className="text-[12.5px] font-semibold text-slate-600 leading-snug">
                      Real-time learning with Q&A and chat.
                    </p>
                  </div>
                  {/* Feature 2 */}
                  <div className="flex flex-col gap-2 text-left">
                    <div className="text-[#4f46e5]">
                      <UsersThree size={24} weight="duotone" />
                    </div>
                    <p className="text-[14px] font-extrabold text-[#0a1628] leading-tight">
                      Large Audience
                    </p>
                    <p className="text-[12.5px] font-semibold text-slate-600 leading-snug">
                      Host or join sessions with hundreds of participants.
                    </p>
                  </div>
                  {/* Feature 3 */}
                  <div className="flex flex-col gap-2 text-left">
                    <div className="text-[#4f46e5]">
                      <PlayCircle size={24} weight="duotone" />
                    </div>
                    <p className="text-[14px] font-extrabold text-[#0a1628] leading-tight">
                      Recorded
                    </p>
                    <p className="text-[12.5px] font-semibold text-slate-600 leading-snug">
                      Missed it? Watch the recording and access resources.
                    </p>
                  </div>
                  {/* Feature 4 */}
                  <div className="flex flex-col gap-2 text-left">
                    <div className="text-[#4f46e5]">
                      <Globe size={24} weight="duotone" />
                    </div>
                    <p className="text-[14px] font-extrabold text-[#0a1628] leading-tight">
                      Global Community
                    </p>
                    <p className="text-[12.5px] font-semibold text-slate-600 leading-snug">
                      Connect with learners and educators from anywhere.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Mockup Image */}
              <div className="lg:col-span-7 flex justify-center relative">
                {/* Decorative Shapes in Background */}
                <div className="absolute -top-12 -right-12 w-[360px] h-[360px] bg-[#f5f3ff] rounded-full -z-10" />
                <div className="absolute -bottom-8 -left-8 w-[220px] h-[220px] bg-[#e0e7ff]/70 rounded-full -z-10" />

                <div className="relative w-full max-w-[660px] aspect-[1390/1132] rounded-[24px] border border-[#e2e8f0] bg-white shadow-[0_20px_50px_rgba(79,70,229,0.12)] overflow-hidden">
                  <Image
                    src="/HeroStudySession.png"
                    alt="Study Sessions Mockup"
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

        {/* ── What You Can Do in Study Sessions Section ── */}
        <section className="py-16 bg-[#ffffff]">
          <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
            <h2 className="text-3xl font-black text-navy text-center mb-12 sm:text-4xl">
              What You Can Do in Study Sessions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {/* Card 1: Attend Live Sessions */}
              <div className="bg-white border border-[#e2e8f0] rounded-3xl p-6 shadow-xs flex flex-col justify-between hover:shadow-md transition-all duration-300">
                <div className="mb-5 text-left">
                  <div className="h-10 w-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4 shrink-0">
                    <VideoCamera size={22} weight="duotone" />
                  </div>
                  <h3 className="text-[19px] font-bold text-[#0a1628] leading-tight mb-2">
                    Attend Live Sessions
                  </h3>
                  <p className="text-[15px] font-medium text-slate-600 leading-relaxed">
                    Join academic events, workshops, review sessions, guest lectures, and community learning experiences.
                  </p>
                </div>

                {/* Attend Live Sessions Image Mockup */}
                <div className="relative w-full aspect-[215/133] rounded-2xl overflow-hidden border border-[#e2e8f0] mt-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                  <Image
                    src="/Attend Live Session.png"
                    alt="Attend Live Session"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
              </div>

              {/* Card 2: Host Your Own Sessions */}
              <div className="bg-white border border-[#e2e8f0] rounded-3xl p-6 shadow-xs flex flex-col justify-between hover:shadow-md transition-all duration-300">
                <div className="mb-5 text-left">
                  <div className="h-10 w-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4 shrink-0">
                    <UserPlus size={22} weight="duotone" />
                  </div>
                  <h3 className="text-[19px] font-bold text-[#0a1628] leading-tight mb-2">
                    Host Your Own Sessions
                  </h3>
                  <p className="text-[15px] font-medium text-slate-600 leading-relaxed">
                    Students, instructors, tutors, advisors, and institutions can create and host live study sessions on any topic, course, or subject.
                  </p>
                </div>

                {/* Create Study Session Form Mockup */}
                <div className="bg-white border border-[#e2e8f0] rounded-2xl p-4 mt-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)] text-left">
                  <h4 className="text-[14px] font-bold text-[#0a1628] mb-3">Create a Study Session</h4>
                  <div className="space-y-2.5">
                    <div>
                      <label className="text-[11.5px] font-extrabold text-slate-700 uppercase tracking-wider block mb-1">Session Title</label>
                      <input
                        type="text"
                        value="Calculus Midterm Review"
                        readOnly
                        className="w-full bg-[#f8fafc] border border-slate-200 rounded-lg py-1.5 px-3 text-[13px] font-bold text-[#0a1628] outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[11.5px] font-extrabold text-slate-700 uppercase tracking-wider block mb-1">Date & Time</label>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="relative">
                          <input
                            type="text"
                            value="May 12, 2024"
                            readOnly
                            className="w-full bg-[#f8fafc] border border-slate-200 rounded-lg py-1.5 px-3 text-[13px] font-bold text-[#0a1628] outline-none"
                          />
                        </div>
                        <div>
                          <input
                            type="text"
                            value="7:00 PM"
                            readOnly
                            className="w-full bg-[#f8fafc] border border-slate-200 rounded-lg py-1.5 px-3 text-[13px] font-bold text-[#0a1628] outline-none"
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="w-full bg-[#4f46e5] text-white text-[13px] font-black py-2 rounded-xl hover:opacity-90 shadow-xs transition-all cursor-pointer text-center mt-2"
                    >
                      Create Session
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 3: Invite Your Network */}
              <div className="bg-white border border-[#e2e8f0] rounded-3xl p-6 shadow-xs flex flex-col justify-between hover:shadow-md transition-all duration-300">
                <div className="mb-5 text-left">
                  <div className="h-10 w-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4 shrink-0">
                    <UserCheck size={22} weight="duotone" />
                  </div>
                  <h3 className="text-[19px] font-bold text-[#0a1628] leading-tight mb-2">
                    Invite Your Network
                  </h3>
                  <p className="text-[15px] font-medium text-slate-600 leading-relaxed">
                    Invite classmates, instructors, tutors, advisors, network connections, and academic communities to join your session.
                  </p>
                </div>

                {/* Invite Participants List Mockup */}
                <div className="bg-white border border-[#e2e8f0] rounded-2xl p-4 mt-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)] text-left">
                  <h4 className="text-[13.5px] font-bold text-[#0a1628] mb-3">Invite Participants</h4>
                  <div className="space-y-2.5">
                    {/* Row 1 */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-[#e0e7ff] flex items-center justify-center text-[11px] font-black text-[#4f46e5] shrink-0">
                          MC
                        </div>
                        <span className="text-[13px] font-bold text-[#0a1628]">My Classmates</span>
                      </div>
                      <button className="bg-[#4f46e5] text-white text-[11.5px] font-bold px-2.5 py-1 rounded-lg hover:opacity-90 cursor-pointer">
                        Invite
                      </button>
                    </div>
                    {/* Row 2 */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-[#d1fae5] flex items-center justify-center text-[11px] font-black text-[#065f46] shrink-0">
                          IT
                        </div>
                        <span className="text-[13px] font-bold text-[#0a1628]">Instructors & Tutors</span>
                      </div>
                      <button className="bg-[#4f46e5] text-white text-[11.5px] font-bold px-2.5 py-1 rounded-lg hover:opacity-90 cursor-pointer">
                        Invite
                      </button>
                    </div>
                    {/* Row 3 */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-[#ffe4e6] flex items-center justify-center text-[11px] font-black text-[#be123c] shrink-0">
                          MN
                        </div>
                        <span className="text-[13px] font-bold text-[#0a1628]">My Network</span>
                      </div>
                      <button className="bg-[#4f46e5] text-white text-[11.5px] font-bold px-2.5 py-1 rounded-lg hover:opacity-90 cursor-pointer">
                        Invite
                      </button>
                    </div>
                    {/* Row 4 */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-[#fef3c7] flex items-center justify-center text-[11px] font-black text-[#92400e] shrink-0">
                          GC
                        </div>
                        <span className="text-[13px] font-bold text-[#0a1628]">Global Community</span>
                      </div>
                      <button className="bg-[#4f46e5] text-white text-[11.5px] font-bold px-2.5 py-1 rounded-lg hover:opacity-90 cursor-pointer">
                        Invite
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 4: Learn Beyond Your Institution */}
              <div className="bg-white border border-[#e2e8f0] rounded-3xl p-6 shadow-xs flex flex-col justify-between hover:shadow-md transition-all duration-300">
                <div className="mb-5 text-left">
                  <div className="h-10 w-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4 shrink-0">
                    <Globe size={22} weight="duotone" />
                  </div>
                  <h3 className="text-[19px] font-bold text-[#0a1628] leading-tight mb-2">
                    Learn Beyond Your Institution
                  </h3>
                  <p className="text-[15px] font-medium text-slate-600 leading-relaxed">
                    Join sessions hosted by learners and educators from different schools, regions, and countries.
                  </p>
                </div>

                {/* Learn Beyond Image Mockup */}
                <div className="relative w-full aspect-[215/133] rounded-2xl overflow-hidden border border-[#e2e8f0] mt-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                  <Image
                    src="/Learn Beyond.png"
                    alt="Learn Beyond Your Institution"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── How It Works Section ── */}
        <section className="py-16 bg-[#f8fbff] border-t border-b border-slate-100">
          <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
            <h2 className="text-3xl font-black text-navy text-center mb-12 sm:text-4xl">
              How It Works
            </h2>

            <div className="relative grid grid-cols-1 md:grid-cols-5 gap-8 text-center">
              {/* Dotted connector line across desktop steps */}
              <div
                className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-indigo-200"
                aria-hidden="true"
              />

              {/* Step 1 */}
              <div className="relative flex flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white border border-[#e2e8f0] shadow-sm text-indigo-600 mb-4 shrink-0 relative z-10">
                  <Calendar size={24} weight="duotone" />
                  <span className="absolute -top-1.5 -right-1.5 bg-[#4f46e5] text-white font-black text-[12px] h-5 w-5 rounded-full flex items-center justify-center border border-white">
                    1
                  </span>
                </div>
                <h3 className="text-sm font-black text-[#0a1628] mb-1.5">Discover a Session</h3>
                <p className="text-xs font-medium text-slate-600 max-w-[180px] leading-relaxed">
                  Browse upcoming sessions or search by topic, course, or instructor.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white border border-[#e2e8f0] shadow-sm text-indigo-600 mb-4 shrink-0 relative z-10">
                  <UserPlus size={24} weight="duotone" />
                  <span className="absolute -top-1.5 -right-1.5 bg-[#4f46e5] text-white font-black text-[12px] h-5 w-5 rounded-full flex items-center justify-center border border-white">
                    2
                  </span>
                </div>
                <h3 className="text-sm font-black text-[#0a1628] mb-1.5">Register or Join</h3>
                <p className="text-xs font-medium text-slate-600 max-w-[180px] leading-relaxed">
                  Register for a session or join instantly if it's live.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white border border-[#e2e8f0] shadow-sm text-indigo-600 mb-4 shrink-0 relative z-10">
                  <VideoCamera size={24} weight="duotone" />
                  <span className="absolute -top-1.5 -right-1.5 bg-[#4f46e5] text-white font-black text-[12px] h-5 w-5 rounded-full flex items-center justify-center border border-white">
                    3
                  </span>
                </div>
                <h3 className="text-sm font-black text-[#0a1628] mb-1.5">Participate Live</h3>
                <p className="text-xs font-medium text-slate-600 max-w-[180px] leading-relaxed">
                  Learn, ask questions, interact, and collaborate in real time.
                </p>
              </div>

              {/* Step 4 */}
              <div className="relative flex flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white border border-[#e2e8f0] shadow-sm text-indigo-600 mb-4 shrink-0 relative z-10">
                  <FolderOpen size={24} weight="duotone" />
                  <span className="absolute -top-1.5 -right-1.5 bg-[#4f46e5] text-white font-black text-[12px] h-5 w-5 rounded-full flex items-center justify-center border border-white">
                    4
                  </span>
                </div>
                <h3 className="text-sm font-black text-[#0a1628] mb-1.5">Access Resources</h3>
                <p className="text-xs font-medium text-slate-600 max-w-[180px] leading-relaxed">
                  Get slides, notes, worksheets, and other session materials.
                </p>
              </div>

              {/* Step 5 */}
              <div className="relative flex flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white border border-[#e2e8f0] shadow-sm text-indigo-600 mb-4 shrink-0 relative z-10">
                  <PlayCircle size={24} weight="duotone" />
                  <span className="absolute -top-1.5 -right-1.5 bg-[#4f46e5] text-white font-black text-[12px] h-5 w-5 rounded-full flex items-center justify-center border border-white">
                    5
                  </span>
                </div>
                <h3 className="text-sm font-black text-[#0a1628] mb-1.5">Review Recordings</h3>
                <p className="text-xs font-medium text-slate-600 max-w-[180px] leading-relaxed">
                  Rewatch the recording and continue learning on your own schedule.
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

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
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
                <div className="flex flex-col justify-center p-4 text-left flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-7 w-7 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                      <UsersThree size={16} weight="duotone" />
                    </div>
                    <h3 className="text-[17px] font-bold text-[#0a1628]">For Students</h3>
                  </div>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2 text-[14px] font-semibold text-slate-600">
                      <span className="text-[#4f46e5] font-extrabold text-[15px] shrink-0">✓</span>
                      Create study sessions
                    </li>
                    <li className="flex items-center gap-2 text-[14px] font-semibold text-slate-600">
                      <span className="text-[#4f46e5] font-extrabold text-[15px] shrink-0">✓</span>
                      Invite classmates
                    </li>
                    <li className="flex items-center gap-2 text-[14px] font-semibold text-slate-600">
                      <span className="text-[#4f46e5] font-extrabold text-[15px] shrink-0">✓</span>
                      Host review sessions
                    </li>
                    <li className="flex items-center gap-2 text-[14px] font-semibold text-slate-600">
                      <span className="text-[#4f46e5] font-extrabold text-[15px] shrink-0">✓</span>
                      Lead and share knowledge
                    </li>
                    <li className="flex items-center gap-2 text-[14px] font-semibold text-slate-600">
                      <span className="text-[#4f46e5] font-extrabold text-[15px] shrink-0">✓</span>
                      Build your academic presence
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
                <div className="flex flex-col justify-center p-4 text-left flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-7 w-7 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                      <UserCheck size={16} weight="duotone" />
                    </div>
                    <h3 className="text-[17px] font-bold text-[#0a1628]">For Instructors</h3>
                  </div>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2 text-[14px] font-semibold text-slate-600">
                      <span className="text-[#4f46e5] font-extrabold text-[15px] shrink-0">✓</span>
                      Lead live sessions
                    </li>
                    <li className="flex items-center gap-2 text-[14px] font-semibold text-slate-600">
                      <span className="text-[#4f46e5] font-extrabold text-[15px] shrink-0">✓</span>
                      Teach and explain topics
                    </li>
                    <li className="flex items-center gap-2 text-[14px] font-semibold text-slate-600">
                      <span className="text-[#4f46e5] font-extrabold text-[15px] shrink-0">✓</span>
                      Host office hours
                    </li>
                    <li className="flex items-center gap-2 text-[14px] font-semibold text-slate-600">
                      <span className="text-[#4f46e5] font-extrabold text-[15px] shrink-0">✓</span>
                      Engage large audiences
                    </li>
                    <li className="flex items-center gap-2 text-[14px] font-semibold text-slate-600">
                      <span className="text-[#4f46e5] font-extrabold text-[15px] shrink-0">✓</span>
                      Expand your impact
                    </li>
                  </ul>
                </div>
              </div>

              {/* Role 3: Institutions */}
              <div className="bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-row">
                {/* Image: Left side */}
                <div className="relative w-[40%] shrink-0 min-h-[160px]">
                  <Image
                    src="/threatsInstitute.png"
                    alt="Institutions"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 40vw, 12vw"
                  />
                </div>
                {/* Content: Right side */}
                <div className="flex flex-col justify-center p-4 text-left flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-7 w-7 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                      <Buildings size={16} weight="duotone" />
                    </div>
                    <h3 className="text-[17px] font-bold text-[#0a1628]">For Institutions</h3>
                  </div>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2 text-[14px] font-semibold text-slate-600">
                      <span className="text-[#4f46e5] font-extrabold text-[15px] shrink-0">✓</span>
                      Host academic events
                    </li>
                    <li className="flex items-center gap-2 text-[14px] font-semibold text-slate-600">
                      <span className="text-[#4f46e5] font-extrabold text-[15px] shrink-0">✓</span>
                      Support student success
                    </li>
                    <li className="flex items-center gap-2 text-[14px] font-semibold text-slate-600">
                      <span className="text-[#4f46e5] font-extrabold text-[15px] shrink-0">✓</span>
                      Increase engagement
                    </li>
                    <li className="flex items-center gap-2 text-[14px] font-semibold text-slate-600">
                      <span className="text-[#4f46e5] font-extrabold text-[15px] shrink-0">✓</span>
                      Promote programs
                    </li>
                    <li className="flex items-center gap-2 text-[14px] font-semibold text-slate-600">
                      <span className="text-[#4f46e5] font-extrabold text-[15px] shrink-0">✓</span>
                      Extend learning
                    </li>
                  </ul>
                </div>
              </div>

              {/* Role 4: Communities */}
              <div className="bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-row">
                {/* Image: Left side */}
                <div className="relative w-[40%] shrink-0 min-h-[160px]">
                  <Image
                    src="/studycircletutar.png"
                    alt="Communities"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 40vw, 12vw"
                  />
                </div>
                {/* Content: Right side */}
                <div className="flex flex-col justify-center p-4 text-left flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-7 w-7 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                      <Globe size={16} weight="duotone" />
                    </div>
                    <h3 className="text-[17px] font-bold text-[#0a1628]">For Communities</h3>
                  </div>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2 text-[14px] font-semibold text-slate-600">
                      <span className="text-[#4f46e5] font-extrabold text-[15px] shrink-0">✓</span>
                      Organize public sessions
                    </li>
                    <li className="flex items-center gap-2 text-[14px] font-semibold text-slate-600">
                      <span className="text-[#4f46e5] font-extrabold text-[15px] shrink-0">✓</span>
                      Share expertise
                    </li>
                    <li className="flex items-center gap-2 text-[14px] font-semibold text-slate-600">
                      <span className="text-[#4f46e5] font-extrabold text-[15px] shrink-0">✓</span>
                      Connect global learners
                    </li>
                    <li className="flex items-center gap-2 text-[14px] font-semibold text-slate-600">
                      <span className="text-[#4f46e5] font-extrabold text-[15px] shrink-0">✓</span>
                      Build community
                    </li>
                    <li className="flex items-center gap-2 text-[14px] font-semibold text-slate-600">
                      <span className="text-[#4f46e5] font-extrabold text-[15px] shrink-0">✓</span>
                      Make learning accessible
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
            <h2 className="text-2xl font-black text-navy text-center mb-8">
              Works Seamlessly With
            </h2>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {/* Pill 1: ONE Channel */}
              <div className="flex items-center gap-2 bg-white border border-[#e2e8f0] rounded-full px-4.5 py-2 text-[15px] font-bold text-slate-600 shadow-xs">
                <Chats size={16} weight="duotone" className="text-blue-500" />
                <span>ONE Channel</span>
              </div>

              {/* Pill 2: Threads */}
              <div className="flex items-center gap-2 bg-white border border-[#e2e8f0] rounded-full px-4.5 py-2 text-[15px] font-bold text-slate-600 shadow-xs">
                <Chats size={16} weight="duotone" className="text-purple-600" />
                <span>Threads</span>
              </div>

              {/* Pill 3: Huddle */}
              <div className="flex items-center gap-2 bg-white border border-[#e2e8f0] rounded-full px-4.5 py-2 text-[15px] font-bold text-slate-600 shadow-xs">
                <Chats size={16} weight="duotone" className="text-blue-500" />
                <span>Huddle</span>
              </div>

              {/* Pill 4: Resources */}
              <div className="flex items-center gap-2 bg-white border border-[#e2e8f0] rounded-full px-4.5 py-2 text-[15px] font-bold text-slate-600 shadow-xs">
                <FolderOpen size={16} weight="duotone" className="text-purple-500" />
                <span>Resources</span>
              </div>

              {/* Pill 5: Calendar */}
              <div className="flex items-center gap-2 bg-white border border-[#e2e8f0] rounded-full px-4.5 py-2 text-[15px] font-bold text-slate-600 shadow-xs">
                <Calendar size={16} weight="duotone" className="text-emerald-500" />
                <span>Calendar</span>
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

              {/* Pill 8: Network */}
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
              className="inline-flex items-center gap-2 bg-[#4f46e5] text-white rounded-xl px-6 py-3 font-black text-sm hover:opacity-95 transition-opacity shadow-md cursor-pointer"
            >
              Explore Study Sessions
              <ArrowRight size={16} weight="bold" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
