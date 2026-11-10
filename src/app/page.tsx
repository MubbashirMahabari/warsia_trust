import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import InitiativesSection from "@/components/home/InitiativesSection";
import CommunitySupport from "@/components/home/CommunitySupport";
import BloodDonationSection from "@/components/home/BloodDonationSection";
import EducationSection from "@/components/home/EducationSection";
import ImpactSection from "@/components/home/ImpactSection";
import GallerySection from "@/components/home/GallerySection";
import VolunteerSection from "@/components/home/VolunteerSection";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = constructMetadata({
  title: "Warsia Educational & Social Development Trust – Official Portal | Vijayapura, Karnataka",
  description:
    "Warsia Educational & Social Development Trust in Vijayapura, Karnataka, works towards humanitarian support, monthly assistance for Masjid Imams and Temple Pandits, blood donation awareness, education, and social development.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <InitiativesSection />
      <CommunitySupport />
      <BloodDonationSection />
      <EducationSection />
      <ImpactSection />
      <GallerySection limit={6} />
      <VolunteerSection />
      <FinalCTA />
    </>
  );
}
