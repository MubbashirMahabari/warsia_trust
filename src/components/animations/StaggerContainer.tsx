"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";

interface StaggerContainerProps {
  children: React.ReactNode;
  stagger?: number;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function StaggerContainer({
  children,
  stagger = 0.1,
  delay = 0,
  className,
  style,
}: StaggerContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      variants={staggerContainer(stagger, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

