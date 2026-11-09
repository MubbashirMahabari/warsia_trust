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
import MagneticButton from "@/components/animations/MagneticButton";

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

    setTimeout(() => {
      window.open(link, "_blank", "noopener,noreferrer");
    }, 400);
  };

  return (
    <Card
      sx={{
        borderRadius: 4.5,
        border: "1.5px solid #E2E8F0",
        boxShadow: "0 12px 35px rgba(0, 40, 135, 0.08)",
        p: { xs: 3.5, sm: 5 },
        bgcolor: "#FFFFFF",
      }}
    >
      <CardContent sx={{ p: 0 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 900,
            color: "primary.main",
            fontSize: { xs: "1.5rem", md: "1.85rem" },
            mb: 1,
          }}
        >
          Send an Official Message
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: "text.secondary", mb: 3.5, lineHeight: 1.7 }}
        >
          Submit your message below. As a transparent portal, this form directly
          connects your request with the trust&apos;s official WhatsApp desk for immediate review.
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 3, borderRadius: 2.5 }}>
            {error}
          </Alert>
        )}

        {submitted && (
          <Alert severity="success" sx={{ mb: 3, borderRadius: 2.5 }}>
            Thank you! Connecting you to the Warsia Trust official WhatsApp line...
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
            <Box>
              <Typography
                component="label"
                htmlFor="contact-name"
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
                id="contact-name"
                fullWidth
                required
                variant="outlined"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Mohammed / Ramesh"
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
                htmlFor="contact-phone"
                sx={{
                  display: "block",
                  fontSize: "0.86rem",
                  fontWeight: 700,
                  color: "#001B5C",
                  mb: 0.8,
                  ml: 1.2,
                }}
              >
                Contact Phone Number <Box component="span" sx={{ color: "#C62828" }}>*</Box>
              </Typography>
              <TextField
                id="contact-phone"
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

            <Box>
              <Typography
                component="label"
                htmlFor="contact-inquiry"
                sx={{
                  display: "block",
                  fontSize: "0.86rem",
                  fontWeight: 700,
                  color: "#001B5C",
                  mb: 0.8,
                  ml: 1.2,
                }}
              >
                Subject of Inquiry <Box component="span" sx={{ color: "#C62828" }}>*</Box>
              </Typography>
              <TextField
                id="contact-inquiry"
                fullWidth
                select
                value={inquiryType}
                onChange={(e) => setInquiryType(e.target.value)}
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
                {inquiryTypes.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </TextField>
            </Box>

            <Box>
              <Typography
                component="label"
                htmlFor="contact-message"
                sx={{
                  display: "block",
                  fontSize: "0.86rem",
                  fontWeight: 700,
                  color: "#001B5C",
                  mb: 0.8,
                  ml: 1.2,
                }}
              >
                Your Message <Box component="span" sx={{ color: "#C62828" }}>*</Box>
              </Typography>
              <TextField
                id="contact-message"
                fullWidth
                required
                multiline
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Please describe how we can assist you or how you would like to collaborate..."
                sx={{
                  bgcolor: "#FFFFFF",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 4,
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
                    p: 2,
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    color: "#172033",
                    "&::placeholder": {
                      color: "#64748B",
                      opacity: 1,
                      fontWeight: 400,
                    },
                  },
                }}
              />
            </Box>

            <MagneticButton strength={0.15} style={{ width: "100%" }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                startIcon={<WhatsAppIcon sx={{ fontSize: 22 }} />}
                sx={{
                  py: 1.6,
                  fontWeight: 800,
                  fontSize: "1.02rem",
                  bgcolor: "primary.main",
                  borderRadius: 9999,
                  "&:hover": { bgcolor: "primary.dark" },
                }}
              >
                Send Message via WhatsApp Desk
              </Button>
            </MagneticButton>

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
