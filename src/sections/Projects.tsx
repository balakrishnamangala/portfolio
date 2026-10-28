"use client";

import { motion } from "framer-motion";
import TiltCard from "@/components/TiltCard";
import SectionWrapper from "@/components/SectionWrapper";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="section-label">02 / Projects</div>
      <h2 className="section-title">What I&apos;ve built</h2>
      <p className="section-sub">End-to-end systems designed, built, and deployed.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((proj, i) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            <TiltCard className="bg-surface border border-border rounded-2xl p-8 flex flex-col gap-3 h-full hover:-translate-y-2 hover:scale-[1.01] hover:border-white/15 hover:shadow-[0_30px_80px_rgba(0,0,0,0.5)] transition-all duration-500 relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="font-mono text-[0.6rem] text-muted-2 tracking-[0.1em]">
                {proj.id}
              </div>
              <h3 className="text-lg font-bold tracking-tight">{proj.title}</h3>
              <p className="text-[0.8rem] text-muted leading-relaxed">{proj.description}</p>
              <div className="flex gap-6 mt-auto pt-4 border-t border-border">
                {proj.kpis.map((kpi) => (
                  <div key={kpi.label}>
                    <strong className="text-lg font-extrabold text-white block">{kpi.value}</strong>
                    <span className="font-mono text-[0.5rem] text-muted-2 uppercase tracking-[0.06em]">
                      {kpi.label}
                    </span>
                  </div>
                ))}
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
