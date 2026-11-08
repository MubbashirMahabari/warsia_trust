"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { easeOutExpo } from "@/lib/animations";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: easeOutExpo }}
    >
      {children}
    </motion.div>
  );
}

