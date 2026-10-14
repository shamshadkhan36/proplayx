import React, { useState } from 'react';
import Franchise from '../components/Franchise';
import FranchiseComparator from '../components/FranchiseComparator';
import Roadmap from '../components/Roadmap';
import ContactSection from '../components/ContactSection';

export default function FranchisePage() {
  const [selectedFranchiseModel, setSelectedFranchiseModel] = useState(
    'Blu Racquet Club Franchise Inquiry'
  );

  const handleSelectModel = (modelText) => {
    setSelectedFranchiseModel(modelText);
  };

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
            Page 01 — Franchise Options
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
            The Blu Racquet Club Franchise Concept
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
            Partner with ProPlayX to launch premier multi-racket destinations across India. Combining padel, pickleball, and badminton under a singular lifestyle club brand.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="#franchise-comparator"
              style={{
                background: '#4FE3ED',
                color: '#060a0f',
                padding: '.85rem 1.6rem',
                borderRadius: '2px',
                fontWeight: 800,
                fontSize: '.85rem',
              }}
            >
              Compare FOCO vs FOFO Models
            </a>
            <a
              href="#contact"
              style={{
                background: 'transparent',
                color: '#F7F9FA',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                padding: '.85rem 1.6rem',
                borderRadius: '2px',
                fontWeight: 600,
                fontSize: '.85rem',
              }}
            >
              Submit Franchise Inquiry
            </a>
          </div>
        </div>
      </section>

      {/* 1. Core Franchise Concept (Blu Racquet Club) */}
      <Franchise />

      {/* 2. Interactive FOCO vs FOFO Model Comparator & Quiz */}
      <FranchiseComparator onSelectModel={handleSelectModel} />

      {/* 3. National Expansion Roadmap 2026-2028 */}
      <Roadmap />

      {/* 4. Dedicated Franchise Inquiry Form */}
      <ContactSection prefilledSpec={selectedFranchiseModel} />
    </div>
  );
}
