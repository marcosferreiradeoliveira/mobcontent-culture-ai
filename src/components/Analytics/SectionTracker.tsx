'use client';

import { useEffect, useRef, ReactNode } from 'react';
import { trackSectionView } from '@/utils/analytics';

interface SectionTrackerProps {
  sectionName: string;
  threshold?: number;
  children: ReactNode;
}

export function SectionTracker({ sectionName, threshold = 0.1, children }: SectionTrackerProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasBeenTracked = useRef(false);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    if (!sectionElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasBeenTracked.current) {
          // Track the section view
          trackSectionView(sectionName);
          hasBeenTracked.current = true;
          
          // Debug log
          if (process.env.NODE_ENV === 'development') {
            console.log(`Section viewed: ${sectionName}`);
          }
          
          // Optionally disconnect the observer after the first view
          observer.disconnect();
        }
      },
      { 
        threshold, // Trigger when 10% of the section is visible
        rootMargin: '0px 0px -20% 0px' // Adjust this to control when the section is considered "in view"
      }
    );

    observer.observe(sectionElement);
    
    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
      observer.disconnect();
    };
  }, [sectionName, threshold]);

  return <div ref={sectionRef}>{children}</div>;
}
