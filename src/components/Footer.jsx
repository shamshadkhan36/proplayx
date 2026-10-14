import React from 'react';
import { Link } from 'react-router-dom';
import { contactInfo } from '../data/content';

export default function Footer() {
  const { social } = contactInfo;

  return (
    <footer style={{ background: '#05080c', color: '#8B98A1', padding: '4rem 0 2rem' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '2.5rem',
          }}
        >
          {/* Brand Column */}
          <div style={{ gridColumn: 'span 2', maxWidth: '340px' }}>
            <Link to="/">
              <img
                src="/uploads/PRO%20-PLAY%20X%20logo%20white%20and%20blue%20pdf.pdf_20250922_093405_0000.png"
                alt="ProPlayX"
                style={{
                  height: '90px',
                  width: 'auto',
                  display: 'block',
                  mixBlendMode: 'screen',
                  marginBottom: '1rem',
                }}
              />
            </Link>
            <p style={{ fontSize: '.86rem', margin: '0 0 1.4rem', lineHeight: 1.6 }}>
              Turnkey sports infrastructure engineering and professional club operations, built for India.
            </p>

            <div style={{ display: 'flex', gap: '.7rem', flexWrap: 'wrap', marginBottom: '1.4rem' }}>
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '.5rem',
                  background: '#12191f',
                  color: '#F7F9FA',
                  padding: '.5rem 1rem',
                  borderRadius: '6px',
                  fontSize: '.78rem',
                  fontWeight: 600,
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <i className="fab fa-google-play"></i> Google Play
              </a>
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '.5rem',
                  background: '#12191f',
                  color: '#F7F9FA',
                  padding: '.5rem 1rem',
                  borderRadius: '6px',
                  fontSize: '.78rem',
                  fontWeight: 600,
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <i className="fab fa-apple"></i> App Store
              </a>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{ color: '#9FB2BC', fontSize: '1.15rem' }}
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href={social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                style={{ color: '#9FB2BC', fontSize: '1.15rem' }}
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{ color: '#9FB2BC', fontSize: '1.15rem' }}
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href={social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                style={{ color: '#9FB2BC', fontSize: '1.15rem' }}
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div
              style={{
                color: '#F7F9FA',
                fontWeight: 700,
                fontSize: '.85rem',
                marginBottom: '1.2rem',
                textTransform: 'uppercase',
                letterSpacing: '.06em',
              }}
            >
              Pages
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
              <Link to="/" style={{ fontSize: '.86rem', color: '#8B98A1' }}>
                Main Page (Home)
              </Link>
              <Link to="/franchise" style={{ fontSize: '.86rem', color: '#8B98A1' }}>
                Page 1: Franchise Options
              </Link>
              <Link to="/construction" style={{ fontSize: '.86rem', color: '#8B98A1' }}>
                Page 2: Court Costing &amp; Construction
              </Link>
              <Link to="/about" style={{ fontSize: '.86rem', color: '#8B98A1' }}>
                Page 3: About Us
              </Link>
              <Link to="/contact" style={{ fontSize: '.86rem', color: '#8B98A1' }}>
                Page 4: Contact Us
              </Link>
            </div>
          </div>

          {/* Our Courts */}
          <div>
            <div
              style={{
                color: '#F7F9FA',
                fontWeight: 700,
                fontSize: '.85rem',
                marginBottom: '1.2rem',
                textTransform: 'uppercase',
                letterSpacing: '.06em',
              }}
            >
              Sports Centers
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
              <Link to="/about" style={{ fontSize: '.86rem', color: '#8B98A1' }}>
                KBP College, Thane
              </Link>
              <Link to="/about" style={{ fontSize: '.86rem', color: '#8B98A1' }}>
                Lush, Mira Road
              </Link>
              <Link to="/about" style={{ fontSize: '.86rem', color: '#8B98A1' }}>
                Celebration Club, Andheri
              </Link>
              <Link to="/about" style={{ fontSize: '.86rem', color: '#8B98A1' }}>
                Pikl, Hyderabad
              </Link>
              <Link to="/about" style={{ fontSize: '.86rem', color: '#8B98A1' }}>
                Blu Racquet Club
              </Link>
            </div>
          </div>

          {/* Quick Contact Info */}
          <div>
            <div
              style={{
                color: '#F7F9FA',
                fontWeight: 700,
                fontSize: '.85rem',
                marginBottom: '1.2rem',
                textTransform: 'uppercase',
                letterSpacing: '.06em',
              }}
            >
              Get in Touch
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem', fontSize: '.85rem' }}>
              <div>
                <span style={{ color: '#7FEAF0', display: 'block', fontSize: '.72rem', textTransform: 'uppercase', fontWeight: 700 }}>
                  Phone
                </span>
                <span style={{ color: '#9FB2BC' }}>+91 74000 14111</span>
              </div>
              <div>
                <span style={{ color: '#7FEAF0', display: 'block', fontSize: '.72rem', textTransform: 'uppercase', fontWeight: 700 }}>
                  Email
                </span>
                <span style={{ color: '#9FB2BC' }}>contact@proplayx.in</span>
              </div>
              <div>
                <span style={{ color: '#7FEAF0', display: 'block', fontSize: '.72rem', textTransform: 'uppercase', fontWeight: 700 }}>
                  Office
                </span>
                <span style={{ color: '#9FB2BC', lineHeight: 1.4 }}>
                  Aaradhya Primus, Dahisar East, Mumbai
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          style={{
            fontSize: '.78rem',
            color: '#5A6670',
            borderTop: '1px solid rgba(79, 227, 237, 0.12)',
            paddingTop: '1.4rem',
            marginTop: '2.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <span>© 2026 ProPlayX Private Limited. All rights reserved.</span>
          <span>Turnkey Sports Infrastructure &amp; Club Operations</span>
        </div>
      </div>
    </footer>
  );
}
