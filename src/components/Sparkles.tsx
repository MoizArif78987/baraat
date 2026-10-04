import { useMemo } from "react";
import { motion } from "framer-motion";
import "./Sparkles.css";

type SparklesProps = {
  count?: number;
  className?: string;
};

export function Sparkles({ count = 36, className = "" }: SparklesProps) {
  const dots = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${(i * 37) % 100}%`,
        top: `${(i * 53) % 100}%`,
        size: 2 + (i % 5),
        delay: (i % 12) * 0.35,
        duration: 3.5 + (i % 7) * 0.55,
        driftX: ((i % 5) - 2) * 12,
        driftY: -18 - (i % 6) * 8,
      })),
    [count]
  );

  return (
    <div className={`sparkles ${className}`.trim()} aria-hidden="true">
      {dots.map((dot) => (
        <motion.span
          key={dot.id}
          className="sparkles__dot"
          style={{
            left: dot.left,
            top: dot.top,
            width: dot.size,
            height: dot.size,
          }}
          animate={{
            opacity: [0, 1, 0.2, 1, 0],
            y: [0, dot.driftY, 0],
            x: [0, dot.driftX, 0],
            scale: [0.4, 1.3, 0.7, 1.1, 0.4],
          }}
          transition={{
            duration: dot.duration,
            delay: dot.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
