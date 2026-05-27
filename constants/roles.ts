export interface Role {
  id: string;
  label: string;
  description: string;
  href: string;
}

export const roles: Role[] = [
  {
    id: "student",
    label: "Student",
    description: "Learn, collaborate, and get support",
    href: "/learn",
  },
  {
    id: "instructor",
    label: "Instructor",
    description: "Teach, engage, and empower",
    href: "/teach",
  },
  {
    id: "tutor",
    label: "Tutor",
    description: "Grow your tutoring practice",
    href: "/solutions/tutors",
  },
  {
    id: "advisor",
    label: "Advisor",
    description: "Guide academic journeys",
    href: "/solutions/advisors",
  },
  {
    id: "institution",
    label: "Institution Admin",
    description: "Manage your institution",
    href: "/solutions/institutions",
  },
];
