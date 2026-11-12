"use client";

import { motion } from "framer-motion";

/**
 * Client-side motion elements that can be used directly inside Server Components.
 * (`motion.div` itself can't be referenced from a Server Component, but these can,
 * as long as every prop passed is serializable — no function props like onClick.)
 */
export const MotionDiv = motion.div;
export const MotionH1 = motion.h1;
export const MotionH2 = motion.h2;
export const MotionP = motion.p;
export const MotionSpan = motion.span;
