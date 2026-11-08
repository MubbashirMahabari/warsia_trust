"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
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
  ArrowForwardIcon,
} from "@/components/common/Icons";
import { getTelLink, getWhatsAppLink, formatPhone } from "@/lib/utils";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#001B5C", // Official Deep Navy
        color: "#FFFFFF",
        pt: { xs: 8, md: 11 },
        pb: 5,
        borderTop: "4px solid #F27501", // Saffron accent top line
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle ambient gradient overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 10% 20%, rgba(0, 96, 0, 0.15) 0%, transparent 45%),
            radial-gradient(circle at 90% 80%, rgba(242, 117, 1, 0.12) 0%, transparent 45%)
          `,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1, px: { xs: 2.5, sm: 4, md: 6, lg: 8 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "1.3fr 1fr 0.8fr 1.2fr",
            },
            gap: { xs: 5, md: 6 },
          }}
        >
          {/* Column 1: Organization details & Logo with slogan */}
          <Box>
            <Box
              sx={{
                mb: 3,
                bgcolor: "#FFFFFF",
                p: 2,
                borderRadius: 3,
                display: "inline-block",
                maxWidth: 300,
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: 72,
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
                fontWeight: 900,
                color: "#FFFFFF",
                fontSize: "1.08rem",
                lineHeight: 1.35,
                mb: 1.5,
                letterSpacing: "-0.01em",
              }}
            >
              {siteConfig.name}
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.8 }}>
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
              sx={{ color: "rgba(255, 255, 255, 0.78)", mb: 2, fontSize: "0.9rem" }}
            >
              <strong>President:</strong> {siteConfig.president}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                fontStyle: "italic",
                color: "warning.light",
                fontWeight: 700,
                fontSize: "0.92rem",
                borderLeft: "3px solid #F27501",
                pl: 1.8,
                my: 2.5,
                lineHeight: 1.6,
              }}
            >
              &ldquo;{siteConfig.slogan}&rdquo;
            </Typography>
          </Box>

          {/* Column 2: Key Initiatives */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                color: "#FFFFFF",
                fontWeight: 800,
                fontSize: "1.05rem",
                mb: 3,
                letterSpacing: "-0.01em",
                position: "relative",
                "&::after": {
                  content: '""',
                  display: "block",
                  width: 32,
                  height: 3,
                  bgcolor: "secondary.main",
                  mt: 1,
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
                  sx={{ mb: 1.6 }}
                >
                  <Link
                    href={initiative.href}
                    style={{
                      color: "rgba(255, 255, 255, 0.78)",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      transition: "all 0.25s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#F27501";
                      e.currentTarget.style.transform = "translateX(5px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(255, 255, 255, 0.78)";
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    <span>›</span>
                    <span>{initiative.title}</span>
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Column 3: Quick Navigation */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                color: "#FFFFFF",
                fontWeight: 800,
                fontSize: "1.05rem",
                mb: 3,
                letterSpacing: "-0.01em",
                position: "relative",
                "&::after": {
                  content: '""',
                  display: "block",
                  width: 32,
                  height: 3,
                  bgcolor: "warning.main",
                  mt: 1,
                  borderRadius: 2,
                },
              }}
            >
              Navigation
            </Typography>

            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              {footerQuickLinks.map((item) => (
                <Box component="li" key={item.title} sx={{ mb: 1.6 }}>
                  <Link
                    href={item.href}
                    style={{
                      color: "rgba(255, 255, 255, 0.78)",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      transition: "all 0.25s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#F27501";
                      e.currentTarget.style.transform = "translateX(5px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(255, 255, 255, 0.78)";
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    <span>›</span>
                    <span>{item.title}</span>
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Column 4: Contact & Location */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                color: "#FFFFFF",
                fontWeight: 800,
                fontSize: "1.05rem",
                mb: 3,
                letterSpacing: "-0.01em",
                position: "relative",
                "&::after": {
                  content: '""',
                  display: "block",
                  width: 32,
                  height: 3,
                  bgcolor: "secondary.main",
                  mt: 1,
                  borderRadius: 2,
                },
              }}
            >
              Official Contact
            </Typography>

            <Box sx={{ mb: 2 }}>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.2, mb: 2 }}>
                <LocationOnIcon sx={{ color: "warning.main", fontSize: 20, mt: 0.3, flexShrink: 0 }} />
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(255, 255, 255, 0.85)", fontSize: "0.88rem", lineHeight: 1.65 }}
                >
                  {siteConfig.contact.address.formatted}
                </Typography>
              </Box>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 1, my: 2 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <PhoneIcon sx={{ color: "warning.main", fontSize: 18 }} />
                  <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.7)", fontWeight: 700 }}>
                    Official Helpline Numbers:
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
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      pl: 3.2,
                      transition: "color 0.2s",
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
                  gap: 1.2,
                  px: 2.4,
                  py: 1.2,
                  borderRadius: 9999,
                  bgcolor: "secondary.main",
                  color: "#FFFFFF",
                  textDecoration: "none",
                  fontWeight: 800,
                  fontSize: "0.88rem",
                  mt: 1.5,
                  boxShadow: "0 4px 16px rgba(0, 96, 0, 0.3)",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    bgcolor: "secondary.dark",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <WhatsAppIcon sx={{ fontSize: 20 }} />
                Connect on WhatsApp
              </Box>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.12)", my: 5 }} />

        {/* Bottom Bar: Copyright & Legal */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2.5,
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <Typography
            variant="caption"
            sx={{ color: "rgba(255, 255, 255, 0.65)", fontSize: "0.82rem" }}
          >
            &copy; {currentYear} {siteConfig.name}. Registered in Vijayapura, Karnataka. NGO Darphan ID: {siteConfig.darphanId}.
          </Typography>

          <Box sx={{ display: "flex", gap: 3 }}>
            {legalLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  color: "rgba(255, 255, 255, 0.65)",
                  textDecoration: "none",
                  fontSize: "0.82rem",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#F27501";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255, 255, 255, 0.65)";
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
