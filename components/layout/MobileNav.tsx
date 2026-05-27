"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, GraduationCap, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "@/constants/navigation";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <>
      <button
        className="rounded-md p-2 text-navy hover:bg-muted md:hidden"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-50 w-80 bg-white shadow-xl md:hidden"
          >
            <div className="flex h-16 items-center justify-between border-b border-border px-4">
              <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                  <GraduationCap className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-bold text-navy">AcademIQ</span>
              </Link>
              <button
                className="rounded-md p-2 text-navy hover:bg-muted"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-1 p-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="block rounded-md px-3 py-2.5 text-sm font-medium text-navy hover:bg-muted"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <div>
                      <button
                        className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium text-navy hover:bg-muted"
                        onClick={() =>
                          setExpanded(expanded === item.label ? null : item.label)
                        }
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform",
                            expanded === item.label && "rotate-180"
                          )}
                        />
                      </button>
                      <AnimatePresence>
                        {expanded === item.label && item.children && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="space-y-2 px-3 py-2">
                              {item.children.map((child) => (
                                <div key={child.title} className="rounded-md bg-muted/50 p-2">
                                  <p className="text-sm font-medium text-navy">
                                    {child.title}
                                  </p>
                                  <p className="text-xs text-muted-foreground">
                                    {child.description}
                                  </p>
                                  <div className="mt-1.5 flex flex-wrap gap-2">
                                    {child.links.map((link) => (
                                      <Link
                                        key={link.label}
                                        href={link.href}
                                        className="text-xs font-medium text-primary hover:underline"
                                        onClick={() => setOpen(false)}
                                      >
                                        {link.label}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              ))}

              <div className="mt-4 flex items-center gap-3 border-t border-border pt-4">
                <Link
                  href="/login"
                  className="flex-1 rounded-lg border border-border py-2.5 text-center text-sm font-medium text-navy hover:bg-muted"
                  onClick={() => setOpen(false)}
                >
                  Log In
                </Link>
                <Link
                  href="/signup"
                  className="flex-1 rounded-lg bg-primary py-2.5 text-center text-sm font-medium text-white hover:bg-primary-dark"
                  onClick={() => setOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/20 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
