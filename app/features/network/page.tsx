"use client";

import { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import networkData from "./network-data.json";
import {
  Search,
  GraduationCap,
  Users,
  Compass,
  Briefcase,
  Heart,
  Building,
  Check,
  MessageSquare,
  UserPlus,
  Calendar,
  BookOpen,
  Activity,
  Book,
  Info
} from "lucide-react";

// Connection interfaces
interface Connection {
  id: string;
  name: string;
  role: "Instructor" | "Study Partner" | "Tutor" | "Advisor" | "Wellness & Support" | "Researcher" | "Institution" | "Global";
  roleLabel: string;
  badgeBg: string;
  badgeText: string;
  description: string;
  subtitle: string;
  avatar: string;
  detailLabel: string;
  detailValue: string;
  avatarsStack: string[];
  stackCount: number;
  lastInteraction: string;
}

export default function NetworkPage() {
  // States for interactive UI
  const [selectedTab, setSelectedTab] = useState<string>("All");
  const [connectedIds, setConnectedIds] = useState<string[]>([]);
  const [joinedSessions, setJoinedSessions] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const connections: Connection[] = networkData.connections as Connection[];

  const iconMap = {
    Search,
    GraduationCap,
    Users,
    Compass,
    Briefcase,
    Heart,
    Building,
    Check,
    MessageSquare,
    UserPlus,
    Calendar,
    BookOpen,
    Activity,
    Book,
    Info,
  };

  const getIcon = (iconName: string, className: string) => {
    const Icon = iconMap[iconName as keyof typeof iconMap];
    return Icon ? <Icon className={className} /> : null;
  };

  // Filtering Logic
  const filteredConnections = connections.filter((conn) => {
    const matchesSearch =
      conn.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conn.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conn.subtitle.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    if (selectedTab === "All") return true;
    if (selectedTab === "Students" && conn.role === "Study Partner") return true;
    if (selectedTab === "Instructors" && conn.role === "Instructor") return true;
    if (selectedTab === "Tutors" && conn.role === "Tutor") return true;
    if (selectedTab === "Advisors" && conn.role === "Advisor") return true;
    if (selectedTab === "Wellness & Support" && conn.role === "Wellness & Support") return true;
    if (selectedTab === "Mentors" && conn.role === "Advisor") return true;
    if (selectedTab === "Researchers") return false;
    if (selectedTab === "Institution" && conn.subtitle.includes("SDSU")) return true;
    if (selectedTab === "Global" && conn.subtitle.includes("Toronto")) return true;

    return false;
  });

  const toggleConnect = (id: string) => {
    if (connectedIds.includes(id)) {
      setConnectedIds(connectedIds.filter((item) => item !== id));
    } else {
      setConnectedIds([...connectedIds, id]);
    }
  };

  const handleJoinSession = (id: string) => {
    if (joinedSessions.includes(id)) {
      setJoinedSessions(joinedSessions.filter((item) => item !== id));
    } else {
      setJoinedSessions([...joinedSessions, id]);
    }
  };

  return (
    <>
      <Navbar />

      {/* ── Main content ── */}
      <main className="flex-1 max-w-[1536px] w-full mx-auto px-5 lg:px-10 py-8 space-y-12">

        {/* ── Hero section & Radial Graph ── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:items-center  rounded-3xl p-6 lg:p-10 relative overflow-hidden">
          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#eff6ff]/60 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-[#fdf4ff]/60 rounded-full blur-2xl -z-10" />

          {/* Text columns */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            <h1 className="text-6xl font-black text-[#0a1628] leading-[1.05] tracking-tight">
              {networkData.hero.title}
            </h1>
            <h2 className="mt-4 text-[21px] font-extrabold text-[#4f46e5] leading-snug">
              {networkData.hero.subtitle}
            </h2>
            {networkData.hero.paragraphs.map((paragraph, idx) => (
              <p key={idx} className="mt-5 text-[15.5px] font-medium leading-relaxed text-[#4b5a72]">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Radial Graph Column */}
          <div className="lg:col-span-6 flex items-center justify-center w-full max-w-[560px] mx-auto min-h-[380px]">
            <div className="relative w-full h-[420px] sm:h-[460px] md:h-[500px] lg:h-[520px] rounded-[28px] overflow-hidden">
              <Image src={networkData.hero.imageSrc} alt={networkData.hero.imageAlt} fill className="object-cover" />
            </div>
          </div>
        </section>

        {/* ── Relationship Feature Cards Row ── */}
        <section className=" p-3 space-y-6 border border-slate-200 rounded-xl shadow-xs ">
          <div className="text-center">
            <h2 className="text-[20px] font-extrabold text-[#0a1628]">
              Build Relationships Across Your Academic Journey
            </h2>
          </div>
          {/* 6 Grid items */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {networkData.featureCards.map((card, idx) => (
              <div key={idx} className={`p-4 border border-slate-200 ${card.bg} transition-all duration-300 flex flex-col justify-between items-start text-left min-h-[140px] cursor-pointer hover:shadow-xs group`}>
                <div className="p-2 bg-white rounded-xl shadow-2xs group-hover:scale-105 transition-transform duration-200">
                  {getIcon(card.icon, `${card.iconClass} h-5 w-5`)}
                </div>
                <div>
                  <h3 className="text-[13.5px] font-bold text-[#0a1628] mt-3">{card.title}</h3>
                  <p className="text-[11px] text-[#4b5a72] leading-snug mt-1 font-medium">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 7 Horizontal Sub-Nav Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {networkData.subNavCards.map((sub, idx) => (
              <div key={idx} className="p-3 bg-white border border-slate-200 rounded-xl hover:shadow-sm hover:border-slate-200 transition-all flex flex-col justify-between text-left cursor-pointer group min-h-[110px]">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-slate-50 rounded-lg group-hover:scale-105 transition-transform duration-200">
                    {getIcon(sub.icon, `${sub.iconClass} h-4.5 w-4.5`)}
                  </div>
                  <h4 className="text-[11.5px] font-extrabold text-[#0a1628] leading-tight">{sub.title}</h4>
                </div>
                <p className="text-[10px] text-[#4b5a72] leading-snug mt-2 font-medium">{sub.desc}</p>
              </div>
            ))}
          </div>

        </section>

        {/* ── Two-Column Layout (Connections & Recent Activity / Success) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: My Connections (8 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white border border-slate-200 rounded-3xl p-5 md:p-6 shadow-xs">

              {/* Header with Search */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
                <h2 className="text-[20px] font-extrabold text-[#0a1628] text-left">
                  My Connections
                </h2>

                <div className="relative w-full sm:w-[220px]">
                  <input
                    type="text"
                    placeholder="Search connections..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-[#f8fafc] border border-slate-200 rounded-xl py-1.5 pl-9 pr-3 text-[12.5px] text-[#0a1628] placeholder-slate-400 outline-none focus:border-primary transition-colors font-medium"
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
                </div>
              </div>

              {/* Tabs Scrollable (Text tabs style matching the screenshot) */}
              <div className="flex items-center gap-6 overflow-x-auto py-4 no-scrollbar scroll-smooth border-b border-slate-100">
                {networkData.tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setSelectedTab(tab)}
                    className={`text-[12px] font-extrabold shrink-0 transition-all cursor-pointer relative py-1 ${selectedTab === tab
                        ? "text-[#6366f1] after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-[#6366f1]"
                        : "text-[#4b5a72] hover:text-[#0a1628]"
                      }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Connections List */}
              <div className="divide-y divide-slate-100 mt-2">
                {filteredConnections.length > 0 ? (
                  filteredConnections.map((conn) => (
                    <div key={conn.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4.5 first:pt-2 last:pb-2 group">

                      {/* Left: Info Row */}
                      <div className="flex items-start gap-3.5 min-w-0">
                        {/* Avatar */}
                        <div className="relative h-12 w-12 rounded-full overflow-hidden border border-slate-200 shrink-0 shadow-2xs group-hover:scale-105 transition-transform duration-200">
                          <Image src={conn.avatar} alt={conn.name} fill className="object-cover" />
                        </div>

                        {/* Name & Subtitle */}
                        <div className="min-w-0 text-left">
                          <div className="flex items-center flex-wrap gap-2">
                            <span className="text-[14.5px] font-extrabold text-[#0a1628] leading-tight hover:text-primary transition-colors cursor-pointer">
                              {conn.name}
                            </span>
                            <span className={`px-2 py-0.5 text-[9.5px] font-extrabold rounded-md border ${conn.badgeBg}`}>
                              {conn.badgeText}
                            </span>
                          </div>
                          <p className="text-[11.5px] font-bold text-[#4b5a72] mt-1.5 leading-none">
                            {conn.description}
                          </p>
                          <p className="text-[10px] font-medium text-slate-400 mt-1">
                            {conn.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Middle: Details & Stack */}
                      <div className="flex items-center justify-between sm:justify-start gap-8 shrink-0">
                        {/* Shared Item */}
                        <div className="text-left">
                          <span className="text-[10px] text-slate-400 font-semibold block leading-none">{conn.detailLabel}</span>
                          <span className="text-[12px] font-bold text-[#0a1628] block mt-1.5">{conn.detailValue}</span>

                          {/* Mini avatar stack */}
                          <div className="flex items-center -space-x-1.5 mt-2.5">
                            {conn.avatarsStack.map((stackImg, idx) => (
                              <div key={idx} className="h-5 w-5 rounded-full overflow-hidden border border-white relative shadow-2xs">
                                <Image src={stackImg} alt="Stack avatar" fill className="object-cover" />
                              </div>
                            ))}
                            <span className="text-[9.5px] font-extrabold text-[#4b5a72] bg-slate-50 border border-slate-100 rounded-md px-1.5 py-0.5 leading-none shrink-0">
                              +{conn.stackCount}
                            </span>
                          </div>
                        </div>

                        {/* Last Interaction */}
                        <div className="text-left sm:text-right shrink-0">
                          <span className="text-[10px] text-slate-400 font-semibold block leading-none">Last interaction</span>
                          <span className="text-[11.5px] font-bold text-[#0a1628] block mt-1.5">{conn.lastInteraction}</span>
                        </div>
                      </div>

                      {/* Right: Actions */}
                      <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                        <button className="h-[36px] w-[36px] rounded-xl border border-slate-205 hover:border-[#6366f1]/40 flex items-center justify-center text-[#6366f1] transition-all bg-[#6366f1]/5 shadow-2xs">
                          <MessageSquare className="h-4 w-4" />
                        </button>
                        <button className="h-[36px] w-[36px] rounded-xl border border-slate-205 hover:border-[#6366f1]/40 flex items-center justify-center text-[#6366f1] transition-all bg-[#6366f1]/5 shadow-2xs">
                          <UserPlus className="h-4 w-4" />
                        </button>
                      </div>

                    </div>
                  ))
                ) : (
                  <div className="py-12 text-center text-slate-400 text-sm font-semibold flex flex-col items-center justify-center gap-2">
                    <Info className="h-8 w-8 text-slate-300" />
                    <span>No connections found matching &quot;{searchQuery}&quot; under {selectedTab}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Card A */}
              <div className="bg-white border border-slate-200 rounded-3xl p-5 md:p-6 shadow-xs text-left">
                <h3 className="text-[17px] font-extrabold text-[#0a1628] border-b border-slate-100 pb-3">
                  Recent Network Activity
                </h3>

                <div className="space-y-4 mt-4">
                  {networkData.recentActivity.map((act, idx) => (
                    <div key={idx} className="flex gap-3 items-start group">
                      <div className="relative h-8 w-8 rounded-full overflow-hidden border border-slate-100 shrink-0">
                        <Image src={act.av} alt={act.name} fill className="object-cover" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className="text-[12px] text-[#4b5a72] leading-snug font-medium">
                          <span className="font-extrabold text-[#0a1628]">{act.name} </span>
                          {act.act}
                          {act.link && (
                            <span className="font-bold text-[#6366f1]">
                              {" "}
                              {act.link}
                            </span>
                          )}
                        </p>
                        <span className="text-[10px] font-bold text-slate-400 mt-1 block">
                          {act.time}
                        </span>
                      </div>

                      <div className="h-7 w-7 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                        {getIcon(act.icon, `${act.iconClass} h-3.5 w-3.5 shrink-0`)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card B */}
              <div className="bg-white border border-slate-200 rounded-3xl p-5 md:p-6 shadow-xs text-left">
                <h3 className="text-[17px] font-extrabold text-[#0a1628]">
                  Academic Success & Wellness
                </h3>

                <p className="text-[11.5px] text-[#4b5a72] mt-1.5 font-medium leading-relaxed">
                  Connect with professionals who support your academic success,
                  well-being, and personal growth.
                </p>

                <div className="space-y-4 mt-5">
                  {networkData.academicWellness.map((serv, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div
                        className={`h-8 w-8 rounded-lg flex items-center justify-center shrink-0 border ${serv.bg}`}
                      >
                        {getIcon(serv.icon, `${serv.iconClass} h-4.5 w-4.5`)}
                      </div>

                      <div className="min-w-0 text-left">
                        <span className="text-[12.5px] font-bold text-[#0a1628] block">
                          {serv.name}
                        </span>
                        <span className="text-[10px] text-[#4b5a72] font-semibold block mt-0.5">
                          {serv.desc}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-2.5 mt-6 border-t border-slate-100 pt-5">
                  <button className="w-full bg-[#6366f1] text-white text-[12.5px] font-black py-2.5 px-4 rounded-xl flex items-center justify-center gap-2">
                    <Search className="h-4 w-4" />
                    Find Support
                  </button>

                  <button className="w-full bg-white border border-[#6366f1] text-[#6366f1] text-[12.5px] font-black py-2.5 px-4 rounded-xl flex items-center justify-center gap-2">
                    <Users className="h-4 w-4" />
                    Browse Professionals
                  </button>

                  <button className="w-full bg-white border border-[#6366f1] text-[#6366f1] text-[12.5px] font-black py-2.5 px-4 rounded-xl flex items-center justify-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Request Consultation
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ── Section: Your Relationship Categories ── */}
        <section className="space-y-6">
          <div className="text-left">
            <h2 className="text-[20px] font-extrabold text-[#0a1628]">
              Your Relationship Categories
            </h2>
          </div>

          {/* 8 columns of statistics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3.5">
            {[
              { title: "Study Partners", num: "12", lbl: "Active partners", plus: 7, icon: <Users className="text-teal-650 h-4.5 w-4.5" />, bg: "bg-teal-50 text-teal-650 border-teal-100", avs: ["/studycircleStudent.png", "/emma.webp", "/studycircletutar.png"] },
              { title: "Instructors", num: "8", lbl: "Connected", plus: 3, icon: <GraduationCap className="text-blue-600 h-4.5 w-4.5" />, bg: "bg-blue-50 text-blue-600 border-blue-100", avs: ["/studycircleInstructor.png", "/StudycircleAdvisor.png", "/studycircletutar.png"] },
              { title: "Tutors", num: "5", lbl: "Connected", plus: 2, icon: <Users className="text-amber-600 h-4.5 w-4.5" />, bg: "bg-amber-50 text-amber-600 border-amber-100", avs: ["/studycircletutar.png", "/studycircleStudent.png", "/emma.webp"] },
              { title: "Advisors", num: "3", lbl: "Connected", plus: 1, icon: <Compass className="text-indigo-600 h-4.5 w-4.5" />, bg: "bg-indigo-50 text-indigo-600 border-indigo-100", avs: ["/StudycircleAdvisor.png", "/studycircleInstructor.png", "/studycircleStudent.png"] },
              { title: "Mentors", num: "4", lbl: "Connected", plus: 2, icon: <Briefcase className="text-purple-600 h-4.5 w-4.5" />, bg: "bg-purple-50 text-purple-600 border-purple-100", avs: ["/studycircleInstructor.png", "/emma.webp", "/StudycircleAdvisor.png"] },
              { title: "Researchers", num: "2", lbl: "Connected", plus: 1, icon: <Activity className="text-slate-600 h-4.5 w-4.5" />, bg: "bg-slate-50 text-slate-600 border-slate-200", avs: ["/studycircletutar.png", "/studycircleStudent.png", "/emma.webp"] },
              { title: "Wellness, Support & Success", num: "2", lbl: "Connected", plus: 1, icon: <Heart className="text-rose-600 h-4.5 w-4.5" />, bg: "bg-rose-50 text-rose-600 border-rose-100", avs: ["/emma.webp", "/studycircleStudent.png", "/StudycircleAdvisor.png"] },
              { title: "Institution Connections", num: "18", lbl: "Connections", plus: 12, icon: <Building className="text-slate-700 h-4.5 w-4.5" />, bg: "bg-slate-100 text-slate-700 border-slate-200", avs: ["/studycircleStudent.png", "/studycircleInstructor.png", "/StudycircleAdvisor.png"] }
            ].map((stat, idx) => (
              <div key={idx} className="p-3.5 bg-white border border-slate-200 rounded-2xl flex flex-col justify-between items-center text-center shadow-2xs hover:shadow-xs transition-shadow min-h-[165px]">
                <div className={`p-1.5 rounded-lg border ${stat.bg}`}>{stat.icon}</div>

                <div className="mt-2.5">
                  <h4 className="text-[10px] text-[#4b5a72] font-black uppercase tracking-wider block leading-tight">{stat.title}</h4>
                  <span className="text-[26px] font-black text-[#0a1628] leading-none mt-1 block">{stat.num}</span>
                  <span className="text-[9.5px] font-bold text-slate-400 leading-none mt-1 block">{stat.lbl}</span>
                </div>

                {/* Overlap avatars */}
                <div className="flex items-center -space-x-1.5 mt-3">
                  {stat.avs.map((imgUrl, avIdx) => (
                    <div key={avIdx} className="h-[18px] w-[18px] rounded-full overflow-hidden border border-white relative shadow-2xs">
                      <Image src={imgUrl} alt="stat avatar" fill className="object-cover" />
                    </div>
                  ))}
                  <span className="text-[8px] font-black text-[#4b5a72] bg-slate-50 border border-slate-100 rounded-md px-1 py-0.5 shrink-0 leading-none">
                    +{stat.plus}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Footer: Strengthen Network (Left) & Network Insights (Right) ── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">

          {/* Left: Strengthen Your Academic Network (8 cols) */}
          <div className="lg:col-span-9 space-y-5">
            <h3 className="text-[18px] font-extrabold text-[#0a1628]">
              Strengthen Your Academic Network
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
              {networkData.strengthenCards.map((card) => (
                <div key={card.id} className="p-4 bg-white border border-slate-200 rounded-2xl flex flex-col justify-between h-[220px] shadow-2xs hover:shadow-xs transition-shadow">
                  <div>
                    <div className="flex items-center gap-2">
                      <div className={`p-1 ${card.iconBg} rounded-lg ${card.iconClass} ${card.iconBorder}`}>
                        {getIcon(card.icon, "h-4 w-4")}
                      </div>
                      <span className="text-[11.5px] font-extrabold text-[#0a1628] leading-tight">{card.title}</span>
                    </div>
                    <p className="text-[9.5px] text-[#4b5a72] font-semibold mt-2.5 leading-snug">
                      {card.desc}
                    </p>
                    {card.avatars ? (
                      <div className="flex -space-x-1 mt-3">
                        {card.avatars.map((img, i) => (
                          <div key={i} className="h-5.5 w-5.5 rounded-full overflow-hidden border border-white relative shadow-2xs">
                            <Image src={img} alt={`${card.title} avatar`} fill className="object-cover" />
                          </div>
                        ))}
                      </div>
                    ) : card.badgeLabel ? (
                      <div className="mt-3.5 bg-slate-50/80 rounded-lg border border-slate-100/70 p-2 text-center">
                        <span className="text-[11px] font-black text-[#0f172a]">{card.badgeLabel}</span>
                      </div>
                    ) : null}
                  </div>
                  <button
                    onClick={() => {
                      if (card.id === "sessions") {
                        handleJoinSession(card.id);
                      } else if (card.id === "suggested" || card.id === "past") {
                        toggleConnect(card.id);
                      }
                    }}
                    className={`w-full text-[10.5px] font-extrabold py-1.5 px-3 rounded-lg border text-center transition-all cursor-pointer ${(card.id === "suggested" || card.id === "past") && connectedIds.includes(card.id)
                        ? "bg-emerald-50 text-emerald-600 border-emerald-100 flex items-center justify-center gap-1.5"
                        : card.id === "sessions" && joinedSessions.includes(card.id)
                          ? "bg-emerald-50 text-emerald-600 border-emerald-100 flex items-center justify-center gap-1.5"
                          : "bg-white text-[#6366f1] border-[#6366f1] hover:bg-[#6366f1]/5"
                      }`}
                  >
                    {(card.id === "suggested" || card.id === "past") && connectedIds.includes(card.id) ? (
                      <>
                        <Check className="h-3 w-3" />
                        {card.activeLabel}
                      </>
                    ) : card.id === "sessions" && joinedSessions.includes(card.id) ? (
                      <>
                        <Check className="h-3 w-3" />
                        {card.activeLabel}
                      </>
                    ) : (
                      card.buttonLabel
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Network Insights Sidebar (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-[18px] font-extrabold text-[#0a1628] leading-none">
              Network Insights
            </h3>

            <div className="bg-white rounded-3xl p-5 shadow-xs space-y-4.5 border border-slate-200">
              {networkData.networkInsights.map((insight, idx) => (
                <div key={idx} className="flex gap-3 items-start border-b border-slate-100 last:border-0 pb-3 last:pb-0">
                  <div className="h-2 w-2 rounded-lg bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
                    {getIcon(insight.icon, `h-4 w-4 ${insight.iconClass}`)}
                  </div>
                  <div className="min-w-0 text-left">
                    <span className="text-[9.5px] text-[#4b5a72] font-extrabold uppercase tracking-wider block leading-none">{insight.label}</span>
                    <span className="text-[12.5px] font-bold text-[#0a1628] block mt-1.5 leading-snug">{insight.val}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>

      </main>

      {/* ── Footer ── */}
      <Footer />
    </>
  );
}
