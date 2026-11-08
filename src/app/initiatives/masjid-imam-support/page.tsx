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
import Divider from "@mui/material/Divider";
import { constructMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import AnimatedSection from "@/components/common/AnimatedSection";
import ContactCard from "@/components/common/ContactCard";
import {
  MosqueIcon,
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
    <Box sx={{ pb: { xs: 8, md: 12 }, bgcolor: "#FFFFFF" }}>
      {/* Banner */}
      <Box
        sx={{
          bgcolor: "primary.dark",
          color: "#FFFFFF",
          pt: { xs: 5, md: 7 },
          pb: { xs: 6, md: 8 },
          position: "relative",
          backgroundImage: "linear-gradient(135deg, #001B5C 0%, #004500 100%)",
        }}
      >
        <Container maxWidth="lg">
          <Breadcrumbs
            items={[
              { label: "Initiatives", href: "/initiatives" },
              { label: "Masjid Imam Support" },
            ]}
          />

          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mt: 2 }}>
            <Chip
              label="Religious Harmony Initiative"
              color="secondary"
              sx={{ fontWeight: 700, fontSize: "0.75rem" }}
            />
            <Chip
              label="Equal Community Parity"
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
            Supporting Masjid Imams
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
            Providing monthly financial assistance to Masjid Imams in recognition of
            their dedication and service to their communities.
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
                    bgcolor: "rgba(0, 96, 0, 0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MosqueIcon sx={{ fontSize: 34, color: "secondary.main" }} />
                </Box>
                <Box>
                  <Typography variant="overline" sx={{ color: "secondary.main", fontWeight: 800, letterSpacing: "0.05em" }}>
                    FAITH &amp; COMMUNITY
                  </Typography>
                  <Typography variant="h4" sx={{ fontWeight: 800, color: "primary.main", fontSize: { xs: "1.35rem", md: "1.7rem" } }}>
                    Recognizing Spiritual Guardians
                  </Typography>
                </Box>
              </Box>

              <Typography
                variant="body1"
                sx={{ color: "text.primary", lineHeight: 1.85, mb: 2.5, fontSize: "1.05rem" }}
              >
                Masjid Imams play a cornerstone role in cultivating peace, moral
                grounding, and spiritual solace within their congregations. They lead
                the daily five prayers, counsel families in distress, guide youth toward
                righteous conduct, and safeguard community ethics.
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "text.secondary", lineHeight: 1.85, mb: 3, fontSize: "1rem" }}
              >
                Yet, many Imams serve under modest stipends and face difficult financial
                circumstances while selflessly serving others. Warsia Educational &amp;
                Social Development Trust extends regular, dignified monthly financial
                assistance to support them, acknowledging their daily service with honor
                and gratitude.
              </Typography>

              {/* Highlights Box */}
              <Box
                sx={{
                  p: { xs: 3, sm: 4 },
                  borderRadius: 3.5,
                  bgcolor: "background.paper",
                  border: "1px solid #E2E8F0",
                  mb: 4,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 800, color: "primary.main", mb: 2, fontSize: "1.1rem" }}
                >
                  Key Pillars of the Initiative
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.8 }}>
                  {highlights.map((h) => (
                    <Box key={h} sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                      <CheckCircleIcon sx={{ color: "secondary.main", fontSize: 20, mt: 0.3 }} />
                      <Typography variant="body2" sx={{ color: "text.primary", fontWeight: 600, fontSize: "0.95rem" }}>
                        {h}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* Equality Callout */}
              <Box
                sx={{
                  p: 3,
                  borderRadius: 3,
                  bgcolor: "rgba(0, 40, 135, 0.04)",
                  borderLeft: "4px solid #002887",
                  mb: 4,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.2, mb: 1 }}>
                  <Diversity3Icon sx={{ color: "warning.main", fontSize: 22 }} />
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, color: "primary.main" }}>
                    Equal Footing with Temple Pandit Support
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                  Our trust maintains an unwavering principle of complete equality.
                  Alongside Masjid Imam support, we extend the exact same dignified
                  monthly assistance to Temple Pandits. True service to humanity knows
                  no religious borders.
                </Typography>
              </Box>

              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 4 }}>
                <Button
                  component="a"
                  href={whatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  color="secondary"
                  size="large"
                  startIcon={<WhatsAppIcon />}
                  sx={{ fontWeight: 700, px: 3.5 }}
                >
                  Support This Initiative
                </Button>

                <Link href="/initiatives/temple-pandit-support" style={{ textDecoration: "none" }}>
                  <Button
                    variant="outlined"
                    color="warning"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    sx={{ fontWeight: 700 }}
                  >
                    View Temple Pandit Support
                  </Button>
                </Link>
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
