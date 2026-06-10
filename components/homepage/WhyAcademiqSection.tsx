"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";

const studentPoints = [
  "Find study partners & join study circles",
  "Get tutoring & academic support",
  "Access resources, recordings & notes",
  "Stay organized & on track",
  "Discover opportunities & build your future",
];

const instructorPoints = [
  "Create courses & resources",
  "Host tutoring & office hours",
  "Build academic communities",
  "Support students beyond the LMS",
  "Expand your professional reach",
];

const institutionPoints = [
  "Extend learning beyond the LMS",
  "Increase engagement & retention",
  "Support tutoring, advising & communities",
  "Gain insights with analytics",
  "Strengthen your academic ecosystem",
];

function PointList({ points, colorClass = "text-purple-500" }: { points: string[]; colorClass?: string }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {points.map((point) => (
        <li key={point} className="flex items-start gap-2.5 text-[14px] font-semibold text-slate-700">
          <svg className={`h-5 w-5 shrink-0 ${colorClass}`} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>{point}</span>
        </li>
      ))}
    </ul>
  );
}

function SidebarIcon({ type, className = "w-3 h-3" }: { type: string; className?: string }) {
  switch (type) {
    case "cap":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      );
    case "book":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      );
    case "calendar":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      );
    case "users":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "tutoring":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      );
    case "tasks":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      );
    case "messages":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      );
    case "resources":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
      );
    case "overview":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      );
    case "analytics":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      );
    case "settings":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    default:
      return null;
  }
}

