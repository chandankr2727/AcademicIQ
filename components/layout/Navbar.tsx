"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  ChevronDown,
  GraduationCap,
  Users,
  Building2,
  UserCircle,
  Menu,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "@/constants/navigation";
import { cn } from "@/lib/utils";

const iconMap: Record<string, ReactNode> = {
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
      <div className="mx-auto max-w-[1536px] px-5 lg:px-10">
        <div className="flex h-16 items-center justify-between gap-5">
          <div className="flex min-w-0 items-center gap-10">
            <Link
              href="/"
              className="flex items-center gap-2 rounded-md"
              aria-label="AcademIQ home"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary shadow-sm">
                <GraduationCap className="h-5 w-5 text-white" aria-hidden="true" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-bold tracking-tight text-navy">
                  AcademIQ
                </span>
                <span className="text-[11px] font-semibold tracking-widest text-muted-foreground">
                  LEARNING NETWORK
                </span>
              </div>
            </Link>

            <nav className="hidden items-center gap-7 xl:flex" aria-label="Main navigation">
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
                      className="flex items-center gap-1 rounded-md py-2 text-[15px] font-semibold text-navy transition-colors hover:text-primary focus-visible:text-primary"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      className={cn(
                        "flex items-center gap-1 rounded-md py-2 text-[15px] font-semibold text-navy transition-colors",
                        openDropdown === item.label ? "text-primary" : "hover:text-primary focus-visible:text-primary"
                      )}
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === item.label ? null : item.label
                        )
                      }
                      aria-expanded={openDropdown === item.label}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          openDropdown === item.label && "rotate-180"
                        )}
                        aria-hidden="true"
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
                        className="absolute left-0 top-full mt-1 w-[480px] rounded-xl border border-border bg-white p-5 shadow-lg"
                        role="menu"
                      >
                        <div className="grid grid-cols-2 gap-2">
                          {item.children.map((child) => (
                            <div
                              key={child.title}
                              className="flex gap-3 rounded-lg p-3 transition-colors hover:bg-muted"
                              role="menuitem"
                            >
                              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10">
                                {child.icon && iconMap[child.icon]}
                              </div>
                              <div className="min-w-0">
                                <p className="text-sm font-semibold text-navy">
                                  {child.title}
                                </p>
                                <p className="mt-0.5 text-[14px] leading-snug text-muted-foreground">
                                  {child.description}
                                </p>
                                <div className="mt-2 flex flex-col gap-1">
                                  {child.links.map((link) => (
                                    <Link
                                      key={link.label}
                                      href={link.href}
                                      className="text-[14px] font-medium text-primary hover:underline"
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

          <div className="hidden shrink-0 items-center gap-3 md:flex">
            <Link
              href="/login"
              className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-semibold text-navy transition-colors hover:text-primary hover:border-primary/40"
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-dark"
            >
              Sign Up
            </Link>
          </div>

          <button
            className="rounded-md p-2 text-navy hover:bg-muted md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border md:hidden"
          >
            <nav
              className="mx-auto max-w-7xl space-y-1 px-4 py-4"
              aria-label="Mobile navigation"
            >
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="block rounded-md px-3 py-2.5 text-[15px] font-medium text-navy hover:bg-muted"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <div className="space-y-1">
                      <p className="px-3 py-1.5 text-[15px] font-semibold text-navy">
                        {item.label}
                      </p>
                      {item.children?.map((child) => (
                        <div key={child.title} className="rounded-md px-4 py-2 hover:bg-muted">
                          <p className="text-sm font-semibold text-navy">
                            {child.title}
                          </p>
                          <p className="mt-0.5 text-[14px] text-muted-foreground">
                            {child.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex items-center gap-3 border-t border-border pt-4 mt-2">
                <Link
                  href="/login"
                  className="flex-1 rounded-lg border border-border py-2.5 text-center text-sm font-semibold text-navy hover:bg-muted hover:border-primary/40 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Log In
                </Link>
                <Link
                  href="/signup"
                  className="flex-1 rounded-lg bg-primary py-2.5 text-center text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
