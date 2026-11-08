"use client";

import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { initiativesData } from "@/config/initiatives";
import SectionHeading from "@/components/common/SectionHeading";
import InitiativeCard from "@/components/common/InitiativeCard";
import AnimatedSection from "@/components/common/AnimatedSection";

export default function InitiativesSection() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        <AnimatedSection>
          <SectionHeading
            badge="Areas of Action"
            badgeColor="secondary"
            title="Making a Difference Through Meaningful Actions."
            subtitle="Explore our comprehensive humanitarian pillars addressing religious harmony, emergency blood support, education, and community social development."
          />
        </AnimatedSection>

        <Grid container spacing={{ xs: 3, md: 4 }}>
          {initiativesData.map((initiative, idx) => (
            <Grid item xs={12} sm={6} md={4} key={initiative.id}>
              <AnimatedSection delay={idx * 0.1}>
                <InitiativeCard initiative={initiative} />
              </AnimatedSection>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
