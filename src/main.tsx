import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initAnalytics, trackPageView } from './utils/analytics';

// Initialize analytics
initAnalytics();

// Track initial page view
trackPageView(window.location.pathname);

// Track subsequent page views
const handleLocationChange = () => {
  trackPageView(window.location.pathname);
};

// Listen for route changes (for SPAs)
window.addEventListener('popstate', handleLocationChange);

// Create a mutation observer to handle route changes in React Router
const observer = new MutationObserver(() => {
  handleLocationChange();
});

observer.observe(document.body, { childList: true, subtree: true });

createRoot(document.getElementById("root")!).render(<App />);
