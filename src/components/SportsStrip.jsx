import React from 'react';
import { sports } from '../data/content';

export default function SportsStrip() {
  return (
    <section
      style={{
        background: '#0b1420',
        padding: '1.8rem 0',
        borderBottom: '1px solid rgba(79, 227, 237, 0.12)',
      }}
    >
      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'flex',
          gap: '2.4rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {sports.map((s, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '.6rem',
              color: '#9FB2BC',
              fontSize: '.92rem',
              fontWeight: 600,
            }}
          >
            <i
              className={s.icon}
              style={{
                color: '#4FE3ED',
                fontSize: '1.05rem',
              }}
            ></i>
            <span>{s.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
