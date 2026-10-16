import React, { useState } from 'react';
import { playClickSound } from '../utils/audio';

const FAQS = [
  {
    q: 'What is the turnkey capex to build a single pickleball court?',
    a: 'According to our official ProPlayX FOCO proposal, a turnkey regulation pickleball court (~2,000 sq. ft. footprint) costs ₹4,89,000. This includes civil sub-base (asphalt @ ₹120/sq ft: ₹2.40L), 5-layer synthetic acrylic surface with line marking (@ ₹55/sq ft: ₹1.10L), 20ft high perimeter netting (₹55k), professional center net system (₹19k), tournament sports floodlighting (₹45k), and court branding (₹20k).',
    category: 'Construction',
  },
  {
    q: 'How does the FOCO commercial model work and what are the two options?',
    a: 'In the FOCO (Franchise Owned, Company Operated) model, you own the court physical asset while ProPlayX handles all daily operations, tech, staffing, and revenue generation. We offer two transparent structures: Option A is a 75% / 25% Net Profit Share (75% to Investor, 25% to PPX after operating expenses). Option B is a 10% Top-Line Management Fee on gross venue revenue with 100% of residual operating profits retained by the owner.',
    category: 'Commercials',
  },
  {
    q: 'What are the 6 core deliverables managed by ProPlayX under FOCO?',
    a: 'ProPlayX takes full end-to-end responsibility across: (1) Design & Turnkey Construction, (2) PPX Booking Tech Platform with app integration, (3) Day-to-Day Operations & Staffing, (4) Financial & Accounting Management with monthly reporting, (5) Hyperlocal Marketing & Community Promotion, and (6) Corporate Events, Leagues & Tournaments.',
    category: 'Operations',
  },
  {
    q: 'How much land or space is required to build a pickleball or padel court?',
    a: 'A single regulation pickleball court requires approximately 1,800 to 2,000 sq. ft. including standard player runoffs (court lines are 44 ft × 20 ft). A panoramic padel tennis court requires a 20m × 10m enclosure (approx. 2,400 sq. ft.) with at least 6m vertical clearance. Surplus terraces, warehouses, schools, or open commercial ground can be activated.',
    category: 'Construction',
  },
  {
    q: 'How long does turnkey court construction take from start to finish?',
    a: 'Standard acrylic pickleball courts typically take 18 to 28 days depending on base readiness. Padel courts take 25 to 35 days, including toughened 12mm glass installation, steel framework, and infill turf laydown. We provide day-by-day project management and transparent material tracking.',
    category: 'Construction',
  },
  {
    q: 'Are ProPlayX courts certified for official tournaments?',
    a: 'Yes. Our pickleball surfaces are built with multi-layer acrylic cushions adhering to USAPA (USA Pickleball Association) standards. Our padel courts comply with FIP (International Padel Federation) structural safety guidelines with 12mm toughened glass, and badminton courts feature BWF-approved flooring.',
    category: 'Technical',
  },
  {
    q: 'Can courts be constructed on building rooftops or indoor warehouses?',
    a: 'Yes. We specialize in rooftop sports installations using lightweight steel subframes, vibration dampening underlays, and high-tensile perimeter netting to prevent balls from exiting the structure.',
    category: 'Technical',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFaqs = FAQS.filter(
    (f) =>
      f.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.a.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggle = (idx) => {
    playClickSound();
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" style={{ padding: '6.5rem 0', background: '#0b1420', color: '#F7F9FA' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Header */}
        <div style={{ maxWidth: '640px', marginBottom: '3rem' }}>
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
            Knowledge Base — FAQs
          </div>
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(2rem, 3.6vw, 2.9rem)',
              margin: '0 0 1rem',
              letterSpacing: '-.01em',
              lineHeight: 1.15,
            }}
          >
            Frequently Asked Questions
          </h2>
          <p style={{ color: '#9FB2BC', fontSize: '1rem', lineHeight: 1.6, margin: 0 }}>
            Everything you need to know about court construction costing, land requirements, operating models, and technical specs.
          </p>
        </div>

        {/* Live Search Input */}
        <div style={{ maxWidth: '580px', marginBottom: '2.5rem', position: 'relative' }}>
          <i
            className="fas fa-search"
            style={{ position: 'absolute', left: '1.2rem', top: '50%', transform: 'translateY(-50%)', color: '#4FE3ED' }}
          ></i>
          <input
            type="text"
            placeholder="Search questions (e.g. land, padel, rooftop, FOCO, construction)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              background: '#060a0f',
              border: '1px solid rgba(79, 227, 237, 0.25)',
              borderRadius: '30px',
              padding: '.85rem 1.2rem .85rem 3rem',
              color: '#F7F9FA',
              fontSize: '.9rem',
              outline: 'none',
            }}
          />
        </div>

        {/* Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '880px' }}>
          {filteredFaqs.length === 0 ? (
            <div style={{ color: '#8B98A1', padding: '2rem 0' }}>No matching questions found. Reach out to our team directly!</div>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  style={{
                    background: isOpen ? '#0e1724' : '#070c12',
                    border: isOpen ? '1px solid rgba(79, 227, 237, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <button
                    onClick={() => toggle(idx)}
                    style={{
                      width: '100%',
                      background: 'transparent',
                      border: 'none',
                      padding: '1.3rem 1.6rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      textAlign: 'left',
                      color: isOpen ? '#4FE3ED' : '#F7F9FA',
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      gap: '1rem',
                    }}
                  >
                    <span>{faq.q}</span>
                    <i
                      className={`fas ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}
                      style={{ fontSize: '.85rem', color: '#4FE3ED', flexShrink: 0 }}
                    ></i>
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: '0 1.6rem 1.4rem',
                        color: '#9FB2BC',
                        fontSize: '.94rem',
                        lineHeight: 1.7,
                        borderTop: '1px solid rgba(79, 227, 237, 0.1)',
                        paddingTop: '1rem',
                      }}
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
