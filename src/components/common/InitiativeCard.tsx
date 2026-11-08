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
} from "@/components/common/Icons";

interface InitiativeCardProps {
  initiative: Initiative;
  featured?: boolean;
}

export default function InitiativeCard({
  initiative,
  featured = false,
}: InitiativeCardProps) {
  const getIcon = (name: string) => {
    switch (name) {
      case "Mosque":
        return <MosqueIcon sx={{ fontSize: 32, color: initiative.themeColor }} />;
      case "TempleHindu":
        return <TempleHinduIcon sx={{ fontSize: 32, color: initiative.themeColor }} />;
      case "Bloodtype":
        return <BloodtypeIcon sx={{ fontSize: 32, color: "#C62828" }} />;
      case "School":
        return <SchoolIcon sx={{ fontSize: 32, color: initiative.themeColor }} />;
      default:
        return <VolunteerActivismIcon sx={{ fontSize: 32, color: initiative.accentColor }} />;
    }
  };

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        borderRadius: 4,
        overflow: "hidden",
        border: "1px solid #E2E8F0",
        bgcolor: "#FFFFFF",
        transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 16px 40px rgba(0, 40, 135, 0.12)",
          borderColor: "rgba(0, 40, 135, 0.25)",
        },
      }}
    >
      {/* Top Banner Accent Stripe */}
      <Box
        sx={{
          height: 6,
          width: "100%",
          bgcolor: initiative.accentColor || initiative.themeColor,
        }}
      />

      <CardContent
        sx={{
          p: { xs: 3, md: 3.5 },
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Icon & Category Header */}
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
              borderRadius: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "background.paper",
              border: "1px solid #E2E8F0",
              boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
            }}
          >
            {getIcon(initiative.iconName)}
          </Box>

          {initiative.badge && (
            <Chip
              label={initiative.badge}
              size="small"
              sx={{
                bgcolor: "rgba(0, 40, 135, 0.08)",
                color: "primary.main",
                fontWeight: 700,
                fontSize: "0.72rem",
                borderRadius: 2,
              }}
            />
          )}
        </Box>

        {/* Title */}
        <Typography
          variant="h5"
          component="h3"
          sx={{
            fontWeight: 800,
            fontSize: { xs: "1.2rem", md: "1.3rem" },
            lineHeight: 1.3,
            color: "primary.main",
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
            fontSize: "0.92rem",
            lineHeight: 1.65,
            mb: 3,
            flexGrow: 1,
          }}
        >
          {initiative.shortDescription}
        </Typography>

        {/* Action Link Button */}
        <Box sx={{ pt: 1, borderTop: "1px solid #F1F4F9" }}>
          <Button
            component={Link}
            href={initiative.href}
            endIcon={<ArrowForwardIcon sx={{ fontSize: 18 }} />}
            sx={{
              p: 0,
              fontWeight: 700,
              color: "primary.main",
              fontSize: "0.92rem",
              justifyContent: "flex-start",
              "&:hover": {
                bgcolor: "transparent",
                color: "warning.main",
                "& .MuiSvgIcon-root": {
                  transform: "translateX(4px)",
                },
              },
              "& .MuiSvgIcon-root": {
                transition: "transform 0.2s",
              },
            }}
          >
            Learn More
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
