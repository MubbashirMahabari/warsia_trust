export interface NavItem {
  title: string;
  href: string;
  description?: string;
  children?: NavItem[];
}

export const mainNavigation: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Initiatives",
    href: "/initiatives",
    children: [
      {
        title: "Masjid Imam Support",
        href: "/initiatives/masjid-imam-support",
        description: "Monthly financial assistance for dedicated Masjid Imams",
      },
      {
        title: "Temple Pandit Support",
        href: "/initiatives/temple-pandit-support",
        description: "Monthly financial assistance for dedicated Temple Pandits",
      },
      {
        title: "Blood Donation Assistance",
        href: "/initiatives/blood-donation",
        description: "Voluntary donor network and life-saving emergency support",
      },
      {
        title: "Educational Development",
        href: "/initiatives/education",
        description: "Fostering learning, student guidance, and educational awareness",
      },
      {
        title: "Social Welfare",
        href: "/initiatives/social-development",
        description: "Humanitarian relief and community welfare programs",
      },
    ],
  },
  {
    title: "Gallery",
    href: "/gallery",
  },
  {
    title: "Volunteer",
    href: "/volunteer",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export const footerQuickLinks: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About Our Trust", href: "/about" },
  { title: "Our Initiatives", href: "/initiatives" },
  { title: "Community Gallery", href: "/gallery" },
  { title: "Join as Volunteer", href: "/volunteer" },
  { title: "Contact Us", href: "/contact" },
];

export const legalLinks: NavItem[] = [
  { title: "Privacy Policy", href: "/privacy-policy" },
  { title: "Terms and Conditions", href: "/terms-and-conditions" },
];
