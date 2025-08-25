// src/components/Analytics/PageViewTracker.tsx
'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { trackPageView } from '@/utils/analytics';

export function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      // Combine path with search params
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
      
      // Track page view with additional context
      trackPageView(url);
      
      // Debug log
      if (process.env.NODE_ENV === 'development') {
        console.log('Page view tracked:', url);
      }
    }
  }, [pathname, searchParams]);

  return null;
}
