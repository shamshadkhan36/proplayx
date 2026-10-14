import React, { useState } from 'react';
import { playPaddlePop, playClickSound } from '../utils/audio';

const HOTSPOTS = [
  {
    id: 'edge',
    tag: 'Edge Guard',
    title: 'Thermoformed White Hyper-Edge',
    desc: 'Impact-resistant aerodynamic white molding protects against low-court ground scrapes while stabilizing the outer perimeter for consistent off-center hits.',
    x: '46%',
    y: '18%',
    stat: '24% Larger Sweet Spot',
  },
  {
    id: 'surface',
    tag: 'Hitting Surface',
    title: 'Toray T700 Raw Carbon Fiber',
    desc: 'Micro-textured friction weave delivers exceptional ball dwell time, generating 2,100+ RPM spin rates for dipping crosscourt roll dinks and high-velocity drives.',
    x: '27%',
    y: '35%',
    stat: '2,100+ RPM Spin',
  },
  {
    id: 'ball',
    tag: 'Tournament Ball',
    title: 'ProPlayX Optic-Yellow USAPA Ball',
    desc: 'Precision rotational-molded polymer with 40 drilled aerodynamic holes for ultra-true outdoor trajectory, consistent bounce height, and wind resistance.',
    x: '46%',
    y: '63%',
    stat: '40-Hole Precision USAPA',
  },
  {
    id: 'core',
    tag: 'Internal Core',
    title: 'Polypropylene Reactive Honeycomb',
    desc: 'Dense internal chamber structure absorbs heavy ball impact, eliminating elbow vibration while maintaining explosive kinetic energy transfer on overhead smashes.',
    x: '75%',
    y: '45%',
    stat: 'Dual 13mm / 16mm Spec',
  },
];

