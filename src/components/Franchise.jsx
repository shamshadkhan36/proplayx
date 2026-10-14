import React from 'react';

export default function Franchise() {
  return (
    <section id="franchise" style={{ padding: '6.5rem 0', background: '#F7F9FA' }}>
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
            Center Line — Own a Club
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
            The Blu Racquet Club concept
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '1.6rem',
            alignItems: 'stretch',
          }}
        >
          {/* Blu Racquet Club Concept Card */}
          <div
            style={{
              background: 'linear-gradient(160deg, #0b1420 0%, #05080c 100%)',
              borderRadius: '18px',
              padding: '2.6rem',
              color: '#F7F9FA',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 20px 45px rgba(0, 0, 0, 0.25)',
              border: '1px solid rgba(79, 227, 237, 0.25)',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                border: '1px solid #4FE3ED',
                color: '#7FEAF0',
                fontFamily: "'Manrope', sans-serif",
                fontSize: '.6rem',
                letterSpacing: '.1em',
                padding: '.3rem .7rem',
                borderRadius: '20px',
                marginBottom: '1.2rem',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              New Concept
            </span>
            <h3
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: '1.4rem',
                margin: '0 0 .9rem',
                color: '#F7F9FA',
                fontWeight: 700,
              }}
            >
              Blu Racquet Club
            </h3>
            <p
              style={{
                color: '#9FB2BC',
                fontSize: '.95rem',
                lineHeight: 1.7,
                margin: '0 0 1rem',
              }}
            >
              ProPlayX's flagship multi-racket destination — padel, badminton and pickleball under
              one premium lifestyle brand.
            </p>
            <p
              style={{
                color: '#9FB2BC',
                fontSize: '.95rem',
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Franchise opportunities are open across major metros and tier-2 cities, with full
              operational handholding from day one.
            </p>
          </div>

          {/* Investment Models Card */}
          <div
            style={{
              background: '#fff',
              border: '1px solid rgba(15, 143, 156, 0.18)',
              borderRadius: '18px',
              padding: '2.6rem',
              boxShadow: '0 10px 30px rgba(11, 20, 32, 0.03)',
            }}
          >
            <h3
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: '1.3rem',
                margin: '0 0 1.3rem',
                color: '#10161C',
                fontWeight: 700,
              }}
            >
              Two ways to invest
            </h3>
            <div
              style={{
                borderLeft: '2px solid rgba(15, 143, 156, 0.3)',
                paddingLeft: '1.1rem',
                marginBottom: '1.4rem',
              }}
            >
              <h4
                style={{
                  fontSize: '.92rem',
                  color: '#0E8F9C',
                  fontFamily: "'Manrope', sans-serif",
                  letterSpacing: '.03em',
                  margin: '0 0 .4rem',
                  fontWeight: 700,
                }}
              >
                FOCO — Franchise Owned, Company Operated
              </h4>
              <p
                style={{
                  fontSize: '.9rem',
                  color: '#5B6670',
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                You fund the court infrastructure. ProPlayX handles complete day-to-day operations, coaching programs, marketing, and staff management.
              </p>
            </div>
            <div
              style={{
                borderLeft: '2px solid rgba(15, 143, 156, 0.3)',
                paddingLeft: '1.1rem',
              }}
            >
              <h4
                style={{
                  fontSize: '.92rem',
                  color: '#0E8F9C',
                  fontFamily: "'Manrope', sans-serif",
                  letterSpacing: '.03em',
                  margin: '0 0 .4rem',
                  fontWeight: 700,
                }}
              >
                FOFO — Franchise Owned, Franchise Operated
              </h4>
              <p
                style={{
                  fontSize: '.9rem',
                  color: '#5B6670',
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                You own and run the facility, backed by our vendor network, booking software, staff
                training and ongoing guidance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
