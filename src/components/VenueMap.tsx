import { motion } from "framer-motion";
import { event } from "../data/event";
import { Sparkles } from "./Sparkles";
import "./VenueMap.css";

export function VenueMap() {
  return (
    <section className="section venue" id="venue" aria-labelledby="venue-heading">
      <div className="section-inner venue__inner">
        <motion.div
          className="venue__header"
          initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="section-label">Location</p>
          <h2 id="venue-heading" className="section-title shimmer-text">
            {event.venue}
          </h2>
          <p className="section-copy">We look forward to welcoming you.</p>
        </motion.div>

        <motion.div
          className="venue__map-wrap"
          data-lenis-prevent
          initial={{ opacity: 0, y: 48, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          whileHover={{ scale: 1.01 }}
        >
          <Sparkles count={12} />
          <iframe
            className="venue__iframe"
            src={event.mapsEmbed}
            title={`${event.venue} on Google Maps`}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </motion.div>

        <motion.a
          className="venue__cta"
          href={event.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          whileHover={{ y: -5, scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Open in Maps
          <motion.span
            aria-hidden="true"
            animate={{ x: [0, 4, 0], y: [0, -3, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          >
            ↗
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
