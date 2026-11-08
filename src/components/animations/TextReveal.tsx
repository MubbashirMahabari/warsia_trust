"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { easeOutExpo } from "@/lib/animations";

interface TextRevealProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  delay?: number;
  stagger?: number;
  className?: string;
  style?: React.CSSProperties;
  highlightWord?: string;
  highlightColor?: string;
}

export default function TextReveal({
  text,
  as: Component = "h2",
  delay = 0,
  stagger = 0.04,
  className,
  style,
  highlightWord,
  highlightColor = "#F27501",
}: TextRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(" ");

  if (shouldReduceMotion) {
    return (
      <Component className={className} style={style}>
        {words.map((word, i) => {
          const isHighlighted =
            highlightWord &&
            word.toLowerCase().includes(highlightWord.toLowerCase());
          return (
            <span
              key={i}
              style={{
                color: isHighlighted ? highlightColor : "inherit",
                marginRight: "0.28em",
                display: "inline-block",
              }}
            >
              {word}
            </span>
          );
        })}
      </Component>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      y: "110%",
      opacity: 0,
    },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: easeOutExpo,
      },
    },
  };

  return (
    <Component className={className} style={{ ...style, display: "block" }}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        style={{ display: "inline-block", overflow: "hidden" }}
      >
        {words.map((word, i) => {
          const isHighlighted =
            highlightWord &&
            word.toLowerCase().includes(highlightWord.toLowerCase());
          return (
            <span
              key={i}
              style={{
                display: "inline-block",
                overflow: "hidden",
                verticalAlign: "top",
                marginRight: "0.28em",
              }}
            >
              <motion.span
                variants={wordVariants}
                style={{
                  display: "inline-block",
                  color: isHighlighted ? highlightColor : "inherit",
                }}
              >
                {word}
              </motion.span>
            </span>
          );
        })}
      </motion.span>
    </Component>
  );
}

