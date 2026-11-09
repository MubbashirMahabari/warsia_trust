import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import { constructMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import ContactCard from "@/components/common/ContactCard";
import Reveal from "@/components/animations/Reveal";
import TextReveal from "@/components/animations/TextReveal";
import MagneticButton from "@/components/animations/MagneticButton";
import {
  SchoolIcon,
  CheckCircleIcon,
  WhatsAppIcon,
  Diversity3Icon,
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
    <Box sx={{ pb: { xs: 9, md: 14 }, bgcolor: "#FFFFFF" }}>
      {/* Editorial Header Banner */}
      <Box
        sx={{
          bgcolor: "#001B5C",
          color: "#FFFFFF",
          pt: { xs: 6, md: 9 },
          pb: { xs: 7, md: 10 },
          position: "relative",
          backgroundImage: `
            radial-gradient(circle at 15% 20%, rgba(0, 96, 0, 0.4) 0%, transparent 45%),
            radial-gradient(circle at 85% 80%, rgba(242, 117, 1, 0.22) 0%, transparent 45%),
            linear-gradient(180deg, #001B5C 0%, #002887 100%)
          `,
        }}
      >
        <Container maxWidth="xl">
          <Breadcrumbs
            items={[
              { label: "Initiatives", href: "/initiatives" },
              { label: "Educational Development" },
            ]}
          />

          <Reveal direction="down">
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mt: 2.5, mb: 1.5, flexWrap: "wrap" }}>
              <Chip
                label="Empowering Youth"
                sx={{
                  bgcolor: "#002887",
                  color: "#FFFFFF",
                  fontWeight: 800,
                  fontSize: "0.75rem",
                }}
              />
              <Chip
                label="Vijayapura Educational Outreach"
                sx={{
                  bgcolor: "rgba(255, 255, 255, 0.15)",
                  color: "#FFFFFF",
                  fontWeight: 700,
                  fontSize: "0.75rem",
                  border: "1px solid rgba(255, 255, 255, 0.25)",
                }}
              />
            </Box>
          </Reveal>

          <TextReveal
            text="Educational Development"
            as="h1"
            delay={0.1}
            stagger={0.04}
            highlightWord="Development"
            highlightColor="#FFB74D"
            style={{
              fontSize: "clamp(2.3rem, 4.4vw, 3.6rem)",
              fontWeight: 900,
              color: "#FFFFFF",
              letterSpacing: "-0.025em",
              lineHeight: 1.15,
              marginTop: "8px",
              marginBottom: "16px",
            }}
          />

          <Reveal delay={0.3} direction="up">
            <Typography
              variant="h6"
              sx={{
                color: "rgba(255, 255, 255, 0.88)",
                maxWidth: 780,
                fontSize: { xs: "1.05rem", sm: "1.2rem" },
                fontWeight: 400,
                lineHeight: 1.7,
              }}
            >
              Empowering students through educational awareness, foundational learning
              guidance, and mentorship for a self-reliant future.
            </Typography>
          </Reveal>
        </Container>
      </Box>

      {/* Main Narrative & Sidebar */}
      <Container maxWidth="xl" sx={{ mt: { xs: 7, md: 10 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "minmax(0, 1fr)", md: "1.3fr 0.7fr" },
            gap: { xs: 5, md: 6 },
            alignItems: "flex-start",
          }}
        >
          <Box>
            <Reveal direction="up">
              {/* Artwork Banner */}
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: 240, sm: 340 },
                  borderRadius: 4.5,
                  overflow: "hidden",
                  mb: 4.5,
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 14px 40px rgba(0, 40, 135, 0.12)",
                }}
              >
                <Image
                  src="/images/initiatives/education.svg"
                  alt="Educational Development in Vijayapura"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: 3.5,
                    bgcolor: "rgba(0, 40, 135, 0.08)",
                    border: "1px solid rgba(0, 40, 135, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <SchoolIcon sx={{ fontSize: 34, color: "primary.main" }} />
                </Box>
                <Box>
                  <Typography
                    variant="overline"
                    sx={{ color: "primary.main", fontWeight: 800, letterSpacing: "0.08em" }}
                  >
                    FOUNDATION FOR TOMORROW
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 900,
                      color: "primary.main",
                      fontSize: { xs: "1.5rem", md: "1.85rem" },
                    }}
                  >
                    Building Dignity and Opportunity
                  </Typography>
                </Box>
              </Box>

              <Typography
                variant="body1"
                sx={{ color: "text.primary", lineHeight: 1.85, mb: 2.5, fontSize: "1.06rem" }}
              >
                At Warsia Educational &amp; Social Development Trust, we view education
                not simply as textbook instruction, but as the supreme tool for personal
                upliftment, civic dignity, and peaceful coexistence.
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "text.secondary", lineHeight: 1.8, mb: 2.5, fontSize: "1rem" }}
              >
                Many children in low-income neighborhoods face systemic obstacles:
                economic constraints, absence of study habits at home, and lack of
                academic mentoring. Our trust works directly on the ground in Vijayapura,
                encouraging parents and supporting children to complete their schooling.
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "text.secondary", lineHeight: 1.8, mb: 4, fontSize: "1rem" }}
              >
                Through mentoring drives, workshops on girls&apos; education, and ethical
                guidance, we build an uplifting community environment where every young
                person feels recognized and encouraged to reach their potential.
              </Typography>

              {/* 4 Pillars Grid */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "minmax(0, 1fr)", sm: "1fr 1fr" },
                  gap: 2.5,
                  mb: 5,
                }}
              >
                {pillars.map((p) => (
                  <Box
                    key={p.title}
                    sx={{
                      p: 3,
                      borderRadius: 3.5,
                      bgcolor: "#F7F8FC",
                      border: "1px solid #E2E8F0",
                      height: "100%",
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{ fontWeight: 800, color: "primary.main", mb: 0.8 }}
                    >
                      {p.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", lineHeight: 1.6 }}
                    >
                      {p.desc}
                    </Typography>
                  </Box>
                ))}
              </Box>

              {/* Action Button */}
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 4 }}>
                <MagneticButton strength={0.25}>
                  <Button
                    component="a"
                    href={whatsAppLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    size="large"
                    startIcon={<WhatsAppIcon />}
                    sx={{
                      bgcolor: "primary.main",
                      color: "#FFFFFF",
                      px: 3.8,
                      py: 1.5,
                      fontWeight: 800,
                    }}
                  >
                    Support Education Program
                  </Button>
                </MagneticButton>

                <Link href="/volunteer" style={{ textDecoration: "none" }}>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{ px: 3.5, py: 1.5, fontWeight: 700 }}
                  >
                    Join as Student Mentor
                  </Button>
                </Link>
              </Box>
            </Reveal>
          </Box>

          {/* Right Column: Contact & Quick Actions */}
          <Box>
            <Reveal delay={0.2} direction="left" scale>
              <Box sx={{ position: "sticky", top: 100, display: "flex", flexDirection: "column", gap: 3.5 }}>
                <ContactCard />
              </Box>
            </Reveal>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
