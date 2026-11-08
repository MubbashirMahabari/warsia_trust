"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import { WhatsAppIcon } from "@/components/common/Icons";
import { getWhatsAppLink } from "@/lib/utils";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: { xs: 20, md: 32 },
        right: { xs: 20, md: 32 },
        zIndex: 1000,
      }}
    >
      <Tooltip
        title="Chat with Warsia Trust on WhatsApp"
        placement="left"
        arrow
      >
        <motion.a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Connect with Warsia Trust on WhatsApp"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "12px 18px",
            borderRadius: "9999px",
            backgroundColor: "#25D366",
            color: "#FFFFFF",
            textDecoration: "none",
            boxShadow: "0 8px 30px rgba(37, 211, 102, 0.4)",
            cursor: "pointer",
            position: "relative",
          }}
        >
          {/* Subtle pulse wave */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: "9999px",
              bgcolor: "#25D366",
              opacity: 0.4,
              animation: "ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite",
              zIndex: -1,
            }}
          />

          <WhatsAppIcon sx={{ fontSize: 26 }} />
          <Typography
            component="span"
            sx={{
              fontWeight: 700,
              fontSize: "0.88rem",
              display: { xs: "none", sm: "inline" },
              letterSpacing: "0.01em",
            }}
          >
            Direct Support
          </Typography>
        </motion.a>
      </Tooltip>
    </Box>
  );
}
