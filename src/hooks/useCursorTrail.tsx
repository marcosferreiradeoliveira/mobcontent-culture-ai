import { useEffect, useRef } from 'react';

const THROTTLE_MS = 100; // criar no máximo 1 ponto a cada 100ms
const MAX_TRAIL = 12;
const TRAIL_DURATION_MS = 800;

function isTouchDevice(): boolean {
  if (typeof window === 'undefined') return true;
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

export const useCursorTrail = () => {
  const lastCreate = useRef(0);
  const trailRef = useRef<HTMLElement[]>([]);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (isTouchDevice()) return; // desativa em tablets/celulares

    const createTrail = (x: number, y: number) => {
      const now = Date.now();
      if (now - lastCreate.current < THROTTLE_MS) return;
      lastCreate.current = now;

      const dot = document.createElement('div');
      dot.className = 'cursor-trail';
      dot.style.left = x + 'px';
      dot.style.top = y + 'px';
      document.body.appendChild(dot);

      const trail = trailRef.current;
      trail.push(dot);

      if (trail.length > MAX_TRAIL) {
        const oldDot = trail.shift();
        if (oldDot?.parentNode) oldDot.parentNode.removeChild(oldDot);
      }

      setTimeout(() => {
        if (dot.parentNode) dot.parentNode.removeChild(dot);
        trailRef.current = trailRef.current.filter((t) => t !== dot);
      }, TRAIL_DURATION_MS);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        createTrail(e.clientX, e.clientY);
        rafRef.current = null;
      });
    };

    document.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      trailRef.current.forEach((dot) => {
        if (dot.parentNode) dot.parentNode.removeChild(dot);
      });
      trailRef.current = [];
    };
  }, []);
};
