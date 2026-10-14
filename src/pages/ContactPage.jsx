import React from 'react';
import ContactSection from '../components/ContactSection';
import { contactInfo } from '../data/content';

export default function ContactPage() {
  return (
    <div>
      {/* Page Hero Header */}
      <section
        style={{
          background: 'linear-gradient(180deg, #05080c 0%, #0b1420 100%)',
          color: '#F7F9FA',
          padding: '8.5rem 0 4.5rem',
          borderBottom: '1px solid rgba(79, 227, 237, 0.15)',
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '.6rem',
              fontFamily: "'Manrope', sans-serif",
              fontSize: '.72rem',
              letterSpacing: '.14em',
              color: '#7FEAF0',
              marginBottom: '1rem',
              textTransform: 'uppercase',
              fontWeight: 700,
            }}
          >
            <span style={{ width: '22px', height: '1px', background: '#4FE3ED', display: 'inline-block' }}></span>
            Page 04 — Contact Us
          </div>
          <h1
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              margin: '0 0 1.2rem',
              letterSpacing: '-.01em',
              lineHeight: 1.1,
            }}
          >
            Let's Discuss Your Sports Project
          </h1>
          <p
            style={{
              color: '#A6BAC4',
              fontSize: '1.15rem',
              maxWidth: '680px',
              margin: '0 0 2rem',
              lineHeight: 1.7,
            }}
          >
            Have open land, rooftop space, warehouse property, or an existing club needing professional management? Talk directly with our senior development engineers.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href={`https://wa.me/${contactInfo.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#25D366',
                color: '#fff',
                padding: '.85rem 1.6rem',
                borderRadius: '2px',
                fontWeight: 700,
                fontSize: '.88rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '.6rem',
              }}
            >
              <i className="fab fa-whatsapp" style={{ fontSize: '1.1rem' }}></i>
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href={`tel:${contactInfo.phone.split('/')[0].trim()}`}
              style={{
                background: 'transparent',
                color: '#F7F9FA',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                padding: '.85rem 1.6rem',
                borderRadius: '2px',
                fontWeight: 600,
                fontSize: '.85rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '.6rem',
              }}
            >
              <i className="fas fa-phone-alt" style={{ color: '#4FE3ED' }}></i>
              <span>Call Us Directly</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Interactive Contact & Inquiry Section */}
      <ContactSection />
    </div>
  );
}
