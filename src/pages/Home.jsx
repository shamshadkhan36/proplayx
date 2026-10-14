import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SportsStrip from '../components/SportsStrip';
import GearShowcase from '../components/GearShowcase';
import GearStudio from '../components/GearStudio';
import { sports } from '../data/content';

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
              We engineer world-class courts. Then we run them to perfection.
            </h2>
            <p style={{ color: '#5B6670', fontSize: '1.05rem', lineHeight: 1.7, margin: 0 }}>
              ProPlayX is India's leading sports infrastructure and club operations ecosystem. We solve both halves of the sports facility equation: building tournament-grade courts and running active, staffed, and profitable venues.
            </p>
          </div>

          {/* Dual Pillars: Infrastructure + Operations */}
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
                  Pillar 01 — Construction
                </span>
                <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '1.5rem', margin: '.4rem 0 1rem', color: '#10161C' }}>
                  Turnkey Court Construction
                </h3>
                <p style={{ color: '#5B6670', fontSize: '.95rem', lineHeight: 1.7, margin: '0 0 1.5rem' }}>
                  From raw land, terrace rooftops, and warehouses to finished tournament courts. We design and build regulation pickleball, panoramic padel, badminton, and multi-sport turfs adhering strictly to USAPA, FIP, and BWF standards.
                </p>

                <ul style={{ color: '#5B6670', fontSize: '.9rem', paddingLeft: '1.2rem', margin: '0 0 1.8rem', lineHeight: 1.8 }}>
                  <li>Civil sub-base and drainage engineering</li>
                  <li>8-layer cushion acrylic &amp; 12mm toughened glass enclosures</li>
                  <li>Tournament LED floodlighting (500 Lux) &amp; weatherproofing</li>
                  <li>Fast turnaround: 18 to 35 days delivery</li>
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
                }}
              >
                <span>View Court Costing &amp; Construction Specs</span>
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
                  Pillar 02 — Operations
                </span>
                <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '1.5rem', margin: '.4rem 0 1rem', color: '#F7F9FA' }}>
                  Club &amp; Venue Management
                </h3>
                <p style={{ color: '#9FB2BC', fontSize: '.95rem', lineHeight: 1.7, margin: '0 0 1.5rem' }}>
                  Setting up a court is half the job — keeping it fully utilized, staffed, and professionally run is the rest. We manage day-to-day execution end to end through the Blu Racquet Club platform.
                </p>

                <ul style={{ color: '#9FB2BC', fontSize: '.9rem', paddingLeft: '1.2rem', margin: '0 0 1.8rem', lineHeight: 1.8 }}>
                  <li>Blu Racquet Club app for slot bookings &amp; automated check-in</li>
                  <li>Certified coaching academies, open plays, and corporate leagues</li>
                  <li>Standardized daily court maintenance &amp; gear upkeep</li>
                  <li>Targeted player marketing to maximize venue occupancy</li>
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
                }}
              >
                <span>Explore Blu Racquet Club Franchise Options</span>
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
              {/* Box 1 */}
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
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#0E8F9C';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(16,22,28,0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ color: '#0E8F9C', fontSize: '1.3rem' }}>
                  <i className="fas fa-store"></i>
                </div>
                <h4 style={{ margin: 0, fontSize: '1.05rem', color: '#10161C', fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                  Franchise Options
                </h4>
                <p style={{ margin: 0, fontSize: '.84rem', color: '#5B6670', lineHeight: 1.5 }}>
                  FOCO &amp; FOFO partnership models, Blu Racquet Club rollout, and 2026-2028 roadmap.
                </p>
                <span style={{ fontSize: '.8rem', color: '#0E8F9C', fontWeight: 800, marginTop: '.5rem' }}>
                  Explore Models &#8594;
                </span>
              </Link>

              {/* Box 2 */}
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
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#0E8F9C';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(16,22,28,0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ color: '#0E8F9C', fontSize: '1.3rem' }}>
                  <i className="fas fa-ruler-combined"></i>
                </div>
                <h4 style={{ margin: 0, fontSize: '1.05rem', color: '#10161C', fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                  Court Costing &amp; Construction
                </h4>
                <p style={{ margin: 0, fontSize: '.84rem', color: '#5B6670', lineHeight: 1.5 }}>
                  Pricing spec sheet, interactive SVG Design Studio, and step-by-step engineering timeline.
                </p>
                <span style={{ fontSize: '.8rem', color: '#0E8F9C', fontWeight: 800, marginTop: '.5rem' }}>
                  Design &amp; Cost &#8594;
                </span>
              </Link>

              {/* Box 3 */}
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
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#0E8F9C';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(16,22,28,0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
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

              {/* Box 4 */}
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
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#0E8F9C';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(16,22,28,0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
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
              }}
            >
              Get in Touch with ProPlayX
            </Link>
            <Link
              to="/construction"
              style={{
                background: 'transparent',
                color: '#F7F9FA',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                padding: '.9rem 2rem',
                borderRadius: '4px',
                fontWeight: 700,
                fontSize: '.9rem',
              }}
            >
              Explore Court Costing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
