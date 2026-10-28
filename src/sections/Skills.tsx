"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { skills, education, certifications } from "@/data/portfolio";

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="section-label">03 / Capabilities</div>
      <h2 className="section-title">Tools &amp; Skills</h2>
      <p className="section-sub">What I reach for every day.</p>

      <div className="flex flex-wrap justify-center gap-2 max-w-[750px] mx-auto">
        {skills.map((skill, i) => (
          <motion.span
            key={skill.name}
            initial={{ opacity: 0, scale: 0.7, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.03, ease: [0.34, 1.56, 0.64, 1] }}
            className={`pill px-6 py-2.5 rounded-full text-[0.78rem] font-medium border cursor-default transition-all duration-400 hover:border-white/40 hover:text-white hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] ${
              skill.core
                ? "bg-white/[0.06] border-white/15 text-white"
                : "bg-transparent border-border text-muted"
            }`}
          >
            {skill.name}
          </motion.span>
        ))}
      </div>

      <div className="mt-20">
        <div className="section-label mb-6">Education &amp; Certifications</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[700px] mx-auto">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="bg-surface border border-border rounded-2xl p-8 text-center hover:border-white/15 transition-all"
            >
              <h4 className="text-lg font-bold mb-1">{edu.degree}</h4>
              <div className="font-mono text-[0.7rem] text-muted tracking-wide">
                {edu.school}
              </div>
              <div className="text-[0.65rem] text-muted-2 mt-1">{edu.year}</div>
            </div>
          ))}
          <div className="bg-surface border border-border rounded-2xl p-8 text-center hover:border-white/15 transition-all">
            <h4 className="text-lg font-bold mb-1">Certifications</h4>
            <div className="font-mono text-[0.7rem] text-muted tracking-wide">
              {certifications.join(" · ")}
            </div>
            <div className="text-[0.65rem] text-muted-2 mt-1">Active</div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
