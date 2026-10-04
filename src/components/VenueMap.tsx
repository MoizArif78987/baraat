import { motion } from "framer-motion";
import { event } from "../data/event";
import "./VenueMap.css";

export function VenueMap() {
  return (
    <section className="section venue" id="venue" aria-labelledby="venue-heading">
      <div className="section-inner venue__inner">
        <motion.div
          className="venue__header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-label">Location</p>
          <h2 id="venue-heading" className="section-title">
            {event.venue}
          </h2>
          <p className="section-copy">Find your way to the celebration.</p>
        </motion.div>

        <motion.div
          className="venue__map-wrap"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
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
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          whileHover={{ y: -3 }}
        >
          Open in Maps
          <span aria-hidden="true">↗</span>
        </motion.a>
      </div>
    </section>
  );
}
