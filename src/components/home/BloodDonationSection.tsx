"use client";

import React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import { siteConfig } from "@/config/site";
import SectionHeading from "@/components/common/SectionHeading";
import AnimatedSection from "@/components/common/AnimatedSection";
import {
  BloodtypeIcon,
  WhatsAppIcon,
  ArrowForwardIcon,
  CheckCircleIcon,
  PhoneIcon,
} from "@/components/common/Icons";
import { getWhatsAppLink, getTelLink, formatPhone } from "@/lib/utils";

export default function BloodDonationSection() {
  const bloodWhatsAppLink = getWhatsAppLink(
    "Hello Warsia Trust, I would like to register as a voluntary blood donor / need emergency blood assistance in Vijayapura."
  );

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "#FFF8F8", // Soft warm red-tinted background
        borderTop: "1px solid rgba(198, 40, 40, 0.1)",
        borderBottom: "1px solid rgba(198, 40, 40, 0.1)",
      }}
    >
      <Container maxWidth="lg">
        <AnimatedSection>
          <SectionHeading
            badge="Voluntary Life-Saving Network"
            badgeColor="error"
            title="Donate Blood. Save Lives."
            subtitle="Every drop counts. We encourage people to come together, support patients in need, and contribute towards saving precious lives."
          />
        </AnimatedSection>

        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          {/* Left Column: Awareness & Importance */}
          <Grid item xs={12} md={7}>
            <AnimatedSection delay={0.1}>
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 800,
                    color: "primary.main",
                    fontSize: { xs: "1.35rem", sm: "1.7rem" },
                    lineHeight: 1.3,
                    mb: 2,
                  }}
                >
                  Connecting Donors with Patients in Critical Need
                </Typography>

                <Typography
                  variant="body1"
                  sx={{ color: "text.primary", lineHeight: 1.8, mb: 2, fontSize: "1.05rem" }}
                >
                  In times of medical crisis, emergency surgeries, or critical trauma,
                  finding the right blood match within golden hours can determine life.
                  Warsia Educational &amp; Social Development Trust maintains a responsive,
                  compassionate network of voluntary donors across Vijayapura.
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", lineHeight: 1.7, mb: 3, fontSize: "0.95rem" }}
                >
                  We actively create awareness on regular voluntary blood donation,
                  assist families facing difficulties locating rare blood groups, and
                  support voluntary donation drives in partnership with certified local
                  medical institutions.
                </Typography>
              </Box>

              {/* Crucial Bullet Points */}
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.8, mb: 4 }}>
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                  <CheckCircleIcon sx={{ color: "#C62828", fontSize: 22, mt: 0.3 }} />
                  <Typography variant="body2" sx={{ color: "text.primary", fontWeight: 600 }}>
                    Emergency donor coordination for patients admitted in Vijayapura hospitals
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                  <CheckCircleIcon sx={{ color: "#C62828", fontSize: 22, mt: 0.3 }} />
                  <Typography variant="body2" sx={{ color: "text.primary", fontWeight: 600 }}>
                    Promoting 100% voluntary, safe, and altruistic blood donation
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                  <CheckCircleIcon sx={{ color: "#C62828", fontSize: 22, mt: 0.3 }} />
                  <Typography variant="body2" sx={{ color: "text.primary", fontWeight: 600 }}>
                    Strict adherence to medical safety standards — non-commercial &amp; humane
                  </Typography>
                </Box>
              </Box>

              {/* Action Buttons */}
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                <Button
                  component="a"
                  href={bloodWhatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  size="large"
                  startIcon={<WhatsAppIcon />}
                  sx={{
                    bgcolor: "#C62828",
                    color: "#FFFFFF",
                    fontWeight: 700,
                    px: 3.5,
                    py: 1.3,
                    boxShadow: "0 8px 24px rgba(198, 40, 40, 0.25)",
                    "&:hover": {
                      bgcolor: "#B71C1C",
                    },
                  }}
                >
                  Become a Blood Donor
                </Button>

                <Button
                  component={Link}
                  href="/initiatives/blood-donation"
                  variant="outlined"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    borderColor: "primary.main",
                    color: "primary.main",
                    fontWeight: 700,
                    "&:hover": {
                      borderColor: "primary.dark",
                      bgcolor: "rgba(0, 40, 135, 0.04)",
                    },
                  }}
                >
                  Blood Initiative Details
                </Button>
              </Box>
            </AnimatedSection>
          </Grid>

          {/* Right Column: Emergency Helpline Card */}
          <Grid item xs={12} md={5}>
            <AnimatedSection delay={0.2}>
              <Card
                sx={{
                  borderRadius: 4,
                  border: "2px solid rgba(198, 40, 40, 0.2)",
                  bgcolor: "#FFFFFF",
                  boxShadow: "0 12px 35px rgba(198, 40, 40, 0.1)",
                  p: { xs: 3, sm: 4 },
                }}
              >
                <CardContent sx={{ p: 0 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
                    <Box
                      sx={{
                        width: 52,
                        height: 52,
                        borderRadius: 3,
                        bgcolor: "rgba(198, 40, 40, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <BloodtypeIcon sx={{ fontSize: 32, color: "#C62828" }} />
                    </Box>
                    <Box>
                      <Typography variant="caption" sx={{ color: "#C62828", fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                        EMERGENCY HELPLINE
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 800, color: "primary.main" }}>
                        Vijayapura Blood Support
                      </Typography>
                    </Box>
                  </Box>

                  <Typography variant="body2" sx={{ color: "text.secondary", mb: 3, lineHeight: 1.6 }}>
                    Facing an urgent blood requirement for a patient in Vijayapura?
                    Contact our volunteer coordinators directly.
                  </Typography>

                  <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, mb: 3 }}>
                    {siteConfig.contact.phoneNumbers.map((phone, i) => (
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
                          borderRadius: 2,
                          bgcolor: "#FFF5F5",
                          border: "1px solid rgba(198, 40, 40, 0.15)",
                          textDecoration: "none",
                          transition: "all 0.2s",
                          "&:hover": {
                            bgcolor: "#FFEAEA",
                            borderColor: "#C62828",
                          },
                        }}
                      >
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                          <PhoneIcon sx={{ color: "#C62828", fontSize: 20 }} />
                          <Typography variant="body1" sx={{ fontWeight: 800, color: "primary.main" }}>
                            +91 {formatPhone(phone)}
                          </Typography>
                        </Box>
                        {i === 0 && (
                          <Chip label="24/7 Helpline" size="small" sx={{ bgcolor: "#C62828", color: "#FFFFFF", fontWeight: 700, fontSize: "0.7rem", height: 22 }} />
                        )}
                      </Box>
                    ))}
                  </Box>

                  <Typography variant="caption" sx={{ color: "text.secondary", display: "block", fontStyle: "italic", textAlign: "center" }}>
                    Warsia Trust coordinates voluntary blood donors in Vijayapura to assist families in need.
                  </Typography>
                </CardContent>
              </Card>
            </AnimatedSection>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
