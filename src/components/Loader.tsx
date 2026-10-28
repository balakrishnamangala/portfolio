"use client";

import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  visible: boolean;
}

export default function Loader({ visible }: LoaderProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 bg-black z-[10000] flex flex-col items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-mono text-xs text-muted tracking-[0.15em] uppercase">
            Initializing
          </span>
          <div className="w-[200px] h-px bg-muted-2 mt-6 relative overflow-hidden">
            <motion.div
              className="absolute left-0 top-0 h-full bg-white"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
