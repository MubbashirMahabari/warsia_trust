import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { siteConfig } from "@/config/site";
import { constructMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import SectionHeading from "@/components/common/SectionHeading";
import FAQSection from "@/components/common/FAQSection";
import Reveal from "@/components/animations/Reveal";
import TextReveal from "@/components/animations/TextReveal";
import {
  VerifiedIcon,
  CheckCircleIcon,
  Diversity3Icon,
  VolunteerActivismIcon,
  PhoneIcon,
  WhatsAppIcon,
  ArrowForwardIcon,
  BalanceIcon,
} from "@/components/common/Icons";
import { getWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = constructMetadata({
  title: "About Us - Mission, Leadership & Vision",
  description:
    "Learn about Warsia Educational & Social Development Trust, our president Mohammed Shafi H Mahabari, and our humanitarian commitment in Vijayapura, Karnataka.",
  path: "/about",
});

const valuesList = [
  {
    title: "Service to Humanity",
    description:
      "Believing that human suffering must be alleviated regardless of religious, ethnic, or social origin.",
    icon: <VolunteerActivismIcon sx={{ fontSize: 32, color: "primary.main" }} />,
  },
  {
    title: "Religious Parity & Brotherhood",
    description:
      "Giving equal visual, financial, and emotional weight to Masjid Imams and Temple Pandits alike.",
    icon: <BalanceIcon sx={{ fontSize: 32, color: "warning.main" }} />,
  },
  {
    title: "Accountability & Transparency",
    description:
      "Operating with zero commercial interest, full transparency, and public trust accountability.",
    icon: <VerifiedIcon sx={{ fontSize: 32, color: "secondary.main" }} />,
  },
  {
    title: "Community Empowerment",
    description:
      "Enabling education, health security through blood donation, and dignity for vulnerable families across Vijayapura.",
    icon: <Diversity3Icon sx={{ fontSize: 32, color: "primary.main" }} />,
  },
];

export default function AboutPage() {
  return (
    <Box sx={{ pb: { xs: 9, md: 14 }, bgcolor: "#FFFFFF" }}>
      {/* Editorial Page Header Banner */}
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
          <Breadcrumbs items={[{ label: "About Us" }]} />

          <Reveal direction="down">
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.2,
                py: 0.6,
                px: 2,
                borderRadius: 9999,
                bgcolor: "rgba(255, 255, 255, 0.12)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                mt: 2.5,
                mb: 2,
              }}
            >
              <VerifiedIcon sx={{ color: "warning.main", fontSize: 18 }} />
              <Typography
                variant="overline"
                sx={{
                  color: "#FFFFFF",
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                  fontSize: "0.75rem",
                  lineHeight: 1,
                }}
              >
                OFFICIAL TRUST PROFILE
              </Typography>
            </Box>
          </Reveal>

          <TextReveal
            text="About Warsia Educational & Social Development Trust"
            as="h1"
            delay={0.1}
            stagger={0.04}
            highlightWord="Trust"
            highlightColor="#FFB74D"
            style={{
              fontSize: "clamp(2.3rem, 4.4vw, 3.6rem)",
              fontWeight: 900,
              color: "#FFFFFF",
              letterSpacing: "-0.025em",
              lineHeight: 1.15,
              marginBottom: "18px",
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
              A non-governmental humanitarian organization established in Vijayapura
              (Bijapur), Karnataka, driven by the timeless motto:
              &ldquo;{siteConfig.slogan}&rdquo;
            </Typography>
          </Reveal>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="xl" sx={{ mt: { xs: 7, md: 10 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "minmax(0, 1fr)", lg: "1fr 1.5fr" },
            gap: { xs: 5, lg: 8 },
            alignItems: "flex-start",
            width: "100%",
            maxWidth: "100%",
          }}
        >
          {/* Left Column: Official Full Logo Card with Slogan */}
          <Box>
            <Reveal direction="right" scale>
              <Card
                sx={{
                  borderRadius: 5,
                  border: "2px solid #E2E8F0",
                  p: { xs: 3.5, sm: 4.5 },
                  bgcolor: "#FFFFFF",
                  boxShadow: "0 18px 45px rgba(0, 40, 135, 0.1)",
                  textAlign: "center",
                }}
              >
                {/* Official Full Logo With Slogan */}
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: 190,
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
                  sx={{
                    fontWeight: 900,
                    color: "primary.main",
                    fontSize: "1.1rem",
                    mb: 1,
                    lineHeight: 1.3,
                  }}
                >
                  {siteConfig.name}
                </Typography>

                <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
                  <Chip
                    icon={<VerifiedIcon sx={{ fontSize: "16px !important" }} />}
                    label={`Darphan ID: ${siteConfig.darphanId}`}
                    color="primary"
                    variant="outlined"
                    sx={{ fontWeight: 800, py: 2 }}
                  />
                </Box>

                <Divider sx={{ my: 2.5 }} />

                <Box
                  sx={{
                    textAlign: "left",
                    p: 2.5,
                    bgcolor: "#F7F8FC",
                    borderRadius: 3.5,
                    border: "1px solid #E2E8F0",
                  }}
                >
                  <Typography
                    variant="overline"
                    sx={{
                      color: "text.secondary",
                      fontWeight: 800,
                      display: "block",
                      letterSpacing: "0.08em",
                    }}
                  >
                    TRUST LEADERSHIP
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 900, color: "primary.main", mt: 0.5 }}
                  >
                    {siteConfig.president}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "secondary.dark", fontWeight: 700 }}
                  >
                    President, Warsia Trust
                  </Typography>

                  <Typography
                    variant="overline"
                    sx={{
                      color: "text.secondary",
                      fontWeight: 800,
                      display: "block",
                      letterSpacing: "0.08em",
                      mt: 2,
                    }}
                  >
                    HEADQUARTERS
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.primary", fontWeight: 600, lineHeight: 1.6 }}
                  >
                    {siteConfig.contact.address.formatted}
                  </Typography>
                </Box>
              </Card>
            </Reveal>

            {/* Historic Bijapur Heritage Card */}
            <Reveal delay={0.2} direction="right" scale>
              <Card
                sx={{
                  borderRadius: 5,
                  border: "2px solid #E2E8F0",
                  mt: 3.5,
                  overflow: "hidden",
                  bgcolor: "#FFFFFF",
                  boxShadow: "0 14px 35px rgba(0, 40, 135, 0.08)",
                }}
              >
                <Box sx={{ position: "relative", width: "100%", height: 180 }}>
                  <Image
                    src="/images/monuments/gol-gumbaz.jpg"
                    alt="Gol Gumbaz, historic landmark of Vijayapura (Bijapur), Karnataka"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(0,27,92,0.85) 0%, transparent 60%)",
                    }}
                  />
                  <Box sx={{ position: "absolute", bottom: 12, left: 16, right: 16 }}>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "#FFB74D",
                        fontWeight: 800,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      Our Cultural Roots
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "#FFFFFF", fontWeight: 800, lineHeight: 1.2 }}
                    >
                      Historic Vijayapura (Bijapur)
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ p: 2.5 }}>
                  <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.6 }}>
                    Standing in the shadow of world-famous monuments like Gol Gumbaz, Ibrahim Rauza, and Bara Kaman, Warsia Trust draws strength from Vijayapura&apos;s rich tradition of cultural unity and mutual respect.
                  </Typography>
                </Box>
              </Card>
            </Reveal>
          </Box>

          {/* Right Column: Narrative Story */}
          <Box>
            <Reveal delay={0.2} direction="up">
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 900,
                  color: "primary.dark",
                  fontSize: { xs: "1.75rem", sm: "2.2rem" },
                  mb: 2.5,
                  lineHeight: 1.25,
                }}
              >
                Our Purpose, Philosophy &amp; Community Commitment
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "text.primary",
                  lineHeight: 1.85,
                  mb: 2.5,
                  fontSize: "1.08rem",
                }}
              >
                <strong>WARSIA EDUCATIONAL &amp; SOCIAL DEVELOPMENT TRUST</strong> was
                conceived from a profound conviction: genuine progress in a community is
                only possible when we care for one another without boundaries. Situated
                in the historic city of Vijayapura (Bijapur), Karnataka, the trust serves
                as a unifying platform for compassionate human service.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  lineHeight: 1.8,
                  mb: 2.5,
                  fontSize: "1rem",
                }}
              >
                Our signature commitment is the simultaneous monthly financial assistance
                extended to <strong>Masjid Imams</strong> and <strong>Temple Pandits</strong>.
                These religious leaders give their lives to offering solace, prayers, and
                moral guidance to community members, often while enduring humble personal
                hardships. By honoring them with equal dignity, we champion harmony,
                respect, and mutual brotherhood across faiths.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  lineHeight: 1.8,
                  mb: 4,
                  fontSize: "1rem",
                }}
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
                  color="warning"
                  size="large"
                  startIcon={<WhatsAppIcon />}
                  sx={{ fontWeight: 800, px: 3.5, py: 1.5 }}
                >
                  Connect with Trust President
                </Button>

                <Link href="/initiatives" style={{ textDecoration: "none" }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    sx={{ fontWeight: 700, px: 3.5, py: 1.5 }}
                  >
                    Explore All Initiatives
                  </Button>
                </Link>
              </Box>
            </Reveal>
          </Box>
        </Box>

        {/* Mission & Vision Section */}
        <Box sx={{ mt: { xs: 10, md: 14 } }}>
          <Reveal>
            <SectionHeading
              badge="OUR FOUNDATIONS"
              badgeColor="warning"
              title="Mission, Vision & Guiding Values"
              subtitle="The pillars that steer every initiative, decision, and service of Warsia Trust."
            />
          </Reveal>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "minmax(0, 1fr)", md: "1fr 1fr" },
              gap: 4,
              mb: 7,
            }}
          >
            {/* Mission */}
            <Reveal delay={0.1} direction="up" style={{ height: "100%" }}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: 4,
                  border: "1px solid #E2E8F0",
                  bgcolor: "#FFFFFF",
                  boxShadow: "0 8px 30px rgba(0, 40, 135, 0.06)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box sx={{ height: 6, bgcolor: "#002887", width: "100%" }} />
                <Box sx={{ p: { xs: 4, sm: 5 }, flexGrow: 1 }}>
                  <Typography
                    variant="overline"
                    sx={{ color: "primary.main", fontWeight: 800, letterSpacing: "0.08em" }}
                  >
                    OUR MISSION
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 900,
                      color: "primary.dark",
                      my: 1.5,
                      fontSize: "1.65rem",
                    }}
                  >
                    Unconditional Service &amp; Community Harmony
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "text.secondary", lineHeight: 1.8, fontSize: "1.02rem" }}
                  >
                    To serve human society through compassionate monthly support for
                    religious guardians, proactive voluntary blood donation, educational
                    encouragement, and structured welfare relief, fostering a culture of
                    equality, peace, and mutual respect in Vijayapura and beyond.
                  </Typography>
                </Box>
              </Card>
            </Reveal>

            {/* Vision */}
            <Reveal delay={0.2} direction="up" style={{ height: "100%" }}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: 4,
                  border: "1px solid #E2E8F0",
                  bgcolor: "#FFFFFF",
                  boxShadow: "0 8px 30px rgba(0, 96, 0, 0.06)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box sx={{ height: 6, bgcolor: "#006000", width: "100%" }} />
                <Box sx={{ p: { xs: 4, sm: 5 }, flexGrow: 1 }}>
                  <Typography
                    variant="overline"
                    sx={{ color: "secondary.main", fontWeight: 800, letterSpacing: "0.08em" }}
                  >
                    OUR VISION
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 900,
                      color: "secondary.dark",
                      my: 1.5,
                      fontSize: "1.65rem",
                    }}
                  >
                    A Society Bound by Humanity &amp; Dignity
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "text.secondary", lineHeight: 1.8, fontSize: "1.02rem" }}
                  >
                    To envision a harmonious society where faith unifies rather than divides,
                    where no patient suffers for lack of emergency blood, where underprivileged
                    children have access to educational guidance, and where humanity is
                    celebrated as the highest form of worship.
                  </Typography>
                </Box>
              </Card>
            </Reveal>
          </Box>

          {/* 4 Guiding Values */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "minmax(0, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
              },
              gap: 3.5,
            }}
          >
            {valuesList.map((val, idx) => (
              <Reveal delay={idx * 0.1} direction="up" key={val.title} style={{ height: "100%" }}>
                <Card
                  sx={{
                    p: 3.5,
                    height: "100%",
                    borderRadius: 4,
                    border: "1px solid #E2E8F0",
                    bgcolor: "#FFFFFF",
                    transition: "all 0.35s ease",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 16px 36px rgba(0, 40, 135, 0.1)",
                      borderColor: "warning.main",
                    },
                  }}
                >
                  <Box sx={{ mb: 2 }}>{val.icon}</Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 800,
                      color: "primary.main",
                      fontSize: "1.1rem",
                      mb: 1.2,
                      lineHeight: 1.3,
                    }}
                  >
                    {val.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", lineHeight: 1.7 }}
                  >
                    {val.description}
                  </Typography>
                </Card>
              </Reveal>
            ))}
          </Box>

          {/* Official FAQs with Google FAQPage Schema */}
          <FAQSection />
        </Box>
      </Container>
    </Box>
  );
}
