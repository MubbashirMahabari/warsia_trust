"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { easeOutExpo } from "@/lib/animations";

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function AnimatedSection({
  children,
  delay = 0,
  duration = 0.75,
  className,
  style,
}: AnimatedSectionProps) {
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
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration,
        delay,
        ease: easeOutExpo,
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
