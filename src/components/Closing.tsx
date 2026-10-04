import { motion } from "framer-motion";
import { event } from "../data/event";
import { Sparkles } from "./Sparkles";
import "./Closing.css";

export function Closing() {
  return (
    <footer className="closing">
      <Sparkles count={30} />
      <div className="closing__inner">
        <motion.span
          className="copper-line closing__line"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />

        <motion.p
          className="closing__eyebrow"
          initial={{ opacity: 0, y: 16, letterSpacing: "0.5em" }}
          whileInView={{ opacity: 1, y: 0, letterSpacing: "0.3em" }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.1 }}
        >
          With love
        </motion.p>

        <motion.h2
          className="closing__names shimmer-text"
          initial={{ opacity: 0, y: 28, filter: "blur(10px)", scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {event.groom}
          <motion.span
            className="closing__amp"
            animate={{ scale: [1, 1.15, 1], rotate: [0, -6, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          >
            {" "}
            &{" "}
          </motion.span>
          {event.bride}
        </motion.h2>

        <motion.p
          className="closing__date"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {event.dateDisplay} · {event.label}
        </motion.p>
      </div>
    </footer>
  );
}
