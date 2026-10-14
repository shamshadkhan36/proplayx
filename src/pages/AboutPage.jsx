import React from 'react';
import About from '../components/About';
import Director from '../components/Director';
import Venues from '../components/Venues';
import FaqSection from '../components/FaqSection';
import { heroStats } from '../data/content';

export default function AboutPage() {
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
            Page 03 — About Us
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
            Pioneering India's Racket Sports Revolution
          </h1>
          <p
            style={{
              color: '#A6BAC4',
              fontSize: '1.15rem',
              maxWidth: '680px',
              margin: '0 0 2.5rem',
              lineHeight: 1.7,
            }}
          >
            ProPlayX was founded to bridge the massive gap between raw sports infrastructure and professional club management. We design world-class venues and keep them staffed, maintained, and vibrant.
          </p>

          {/* Quick Metrics Bar */}
          <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap' }}>
            {heroStats.map((stat, idx) => (
              <div key={idx}>
                <b
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontSize: '2rem',
                    color: '#7FEAF0',
                    display: 'block',
                    lineHeight: 1,
                    marginBottom: '0.35rem',
                  }}
                >
                  {stat.number}
                </b>
                <span
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '.66rem',
                    letterSpacing: '.08em',
                    color: '#7C8E98',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 1. Core Mission & Philosophy */}
      <About />

      {/* 2. Leadership & Director Profile */}
      <Director />

      {/* 3. Live Operating Centers & Venues */}
      <Venues />

      {/* 4. Technical Knowledge Base & FAQs */}
      <FaqSection />
    </div>
  );
}
