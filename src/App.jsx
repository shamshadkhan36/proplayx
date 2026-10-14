import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import LiveTicker from './components/LiveTicker';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import FranchisePage from './pages/FranchisePage';
import ConstructionPage from './pages/ConstructionPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div
        style={{
          background: '#F7F9FA',
          color: '#10161C',
          overflowX: 'hidden',
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            {/* Main page - Talks about what ProPlayX does */}
            <Route path="/" element={<Home />} />

            {/* Page 1 - Franchise options */}
            <Route path="/franchise" element={<FranchisePage />} />

            {/* Page 2 - Court Costing and Construction */}
            <Route path="/construction" element={<ConstructionPage />} />
            <Route path="/costing" element={<ConstructionPage />} />

            {/* Page 3 - About us */}
            <Route path="/about" element={<AboutPage />} />

            {/* Page 4 - Contact us */}
            <Route path="/contact" element={<ContactPage />} />

            {/* Fallback */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <LiveTicker />
      </div>
    </BrowserRouter>
  );
}
