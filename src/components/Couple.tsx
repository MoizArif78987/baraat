import { motion } from "framer-motion";
import { event } from "../data/event";
import { ImagePlaceholder } from "./ImagePlaceholder";
import "./Couple.css";

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Couple() {
  return (
    <section className="section couple" id="couple" aria-labelledby="couple-heading">
      <div className="section-inner couple__inner">
        <motion.div
          className="couple__intro"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <p className="section-label">The Couple</p>
          <h2 id="couple-heading" className="section-title">
            Join us for the Baraat
          </h2>
          <p className="section-copy">
            A celebration of love, family, and the beginning of forever — we’d be honoured by your
            presence.
          </p>
        </motion.div>

        <div className="couple__grid">
          <motion.figure
            className="couple__person"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <ImagePlaceholder
              src={event.images.groom}
              alt={event.groom}
              label="Groom photo"
              aspect="3 / 4"
              className="couple__photo"
            />
            <figcaption className="couple__caption">
              <span className="couple__role">Groom</span>
              <span className="couple__name">{event.groom}</span>
            </figcaption>
          </motion.figure>

          <motion.figure
            className="couple__person"
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          >
            <ImagePlaceholder
              src={event.images.bride}
              alt={event.bride}
              label="Bride photo"
              aspect="3 / 4"
              className="couple__photo"
            />
            <figcaption className="couple__caption">
              <span className="couple__role">Bride</span>
              <span className="couple__name">{event.bride}</span>
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
