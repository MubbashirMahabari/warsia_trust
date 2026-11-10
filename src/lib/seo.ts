import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://warsiadevelopmenttrust.org";

export interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  ogImage?: string;
}

export function constructMetadata({
  title,
  description = siteConfig.description,
  path = "",
  keywords = [],
  ogImage = "/logo/warsia-logo-with-slogan.png",
}: SEOProps = {}): Metadata {
  const fullTitle = title
    ? title.includes(siteConfig.shortName) || title.includes(siteConfig.name)
      ? title
      : `${title} | ${siteConfig.shortName}`
    : `${siteConfig.name} – ${siteConfig.slogan} | Vijayapura`;

  const canonicalUrl =
    path && path !== "/"
      ? `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`
      : siteUrl;

  const fullOgImage = ogImage.startsWith("http")
    ? ogImage
    : `${siteUrl}${ogImage.startsWith("/") ? ogImage : `/${ogImage}`}`;

  const defaultKeywords = [
    "Warsia Educational and Social Development Trust",
    "Warsia Trust Vijayapura",
    "NGO in Vijayapura",
    "Charitable trust in Vijayapura",
    "Social welfare organization Bijapur Karnataka",
    "Masjid Imam monthly financial assistance",
    "Temple Pandit monthly financial support",
    "Religious harmony Vijayapura",
    "Interfaith equality Karnataka",
    "Voluntary blood donation Vijayapura",
    "Emergency blood donor network Bijapur",
    "Free student educational assistance",
    "Community food ration relief Vijayapura",
    "Mohammed Shafi H Mahabari",
    "Government registered NGO Darphan KA/2026/0996453",
  ];

  return {
    title: fullTitle,
    description,
    keywords: [...defaultKeywords, ...keywords],
    authors: [{ name: siteConfig.president }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: canonicalUrl,
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      ],
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: fullOgImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - ${siteConfig.slogan}`,
          type: "image/png",
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [fullOgImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    category: "Humanitarian Non-Profit",
    classification: "Educational & Social Development Trust",
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "NGO",
    "@id": `${siteUrl}/#organization`,
    name: siteConfig.name,
    alternateName: [siteConfig.shortName, "Warsia Trust"],
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/logo/warsia-logo.png`,
      width: 512,
      height: 512,
    },
    image: `${siteUrl}/logo/warsia-logo-with-slogan.png`,
    slogan: siteConfig.slogan,
    description: siteConfig.description,
    founder: {
      "@type": "Person",
      name: siteConfig.president,
      jobTitle: "President",
    },
    identifier: {
      "@type": "PropertyValue",
      name: "Darphan ID",
      value: siteConfig.darphanId,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.contact.address.line1}, ${siteConfig.contact.address.area}`,
      addressLocality: "Vijayapura",
      addressRegion: "Karnataka",
      postalCode: siteConfig.contact.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "16.8302",
      longitude: "75.7100",
    },
    telephone: siteConfig.contact.phoneNumbers.map((p) => `+91-${p}`),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+91-${siteConfig.contact.primaryPhone}`,
      contactType: "Humanitarian Support & Emergency Blood Coordination",
      areaServed: "IN",
      availableLanguage: ["English", "Kannada", "Urdu", "Hindi"],
    },
    areaServed: {
      "@type": "City",
      name: "Vijayapura",
      sameAs: "https://en.wikipedia.org/wiki/Bijapur",
    },
    knowsAbout: [
      "Religious Harmony & Equal Honorarium",
      "Masjid Imam Monthly Financial Support",
      "Temple Pandit Monthly Financial Support",
      "Voluntary Blood Donation & Emergency Coordination",
      "Educational Guidance & Child Learning",
      "Grassroots Community Welfare & Food Ration Aid",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Humanitarian Initiatives",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Masjid Imam Monthly Support",
            description: "Dignified monthly financial assistance to Masjid Imams in Vijayapura.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Temple Pandit Monthly Support",
            description: "Dignified monthly financial assistance to Temple Pandits in Vijayapura.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "24/7 Voluntary Blood Donor Network",
            description: "Emergency blood donor mobilization for hospital patients.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Educational Development",
            description: "Learning assistance and academic encouragement for underprivileged children.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Community Social Welfare",
            description: "Food kit distribution and humanitarian relief for vulnerable families.",
          },
        },
      ],
    },
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: siteConfig.name,
    alternateName: [siteConfig.shortName, "Warsia Trust"],
    description: siteConfig.description,
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
    inLanguage: "en-IN",
  };
}

export function generateBreadcrumbSchema(items: { name: string; path?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.name,
        ...(item.path
          ? { item: `${siteUrl}${item.path.startsWith("/") ? item.path : `/${item.path}`}` }
          : {}),
      })),
    ],
  };
}

export function generateInitiativeSchema(initiative: {
  title: string;
  description: string;
  path: string;
  category: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: initiative.title,
    description: initiative.description,
    provider: {
      "@id": `${siteUrl}/#organization`,
    },
    areaServed: {
      "@type": "City",
      name: "Vijayapura",
      sameAs: "https://en.wikipedia.org/wiki/Bijapur",
    },
    serviceType: initiative.category,
    url: `${siteUrl}${initiative.path.startsWith("/") ? initiative.path : `/${initiative.path}`}`,
    ...(initiative.image
      ? { image: `${siteUrl}${initiative.image.startsWith("/") ? initiative.image : `/${initiative.image}`}` }
      : {}),
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
