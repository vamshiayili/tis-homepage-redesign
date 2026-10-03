import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export function Reveal({
  children,
  width = 'w-full',
  delay = 0,
  duration = 0.5,
  direction = 'up',
  className = '',
}) {
  const shouldReduceMotion = useReducedMotion();

  const getInitialPosition = () => {
    if (shouldReduceMotion) return { opacity: 0, y: 0, x: 0 };
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 30 };
      case 'down':
        return { opacity: 0, y: -30 };
      case 'left':
        return { opacity: 0, x: 30 };
      case 'right':
        return { opacity: 0, x: -30 };
      default:
        return { opacity: 0, y: 30 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
      }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: shouldReduceMotion ? 0.2 : duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0],
      }}
      className={`${width} ${className}`}
    >
      {children}
    </motion.div>
  );
}
