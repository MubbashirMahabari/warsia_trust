import { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/initiatives",
    "/initiatives/masjid-imam-support",
    "/initiatives/temple-pandit-support",
    "/initiatives/blood-donation",
    "/initiatives/education",
    "/initiatives/social-development",
    "/gallery",
    "/volunteer",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
  ];

  const currentDate = new Date().toISOString();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/initiatives") ? 0.9 : 0.8,
  }));
}
