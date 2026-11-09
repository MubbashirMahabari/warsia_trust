"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import { siteConfig } from "@/config/site";
import Reveal from "@/components/animations/Reveal";
import TextReveal from "@/components/animations/TextReveal";
import MagneticButton from "@/components/animations/MagneticButton";
import {
  BloodtypeIcon,
  WhatsAppIcon,
  PhoneIcon,
  ArrowForwardIcon,
  CheckCircleIcon,
} from "@/components/common/Icons";
import { getWhatsAppLink, getTelLink, formatPhone } from "@/lib/utils";
import { motion } from "framer-motion";

export default function BloodDonationSection() {
  const bloodWhatsAppLink = getWhatsAppLink(
    "Hello Warsia Trust, I would like to register as a voluntary blood donor / need emergency blood assistance in Vijayapura."
  );

  return (
    <Box
      sx={{
        py: { xs: 9, md: 14 },
        bgcolor: "#001B5C", // Deep Navy background to preserve brand colors
        color: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle red ambient glow - red used strictly as contextual accent */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 85% 20%, rgba(198, 40, 40, 0.28) 0%, transparent 48%),
            radial-gradient(circle at 15% 85%, rgba(0, 96, 0, 0.22) 0%, transparent 50%),
            linear-gradient(180deg, #001B5C 0%, #002887 100%)
          `,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <Reveal>
          <Box sx={{ mb: { xs: 6, md: 8 } }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.2,
                py: 0.8,
                px: 2.2,
                borderRadius: 9999,
                bgcolor: "rgba(198, 40, 40, 0.2)",
                border: "1px solid rgba(198, 40, 40, 0.4)",
                mb: 2.5,
              }}
            >
              <BloodtypeIcon sx={{ color: "#FF8A80", fontSize: 20 }} />
              <Typography
                variant="overline"
                sx={{
                  color: "#FF8A80",
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                  lineHeight: 1,
                }}
              >
                VOLUNTARY LIFE-SAVING NETWORK
              </Typography>
            </Box>

            <TextReveal
              text="One Donation. A World of Difference."
              as="h2"
              delay={0.1}
              stagger={0.05}
              highlightWord="Difference."
              highlightColor="#FF8A80"
              style={{
                fontSize: "clamp(2.3rem, 4.2vw, 3.4rem)",
                fontWeight: 900,
                color: "#FFFFFF",
                letterSpacing: "-0.025em",
                lineHeight: 1.15,
                marginBottom: "16px",
              }}
            />

            <Typography
              variant="subtitle1"
              sx={{
                color: "rgba(255, 255, 255, 0.85)",
                fontSize: { xs: "1.05rem", sm: "1.2rem" },
                lineHeight: 1.7,
                maxWidth: 740,
              }}
            >
              In critical trauma, pediatric care, or maternal surgeries across
              Vijayapura, timing is everything. Our compassionate voluntary donor
              network steps forward when life hangs in the balance.
            </Typography>
          </Box>
        </Reveal>

        {/* Cinematic Content Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "minmax(0, 1fr)", lg: "1.2fr 0.8fr" },
            gap: { xs: 5, lg: 6 },
            alignItems: "center",
            width: "100%",
            maxWidth: "100%",
          }}
        >
          {/* Left Column: Storytelling & CTAs */}
          <Box>
            <Reveal delay={0.2} direction="up">
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  color: "#FFFFFF",
                  fontSize: { xs: "1.4rem", sm: "1.75rem" },
                  lineHeight: 1.3,
                  mb: 2.5,
                }}
              >
                Standing by Patients Across Vijayapura Hospitals
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "rgba(255, 255, 255, 0.85)",
                  lineHeight: 1.8,
                  fontSize: "1.05rem",
                  mb: 2.5,
                }}
              >
                Warsia Educational &amp; Social Development Trust coordinates voluntary,
                altruistic blood donors across Vijayapura district. When a hospital
                emergency arises or rare blood groups are desperately sought by anxious
                families, our coordinators bridge the gap immediately.
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255, 255, 255, 0.72)",
                  lineHeight: 1.7,
                  fontSize: "0.96rem",
                  mb: 4,
                }}
              >
                We advocate 100% voluntary, safe, and non-remunerated donation. Every unit
                of blood donated has the potential to save up to three lives — transforming
                ordinary citizens into everyday lifesavers.
              </Typography>

              {/* Crucial Bullet Points */}
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.8, mb: 4.5 }}>
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                  <CheckCircleIcon sx={{ color: "#FF8A80", fontSize: 22, mt: 0.2 }} />
                  <Typography variant="body2" sx={{ color: "#FFFFFF", fontWeight: 700, fontSize: "0.98rem" }}>
                    Emergency donor mobilization for patients in Vijayapura district
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                  <CheckCircleIcon sx={{ color: "#FF8A80", fontSize: 22, mt: 0.2 }} />
                  <Typography variant="body2" sx={{ color: "#FFFFFF", fontWeight: 700, fontSize: "0.98rem" }}>
                    Special outreach for rare groups, emergency surgeries &amp; thalassemia
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                  <CheckCircleIcon sx={{ color: "#FF8A80", fontSize: 22, mt: 0.2 }} />
                  <Typography variant="body2" sx={{ color: "#FFFFFF", fontWeight: 700, fontSize: "0.98rem" }}>
                    Strict adherence to certified hospital medical standards and patient safety
                  </Typography>
                </Box>
              </Box>

              {/* CTAs per prompt: "Become a Blood Donor" & "Contact Our Trust" */}
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2.2 }}>
                <MagneticButton strength={0.25}>
                  <Button
                    component="a"
                    href={bloodWhatsAppLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    size="large"
                    startIcon={<WhatsAppIcon sx={{ fontSize: 22 }} />}
                    sx={{
                      bgcolor: "#C62828",
                      color: "#FFFFFF",
                      fontWeight: 800,
                      fontSize: "1.02rem",
                      px: 3.8,
                      py: 1.6,
                      boxShadow: "0 10px 28px rgba(198, 40, 40, 0.4)",
                      "&:hover": {
                        bgcolor: "#B71C1C",
                      },
                    }}
                  >
                    Become a Blood Donor
                  </Button>
                </MagneticButton>

                <Button
                  component={Link}
                  href="/contact"
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: "rgba(255, 255, 255, 0.4)",
                    color: "#FFFFFF",
                    fontWeight: 700,
                    fontSize: "1.02rem",
                    px: 3.5,
                    py: 1.5,
                    bgcolor: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(8px)",
                    "&:hover": {
                      borderColor: "#FFFFFF",
                      bgcolor: "rgba(255, 255, 255, 0.15)",
                    },
                  }}
                >
                  Contact Our Trust
                </Button>
              </Box>
            </Reveal>
          </Box>

          {/* Right Column: 24/7 Helpline & Animated Heart Pulse Card */}
          <Box>
            <Reveal delay={0.3} direction="left" scale>
              <Box
                sx={{
                  borderRadius: 5,
                  bgcolor: "rgba(255, 255, 255, 0.08)",
                  border: "1.5px solid rgba(255, 255, 255, 0.18)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  p: { xs: 3.5, sm: 4.5 },
                  boxShadow: "0 25px 60px rgba(0, 0, 0, 0.3)",
                }}
              >
                {/* Header with pulsing blood icon */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 58,
                      height: 58,
                      borderRadius: 3.5,
                      bgcolor: "rgba(198, 40, 40, 0.25)",
                      border: "1px solid rgba(198, 40, 40, 0.45)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.15, 1] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <BloodtypeIcon sx={{ fontSize: 34, color: "#FF8A80" }} />
                    </motion.div>
                  </Box>

                  <Box>
                    <Typography
                      variant="overline"
                      sx={{
                        color: "#FF8A80",
                        fontWeight: 800,
                        letterSpacing: "0.08em",
                        lineHeight: 1,
                        display: "block",
                      }}
                    >
                      EMERGENCY HELPLINE
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 800, color: "#FFFFFF", mt: 0.5 }}
                    >
                      Vijayapura Blood Desk
                    </Typography>
                  </Box>
                </Box>

                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(255, 255, 255, 0.8)",
                    mb: 3,
                    lineHeight: 1.65,
                    fontSize: "0.92rem",
                  }}
                >
                  Facing an immediate blood requirement for an admitted patient in
                  Vijayapura? Call our volunteer coordinators directly:
                </Typography>

                {/* Direct Dial Telephone Numbers */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, mb: 3.5 }}>
                  {siteConfig.contact.phoneNumbers.map((phone, i) => (
                    <Box
                      key={phone}
                      component="a"
                      href={getTelLink(phone)}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        p: 1.6,
                        px: 2.2,
                        borderRadius: 3,
                        bgcolor: "rgba(255, 255, 255, 0.08)",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        textDecoration: "none",
                        transition: "all 0.25s ease",
                        "&:hover": {
                          bgcolor: "rgba(198, 40, 40, 0.3)",
                          borderColor: "#FF8A80",
                          transform: "translateX(4px)",
                        },
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                        <PhoneIcon sx={{ color: "#FF8A80", fontSize: 20 }} />
                        <Typography
                          variant="body1"
                          sx={{ fontWeight: 800, color: "#FFFFFF", fontSize: "1.05rem" }}
                        >
                          +91 {formatPhone(phone)}
                        </Typography>
                      </Box>
                      {i === 0 && (
                        <Chip
                          label="Primary 24/7"
                          size="small"
                          sx={{
                            bgcolor: "#C62828",
                            color: "#FFFFFF",
                            fontWeight: 800,
                            fontSize: "0.72rem",
                            height: 24,
                          }}
                        />
                      )}
                    </Box>
                  ))}
                </Box>

                <Typography
                  variant="caption"
                  sx={{
                    color: "rgba(255, 255, 255, 0.65)",
                    display: "block",
                    fontStyle: "italic",
                    textAlign: "center",
                    lineHeight: 1.5,
                  }}
                >
                  Warsia Trust acts as a voluntary facilitator connecting willing donors
                  with hospital requirements in Vijayapura.
                </Typography>
              </Box>
            </Reveal>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
