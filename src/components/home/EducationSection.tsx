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
import SectionHeading from "@/components/common/SectionHeading";
import AnimatedSection from "@/components/common/AnimatedSection";
import {
  SchoolIcon,
  ArrowForwardIcon,
  CheckCircleIcon,
  VerifiedIcon,
} from "@/components/common/Icons";

const educationalPillars = [
  {
    title: "School Enrollment & Retention",
    desc: "Motivating parents and guiding underprivileged families to ensure children remain in formal schooling without dropout.",
  },
  {
    title: "Basic Learning Guidance",
    desc: "Supporting foundational literacy, academic mentorship, and study habits for students across Vijayapura.",
  },
  {
    title: "Girls' Education Advocacy",
    desc: "Active community dialogue promoting equitable education for girls as the cornerstone of family empowerment.",
  },
  {
    title: "Values & Civic Responsibility",
    desc: "Instilling humanitarian ethics, mutual respect, discipline, and communal harmony in young minds.",
  },
];

export default function EducationSection() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#FFFFFF" }}>
      <Container maxWidth="lg">
        <AnimatedSection>
          <SectionHeading
            badge="Empowering Future Generations"
            badgeColor="primary"
            title="Education Today. A Better Tomorrow."
            subtitle="Education is one of the strongest foundations for building a better society. We aim to encourage educational development and create opportunities for communities."
          />
        </AnimatedSection>

        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center" sx={{ mb: 6 }}>
          <Grid item xs={12} md={6}>
            <AnimatedSection delay={0.1}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  color: "primary.main",
                  fontSize: { xs: "1.35rem", md: "1.7rem" },
                  mb: 2.5,
                  lineHeight: 1.3,
                }}
              >
                Nurturing Potential in Vijayapura&apos;s Youth
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "text.primary", lineHeight: 1.8, mb: 2.5, fontSize: "1.05rem" }}
              >
                At Warsia Educational &amp; Social Development Trust, we view education
                not merely as academic instruction, but as the supreme tool for human
                dignity, social mobility, and harmonious coexistence.
              </Typography>

              <Typography
                variant="body2"
                sx={{ color: "text.secondary", lineHeight: 1.7, mb: 3.5, fontSize: "0.95rem" }}
              >
                We work directly with neighborhood communities, encouraging parents to
                keep children in school, connecting youth with experienced mentors, and
                building an encouraging environment where every child feels valued and
                empowered.
              </Typography>

              <Button
                component={Link}
                href="/initiatives/education"
                variant="contained"
                color="primary"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  px: 3.5,
                  py: 1.3,
                  fontWeight: 700,
                  bgcolor: "primary.main",
                  "&:hover": {
                    bgcolor: "primary.dark",
                  },
                }}
              >
                Explore Educational Work
              </Button>
            </AnimatedSection>
          </Grid>

          {/* Right Column: 4 Educational Focus Cards */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={2.5}>
              {educationalPillars.map((pillar, i) => (
                <Grid item xs={12} sm={6} key={pillar.title}>
                  <AnimatedSection delay={0.15 + i * 0.1}>
                    <Card
                      sx={{
                        p: 2.5,
                        height: "100%",
                        borderRadius: 3,
                        border: "1px solid #E2E8F0",
                        bgcolor: "background.paper",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          borderColor: "primary.main",
                          transform: "translateY(-4px)",
                          boxShadow: "0 8px 24px rgba(0, 40, 135, 0.08)",
                        },
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
                        <SchoolIcon sx={{ color: "primary.main", fontSize: 26 }} />
                        <Typography variant="h6" sx={{ fontWeight: 800, color: "primary.main", fontSize: "1rem" }}>
                          {pillar.title}
                        </Typography>
                      </Box>
                      <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.6, fontSize: "0.88rem" }}>
                        {pillar.desc}
                      </Typography>
                    </Card>
                  </AnimatedSection>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
