import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { exploreFeatures } from "@/constants/features";
import type { Metadata } from "next";

/* ── slug → feature lookup ── */
const slugMap: Record<string, string> = {
  "tutoring":        "tutoring-feature",
  "library":         "library",
  "community":       "community",
  "network":         "network",
};

/* ── Per-feature accent colours ── */
const palette: Record<string, { hex: string; soft: string; ring: string; tagBg: string; tagText: string }> = {
  "one-channel":          { hex: "#3b82f6", soft: "#eff6ff", ring: "rgba(59,130,246,0.18)",   tagBg: "#dbeafe", tagText: "#1d4ed8" },
  threads:                { hex: "#10b981", soft: "#ecfdf5", ring: "rgba(16,185,129,0.18)",   tagBg: "#d1fae5", tagText: "#065f46" },
  "study-sessions-feature":{ hex: "#f43f5e", soft: "#fff1f2", ring: "rgba(244,63,94,0.18)",  tagBg: "#ffe4e6", tagText: "#be123c" },
  "study-circle":         { hex: "#a855f7", soft: "#faf5ff", ring: "rgba(168,85,247,0.18)",  tagBg: "#ede9fe", tagText: "#6d28d9" },
  "assist-feature":       { hex: "#6366f1", soft: "#eef2ff", ring: "rgba(99,102,241,0.18)",  tagBg: "#e0e7ff", tagText: "#4338ca" },
  "tutoring-feature":     { hex: "#14b8a6", soft: "#f0fdfa", ring: "rgba(20,184,166,0.18)",  tagBg: "#ccfbf1", tagText: "#0f766e" },
  library:                { hex: "#4f46e5", soft: "#eef2ff", ring: "rgba(79,70,229,0.18)",   tagBg: "#e0e7ff", tagText: "#3730a3" },
  community:              { hex: "#ec4899", soft: "#fdf2f8", ring: "rgba(236,72,153,0.18)",  tagBg: "#fce7f3", tagText: "#9d174d" },
  network:                { hex: "#f97316", soft: "#fff7ed", ring: "rgba(249,115,22,0.18)",  tagBg: "#ffedd5", tagText: "#c2410c" },
};

