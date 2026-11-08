import { Metadata } from "next";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import { siteConfig } from "@/config/site";
import { constructMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/common/Breadcrumbs";

export const metadata: Metadata = constructMetadata({
  title: "Terms and Conditions",
  description:
    "Terms and Conditions governing the use of the official website of Warsia Educational & Social Development Trust, Vijayapura, Karnataka.",
  path: "/terms-and-conditions",
});

export default function TermsAndConditionsPage() {
  return (
    <Box sx={{ pb: { xs: 8, md: 12 }, bgcolor: "#FFFFFF" }}>
      {/* Banner */}
      <Box
        sx={{
          bgcolor: "primary.dark",
          color: "#FFFFFF",
          pt: { xs: 5, md: 7 },
          pb: { xs: 6, md: 8 },
          position: "relative",
          backgroundImage: "linear-gradient(135deg, #001B5C 0%, #002887 100%)",
        }}
      >
        <Container maxWidth="lg">
          <Breadcrumbs items={[{ label: "Terms and Conditions" }]} />

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2rem", sm: "2.6rem", md: "3rem" },
              fontWeight: 900,
              color: "#FFFFFF",
              letterSpacing: "-0.02em",
              mt: 2,
              mb: 1.5,
            }}
          >
            Terms and Conditions
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: "rgba(255, 255, 255, 0.85)", maxWidth: 720 }}
          >
            Last Updated: November 2026 | Warsia Educational &amp; Social Development Trust
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ mt: { xs: 6, md: 8 } }}>
        <Card sx={{ p: { xs: 3.5, sm: 5 }, borderRadius: 4, border: "1px solid #E2E8F0" }}>
          <CardContent sx={{ p: 0 }}>
            <Typography variant="h5" sx={{ fontWeight: 800, color: "primary.main", mb: 2 }}>
              1. Acceptance of Terms
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.8, mb: 3 }}>
              By accessing and using this website, you acknowledge that you have read,
              understood, and agree to be bound by these Terms and Conditions and our Privacy Policy.
              This site is published by <strong>{siteConfig.name}</strong>, Vijayapura, Karnataka.
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h5" sx={{ fontWeight: 800, color: "primary.main", mb: 2 }}>
              2. Authentic Humanitarian Purpose
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.8, mb: 2 }}>
              The purpose of this website is strictly humanitarian, charitable, and informative.
              It introduces the trust’s monthly financial assistance for Masjid Imams and Temple Pandits,
              voluntary blood donation drives, educational awareness, and social relief activities.
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.8, mb: 3 }}>
              The trust does not claim to operate a commercial hospital, clinical blood laboratory,
              or licensed banking institution. All activities are conducted in accordance with
              applicable laws and standards governing non-profit social development trusts in India.
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h5" sx={{ fontWeight: 800, color: "primary.main", mb: 2 }}>
              3. Official Brand Assets &amp; Intellectual Property
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.8, mb: 3 }}>
              The official trust emblem, slogan (&ldquo;{siteConfig.slogan}&rdquo;), Government
              Darphan accreditation ID ({siteConfig.darphanId}), and official documentation are
              the exclusive property of Warsia Educational &amp; Social Development Trust. Unauthorized
              reproduction, imitation, or misrepresentation is prohibited.
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h5" sx={{ fontWeight: 800, color: "primary.main", mb: 2 }}>
              4. Religious Harmony &amp; Respect
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.8, mb: 3 }}>
              Warsia Trust is dedicated to promoting harmony, peace, and mutual respect among all
              communities. Users of this portal are expected to maintain respect, goodwill, and
              decency in all communications.
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h5" sx={{ fontWeight: 800, color: "primary.main", mb: 2 }}>
              5. Contact &amp; Governance
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.8 }}>
              For official correspondence, please write to:
              <br /><br />
              <strong>President: {siteConfig.president}</strong><br />
              {siteConfig.name}<br />
              {siteConfig.contact.address.formatted}<br />
              Darphan ID: {siteConfig.darphanId}
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
