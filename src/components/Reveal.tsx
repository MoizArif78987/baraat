import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { smoothEase } from "../motion";
import "./Reveal.css";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 56,
  once = true,
}: RevealProps) {
  return (
    <motion.div
      className={`reveal ${className}`.trim()}
      initial={{ opacity: 0, y, filter: "blur(14px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once, amount: 0.2, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 1.25, delay, ease: smoothEase }}
    >
      {children}
    </motion.div>
  );
}

export function Float({
  children,
  className = "",
  amplitude = 10,
  duration = 4,
}: {
  children: ReactNode;
  className?: string;
  amplitude?: number;
  duration?: number;
}) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -amplitude, 0, amplitude * 0.4, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
