import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { siteConfig } from "@/config/site";
import { ArrowForwardIcon, WhatsAppIcon, LocationOnIcon } from "@/components/common/Icons";
import { getWhatsAppLink } from "@/lib/utils";

export const metadata = {
  title: "404 - Page Not Found | Warsia Trust",
  description: "The page you are looking for does not exist. Return to Warsia Educational & Social Development Trust homepage or explore our humanitarian initiatives.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <Box
      sx={{
        minHeight: "75vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: { xs: 8, md: 14 },
        bgcolor: "#F7F8FC",
        position: "relative",
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            textAlign: "center",
            p: { xs: 4, sm: 6 },
            bgcolor: "#FFFFFF",
            borderRadius: 5,
            border: "1px solid #E2E8F0",
            boxShadow: "0 20px 60px rgba(0, 40, 135, 0.08)",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "5rem", sm: "7rem" },
              fontWeight: 900,
              lineHeight: 1,
              color: "primary.main",
              letterSpacing: "-0.04em",
              mb: 1,
            }}
          >
            404
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontWeight: 900,
              color: "#001B5C",
              fontSize: { xs: "1.4rem", sm: "1.85rem" },
              mb: 2,
            }}
          >
            Page Not Found
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              maxWidth: 540,
              mx: "auto",
              mb: 4,
              lineHeight: 1.7,
              fontSize: "1.02rem",
            }}
          >
            The link you followed may be broken or the page may have been moved. You can return to our homepage, explore our active humanitarian initiatives, or contact the trust office directly.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              justifyContent: "center",
              mb: 4,
            }}
          >
            <Link href="/" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  borderRadius: 9999,
                  px: 3.5,
                  py: 1.4,
                  fontWeight: 800,
                  boxShadow: "0 8px 24px rgba(0, 40, 135, 0.25)",
                }}
              >
                Return to Homepage
              </Button>
            </Link>

            <Link href="/initiatives" style={{ textDecoration: "none" }}>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  borderRadius: 9999,
                  px: 3,
                  py: 1.4,
                  fontWeight: 700,
                }}
              >
                Explore Initiatives
              </Button>
            </Link>

            <Button
              component="a"
              href={getWhatsAppLink("Hello Warsia Trust, I need assistance.")}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              color="secondary"
              size="large"
              startIcon={<WhatsAppIcon />}
              sx={{
                borderRadius: 9999,
                px: 3,
                py: 1.4,
                fontWeight: 800,
                bgcolor: "#006000",
                "&:hover": { bgcolor: "#004500" },
              }}
            >
              Contact Trust Desk
            </Button>
          </Box>

          <Typography
            variant="caption"
            sx={{ color: "text.secondary", display: "block" }}
          >
            {siteConfig.name} • {siteConfig.location}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
