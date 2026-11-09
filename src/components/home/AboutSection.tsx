"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { siteConfig } from "@/config/site";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/animations/Reveal";
import TextReveal from "@/components/animations/TextReveal";
import ParallaxImage from "@/components/animations/ParallaxImage";
import StaggerContainer from "@/components/animations/StaggerContainer";
import {
  ArrowForwardIcon,
  CheckCircleIcon,
  VerifiedIcon,
  Diversity3Icon,
  VolunteerActivismIcon,
  BalanceIcon,
} from "@/components/common/Icons";

const coreValues = [
  {
    title: "Service to Humanity",
    desc: "Placing compassion, empathy, and human dignity above all religious, caste, and social boundaries.",
    icon: <VolunteerActivismIcon sx={{ color: "primary.main", fontSize: 28 }} />,
  },
  {
    title: "Religious Equality",
    desc: "Upholding complete parity by providing equal monthly support to both Masjid Imams and Temple Pandits.",
    icon: <BalanceIcon sx={{ color: "warning.main", fontSize: 28 }} />,
  },
  {
    title: "Grassroots Integrity",
    desc: "Working directly with local families, hospitals, and students in Vijayapura with zero commercial bias.",
    icon: <CheckCircleIcon sx={{ color: "secondary.main", fontSize: 28 }} />,
  },
  {
    title: "Community Unity",
    desc: "Building a culture of mutual respect, peaceful coexistence, and shared brotherhood across Karnataka.",
    icon: <Diversity3Icon sx={{ color: "primary.main", fontSize: 28 }} />,
  },
];

