"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { WhatsAppIcon } from "@/components/common/Icons";
import { getWhatsAppLink } from "@/lib/utils";

const inquiryTypes = [
  "General Trust Inquiry",
  "Masjid Imam Monthly Support",
  "Temple Pandit Monthly Support",
  "Blood Donation Emergency / Donor Registration",
  "Educational Support Inquiries",
  "Community Welfare & Food Kit Assistance",
  "Volunteering with Warsia Trust",
];

export default function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [inquiryType, setInquiryType] = useState(inquiryTypes[0]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!phone.trim()) {
      setError("Please provide a contact phone number.");
      return;
    }
    if (!message.trim()) {
      setError("Please share a brief message regarding your inquiry.");
      return;
    }

    setError(null);
    setSubmitted(true);

    const fullMsg = `Inquiry regarding: ${inquiryType}\nName: ${fullName.trim()}\nPhone: ${phone.trim()}\nMessage: ${message.trim()}`;
    const link = getWhatsAppLink(fullMsg);

    // Trigger WhatsApp handoff
    setTimeout(() => {
      window.open(link, "_blank", "noopener,noreferrer");
    }, 400);
  };

  return (
    <Card
      sx={{
        borderRadius: 4,
        border: "1px solid #E2E8F0",
        boxShadow: "0 10px 30px rgba(0, 40, 135, 0.06)",
        p: { xs: 3, sm: 4.5 },
        bgcolor: "#FFFFFF",
      }}
    >
      <CardContent sx={{ p: 0 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            color: "primary.main",
            fontSize: { xs: "1.4rem", md: "1.75rem" },
            mb: 1,
          }}
        >
          Send an Official Message
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: "text.secondary", mb: 3.5, lineHeight: 1.6 }}
        >
          Submit your message below. As a static, transparent portal, this form
          formats and directly delivers your request to the trust’s official
          WhatsApp desk for immediate review by our team.
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>
            {error}
          </Alert>
        )}

        {submitted && (
          <Alert severity="success" sx={{ mb: 3, borderRadius: 2 }}>
            Thank you! Connecting you to the Warsia Trust official WhatsApp line...
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
            <TextField
              fullWidth
              required
              label="Your Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Mohammed / Anand"
            />

            <TextField
              fullWidth
              required
              label="Contact Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="10-digit mobile number"
            />

            <TextField
              fullWidth
              select
              label="Subject of Inquiry"
              value={inquiryType}
              onChange={(e) => setInquiryType(e.target.value)}
            >
              {inquiryTypes.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              fullWidth
              required
              multiline
              rows={4}
              label="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Please describe how we can assist you or how you would like to collaborate..."
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              startIcon={<WhatsAppIcon sx={{ fontSize: 22 }} />}
              sx={{
                py: 1.5,
                fontWeight: 700,
                fontSize: "1rem",
                bgcolor: "primary.main",
                "&:hover": { bgcolor: "primary.dark" },
              }}
            >
              Send Message via WhatsApp Desk
            </Button>

            <Typography
              variant="caption"
              sx={{
                color: "text.secondary",
                textAlign: "center",
                display: "block",
                mt: 1,
              }}
            >
              Your contact details are used strictly to respond to your inquiry.
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