export default function GearStudio() {
  const [coreThickness, setCoreThickness] = useState('16mm'); // 16mm vs 13mm
  const [activeHotspot, setActiveHotspot] = useState(HOTSPOTS[1]);
  const [isPlayingSound, setIsPlayingSound] = useState(false);

  const handleTestPop = () => {
    setIsPlayingSound(true);
    playPaddlePop();
    setTimeout(() => setIsPlayingSound(false), 300);
  };

  return (
    <section
      id="gear-studio"
      style={{
        padding: '6.5rem 0',
        background: '#060a0f',
        color: '#F7F9FA',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(79, 227, 237, 0.12)',
        borderBottom: '1px solid rgba(79, 227, 237, 0.12)',
      }}
    >
      {/* Background ambient glow */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '20%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(79, 227, 237, 0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      ></div>

      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div style={{ maxWidth: '640px', marginBottom: '3.2rem' }}>
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
              fontWeight: 700,
            }}
          >
            <span style={{ width: '22px', height: '1px', background: '#4FE3ED', display: 'inline-block' }}></span>
            Laboratory — Signature Gear Inspection
          </div>
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(2rem, 3.6vw, 2.9rem)',
              margin: '0 0 1rem',
              letterSpacing: '-.01em',
              lineHeight: 1.15,
            }}
          >
            ProPlayX Carbon Fiber Hybrid &amp; Match Balls.
          </h2>
          <p style={{ color: '#9FB2BC', fontSize: '1rem', lineHeight: 1.6, margin: 0 }}>
            Standard tournament issue across all 29 courts. Click on any interactive marker to inspect the technical engineering.
          </p>
        </div>

        {/* Main Showcase Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2.5rem',
            alignItems: 'stretch',
          }}
        >
          {/* Left Column: High-Res Real Image with Interactive Hotspots */}
          <div
            style={{
              background: '#090e15',
              border: '1px solid rgba(79, 227, 237, 0.25)',
              borderRadius: '20px',
              padding: '1.2rem',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            {/* Top Bar with Core Thickness Switcher */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0.4rem 0.6rem 1rem',
                flexWrap: 'wrap',
                gap: '0.8rem',
              }}
            >
              <div>
                <span style={{ fontSize: '.68rem', color: '#7FEAF0', fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase' }}>
                  Interactive Product View
                </span>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#F7F9FA' }}>
                  ProPlayX Carbon Hybrid
                </div>
              </div>

              {/* Core Selector */}
              <div
                style={{
                  display: 'flex',
                  gap: '.3rem',
                  background: '#05080c',
                  padding: '.25rem',
                  borderRadius: '24px',
                  border: '1px solid rgba(79, 227, 237, 0.25)',
                }}
              >
                <button
                  onClick={() => {
                    playClickSound();
                    setCoreThickness('16mm');
                  }}
                  style={{
                    background: coreThickness === '16mm' ? '#4FE3ED' : 'transparent',
                    color: coreThickness === '16mm' ? '#060a0f' : '#8B98A1',
                    border: 'none',
                    borderRadius: '20px',
                    padding: '.35rem .85rem',
                    fontSize: '.74rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  16mm Control
                </button>
                <button
                  onClick={() => {
                    playClickSound();
                    setCoreThickness('13mm');
                  }}
                  style={{
                    background: coreThickness === '13mm' ? '#4FE3ED' : 'transparent',
                    color: coreThickness === '13mm' ? '#060a0f' : '#8B98A1',
                    border: 'none',
                    borderRadius: '20px',
                    padding: '.35rem .85rem',
                    fontSize: '.74rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  13mm Power
                </button>
              </div>
            </div>

            {/* High-Resolution Photo Container with Hotspots */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '16/10',
                borderRadius: '14px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <img
                src="/uploads/1.jpg"
                alt="ProPlayX Carbon Fiber Hybrid Paddle and Ball"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transform: isPlayingSound ? 'scale(1.02)' : 'scale(1)',
                  transition: 'transform 0.2s ease',
                }}
              />

              {/* Gradient vignette */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'radial-gradient(ellipse at center, transparent 40%, rgba(5,8,12,0.6) 100%)',
                  pointerEvents: 'none',
                }}
              ></div>

              {/* Interactive Hotspot Pins */}
              {HOTSPOTS.map((spot, idx) => {
                const isActive = activeHotspot.id === spot.id;
                return (
                  <button
                    key={spot.id}
                    onClick={() => {
                      playClickSound();
                      setActiveHotspot(spot);
                    }}
                    aria-label={spot.title}
                    style={{
                      position: 'absolute',
                      top: spot.y,
                      left: spot.x,
                      transform: 'translate(-50%, -50%)',
                      width: '34px',
                      height: '34px',
                      borderRadius: '50%',
                      background: isActive ? '#4FE3ED' : 'rgba(6, 10, 15, 0.85)',
                      border: '2px solid #4FE3ED',
                      color: isActive ? '#060a0f' : '#4FE3ED',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '.82rem',
                      fontWeight: 800,
                      cursor: 'pointer',
                      zIndex: 20,
                      boxShadow: isActive
                        ? '0 0 25px rgba(79, 227, 237, 0.9), 0 0 10px #4FE3ED'
                        : '0 0 12px rgba(0, 0, 0, 0.8)',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <span>{idx + 1}</span>

                    {/* Radar Pulse Halo */}
                    <span
                      style={{
                        position: 'absolute',
                        inset: '-6px',
                        borderRadius: '50%',
                        border: '1.5px solid rgba(79, 227, 237, 0.5)',
                        animation: 'pulseDot 2s ease infinite',
                        pointerEvents: 'none',
                      }}
                    ></span>
                  </button>
                );
              })}
            </div>

            {/* Sound Strike Tester Bar */}
            <div
              style={{
                marginTop: '1.2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: '#05080c',
                padding: '.85rem 1.2rem',
                borderRadius: '12px',
                border: '1px solid rgba(79, 227, 237, 0.15)',
                flexWrap: 'wrap',
                gap: '.8rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '.7rem' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'rgba(79, 227, 237, 0.12)',
                    color: '#4FE3ED',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '.85rem',
                  }}
                >
                  <i className="fas fa-volume-high"></i>
                </div>
                <div>
                  <div style={{ fontSize: '.84rem', fontWeight: 700, color: '#F7F9FA' }}>
                    Acoustic Sweet-Spot Pop
                  </div>
                  <div style={{ fontSize: '.68rem', color: '#7C8E98' }}>
                    Synthesized 820Hz carbon strike profile
                  </div>
                </div>
              </div>

              <button
                onClick={handleTestPop}
                style={{
                  background: isPlayingSound ? '#4FE3ED' : 'rgba(79, 227, 237, 0.15)',
                  color: isPlayingSound ? '#060a0f' : '#4FE3ED',
                  border: '1.5px solid #4FE3ED',
                  padding: '.55rem 1.2rem',
                  borderRadius: '30px',
                  fontSize: '.8rem',
                  fontWeight: 800,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '.5rem',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  boxShadow: isPlayingSound ? '0 0 15px rgba(79, 227, 237, 0.6)' : 'none',
                }}
              >
                <span>{isPlayingSound ? 'Strike!' : 'Test Pop Sound'}</span>
                <i className="fas fa-play" style={{ fontSize: '.7rem' }}></i>
              </button>
            </div>
          </div>

          {/* Right Column: Detailed Technical Breakdown */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            {/* Active Hotspot Deep Dive Card */}
            <div
              style={{
                background: '#0b1420',
                border: '1px solid rgba(79, 227, 237, 0.3)',
                borderRadius: '18px',
                padding: '2.2rem',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3)',
                marginBottom: '1.5rem',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '.8rem' }}>
                <span
                  style={{
                    background: 'rgba(79, 227, 237, 0.15)',
                    color: '#7FEAF0',
                    fontSize: '.68rem',
                    fontWeight: 800,
                    letterSpacing: '.08em',
                    textTransform: 'uppercase',
                    padding: '.3rem .7rem',
                    borderRadius: '20px',
                    border: '1px solid rgba(79, 227, 237, 0.3)',
                  }}
                >
                  {activeHotspot.tag}
                </span>
                <span style={{ fontSize: '.76rem', color: '#4FE3ED', fontWeight: 700 }}>
                  {activeHotspot.stat}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontSize: '1.5rem',
                  margin: '0 0 .8rem',
                  color: '#F7F9FA',
                }}
              >
                {activeHotspot.title}
              </h3>

              <p style={{ color: '#9FB2BC', fontSize: '.95rem', lineHeight: 1.7, margin: '0 0 1.5rem' }}>
                {activeHotspot.desc}
              </p>

              {/* Quick Component Highlights */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '.8rem',
                  borderTop: '1px solid rgba(79, 227, 237, 0.12)',
                  paddingTop: '1.2rem',
                }}
              >
                <div>
                  <span style={{ fontSize: '.68rem', color: '#7C8E98', textTransform: 'uppercase', letterSpacing: '.06em' }}>
                    Paddle Core
                  </span>
                  <div style={{ fontSize: '.92rem', fontWeight: 700, color: '#4FE3ED', marginTop: '.2rem' }}>
                    {coreThickness} Polypropylene
                  </div>
                </div>

                <div>
                  <span style={{ fontSize: '.68rem', color: '#7C8E98', textTransform: 'uppercase', letterSpacing: '.06em' }}>
                    Certification
                  </span>
                  <div style={{ fontSize: '.92rem', fontWeight: 700, color: '#25D366', marginTop: '.2rem' }}>
                    USAPA Approved
                  </div>
                </div>
              </div>
            </div>

            {/* Spec Matrix Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem',
              }}
            >
              <div
                style={{
                  background: '#090e15',
                  padding: '1.1rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <span style={{ fontSize: '.68rem', color: '#7C8E98', textTransform: 'uppercase' }}>
                  Paddle Length &amp; Width
                </span>
                <p style={{ margin: '.25rem 0 0', fontWeight: 700, color: '#F7F9FA', fontSize: '.94rem' }}>
                  16.5&quot; × 7.5&quot; (Elongated)
                </p>
              </div>

              <div
                style={{
                  background: '#090e15',
                  padding: '1.1rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <span style={{ fontSize: '.68rem', color: '#7C8E98', textTransform: 'uppercase' }}>
                  Grip Circumference
                </span>
                <p style={{ margin: '.25rem 0 0', fontWeight: 700, color: '#F7F9FA', fontSize: '.94rem' }}>
                  4.25&quot; Perforated Ergo
                </p>
              </div>

              <div
                style={{
                  background: '#090e15',
                  padding: '1.1rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <span style={{ fontSize: '.68rem', color: '#7C8E98', textTransform: 'uppercase' }}>
                  Match Ball Spec
                </span>
                <p style={{ margin: '.25rem 0 0', fontWeight: 700, color: '#4FE3ED', fontSize: '.94rem' }}>
                  40-Hole Optic Neon Yellow
                </p>
              </div>

              <div
                style={{
                  background: '#090e15',
                  padding: '1.1rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <span style={{ fontSize: '.68rem', color: '#7C8E98', textTransform: 'uppercase' }}>
                  Academy Deployment
                </span>
                <p style={{ margin: '.25rem 0 0', fontWeight: 700, color: '#F7F9FA', fontSize: '.94rem' }}>
                  All 29 ProPlayX Courts
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
