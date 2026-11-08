"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { siteConfig } from "@/config/site";
import Reveal from "@/components/animations/Reveal";
import TextReveal from "@/components/animations/TextReveal";
import MagneticButton from "@/components/animations/MagneticButton";
import {
  PhoneIcon,
  Diversity3Icon,
  VolunteerActivismIcon,
  ArrowForwardIcon,
} from "@/components/common/Icons";

export default function FinalCTA() {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 15 },
        bgcolor: "#001B5C", // Deep Navy
        color: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
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
            radial-gradient(circle at 15% 25%, rgba(0, 96, 0, 0.35) 0%, transparent 48%),
            radial-gradient(circle at 85% 75%, rgba(242, 117, 1, 0.28) 0%, transparent 48%),
            linear-gradient(180deg, #001B5C 0%, #002887 100%)
          `,
          pointerEvents: "none",
        }}
      />

      {/* Subtle geometric dot grid overlay */}
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

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        <Reveal>
          {/* Slogan Pill */}
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1.2,
              bgcolor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              borderRadius: 9999,
              py: 0.8,
              px: 2.5,
              mb: 3.5,
              border: "1px solid rgba(255, 255, 255, 0.18)",
            }}
          >
            <Diversity3Icon sx={{ color: "warning.main", fontSize: 20 }} />
            <Typography
              variant="caption"
              sx={{
                color: "#FFFFFF",
                fontWeight: 800,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontSize: "0.76rem",
              }}
            >
              JOIN HANDS FOR HUMANITY
            </Typography>
          </Box>

          {/* Heading per prompt */}
          <Box sx={{ mb: 2 }}>
            <TextReveal
              text="Be Part of Something Meaningful."
              as="h2"
              delay={0.1}
              stagger={0.06}
              highlightWord="Meaningful."
              highlightColor="#FFB74D"
              style={{
                fontSize: "clamp(2.4rem, 4.8vw, 3.8rem)",
                fontWeight: 900,
                color: "#FFFFFF",
                letterSpacing: "-0.03em",
                lineHeight: 1.15,
                justifyContent: "center",
              }}
            />
          </Box>

          {/* Description per prompt */}
          <Typography
            variant="h6"
            component="p"
            sx={{
              color: "rgba(255, 255, 255, 0.85)",
              fontSize: { xs: "1.1rem", md: "1.25rem" },
              fontWeight: 400,
              lineHeight: 1.7,
              mb: 4,
              maxWidth: 680,
              mx: "auto",
            }}
          >
            Your time, compassion, and support can help create a better tomorrow.
          </Typography>

          {/* Official Slogan Display */}
          <Box
            sx={{
              display: "inline-block",
              p: 2,
              px: { xs: 3, sm: 4.5 },
              borderRadius: 4,
              bgcolor: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.18)",
              backdropFilter: "blur(12px)",
              mb: 5.5,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontStyle: "italic",
                fontWeight: 800,
                color: "warning.main",
                fontSize: { xs: "1.05rem", sm: "1.25rem" },
                letterSpacing: "0.01em",
              }}
            >
              &ldquo;{siteConfig.slogan}&rdquo;
            </Typography>
          </Box>

          {/* Buttons per prompt: "Become a Volunteer" & "Contact Our Trust" */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 2.5,
            }}
          >
            <MagneticButton strength={0.25}>
              <Button
                component={Link}
                href="/volunteer"
                variant="contained"
                size="large"
                color="warning"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  px: 4.2,
                  py: 1.7,
                  fontWeight: 800,
                  fontSize: "1.05rem",
                  bgcolor: "warning.main",
                  color: "#FFFFFF",
                  borderRadius: 9999,
                  boxShadow: "0 10px 30px rgba(242, 117, 1, 0.4)",
                  "&:hover": {
                    bgcolor: "warning.dark",
                  },
                }}
              >
                Become a Volunteer
              </Button>
            </MagneticButton>

            <Button
              component={Link}
              href="/contact"
              variant="outlined"
              size="large"
              startIcon={<PhoneIcon />}
              sx={{
                px: 4,
                py: 1.6,
                fontWeight: 700,
                fontSize: "1.05rem",
                color: "#FFFFFF",
                borderColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: 9999,
                backdropFilter: "blur(8px)",
                bgcolor: "rgba(255, 255, 255, 0.05)",
                "&:hover": {
                  borderColor: "#FFFFFF",
                  bgcolor: "rgba(255, 255, 255, 0.15)",
                },
              }}
            >
              Contact Our Trust
            </Button>
          </Box>
        </Reveal>
      </Container>
    </Box>
  );
}
