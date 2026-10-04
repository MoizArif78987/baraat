import { motion } from "framer-motion";
import { event } from "../data/event";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { Sparkles } from "./Sparkles";
import "./EventDetails.css";

const rows = {
  hidden: {},
  show: { transition: { staggerChildren: 0.16, delayChildren: 0.2 } },
};

const row = {
  hidden: { opacity: 0, x: -28, filter: "blur(6px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
};

export function EventDetails() {
  return (
    <section className="section details" id="details" aria-labelledby="details-heading">
      <Sparkles count={16} />
      <div className="section-inner details__inner">
        <motion.div
          className="details__atmosphere"
          initial={{ opacity: 0, scale: 1.08, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2, margin: "0px 0px -8% 0px" }}
          transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.02 }}
        >
          <ImagePlaceholder
            src={event.images.baraat}
            alt="Baraat procession illustration"
            label="Atmosphere illustration"
            aspect="21 / 9"
            className="details__photo"
          />
        </motion.div>

        <motion.div
          className="details__content"
          initial={{ opacity: 0, y: 36, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2, margin: "0px 0px -8% 0px" }}
          transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="section-label">When & Where</p>
          <h2 id="details-heading" className="section-title shimmer-text">
            {event.label}
          </h2>

          <motion.span
            className="copper-line details__line"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          />

          <motion.dl
            className="details__list"
            variants={rows}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className="details__row" variants={row}>
              <dt>Date</dt>
              <dd>
                {event.day}, {event.dateDisplay}
              </dd>
            </motion.div>
            <motion.div className="details__row" variants={row}>
              <dt>Time</dt>
              <dd>{event.time}</dd>
            </motion.div>
            <motion.div className="details__row" variants={row}>
              <dt>Venue</dt>
              <dd>{event.venue}</dd>
            </motion.div>
          </motion.dl>
        </motion.div>
      </div>
    </section>
  );
}
