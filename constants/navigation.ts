import { NavItem } from "@/types";

export const navItems: NavItem[] = [
  {
    label: "Learn",
    children: [
      {
        title: "For Students",
        description: "Study, collaborate, and get support",
        links: [
          { label: "Study Tools", href: "/learn/study-tools" },
          { label: "Support & Tutoring", href: "/learn/support" },
        ],
        icon: "Users",
      },
      {
        title: "For Instructors",
        description: "Teach, engage, and empower",
        links: [
          { label: "Instructor Tools", href: "/teach/tools" },
          { label: "Resources & Training", href: "/teach/resources" },
        ],
        icon: "GraduationCap",
      },
    ],
  },
  {
    label: "Teach",
    children: [
      {
        title: "Instructor Hub",
        description: "Manage courses, assignments, and students",
        links: [
          { label: "Instructor Dashboard", href: "/teach/dashboard" },
          { label: "Course Builder", href: "/teach/courses" },
        ],
        icon: "GraduationCap",
      },
      {
        title: "Teaching Resources",
        description: "Training, guides, and community support",
        links: [
          { label: "Resources & Training", href: "/teach/resources" },
          { label: "Instructor Community", href: "/teach/community" },
        ],
        icon: "Users",
      },
    ],
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Solutions",
    children: [
      {
        title: "For Institutions",
        description: "Enterprise learning solutions",
        links: [
          { label: "Platform Overview", href: "/solutions/institutions" },
          { label: "Integrations", href: "/solutions/integrations" },
        ],
        icon: "Building2",
      },
      {
        title: "For Tutors",
        description: "Grow your tutoring practice",
        links: [
          { label: "Tutor Dashboard", href: "/solutions/tutors" },
          { label: "Resources", href: "/solutions/tutor-resources" },
        ],
        icon: "UserCircle",
      },
    ],
  },
  {
    label: "Opportunities",
    href: "/opportunities",
  },
  {
    label: "About",
    href: "/about",
  },
];
