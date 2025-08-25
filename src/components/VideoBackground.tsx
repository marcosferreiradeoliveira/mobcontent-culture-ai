import { useEffect, useRef } from 'react';
import { useParallax } from '@/hooks/useParallax';

interface VideoBackgroundProps {
  src: string;
  opacity?: number;
  parallaxSpeed?: number;
  className?: string;
}

export const VideoBackground = ({
  src,
  opacity = 0.5,
  parallaxSpeed = 0.2,
  className = '',
}: VideoBackgroundProps) => {
  const parallaxOffset = useParallax(parallaxSpeed);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Fade in effect when component mounts
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    video.style.opacity = '0';
    video.style.transition = 'opacity 1s ease-in-out';
    
    // Small delay to ensure the transition is applied
    setTimeout(() => {
      video.style.opacity = opacity.toString();
    }, 50);
    
    return () => {
      video.style.opacity = '0';
    };
  }, [opacity]);

  return (
    <div className={`absolute inset-0 z-0 overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover transition-opacity duration-1000"
        style={{
          transform: `translate3d(0, ${parallaxOffset}px, 0)`,
          willChange: 'transform',
        }}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-forest-deep/70" />
    </div>
  );
};
