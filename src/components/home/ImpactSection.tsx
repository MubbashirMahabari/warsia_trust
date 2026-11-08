"use client";

import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { siteConfig } from "@/config/site";
import Reveal from "@/components/animations/Reveal";
import TextReveal from "@/components/animations/TextReveal";
import {
  VerifiedIcon,
  SecurityIcon,
  BalanceIcon,
  VolunteerActivismIcon,
} from "@/components/common/Icons";

const verifiedPillars = [
  {
    icon: <VerifiedIcon sx={{ fontSize: 38, color: "warning.main" }} />,
    tag: "DARPHAN ACCREDITATION",
    title: "Government Registered",
    highlight: `ID: ${siteConfig.darphanId}`,
    desc: "Officially registered and recognized under NGO Darphan, Government of India, adhering strictly to public trust compliance and transparency standards.",
  },
  {
    icon: <BalanceIcon sx={{ fontSize: 38, color: "#81C784" }} />,
    tag: "RELIGIOUS HARMONY",
    title: "100% Religious Equality",
    highlight: "Equal Parity Assistance",
    desc: "Monthly financial assistance provided with identical priority and dignity to both Masjid Imams and Temple Pandits in Vijayapura.",
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 38, color: "#90CAF9" }} />,
    tag: "ZERO COMMERCIAL BIAS",
    title: "Ethical & Transparent",
    highlight: "Verified Beneficiaries",
    desc: "We strictly refrain from publishing unverified or fabricated figures. All community resources are channeled directly to genuine recipients on the ground.",
  },
  {
    icon: <VolunteerActivismIcon sx={{ fontSize: 38, color: "warning.main" }} />,
    tag: "VIJAYAPURA ROOTS",
    title: "Grassroots Action",
    highlight: "Direct Community Relief",
    desc: "Entrenched in the historical city of Vijayapura (Bijapur), addressing immediate needs through blood donation networks, education, and social relief.",
  },
];

export default function ImpactSection() {
  // Only display verified statistics if configured
  const verifiedStats = siteConfig.metrics.filter((m) => m.isVerified);

  return (
    <Box
      sx={{
        py: { xs: 9, md: 14 },
        bgcolor: "#001B5C", // Deep Navy
        color: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle modern ambient background gradient */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 10% 20%, rgba(0, 96, 0, 0.25) 0%, transparent 45%),
            radial-gradient(circle at 90% 80%, rgba(242, 117, 1, 0.2) 0%, transparent 45%),
            linear-gradient(180deg, #001B5C 0%, #002887 100%)
          `,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1, px: { xs: 2.5, sm: 4, md: 6, lg: 8 } }}>
        {/* Editorial Section Header */}
        <Reveal>
          <Box sx={{ textAlign: "center", maxWidth: 820, mx: "auto", mb: { xs: 6, md: 8 } }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.2,
                py: 0.8,
                px: 2.2,
                borderRadius: 9999,
                bgcolor: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                mb: 2.5,
              }}
            >
              <VerifiedIcon sx={{ color: "warning.main", fontSize: 18 }} />
              <Typography
                variant="overline"
                sx={{
                  color: "#FFFFFF",
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                  lineHeight: 1,
                }}
              >
                ACCOUNTABILITY &amp; INTEGRITY
              </Typography>
            </Box>

            <TextReveal
              text="Our Commitment to Society."
              as="h2"
              delay={0.1}
              stagger={0.05}
              highlightWord="Commitment"
              highlightColor="#FFB74D"
              style={{
                fontSize: "clamp(2.3rem, 4.2vw, 3.4rem)",
                fontWeight: 900,
                color: "#FFFFFF",
                letterSpacing: "-0.025em",
                lineHeight: 1.15,
                marginBottom: "16px",
              }}
            />

            <Typography
              variant="subtitle1"
              sx={{
                color: "rgba(255, 255, 255, 0.85)",
                fontSize: { xs: "1.05rem", sm: "1.2rem" },
                lineHeight: 1.7,
              }}
            >
              Built upon ethical governance, religious harmony, and verified grassroots
              outreach. We hold ourselves to the highest standards of transparency.
            </Typography>
          </Box>
        </Reveal>

        {/* If verified numeric metrics exist, show count-up cards */}
        {verifiedStats.length > 0 && (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
              },
              gap: 3,
              mb: 7,
            }}
          >
            {verifiedStats.map((metric, idx) => (
              <Reveal delay={idx * 0.1} direction="up" key={metric.id}>
                <Box
                  sx={{
                    p: 3.5,
                    borderRadius: 4,
                    bgcolor: "rgba(255, 255, 255, 0.08)",
                    border: "1px solid rgba(255, 255, 255, 0.16)",
                    backdropFilter: "blur(14px)",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 900,
                      color: "warning.main",
                      fontSize: { xs: "2.2rem", md: "3rem" },
                      lineHeight: 1.1,
                    }}
                  >
                    {metric.value}
                    {metric.suffix}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "#FFFFFF", fontWeight: 700, mt: 1 }}
                  >
                    {metric.label}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "rgba(255, 255, 255, 0.7)", mt: 0.8, display: "block" }}
                  >
                    {metric.description}
                  </Typography>
                </Box>
              </Reveal>
            ))}
          </Box>
        )}

        {/* 4 Pillars of Verified Integrity Cards */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: { xs: 3, md: 4 },
          }}
        >
          {verifiedPillars.map((item, idx) => (
            <Reveal delay={idx * 0.1} direction="up" key={item.title} style={{ height: "100%" }}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: 4.5,
                  bgcolor: "rgba(255, 255, 255, 0.06)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid rgba(255, 255, 255, 0.16)",
                  p: 3.5,
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.12)",
                    transform: "translateY(-6px)",
                    borderColor: "rgba(242, 117, 1, 0.5)",
                    boxShadow: "0 20px 45px rgba(0, 0, 0, 0.3)",
                  },
                }}
              >
                <Box sx={{ mb: 2.5 }}>{item.icon}</Box>

                <Typography
                  variant="caption"
                  sx={{
                    color: "warning.light",
                    fontWeight: 800,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    display: "block",
                    mb: 0.8,
                  }}
                >
                  {item.tag}
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    color: "#FFFFFF",
                    fontWeight: 800,
                    fontSize: "1.22rem",
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
                    fontFamily: "monospace",
                    fontSize: "0.82rem",
                    mb: 2,
                  }}
                >
                  {item.highlight}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(255, 255, 255, 0.78)",
                    lineHeight: 1.7,
                    fontSize: "0.92rem",
                    flexGrow: 1,
                  }}
                >
                  {item.desc}
                </Typography>
              </Card>
            </Reveal>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
