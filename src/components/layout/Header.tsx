"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Chip from "@mui/material/Chip";
import { siteConfig } from "@/config/site";
import { mainNavigation } from "@/config/navigation";
import {
  MenuIcon,
  KeyboardArrowDownIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/components/common/Icons";
import MobileNavigation from "./MobileNavigation";
import { getTelLink, getWhatsAppLink, formatPhone } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [initiativesAnchor, setInitiativesAnchor] =
    useState<null | HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenInitiatives = (event: React.MouseEvent<HTMLElement>) => {
    setInitiativesAnchor(event.currentTarget);
  };

  const handleCloseInitiatives = () => {
    setInitiativesAnchor(null);
  };

  return (
    <>
      {/* Top Notification / Information Bar */}
      <Box
        sx={{
          bgcolor: "primary.dark",
          color: "#FFFFFF",
          py: 0.8,
          px: 2,
          fontSize: "0.8rem",
          display: { xs: "none", md: "block" },
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Typography variant="caption" sx={{ color: "#E2E8F0", fontWeight: 500 }}>
              Official NGO Darphan ID: <strong>{siteConfig.darphanId}</strong>
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: "warning.main",
                fontWeight: 600,
                letterSpacing: "0.02em",
                fontStyle: "italic",
              }}
            >
              &ldquo;{siteConfig.slogan}&rdquo;
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2.5 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
              <PhoneIcon sx={{ fontSize: 15, color: "warning.main" }} />
              <Typography
                component="a"
                href={getTelLink(siteConfig.contact.primaryPhone)}
                variant="caption"
                sx={{
                  color: "#FFFFFF",
                  fontWeight: 600,
                  textDecoration: "none",
                  "&:hover": { color: "warning.main" },
                }}
              >
                +91 {formatPhone(siteConfig.contact.primaryPhone)}
              </Typography>
            </Box>

            <Chip
              label="Vijayapura, Karnataka"
              size="small"
              sx={{
                height: 22,
                fontSize: "0.7rem",
                bgcolor: "rgba(255,255,255,0.12)",
                color: "#FFFFFF",
                fontWeight: 500,
              }}
            />
          </Box>
        </Container>
      </Box>

      {/* Main Sticky Navigation Header */}
      <AppBar
        position="sticky"
        elevation={scrolled ? 3 : 0}
        sx={{
          bgcolor: scrolled ? "rgba(255, 255, 255, 0.98)" : "#FFFFFF",
          backdropFilter: "blur(10px)",
          color: "text.primary",
          transition: "all 0.3s ease",
          borderBottom: "1px solid",
          borderColor: scrolled ? "rgba(0, 40, 135, 0.1)" : "divider",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              minHeight: { xs: 68, md: 80 },
              justifyContent: "space-between",
            }}
          >
            {/* Logo and Trust Title */}
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                textDecoration: "none",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: { xs: 48, md: 58 },
                  height: { xs: 48, md: 58 },
                  flexShrink: 0,
                }}
              >
                <Image
                  src="/logo/warsia-logo.png"
                  alt={`${siteConfig.name} official emblem`}
                  fill
                  sizes="(max-width: 768px) 48px, 58px"
                  style={{ objectFit: "contain" }}
                  priority
                />
              </Box>

              <Box>
                <Typography
                  component="span"
                  sx={{
                    display: "block",
                    fontWeight: 800,
                    fontSize: { xs: "0.95rem", sm: "1.1rem", md: "1.15rem" },
                    color: "primary.main",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.15,
                  }}
                >
                  WARSIA TRUST
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    display: { xs: "none", sm: "block" },
                    fontSize: { xs: "0.68rem", md: "0.72rem" },
                    fontWeight: 600,
                    color: "text.secondary",
                    letterSpacing: "0.02em",
                    textTransform: "uppercase",
                  }}
                >
                  Educational &amp; Social Development Trust
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    display: { xs: "block", sm: "none" },
                    fontSize: "0.65rem",
                    fontWeight: 500,
                    color: "secondary.main",
                  }}
                >
                  Vijayapura, Karnataka
                </Typography>
              </Box>
            </Link>

            {/* Desktop Navigation Links */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 0.5,
              }}
            >
              {mainNavigation.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));

                if (item.children) {
                  return (
                    <Box key={item.title}>
                      <Button
                        onClick={handleOpenInitiatives}
                        endIcon={<KeyboardArrowDownIcon sx={{ fontSize: 18 }} />}
                        sx={{
                          color: isActive ? "primary.main" : "text.primary",
                          fontWeight: isActive ? 700 : 600,
                          fontSize: "0.92rem",
                          px: 1.8,
                          py: 1,
                          position: "relative",
                          "&::after": isActive
                            ? {
                                content: '""',
                                position: "absolute",
                                bottom: 0,
                                left: 14,
                                right: 14,
                                height: 3,
                                bgcolor: "primary.main",
                                borderRadius: "2px 2px 0 0",
                              }
                            : {},
                          "&:hover": {
                            bgcolor: "rgba(0, 40, 135, 0.04)",
                            color: "primary.main",
                          },
                        }}
                      >
                        {item.title}
                      </Button>

                      <Menu
                        anchorEl={initiativesAnchor}
                        open={Boolean(initiativesAnchor)}
                        onClose={handleCloseInitiatives}
                        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                        transformOrigin={{ vertical: "top", horizontal: "left" }}
                        PaperProps={{
                          sx: {
                            mt: 1.5,
                            minWidth: 280,
                            borderRadius: 3,
                            boxShadow: "0 12px 36px rgba(0, 40, 135, 0.15)",
                            p: 1,
                            border: "1px solid #E2E8F0",
                          },
                        }}
                      >
                        <MenuItem
                          component={Link}
                          href="/initiatives"
                          onClick={handleCloseInitiatives}
                          sx={{
                            borderRadius: 2,
                            py: 1.2,
                            bgcolor: "rgba(0, 40, 135, 0.04)",
                            mb: 0.5,
                          }}
                        >
                          <ListItemText
                            primary="All Initiatives"
                            secondary="Explore our 5 core pillars"
                            primaryTypographyProps={{
                              fontWeight: 700,
                              color: "primary.main",
                              fontSize: "0.92rem",
                            }}
                            secondaryTypographyProps={{ fontSize: "0.78rem" }}
                          />
                        </MenuItem>

                        {item.children.map((sub) => (
                          <MenuItem
                            key={sub.href}
                            component={Link}
                            href={sub.href}
                            onClick={handleCloseInitiatives}
                            sx={{
                              borderRadius: 2,
                              py: 1,
                              "&:hover": {
                                bgcolor: "rgba(0, 40, 135, 0.06)",
                              },
                            }}
                          >
                            <ListItemText
                              primary={sub.title}
                              secondary={sub.description}
                              primaryTypographyProps={{
                                fontWeight: pathname === sub.href ? 700 : 600,
                                color:
                                  pathname === sub.href
                                    ? "primary.main"
                                    : "text.primary",
                                fontSize: "0.9rem",
                              }}
                              secondaryTypographyProps={{
                                fontSize: "0.76rem",
                                noWrap: true,
                              }}
                            />
                          </MenuItem>
                        ))}
                      </Menu>
                    </Box>
                  );
                }

                return (
                  <Button
                    key={item.href}
                    component={Link}
                    href={item.href}
                    sx={{
                      color: isActive ? "primary.main" : "text.primary",
                      fontWeight: isActive ? 700 : 600,
                      fontSize: "0.92rem",
                      px: 1.8,
                      py: 1,
                      position: "relative",
                      "&::after": isActive
                        ? {
                            content: '""',
                            position: "absolute",
                            bottom: 0,
                            left: 14,
                            right: 14,
                            height: 3,
                            bgcolor: "primary.main",
                            borderRadius: "2px 2px 0 0",
                          }
                        : {},
                      "&:hover": {
                        bgcolor: "rgba(0, 40, 135, 0.04)",
                        color: "primary.main",
                      },
                    }}
                  >
                    {item.title}
                  </Button>
                );
              })}
            </Box>

            {/* Header Right Action CTA */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Button
                component="a"
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                color="secondary"
                size="medium"
                startIcon={<WhatsAppIcon sx={{ fontSize: 20 }} />}
                sx={{
                  display: { xs: "none", sm: "inline-flex" },
                  fontWeight: 700,
                  bgcolor: "secondary.main",
                  "&:hover": {
                    bgcolor: "secondary.dark",
                  },
                }}
              >
                Join Mission
              </Button>

              {/* Mobile Menu Button */}
              <IconButton
                color="inherit"
                aria-label="Open mobile navigation menu"
                edge="end"
                onClick={() => setMobileOpen(true)}
                sx={{
                  display: { md: "none" },
                  color: "primary.main",
                  p: 1,
                }}
              >
                <MenuIcon sx={{ fontSize: 28 }} />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <MobileNavigation
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
}
