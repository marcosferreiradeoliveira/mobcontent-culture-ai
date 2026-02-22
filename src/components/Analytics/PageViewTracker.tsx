// src/components/Analytics/PageViewTracker.tsx
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { trackPageView } from '@/utils/analytics';

function isCorruptedSearch(search: string): boolean {
  const q = search.slice(1);
  return (
    q.indexOf('/&/') !== -1 ||
    q.indexOf('?/&') !== -1 ||
    (q.match(/~and~/g)?.length ?? 0) > 1
  );
}

export function PageViewTracker() {
  const location = useLocation();
  const navigate = useNavigate();

  // Limpa URL corrompida ao abrir direto em rota interna (ex: /desenvolvimento-apps/?/&/~and~/...)
  useEffect(() => {
    if (!location.search) return;
    if (isCorruptedSearch(location.search)) {
      const path = location.pathname.replace(/\/$/, '') || '/';
      navigate(path + (location.hash || ''), { replace: true });
    }
  }, [location.search, location.pathname, location.hash, navigate]);

  useEffect(() => {
    const url = location.pathname + (location.search || '');
    trackPageView(url);
    if (import.meta.env.DEV) {
      console.log('Page view tracked:', url);
    }
  }, [location.pathname, location.search]);

  return null;
}
