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

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-border pt-6 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} AcademIQ. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <Link
              href="#"
              aria-label="Download on the App Store"
              className="inline-flex h-[42px] items-center gap-2 rounded-lg bg-black px-3.5 text-white transition-transform hover:scale-105"
            >
              <svg viewBox="0 0 384 512" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
              </svg>
              <div className="flex flex-col items-start gap-[2px] leading-none">
                <span className="text-[9px] font-medium text-gray-300">Download on the</span>
                <span className="text-[13px] font-semibold tracking-wide">App Store</span>
              </div>
            </Link>
            <Link
              href="#"
              aria-label="Get it on Google Play"
              className="inline-flex h-[42px] items-center gap-2 rounded-lg bg-black px-3.5 text-white transition-transform hover:scale-105"
            >
              <svg viewBox="0 0 512 512" className="h-5 w-5" aria-hidden="true">
                <path fill="#2196f3" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z" />
                <path fill="#4caf50" d="M47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0z" />
                <path fill="#ffc107" d="M425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8z" />
                <path fill="#f44336" d="M104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
              </svg>
              <div className="flex flex-col items-start gap-[2px] leading-none">
                <span className="text-[9px] font-medium uppercase tracking-wide text-gray-300">GET IT ON</span>
                <span className="text-[13px] font-semibold tracking-wide">Google Play</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
