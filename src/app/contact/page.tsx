import { Metadata } from "next";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { constructMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import ContactCard from "@/components/common/ContactCard";
import ContactForm from "@/components/contact/ContactForm";
import Reveal from "@/components/animations/Reveal";
import TextReveal from "@/components/animations/TextReveal";

export const metadata: Metadata = constructMetadata({
  title: "Contact Us - Office Address & Direct Numbers",
  description:
    "Get in touch with Warsia Educational & Social Development Trust in Vijayapura, Karnataka. Official phone numbers: 9449779786, 9620304427, 9606406210. Darphan ID: KA/2026/0996453.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Box sx={{ pb: { xs: 9, md: 14 }, bgcolor: "#FFFFFF" }}>
      {/* Editorial Banner */}
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
          <Breadcrumbs items={[{ label: "Contact Us" }]} />

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
              OFFICIAL CORRESPONDENCE &amp; HELPLINE
            </Typography>
          </Reveal>

          <TextReveal
            text="Get in Touch with Warsia Trust"
            as="h1"
            delay={0.1}
            stagger={0.04}
            highlightWord="Warsia"
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
                maxWidth: 720,
                fontSize: { xs: "1.05rem", sm: "1.2rem" },
                fontWeight: 400,
                lineHeight: 1.7,
              }}
            >
              Our office in Vijayapura is at your service. For program inquiries,
              blood assistance, or general support, connect directly with our coordinators.
            </Typography>
          </Reveal>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="xl" sx={{ mt: { xs: 7, md: 10 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "minmax(0, 1fr)", lg: "0.8fr 1.2fr" },
            gap: { xs: 5, lg: 8 },
            alignItems: "flex-start",
            width: "100%",
            maxWidth: "100%",
          }}
        >
          <Box>
            <Reveal direction="right" scale>
              <ContactCard />
            </Reveal>
          </Box>

          <Box>
            <Reveal delay={0.2} direction="up">
              <ContactForm />
            </Reveal>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
