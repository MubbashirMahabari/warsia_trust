import { Metadata } from "next";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { constructMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import VolunteerSection from "@/components/home/VolunteerSection";
import Reveal from "@/components/animations/Reveal";
import TextReveal from "@/components/animations/TextReveal";

export const metadata: Metadata = constructMetadata({
  title: "Become a Volunteer - Join Our Mission in Vijayapura",
  description:
    "Join hands with Warsia Educational & Social Development Trust. Volunteer for blood donation coordination, religious harmony drives, student education, and welfare distribution.",
  path: "/volunteer",
});

export default function VolunteerPage() {
  return (
    <Box sx={{ pb: { xs: 8, md: 12 }, bgcolor: "#FFFFFF" }}>
      {/* Editorial Banner */}
      <Box
        sx={{
          bgcolor: "#001B5C",
          color: "#FFFFFF",
          pt: { xs: 6, md: 9 },
          pb: { xs: 7, md: 10 },
          position: "relative",
          backgroundImage: `
            radial-gradient(circle at 15% 20%, rgba(0, 96, 0, 0.35) 0%, transparent 45%),
            radial-gradient(circle at 85% 80%, rgba(242, 117, 1, 0.25) 0%, transparent 45%),
            linear-gradient(180deg, #001B5C 0%, #004500 100%)
          `,
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 2.5, sm: 4, md: 6, lg: 8 } }}>
          <Breadcrumbs items={[{ label: "Become a Volunteer" }]} />

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
              COMMUNITY PARTICIPATION
            </Typography>
          </Reveal>

          <TextReveal
            text="Become a Volunteer. Create Real Change."
            as="h1"
            delay={0.1}
            stagger={0.04}
            highlightWord="Change."
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
                maxWidth: 720,
                fontSize: { xs: "1.05rem", sm: "1.2rem" },
                fontWeight: 400,
                lineHeight: 1.7,
              }}
            >
              Whether you can contribute two hours a week for hospital blood coordination
              or participate in monthly community welfare drives, your compassion matters.
            </Typography>
          </Reveal>
        </Container>
      </Box>

      {/* Main Volunteer Section with interactive form and WhatsApp handoff */}
      <VolunteerSection />
    </Box>
  );
}
