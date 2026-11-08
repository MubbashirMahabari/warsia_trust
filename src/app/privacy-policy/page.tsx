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
    <Box sx={{ pb: { xs: 9, md: 14 }, bgcolor: "#FFFFFF" }}>
      {/* Editorial Banner */}
      <Box
        sx={{
          bgcolor: "#001B5C",
          color: "#FFFFFF",
          pt: { xs: 6, md: 9 },
          pb: { xs: 7, md: 10 },
          position: "relative",
          backgroundImage: `
            radial-gradient(circle at 15% 20%, rgba(0, 96, 0, 0.3) 0%, transparent 45%),
            radial-gradient(circle at 85% 80%, rgba(242, 117, 1, 0.22) 0%, transparent 45%),
            linear-gradient(180deg, #001B5C 0%, #002887 100%)
          `,
        }}
      >
        <Container maxWidth="lg">
          <Breadcrumbs items={[{ label: "Privacy Policy" }]} />

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.2rem" },
              fontWeight: 900,
              color: "#FFFFFF",
              letterSpacing: "-0.025em",
              mt: 2.5,
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

      <Container maxWidth="md" sx={{ mt: { xs: 7, md: 10 } }}>
        <Card sx={{ p: { xs: 3.5, sm: 5 }, borderRadius: 4.5, border: "1px solid #E2E8F0", boxShadow: "0 10px 30px rgba(0, 0, 0, 0.04)" }}>
          <CardContent sx={{ p: 0 }}>
            <Typography variant="h5" sx={{ fontWeight: 800, color: "primary.main", mb: 2 }}>
              1. Introduction
            </Typography>
            <Typography variant="body1" sx={{ color: "text.primary", lineHeight: 1.8, mb: 3 }}>
              Warsia Educational &amp; Social Development Trust (hereafter referred to
              as &ldquo;the Trust,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;) operates this official website to communicate our
              humanitarian activities, foster interfaith communal harmony, and share
              community initiatives in Vijayapura (Bijapur), Karnataka. We value the
              privacy of our visitors, donors, and volunteers.
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h5" sx={{ fontWeight: 800, color: "primary.main", mb: 2 }}>
              2. Information We Collect
            </Typography>
            <Typography variant="body1" sx={{ color: "text.primary", lineHeight: 1.8, mb: 2 }}>
              We only collect personal information that you voluntarily choose to provide
              when contacting us, registering as a voluntary blood donor, or expressing
              interest in volunteer service. This may include:
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 3, "& li": { mb: 1, color: "text.secondary", lineHeight: 1.7 } }}>
              <li>Your name and contact phone number.</li>
              <li>Location (city / locality).</li>
              <li>Areas of volunteer interest or blood group information (voluntary).</li>
              <li>Inquiry details submitted via contact forms or WhatsApp.</li>
            </Box>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h5" sx={{ fontWeight: 800, color: "primary.main", mb: 2 }}>
              3. How We Use Your Information
            </Typography>
            <Typography variant="body1" sx={{ color: "text.primary", lineHeight: 1.8, mb: 2 }}>
              The information you provide is used exclusively for legitimate humanitarian
              and administrative purposes:
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 3, "& li": { mb: 1, color: "text.secondary", lineHeight: 1.7 } }}>
              <li>Responding to your inquiries and requests for community assistance.</li>
              <li>Coordinating voluntary blood donor responses during emergency medical hospital needs.</li>
              <li>Enrolling volunteers in community relief or educational mentorship drives.</li>
              <li>Maintaining administrative compliance under government NGO regulations.</li>
            </Box>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h5" sx={{ fontWeight: 800, color: "primary.main", mb: 2 }}>
              4. Zero Commercialization &amp; Data Security
            </Typography>
            <Typography variant="body1" sx={{ color: "text.primary", lineHeight: 1.8, mb: 3 }}>
              We do not sell, rent, lease, or trade your personal information to third
              parties or commercial marketing entities. We implement responsible technical
              measures to safeguard your contact details from unauthorized access.
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h5" sx={{ fontWeight: 800, color: "primary.main", mb: 2 }}>
              5. Official Contact for Privacy Concerns
            </Typography>
            <Typography variant="body1" sx={{ color: "text.primary", lineHeight: 1.8 }}>
              For any questions regarding this Privacy Policy or your personal information,
              please contact:
            </Typography>
            <Box sx={{ mt: 2, p: 2.5, bgcolor: "background.paper", borderRadius: 3, border: "1px solid #E2E8F0" }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 800, color: "primary.main" }}>
                {siteConfig.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.5 }}>
                {siteConfig.contact.address.formatted}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.primary", fontWeight: 700, mt: 1 }}>
                Helpline: +91 {siteConfig.contact.primaryPhone}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
