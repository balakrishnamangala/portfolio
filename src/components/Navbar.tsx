"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#connect", label: "Connect" },
];

export default function Navbar() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 2.5, duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-[100] px-6 h-12 flex items-center justify-between bg-black/70 backdrop-blur-xl border-b border-border"
    >
      <Link
        href="#"
        className="font-mono text-[0.7rem] text-muted tracking-[0.1em] uppercase no-underline"
      >
        BM
      </Link>
      <div className="flex gap-6">
        {navLinks.map((link) => (
          <button
            key={link.href}
            onClick={() => scrollTo(link.href)}
            className="text-[0.72rem] text-muted hover:text-white transition-colors tracking-wide bg-transparent border-none cursor-pointer font-sans"
          >
            {link.label}
          </button>
        ))}
      </div>
    </motion.nav>
  );
}
