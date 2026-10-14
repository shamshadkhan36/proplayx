import React from 'react';
import { sports } from '../data/content';

export default function About() {
  return (
    <section id="about" style={{ padding: '6.5rem 0', background: '#F7F9FA' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ maxWidth: '620px', marginBottom: '3.2rem' }}>
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
              fontWeight: 600,
            }}
          >
            <span
              style={{
                width: '22px',
                height: '1px',
                background: '#0E8F9C',
                display: 'inline-block',
              }}
            ></span>
            Baseline — Who We Are
          </div>
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(1.9rem, 3.4vw, 2.7rem)',
              margin: 0,
              color: '#10161C',
              letterSpacing: '-.01em',
              lineHeight: 1.15,
            }}
          >
            Infrastructure and operations, under one roof.
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '1.6rem',
          }}
        >
          {/* Card 1 - Infrastructure */}
          <div
            style={{
              background: '#fff',
              border: '1px solid rgba(15, 143, 156, 0.18)',
              borderRadius: '18px',
              padding: '2.3rem',
              boxShadow: '0 10px 30px rgba(11, 20, 32, 0.03)',
            }}
          >
            <h3
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: '1.3rem',
                margin: '0 0 .8rem',
                color: '#10161C',
                fontWeight: 700,
              }}
            >
              Pioneering sports infrastructure across India
            </h3>
            <p
              style={{
                color: '#5B6670',
                fontSize: '.96rem',
                lineHeight: 1.7,
                margin: '0 0 1.5rem',
              }}
            >
              ProPlayX designs, constructs and operates world-class multi-sport facilities — from
              indoor badminton academies to outdoor pickleball and padel arenas — engineered to global standards.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem' }}>
              {sports.map((s, idx) => (
                <span
                  key={idx}
                  style={{
                    background: '#ECF0F3',
                    color: '#0b1420',
                    border: '1px solid rgba(15, 143, 156, 0.25)',
                    padding: '.4rem .9rem',
                    borderRadius: '30px',
                    fontSize: '.78rem',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '.4rem',
                  }}
                >
                  <i className={s.icon} style={{ color: '#0E8F9C' }}></i> {s.name}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2 - Operations */}
          <div
            style={{
              background: '#0b1420',
              border: '1px solid rgba(79, 227, 237, 0.25)',
              borderRadius: '18px',
              padding: '2.3rem',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
            }}
          >
            <h3
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: '1.3rem',
                margin: '0 0 .8rem',
                color: '#F7F9FA',
                fontWeight: 700,
              }}
            >
              A complete operations partner
            </h3>
            <p
              style={{
                color: '#9FB2BC',
                fontSize: '.96rem',
                lineHeight: 1.7,
                margin: '0 0 1rem',
              }}
            >
              Setting up sports infra is half the job — running it profitably is the rest. We take
              charge of daily execution end to end:
            </p>
            <ul
              style={{
                color: '#9FB2BC',
                fontSize: '.92rem',
                paddingLeft: '1.2rem',
                margin: 0,
                lineHeight: 1.9,
              }}
            >
              <li>App-based slot booking &amp; check-in</li>
              <li>Coaching programs, tournaments &amp; corporate rentals</li>
              <li>Standardized court &amp; equipment upkeep</li>
              <li>Campaigns built to maximize utilization</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
