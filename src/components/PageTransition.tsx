"use client";

import { motion } from "framer-motion";
import React from "react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="flex-grow flex flex-col w-full max-w-full overflow-x-hidden"
    >
      {children}
    </motion.div>
  );
}
