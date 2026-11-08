"use client";

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

interface SectionHeadingProps {
  badge?: string;
  badgeColor?: "primary" | "secondary" | "warning" | "error";
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  light?: boolean;
}

export default function SectionHeading({
  badge,
  badgeColor = "warning",
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const getBadgeBg = () => {
    switch (badgeColor) {
      case "primary":
        return light ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 40, 135, 0.08)";
      case "secondary":
        return light ? "rgba(0, 96, 0, 0.3)" : "rgba(0, 96, 0, 0.08)";
      case "error":
        return light ? "rgba(198, 40, 40, 0.3)" : "rgba(198, 40, 40, 0.08)";
      case "warning":
      default:
        return light ? "rgba(242, 117, 1, 0.25)" : "rgba(242, 117, 1, 0.1)";
    }
  };

  const getBadgeTextColor = () => {
    switch (badgeColor) {
      case "primary":
        return light ? "#FFFFFF" : "#002887";
      case "secondary":
        return light ? "#81C784" : "#006000";
      case "error":
        return light ? "#FF8A80" : "#C62828";
      case "warning":
      default:
        return light ? "#FFB74D" : "#C75F00";
    }
  };

  return (
    <Box
      sx={{
        textAlign: align,
        maxWidth: align === "center" ? 820 : "100%",
        mx: align === "center" ? "auto" : 0,
        mb: { xs: 5, md: 7 },
      }}
    >
      {badge && (
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 1,
            py: 0.7,
            px: 2,
            borderRadius: 9999,
            bgcolor: getBadgeBg(),
            border: `1px solid ${
              light ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 40, 135, 0.12)"
            }`,
            mb: 2,
          }}
        >
          <Box
            sx={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              bgcolor: getBadgeTextColor(),
            }}
          />
          <Typography
            variant="overline"
            sx={{
              color: getBadgeTextColor(),
              fontWeight: 800,
              letterSpacing: "0.08em",
              lineHeight: 1,
            }}
          >
            {badge}
          </Typography>
        </Box>
      )}

      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "2rem", sm: "2.6rem", md: "3rem" },
          fontWeight: 800,
          color: light ? "#FFFFFF" : "primary.dark",
          mb: subtitle ? 2 : 0,
          letterSpacing: "-0.025em",
          lineHeight: 1.15,
        }}
      >
        {title}
      </Typography>

      {subtitle && (
        <Typography
          variant="subtitle1"
          sx={{
            color: light ? "rgba(255, 255, 255, 0.82)" : "text.secondary",
            fontSize: { xs: "1.02rem", sm: "1.15rem" },
            lineHeight: 1.7,
            maxWidth: 720,
            mx: align === "center" ? "auto" : 0,
          }}
        >
          {subtitle}
        </Typography>
      )}

      {/* Modern editorial brand bar: Navy, Orange, Green */}
      <Box
        sx={{
          display: "flex",
          justifyContent:
            align === "center"
              ? "center"
              : align === "right"
              ? "flex-end"
              : "flex-start",
          alignItems: "center",
          gap: 1,
          mt: 2.8,
        }}
      >
        <Box
          sx={{
            width: 44,
            height: 3,
            bgcolor: light ? "rgba(255, 255, 255, 0.8)" : "#002887",
            borderRadius: 2,
          }}
        />
        <Box
          sx={{
            width: 14,
            height: 3,
            bgcolor: "#F27501",
            borderRadius: 2,
          }}
        />
        <Box
          sx={{
            width: 8,
            height: 3,
            bgcolor: "#006000",
            borderRadius: 2,
          }}
        />
      </Box>
    </Box>
  );
}
