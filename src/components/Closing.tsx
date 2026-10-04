import { motion } from "framer-motion";
import { event } from "../data/event";
import "./Closing.css";

export function Closing() {
  return (
    <footer className="closing">
      <div className="closing__inner">
        <motion.span
          className="copper-line closing__line"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.p
          className="closing__eyebrow"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          With love
        </motion.p>

        <motion.h2
          className="closing__names"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {event.groom}
          <span className="closing__amp"> & </span>
          {event.bride}
        </motion.h2>

        <motion.p
          className="closing__date"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          {event.dateDisplay} · {event.label}
        </motion.p>
      </div>
    </footer>
  );
}
