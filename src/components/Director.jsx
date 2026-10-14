import React from 'react';
import { contactInfo } from '../data/content';

export default function Director() {
  const { director } = contactInfo;

  return (
    <section style={{ padding: '6.5rem 0', background: '#F7F9FA' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ maxWidth: '620px', margin: '0 auto 3rem', textAlign: 'center' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
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
            Leadership
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
            Director profile
          </h2>
        </div>

        <div
          style={{
            maxWidth: '860px',
            margin: '0 auto',
            background: '#fff',
            border: '1px solid rgba(15, 143, 156, 0.18)',
            borderRadius: '18px',
            padding: '2.6rem',
            display: 'flex',
            gap: '2.2rem',
            alignItems: 'center',
            flexWrap: 'wrap',
            boxShadow: '0 20px 50px rgba(11, 20, 32, 0.08)',
          }}
        >
          <div
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              background: 'linear-gradient(160deg, #0b1420, #05080c)',
              color: '#7FEAF0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontSize: '1.6rem',
              fontWeight: 700,
              flexShrink: 0,
              border: '1px solid rgba(79, 227, 237, 0.35)',
            }}
          >
            {director.initials}
          </div>

          <div style={{ flex: '1 1 300px' }}>
            <h3
              style={{
                margin: '0 0 .2rem',
                fontFamily: "'Bricolage Grotesque', sans-serif",
                color: '#10161C',
                fontSize: '1.4rem',
                fontWeight: 700,
              }}
            >
              {director.name}
            </h3>
            <div
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: '.74rem',
                letterSpacing: '.06em',
                color: '#0E8F9C',
                marginBottom: '.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
              }}
            >
              {director.role}
            </div>
            <p
              style={{
                color: '#5B6670',
                margin: 0,
                fontSize: '.94rem',
                lineHeight: 1.7,
              }}
            >
              {director.bio}
            </p>
            <a
              href={director.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '.5rem',
                marginTop: '1rem',
                color: '#10161C',
                fontWeight: 700,
                fontSize: '.85rem',
                borderBottom: '1.5px solid #10161C',
                paddingBottom: '2px',
              }}
            >
              <i className="fab fa-linkedin" style={{ color: '#0A66C2' }}></i> Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
