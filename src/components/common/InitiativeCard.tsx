"use client";

import React from "react";
import Link from "next/link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import { Initiative } from "@/config/initiatives";
import {
  ArrowForwardIcon,
  MosqueIcon,
  TempleHinduIcon,
  BloodtypeIcon,
  SchoolIcon,
  VolunteerActivismIcon,
  Diversity3Icon,
} from "@/components/common/Icons";

interface InitiativeCardProps {
  initiative: Initiative;
  index?: number;
  featured?: boolean;
}

export default function InitiativeCard({
  initiative,
  index,
  featured = false,
}: InitiativeCardProps) {
  const getIcon = (name: string) => {
    switch (name) {
      case "Mosque":
        return <MosqueIcon sx={{ fontSize: 30, color: "#006000" }} />;
      case "TempleHindu":
        return <TempleHinduIcon sx={{ fontSize: 30, color: "#F27501" }} />;
      case "Bloodtype":
        return <BloodtypeIcon sx={{ fontSize: 30, color: "#C62828" }} />;
      case "School":
        return <SchoolIcon sx={{ fontSize: 30, color: "#002887" }} />;
      case "Diversity3":
        return <Diversity3Icon sx={{ fontSize: 30, color: "#006000" }} />;
      default:
        return <VolunteerActivismIcon sx={{ fontSize: 30, color: "#F27501" }} />;
    }
  };

  const numberStr = typeof index === "number" ? `0${index + 1}` : undefined;

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        borderRadius: 4.5,
        overflow: "hidden",
        border: "1.5px solid #E2E8F0",
        bgcolor: "#FFFFFF",
        boxShadow: "0 8px 24px rgba(0, 40, 135, 0.05)",
        transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 18px 45px rgba(0, 40, 135, 0.12)",
          borderColor: initiative.accentColor || "#002887",
        },
      }}
    >
      {/* Top Banner Accent Stripe */}
      <Box
        sx={{
          height: 6,
          width: "100%",
          bgcolor: initiative.accentColor || "#002887",
        }}
      />

      <CardContent
        sx={{
          p: { xs: 3.5, md: 4 },
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header with Icon & Index / Badge */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 2.5,
          }}
        >
          <Box
            sx={{
              width: 58,
              height: 58,
              borderRadius: 3.5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "#F7F8FC",
              border: "1px solid #E2E8F0",
            }}
          >
            {getIcon(initiative.iconName)}
          </Box>

          <Box sx={{ textAlign: "right" }}>
            {numberStr && (
              <Typography
                variant="caption"
                sx={{
                  fontFamily: "monospace",
                  fontWeight: 800,
                  fontSize: "0.95rem",
                  color: initiative.accentColor || "text.secondary",
                  display: "block",
                }}
              >
                {numberStr}
              </Typography>
            )}
            {initiative.badge && (
              <Chip
                label={initiative.badge}
                size="small"
                sx={{
                  bgcolor: "rgba(0, 40, 135, 0.08)",
                  color: "primary.main",
                  fontWeight: 700,
                  fontSize: "0.72rem",
                  mt: 0.5,
                }}
              />
            )}
          </Box>
        </Box>

        {/* Title */}
        <Typography
          variant="h5"
          component="h3"
          sx={{
            fontWeight: 800,
            fontSize: { xs: "1.25rem", md: "1.35rem" },
            lineHeight: 1.3,
            color: "primary.dark",
            mb: 1.5,
          }}
        >
          {initiative.title}
        </Typography>

        {/* Short Description */}
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            fontSize: "0.94rem",
            lineHeight: 1.7,
            mb: 3,
            flexGrow: 1,
          }}
        >
          {initiative.shortDescription}
        </Typography>

        {/* Action Link Button */}
        <Box sx={{ pt: 2, borderTop: "1px solid #F1F4F9" }}>
          <Button
            component={Link}
            href={initiative.href}
            endIcon={<ArrowForwardIcon sx={{ fontSize: 18 }} />}
            sx={{
              p: 0,
              fontWeight: 800,
              color: initiative.accentColor || "primary.main",
              fontSize: "0.94rem",
              justifyContent: "flex-start",
              "&:hover": {
                bgcolor: "transparent",
                color: "primary.main",
                "& .MuiSvgIcon-root": {
                  transform: "translateX(4px)",
                },
              },
              "& .MuiSvgIcon-root": {
                transition: "transform 0.2s",
              },
            }}
          >
            {initiative.actionText || "Learn More"}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
