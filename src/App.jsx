import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SportsStrip from './components/SportsStrip';
import CourtCustomizer from './components/CourtCustomizer';
import About from './components/About';
import GearShowcase from './components/GearShowcase';
import GearStudio from './components/GearStudio';
import Franchise from './components/Franchise';
import FranchiseComparator from './components/FranchiseComparator';
import Roadmap from './components/Roadmap';
import Venues from './components/Venues';
import CostingTable from './components/CostingTable';
import Director from './components/Director';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import LiveTicker from './components/LiveTicker';

export default function App() {
  const [customSpec, setCustomSpec] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('main > section:not(#home)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!reducedMotion && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -48px 0px' });

      sections.forEach((section) => {
        section.classList.add('scroll-reveal');
        section.querySelectorAll('[style*="grid-template-columns"]').forEach((grid) => {
          const items = Array.from(grid.children);
          if (items.length < 2) return;
          grid.classList.add('stagger-grid');
          items.forEach((item, index) => {
            item.classList.add('stagger-item');
            item.style.setProperty('--stagger-index', Math.min(index, 7));
          });
        });
        observer.observe(section);
      });

      return () => observer.disconnect();
    }

    sections.forEach((section) => section.classList.add('is-visible'));
  }, []);

  useEffect(() => {
    let frame = 0;
    const updateProgress = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
        document.querySelector('.app-shell')?.style.setProperty('--page-progress', `${progress * 100}%`);
      });
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  const handleApplyCustomization = (specText) => {
    setCustomSpec(specText);
  };

  return (
    <div
      className="app-shell"
      style={{
        background: '#F7F9FA',
        color: '#10161C',
        overflowX: 'hidden',
        position: 'relative',
        minHeight: '100vh',
      }}
    >
      <div className="page-progress" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <SportsStrip />
        <CourtCustomizer onSelectCustomization={handleApplyCustomization} />
        <About />
        <GearShowcase />
        <GearStudio />
        <Franchise />
        <FranchiseComparator onSelectModel={handleApplyCustomization} />
        <Roadmap />
        <Venues />
        <CostingTable />
        <Director />
        <FaqSection />
        <ContactSection prefilledSpec={customSpec} />
      </main>
      <Footer />
      <WhatsAppButton />
      <LiveTicker />
    </div>
  );
}
