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
  KeyboardArrowDownIcon,
  PhoneIcon,
  WhatsAppIcon,
  LocationOnIcon,
  VerifiedIcon,
  MosqueIcon,
  TempleHinduIcon,
  BloodtypeIcon,
  SchoolIcon,
  VolunteerActivismIcon,
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
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenInitiatives = (event: React.MouseEvent<HTMLElement>) => {
    setInitiativesAnchor(event.currentTarget);
  };

  const handleCloseInitiatives = () => {
    setInitiativesAnchor(null);
  };

  const getInitiativeIcon = (href: string) => {
    if (href.includes("masjid"))
      return <MosqueIcon sx={{ fontSize: 20, color: "#006000" }} />;
    if (href.includes("temple"))
      return <TempleHinduIcon sx={{ fontSize: 20, color: "#F27501" }} />;
    if (href.includes("blood"))
      return <BloodtypeIcon sx={{ fontSize: 20, color: "#C62828" }} />;
    if (href.includes("education"))
      return <SchoolIcon sx={{ fontSize: 20, color: "#002887" }} />;
    return <VolunteerActivismIcon sx={{ fontSize: 20, color: "#006000" }} />;
  };

  return (
    <>
      {/* Top Government & Contact Bar */}
      <Box
        sx={{
          bgcolor: "#001B5C",
          color: "#FFFFFF",
          py: 0.9,
          px: 2,
          fontSize: "0.8rem",
          display: { xs: "none", md: "block" },
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
              <LocationOnIcon sx={{ fontSize: 15, color: "#F27501" }} />
              <Typography variant="caption" sx={{ color: "#E2E8F0", fontWeight: 600 }}>
                Vijayapura, Karnataka
              </Typography>
            </Box>

            <Box
              sx={{
                width: 4,
                height: 4,
                borderRadius: "50%",
                bgcolor: "rgba(255, 255, 255, 0.3)",
              }}
            />

            <Typography
              variant="caption"
              sx={{
                color: "#FFA040",
                fontWeight: 600,
                letterSpacing: "0.02em",
                fontStyle: "italic",
              }}
            >
              &ldquo;{siteConfig.slogan}&rdquo;
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
              <PhoneIcon sx={{ fontSize: 15, color: "#F27501" }} />
              <Typography
                component="a"
                href={getTelLink(siteConfig.contact.primaryPhone)}
                variant="caption"
                sx={{
                  color: "#FFFFFF",
                  fontWeight: 700,
                  textDecoration: "none",
                  "&:hover": { color: "#F27501" },
                }}
              >
                +91 {formatPhone(siteConfig.contact.primaryPhone)}
              </Typography>
            </Box>

            <Box
              sx={{
                px: 1.4,
                py: 0.3,
                borderRadius: 9999,
                bgcolor: "rgba(255, 255, 255, 0.12)",
                fontSize: "0.72rem",
                fontWeight: 600,
                color: "#FFFFFF",
              }}
            >
              Vijayapura, Karnataka
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Main Sticky Header */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: scrolled ? "rgba(255, 255, 255, 0.98)" : "#FFFFFF",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          color: "text.primary",
          borderBottom: "1px solid",
          borderColor: scrolled ? "rgba(0, 40, 135, 0.12)" : "#E2E8F0",
          boxShadow: scrolled
            ? "0 4px 20px rgba(0, 27, 92, 0.06)"
            : "0 1px 3px rgba(0, 0, 0, 0.02)",
          transition: "all 0.3s ease",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              minHeight: { xs: 68, md: 78 },
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            {/* Logo and Brand Title */}
            <Box sx={{ display: "flex", alignItems: "center", minWidth: 0, flexShrink: 1 }}>
              <Link
                href="/"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  textDecoration: "none",
                  minWidth: 0,
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: { xs: 42, sm: 48, md: 54 },
                    height: { xs: 42, sm: 48, md: 54 },
                    flexShrink: 0,
                    transition: "transform 0.25s ease",
                    "&:hover": {
                      transform: "scale(1.03)",
                    },
                  }}
                >
                  <Image
                    src="/logo/warsia-logo.png"
                    alt={`${siteConfig.name} official emblem`}
                    fill
                    sizes="(max-width: 768px) 44px, 54px"
                    style={{ objectFit: "contain" }}
                    priority
                  />
                </Box>

                <Box sx={{ minWidth: 0 }}>
                  <Typography
                    component="span"
                    sx={{
                      display: "block",
                      fontWeight: 900,
                      fontSize: { xs: "1.02rem", sm: "1.18rem", md: "1.28rem" },
                      color: "primary.main",
                      letterSpacing: "-0.02em",
                      lineHeight: 1.15,
                      whiteSpace: "nowrap",
                    }}
                  >
                    WARSIA TRUST
                  </Typography>
                  <Typography
                    component="span"
                    sx={{
                      display: { xs: "none", lg: "block" },
                      fontSize: { xs: "0.68rem", md: "0.72rem" },
                      fontWeight: 700,
                      color: "text.secondary",
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Educational &amp; Social Development Trust
                  </Typography>
                  <Typography
                    component="span"
                    sx={{
                      display: { xs: "block", lg: "none" },
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      color: "secondary.main",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Vijayapura, Karnataka
                  </Typography>
                </Box>
              </Link>
            </Box>

            {/* Desktop Navigation Links */}
            <Box
              sx={{
                display: { xs: "none", lg: "flex" },
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
                        endIcon={
                          <KeyboardArrowDownIcon
                            sx={{
                              fontSize: 18,
                              transform: Boolean(initiativesAnchor)
                                ? "rotate(180deg)"
                                : "rotate(0deg)",
                              transition: "transform 0.2s",
                            }}
                          />
                        }
                        sx={{
                          color: isActive ? "primary.main" : "text.primary",
                          fontWeight: isActive ? 800 : 600,
                          fontSize: "0.92rem",
                          px: 2,
                          py: 1,
                          borderRadius: 2,
                          "&:hover": {
                            bgcolor: "rgba(0, 40, 135, 0.05)",
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
                            minWidth: 320,
                            borderRadius: 3.5,
                            boxShadow: "0 16px 45px rgba(0, 27, 92, 0.14)",
                            p: 1.2,
                            border: "1px solid #E2E8F0",
                            bgcolor: "#FFFFFF",
                          },
                        }}
                      >
                        <MenuItem
                          component={Link}
                          href="/initiatives"
                          onClick={handleCloseInitiatives}
                          sx={{
                            borderRadius: 2.5,
                            py: 1.4,
                            bgcolor: "rgba(0, 40, 135, 0.04)",
                            mb: 1,
                            "&:hover": {
                              bgcolor: "rgba(0, 40, 135, 0.08)",
                            },
                          }}
                        >
                          <ListItemText
                            primary="All Initiatives Overview"
                            secondary="Explore our 6 core humanitarian pillars"
                            primaryTypographyProps={{
                              fontWeight: 800,
                              color: "primary.main",
                              fontSize: "0.94rem",
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
                              borderRadius: 2.5,
                              py: 1.2,
                              px: 1.8,
                              display: "flex",
                              gap: 1.5,
                              alignItems: "flex-start",
                              "&:hover": {
                                bgcolor: "rgba(0, 40, 135, 0.05)",
                              },
                            }}
                          >
                            <Box sx={{ mt: 0.3 }}>{getInitiativeIcon(sub.href)}</Box>
                            <ListItemText
                              primary={sub.title}
                              secondary={sub.description}
                              primaryTypographyProps={{
                                fontWeight: pathname === sub.href ? 800 : 600,
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
                      fontWeight: isActive ? 800 : 600,
                      fontSize: "0.92rem",
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      position: "relative",
                      "&::after": isActive
                        ? {
                            content: '""',
                            position: "absolute",
                            bottom: 4,
                            left: 16,
                            right: 16,
                            height: 2.5,
                            bgcolor: "primary.main",
                            borderRadius: 2,
                          }
                        : {},
                      "&:hover": {
                        bgcolor: "rgba(0, 40, 135, 0.05)",
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
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, flexShrink: 0 }}>
              <Button
                component="a"
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                size="medium"
                startIcon={<WhatsAppIcon sx={{ fontSize: 20 }} />}
                sx={{
                  display: { xs: "none", sm: "inline-flex" },
                  fontWeight: 800,
                  fontSize: "0.92rem",
                  bgcolor: "secondary.main",
                  color: "#FFFFFF",
                  px: { sm: 2.2, md: 2.8 },
                  py: 1.1,
                  borderRadius: 9999,
                  boxShadow: "0 4px 14px rgba(0, 96, 0, 0.22)",
                  "&:hover": {
                    bgcolor: "secondary.dark",
                    boxShadow: "0 6px 20px rgba(0, 96, 0, 0.35)",
                  },
                }}
              >
                Join Mission
              </Button>

              {/* Mobile Menu Hamburger */}
              <IconButton
                color="inherit"
                aria-label="Open mobile navigation menu"
                onClick={() => setMobileOpen(true)}
                sx={{
                  display: { lg: "none" },
                  color: "primary.main",
                  p: 1.2,
                  bgcolor: "rgba(0, 40, 135, 0.06)",
                  borderRadius: 2.5,
                  border: "1px solid rgba(0, 40, 135, 0.12)",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    bgcolor: "rgba(0, 40, 135, 0.12)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 22,
                    height: 16,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: 2.5,
                      bgcolor: "currentColor",
                      borderRadius: 2,
                    }}
                  />
                  <Box
                    sx={{
                      width: "70%",
                      height: 2.5,
                      bgcolor: "currentColor",
                      borderRadius: 2,
                    }}
                  />
                  <Box
                    sx={{
                      width: "100%",
                      height: 2.5,
                      bgcolor: "currentColor",
                      borderRadius: 2,
                    }}
                  />
                </Box>
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer Navigation */}
      <MobileNavigation
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
}
