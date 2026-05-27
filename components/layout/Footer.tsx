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
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
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
            <p className="mt-3 text-sm text-muted-foreground">
              The connected learning network for students and instructors.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-navy">{category}</h3>
              <ul className="mt-3 space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-navy"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} AcademIQ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
