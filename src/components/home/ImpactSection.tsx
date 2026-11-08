"use client";

import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { siteConfig } from "@/config/site";
import SectionHeading from "@/components/common/SectionHeading";
import AnimatedSection from "@/components/common/AnimatedSection";
import {
  VerifiedIcon,
  SecurityIcon,
  BalanceIcon,
  VolunteerActivismIcon,
} from "@/components/common/Icons";

const trustCommitments = [
  {
    icon: <VerifiedIcon sx={{ fontSize: 36, color: "warning.main" }} />,
    title: "Government Registered",
    highlight: `Darphan ID: ${siteConfig.darphanId}`,
    desc: "Officially registered and recognized under NGO Darphan, Government of India, adhering strictly to public trust compliance.",
  },
  {
    icon: <BalanceIcon sx={{ fontSize: 36, color: "secondary.main" }} />,
    title: "Unconditional Religious Equality",
    highlight: "Equal Imam & Pandit Support",
    desc: "Monthly financial assistance provided with absolute parity to both Masjid Imams and Temple Pandits in Vijayapura.",
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 36, color: "primary.main" }} />,
    title: "100% Ethical & Transparent",
    highlight: "Zero Commercial Bias",
    desc: "We do not publish fabricated statistics. All resources are channeled directly to verified community beneficiaries.",
  },
  {
    icon: <VolunteerActivismIcon sx={{ fontSize: 36, color: "warning.main" }} />,
    title: "Grassroots Humanitarian Action",
    highlight: "Vijayapura Centric",
    desc: "Deeply entrenched in the local community of Vijayapura (Bijapur), addressing immediate human needs on the ground.",
  },
];

export default function ImpactSection() {
  // Configurable metrics filter: only display verified metrics
  const verifiedMetrics = siteConfig.metrics.filter((m) => m.isVerified);

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "#001B5C",
        color: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <AnimatedSection>
          <SectionHeading
            badge="Transparency & Trust"
            badgeColor="warning"
            title="Our Commitment to Society."
            subtitle="Built on accountability, religious harmony, and genuine humanitarian service. We hold ourselves to the highest standards of integrity."
            light
          />
        </AnimatedSection>

        {/* If verified metrics exist, show them */}
        {verifiedMetrics.length > 0 && (
          <Grid container spacing={3} sx={{ mb: 6 }}>
            {verifiedMetrics.map((metric, idx) => (
              <Grid item xs={6} md={3} key={metric.id}>
                <AnimatedSection delay={idx * 0.1}>
                  <Box
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      bgcolor: "rgba(255, 255, 255, 0.08)",
                      textAlign: "center",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 900,
                        color: "warning.main",
                        fontSize: { xs: "2rem", md: "2.5rem" },
                      }}
                    >
                      {metric.value}
                      {metric.suffix}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#FFFFFF", fontWeight: 700, mt: 0.5 }}
                    >
                      {metric.label}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: "rgba(255, 255, 255, 0.7)", mt: 1, display: "block" }}
                    >
                      {metric.description}
                    </Typography>
                  </Box>
                </AnimatedSection>
              </Grid>
            ))}
          </Grid>
        )}

        {/* 4 Pillars of Trust & Integrity Cards */}
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {trustCommitments.map((item, idx) => (
            <Grid item xs={12} sm={6} md={3} key={item.title}>
              <AnimatedSection delay={idx * 0.1}>
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 3.5,
                    bgcolor: "rgba(255, 255, 255, 0.06)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      bgcolor: "rgba(255, 255, 255, 0.1)",
                      transform: "translateY(-4px)",
                      borderColor: "rgba(242, 117, 1, 0.4)",
                    },
                  }}
                >
                  <Box sx={{ mb: 2 }}>{item.icon}</Box>

                  <Typography
                    variant="h6"
                    sx={{
                      color: "#FFFFFF",
                      fontWeight: 800,
                      fontSize: "1.1rem",
                      mb: 0.8,
                      lineHeight: 1.3,
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    variant="caption"
                    sx={{
                      color: "warning.main",
                      fontWeight: 700,
                      display: "block",
                      letterSpacing: "0.02em",
                      mb: 1.5,
                    }}
                  >
                    {item.highlight}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "rgba(255, 255, 255, 0.75)",
                      lineHeight: 1.6,
                      fontSize: "0.88rem",
                      flexGrow: 1,
                    }}
                  >
                    {item.desc}
                  </Typography>
                </Card>
              </AnimatedSection>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