export default function AboutSection() {
  return (
    <Box
      sx={{
        py: { xs: 9, md: 14 },
        bgcolor: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl">
        {/* Editorial Split Layout */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "minmax(0, 1fr)", lg: "repeat(2, minmax(0, 1fr))" },
            gap: { xs: 5, lg: 7 },
            alignItems: "center",
            width: "100%",
            maxWidth: "100%",
          }}
        >
          {/* Left Column: Heading, Mission, Leadership Narrative */}
          <Box sx={{ minWidth: 0, width: "100%", maxWidth: "100%" }}>
            <Reveal direction="down">
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  py: 0.6,
                  px: 1.8,
                  borderRadius: 9999,
                  bgcolor: "rgba(0, 40, 135, 0.08)",
                  border: "1px solid rgba(0, 40, 135, 0.15)",
                  mb: 2.5,
                }}
              >
                <Box
                  sx={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    bgcolor: "primary.main",
                  }}
                />
                <Typography
                  variant="overline"
                  sx={{
                    color: "primary.main",
                    fontWeight: 800,
                    letterSpacing: "0.08em",
                    lineHeight: 1,
                  }}
                >
                  FOUNDATIONAL PHILOSOPHY
                </Typography>
              </Box>
            </Reveal>

            {/* Editorial Heading */}
            <Box sx={{ mb: 3 }}>
              <TextReveal
                text="More Than an Organization. A Commitment to Humanity."
                as="h2"
                delay={0.1}
                stagger={0.05}
                highlightWord="Commitment"
                highlightColor="#002887"
                style={{
                  fontSize: "clamp(2rem, 3.8vw, 3rem)",
                  fontWeight: 900,
                  lineHeight: 1.15,
                  letterSpacing: "-0.025em",
                  color: "#001B5C",
                }}
              />
            </Box>

            <Reveal delay={0.2} direction="up">
              <Typography
                variant="body1"
                sx={{
                  color: "text.primary",
                  fontSize: { xs: "1.05rem", md: "1.15rem" },
                  lineHeight: 1.8,
                  fontWeight: 500,
                  mb: 2.5,
                }}
              >
                <strong>{siteConfig.name}</strong> was established in Vijayapura
                (Bijapur), Karnataka, under the visionary leadership of President{" "}
                <strong>{siteConfig.president}</strong>. Founded upon the sacred conviction
                that true faith finds its ultimate expression in selfless service to fellow
                human beings.
              </Typography>
            </Reveal>

            <Reveal delay={0.3} direction="up">
              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  fontSize: "1rem",
                  lineHeight: 1.75,
                  mb: 3.5,
                }}
              >
                In a multicultural society, we break conventional boundaries through our
                flagship initiative: providing dignified, regular monthly financial
                assistance to both <strong>Masjid Imams</strong> and{" "}
                <strong>Temple Pandits</strong> with absolute parity. Coupled with our
                24/7 voluntary blood donor network, educational support for underprivileged
                students, and community welfare drives, we touch lives where assistance is
                needed most.
              </Typography>
            </Reveal>

            {/* Mission & Vision Split Pills */}
            <Reveal delay={0.4} direction="up">
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "minmax(0, 1fr)", sm: "repeat(2, minmax(0, 1fr))" },
                  gap: 2.5,
                  mb: 4,
                }}
              >
                <Box
                  sx={{
                    p: 2.5,
                    borderRadius: 3,
                    bgcolor: "#F7F8FC",
                    border: "1px solid #E2E8F0",
                    height: "100%",
                    borderLeft: "4px solid #002887",
                  }}
                >
                  <Typography
                    variant="overline"
                    sx={{ color: "primary.main", fontWeight: 800, letterSpacing: "0.06em" }}
                  >
                    OUR MISSION
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.primary", fontWeight: 600, mt: 0.5, lineHeight: 1.6 }}
                  >
                    To serve society through equal support for spiritual leaders, emergency
                    blood access, and education without distinction of faith or background.
                  </Typography>
                </Box>

                <Box
                  sx={{
                    p: 2.5,
                    borderRadius: 3,
                    bgcolor: "#F7F8FC",
                    border: "1px solid #E2E8F0",
                    height: "100%",
                    borderLeft: "4px solid #006000",
                  }}
                >
                  <Typography
                    variant="overline"
                    sx={{ color: "secondary.main", fontWeight: 800, letterSpacing: "0.06em" }}
                  >
                    OUR VISION
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.primary", fontWeight: 600, mt: 0.5, lineHeight: 1.6 }}
                  >
                    A united, compassionate Vijayapura where mutual brotherhood flourishes and
                    no family is left unsupported during hardship or medical emergencies.
                  </Typography>
                </Box>
              </Box>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={0.5} direction="up">
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Button
                  component={Link}
                  href="/about"
                  variant="contained"
                  color="primary"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{ px: 3.8, py: 1.4, fontWeight: 800 }}
                >
                  Read Full Trust Story
                </Button>

                <Button
                  component={Link}
                  href="/contact"
                  variant="outlined"
                  color="primary"
                  size="large"
                  sx={{ px: 3.5, py: 1.4, fontWeight: 700 }}
                >
                  Contact Trust Office
                </Button>
              </Box>
            </Reveal>
          </Box>

          {/* Right Column: Documentary Photography Composition */}
          <Box sx={{ minWidth: 0, width: "100%", maxWidth: "100%" }}>
            <Reveal delay={0.3} direction="left" scale>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  borderRadius: 4.5,
                  overflow: "hidden",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 20px 50px rgba(0, 40, 135, 0.12)",
                  bgcolor: "#001B5C",
                }}
              >
                {/* Main Photo Container */}
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: 340, sm: 420, md: 480 },
                    overflow: "hidden",
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                      "&:hover": {
                        transform: "scale(1.03)",
                      },
                    }}
                  >
                    <Image
                      src="/images/gallery/ramzan-food-kit.png"
                      alt="Warsia Trust community food kit distribution documentary photo"
                      fill
                      priority
                      sizes="(max-width: 1200px) 100vw, 650px"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center 25%",
                      }}
                    />
                  </Box>

                  {/* Gradient bottom shadow */}
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(0, 27, 92, 0.1) 0%, rgba(0, 27, 92, 0.85) 100%)",
                      pointerEvents: "none",
                    }}
                  />

                  {/* Top-Right Badge: Official Govt Accreditation */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 16,
                      right: 16,
                      bgcolor: "rgba(255, 255, 255, 0.95)",
                      backdropFilter: "blur(10px)",
                      py: 1,
                      px: 2,
                      borderRadius: 9999,
                      border: "1px solid rgba(255, 255, 255, 0.6)",
                      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.18)",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      zIndex: 3,
                    }}
                  >
                    <VerifiedIcon sx={{ color: "warning.main", fontSize: 18 }} />
                    <Typography
                      variant="caption"
                      sx={{
                        fontWeight: 800,
                        color: "primary.main",
                        letterSpacing: "0.04em",
                        fontSize: "0.78rem",
                      }}
                    >
                      DARPHAN ID: {siteConfig.darphanId}
                    </Typography>
                  </Box>

                  {/* Bottom Docked Information Panel */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      p: { xs: 2.5, sm: 3.5 },
                      bgcolor: "rgba(0, 27, 92, 0.92)",
                      backdropFilter: "blur(12px)",
                      borderTop: "1px solid rgba(255, 255, 255, 0.15)",
                      zIndex: 3,
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        color: "warning.main",
                        fontWeight: 800,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        display: "block",
                        mb: 0.5,
                      }}
                    >
                      TRUST LEADERSHIP • VIJAYAPURA
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ color: "#FFFFFF", fontWeight: 800, fontSize: "1.1rem", mb: 0.4 }}
                    >
                      {siteConfig.president} — President
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "0.88rem", lineHeight: 1.5 }}
                    >
                      Dignified community food distribution &amp; humanitarian relief across Vijayapura.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Reveal>
          </Box>
        </Box>

        {/* Core Values Section */}
        <Box sx={{ mt: { xs: 8, md: 12 } }}>
          <Reveal>
            <Box sx={{ textAlign: "center", mb: 5 }}>
              <Typography
                variant="overline"
                sx={{
                  color: "warning.main",
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                  fontSize: "0.78rem",
                }}
              >
                GUIDING ETHICS
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 900,
                  color: "primary.main",
                  fontSize: { xs: "1.75rem", md: "2.3rem" },
                  letterSpacing: "-0.02em",
                  mt: 0.5,
                }}
              >
                Our Guiding Values
              </Typography>
            </Box>
          </Reveal>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "minmax(0, 1fr)",
                sm: "repeat(2, minmax(0, 1fr))",
                md: "repeat(4, minmax(0, 1fr))",
              },
              gap: 3,
            }}
          >
            {coreValues.map((val, idx) => (
              <Reveal delay={idx * 0.1} direction="up" key={val.title} style={{ height: "100%" }}>
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 4,
                    p: 3,
                    border: "1px solid #E2E8F0",
                    bgcolor: "#F7F8FC",
                    transition: "all 0.35s ease",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 16px 36px rgba(0, 40, 135, 0.1)",
                      borderColor: "primary.main",
                      bgcolor: "#FFFFFF",
                    },
                  }}
                >
                  <Box sx={{ mb: 2 }}>{val.icon}</Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 800,
                      color: "primary.main",
                      fontSize: "1.05rem",
                      mb: 1,
                    }}
                  >
                    {val.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", lineHeight: 1.65 }}
                  >
                    {val.desc}
                  </Typography>
                </Card>
              </Reveal>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
