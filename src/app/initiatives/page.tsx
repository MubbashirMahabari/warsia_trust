import { Metadata } from "next";
import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { constructMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import SectionHeading from "@/components/common/SectionHeading";
import InitiativeCard from "@/components/common/InitiativeCard";
import AnimatedSection from "@/components/common/AnimatedSection";
import { initiativesData } from "@/config/initiatives";
import { WhatsAppIcon, Diversity3Icon } from "@/components/common/Icons";
import { getWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = constructMetadata({
  title: "Our Initiatives - Religious Harmony, Blood Donation & Welfare",
  description:
    "Explore the key initiatives of Warsia Trust: monthly assistance for Masjid Imams and Temple Pandits, voluntary blood donor network, educational support, and community social development in Vijayapura.",
  path: "/initiatives",
});

export default function InitiativesPage() {
  return (
    <Box sx={{ pb: { xs: 8, md: 12 }, bgcolor: "#FFFFFF" }}>
      {/* Header Banner */}
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
          <Breadcrumbs items={[{ label: "Initiatives" }]} />

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
            HUMANITARIAN PROGRAMS &amp; SERVICES
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
            Our Major Initiatives
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: "rgba(255, 255, 255, 0.85)",
              maxWidth: 760,
              fontSize: { xs: "1rem", sm: "1.15rem" },
              fontWeight: 400,
              lineHeight: 1.6,
            }}
          >
            Empowering communities in Vijayapura through structured financial support
            for religious leaders, voluntary blood donation networks, student learning,
            and essential social welfare.
          </Typography>
        </Container>
      </Box>

      {/* Main Initiatives Grid */}
      <Container maxWidth="lg" sx={{ mt: { xs: 6, md: 8 } }}>
        <AnimatedSection>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: 6,
            }}
          >
            <Box
              sx={{
                p: 2,
                px: 3.5,
                bgcolor: "background.paper",
                borderRadius: 4,
                border: "1px solid #E2E8F0",
                display: "inline-flex",
                alignItems: "center",
                gap: 1.5,
                textAlign: "center",
              }}
            >
              <Diversity3Icon sx={{ color: "warning.main", fontSize: 24 }} />
              <Typography variant="body2" sx={{ fontWeight: 700, color: "primary.main" }}>
                Equal focus &amp; reverence for Masjid Imams and Temple Pandits — Humanity has no boundaries.
              </Typography>
            </Box>
          </Box>
        </AnimatedSection>

        <Grid container spacing={{ xs: 3, md: 4 }}>
          {initiativesData.map((initiative, idx) => (
            <Grid item xs={12} sm={6} md={4} key={initiative.id}>
              <AnimatedSection delay={idx * 0.1}>
                <InitiativeCard initiative={initiative} />
              </AnimatedSection>
            </Grid>
          ))}
        </Grid>

        {/* Contact CTA Strip */}
        <Box
          sx={{
            mt: 9,
            p: { xs: 4, md: 6 },
            borderRadius: 4,
            bgcolor: "background.paper",
            border: "2px solid #E2E8F0",
            textAlign: "center",
          }}
        >
          <AnimatedSection>
            <Typography
              variant="h4"
              sx={{ fontWeight: 800, color: "primary.main", mb: 1.5, fontSize: { xs: "1.4rem", md: "1.8rem" } }}
            >
              Want to Support or Inquire About an Initiative?
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", maxWidth: 640, mx: "auto", mb: 3.5, lineHeight: 1.7 }}
            >
              Whether you wish to refer a religious leader in need, register as an
              emergency blood donor, or collaborate on community education, our trust
              desk is here for you.
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap" }}>
              <Button
                component="a"
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                color="secondary"
                size="large"
                startIcon={<WhatsAppIcon />}
                sx={{ fontWeight: 700, px: 3.5 }}
              >
                Inquire on WhatsApp
              </Button>

              <Link href="/contact" style={{ textDecoration: "none" }}>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  sx={{ fontWeight: 700, px: 3.5 }}
                >
                  Contact Trust Office
                </Button>
              </Link>
            </Box>
          </AnimatedSection>
        </Box>
      </Container>
    </Box>
  );
}
