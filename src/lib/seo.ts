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
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} | Vijayapura`;

  const canonicalUrl = `${siteUrl}${path}`;

  const defaultKeywords = [
    "Warsia Educational and Social Development Trust",
    "Warsia Trust Vijayapura",
    "NGO in Vijayapura",
    "Social welfare trust in Bijapur",
    "Charitable trust in Vijayapura",
    "Blood donation Vijayapura",
    "Emergency blood donors Bijapur",
    "Masjid Imam monthly support",
    "Temple Pandit financial assistance",
    "Religious harmony Vijayapura",
    "Educational development Vijayapura",
    "Social development Karnataka",
    "Mohammed Shafi H Mahabari",
    "Darphan ID KA/2026/0996453",
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
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - ${siteConfig.slogan}`,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
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
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteUrl,
    logo: `${siteUrl}/logo/warsia-logo.png`,
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
    telephone: siteConfig.contact.phoneNumbers.map((p) => `+91-${p}`),
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Vijayapura, Karnataka, India",
    },
    knowsAbout: [
      "Religious Harmony & Interfaith Assistance",
      "Masjid Imam Monthly Support",
      "Temple Pandit Monthly Financial Support",
      "Voluntary Blood Donation & Emergency Network",
      "Educational Development",
      "Community Social Welfare",
    ],
  };
}

