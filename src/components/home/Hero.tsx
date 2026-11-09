"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { siteConfig } from "@/config/site";
import {
  ArrowForwardIcon,
  VerifiedIcon,
  Diversity3Icon,
  MosqueIcon,
  TempleHinduIcon,
  BloodtypeIcon,
  SchoolIcon,
} from "@/components/common/Icons";
import Reveal from "@/components/animations/Reveal";
import TextReveal from "@/components/animations/TextReveal";
import MagneticButton from "@/components/animations/MagneticButton";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "#001B5C",
        color: "#FFFFFF",
        minHeight: { xs: "auto", md: "calc(100vh - 78px)" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Background gradient */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            radial-gradient(ellipse at 20% 30%, rgba(0, 96, 0, 0.35) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, rgba(242, 117, 1, 0.25) 0%, transparent 50%),
            linear-gradient(160deg, #001B5C 0%, #002887 60%, #001B5C 100%)
          `,
          pointerEvents: "none",
        }}
      />

      {/* Dot grid pattern */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.03,
          backgroundImage: `radial-gradient(#FFFFFF 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
          pointerEvents: "none",
        }}
      />

      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          py: { xs: 10, md: 8 },
          mt: { xs: 0, md: 2 },
        }}
      >
        {/* Two-column editorial layout */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "minmax(0, 1fr)", lg: "repeat(2, minmax(0, 1fr))" },
            gap: { xs: 5, lg: 7 },
            alignItems: "center",
            minHeight: { lg: "80vh" },
            width: "100%",
            maxWidth: "100%",
          }}
        >
          {/* LEFT: Headline + CTAs */}
          <Box sx={{ minWidth: 0, width: "100%", maxWidth: "100%" }}>
            {/* Identity label */}
            <Reveal delay={0.05} direction="down">
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  px: { xs: 1.5, sm: 2 },
                  py: 0.8,
                  borderRadius: 9999,
                  bgcolor: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  mb: 4,
                  flexWrap: "wrap",
                  maxWidth: "100%",
                }}
              >
                <VerifiedIcon sx={{ fontSize: 16, color: "#F27501" }} />
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 700,
                    color: "#FFFFFF",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    fontSize: { xs: "0.68rem", sm: "0.72rem" },
                    whiteSpace: "nowrap",
                  }}
                >
                  Govt. NGO · {siteConfig.darphanId}
                </Typography>
                <Box
                  sx={{
                    display: { xs: "none", sm: "block" },
                    width: 4,
                    height: 4,
                    borderRadius: "50%",
                    bgcolor: "rgba(255,255,255,0.4)",
                  }}
                />
                <Typography
                  variant="caption"
                  sx={{
                    display: { xs: "none", sm: "block" },
                    color: "#FFA040",
                    fontWeight: 600,
                    fontSize: "0.72rem",
                  }}
                >
                  Vijayapura, Karnataka
                </Typography>
              </Box>
            </Reveal>

            {/* Main headline */}
            <Box sx={{ mb: 3, maxWidth: "100%" }}>
              <TextReveal
                text="Humanity Has No Boundaries."
                as="h1"
                delay={0.15}
                stagger={0.055}
                highlightWord="Boundaries."
                highlightColor="#F27501"
                style={{
                  fontSize: "clamp(2rem, 5vw, 4.4rem)",
                  fontWeight: 900,
                  lineHeight: 1.08,
                  letterSpacing: "-0.03em",
                  color: "#FFFFFF",
                  wordBreak: "break-word",
                }}
              />
            </Box>

            {/* Sub-headline */}
            <Reveal delay={0.35} direction="up">
              <Typography
                sx={{
                  fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.9)",
                  lineHeight: 1.35,
                  mb: 2.5,
                  letterSpacing: "-0.01em",
                  wordBreak: "break-word",
                }}
              >
                Together, We Serve.{" "}
                <Box component="span" sx={{ color: "#0A8A0A" }}>
                  Together, We Grow.
                </Box>
              </Typography>
            </Reveal>

            {/* Description */}
            <Reveal delay={0.45} direction="up">
              <Typography
                sx={{
                  color: "rgba(255,255,255,0.78)",
                  fontSize: { xs: "0.95rem", md: "1.1rem" },
                  lineHeight: 1.75,
                  maxWidth: 560,
                  mb: 3,
                }}
              >
                Creating meaningful change through education, community
                support, blood donation, and service beyond boundaries.
              </Typography>
            </Reveal>

            {/* Slogan */}
            <Reveal delay={0.55} direction="up">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  px: { xs: 2, sm: 2.5 },
                  py: 1.4,
                  borderRadius: 3,
                  bgcolor: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  mb: 4.5,
                  maxWidth: "100%",
                  boxSizing: "border-box",
                }}
              >
                <Diversity3Icon sx={{ color: "#F27501", fontSize: 22, flexShrink: 0 }} />
                <Typography
                  sx={{
                    fontStyle: "italic",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.9)",
                    fontSize: { xs: "0.85rem", sm: "0.95rem" },
                    lineHeight: 1.4,
                    wordBreak: "break-word",
                  }}
                >
                  &ldquo;{siteConfig.slogan}&rdquo;
                </Typography>
              </Box>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={0.65} direction="up">
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 2,
                  alignItems: "center",
                }}
              >
                <MagneticButton strength={0.2}>
                  <Button
                    component={Link}
                    href="/about"
                    variant="contained"
                    color="warning"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      px: { xs: 3, sm: 4 },
                      py: 1.6,
                      fontWeight: 800,
                      fontSize: "1rem",
                      borderRadius: 9999,
                      boxShadow: "0 8px 28px rgba(242,117,1,0.4)",
                      "&:hover": { bgcolor: "#C75F00" },
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
                    px: { xs: 3, sm: 3.5 },
                    py: 1.5,
                    fontWeight: 700,
                    fontSize: "1rem",
                    borderColor: "rgba(255,255,255,0.45)",
                    color: "#FFFFFF",
                    borderRadius: 9999,
                    bgcolor: "rgba(255,255,255,0.05)",
                    "&:hover": {
                      borderColor: "#FFFFFF",
                      bgcolor: "rgba(255,255,255,0.12)",
                    },
                  }}
                >
                  Explore Our Initiatives
                </Button>
              </Box>
            </Reveal>
          </Box>

          {/* RIGHT: Image showcase card */}
          <Box sx={{ display: "block", mt: { xs: 5, lg: 0 }, minWidth: 0, width: "100%", maxWidth: "100%" }}>
            <Reveal delay={0.3} direction="left" scale>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  borderRadius: 5,
                  overflow: "hidden",
                  boxShadow: "0 24px 64px rgba(0,0,0,0.4)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  bgcolor: "#001B5C",
                }}
              >
                {/* Main photo */}
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: 240, sm: 320, md: 380, lg: 440, xl: 480 },
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src="/images/gallery/ramzan-food-kit.png"
                    alt="Warsia Trust humanitarian community outreach in Vijayapura"
                    fill
                    priority
                    sizes="(max-width: 1200px) 100vw, 600px"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center 20%",
                    }}
                  />
                  {/* Gradient overlay */}
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(0,27,92,0.08) 0%, rgba(0,27,92,0.75) 100%)",
                    }}
                  />

                  {/* Top badge */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: { xs: 12, sm: 16 },
                      right: { xs: 12, sm: 16 },
                      display: "flex",
                      alignItems: "center",
                      gap: 0.8,
                      bgcolor: "rgba(255,255,255,0.95)",
                      px: { xs: 1.4, sm: 1.8 },
                      py: 0.6,
                      borderRadius: 9999,
                      boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
                    }}
                  >
                    <VerifiedIcon sx={{ color: "#F27501", fontSize: { xs: 14, sm: 16 } }} />
                    <Typography
                      sx={{
                        fontWeight: 800,
                        color: "#002887",
                        fontSize: { xs: "0.65rem", sm: "0.72rem" },
                        letterSpacing: "0.04em",
                      }}
                    >
                      DARPHAN CERTIFIED NGO
                    </Typography>
                  </Box>

                  {/* Bottom info */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      px: { xs: 2, sm: 3 },
                      py: { xs: 1.8, sm: 2.5 },
                      bgcolor: "rgba(0,27,92,0.92)",
                      backdropFilter: "blur(12px)",
                      borderTop: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#F27501",
                        fontWeight: 800,
                        fontSize: "0.68rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        mb: 0.4,
                      }}
                    >
                      Vijayapura Community Initiative
                    </Typography>
                    <Typography
                      sx={{
                        color: "#FFFFFF",
                        fontWeight: 700,
                        fontSize: { xs: "0.92rem", sm: "1rem" },
                        lineHeight: 1.3,
                      }}
                    >
                      {siteConfig.president}
                    </Typography>
                    <Typography
                      sx={{ color: "rgba(255,255,255,0.7)", fontSize: { xs: "0.75rem", sm: "0.82rem" }, lineHeight: 1.4 }}
                    >
                      President, Warsia Educational & Social Development Trust
                    </Typography>
                  </Box>
                </Box>

                {/* Initiative pillars */}
                <Box sx={{ p: { xs: 2, sm: 2.5 }, bgcolor: "rgba(0,20,80,0.8)" }}>
                  <Typography
                    sx={{
                      color: "#F27501",
                      fontWeight: 800,
                      fontSize: "0.68rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      mb: 1.5,
                    }}
                  >
                    Core Pillars of Service
                  </Typography>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    {[
                      {
                        icon: <MosqueIcon sx={{ color: "#81C784", fontSize: 18 }} />,
                        alt: <TempleHinduIcon sx={{ color: "#FFB74D", fontSize: 18 }} />,
                        label: "Religious Harmony Honorarium",
                        sub: "Equal monthly support: Masjid Imams & Temple Pandits",
                        bg: "rgba(0,40,135,0.5)",
                      },
                      {
                        icon: <BloodtypeIcon sx={{ color: "#FF8A80", fontSize: 18 }} />,
                        label: "Emergency Blood Network",
                        sub: "Voluntary donors serving Vijayapura hospitals",
                        bg: "rgba(198,40,40,0.2)",
                      },
                      {
                        icon: <SchoolIcon sx={{ color: "#81C784", fontSize: 18 }} />,
                        label: "Education & Social Welfare",
                        sub: "Schooling support, youth mentoring & community relief",
                        bg: "rgba(0,96,0,0.25)",
                      },
                    ].map((pillar, i) => (
                      <Box
                        key={i}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1.5,
                          p: { xs: 1.1, sm: 1.4 },
                          borderRadius: 2.5,
                          bgcolor: pillar.bg,
                          border: "1px solid rgba(255,255,255,0.08)",
                        }}
                      >
                        <Box
                          sx={{
                            width: { xs: 32, sm: 36 },
                            height: { xs: 32, sm: 36 },
                            borderRadius: 2,
                            bgcolor: "rgba(255,255,255,0.1)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 0.3,
                            flexShrink: 0,
                          }}
                        >
                          {pillar.icon}
                          {pillar.alt}
                        </Box>
                        <Box sx={{ minWidth: 0, flexGrow: 1 }}>
                          <Typography
                            sx={{
                              color: "#FFFFFF",
                              fontWeight: 700,
                              fontSize: { xs: "0.78rem", sm: "0.82rem" },
                              lineHeight: 1.25,
                              wordBreak: "break-word",
                            }}
                          >
                            {pillar.label}
                          </Typography>
                          <Typography
                            sx={{
                              color: "rgba(255,255,255,0.65)",
                              fontSize: { xs: "0.68rem", sm: "0.72rem" },
                              lineHeight: 1.4,
                              wordBreak: "break-word",
                            }}
                          >
                            {pillar.sub}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Reveal>
          </Box>
        </Box>

        {/* Scroll indicator */}
        <Reveal delay={1} direction="up">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mt: { xs: 6, md: 4 },
              mb: { xs: 3, md: 0 },
              opacity: 0.7,
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                fontSize: "0.65rem",
                color: "rgba(255,255,255,0.65)",
                mb: 1,
              }}
            >
              Scroll to Explore
            </Typography>
            <Box
              sx={{
                width: 22,
                height: 36,
                borderRadius: 11,
                border: "2px solid rgba(255,255,255,0.35)",
                display: "flex",
                justifyContent: "center",
                pt: 1,
              }}
            >
              <motion.div
                animate={{ y: [0, 10, 0], opacity: [0.7, 0.2, 0.7] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
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
