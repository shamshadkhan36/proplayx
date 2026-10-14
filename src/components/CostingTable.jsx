import React from 'react';
import { costRows } from '../data/content';

export default function CostingTable() {
  return (
    <section id="services" style={{ padding: '6.5rem 0', background: '#0b1420', color: '#F7F9FA' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ maxWidth: '620px', marginBottom: '3rem' }}>
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
              fontWeight: 600,
            }}
          >
            <span
              style={{
                width: '22px',
                height: '1px',
                background: '#4FE3ED',
                display: 'inline-block',
              }}
            ></span>
            Spec Sheet
          </div>
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(1.9rem, 3.4vw, 2.7rem)',
              margin: 0,
              letterSpacing: '-.01em',
              lineHeight: 1.15,
            }}
          >
            Turnkey construction costing
          </h2>
        </div>

        <div
          style={{
            borderRadius: '16px',
            overflowX: 'auto',
            border: '1px solid rgba(79, 227, 237, 0.2)',
            background: '#060a0f',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)',
          }}
        >
          <div style={{ minWidth: '640px' }}>
            {/* Header Row */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1.1fr 1fr 1.6fr 1.1fr',
                background: '#05080c',
                borderBottom: '1px solid rgba(79, 227, 237, 0.18)',
              }}
            >
              <div
                style={{
                  color: '#7FEAF0',
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: '.68rem',
                  letterSpacing: '.08em',
                  padding: '1.1rem 1.3rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                }}
              >
                Sport
              </div>
              <div
                style={{
                  color: '#7FEAF0',
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: '.68rem',
                  letterSpacing: '.08em',
                  padding: '1.1rem 1.3rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                }}
              >
                Dimensions
              </div>
              <div
                style={{
                  color: '#7FEAF0',
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: '.68rem',
                  letterSpacing: '.08em',
                  padding: '1.1rem 1.3rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                }}
              >
                Surface / Material
              </div>
              <div
                style={{
                  color: '#7FEAF0',
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: '.68rem',
                  letterSpacing: '.08em',
                  padding: '1.1rem 1.3rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                }}
              >
                Approx. Cost
              </div>
            </div>

            {/* Content Rows */}
            {costRows.map((c, idx) => (
              <div
                key={idx}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1.1fr 1fr 1.6fr 1.1fr',
                  borderBottom:
                    idx === costRows.length - 1
                      ? 'none'
                      : '1px solid rgba(79, 227, 237, 0.1)',
                  transition: 'background 0.2s ease',
                }}
              >
                <div
                  style={{
                    padding: '1.05rem 1.3rem',
                    fontSize: '.9rem',
                    color: '#F7F9FA',
                    fontWeight: 600,
                  }}
                >
                  {c.sport}
                </div>
                <div
                  style={{
                    padding: '1.05rem 1.3rem',
                    fontSize: '.9rem',
                    color: '#9FB2BC',
                  }}
                >
                  {c.dims}
                </div>
                <div
                  style={{
                    padding: '1.05rem 1.3rem',
                    fontSize: '.9rem',
                    color: '#9FB2BC',
                  }}
                >
                  {c.material}
                </div>
                <div
                  style={{
                    padding: '1.05rem 1.3rem',
                    fontSize: '.9rem',
                    color: '#4FE3ED',
                    fontFamily: "'Manrope', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  {c.cost}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
