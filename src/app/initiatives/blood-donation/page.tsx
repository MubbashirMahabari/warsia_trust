import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import { constructMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import ContactCard from "@/components/common/ContactCard";
import Reveal from "@/components/animations/Reveal";
import TextReveal from "@/components/animations/TextReveal";
import MagneticButton from "@/components/animations/MagneticButton";
import {
  BloodtypeIcon,
  CheckCircleIcon,
  WhatsAppIcon,
  PhoneIcon,
  ArrowForwardIcon,
} from "@/components/common/Icons";
import { getWhatsAppLink, getTelLink, formatPhone } from "@/lib/utils";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = constructMetadata({
  title: "Blood Donation & Emergency Assistance | Vijayapura",
  description:
    "Warsia Trust mobilizes voluntary blood donors, organizes awareness campaigns, and assists patients in critical need of blood across Vijayapura hospitals.",
  path: "/initiatives/blood-donation",
});

export default function BloodDonationPage() {
  const donorWhatsApp = getWhatsAppLink(
    "Hello Warsia Trust, I would like to register as a voluntary blood donor in Vijayapura."
  );

  const emergencyWhatsApp = getWhatsAppLink(
    "URGENT: Hello Warsia Trust, I need emergency blood donor assistance for a patient in Vijayapura."
  );

  const bloodGuidelines = [
    {
      title: "Who Can Donate?",
      desc: "Healthy adults aged 18–65, weighing 45kg or more, with normal pulse, blood pressure, and hemoglobin levels.",
    },
    {
      title: "How Often?",
      desc: "Healthy males can donate once every 3 months; healthy females can donate once every 4 months safely.",
    },
    {
      title: "Safe & Altruistic",
      desc: "Strictly voluntary and non-commercial, coordinated with licensed government and charitable blood banks.",
    },
    {
      title: "Immediate Impact",
      desc: "A single unit of whole blood can be separated into components to help save up to 3 individual patient lives.",
    },
  ];

  return (
    <Box sx={{ pb: { xs: 9, md: 14 }, bgcolor: "#FFFFFF" }}>
      {/* Editorial Header Banner */}
      <Box
        sx={{
          bgcolor: "#001B5C",
          color: "#FFFFFF",
          pt: { xs: 6, md: 9 },
          pb: { xs: 7, md: 10 },
          position: "relative",
          backgroundImage: `
            radial-gradient(circle at 15% 20%, rgba(198, 40, 40, 0.45) 0%, transparent 45%),
            radial-gradient(circle at 85% 80%, rgba(0, 96, 0, 0.2) 0%, transparent 45%),
            linear-gradient(180deg, #001B5C 0%, #002887 100%)
          `,
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 2.5, sm: 4, md: 6, lg: 8 } }}>
          <Breadcrumbs
            items={[
              { label: "Initiatives", href: "/initiatives" },
              { label: "Blood Donation" },
            ]}
          />

          <Reveal direction="down">
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mt: 2.5, mb: 1.5, flexWrap: "wrap" }}>
              <Chip
                label="Life-Saving Mission"
                sx={{
                  bgcolor: "#C62828",
                  color: "#FFFFFF",
                  fontWeight: 800,
                  fontSize: "0.75rem",
                }}
              />
              <Chip
                label="Vijayapura Emergency Network"
                sx={{
                  bgcolor: "rgba(255, 255, 255, 0.15)",
                  color: "#FFFFFF",
                  fontWeight: 700,
                  fontSize: "0.75rem",
                  border: "1px solid rgba(255, 255, 255, 0.25)",
                }}
              />
            </Box>
          </Reveal>

          <TextReveal
            text="Blood Donation & Emergency Assistance"
            as="h1"
            delay={0.1}
            stagger={0.04}
            highlightWord="Emergency"
            highlightColor="#FF8A80"
            style={{
              fontSize: "clamp(2.3rem, 4.4vw, 3.6rem)",
              fontWeight: 900,
              color: "#FFFFFF",
              letterSpacing: "-0.025em",
              lineHeight: 1.15,
              marginTop: "8px",
              marginBottom: "16px",
            }}
          />

          <Reveal delay={0.3} direction="up">
            <Typography
              variant="h6"
              sx={{
                color: "rgba(255, 255, 255, 0.88)",
                maxWidth: 780,
                fontSize: { xs: "1.05rem", sm: "1.2rem" },
                fontWeight: 400,
                lineHeight: 1.7,
              }}
            >
              Mobilizing voluntary donors, organizing awareness drives, and assisting
              families facing critical blood shortages in Vijayapura hospitals.
            </Typography>
          </Reveal>
        </Container>
      </Box>

      {/* Main Narrative & Sidebar */}
      <Container maxWidth="xl" sx={{ mt: { xs: 7, md: 10 }, px: { xs: 2.5, sm: 4, md: 6, lg: 8 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.3fr 0.7fr" },
            gap: { xs: 5, md: 6 },
            alignItems: "flex-start",
          }}
        >
          <Box>
            <Reveal direction="up">
              {/* Artwork Banner */}
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: 240, sm: 340 },
                  borderRadius: 4.5,
                  overflow: "hidden",
                  mb: 4.5,
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 14px 40px rgba(198, 40, 40, 0.12)",
                }}
              >
                <Image
                  src="/images/initiatives/blood-donation.svg"
                  alt="Blood Donation in Vijayapura"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: 3.5,
                    bgcolor: "rgba(198, 40, 40, 0.1)",
                    border: "1px solid rgba(198, 40, 40, 0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <BloodtypeIcon sx={{ fontSize: 34, color: "#C62828" }} />
                </Box>
                <Box>
                  <Typography
                    variant="overline"
                    sx={{ color: "#C62828", fontWeight: 800, letterSpacing: "0.08em" }}
                  >
                    EMERGENCY CARE IN ACTION
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 900,
                      color: "primary.main",
                      fontSize: { xs: "1.5rem", md: "1.85rem" },
                    }}
                  >
                    Connecting Donors With Patients in Critical Need
                  </Typography>
                </Box>
              </Box>

              <Typography
                variant="body1"
                sx={{ color: "text.primary", lineHeight: 1.85, mb: 2.5, fontSize: "1.06rem" }}
              >
                In times of sudden trauma, complex surgeries, pediatric emergencies, or
                maternal delivery complications, locating compatible blood within the
                golden window is literally the thin boundary between life and death.
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "text.secondary", lineHeight: 1.8, mb: 2.5, fontSize: "1rem" }}
              >
                Warsia Educational &amp; Social Development Trust operates a rapid-response
                voluntary blood coordination network across Vijayapura. When patient
                relatives are distressed, our volunteer coordinators connect them with
                verified, willing local donors.
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "text.secondary", lineHeight: 1.8, mb: 4, fontSize: "1rem" }}
              >
                We conduct regular awareness drives, guide citizens on the health benefits
                and myths surrounding blood donation, and facilitate donor enrollment across
                colleges, businesses, and neighborhood groups.
              </Typography>

              {/* 4 Guidelines Cards */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                  gap: 2.5,
                  mb: 5,
                }}
              >
                {bloodGuidelines.map((g) => (
                  <Box
                    key={g.title}
                    sx={{
                      p: 3,
                      borderRadius: 3.5,
                      bgcolor: "#F7F8FC",
                      border: "1px solid #E2E8F0",
                      height: "100%",
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{ fontWeight: 800, color: "#C62828", mb: 0.8 }}
                    >
                      {g.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", lineHeight: 1.6 }}
                    >
                      {g.desc}
                    </Typography>
                  </Box>
                ))}
              </Box>

              {/* Action Buttons */}
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 4 }}>
                <MagneticButton strength={0.25}>
                  <Button
                    component="a"
                    href={donorWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    size="large"
                    startIcon={<WhatsAppIcon />}
                    sx={{
                      bgcolor: "#C62828",
                      color: "#FFFFFF",
                      px: 3.8,
                      py: 1.5,
                      fontWeight: 800,
                      "&:hover": { bgcolor: "#B71C1C" },
                    }}
                  >
                    Register as Blood Donor
                  </Button>
                </MagneticButton>

                <Button
                  component="a"
                  href={emergencyWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: "#C62828",
                    color: "#C62828",
                    px: 3.5,
                    py: 1.5,
                    fontWeight: 700,
                    "&:hover": {
                      bgcolor: "rgba(198, 40, 40, 0.05)",
                      borderColor: "#B71C1C",
                    },
                  }}
                >
                  Emergency Blood Request
                </Button>
              </Box>
            </Reveal>
          </Box>

          {/* Right Column: 24/7 Helpline Card */}
          <Box>
            <Reveal delay={0.2} direction="left" scale>
              <Box sx={{ position: "sticky", top: 100, display: "flex", flexDirection: "column", gap: 3.5 }}>
                <Card
                  sx={{
                    borderRadius: 4.5,
                    border: "2px solid rgba(198, 40, 40, 0.3)",
                    p: 3.5,
                    bgcolor: "#FFF8F8",
                    boxShadow: "0 12px 35px rgba(198, 40, 40, 0.08)",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
                    <BloodtypeIcon sx={{ fontSize: 32, color: "#C62828" }} />
                    <Box>
                      <Typography
                        variant="overline"
                        sx={{ color: "#C62828", fontWeight: 800, letterSpacing: "0.06em", display: "block" }}
                      >
                        24/7 HELPLINE
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 800, color: "primary.main" }}>
                        Vijayapura Emergency Desk
                      </Typography>
                    </Box>
                  </Box>

                  <Typography variant="body2" sx={{ color: "text.secondary", mb: 3, lineHeight: 1.6 }}>
                    Immediate donor coordination for patients admitted in Vijayapura:
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
                          p: 1.5,
                          px: 2,
                          borderRadius: 2.5,
                          bgcolor: "#FFFFFF",
                          border: "1px solid rgba(198, 40, 40, 0.2)",
                          textDecoration: "none",
                          "&:hover": {
                            bgcolor: "#FFEAEA",
                            borderColor: "#C62828",
                          },
                        }}
                      >
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
                          <PhoneIcon sx={{ color: "#C62828", fontSize: 18 }} />
                          <Typography variant="body1" sx={{ fontWeight: 800, color: "primary.main" }}>
                            +91 {formatPhone(phone)}
                          </Typography>
                        </Box>
                        {i === 0 && (
                          <Chip label="24/7" size="small" sx={{ bgcolor: "#C62828", color: "#FFFFFF", fontWeight: 800, height: 22 }} />
                        )}
                      </Box>
                    ))}
                  </Box>
                </Card>

                <ContactCard />
              </Box>
            </Reveal>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
