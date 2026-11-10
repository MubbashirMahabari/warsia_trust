"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import Chip from "@mui/material/Chip";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/animations/Reveal";
import TextReveal from "@/components/animations/TextReveal";
import MagneticButton from "@/components/animations/MagneticButton";
import {
  ArrowForwardIcon,
  CloseIcon,
  VerifiedIcon,
  FullscreenIcon,
} from "@/components/common/Icons";
import { motion, AnimatePresence } from "framer-motion";

export interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "religious-harmony" | "community" | "compliance" | "health" | "education" | "monuments";
  categoryLabel: string;
  image: string;
  description: string;
  featured?: boolean;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "gol-gumbaz-heritage",
    title: "Gol Gumbaz – Pride of Vijayapura",
    category: "monuments",
    categoryLabel: "Historic Bijapur Heritage",
    image: "/images/monuments/gol-gumbaz.jpg",
    description:
      "The world-renowned 17th-century Adil Shahi architectural marvel and monumental dome in Vijayapura, standing as the historic cradle and inspiration of our trust.",
    featured: true,
  },
  {
    id: "ibrahim-rauza-heritage",
    title: "Ibrahim Rauza – Jewel of Deccan Architecture",
    category: "monuments",
    categoryLabel: "Historic Bijapur Heritage",
    image: "/images/monuments/ibrahim-rauza.jpg",
    description:
      "Exquisite symmetrical Deccan mausoleum and garden complex in Vijayapura, revered as the Deccan's architectural jewel of harmony and grace.",
  },
  {
    id: "bara-kaman-heritage",
    title: "Bara Kaman – Twelve Arches of Unity",
    category: "monuments",
    categoryLabel: "Historic Bijapur Heritage",
    image: "/images/monuments/bara-kaman.jpg",
    description:
      "The majestic unfinished stone arches of Bara Kaman in Vijayapura, symbolizing enduring strength, unity, and timeless cultural heritage.",
  },
  {
    id: "jama-masjid-heritage",
    title: "Historic Jumma Masjid – Vijayapura",
    category: "monuments",
    categoryLabel: "Historic Bijapur Heritage",
    image: "/images/monuments/jama-masjid.jpg",
    description:
      "One of the grandest mosques in the Deccan plateau, representing Vijayapura's rich legacy of spiritual devotion and peaceful coexistence.",
  },
  {
    id: "shivagiri-heritage",
    title: "Shivagiri Monument – Vijayapura",
    category: "monuments",
    categoryLabel: "Historic Bijapur Heritage",
    image: "/images/monuments/shivagiri-monument.jpg",
    description:
      "The landmark 85-foot Shivagiri statue in Vijayapura, honoring Karnataka's vibrant cultural heritage and spiritual harmony.",
  },
  {
    id: "food-relief-outreach",
    title: "Essential Food Relief & Ration Distribution",
    category: "community",
    categoryLabel: "Community Welfare",
    image: "/images/generic/food-distribution.jpg",
    description:
      "Dignified distribution of food ration kits and essential provisions to underprivileged families in Vijayapura.",
  },
  {
    id: "interfaith-fellowship",
    title: "Interfaith Brotherhood & Social Harmony",
    category: "religious-harmony",
    categoryLabel: "Religious Harmony",
    image: "/images/generic/community-unity.jpg",
    description:
      "Bringing citizens together across diverse backgrounds to celebrate enduring unity, shared respect, and brotherhood.",
  },
  {
    id: "blood-donation-network",
    title: "Voluntary Blood Donor Network",
    category: "health",
    categoryLabel: "Emergency Blood Care",
    image: "/images/generic/blood-donation.jpg",
    description:
      "Mobilizing compassionate voluntary blood donors for hospital patients during critical medical emergencies.",
  },
  {
    id: "education-empowerment",
    title: "Foundational Education & Child Learning",
    category: "education",
    categoryLabel: "Youth & Learning",
    image: "/images/generic/education-learning.jpg",
    description:
      "Empowering students and underprivileged youth through foundational study support, moral values, and academic guidance.",
  },
  {
    id: "vulnerable-welfare",
    title: "Senior Citizen & Vulnerable Aid",
    category: "community",
    categoryLabel: "Community Welfare",
    image: "/images/generic/elderly-care.jpg",
    description:
      "Direct humanitarian care, winter relief, and assistance for struggling seniors, widows, and distressed families.",
  },
  {
    id: "spiritual-harmony-honorarium",
    title: "Spiritual Leadership Honorarium",
    category: "religious-harmony",
    categoryLabel: "Religious Harmony",
    image: "/images/generic/spiritual-guidance.jpg",
    description:
      "Providing dignified monthly financial assistance to both Masjid Imams and Temple Pandits with absolute parity.",
  },
];

