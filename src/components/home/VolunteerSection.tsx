"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Alert from "@mui/material/Alert";
import SectionHeading from "@/components/common/SectionHeading";
import AnimatedSection from "@/components/common/AnimatedSection";
import {
  WhatsAppIcon,
  CheckCircleIcon,
  VolunteerActivismIcon,
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

    // Open WhatsApp after brief feedback
    setTimeout(() => {
      window.open(link, "_blank", "noopener,noreferrer");
    }, 400);
  };

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#FFFFFF" }}>
      <Container maxWidth="lg">
        <AnimatedSection>
          <SectionHeading
            badge="Make an Impact"
            badgeColor="secondary"
            title="Be the Reason Someone Smiles Today."
            subtitle="Join hands with Warsia Educational & Social Development Trust and become part of meaningful community initiatives across Vijayapura."
          />
        </AnimatedSection>

        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          {/* Left Column: Why Volunteer */}
          <Grid item xs={12} md={6}>
            <AnimatedSection delay={0.1}>
              <Box
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: 3.5,
                  bgcolor: "rgba(0, 96, 0, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 3,
                }}
              >
                <VolunteerActivismIcon sx={{ fontSize: 34, color: "secondary.main" }} />
              </Box>

              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  color: "primary.main",
                  fontSize: { xs: "1.35rem", md: "1.7rem" },
                  mb: 2,
                  lineHeight: 1.3,
                }}
              >
                Serve Society with Your Time &amp; Compassion
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "text.primary", lineHeight: 1.8, mb: 3, fontSize: "1.02rem" }}
              >
                Volunteering with Warsia Trust is an opportunity to actively
                participate in grassroots initiatives. Whether coordinating life-saving
                blood donors, helping distribute festive food kits to destitute families,
                or supporting religious harmony, your presence makes an enduring difference.
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.8, mb: 4 }}>
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                  <CheckCircleIcon sx={{ color: "secondary.main", fontSize: 22, mt: 0.3 }} />
                  <Typography variant="body2" sx={{ color: "text.primary", fontWeight: 600 }}>
                    Direct on-the-ground humanitarian action with zero bureaucracy
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                  <CheckCircleIcon sx={{ color: "secondary.main", fontSize: 22, mt: 0.3 }} />
                  <Typography variant="body2" sx={{ color: "text.primary", fontWeight: 600 }}>
                    Equal respect and warm camaraderie for volunteers from every community
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                  <CheckCircleIcon sx={{ color: "secondary.main", fontSize: 22, mt: 0.3 }} />
                  <Typography variant="body2" sx={{ color: "text.primary", fontWeight: 600 }}>
                    Official recognition &amp; certificate of volunteer appreciation
                  </Typography>
                </Box>
              </Box>
            </AnimatedSection>
          </Grid>

          {/* Right Column: Interactive Form with WhatsApp Handoff */}
          <Grid item xs={12} md={6}>
            <AnimatedSection delay={0.2}>
              <Card
                sx={{
                  borderRadius: 4,
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 12px 35px rgba(0, 40, 135, 0.08)",
                  p: { xs: 3, sm: 4 },
                  bgcolor: "background.paper",
                }}
              >
                <CardContent sx={{ p: 0 }}>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 800, color: "primary.main", mb: 1, fontSize: "1.3rem" }}
                  >
                    Express Your Interest
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", mb: 3 }}
                  >
                    Fill in your details to immediately connect with our trust coordinators via WhatsApp.
                  </Typography>

                  {submitted && (
                    <Alert severity="success" sx={{ mb: 3, borderRadius: 2 }}>
                      Connecting you to Warsia Trust volunteer desk via WhatsApp...
                    </Alert>
                  )}

                  <Box component="form" onSubmit={handleSubmit} noValidate>
                    <Grid container spacing={2.5}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          required
                          label="Your Full Name"
                          variant="outlined"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Ramesh / Farooq"
                          sx={{ bgcolor: "#FFFFFF", borderRadius: 2 }}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Contact Number"
                          variant="outlined"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="10-digit mobile number"
                          sx={{ bgcolor: "#FFFFFF", borderRadius: 2 }}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          select
                          label="Preferred Area of Contribution"
                          value={interest}
                          onChange={(e) => setInterest(e.target.value)}
                          sx={{ bgcolor: "#FFFFFF", borderRadius: 2 }}
                        >
                          {volunteerAreas.map((option) => (
                            <MenuItem key={option} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Your City / Town"
                          variant="outlined"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          sx={{ bgcolor: "#FFFFFF", borderRadius: 2 }}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          color="secondary"
                          fullWidth
                          size="large"
                          startIcon={<WhatsAppIcon sx={{ fontSize: 22 }} />}
                          sx={{
                            py: 1.5,
                            fontWeight: 700,
                            fontSize: "1rem",
                            bgcolor: "secondary.main",
                            "&:hover": {
                              bgcolor: "secondary.dark",
                            },
                          }}
                        >
                          Submit &amp; Connect via WhatsApp
                        </Button>

                        <Typography
                          variant="caption"
                          sx={{
                            display: "block",
                            textAlign: "center",
                            color: "text.secondary",
                            mt: 1.5,
                          }}
                        >
                          Your information is handled with confidentiality according to our privacy standards.
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </Card>
            </AnimatedSection>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
