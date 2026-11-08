"use client";

import React from "react";
import Link from "next/link";
import MuiBreadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ChevronRightIcon } from "@/components/common/Icons";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <Box sx={{ py: 2 }}>
      <MuiBreadcrumbs
        separator={<span style={{ color: "#94A3B8" }}>/</span>}
        aria-label="breadcrumb"
      >
        <Link
          href="/"
          style={{
            color: "#667085",
            textDecoration: "none",
            fontSize: "0.85rem",
            fontWeight: 500,
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
                  color: "primary.main",
                  fontWeight: 700,
                  fontSize: "0.85rem",
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
                color: "#667085",
                textDecoration: "none",
                fontSize: "0.85rem",
                fontWeight: 500,
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
