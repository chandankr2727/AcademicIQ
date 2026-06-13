"use client";

import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  BookBookmark,
  ChatCircle,
  VideoCamera,
  UsersThree,
  GraduationCap,
  FileText,
  Bookmark,
  Star,
  MagnifyingGlass,
  SortAscending,
  Rows,
  SquaresFour,
  CaretDown,
  DotsThree,
  ArrowLeft,
  ArrowRight,
  Upload,
  FolderOpen,
  CloudArrowUp,
  Clock,
  Desktop,
  DownloadSimple,
  ShareNetwork,
  X,
  CheckCircle,
  Lightning,
  Database,
  ChartBar,
  Archive,
  Plus,
  WarningCircle,
  ArrowUUpLeft,
} from "@phosphor-icons/react";

export default function MyLibraryPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[#ffffff] text-[#0a1628] font-sans">

        {/* ── Top Stats Bar ── */}
        <section className="bg-white border-b border-[#e2e8f0]">
          <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
            <div className="flex items-center justify-between gap-0">
              {/* Left stats */}
              <div className="flex items-center divide-x divide-[#e2e8f0]">
                {/* Saved Items */}
                <div className="flex items-center gap-3 py-4 pr-8">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#eff6ff] text-[#3b82f6] shrink-0">
                    <BookBookmark size={18} weight="duotone" />
                  </div>
                  <div>
                    <p className="text-[20px] font-black text-[#0a1628] leading-none">128</p>
                    <p className="text-[13px] font-semibold text-slate-600 leading-none mt-0.5">Saved Items</p>
                  </div>
                </div>
                {/* Threads */}
                <div className="flex items-center gap-3 py-4 px-8">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f5f3ff] text-[#8b5cf6] shrink-0">
                    <ChatCircle size={18} weight="duotone" />
                  </div>
                  <div>
                    <p className="text-[20px] font-black text-[#0a1628] leading-none">34</p>
                    <p className="text-[13px] font-semibold text-slate-600 leading-none mt-0.5">Threads</p>
                  </div>
                </div>
                {/* Recordings */}
                <div className="flex items-center gap-3 py-4 px-8">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#ecfdf5] text-[#10b981] shrink-0">
                    <VideoCamera size={18} weight="duotone" />
                  </div>
                  <div>
                    <p className="text-[20px] font-black text-[#0a1628] leading-none">12</p>
                    <p className="text-[13px] font-semibold text-slate-600 leading-none mt-0.5">Recordings</p>
                  </div>
                </div>
                {/* Favorites */}
                <div className="flex items-center gap-3 py-4 px-8">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#fffbeb] text-[#f59e0b] shrink-0">
                    <Star size={18} weight="duotone" />
                  </div>
                  <div>
                    <p className="text-[20px] font-black text-[#0a1628] leading-none">18</p>
                    <p className="text-[13px] font-semibold text-slate-600 leading-none mt-0.5">Favorites</p>
                  </div>
                </div>
                {/* Bookmarks */}
                <div className="flex items-center gap-3 py-4 px-8">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#fdf2f8] text-[#ec4899] shrink-0">
                    <Bookmark size={18} weight="duotone" />
                  </div>
                  <div>
                    <p className="text-[20px] font-black text-[#0a1628] leading-none">56</p>
                    <p className="text-[13px] font-semibold text-slate-600 leading-none mt-0.5">Bookmarks</p>
                  </div>
                </div>
              </div>

              {/* Right: Storage */}
              <div className="flex flex-col items-end min-w-[220px] py-4">
                <div className="flex items-center justify-between w-full mb-1.5">
                  <span className="text-[14px] font-black text-[#0a1628]">78 GB of 100 GB Used</span>
                </div>
                <div className="w-full h-2 bg-[#e2e8f0] rounded-full overflow-hidden mb-1.5">
                  <div className="h-full bg-[#3b82f6] rounded-full" style={{ width: "78%" }} />
                </div>
                <div className="flex items-center justify-between w-full">
                  <span className="text-[12.5px] font-semibold text-slate-600">Available: 22 GB</span>
                  <span className="text-[12.5px] font-bold text-[#3b82f6] cursor-pointer hover:underline">Manage Storage</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Library Header ── */}
        <section className="pt-8 pb-4 bg-white">
          <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              {/* Left: Title + description */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eff6ff] text-[#3b82f6] shrink-0">
                    <BookBookmark size={22} weight="duotone" />
                  </div>
                  <h1 className="text-[2.5rem] font-black text-[#3b4cb8] leading-[1.08] tracking-tight">My Library</h1>
                </div>
                <p className="text-[1rem] font-normal text-slate-600 leading-[1.8] max-w-[320px]">
                  Your personal academic repository. Save, organize, search, and revisit everything that matters—accessible 24/7 from anywhere.
                </p>
              </div>

              {/* Right: Search + Sort + View */}
              <div className="flex flex-col gap-3 min-w-[360px]">
                {/* Search bar */}
                <div className="flex items-center gap-2 bg-white border border-[#e2e8f0] rounded-xl px-4 py-2.5 shadow-xs">
                  <MagnifyingGlass size={16} weight="bold" className="text-slate-700 shrink-0" />
                  <input
                    type="text"
                    placeholder="Search your library..."
                    className="flex-1 bg-transparent text-[15px] font-medium text-[#0a1628] placeholder:text-slate-700 outline-none"
                  />
                  <span className="text-[12px] font-bold text-slate-300 shrink-0">⌘ K</span>
                </div>
                {/* Sort + View */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <SortAscending size={14} weight="bold" className="text-slate-700" />
                    <span className="text-[14px] font-semibold text-slate-600">Sort:</span>
                    <div className="flex items-center gap-1 bg-white border border-[#e2e8f0] rounded-lg px-3 py-1.5 cursor-pointer hover:bg-slate-50 transition-colors">
                      <span className="text-[14px] font-bold text-[#0a1628]">Date Saved (Newest)</span>
                      <CaretDown size={12} weight="bold" className="text-slate-700" />
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#3b82f6] bg-[#eff6ff] text-[#3b82f6] hover:bg-[#dbeafe] transition-colors">
                      <Rows size={15} weight="bold" />
                    </button>
                    <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#e2e8f0] bg-white text-slate-700 hover:bg-slate-50 transition-colors">
                      <SquaresFour size={15} weight="bold" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Main Three-Column Layout ── */}
        <section className="py-4 bg-white">
          <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
            <div className="flex gap-6 items-start">

              {/* ── LEFT SIDEBAR ── */}
              <div className="w-[180px] shrink-0 flex flex-col gap-4">
                {/* Filters Header */}
                <div className="flex items-center justify-between">
                  <h3 className="text-[15px] font-black text-[#0a1628]">Filters</h3>
                  <button className="text-[13px] font-bold text-[#3b82f6] hover:underline">Clear All</button>
                </div>

                {/* Filter Items */}
                <div className="flex flex-col gap-0 border border-[#e2e8f0] rounded-xl overflow-hidden bg-white">
                  {[
                    "Semester",
                    "Quarter",
                    "Subject",
                    "Course",
                    "Date Saved",
                    "Content Type",
                  ].map((filter) => (
                    <div key={filter} className="flex items-center justify-between px-3 py-2.5 border-b border-[#f1f5f9] last:border-b-0 cursor-pointer hover:bg-[#f8fbff] transition-colors">
                      <div>
                        <p className="text-[13.5px] font-bold text-[#0a1628] leading-none">{filter}</p>
                        <p className="text-[12px] font-medium text-slate-700 leading-none mt-0.5">All</p>
                      </div>
                      <CaretDown size={11} weight="bold" className="text-slate-700 shrink-0" />
                    </div>
                  ))}
                  {/* Favorites toggle */}
                  <div className="flex items-center justify-between px-3 py-2.5 border-b border-[#f1f5f9] cursor-pointer hover:bg-[#f8fbff] transition-colors">
                    <div className="flex items-center gap-2">
                      <Star size={13} weight="duotone" className="text-[#f59e0b]" />
                      <p className="text-[13.5px] font-bold text-[#0a1628]">Favorites</p>
                    </div>
                    <div className="h-4 w-7 bg-[#e2e8f0] rounded-full" />
                  </div>
                  {/* Bookmarked toggle */}
                  <div className="flex items-center justify-between px-3 py-2.5 border-b border-[#f1f5f9] cursor-pointer hover:bg-[#f8fbff] transition-colors">
                    <div className="flex items-center gap-2">
                      <Bookmark size={13} weight="duotone" className="text-[#ec4899]" />
                      <p className="text-[13.5px] font-bold text-[#0a1628]">Bookmarked</p>
                    </div>
                    <div className="h-4 w-7 bg-[#e2e8f0] rounded-full" />
                  </div>
                  {/* Participants */}
                  <div className="flex items-center justify-between px-3 py-2.5 border-b border-[#f1f5f9] cursor-pointer hover:bg-[#f8fbff] transition-colors">
                    <div>
                      <p className="text-[13.5px] font-bold text-[#0a1628] leading-none">Participants</p>
                      <p className="text-[12px] font-medium text-slate-700 leading-none mt-0.5">All</p>
                    </div>
                    <CaretDown size={11} weight="bold" className="text-slate-700 shrink-0" />
                  </div>
                  {/* Institution / Community */}
                  <div className="flex items-center justify-between px-3 py-2.5 border-b border-[#f1f5f9] cursor-pointer hover:bg-[#f8fbff] transition-colors">
                    <div>
                      <p className="text-[13.5px] font-bold text-[#0a1628] leading-none">Institution / Community</p>
                      <p className="text-[12px] font-medium text-slate-700 leading-none mt-0.5">All</p>
                    </div>
                    <CaretDown size={11} weight="bold" className="text-slate-700 shrink-0" />
                  </div>
                  {/* Location / Source */}
                  <div className="flex items-center justify-between px-3 py-2.5 border-b border-[#f1f5f9] cursor-pointer hover:bg-[#f8fbff] transition-colors">
                    <div>
                      <p className="text-[13.5px] font-bold text-[#0a1628] leading-none">Location / Source</p>
                      <p className="text-[12px] font-medium text-slate-700 leading-none mt-0.5">All</p>
                    </div>
                    <CaretDown size={11} weight="bold" className="text-slate-700 shrink-0" />
                  </div>
                  {/* Recordings */}
                  <div className="flex items-center justify-between px-3 py-2.5 cursor-pointer hover:bg-[#f8fbff] transition-colors">
                    <div>
                      <p className="text-[13.5px] font-bold text-[#0a1628] leading-none">Recordings</p>
                      <p className="text-[12px] font-medium text-slate-700 leading-none mt-0.5">All</p>
                    </div>
                    <CaretDown size={11} weight="bold" className="text-slate-700 shrink-0" />
                  </div>
                </div>

                {/* Library Insights */}
                <div className="mt-2">
                  <h3 className="text-[15px] font-black text-[#0a1628] mb-3">Library Insights</h3>
                  <div className="flex flex-col gap-2.5">
                    {/* Insight 1 */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-7 w-7 rounded-lg bg-[#eff6ff] flex items-center justify-center text-[#3b82f6] shrink-0">
                          <Star size={13} weight="duotone" />
                        </div>
                        <div>
                          <p className="text-[12.5px] font-bold text-[#0a1628] leading-none">Most Used</p>
                          <p className="text-[11.5px] font-medium text-slate-700 leading-none">Calculus &amp; Physics</p>
                        </div>
                      </div>
                      <span className="text-[12px] font-black text-[#3b82f6]">42 Items</span>
                    </div>
                    {/* Insight 2 */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-7 w-7 rounded-lg bg-[#ecfdf5] flex items-center justify-center text-[#10b981] shrink-0">
                          <Bookmark size={13} weight="duotone" />
                        </div>
                        <div>
                          <p className="text-[12.5px] font-bold text-[#0a1628] leading-none">Most Saved From</p>
                          <p className="text-[11.5px] font-medium text-slate-700 leading-none">Threads</p>
                        </div>
                      </div>
                      <span className="text-[12px] font-black text-[#10b981]">3 liked Items</span>
                    </div>
                    {/* Insight 3 */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-7 w-7 rounded-lg bg-[#fffbeb] flex items-center justify-center text-[#f59e0b] shrink-0">
                          <Lightning size={13} weight="duotone" />
                        </div>
                        <div>
                          <p className="text-[12.5px] font-bold text-[#0a1628] leading-none">Longest Streak</p>
                          <p className="text-[11.5px] font-medium text-slate-700 leading-none">16 days</p>
                        </div>
                      </div>
                      <span className="text-[12px] font-black text-[#f59e0b]">34 Items</span>
                    </div>
                    {/* Insight 4 */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-7 w-7 rounded-lg bg-[#f5f3ff] flex items-center justify-center text-[#8b5cf6] shrink-0">
                          <ChartBar size={13} weight="duotone" />
                        </div>
                        <div>
                          <p className="text-[12.5px] font-bold text-[#0a1628] leading-none">Top Content Type</p>
                          <p className="text-[11.5px] font-medium text-slate-700 leading-none">Threads</p>
                        </div>
                      </div>
                      <span className="text-[12px] font-black text-[#8b5cf6]">24 Items</span>
                    </div>
                  </div>
                  <button className="mt-4 text-[13px] font-bold text-[#3b82f6] hover:underline">View All Insights →</button>
                </div>
              </div>

              {/* ── MAIN CONTENT ── */}
              <div className="flex-1 min-w-0">
                <p className="text-[14px] font-semibold text-slate-700 mb-3">Showing 128 Items</p>

                {/* Library Items */}
                <div className="flex flex-col gap-2">

                  {/* Item 1: Calculus Derivatives Notes – Document */}
                  <div className="border border-[#e2e8f0] rounded-2xl bg-white overflow-hidden hover:shadow-sm transition-shadow">
                    <div className="flex items-center gap-3 px-4 py-3">
                      <div className="h-9 w-9 rounded-xl bg-[#eff6ff] flex items-center justify-center text-[#3b82f6] shrink-0">
                        <FileText size={18} weight="duotone" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-[15px] font-black text-[#0a1628] truncate">Calculus Derivatives Notes</span>
                          <span className="inline-block bg-[#eff6ff] text-[#3b82f6] text-[11.5px] font-black px-2 py-0.5 rounded-full shrink-0">Document</span>
                        </div>
                        <p className="text-[13px] font-medium text-slate-700">Calculus I · Fall 2025</p>
                        <p className="text-[12.5px] font-medium text-slate-700">Saved on May 18, 2025 · 2.4 MB</p>
                      </div>
                      <button className="text-[#f59e0b] shrink-0"><Star size={16} weight="fill" /></button>
                      <button className="text-slate-700 shrink-0 hover:text-slate-700"><DotsThree size={18} weight="bold" /></button>
                    </div>
                    <div className="flex items-center gap-2 px-4 pb-3 border-t border-[#f1f5f9] pt-3">
                      <button className="flex-1 text-center text-[13.5px] font-bold text-[#0a1628] bg-[#f8faff] border border-[#e2e8f0] rounded-lg py-1.5 hover:bg-[#eff6ff] transition-colors">Open</button>
                      <button className="flex-1 text-center text-[13.5px] font-bold text-[#0a1628] bg-[#f8faff] border border-[#e2e8f0] rounded-lg py-1.5 hover:bg-[#eff6ff] transition-colors">Share</button>
                      <button className="flex-1 text-center text-[13.5px] font-bold text-[#0a1628] bg-[#f8faff] border border-[#e2e8f0] rounded-lg py-1.5 hover:bg-[#eff6ff] transition-colors">Download</button>
                      <button className="text-slate-700 hover:text-slate-700 ml-1"><Bookmark size={15} weight="regular" /></button>
                    </div>
                  </div>

                  {/* Item 2: Derivatives Thread – Thread */}
                  <div className="border-2 border-[#c4b5fd] rounded-2xl bg-[#faf5ff] overflow-hidden hover:shadow-sm transition-shadow">
                    <div className="flex items-center gap-3 px-4 py-3">
                      <div className="h-9 w-9 rounded-xl bg-[#f5f3ff] flex items-center justify-center text-[#8b5cf6] shrink-0">
                        <ChatCircle size={18} weight="duotone" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-[15px] font-black text-[#0a1628] truncate">Derivatives Thread</span>
                          <span className="inline-block bg-[#f5f3ff] text-[#8b5cf6] text-[11.5px] font-black px-2 py-0.5 rounded-full shrink-0">Thread</span>
                        </div>
                        <p className="text-[13px] font-medium text-slate-700">Calculus I · Fall 2025</p>
                        <p className="text-[12.5px] font-medium text-slate-700">Saved on May 18, 2025 · 24 replies</p>
                      </div>
                      <button className="text-slate-300 shrink-0"><Star size={16} weight="regular" /></button>
                      <button className="text-slate-700 shrink-0 hover:text-slate-700"><DotsThree size={18} weight="bold" /></button>
                    </div>
                    <div className="flex items-center gap-2 px-4 pb-3 border-t border-[#e9d5ff] pt-3">
                      <button className="flex-1 text-center text-[13.5px] font-bold text-[#8b5cf6] bg-white border border-[#c4b5fd] rounded-lg py-1.5 hover:bg-[#f5f3ff] transition-colors">Open Thread</button>
                      <button className="flex-1 text-center text-[13.5px] font-bold text-[#0a1628] bg-white border border-[#e2e8f0] rounded-lg py-1.5 hover:bg-[#f8faff] transition-colors">View Participants</button>
                      <button className="flex-1 text-center text-[13.5px] font-bold text-[#0a1628] bg-white border border-[#e2e8f0] rounded-lg py-1.5 hover:bg-[#f8faff] transition-colors">Continue Discussion</button>
                      <button className="text-slate-700 hover:text-slate-700 ml-1"><Bookmark size={15} weight="regular" /></button>
                    </div>
                  </div>

                  {/* Item 3: Organic Chemistry Study Session */}
                  <div className="border border-[#e2e8f0] rounded-2xl bg-white overflow-hidden hover:shadow-sm transition-shadow">
                    <div className="flex items-center gap-3 px-4 py-3">
                      <div className="h-9 w-9 rounded-xl bg-[#ecfdf5] flex items-center justify-center text-[#10b981] shrink-0">
                        <VideoCamera size={18} weight="duotone" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-[15px] font-black text-[#0a1628] truncate">Organic Chemistry Study Session</span>
                          <span className="inline-block bg-[#ecfdf5] text-[#10b981] text-[11.5px] font-black px-2 py-0.5 rounded-full shrink-0">Study Session</span>
                        </div>
                        <p className="text-[13px] font-medium text-slate-700">Organic Chem · Spring 2025</p>
                        <p className="text-[12.5px] font-medium text-slate-700">Saved on May 10, 2025 · 1h 10m</p>
                      </div>
                      <button className="text-slate-300 shrink-0"><Star size={16} weight="regular" /></button>
                      <button className="text-slate-700 shrink-0 hover:text-slate-700"><DotsThree size={18} weight="bold" /></button>
                    </div>
                    <div className="flex items-center gap-2 px-4 pb-3 border-t border-[#f1f5f9] pt-3">
                      <button className="flex-1 text-center text-[13.5px] font-bold text-[#0a1628] bg-[#f8faff] border border-[#e2e8f0] rounded-lg py-1.5 hover:bg-[#ecfdf5] transition-colors">Watch Recording</button>
                      <button className="flex-1 text-center text-[13.5px] font-bold text-[#0a1628] bg-[#f8faff] border border-[#e2e8f0] rounded-lg py-1.5 hover:bg-[#ecfdf5] transition-colors">View Notes</button>
                      <button className="flex-1 text-center text-[13.5px] font-bold text-[#0a1628] bg-[#f8faff] border border-[#e2e8f0] rounded-lg py-1.5 hover:bg-[#ecfdf5] transition-colors">Open Session Thread</button>
                      <button className="text-slate-700 hover:text-slate-700 ml-1"><Bookmark size={15} weight="regular" /></button>
                    </div>
                  </div>

                  {/* Item 4: Biology Study Circle */}
                  <div className="border border-[#e2e8f0] rounded-2xl bg-white overflow-hidden hover:shadow-sm transition-shadow">
                    <div className="flex items-center gap-3 px-4 py-3">
                      <div className="h-9 w-9 rounded-xl bg-[#fdf2f8] flex items-center justify-center text-[#ec4899] shrink-0">
                        <UsersThree size={18} weight="duotone" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-[15px] font-black text-[#0a1628] truncate">Biology Study Circle</span>
                          <span className="inline-block bg-[#fdf2f8] text-[#ec4899] text-[11.5px] font-black px-2 py-0.5 rounded-full shrink-0">Study Circle</span>
                        </div>
                        <p className="text-[13px] font-medium text-slate-700">Biology 101 · Spring 2025</p>
                        <p className="text-[12.5px] font-medium text-slate-700">Saved on May 9, 2025 · 8 members</p>
                      </div>
                      <button className="text-slate-300 shrink-0"><Star size={16} weight="regular" /></button>
                      <button className="text-slate-700 shrink-0 hover:text-slate-700"><DotsThree size={18} weight="bold" /></button>
                    </div>
                    <div className="flex items-center gap-2 px-4 pb-3 border-t border-[#f1f5f9] pt-3">
                      <button className="flex-1 text-center text-[13.5px] font-bold text-[#0a1628] bg-[#f8faff] border border-[#e2e8f0] rounded-lg py-1.5 hover:bg-[#fdf2f8] transition-colors">Open Circle</button>
                      <button className="flex-1 text-center text-[13.5px] font-bold text-[#0a1628] bg-[#f8faff] border border-[#e2e8f0] rounded-lg py-1.5 hover:bg-[#fdf2f8] transition-colors">View Members</button>
                      <button className="flex-1 text-center text-[13.5px] font-bold text-[#0a1628] bg-[#f8faff] border border-[#e2e8f0] rounded-lg py-1.5 hover:bg-[#fdf2f8] transition-colors">Access Resources</button>
                      <button className="flex-1 text-center text-[13.5px] font-bold text-[#0a1628] bg-[#f8faff] border border-[#e2e8f0] rounded-lg py-1.5 hover:bg-[#fdf2f8] transition-colors">Schedule Follow-Up</button>
                      <button className="text-slate-700 hover:text-slate-700 ml-1"><Bookmark size={15} weight="regular" /></button>
                    </div>
                  </div>

                  {/* Item 5: Statistics Tutoring Session */}
                  <div className="border border-[#e2e8f0] rounded-2xl bg-white overflow-hidden hover:shadow-sm transition-shadow">
                    <div className="flex items-center gap-3 px-4 py-3">
                      <div className="h-9 w-9 rounded-xl bg-[#fffbeb] flex items-center justify-center text-[#f59e0b] shrink-0">
                        <GraduationCap size={18} weight="duotone" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-[15px] font-black text-[#0a1628] truncate">Statistics Tutoring Session</span>
                          <span className="inline-block bg-[#fffbeb] text-[#f59e0b] text-[11.5px] font-black px-2 py-0.5 rounded-full shrink-0">Tutoring</span>
                        </div>
                        <p className="text-[13px] font-medium text-slate-700">Statistics · Spring 2025</p>
                        <p className="text-[12.5px] font-medium text-slate-700">Saved on May 8, 2025 · 1h 15m</p>
                      </div>
                      <button className="text-[#f59e0b] shrink-0"><Star size={16} weight="fill" /></button>
                      <button className="text-slate-700 shrink-0 hover:text-slate-700"><DotsThree size={18} weight="bold" /></button>
                    </div>
                    <div className="flex items-center gap-2 px-4 pb-3 border-t border-[#f1f5f9] pt-3">
                      <button className="flex-1 text-center text-[13.5px] font-bold text-[#0a1628] bg-[#f8faff] border border-[#e2e8f0] rounded-lg py-1.5 hover:bg-[#fffbeb] transition-colors">Watch Recording</button>
                      <button className="flex-1 text-center text-[13.5px] font-bold text-[#0a1628] bg-[#f8faff] border border-[#e2e8f0] rounded-lg py-1.5 hover:bg-[#fffbeb] transition-colors">View Action Plan</button>
                      <button className="flex-1 text-center text-[13.5px] font-bold text-[#0a1628] bg-[#f8faff] border border-[#e2e8f0] rounded-lg py-1.5 hover:bg-[#fffbeb] transition-colors">Open Tutoring Thread</button>
                      <button className="flex-1 text-center text-[13.5px] font-bold text-[#0a1628] bg-[#f8faff] border border-[#e2e8f0] rounded-lg py-1.5 hover:bg-[#fffbeb] transition-colors">Rate Follow-Up</button>
                      <button className="text-slate-700 hover:text-slate-700 ml-1"><Bookmark size={15} weight="regular" /></button>
                    </div>
                  </div>

                  {/* Item 6: Midterm Study Guide */}
                  <div className="border border-[#e2e8f0] rounded-2xl bg-white overflow-hidden hover:shadow-sm transition-shadow">
                    <div className="flex items-center gap-3 px-4 py-3">
                      <div className="h-9 w-9 rounded-xl bg-[#fef2f2] flex items-center justify-center text-[#ef4444] shrink-0">
                        <FileText size={18} weight="duotone" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-[15px] font-black text-[#0a1628] truncate">Midterm Study Guide</span>
                          <span className="inline-block bg-[#eff6ff] text-[#3b82f6] text-[11.5px] font-black px-2 py-0.5 rounded-full shrink-0">Document</span>
                        </div>
                        <p className="text-[13px] font-medium text-slate-700">Psychology 101 · Fall 2025</p>
                        <p className="text-[12.5px] font-medium text-slate-700">Saved on May 7, 2025 · 1.8 MB</p>
                      </div>
                      <button className="text-slate-300 shrink-0"><Star size={16} weight="regular" /></button>
                      <button className="text-slate-700 shrink-0 hover:text-slate-700"><DotsThree size={18} weight="bold" /></button>
                    </div>
                    <div className="flex items-center gap-2 px-4 pb-3 border-t border-[#f1f5f9] pt-3">
                      <button className="flex-1 text-center text-[13.5px] font-bold text-[#0a1628] bg-[#f8faff] border border-[#e2e8f0] rounded-lg py-1.5 hover:bg-[#fef2f2] transition-colors">Open</button>
                      <button className="flex-1 text-center text-[13.5px] font-bold text-[#0a1628] bg-[#f8faff] border border-[#e2e8f0] rounded-lg py-1.5 hover:bg-[#fef2f2] transition-colors">Download</button>
                      <button className="flex-1 text-center text-[13.5px] font-bold text-[#0a1628] bg-[#f8faff] border border-[#e2e8f0] rounded-lg py-1.5 hover:bg-[#fef2f2] transition-colors">Share</button>
                      <button className="text-slate-700 hover:text-slate-700 ml-1"><Bookmark size={15} weight="regular" /></button>
                    </div>
                  </div>

                  {/* Item 7: Action Plan – Exam Prep */}
                  <div className="border border-[#e2e8f0] rounded-2xl bg-white overflow-hidden hover:shadow-sm transition-shadow">
                    <div className="flex items-center gap-3 px-4 py-3">
                      <div className="h-9 w-9 rounded-xl bg-[#fff7ed] flex items-center justify-center text-[#f97316] shrink-0">
                        <FileText size={18} weight="duotone" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-[15px] font-black text-[#0a1628] truncate">Action Plan – Exam Prep</span>
                          <span className="inline-block bg-[#fff7ed] text-[#f97316] text-[11.5px] font-black px-2 py-0.5 rounded-full shrink-0">Action Plan</span>
                        </div>
                        <p className="text-[13px] font-medium text-slate-700">Calculus I · Fall 2025</p>
                        <p className="text-[12.5px] font-medium text-slate-700">Saved on May 5, 2025</p>
                      </div>
                      <button className="text-[#f59e0b] shrink-0"><Star size={16} weight="fill" /></button>
                      <button className="text-slate-700 shrink-0 hover:text-slate-700"><DotsThree size={18} weight="bold" /></button>
                    </div>
                    <div className="flex items-center gap-2 px-4 pb-3 border-t border-[#f1f5f9] pt-3">
                      <button className="flex-1 text-center text-[13.5px] font-bold text-[#0a1628] bg-[#f8faff] border border-[#e2e8f0] rounded-lg py-1.5 hover:bg-[#fff7ed] transition-colors">Open</button>
                      <button className="flex-1 text-center text-[13.5px] font-bold text-[#0a1628] bg-[#f8faff] border border-[#e2e8f0] rounded-lg py-1.5 hover:bg-[#fff7ed] transition-colors">Edit</button>
                      <button className="flex-1 text-center text-[13.5px] font-bold text-[#0a1628] bg-[#f8faff] border border-[#e2e8f0] rounded-lg py-1.5 hover:bg-[#fff7ed] transition-colors">Share</button>
                      <button className="text-slate-700 hover:text-slate-700 ml-1"><Bookmark size={15} weight="regular" /></button>
                    </div>
                  </div>

                  {/* Item 8: Physics Tutoring Recording */}
                  <div className="border border-[#e2e8f0] rounded-2xl bg-white overflow-hidden hover:shadow-sm transition-shadow">
                    <div className="flex items-center gap-3 px-4 py-3">
                      <div className="h-9 w-9 rounded-xl bg-[#eff6ff] flex items-center justify-center text-[#3b82f6] shrink-0">
                        <VideoCamera size={18} weight="duotone" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-[15px] font-black text-[#0a1628] truncate">Physics Tutoring Recording</span>
                          <span className="inline-block bg-[#ecfdf5] text-[#10b981] text-[11.5px] font-black px-2 py-0.5 rounded-full shrink-0">Recording</span>
                        </div>
                        <p className="text-[13px] font-medium text-slate-700">Physics 201 · Spring 2025</p>
                        <p className="text-[12.5px] font-medium text-slate-700">Saved on May 5, 2025 · 1h 3m</p>
                      </div>
                      <button className="text-slate-300 shrink-0"><Star size={16} weight="regular" /></button>
                      <button className="text-slate-700 shrink-0 hover:text-slate-700"><DotsThree size={18} weight="bold" /></button>
                    </div>
                    <div className="flex items-center gap-2 px-4 pb-3 border-t border-[#f1f5f9] pt-3">
                      <button className="flex-1 text-center text-[13.5px] font-bold text-[#0a1628] bg-[#f8faff] border border-[#e2e8f0] rounded-lg py-1.5 hover:bg-[#eff6ff] transition-colors">Watch Recording</button>
                      <button className="flex-1 text-center text-[13.5px] font-bold text-[#0a1628] bg-[#f8faff] border border-[#e2e8f0] rounded-lg py-1.5 hover:bg-[#eff6ff] transition-colors">View Notes</button>
                      <button className="flex-1 text-center text-[13.5px] font-bold text-[#0a1628] bg-[#f8faff] border border-[#e2e8f0] rounded-lg py-1.5 hover:bg-[#eff6ff] transition-colors">Download</button>
                      <button className="text-slate-700 hover:text-slate-700 ml-1"><DotsThree size={18} weight="bold" /></button>
                    </div>
                  </div>

                </div>

                {/* Load More */}
                <div className="flex justify-center mt-4">
                  <button className="flex items-center gap-2 text-[14.5px] font-bold text-slate-600 bg-white border border-[#e2e8f0] rounded-xl px-5 py-2.5 hover:bg-[#f8faff] transition-colors shadow-xs">
                    Load More
                    <CaretDown size={13} weight="bold" />
                  </button>
                </div>
              </div>

              {/* ── RIGHT PANEL: Thread Detail ── */}
              <div className="w-[240px] shrink-0">
                <div className="border border-[#e2e8f0] rounded-2xl bg-white overflow-hidden shadow-xs">
                  {/* Panel Header */}
                  <div className="flex items-center justify-between px-3 py-2.5 border-b border-[#f1f5f9] bg-[#f8fbff]">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[11.5px] font-black text-[#8b5cf6] uppercase tracking-wider">⚡ THREAD</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <button className="text-[#f59e0b]"><Star size={13} weight="fill" /></button>
                      <button className="text-slate-700 hover:text-slate-700"><DotsThree size={15} weight="bold" /></button>
                      <button className="text-slate-700 hover:text-slate-700"><X size={13} weight="bold" /></button>
                    </div>
                  </div>

                  {/* Thread Title */}
                  <div className="px-3 py-3 border-b border-[#f1f5f9]">
                    <h4 className="text-[15.5px] font-black text-[#0a1628] leading-tight">Derivatives Thread</h4>
                    <p className="text-[12px] font-medium text-slate-700 mt-0.5">Calculus I · Fall 2025</p>
                    <p className="text-[12px] font-medium text-slate-700">Saved on May 18, 2025 · 24 replies</p>
                  </div>

                  {/* Preview / Details tabs */}
                  <div className="flex border-b border-[#f1f5f9]">
                    <button className="flex-1 py-2 text-[13px] font-black text-[#0a1628] border-b-2 border-[#3b82f6]">Preview</button>
                    <button className="flex-1 py-2 text-[13px] font-semibold text-slate-700 hover:text-[#0a1628] transition-colors">Details</button>
                  </div>

                  {/* Conversation Preview */}
                  <div className="px-3 py-3 space-y-3">
                    {/* Message 1 – You */}
                    <div className="flex items-start gap-2">
                      <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Y" className="h-6 w-6 rounded-full bg-[#3b4cb8]   text-[10px] object-cover shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-0.5">
                          <span className="text-[12px] font-black text-[#0a1628]">You</span>
                          <span className="text-[11px] font-medium text-slate-700">May 18, 2025 · 9:15 AM</span>
                        </div>
                        <p className="text-[12px] font-medium text-slate-700 leading-snug">Can someone explain why <span className="font-bold text-[#0a1628]">d/dx (x<sup>n</sup>) = nx<sup>n-1</sup></span>?</p>
                      </div>
                    </div>
                    {/* Message 2 – Alex R. */}
                    <div className="flex items-start gap-2">
                      <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="A" className="h-6 w-6 rounded-full bg-[#10b981]   text-[10px] object-cover shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-0.5">
                          <span className="text-[12px] font-black text-[#0a1628]">Alex R.</span>
                          <span className="text-[11px] font-medium text-slate-700">May 18, 2025 · 9:42 AM</span>
                        </div>
                        <p className="text-[12px] font-medium text-slate-700 leading-snug">It comes from the power rule. Here's a quick derivation...</p>
                        <button className="text-[11.5px] font-bold text-[#3b82f6] mt-0.5 hover:underline">Show more</button>
                      </div>
                    </div>
                    {/* Message 3 – Priya K. */}
                    <div className="flex items-start gap-2">
                      <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="P" className="h-6 w-6 rounded-full bg-[#f59e0b]   text-[10px] object-cover shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-0.5">
                          <span className="text-[12px] font-black text-[#0a1628]">Priya K.</span>
                          <span className="text-[11px] font-medium text-slate-700">May 18, 2025 · 10:03 AM</span>
                        </div>
                        <p className="text-[12px] font-medium text-slate-700 leading-snug">Thanks! That makes sense. What about <span className="font-bold text-[#0a1628]">d/dx (sin(x))<sup>2</sup></span>?</p>
                      </div>
                    </div>
                    {/* Message 4 – You with graph */}
                    <div className="flex items-start gap-2">
                      <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Y" className="h-6 w-6 rounded-full bg-[#3b4cb8]   text-[10px] object-cover shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-0.5">
                          <span className="text-[12px] font-black text-[#0a1628]">You</span>
                          <span className="text-[11px] font-medium text-slate-700">May 18, 2025 · 10:21 AM</span>
                        </div>
                        <p className="text-[12px] font-medium text-slate-700 leading-snug">Here's a helpful graph that explains it.</p>
                        {/* Graph image */}
                        <div className="mt-1.5 relative w-full h-[60px] rounded-lg overflow-hidden border border-[#e2e8f0] bg-white">
                          <Image
                            src="/graph.png"
                            alt="Derivative graph"
                            fill
                            className="object-contain"
                            sizes="200px"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Panel Action Buttons */}
                  <div className="px-3 pb-3 flex flex-col gap-2">
                    <button className="w-full bg-[#3b4cb8] text-white text-[13.5px] font-black py-2.5 rounded-xl hover:opacity-95 transition-opacity">Open Thread</button>
                    <button className="w-full bg-white border border-[#e2e8f0] text-[#0a1628] text-[13.5px] font-bold py-2 rounded-xl hover:bg-[#f8faff] transition-colors">View Participants</button>
                    <button className="w-full bg-white border border-[#e2e8f0] text-[#0a1628] text-[13.5px] font-bold py-2 rounded-xl hover:bg-[#f8faff] transition-colors">Continue Discussion</button>
                    <button className="w-full bg-white border border-[#e2e8f0] text-[#0a1628] text-[13.5px] font-bold py-2 rounded-xl hover:bg-[#f8faff] transition-colors">More Actions</button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── How Library Works ── */}
        <section className="py-14 bg-[#f8fbff] border-t border-slate-100">
          <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
            <h2 className="text-[1.5rem] sm:text-[1.75rem] font-black text-navy text-center mb-10 tracking-tight">How Library Works</h2>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-5xl mx-auto">

              {/* Step 1 */}
              <div className="flex flex-col items-center text-center max-w-[160px]">
                <div className="h-14 w-14 rounded-full bg-white border border-[#e2e8f0] flex items-center justify-center text-[#3b82f6] shadow-xs mb-3 shrink-0">
                  <Bookmark size={24} weight="duotone" />
                </div>
                <h4 className="step-title">1. Save Content</h4>
                <p className="step-desc">Bookmark resources, threads, sessions, notes, and more.</p>
              </div>

              <div className="hidden md:block text-slate-300 font-bold text-xl">→</div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center max-w-[160px]">
                <div className="h-14 w-14 rounded-full bg-white border border-[#e2e8f0] flex items-center justify-center text-[#10b981] shadow-xs mb-3 shrink-0">
                  <FolderOpen size={24} weight="duotone" />
                </div>
                <h4 className="step-title">2. Organize Automatically</h4>
                <p className="step-desc">Content is categorized and organized so you can find it with ease.</p>
              </div>

              <div className="hidden md:block text-slate-300 font-bold text-xl">→</div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center max-w-[160px]">
                <div className="h-14 w-14 rounded-full bg-white border border-[#e2e8f0] flex items-center justify-center text-[#8b5cf6] shadow-xs mb-3 shrink-0">
                  <MagnifyingGlass size={24} weight="duotone" />
                </div>
                <h4 className="step-title">3. Filter &amp; Search</h4>
                <p className="step-desc">Find content by subject, course, semester, quarter, date, or content type.</p>
              </div>

              <div className="hidden md:block text-slate-300 font-bold text-xl">→</div>

              {/* Step 4 */}
              <div className="flex flex-col items-center text-center max-w-[160px]">
                <div className="h-14 w-14 rounded-full bg-white border border-[#e2e8f0] flex items-center justify-center text-[#f59e0b] shadow-xs mb-3 shrink-0">
                  <CloudArrowUp size={24} weight="duotone" />
                </div>
                <h4 className="step-title">4. Access Anytime</h4>
                <p className="step-desc">Your library is available 24/7 from any device, wherever you are.</p>
              </div>

              <div className="hidden md:block text-slate-300 font-bold text-xl">→</div>

              {/* Step 5 */}
              <div className="flex flex-col items-center text-center max-w-[160px]">
                <div className="h-14 w-14 rounded-full bg-white border border-[#e2e8f0] flex items-center justify-center text-[#ec4899] shadow-xs mb-3 shrink-0">
                  <ArrowUUpLeft size={24} weight="duotone" />
                </div>
                <h4 className="step-title">5. Reaccess Anytime</h4>
                <p className="step-desc">Revisit saved content whenever you need it.</p>
              </div>

            </div>
          </div>
        </section>

        {/* ── What You Can Save ── */}
        <section className="py-12 bg-white border-t border-slate-100">
          <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
            <h2 className="text-[1.5rem] sm:text-[1.75rem] font-black text-navy text-center mb-8 tracking-tight">What You Can Save</h2>
            <div className="flex flex-wrap items-stretch justify-center gap-3">
              {[
                { icon: <FileText size={18} weight="duotone" />, color: "text-[#3b82f6]", bg: "bg-[#eff6ff]", label: "Resources", desc: "Study guides, notes, references, and documents" },
                { icon: <ChatCircle size={18} weight="duotone" />, color: "text-[#8b5cf6]", bg: "bg-[#f5f3ff]", label: "Threads", desc: "Entire academic discussions and conversations" },
                { icon: <VideoCamera size={18} weight="duotone" />, color: "text-[#10b981]", bg: "bg-[#ecfdf5]", label: "Study Sessions", desc: "Session recordings, whiteboards, and materials" },
                { icon: <UsersThree size={18} weight="duotone" />, color: "text-[#ec4899]", bg: "bg-[#fdf2f8]", label: "Study Circles", desc: "Circle discussions, resources, and shared content" },
                { icon: <GraduationCap size={18} weight="duotone" />, color: "text-[#f59e0b]", bg: "bg-[#fffbeb]", label: "Tutoring Sessions", desc: "Tutoring recordings, resources, and action plans" },
                { icon: <VideoCamera size={18} weight="duotone" />, color: "text-[#6366f1]", bg: "bg-[#eef2ff]", label: "Recordings", desc: "Watch and learn from past live sessions" },
                { icon: <FileText size={18} weight="duotone" />, color: "text-[#f97316]", bg: "bg-[#fff7ed]", label: "Action Plans", desc: "Your study plans, recommendations, and next steps" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-start bg-[#f8fbff] border border-[#e2e8f0] rounded-2xl p-4 min-w-[140px] max-w-[170px] hover:shadow-sm transition-shadow">
                  <div className={`h-9 w-9 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-3 shrink-0`}>
                    {item.icon}
                  </div>
                  <h4 className="text-[1rem] font-black text-[#0a1628] mb-1 leading-tight">{item.label}</h4>
                  <p className="text-[0.875rem] font-medium text-slate-700 leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Expand Your Library + Pricing + Storage ── */}
        <section className="py-12 bg-[#f8fbff] border-t border-slate-100">
          <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left: Expand Text */}
              <div className="lg:col-span-3 flex flex-col">
                <h2 className="text-xl font-black text-[#0a1628] mb-3">Expand Your Library</h2>
                <p className="text-[1rem] font-normal text-slate-700 leading-[1.75] mb-6">
                  Keep more recordings, notes, threads, resources, and study materials accessible for as long as you need.
                </p>
                <div className="flex items-center gap-2 mt-auto">
                  <button className="text-[13.5px] font-black text-[#0a1628] bg-white border border-[#e2e8f0] rounded-lg px-3 py-1.5 hover:bg-slate-50 transition-colors">Monthly</button>
                  <button className="text-[13.5px] font-black text-[#0a1628] bg-white border border-[#e2e8f0] rounded-lg px-3 py-1.5 hover:bg-slate-50 transition-colors">Annual</button>
                  <span className="text-[11.5px] font-black text-white bg-[#10b981] rounded-full px-2 py-0.5">Save up to 20%</span>
                </div>
              </div>

              {/* Pricing Plans */}
              <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {/* Plan 1: Premium Plan */}
                <div className="bg-white border border-[#e2e8f0] rounded-2xl p-4 flex flex-col">
                  <h4 className="text-[13px] font-black text-[#0a1628] mb-1">PREMIUM PLAN</h4>
                  <div className="text-[22px] font-black text-[#0a1628] leading-none mb-0.5">5 GB</div>
                  <p className="text-[11.5px] font-semibold text-slate-700 mb-3">Included Forever</p>
                  <button className="w-full text-center text-[13px] font-black text-[#3b82f6] bg-[#eff6ff] border border-[#bfdbfe] rounded-lg py-1.5 mb-3">Current Plan</button>
                  <ul className="space-y-1.5 mt-auto">
                    <li className="flex items-start gap-1.5 text-[11.5px] font-semibold text-slate-700">
                      <CheckCircle size={11} weight="fill" className="text-[#10b981] shrink-0 mt-0.5" /> 5 GB Storage
                    </li>
                    <li className="flex items-start gap-1.5 text-[11.5px] font-semibold text-slate-700">
                      <CheckCircle size={11} weight="fill" className="text-[#10b981] shrink-0 mt-0.5" /> Core Library Features
                    </li>
                  </ul>
                </div>
                {/* Plan 2: Student Plus */}
                <div className="bg-white border border-[#e2e8f0] rounded-2xl p-4 flex flex-col">
                  <h4 className="text-[13px] font-black text-[#0a1628] mb-1">STUDENT PLUS</h4>
                  <div className="text-[22px] font-black text-[#0a1628] leading-none mb-0.5">25 GB</div>
                  <p className="text-[11.5px] font-semibold text-slate-700 mb-3">$2.99/month or $29.99 / year</p>
                  <button className="w-full text-center text-[13px] font-black text-white bg-[#3b4cb8] rounded-lg py-1.5 mb-3 hover:opacity-95 transition-opacity">Select</button>
                  <ul className="space-y-1.5 mt-auto">
                    <li className="flex items-start gap-1.5 text-[11.5px] font-semibold text-slate-700">
                      <CheckCircle size={11} weight="fill" className="text-[#10b981] shrink-0 mt-0.5" /> 25 GB Storage
                    </li>
                    <li className="flex items-start gap-1.5 text-[11.5px] font-semibold text-slate-700">
                      <CheckCircle size={11} weight="fill" className="text-[#10b981] shrink-0 mt-0.5" /> All Library Features
                    </li>
                  </ul>
                </div>
                {/* Plan 3: AcademIQ Pro */}
                <div className="bg-white border border-[#e2e8f0] rounded-2xl p-4 flex flex-col">
                  <h4 className="text-[13px] font-black text-[#0a1628] mb-1">ACADEMIQ PRO</h4>
                  <div className="text-[22px] font-black text-[#0a1628] leading-none mb-0.5">100 GB</div>
                  <p className="text-[11.5px] font-semibold text-slate-700 mb-3">$9.99 / month or $45.99 / yr</p>
                  <button className="w-full text-center text-[13px] font-black text-white bg-[#3b4cb8] rounded-lg py-1.5 mb-3 hover:opacity-95 transition-opacity">Select</button>
                  <ul className="space-y-1.5 mt-auto">
                    <li className="flex items-start gap-1.5 text-[11.5px] font-semibold text-slate-700">
                      <CheckCircle size={11} weight="fill" className="text-[#10b981] shrink-0 mt-0.5" /> 100 GB Storage
                    </li>
                    <li className="flex items-start gap-1.5 text-[11.5px] font-semibold text-slate-700">
                      <CheckCircle size={11} weight="fill" className="text-[#10b981] shrink-0 mt-0.5" /> All Premium Features
                    </li>
                  </ul>
                </div>
                {/* Plan 4: Power User */}
                <div className="bg-white border border-[#e2e8f0] rounded-2xl p-4 flex flex-col">
                  <h4 className="text-[13px] font-black text-[#0a1628] mb-1">POWER USER</h4>
                  <div className="text-[22px] font-black text-[#0a1628] leading-none mb-0.5">500 GB</div>
                  <p className="text-[11.5px] font-semibold text-slate-700 mb-3">$6.99 / month or $59.99 / yr</p>
                  <button className="w-full text-center text-[13px] font-black text-white bg-[#3b4cb8] rounded-lg py-1.5 mb-3 hover:opacity-95 transition-opacity">Select</button>
                  <ul className="space-y-1.5 mt-auto">
                    <li className="flex items-start gap-1.5 text-[11.5px] font-semibold text-slate-700">
                      <CheckCircle size={11} weight="fill" className="text-[#10b981] shrink-0 mt-0.5" /> 100 GB Storage
                    </li>
                    <li className="flex items-start gap-1.5 text-[11.5px] font-semibold text-slate-700">
                      <CheckCircle size={11} weight="fill" className="text-[#10b981] shrink-0 mt-0.5" /> All Premium Features
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right: Storage Breakdown */}
              <div className="lg:col-span-3 bg-white border border-[#e2e8f0] rounded-2xl p-4">
                <h4 className="text-[15px] font-black text-[#0a1628] mb-4">What&apos;s Using Storage?</h4>
                <div className="space-y-2.5">
                  {[
                    { label: "Recordings", value: "34.2 GB", width: "70%", color: "bg-[#3b82f6]" },
                    { label: "Documents", value: "14.6 GB", width: "30%", color: "bg-[#8b5cf6]" },
                    { label: "Resources", value: "12.4 GB", width: "25%", color: "bg-[#10b981]" },
                    { label: "Saved Threads", value: "9.1 GB", width: "18%", color: "bg-[#f59e0b]" },
                    { label: "Study Circle Content", value: "3.7 GB", width: "8%", color: "bg-[#ec4899]" },
                    { label: "Tutoring Content", value: "3.0 GB", width: "6%", color: "bg-[#f97316]" },
                    { label: "Notes & Other", value: "0.9 GB", width: "2%", color: "bg-[#94a3b8]" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-0.5">
                          <span className="text-[12.5px] font-bold text-[#0a1628] truncate">{item.label}</span>
                          <span className="text-[12px] font-semibold text-slate-700 shrink-0 ml-2">{item.value}</span>
                        </div>
                        <div className="h-1.5 bg-[#f1f5f9] rounded-full overflow-hidden">
                          <div className={`h-full ${item.color} rounded-full`} style={{ width: item.width }} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Archive to Stay Organized ── */}
        <section className="py-12 bg-white border-t border-slate-100">
          <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left: Intro */}
              <div className="lg:col-span-3">
                <h2 className="text-xl font-black text-[#0a1628] mb-3">Archive to Stay Organized</h2>
                <p className="text-[1rem] font-normal text-slate-700 leading-[1.75] mb-4">
                  Archive older content out of your active library while keeping it safe and accessible.
                </p>
                <button className="flex items-center gap-2 text-[13.5px] font-black text-[#3b82f6] bg-[#eff6ff] border border-[#bfdbfe] rounded-xl px-4 py-2 hover:bg-[#dbeafe] transition-colors">
                  <Archive size={14} weight="bold" />
                  Manage Archive
                </button>
              </div>

              {/* Archive Cards */}
              <div className="lg:col-span-9 grid grid-cols-3 gap-4">
                {/* Archive 1: Fall 2024 */}
                <div className="border border-[#e2e8f0] rounded-2xl bg-[#f8fbff] p-4 hover:shadow-sm transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-xl bg-[#eff6ff] flex items-center justify-center text-[#3b82f6] shrink-0">
                      <GraduationCap size={20} weight="duotone" />
                    </div>
                    <div>
                      <h4 className="text-[15px] font-black text-[#0a1628] leading-none">Fall 2024</h4>
                      <p className="text-[12px] font-medium text-slate-700 mt-0.5">128 Items · 9.4 GB</p>
                    </div>
                  </div>
                  <p className="text-[12px] font-medium text-slate-700 mb-3">Dec 18, 2024</p>
                  <p className="text-[12px] font-semibold text-slate-700 leading-snug">Archived on Dec 18, 2024</p>
                </div>

                {/* Archive 2: Spring 2024 */}
                <div className="border border-[#e2e8f0] rounded-2xl bg-[#f8fbff] p-4 hover:shadow-sm transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-xl bg-[#ecfdf5] flex items-center justify-center text-[#10b981] shrink-0">
                      <GraduationCap size={20} weight="duotone" />
                    </div>
                    <div>
                      <h4 className="text-[15px] font-black text-[#0a1628] leading-none">Spring 2024</h4>
                      <p className="text-[12px] font-medium text-slate-700 mt-0.5">96 Items · 7.6 GB</p>
                    </div>
                  </div>
                  <p className="text-[12px] font-medium text-slate-700 mb-3">May 20, 2024</p>
                  <p className="text-[12px] font-semibold text-slate-700 leading-snug">Archived on May 20, 2024</p>
                </div>

                {/* Archive 3: Summer 2024 */}
                <div className="border border-[#e2e8f0] rounded-2xl bg-[#f8fbff] p-4 hover:shadow-sm transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-xl bg-[#fffbeb] flex items-center justify-center text-[#f59e0b] shrink-0">
                      <GraduationCap size={20} weight="duotone" />
                    </div>
                    <div>
                      <h4 className="text-[15px] font-black text-[#0a1628] leading-none">Summer 2024</h4>
                      <p className="text-[12px] font-medium text-slate-700 mt-0.5">42 Items · 4.2 GB</p>
                    </div>
                  </div>
                  <p className="text-[12px] font-medium text-slate-700 mb-3">Aug 15, 2024</p>
                  <p className="text-[12px] font-semibold text-slate-700 leading-snug">Archived on Aug 15, 2024</p>
                </div>
              </div>

              {/* Create New Archive button – bottom right */}
              <div className="lg:col-span-12 flex justify-end">
                <button className="flex items-center gap-2 text-[13.5px] font-black text-white bg-[#3b4cb8] rounded-xl px-5 py-2.5 hover:opacity-95 transition-opacity shadow-sm">
                  <Plus size={14} weight="bold" />
                  Create New Archive
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── Footer Navigation Strip ── */}
        <section className="py-10 bg-[#f8fbff] border-t border-slate-100">
          <div className="mx-auto max-w-[1280px] px-5 lg:px-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 rounded-xl px-6 py-3 font-bold text-sm hover:bg-slate-50 transition-colors shadow-xs"
            >
              <ArrowLeft size={16} weight="bold" />
              Back to All Features
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 bg-[#3b4cb8] text-white rounded-xl px-6 py-3 font-black text-sm hover:opacity-95 transition-opacity shadow-md"
            >
              Explore My Library
              <ArrowRight size={16} weight="bold" />
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
