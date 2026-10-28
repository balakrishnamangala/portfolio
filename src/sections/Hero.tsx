"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

export default function Hero() {
  return (
    <div className="h-[300vh] relative">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center text-center overflow-hidden z-[1] px-6">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="font-mono text-[0.65rem] text-muted tracking-[0.2em] uppercase mb-6"
        >
          {personalInfo.title}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.3, duration: 1.2, ease: "easeOut" }}
          className="text-[clamp(3.5rem,11vw,9rem)] font-black tracking-tighter leading-[0.88] text-white"
        >
          <span className="block">{personalInfo.firstName}</span>
          <span className="block">{personalInfo.lastName}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 1 }}
          className="text-[clamp(0.9rem,2vw,1.25rem)] text-muted font-light mt-8 max-w-[550px] leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.4, duration: 1 }}
          className="absolute bottom-12 font-mono text-[0.6rem] text-muted-2 tracking-[0.15em] uppercase flex flex-col items-center gap-2"
        >
          Scroll
          <span className="w-px h-[30px] bg-gradient-to-b from-muted-2 to-transparent animate-scroll-pulse" />
        </motion.div>
      </div>
    </div>
  );
}
