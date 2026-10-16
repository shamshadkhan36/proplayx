import React, { useState } from 'react';
import Franchise from '../components/Franchise';
import PpxDeliverables from '../components/PpxDeliverables';
import UnitEconomics from '../components/UnitEconomics';
import FranchiseComparator from '../components/FranchiseComparator';
import Roadmap from '../components/Roadmap';
import ContactSection from '../components/ContactSection';
import { contactInfo } from '../data/content';

export default function FranchisePage() {
  const [selectedFranchiseModel, setSelectedFranchiseModel] = useState(
    'ProPlayX FOCO Franchise Inquiry (Option A: 75/25 Profit Share)'
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
            Page 01 — Franchise Options &amp; FOCO Business Plan
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
            Franchise Owned, Company Operated (FOCO) Model
          </h1>
          <p
            style={{
              color: '#A6BAC4',
              fontSize: '1.15rem',
              maxWidth: '720px',
              margin: '0 0 2rem',
              lineHeight: 1.7,
            }}
          >
            A seamless opportunity in India's booming pickleball and racket sports market. You own the asset; ProPlayX drives the performance through technology, centralized operations, coaching, and event networks.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="#franchise"
              style={{
                background: '#4FE3ED',
                color: '#060a0f',
                padding: '.85rem 1.6rem',
                borderRadius: '2px',
                fontWeight: 800,
                fontSize: '.85rem',
                textDecoration: 'none',
              }}
            >
              Explore Commercial Models
            </a>
            <a
              href={contactInfo.businessPlanPdf}
              download="ProPlayX_FOCO_Business_Plan.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'rgba(79, 227, 237, 0.12)',
                color: '#7FEAF0',
                border: '1px solid #4FE3ED',
                padding: '.85rem 1.6rem',
                borderRadius: '2px',
                fontWeight: 700,
                fontSize: '.85rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '.5rem',
                textDecoration: 'none',
              }}
            >
              <i className="fas fa-file-pdf"></i>
              <span>Download Business Plan PDF</span>
            </a>
          </div>
        </div>
      </section>

      {/* 1. Core FOCO Advantage & Commercial Models (Page 1 & 3 of PDF) */}
      <Franchise />

      {/* 2. What ProPlayX Delivers (Page 2 of PDF: 6 Deliverable Pillars) */}
      <PpxDeliverables />

      {/* 3. Unit Economics & Monthly Revenue Projections (Page 4 of PDF) */}
      <UnitEconomics />

      {/* 4. Interactive Role Comparator & Matching Quiz */}
      <FranchiseComparator onSelectModel={handleSelectModel} />

      {/* 5. National Expansion Roadmap 2026-2028 */}
      <Roadmap />

      {/* 6. Dedicated Franchise Inquiry Form */}
      <ContactSection prefilledSpec={selectedFranchiseModel} />
    </div>
  );
}
