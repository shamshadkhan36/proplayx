import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { playClickSound } from '../utils/audio';

const SPORTS = [
  {
    id: 'pickleball',
    name: 'Pickleball Court',
    icon: 'fas fa-table-tennis-paddle-ball',
    dims: '44 ft × 20 ft (Regulation + runoffs)',
    basePrice: 450000,
    surface: '8-Layer Cushion Acrylic USAPA Spec',
    description: 'The fastest growing racket sport worldwide. Fast turnaround, high player turnover, and thriving matchplay.',
  },
  {
    id: 'padel',
    name: 'Padel Tennis Court',
    icon: 'fas fa-volleyball',
    dims: '20m × 10m Panoramic Enclosure',
    basePrice: 2100000,
    surface: '12mm Toughened Glass + Fibrillated Turf',
    description: 'Premium lifestyle multi-player game with enclosed glass walls and tournament-grade turf.',
  },
  {
    id: 'badminton',
    name: 'Badminton Court',
    icon: 'fas fa-shuttlecock',
    dims: '44 ft × 20 ft (BWF Approved)',
    basePrice: 600000,
    surface: 'BWF Teak Cushion or Heavy-Duty PVC',
    description: 'Indias most played indoor racket sport. Consistent high-capacity academy and corporate demand.',
  },
  {
    id: 'turf',
    name: 'Box Cricket / Turf',
    icon: 'fas fa-baseball',
    dims: '60 ft × 40 ft Enclosure',
    basePrice: 850000,
    surface: '50mm Monofilament UV-Stabilized Turf',
    description: 'High-density netting and artificial grass turf built for 24/7 all-weather matchplay.',
  },
];

const COLOR_SCHEMES = [
  { id: 'azure-navy', name: 'ProPlayX Azure & Navy', inner: '#2176FF', outer: '#0B2545', line: '#FFFFFF' },
  { id: 'us-open', name: 'US Open Royal & Forest', inner: '#1E56A0', outer: '#1B4931', line: '#FFFFFF' },
  { id: 'terracotta-teal', name: 'Clay & Tropical Teal', inner: '#C85A32', outer: '#13678A', line: '#FFFFFF' },
  { id: 'cyber-neon', name: 'Night Arena Cyan & Graphite', inner: '#0E1726', outer: '#060B11', line: '#4FE3ED' },
];

const ADDONS = [
  { id: 'floodlights', name: '8x Tournament 500 Lux LED System', price: 250000, icon: 'fas fa-lightbulb' },
  { id: 'canopy', name: 'Heavy-Duty Tensile All-Weather Canopy', price: 850000, icon: 'fas fa-umbrella' },
  { id: 'camera', name: 'AI Automated Match Camera & Replay', price: 160000, icon: 'fas fa-video' },
  { id: 'dugout', name: 'Spectator Dugout & Players Bench', price: 90000, icon: 'fas fa-couch' },
  { id: 'audio', name: 'Outdoor High-Fidelity Club PA System', price: 65000, icon: 'fas fa-volume-high' },
];

