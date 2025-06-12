import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import PoliciesPage from './pages/PoliciesPage';
import ChatPage from './pages/ChatPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';

// Extend the Window interface to include gtag
declare global {
  interface Window {
    gtag?: (command: 'config', targetId: string, config?: { page_path: string }) => void;
  }
}

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-ZJWQJY8ZLJ', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
};

// Layout component that applies IBM Plex font family
const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="font-sans min-h-screen">
      {children}
    </div>
  );
};

const AppRouter = () => {
  return (
    <Router>
      <AnalyticsTracker />
      <AppLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/policies" element={<PoliciesPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default AppRouter;
