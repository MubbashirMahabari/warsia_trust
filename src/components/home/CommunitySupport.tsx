"use client";

import React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import SectionHeading from "@/components/common/SectionHeading";
import AnimatedSection from "@/components/common/AnimatedSection";
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
        py: { xs: 8, md: 12 },
        bgcolor: "#FFFFFF",
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <AnimatedSection>
          <SectionHeading
            badge="Religious Harmony & Equality"
            badgeColor="primary"
            title="Respecting Faith. Supporting Those Who Serve."
            subtitle="We believe that humanity goes beyond boundaries. Through monthly financial assistance for Masjid Imams and Temple Pandits, our trust aims to recognize and support those who dedicate their lives to serving their respective communities."
          />
        </AnimatedSection>

        {/* Central Harmony Quote Pill */}
        <AnimatedSection delay={0.1}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: 5,
            }}
          >
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.5,
                bgcolor: "rgba(0, 40, 135, 0.05)",
                border: "1px solid rgba(0, 40, 135, 0.15)",
                borderRadius: 50,
                py: 1,
                px: { xs: 2.5, sm: 3.5 },
                maxWidth: 720,
                textAlign: "center",
              }}
            >
              <Diversity3Icon sx={{ color: "warning.main", fontSize: 22, flexShrink: 0 }} />
              <Typography
                variant="body2"
                sx={{
                  color: "primary.main",
                  fontWeight: 700,
                  fontSize: { xs: "0.85rem", sm: "0.95rem" },
                }}
              >
                Equal Respect • Equal Dignity • Equal Monthly Assistance
              </Typography>
            </Box>
          </Box>
        </AnimatedSection>

        {/* Two Balanced Equal Cards */}
        <Grid container spacing={{ xs: 4, md: 5 }} alignItems="stretch">
          {/* Card 1: Masjid Imams */}
          <Grid item xs={12} md={6}>
            <AnimatedSection delay={0.2} style={{ height: "100%" }}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 4,
                  border: "2px solid #E2E8F0",
                  bgcolor: "#FFFFFF",
                  boxShadow: "0 8px 30px rgba(0, 40, 135, 0.06)",
                  transition: "all 0.35s ease",
                  position: "relative",
                  overflow: "hidden",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 18px 45px rgba(0, 96, 0, 0.15)",
                    borderColor: "secondary.main",
                  },
                }}
              >
                {/* Header Color Accent: Trust Green */}
                <Box sx={{ height: 8, bgcolor: "secondary.main", width: "100%" }} />

                <CardContent
                  sx={{
                    p: { xs: 3.5, sm: 4.5 },
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 3,
                    }}
                  >
                    <Box
                      sx={{
                        width: 68,
                        height: 68,
                        borderRadius: 3.5,
                        bgcolor: "rgba(0, 96, 0, 0.08)",
                        border: "1px solid rgba(0, 96, 0, 0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <MosqueIcon sx={{ fontSize: 36, color: "secondary.main" }} />
                    </Box>

                    <Chip
                      label="Community Guardian"
                      size="small"
                      sx={{
                        bgcolor: "rgba(0, 96, 0, 0.1)",
                        color: "secondary.dark",
                        fontWeight: 700,
                        fontSize: "0.75rem",
                      }}
                    />
                  </Box>

                  <Typography
                    variant="h4"
                    component="h3"
                    sx={{
                      fontWeight: 800,
                      color: "primary.main",
                      fontSize: { xs: "1.45rem", sm: "1.7rem" },
                      lineHeight: 1.25,
                      mb: 2,
                    }}
                  >
                    Supporting Masjid Imams
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "text.secondary",
                      lineHeight: 1.7,
                      fontSize: "1rem",
                      mb: 3,
                    }}
                  >
                    Providing monthly financial assistance to Masjid Imams in
                    recognition of their dedication and service to their
                    communities.
                  </Typography>

                  {/* Highlights */}
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, mb: 4, flexGrow: 1 }}>
                    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.2 }}>
                      <CheckCircleIcon sx={{ color: "secondary.main", fontSize: 20, mt: 0.3 }} />
                      <Typography variant="body2" sx={{ color: "text.primary", fontWeight: 600 }}>
                        Direct monthly financial honorarium
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.2 }}>
                      <CheckCircleIcon sx={{ color: "secondary.main", fontSize: 20, mt: 0.3 }} />
                      <Typography variant="body2" sx={{ color: "text.primary", fontWeight: 600 }}>
                        Honoring moral leadership and guidance
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.2 }}>
                      <CheckCircleIcon sx={{ color: "secondary.main", fontSize: 20, mt: 0.3 }} />
                      <Typography variant="body2" sx={{ color: "text.primary", fontWeight: 600 }}>
                        Promoting mutual respect &amp; community harmony
                      </Typography>
                    </Box>
                  </Box>

                  <Button
                    component={Link}
                    href="/initiatives/masjid-imam-support"
                    variant="contained"
                    color="secondary"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      py: 1.4,
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      bgcolor: "secondary.main",
                      "&:hover": {
                        bgcolor: "secondary.dark",
                      },
                    }}
                  >
                    Learn About Imam Support
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          </Grid>

          {/* Card 2: Temple Pandits */}
          <Grid item xs={12} md={6}>
            <AnimatedSection delay={0.3} style={{ height: "100%" }}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 4,
                  border: "2px solid #E2E8F0",
                  bgcolor: "#FFFFFF",
                  boxShadow: "0 8px 30px rgba(0, 40, 135, 0.06)",
                  transition: "all 0.35s ease",
                  position: "relative",
                  overflow: "hidden",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 18px 45px rgba(242, 117, 1, 0.2)",
                    borderColor: "warning.main",
                  },
                }}
              >
                {/* Header Color Accent: Saffron Orange */}
                <Box sx={{ height: 8, bgcolor: "warning.main", width: "100%" }} />

                <CardContent
                  sx={{
                    p: { xs: 3.5, sm: 4.5 },
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 3,
                    }}
                  >
                    <Box
                      sx={{
                        width: 68,
                        height: 68,
                        borderRadius: 3.5,
                        bgcolor: "rgba(242, 117, 1, 0.08)",
                        border: "1px solid rgba(242, 117, 1, 0.25)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <TempleHinduIcon sx={{ fontSize: 36, color: "warning.main" }} />
                    </Box>

                    <Chip
                      label="Community Guardian"
                      size="small"
                      sx={{
                        bgcolor: "rgba(242, 117, 1, 0.12)",
                        color: "warning.dark",
                        fontWeight: 700,
                        fontSize: "0.75rem",
                      }}
                    />
                  </Box>

                  <Typography
                    variant="h4"
                    component="h3"
                    sx={{
                      fontWeight: 800,
                      color: "primary.main",
                      fontSize: { xs: "1.45rem", sm: "1.7rem" },
                      lineHeight: 1.25,
                      mb: 2,
                    }}
                  >
                    Supporting Temple Pandits
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "text.secondary",
                      lineHeight: 1.7,
                      fontSize: "1rem",
                      mb: 3,
                    }}
                  >
                    Providing monthly financial assistance to Temple Pandits in
                    recognition of their dedication and service to their
                    communities.
                  </Typography>

                  {/* Highlights */}
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, mb: 4, flexGrow: 1 }}>
                    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.2 }}>
                      <CheckCircleIcon sx={{ color: "warning.main", fontSize: 20, mt: 0.3 }} />
                      <Typography variant="body2" sx={{ color: "text.primary", fontWeight: 600 }}>
                        Direct monthly financial honorarium
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.2 }}>
                      <CheckCircleIcon sx={{ color: "warning.main", fontSize: 20, mt: 0.3 }} />
                      <Typography variant="body2" sx={{ color: "text.primary", fontWeight: 600 }}>
                        Honoring spiritual devotion &amp; cultural heritage
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.2 }}>
                      <CheckCircleIcon sx={{ color: "warning.main", fontSize: 20, mt: 0.3 }} />
                      <Typography variant="body2" sx={{ color: "text.primary", fontWeight: 600 }}>
                        Championing interfaith unity &amp; brotherhood
                      </Typography>
                    </Box>
                  </Box>

                  <Button
                    component={Link}
                    href="/initiatives/temple-pandit-support"
                    variant="contained"
                    color="warning"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      py: 1.4,
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      bgcolor: "warning.main",
                      color: "#FFFFFF",
                      "&:hover": {
                        bgcolor: "warning.dark",
                      },
                    }}
                  >
                    Learn About Pandit Support
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
