"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import { initiativesData } from "@/config/initiatives";
import Reveal from "@/components/animations/Reveal";
import TextReveal from "@/components/animations/TextReveal";
import MagneticButton from "@/components/animations/MagneticButton";
import {
  ArrowForwardIcon,
  CheckCircleIcon,
  MosqueIcon,
  TempleHinduIcon,
  BloodtypeIcon,
  SchoolIcon,
  VolunteerActivismIcon,
  Diversity3Icon,
} from "@/components/common/Icons";
import { motion, AnimatePresence } from "framer-motion";

const shortTabLabels: Record<string, string> = {
  "masjid-imam-support": "Masjid Imams",
  "temple-pandit-support": "Temple Pandits",
  "blood-donation": "Blood Donation",
  education: "Education",
  "social-development": "Social Welfare",
  "community-development": "Community Aid",
};

export default function InitiativesSection() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const getInitiativeIcon = (id: string) => {
    switch (id) {
      case "masjid-imam-support":
        return <MosqueIcon sx={{ fontSize: 26, color: "#006000" }} />;
      case "temple-pandit-support":
        return <TempleHinduIcon sx={{ fontSize: 26, color: "#F27501" }} />;
      case "blood-donation":
        return <BloodtypeIcon sx={{ fontSize: 26, color: "#C62828" }} />;
      case "education":
        return <SchoolIcon sx={{ fontSize: 26, color: "#002887" }} />;
      case "social-development":
        return <VolunteerActivismIcon sx={{ fontSize: 26, color: "#F27501" }} />;
      case "community-development":
      default:
        return <Diversity3Icon sx={{ fontSize: 26, color: "#006000" }} />;
    }
  };

  const getAccentColor = (id: string) => {
    switch (id) {
      case "masjid-imam-support":
        return "#006000";
      case "temple-pandit-support":
        return "#F27501";
      case "blood-donation":
        return "#C62828";
      case "education":
        return "#002887";
      case "social-development":
        return "#F27501";
      case "community-development":
      default:
        return "#006000";
    }
  };

  const currentInitiative = initiativesData[activeTab];

  return (
    <Box
      sx={{
        py: { xs: 9, md: 13 },
        bgcolor: "#F7F8FC",
        position: "relative",
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2.5, sm: 4, md: 6, lg: 8 } }}>
        {/* Section Header */}
        <Reveal>
          <Box sx={{ textAlign: "center", maxWidth: 840, mx: "auto", mb: { xs: 5, md: 7 } }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.2,
                py: 0.8,
                px: 2.2,
                borderRadius: 9999,
                bgcolor: "rgba(0, 40, 135, 0.08)",
                border: "1px solid rgba(0, 40, 135, 0.14)",
                mb: 2.5,
              }}
            >
              <Typography
                variant="overline"
                sx={{
                  color: "primary.main",
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                  lineHeight: 1,
                }}
              >
                AREAS OF HUMANITARIAN ACTION
              </Typography>
            </Box>

            <TextReveal
              text="Action Beyond Boundaries. Impact Where It Counts."
              as="h2"
              delay={0.1}
              stagger={0.04}
              highlightWord="Action"
              highlightColor="#002887"
              style={{
                fontSize: "clamp(2.1rem, 3.8vw, 3rem)",
                fontWeight: 900,
                color: "#001B5C",
                letterSpacing: "-0.025em",
                lineHeight: 1.15,
                marginBottom: "16px",
              }}
            />

            <Typography
              variant="subtitle1"
              sx={{
                color: "text.secondary",
                fontSize: { xs: "1.02rem", sm: "1.15rem" },
                lineHeight: 1.7,
              }}
            >
              Explore our core pillars serving religious harmony, urgent hospital blood care,
              child learning, and community social relief in Vijayapura.
            </Typography>
          </Box>
        </Reveal>

        {/* Interactive Numbered Tab Bar */}
        <Reveal delay={0.15}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, 1fr)",
                sm: "repeat(3, 1fr)",
                lg: "repeat(6, 1fr)",
              },
              gap: 1.5,
              mb: { xs: 4, md: 6 },
            }}
          >
            {initiativesData.map((item, idx) => {
              const isSelected = activeTab === idx;
              const accent = getAccentColor(item.id);
              const numberStr = `0${idx + 1}`;
              const label = shortTabLabels[item.id] || item.title;

              return (
                <Box
                  key={item.id}
                  onClick={() => setActiveTab(idx)}
                  sx={{
                    px: { xs: 1.5, sm: 2 },
                    py: 1.5,
                    borderRadius: 3,
                    bgcolor: isSelected ? "#001B5C" : "#FFFFFF",
                    color: isSelected ? "#FFFFFF" : "text.primary",
                    border: "1.5px solid",
                    borderColor: isSelected ? "#001B5C" : "#E2E8F0",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                    boxShadow: isSelected
                      ? "0 6px 20px rgba(0, 27, 92, 0.18)"
                      : "0 1px 4px rgba(0, 0, 0, 0.03)",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      borderColor: accent,
                    },
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      fontFamily: "monospace",
                      fontWeight: 800,
                      fontSize: "0.85rem",
                      color: isSelected ? "#FFA040" : accent,
                    }}
                  >
                    {numberStr}
                  </Typography>

                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: isSelected ? 800 : 700,
                      fontSize: "0.9rem",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {label}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Reveal>

        {/* Featured Interactive Showcase Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentInitiative.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
          >
            <Box
              sx={{
                bgcolor: "#FFFFFF",
                borderRadius: 4.5,
                border: "1px solid #E2E8F0",
                boxShadow: "0 16px 45px rgba(0, 40, 135, 0.07)",
                mb: 8,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Clean Top Accent Line */}
              <Box
                sx={{
                  height: 6,
                  bgcolor: getAccentColor(currentInitiative.id),
                  width: "100%",
                }}
              />

              <Box sx={{ p: { xs: 3.5, sm: 5, md: 6 } }}>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", md: "1.2fr 0.8fr" },
                    gap: { xs: 4, md: 6 },
                    alignItems: "center",
                  }}
                >
                  {/* Left: Editorial Details */}
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        mb: 2.5,
                      }}
                    >
                      <Box
                        sx={{
                          width: 52,
                          height: 52,
                          borderRadius: 3,
                          bgcolor: "#F7F8FC",
                          border: "1px solid #E2E8F0",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {getInitiativeIcon(currentInitiative.id)}
                      </Box>

                      <Box>
                        <Typography
                          variant="caption"
                          sx={{
                            fontFamily: "monospace",
                            fontWeight: 800,
                            fontSize: "0.85rem",
                            color: getAccentColor(currentInitiative.id),
                            letterSpacing: "0.08em",
                            display: "block",
                          }}
                        >
                          INITIATIVE 0{activeTab + 1} OF 06
                        </Typography>
                        {currentInitiative.badge && (
                          <Chip
                            label={currentInitiative.badge}
                            size="small"
                            sx={{
                              height: 22,
                              fontWeight: 700,
                              fontSize: "0.72rem",
                              bgcolor: "rgba(0, 40, 135, 0.08)",
                              color: "primary.main",
                              mt: 0.3,
                            }}
                          />
                        )}
                      </Box>
                    </Box>

                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 900,
                        color: "primary.dark",
                        fontSize: { xs: "1.65rem", sm: "2rem", md: "2.3rem" },
                        letterSpacing: "-0.025em",
                        lineHeight: 1.2,
                        mb: 2,
                      }}
                    >
                      {currentInitiative.title}
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        color: "text.primary",
                        fontSize: "1.05rem",
                        lineHeight: 1.75,
                        mb: 3,
                      }}
                    >
                      {currentInitiative.shortDescription}
                    </Typography>

                    {/* Key Highlights */}
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 1.4,
                        mb: 4,
                      }}
                    >
                      {currentInitiative.keyHighlights.map((hl, i) => (
                        <Box
                          key={i}
                          sx={{ display: "flex", alignItems: "flex-start", gap: 1.4 }}
                        >
                          <CheckCircleIcon
                            sx={{
                              color: getAccentColor(currentInitiative.id),
                              fontSize: 20,
                              mt: 0.2,
                              flexShrink: 0,
                            }}
                          />
                          <Typography
                            variant="body2"
                            sx={{
                              color: "text.secondary",
                              fontWeight: 600,
                              fontSize: "0.94rem",
                              lineHeight: 1.6,
                            }}
                          >
                            {hl}
                          </Typography>
                        </Box>
                      ))}
                    </Box>

                    <Button
                      component={Link}
                      href={currentInitiative.href}
                      variant="contained"
                      size="large"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        px: 3.8,
                        py: 1.4,
                        fontWeight: 800,
                        fontSize: "0.95rem",
                        bgcolor: getAccentColor(currentInitiative.id),
                        color: "#FFFFFF",
                        borderRadius: 9999,
                        boxShadow: "0 6px 18px rgba(0, 0, 0, 0.12)",
                        "&:hover": {
                          bgcolor: getAccentColor(currentInitiative.id),
                          filter: "brightness(0.9)",
                        },
                      }}
                    >
                      {currentInitiative.actionText}
                    </Button>
                  </Box>

                  {/* Right: Large Artwork Showcase */}
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: { xs: 240, sm: 320, md: 360 },
                      borderRadius: 4,
                      overflow: "hidden",
                      border: "1px solid #E2E8F0",
                      bgcolor: "#001B5C",
                    }}
                  >
                    <Image
                      src={currentInitiative.image}
                      alt={currentInitiative.title}
                      fill
                      sizes="(max-width: 1200px) 100vw, 450px"
                      style={{ objectFit: "cover" }}
                    />

                    {/* Overlay Label */}
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 16,
                        left: 16,
                        right: 16,
                        bgcolor: "rgba(0, 27, 92, 0.88)",
                        backdropFilter: "blur(10px)",
                        p: 1.8,
                        borderRadius: 3,
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          color: "#FFA040",
                          fontWeight: 800,
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                          display: "block",
                        }}
                      >
                        WARSIA TRUST PROGRAM
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        sx={{ color: "#FFFFFF", fontWeight: 700 }}
                      >
                        {currentInitiative.title}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </motion.div>
        </AnimatePresence>

        {/* Clean 6-Initiatives Master Grid */}
        <Reveal>
          <Box sx={{ mb: 4, textAlign: "center" }}>
            <Typography
              variant="overline"
              sx={{ color: "primary.main", fontWeight: 800, letterSpacing: "0.08em" }}
            >
              ALL 6 HUMANITARIAN PILLARS
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 900,
                color: "primary.dark",
                fontSize: { xs: "1.5rem", md: "1.9rem" },
                letterSpacing: "-0.02em",
                mt: 0.5,
              }}
            >
              Comprehensive Community Outreach
            </Typography>
          </Box>
        </Reveal>

        {/* Pixel-Perfect CSS Grid for All 6 Cards */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: 3.5,
          }}
        >
          {initiativesData.map((item, idx) => {
            const accent = getAccentColor(item.id);
            const numberStr = `0${idx + 1}`;

            return (
              <Reveal delay={idx * 0.08} key={item.id} style={{ height: "100%" }}>
                <Box
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 4,
                    overflow: "hidden",
                    border: "1px solid #E2E8F0",
                    bgcolor: "#FFFFFF",
                    boxShadow: "0 4px 18px rgba(0, 40, 135, 0.04)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 14px 35px rgba(0, 40, 135, 0.1)",
                      borderColor: accent,
                    },
                  }}
                >
                  {/* Clean Top Accent Line */}
                  <Box sx={{ height: 5, bgcolor: accent, width: "100%" }} />

                  <Box sx={{ p: 3.5, flexGrow: 1, display: "flex", flexDirection: "column" }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 2,
                      }}
                    >
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: 2.5,
                          bgcolor: "#F7F8FC",
                          border: "1px solid #E2E8F0",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {getInitiativeIcon(item.id)}
                      </Box>

                      <Typography
                        variant="caption"
                        sx={{
                          fontFamily: "monospace",
                          fontWeight: 800,
                          fontSize: "0.85rem",
                          color: accent,
                        }}
                      >
                        {numberStr}
                      </Typography>
                    </Box>

                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 800,
                        color: "primary.main",
                        fontSize: "1.18rem",
                        mb: 1.2,
                        lineHeight: 1.3,
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        lineHeight: 1.65,
                        fontSize: "0.92rem",
                        mb: 3,
                        flexGrow: 1,
                      }}
                    >
                      {item.shortDescription}
                    </Typography>

                    <Box sx={{ pt: 2, borderTop: "1px solid #F1F4F9" }}>
                      <Link
                        href={item.href}
                        style={{
                          color: accent,
                          fontWeight: 800,
                          fontSize: "0.92rem",
                          textDecoration: "none",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          transition: "gap 0.2s",
                        }}
                      >
                        <span>Learn More</span>
                        <ArrowForwardIcon sx={{ fontSize: 16 }} />
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Reveal>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
