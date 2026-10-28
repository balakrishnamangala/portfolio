"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-12 left-0 h-px bg-white z-[99] origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
