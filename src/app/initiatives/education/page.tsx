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
  SchoolIcon,
  CheckCircleIcon,
  WhatsAppIcon,
} from "@/components/common/Icons";
import { getInitiativeWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = constructMetadata({
  title: "Educational Development Initiatives | Vijayapura",
  description:
    "Warsia Educational & Social Development Trust encourages learning, student guidance, and community education in Vijayapura, Karnataka.",
  path: "/initiatives/education",
});

export default function EducationPage() {
  const whatsAppLink = getInitiativeWhatsAppLink("Educational Development");

  const pillars = [
    {
      title: "Encouraging School Retention",
      desc: "Working with parents in underprivileged areas to ensure children finish their primary and secondary education without discontinuation.",
    },
    {
      title: "Academic Mentorship",
      desc: "Connecting students with experienced volunteer teachers and mentors who provide study encouragement and guidance.",
    },
    {
      title: "Girls' Education Awareness",
      desc: "Promoting family support for female literacy and higher education to uplift future households across communities.",
    },
    {
      title: "Civic & Moral Values",
      desc: "Conducting youth sessions on social responsibility, mutual communal respect, and humane citizenship.",
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
          backgroundImage: "linear-gradient(135deg, #001B5C 0%, #002887 100%)",
        }}
      >
        <Container maxWidth="lg">
          <Breadcrumbs
            items={[
              { label: "Initiatives", href: "/initiatives" },
              { label: "Educational Development" },
            ]}
          />

          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mt: 2 }}>
            <Chip
              label="Foundational Growth"
              color="primary"
              sx={{ fontWeight: 700, fontSize: "0.75rem", bgcolor: "primary.light" }}
            />
            <Chip
              label="Vijayapura Student Support"
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
            Education Today. A Better Tomorrow.
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
            Education is one of the strongest foundations for building a better
            society. We aim to encourage educational development and create opportunities
            for communities in Vijayapura.
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
                    bgcolor: "rgba(0, 40, 135, 0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <SchoolIcon sx={{ fontSize: 34, color: "primary.main" }} />
                </Box>
                <Box>
                  <Typography variant="overline" sx={{ color: "primary.main", fontWeight: 800, letterSpacing: "0.05em" }}>
                    LEARNING &amp; UPLIFTMENT
                  </Typography>
                  <Typography variant="h4" sx={{ fontWeight: 800, color: "primary.main", fontSize: { xs: "1.35rem", md: "1.7rem" } }}>
                    Unlocking Opportunities Through Knowledge
                  </Typography>
                </Box>
              </Box>

              <Typography
                variant="body1"
                sx={{ color: "text.primary", lineHeight: 1.85, mb: 2.5, fontSize: "1.05rem" }}
              >
                At Warsia Educational &amp; Social Development Trust, we believe that
                education is the single most enduring engine of socio-economic progress.
                When a child is guided into thoughtful learning, an entire household is
                uplifted from cycles of generational hardship.
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "text.secondary", lineHeight: 1.85, mb: 4, fontSize: "1rem" }}
              >
                In Vijayapura, our trust actively engages with neighborhood schools,
                parents, and community elders. We counsel families facing financial
                pressures, urge regular school attendance, support basic study materials,
                and connect students with inspiring community role models.
              </Typography>

              {/* Pillars Grid */}
              <Typography
                variant="h5"
                sx={{ fontWeight: 800, color: "primary.main", mb: 2.5, fontSize: "1.25rem" }}
              >
                Areas of Educational Action
              </Typography>

              <Grid container spacing={2.5} sx={{ mb: 4 }}>
                {pillars.map((item) => (
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
                        <CheckCircleIcon sx={{ color: "primary.main", fontSize: 20 }} />
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
                  color="primary"
                  size="large"
                  startIcon={<WhatsAppIcon />}
                  sx={{ fontWeight: 700, px: 3.5 }}
                >
                  Connect Regarding Education
                </Button>

                <Link href="/volunteer" style={{ textDecoration: "none" }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="large"
                    sx={{ fontWeight: 700 }}
                  >
                    Join as Volunteer Mentor
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
