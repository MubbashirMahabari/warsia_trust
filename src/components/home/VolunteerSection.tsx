"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Alert from "@mui/material/Alert";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/animations/Reveal";
import TextReveal from "@/components/animations/TextReveal";
import MagneticButton from "@/components/animations/MagneticButton";
import {
  WhatsAppIcon,
  CheckCircleIcon,
  VolunteerActivismIcon,
  Diversity3Icon,
} from "@/components/common/Icons";
import { getVolunteerWhatsAppLink } from "@/lib/utils";

const volunteerAreas = [
  "Blood Donation Emergency Coordination",
  "Masjid Imam & Temple Pandit Support Drives",
  "Educational Mentorship & Student Guidance",
  "Food Ration & Relief Distribution",
  "Event & Awareness Organizing",
  "General Humanitarian Volunteer",
];

export default function VolunteerSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState(volunteerAreas[0]);
  const [city, setCity] = useState("Vijayapura");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setSubmitted(true);
    const link = getVolunteerWhatsAppLink({
      name: name.trim(),
      interest,
      city: city.trim(),
    });

    setTimeout(() => {
      window.open(link, "_blank", "noopener,noreferrer");
    }, 400);
  };

  return (
    <Box
      sx={{
        py: { xs: 9, md: 14 },
        bgcolor: "#FFFFFF",
        position: "relative",
      }}
    >
      <Container maxWidth="xl">
        {/* Section Heading */}
        <Reveal>
          <Box sx={{ textAlign: "center", maxWidth: 840, mx: "auto", mb: { xs: 6, md: 8 } }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.2,
                py: 0.8,
                px: 2.2,
                borderRadius: 9999,
                bgcolor: "rgba(0, 96, 0, 0.08)",
                border: "1px solid rgba(0, 96, 0, 0.16)",
                mb: 2.5,
              }}
            >
              <VolunteerActivismIcon sx={{ color: "secondary.main", fontSize: 20 }} />
              <Typography
                variant="overline"
                sx={{
                  color: "secondary.dark",
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                  lineHeight: 1,
                }}
              >
                JOIN AS VOLUNTEER
              </Typography>
            </Box>

            <TextReveal
              text="Serve Society With Your Time & Compassion."
              as="h2"
              delay={0.1}
              stagger={0.05}
              highlightWord="Compassion."
              highlightColor="#006000"
              style={{
                fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
                fontWeight: 900,
                color: "#001B5C",
                letterSpacing: "-0.025em",
                lineHeight: 1.15,
                marginBottom: "16px",
              }}
            />

            <Typography
              variant="subtitle1"
              sx={{
                color: "text.secondary",
                fontSize: { xs: "1.05rem", sm: "1.18rem" },
                lineHeight: 1.7,
              }}
            >
              Join hands with Warsia Educational &amp; Social Development Trust and
              become part of meaningful grassroots initiatives across Vijayapura.
            </Typography>
          </Box>
        </Reveal>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "minmax(0, 1fr)", md: "repeat(2, minmax(0, 1fr))" },
            gap: { xs: 5, md: 7 },
            alignItems: "center",
          }}
        >
          {/* Left Column: Why Volunteer */}
          <Box>
            <Reveal delay={0.2} direction="up">
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 900,
                  color: "primary.main",
                  fontSize: { xs: "1.5rem", sm: "1.85rem" },
                  mb: 2.5,
                  lineHeight: 1.3,
                }}
              >
                Grassroots Action. Tangible Human Impact.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "text.primary",
                  lineHeight: 1.8,
                  mb: 3,
                  fontSize: "1.05rem",
                }}
              >
                Volunteering with Warsia Trust offers an opportunity to actively participate
                in hands-on community service. Whether coordinating life-saving blood donors
                for hospital trauma cases, helping distribute essential food ration kits to
                struggling families, or supporting religious leaders, your presence makes an
                enduring difference.
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 4 }}>
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                  <CheckCircleIcon sx={{ color: "secondary.main", fontSize: 22, mt: 0.2 }} />
                  <Typography variant="body2" sx={{ color: "text.primary", fontWeight: 700, fontSize: "0.98rem" }}>
                    Direct on-the-ground humanitarian action with zero bureaucracy
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                  <CheckCircleIcon sx={{ color: "secondary.main", fontSize: 22, mt: 0.2 }} />
                  <Typography variant="body2" sx={{ color: "text.primary", fontWeight: 700, fontSize: "0.98rem" }}>
                    Equal respect and warm camaraderie for volunteers from every community
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                  <CheckCircleIcon sx={{ color: "secondary.main", fontSize: 22, mt: 0.2 }} />
                  <Typography variant="body2" sx={{ color: "text.primary", fontWeight: 700, fontSize: "0.98rem" }}>
                    Official recognition &amp; certificate of volunteer service
                  </Typography>
                </Box>
              </Box>
            </Reveal>
          </Box>

          {/* Right Column: Interactive Form with WhatsApp Handoff */}
          <Box>
            <Reveal delay={0.3} direction="left" scale>
              <Card
                sx={{
                  borderRadius: 5,
                  border: "2px solid #E2E8F0",
                  boxShadow: "0 20px 50px rgba(0, 40, 135, 0.08)",
                  p: { xs: 3.5, sm: 4.5 },
                  bgcolor: "#F7F8FC",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 900,
                    color: "primary.main",
                    mb: 0.8,
                    fontSize: "1.35rem",
                  }}
                >
                  Express Your Interest
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mb: 3.5 }}
                >
                  Fill in your details to immediately connect with our trust coordinators via WhatsApp.
                </Typography>

                {submitted && (
                  <Alert severity="success" sx={{ mb: 3, borderRadius: 2.5 }}>
                    Connecting you to Warsia Trust volunteer desk via WhatsApp...
                  </Alert>
                )}

                <Box component="form" onSubmit={handleSubmit} noValidate>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: { xs: "minmax(0, 1fr)", sm: "repeat(2, minmax(0, 1fr))" },
                      gap: 2.5,
                    }}
                  >
                    <Box>
                      <Typography
                        component="label"
                        htmlFor="volunteer-name"
                        sx={{
                          display: "block",
                          fontSize: "0.86rem",
                          fontWeight: 700,
                          color: "#001B5C",
                          mb: 0.8,
                          ml: 1.2,
                        }}
                      >
                        Your Full Name <Box component="span" sx={{ color: "#C62828" }}>*</Box>
                      </Typography>
                      <TextField
                        id="volunteer-name"
                        fullWidth
                        required
                        variant="outlined"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Ramesh / Farooq"
                        sx={{
                          bgcolor: "#FFFFFF",
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 9999,
                            height: 52,
                            transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#CBD5E1",
                              borderWidth: "1.5px",
                              transition: "all 0.25s ease",
                            },
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#002887",
                            },
                            "&.Mui-focused": {
                              boxShadow: "0 0 0 4px rgba(0, 40, 135, 0.15)",
                              "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#002887 !important",
                                borderWidth: "2px !important",
                              },
                            },
                          },
                          "& .MuiOutlinedInput-input": {
                            px: 2.8,
                            py: 0,
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            fontSize: "0.95rem",
                            fontWeight: 500,
                            color: "#172033",
                            boxSizing: "border-box",
                            "&::placeholder": {
                              color: "#64748B",
                              opacity: 1,
                              fontWeight: 400,
                            },
                          },
                        }}
                      />
                    </Box>

                    <Box>
                      <Typography
                        component="label"
                        htmlFor="volunteer-phone"
                        sx={{
                          display: "block",
                          fontSize: "0.86rem",
                          fontWeight: 700,
                          color: "#001B5C",
                          mb: 0.8,
                          ml: 1.2,
                        }}
                      >
                        Contact Number <Box component="span" sx={{ color: "#C62828" }}>*</Box>
                      </Typography>
                      <TextField
                        id="volunteer-phone"
                        fullWidth
                        required
                        variant="outlined"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="10-digit mobile number"
                        sx={{
                          bgcolor: "#FFFFFF",
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 9999,
                            height: 52,
                            transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#CBD5E1",
                              borderWidth: "1.5px",
                              transition: "all 0.25s ease",
                            },
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#002887",
                            },
                            "&.Mui-focused": {
                              boxShadow: "0 0 0 4px rgba(0, 40, 135, 0.15)",
                              "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#002887 !important",
                                borderWidth: "2px !important",
                              },
                            },
                          },
                          "& .MuiOutlinedInput-input": {
                            px: 2.8,
                            py: 0,
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            fontSize: "0.95rem",
                            fontWeight: 500,
                            color: "#172033",
                            boxSizing: "border-box",
                            "&::placeholder": {
                              color: "#64748B",
                              opacity: 1,
                              fontWeight: 400,
                            },
                          },
                        }}
                      />
                    </Box>

                    <Box sx={{ gridColumn: { xs: "1 / -1", sm: "1 / -1" } }}>
                      <Typography
                        component="label"
                        htmlFor="volunteer-interest"
                        sx={{
                          display: "block",
                          fontSize: "0.86rem",
                          fontWeight: 700,
                          color: "#001B5C",
                          mb: 0.8,
                          ml: 1.2,
                        }}
                      >
                        Preferred Area of Contribution <Box component="span" sx={{ color: "#C62828" }}>*</Box>
                      </Typography>
                      <TextField
                        id="volunteer-interest"
                        fullWidth
                        select
                        value={interest}
                        onChange={(e) => setInterest(e.target.value)}
                        sx={{
                          bgcolor: "#FFFFFF",
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 9999,
                            height: 52,
                            transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#CBD5E1",
                              borderWidth: "1.5px",
                              transition: "all 0.25s ease",
                            },
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#002887",
                            },
                            "&.Mui-focused": {
                              boxShadow: "0 0 0 4px rgba(0, 40, 135, 0.15)",
                              "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#002887 !important",
                                borderWidth: "2px !important",
                              },
                            },
                          },
                          "& .MuiSelect-select": {
                            px: 2.8,
                            py: 0,
                            height: "52px !important",
                            display: "flex",
                            alignItems: "center",
                            fontSize: "0.95rem",
                            fontWeight: 600,
                            color: "#172033",
                            boxSizing: "border-box",
                          },
                        }}
                      >
                        {volunteerAreas.map((option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Box>

                    <Box sx={{ gridColumn: { xs: "1 / -1", sm: "1 / -1" } }}>
                      <Typography
                        component="label"
                        htmlFor="volunteer-city"
                        sx={{
                          display: "block",
                          fontSize: "0.86rem",
                          fontWeight: 700,
                          color: "#001B5C",
                          mb: 0.8,
                          ml: 1.2,
                        }}
                      >
                        Your City / Town
                      </Typography>
                      <TextField
                        id="volunteer-city"
                        fullWidth
                        variant="outlined"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="e.g. Vijayapura"
                        sx={{
                          bgcolor: "#FFFFFF",
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 9999,
                            height: 52,
                            transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#CBD5E1",
                              borderWidth: "1.5px",
                              transition: "all 0.25s ease",
                            },
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#002887",
                            },
                            "&.Mui-focused": {
                              boxShadow: "0 0 0 4px rgba(0, 40, 135, 0.15)",
                              "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#002887 !important",
                                borderWidth: "2px !important",
                              },
                            },
                          },
                          "& .MuiOutlinedInput-input": {
                            px: 2.8,
                            py: 0,
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            fontSize: "0.95rem",
                            fontWeight: 500,
                            color: "#172033",
                            boxSizing: "border-box",
                            "&::placeholder": {
                              color: "#64748B",
                              opacity: 1,
                              fontWeight: 400,
                            },
                          },
                        }}
                      />
                    </Box>

                    <Box sx={{ gridColumn: { xs: "1 / -1", sm: "1 / -1" } }}>
                      <MagneticButton strength={0.15} style={{ width: "100%" }}>
                        <Button
                          type="submit"
                          variant="contained"
                          color="secondary"
                          fullWidth
                          size="large"
                          startIcon={<WhatsAppIcon sx={{ fontSize: 22 }} />}
                          sx={{
                            py: 1.6,
                            fontWeight: 800,
                            fontSize: "1.02rem",
                            bgcolor: "secondary.main",
                            borderRadius: 9999,
                            boxShadow: "0 6px 20px rgba(0, 96, 0, 0.28)",
                            "&:hover": {
                              bgcolor: "secondary.dark",
                            },
                          }}
                        >
                          Submit &amp; Connect via WhatsApp
                        </Button>
                      </MagneticButton>

                      <Typography
                        variant="caption"
                        sx={{
                          display: "block",
                          textAlign: "center",
                          color: "text.secondary",
                          mt: 1.8,
                        }}
                      >
                        Your details are maintained with strict privacy according to our trust policy.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Card>
            </Reveal>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
