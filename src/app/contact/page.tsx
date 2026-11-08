import { Metadata } from "next";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { constructMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import AnimatedSection from "@/components/common/AnimatedSection";
import ContactCard from "@/components/common/ContactCard";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = constructMetadata({
  title: "Contact Us - Office Address & Direct Numbers",
  description:
    "Get in touch with Warsia Educational & Social Development Trust in Vijayapura, Karnataka. Official phone numbers: 9449779786, 9620304427, 9606406210. Darphan ID: KA/2026/0996453.",
  path: "/contact",
});

export default function ContactPage() {
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
          <Breadcrumbs items={[{ label: "Contact Us" }]} />

          <Typography
            variant="overline"
            sx={{
              color: "warning.main",
              fontWeight: 800,
              letterSpacing: "0.08em",
              fontSize: "0.85rem",
              display: "block",
              mt: 2,
            }}
          >
            OFFICIAL CORRESPONDENCE &amp; HELPLINE
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.4rem" },
              fontWeight: 900,
              color: "#FFFFFF",
              letterSpacing: "-0.02em",
              mt: 1,
              mb: 2,
            }}
          >
            Contact Warsia Trust
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: "rgba(255, 255, 255, 0.88)",
              maxWidth: 780,
              fontSize: { xs: "1rem", sm: "1.15rem" },
              fontWeight: 400,
              lineHeight: 1.6,
            }}
          >
            We are always here to assist our community in Vijayapura. Reach out
            directly via phone, WhatsApp, or submit an inquiry below.
          </Typography>
        </Container>
      </Box>

      {/* Main Grid: Form + Verified Contact Card */}
      <Container maxWidth="lg" sx={{ mt: { xs: 6, md: 8 } }}>
        <Grid container spacing={{ xs: 5, md: 7 }}>
          {/* Interactive Form with Validation */}
          <Grid item xs={12} md={7}>
            <AnimatedSection>
              <ContactForm />
            </AnimatedSection>
          </Grid>

          {/* Official Contact Info Card */}
          <Grid item xs={12} md={5}>
            <AnimatedSection delay={0.2}>
              <ContactCard />
            </AnimatedSection>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
