"use client";

import React from "react";
import Button from "@mui/material/Button";
import { WhatsAppIcon } from "@/components/common/Icons";
import { getWhatsAppLink } from "@/lib/utils";

interface WhatsAppButtonProps {
  message?: string;
  label?: string;
  variant?: "contained" | "outlined" | "text";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
}

export default function WhatsAppButton({
  message,
  label = "Connect on WhatsApp",
  variant = "contained",
  size = "medium",
  fullWidth = false,
}: WhatsAppButtonProps) {
  const link = getWhatsAppLink(message);

  return (
    <Button
      component="a"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      startIcon={<WhatsAppIcon />}
      sx={{
        bgcolor: variant === "contained" ? "#006000" : "transparent",
        color: variant === "contained" ? "#FFFFFF" : "#006000",
        borderColor: "#006000",
        fontWeight: 700,
        "&:hover": {
          bgcolor: variant === "contained" ? "#004500" : "rgba(0, 96, 0, 0.08)",
          borderColor: "#004500",
        },
      }}
    >
      {label}
    </Button>
  );
}
