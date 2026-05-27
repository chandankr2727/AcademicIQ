export interface NavItem {
  label: string;
  href?: string;
  children?: NavDropdownItem[];
}

export interface NavDropdownItem {
  title: string;
  description: string;
  links: { label: string; href: string }[];
  icon?: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  href?: string;
  iconBg?: string;
  iconColor?: string;
}

export interface FloatingCard {
  id: string;
  title: string;
  description: string;
  meta?: string;
  icon: string;
  avatarCount?: number;
}
