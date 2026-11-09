"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { easeOutExpo } from "@/lib/animations";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  scale?: boolean;
  className?: string;
  style?: React.CSSProperties;
  width?: "fit-content" | "100%";
}

export default function Reveal({
  children,
  delay = 0,
  duration = 0.8,
  direction = "up",
  distance = 32,
  scale = false,
  className,
  style,
  width = "100%",
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={className} style={{ width, ...style }}>
        {children}
      </div>
    );
  }

  const getInitialOffset = () => {
    switch (direction) {
      case "up":
        return { y: distance, x: 0 };
      case "down":
        return { y: -distance, x: 0 };
      case "left":
      case "right":
        return { y: Math.min(distance, 24), x: 0 };
      case "none":
      default:
        return { x: 0, y: 0 };
    }
  };

  const initialPos = getInitialOffset();

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...initialPos,
        scale: scale ? 0.95 : 1,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration,
        delay,
        ease: easeOutExpo,
      }}
      className={className}
      style={{ width, maxWidth: "100%", ...style }}
    >
      {children}
    </motion.div>
  );
}

