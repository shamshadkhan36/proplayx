import React from 'react';
import { roadmap } from '../data/content';

export default function Roadmap() {
  return (
    <section style={{ padding: '6rem 0', background: '#0b1420', color: '#F7F9FA' }}>
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
            2026 – 2028
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
            Roadmap
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2rem',
          }}
        >
          {roadmap.map((r, idx) => (
            <div
              key={idx}
              style={{
                borderLeft: '2px solid rgba(79, 227, 237, 0.35)',
                paddingLeft: '1.2rem',
              }}
            >
              <div
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: '.72rem',
                  letterSpacing: '.08em',
                  color: '#4FE3ED',
                  marginBottom: '.4rem',
                  fontWeight: 700,
                }}
              >
                {r.yr}
              </div>
              <h4
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontSize: '1.05rem',
                  margin: '0 0 .5rem',
                  color: '#F7F9FA',
                  fontWeight: 700,
                }}
              >
                {r.title}
              </h4>
              <p
                style={{
                  color: '#9FB2BC',
                  fontSize: '.9rem',
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
