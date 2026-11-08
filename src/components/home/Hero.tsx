"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import { siteConfig } from "@/config/site";
import {
  ArrowForwardIcon,
  VerifiedIcon,
  Diversity3Icon,
  MosqueIcon,
  TempleHinduIcon,
  BloodtypeIcon,
  SchoolIcon,
  KeyboardArrowDownIcon,
} from "@/components/common/Icons";
import Reveal from "@/components/animations/Reveal";
import TextReveal from "@/components/animations/TextReveal";
import MagneticButton from "@/components/animations/MagneticButton";
import { motion } from "framer-motion";
import { easeOutExpo } from "@/lib/animations";

export default function Hero() {
  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "#001B5C", // Deep Navy
        color: "#FFFFFF",
        minHeight: { xs: "auto", lg: "calc(100vh - 116px)" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "hidden",
        pt: { xs: 4, sm: 5, lg: 6 },
        pb: { xs: 3, sm: 4, lg: 4 },
      }}
    >
      {/* Cinematic ambient background glow and patterns */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 18% 22%, rgba(0, 96, 0, 0.38) 0%, transparent 48%),
            radial-gradient(circle at 82% 78%, rgba(242, 117, 1, 0.28) 0%, transparent 52%),
            radial-gradient(circle at 50% 50%, rgba(0, 40, 135, 0.5) 0%, transparent 70%),
            linear-gradient(180deg, #001B5C 0%, #002887 100%)
          `,
          pointerEvents: "none",
        }}
      />

      {/* Subtle modern geometric dot grid overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.04,
          backgroundImage: `radial-gradient(#FFFFFF 1.2px, transparent 1.2px)`,
          backgroundSize: "28px 28px",
          pointerEvents: "none",
        }}
      />

      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
          px: { xs: 2.5, sm: 4, md: 6, lg: 8 },
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          py: { xs: 4, md: 6 },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              lg: "1.08fr 0.92fr",
              xl: "1.05fr 0.95fr",
            },
            gap: { xs: 4, lg: 6, xl: 8 },
            alignItems: "center",
          }}
        >
          {/* Left Column: Editorial Headline & Storytelling */}
          <Box>
            {/* Step 2: Organization Identity Badges */}
            <Reveal delay={0.1} direction="down">
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1.2,
                  p: 0.7,
                  px: 1.8,
                  borderRadius: 9999,
                  bgcolor: "rgba(255, 255, 255, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.18)",
                  backdropFilter: "blur(12px)",
                  mb: 3.5,
                  flexWrap: "wrap",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
                  <VerifiedIcon sx={{ fontSize: 17, color: "warning.main" }} />
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 800,
                      color: "#FFFFFF",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      fontSize: "0.74rem",
                    }}
                  >
                    DARPHAN ID: {siteConfig.darphanId}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    width: 4,
                    height: 4,
                    borderRadius: "50%",
                    bgcolor: "warning.main",
                  }}
                />

                <Typography
                  variant="caption"
                  sx={{
                    color: "warning.light",
                    fontWeight: 700,
                    fontSize: "0.74rem",
                    letterSpacing: "0.03em",
                  }}
                >
                  Vijayapura, Karnataka
                </Typography>
              </Box>
            </Reveal>

            {/* Step 3: Word-by-word headline reveal */}
            <Box sx={{ mb: 2 }}>
              <TextReveal
                text="Humanity Has No Boundaries."
                as="h1"
                delay={0.2}
                stagger={0.06}
                highlightWord="Boundaries"
                highlightColor="#F27501"
                style={{
                  fontSize: "clamp(2.4rem, 5.2vw, 4.4rem)",
                  fontWeight: 900,
                  lineHeight: 1.08,
                  letterSpacing: "-0.03em",
                  color: "#FFFFFF",
                }}
              />
            </Box>

            {/* Supporting Headline */}
            <Reveal delay={0.4} direction="up">
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: "1.3rem", sm: "1.65rem", md: "1.9rem" },
                  fontWeight: 800,
                  color: "rgba(255, 255, 255, 0.95)",
                  letterSpacing: "-0.015em",
                  lineHeight: 1.25,
                  mb: 2.5,
                }}
              >
                Together, We Serve.{" "}
                <Box
                  component="span"
                  sx={{
                    color: "secondary.light",
                    display: "inline",
                  }}
                >
                  Together, We Grow.
                </Box>
              </Typography>
            </Reveal>

            {/* Step 4: Description */}
            <Reveal delay={0.5} direction="up">
              <Typography
                variant="body1"
                sx={{
                  color: "rgba(255, 255, 255, 0.82)",
                  fontSize: { xs: "1.05rem", md: "1.18rem" },
                  lineHeight: 1.75,
                  fontWeight: 400,
                  maxWidth: 620,
                  mb: 3.5,
                }}
              >
                Creating meaningful change through education, community support,
                blood donation, and service beyond boundaries.
              </Typography>
            </Reveal>

            {/* Official Slogan Banner with refined editorial typography */}
            <Reveal delay={0.6} direction="up">
              <Box
                sx={{
                  p: 2,
                  px: 2.6,
                  borderRadius: 3.5,
                  bgcolor: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.16)",
                  backdropFilter: "blur(14px)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1.8,
                  mb: 4.5,
                  maxWidth: "100%",
                }}
              >
                <Diversity3Icon
                  sx={{ color: "warning.main", fontSize: 26, flexShrink: 0 }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    fontStyle: "italic",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    fontSize: { xs: "0.95rem", sm: "1.05rem" },
                    letterSpacing: "0.01em",
                  }}
                >
                  &ldquo;{siteConfig.slogan}&rdquo;
                </Typography>
              </Box>
            </Reveal>

            {/* Step 5: Animate CTA buttons */}
            <Reveal delay={0.7} direction="up">
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: 2.2,
                }}
              >
                <MagneticButton strength={0.25}>
                  <Button
                    component={Link}
                    href="/about"
                    variant="contained"
                    color="warning"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      px: 4,
                      py: 1.7,
                      fontWeight: 800,
                      fontSize: "1.02rem",
                      bgcolor: "warning.main",
                      color: "#FFFFFF",
                      borderRadius: 9999,
                      boxShadow: "0 10px 30px rgba(242, 117, 1, 0.4)",
                      "&:hover": {
                        bgcolor: "warning.dark",
                      },
                    }}
                  >
                    Discover Our Mission
                  </Button>
                </MagneticButton>

                <Button
                  component={Link}
                  href="/initiatives"
                  variant="outlined"
                  size="large"
                  sx={{
                    px: 3.5,
                    py: 1.6,
                    fontWeight: 700,
                    fontSize: "1.02rem",
                    borderColor: "rgba(255, 255, 255, 0.5)",
                    color: "#FFFFFF",
                    borderRadius: 9999,
                    backdropFilter: "blur(8px)",
                    bgcolor: "rgba(255, 255, 255, 0.05)",
                    "&:hover": {
                      borderColor: "#FFFFFF",
                      bgcolor: "rgba(255, 255, 255, 0.15)",
                    },
                  }}
                >
                  Explore Our Initiatives
                </Button>
              </Box>
            </Reveal>
          </Box>

          {/* Right Column: Layered Editorial Glass Showcase */}
          <Box>
            <Reveal delay={0.4} direction="left" scale>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                }}
              >
                {/* Main Glass Showcase Card */}
                <Box
                  sx={{
                    borderRadius: 5,
                    bgcolor: "rgba(255, 255, 255, 0.07)",
                    border: "1px solid rgba(255, 255, 255, 0.18)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    p: { xs: 3, sm: 4 },
                    boxShadow: "0 30px 60px rgba(0, 0, 0, 0.35)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Real Community Outreach Photo Composition */}
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: { xs: 200, sm: 240 },
                      borderRadius: 3.5,
                      overflow: "hidden",
                      mb: 3,
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    <Image
                      src="/images/gallery/ramzan-food-kit.png"
                      alt="Warsia Trust community outreach and food kit distribution in Vijayapura"
                      fill
                      priority
                      sizes="(max-width: 1200px) 100vw, 480px"
                      style={{
                        objectFit: "cover",
                        filter: "brightness(0.95)",
                      }}
                    />
                    {/* Gradient Overlay */}
                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(180deg, rgba(0, 27, 92, 0.1) 0%, rgba(0, 27, 92, 0.8) 100%)",
                      }}
                    />

                    {/* Tag badge on image */}
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 14,
                        left: 14,
                        right: 14,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{
                          px: 1.5,
                          py: 0.5,
                          borderRadius: 9999,
                          bgcolor: "rgba(0, 27, 92, 0.85)",
                          backdropFilter: "blur(8px)",
                          color: "#FFFFFF",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          border: "1px solid rgba(255, 255, 255, 0.2)",
                        }}
                      >
                        Vijayapura Community Outreach
                      </Box>
                      <Box
                        sx={{
                          px: 1.2,
                          py: 0.4,
                          borderRadius: 9999,
                          bgcolor: "rgba(242, 117, 1, 0.9)",
                          color: "#FFFFFF",
                          fontSize: "0.72rem",
                          fontWeight: 800,
                        }}
                      >
                        Active
                      </Box>
                    </Box>
                  </Box>

                  {/* 3 Balanced Pillars with Icons & Micro-Interactions */}
                  <Typography
                    variant="overline"
                    sx={{
                      color: "warning.main",
                      fontWeight: 800,
                      letterSpacing: "0.08em",
                      fontSize: "0.75rem",
                      display: "block",
                      mb: 1.5,
                    }}
                  >
                    PILLARS OF EQUALITY &amp; SERVICE
                  </Typography>

                  <Box sx={{ display: "flex", flexDirection: "column", gap: 1.6 }}>
                    {/* Harmony Pillar: Equal Imam & Pandit */}
                    <Box
                      sx={{
                        p: 1.8,
                        borderRadius: 3,
                        bgcolor: "rgba(0, 40, 135, 0.55)",
                        border: "1px solid rgba(255, 255, 255, 0.14)",
                        display: "flex",
                        alignItems: "center",
                        gap: 1.8,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          bgcolor: "rgba(0, 40, 135, 0.8)",
                          borderColor: "rgba(242, 117, 1, 0.5)",
                          transform: "translateX(4px)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 44,
                          height: 44,
                          borderRadius: 2.5,
                          bgcolor: "rgba(255, 255, 255, 0.12)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          gap: 0.4,
                        }}
                      >
                        <MosqueIcon sx={{ color: "#81C784", fontSize: 18 }} />
                        <TempleHinduIcon sx={{ color: "#FFB74D", fontSize: 18 }} />
                      </Box>
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography
                          variant="subtitle2"
                          sx={{ color: "#FFFFFF", fontWeight: 800, fontSize: "0.92rem" }}
                        >
                          Religious Harmony Honorarium
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{ color: "rgba(255, 255, 255, 0.75)", display: "block" }}
                        >
                          Equal monthly financial support for Masjid Imams &amp; Temple Pandits.
                        </Typography>
                      </Box>
                    </Box>

                    {/* Blood Network Pillar */}
                    <Box
                      sx={{
                        p: 1.8,
                        borderRadius: 3,
                        bgcolor: "rgba(198, 40, 40, 0.22)",
                        border: "1px solid rgba(198, 40, 40, 0.35)",
                        display: "flex",
                        alignItems: "center",
                        gap: 1.8,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          bgcolor: "rgba(198, 40, 40, 0.35)",
                          borderColor: "rgba(198, 40, 40, 0.6)",
                          transform: "translateX(4px)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 44,
                          height: 44,
                          borderRadius: 2.5,
                          bgcolor: "rgba(198, 40, 40, 0.3)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <BloodtypeIcon sx={{ color: "#FF8A80", fontSize: 24 }} />
                      </Box>
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography
                          variant="subtitle2"
                          sx={{ color: "#FFFFFF", fontWeight: 800, fontSize: "0.92rem" }}
                        >
                          Emergency Blood Network
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{ color: "rgba(255, 255, 255, 0.75)", display: "block" }}
                        >
                          Mobilizing voluntary donors for patients in Vijayapura hospitals.
                        </Typography>
                      </Box>
                    </Box>

                    {/* Education Pillar */}
                    <Box
                      sx={{
                        p: 1.8,
                        borderRadius: 3,
                        bgcolor: "rgba(0, 96, 0, 0.3)",
                        border: "1px solid rgba(0, 96, 0, 0.45)",
                        display: "flex",
                        alignItems: "center",
                        gap: 1.8,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          bgcolor: "rgba(0, 96, 0, 0.45)",
                          borderColor: "rgba(0, 96, 0, 0.7)",
                          transform: "translateX(4px)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 44,
                          height: 44,
                          borderRadius: 2.5,
                          bgcolor: "rgba(0, 96, 0, 0.4)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <SchoolIcon sx={{ color: "#81C784", fontSize: 22 }} />
                      </Box>
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography
                          variant="subtitle2"
                          sx={{ color: "#FFFFFF", fontWeight: 800, fontSize: "0.92rem" }}
                        >
                          Education &amp; Social Welfare
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{ color: "rgba(255, 255, 255, 0.75)", display: "block" }}
                        >
                          Encouraging schooling, mentoring youth, and food ration relief.
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Reveal>
          </Box>
        </Box>

        {/* Step 7: Scroll Indicator */}
        <Reveal delay={1} direction="up">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mt: { xs: 3, md: 4 },
              opacity: 0.85,
            }}
          >
            <Typography
              variant="caption"
              sx={{
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontSize: "0.68rem",
                color: "rgba(255, 255, 255, 0.7)",
                mb: 1,
              }}
            >
              SCROLL TO EXPLORE
            </Typography>

            {/* Mouse indicator with pulsing dot */}
            <Box
              sx={{
                width: 22,
                height: 36,
                borderRadius: 12,
                border: "2px solid rgba(255, 255, 255, 0.4)",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                pt: 1,
              }}
            >
              <motion.div
                animate={{
                  y: [0, 10, 0],
                  opacity: [0.8, 0.2, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: "50%",
                  backgroundColor: "#F27501",
                }}
              />
            </Box>
          </Box>
        </Reveal>
      </Container>
    </Box>
  );
}