export default function GallerySection({ limit }: { limit?: number }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: "all", label: "All Works & Heritage" },
    { id: "monuments", label: "Historic Bijapur Heritage" },
    { id: "community", label: "Community Welfare" },
    { id: "religious-harmony", label: "Religious Harmony" },
    { id: "health", label: "Emergency & Blood Care" },
    { id: "education", label: "Youth & Education" },
  ];

  const filteredItems = galleryItems
    .filter((item) =>
      selectedCategory === "all" ? true : item.category === selectedCategory
    )
    .slice(0, limit || galleryItems.length);

  return (
    <Box
      sx={{
        py: { xs: 9, md: 14 },
        bgcolor: "#F7F8FC",
        position: "relative",
      }}
    >
      <Container maxWidth="xl">
        {/* Section Heading */}
        <Reveal>
          <Box sx={{ textAlign: "center", maxWidth: 840, mx: "auto", mb: { xs: 5, md: 7 } }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.2,
                py: 0.8,
                px: 2.2,
                borderRadius: 9999,
                bgcolor: "rgba(0, 40, 135, 0.08)",
                border: "1px solid rgba(0, 40, 135, 0.14)",
                mb: 2.5,
              }}
            >
              <Typography
                variant="overline"
                sx={{
                  color: "primary.main",
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                  lineHeight: 1,
                }}
              >
                MOMENTS OF SERVICE &amp; COMMUNITY
              </Typography>
            </Box>

            <TextReveal
              text="Moments of Service and Togetherness."
              as="h2"
              delay={0.1}
              stagger={0.05}
              highlightWord="Togetherness."
              highlightColor="#F27501"
              style={{
                fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
                fontWeight: 900,
                color: "#001B5C",
                letterSpacing: "-0.025em",
                lineHeight: 1.15,
                marginBottom: "16px",
              }}
            />

            <Typography
              variant="subtitle1"
              sx={{
                color: "text.secondary",
                fontSize: { xs: "1.05rem", sm: "1.18rem" },
                lineHeight: 1.7,
              }}
            >
              Authentic visual records of community outreach, festive fellowship across
              diverse faiths, and official government recognition in Vijayapura.
            </Typography>
          </Box>
        </Reveal>

        {/* Category Filters */}
        <Reveal delay={0.2}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 1.5,
              flexWrap: "wrap",
              mb: 6,
            }}
          >
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <Chip
                  key={cat.id}
                  label={cat.label}
                  onClick={() => setSelectedCategory(cat.id)}
                  sx={{
                    fontWeight: 700,
                    fontSize: "0.88rem",
                    px: 1.8,
                    py: 2.2,
                    borderRadius: 9999,
                    cursor: "pointer",
                    bgcolor: isSelected ? "#002887" : "#FFFFFF",
                    color: isSelected ? "#FFFFFF" : "text.primary",
                    border: "1.5px solid",
                    borderColor: isSelected ? "#002887" : "#E2E8F0",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      borderColor: "#002887",
                      bgcolor: isSelected ? "#001B5C" : "rgba(0, 40, 135, 0.05)",
                    },
                  }}
                />
              );
            })}
          </Box>
        </Reveal>

        {/* Asymmetric Masonry / Editorial Grid */}
        <Grid container spacing={3.5}>
          {filteredItems.map((item, idx) => {
            const isFeatured = item.featured && selectedCategory === "all";

            return (
              <Grid
                item
                xs={12}
                sm={isFeatured ? 12 : 6}
                md={isFeatured ? 8 : 4}
                key={item.id}
              >
                <Reveal delay={idx * 0.1} direction="up" style={{ height: "100%" }}>
                  <Box
                    onClick={() => setActiveLightboxItem(item)}
                    sx={{
                      height: "100%",
                      borderRadius: 4.5,
                      overflow: "hidden",
                      bgcolor: "#FFFFFF",
                      border: "1px solid #E2E8F0",
                      boxShadow: "0 8px 24px rgba(0, 40, 135, 0.06)",
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: "column",
                      position: "relative",
                      transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                      "&:hover": {
                        transform: "translateY(-6px)",
                        boxShadow: "0 20px 45px rgba(0, 40, 135, 0.14)",
                        borderColor: "primary.main",
                        "& .gallery-img": {
                          transform: "scale(1.06)",
                        },
                        "& .view-badge": {
                          opacity: 1,
                          transform: "translateY(0)",
                        },
                      },
                    }}
                  >
                    {/* Image Container */}
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        height: isFeatured
                          ? { xs: 260, sm: 340, md: 380 }
                          : { xs: 240, sm: 260 },
                        overflow: "hidden",
                        bgcolor: "#001B5C",
                      }}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes={
                          isFeatured
                            ? "(max-width: 1200px) 100vw, 800px"
                            : "(max-width: 768px) 100vw, 400px"
                        }
                        style={{
                          objectFit: "cover",
                          transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                        }}
                        className="gallery-img"
                      />

                      {/* Category Badge on Image */}
                      <Box
                        sx={{
                          position: "absolute",
                          top: 14,
                          left: 14,
                          bgcolor: "rgba(0, 27, 92, 0.85)",
                          backdropFilter: "blur(8px)",
                          color: "#FFFFFF",
                          px: 1.6,
                          py: 0.5,
                          borderRadius: 9999,
                          fontWeight: 700,
                          fontSize: "0.72rem",
                          border: "1px solid rgba(255, 255, 255, 0.15)",
                        }}
                      >
                        {item.categoryLabel}
                      </Box>

                      {/* Hover "Expand View" Pill */}
                      <Box
                        className="view-badge"
                        sx={{
                          position: "absolute",
                          bottom: 14,
                          right: 14,
                          bgcolor: "rgba(242, 117, 1, 0.95)",
                          color: "#FFFFFF",
                          px: 1.8,
                          py: 0.6,
                          borderRadius: 9999,
                          fontWeight: 800,
                          fontSize: "0.75rem",
                          display: "flex",
                          alignItems: "center",
                          gap: 0.6,
                          opacity: 0,
                          transform: "translateY(8px)",
                          transition: "all 0.3s ease",
                          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                        }}
                      >
                        <FullscreenIcon sx={{ fontSize: 16 }} />
                        View Full Size
                      </Box>
                    </Box>

                    {/* Content / Caption */}
                    <Box sx={{ p: 3, flexGrow: 1, display: "flex", flexDirection: "column" }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 800,
                          color: "primary.main",
                          fontSize: isFeatured ? "1.25rem" : "1.05rem",
                          mb: 1,
                          lineHeight: 1.3,
                        }}
                      >
                        {item.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary", lineHeight: 1.65, fontSize: "0.9rem" }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                </Reveal>
              </Grid>
            );
          })}
        </Grid>

        {limit && (
          <Reveal delay={0.3}>
            <Box sx={{ textAlign: "center", mt: 7 }}>
              <MagneticButton strength={0.25}>
                <Button
                  component={Link}
                  href="/gallery"
                  variant="contained"
                  color="primary"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{ px: 4, py: 1.6, fontWeight: 800 }}
                >
                  View Full Trust Gallery
                </Button>
              </MagneticButton>
            </Box>
          </Reveal>
        )}

        {/* Interactive Lightbox Modal */}
        <Dialog
          open={Boolean(activeLightboxItem)}
          onClose={() => setActiveLightboxItem(null)}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: {
              borderRadius: 4,
              bgcolor: "#001B5C",
              color: "#FFFFFF",
              overflow: "hidden",
              position: "relative",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              boxShadow: "0 30px 80px rgba(0, 0, 0, 0.5)",
            },
          }}
        >
          {activeLightboxItem && (
            <Box>
              {/* Close Button */}
              <IconButton
                onClick={() => setActiveLightboxItem(null)}
                sx={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  color: "#FFFFFF",
                  bgcolor: "rgba(0, 0, 0, 0.5)",
                  backdropFilter: "blur(8px)",
                  zIndex: 10,
                  "&:hover": { bgcolor: "rgba(0, 0, 0, 0.8)" },
                }}
              >
                <CloseIcon />
              </IconButton>

              {/* Lightbox Large Image */}
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: 300, sm: 460, md: 540 },
                  bgcolor: "#000000",
                }}
              >
                <Image
                  src={activeLightboxItem.image}
                  alt={activeLightboxItem.title}
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </Box>

              {/* Lightbox Details */}
              <Box sx={{ p: { xs: 3, sm: 4 }, bgcolor: "#001B5C" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
                  <Chip
                    label={activeLightboxItem.categoryLabel}
                    size="small"
                    sx={{
                      bgcolor: "rgba(242, 117, 1, 0.2)",
                      color: "warning.light",
                      fontWeight: 700,
                      border: "1px solid rgba(242, 117, 1, 0.4)",
                    }}
                  />
                  <Typography
                    variant="caption"
                    sx={{ color: "rgba(255, 255, 255, 0.65)" }}
                  >
                    Warsia Trust Visual Archive • Vijayapura
                  </Typography>
                </Box>

                <Typography
                  variant="h5"
                  sx={{ fontWeight: 800, color: "#FFFFFF", mb: 1 }}
                >
                  {activeLightboxItem.title}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{ color: "rgba(255, 255, 255, 0.85)", lineHeight: 1.7 }}
                >
                  {activeLightboxItem.description}
                </Typography>
              </Box>
            </Box>
          )}
        </Dialog>
      </Container>
    </Box>
  );
}
