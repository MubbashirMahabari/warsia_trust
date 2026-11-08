export interface TrustContact {
  phoneNumbers: string[];
  primaryPhone: string;
  whatsappNumber: string;
  email: string | null; // Placeholder until officially confirmed
  address: {
    line1: string;
    area: string;
    city: string;
    pincode: string;
    state: string;
    country: string;
    formatted: string;
  };
  googleMapsUrl: string;
}

export interface MetricItem {
  id: string;
  label: string;
  value: string | number;
  suffix?: string;
  isVerified: boolean; // Only display if verified to prevent false statistics
  description: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  legalName: string;
  president: string;
  darphanId: string;
  slogan: string;
  description: string;
  location: string;
  contact: TrustContact;
  socialLinks: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    youtube?: string;
  };
  metrics: MetricItem[];
}

export const siteConfig: SiteConfig = {
  name: "WARSIA EDUCATIONAL & SOCIAL DEVELOPMENT TRUST",
  shortName: "Warsia Trust",
  legalName: "WARSIA EDUCATIONAL & SOCIAL DEVELOPMENT TRUST",
  president: "Mohammed Shafi H Mahabari",
  darphanId: "KA/2026/0996453",
  slogan: "Service to Humanity – The Mark of True Faith",
  description:
    "Warsia Educational & Social Development Trust in Vijayapura, Karnataka, works towards humanitarian support, monthly assistance for Masjid Imams and Temple Pandits, blood donation awareness, education, and social development.",
  location: "Vijayapura (Bijapur), Karnataka, India",
  contact: {
    phoneNumbers: ["9449779786", "9620304427", "9606406210"],
    primaryPhone: "9449779786",
    whatsappNumber: "919449779786",
    email: null, // Left as null / placeholder per instructions: do not fabricate an email address
    address: {
      line1: "Near PDJ High School",
      area: "Darbar Galli",
      city: "Vijayapura (Bijapur)",
      pincode: "586101",
      state: "Karnataka",
      country: "India",
      formatted:
        "Near PDJ High School, Darbar Galli, Vijayapura – 586101, Karnataka, India.",
    },
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Near+PDJ+High+School+Darbar+Galli+Vijayapura+586101+Karnataka+India",
  },
  socialLinks: {
    facebook: "#",
    twitter: "#",
    instagram: "#",
    youtube: "#",
  },
  // Configurable metrics system: statistics remain hidden until verified values are entered
  metrics: [
    {
      id: "religious-leaders",
      label: "Religious Leaders Supported",
      value: "Ongoing",
      isVerified: false, // Set to true once audited figures are available
      description: "Equal monthly financial assistance for Masjid Imams & Temple Pandits",
    },
    {
      id: "blood-donation",
      label: "Blood Donation Drives & Network",
      value: "Active",
      isVerified: false,
      description: "Mobilizing voluntary donors across Vijayapura district",
    },
    {
      id: "education",
      label: "Educational Initiatives",
      value: "Community-driven",
      isVerified: false,
      description: "Supporting students and learning resources",
    },
    {
      id: "welfare",
      label: "Community Welfare Programs",
      value: "Dedicated",
      isVerified: false,
      description: "Essential humanitarian assistance to vulnerable families",
    },
  ],
};

