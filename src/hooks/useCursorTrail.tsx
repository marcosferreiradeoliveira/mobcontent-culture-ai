import { useEffect } from 'react';

export const useCursorTrail = () => {
  useEffect(() => {
    let trail: HTMLElement[] = [];
    
    const createTrail = (x: number, y: number) => {
      const dot = document.createElement('div');
      dot.className = 'cursor-trail';
      dot.style.left = x + 'px';
      dot.style.top = y + 'px';
      document.body.appendChild(dot);
      
      trail.push(dot);
      
      // Remove dot after animation
      setTimeout(() => {
        if (dot.parentNode) {
          dot.parentNode.removeChild(dot);
        }
        trail = trail.filter(t => t !== dot);
      }, 800);
      
      // Limit trail length
      if (trail.length > 20) {
        const oldDot = trail.shift();
        if (oldDot && oldDot.parentNode) {
          oldDot.parentNode.removeChild(oldDot);
        }
      }
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      createTrail(e.clientX, e.clientY);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      // Clean up remaining trails
      trail.forEach(dot => {
        if (dot.parentNode) {
          dot.parentNode.removeChild(dot);
        }
      });
    };
  }, []);
};