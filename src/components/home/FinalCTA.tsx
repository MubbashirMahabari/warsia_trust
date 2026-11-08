"use client";

import React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { siteConfig } from "@/config/site";
import AnimatedSection from "@/components/common/AnimatedSection";
import {
  WhatsAppIcon,
  PhoneIcon,
  Diversity3Icon,
} from "@/components/common/Icons";
import { getWhatsAppLink } from "@/lib/utils";

export default function FinalCTA() {
  return (
    <Box
      sx={{
        py: { xs: 9, md: 13 },
        bgcolor: "#002887",
        color: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
        backgroundImage: `
          radial-gradient(circle at 10% 20%, rgba(242, 117, 1, 0.25) 0%, transparent 40%),
          radial-gradient(circle at 90% 80%, rgba(0, 96, 0, 0.3) 0%, transparent 40%),
          linear-gradient(180deg, #001B5C 0%, #002887 100%)
        `,
      }}
    >
      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        <AnimatedSection>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              bgcolor: "rgba(255, 255, 255, 0.12)",
              backdropFilter: "blur(8px)",
              borderRadius: 50,
              py: 0.8,
              px: 2.5,
              mb: 3,
            }}
          >
            <Diversity3Icon sx={{ color: "warning.main", fontSize: 20 }} />
            <Typography
              variant="caption"
              sx={{
                color: "#FFFFFF",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              JOIN HANDS FOR VIJAYAPURA
            </Typography>
          </Box>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              color: "#FFFFFF",
              fontSize: { xs: "2rem", sm: "2.8rem", md: "3.2rem" },
              lineHeight: 1.15,
              mb: 2.5,
              letterSpacing: "-0.02em",
            }}
          >
            Together, Let&apos;s Make Humanity Stronger.
          </Typography>

          <Typography
            variant="h6"
            component="p"
            sx={{
              color: "rgba(255, 255, 255, 0.88)",
              fontSize: { xs: "1.05rem", md: "1.2rem" },
              fontWeight: 400,
              lineHeight: 1.6,
              mb: 3.5,
              maxWidth: 620,
              mx: "auto",
            }}
          >
            Every effort matters. Every helping hand creates hope. Join us in
            serving religious leaders, emergency patients, and families across
            our community.
          </Typography>

          {/* Prominent Official Slogan */}
          <Box
            sx={{
              display: "inline-block",
              p: 2,
              px: { xs: 2.5, sm: 4 },
              borderRadius: 3,
              bgcolor: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.18)",
              mb: 5,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontStyle: "italic",
                fontWeight: 700,
                color: "warning.main",
                fontSize: { xs: "1rem", sm: "1.2rem" },
                letterSpacing: "0.01em",
              }}
            >
              &ldquo;{siteConfig.slogan}&rdquo;
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 2.5,
            }}
          >
            <Button
              component={Link}
              href="/contact"
              variant="contained"
              size="large"
              color="warning"
              startIcon={<PhoneIcon />}
              sx={{
                px: 4,
                py: 1.5,
                fontWeight: 800,
                fontSize: "1rem",
                boxShadow: "0 8px 25px rgba(242, 117, 1, 0.35)",
              }}
            >
              Contact Our Trust
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
                px: 3.5,
                py: 1.4,
                fontWeight: 700,
                fontSize: "1rem",
                color: "#FFFFFF",
                borderColor: "rgba(255, 255, 255, 0.5)",
                backdropFilter: "blur(6px)",
                "&:hover": {
                  borderColor: "#FFFFFF",
                  bgcolor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              Support Our Mission
            </Button>
          </Box>
        </AnimatedSection>
      </Container>
    </Box>
  );
}
