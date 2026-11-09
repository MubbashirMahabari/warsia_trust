import { Metadata } from "next";
import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { constructMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import SectionHeading from "@/components/common/SectionHeading";
import InitiativeCard from "@/components/common/InitiativeCard";
import Reveal from "@/components/animations/Reveal";
import TextReveal from "@/components/animations/TextReveal";
import { initiativesData } from "@/config/initiatives";
import { WhatsAppIcon, Diversity3Icon, ArrowForwardIcon } from "@/components/common/Icons";
import { getWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = constructMetadata({
  title: "Our Initiatives - Religious Harmony, Blood Donation & Welfare",
  description:
    "Explore the key initiatives of Warsia Trust: monthly assistance for Masjid Imams and Temple Pandits, voluntary blood donor network, educational support, and community social development in Vijayapura.",
  path: "/initiatives",
});

export default function InitiativesPage() {
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
            radial-gradient(circle at 15% 20%, rgba(0, 96, 0, 0.3) 0%, transparent 45%),
            radial-gradient(circle at 85% 80%, rgba(242, 117, 1, 0.22) 0%, transparent 45%),
            linear-gradient(180deg, #001B5C 0%, #002887 100%)
          `,
        }}
      >
        <Container maxWidth="xl">
          <Breadcrumbs items={[{ label: "Initiatives" }]} />

          <Reveal direction="down">
            <Typography
              variant="overline"
              sx={{
                color: "warning.main",
                fontWeight: 800,
                letterSpacing: "0.08em",
                fontSize: "0.85rem",
                display: "block",
                mt: 2.5,
              }}
            >
              HUMANITARIAN PROGRAMS &amp; SERVICES
            </Typography>
          </Reveal>

          <TextReveal
            text="Our Core Humanitarian Initiatives"
            as="h1"
            delay={0.1}
            stagger={0.04}
            highlightWord="Initiatives"
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
                maxWidth: 740,
                fontSize: { xs: "1.05rem", sm: "1.2rem" },
                fontWeight: 400,
                lineHeight: 1.7,
              }}
            >
              Guided by the principle &ldquo;Service to Humanity – The Mark of True Faith,&rdquo;
              explore our dedicated programs serving religious leaders, hospital emergency
              patients, students, and families across Vijayapura.
            </Typography>
          </Reveal>
        </Container>
      </Box>

      {/* Initiatives Grid */}
      <Container maxWidth="xl" sx={{ mt: { xs: 7, md: 10 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "minmax(0, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: { xs: 3.5, md: 4 },
          }}
        >
          {initiativesData.map((initiative, idx) => (
            <Reveal delay={idx * 0.1} direction="up" key={initiative.id} style={{ height: "100%" }}>
              <InitiativeCard initiative={initiative} index={idx} />
            </Reveal>
          ))}
        </Box>

        {/* Closing Support Banner */}
        <Reveal delay={0.4}>
          <Box
            sx={{
              mt: { xs: 8, md: 12 },
              p: { xs: 4, sm: 6 },
              borderRadius: 5,
              bgcolor: "#F7F8FC",
              border: "2px solid #E2E8F0",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Diversity3Icon sx={{ fontSize: 44, color: "warning.main", mb: 2 }} />

            <Typography
              variant="h4"
              sx={{
                fontWeight: 900,
                color: "primary.main",
                fontSize: { xs: "1.6rem", md: "2.1rem" },
                mb: 1.5,
              }}
            >
              Have Questions or Wish to Support an Initiative?
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                maxWidth: 620,
                mx: "auto",
                mb: 4,
                lineHeight: 1.7,
              }}
            >
              Connect directly with Warsia Trust leadership in Vijayapura. We welcome
              inquiries, volunteer enrollments, and collaborative community efforts.
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap" }}>
              <Button
                component="a"
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                color="warning"
                size="large"
                startIcon={<WhatsAppIcon />}
                sx={{ px: 4, py: 1.5, fontWeight: 800 }}
              >
                Inquire on WhatsApp
              </Button>

              <Link href="/contact" style={{ textDecoration: "none" }}>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  sx={{ px: 3.5, py: 1.5, fontWeight: 700 }}
                >
                  Contact Trust Office
                </Button>
              </Link>
            </Box>
          </Box>
        </Reveal>
      </Container>
    </Box>
  );
}
