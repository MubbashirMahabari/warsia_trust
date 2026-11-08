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
  title: "Privacy Policy",
  description:
    "Privacy Policy for Warsia Educational & Social Development Trust. Understand how we handle visitor inquiries and information with transparency and respect.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
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
          <Breadcrumbs items={[{ label: "Privacy Policy" }]} />

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
            Privacy Policy
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
              1. Our Commitment to Your Privacy
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.8, mb: 3 }}>
              <strong>{siteConfig.name}</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;the Trust&rdquo;),
              registered under NGO Darphan ID {siteConfig.darphanId}, operates this public
              website to provide authentic information about our humanitarian activities,
              religious community support, blood donation network, and educational programs.
              We are committed to protecting the privacy of visitors, donors, and volunteers.
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h5" sx={{ fontWeight: 800, color: "primary.main", mb: 2 }}>
              2. Information We Collect
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.8, mb: 2 }}>
              Our website is structured as a static, privacy-conscious informational portal.
              We do not utilize tracking cookies, invasive third-party telemetry, or hidden
              surveillance software.
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.8, mb: 3 }}>
              When you voluntarily reach out to us via our contact forms or direct WhatsApp links,
              you may provide basic contact details such as your name, telephone number, city,
              and inquiry details. This information is utilized solely to converse with you
              regarding your specific question or voluntary contribution.
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h5" sx={{ fontWeight: 800, color: "primary.main", mb: 2 }}>
              3. Non-Disclosure &amp; Information Security
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.8, mb: 3 }}>
              We will never sell, rent, lease, trade, or distribute your personal details to
              any third-party marketing companies, advertisers, or commercial entities. Any
              voluntary blood donor information is maintained under strict confidentiality
              and used solely for life-saving emergency medical coordination in Vijayapura.
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h5" sx={{ fontWeight: 800, color: "primary.main", mb: 2 }}>
              4. External Links &amp; Third-Party Services
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.8, mb: 3 }}>
              Our website provides links to external services such as WhatsApp (for messaging)
              and Google Maps (for directions to our Vijayapura address). These services operate
              under their own respective privacy policies.
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h5" sx={{ fontWeight: 800, color: "primary.main", mb: 2 }}>
              5. Official Inquiries Regarding Privacy
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.8 }}>
              For any questions regarding our trust’s practices or this Privacy Policy, please
              contact the trust headquarters at:
              <br /><br />
              <strong>{siteConfig.name}</strong><br />
              {siteConfig.contact.address.formatted}<br />
              Telephone: +91 {siteConfig.contact.primaryPhone}
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
