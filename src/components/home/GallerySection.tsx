"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import SectionHeading from "@/components/common/SectionHeading";
import AnimatedSection from "@/components/common/AnimatedSection";
import { ArrowForwardIcon } from "@/components/common/Icons";

export interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "religious-harmony" | "community" | "education" | "blood-donation";
  categoryLabel: string;
  image: string;
  description: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "diwali-wishes",
    title: "Diwali Celebration of Harmony",
    category: "religious-harmony",
    categoryLabel: "Religious Harmony",
    image: "/images/gallery/diwali-wishes.png",
    description: "Extending joyous Diwali wishes and fostering shared brotherhood across Vijayapura.",
  },
  {
    id: "eid-mubarak",
    title: "Eid Mubarak Community Fellowship",
    category: "religious-harmony",
    categoryLabel: "Religious Harmony",
    image: "/images/gallery/eid-mubarak.png",
    description: "Sharing the spirit of charity, love, and compassion with all communities on Eid.",
  },
  {
    id: "ugadi-wishes",
    title: "Ugadi New Year Celebrations",
    category: "religious-harmony",
    categoryLabel: "Religious Harmony",
    image: "/images/gallery/ugadi-wishes.png",
    description: "Celebrating Karnataka's Ugadi festival with cultural respect and communal goodwill.",
  },
  {
    id: "ramzan-food-kit",
    title: "Food Kit & Essential Ration Distribution",
    category: "community",
    categoryLabel: "Community Welfare",
    image: "/images/gallery/ramzan-food-kit.png",
    description: "Dignified distribution of food ration kits to underprivileged families in Vijayapura.",
  },
  {
    id: "darpan-certificate",
    title: "Official NGO Darphan Accreditation",
    category: "community",
    categoryLabel: "Government Compliance",
    image: "/images/darpan-certificate.png",
    description: "Official registration certificate KA/2026/0996453 under NGO Darphan, NITI Aayog.",
  },
];

export default function GallerySection({ limit }: { limit?: number }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Moments" },
    { id: "religious-harmony", label: "Religious Harmony" },
    { id: "community", label: "Community Welfare" },
  ];

  const filteredItems = galleryItems
    .filter((item) =>
      selectedCategory === "all" ? true : item.category === selectedCategory
    )
    .slice(0, limit || galleryItems.length);

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        <AnimatedSection>
          <SectionHeading
            badge="Moments of Service"
            badgeColor="primary"
            title="Moments of Service and Togetherness."
            subtitle="Authentic visual memories of community initiatives, festive celebrations across faiths, and humanitarian outreach in Vijayapura."
          />
        </AnimatedSection>

        {/* Category Filters */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 1.5,
            flexWrap: "wrap",
            mb: 5,
          }}
        >
          {categories.map((cat) => (
            <Chip
              key={cat.id}
              label={cat.label}
              onClick={() => setSelectedCategory(cat.id)}
              color={selectedCategory === cat.id ? "primary" : "default"}
              variant={selectedCategory === cat.id ? "filled" : "outlined"}
              sx={{
                fontWeight: 700,
                fontSize: "0.85rem",
                px: 1,
                py: 2,
                cursor: "pointer",
                transition: "all 0.2s",
                "&:hover": {
                  borderColor: "primary.main",
                },
              }}
            />
          ))}
        </Box>

        {/* Gallery Grid */}
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {filteredItems.map((item, idx) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <AnimatedSection delay={idx * 0.1}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 4,
                    overflow: "hidden",
                    border: "1px solid #E2E8F0",
                    transition: "all 0.35s ease",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 16px 40px rgba(0, 40, 135, 0.12)",
                      "& .gallery-img": {
                        transform: "scale(1.05)",
                      },
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: 240,
                      overflow: "hidden",
                      bgcolor: "#001B5C",
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{
                        objectFit: "cover",
                        transition: "transform 0.5s ease",
                      }}
                      className="gallery-img"
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        top: 12,
                        left: 12,
                      }}
                    >
                      <Chip
                        label={item.categoryLabel}
                        size="small"
                        sx={{
                          bgcolor: "rgba(0, 27, 92, 0.85)",
                          backdropFilter: "blur(6px)",
                          color: "#FFFFFF",
                          fontWeight: 700,
                          fontSize: "0.72rem",
                        }}
                      />
                    </Box>
                  </Box>

                  <CardContent sx={{ p: 3, flexGrow: 1 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 800,
                        color: "primary.main",
                        fontSize: "1.1rem",
                        mb: 1,
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", lineHeight: 1.6 }}
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </Grid>
          ))}
        </Grid>

        {limit && (
          <Box sx={{ textAlign: "center", mt: 6 }}>
            <Button
              component={Link}
              href="/gallery"
              variant="contained"
              color="primary"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{ fontWeight: 700, px: 4 }}
            >
              View Full Gallery
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
}
