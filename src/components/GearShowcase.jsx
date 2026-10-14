import React from 'react';

export default function GearShowcase() {
  return (
    <section style={{ padding: 0, background: '#0b1420' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          alignItems: 'stretch',
        }}
      >
        <div style={{ position: 'relative', aspectRatio: '16/11', overflow: 'hidden' }}>
          <img
            src="/uploads/1.jpg"
            alt="Pro-Play X pickleball"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>

        <div
          style={{
            background: '#060a0f',
            color: '#F7F9FA',
            padding: '2.6rem 2.4rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '.5rem',
              fontFamily: "'Manrope', sans-serif",
              fontSize: '.62rem',
              letterSpacing: '.12em',
              color: '#7FEAF0',
              marginBottom: '.8rem',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            <span
              style={{
                width: '16px',
                height: '1px',
                background: '#4FE3ED',
                display: 'inline-block',
              }}
            ></span>
            Signature Gear
          </div>
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(1.2rem, 1.9vw, 1.5rem)',
              margin: '0 0 .7rem',
              letterSpacing: '-.01em',
              lineHeight: 1.25,
            }}
          >
            Pro-Play X paddles &amp; balls, built for the academy floor.
          </h2>
          <p
            style={{
              color: '#9FB2BC',
              fontSize: '.82rem',
              lineHeight: 1.65,
              margin: 0,
              maxWidth: '400px',
            }}
          >
            Carbon-fibre hybrid paddles and USAPA-spec balls, issued across every ProPlayX and Blu
            Racquet Club court — the same gear our coaches train on.
          </p>
        </div>

        <div style={{ position: 'relative', aspectRatio: '16/11', overflow: 'hidden' }}>
          <img
            src="/uploads/WhatsApp%20Image%202026-08-17%20at%207.50.35%20AM.jpeg"
            alt="Aerial view of ProPlayX courts"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
      </div>
    </section>
  );
}
