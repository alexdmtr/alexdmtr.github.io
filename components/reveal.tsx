"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section" | "article";
};

const MotionTags = {
  div: motion.div,
  li: motion.li,
  section: motion.section,
  article: motion.article,
};

export function Reveal({ children, className, delay = 0, as = "div" }: Props) {
  const Tag = MotionTags[as];
  const reduceMotion = useReducedMotion();

  // With reduced motion, render content immediately at its final state.
  if (reduceMotion) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.5, 0.3, 1] }}
    >
      {children}
    </Tag>
  );
}
