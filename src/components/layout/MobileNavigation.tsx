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
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import { mainNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import {
  CloseIcon,
  KeyboardArrowDownIcon,
  PhoneIcon,
  WhatsAppIcon,
  LocationOnIcon,
} from "@/components/common/Icons";
import { getTelLink, getWhatsAppLink, formatPhone } from "@/lib/utils";

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

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: { xs: "85%", sm: 380 },
          display: "flex",
          flexDirection: "column",
          bgcolor: "#FFFFFF",
          p: 0,
        },
      }}
    >
      {/* Drawer Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2.5,
          borderBottom: "1px solid #E2E8F0",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Image
            src="/logo/warsia-logo.png"
            alt={siteConfig.name}
            width={44}
            height={44}
            style={{ objectFit: "contain" }}
          />
          <Box>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 800,
                color: "primary.main",
                lineHeight: 1.2,
                fontSize: "0.9rem",
              }}
            >
              WARSIA TRUST
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "text.secondary", fontSize: "0.72rem" }}
            >
              Darphan ID: {siteConfig.darphanId}
            </Typography>
          </Box>
        </Box>
        <IconButton
          onClick={onClose}
          aria-label="Close navigation menu"
          sx={{ color: "text.primary" }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Navigation Links */}
      <Box sx={{ flex: 1, overflowY: "auto", py: 2 }}>
        <List disablePadding>
          {mainNavigation.map((item) => {
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
                        py: 1.5,
                        display: "flex",
                        justifyContent: "space-between",
                        bgcolor: isActive ? "rgba(0, 40, 135, 0.05)" : "transparent",
                      }}
                    >
                      <ListItemText
                        primary={item.title}
                        primaryTypographyProps={{
                          fontWeight: isActive ? 700 : 600,
                          color: isActive ? "primary.main" : "text.primary",
                          fontSize: "1rem",
                        }}
                      />
                      <KeyboardArrowDownIcon
                        sx={{
                          transform: initiativesOpen ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.2s",
                          color: "text.secondary",
                        }}
                      />
                    </ListItemButton>
                  </ListItem>

                  <Collapse in={initiativesOpen} timeout="auto" unmountOnExit>
                    <List disablePadding sx={{ bgcolor: "background.paper", py: 1 }}>
                      <ListItem disablePadding>
                        <ListItemButton
                          component={Link}
                          href="/initiatives"
                          onClick={onClose}
                          sx={{ pl: 4.5, py: 1 }}
                        >
                          <ListItemText
                            primary="All Initiatives Overview"
                            primaryTypographyProps={{
                              fontSize: "0.9rem",
                              fontWeight: 600,
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
                            sx={{ pl: 4.5, py: 1 }}
                          >
                            <ListItemText
                              primary={subItem.title}
                              primaryTypographyProps={{
                                fontSize: "0.875rem",
                                fontWeight: pathname === subItem.href ? 700 : 500,
                                color:
                                  pathname === subItem.href
                                    ? "primary.main"
                                    : "text.secondary",
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
                    py: 1.5,
                    bgcolor: isActive ? "rgba(0, 40, 135, 0.05)" : "transparent",
                    borderLeft: isActive ? "4px solid #002887" : "4px solid transparent",
                  }}
                >
                  <ListItemText
                    primary={item.title}
                    primaryTypographyProps={{
                      fontWeight: isActive ? 700 : 600,
                      color: isActive ? "primary.main" : "text.primary",
                      fontSize: "1rem",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>

      {/* Bottom Contact & Quick CTAs */}
      <Box sx={{ p: 2.5, bgcolor: "background.paper", borderTop: "1px solid #E2E8F0" }}>
        <Box sx={{ mb: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
            <LocationOnIcon sx={{ fontSize: 18, color: "secondary.main" }} />
            <Typography variant="caption" sx={{ color: "text.secondary", fontWeight: 500 }}>
              Vijayapura, Karnataka – 586101
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <PhoneIcon sx={{ fontSize: 18, color: "primary.main" }} />
            <Typography
              component="a"
              href={getTelLink(siteConfig.contact.primaryPhone)}
              variant="caption"
              sx={{ color: "text.primary", fontWeight: 700, textDecoration: "none" }}
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
            color="secondary"
            fullWidth
            startIcon={<WhatsAppIcon />}
            sx={{ py: 1.2, fontWeight: 700 }}
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
            sx={{ py: 1 }}
          >
            Contact Our Trust
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
}
