"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

interface ParallaxImageProps {
  children: React.ReactNode;
  offset?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function ParallaxImage({
  children,
  offset = 35,
  className,
  style,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  if (shouldReduceMotion) {
    return (
      <div className={className} style={{ width: "100%", height: "100%", ...style }}>
        {children}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        overflow: "hidden",
        position: "relative",
        width: "100%",
        height: "100%",
        ...style,
      }}
    >
      <motion.div
        style={{
          y,
          width: "100%",
          height: "100%",
          position: "relative",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

