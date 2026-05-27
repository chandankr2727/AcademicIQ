"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  GraduationCap,
  Users,
  Building2,
  UserCircle,
  Search,
  Menu,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "@/constants/navigation";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap className="h-5 w-5 text-primary" />,
  Users: <Users className="h-5 w-5 text-primary" />,
  Building2: <Building2 className="h-5 w-5 text-primary" />,
  UserCircle: <UserCircle className="h-5 w-5 text-primary" />,
};

export function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-bold tracking-tight text-navy">
                  AcademIQ
                </span>
                <span className="text-[10px] font-semibold tracking-widest text-muted-foreground">
                  LEARNING NETWORK
                </span>
              </div>
            </Link>

            <nav className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() =>
                    item.children && setOpenDropdown(item.label)
                  }
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-navy transition-colors hover:bg-muted"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      className={cn(
                        "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-navy transition-colors",
                        openDropdown === item.label ? "bg-muted" : "hover:bg-muted"
                      )}
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === item.label ? null : item.label
                        )
                      }
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          openDropdown === item.label && "rotate-180"
                        )}
                      />
                    </button>
                  )}

                  <AnimatePresence>
                    {item.children && openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 top-full mt-1 w-[460px] rounded-xl border border-border bg-white p-5 shadow-lg"
                      >
                        <div className="grid grid-cols-2 gap-2">
                          {item.children.map((child) => (
                            <div
                              key={child.title}
                              className="flex gap-3 rounded-lg p-3 transition-colors hover:bg-muted"
                            >
                              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10">
                                {child.icon && iconMap[child.icon]}
                              </div>
                              <div className="min-w-0">
                                <p className="text-sm font-semibold text-navy">
                                  {child.title}
                                </p>
                                <p className="mt-0.5 text-xs leading-snug text-muted-foreground">
                                  {child.description}
                                </p>
                                <div className="mt-2 flex flex-col gap-1">
                                  {child.links.map((link) => (
                                    <Link
                                      key={link.label}
                                      href={link.href}
                                      className="text-xs font-medium text-primary hover:underline"
                                    >
                                      {link.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <div className="relative w-64">
              <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search threads, communities and resources..."
                className={cn(
                  "h-9 w-full rounded-lg border border-border bg-white pl-9 pr-3 text-sm text-navy placeholder:text-xs placeholder:text-muted-foreground",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                )}
              />
            </div>
            <Link
              href="/login"
              className="text-sm font-medium text-navy transition-colors hover:text-primary"
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-primary-dark"
            >
              Sign Up
            </Link>
          </div>

          <button
            className="rounded-md p-2 text-navy hover:bg-muted md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border md:hidden"
          >
            <div className="mx-auto max-w-7xl space-y-3 px-4 py-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="h-9 w-full rounded-lg border border-border bg-white pl-9 pr-3 text-sm text-navy placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-sm font-medium text-navy hover:bg-muted"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <div className="space-y-2">
                      <p className="px-3 text-sm font-semibold text-navy">
                        {item.label}
                      </p>
                      {item.children?.map((child) => (
                        <div key={child.title} className="px-3 py-1">
                          <p className="text-sm font-medium text-navy">
                            {child.title}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {child.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex items-center gap-3 border-t border-border pt-3">
                <Link
                  href="/login"
                  className="flex-1 rounded-lg border border-border py-2 text-center text-sm font-medium text-navy hover:bg-muted"
                  onClick={() => setMobileOpen(false)}
                >
                  Log In
                </Link>
                <Link
                  href="/signup"
                  className="flex-1 rounded-lg bg-primary py-2 text-center text-sm font-medium text-white hover:bg-primary-dark"
                  onClick={() => setMobileOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
