import React from 'react';
import { unitEconomics } from '../data/content';

export default function UnitEconomics() {
  return (
    <section style={{ padding: '6rem 0', background: '#F7F9FA', color: '#10161C' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ maxWidth: '680px', marginBottom: '2.8rem' }}>
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
            Unit Economics — Page 4 Projections
          </div>
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(2rem, 3.6vw, 2.9rem)',
              margin: '0 0 .8rem',
              letterSpacing: '-.01em',
              lineHeight: 1.15,
            }}
          >
            Revenue Projection (1 Court Model)
          </h2>
          <p style={{ color: '#5B6670', fontSize: '1rem', lineHeight: 1.6, margin: 0 }}>
            Demonstrates the earning capacity of a single PPX managed pickleball court operating at a conservative maturity level. Revenue is diversified across pay-and-play, memberships, and coaching academies to ensure stable cash flow.
          </p>
        </div>

        {/* Target Banner */}
        <div
          style={{
            background: 'linear-gradient(135deg, #0b1420 0%, #0E8F9C 100%)',
            color: '#F7F9FA',
            borderRadius: '16px',
            padding: '1.8rem 2.2rem',
            marginBottom: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            boxShadow: '0 15px 35px rgba(14, 143, 156, 0.25)',
          }}
        >
          <div>
            <span style={{ fontSize: '.74rem', letterSpacing: '.08em', textTransform: 'uppercase', color: '#7FEAF0', fontWeight: 700 }}>
              Benchmarked Target
            </span>
            <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 800, marginTop: '.2rem' }}>
              TARGET MONTHLY GROSS: {unitEconomics.targetGross}
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <span style={{ fontSize: '.74rem', color: '#C7D3DA' }}>Stabilized Run-Rate (Month 4+)</span>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#4FE3ED', fontFamily: "'Bricolage Grotesque', sans-serif" }}>
              {unitEconomics.stabilizedGross} / mo
            </div>
          </div>
        </div>

        {/* Breakdown Table */}
        <div
          style={{
            background: '#fff',
            border: '1px solid rgba(15, 143, 156, 0.2)',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 12px 35px rgba(11, 20, 32, 0.04)',
            marginBottom: '2.5rem',
          }}
        >
          <div style={{ overflowX: 'auto' }}>
            <div style={{ minWidth: '600px' }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1.5fr 2fr 1.2fr',
                  background: '#0b1420',
                  color: '#7FEAF0',
                  padding: '1.1rem 1.4rem',
                  fontSize: '.72rem',
                  letterSpacing: '.08em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                }}
              >
                <div>Revenue Stream</div>
                <div>Assumption Matrix</div>
                <div style={{ textAlign: 'right' }}>Projected Revenue (INR)</div>
              </div>

              {unitEconomics.streams.map((stream, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1.5fr 2fr 1.2fr',
                    padding: '1.1rem 1.4rem',
                    borderBottom: '1px solid rgba(16, 22, 28, 0.07)',
                    background: idx % 2 === 0 ? '#fff' : '#FAFCFD',
                    alignItems: 'center',
                  }}
                >
                  <div style={{ fontWeight: 700, color: '#10161C', fontSize: '.92rem' }}>
                    {stream.name}
                  </div>
                  <div style={{ color: '#5B6670', fontSize: '.88rem' }}>
                    {stream.matrix}
                  </div>
                  <div style={{ textAlign: 'right', fontWeight: 700, color: '#0E8F9C', fontSize: '.95rem' }}>
                    {stream.monthly}
                  </div>
                </div>
              ))}

              {/* Total Row */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '3.5fr 1.2fr',
                  padding: '1.2rem 1.4rem',
                  background: '#ECF8F9',
                  borderTop: '2px solid rgba(14, 143, 156, 0.3)',
                  alignItems: 'center',
                }}
              >
                <div style={{ fontWeight: 800, color: '#10161C', fontSize: '1rem' }}>
                  Gross Estimated Revenue / Month (Stabilized Month 4 onwards)
                </div>
                <div style={{ textAlign: 'right', fontWeight: 800, color: '#0E8F9C', fontSize: '1.25rem', fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                  {unitEconomics.stabilizedGross}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 3 Summary Metric Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
            marginBottom: '1.5rem',
          }}
        >
          {/* OpEx Card */}
          <div
            style={{
              background: '#0b1420',
              border: '1px solid rgba(79, 227, 237, 0.25)',
              borderRadius: '16px',
              padding: '2rem',
              color: '#F7F9FA',
              textAlign: 'center',
            }}
          >
            <span style={{ fontSize: '.72rem', color: '#7FEAF0', textTransform: 'uppercase', letterSpacing: '.08em', fontWeight: 700 }}>
              Est. OpEx / Month
            </span>
            <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '2.5rem', fontWeight: 800, color: '#F7F9FA', margin: '.4rem 0' }}>
              {unitEconomics.estOpex}
            </div>
            <p style={{ margin: 0, fontSize: '.82rem', color: '#9FB2BC' }}>
              (Manpower, Power, App, Maintenance)
            </p>
          </div>

          {/* Net Profit Card */}
          <div
            style={{
              background: '#0b1420',
              border: '1.5px solid #4FE3ED',
              borderRadius: '16px',
              padding: '2rem',
              color: '#F7F9FA',
              textAlign: 'center',
              boxShadow: '0 15px 35px rgba(79, 227, 237, 0.15)',
            }}
          >
            <span style={{ fontSize: '.72rem', color: '#7FEAF0', textTransform: 'uppercase', letterSpacing: '.08em', fontWeight: 700 }}>
              Net Operating Profit
            </span>
            <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '2.5rem', fontWeight: 800, color: '#4FE3ED', margin: '.4rem 0' }}>
              {unitEconomics.netProfit}
            </div>
            <p style={{ margin: 0, fontSize: '.82rem', color: '#9FB2BC' }}>
              Before Franchise / PPX Split
            </p>
          </div>

          {/* Payback Period Card */}
          <div
            style={{
              background: '#0b1420',
              border: '1px solid rgba(79, 227, 237, 0.25)',
              borderRadius: '16px',
              padding: '2rem',
              color: '#F7F9FA',
              textAlign: 'center',
            }}
          >
            <span style={{ fontSize: '.72rem', color: '#7FEAF0', textTransform: 'uppercase', letterSpacing: '.08em', fontWeight: 700 }}>
              Estimated Payback
            </span>
            <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '2.5rem', fontWeight: 800, color: '#25D366', margin: '.4rem 0' }}>
              {unitEconomics.payback}
            </div>
            <p style={{ margin: 0, fontSize: '.82rem', color: '#9FB2BC' }}>
              Months Payback Period
            </p>
          </div>
        </div>

        <p style={{ fontSize: '.74rem', color: '#8B98A1', margin: 0, lineHeight: 1.5, textAlign: 'center' }}>
          *Forward-looking statements based on market averages and 6-7 hours of daily court utilization. Actual performance will depend on location tier, local market adoption, and ground realities. Land lease costs are excluded from the OpEx assumption.
        </p>
      </div>
    </section>
  );
}
