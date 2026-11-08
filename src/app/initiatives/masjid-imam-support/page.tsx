import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import { constructMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import ContactCard from "@/components/common/ContactCard";
import Reveal from "@/components/animations/Reveal";
import TextReveal from "@/components/animations/TextReveal";
import MagneticButton from "@/components/animations/MagneticButton";
import {
  MosqueIcon,
  TempleHinduIcon,
  CheckCircleIcon,
  WhatsAppIcon,
  ArrowForwardIcon,
  Diversity3Icon,
} from "@/components/common/Icons";
import { getInitiativeWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = constructMetadata({
  title: "Masjid Imam Monthly Support Initiative | Vijayapura",
  description:
    "Providing monthly financial assistance to Masjid Imams in Vijayapura in recognition of their spiritual dedication, guidance, and community service.",
  path: "/initiatives/masjid-imam-support",
});

export default function MasjidImamSupportPage() {
  const whatsAppLink = getInitiativeWhatsAppLink("Masjid Imam Monthly Support");

  const highlights = [
    "Dignified monthly financial assistance directly honoring Masjid Imams",
    "Balanced alongside Temple Pandit support to celebrate communal brotherhood",
    "Unbiased criteria focused on dedicated community service in Vijayapura",
    "Recognizing those who offer daily prayers, solace, and moral grounding",
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
            radial-gradient(circle at 15% 20%, rgba(0, 96, 0, 0.45) 0%, transparent 45%),
            radial-gradient(circle at 85% 80%, rgba(242, 117, 1, 0.2) 0%, transparent 45%),
            linear-gradient(180deg, #001B5C 0%, #004500 100%)
          `,
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 2.5, sm: 4, md: 6, lg: 8 } }}>
          <Breadcrumbs
            items={[
              { label: "Initiatives", href: "/initiatives" },
              { label: "Masjid Imam Support" },
            ]}
          />

          <Reveal direction="down">
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mt: 2.5, mb: 1.5, flexWrap: "wrap" }}>
              <Chip
                label="Religious Harmony Initiative"
                sx={{
                  bgcolor: "#006000",
                  color: "#FFFFFF",
                  fontWeight: 800,
                  fontSize: "0.75rem",
                }}
              />
              <Chip
                label="Equal Community Parity"
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
            text="Supporting Masjid Imams"
            as="h1"
            delay={0.1}
            stagger={0.04}
            highlightWord="Imams"
            highlightColor="#81C784"
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
              Providing monthly financial assistance to Masjid Imams in recognition of
              their dedication and service to their communities.
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
              {/* Image Banner */}
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: 240, sm: 340 },
                  borderRadius: 4.5,
                  overflow: "hidden",
                  mb: 4.5,
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 14px 40px rgba(0, 96, 0, 0.12)",
                }}
              >
                <Image
                  src="/images/initiatives/masjid-support.svg"
                  alt="Masjid Imam Support illustration"
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
                    bgcolor: "rgba(0, 96, 0, 0.08)",
                    border: "1px solid rgba(0, 96, 0, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MosqueIcon sx={{ fontSize: 34, color: "#006000" }} />
                </Box>
                <Box>
                  <Typography
                    variant="overline"
                    sx={{ color: "#006000", fontWeight: 800, letterSpacing: "0.08em" }}
                  >
                    FAITH &amp; COMMUNITY GUARDIANSHIP
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 900,
                      color: "primary.main",
                      fontSize: { xs: "1.5rem", md: "1.85rem" },
                    }}
                  >
                    Recognizing Spiritual Guardians
                  </Typography>
                </Box>
              </Box>

              <Typography
                variant="body1"
                sx={{ color: "text.primary", lineHeight: 1.85, mb: 2.5, fontSize: "1.06rem" }}
              >
                Masjid Imams play a cornerstone role in cultivating peace, moral
                grounding, and spiritual solace within their congregations. They lead
                the daily five prayers, counsel families in distress, guide youth toward
                righteous conduct, and act as ambassadors of harmony.
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "text.secondary", lineHeight: 1.8, mb: 2.5, fontSize: "1rem" }}
              >
                Yet, in many neighborhood mosques, especially in older and less affluent
                localities of Vijayapura, Imams serve on very modest honorariums without
                financial safety nets.
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "text.secondary", lineHeight: 1.8, mb: 4, fontSize: "1rem" }}
              >
                Warsia Educational &amp; Social Development Trust extends regular,
                dignified monthly financial support directly to these religious leaders,
                ensuring they can sustain their families while continuing their noble
                calling with peace of mind.
              </Typography>

              {/* Highlights Box */}
              <Box
                sx={{
                  p: { xs: 3.5, sm: 4.5 },
                  borderRadius: 4,
                  bgcolor: "#F7F8FC",
                  border: "2px solid #E2E8F0",
                  borderLeft: "6px solid #006000",
                  mb: 5,
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 900, color: "primary.main", mb: 2.5, fontSize: "1.25rem" }}
                >
                  Program Cornerstones
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {highlights.map((h, i) => (
                    <Box key={i} sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                      <CheckCircleIcon sx={{ color: "#006000", fontSize: 22, mt: 0.2 }} />
                      <Typography variant="body2" sx={{ color: "text.primary", fontWeight: 700, fontSize: "0.96rem" }}>
                        {h}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* Parity Link to Temple Pandit Support */}
              <Box
                sx={{
                  p: 3.5,
                  borderRadius: 4,
                  bgcolor: "rgba(242, 117, 1, 0.06)",
                  border: "1.5px solid rgba(242, 117, 1, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: 2,
                  mb: 5,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <TempleHinduIcon sx={{ color: "#F27501", fontSize: 28 }} />
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 800, color: "primary.main" }}>
                      Equal Parity: Temple Pandit Support
                    </Typography>
                    <Typography variant="caption" sx={{ color: "text.secondary" }}>
                      Discover our twin initiative honoring Temple Pandits with identical priority.
                    </Typography>
                  </Box>
                </Box>
                <Link href="/initiatives/temple-pandit-support" style={{ textDecoration: "none" }}>
                  <Button
                    variant="outlined"
                    color="warning"
                    endIcon={<ArrowForwardIcon />}
                    sx={{ fontWeight: 800 }}
                  >
                    View Pandit Support
                  </Button>
                </Link>
              </Box>
            </Reveal>
          </Box>

          {/* Right Column: Contact & Quick Actions */}
          <Box>
            <Reveal delay={0.2} direction="left" scale>
              <Box sx={{ position: "sticky", top: 100, display: "flex", flexDirection: "column", gap: 3.5 }}>
                <ContactCard />

                <Card
                  sx={{
                    borderRadius: 4,
                    border: "1.5px solid #E2E8F0",
                    p: 3.5,
                    bgcolor: "#F7F8FC",
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 900, color: "primary.main", mb: 1 }}>
                    Support This Initiative
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary", mb: 2.5, lineHeight: 1.6 }}>
                    Connect with Warsia Trust to recommend a Masjid Imam in Vijayapura or
                    support our religious harmony programs.
                  </Typography>

                  <MagneticButton strength={0.2} style={{ width: "100%" }}>
                    <Button
                      component="a"
                      href={whatsAppLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="contained"
                      fullWidth
                      startIcon={<WhatsAppIcon sx={{ fontSize: 22 }} />}
                      sx={{
                        bgcolor: "#006000",
                        py: 1.5,
                        fontWeight: 800,
                        "&:hover": { bgcolor: "#004500" },
                      }}
                    >
                      Inquire on WhatsApp
                    </Button>
                  </MagneticButton>
                </Card>
              </Box>
            </Reveal>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
