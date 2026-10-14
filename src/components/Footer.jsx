import React from 'react';
import { contactInfo } from '../data/content';

export default function Footer() {
  const { social } = contactInfo;

  return (
    <footer style={{ background: '#05080c', color: '#8B98A1', padding: '3.5rem 0 1.8rem' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '2.4rem',
          }}
        >
          {/* Brand Column */}
          <div style={{ gridColumn: 'span 2', maxWidth: '320px' }}>
            <img
              src="/uploads/PRO%20-PLAY%20X%20logo%20white%20and%20blue%20pdf.pdf_20250922_093405_0000.png"
              alt="ProPlayX"
              style={{
                height: '100px',
                width: 'auto',
                display: 'block',
                mixBlendMode: 'screen',
                marginBottom: '1rem',
              }}
            />
            <p style={{ fontSize: '.85rem', margin: '0 0 1.2rem', lineHeight: 1.6 }}>
              Turnkey sports infrastructure and club operations, built for India.
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
                marginBottom: '1.1rem',
              }}
            >
              Quick Links
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
              <a href="#home" style={{ fontSize: '.85rem', color: '#8B98A1' }}>
                Home
              </a>
              <a href="#about" style={{ fontSize: '.85rem', color: '#8B98A1' }}>
                About Us
              </a>
              <a href="#services" style={{ fontSize: '.85rem', color: '#8B98A1' }}>
                Services
              </a>
              <a href="#venues" style={{ fontSize: '.85rem', color: '#8B98A1' }}>
                Sports Centers
              </a>
              <a href="#contact" style={{ fontSize: '.85rem', color: '#8B98A1' }}>
                Contact
              </a>
            </div>
          </div>

          {/* Our Courts */}
          <div>
            <div
              style={{
                color: '#F7F9FA',
                fontWeight: 700,
                fontSize: '.85rem',
                marginBottom: '1.1rem',
              }}
            >
              Our Courts
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
              <a href="#venues" style={{ fontSize: '.85rem', color: '#8B98A1' }}>
                KBP College, Thane
              </a>
              <a href="#venues" style={{ fontSize: '.85rem', color: '#8B98A1' }}>
                Lush, Mira Road
              </a>
              <a href="#venues" style={{ fontSize: '.85rem', color: '#8B98A1' }}>
                Celebration Club, Andheri
              </a>
              <a href="#venues" style={{ fontSize: '.85rem', color: '#8B98A1' }}>
                Pikl, Hyderabad
              </a>
              <a href="#venues" style={{ fontSize: '.85rem', color: '#8B98A1' }}>
                Blu Racquet Club
              </a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <div
              style={{
                color: '#F7F9FA',
                fontWeight: 700,
                fontSize: '.85rem',
                marginBottom: '1.1rem',
              }}
            >
              Resources
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
              <a href="#franchise" style={{ fontSize: '.85rem', color: '#8B98A1' }}>
                Franchise Enquiry
              </a>
              <a href="#services" style={{ fontSize: '.85rem', color: '#8B98A1' }}>
                Construction Costing
              </a>
              <a href="#home" style={{ fontSize: '.85rem', color: '#8B98A1' }}>
                Blog
              </a>
              <a href="#home" style={{ fontSize: '.85rem', color: '#8B98A1' }}>
                Careers
              </a>
              <a href="#home" style={{ fontSize: '.85rem', color: '#8B98A1' }}>
                Privacy Policy
              </a>
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
          }}
        >
          © 2026 ProPlayX Private Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
