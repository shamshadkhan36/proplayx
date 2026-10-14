import React, { useState } from 'react';
import { venuesLive, venuesUpcoming } from '../data/content';
import VenueModal from './VenueModal';
import { playClickSound } from '../utils/audio';

export default function Venues() {
  const [selectedCity, setSelectedCity] = useState('ALL');
  const [activeVenue, setActiveVenue] = useState(null);

  const filterVenues = (list) => {
    if (selectedCity === 'ALL') return list;
    if (selectedCity === 'MMR') return list.filter((v) => v.name.includes('Thane') || v.name.includes('Mira Road') || v.name.includes('Andheri') || v.name.includes('Mumbai'));
    if (selectedCity === 'HYDERABAD') return list.filter((v) => v.name.includes('Hyderabad'));
    if (selectedCity === 'RAJASTHAN') return list.filter((v) => v.name.includes('Jaipur'));
    return list;
  };

  const filteredLive = filterVenues(venuesLive);
  const filteredUpcoming = filterVenues(venuesUpcoming);

  return (
    <section id="venues" style={{ padding: '6.5rem 0', background: '#F7F9FA' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Section Header */}
        <div style={{ maxWidth: '640px', marginBottom: '2.5rem' }}>
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
            On Court — Live Venues &amp; Map
          </div>
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(2rem, 3.6vw, 2.9rem)',
              margin: '0 0 1rem',
              color: '#10161C',
              letterSpacing: '-.01em',
              lineHeight: 1.15,
            }}
          >
            Explore our operating sports centers
          </h2>
          <p style={{ color: '#5B6670', fontSize: '1rem', lineHeight: 1.6, margin: 0 }}>
            Click on any venue to view court setups, high-definition facility photos, amenities, and book directly.
          </p>
        </div>

        {/* City Filter Pills */}
        <div style={{ display: 'flex', gap: '.6rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          {[
            { id: 'ALL', label: 'All Centers (8)' },
            { id: 'MMR', label: 'Mumbai & MMR (5)' },
            { id: 'HYDERABAD', label: 'Hyderabad (1)' },
            { id: 'RAJASTHAN', label: 'Rajasthan / Jaipur (1)' },
          ].map((city) => {
            const active = selectedCity === city.id;
            return (
              <button
                key={city.id}
                onClick={() => {
                  playClickSound();
                  setSelectedCity(city.id);
                }}
                style={{
                  background: active ? '#0b1420' : '#fff',
                  color: active ? '#4FE3ED' : '#5B6670',
                  border: active ? '1px solid #0b1420' : '1px solid rgba(15, 143, 156, 0.25)',
                  padding: '.55rem 1.1rem',
                  borderRadius: '30px',
                  fontSize: '.82rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: active ? '0 5px 15px rgba(11,20,32,0.15)' : 'none',
                }}
              >
                {city.label}
              </button>
            );
          })}
        </div>

        {/* Visual Highlights */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2.8rem',
          }}
        >
          <div
            style={{
              position: 'relative',
              borderRadius: '18px',
              overflow: 'hidden',
              aspectRatio: '16/10',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.08)',
            }}
          >
            <img
              src="/uploads/1%20(3).png"
              alt="ProPlayX courts, aerial view"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div
            style={{
              position: 'relative',
              borderRadius: '18px',
              overflow: 'hidden',
              aspectRatio: '16/10',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.08)',
            }}
          >
            <img
              src="/uploads/3.jfif"
              alt="Lush Pickleball Academy tournament"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>

        {/* Operational Section */}
        {filteredLive.length > 0 && (
          <>
            <h4
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: '.8rem',
                letterSpacing: '.08em',
                color: '#5B6670',
                marginBottom: '1.2rem',
                textTransform: 'uppercase',
                fontWeight: 700,
              }}
            >
              Operational Centers ({filteredLive.length})
            </h4>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.4rem',
                marginBottom: '2.8rem',
              }}
            >
              {filteredLive.map((v, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    playClickSound();
                    setActiveVenue({ ...v, status: 'Operational', image: idx % 2 === 0 ? '/uploads/1%20(3).png' : '/uploads/3.jfif' });
                  }}
                  style={{
                    background: '#fff',
                    border: '1px solid rgba(15, 143, 156, 0.18)',
                    borderRadius: '16px',
                    padding: '1.8rem',
                    boxShadow: '0 8px 24px rgba(11, 20, 32, 0.03)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    position: 'relative',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 16px 36px rgba(15, 143, 156, 0.15)';
                    e.currentTarget.style.borderColor = '#0E8F9C';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(11, 20, 32, 0.03)';
                    e.currentTarget.style.borderColor = 'rgba(15, 143, 156, 0.18)';
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '.85rem' }}>
                    <span
                      style={{
                        background: '#DCF3E1',
                        color: '#1E7A45',
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: '.62rem',
                        letterSpacing: '.08em',
                        padding: '.28rem .65rem',
                        borderRadius: '20px',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                      }}
                    >
                      Operational
                    </span>
                    <span style={{ fontSize: '.75rem', color: '#0E8F9C', fontWeight: 700 }}>
                      View Details &#8594;
                    </span>
                  </div>
                  <h3
                    style={{
                      fontSize: '1.1rem',
                      margin: '0 0 .5rem',
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                      color: '#10161C',
                      fontWeight: 700,
                    }}
                  >
                    {v.name}
                  </h3>
                  <div
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: '.82rem',
                      color: '#0b1420',
                      marginBottom: '.3rem',
                      fontWeight: 700,
                    }}
                  >
                    {v.courts}
                  </div>
                  <p
                    style={{
                      color: '#5B6670',
                      fontSize: '.86rem',
                      marginTop: '.7rem',
                      marginBottom: 0,
                      lineHeight: 1.6,
                    }}
                  >
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Upcoming Section */}
        {filteredUpcoming.length > 0 && (
          <>
            <h4
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: '.8rem',
                letterSpacing: '.08em',
                color: '#5B6670',
                marginBottom: '1.2rem',
                textTransform: 'uppercase',
                fontWeight: 700,
              }}
            >
              Upcoming &amp; Pipeline Centers ({filteredUpcoming.length})
            </h4>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.4rem',
              }}
            >
              {filteredUpcoming.map((v, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    playClickSound();
                    setActiveVenue({ ...v, image: '/uploads/WhatsApp%20Image%202026-08-17%20at%207.50.35%20AM.jpeg' });
                  }}
                  style={{
                    background: '#fff',
                    border: '1px solid rgba(15, 143, 156, 0.18)',
                    borderRadius: '16px',
                    padding: '1.8rem',
                    boxShadow: '0 8px 24px rgba(11, 20, 32, 0.03)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.borderColor = '#0E8F9C';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'rgba(15, 143, 156, 0.18)';
                  }}
                >
                  <span
                    style={{
                      background: v.badgeBg,
                      color: v.badgeText,
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: '.62rem',
                      letterSpacing: '.08em',
                      padding: '.28rem .65rem',
                      borderRadius: '20px',
                      display: 'inline-block',
                      marginBottom: '.85rem',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                    }}
                  >
                    {v.status}
                  </span>
                  <h3
                    style={{
                      fontSize: '1.08rem',
                      margin: '0 0 .5rem',
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                      color: '#10161C',
                      fontWeight: 700,
                    }}
                  >
                    {v.name}
                  </h3>
                  <p
                    style={{
                      color: '#5B6670',
                      fontSize: '.86rem',
                      marginTop: '.4rem',
                      marginBottom: 0,
                      lineHeight: 1.6,
                    }}
                  >
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Modal display when a venue is clicked */}
        <VenueModal venue={activeVenue} onClose={() => setActiveVenue(null)} />
      </div>
    </section>
  );
}
