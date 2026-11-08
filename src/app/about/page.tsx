import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { siteConfig } from "@/config/site";
import { constructMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import SectionHeading from "@/components/common/SectionHeading";
import AnimatedSection from "@/components/common/AnimatedSection";
import {
  VerifiedIcon,
  CheckCircleIcon,
  Diversity3Icon,
  VolunteerActivismIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/components/common/Icons";
import { getWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = constructMetadata({
  title: "About Us - Mission, Leadership & Vision",
  description:
    "Learn about Warsia Educational & Social Development Trust, our president Mohammed Shafi H Mahabari, government Darphan ID KA/2026/0996453, and our humanitarian commitment in Vijayapura, Karnataka.",
  path: "/about",
});

const valuesList = [
  {
    title: "Service to Humanity",
    description: "Believing that human suffering must be alleviated regardless of religious, ethnic, or social origin.",
  },
  {
    title: "Religious Parity & Brotherhood",
    description: "Giving equal visual, financial, and emotional weight to Masjid Imams and Temple Pandits alike.",
  },
  {
    title: "Accountability & Transparency",
    description: "Operating with zero commercial interest and strictly verified humanitarian documentation.",
  },
  {
    title: "Community Empowerment",
    description: "Enabling education, health security through blood donation, and dignity for vulnerable families.",
  },
];

export default function AboutPage() {
  return (
    <Box sx={{ pb: { xs: 8, md: 12 }, bgcolor: "#FFFFFF" }}>
      {/* Page Header Banner */}
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
          <Breadcrumbs items={[{ label: "About Us" }]} />

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
            FOUNDATIONAL ROOTS &amp; MISSION
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
            About Warsia Educational &amp; Social Development Trust
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: "rgba(255, 255, 255, 0.85)",
              maxWidth: 760,
              fontSize: { xs: "1rem", sm: "1.15rem" },
              fontWeight: 400,
              lineHeight: 1.6,
            }}
          >
            A dedicated non-governmental humanitarian organization established in
            Vijayapura (Bijapur), Karnataka, driven by the timeless motto:
            &ldquo;{siteConfig.slogan}&rdquo;
          </Typography>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ mt: { xs: 6, md: 8 } }}>
        <Grid container spacing={{ xs: 5, md: 7 }} alignItems="center">
          {/* Official Full Logo Display per strict requirements */}
          <Grid item xs={12} md={5}>
            <AnimatedSection>
              <Card
                sx={{
                  borderRadius: 4,
                  border: "2px solid #E2E8F0",
                  p: { xs: 3, sm: 4 },
                  bgcolor: "#FFFFFF",
                  boxShadow: "0 12px 35px rgba(0, 40, 135, 0.08)",
                  textAlign: "center",
                }}
              >
                {/* Official Full Logo With Slogan */}
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: 180,
                    mb: 3,
                  }}
                >
                  <Image
                    src="/logo/warsia-logo-with-slogan.png"
                    alt={`${siteConfig.name} - Official Emblem with Slogan`}
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                  />
                </Box>

                <Typography
                  variant="h6"
                  sx={{ fontWeight: 800, color: "primary.main", mb: 0.5 }}
                >
                  {siteConfig.name}
                </Typography>

                <Box sx={{ display: "flex", justifyContent: "center", my: 1.5 }}>
                  <Chip
                    icon={<VerifiedIcon sx={{ fontSize: "16px !important" }} />}
                    label={`Darphan ID: ${siteConfig.darphanId}`}
                    color="primary"
                    variant="outlined"
                    sx={{ fontWeight: 700 }}
                  />
                </Box>

                <Divider sx={{ my: 2 }} />

                <Box sx={{ textAlign: "left", p: 1.5, bgcolor: "background.paper", borderRadius: 2 }}>
                  <Typography variant="caption" sx={{ color: "text.secondary", fontWeight: 700, display: "block" }}>
                    TRUST LEADERSHIP
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 800, color: "primary.main" }}>
                    {siteConfig.president}
                  </Typography>
                  <Typography variant="caption" sx={{ color: "text.secondary" }}>
                    President, Warsia Trust
                  </Typography>

                  <Typography variant="caption" sx={{ color: "text.secondary", fontWeight: 700, display: "block", mt: 1.5 }}>
                    REGISTERED LOCATION
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.primary", fontWeight: 600 }}>
                    {siteConfig.contact.address.formatted}
                  </Typography>
                </Box>
              </Card>
            </AnimatedSection>
          </Grid>

          {/* Narrative Story */}
          <Grid item xs={12} md={7}>
            <AnimatedSection delay={0.1}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  color: "primary.main",
                  fontSize: { xs: "1.6rem", md: "2.1rem" },
                  mb: 2.5,
                  lineHeight: 1.25,
                }}
              >
                Our Purpose, Philosophy &amp; Community Commitment
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "text.primary", lineHeight: 1.85, mb: 2, fontSize: "1.05rem" }}
              >
                <strong>WARSIA EDUCATIONAL &amp; SOCIAL DEVELOPMENT TRUST</strong> was
                conceived from a profound realization: genuine progress in a community is
                only possible when we care for one another without boundaries. Situated
                in the historic city of Vijayapura (Bijapur), Karnataka, the trust serves
                as a unifying platform for compassionate human service.
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "text.secondary", lineHeight: 1.8, mb: 2.5, fontSize: "0.98rem" }}
              >
                Our flagship initiative is the simultaneous monthly financial assistance
                extended to <strong>Masjid Imams</strong> and <strong>Temple Pandits</strong>.
                These religious leaders give their lives to offering solace, prayers, and
                moral guidance to community members, often while enduring humble personal
                hardships. By honoring them equally, we send an unequivocal message of
                harmony, respect, and mutual brotherhood across faiths.
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "text.secondary", lineHeight: 1.8, mb: 4, fontSize: "0.98rem" }}
              >
                Alongside religious community support, our active voluntary blood donation
                campaigns save lives in hospital emergencies, our educational outreach
                encourages young minds to thrive, and our social welfare programs extend
                timely food relief and dignity to underprivileged families.
              </Typography>

              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Button
                  component="a"
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  color="secondary"
                  size="large"
                  startIcon={<WhatsAppIcon />}
                  sx={{ fontWeight: 700 }}
                >
                  Connect with Trust President
                </Button>

                <Link href="/initiatives" style={{ textDecoration: "none" }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="large"
                    sx={{ fontWeight: 700 }}
                  >
                    Explore All Initiatives
                  </Button>
                </Link>
              </Box>
            </AnimatedSection>
          </Grid>
        </Grid>

        {/* Mission, Vision, and Values */}
        <Box sx={{ mt: { xs: 8, md: 12 } }}>
          <AnimatedSection>
            <SectionHeading
              badge="Our Foundations"
              badgeColor="warning"
              title="Mission, Vision &amp; Guiding Values"
              subtitle="The pillars that steer every initiative, decision, and service of Warsia Trust."
            />
          </AnimatedSection>

          <Grid container spacing={4} sx={{ mb: 6 }}>
            {/* Mission */}
            <Grid item xs={12} md={6}>
              <AnimatedSection delay={0.1}>
                <Card
                  sx={{
                    p: { xs: 3.5, sm: 4.5 },
                    height: "100%",
                    borderRadius: 4,
                    border: "1px solid #E2E8F0",
                    bgcolor: "background.paper",
                    borderTop: "6px solid #002887",
                  }}
                >
                  <Typography
                    variant="overline"
                    sx={{ color: "primary.main", fontWeight: 800, letterSpacing: "0.06em" }}
                  >
                    OUR MISSION
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: 800, color: "primary.main", my: 1, fontSize: "1.5rem" }}
                  >
                    Unconditional Service &amp; Community Harmony
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "text.secondary", lineHeight: 1.8, fontSize: "1rem" }}
                  >
                    To serve human society through compassionate monthly support for
                    religious guardians, proactive voluntary blood donation, educational
                    encouragement, and structured welfare relief, fostering a culture of
                    equality, peace, and mutual respect in Vijayapura and beyond.
                  </Typography>
                </Card>
              </AnimatedSection>
            </Grid>

            {/* Vision */}
            <Grid item xs={12} md={6}>
              <AnimatedSection delay={0.2}>
                <Card
                  sx={{
                    p: { xs: 3.5, sm: 4.5 },
                    height: "100%",
                    borderRadius: 4,
                    border: "1px solid #E2E8F0",
                    bgcolor: "background.paper",
                    borderTop: "6px solid #006000",
                  }}
                >
                  <Typography
                    variant="overline"
                    sx={{ color: "secondary.main", fontWeight: 800, letterSpacing: "0.06em" }}
                  >
                    OUR VISION
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: 800, color: "secondary.dark", my: 1, fontSize: "1.5rem" }}
                  >
                    A Society Bound by Humanity &amp; Dignity
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "text.secondary", lineHeight: 1.8, fontSize: "1rem" }}
                  >
                    To envision a harmonious society where faith unifies rather than divides,
                    where no patient suffers for lack of emergency blood, where underprivileged
                    children have access to educational guidance, and where humanity is
                    celebrated as the highest form of worship.
                  </Typography>
                </Card>
              </AnimatedSection>
            </Grid>
          </Grid>

          {/* Values Grid */}
          <Grid container spacing={3}>
            {valuesList.map((val, idx) => (
              <Grid item xs={12} sm={6} md={3} key={val.title}>
                <AnimatedSection delay={idx * 0.1}>
                  <Card
                    sx={{
                      p: 3,
                      height: "100%",
                      borderRadius: 3,
                      border: "1px solid #E2E8F0",
                      bgcolor: "#FFFFFF",
                      transition: "all 0.3s",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: "0 10px 25px rgba(0, 40, 135, 0.08)",
                        borderColor: "warning.main",
                      },
                    }}
                  >
                    <Box sx={{ mb: 1.5 }}>
                      <CheckCircleIcon sx={{ color: "warning.main", fontSize: 26 }} />
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 800, color: "primary.main", fontSize: "1.05rem", mb: 1 }}
                    >
                      {val.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.6 }}>
                      {val.description}
                    </Typography>
                  </Card>
                </AnimatedSection>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
