import Link from "next/link";
import { GraduationCap } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Study Tools", href: "/learn/study-tools" },
    { label: "Study Sessions", href: "#" },
    { label: "Tutoring", href: "#" },
    { label: "Assist (AI)", href: "#" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Pricing", href: "/pricing" },
    { label: "Opportunities", href: "/opportunities" },
    { label: "Contact", href: "/about" },
  ],
  Resources: [
    { label: "Library", href: "#" },
    { label: "Community", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Help Center", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Accessibility", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-md"
              aria-label="AcademIQ home"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
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
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              The connected learning network for students and instructors.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-bold tracking-wide text-navy uppercase">
                {category}
              </h3>
              <ul className="mt-4 space-y-3" role="list">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[15px] text-muted-foreground transition-colors hover:text-navy hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} AcademIQ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
