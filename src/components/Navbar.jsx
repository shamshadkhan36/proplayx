import React, { useState, useEffect } from 'react';
import { playClickSound } from '../utils/audio';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    const handleResize = () => {
      const mobile = window.innerWidth < 960;
      setIsMobile(mobile);
      if (!mobile) setMobileMenuOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    playClickSound();
    setMobileMenuOpen((prev) => !prev);
  };
  const closeMenu = () => {
    playClickSound();
    setMobileMenuOpen(false);
  };

  const navBg = scrolled ? 'rgba(5, 8, 12, 0.95)' : 'rgba(5, 8, 12, 0.6)';
  const navPadding = scrolled ? '0.65rem' : '1.3rem';
  const navShadow = scrolled ? '0 10px 30px rgba(0, 0, 0, 0.5)' : 'none';

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: `${navPadding} 0`,
        background: navBg,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(79, 227, 237, 0.15)',
        transition: 'padding 0.3s ease, background 0.3s ease, box-shadow 0.3s ease',
        boxShadow: navShadow,
      }}
    >
      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <a href="#home" style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/uploads/PRO%20-PLAY%20X%20logo%20white%20and%20blue%20pdf.pdf_20250922_093405_0000.png"
            alt="ProPlayX"
            style={{
              height: '38px',
              width: 'auto',
              display: 'block',
              mixBlendMode: 'screen',
            }}
          />
        </a>

        {/* Mobile Hamburger Button */}
        {isMobile && (
          <button
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            style={{
              background: 'transparent',
              border: '1px solid rgba(79, 227, 237, 0.4)',
              color: '#4FE3ED',
              width: '40px',
              height: '40px',
              borderRadius: '4px',
              fontSize: '1.1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        )}

        {/* Desktop Nav Items */}
        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.8rem' }}>
            <a
              href="#about"
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: '.78rem',
                letterSpacing: '.08em',
                color: '#C7D3DA',
                fontWeight: 600,
              }}
            >
              About
            </a>
            <a
              href="#customizer"
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: '.78rem',
                letterSpacing: '.08em',
                color: '#4FE3ED',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '.35rem',
              }}
            >
              <i className="fas fa-wand-magic-sparkles" style={{ fontSize: '.7rem' }}></i>
              Court Studio
            </a>
            <a
              href="#services"
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: '.78rem',
                letterSpacing: '.08em',
                color: '#C7D3DA',
                fontWeight: 600,
              }}
            >
              Costing
            </a>
            <a
              href="#venues"
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: '.78rem',
                letterSpacing: '.08em',
                color: '#C7D3DA',
                fontWeight: 600,
              }}
            >
              Centers
            </a>
            <a
              href="#franchise"
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: '.78rem',
                letterSpacing: '.08em',
                color: '#C7D3DA',
                fontWeight: 600,
              }}
            >
              Franchise
            </a>
            <a
              href="#faq"
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: '.78rem',
                letterSpacing: '.08em',
                color: '#C7D3DA',
                fontWeight: 600,
              }}
            >
              FAQs
            </a>
            <a
              href="#contact"
              style={{
                background: '#4FE3ED',
                color: '#060a0f',
                fontFamily: "'Manrope', sans-serif",
                fontSize: '.76rem',
                letterSpacing: '.06em',
                padding: '.65rem 1.3rem',
                borderRadius: '2px',
                fontWeight: 800,
              }}
            >
              Enquire
            </a>
          </div>
        )}
      </div>

      {/* Mobile Nav Dropdown */}
      {isMobile && mobileMenuOpen && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 0,
            background: '#0c1219',
            borderTop: '1px solid rgba(79, 227, 237, 0.15)',
            marginTop: '0.6rem',
          }}
        >
          <a
            href="#about"
            onClick={closeMenu}
            style={{
              padding: '1rem 1.5rem',
              fontFamily: "'Manrope', sans-serif",
              fontSize: '.85rem',
              letterSpacing: '.06em',
              color: '#C7D3DA',
              borderBottom: '1px solid rgba(79, 227, 237, 0.08)',
            }}
          >
            About
          </a>
          <a
            href="#customizer"
            onClick={closeMenu}
            style={{
              padding: '1rem 1.5rem',
              fontFamily: "'Manrope', sans-serif",
              fontSize: '.85rem',
              letterSpacing: '.06em',
              color: '#4FE3ED',
              fontWeight: 700,
              borderBottom: '1px solid rgba(79, 227, 237, 0.08)',
            }}
          >
            Court Studio ✨
          </a>
          <a
            href="#services"
            onClick={closeMenu}
            style={{
              padding: '1rem 1.5rem',
              fontFamily: "'Manrope', sans-serif",
              fontSize: '.85rem',
              letterSpacing: '.06em',
              color: '#C7D3DA',
              borderBottom: '1px solid rgba(79, 227, 237, 0.08)',
            }}
          >
            Costing Spec Sheet
          </a>
          <a
            href="#venues"
            onClick={closeMenu}
            style={{
              padding: '1rem 1.5rem',
              fontFamily: "'Manrope', sans-serif",
              fontSize: '.85rem',
              letterSpacing: '.06em',
              color: '#C7D3DA',
              borderBottom: '1px solid rgba(79, 227, 237, 0.08)',
            }}
          >
            Sports Centers
          </a>
          <a
            href="#franchise"
            onClick={closeMenu}
            style={{
              padding: '1rem 1.5rem',
              fontFamily: "'Manrope', sans-serif",
              fontSize: '.85rem',
              letterSpacing: '.06em',
              color: '#C7D3DA',
              borderBottom: '1px solid rgba(79, 227, 237, 0.08)',
            }}
          >
            Franchise Models
          </a>
          <a
            href="#faq"
            onClick={closeMenu}
            style={{
              padding: '1rem 1.5rem',
              fontFamily: "'Manrope', sans-serif",
              fontSize: '.85rem',
              letterSpacing: '.06em',
              color: '#C7D3DA',
              borderBottom: '1px solid rgba(79, 227, 237, 0.08)',
            }}
          >
            FAQs
          </a>
          <a
            href="#contact"
            onClick={closeMenu}
            style={{
              padding: '1rem 1.5rem',
              fontFamily: "'Manrope', sans-serif",
              fontSize: '.85rem',
              letterSpacing: '.06em',
              color: '#4FE3ED',
              fontWeight: 800,
            }}
          >
            Enquire Now &#8594;
          </a>
        </div>
      )}
    </nav>
  );
}
