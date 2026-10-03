import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 350 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check coarse pointer / touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = target.closest('a, button, input, select, textarea, [role="button"], .interactive-hover');
      setIsHovered(!!isInteractive);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <motion.div
      style={{
        translateX: smoothX,
        translateY: smoothY,
        x: '-50%',
        y: '-50%',
      }}
      className="fixed top-0 left-0 pointer-events-none z-[99999]"
    >
      <motion.div
        animate={{
          scale: isHovered ? 2.2 : 1,
          borderColor: isHovered ? '#C09D59' : '#B90124',
          backgroundColor: isHovered ? 'rgba(192, 157, 89, 0.15)' : 'transparent',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        className="w-8 h-8 rounded-full border-2 border-tis-red transition-colors duration-200 flex items-center justify-center"
      >
        <div className={`w-1.5 h-1.5 rounded-full ${isHovered ? 'bg-tis-gold' : 'bg-tis-red'}`} />
      </motion.div>
    </motion.div>
  );
}
