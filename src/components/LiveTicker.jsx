import React, { useState, useEffect } from 'react';

const NOTIFICATIONS = [
  { text: 'New Inquiry: 3 Pickleball Courts in Hyderabad', time: '4m ago', icon: 'fas fa-envelope' },
  { text: 'Live Match in Progress: Court #2, Lush Mira Road', time: 'Active Now', icon: 'fas fa-table-tennis-paddle-ball' },
  { text: 'Franchise Partner signed: Blu Racquet Club Pune', time: '18m ago', icon: 'fas fa-handshake' },
  { text: 'Tournament Alert: MMR Regional Doubles League', time: 'Registration Open', icon: 'fas fa-trophy' },
  { text: 'Construction Update: Jaipur Arena foundation poured', time: '1h ago', icon: 'fas fa-hammer' },
];

export default function LiveTicker() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % NOTIFICATIONS.length);
        setFade(true);
      }, 300);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  if (!visible) return null;

  const current = NOTIFICATIONS[index];

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '1.8rem',
        left: '1.8rem',
        zIndex: 150,
        background: 'rgba(6, 10, 15, 0.92)',
        border: '1px solid rgba(79, 227, 237, 0.3)',
        borderRadius: '30px',
        padding: '.6rem 1.1rem',
        boxShadow: '0 12px 35px rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        gap: '.75rem',
        maxWidth: '380px',
        opacity: fade ? 1 : 0,
        transform: fade ? 'translateY(0)' : 'translateY(8px)',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
      }}
    >
      <div
        style={{
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          background: 'rgba(79, 227, 237, 0.15)',
          color: '#4FE3ED',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '.75rem',
          flexShrink: 0,
        }}
      >
        <i className={current.icon}></i>
      </div>

      <div style={{ flex: 1, minWidth: 0 }}>
        <p
          style={{
            margin: 0,
            fontSize: '.78rem',
            color: '#F7F9FA',
            fontWeight: 600,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {current.text}
        </p>
        <span style={{ fontSize: '.65rem', color: '#7FEAF0', letterSpacing: '.04em' }}>
          {current.time}
        </span>
      </div>

      <button
        onClick={() => setVisible(false)}
        aria-label="Dismiss notification"
        style={{
          background: 'transparent',
          border: 'none',
          color: '#5B6670',
          fontSize: '.75rem',
          cursor: 'pointer',
          padding: '2px',
        }}
      >
        <i className="fas fa-xmark"></i>
      </button>
    </div>
  );
}
