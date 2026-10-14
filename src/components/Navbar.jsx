import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
      const mobile = window.innerWidth < 1024;
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

  const navBg = scrolled ? 'rgba(5, 8, 12, 0.96)' : 'rgba(5, 8, 12, 0.75)';
  const navPadding = scrolled ? '0.65rem' : '1.25rem';
  const navShadow = scrolled ? '0 10px 30px rgba(0, 0, 0, 0.5)' : 'none';

  const navItemStyle = ({ isActive }) => ({
    fontFamily: "'Manrope', sans-serif",
    fontSize: '.82rem',
    letterSpacing: '.06em',
    color: isActive ? '#4FE3ED' : '#C7D3DA',
    fontWeight: isActive ? 800 : 600,
    position: 'relative',
    paddingBottom: '4px',
    borderBottom: isActive ? '2px solid #4FE3ED' : '2px solid transparent',
    transition: 'all 0.2s ease',
  });

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
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
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
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
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
        </Link>

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
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <NavLink to="/" end style={navItemStyle}>
              Main Page
            </NavLink>

            <NavLink to="/franchise" style={navItemStyle}>
              Franchise Options
            </NavLink>

            <NavLink to="/construction" style={navItemStyle}>
              Court Costing &amp; Construction
            </NavLink>

            <NavLink to="/about" style={navItemStyle}>
              About Us
            </NavLink>

            <NavLink to="/contact" style={navItemStyle}>
              Contact Us
            </NavLink>

            <Link
              to="/contact"
              style={{
                background: '#4FE3ED',
                color: '#060a0f',
                fontFamily: "'Manrope', sans-serif",
                fontSize: '.78rem',
                letterSpacing: '.06em',
                padding: '.65rem 1.4rem',
                borderRadius: '2px',
                fontWeight: 800,
                boxShadow: '0 4px 15px rgba(79, 227, 237, 0.3)',
              }}
            >
              Enquire
            </Link>
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
          <NavLink
            to="/"
            end
            onClick={closeMenu}
            style={({ isActive }) => ({
              padding: '1rem 1.5rem',
              fontFamily: "'Manrope', sans-serif",
              fontSize: '.9rem',
              letterSpacing: '.06em',
              color: isActive ? '#4FE3ED' : '#C7D3DA',
              fontWeight: isActive ? 800 : 600,
              borderBottom: '1px solid rgba(79, 227, 237, 0.08)',
              background: isActive ? 'rgba(79, 227, 237, 0.05)' : 'transparent',
            })}
          >
            Main Page (What ProPlayX Does)
          </NavLink>

          <NavLink
            to="/franchise"
            onClick={closeMenu}
            style={({ isActive }) => ({
              padding: '1rem 1.5rem',
              fontFamily: "'Manrope', sans-serif",
              fontSize: '.9rem',
              letterSpacing: '.06em',
              color: isActive ? '#4FE3ED' : '#C7D3DA',
              fontWeight: isActive ? 800 : 600,
              borderBottom: '1px solid rgba(79, 227, 237, 0.08)',
              background: isActive ? 'rgba(79, 227, 237, 0.05)' : 'transparent',
            })}
          >
            Page 1: Franchise Options
          </NavLink>

          <NavLink
            to="/construction"
            onClick={closeMenu}
            style={({ isActive }) => ({
              padding: '1rem 1.5rem',
              fontFamily: "'Manrope', sans-serif",
              fontSize: '.9rem',
              letterSpacing: '.06em',
              color: isActive ? '#4FE3ED' : '#C7D3DA',
              fontWeight: isActive ? 800 : 600,
              borderBottom: '1px solid rgba(79, 227, 237, 0.08)',
              background: isActive ? 'rgba(79, 227, 237, 0.05)' : 'transparent',
            })}
          >
            Page 2: Court Costing &amp; Construction
          </NavLink>

          <NavLink
            to="/about"
            onClick={closeMenu}
            style={({ isActive }) => ({
              padding: '1rem 1.5rem',
              fontFamily: "'Manrope', sans-serif",
              fontSize: '.9rem',
              letterSpacing: '.06em',
              color: isActive ? '#4FE3ED' : '#C7D3DA',
              fontWeight: isActive ? 800 : 600,
              borderBottom: '1px solid rgba(79, 227, 237, 0.08)',
              background: isActive ? 'rgba(79, 227, 237, 0.05)' : 'transparent',
            })}
          >
            Page 3: About Us
          </NavLink>

          <NavLink
            to="/contact"
            onClick={closeMenu}
            style={({ isActive }) => ({
              padding: '1rem 1.5rem',
              fontFamily: "'Manrope', sans-serif",
              fontSize: '.9rem',
              letterSpacing: '.06em',
              color: isActive ? '#4FE3ED' : '#C7D3DA',
              fontWeight: isActive ? 800 : 600,
              borderBottom: '1px solid rgba(79, 227, 237, 0.08)',
              background: isActive ? 'rgba(79, 227, 237, 0.05)' : 'transparent',
            })}
          >
            Page 4: Contact Us
          </NavLink>

          <Link
            to="/contact"
            onClick={closeMenu}
            style={{
              padding: '1.1rem 1.5rem',
              fontFamily: "'Manrope', sans-serif",
              fontSize: '.9rem',
              letterSpacing: '.06em',
              color: '#060a0f',
              background: '#4FE3ED',
              fontWeight: 800,
              textAlign: 'center',
            }}
          >
            Enquire Now &#8594;
          </Link>
        </div>
      )}
    </nav>
  );
}