export default function CourtCustomizer({ onSelectCustomization }) {
  const [selectedSport, setSelectedSport] = useState(SPORTS[0]);
  const [selectedColor, setSelectedColor] = useState(COLOR_SCHEMES[0]);
  const [isNightMode, setIsNightMode] = useState(true);
  const [selectedAddons, setSelectedAddons] = useState(['floodlights']);

  const toggleAddon = (id) => {
    playClickSound();
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const addonsTotal = selectedAddons.reduce((sum, id) => {
    const addon = ADDONS.find((a) => a.id === id);
    return sum + (addon ? addon.price : 0);
  }, 0);

  const totalEstimate = selectedSport.basePrice + addonsTotal;

  const handleApply = () => {
    playClickSound();
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#4FE3ED', '#7FEAF0', '#25D366', '#FFFFFF'],
    });

    const summary = `${selectedSport.name} (${selectedColor.name}) + Addons: ${
      selectedAddons.length ? selectedAddons.join(', ') : 'None'
    } [Est: ₹${(totalEstimate / 100000).toFixed(2)} Lakhs]`;

    if (onSelectCustomization) {
      onSelectCustomization(summary);
    }

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="customizer"
      style={{
        padding: '6.5rem 0',
        background: 'linear-gradient(180deg, #0b1420 0%, #060a0f 100%)',
        color: '#F7F9FA',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(79, 227, 237, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      ></div>

      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div style={{ maxWidth: '680px', marginBottom: '3.2rem' }}>
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
              fontWeight: 600,
            }}
          >
            <span style={{ width: '22px', height: '1px', background: '#4FE3ED', display: 'inline-block' }}></span>
            Interactive Studio — Design Your Court
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
            Customize your sports infrastructure in real-time.
          </h2>
          <p style={{ color: '#9FB2BC', fontSize: '1rem', lineHeight: 1.6, margin: 0 }}>
            Choose regulation dimensions, court surfaces, floodlighting modes, and luxury amenities to generate an instant turnkey quote.
          </p>
        </div>

        {/* Studio Workspace Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Interactive Court Canvas */}
          <div
            style={{
              background: '#05080c',
              border: '1px solid rgba(79, 227, 237, 0.25)',
              borderRadius: '20px',
              padding: '1.8rem',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6)',
            }}
          >
            {/* Top Toolbar */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1.4rem',
                flexWrap: 'wrap',
                gap: '0.8rem',
              }}
            >
              <div>
                <span style={{ fontSize: '.75rem', color: '#7FEAF0', fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase' }}>
                  Live Preview
                </span>
                <h4 style={{ margin: '0.2rem 0 0', fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '1.15rem' }}>
                  {selectedSport.name}
                </h4>
              </div>

              {/* Day / Night Toggle */}
              <button
                onClick={() => {
                  playClickSound();
                  setIsNightMode(!isNightMode);
                }}
                style={{
                  background: isNightMode ? '#101c2a' : '#fff',
                  color: isNightMode ? '#4FE3ED' : '#060a0f',
                  border: '1px solid rgba(79, 227, 237, 0.3)',
                  padding: '.45rem .95rem',
                  borderRadius: '30px',
                  fontSize: '.78rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '.5rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                <i className={isNightMode ? 'fas fa-moon' : 'fas fa-sun'}></i>
                {isNightMode ? 'Night Arena Lights' : 'Day Sunlight'}
              </button>
            </div>

            {/* SVG Visualizer Container */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '16/10',
                borderRadius: '14px',
                overflow: 'hidden',
                background: isNightMode ? '#030508' : '#e8edf2',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                transition: 'background 0.4s ease',
              }}
            >
              {/* Floodlight Beam Highlights in Night Mode */}
              {isNightMode && selectedAddons.includes('floodlights') && (
                <>
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: '15%',
                      width: '70%',
                      height: '100%',
                      background: 'radial-gradient(ellipse at top, rgba(79, 227, 237, 0.22) 0%, transparent 65%)',
                      pointerEvents: 'none',
                    }}
                  ></div>
                  <div
                    style={{
                      position: 'absolute',
                      top: '10px',
                      left: '20px',
                      fontSize: '.65rem',
                      color: '#4FE3ED',
                      background: 'rgba(6,10,15,0.7)',
                      padding: '.25rem .55rem',
                      borderRadius: '4px',
                      border: '1px solid rgba(79, 227, 237, 0.3)',
                    }}
                  >
                    <i className="fas fa-bolt"></i> 500 Lux Active
                  </div>
                </>
              )}

              {/* Court SVG */}
              <svg viewBox="0 0 800 500" style={{ width: '92%', height: '92%', filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.5))' }}>
                {/* Out-of-bounds apron */}
                <rect x="40" y="30" width="720" height="440" rx="12" fill={selectedColor.outer} />

                {/* In-bounds playing court */}
                <rect
                  x="120"
                  y="70"
                  width="560"
                  height="360"
                  rx="4"
                  fill={selectedColor.inner}
                  stroke={selectedColor.line}
                  strokeWidth="4"
                />

                {/* Net (Center) */}
                <line x1="400" y1="50" x2="400" y2="450" stroke="#FFFFFF" strokeWidth="5" strokeDasharray="6 3" />
                <circle cx="400" cy="50" r="7" fill="#4FE3ED" />
                <circle cx="400" cy="450" r="7" fill="#4FE3ED" />

                {/* Specific Court Markings */}
                {selectedSport.id === 'pickleball' && (
                  <>
                    {/* Kitchen / Non-Volley Zone Lines (7ft from net) */}
                    <line x1="330" y1="70" x2="330" y2="430" stroke={selectedColor.line} strokeWidth="3" />
                    <line x1="470" y1="70" x2="470" y2="430" stroke={selectedColor.line} strokeWidth="3" />
                    {/* Kitchen Shading */}
                    <rect x="330" y="70" width="140" height="360" fill="rgba(79, 227, 237, 0.12)" />
                    {/* Center Service Line on left and right */}
                    <line x1="120" y1="250" x2="330" y2="250" stroke={selectedColor.line} strokeWidth="3" />
                    <line x1="470" y1="250" x2="680" y2="250" stroke={selectedColor.line} strokeWidth="3" />
                    <text x="400" y="255" fill="#FFFFFF" fontSize="14" fontWeight="bold" textAnchor="middle" opacity="0.8">
                      NET
                    </text>
                  </>
                )}

                {selectedSport.id === 'padel' && (
                  <>
                    {/* Glass Walls Outline */}
                    <rect x="110" y="60" width="580" height="380" fill="none" stroke="#4FE3ED" strokeWidth="3" opacity="0.6" strokeDasharray="10 5" />
                    {/* Service Lines (3m from back glass) */}
                    <line x1="220" y1="70" x2="220" y2="430" stroke={selectedColor.line} strokeWidth="3" />
                    <line x1="580" y1="70" x2="580" y2="430" stroke={selectedColor.line} strokeWidth="3" />
                    {/* Center Service Line */}
                    <line x1="220" y1="250" x2="580" y2="250" stroke={selectedColor.line} strokeWidth="3" />
                    <text x="400" y="255" fill="#4FE3ED" fontSize="13" fontWeight="bold" textAnchor="middle">
                      12MM GLASS ENCLOSURE
                    </text>
                  </>
                )}

                {selectedSport.id === 'badminton' && (
                  <>
                    {/* Short service lines */}
                    <line x1="340" y1="70" x2="340" y2="430" stroke={selectedColor.line} strokeWidth="3" />
                    <line x1="460" y1="70" x2="460" y2="430" stroke={selectedColor.line} strokeWidth="3" />
                    {/* Center lines */}
                    <line x1="120" y1="250" x2="340" y2="250" stroke={selectedColor.line} strokeWidth="3" />
                    <line x1="460" y1="250" x2="680" y2="250" stroke={selectedColor.line} strokeWidth="3" />
                    {/* Doubles tramlines */}
                    <line x1="120" y1="100" x2="680" y2="100" stroke={selectedColor.line} strokeWidth="2" strokeDasharray="4 2" />
                    <line x1="120" y1="400" x2="680" y2="400" stroke={selectedColor.line} strokeWidth="2" strokeDasharray="4 2" />
                  </>
                )}

                {selectedSport.id === 'turf' && (
                  <>
                    {/* Goal / pitch boxes */}
                    <circle cx="400" cy="250" r="50" fill="none" stroke={selectedColor.line} strokeWidth="3" />
                    <circle cx="400" cy="250" r="4" fill="#FFFFFF" />
                    <rect x="120" y="160" width="80" height="180" fill="none" stroke={selectedColor.line} strokeWidth="3" />
                    <rect x="600" y="160" width="80" height="180" fill="none" stroke={selectedColor.line} strokeWidth="3" />
                  </>
                )}

                {/* Floodlight posts indicators */}
                <circle cx="60" cy="50" r="8" fill="#4FE3ED" />
                <circle cx="740" cy="50" r="8" fill="#4FE3ED" />
                <circle cx="60" cy="450" r="8" fill="#4FE3ED" />
                <circle cx="740" cy="450" r="8" fill="#4FE3ED" />
              </svg>

              {/* Tensile Canopy Indicator Overlay */}
              {selectedAddons.includes('canopy') && (
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '15px',
                    background: 'rgba(79, 227, 237, 0.15)',
                    border: '1px solid #4FE3ED',
                    color: '#7FEAF0',
                    fontSize: '.68rem',
                    padding: '.3rem .6rem',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '.4rem',
                  }}
                >
                  <i className="fas fa-shield-halved"></i> Weatherproof Canopy
                </div>
              )}
            </div>

            {/* Spec Details Pill Bar */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '0.8rem',
                marginTop: '1.2rem',
                background: '#090e15',
                padding: '1rem',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              <div>
                <span style={{ fontSize: '.68rem', color: '#7C8E98', textTransform: 'uppercase', letterSpacing: '.06em' }}>
                  Dimensions
                </span>
                <p style={{ margin: '0.1rem 0 0', fontSize: '.86rem', color: '#F7F9FA', fontWeight: 600 }}>
                  {selectedSport.dims}
                </p>
              </div>
              <div>
                <span style={{ fontSize: '.68rem', color: '#7C8E98', textTransform: 'uppercase', letterSpacing: '.06em' }}>
                  Surface Material
                </span>
                <p style={{ margin: '0.1rem 0 0', fontSize: '.86rem', color: '#4FE3ED', fontWeight: 600 }}>
                  {selectedSport.surface}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Customization Controls & Live Quotation */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.6rem' }}>
            {/* 1. Sport Selector */}
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '.72rem',
                  letterSpacing: '.08em',
                  color: '#7FEAF0',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  marginBottom: '.8rem',
                }}
              >
                1. Select Sport Specification
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '.7rem' }}>
                {SPORTS.map((s) => {
                  const isSelected = selectedSport.id === s.id;
                  return (
                    <button
                      key={s.id}
                      onClick={() => {
                        playClickSound();
                        setSelectedSport(s);
                      }}
                      style={{
                        background: isSelected ? 'rgba(79, 227, 237, 0.15)' : '#0b1420',
                        border: isSelected ? '1.5px solid #4FE3ED' : '1px solid rgba(79, 227, 237, 0.15)',
                        color: isSelected ? '#4FE3ED' : '#C7D3DA',
                        padding: '.85rem 1rem',
                        borderRadius: '8px',
                        textAlign: 'left',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '.7rem',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <i className={s.icon} style={{ fontSize: '1.1rem' }}></i>
                      <div>
                        <div style={{ fontSize: '.85rem', fontWeight: 700, color: isSelected ? '#fff' : '#C7D3DA' }}>
                          {s.name}
                        </div>
                        <div style={{ fontSize: '.68rem', color: '#8B98A1' }}>₹{(s.basePrice / 100000).toFixed(1)}L base</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Color Scheme Selector */}
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '.72rem',
                  letterSpacing: '.08em',
                  color: '#7FEAF0',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  marginBottom: '.8rem',
                }}
              >
                2. Surface Color Palette
              </label>
              <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap' }}>
                {COLOR_SCHEMES.map((scheme) => {
                  const isSelected = selectedColor.id === scheme.id;
                  return (
                    <button
                      key={scheme.id}
                      onClick={() => {
                        playClickSound();
                        setSelectedColor(scheme);
                      }}
                      style={{
                        background: isSelected ? '#121f2d' : '#0b1420',
                        border: isSelected ? '1.5px solid #4FE3ED' : '1px solid rgba(255, 255, 255, 0.1)',
                        padding: '.5rem .85rem',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '.6rem',
                        cursor: 'pointer',
                        color: isSelected ? '#4FE3ED' : '#9FB2BC',
                        fontSize: '.78rem',
                        fontWeight: 600,
                      }}
                    >
                      <span
                        style={{
                          width: '14px',
                          height: '14px',
                          borderRadius: '50%',
                          background: `linear-gradient(135deg, ${scheme.inner} 50%, ${scheme.outer} 50%)`,
                          display: 'inline-block',
                          border: '1px solid rgba(255,255,255,0.4)',
                        }}
                      ></span>
                      {scheme.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Add-ons & Amenities */}
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '.72rem',
                  letterSpacing: '.08em',
                  color: '#7FEAF0',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  marginBottom: '.8rem',
                }}
              >
                3. High-Performance Add-ons
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '.6rem' }}>
                {ADDONS.map((addon) => {
                  const active = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      style={{
                        background: active ? 'rgba(79, 227, 237, 0.1)' : '#070c12',
                        border: active ? '1px solid rgba(79, 227, 237, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)',
                        padding: '.75rem 1rem',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '.8rem' }}>
                        <i className={addon.icon} style={{ color: active ? '#4FE3ED' : '#5B6670', width: '18px' }}></i>
                        <span style={{ fontSize: '.84rem', color: active ? '#F7F9FA' : '#9FB2BC', fontWeight: 600 }}>
                          {addon.name}
                        </span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '.8rem' }}>
                        <span style={{ fontSize: '.82rem', color: '#4FE3ED', fontWeight: 700 }}>
                          +₹{(addon.price / 100000).toFixed(2)}L
                        </span>
                        <input
                          type="checkbox"
                          checked={active}
                          onChange={() => {}}
                          style={{ accentColor: '#4FE3ED', cursor: 'pointer' }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Price Estimation Card & Apply Action */}
            <div
              style={{
                background: 'linear-gradient(145deg, #070d14 0%, #0b1420 100%)',
                border: '1.5px solid #4FE3ED',
                borderRadius: '16px',
                padding: '1.6rem',
                boxShadow: '0 15px 35px rgba(79, 227, 237, 0.15)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.8rem' }}>
                <span style={{ fontSize: '.76rem', color: '#7FEAF0', textTransform: 'uppercase', letterSpacing: '.06em', fontWeight: 700 }}>
                  Estimated Turnkey Cost
                </span>
                <span style={{ fontSize: '.7rem', color: '#9FB2BC' }}>GST &amp; ground prep variable</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '.5rem', marginBottom: '1.2rem' }}>
                <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '2.5rem', fontWeight: 800, color: '#4FE3ED', lineHeight: 1 }}>
                  ₹{(totalEstimate / 100000).toFixed(2)}
                </span>
                <span style={{ fontSize: '1.1rem', color: '#F7F9FA', fontWeight: 700 }}>Lakhs</span>
                <span style={{ fontSize: '.8rem', color: '#7C8E98', marginLeft: 'auto' }}>
                  (Base: ₹{(selectedSport.basePrice / 100000).toFixed(2)}L)
                </span>
              </div>

              <button
                onClick={handleApply}
                style={{
                  width: '100%',
                  background: '#4FE3ED',
                  color: '#060a0f',
                  border: 'none',
                  padding: '.95rem 1.6rem',
                  borderRadius: '6px',
                  fontWeight: 800,
                  fontSize: '.88rem',
                  letterSpacing: '.04em',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '.6rem',
                  cursor: 'pointer',
                  boxShadow: '0 8px 20px rgba(79, 227, 237, 0.3)',
                }}
              >
                <span>Lock In This Spec &amp; Get Official Quote</span>
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
