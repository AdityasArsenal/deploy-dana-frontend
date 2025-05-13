import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import PoliciesPage from './pages/PoliciesPage';
import ChatPage from './pages/ChatPage';

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
      <AppLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/policies" element={<PoliciesPage />} />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default AppRouter;
