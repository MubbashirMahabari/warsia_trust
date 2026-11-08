export interface Initiative {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string[];
  keyHighlights: string[];
  category: "religious-harmony" | "health" | "education" | "social-welfare";
  iconName: string;
  themeColor: string;
  accentColor: string;
  image: string;
  href: string;
  badge?: string;
  actionText: string;
}

export const initiativesData: Initiative[] = [
  {
    id: "masjid-imam-support",
    slug: "masjid-imam-support",
    title: "Masjid Imam Monthly Support",
    shortDescription:
      "Providing monthly financial assistance to Masjid Imams in recognition of their dedication, spiritual leadership, and service to their communities.",
    fullDescription: [
      "Masjid Imams play a cornerstone role in nurturing moral grounding, peace, and spiritual guidance within society. Yet, many face modest financial situations with minimal fixed assistance.",
      "Warsia Educational & Social Development Trust extends dignified, regular monthly financial assistance to Masjid Imams across Vijayapura and adjoining areas, acknowledging their daily service with honor and gratitude.",
      "We believe that supporting community guardians strengthens our moral fabric and reinforces values of compassion, mutual respect, and social dignity.",
    ],
    keyHighlights: [
      "Direct monthly financial support ensuring dignity and stability",
      "Equal priority alongside Temple Pandit support to celebrate unity",
      "Transparent selection focused on genuine community service",
      "Honoring spiritual leadership that guides people toward goodness and harmony",
    ],
    category: "religious-harmony",
    iconName: "Mosque",
    themeColor: "#002887",
    accentColor: "#006000",
    image: "/images/initiatives/masjid-support.svg",
    href: "/initiatives/masjid-imam-support",
    badge: "Core Humanitarian Focus",
    actionText: "Learn About Imam Support",
  },
  {
    id: "temple-pandit-support",
    slug: "temple-pandit-support",
    title: "Temple Pandit Monthly Support",
    shortDescription:
      "Providing monthly financial assistance to Temple Pandits in recognition of their dedication, spiritual devotion, and service to their communities.",
    fullDescription: [
      "Temple Pandits preserve cultural values, conduct sacred rites, and offer spiritual comfort to devotees every single day, often under very humble circumstances.",
      "With complete equality and deep reverence, Warsia Educational & Social Development Trust extends dignified, regular monthly financial support to Temple Pandits in Vijayapura.",
      "This initiative stands as an authentic testament to our motto — 'Service to Humanity – The Mark of True Faith' — proving that true humanitarianism knows no religious divisions.",
    ],
    keyHighlights: [
      "Direct monthly financial support ensuring respect and livelihood security",
      "Balanced with Masjid Imam support to exemplify secular brotherhood",
      "Unbiased outreach to dedicated temple priests serving local shrines",
      "Fostering enduring interfaith harmony and mutual community trust",
    ],
    category: "religious-harmony",
    iconName: "TempleHindu",
    themeColor: "#002887",
    accentColor: "#F27501",
    image: "/images/initiatives/temple-support.svg",
    href: "/initiatives/temple-pandit-support",
    badge: "Core Humanitarian Focus",
    actionText: "Learn About Pandit Support",
  },
  {
    id: "blood-donation",
    slug: "blood-donation",
    title: "Blood Donation & Emergency Assistance",
    shortDescription:
      "Mobilizing voluntary blood donors, organizing donation drives, and assisting families in urgent need of life-saving blood units.",
    fullDescription: [
      "Medical emergencies can strike at any moment, and timely access to safe blood is often the thin line between life and death. In Vijayapura, many patient families face distress during critical procedures.",
      "Warsia Trust actively cultivates voluntary blood donation awareness, maintains a growing network of compassionate donors, and coordinates emergency blood support for hospital patients.",
      "We encourage citizens from all walks of life to register as voluntary donors. Every unit donated carries the hope of life and brings humanity together.",
    ],
    keyHighlights: [
      "Active voluntary blood donor network for rapid emergency coordination",
      "Community blood donation awareness campaigns in Vijayapura",
      "Special outreach for rare blood groups and critical pediatric/maternal cases",
      "Strict advocacy of voluntary, non-remunerated, safe blood donation",
    ],
    category: "health",
    iconName: "Bloodtype",
    themeColor: "#002887",
    accentColor: "#C62828",
    image: "/images/initiatives/blood-donation.svg",
    href: "/initiatives/blood-donation",
    badge: "Life-Saving Mission",
    actionText: "Join Blood Donor Network",
  },
  {
    id: "education",
    slug: "education",
    title: "Educational Development",
    shortDescription:
      "Empowering students and youth through educational awareness, learning assistance, and guidance for a brighter, self-reliant future.",
    fullDescription: [
      "Education is the greatest catalyst for enduring social change and breaking cycles of generational hardship. A thriving community begins with enlightened children and educated youth.",
      "Warsia Educational & Social Development Trust emphasizes foundational learning, academic encouragement, and moral education for underprivileged children in Vijayapura.",
      "We facilitate study support, motivate school retention, and guide families to recognize education as an essential right and pathway to dignity.",
    ],
    keyHighlights: [
      "Promoting school attendance and reducing dropouts in underprivileged neighborhoods",
      "Academic guidance and mentorship for promising young students",
      "Community awareness workshops on the value of girls' education",
      "Encouraging skills, moral values, and civic responsibility among youth",
    ],
    category: "education",
    iconName: "School",
    themeColor: "#002887",
    accentColor: "#006000",
    image: "/images/initiatives/education.svg",
    href: "/initiatives/education",
    badge: "Empowering Youth",
    actionText: "Explore Educational Work",
  },
  {
    id: "social-development",
    slug: "social-development",
    title: "Social Welfare & Humanitarian Aid",
    shortDescription:
      "Extending compassionate relief, emergency food kits, winter essentials, and community assistance to families in need.",
    fullDescription: [
      "True social welfare is felt when the vulnerable know they are not forgotten. Warsia Trust stands on the frontlines of humanitarian care in Vijayapura.",
      "From distribution of food and grocery kits during auspicious festivals to emergency welfare assistance for struggling elders and widows, our initiatives touch real lives.",
      "We collaborate with caring citizens to turn compassion into structured, respectful, and dignified action on the ground.",
    ],
    keyHighlights: [
      "Seasonal and festive food ration distribution to needy families",
      "Humanitarian assistance for vulnerable elders, widows, and distressed persons",
      "Grassroots community welfare initiatives addressing local challenges",
      "Transparent, respectful, and dignified distribution practices",
    ],
    category: "social-welfare",
    iconName: "VolunteerActivism",
    themeColor: "#002887",
    accentColor: "#F27501",
    image: "/images/initiatives/social-welfare.svg",
    href: "/initiatives/social-development",
    badge: "Community Care",
    actionText: "Discover Social Initiatives",
  },
];