function StudentDashboardMockup() {
  return (
    <div className="w-full bg-[#f8fafc] border border-slate-100 rounded-xl p-2 shadow-inner select-none h-[270px] flex flex-col justify-between overflow-hidden">
      <div className="bg-white border border-slate-100 rounded-lg shadow-xs flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-[85px] bg-[#faf5ff] border-r border-[#f3e8ff] p-1.5 flex flex-col justify-between shrink-0">
          <div className="flex flex-col gap-2">
            {/* Logo */}
            <div className="text-[10px] font-black text-navy px-1">
              Academi<span className="text-[#e11d48]">Q</span>
            </div>
            {/* Nav Items */}
            <div className="flex flex-col gap-0.5 text-[7px]">
              <div className="flex items-center gap-1 bg-[#f3e8ff] text-[#7c3aed] font-bold px-1.5 py-0.5 rounded">
                <SidebarIcon type="cap" className="w-2.5 h-2.5 text-[#7c3aed]" />
                <span>Student Center</span>
              </div>
              <div className="flex items-center gap-1 text-slate-500 px-1.5 py-0.5">
                <SidebarIcon type="book" className="w-2.5 h-2.5" />
                <span>Courses</span>
              </div>
              <div className="flex items-center gap-1 text-slate-500 px-1.5 py-0.5">
                <SidebarIcon type="calendar" className="w-2.5 h-2.5" />
                <span>Calendar</span>
              </div>
              <div className="flex items-center gap-1 text-slate-500 px-1.5 py-0.5">
                <SidebarIcon type="users" className="w-2.5 h-2.5" />
                <span>Study Circles</span>
              </div>
              <div className="flex items-center gap-1 text-slate-500 px-1.5 py-0.5">
                <SidebarIcon type="tutoring" className="w-2.5 h-2.5" />
                <span>Tutoring</span>
              </div>
              <div className="flex items-center gap-1 text-slate-500 px-1.5 py-0.5">
                <SidebarIcon type="tasks" className="w-2.5 h-2.5" />
                <span>Tasks</span>
              </div>
              <div className="flex items-center gap-1 text-slate-500 px-1.5 py-0.5">
                <SidebarIcon type="messages" className="w-2.5 h-2.5" />
                <span>Messages</span>
              </div>
              <div className="flex items-center gap-1 text-slate-500 px-1.5 py-0.5">
                <SidebarIcon type="resources" className="w-2.5 h-2.5" />
                <span>Resources</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-2 flex flex-col justify-between overflow-hidden">
          <div>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-[9px] font-black text-navy leading-none">Welcome back, Keddy! 👋</h4>
                <p className="text-[6px] text-slate-400 mt-0.5">Here&apos;s what&apos;s happening today.</p>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-1 mt-1.5">
              <div className="bg-white border border-[#f3e8ff] rounded p-1 flex flex-col items-center justify-center">
                <span className="text-[10px] font-black text-[#7c3aed] leading-none">2</span>
                <span className="text-[5px] text-slate-500 mt-0.5 text-center leading-none">Classes Today</span>
              </div>
              <div className="bg-white border border-[#f3e8ff] rounded p-1 flex flex-col items-center justify-center">
                <span className="text-[10px] font-black text-[#7c3aed] leading-none">1</span>
                <span className="text-[5px] text-slate-500 mt-0.5 text-center leading-none">Sessions Today</span>
              </div>
              <div className="bg-white border border-[#f3e8ff] rounded p-1 flex flex-col items-center justify-center">
                <span className="text-[10px] font-black text-[#7c3aed] leading-none">3</span>
                <span className="text-[5px] text-slate-500 mt-0.5 text-center leading-none">Tasks Due</span>
              </div>
            </div>

            {/* Upcoming & Tasks side-by-side */}
            <div className="grid grid-cols-2 gap-1.5 mt-2">
              {/* Upcoming */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[7px] font-black text-navy">Upcoming</span>
                  <span className="text-[5px] text-blue-600 font-semibold cursor-pointer">View Calendar</span>
                </div>
                <div className="space-y-1">
                  <div className="bg-blue-50/50 border-l border-blue-500 rounded p-1 text-[5px]">
                    <div className="font-bold text-slate-700">Calculus I</div>
                    <div className="text-slate-400 mt-0.5 flex justify-between">
                      <span>10:00 AM - 11:00 AM</span>
                      <span>Room 204</span>
                    </div>
                  </div>
                  <div className="bg-green-50/50 border-l border-green-500 rounded p-1 text-[5px]">
                    <div className="font-bold text-slate-700">Study Circle - Biology 101</div>
                    <div className="text-slate-400 mt-0.5 flex justify-between">
                      <span>12:00 PM - 1:00 PM</span>
                      <span>Online</span>
                    </div>
                  </div>
                  <div className="bg-orange-50/50 border-l border-orange-500 rounded p-1 text-[5px]">
                    <div className="font-bold text-slate-700">Writing Center Session</div>
                    <div className="text-slate-400 mt-0.5 flex justify-between">
                      <span>2:00 PM - 4:00 PM</span>
                      <span>Zoom</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tasks */}
              <div>
                <span className="text-[7px] font-black text-navy block mb-1">Tasks</span>
                <div className="space-y-1">
                  <div className="flex items-center gap-1 bg-slate-50/50 border border-slate-100 p-1 rounded text-[5px]">
                    <div className="w-2.5 h-2.5 bg-purple-500 text-white rounded-xs flex items-center justify-center shrink-0">
                      <svg className="w-1.5 h-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="leading-tight flex-1">
                      <div className="font-bold text-slate-700">Problem Set 3</div>
                      <div className="text-slate-400">Calculus I</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 bg-slate-50/50 border border-slate-100 p-1 rounded text-[5px]">
                    <div className="w-2.5 h-2.5 bg-purple-500 text-white rounded-xs flex items-center justify-center shrink-0">
                      <svg className="w-1.5 h-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="leading-tight flex-1">
                      <div className="font-bold text-slate-700">Lab Report</div>
                      <div className="text-slate-400">Biology 101</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 bg-slate-50/50 border border-slate-100 p-1 rounded text-[5px]">
                    <div className="w-2.5 h-2.5 bg-purple-500 text-white rounded-xs flex items-center justify-center shrink-0">
                      <svg className="w-1.5 h-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="leading-tight flex-1">
                      <div className="font-bold text-slate-700">Essay Draft</div>
                      <div className="text-slate-400">English 201</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InstructorDashboardMockup() {
  return (
    <div className="w-full bg-[#f8fafc] border border-slate-100 rounded-xl p-2 shadow-inner select-none h-[270px] flex flex-col justify-between overflow-hidden">
      <div className="bg-white border border-slate-100 rounded-lg shadow-xs flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-[85px] bg-[#f0f9ff] border-r border-[#e0f2fe] p-1.5 flex flex-col justify-between shrink-0">
          <div className="flex flex-col gap-2">
            {/* Logo */}
            <div className="text-[10px] font-black text-navy px-1">
              Academi<span className="text-[#e11d48]">Q</span>
            </div>
            {/* Nav Items */}
            <div className="flex flex-col gap-0.5 text-[7px]">
              <div className="flex items-center gap-1 bg-[#e0f2fe] text-[#0369a1] font-bold px-1.5 py-0.5 rounded">
                <SidebarIcon type="tutoring" className="w-2.5 h-2.5 text-[#0369a1]" />
                <span>Instructor Center</span>
              </div>
              <div className="flex items-center gap-1 text-slate-500 px-1.5 py-0.5">
                <SidebarIcon type="book" className="w-2.5 h-2.5" />
                <span>Courses</span>
              </div>
              <div className="flex items-center gap-1 text-slate-500 px-1.5 py-0.5">
                <SidebarIcon type="users" className="w-2.5 h-2.5" />
                <span>Students</span>
              </div>
              <div className="flex items-center gap-1 text-slate-500 px-1.5 py-0.5">
                <SidebarIcon type="calendar" className="w-2.5 h-2.5" />
                <span>Sessions</span>
              </div>
              <div className="flex items-center gap-1 text-slate-500 px-1.5 py-0.5">
                <SidebarIcon type="tasks" className="w-2.5 h-2.5" />
                <span>Assessments</span>
              </div>
              <div className="flex items-center gap-1 text-slate-500 px-1.5 py-0.5">
                <SidebarIcon type="messages" className="w-2.5 h-2.5" />
                <span>Messages</span>
              </div>
              <div className="flex items-center gap-1 text-slate-500 px-1.5 py-0.5">
                <SidebarIcon type="analytics" className="w-2.5 h-2.5" />
                <span>Analytics</span>
              </div>
              <div className="flex items-center gap-1 text-slate-500 px-1.5 py-0.5">
                <SidebarIcon type="resources" className="w-2.5 h-2.5" />
                <span>Resources</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-2 flex flex-col justify-between overflow-hidden">
          <div>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-[9px] font-black text-navy leading-none">Instructor Center</h4>
                <p className="text-[6px] text-slate-400 mt-0.5">Your teaching activity at a glance.</p>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-1 mt-1.5">
              <div className="bg-white border border-[#e0f2fe] rounded p-1 flex flex-col items-center justify-center">
                <span className="text-[10px] font-black text-blue-600 leading-none">3</span>
                <span className="text-[5px] text-slate-500 mt-0.5 text-center leading-none">Active Courses</span>
              </div>
              <div className="bg-white border border-[#e0f2fe] rounded p-1 flex flex-col items-center justify-center">
                <span className="text-[10px] font-black text-blue-600 leading-none">48</span>
                <span className="text-[5px] text-slate-500 mt-0.5 text-center leading-none">Enrolled Students</span>
              </div>
              <div className="bg-white border border-[#e0f2fe] rounded p-1 flex flex-col items-center justify-center">
                <span className="text-[10px] font-black text-blue-600 leading-none">12</span>
                <span className="text-[5px] text-slate-500 mt-0.5 text-center leading-none">Sessions This Week</span>
              </div>
            </div>

            {/* Upcoming Sessions & Recent Activity side-by-side */}
            <div className="grid grid-cols-2 gap-1.5 mt-2">
              {/* Upcoming Sessions */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[7px] font-black text-navy">Upcoming Sessions</span>
                  <span className="text-[5px] text-blue-600 font-semibold cursor-pointer">View Calendar</span>
                </div>
                <div className="space-y-1">
                  <div className="bg-blue-50/50 border-l border-blue-500 rounded p-1 text-[5px]">
                    <div className="font-bold text-slate-700">Biology 101 - Lecture</div>
                    <div className="text-slate-400 mt-0.5 flex justify-between">
                      <span>Mon, May 20 - 10:00 AM</span>
                      <span>Room 300</span>
                    </div>
                  </div>
                  <div className="bg-orange-50/50 border-l border-orange-500 rounded p-1 text-[5px]">
                    <div className="font-bold text-slate-700">Office Hours</div>
                    <div className="text-slate-400 mt-0.5 flex justify-between">
                      <span>Tue, May 21 - 2:00 PM</span>
                      <span>Zoom</span>
                    </div>
                  </div>
                  <div className="bg-blue-50/50 border-l border-blue-500 rounded p-1 text-[5px]">
                    <div className="font-bold text-slate-700">Study Session</div>
                    <div className="text-slate-400 mt-0.5 flex justify-between">
                      <span>Wed, May 22 - 6:00 PM</span>
                      <span>Online</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div>
                <span className="text-[7px] font-black text-navy block mb-1">Recent Activity</span>
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 bg-[#f0fdf4] border border-[#bbf7d0] p-1.5 rounded text-[5px] text-emerald-800">
                    <div className="w-2.5 h-2.5 bg-emerald-500 text-white rounded-xs flex items-center justify-center shrink-0">
                      <svg className="w-1.5 h-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-semibold leading-tight">12 Assignments Graded</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-[#f0fdf4] border border-[#bbf7d0] p-1.5 rounded text-[5px] text-emerald-800">
                    <div className="w-2.5 h-2.5 bg-emerald-500 text-white rounded-xs flex items-center justify-center shrink-0">
                      <svg className="w-1.5 h-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-semibold leading-tight">8 New Messages</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-[#f0fdf4] border border-[#bbf7d0] p-1.5 rounded text-[5px] text-emerald-800">
                    <div className="w-2.5 h-2.5 bg-emerald-500 text-white rounded-xs flex items-center justify-center shrink-0">
                      <svg className="w-1.5 h-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-semibold leading-tight">5 Join Requests</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InstitutionDashboardMockup() {
  return (
    <div className="w-full bg-[#f8fafc] border border-slate-100 rounded-xl p-2 shadow-inner select-none h-[270px] flex flex-col justify-between overflow-hidden">
      <div className="bg-white border border-slate-100 rounded-lg shadow-xs flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-[85px] bg-[#f0fdf4] border-r border-[#dcfce7] p-1.5 flex flex-col justify-between shrink-0">
          <div className="flex flex-col gap-2">
            {/* Logo */}
            <div className="text-[10px] font-black text-navy px-1">
              Academi<span className="text-[#e11d48]">Q</span>
            </div>
            {/* Nav Items */}
            <div className="flex flex-col gap-0.5 text-[7px]">
              <div className="flex items-center gap-1 bg-[#dcfce7] text-[#15803d] font-bold px-1.5 py-0.5 rounded">
                <SidebarIcon type="overview" className="w-2.5 h-2.5 text-[#15803d]" />
                <span>Institution Center</span>
              </div>
              <div className="flex items-center gap-1 text-slate-500 px-1.5 py-0.5">
                <SidebarIcon type="overview" className="w-2.5 h-2.5" />
                <span>Overview</span>
              </div>
              <div className="flex items-center gap-1 text-slate-500 px-1.5 py-0.5">
                <SidebarIcon type="users" className="w-2.5 h-2.5" />
                <span>Users</span>
              </div>
              <div className="flex items-center gap-1 text-slate-500 px-1.5 py-0.5">
                <SidebarIcon type="analytics" className="w-2.5 h-2.5" />
                <span>Engagement</span>
              </div>
              <div className="flex items-center gap-1 text-slate-500 px-1.5 py-0.5">
                <SidebarIcon type="users" className="w-2.5 h-2.5" />
                <span>Study Circles</span>
              </div>
              <div className="flex items-center gap-1 text-slate-500 px-1.5 py-0.5">
                <SidebarIcon type="resources" className="w-2.5 h-2.5" />
                <span>Resources</span>
              </div>
              <div className="flex items-center gap-1 text-slate-500 px-1.5 py-0.5">
                <SidebarIcon type="tasks" className="w-2.5 h-2.5" />
                <span>Reports</span>
              </div>
              <div className="flex items-center gap-1 text-slate-500 px-1.5 py-0.5">
                <SidebarIcon type="settings" className="w-2.5 h-2.5" />
                <span>Settings</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-2 flex flex-col justify-between overflow-hidden">
          <div>
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-[9px] font-black text-navy leading-none">Institution Overview</h4>
              </div>
              <button className="text-[5px] font-bold text-slate-700 bg-white border border-slate-200 px-1.5 py-0.5 rounded shadow-xs hover:bg-slate-50 transition-colors cursor-pointer">
                Download Report
              </button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-1 mt-2">
              <div className="bg-white border border-green-100 rounded p-1 flex flex-col items-center justify-center">
                <span className="text-[10px] font-black text-emerald-600 leading-none">24,562</span>
                <span className="text-[5px] text-slate-500 mt-0.5 text-center leading-none">Active Students</span>
              </div>
              <div className="bg-white border border-green-100 rounded p-1 flex flex-col items-center justify-center">
                <span className="text-[10px] font-black text-emerald-600 leading-none">1,248</span>
                <span className="text-[5px] text-slate-500 mt-0.5 text-center leading-none">Study Sessions</span>
              </div>
              <div className="bg-white border border-green-100 rounded p-1 flex flex-col items-center justify-center">
                <span className="text-[10px] font-black text-emerald-600 leading-none">92%</span>
                <span className="text-[5px] text-slate-500 mt-0.5 text-center leading-none">Student Engagement</span>
              </div>
            </div>

            {/* Engagement Over Time & Top Departments side-by-side */}
            <div className="grid grid-cols-2 gap-1.5 mt-2.5">
              {/* Engagement Chart */}
              <div>
                <span className="text-[7px] font-black text-navy block mb-1">Engagement Over Time</span>
                <div className="bg-white p-1 rounded border border-slate-100">
                  <svg viewBox="0 0 100 45" className="w-full h-10">
                    <line x1="0" y1="35" x2="100" y2="35" stroke="#f1f5f9" strokeWidth="0.5" />
                    <line x1="0" y1="23" x2="100" y2="23" stroke="#f1f5f9" strokeWidth="0.5" />
                    <line x1="0" y1="10" x2="100" y2="10" stroke="#f1f5f9" strokeWidth="0.5" />
                    <path d="M 5,38 L 24,35 L 43,23 L 62,28 L 81,10 L 95,5" fill="none" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="5" cy="38" r="1.5" fill="#10b981" />
                    <circle cx="24" cy="35" r="1.5" fill="#10b981" />
                    <circle cx="43" cy="23" r="1.5" fill="#10b981" />
                    <circle cx="62" cy="28" r="1.5" fill="#10b981" />
                    <circle cx="81" cy="10" r="1.5" fill="#10b981" />
                    <circle cx="95" cy="5" r="1.5" fill="#10b981" />
                  </svg>
                  <div className="flex justify-between text-[4.5px] text-slate-400 font-medium px-0.5 mt-0.5">
                    <span>Apr 14</span>
                    <span>Apr 21</span>
                    <span>Apr 28</span>
                    <span>May 5</span>
                    <span>May 12</span>
                  </div>
                </div>
              </div>

              {/* Top Departments */}
              <div>
                <span className="text-[7px] font-black text-navy block mb-1">Top Departments</span>
                <div className="space-y-0.5 bg-slate-50/50 p-1.5 rounded border border-slate-100">
                  <div className="flex items-center justify-between text-[6px] py-0.5 border-b border-slate-200/50">
                    <span className="font-semibold text-slate-600">Biology</span>
                    <span className="font-bold text-emerald-600">95%</span>
                  </div>
                  <div className="flex items-center justify-between text-[6px] py-0.5 border-b border-slate-200/50">
                    <span className="font-semibold text-slate-600">Engineering</span>
                    <span className="font-bold text-emerald-600">93%</span>
                  </div>
                  <div className="flex items-center justify-between text-[6px] py-0.5 border-b border-slate-200/50">
                    <span className="font-semibold text-slate-600">Business</span>
                    <span className="font-bold text-emerald-600">90%</span>
                  </div>
                  <div className="flex items-center justify-between text-[6px] py-0.5 border-b border-slate-200/50">
                    <span className="font-semibold text-slate-600">Psychology</span>
                    <span className="font-bold text-emerald-600">88%</span>
                  </div>
                  <div className="flex items-center justify-between text-[6px] py-0.5">
                    <span className="font-semibold text-slate-600">Nursing</span>
                    <span className="font-bold text-emerald-600">87%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function WhyAcademiqSection() {
  return (
    <section
      className="bg-[#f8fbff] py-12 lg:py-16"
      aria-labelledby="why-academiq-heading"
    >
      <div className="mx-auto max-w-[1536px] px-5 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-12 text-center"
        >
          <h2 id="why-academiq-heading" className="text-4xl font-black text-navy sm:text-5xl">
            Why Academ<span className="text-[#e11d48]">IQ</span>?
          </h2>
          <p className="mt-3.5 mx-auto max-w-lg text-lg font-medium leading-relaxed text-slate-600">
            Designed for every participant in the learning journey.
          </p>
        </motion.div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Card 1: Students */}
          <motion.article
            initial={{ opacity: 0, y: 36, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -4, transition: { type: "spring", stiffness: 240, damping: 24 } }}
            className="flex flex-col justify-between rounded-3xl border border-border bg-white p-6 shadow-sm hover:shadow-[0_12px_40px_rgba(15,23,42,0.08)] transition-all duration-300"
          >
            <div>
              {/* Header */}
              <div className="flex flex-col items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#7c3aed] text-white shadow-md shadow-purple-100">
                  <SidebarIcon type="cap" className="w-7 h-7 text-white" />
                </div>
                <p className="mt-3.5 text-xs font-black uppercase tracking-widest text-[#7c3aed]">FOR STUDENTS</p>
                <h3 className="mt-2 text-xl font-black text-navy leading-snug">Everything you need to learn and succeed.</h3>
              </div>

              {/* Dashboard mockup */}
              <div className="my-6">
                <StudentDashboardMockup />
              </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-auto pt-2">
              <PointList points={studentPoints} colorClass="text-[#7c3aed]" />
              <div className="mt-6 border-t border-slate-100 pt-4">
                <Link href="/learn" className="inline-flex items-center gap-1.5 text-sm font-bold text-[#7c3aed] hover:underline group">
                  Explore Student Experience 
                  <ArrowRight weight="bold" size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </motion.article>

          {/* Card 2: Instructors */}
          <motion.article
            initial={{ opacity: 0, y: 36, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
            whileHover={{ y: -4, transition: { type: "spring", stiffness: 240, damping: 24 } }}
            className="flex flex-col justify-between rounded-3xl border border-border bg-white p-6 shadow-sm hover:shadow-[0_12px_40px_rgba(15,23,42,0.08)] transition-all duration-300"
          >
            <div>
              {/* Header */}
              <div className="flex flex-col items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-md shadow-blue-100">
                  <SidebarIcon type="tutoring" className="w-7 h-7 text-white" />
                </div>
                <p className="mt-3.5 text-xs font-black uppercase tracking-widest text-blue-600">FOR INSTRUCTORS</p>
                <h3 className="mt-2 text-xl font-black text-navy leading-snug">Teach, engage & empower your students.</h3>
              </div>

              {/* Dashboard mockup */}
              <div className="my-6">
                <InstructorDashboardMockup />
              </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-auto pt-2">
              <PointList points={instructorPoints} colorClass="text-blue-600" />
              <div className="mt-6 border-t border-slate-100 pt-4">
                <Link href="/teach" className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:underline group">
                  Explore Instructor Experience
                  <ArrowRight weight="bold" size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </motion.article>

          {/* Card 3: Institutions */}
          <motion.article
            initial={{ opacity: 0, y: 36, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            whileHover={{ y: -4, transition: { type: "spring", stiffness: 240, damping: 24 } }}
            className="flex flex-col justify-between rounded-3xl border border-border bg-white p-6 shadow-sm hover:shadow-[0_12px_40px_rgba(15,23,42,0.08)] transition-all duration-300"
          >
            <div>
              {/* Header */}
              <div className="flex flex-col items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-md shadow-emerald-100">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <p className="mt-3.5 text-xs font-black uppercase tracking-widest text-emerald-600">FOR INSTITUTIONS</p>
                <h3 className="mt-2 text-xl font-black text-navy leading-snug">Strengthen learning. Drive student success.</h3>
              </div>

              {/* Dashboard mockup */}
              <div className="my-6">
                <InstitutionDashboardMockup />
              </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-auto pt-2">
              <PointList points={institutionPoints} colorClass="text-emerald-600" />
              <div className="mt-6 border-t border-slate-100 pt-4">
                <Link href="/solutions" className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600 hover:underline group">
                  Explore Institution Solutions
                  <ArrowRight weight="bold" size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </motion.article>
        </div>

        {/* Quick Access Section */}
        <div className="mt-16">
          <div className="text-center mb-6">
            <h3 className="text-xs font-black uppercase tracking-widest text-slate-500">
              QUICK ACCESS
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Student Center */}
            <Link
              href="/learn"
              className="group flex items-center justify-between rounded-2xl border border-border bg-white p-4 shadow-xs hover:shadow-md hover:border-purple-200 transition-all duration-200"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-600 text-white shadow-sm shadow-purple-100">
                  <SidebarIcon type="cap" className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy leading-snug group-hover:text-purple-600 transition-colors">Student Center</h4>
                  <p className="mt-0.5 text-xs font-semibold text-slate-500 leading-snug">Access your courses, tasks & support</p>
                </div>
              </div>
              <svg className="w-5 h-5 text-slate-400 group-hover:text-purple-600 group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>

            {/* Instructor Center */}
            <Link
              href="/teach"
              className="group flex items-center justify-between rounded-2xl border border-border bg-white p-4 shadow-xs hover:shadow-md hover:border-blue-200 transition-all duration-200"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm shadow-blue-100">
                  <SidebarIcon type="tutoring" className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy leading-snug group-hover:text-blue-600 transition-colors">Instructor Center</h4>
                  <p className="mt-0.5 text-xs font-semibold text-slate-500 leading-snug">Manage your teaching, students & sessions</p>
                </div>
              </div>
              <svg className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>

            {/* Institution Center */}
            <Link
              href="/solutions"
              className="group flex items-center justify-between rounded-2xl border border-border bg-white p-4 shadow-xs hover:shadow-md hover:border-emerald-200 transition-all duration-200"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-sm shadow-emerald-100">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy leading-snug group-hover:text-emerald-600 transition-colors">Institution Center</h4>
                  <p className="mt-0.5 text-xs font-semibold text-slate-500 leading-snug">View analytics, users & engagement</p>
                </div>
              </div>
              <svg className="w-5 h-5 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>

            {/* Opportunity Hub */}
            <Link
              href="/opportunities"
              className="group flex items-center justify-between rounded-2xl border border-border bg-white p-4 shadow-xs hover:shadow-md hover:border-orange-200 transition-all duration-200"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-white shadow-sm shadow-orange-100">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy leading-snug group-hover:text-orange-500 transition-colors">Opportunity Hub</h4>
                  <p className="mt-0.5 text-xs font-semibold text-slate-500 leading-snug">Find resources, programs & partnerships</p>
                </div>
              </div>
              <svg className="w-5 h-5 text-slate-400 group-hover:text-orange-500 group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
