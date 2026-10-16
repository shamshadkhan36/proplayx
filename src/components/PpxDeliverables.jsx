import React from 'react';
import { ppxDeliverables } from '../data/content';

export default function PpxDeliverables() {
  return (
    <section style={{ padding: '6.5rem 0', background: '#0b1420', color: '#F7F9FA' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ maxWidth: '680px', marginBottom: '3.5rem' }}>
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
            Management Scope — Page 2 Deliverables
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
            What ProPlayX Delivers
          </h2>
          <p style={{ color: '#9FB2BC', fontSize: '1rem', lineHeight: 1.6, margin: 0 }}>
            Under the FOCO agreement, PPX acts as your comprehensive management partner. Our standard operating procedures ensure that the facility is built to spec, marketed effectively, and run with institutional efficiency.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.8rem',
          }}
        >
          {ppxDeliverables.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: '#060a0f',
                border: '1px solid rgba(79, 227, 237, 0.2)',
                borderRadius: '16px',
                padding: '2.2rem',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.3)',
                transition: 'transform 0.2s ease, border-color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = '#4FE3ED';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(79, 227, 237, 0.2)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.2rem' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    background: 'rgba(79, 227, 237, 0.12)',
                    color: '#4FE3ED',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                  }}
                >
                  <i className={item.icon}></i>
                </div>
                <span
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    color: 'rgba(79, 227, 237, 0.3)',
                  }}
                >
                  {item.num}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontSize: '1.25rem',
                  margin: '0 0 .7rem',
                  color: '#F7F9FA',
                  fontWeight: 700,
                }}
              >
                {item.title}
              </h3>

              <p style={{ color: '#9FB2BC', fontSize: '.92rem', lineHeight: 1.65, margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
