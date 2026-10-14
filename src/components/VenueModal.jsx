import React from 'react';
import { contactInfo } from '../data/content';
import { playClickSound } from '../utils/audio';

export default function VenueModal({ venue, onClose }) {
  if (!venue) return null;

  const whatsappMsg = encodeURIComponent(
    `Hello ProPlayX team, I would like to book a slot / schedule a visit for ${venue.name}.`
  );

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        background: 'rgba(5, 8, 12, 0.85)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: '#0b1420',
          border: '1px solid rgba(79, 227, 237, 0.3)',
          borderRadius: '20px',
          maxWidth: '680px',
          width: '100%',
          overflow: 'hidden',
          boxShadow: '0 30px 80px rgba(0, 0, 0, 0.7)',
          color: '#F7F9FA',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            playClickSound();
            onClose();
          }}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '1.2rem',
            right: '1.2rem',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.12)',
            border: 'none',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
          }}
        >
          <i className="fas fa-xmark"></i>
        </button>

        {/* Hero image banner */}
        <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
          <img
            src={venue.image || '/uploads/1%20(3).png'}
            alt={venue.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, transparent 40%, rgba(11,20,32,0.95) 100%)',
            }}
          ></div>
          <div style={{ position: 'absolute', bottom: '1.2rem', left: '1.5rem', right: '1.5rem' }}>
            <span
              style={{
                background: venue.badgeBg || '#DCF3E1',
                color: venue.badgeText || '#1E7A45',
                fontSize: '.62rem',
                fontWeight: 800,
                padding: '.3rem .7rem',
                borderRadius: '20px',
                textTransform: 'uppercase',
                letterSpacing: '.06em',
                display: 'inline-block',
                marginBottom: '.5rem',
              }}
            >
              {venue.status || 'Operational'}
            </span>
            <h3
              style={{
                margin: 0,
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: '1.5rem',
                color: '#F7F9FA',
              }}
            >
              {venue.name}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '1.8rem' }}>
          <div style={{ marginBottom: '1.4rem' }}>
            <span style={{ fontSize: '.72rem', color: '#7FEAF0', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '.06em' }}>
              Court Capacity &amp; Sports
            </span>
            <p style={{ margin: '.3rem 0 0', fontSize: '1.05rem', color: '#4FE3ED', fontWeight: 700 }}>
              {venue.courts || 'Multi-Sport Facility'}
            </p>
          </div>

          <p style={{ color: '#9FB2BC', fontSize: '.94rem', lineHeight: 1.6, margin: '0 0 1.6rem' }}>
            {venue.desc}
          </p>

          {/* Amenities Badges */}
          <div style={{ marginBottom: '1.8rem' }}>
            <span style={{ fontSize: '.72rem', color: '#7FEAF0', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '.06em', display: 'block', marginBottom: '.6rem' }}>
              Center Features &amp; Amenities
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem' }}>
              <span style={{ background: 'rgba(255,255,255,0.06)', padding: '.35rem .75rem', borderRadius: '20px', fontSize: '.76rem', color: '#C7D3DA' }}>
                <i className="fas fa-bolt" style={{ color: '#4FE3ED' }}></i> Tournament Floodlights
              </span>
              <span style={{ background: 'rgba(255,255,255,0.06)', padding: '.35rem .75rem', borderRadius: '20px', fontSize: '.76rem', color: '#C7D3DA' }}>
                <i className="fas fa-mobile-screen" style={{ color: '#4FE3ED' }}></i> App Slot Booking
              </span>
              <span style={{ background: 'rgba(255,255,255,0.06)', padding: '.35rem .75rem', borderRadius: '20px', fontSize: '.76rem', color: '#C7D3DA' }}>
                <i className="fas fa-trophy" style={{ color: '#4FE3ED' }}></i> Academy Coaching
              </span>
              <span style={{ background: 'rgba(255,255,255,0.06)', padding: '.35rem .75rem', borderRadius: '20px', fontSize: '.76rem', color: '#C7D3DA' }}>
                <i className="fas fa-car" style={{ color: '#4FE3ED' }}></i> On-site Parking
              </span>
            </div>
          </div>

          {/* Modal Actions */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href={`https://wa.me/${contactInfo.whatsappNumber}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1,
                minWidth: '200px',
                background: '#25D366',
                color: '#fff',
                padding: '.85rem 1.4rem',
                borderRadius: '6px',
                fontWeight: 700,
                fontSize: '.88rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '.6rem',
                textDecoration: 'none',
              }}
            >
              <i className="fab fa-whatsapp" style={{ fontSize: '1.2rem' }}></i>
              <span>Book / Visit via WhatsApp</span>
            </a>

            <button
              onClick={onClose}
              style={{
                background: 'transparent',
                color: '#C7D3DA',
                border: '1px solid rgba(255,255,255,0.2)',
                padding: '.85rem 1.4rem',
                borderRadius: '6px',
                fontWeight: 600,
                fontSize: '.85rem',
                cursor: 'pointer',
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
