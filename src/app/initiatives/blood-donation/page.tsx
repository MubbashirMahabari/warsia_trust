import { Metadata } from "next";
import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import { constructMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import AnimatedSection from "@/components/common/AnimatedSection";
import ContactCard from "@/components/common/ContactCard";
import {
  BloodtypeIcon,
  CheckCircleIcon,
  WhatsAppIcon,
  PhoneIcon,
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
      title: "Safe & Non-Remunerated",
      desc: "Strictly voluntary and non-commercial, coordinated with licensed government and charitable blood banks.",
    },
    {
      title: "Immediate Impact",
      desc: "A single unit of whole blood can be separated into components to help save up to 3 individual patient lives.",
    },
  ];

  return (
    <Box sx={{ pb: { xs: 8, md: 12 }, bgcolor: "#FFFFFF" }}>
      {/* Banner */}
      <Box
        sx={{
          bgcolor: "#001B5C",
          color: "#FFFFFF",
          pt: { xs: 5, md: 7 },
          pb: { xs: 6, md: 8 },
          position: "relative",
          backgroundImage: "linear-gradient(135deg, #001B5C 0%, #8E0000 100%)",
        }}
      >
        <Container maxWidth="lg">
          <Breadcrumbs
            items={[
              { label: "Initiatives", href: "/initiatives" },
              { label: "Blood Donation" },
            ]}
          />

          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mt: 2 }}>
            <Chip
              label="Voluntary Health Mission"
              sx={{ bgcolor: "#C62828", color: "#FFFFFF", fontWeight: 700, fontSize: "0.75rem" }}
            />
            <Chip
              label="Vijayapura Emergency Network"
              sx={{ bgcolor: "rgba(255,255,255,0.15)", color: "#FFFFFF", fontWeight: 600, fontSize: "0.75rem" }}
            />
          </Box>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.4rem" },
              fontWeight: 900,
              color: "#FFFFFF",
              letterSpacing: "-0.02em",
              mt: 2,
              mb: 2,
            }}
          >
            Donate Blood. Save Lives.
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: "rgba(255, 255, 255, 0.88)",
              maxWidth: 780,
              fontSize: { xs: "1rem", sm: "1.15rem" },
              fontWeight: 400,
              lineHeight: 1.6,
            }}
          >
            Every drop counts. We encourage people to come together, support
            patients in need, and contribute towards saving precious lives in Vijayapura.
          </Typography>
        </Container>
      </Box>

      {/* Main Narrative & Sidebar */}
      <Container maxWidth="lg" sx={{ mt: { xs: 6, md: 8 } }}>
        <Grid container spacing={{ xs: 5, md: 7 }}>
          <Grid item xs={12} md={7} lg={8}>
            <AnimatedSection>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: 3,
                    bgcolor: "rgba(198, 40, 40, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <BloodtypeIcon sx={{ fontSize: 34, color: "#C62828" }} />
                </Box>
                <Box>
                  <Typography variant="overline" sx={{ color: "#C62828", fontWeight: 800, letterSpacing: "0.05em" }}>
                    HUMANITARIAN HEALTH SUPPORT
                  </Typography>
                  <Typography variant="h4" sx={{ fontWeight: 800, color: "primary.main", fontSize: { xs: "1.35rem", md: "1.7rem" } }}>
                    Compassion in Action During Medical Emergencies
                  </Typography>
                </Box>
              </Box>

              <Typography
                variant="body1"
                sx={{ color: "text.primary", lineHeight: 1.85, mb: 2.5, fontSize: "1.05rem" }}
              >
                In an acute medical crisis — such as surgical trauma, high-risk maternal
                delivery, thalassemic child transfusion, or severe dengue fever —
                minutes can make all the difference. Patient families in Vijayapura
                often find themselves overwhelmed when blood units are urgently needed.
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "text.secondary", lineHeight: 1.85, mb: 3, fontSize: "1rem" }}
              >
                Warsia Educational &amp; Social Development Trust operates as an active,
                volunteer-driven bridge. We connect willing voluntary donors directly
                with licensed hospital blood facilities where patients are admitted,
                ensuring safe, rapid, and compassionate response with zero commercialism.
              </Typography>

              {/* Guidelines Grid */}
              <Typography
                variant="h5"
                sx={{ fontWeight: 800, color: "primary.main", mb: 2.5, fontSize: "1.25rem" }}
              >
                Voluntary Blood Donation Facts &amp; Guidance
              </Typography>

              <Grid container spacing={2.5} sx={{ mb: 4 }}>
                {bloodGuidelines.map((item) => (
                  <Grid item xs={12} sm={6} key={item.title}>
                    <Card
                      sx={{
                        p: 2.5,
                        height: "100%",
                        borderRadius: 3,
                        border: "1px solid rgba(198, 40, 40, 0.18)",
                        bgcolor: "#FFFDFD",
                      }}
                    >
                      <Typography variant="subtitle2" sx={{ fontWeight: 800, color: "#C62828", mb: 0.8 }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.6 }}>
                        {item.desc}
                      </Typography>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              {/* Action Buttons */}
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 4 }}>
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
                    fontWeight: 700,
                    px: 3.5,
                    "&:hover": { bgcolor: "#B71C1C" },
                  }}
                >
                  Register as Volunteer Donor
                </Button>

                <Button
                  component="a"
                  href={emergencyWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  size="large"
                  startIcon={<PhoneIcon />}
                  sx={{
                    borderColor: "#C62828",
                    color: "#C62828",
                    fontWeight: 700,
                    "&:hover": { bgcolor: "rgba(198, 40, 40, 0.05)" },
                  }}
                >
                  Request Emergency Donor Help
                </Button>
              </Box>
            </AnimatedSection>
          </Grid>

          {/* Right Sidebar */}
          <Grid item xs={12} md={5} lg={4}>
            <AnimatedSection delay={0.2}>
              <ContactCard />
            </AnimatedSection>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
