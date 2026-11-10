import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import { constructMetadata, generateInitiativeSchema } from "@/lib/seo";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import ContactCard from "@/components/common/ContactCard";
import Reveal from "@/components/animations/Reveal";
import TextReveal from "@/components/animations/TextReveal";
import MagneticButton from "@/components/animations/MagneticButton";
import {
  TempleHinduIcon,
  MosqueIcon,
  CheckCircleIcon,
  WhatsAppIcon,
  ArrowForwardIcon,
  Diversity3Icon,
} from "@/components/common/Icons";
import { getInitiativeWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = constructMetadata({
  title: "Temple Pandit Monthly Support Initiative | Vijayapura",
  description:
    "Providing monthly financial assistance to Temple Pandits in Vijayapura in recognition of their spiritual dedication, cultural rites, and community service.",
  path: "/initiatives/temple-pandit-support",
});

export default function TemplePanditSupportPage() {
  const whatsAppLink = getInitiativeWhatsAppLink("Temple Pandit Monthly Support");

  const initiativeSchema = generateInitiativeSchema({
    title: "Temple Pandit Monthly Support Initiative",
    description:
      "Providing monthly financial assistance to Temple Pandits in Vijayapura in recognition of their spiritual dedication, cultural rites, and community service.",
    path: "/initiatives/temple-pandit-support",
    category: "Religious Harmony & Cultural Heritage Assistance",
    image: "/images/monuments/shivagiri-monument.jpg",
  });

  const highlights = [
    "Dignified monthly financial assistance directly honoring Temple Pandits",
    "Balanced alongside Masjid Imam support to celebrate communal brotherhood",
    "Unbiased criteria focused on dedicated community service in Vijayapura",
    "Recognizing those who preserve sacred traditions, prayers, and cultural harmony",
  ];

  return (
    <Box sx={{ pb: { xs: 9, md: 14 }, bgcolor: "#FFFFFF" }}>
      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(initiativeSchema) }}
      />
      {/* Editorial Header Banner */}
      <Box
        sx={{
          bgcolor: "#001B5C",
          color: "#FFFFFF",
          pt: { xs: 6, md: 9 },
          pb: { xs: 7, md: 10 },
          position: "relative",
          backgroundImage: `
            radial-gradient(circle at 15% 20%, rgba(242, 117, 1, 0.45) 0%, transparent 45%),
            radial-gradient(circle at 85% 80%, rgba(0, 96, 0, 0.2) 0%, transparent 45%),
            linear-gradient(180deg, #001B5C 0%, #C75F00 100%)
          `,
        }}
      >
        <Container maxWidth="xl">
          <Breadcrumbs
            items={[
              { label: "Initiatives", href: "/initiatives" },
              { label: "Temple Pandit Support" },
            ]}
          />

          <Reveal direction="down">
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mt: 2.5, mb: 1.5, flexWrap: "wrap" }}>
              <Chip
                label="Religious Harmony Initiative"
                sx={{
                  bgcolor: "#F27501",
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
            text="Supporting Temple Pandits"
            as="h1"
            delay={0.1}
            stagger={0.04}
            highlightWord="Pandits"
            highlightColor="#FFB74D"
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
              Providing monthly financial assistance to Temple Pandits in recognition of
              their dedication and service to their communities.
            </Typography>
          </Reveal>
        </Container>
      </Box>

      {/* Main Narrative & Sidebar */}
      <Container maxWidth="xl" sx={{ mt: { xs: 7, md: 10 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "minmax(0, 1fr)", md: "1.3fr 0.7fr" },
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
                  boxShadow: "0 14px 40px rgba(242, 117, 1, 0.12)",
                }}
              >
                <Image
                  src="/images/monuments/shivagiri-monument.jpg"
                  alt="Historic Shivagiri Monument in Vijayapura (Bijapur) - Honoring Cultural & Spiritual Guardianship"
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
                    bgcolor: "rgba(242, 117, 1, 0.08)",
                    border: "1px solid rgba(242, 117, 1, 0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <TempleHinduIcon sx={{ fontSize: 34, color: "#F27501" }} />
                </Box>
                <Box>
                  <Typography
                    variant="overline"
                    sx={{ color: "#C75F00", fontWeight: 800, letterSpacing: "0.08em" }}
                  >
                    FAITH &amp; CULTURAL DEVOTION
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 900,
                      color: "primary.main",
                      fontSize: { xs: "1.5rem", md: "1.85rem" },
                    }}
                  >
                    Honoring Sacred Devotion
                  </Typography>
                </Box>
              </Box>

              <Typography
                variant="body1"
                sx={{ color: "text.primary", lineHeight: 1.85, mb: 2.5, fontSize: "1.06rem" }}
              >
                Temple Pandits dedicate their lives to conducting sacred rites,
                preserving timeless cultural heritage, and extending spiritual comfort
                to devotees across Vijayapura. They serve in local shrines, often under
                very modest circumstances, embodying devotion and service.
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "text.secondary", lineHeight: 1.8, mb: 2.5, fontSize: "1rem" }}
              >
                With complete equality and deep reverence, Warsia Educational &amp; Social
                Development Trust provides dignified, regular monthly financial support to
                Temple Pandits in Vijayapura.
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "text.secondary", lineHeight: 1.8, mb: 4, fontSize: "1rem" }}
              >
                This initiative stands as an authentic testament to our motto — &ldquo;Service to
                Humanity – The Mark of True Faith&rdquo; — demonstrating that true
                humanitarianism transcends religious lines and unifies hearts.
              </Typography>

              {/* Highlights Box */}
              <Box
                sx={{
                  p: { xs: 3.5, sm: 4.5 },
                  borderRadius: 4,
                  bgcolor: "#F7F8FC",
                  border: "2px solid #E2E8F0",
                  borderLeft: "6px solid #F27501",
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
                      <CheckCircleIcon sx={{ color: "#F27501", fontSize: 22, mt: 0.2 }} />
                      <Typography variant="body2" sx={{ color: "text.primary", fontWeight: 700, fontSize: "0.96rem" }}>
                        {h}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* Parity Link to Masjid Imam Support */}
              <Box
                sx={{
                  p: 3.5,
                  borderRadius: 4,
                  bgcolor: "rgba(0, 96, 0, 0.06)",
                  border: "1.5px solid rgba(0, 96, 0, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: 2,
                  mb: 5,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <MosqueIcon sx={{ color: "#006000", fontSize: 28 }} />
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 800, color: "primary.main" }}>
                      Equal Parity: Masjid Imam Support
                    </Typography>
                    <Typography variant="caption" sx={{ color: "text.secondary" }}>
                      Discover our twin initiative honoring Masjid Imams with identical priority.
                    </Typography>
                  </Box>
                </Box>
                <Link href="/initiatives/masjid-imam-support" style={{ textDecoration: "none" }}>
                  <Button
                    variant="outlined"
                    color="secondary"
                    endIcon={<ArrowForwardIcon />}
                    sx={{ fontWeight: 800 }}
                  >
                    View Imam Support
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
                    Connect with Warsia Trust to recommend a Temple Pandit in Vijayapura or
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
                        bgcolor: "#F27501",
                        color: "#FFFFFF",
                        py: 1.5,
                        fontWeight: 800,
                        "&:hover": { bgcolor: "#C75F00" },
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