/* ── Extended per-module content ── */
const extendedContent: Record<string, {
  headline: string;
  subheadline: string;
  howItWorks: { step: string; detail: string }[];
  whoItsFor: string[];
  cta: { label: string; href: string };
}> = {
  "one-channel": {
    headline: "Your Academic Home Base",
    subheadline: "ONE Channel is your personalised command centre — everything happening in your academic life, surfaced in one beautiful, organised feed.",
    howItWorks: [
      { step: "Connect your courses & circles", detail: "All your enrolled courses and joined study circles post updates directly to your feed." },
      { step: "Pin what matters", detail: "Pin important announcements, resources, or links so you never lose track of what's critical." },
      { step: "Stay notified, not overwhelmed", detail: "Smart notification grouping keeps you informed without drowning in alerts." },
      { step: "Access everything in one click", detail: "Jump to any module — sessions, threads, library — directly from your channel." },
    ],
    whoItsFor: ["Students", "Instructors", "Institutions"],
    cta: { label: "Get started with ONE Channel", href: "/signup" },
  },
  threads: {
    headline: "Academic Discussions, Reimagined",
    subheadline: "Threads brings your academic conversations into one organised, searchable, real-time space — so great questions don't get lost in group chats.",
    howItWorks: [
      { step: "Start a thread", detail: "Post a question, idea, or resource in any course, circle, or community." },
      { step: "Rich formatting & attachments", detail: "Use text, images, code blocks, and file attachments to express yourself fully." },
      { step: "Upvote & pin the best answers", detail: "Surface the most helpful replies so everyone benefits from the best insights." },
      { step: "Get notified on replies & mentions", detail: "Stay in the loop when someone responds to your thread or mentions you." },
    ],
    whoItsFor: ["Students", "Instructors"],
    cta: { label: "Join the discussion", href: "/signup" },
  },
  "study-sessions-feature": {
    headline: "Live Collaborative Study, Anywhere",
    subheadline: "Study Sessions lets you schedule, host, and join live virtual sessions for exam prep, group study, and peer teaching — complete with recording.",
    howItWorks: [
      { step: "Schedule a session", detail: "Set a date, topic, and invite peers or open it to your whole circle." },
      { step: "Go live with video & screen share", detail: "Full HD video calling with screen sharing for presentations and demos." },
      { step: "Use the interactive whiteboard", detail: "Draw, annotate, and collaborate in real time on a shared whiteboard." },
      { step: "Access recordings later", detail: "Every session is recorded and stored so you can review it anytime." },
    ],
    whoItsFor: ["Students", "Instructors"],
    cta: { label: "Schedule your first session", href: "/signup" },
  },
  "study-circle": {
    headline: "Small Groups. Big Progress.",
    subheadline: "Study Circles are focused, close-knit academic groups where you tackle goals together, share resources, and keep each other accountable.",
    howItWorks: [
      { step: "Create or discover a circle", detail: "Start your own group or search for existing circles by course, topic, or interest." },
      { step: "Set shared goals & tasks", detail: "Define what the group wants to achieve and track progress together." },
      { step: "Chat, share & collaborate", detail: "Group chat, file sharing, threads, and sessions all within your circle." },
      { step: "Track participation & progress", detail: "See who's contributing and celebrate milestones as a team." },
    ],
    whoItsFor: ["Students"],
    cta: { label: "Join a Study Circle", href: "/signup" },
  },
  "assist-feature": {
    headline: "Your Intelligent Academic Companion",
    subheadline: "Assist is an AI-powered academic support tool that helps you understand concepts, plan your studies, get feedback on your work, and stay on track — 24/7.",
    howItWorks: [
      { step: "Ask anything, get instant clarity", detail: "Ask subject-specific questions and receive clear, contextualised explanations." },
      { step: "Generate a personalised study plan", detail: "Tell Assist your goals and deadlines — it builds a structured plan for you." },
      { step: "Get feedback on essays & assignments", detail: "Paste your draft and receive structured, constructive feedback in seconds." },
      { step: "Quiz yourself to reinforce learning", detail: "Assist generates practice questions and flashcards based on your topics." },
    ],
    whoItsFor: ["Students", "Instructors"],
    cta: { label: "Try Assist for free", href: "/signup" },
  },
  "tutoring-feature": {
    headline: "Personalised Support from Real Experts",
    subheadline: "Tutoring connects you 1-on-1 with verified instructors and peer tutors who understand your subject — when you need it most.",
    howItWorks: [
      { step: "Browse & book verified tutors", detail: "Filter by subject, availability, rating, and price to find your perfect match." },
      { step: "Meet live or async", detail: "Hold sessions over video, or send questions and receive recorded video responses." },
      { step: "Share materials in advance", detail: "Upload your notes, assignments, or past papers ahead of your session." },
      { step: "Rate, review & rebook", detail: "Leave feedback after each session and easily rebook tutors you love." },
    ],
    whoItsFor: ["Students", "Instructors"],
    cta: { label: "Find a tutor now", href: "/signup" },
  },
  library: {
    headline: "All Your Academic Resources in One Place",
    subheadline: "The Library is a rich, searchable resource hub — browse, upload, and organise notes, eBooks, recordings, past papers, and curated study guides.",
    howItWorks: [
      { step: "Search across everything", detail: "Full-text search across all uploaded notes, books, slides, and recordings." },
      { step: "Browse curated collections", detail: "Explore staff-curated and community-rated collections by subject or level." },
      { step: "Upload & share your own content", detail: "Contribute your notes and earn recognition from peers who find them helpful." },
      { step: "Save to your personal shelf", detail: "Bookmark resources and organise them into personal collections for quick access." },
    ],
    whoItsFor: ["Students", "Instructors", "Institutions"],
    cta: { label: "Browse the Library", href: "/signup" },
  },
  community: {
    headline: "Build Your Academic Identity",
    subheadline: "Community is where academic life becomes social — connect with peers and instructors, join interest-based groups, celebrate achievements, and grow together.",
    howItWorks: [
      { step: "Build your academic profile", detail: "Showcase your courses, achievements, study circles, and interests." },
      { step: "Follow peers & instructors", detail: "Stay connected with the people who inspire you in your academic journey." },
      { step: "Join interest-based communities", detail: "Find your tribe — from specific subjects to career paths and hobbies." },
      { step: "Celebrate milestones & badges", detail: "Earn recognition for contributions, streaks, and academic achievements." },
    ],
    whoItsFor: ["Students", "Instructors"],
    cta: { label: "Join the Community", href: "/signup" },
  },
  network: {
    headline: "Grow Beyond the Classroom",
    subheadline: "Network connects you to internships, mentors, academic partnerships, and career opportunities — start building your professional future while still in school.",
    howItWorks: [
      { step: "Discover opportunities", detail: "Browse internships, scholarships, grants, and job listings tailored to students." },
      { step: "Connect with mentors", detail: "Get matched with professionals and academics who can guide your career." },
      { step: "Build partnerships", detail: "Institutions and instructors can post opportunities and connect with students." },
      { step: "Showcase your portfolio", detail: "Highlight projects, publications, and achievements to attract opportunities." },
    ],
    whoItsFor: ["Students", "Instructors", "Institutions"],
    cta: { label: "Explore Opportunities", href: "/opportunities" },
  },
};

