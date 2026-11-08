"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { siteConfig } from "@/config/site";
import { footerQuickLinks, legalLinks } from "@/config/navigation";
import { initiativesData } from "@/config/initiatives";
import {
  PhoneIcon,
  WhatsAppIcon,
  LocationOnIcon,
  VerifiedIcon,
} from "@/components/common/Icons";
import { getTelLink, getWhatsAppLink, formatPhone } from "@/lib/utils";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#001B5C", // Deep Navy Blue Dark
        color: "#FFFFFF",
        pt: { xs: 7, md: 9 },
        pb: 4,
        borderTop: "4px solid #F27501", // Saffron accent top line
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 5 }}>
          {/* Column 1: Organization details & Logo with slogan */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 2.5, bgcolor: "#FFFFFF", p: 1.5, borderRadius: 2, display: "inline-block", maxWidth: 280 }}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: 70,
                }}
              >
                <Image
                  src="/logo/warsia-logo-with-slogan.png"
                  alt={`${siteConfig.name} - ${siteConfig.slogan}`}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </Box>
            </Box>

            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 800,
                color: "#FFFFFF",
                fontSize: "1.05rem",
                lineHeight: 1.3,
                mb: 1,
              }}
            >
              {siteConfig.name}
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}>
              <VerifiedIcon sx={{ color: "warning.main", fontSize: 18 }} />
              <Typography
                variant="body2"
                sx={{ color: "#E2E8F0", fontWeight: 600, fontSize: "0.85rem" }}
              >
                Darphan ID: <strong>{siteConfig.darphanId}</strong>
              </Typography>
            </Box>

            <Typography
              variant="body2"
              sx={{ color: "rgba(255, 255, 255, 0.75)", mb: 2, fontSize: "0.88rem" }}
            >
              <strong>President:</strong> {siteConfig.president}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                fontStyle: "italic",
                color: "warning.light",
                fontWeight: 600,
                fontSize: "0.9rem",
                borderLeft: "3px solid #F27501",
                pl: 1.5,
                my: 2,
              }}
            >
              &ldquo;{siteConfig.slogan}&rdquo;
            </Typography>
          </Grid>

          {/* Column 2: Key Initiatives */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{
                color: "#FFFFFF",
                fontWeight: 700,
                fontSize: "1rem",
                mb: 2.5,
                position: "relative",
                "&::after": {
                  content: '""',
                  display: "block",
                  width: 32,
                  height: 3,
                  bgcolor: "secondary.main",
                  mt: 0.8,
                  borderRadius: 2,
                },
              }}
            >
              Key Initiatives
            </Typography>

            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              {initiativesData.map((initiative) => (
                <Box
                  component="li"
                  key={initiative.id}
                  sx={{ mb: 1.5 }}
                >
                  <Link
                    href={initiative.href}
                    style={{
                      color: "rgba(255, 255, 255, 0.8)",
                      textDecoration: "none",
                      fontSize: "0.88rem",
                      display: "inline-block",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#F27501";
                      e.currentTarget.style.transform = "translateX(4px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(255, 255, 255, 0.8)";
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    {initiative.title}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Column 3: Quick Navigation */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="h6"
              sx={{
                color: "#FFFFFF",
                fontWeight: 700,
                fontSize: "1rem",
                mb: 2.5,
                position: "relative",
                "&::after": {
                  content: '""',
                  display: "block",
                  width: 32,
                  height: 3,
                  bgcolor: "warning.main",
                  mt: 0.8,
                  borderRadius: 2,
                },
              }}
            >
              Quick Links
            </Typography>

            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              {footerQuickLinks.map((item) => (
                <Box component="li" key={item.title} sx={{ mb: 1.5 }}>
                  <Link
                    href={item.href}
                    style={{
                      color: "rgba(255, 255, 255, 0.8)",
                      textDecoration: "none",
                      fontSize: "0.88rem",
                      display: "inline-block",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#F27501";
                      e.currentTarget.style.transform = "translateX(4px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(255, 255, 255, 0.8)";
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    {item.title}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Column 4: Contact & Location */}
          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              sx={{
                color: "#FFFFFF",
                fontWeight: 700,
                fontSize: "1rem",
                mb: 2.5,
                position: "relative",
                "&::after": {
                  content: '""',
                  display: "block",
                  width: 32,
                  height: 3,
                  bgcolor: "secondary.main",
                  mt: 0.8,
                  borderRadius: 2,
                },
              }}
            >
              Official Contact
            </Typography>

            <Box sx={{ mb: 2 }}>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.2, mb: 1.5 }}>
                <LocationOnIcon sx={{ color: "warning.main", fontSize: 20, mt: 0.3 }} />
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(255, 255, 255, 0.85)", fontSize: "0.85rem", lineHeight: 1.6 }}
                >
                  {siteConfig.contact.address.formatted}
                </Typography>
              </Box>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 1, my: 2 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <PhoneIcon sx={{ color: "warning.main", fontSize: 18 }} />
                  <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>
                    Official Phone Numbers:
                  </Typography>
                </Box>
                {siteConfig.contact.phoneNumbers.map((phone) => (
                  <Box
                    key={phone}
                    component="a"
                    href={getTelLink(phone)}
                    sx={{
                      color: "#FFFFFF",
                      textDecoration: "none",
                      fontSize: "0.88rem",
                      fontWeight: 600,
                      pl: 3.2,
                      "&:hover": { color: "warning.main" },
                    }}
                  >
                    +91 {formatPhone(phone)}
                  </Box>
                ))}
              </Box>

              <Box
                component="a"
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  bgcolor: "secondary.main",
                  color: "#FFFFFF",
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  mt: 1,
                  transition: "background-color 0.2s",
                  "&:hover": {
                    bgcolor: "secondary.dark",
                  },
                }}
              >
                <WhatsAppIcon sx={{ fontSize: 18 }} />
                Chat on WhatsApp
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.12)", my: 4 }} />

        {/* Bottom Bar: Copyright & Legal */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <Typography
            variant="caption"
            sx={{ color: "rgba(255, 255, 255, 0.65)", fontSize: "0.8rem" }}
          >
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
            Registered in Vijayapura, Karnataka. Darphan ID: {siteConfig.darphanId}.
          </Typography>

          <Box sx={{ display: "flex", gap: 3 }}>
            {legalLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  color: "rgba(255, 255, 255, 0.65)",
                  textDecoration: "none",
                  fontSize: "0.78rem",
                }}
              >
                {item.title}
              </Link>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
