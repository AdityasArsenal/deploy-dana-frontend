import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import ContactPage from './components/ContactPage';

const AppRouter = () => {
  return (
    <Router basename="/ai">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;