/* ── Static params ── */
export function generateStaticParams() {
  return Object.keys(slugMap).map((slug) => ({ slug }));
}

/* ── Metadata ── */
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const featureId = slugMap[slug];
  const feature = exploreFeatures.find((f) => f.id === featureId);
  if (!feature) return { title: "Not Found | AcademIQ" };
  return {
    title: `${feature.title} | AcademIQ`,
    description: feature.description,
  };
}

/* ── Page ── */
export default async function FeatureDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const featureId = slugMap[slug];
  const feature   = exploreFeatures.find((f) => f.id === featureId);
  if (!feature) notFound();

  const p       = palette[feature.id] ?? { hex: "#2563eb", soft: "#eff6ff", ring: "rgba(59,130,246,0.18)", tagBg: "#dbeafe", tagText: "#1d4ed8" };
  const content = extendedContent[feature.id];

  /* Other features for the "Explore more" strip */
  const otherFeatures = exploreFeatures.filter((f) => f.id !== feature.id).slice(0, 4);
  const slugReverse   = Object.fromEntries(Object.entries(slugMap).map(([k, v]) => [v, k]));

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[#f8fbff]">

        {/* ── Hero ── */}
        <section
          className="relative overflow-hidden py-20 lg:py-28"
          style={{ background: `linear-gradient(160deg, #ffffff 0%, ${p.soft} 100%)` }}
        >
          {/* Decorative glow blob */}
          <div
            className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl"
            style={{ background: p.hex }}
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-[1280px] px-5 lg:px-10">
            {/* Breadcrumb */}
            <nav className="mb-8 flex items-center gap-2 text-sm font-semibold text-slate-700" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span aria-hidden="true">›</span>
              <span style={{ color: p.hex }}>{feature.title}</span>
            </nav>

            <div className="flex flex-col lg:flex-row lg:items-center gap-12">
              {/* Left: text */}
              <div className="flex-1 max-w-2xl">
                {/* Tag badge */}
                {feature.tag && (
                  <span
                    className="inline-flex items-center rounded-full px-3 py-1 text-[13px] font-black uppercase tracking-widest mb-5"
                    style={{ background: p.tagBg, color: p.tagText }}
                  >
                    {feature.tag}
                  </span>
                )}

                <h1 className="text-4xl font-black text-navy sm:text-5xl lg:text-6xl leading-none">
                  {content?.headline ?? feature.title}
                </h1>
                <p className="mt-6 text-lg font-medium leading-relaxed text-slate-700 max-w-xl">
                  {content?.subheadline ?? feature.description}
                </p>

                {/* Bullets */}
                {feature.bullets && (
                  <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {feature.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2.5 text-[16px] font-semibold text-slate-700">
                        <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" style={{ color: p.hex }}>
                          <circle cx="12" cy="12" r="10" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Who it's for */}
                {content?.whoItsFor && (
                  <div className="mt-8 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">For:</span>
                    {content.whoItsFor.map((role) => (
                      <span key={role} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-xs">
                        {role}
                      </span>
                    ))}
                  </div>
                )}

                {/* CTA buttons */}
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href={content?.cta.href ?? "/signup"}
                    className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-black text-white shadow-md transition-all hover:opacity-90 hover:-translate-y-0.5"
                    style={{ background: p.hex, boxShadow: `0 8px 20px ${p.ring}` }}
                  >
                    {content?.cta.label ?? "Get started"}
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-navy shadow-xs transition-all hover:border-slate-300 hover:shadow-sm"
                  >
                    ← Back to home
                  </Link>
                </div>
              </div>

              {/* Right: visual card */}
              <div className="shrink-0 lg:w-[380px]">
                <div
                  className="rounded-3xl border p-8 shadow-lg"
                  style={{
                    background: `linear-gradient(145deg, #ffffff, ${p.soft})`,
                    borderColor: `${p.hex}22`,
                    boxShadow: `0 20px 60px -10px ${p.ring}`,
                  }}
                >
                  {/* Icon */}
                  <div
                    className="flex h-16 w-16 items-center justify-center rounded-2xl mb-5"
                    style={{ background: p.tagBg }}
                    aria-hidden="true"
                  >
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" style={{ color: p.hex }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h2 className="text-lg font-black text-navy">{feature.title}</h2>
                  <p className="mt-2 text-sm font-medium text-slate-700 leading-relaxed">{feature.description}</p>

                  <div className="mt-5 space-y-2">
                    {(feature.bullets ?? []).map((b) => (
                      <div key={b} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <div className="h-1.5 w-1.5 rounded-full shrink-0" style={{ background: p.hex }} />
                        {b}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── How it works ── */}
        {content?.howItWorks && (
          <section className="py-16 lg:py-20 bg-white">
            <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
              <div className="text-center mb-12">
                <span
                  className="inline-block rounded-full px-3 py-1 text-[13px] font-black uppercase tracking-widest mb-3"
                  style={{ background: p.tagBg, color: p.tagText }}
                >
                  How it works
                </span>
                <h2 className="text-3xl font-black text-navy sm:text-4xl">
                  Simple steps. Powerful results.
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {content.howItWorks.map((item, i) => (
                  <div
                    key={i}
                    className="relative flex flex-col rounded-2xl border bg-white p-6 shadow-xs"
                    style={{ borderColor: `${p.hex}20` }}
                  >
                    {/* Step number */}
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-xl text-sm font-black text-white mb-4 shrink-0"
                      style={{ background: p.hex }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-[17px] font-black text-navy leading-snug mb-2">{item.step}</h3>
                    <p className="text-[15px] font-medium text-slate-700 leading-relaxed">{item.detail}</p>

                    {/* Connector line (desktop) */}
                    {i < content.howItWorks.length - 1 && (
                      <div
                        className="hidden lg:block absolute top-10 -right-3 w-6 h-0.5"
                        style={{ background: `linear-gradient(90deg, ${p.hex}60, ${p.hex}00)` }}
                        aria-hidden="true"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Explore more features ── */}
        <section className="py-16 bg-[#f8fbff]">
          <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
            <h2 className="text-2xl font-black text-navy mb-8">Explore more features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {otherFeatures.map((f) => {
                const fp      = palette[f.id] ?? { hex: "#64748b", soft: "#f8fafc", tagBg: "#f1f5f9", tagText: "#475569" };
                const fslug   = slugReverse[f.id];
                return (
                  <Link
                    key={f.id}
                    href={`/features/${fslug}`}
                    className="group flex flex-col rounded-2xl border bg-white p-5 shadow-xs transition-all hover:shadow-md hover:-translate-y-1"
                    style={{ borderColor: `${fp.hex}18` }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-xl shrink-0"
                        style={{ background: fp.tagBg }}
                      >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" style={{ color: fp.hex }}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </div>
                      {f.tag && (
                        <span className="text-[11px] font-black uppercase tracking-wider rounded-full px-2 py-0.5" style={{ background: fp.tagBg, color: fp.tagText }}>
                          {f.tag}
                        </span>
                      )}
                    </div>
                    <h3 className="text-[16px] font-black text-navy leading-snug mb-1 group-hover:underline" style={{ textDecorationColor: fp.hex }}>
                      {f.title}
                    </h3>
                    <p className="text-[14px] text-slate-700 font-medium leading-snug line-clamp-2">{f.description}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Final CTA banner ── */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
            <div
              className="rounded-3xl p-10 lg:p-14 text-center shadow-md"
              style={{ background: `linear-gradient(135deg, ${p.hex} 0%, ${p.hex}cc 100%)` }}
            >
              <h2 className="text-3xl font-black text-white sm:text-4xl">
                Ready to get started?
              </h2>
              <p className="mt-4 text-base font-medium text-white/80 max-w-lg mx-auto">
                Join thousands of students and educators already using AcademIQ to learn smarter and achieve more.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/signup"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-black shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  style={{ color: p.hex }}
                >
                  Create free account
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/login"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/10"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
