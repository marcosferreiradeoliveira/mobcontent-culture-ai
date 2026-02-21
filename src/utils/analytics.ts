/**
 * Analytics: Google Analytics 4 (GA4) + Mixpanel (opcional)
 * - GA4: Measurement ID G-NM2XMDD1TL (sempre ativo)
 * - Mixpanel: carregue o snippet e faça mixpanel.init('SEU_TOKEN') no index.html
 *   para enviar os mesmos eventos ao Mixpanel.
 */

declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void;
    dataLayer: any[];
    mixpanel?: { track: (event: string, props?: Record<string, any>) => void; init: (token: string) => void };
  }
}

// Initialize Google Analytics
export const initAnalytics = () => {
  // Prevent duplicate initialization
  if (window.gtag) return;

  // Create data layer if it doesn't exist
  window.dataLayer = window.dataLayer || [];
  
  // Define the gtag function
  function gtag() {
    window.dataLayer.push(arguments);
  }
  
  // Set the gtag function
  window.gtag = gtag as any;
  
  // Initialize with config
  window.gtag('js', new Date());
  window.gtag('config', 'G-NM2XMDD1TL');
};

type EventParams = {
  event_category?: string;
  event_label?: string;
  value?: number;
  [key: string]: any;
};

// Track page views (GA4 + Mixpanel se disponível)
export const trackPageView = (url: string) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      page_path: url,
      page_title: document.title,
      page_location: window.location.href
    });
  }
  if (window.mixpanel?.track) {
    window.mixpanel.track('Page View', { path: url, page_title: document.title, url: window.location.href });
  }
};

// Track custom events (GA4 + Mixpanel se disponível)
export const trackEvent = (action: string, params: EventParams = {}) => {
  const payload = {
    ...params,
    event_timestamp: new Date().toISOString(),
    language: navigator.language
  };
  if (typeof window.gtag === 'function') {
    window.gtag('event', action, {
      ...payload,
      user_agent: navigator.userAgent,
      screen_resolution: `${window.screen.width}x${window.screen.height}`
    });
  }
  if (window.mixpanel?.track) {
    window.mixpanel.track(action, payload);
  }
};

// Track button clicks
export const trackButtonClick = (buttonText: string, category = 'button_click', additionalParams: Record<string, any> = {}) => {
  trackEvent('button_click', {
    event_category: category,
    event_label: buttonText,
    ...additionalParams
  });
};

// Track form submissions
export const trackFormSubmission = (formName: string, isSuccess: boolean) => {
  trackEvent('form_submit', {
    event_category: 'form',
    event_label: formName,
    success: isSuccess,
    form_name: formName
  });
};

// Track external link clicks
export const trackExternalLink = (url: string, label: string) => {
  trackEvent('external_link_click', {
    event_category: 'external_link',
    event_label: label,
    link_url: url
  });
};

// Track video interactions
export const trackVideoInteraction = (action: string, videoTitle: string, currentTime?: number) => {
  trackEvent('video_interaction', {
    event_category: 'video',
    event_label: videoTitle,
    action,
    video_title: videoTitle,
    current_time: currentTime
  });
};

// Track section views (for scroll tracking)
export const trackSectionView = (sectionName: string) => {
  trackEvent('section_view', {
    event_category: 'engagement',
    event_label: sectionName
  });
};

// Track search queries
export const trackSearch = (query: string, resultCount: number) => {
  trackEvent('search', {
    event_category: 'search',
    event_label: query,
    search_term: query,
    result_count: resultCount
  });
};
