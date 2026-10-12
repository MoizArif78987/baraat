import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { event } from "../data/event";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { Sparkles } from "./Sparkles";
import "./Hero.css";

const springSoft = { stiffness: 70, damping: 26, mass: 0.55, restDelta: 0.001 };

const letter = {
  hidden: { y: "120%", opacity: 0, rotateX: 40 },
  show: {
    y: "0%",
    opacity: 1,
    rotateX: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
};

function AnimatedName({ text, delay = 0.35 }: { text: string; delay?: number }) {
  return (
    <motion.span
      className="hero__name-line"
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: 0.04, delayChildren: delay },
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
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const progress = useSpring(scrollYProgress, springSoft);
  const y = useTransform(progress, [0, 1], ["0%", "28%"]);
  const opacity = useTransform(progress, [0, 0.85], [1, 0.15]);
  const scale = useTransform(progress, [0, 1], [1, 1.18]);

  return (
    <header className="hero" ref={ref}>
      <motion.div className="hero__media" style={{ y, scale }}>
        <motion.div
          initial={{ scale: 1.18, opacity: 0.7 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ height: "100%" }}
        >
          <ImagePlaceholder
            src={event.images.hero}
            alt="Baraat celebration illustration"
            label="Hero illustration"
            className="hero__placeholder"
          />
        </motion.div>
      </motion.div>

      <motion.div className="hero__veil" aria-hidden="true" style={{ opacity }} />
      <Sparkles count={42} />

      <motion.div className="hero__content" style={{ opacity }}>
        <motion.p
          className="hero__event shimmer-text shimmer-text--light"
          initial={{ opacity: 0, y: 20, letterSpacing: "0.5em" }}
          animate={{ opacity: 1, y: 0, letterSpacing: "0.32em" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {event.label}
        </motion.p>

        <motion.p
          className="hero__hosts"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          {event.hosts}
        </motion.p>

        <motion.p
          className="hero__invite"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          {event.inviteLine}
        </motion.p>

        <h1 className="hero__names">
          <AnimatedName text={event.son} delay={0.85} />
          <span className="hero__amp">&</span>
          <AnimatedName text={event.bride} delay={1.25} />
        </h1>

        <motion.p
          className="hero__date"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.05, ease: [0.16, 1, 0.3, 1] }}
        >
          {event.dateDisplay}
        </motion.p>

        <motion.a
          href="#details"
          className="hero__cta"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.25, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -3, letterSpacing: "0.24em" }}
          whileTap={{ scale: 0.97 }}
        >
          View details
          <motion.span
            className="hero__cta-arrow"
            aria-hidden="true"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          >
            ↓
          </motion.span>
        </motion.a>
      </motion.div>
    </header>
  );
}
