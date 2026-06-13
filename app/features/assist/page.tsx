"use client";

import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  Brain,
  ChatCircle,
  UsersThree,
  FolderOpen,
  ArrowLeft,
  ArrowRight,
  UserCheck,
  VideoCamera,
  Briefcase,
  Globe,
  GraduationCap,
  ChartBar,
  CheckCircle,
  MagnifyingGlass,
  Calendar,
  Lightbulb,
  Target,
  Chats,
  Star,
  Sparkle,
} from "@phosphor-icons/react";

export default function EmmaAssistAIPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[#ffffff] text-[#0a1628] font-sans">
        {/* ── Top Header Section ── */}
        <section className="pt-16 pb-12 text-center bg-gradient-to-b from-[#faf5ff] to-white relative overflow-hidden">
          {/* Decorative Background Glow */}
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-[#e0e7ff] to-transparent rounded-full blur-3xl opacity-35 -z-10" />

          <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
            {/* Pill Badge */}
            <span className="inline-block rounded-full bg-[#6366f1] text-white text-[12.5px] font-black uppercase tracking-widest px-5 py-1.5 mb-5 shadow-sm">
              AI-Powered Academic Companions
            </span>

            {/* Title */}
            <h1 className="text-[2.25rem] sm:text-[2.75rem] lg:text-[3.25rem] font-black text-navy tracking-tight leading-[1.08]">
              Emma <span className="text-[#6366f1] font-light">+</span> <span className="text-[#6366f1]">Assist AI</span>
            </h1>

            {/* Sub-headline */}
            <p className="mt-5 text-[1rem] sm:text-[1.125rem] font-normal text-slate-600 max-w-[700px] mx-auto leading-[1.8]">
              AI-powered academic guidance designed to help learners understand concepts, study more effectively, and succeed.
            </p>

            {/* Three colored terms */}
            <div className="mt-6 flex items-center justify-center gap-8 text-[0.9375rem] font-extrabold uppercase tracking-wider">
              <span className="text-[#3b82f6]">Guidance.</span>
              <span className="text-[#8b5cf6]">Understanding.</span>
              <span className="text-[#10b981]">Success.</span>
            </div>
          </div>
        </section>

        {/* ── Hero Grid Section ── */}
        <section className="pb-16 bg-white">
          <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Column: Emma Card */}
              <div className="lg:col-span-4 bg-[#f8fbff] border border-[#e2e8f0] rounded-3xl p-6 shadow-xs flex flex-col hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-4 border-b border-slate-100 pb-5 mb-5 text-left">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden bg-[#e0e7ff] border border-[#c7d2fe] shrink-0">
                    <Image
                      src="/emma.webp"
                      alt="Emma Avatar"
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div>
                    <h3 className="text-[1.25rem] font-black text-navy leading-none">Emma</h3>
                    <p className="text-[0.9375rem] font-bold text-navy mt-1">Your Guide to AcademIQ</p>
                  </div>
                </div>

                <p className="text-[1rem] font-normal text-slate-600 leading-[1.75] text-left mb-5">
                  Emma helps you navigate the platform, discover opportunities, and connect with the right resources.
                </p>

                {/* Emma Capabilities Nested White Card */}
                <div className="bg-white border border-[#e2e8f0] rounded-[20px] p-2 flex-1 flex flex-col justify-between text-left">
                  {/* Item 1 */}
                  <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-50">
                    <div className="text-[#3b82f6] bg-[#eff6ff] p-2 rounded-xl border border-blue-50/50 shrink-0">
                      <UserCheck size={16} weight="bold" />
                    </div>
                    <span className="text-[0.9375rem] font-bold text-[#0a1628]">Find a Tutor</span>
                  </div>
                  {/* Item 2 */}
                  <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-50">
                    <div className="text-[#3b82f6] bg-[#eff6ff] p-2 rounded-xl border border-blue-50/50 shrink-0">
                      <VideoCamera size={16} weight="bold" />
                    </div>
                    <span className="text-[0.9375rem] font-bold text-[#0a1628]">Join a Study Session</span>
                  </div>
                  {/* Item 3 */}
                  <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-50">
                    <div className="text-[#3b82f6] bg-[#eff6ff] p-2 rounded-xl border border-blue-50/50 shrink-0">
                      <Star size={16} weight="bold" />
                    </div>
                    <span className="text-[0.9375rem] font-bold text-[#0a1628]">Discover Opportunities</span>
                  </div>
                  {/* Item 4 */}
                  <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-50">
                    <div className="text-[#3b82f6] bg-[#eff6ff] p-2 rounded-xl border border-blue-50/50 shrink-0">
                      <UsersThree size={16} weight="bold" />
                    </div>
                    <span className="text-[0.9375rem] font-bold text-[#0a1628]">Explore Study Circles</span>
                  </div>
                  {/* Item 5 */}
                  <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-50">
                    <div className="text-[#3b82f6] bg-[#eff6ff] p-2 rounded-xl border border-blue-50/50 shrink-0">
                      <Globe size={16} weight="bold" />
                    </div>
                    <span className="text-[0.9375rem] font-bold text-[#0a1628]">Connect With Your Network</span>
                  </div>
                  {/* Item 6 */}
                  <div className="flex items-center gap-3 px-4 py-3">
                    <div className="text-[#3b82f6] bg-[#eff6ff] p-2 rounded-xl border border-blue-50/50 shrink-0">
                      <FolderOpen size={16} weight="bold" />
                    </div>
                    <span className="text-[0.9375rem] font-bold text-[#0a1628]">Access Resources</span>
                  </div>
                </div>
              </div>

              {/* Middle Column: How It Works Together */}
              <div className="lg:col-span-4 bg-[#f8fbff] border border-[#e2e8f0] rounded-3xl p-6 shadow-xs flex flex-col justify-center items-center text-center relative hover:shadow-md transition-shadow duration-300">
                <h3 className="text-[1.125rem] font-black text-navy mb-8 tracking-tight">How It Works Together</h3>

                <div className="space-y-6 relative flex flex-col items-center w-full max-w-[280px]">
                  
                  {/* Step 1 Box */}
                  <div className="bg-white border border-slate-200 rounded-2xl p-4 w-full text-center relative z-10 shadow-[0_2px_10px_rgba(0,0,0,0.01)]">
                    <div className="flex justify-center text-blue-500 mb-2">
                      <ChatCircle size={22} weight="duotone" />
                    </div>
                    <h4 className="text-[0.9375rem] font-black text-[#0a1628] leading-tight mb-1">You ask Emma for help</h4>
                    <p className="text-[0.8125rem] font-medium text-slate-600 leading-[1.6]">Find resources, opportunities, and guidance.</p>
                  </div>

                  {/* Vertical dashed line */}
                  <div className="absolute top-[68px] bottom-[68px] w-[2px] border-l border-dashed border-slate-300 -z-0" />

                  {/* Step 2 Box */}
                  <div className="bg-white border border-slate-200 rounded-2xl p-4 w-full text-center relative z-10 shadow-[0_2px_10px_rgba(0,0,0,0.01)]">
                    <div className="flex justify-center text-emerald-500 mb-2">
                      <UsersThree size={22} weight="duotone" />
                    </div>
                    <h4 className="text-[0.9375rem] font-black text-[#0a1628] leading-tight mb-1">You engage in AcademIQ</h4>
                    <p className="text-[0.8125rem] font-medium text-slate-600 leading-[1.6]">Participate in sessions, discussions, and activities.</p>
                  </div>

                  {/* Step 3 Box */}
                  <div className="bg-white border border-slate-200 rounded-2xl p-4 w-full text-center relative z-10 shadow-[0_2px_10px_rgba(0,0,0,0.01)]">
                    <div className="flex justify-center text-[#8b5cf6] mb-2">
                      <Brain size={22} weight="duotone" />
                    </div>
                    <h4 className="text-[0.9375rem] font-black text-[#0a1628] leading-tight mb-1">Assist AI analyzes and delivers insights</h4>
                    <p className="text-[0.8125rem] font-medium text-slate-600 leading-[1.6]">Summaries, recommendations, and learning guidance.</p>
                  </div>

                </div>
              </div>

              {/* Right Column: Assist AI Card */}
              <div className="lg:col-span-4 bg-[#f8fbff] border border-[#e2e8f0] rounded-3xl p-6 shadow-xs flex flex-col hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-4 border-b border-slate-100 pb-5 mb-5 text-left">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ede9fe] text-[#8b5cf6] border border-purple-200 shrink-0">
                    <Brain size={32} weight="duotone" />
                  </div>
                  <div>
                    <h3 className="text-[1.25rem] font-black text-navy leading-none">Assist AI</h3>
                    <p className="text-[0.9375rem] font-bold text-[#8b5cf6] mt-1">Your Academic Support Companion</p>
                  </div>
                </div>

                <p className="text-[1rem] font-normal text-slate-600 leading-[1.75] text-left mb-5">
                  Assist AI transforms your academic activity into meaningful insights and actionable guidance.
                </p>

                {/* Assist AI Insights List */}
                <div className="flex-grow flex flex-col justify-between space-y-3 text-left">
                  {/* Row 1 */}
                  <div className="flex items-center justify-between bg-white border border-[#e2e8f0] rounded-[16px] p-3.5 shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
                    <div className="flex items-center gap-3">
                      <div className="text-purple-600 bg-purple-50 p-2 rounded-xl border border-purple-100 shrink-0">
                        <FolderOpen size={16} weight="bold" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[0.9375rem] font-black text-[#0a1628] leading-none mb-1">Thread Summary Ready</span>
                        <span className="text-[0.8125rem] font-medium text-slate-600">Key takeaways generated</span>
                      </div>
                    </div>
                    <CheckCircle size={18} weight="fill" className="text-emerald-500 shrink-0" />
                  </div>

                  {/* Row 2 */}
                  <div className="flex items-center justify-between bg-white border border-[#e2e8f0] rounded-[16px] p-3.5 shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
                    <div className="flex items-center gap-3">
                      <div className="text-purple-600 bg-purple-50 p-2 rounded-xl border border-purple-100 shrink-0">
                        <VideoCamera size={16} weight="bold" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[0.9375rem] font-black text-[#0a1628] leading-none mb-1">Study Session Summary</span>
                        <span className="text-[0.8125rem] font-medium text-slate-600">Highlights &amp; insights available</span>
                      </div>
                    </div>
                    <CheckCircle size={18} weight="fill" className="text-emerald-500 shrink-0" />
                  </div>

                  {/* Row 3 */}
                  <div className="flex items-center justify-between bg-white border border-[#e2e8f0] rounded-[16px] p-3.5 shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
                    <div className="flex items-center gap-3">
                      <div className="text-purple-600 bg-purple-50 p-2 rounded-xl border border-purple-100 shrink-0">
                        <UsersThree size={16} weight="bold" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[0.9375rem] font-black text-[#0a1628] leading-none mb-1">Study Circle Action Items</span>
                        <span className="text-[0.8125rem] font-medium text-slate-600">Next steps generated</span>
                      </div>
                    </div>
                    <CheckCircle size={18} weight="fill" className="text-emerald-500 shrink-0" />
                  </div>

                  {/* Row 4 */}
                  <div className="flex items-center justify-between bg-white border border-[#e2e8f0] rounded-[16px] p-3.5 shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
                    <div className="flex items-center gap-3">
                      <div className="text-purple-600 bg-purple-50 p-2 rounded-xl border border-purple-100 shrink-0">
                        <GraduationCap size={16} weight="bold" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[0.9375rem] font-black text-[#0a1628] leading-none mb-1">Tutoring Session Insights</span>
                        <span className="text-[0.8125rem] font-medium text-slate-600">Concepts &amp; progress captured</span>
                      </div>
                    </div>
                    <CheckCircle size={18} weight="fill" className="text-emerald-500 shrink-0" />
                  </div>

                  {/* Row 5 */}
                  <div className="flex items-center justify-between bg-white border border-[#e2e8f0] rounded-[16px] p-3.5 shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
                    <div className="flex items-center gap-3">
                      <div className="text-purple-600 bg-purple-50 p-2 rounded-xl border border-purple-100 shrink-0">
                        <ChartBar size={16} weight="bold" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[0.9375rem] font-black text-[#0a1628] leading-none mb-1">Study Recommendations</span>
                        <span className="text-[0.8125rem] font-medium text-slate-600">Personalized for you</span>
                      </div>
                    </div>
                    <CheckCircle size={18} weight="fill" className="text-emerald-500 shrink-0" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Meet Emma & How Assist AI Helps Section ── */}
        <section className="py-16 bg-[#ffffff] border-t border-slate-100">
          <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
              
              {/* Meet Emma Column */}
              <div className="flex flex-col">
                <div className="text-left mb-8">
                  <h2 className="typo-h2 font-black text-navy tracking-tight">Meet Emma</h2>
                  <p className="text-[1rem] font-bold text-[#6366f1] mt-1">Your guide to everything on AcademIQ.</p>
                  <p className="mt-4 text-[1rem] font-normal leading-[1.8] text-slate-600">
                    Emma is here to help you find what you need, when you need it. From discovering features to connecting with people and resources—Emma makes navigation simple.
                  </p>
                </div>

                <div className="flex gap-6 items-end mt-auto bg-[#f8fbff] border border-slate-200/60 rounded-3xl p-6">
                  {/* Left: Emma standing image */}
                  <div className="relative w-[130px] h-[190px] shrink-0">
                    <Image
                      src="/emma.webp"
                      alt="Emma Standing"
                      fill
                      className="object-contain object-bottom"
                      sizes="130px"
                    />
                  </div>
                  {/* Right: Speech Bubble */}
                  <div className="flex-1 bg-white border border-[#e2e8f0] rounded-2xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.01)] text-left relative">
                    {/* Speech Bubble Arrow */}
                    <div className="absolute left-[-6px] bottom-6 w-3 h-3 bg-white border-l border-b border-[#e2e8f0] rotate-45" />
                    
                    <h4 className="text-[0.9375rem] font-black text-navy mb-0.5">Hi! I&apos;m Emma.</h4>
                    <p className="text-[0.8125rem] font-medium text-slate-600 mb-3">I can help you...</p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-[0.875rem] font-medium text-slate-600">
                        <span className="text-[#3b82f6] font-bold">✓</span> Find academic support
                      </li>
                      <li className="flex items-center gap-2 text-[0.875rem] font-medium text-slate-600">
                        <span className="text-[#3b82f6] font-bold">✓</span> Discover opportunities
                      </li>
                      <li className="flex items-center gap-2 text-[0.875rem] font-medium text-slate-600">
                        <span className="text-[#3b82f6] font-bold">✓</span> Navigate platform features
                      </li>
                      <li className="flex items-center gap-2 text-[0.875rem] font-medium text-slate-600">
                        <span className="text-[#3b82f6] font-bold">✓</span> Connect with your community
                      </li>
                      <li className="flex items-center gap-2 text-[0.875rem] font-medium text-slate-600">
                        <span className="text-[#3b82f6] font-bold">✓</span> Access the right resources
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How Assist AI Helps Column */}
              <div className="flex flex-col justify-between">
                <div className="text-left mb-8">
                  <h2 className="typo-h2 font-black text-navy tracking-tight">How Assist AI Helps</h2>
                  <p className="text-[1rem] font-bold text-[#8b5cf6] mt-1">Turning activity into understanding.</p>
                  <p className="mt-4 text-[1rem] font-normal leading-[1.8] text-slate-600">
                    Assist AI works in the background to analyze your academic activity and deliver insights that help you learn better and achieve your goals.
                  </p>
                </div>

                {/* 5 small boxes */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mt-auto">
                  {/* Box 1 */}
                  <div className="bg-white border border-[#e2e8f0] rounded-2xl p-3 text-center flex flex-col justify-between items-center hover:shadow-sm transition-shadow min-h-[140px] shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
                    <div className="text-purple-600 bg-purple-50 p-2 rounded-xl border border-purple-100 mb-2.5 shrink-0">
                      <FolderOpen size={16} weight="bold" />
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <h5 className="text-[0.8125rem] font-black text-[#0a1628] leading-tight mb-1">Thread Summaries</h5>
                      <p className="text-[0.75rem] font-medium text-slate-600 leading-snug">Understand key discussions quickly</p>
                    </div>
                  </div>
                  {/* Box 2 */}
                  <div className="bg-white border border-[#e2e8f0] rounded-2xl p-3 text-center flex flex-col justify-between items-center hover:shadow-sm transition-shadow min-h-[140px] shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
                    <div className="text-purple-600 bg-purple-50 p-2 rounded-xl border border-purple-100 mb-2.5 shrink-0">
                      <VideoCamera size={16} weight="bold" />
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <h5 className="text-[0.8125rem] font-black text-[#0a1628] leading-tight mb-1">Study Session Summaries</h5>
                      <p className="text-[0.75rem] font-medium text-slate-600 leading-snug">Recap what was covered and key insights</p>
                    </div>
                  </div>
                  {/* Box 3 */}
                  <div className="bg-white border border-[#e2e8f0] rounded-2xl p-3 text-center flex flex-col justify-between items-center hover:shadow-sm transition-shadow min-h-[140px] shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
                    <div className="text-purple-600 bg-purple-50 p-2 rounded-xl border border-purple-100 mb-2.5 shrink-0">
                      <UsersThree size={16} weight="bold" />
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <h5 className="text-[0.8125rem] font-black text-[#0a1628] leading-tight mb-1">Study Circle Action Items</h5>
                      <p className="text-[0.75rem] font-medium text-slate-600 leading-snug">Get clear next steps and group goals</p>
                    </div>
                  </div>
                  {/* Box 4 */}
                  <div className="bg-white border border-[#e2e8f0] rounded-2xl p-3 text-center flex flex-col justify-between items-center hover:shadow-sm transition-shadow min-h-[140px] shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
                    <div className="text-purple-600 bg-purple-50 p-2 rounded-xl border border-purple-100 mb-2.5 shrink-0">
                      <GraduationCap size={16} weight="bold" />
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <h5 className="text-[0.8125rem] font-black text-[#0a1628] leading-tight mb-1">Tutoring Session Insights</h5>
                      <p className="text-[0.75rem] font-medium text-slate-600 leading-snug">Review concepts covered and progress made</p>
                    </div>
                  </div>
                  {/* Box 5 */}
                  <div className="bg-white border border-[#e2e8f0] rounded-2xl p-3 text-center flex flex-col justify-between items-center hover:shadow-sm transition-shadow min-h-[140px] shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
                    <div className="text-purple-600 bg-purple-50 p-2 rounded-xl border border-purple-100 mb-2.5 shrink-0">
                      <ChartBar size={16} weight="bold" />
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <h5 className="text-[0.8125rem] font-black text-[#0a1628] leading-tight mb-1">Study Recommendations</h5>
                      <p className="text-[0.75rem] font-medium text-slate-600 leading-snug">Personalized study plans and suggestions</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Your Guidance, Every Step of the Way Section ── */}
        <section className="py-16 bg-[#f8fbff] border-t border-b border-slate-100">
          <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
            <h2 className="typo-h2 font-black text-navy text-center mb-12 tracking-tight">
              Your Guidance, Every Step of the Way
            </h2>

            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-4 max-w-5xl mx-auto text-center">

              {/* Step 1 */}
              <div className="flex flex-col items-center max-w-[170px]">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#eff6ff] text-blue-600 border border-blue-100 shadow-sm mb-4 shrink-0 relative">
                  <MagnifyingGlass size={24} weight="bold" />
                </div>
                <h3 className="step-title">1. Ask Emma</h3>
                <p className="step-desc">
                  Get help finding the right resources, people, and opportunities.
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center text-slate-300 font-extrabold text-xl self-center mt-[-30px]">&rarr;</div>

              {/* Step 2 */}
              <div className="flex flex-col items-center max-w-[170px]">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e8fbf2] text-emerald-600 border border-emerald-100 shadow-sm mb-4 shrink-0 relative">
                  <Calendar size={24} weight="bold" />
                </div>
                <h3 className="step-title">2. Participate</h3>
                <p className="step-desc">
                  Engage in tutoring, study sessions, threads, and study circles.
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center text-slate-300 font-extrabold text-xl self-center mt-[-30px]">&rarr;</div>

              {/* Step 3 */}
              <div className="flex flex-col items-center max-w-[170px]">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f5f3ff] text-[#8b5cf6] border border-purple-100 shadow-sm mb-4 shrink-0 relative">
                  <Brain size={24} weight="bold" />
                </div>
                <h3 className="step-title">3. Assist AI Analyzes</h3>
                <p className="step-desc">
                  Assist AI analyzes your activity and extracts key insights.
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center text-slate-300 font-extrabold text-xl self-center mt-[-30px]">&rarr;</div>

              {/* Step 4 */}
              <div className="flex flex-col items-center max-w-[170px]">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#fffbeb] text-amber-600 border border-amber-100 shadow-sm mb-4 shrink-0 relative">
                  <Lightbulb size={24} weight="bold" />
                </div>
                <h3 className="step-title">4. Get Insights</h3>
                <p className="step-desc">
                  Receive summaries, action items, and personalized recommendations.
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center text-slate-300 font-extrabold text-xl self-center mt-[-30px]">&rarr;</div>

              {/* Step 5 */}
              <div className="flex flex-col items-center max-w-[170px]">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e8fbf2] text-emerald-600 border border-emerald-100 shadow-sm mb-4 shrink-0 relative">
                  <Target size={24} weight="bold" />
                </div>
                <h3 className="step-title">5. Achieve Your Goals</h3>
                <p className="step-desc">
                  Apply insights, improve understanding, and reach your full potential.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ── Emma and Assist AI – Different Roles, One Goal ── */}
        <section className="py-16 bg-[#ffffff]">
          <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
            <h2 className="text-[1.5rem] sm:text-[1.875rem] font-black text-navy text-center mb-12 tracking-tight">
              Emma and Assist AI – Different Roles, One Goal: Your Success
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-7 gap-8 items-stretch max-w-5xl mx-auto">
              
              {/* Emma Roles Card (3/7 width) */}
              <div className="lg:col-span-3 bg-white border border-[#e2e8f0] rounded-3xl p-6 shadow-xs text-left flex flex-col justify-between">
                <div className="flex items-center gap-3.5 border-b border-slate-100 pb-4 mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden bg-[#e0e7ff] border border-blue-100 shrink-0">
                    <Image
                      src="/emma.webp"
                      alt="Emma Role"
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <h3 className="text-[1.125rem] font-black text-navy">Emma</h3>
                    <p className="text-[0.875rem] font-bold text-[#6366f1] leading-none">Navigation &amp; Discovery</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-center gap-2.5 text-[1rem] font-medium text-slate-600">
                    <span className="text-[#3b82f6] font-bold">✓</span> Helps you find what you need
                  </li>
                  <li className="flex items-center gap-2.5 text-[1rem] font-medium text-slate-600">
                    <span className="text-[#3b82f6] font-bold">✓</span> Shows you what&apos;s possible
                  </li>
                  <li className="flex items-center gap-2.5 text-[1rem] font-medium text-slate-600">
                    <span className="text-[#3b82f6] font-bold">✓</span> Connects you to opportunities
                  </li>
                  <li className="flex items-center gap-2.5 text-[1rem] font-medium text-slate-600">
                    <span className="text-[#3b82f6] font-bold">✓</span> Guides you through AcademIQ
                  </li>
                </ul>
              </div>

              {/* Connecting Divider Card (1/7 width) */}
              <div className="lg:col-span-1 flex flex-col items-center justify-center text-center px-2">
                <div className="h-10 w-10 rounded-full bg-[#f3e8ff] text-purple-600 flex items-center justify-center mb-3 border border-purple-100 shadow-xs shrink-0">
                  <UsersThree size={20} weight="fill" />
                </div>
                <p className="text-[11.5px] font-extrabold text-slate-700 uppercase tracking-wider leading-relaxed">
                  Working together to empower your academic journey and help you succeed.
                </p>
              </div>

              {/* Assist AI Roles Card (3/7 width) */}
              <div className="lg:col-span-3 bg-white border border-[#e2e8f0] rounded-3xl p-6 shadow-xs text-left flex flex-col justify-between">
                <div className="flex items-center gap-3.5 border-b border-slate-100 pb-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ede9fe] text-[#8b5cf6] border border-purple-100 shrink-0">
                    <Brain size={24} weight="duotone" />
                  </div>
                  <div>
                    <h3 className="text-[1.125rem] font-black text-navy">Assist AI</h3>
                    <p className="text-[0.875rem] font-bold text-[#8b5cf6] leading-none">Learning &amp; Understanding</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-center gap-2.5 text-[1rem] font-medium text-slate-600">
                    <span className="text-[#8b5cf6] font-bold">✓</span> Analyzes your academic activity
                  </li>
                  <li className="flex items-center gap-2.5 text-[1rem] font-medium text-slate-600">
                    <span className="text-[#8b5cf6] font-bold">✓</span> Provides insights and summaries
                  </li>
                  <li className="flex items-center gap-2.5 text-[1rem] font-medium text-slate-600">
                    <span className="text-[#8b5cf6] font-bold">✓</span> Recommends next steps
                  </li>
                  <li className="flex items-center gap-2.5 text-[1rem] font-medium text-slate-600">
                    <span className="text-[#8b5cf6] font-bold">✓</span> Helps you learn and grow
                  </li>
                </ul>
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
              className="inline-flex items-center gap-2 bg-[#8b5cf6] text-white rounded-xl px-6 py-3 font-black text-sm hover:opacity-95 transition-opacity shadow-md cursor-pointer"
            >
              Explore Assist AI
              <ArrowRight size={16} weight="bold" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
