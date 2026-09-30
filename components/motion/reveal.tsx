"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

/** emil "strong ease-out": fast start, soft landing. */
export const easeOut = [0.23, 1, 0.32, 1] as const;

const viewport = { once: true, amount: 0.15, margin: "0px 0px -6% 0px" } as const;

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "li" | "span" | "p";
}

/**
 * Fade-and-rise when scrolled into view. Reduced-motion users get a plain
 * fade with no travel. Only opacity and transform animate.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 20,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: reduce ? 0.2 : 0.6, delay: reduce ? 0 : delay, ease: easeOut }}
    >
      {children}
    </MotionTag>
  );
}

interface StaggerGridProps {
  children: ReactNode;
  className?: string;
  id?: string;
  /** seconds between children */
  gap?: number;
}

export function StaggerGrid({ children, className, id, gap = 0.07 }: StaggerGridProps) {
  const reduce = useReducedMotion();
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : gap, delayChildren: 0.04 } },
  };
  return (
    <motion.div
      id={id}
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0.2 : 0.5, ease: easeOut },
    },
  };
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}
