"use client";

import { motion } from "framer-motion";
import TiltCard from "@/components/TiltCard";
import SectionWrapper from "@/components/SectionWrapper";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="section-label">01 / Experience</div>
      <h2 className="section-title">Where I&apos;ve worked</h2>
      <p className="section-sub">Building data systems across global supply chains.</p>

      <div className="flex flex-col gap-4">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <TiltCard className="bg-surface border border-border rounded-2xl p-9 hover:border-white/15 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all duration-400">
              <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                <div>
                  <div className="text-xl font-bold tracking-tight">{exp.company}</div>
                  <div className="text-sm text-muted">{exp.role}</div>
                </div>
                <div className="font-mono text-[0.65rem] text-muted tracking-wide text-right">
                  {exp.period}
                  <br />
                  {exp.location}
                </div>
              </div>
              <p className="text-[0.82rem] text-muted leading-relaxed">{exp.description}</p>

              <div className="flex gap-8 mt-5 pt-5 border-t border-border flex-wrap">
                {exp.metrics.map((m) => (
                  <div key={m.label} className="flex flex-col">
                    <strong className="text-2xl font-extrabold text-white tracking-tight">
                      {m.value}
                    </strong>
                    <span className="font-mono text-[0.55rem] text-muted-2 tracking-[0.08em] uppercase mt-0.5">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex gap-1.5 flex-wrap mt-4">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[0.55rem] px-2.5 py-1 rounded-full border border-border text-muted hover:border-white/30 hover:text-white transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
