"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type MotionSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variants?: any;
  initial?: string;
  animate?: string;
  whileInView?: string;
  viewport?: any;
  transition?: any;
};

export default function MotionSection({ 
  children, 
  className = "", 
  delay = 0,
  variants,
  initial = "hidden",
  animate = "show",
  whileInView,
  viewport,
  transition
}: MotionSectionProps) {
  const props = {
    ...(whileInView && { whileInView }),
    ...(viewport && { viewport }),
    ...(variants && { variants }),
    ...(transition && { transition }),
  };

  return (
    <motion.section 
      className={className}
      initial={initial}
      animate={animate}
      {...(Object.keys(props).length > 0 && props)}
    >
      {children}
    </motion.section>
  );
}
