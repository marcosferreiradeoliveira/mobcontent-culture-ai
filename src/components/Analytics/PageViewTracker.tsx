// src/components/Analytics/PageViewTracker.tsx
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { trackPageView } from '@/utils/analytics';

function isCorruptedSearch(search: string): boolean {
  if (!search || search.length < 2) return false;
  const q = search.slice(1);
  return (
    q.indexOf('/&/') !== -1 ||
    q.indexOf('?/&') !== -1 ||
    q.indexOf('~and~') !== -1
  );
}

function getCleanPath(pathname: string, hash: string): string {
  const path = pathname.replace(/\/$/, '') || '/';
  return path + (hash || '');
}

export function PageViewTracker() {
  const location = useLocation();
  const navigate = useNavigate();

  // Limpa URL corrompida ao abrir direto em rota interna
  useEffect(() => {
    if (isCorruptedSearch(location.search)) {
      navigate(getCleanPath(location.pathname, location.hash), { replace: true });
    }
  }, [location.search, location.pathname, location.hash, navigate]);

  // Verifica a URL real do browser nos primeiros 3s (caso algo re-corrompa após o script do HTML)
  useEffect(() => {
    const check = () => {
      const search = window.location.search;
      if (isCorruptedSearch(search)) {
        const path = getCleanPath(window.location.pathname, window.location.hash);
        navigate(path, { replace: true });
      }
    };
    check();
    const t1 = window.setTimeout(check, 300);
    const t2 = window.setTimeout(check, 800);
    const t3 = window.setTimeout(check, 2000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [navigate]);

  useEffect(() => {
    const url = location.pathname + (location.search || '');
    trackPageView(url);
    if (import.meta.env.DEV) {
      console.log('Page view tracked:', url);
    }
  }, [location.pathname, location.search]);

  return null;
}
