import { Metadata } from "next";
import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import { constructMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import AnimatedSection from "@/components/common/AnimatedSection";
import ContactCard from "@/components/common/ContactCard";
import {
  VolunteerActivismIcon,
  CheckCircleIcon,
  WhatsAppIcon,
} from "@/components/common/Icons";
import { getInitiativeWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = constructMetadata({
  title: "Social Welfare & Humanitarian Aid | Vijayapura",
  description:
    "Warsia Educational & Social Development Trust extends food kits, emergency relief, and social assistance to vulnerable individuals in Vijayapura, Karnataka.",
  path: "/initiatives/social-development",
});

export default function SocialDevelopmentPage() {
  const whatsAppLink = getInitiativeWhatsAppLink("Social Welfare & Humanitarian Aid");

  const welfareAreas = [
    {
      title: "Festive & Emergency Food Kits",
      desc: "Distribution of essential grain and ration kits to underprivileged households during festivals and seasonal distress in Vijayapura.",
    },
    {
      title: "Widow & Elder Assistance",
      desc: "Compassionate outreach providing daily essentials and moral solidarity to vulnerable elderly citizens without family support.",
    },
    {
      title: "Interfaith Social Fellowship",
      desc: "Fostering community goodwill across Hindu, Muslim, and other communities during cultural events and social gatherings.",
    },
    {
      title: "Disaster & Emergency Relief",
      desc: "Rapid mobilization of volunteer resources and emergency aid to families facing acute unexpected hardships.",
    },
  ];

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
          backgroundImage: "linear-gradient(135deg, #001B5C 0%, #004500 100%)",
        }}
      >
        <Container maxWidth="lg">
          <Breadcrumbs
            items={[
              { label: "Initiatives", href: "/initiatives" },
              { label: "Social Welfare" },
            ]}
          />

          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mt: 2 }}>
            <Chip
              label="Community Care"
              color="secondary"
              sx={{ fontWeight: 700, fontSize: "0.75rem" }}
            />
            <Chip
              label="Vijayapura Grassroots Aid"
              sx={{ bgcolor: "rgba(255,255,255,0.15)", color: "#FFFFFF", fontWeight: 600, fontSize: "0.75rem" }}
            />
          </Box>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.4rem" },
              fontWeight: 900,
              color: "#FFFFFF",
              letterSpacing: "-0.02em",
              mt: 2,
              mb: 2,
            }}
          >
            Small Acts of Kindness. Meaningful Change.
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
            Social welfare begins with recognizing our shared humanity. Warsia Trust
            works on the ground to provide timely food kits, emergency relief, and
            respect to those in need.
          </Typography>
        </Container>
      </Box>

      {/* Main Narrative & Sidebar */}
      <Container maxWidth="lg" sx={{ mt: { xs: 6, md: 8 } }}>
        <Grid container spacing={{ xs: 5, md: 7 }}>
          <Grid item xs={12} md={7} lg={8}>
            <AnimatedSection>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: 3,
                    bgcolor: "rgba(0, 96, 0, 0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <VolunteerActivismIcon sx={{ fontSize: 34, color: "secondary.main" }} />
                </Box>
                <Box>
                  <Typography variant="overline" sx={{ color: "secondary.main", fontWeight: 800, letterSpacing: "0.05em" }}>
                    HUMANITARIAN RELIEF
                  </Typography>
                  <Typography variant="h4" sx={{ fontWeight: 800, color: "primary.main", fontSize: { xs: "1.35rem", md: "1.7rem" } }}>
                    Serving Those Who Need It Most
                  </Typography>
                </Box>
              </Box>

              <Typography
                variant="body1"
                sx={{ color: "text.primary", lineHeight: 1.85, mb: 2.5, fontSize: "1.05rem" }}
              >
                In every neighborhood, there are families who suffer quietly in the face
                of job loss, chronic illness, or sudden bereavement. Warsia Educational
                &amp; Social Development Trust is built to be a reliable, dignified
                hand of assistance.
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "text.secondary", lineHeight: 1.85, mb: 4, fontSize: "1rem" }}
              >
                During festivals such as Ramzan, Diwali, and Ugadi, we organize food
                kit drives and shared celebration initiatives to ensure no family feels
                isolated. Our welfare volunteers operate with deep respect, ensuring
                every beneficiary receives assistance with dignity and warmth.
              </Typography>

              {/* Welfare Areas Grid */}
              <Typography
                variant="h5"
                sx={{ fontWeight: 800, color: "primary.main", mb: 2.5, fontSize: "1.25rem" }}
              >
                Core Welfare Focus Areas
              </Typography>

              <Grid container spacing={2.5} sx={{ mb: 4 }}>
                {welfareAreas.map((item) => (
                  <Grid item xs={12} sm={6} key={item.title}>
                    <Card
                      sx={{
                        p: 2.5,
                        height: "100%",
                        borderRadius: 3,
                        border: "1px solid #E2E8F0",
                        bgcolor: "background.paper",
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1.2, mb: 1 }}>
                        <CheckCircleIcon sx={{ color: "secondary.main", fontSize: 20 }} />
                        <Typography variant="subtitle2" sx={{ fontWeight: 800, color: "primary.main" }}>
                          {item.title}
                        </Typography>
                      </Box>
                      <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.6 }}>
                        {item.desc}
                      </Typography>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              {/* Action Buttons */}
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 4 }}>
                <Button
                  component="a"
                  href={whatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  color="secondary"
                  size="large"
                  startIcon={<WhatsAppIcon />}
                  sx={{ fontWeight: 700, px: 3.5 }}
                >
                  Support Welfare Initiatives
                </Button>

                <Link href="/volunteer" style={{ textDecoration: "none" }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="large"
                    sx={{ fontWeight: 700 }}
                  >
                    Volunteer for Distribution
                  </Button>
                </Link>
              </Box>
            </AnimatedSection>
          </Grid>

          {/* Right Sidebar */}
          <Grid item xs={12} md={5} lg={4}>
            <AnimatedSection delay={0.2}>
              <ContactCard />
            </AnimatedSection>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
