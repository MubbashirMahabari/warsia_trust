"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { KeyboardArrowDownIcon, VerifiedIcon, InfoIcon } from "@/components/common/Icons";
import { generateFAQSchema } from "@/lib/seo";
import Reveal from "@/components/animations/Reveal";

export interface FAQItem {
  question: string;
  answer: string;
}

export const defaultFAQs: FAQItem[] = [
  {
    question: "What is Warsia Educational & Social Development Trust?",
    answer:
      "Warsia Educational & Social Development Trust is a recognized non-profit humanitarian organization based in Vijayapura (Bijapur), Karnataka. Founded under the leadership of President Mohammed Shafi H Mahabari, the trust operates on the core conviction: 'Service to Humanity – The Mark of True Faith'.",
  },
  {
    question: "How does the monthly assistance for Masjid Imams and Temple Pandits operate?",
    answer:
      "Warsia Trust provides regular, dignified monthly financial assistance with complete parity to both Masjid Imams and Temple Pandits in Vijayapura. This signature initiative recognizes spiritual leaders who serve their communities selflessly, setting a precedent for mutual respect, unity, and communal harmony.",
  },
  {
    question: "How can patients or families in Vijayapura request emergency blood donors?",
    answer:
      "Our 24/7 voluntary blood donor network coordinates emergency blood support for hospital patients throughout Vijayapura. Families facing urgent blood requirements can contact our official helpline directly at +91-9449779786 or connect via WhatsApp for immediate donor mobilization.",
  },
  {
    question: "What educational development initiatives does Warsia Trust undertake?",
    answer:
      "We focus on foundational learning assistance, reducing school dropouts in underprivileged neighborhoods, providing learning mentorship, and advocating for child and girl-child education as a fundamental right and path to self-reliance.",
  },
  {
    question: "How can I join as a volunteer or contribute to community outreach?",
    answer:
      "Individuals can register via our online volunteer portal to assist with emergency blood donor coordination, educational mentoring, seasonal food ration distribution, and grassroots community care. All activities adhere strictly to public trust compliance and non-commercial integrity.",
  },
  {
    question: "Is Warsia Educational & Social Development Trust officially registered?",
    answer:
      "Yes. Warsia Educational & Social Development Trust is an officially registered non-governmental trust recognized under NGO Darphan, NITI Aayog, Government of India, with official Darphan ID KA/2026/0996453.",
  },
];

interface FAQSectionProps {
  faqs?: FAQItem[];
  title?: string;
  subtitle?: string;
}

export default function FAQSection({
  faqs = defaultFAQs,
  title = "Frequently Asked Questions",
  subtitle = "Learn more about our core humanitarian initiatives, community assistance programs, and official trust governance in Vijayapura.",
}: FAQSectionProps) {
  const [expanded, setExpanded] = useState<string | false>("faq-0");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const faqSchema = generateFAQSchema(faqs);

  return (
    <Box sx={{ mt: { xs: 8, md: 12 } }}>
      {/* Search Engine FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Reveal direction="up">
        <Box sx={{ textAlign: "center", mb: 5, maxWidth: 760, mx: "auto" }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0.8,
              py: 0.5,
              px: 1.8,
              borderRadius: 9999,
              bgcolor: "rgba(0, 40, 135, 0.08)",
              color: "primary.main",
              mb: 1.5,
            }}
          >
            <InfoIcon sx={{ fontSize: 16 }} />
            <Typography
              variant="caption"
              sx={{ fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase" }}
            >
              TRUST CLARITY &amp; INFORMATION
            </Typography>
          </Box>

          <Typography
            variant="h3"
            sx={{
              fontWeight: 900,
              color: "#001B5C",
              fontSize: { xs: "1.75rem", sm: "2.3rem" },
              mb: 1.5,
              lineHeight: 1.25,
            }}
          >
            {title}
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: "text.secondary", lineHeight: 1.7, fontSize: "1.02rem" }}
          >
            {subtitle}
          </Typography>
        </Box>
      </Reveal>

      <Box sx={{ maxWidth: 880, mx: "auto" }}>
        {faqs.map((faq, index) => {
          const panelId = `faq-${index}`;
          const isOpen = expanded === panelId;

          return (
            <Reveal key={faq.question} delay={index * 0.06} direction="up">
              <Accordion
                expanded={isOpen}
                onChange={handleChange(panelId)}
                sx={{
                  mb: 2,
                  borderRadius: "16px !important",
                  border: isOpen ? "1.5px solid #002887" : "1px solid #E2E8F0",
                  boxShadow: isOpen
                    ? "0 8px 24px rgba(0, 40, 135, 0.08)"
                    : "0 2px 8px rgba(0, 0, 0, 0.02)",
                  bgcolor: "#FFFFFF",
                  transition: "all 0.25s ease",
                  "&:before": { display: "none" },
                  overflow: "hidden",
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <KeyboardArrowDownIcon
                      sx={{
                        color: isOpen ? "primary.main" : "text.secondary",
                        transition: "transform 0.25s ease",
                      }}
                    />
                  }
                  sx={{
                    px: { xs: 2.5, sm: 3.5 },
                    py: 1,
                    minHeight: 64,
                    "& .MuiAccordionSummary-content": {
                      my: 1.2,
                    },
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 700,
                      color: isOpen ? "primary.main" : "#001B5C",
                      fontSize: { xs: "0.98rem", sm: "1.08rem" },
                      lineHeight: 1.4,
                      pr: 1,
                    }}
                  >
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    px: { xs: 2.5, sm: 3.5 },
                    pb: 3,
                    pt: 0,
                    borderTop: "1px dashed #E2E8F0",
                    mt: 1,
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.primary",
                      lineHeight: 1.8,
                      fontSize: "0.96rem",
                      pt: 2,
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Reveal>
          );
        })}
      </Box>
    </Box>
  );
}
