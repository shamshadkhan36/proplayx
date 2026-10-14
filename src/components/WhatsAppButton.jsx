import React, { useState } from 'react';
import { contactInfo } from '../data/content';

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={`https://wa.me/${contactInfo.whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'fixed',
        bottom: '1.8rem',
        right: '1.8rem',
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        background: '#25D366',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.65rem',
        boxShadow: hovered
          ? '0 16px 36px rgba(37, 211, 102, 0.45)'
          : '0 12px 30px rgba(0, 0, 0, 0.35)',
        zIndex: 200,
        transform: hovered ? 'scale(1.08)' : 'scale(1)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      }}
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
}
