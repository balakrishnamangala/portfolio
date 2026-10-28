"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { bigNumbers } from "@/data/portfolio";

function Counter({
  value,
  prefix = "",
  suffix = "%",
  decimal = 0,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimal?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-25%" });
  const [display, setDisplay] = useState(`${prefix}0${suffix}`);

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const v = value * eased;
      setDisplay(`${prefix}${decimal ? v.toFixed(decimal) : Math.round(v)}${suffix}`);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value, prefix, suffix, decimal]);

  return (
    <div ref={ref} className="text-[clamp(5rem,16vw,13rem)] font-black tracking-tighter leading-none text-white">
      {display}
    </div>
  );
}

export default function BigNumbers() {
  return (
    <>
      {bigNumbers.map((item, i) => (
        <section
          key={i}
          className="min-h-screen flex items-center justify-center text-center flex-col px-6 py-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-25%" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Counter
              value={item.value}
              prefix={item.prefix}
              suffix={item.suffix}
              decimal={item.decimal}
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-[clamp(0.85rem,1.8vw,1.15rem)] text-muted font-light mt-3"
          >
            {item.label}
          </motion.p>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="font-mono text-[0.6rem] text-muted-2 tracking-[0.1em] uppercase mt-5 px-4 py-1.5 border border-border rounded-full"
          >
            {item.tag}
          </motion.span>
        </section>
      ))}
    </>
  );
}
