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
  return (
    <Box
      sx={{
        textAlign: align,
        maxWidth: align === "center" ? 780 : "100%",
        mx: align === "center" ? "auto" : 0,
        mb: { xs: 4, md: 6 },
      }}
    >
      {badge && (
        <Chip
          label={badge}
          color={badgeColor}
          size="small"
          sx={{
            mb: 1.5,
            fontWeight: 700,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            fontSize: "0.72rem",
            px: 1,
          }}
        />
      )}

      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "1.75rem", sm: "2.2rem", md: "2.5rem" },
          fontWeight: 800,
          color: light ? "#FFFFFF" : "primary.main",
          mb: subtitle ? 1.5 : 0,
          letterSpacing: "-0.015em",
          lineHeight: 1.2,
        }}
      >
        {title}
      </Typography>

      {subtitle && (
        <Typography
          variant="subtitle1"
          sx={{
            color: light ? "rgba(255, 255, 255, 0.85)" : "text.secondary",
            fontSize: { xs: "0.95rem", sm: "1.05rem" },
            lineHeight: 1.65,
          }}
        >
          {subtitle}
        </Typography>
      )}

      {/* Decorative colored bar */}
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
          gap: 0.8,
          mt: 2,
        }}
      >
        <Box
          sx={{
            width: 48,
            height: 4,
            bgcolor: "primary.main",
            borderRadius: 2,
          }}
        />
        <Box
          sx={{
            width: 14,
            height: 4,
            bgcolor: "warning.main",
            borderRadius: 2,
          }}
        />
        <Box
          sx={{
            width: 8,
            height: 4,
            bgcolor: "secondary.main",
            borderRadius: 2,
          }}
        />
      </Box>
    </Box>
  );
}
