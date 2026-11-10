"use client";

import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { siteConfig } from "@/config/site";
import {
  PhoneIcon,
  WhatsAppIcon,
  LocationOnIcon,
  OpenInNewIcon,
  VerifiedIcon,
} from "@/components/common/Icons";
import { getTelLink, getWhatsAppLink, formatPhone } from "@/lib/utils";

export default function ContactCard() {
  return (
    <Card
      sx={{
        borderRadius: 4.5,
        boxShadow: "0 12px 35px rgba(0, 40, 135, 0.08)",
        border: "1.5px solid #E2E8F0",
        p: { xs: 3, sm: 4 },
        bgcolor: "#FFFFFF",
      }}
    >
      <CardContent sx={{ p: 0 }}>
        {/* Header Badge */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}>
          <VerifiedIcon sx={{ color: "primary.main", fontSize: 22 }} />
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 800, color: "primary.main", letterSpacing: "0.04em" }}
          >
            OFFICIAL TRUST HEADQUARTERS
          </Typography>
        </Box>

        <Typography
          variant="h5"
          sx={{ fontWeight: 900, color: "primary.dark", mb: 0.5, fontSize: "1.3rem" }}
        >
          {siteConfig.name}
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: "text.secondary", mb: 2.5, fontWeight: 600 }}
        >
          Registered Humanitarian Organization · Vijayapura, Karnataka
        </Typography>

        <Divider sx={{ my: 2.5 }} />

        {/* Address */}
        <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5, mb: 3 }}>
          <LocationOnIcon sx={{ color: "warning.main", fontSize: 24, mt: 0.3, flexShrink: 0 }} />
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 800, color: "text.primary" }}>
              Registered Office Address
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.5, lineHeight: 1.65 }}>
              {siteConfig.contact.address.formatted}
            </Typography>
            <Button
              component="a"
              href={siteConfig.contact.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              endIcon={<OpenInNewIcon sx={{ fontSize: 16 }} />}
              sx={{ mt: 1, p: 0, fontWeight: 800, color: "primary.main" }}
            >
              Open in Google Maps
            </Button>
          </Box>
        </Box>

        <Divider sx={{ my: 2.5 }} />

        {/* Phone Numbers */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 800, color: "text.primary", mb: 1.5 }}>
            Direct Contact Numbers (Click to Call)
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}>
            {siteConfig.contact.phoneNumbers.map((phone, idx) => (
              <Box
                key={phone}
                component="a"
                href={getTelLink(phone)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  p: 1.4,
                  px: 2,
                  borderRadius: 3,
                  bgcolor: "#F7F8FC",
                  border: "1px solid #E2E8F0",
                  textDecoration: "none",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    bgcolor: "rgba(0, 40, 135, 0.05)",
                    borderColor: "primary.main",
                    transform: "translateX(3px)",
                  },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <PhoneIcon sx={{ color: "primary.main", fontSize: 18 }} />
                  <Typography variant="body2" sx={{ fontWeight: 800, color: "text.primary" }}>
                    +91 {formatPhone(phone)}
                  </Typography>
                </Box>
                {idx === 0 && (
                  <Chip
                    label="Primary"
                    size="small"
                    sx={{
                      bgcolor: "rgba(242, 117, 1, 0.15)",
                      color: "warning.dark",
                      fontWeight: 800,
                      fontSize: "0.72rem",
                      height: 22,
                    }}
                  />
                )}
              </Box>
            ))}
          </Box>
        </Box>

        {/* President Info */}
        <Box
          sx={{
            p: 2.5,
            borderRadius: 3.5,
            bgcolor: "rgba(0, 96, 0, 0.06)",
            border: "1px solid rgba(0, 96, 0, 0.18)",
            mb: 3,
          }}
        >
          <Typography variant="caption" sx={{ color: "secondary.dark", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em" }}>
            TRUST PRESIDENT
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 900, color: "secondary.dark", mt: 0.2 }}>
            {siteConfig.president}
          </Typography>
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            Warsia Educational &amp; Social Development Trust • Vijayapura
          </Typography>
        </Box>

        {/* WhatsApp Button */}
        <Button
          component="a"
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          color="secondary"
          fullWidth
          size="large"
          startIcon={<WhatsAppIcon sx={{ fontSize: 22 }} />}
          sx={{ py: 1.6, fontWeight: 800, fontSize: "1rem", borderRadius: 9999 }}
        >
          Instant WhatsApp Inquiries
        </Button>
      </CardContent>
    </Card>
  );
}
