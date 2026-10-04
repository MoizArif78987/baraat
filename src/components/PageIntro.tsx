import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import "./PageIntro.css";

export function PageIntro({ label = "Baraat" }: { label?: string }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = window.setTimeout(() => setShow(false), 1800);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="page-intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="page-intro__panel page-intro__panel--left"
            initial={{ x: 0 }}
            exit={{ x: "-105%" }}
            transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1], delay: 0.55 }}
          />
          <motion.div
            className="page-intro__panel page-intro__panel--right"
            initial={{ x: 0 }}
            exit={{ x: "105%" }}
            transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1], delay: 0.55 }}
          />
          <motion.p
            className="page-intro__label"
            initial={{ opacity: 0, letterSpacing: "0.6em", y: 12 }}
            animate={{ opacity: 1, letterSpacing: "0.35em", y: 0 }}
            exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
            transition={{ duration: 0.7 }}
          >
            {label}
          </motion.p>
          <motion.span
            className="page-intro__shine"
            initial={{ x: "-120%", opacity: 0 }}
            animate={{ x: "120%", opacity: [0, 1, 0] }}
            transition={{ duration: 1.1, delay: 0.2 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
