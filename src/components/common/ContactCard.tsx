"use client";

import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
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
        borderRadius: 4,
        boxShadow: "0 10px 30px rgba(0, 40, 135, 0.08)",
        border: "1px solid #E2E8F0",
        p: { xs: 2.5, sm: 3.5 },
        bgcolor: "#FFFFFF",
      }}
    >
      <CardContent sx={{ p: 0 }}>
        {/* Header Badge */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}>
          <VerifiedIcon sx={{ color: "primary.main", fontSize: 22 }} />
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 800, color: "primary.main", letterSpacing: "0.02em" }}
          >
            OFFICIAL TRUST HEADQUARTERS
          </Typography>
        </Box>

        <Typography
          variant="h5"
          sx={{ fontWeight: 800, color: "primary.main", mb: 0.5, fontSize: "1.25rem" }}
        >
          {siteConfig.name}
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: "text.secondary", mb: 2.5, fontWeight: 500 }}
        >
          Government Darphan ID: <strong>{siteConfig.darphanId}</strong>
        </Typography>

        <Divider sx={{ my: 2 }} />

        {/* Address */}
        <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5, mb: 3 }}>
          <LocationOnIcon sx={{ color: "warning.main", fontSize: 24, mt: 0.3 }} />
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: "text.primary" }}>
              Registered Address
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.5, lineHeight: 1.6 }}>
              {siteConfig.contact.address.formatted}
            </Typography>
            <Button
              component="a"
              href={siteConfig.contact.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              endIcon={<OpenInNewIcon sx={{ fontSize: 16 }} />}
              sx={{ mt: 1, p: 0, fontWeight: 700, color: "primary.main" }}
            >
              Open in Google Maps
            </Button>
          </Box>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Phone Numbers */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 700, color: "text.primary", mb: 1.5 }}>
            Direct Contact Numbers (Click to Call)
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {siteConfig.contact.phoneNumbers.map((phone, idx) => (
              <Box
                key={phone}
                component="a"
                href={getTelLink(phone)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  p: 1.2,
                  px: 2,
                  borderRadius: 2,
                  bgcolor: "background.paper",
                  border: "1px solid #E2E8F0",
                  textDecoration: "none",
                  transition: "all 0.2s",
                  "&:hover": {
                    bgcolor: "rgba(0, 40, 135, 0.05)",
                    borderColor: "primary.main",
                  },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <PhoneIcon sx={{ color: "primary.main", fontSize: 18 }} />
                  <Typography variant="body2" sx={{ fontWeight: 700, color: "text.primary" }}>
                    +91 {formatPhone(phone)}
                  </Typography>
                </Box>
                {idx === 0 && (
                  <Typography variant="caption" sx={{ color: "warning.main", fontWeight: 700 }}>
                    Primary
                  </Typography>
                )}
              </Box>
            ))}
          </Box>
        </Box>

        {/* President Info */}
        <Box
          sx={{
            p: 2,
            borderRadius: 2.5,
            bgcolor: "rgba(0, 96, 0, 0.06)",
            border: "1px solid rgba(0, 96, 0, 0.15)",
            mb: 3,
          }}
        >
          <Typography variant="caption" sx={{ color: "secondary.dark", fontWeight: 700, textTransform: "uppercase" }}>
            Trust Leadership
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 800, color: "secondary.dark" }}>
            {siteConfig.president}
          </Typography>
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            President – Warsia Educational &amp; Social Development Trust
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
          sx={{ py: 1.4, fontWeight: 700, fontSize: "1rem" }}
        >
          Instant WhatsApp Inquiries
        </Button>
      </CardContent>
    </Card>
  );
}
