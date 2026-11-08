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
    "Terms and conditions for using the official website of Warsia Educational & Social Development Trust, Vijayapura, Karnataka.",
  path: "/terms-and-conditions",
});

export default function TermsAndConditionsPage() {
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
          <Breadcrumbs items={[{ label: "Terms and Conditions" }]} />

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

      <Container maxWidth="md" sx={{ mt: { xs: 7, md: 10 } }}>
        <Card sx={{ p: { xs: 3.5, sm: 5 }, borderRadius: 4.5, border: "1px solid #E2E8F0", boxShadow: "0 10px 30px rgba(0, 0, 0, 0.04)" }}>
          <CardContent sx={{ p: 0 }}>
            <Typography variant="h5" sx={{ fontWeight: 800, color: "primary.main", mb: 2 }}>
              1. Acceptance of Terms
            </Typography>
            <Typography variant="body1" sx={{ color: "text.primary", lineHeight: 1.8, mb: 3 }}>
              By accessing and utilizing this website, you agree to comply with and be bound
              by these Terms and Conditions. This website is owned and operated by Warsia
              Educational &amp; Social Development Trust, registered in Vijayapura, Karnataka,
              under NGO Darphan registration KA/2026/0996453.
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h5" sx={{ fontWeight: 800, color: "primary.main", mb: 2 }}>
              2. Nature of the Organization
            </Typography>
            <Typography variant="body1" sx={{ color: "text.primary", lineHeight: 1.8, mb: 3 }}>
              Warsia Educational &amp; Social Development Trust is a recognized non-profit
              humanitarian trust dedicated to religious harmony (providing monthly assistance
              to Masjid Imams and Temple Pandits), emergency blood donation coordination,
              educational development, and community welfare in Vijayapura and surrounding
              regions.
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h5" sx={{ fontWeight: 800, color: "primary.main", mb: 2 }}>
              3. Blood Donation Facilitation Disclaimer
            </Typography>
            <Typography variant="body1" sx={{ color: "text.primary", lineHeight: 1.8, mb: 3 }}>
              Warsia Trust acts strictly as a voluntary community facilitator connecting
              willing blood donors with patient families in need. The Trust does not operate a
              commercial blood bank, store blood units, or perform clinical blood testing. All
              donations occur through certified government and licensed hospital blood banks
              subject to medical eligibility and screening.
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h5" sx={{ fontWeight: 800, color: "primary.main", mb: 2 }}>
              4. Official Logo &amp; Intellectual Property
            </Typography>
            <Typography variant="body1" sx={{ color: "text.primary", lineHeight: 1.8, mb: 3 }}>
              The official emblem, trust name, and slogans are the exclusive property of
              Warsia Educational &amp; Social Development Trust. Unauthorized reproduction,
              impersonation, or commercial misuse is strictly prohibited.
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h5" sx={{ fontWeight: 800, color: "primary.main", mb: 2 }}>
              5. Governing Law
            </Typography>
            <Typography variant="body1" sx={{ color: "text.primary", lineHeight: 1.8 }}>
              These Terms and Conditions shall be governed by and construed in accordance
              with the laws of the Republic of India. Any legal proceedings shall fall
              exclusively within the jurisdiction of the competent courts in Vijayapura,
              Karnataka, India.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
