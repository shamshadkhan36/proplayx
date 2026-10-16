import React from 'react';
import { focoAdvantage, commercialModels, contactInfo } from '../data/content';

export default function Franchise() {
  return (
    <section id="franchise" style={{ padding: '6.5rem 0', background: '#F7F9FA', color: '#10161C' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Header */}
        <div style={{ maxWidth: '680px', marginBottom: '3.5rem' }}>
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
              fontWeight: 700,
            }}
          >
            <span style={{ width: '22px', height: '1px', background: '#0E8F9C', display: 'inline-block' }}></span>
            The FOCO Advantage — Franchise Owned, Company Operated
          </div>
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(2rem, 3.6vw, 3rem)',
              margin: '0 0 1rem',
              color: '#10161C',
              letterSpacing: '-.01em',
              lineHeight: 1.15,
            }}
          >
            You own the asset; we drive the performance.
          </h2>
          <p style={{ color: '#5B6670', fontSize: '1.05rem', lineHeight: 1.7, margin: 0 }}>
            ProPlayX (PPX) introduces a seamless partnership opportunity in the rapidly expanding racket sports market. Investors deploy capital into premium sporting assets while PPX takes 100% responsibility for day-to-day operations, technology integration, and player acquisition.
          </p>
        </div>

        {/* 4 Pillars of FOCO Advantage (Page 1) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '1.6rem',
            marginBottom: '4.5rem',
          }}
        >
          {focoAdvantage.map((card, idx) => (
            <div
              key={idx}
              style={{
                background: '#fff',
                border: '1px solid rgba(15, 143, 156, 0.2)',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 10px 25px rgba(11, 20, 32, 0.03)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    background: '#ECF8F9',
                    color: '#0E8F9C',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    marginBottom: '1.2rem',
                  }}
                >
                  <i className={card.icon}></i>
                </div>
                <h3
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontSize: '1.25rem',
                    margin: '0 0 .7rem',
                    color: '#10161C',
                    fontWeight: 700,
                  }}
                >
                  {card.title}
                </h3>
                <p style={{ color: '#5B6670', fontSize: '.92rem', lineHeight: 1.65, margin: 0 }}>
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Commercial Models (Page 3 of Proposal) */}
        <div style={{ maxWidth: '680px', marginBottom: '2.5rem' }}>
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
              fontWeight: 700,
            }}
          >
            <span style={{ width: '22px', height: '1px', background: '#0E8F9C', display: 'inline-block' }}></span>
            Commercial Structures — Page 3
          </div>
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(1.9rem, 3.4vw, 2.7rem)',
              margin: '0 0 1rem',
              color: '#10161C',
              letterSpacing: '-.01em',
              lineHeight: 1.15,
            }}
          >
            Two flexible commercial structures
          </h2>
          <p style={{ color: '#5B6670', fontSize: '1rem', lineHeight: 1.6, margin: 0 }}>
            Designed to align with the franchise owner’s strategy and risk appetite. Both models ensure PPX is incentivized to maximize facility revenue.
          </p>
        </div>

        {/* 2 Commercial Model Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2rem',
            alignItems: 'stretch',
            marginBottom: '3rem',
          }}
        >
          {commercialModels.map((model) => (
            <div
              key={model.id}
              style={{
                background: model.id === 'option-a' ? 'linear-gradient(160deg, #0b1420 0%, #05080c 100%)' : '#fff',
                color: model.id === 'option-a' ? '#F7F9FA' : '#10161C',
                border: model.id === 'option-a' ? '1.5px solid #4FE3ED' : '1px solid rgba(15, 143, 156, 0.25)',
                borderRadius: '20px',
                padding: '2.6rem',
                boxShadow: '0 20px 45px rgba(0, 0, 0, 0.12)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                  <span
                    style={{
                      background: model.id === 'option-a' ? 'rgba(79, 227, 237, 0.15)' : '#ECF8F9',
                      color: model.id === 'option-a' ? '#7FEAF0' : '#0E8F9C',
                      fontSize: '.68rem',
                      fontWeight: 800,
                      letterSpacing: '.08em',
                      textTransform: 'uppercase',
                      padding: '.35rem .85rem',
                      borderRadius: '20px',
                    }}
                  >
                    {model.badge}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                      fontSize: '1.6rem',
                      fontWeight: 800,
                      color: model.id === 'option-a' ? '#4FE3ED' : '#0E8F9C',
                    }}
                  >
                    {model.split}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontSize: '1.5rem',
                    margin: '0 0 .8rem',
                    color: model.id === 'option-a' ? '#F7F9FA' : '#10161C',
                  }}
                >
                  {model.title}
                </h3>

                <p
                  style={{
                    color: model.id === 'option-a' ? '#9FB2BC' : '#5B6670',
                    fontSize: '.94rem',
                    lineHeight: 1.6,
                    margin: '0 0 1.6rem',
                  }}
                >
                  {model.highlight}
                </p>

                <div
                  style={{
                    borderTop: model.id === 'option-a' ? '1px solid rgba(79, 227, 237, 0.15)' : '1px solid rgba(16, 22, 28, 0.1)',
                    paddingTop: '1.4rem',
                    marginBottom: '1.8rem',
                  }}
                >
                  <span style={{ fontSize: '.72rem', textTransform: 'uppercase', letterSpacing: '.06em', color: model.id === 'option-a' ? '#7FEAF0' : '#0E8F9C', fontWeight: 700, display: 'block', marginBottom: '.8rem' }}>
                    Key Commercial Terms:
                  </span>
                  <ul
                    style={{
                      margin: 0,
                      paddingLeft: '1.2rem',
                      fontSize: '.9rem',
                      lineHeight: 1.8,
                      color: model.id === 'option-a' ? '#C7D3DA' : '#5B6670',
                    }}
                  >
                    {model.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <a
                href="#contact"
                style={{
                  background: model.id === 'option-a' ? '#4FE3ED' : '#0b1420',
                  color: model.id === 'option-a' ? '#060a0f' : '#4FE3ED',
                  padding: '.85rem 1.4rem',
                  borderRadius: '4px',
                  fontWeight: 800,
                  fontSize: '.85rem',
                  textAlign: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '.5rem',
                  textDecoration: 'none',
                }}
              >
                <span>Select {model.badge} Structure</span>
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
