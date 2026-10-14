import React, { useState } from 'react';
import CostingTable from '../components/CostingTable';
import CourtCustomizer from '../components/CourtCustomizer';
import ContactSection from '../components/ContactSection';

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Site Evaluation & Engineering Survey',
    desc: 'Our sports civil engineers inspect your ground, warehouse, or rooftop for load bearing, slope gradients, prevailing wind, and sunlight orientation.',
  },
  {
    step: '02',
    title: 'Civil Concrete Sub-Base & Drainage',
    desc: 'Precision leveling, reinforced PCC/RCC sub-base, and perimeter drainage channels preventing any water stagnation even during peak monsoon rains.',
  },
  {
    step: '03',
    title: 'Surface Application & Glass Framing',
    desc: '8-layer USAPA cushion acrylic flooring or 12mm FIP-certified toughened panoramic glass panels and laser-cut hot-dip galvanized steel framing.',
  },
  {
    step: '04',
    title: 'Lighting, Nets & Tournament Handover',
    desc: 'Installation of 500-lux glare-free LED floodlights, heavy-duty tournament nets, official line markings, and quality certificate handover.',
  },
];

export default function ConstructionPage() {
  const [customSpec, setCustomSpec] = useState('Court Construction & Design');

  const handleApplyCustomization = (specText) => {
    setCustomSpec(specText);
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
            Page 02 — Court Costing &amp; Construction
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
            Turnkey Sports Court Construction
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
            From civil earthworks to final tournament net handover. Transparent costing, global federation specifications (USAPA, FIP, BWF), and rapid 18 to 35-day project delivery across India.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="#services"
              style={{
                background: '#4FE3ED',
                color: '#060a0f',
                padding: '.85rem 1.6rem',
                borderRadius: '2px',
                fontWeight: 800,
                fontSize: '.85rem',
              }}
            >
              See Pricing Spec Sheet
            </a>
            <a
              href="#customizer"
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
              Design Your Court Studio ✨
            </a>
          </div>
        </div>
      </section>

      {/* 1. Official Turnkey Costing Spec Sheet */}
      <CostingTable />

      {/* 2. Interactive Court Design Studio */}
      <CourtCustomizer onSelectCustomization={handleApplyCustomization} />

      {/* 3. Engineering & Construction Process */}
      <section style={{ padding: '6.5rem 0', background: '#F7F9FA', color: '#10161C' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ maxWidth: '640px', marginBottom: '3.2rem' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '.6rem',
                fontFamily: "'Manrope', sans-serif",
                fontSize: '.72rem',
                letterSpacing: '.14em',
                color: '#0E8F9C',
                marginBottom: '1rem',
                textTransform: 'uppercase',
                fontWeight: 700,
              }}
            >
              <span style={{ width: '22px', height: '1px', background: '#0E8F9C', display: 'inline-block' }}></span>
              Engineering Protocol — How We Build
            </div>
            <h2
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(2rem, 3.6vw, 2.9rem)',
                margin: 0,
                color: '#10161C',
                letterSpacing: '-.01em',
                lineHeight: 1.15,
              }}
            >
              Four-stage turnkey delivery process
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.8rem',
            }}
          >
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={idx}
                style={{
                  background: '#fff',
                  border: '1px solid rgba(15, 143, 156, 0.2)',
                  borderRadius: '16px',
                  padding: '2rem',
                  boxShadow: '0 10px 30px rgba(11, 20, 32, 0.03)',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    color: 'rgba(14, 143, 156, 0.2)',
                    lineHeight: 1,
                    marginBottom: '.8rem',
                  }}
                >
                  {step.step}
                </div>
                <h3
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontSize: '1.2rem',
                    margin: '0 0 .6rem',
                    color: '#10161C',
                    fontWeight: 700,
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ color: '#5B6670', fontSize: '.9rem', lineHeight: 1.6, margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Dedicated Construction Inquiry Form */}
      <ContactSection prefilledSpec={customSpec} />
    </div>
  );
}
