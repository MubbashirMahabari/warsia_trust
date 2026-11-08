import { Metadata } from "next";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { constructMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import GallerySection from "@/components/home/GallerySection";

export const metadata: Metadata = constructMetadata({
  title: "Photo Gallery - Service, Unity & Community Fellowship",
  description:
    "Visual gallery of Warsia Educational & Social Development Trust: festive celebrations of communal harmony, food kit distribution, and humanitarian service in Vijayapura.",
  path: "/gallery",
});

export default function GalleryPage() {
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
          backgroundImage: "linear-gradient(135deg, #001B5C 0%, #002887 100%)",
        }}
      >
        <Container maxWidth="lg">
          <Breadcrumbs items={[{ label: "Gallery" }]} />

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
            PHOTOGRAPHIC ARCHIVE
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
            Moments of Service &amp; Togetherness
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
            Browse genuine moments of community fellowship, cultural celebration,
            food relief, and accreditation from Warsia Trust in Vijayapura.
          </Typography>
        </Container>
      </Box>

      {/* Gallery Section */}
      <GallerySection />
    </Box>
  );
}
