// src/components/Analytics/PageViewTracker.tsx
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { trackPageView } from '@/utils/analytics';

export function PageViewTracker() {
  const location = useLocation();

  useEffect(() => {
    const url = location.pathname + (location.search || '');
    trackPageView(url);
    if (import.meta.env.DEV) {
      console.log('Page view tracked:', url);
    }
  }, [location.pathname, location.search]);

  return null;
}
