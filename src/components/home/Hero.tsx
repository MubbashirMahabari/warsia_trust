"use client";

import React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import { siteConfig } from "@/config/site";
import {
  ArrowForwardIcon,
  WhatsAppIcon,
  VerifiedIcon,
  Diversity3Icon,
} from "@/components/common/Icons";
import { getWhatsAppLink } from "@/lib/utils";
import AnimatedSection from "@/components/common/AnimatedSection";

export default function Hero() {
  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "#001B5C",
        color: "#FFFFFF",
        overflow: "hidden",
        pt: { xs: 8, md: 12 },
        pb: { xs: 9, md: 14 },
        backgroundImage: `
          radial-gradient(circle at 15% 25%, rgba(0, 96, 0, 0.35) 0%, transparent 45%),
          radial-gradient(circle at 85% 75%, rgba(242, 117, 1, 0.22) 0%, transparent 45%),
          linear-gradient(180deg, #001B5C 0%, #002887 100%)
        `,
      }}
    >
      {/* Subtle geometric pattern overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.04,
          backgroundImage: `radial-gradient(#FFFFFF 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          <Grid item xs={12} md={8} lg={7}>
            <AnimatedSection>
              {/* Trust & Location Badges */}
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: 1.2,
                  mb: 3,
                }}
              >
                <Chip
                  icon={<VerifiedIcon sx={{ fontSize: "16px !important", color: "#FFFFFF !important" }} />}
                  label={`Darphan ID: ${siteConfig.darphanId}`}
                  sx={{
                    bgcolor: "rgba(255, 255, 255, 0.12)",
                    backdropFilter: "blur(8px)",
                    color: "#FFFFFF",
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                />
                <Chip
                  label="Vijayapura, Karnataka"
                  sx={{
                    bgcolor: "rgba(242, 117, 1, 0.2)",
                    color: "warning.light",
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    border: "1px solid rgba(242, 117, 1, 0.4)",
                  }}
                />
              </Box>

              {/* Main Heading */}
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.3rem", sm: "3.2rem", md: "3.8rem" },
                  fontWeight: 900,
                  lineHeight: 1.1,
                  color: "#FFFFFF",
                  letterSpacing: "-0.025em",
                  mb: 2.5,
                }}
              >
                Serving Humanity.{" "}
                <Box
                  component="span"
                  sx={{
                    color: "warning.main",
                    display: { xs: "inline", sm: "inline-block" },
                  }}
                >
                  Strengthening
                </Box>{" "}
                Communities.
              </Typography>

              {/* Supporting Content */}
              <Typography
                variant="h6"
                component="p"
                sx={{
                  color: "rgba(255, 255, 255, 0.88)",
                  fontSize: { xs: "1.05rem", md: "1.2rem" },
                  lineHeight: 1.6,
                  fontWeight: 400,
                  maxWidth: 620,
                  mb: 3,
                }}
              >
                Building a better society through education, social development,
                humanitarian support, and unity beyond boundaries.
              </Typography>

              {/* Official Slogan Banner */}
              <Box
                sx={{
                  p: 2,
                  px: 2.5,
                  borderRadius: 3,
                  bgcolor: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  backdropFilter: "blur(10px)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1.5,
                  mb: 4.5,
                  maxWidth: "100%",
                }}
              >
                <Diversity3Icon sx={{ color: "warning.main", fontSize: 26, flexShrink: 0 }} />
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

              {/* Action Buttons */}
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Button
                  component={Link}
                  href="/initiatives"
                  variant="contained"
                  color="warning"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    px: 3.5,
                    py: 1.5,
                    fontWeight: 800,
                    fontSize: "1rem",
                    bgcolor: "warning.main",
                    color: "#FFFFFF",
                    boxShadow: "0 8px 24px rgba(242, 117, 1, 0.35)",
                    "&:hover": {
                      bgcolor: "warning.dark",
                    },
                  }}
                >
                  Explore Our Initiatives
                </Button>

                <Button
                  component="a"
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  size="large"
                  startIcon={<WhatsAppIcon sx={{ fontSize: 22 }} />}
                  sx={{
                    px: 3,
                    py: 1.4,
                    fontWeight: 700,
                    fontSize: "1rem",
                    borderColor: "rgba(255, 255, 255, 0.5)",
                    color: "#FFFFFF",
                    backdropFilter: "blur(6px)",
                    "&:hover": {
                      borderColor: "#FFFFFF",
                      bgcolor: "rgba(255, 255, 255, 0.1)",
                    },
                  }}
                >
                  Join Our Mission
                </Button>
              </Box>
            </AnimatedSection>
          </Grid>

          {/* Right Column: Hero Focus Card */}
          <Grid item xs={12} md={4} lg={5}>
            <AnimatedSection delay={0.2}>
              <Box
                sx={{
                  p: { xs: 3, sm: 4 },
                  borderRadius: 4,
                  bgcolor: "rgba(255, 255, 255, 0.06)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  backdropFilter: "blur(14px)",
                  boxShadow: "0 20px 50px rgba(0, 0, 0, 0.25)",
                }}
              >
                <Typography
                  variant="overline"
                  sx={{
                    color: "warning.main",
                    fontWeight: 800,
                    letterSpacing: "0.08em",
                    fontSize: "0.78rem",
                    display: "block",
                    mb: 1,
                  }}
                >
                  PILLARS OF OUR MISSION
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    color: "#FFFFFF",
                    fontWeight: 800,
                    lineHeight: 1.3,
                    mb: 3,
                  }}
                >
                  Equal Reverence. Selfless Service.
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2.5,
                      bgcolor: "rgba(0, 40, 135, 0.5)",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                    }}
                  >
                    <Typography variant="subtitle2" sx={{ color: "warning.light", fontWeight: 700 }}>
                      Religious Harmony
                    </Typography>
                    <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "0.85rem", mt: 0.5 }}>
                      Monthly financial assistance with equal priority for Masjid Imams &amp; Temple Pandits.
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2.5,
                      bgcolor: "rgba(198, 40, 40, 0.2)",
                      border: "1px solid rgba(198, 40, 40, 0.3)",
                    }}
                  >
                    <Typography variant="subtitle2" sx={{ color: "#FF8A80", fontWeight: 700 }}>
                      Emergency Blood Support
                    </Typography>
                    <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "0.85rem", mt: 0.5 }}>
                      Mobilizing voluntary blood donors to save lives during hospital emergencies in Vijayapura.
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2.5,
                      bgcolor: "rgba(0, 96, 0, 0.35)",
                      border: "1px solid rgba(0, 96, 0, 0.4)",
                    }}
                  >
                    <Typography variant="subtitle2" sx={{ color: "#81C784", fontWeight: 700 }}>
                      Education &amp; Social Welfare
                    </Typography>
                    <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "0.85rem", mt: 0.5 }}>
                      Empowering student learning, hunger relief food kits, and community welfare.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </AnimatedSection>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
