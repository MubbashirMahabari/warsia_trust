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
  VolunteerActivismIcon,
  CheckCircleIcon,
  WhatsAppIcon,
  Diversity3Icon,
} from "@/components/common/Icons";
import { getInitiativeWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = constructMetadata({
  title: "Social Welfare & Humanitarian Aid | Vijayapura",
  description:
    "Warsia Educational & Social Development Trust extends food kits, emergency relief, and social assistance to vulnerable individuals in Vijayapura, Karnataka.",
  path: "/initiatives/social-development",
});

export default function SocialDevelopmentPage() {
  const whatsAppLink = getInitiativeWhatsAppLink("Social Welfare & Humanitarian Aid");

  const initiativeSchema = generateInitiativeSchema({
    title: "Social Welfare & Humanitarian Aid",
    description:
      "Warsia Educational & Social Development Trust extends food kits, emergency relief, and social assistance to vulnerable individuals in Vijayapura, Karnataka.",
    path: "/initiatives/social-development",
    category: "Community Welfare & Humanitarian Food Aid",
    image: "/images/generic/food-distribution.jpg",
  });

  const welfareAreas = [
    {
      title: "Festive & Emergency Food Kits",
      desc: "Distribution of essential grain and ration kits to underprivileged households during festivals and seasonal distress in Vijayapura.",
    },
    {
      title: "Widow & Elder Assistance",
      desc: "Compassionate outreach providing daily essentials and moral solidarity to vulnerable elderly citizens without family support.",
    },
    {
      title: "Interfaith Social Fellowship",
      desc: "Fostering community goodwill across Hindu, Muslim, and other communities during cultural events and social gatherings.",
    },
    {
      title: "Disaster & Emergency Relief",
      desc: "Rapid mobilization of volunteer resources and emergency aid to families facing acute unexpected hardships.",
    },
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
            radial-gradient(circle at 15% 20%, rgba(242, 117, 1, 0.4) 0%, transparent 45%),
            radial-gradient(circle at 85% 80%, rgba(0, 96, 0, 0.25) 0%, transparent 45%),
            linear-gradient(180deg, #001B5C 0%, #002887 100%)
          `,
        }}
      >
        <Container maxWidth="xl">
          <Breadcrumbs
            items={[
              { label: "Initiatives", href: "/initiatives" },
              { label: "Social Welfare & Aid" },
            ]}
          />

          <Reveal direction="down">
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mt: 2.5, mb: 1.5, flexWrap: "wrap" }}>
              <Chip
                label="Community Care"
                sx={{
                  bgcolor: "#F27501",
                  color: "#FFFFFF",
                  fontWeight: 800,
                  fontSize: "0.75rem",
                }}
              />
              <Chip
                label="Humanitarian Outreach"
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
            text="Social Welfare & Humanitarian Aid"
            as="h1"
            delay={0.1}
            stagger={0.04}
            highlightWord="Aid"
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
              Extending compassionate relief, emergency food kits, winter essentials,
              and community assistance to families in need in Vijayapura.
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
                  boxShadow: "0 14px 40px rgba(242, 117, 1, 0.12)",
                }}
              >
                <Image
                  src="/images/generic/food-distribution.jpg"
                  alt="Social Welfare, Food Relief, and Community Outreach in Vijayapura"
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
                  <VolunteerActivismIcon sx={{ fontSize: 34, color: "#F27501" }} />
                </Box>
                <Box>
                  <Typography
                    variant="overline"
                    sx={{ color: "#C75F00", fontWeight: 800, letterSpacing: "0.08em" }}
                  >
                    COMPASSIONATE COMMUNITY SERVICE
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 900,
                      color: "primary.main",
                      fontSize: { xs: "1.5rem", md: "1.85rem" },
                    }}
                  >
                    Standing Beside Those in Need
                  </Typography>
                </Box>
              </Box>

              <Typography
                variant="body1"
                sx={{ color: "text.primary", lineHeight: 1.85, mb: 2.5, fontSize: "1.06rem" }}
              >
                True humanitarian service is felt when those enduring poverty, illness,
                or hardship realize they are not forgotten. Warsia Trust stands on the
                frontlines of compassionate care in Vijayapura.
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "text.secondary", lineHeight: 1.8, mb: 2.5, fontSize: "1rem" }}
              >
                From distribution of essential grocery and food kits throughout the year and
                during seasonal occasions to emergency welfare aid for elderly citizens and
                widows, our outreach touches real human lives with honor and respect.
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "text.secondary", lineHeight: 1.8, mb: 4, fontSize: "1rem" }}
              >
                We collaborate with dedicated citizens and local volunteers to turn
                compassion into structured, accountable, and transparent action on the ground.
              </Typography>

              {/* 4 Welfare Areas Grid */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "minmax(0, 1fr)", sm: "1fr 1fr" },
                  gap: 2.5,
                  mb: 5,
                }}
              >
                {welfareAreas.map((w) => (
                  <Box
                    key={w.title}
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
                      sx={{ fontWeight: 800, color: "primary.main", mb: 0.8 }}
                    >
                      {w.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", lineHeight: 1.6 }}
                    >
                      {w.desc}
                    </Typography>
                  </Box>
                ))}
              </Box>

              {/* Action Button */}
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 4 }}>
                <MagneticButton strength={0.25}>
                  <Button
                    component="a"
                    href={whatsAppLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    size="large"
                    startIcon={<WhatsAppIcon />}
                    sx={{
                      bgcolor: "warning.main",
                      color: "#FFFFFF",
                      px: 3.8,
                      py: 1.5,
                      fontWeight: 800,
                      "&:hover": { bgcolor: "warning.dark" },
                    }}
                  >
                    Support Social Relief
                  </Button>
                </MagneticButton>

                <Link href="/volunteer" style={{ textDecoration: "none" }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="large"
                    sx={{ px: 3.5, py: 1.5, fontWeight: 700 }}
                  >
                    Join Relief Volunteer Desk
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
              </Box>
            </Reveal>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
