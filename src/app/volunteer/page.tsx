import { Metadata } from "next";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { constructMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import VolunteerSection from "@/components/home/VolunteerSection";

export const metadata: Metadata = constructMetadata({
  title: "Become a Volunteer - Join Our Mission in Vijayapura",
  description:
    "Join hands with Warsia Educational & Social Development Trust. Volunteer for blood donation coordination, religious harmony drives, student education, and welfare distribution.",
  path: "/volunteer",
});

export default function VolunteerPage() {
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
          <Breadcrumbs items={[{ label: "Become a Volunteer" }]} />

          <Typography
            variant="overline"
            sx={{
              color: "warning.main",
              fontWeight: 800,
              letterSpacing: "0.08em",
              fontSize: "0.85rem",
              display: "block",
              mt: 2,
            }}
          >
            COMMUNITY PARTICIPATION
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.4rem" },
              fontWeight: 900,
              color: "#FFFFFF",
              letterSpacing: "-0.02em",
              mt: 1,
              mb: 2,
            }}
          >
            Become a Volunteer
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
            Be the reason someone smiles today. Stand together with us to strengthen
            humanitarian solidarity and religious brotherhood in Vijayapura.
          </Typography>
        </Container>
      </Box>

      {/* Interactive Volunteer Form Section */}
      <VolunteerSection />
    </Box>
  );
}
