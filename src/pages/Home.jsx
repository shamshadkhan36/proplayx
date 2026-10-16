import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SportsStrip from '../components/SportsStrip';
import GearShowcase from '../components/GearShowcase';
import GearStudio from '../components/GearStudio';
import { focoAdvantage, contactInfo } from '../data/content';

export default function Home() {
  return (
    <div>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Sports Strip */}
      <SportsStrip />

      {/* 3. Main Section: What ProPlayX Does */}
      <section id="what-we-do" style={{ padding: '6.5rem 0', background: '#F7F9FA' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem' }}>
          {/* Header */}
          <div style={{ maxWidth: '720px', marginBottom: '3.5rem' }}>
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
              What ProPlayX Does
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
              ProPlayX (PPX) introduces a seamless, high-performance sports infrastructure management ecosystem. We combine investor capital with PPX's deep domain expertise, proprietary booking app, and established event networks to maximize court occupancy from day one.
            </p>
          </div>

          {/* 4 Pillars of the PPX Advantage from the Proposal */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.6rem',
              marginBottom: '3.5rem',
            }}
          >
            {focoAdvantage.map((card, idx) => (
              <div
                key={idx}
                style={{
                  background: '#fff',
                  border: '1px solid rgba(15, 143, 156, 0.2)',
                  borderRadius: '16px',
                  padding: '1.8rem',
                  boxShadow: '0 10px 25px rgba(11, 20, 32, 0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
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
                      fontSize: '1.18rem',
                      margin: '0 0 .6rem',
                      color: '#10161C',
                      fontWeight: 700,
                    }}
                  >
                    {card.title}
                  </h3>
                  <p style={{ color: '#5B6670', fontSize: '.88rem', lineHeight: 1.6, margin: 0 }}>
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Dual Pillars: Turnkey Construction + Complete Operations */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '2rem',
              marginBottom: '3.5rem',
            }}
          >
            {/* Pillar 1: Turnkey Construction */}
            <div
              style={{
                background: '#fff',
                border: '1px solid rgba(15, 143, 156, 0.2)',
                borderRadius: '20px',
                padding: '2.5rem',
                boxShadow: '0 15px 40px rgba(11, 20, 32, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    background: '#ECF8F9',
                    color: '#0E8F9C',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.4rem',
                    marginBottom: '1.5rem',
                  }}
                >
                  <i className="fas fa-hammer"></i>
                </div>
                <span style={{ fontSize: '.72rem', color: '#0E8F9C', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '.08em' }}>
                  Pillar 01 — Construction &amp; Engineering
                </span>
                <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '1.5rem', margin: '.4rem 0 1rem', color: '#10161C' }}>
                  Standardized Turnkey Buildout
                </h3>
                <p style={{ color: '#5B6670', fontSize: '.95rem', lineHeight: 1.7, margin: '0 0 1.5rem' }}>
                  From civil works and asphalt base laying (Rs 120/sq ft) to installing specialized 5-layer synthetic surfaces (Rs 55/sq ft), customized 20ft fencing nets, and professional 500-lux sports lighting. Single court setup starts at ₹4,89,000.
                </p>

                <ul style={{ color: '#5B6670', fontSize: '.9rem', paddingLeft: '1.2rem', margin: '0 0 1.8rem', lineHeight: 1.8 }}>
                  <li>Asphalt base preparation &amp; slope drainage</li>
                  <li>Specialized 5-layer synthetic acrylic surface</li>
                  <li>Perimeter safety netting up to 20ft height</li>
                  <li>Fast turnaround: 18 to 35 days full handover</li>
                </ul>
              </div>

              <Link
                to="/construction"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '.5rem',
                  color: '#0E8F9C',
                  fontWeight: 800,
                  fontSize: '.9rem',
                  textDecoration: 'none',
                }}
              >
                <span>View Single Court Costing Breakdown (₹4.89L)</span>
                <i className="fas fa-arrow-right"></i>
              </Link>
            </div>

            {/* Pillar 2: Complete Operations */}
            <div
              style={{
                background: '#0b1420',
                border: '1px solid rgba(79, 227, 237, 0.25)',
                borderRadius: '20px',
                padding: '2.5rem',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.25)',
                color: '#F7F9FA',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    background: 'rgba(79, 227, 237, 0.15)',
                    color: '#4FE3ED',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.4rem',
                    marginBottom: '1.5rem',
                  }}
                >
                  <i className="fas fa-trophy"></i>
                </div>
                <span style={{ fontSize: '.72rem', color: '#7FEAF0', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '.08em' }}>
                  Pillar 02 — FOCO Operations
                </span>
                <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '1.5rem', margin: '.4rem 0 1rem', color: '#F7F9FA' }}>
                  Comprehensive Facility Management
                </h3>
                <p style={{ color: '#9FB2BC', fontSize: '.95rem', lineHeight: 1.7, margin: '0 0 1.5rem' }}>
                  Under the FOCO agreement, PPX acts as your full operational partner. We handle hiring, court managers, coaching programs, walk-ins, memberships, and digital marketing, while providing monthly P&amp;L reports.
                </p>

                <ul style={{ color: '#9FB2BC', fontSize: '.9rem', paddingLeft: '1.2rem', margin: '0 0 1.8rem', lineHeight: 1.8 }}>
                  <li>Integrated PPX Booking App with zero double-bookings</li>
                  <li>Manpower recruitment &amp; certified coaching staff</li>
                  <li>Centralized digital marketing, local SEO, and corporate events</li>
                  <li>Two commercial models: 75/25 Profit Share or 10% Top-Line Fee</li>
                </ul>
              </div>

              <Link
                to="/franchise"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '.5rem',
                  color: '#4FE3ED',
                  fontWeight: 800,
                  fontSize: '.9rem',
                  textDecoration: 'none',
                }}
              >
                <span>Explore FOCO Commercial Options</span>
                <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>

          {/* Quick Page Directory Grid */}
          <div
            style={{
              background: '#fff',
              border: '1px solid rgba(16, 22, 28, 0.1)',
              borderRadius: '20px',
              padding: '2.5rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
            }}
          >
            <h3
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: '1.35rem',
                margin: '0 0 1.8rem',
                color: '#10161C',
                textAlign: 'center',
              }}
            >
              Explore ProPlayX by Section
            </h3>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '1.5rem',
              }}
            >
              <Link
                to="/franchise"
                style={{
                  background: '#F7F9FA',
                  border: '1px solid rgba(16,22,28,0.08)',
                  borderRadius: '14px',
                  padding: '1.6rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '.5rem',
                  textDecoration: 'none',
                }}
              >
                <div style={{ color: '#0E8F9C', fontSize: '1.3rem' }}>
                  <i className="fas fa-store"></i>
                </div>
                <h4 style={{ margin: 0, fontSize: '1.05rem', color: '#10161C', fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                  Franchise Options (FOCO)
                </h4>
                <p style={{ margin: 0, fontSize: '.84rem', color: '#5B6670', lineHeight: 1.5 }}>
                  Option A (75/25 profit share) vs Option B (10% fee), unit economics, and 2026-2028 roadmap.
                </p>
                <span style={{ fontSize: '.8rem', color: '#0E8F9C', fontWeight: 800, marginTop: '.5rem' }}>
                  Explore Models &#8594;
                </span>
              </Link>

              <Link
                to="/construction"
                style={{
                  background: '#F7F9FA',
                  border: '1px solid rgba(16,22,28,0.08)',
                  borderRadius: '14px',
                  padding: '1.6rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '.5rem',
                  textDecoration: 'none',
                }}
              >
                <div style={{ color: '#0E8F9C', fontSize: '1.3rem' }}>
                  <i className="fas fa-ruler-combined"></i>
                </div>
                <h4 style={{ margin: 0, fontSize: '1.05rem', color: '#10161C', fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                  Court Costing (₹4.89L Base)
                </h4>
                <p style={{ margin: 0, fontSize: '.84rem', color: '#5B6670', lineHeight: 1.5 }}>
                  Official single court costing spec sheet, interactive SVG Design Studio, and process.
                </p>
                <span style={{ fontSize: '.8rem', color: '#0E8F9C', fontWeight: 800, marginTop: '.5rem' }}>
                  Design &amp; Cost &#8594;
                </span>
              </Link>

              <Link
                to="/about"
                style={{
                  background: '#F7F9FA',
                  border: '1px solid rgba(16,22,28,0.08)',
                  borderRadius: '14px',
                  padding: '1.6rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '.5rem',
                  textDecoration: 'none',
                }}
              >
                <div style={{ color: '#0E8F9C', fontSize: '1.3rem' }}>
                  <i className="fas fa-users"></i>
                </div>
                <h4 style={{ margin: 0, fontSize: '1.05rem', color: '#10161C', fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                  About Us &amp; Centers
                </h4>
                <p style={{ margin: 0, fontSize: '.84rem', color: '#5B6670', lineHeight: 1.5 }}>
                  Director profile (Samrat S Kapur), 5 live sports centers, and technical FAQs.
                </p>
                <span style={{ fontSize: '.8rem', color: '#0E8F9C', fontWeight: 800, marginTop: '.5rem' }}>
                  Meet the Team &#8594;
                </span>
              </Link>

              <Link
                to="/contact"
                style={{
                  background: '#F7F9FA',
                  border: '1px solid rgba(16,22,28,0.08)',
                  borderRadius: '14px',
                  padding: '1.6rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '.5rem',
                  textDecoration: 'none',
                }}
              >
                <div style={{ color: '#0E8F9C', fontSize: '1.3rem' }}>
                  <i className="fas fa-envelope-open-text"></i>
                </div>
                <h4 style={{ margin: 0, fontSize: '1.05rem', color: '#10161C', fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                  Contact Us
                </h4>
                <p style={{ margin: 0, fontSize: '.84rem', color: '#5B6670', lineHeight: 1.5 }}>
                  Inquire for land conversion, court builds, or franchise setup. Fast 24-hr response.
                </p>
                <span style={{ fontSize: '.8rem', color: '#0E8F9C', fontWeight: 800, marginTop: '.5rem' }}>
                  Send Inquiry &#8594;
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Gear Showcase */}
      <GearShowcase />

      {/* 5. Gear Studio Inspection */}
      <GearStudio />

      {/* 6. Call to Action Banner */}
      <section style={{ padding: '5rem 0', background: '#0b1420', color: '#F7F9FA', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1.5rem' }}>
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)',
              margin: '0 0 1rem',
              color: '#F7F9FA',
            }}
          >
            Have land, space, or want to launch a sports club?
          </h2>
          <p style={{ color: '#9FB2BC', fontSize: '1.05rem', lineHeight: 1.6, margin: '0 0 2rem' }}>
            Talk to our sports infrastructure engineers for an on-site evaluation, architectural layout, and turnkey project quote.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              to="/contact"
              style={{
                background: '#4FE3ED',
                color: '#060a0f',
                padding: '.9rem 2rem',
                borderRadius: '4px',
                fontWeight: 800,
                fontSize: '.9rem',
                letterSpacing: '.04em',
                textDecoration: 'none',
              }}
            >
              Get in Touch with ProPlayX
            </Link>
            <a
              href={contactInfo.businessPlanPdf}
              download="ProPlayX_FOCO_Business_Plan.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'transparent',
                color: '#F7F9FA',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                padding: '.9rem 2rem',
                borderRadius: '4px',
                fontWeight: 700,
                fontSize: '.9rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '.5rem',
              }}
            >
              <i className="fas fa-file-pdf"></i>
              <span>Download Business Plan PDF</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
