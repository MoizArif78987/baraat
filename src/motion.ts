/** Shared ultra-smooth motion easing */
export const smoothEase = [0.16, 1, 0.3, 1] as const;

export const smoothReveal = {
  hidden: { opacity: 0, y: 48, filter: "blur(12px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.15, ease: smoothEase },
  },
};

export const smoothStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};
