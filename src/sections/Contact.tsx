"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { personalInfo } from "@/data/portfolio";

const contacts = [
  { label: `✉ ${personalInfo.email}`, href: `mailto:${personalInfo.email}` },
  { label: `☎ ${personalInfo.phone}`, href: `tel:+13233207395` },
  { label: "⌘ GitHub", href: personalInfo.github, external: true },
  { label: "◉ LinkedIn", href: personalInfo.linkedin, external: true },
];

export default function Contact() {
  return (
    <SectionWrapper id="connect">
      <div className="text-center py-10">
        <div className="section-label">04 / Connect</div>
        <h2 className="text-[clamp(2.5rem,7vw,5rem)] font-black tracking-tighter mb-2">
          Let&apos;s talk.
        </h2>
        <p className="text-sm text-muted font-light mb-10">
          Open to supply chain analyst and data roles.
        </p>

        <div className="flex gap-3 justify-center flex-wrap mb-8">
          {contacts.map((c) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.external ? "_blank" : undefined}
              rel={c.external ? "noopener noreferrer" : undefined}
              whileHover={{ scale: 1.05 }}
              className="contact-item font-mono text-[0.7rem] text-muted px-5 py-2.5 border border-border rounded-full no-underline hover:border-white/30 hover:text-white hover:bg-white/[0.04] transition-all inline-flex items-center gap-1.5"
            >
              {c.label}
            </motion.a>
          ))}
        </div>

        <div className="flex gap-3 justify-center flex-wrap">
          <a
            href={`mailto:${personalInfo.email}`}
            className="px-10 py-3.5 rounded-full text-sm font-semibold bg-white text-black no-underline hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:scale-105 transition-all duration-400"
          >
            Get in Touch
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-3.5 rounded-full text-sm font-semibold bg-transparent text-fg border border-border no-underline hover:border-white/30 hover:text-white transition-all duration-400"
          >
            View GitHub
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
