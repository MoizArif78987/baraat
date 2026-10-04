import { motion } from "framer-motion";
import { event } from "../data/event";
import { ImagePlaceholder } from "./ImagePlaceholder";
import "./Hero.css";

const letter = {
  hidden: { y: "110%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

function AnimatedName({ text, delay = 0.35 }: { text: string; delay?: number }) {
  return (
    <motion.span
      className="hero__name-line"
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: 0.045, delayChildren: delay },
        },
      }}
      initial="hidden"
      animate="show"
    >
      {text.split("").map((char, i) => (
        <span className="hero__letter-wrap" key={`${char}-${i}`}>
          <motion.span className="hero__letter" variants={letter}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

export function Hero() {
  return (
    <header className="hero">
      <motion.div
        className="hero__media"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: [0.22, 1, 0.36, 1] }}
      >
        <ImagePlaceholder
          src={event.images.hero}
          alt="Baraat celebration"
          label="Hero photo coming soon"
          className="hero__placeholder"
        />
      </motion.div>

      <div className="hero__veil" aria-hidden="true" />

      <div className="hero__content">
        <motion.p
          className="hero__event"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          {event.label}
        </motion.p>

        <h1 className="hero__names">
          <AnimatedName text={event.groom} delay={0.35} />
          <motion.span
            className="hero__amp"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.15 }}
          >
            &
          </motion.span>
          <AnimatedName text={event.bride} delay={1.35} />
        </h1>

        <motion.p
          className="hero__date"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.05, ease: [0.22, 1, 0.36, 1] }}
        >
          {event.dateDisplay}
        </motion.p>

        <motion.a
          href="#details"
          className="hero__cta"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.25, ease: [0.22, 1, 0.36, 1] }}
        >
          View details
          <span className="hero__cta-arrow" aria-hidden="true">
            ↓
          </span>
        </motion.a>
      </div>
    </header>
  );
}
