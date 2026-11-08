"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/animations/Reveal";
import TextReveal from "@/components/animations/TextReveal";
import MagneticButton from "@/components/animations/MagneticButton";
import {
  SchoolIcon,
  ArrowForwardIcon,
  CheckCircleIcon,
  Diversity3Icon,
  VolunteerActivismIcon,
} from "@/components/common/Icons";

const educationalPillars = [
  {
    title: "School Enrollment & Retention",
    desc: "Guiding and supporting parents in underprivileged areas to ensure children remain in formal schooling without dropouts.",
    icon: <SchoolIcon sx={{ color: "primary.main", fontSize: 26 }} />,
  },
  {
    title: "Youth Guidance & Mentorship",
    desc: "Connecting aspiring youngsters with mentors who instill foundational literacy, discipline, and career ambition.",
    icon: <Diversity3Icon sx={{ color: "warning.main", fontSize: 26 }} />,
  },
  {
    title: "Girls' Education Advocacy",
    desc: "Championing equitable learning opportunities for young girls as the foundation of strong families and communities.",
    icon: <VolunteerActivismIcon sx={{ color: "secondary.main", fontSize: 26 }} />,
  },
  {
    title: "Values & Humanitarian Ethics",
    desc: "Educating youth to uphold tolerance, communal brotherhood, civic responsibility, and mutual respect.",
    icon: <CheckCircleIcon sx={{ color: "primary.main", fontSize: 26 }} />,
  },
];

