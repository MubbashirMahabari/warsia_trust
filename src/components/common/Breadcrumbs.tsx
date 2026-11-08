"use client";

import React from "react";
import Link from "next/link";
import MuiBreadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  light?: boolean;
}

export default function Breadcrumbs({ items, light = true }: BreadcrumbsProps) {
  return (
    <Box sx={{ py: 1.5 }}>
      <MuiBreadcrumbs
        separator={
          <span
            style={{
              color: light ? "rgba(255, 255, 255, 0.45)" : "#94A3B8",
              fontSize: "0.85rem",
            }}
          >
            /
          </span>
        }
        aria-label="breadcrumb"
      >
        <Link
          href="/"
          style={{
            color: light ? "rgba(255, 255, 255, 0.75)" : "#52607A",
            textDecoration: "none",
            fontSize: "0.85rem",
            fontWeight: 600,
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#F27501";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = light
              ? "rgba(255, 255, 255, 0.75)"
              : "#52607A";
          }}
        >
          Home
        </Link>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          if (isLast || !item.href) {
            return (
              <Typography
                key={item.label}
                variant="caption"
                sx={{
                  color: light ? "#FFFFFF" : "primary.main",
                  fontWeight: 800,
                  fontSize: "0.85rem",
                  letterSpacing: "0.01em",
                }}
              >
                {item.label}
              </Typography>
            );
          }

          return (
            <Link
              key={item.label}
              href={item.href}
              style={{
                color: light ? "rgba(255, 255, 255, 0.75)" : "#52607A",
                textDecoration: "none",
                fontSize: "0.85rem",
                fontWeight: 600,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#F27501";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = light
                  ? "rgba(255, 255, 255, 0.75)"
                  : "#52607A";
              }}
            >
              {item.label}
            </Link>
          );
        })}
      </MuiBreadcrumbs>
    </Box>
  );
}
