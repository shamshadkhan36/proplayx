import React from 'react';
import { singleCourtCosting, contactInfo } from '../data/content';

export default function CourtCapexTable() {
  return (
    <section style={{ padding: '4.5rem 0 6rem', background: '#0b1420', color: '#F7F9FA' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ maxWidth: '680px', marginBottom: '2.5rem' }}>
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
            Official Unit Economics — Page 3 Spec
          </div>
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(1.9rem, 3.4vw, 2.7rem)',
              margin: '0 0 .8rem',
              letterSpacing: '-.01em',
              lineHeight: 1.15,
            }}
          >
            Capital Expenditure: Single Court Costing
          </h2>
          <p style={{ color: '#9FB2BC', fontSize: '.96rem', lineHeight: 1.6, margin: 0 }}>
            Standard unit economics based on an estimated {singleCourtCosting.footprint}.
          </p>
        </div>

        {/* Costing Table */}
        <div
          style={{
            borderRadius: '16px',
            overflowX: 'auto',
            border: '1px solid rgba(79, 227, 237, 0.25)',
            background: '#060a0f',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)',
            marginBottom: '2rem',
          }}
        >
          <div style={{ minWidth: '600px' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '2fr 2fr 1.3fr',
                background: '#05080c',
                borderBottom: '1px solid rgba(79, 227, 237, 0.2)',
                padding: '1.1rem 1.4rem',
              }}
            >
              <div style={{ color: '#7FEAF0', fontSize: '.72rem', letterSpacing: '.08em', textTransform: 'uppercase', fontWeight: 700 }}>
                Item Description
              </div>
              <div style={{ color: '#7FEAF0', fontSize: '.72rem', letterSpacing: '.08em', textTransform: 'uppercase', fontWeight: 700 }}>
                Rate Specification
              </div>
              <div style={{ color: '#7FEAF0', fontSize: '.72rem', letterSpacing: '.08em', textTransform: 'uppercase', fontWeight: 700, textAlign: 'right' }}>
                Estimated Cost (INR)
              </div>
            </div>

            {singleCourtCosting.items.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '2fr 2fr 1.3fr',
                  padding: '1.1rem 1.4rem',
                  borderBottom: '1px solid rgba(79, 227, 237, 0.1)',
                  background: idx % 2 === 0 ? '#060a0f' : '#080e16',
                  alignItems: 'center',
                }}
              >
                <div style={{ color: '#F7F9FA', fontSize: '.92rem', fontWeight: 600 }}>{item.desc}</div>
                <div style={{ color: '#9FB2BC', fontSize: '.88rem' }}>{item.rate}</div>
                <div style={{ color: '#4FE3ED', fontSize: '.95rem', fontWeight: 700, textAlign: 'right', fontFamily: "'Manrope', sans-serif" }}>
                  {item.cost}
                </div>
              </div>
            ))}

            {/* Total Row */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '4fr 1.3fr',
                padding: '1.3rem 1.4rem',
                background: 'rgba(79, 227, 237, 0.08)',
                borderTop: '2px solid rgba(79, 227, 237, 0.4)',
                alignItems: 'center',
              }}
            >
              <div>
                <div style={{ color: '#F7F9FA', fontSize: '1.05rem', fontWeight: 800 }}>
                  Estimated Total Setup Cost (per court)
                </div>
                <div style={{ color: '#7C8E98', fontSize: '.75rem', marginTop: '.2rem' }}>
                  {singleCourtCosting.disclaimer}
                </div>
              </div>
              <div style={{ color: '#4FE3ED', fontSize: '1.4rem', fontWeight: 800, textAlign: 'right', fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                {singleCourtCosting.total}
              </div>
            </div>
          </div>
        </div>

        {/* Download Action Banner */}
        <div
          style={{
            background: 'linear-gradient(145deg, #070d14 0%, #0b1420 100%)',
            border: '1px solid rgba(79, 227, 237, 0.3)',
            borderRadius: '14px',
            padding: '1.6rem 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.2rem',
          }}
        >
          <div>
            <h4 style={{ margin: '0 0 .3rem', fontSize: '1.1rem', color: '#F7F9FA', fontFamily: "'Bricolage Grotesque', sans-serif" }}>
              Official ProPlayX FOCO Business Proposal (PDF)
            </h4>
            <p style={{ margin: 0, fontSize: '.85rem', color: '#9FB2BC' }}>
              Download the complete 4-page official document including unit economics, scope of work, and contract terms.
            </p>
          </div>

          <a
            href={contactInfo.businessPlanPdf}
            download="ProPlayX_FOCO_Business_Plan.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#4FE3ED',
              color: '#060a0f',
              padding: '.75rem 1.4rem',
              borderRadius: '4px',
              fontWeight: 800,
              fontSize: '.85rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '.6rem',
              textDecoration: 'none',
              boxShadow: '0 4px 15px rgba(79, 227, 237, 0.3)',
            }}
          >
            <i className="fas fa-file-pdf"></i>
            <span>Download Official PDF (230 KB)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
