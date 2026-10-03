import { useState, useEffect } from 'react';

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100, isHovering: false, hoverText: '' });

  useEffect(() => {
    // Only track mouse if device supports fine pointer
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const updateMousePosition = (e) => {
      setMousePosition((prev) => ({
        ...prev,
        x: e.clientX,
        y: e.clientY,
      }));
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return mousePosition;
}
