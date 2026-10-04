import { motion } from "framer-motion";
import { event } from "../data/event";
import { ImagePlaceholder } from "./ImagePlaceholder";
import "./EventDetails.css";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export function EventDetails() {
  return (
    <section className="section details" id="details" aria-labelledby="details-heading">
      <div className="section-inner details__inner">
        <motion.div
          className="details__atmosphere"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <ImagePlaceholder
            src={event.images.baraat}
            alt="Baraat atmosphere"
            label="Atmosphere photo"
            aspect="16 / 10"
            className="details__photo"
          />
        </motion.div>

        <motion.div
          className="details__content"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <p className="section-label">When & Where</p>
          <h2 id="details-heading" className="section-title">
            {event.label}
          </h2>

          <motion.span
            className="copper-line details__line"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          />

          <dl className="details__list">
            <div className="details__row">
              <dt>Date</dt>
              <dd>
                {event.day}, {event.dateDisplay}
              </dd>
            </div>
            <div className="details__row">
              <dt>Time</dt>
              <dd>{event.time}</dd>
            </div>
            <div className="details__row">
              <dt>Venue</dt>
              <dd>{event.venue}</dd>
            </div>
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
