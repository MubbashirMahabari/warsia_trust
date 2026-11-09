"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Reveal from "@/components/animations/Reveal";
import TextReveal from "@/components/animations/TextReveal";
import {
  MosqueIcon,
  TempleHinduIcon,
  ArrowForwardIcon,
  CheckCircleIcon,
  Diversity3Icon,
} from "@/components/common/Icons";

export default function CommunitySupport() {
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
        {/* Section Heading per prompt requirement */}
        <Reveal>
          <Box
            sx={{
              textAlign: "center",
              maxWidth: 840,
              mx: "auto",
              mb: { xs: 6, md: 8 },
            }}
          >
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.2,
                py: 0.8,
                px: 2.2,
                borderRadius: 9999,
                bgcolor: "rgba(0, 40, 135, 0.06)",
                border: "1px solid rgba(0, 40, 135, 0.12)",
                mb: 2.5,
              }}
            >
              <Diversity3Icon sx={{ color: "warning.main", fontSize: 20 }} />
              <Typography
                variant="overline"
                sx={{
                  color: "primary.main",
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                  lineHeight: 1,
                }}
              >
                RELIGIOUS HARMONY &amp; EQUALITY
              </Typography>
            </Box>

            <TextReveal
              text="Different Paths. One Humanity."
              as="h2"
              delay={0.1}
              stagger={0.05}
              highlightWord="Humanity"
              highlightColor="#002887"
              style={{
                fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
                fontWeight: 900,
                color: "#001B5C",
                letterSpacing: "-0.025em",
                lineHeight: 1.15,
                marginTop: "8px",
                marginBottom: "16px",
              }}
            />

            <Typography
              variant="subtitle1"
              sx={{
                color: "text.secondary",
                fontSize: { xs: "1.05rem", sm: "1.18rem" },
                lineHeight: 1.75,
                maxWidth: 760,
                mx: "auto",
              }}
            >
              Faith may guide different paths, but humanity brings us together.
              Our trust believes in supporting those who serve their communities
              with dedication and compassion.
            </Typography>

            {/* Central Harmony Quote Pill */}
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 2,
                mt: 3.5,
                py: 1,
                px: 3,
                borderRadius: 9999,
                bgcolor: "#F7F8FC",
                border: "1px solid #E2E8F0",
              }}
            >
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  bgcolor: "#006000",
                }}
              />
              <Typography
                variant="caption"
                sx={{
                  color: "primary.main",
                  fontWeight: 800,
                  fontSize: "0.85rem",
                  letterSpacing: "0.04em",
                }}
              >
                Equal Respect • Equal Dignity • Equal Monthly Assistance
              </Typography>
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  bgcolor: "#F27501",
                }}
              />
            </Box>
          </Box>
        </Reveal>

        {/* Balanced Split Layout: Exactly Equal Dimensions, Typography, and Prominence */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "minmax(0, 1fr)", md: "repeat(2, minmax(0, 1fr))" },
            gap: { xs: 4, md: 5 },
            alignItems: "stretch",
            width: "100%",
            maxWidth: "100%",
          }}
        >
          {/* Panel 1: MASJID IMAMS */}
          <Reveal delay={0.2} direction="up" style={{ height: "100%" }}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: 4,
                overflow: "hidden",
                border: "1px solid #E2E8F0",
                bgcolor: "#FFFFFF",
                boxShadow: "0 8px 30px rgba(0, 96, 0, 0.08)",
                transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 20px 45px rgba(0, 96, 0, 0.15)",
                  borderColor: "#006000",
                },
              }}
            >
              {/* Clean Top Accent Line (Fixes warped arch glitch) */}
              <Box sx={{ height: 6, bgcolor: "#006000", width: "100%" }} />

              <Box sx={{ p: { xs: 3.5, sm: 4.5 }, display: "flex", flexDirection: "column", flexGrow: 1 }}>
                {/* Visual Header Image Container: Equal Dimensions */}
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: 200, sm: 230 },
                    borderRadius: 3,
                    overflow: "hidden",
                    mb: 3.5,
                    bgcolor: "#001B5C",
                  }}
                >
                  <Image
                    src="/images/initiatives/masjid-support.svg"
                    alt="Masjid Imam Support illustration"
                    fill
                    sizes="(max-width: 768px) 100vw, 550px"
                    style={{ objectFit: "cover" }}
                  />

                  {/* Top Tag */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 14,
                      left: 14,
                      bgcolor: "rgba(0, 96, 0, 0.92)",
                      backdropFilter: "blur(8px)",
                      color: "#FFFFFF",
                      px: 1.8,
                      py: 0.6,
                      borderRadius: 9999,
                      fontWeight: 800,
                      fontSize: "0.75rem",
                      letterSpacing: "0.04em",
                    }}
                  >
                    GREEN HARMONY PILLAR
                  </Box>
                </Box>

                {/* Subheading & Title per prompt */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.2 }}>
                  <MosqueIcon sx={{ fontSize: 26, color: "#006000" }} />
                  <Typography
                    variant="overline"
                    sx={{
                      color: "#006000",
                      fontWeight: 800,
                      letterSpacing: "0.08em",
                      fontSize: "0.85rem",
                    }}
                  >
                    MASJID IMAMS
                  </Typography>
                </Box>

                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 900,
                    color: "primary.dark",
                    fontSize: { xs: "1.45rem", sm: "1.8rem" },
                    lineHeight: 1.25,
                    mb: 1.5,
                  }}
                >
                  Recognizing Dedication. Supporting Community Service.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.75,
                    fontSize: "1rem",
                    mb: 3.5,
                  }}
                >
                  Masjid Imams dedicate their days to spiritual guidance, moral
                  teachings, and peaceful leadership. Warsia Trust provides direct,
                  dignified monthly financial honorarium to acknowledge their selfless
                  service with the utmost respect.
                </Typography>

                {/* Feature checklist */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.6, mb: 4, flexGrow: 1 }}>
                  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.4 }}>
                    <CheckCircleIcon sx={{ color: "#006000", fontSize: 22, mt: 0.2, flexShrink: 0 }} />
                    <Typography variant="body2" sx={{ color: "text.primary", fontWeight: 700, fontSize: "0.95rem" }}>
                      Regular monthly financial honorarium deposited directly
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.4 }}>
                    <CheckCircleIcon sx={{ color: "#006000", fontSize: 22, mt: 0.2, flexShrink: 0 }} />
                    <Typography variant="body2" sx={{ color: "text.primary", fontWeight: 700, fontSize: "0.95rem" }}>
                      Acknowledging moral leadership, daily prayers &amp; community solace
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.4 }}>
                    <CheckCircleIcon sx={{ color: "#006000", fontSize: 22, mt: 0.2, flexShrink: 0 }} />
                    <Typography variant="body2" sx={{ color: "text.primary", fontWeight: 700, fontSize: "0.95rem" }}>
                      Absolute parity alongside Temple Pandit assistance
                    </Typography>
                  </Box>
                </Box>

                <Button
                  component={Link}
                  href="/initiatives/masjid-imam-support"
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    bgcolor: "#006000",
                    py: 1.6,
                    borderRadius: 3,
                    fontWeight: 800,
                    fontSize: "0.96rem",
                    boxShadow: "0 6px 18px rgba(0, 96, 0, 0.22)",
                    "&:hover": {
                      bgcolor: "#004500",
                      boxShadow: "0 8px 24px rgba(0, 96, 0, 0.35)",
                    },
                  }}
                >
                  Explore Masjid Imam Initiative
                </Button>
              </Box>
            </Box>
          </Reveal>

          {/* Panel 2: TEMPLE PANDITS */}
          <Reveal delay={0.3} direction="up" style={{ height: "100%" }}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: 4,
                overflow: "hidden",
                border: "1px solid #E2E8F0",
                bgcolor: "#FFFFFF",
                boxShadow: "0 8px 30px rgba(242, 117, 1, 0.08)",
                transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 20px 45px rgba(242, 117, 1, 0.18)",
                  borderColor: "#F27501",
                },
              }}
            >
              {/* Clean Top Accent Line (Fixes warped arch glitch) */}
              <Box sx={{ height: 6, bgcolor: "#F27501", width: "100%" }} />

              <Box sx={{ p: { xs: 3.5, sm: 4.5 }, display: "flex", flexDirection: "column", flexGrow: 1 }}>
                {/* Visual Header Image Container: Equal Dimensions */}
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: 200, sm: 230 },
                    borderRadius: 3,
                    overflow: "hidden",
                    mb: 3.5,
                    bgcolor: "#001B5C",
                  }}
                >
                  <Image
                    src="/images/initiatives/temple-support.svg"
                    alt="Temple Pandit Support illustration"
                    fill
                    sizes="(max-width: 768px) 100vw, 550px"
                    style={{ objectFit: "cover" }}
                  />

                  {/* Top Tag */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 14,
                      left: 14,
                      bgcolor: "rgba(242, 117, 1, 0.95)",
                      backdropFilter: "blur(8px)",
                      color: "#FFFFFF",
                      px: 1.8,
                      py: 0.6,
                      borderRadius: 9999,
                      fontWeight: 800,
                      fontSize: "0.75rem",
                      letterSpacing: "0.04em",
                    }}
                  >
                    SAFFRON HARMONY PILLAR
                  </Box>
                </Box>

                {/* Subheading & Title per prompt */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.2 }}>
                  <TempleHinduIcon sx={{ fontSize: 26, color: "#F27501" }} />
                  <Typography
                    variant="overline"
                    sx={{
                      color: "#C75F00",
                      fontWeight: 800,
                      letterSpacing: "0.08em",
                      fontSize: "0.85rem",
                    }}
                  >
                    TEMPLE PANDITS
                  </Typography>
                </Box>

                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 900,
                    color: "primary.dark",
                    fontSize: { xs: "1.45rem", sm: "1.8rem" },
                    lineHeight: 1.25,
                    mb: 1.5,
                  }}
                >
                  Respecting Devotion. Supporting Those Who Serve.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.75,
                    fontSize: "1rem",
                    mb: 3.5,
                  }}
                >
                  Temple Pandits uphold sacred rites, cultural wisdom, and spiritual
                  reverence in shrines across Vijayapura. Warsia Trust provides direct,
                  dignified monthly financial honorarium to honor their humble devotion
                  with equal esteem.
                </Typography>

                {/* Feature checklist */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.6, mb: 4, flexGrow: 1 }}>
                  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.4 }}>
                    <CheckCircleIcon sx={{ color: "#F27501", fontSize: 22, mt: 0.2, flexShrink: 0 }} />
                    <Typography variant="body2" sx={{ color: "text.primary", fontWeight: 700, fontSize: "0.95rem" }}>
                      Regular monthly financial honorarium deposited directly
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.4 }}>
                    <CheckCircleIcon sx={{ color: "#F27501", fontSize: 22, mt: 0.2, flexShrink: 0 }} />
                    <Typography variant="body2" sx={{ color: "text.primary", fontWeight: 700, fontSize: "0.95rem" }}>
                      Honoring cultural heritage, sacred devotion &amp; temple care
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.4 }}>
                    <CheckCircleIcon sx={{ color: "#F27501", fontSize: 22, mt: 0.2, flexShrink: 0 }} />
                    <Typography variant="body2" sx={{ color: "text.primary", fontWeight: 700, fontSize: "0.95rem" }}>
                      Absolute parity alongside Masjid Imam assistance
                    </Typography>
                  </Box>
                </Box>

                <Button
                  component={Link}
                  href="/initiatives/temple-pandit-support"
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    bgcolor: "#F27501",
                    color: "#FFFFFF",
                    py: 1.6,
                    borderRadius: 3,
                    fontWeight: 800,
                    fontSize: "0.96rem",
                    boxShadow: "0 6px 18px rgba(242, 117, 1, 0.25)",
                    "&:hover": {
                      bgcolor: "#C75F00",
                      boxShadow: "0 8px 24px rgba(242, 117, 1, 0.38)",
                    },
                  }}
                >
                  Explore Temple Pandit Initiative
                </Button>
              </Box>
            </Box>
          </Reveal>
        </Box>
      </Container>
    </Box>
  );
}