export default function EducationSection() {
  return (
    <Box
      sx={{
        py: { xs: 9, md: 14 },
        bgcolor: "#FFFFFF",
        position: "relative",
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2.5, sm: 4, md: 6, lg: 8 } }}>
        {/* Section Header */}
        <Reveal>
          <Box sx={{ mb: { xs: 6, md: 8 }, maxWidth: 820 }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.2,
                py: 0.8,
                px: 2.2,
                borderRadius: 9999,
                bgcolor: "rgba(0, 40, 135, 0.08)",
                border: "1px solid rgba(0, 40, 135, 0.14)",
                mb: 2.5,
              }}
            >
              <SchoolIcon sx={{ color: "primary.main", fontSize: 20 }} />
              <Typography
                variant="overline"
                sx={{
                  color: "primary.main",
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                  lineHeight: 1,
                }}
              >
                EDUCATIONAL DEVELOPMENT &amp; YOUTH
              </Typography>
            </Box>

            <TextReveal
              text="Investing in People. Building Tomorrow."
              as="h2"
              delay={0.1}
              stagger={0.05}
              highlightWord="Tomorrow."
              highlightColor="#006000"
              style={{
                fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
                fontWeight: 900,
                color: "#001B5C",
                letterSpacing: "-0.025em",
                lineHeight: 1.15,
                marginBottom: "16px",
              }}
            />

            <Typography
              variant="subtitle1"
              sx={{
                color: "text.secondary",
                fontSize: { xs: "1.05rem", sm: "1.18rem" },
                lineHeight: 1.7,
              }}
            >
              Education is the greatest catalyst for enduring social change and breaking
              cycles of hardship. We work directly with youth and families across Vijayapura.
            </Typography>
          </Box>
        </Reveal>

        {/* Split-Screen Editorial Showcase */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "0.85fr 1.15fr" },
            gap: { xs: 5, md: 7 },
            alignItems: "center",
            mb: 8,
          }}
        >
          {/* Left: Layered Photography & Artwork */}
          <Box>
            <Reveal delay={0.2} direction="right" scale>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                }}
              >
                {/* Main Card with SVG artwork */}
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: 300, sm: 380 },
                    borderRadius: 5,
                    overflow: "hidden",
                    border: "1px solid #E2E8F0",
                    boxShadow: "0 20px 50px rgba(0, 40, 135, 0.12)",
                    bgcolor: "#001B5C",
                  }}
                >
                  <Image
                    src="/images/initiatives/education.svg"
                    alt="Educational Development in Vijayapura"
                    fill
                    sizes="(max-width: 1200px) 100vw, 500px"
                    style={{ objectFit: "cover" }}
                  />

                  {/* Gradient bottom bar */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      p: 2.5,
                      background:
                        "linear-gradient(180deg, transparent 0%, rgba(0, 27, 92, 0.9) 100%)",
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        color: "#81C784",
                        fontWeight: 800,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                      }}
                    >
                      FOUNDATIONAL PROGRESS
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "#FFFFFF", fontWeight: 700 }}
                    >
                      Empowering student retention and community learning
                    </Typography>
                  </Box>
                </Box>

                {/* Overlapping Floating Pill */}
                <Box
                  sx={{
                    position: "absolute",
                    top: -18,
                    right: { xs: 10, sm: -15 },
                    bgcolor: "#006000",
                    color: "#FFFFFF",
                    borderRadius: 9999,
                    py: 1,
                    px: 2.5,
                    boxShadow: "0 8px 24px rgba(0, 96, 0, 0.35)",
                    border: "2px solid #FFFFFF",
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{ fontWeight: 800, letterSpacing: "0.04em" }}
                  >
                    FUTURE GENERATIONS
                  </Typography>
                </Box>
              </Box>
            </Reveal>
          </Box>

          {/* Right: Narrative Storytelling & Actions */}
          <Box>
            <Reveal delay={0.3} direction="up">
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 900,
                  color: "primary.main",
                  fontSize: { xs: "1.45rem", sm: "1.8rem" },
                  lineHeight: 1.3,
                  mb: 2.5,
                }}
              >
                Nurturing Ambition &amp; Dignity Through Learning
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "text.primary",
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  mb: 2.5,
                }}
              >
                At Warsia Educational &amp; Social Development Trust, we believe that
                sustainable community progress begins when a child is encouraged to learn.
                We actively work with vulnerable parents in Vijayapura to prevent school
                dropouts, remove financial apprehensions, and emphasize that education is a
                fundamental right.
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  fontSize: "0.98rem",
                  lineHeight: 1.75,
                  mb: 4,
                }}
              >
                Through mentoring and moral guidance, our volunteers nurture youngsters
                to become compassionate, self-reliant citizens who value tolerance,
                brotherhood, and community welfare.
              </Typography>

              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <MagneticButton strength={0.25}>
                  <Button
                    component={Link}
                    href="/initiatives/education"
                    variant="contained"
                    color="primary"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    sx={{ px: 4, py: 1.5, fontWeight: 800 }}
                  >
                    Explore Educational Work
                  </Button>
                </MagneticButton>

                <Button
                  component={Link}
                  href="/volunteer"
                  variant="outlined"
                  color="primary"
                  size="large"
                  sx={{ px: 3.5, py: 1.5, fontWeight: 700 }}
                >
                  Volunteer as Mentor
                </Button>
              </Box>
            </Reveal>
          </Box>
        </Box>

        {/* 4 Interactive Pillars Grid with Hover Elevation */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: 3,
          }}
        >
          {educationalPillars.map((pillar, idx) => (
            <Reveal delay={0.1 * idx} direction="up" key={pillar.title} style={{ height: "100%" }}>
              <Card
                sx={{
                  p: 3.2,
                  height: "100%",
                  borderRadius: 4,
                  border: "1px solid #E2E8F0",
                  bgcolor: "#F7F8FC",
                  transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    bgcolor: "#FFFFFF",
                    borderColor: "primary.main",
                    boxShadow: "0 16px 36px rgba(0, 40, 135, 0.1)",
                  },
                }}
              >
                <Box sx={{ mb: 2 }}>{pillar.icon}</Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 800,
                    color: "primary.main",
                    fontSize: "1.05rem",
                    mb: 1.2,
                    lineHeight: 1.35,
                  }}
                >
                  {pillar.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", lineHeight: 1.65 }}
                >
                  {pillar.desc}
                </Typography>
              </Card>
            </Reveal>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
