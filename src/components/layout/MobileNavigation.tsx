"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import { mainNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import {
  CloseIcon,
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
import { getTelLink, getWhatsAppLink, formatPhone } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface MobileNavigationProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileNavigation({
  open,
  onClose,
}: MobileNavigationProps) {
  const pathname = usePathname();
  const [initiativesOpen, setInitiativesOpen] = useState(true);

  const getSubIcon = (href: string) => {
    if (href.includes("masjid")) return <MosqueIcon sx={{ fontSize: 18, color: "#006000" }} />;
    if (href.includes("temple")) return <TempleHinduIcon sx={{ fontSize: 18, color: "#F27501" }} />;
    if (href.includes("blood")) return <BloodtypeIcon sx={{ fontSize: 18, color: "#C62828" }} />;
    if (href.includes("education")) return <SchoolIcon sx={{ fontSize: 18, color: "#002887" }} />;
    return <VolunteerActivismIcon sx={{ fontSize: 18, color: "#006000" }} />;
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: { xs: "86%", sm: 400 },
          display: "flex",
          flexDirection: "column",
          bgcolor: "#FFFFFF",
          p: 0,
          boxShadow: "-10px 0 50px rgba(0, 27, 92, 0.25)",
        },
      }}
    >
      {/* Drawer Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2.8,
          borderBottom: "1px solid #E2E8F0",
          bgcolor: "#F7F8FC",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Image
            src="/logo/warsia-logo.png"
            alt={siteConfig.name}
            width={46}
            height={46}
            style={{ objectFit: "contain" }}
          />
          <Box>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 900,
                color: "primary.main",
                lineHeight: 1.2,
                fontSize: "0.95rem",
              }}
            >
              WARSIA TRUST
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "text.secondary", fontSize: "0.74rem", fontWeight: 600 }}
            >
              Vijayapura, Karnataka
            </Typography>
          </Box>
        </Box>

        <IconButton
          onClick={onClose}
          aria-label="Close navigation menu"
          sx={{
            color: "text.primary",
            bgcolor: "#FFFFFF",
            border: "1px solid #E2E8F0",
            "&:hover": { bgcolor: "#EEF2F8" },
          }}
        >
          <CloseIcon sx={{ fontSize: 22 }} />
        </IconButton>
      </Box>

      {/* Slogan Banner */}
      <Box
        sx={{
          bgcolor: "#001B5C",
          color: "#FFFFFF",
          px: 2.5,
          py: 1.2,
          textAlign: "center",
        }}
      >
        <Typography
          variant="caption"
          sx={{
            fontStyle: "italic",
            color: "warning.light",
            fontWeight: 700,
            fontSize: "0.8rem",
            letterSpacing: "0.01em",
          }}
        >
          &ldquo;{siteConfig.slogan}&rdquo;
        </Typography>
      </Box>

      {/* Navigation Links */}
      <Box sx={{ flex: 1, overflowY: "auto", py: 2 }}>
        <List disablePadding>
          {mainNavigation.map((item, idx) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            if (item.children) {
              return (
                <React.Fragment key={item.title}>
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={() => setInitiativesOpen(!initiativesOpen)}
                      sx={{
                        px: 3,
                        py: 1.6,
                        display: "flex",
                        justifyContent: "space-between",
                        bgcolor: isActive ? "rgba(0, 40, 135, 0.05)" : "transparent",
                      }}
                    >
                      <ListItemText
                        primary={item.title}
                        primaryTypographyProps={{
                          fontWeight: isActive ? 800 : 700,
                          color: isActive ? "primary.main" : "text.primary",
                          fontSize: "1.05rem",
                        }}
                      />
                      <KeyboardArrowDownIcon
                        sx={{
                          transform: initiativesOpen ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.25s ease",
                          color: "text.secondary",
                        }}
                      />
                    </ListItemButton>
                  </ListItem>

                  <Collapse in={initiativesOpen} timeout="auto" unmountOnExit>
                    <List disablePadding sx={{ bgcolor: "#F7F8FC", py: 1 }}>
                      <ListItem disablePadding>
                        <ListItemButton
                          component={Link}
                          href="/initiatives"
                          onClick={onClose}
                          sx={{ pl: 4.5, py: 1.2 }}
                        >
                          <ListItemText
                            primary="All Initiatives Overview"
                            primaryTypographyProps={{
                              fontSize: "0.92rem",
                              fontWeight: 700,
                              color: "primary.main",
                            }}
                          />
                        </ListItemButton>
                      </ListItem>

                      {item.children.map((subItem) => (
                        <ListItem disablePadding key={subItem.href}>
                          <ListItemButton
                            component={Link}
                            href={subItem.href}
                            onClick={onClose}
                            sx={{
                              pl: 4.5,
                              py: 1.2,
                              display: "flex",
                              gap: 1.2,
                              bgcolor:
                                pathname === subItem.href
                                  ? "rgba(0, 40, 135, 0.08)"
                                  : "transparent",
                            }}
                          >
                            <Box sx={{ mt: 0.2 }}>{getSubIcon(subItem.href)}</Box>
                            <ListItemText
                              primary={subItem.title}
                              secondary={subItem.description}
                              primaryTypographyProps={{
                                fontSize: "0.88rem",
                                fontWeight: pathname === subItem.href ? 800 : 600,
                                color:
                                  pathname === subItem.href
                                    ? "primary.main"
                                    : "text.primary",
                              }}
                              secondaryTypographyProps={{
                                fontSize: "0.74rem",
                                noWrap: true,
                              }}
                            />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                </React.Fragment>
              );
            }

            return (
              <ListItem disablePadding key={item.href}>
                <ListItemButton
                  component={Link}
                  href={item.href}
                  onClick={onClose}
                  sx={{
                    px: 3,
                    py: 1.6,
                    bgcolor: isActive ? "rgba(0, 40, 135, 0.06)" : "transparent",
                    borderLeft: isActive
                      ? "4px solid #F27501"
                      : "4px solid transparent",
                  }}
                >
                  <ListItemText
                    primary={item.title}
                    primaryTypographyProps={{
                      fontWeight: isActive ? 800 : 600,
                      color: isActive ? "primary.main" : "text.primary",
                      fontSize: "1.05rem",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>

      {/* Drawer Footer with Quick Contact Actions */}
      <Box
        sx={{
          p: 3,
          bgcolor: "#F7F8FC",
          borderTop: "1px solid #E2E8F0",
        }}
      >
        <Box sx={{ mb: 2.5 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
            <LocationOnIcon sx={{ fontSize: 18, color: "secondary.main" }} />
            <Typography variant="caption" sx={{ color: "text.secondary", fontWeight: 600 }}>
              Vijayapura, Karnataka – 586101
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <PhoneIcon sx={{ fontSize: 18, color: "warning.main" }} />
            <Typography
              component="a"
              href={getTelLink(siteConfig.contact.primaryPhone)}
              variant="caption"
              sx={{ color: "text.primary", fontWeight: 800, textDecoration: "none" }}
            >
              +91 {formatPhone(siteConfig.contact.primaryPhone)}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
          <Button
            component="a"
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            color="warning"
            fullWidth
            startIcon={<WhatsAppIcon />}
            sx={{ py: 1.4, fontWeight: 800, borderRadius: 9999 }}
          >
            Connect on WhatsApp
          </Button>

          <Button
            component={Link}
            href="/contact"
            onClick={onClose}
            variant="outlined"
            color="primary"
            fullWidth
            sx={{ py: 1.2, fontWeight: 700, borderRadius: 9999 }}
          >
            Contact Trust Office
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
}
