"use client";

import React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { siteConfig } from "@/config/site";
import SectionHeading from "@/components/common/SectionHeading";
import AnimatedSection from "@/components/common/AnimatedSection";
import {
  ArrowForwardIcon,
  CheckCircleIcon,
  VerifiedIcon,
  Diversity3Icon,
} from "@/components/common/Icons";

const valuesList = [
  {
    title: "Humanity",
    desc: "Placing compassion and human welfare above all distinctions of caste, creed, or background.",
  },
  {
    title: "Equality",
    desc: "Offering balanced, non-discriminatory assistance to all religious and social communities.",
  },
  {
    title: "Compassion",
    desc: "Responding with empathy to those who suffer medical emergencies, poverty, or hardship.",
  },
  {
    title: "Unity",
    desc: "Bridging diverse communities to foster mutual trust, social harmony, and peaceful coexistence.",
  },
  {
    title: "Education",
    desc: "Fostering learning opportunities that uplift underprivileged youth and secure a brighter tomorrow.",
  },
  {
    title: "Social Responsibility",
    desc: "Recognizing that true faith is realized through active, sincere service to society.",
  },
];

export default function AboutSection() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#FFFFFF" }}>
      <Container maxWidth="lg">
        <AnimatedSection>
          <SectionHeading
            badge="About Warsia Trust"
            badgeColor="primary"
            title="Together, We Can Make a Difference."
            subtitle="Rooted in Vijayapura, Karnataka, our trust is dedicated to unconditional humanitarian assistance, religious harmony, and social progress."
          />
        </AnimatedSection>

        {/* Narrative & President Box */}
        <Grid container spacing={{ xs: 4, md: 6 }} sx={{ mb: 7 }} alignItems="center">
          <Grid item xs={12} md={7}>
            <AnimatedSection delay={0.1}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  color: "primary.main",
                  fontSize: { xs: "1.4rem", md: "1.75rem" },
                  mb: 2.5,
                  lineHeight: 1.3,
                }}
              >
                Dedicated to Uplifting Society Beyond Every Divide
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "text.primary", mb: 2, fontSize: "1.05rem", lineHeight: 1.8 }}
              >
                <strong>{siteConfig.name}</strong> was founded on the fundamental
                truth that humanity has no boundaries. Headquartered in Vijayapura
                (Bijapur), Karnataka, the trust actively serves vulnerable individuals,
                strengthens religious harmony, and promotes educational growth.
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 3, fontSize: "1rem", lineHeight: 1.75 }}
              >
                In a society enriched by diverse faiths and cultural heritage, we believe
                that uplifting the guardians of spiritual life — both Masjid Imams and
                Temple Pandits — with equal dignity, running life-saving blood donation
                campaigns, and assisting students in need represents the true essence
                of civic service.
              </Typography>

              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Button
                  component={Link}
                  href="/about"
                  variant="outlined"
                  color="primary"
                  endIcon={<ArrowForwardIcon />}
                  sx={{ fontWeight: 700 }}
                >
                  Read Trust Story &amp; Vision
                </Button>
                <Button
                  component={Link}
                  href="/contact"
                  variant="text"
                  color="primary"
                  sx={{ fontWeight: 700 }}
                >
                  Contact Trust Office
                </Button>
              </Box>
            </AnimatedSection>
          </Grid>

          {/* Right Column: Official Leadership & Darphan Card */}
          <Grid item xs={12} md={5}>
            <AnimatedSection delay={0.2}>
              <Card
                sx={{
                  borderRadius: 4,
                  bgcolor: "background.paper",
                  border: "2px solid #E2E8F0",
                  p: { xs: 3, sm: 4 },
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: 120,
                    height: 120,
                    bgcolor: "rgba(0, 40, 135, 0.04)",
                    borderRadius: "0 0 0 100%",
                  }}
                />

                <Box sx={{ display: "flex", alignItems: "center", gap: 1.2, mb: 2 }}>
                  <VerifiedIcon sx={{ color: "warning.main", fontSize: 26 }} />
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 800,
                      color: "primary.main",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    GOVERNMENT RECOGNITION
                  </Typography>
                </Box>

                <Typography variant="h5" sx={{ fontWeight: 800, color: "primary.main", mb: 0.5 }}>
                  Darphan ID
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: "secondary.dark",
                    fontFamily: "monospace",
                    letterSpacing: "0.05em",
                    mb: 3,
                  }}
                >
                  {siteConfig.darphanId}
                </Typography>

                <Box
                  sx={{
                    p: 2.5,
                    borderRadius: 3,
                    bgcolor: "#FFFFFF",
                    border: "1px solid #E2E8F0",
                    mb: 3,
                  }}
                >
                  <Typography variant="caption" sx={{ color: "text.secondary", fontWeight: 600 }}>
                    TRUST LEADERSHIP
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 800, color: "primary.main", mt: 0.5 }}>
                    {siteConfig.president}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "secondary.main", fontWeight: 600 }}>
                    President
                  </Typography>
                </Box>

                <Typography
                  variant="body2"
                  sx={{
                    fontStyle: "italic",
                    color: "primary.dark",
                    fontWeight: 600,
                    borderLeft: "3px solid #F27501",
                    pl: 1.5,
                  }}
                >
                  &ldquo;{siteConfig.slogan}&rdquo;
                </Typography>
              </Card>
            </AnimatedSection>
          </Grid>
        </Grid>

        {/* Core Values Grid */}
        <AnimatedSection delay={0.3}>
          <Box sx={{ mt: 6 }}>
            <Box sx={{ textAlign: "center", mb: 4 }}>
              <Typography variant="overline" sx={{ color: "warning.main", fontWeight: 800, letterSpacing: "0.08em" }}>
                GUIDING PRINCIPLES
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 800, color: "primary.main", fontSize: { xs: "1.5rem", md: "2rem" } }}>
                Our Core Values
              </Typography>
            </Box>

            <Grid container spacing={3}>
              {valuesList.map((val) => (
                <Grid item xs={12} sm={6} md={4} key={val.title}>
                  <Card
                    sx={{
                      height: "100%",
                      borderRadius: 3,
                      p: 2.5,
                      border: "1px solid #E2E8F0",
                      bgcolor: "background.paper",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: "0 10px 25px rgba(0, 40, 135, 0.08)",
                        borderColor: "primary.main",
                      },
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
                      <CheckCircleIcon sx={{ color: "secondary.main", fontSize: 24 }} />
                      <Typography variant="h6" sx={{ fontWeight: 800, color: "primary.main", fontSize: "1.1rem" }}>
                        {val.title}
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.6 }}>
                      {val.desc}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </AnimatedSection>
      </Container>
    </Box>
  );
}
