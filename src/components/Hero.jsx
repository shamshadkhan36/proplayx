import React, { useState, useEffect } from 'react';
import { playPaddlePop, playClickSound } from '../utils/audio';

export default function Hero() {
  const [counts, setCounts] = useState({ courts: 0, venues: 0, cities: 0, clubs: 0 });

  useEffect(() => {
    const duration = 1200;
    const steps = 30;
    const interval = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = Math.min(1, currentStep / steps);
      setCounts({
        courts: Math.round(progress * 29),
        venues: Math.round(progress * 5),
        cities: Math.round(progress * 3),
        clubs: Math.round(progress * 25),
      });

      if (currentStep >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(180deg, #05080c 0%, #060a0f 55%, #0b1420 100%)',
        color: '#F7F9FA',
        overflow: 'hidden',
        padding: '7.5rem 0 4rem',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(120% 90% at 88% 0%, rgba(79, 227, 237, 0.16), transparent 55%)',
          pointerEvents: 'none',
        }}
      ></div>

      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '0 1.5rem',
          position: 'relative',
          zIndex: 2,
          width: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '3rem',
          }}
        >
          <div
            className="hero-copy"
            style={{
              flex: '1 1 460px',
              minWidth: 0,
            }}
          >
            <div
              className="hero-actions"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '.6rem',
                fontFamily: "'Manrope', sans-serif",
                fontSize: '.72rem',
                letterSpacing: '.16em',
                color: '#7FEAF0',
                marginBottom: '1.6rem',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              <span
                style={{
                  width: '22px',
                  height: '1px',
                  background: '#4FE3ED',
                  display: 'inline-block',
                }}
              ></span>{' '}
              Turnkey Sports Infrastructure — India
            </div>

            <h1
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(2.4rem, 5.2vw, 4.2rem)',
                lineHeight: 1.04,
                margin: '0 0 1.5rem',
                letterSpacing: '-.01em',
              }}
            >
              We build the court.
              <br />
              We run the club.
            </h1>

            <p
              style={{
                color: '#A6BAC4',
                fontSize: '1.1rem',
                maxWidth: '480px',
                margin: '0 0 2.3rem',
                lineHeight: 1.7,
              }}
            >
              ProPlayX designs, constructs and operates premium pickleball, padel, badminton and
              turf facilities — then keeps them full, staffed and professionally run through the Blu Racquet Club platform.
            </p>

            <div
              className="hero-stats"
              style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                marginBottom: '3rem',
              }}
            >
              <a
                href="#customizer"
                onClick={playPaddlePop}
                style={{
                  background: '#4FE3ED',
                  color: '#060a0f',
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: '.78rem',
                  letterSpacing: '.06em',
                  padding: '.9rem 1.7rem',
                  borderRadius: '2px',
                  fontWeight: 800,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '.6rem',
                  boxShadow: '0 10px 25px rgba(79, 227, 237, 0.3)',
                }}
              >
                <span>Design Your Court Studio</span> <i className="fas fa-wand-magic-sparkles"></i>
              </a>

              <a
                href="#venues"
                onClick={playClickSound}
                style={{
                  background: 'rgba(79, 227, 237, 0.1)',
                  color: '#7FEAF0',
                  border: '1px solid #4FE3ED',
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: '.78rem',
                  letterSpacing: '.06em',
                  padding: '.9rem 1.7rem',
                  borderRadius: '2px',
                  fontWeight: 700,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '.6rem',
                }}
              >
                <span>Explore Sports Centers</span> <i className="fas fa-location-dot"></i>
              </a>
            </div>

            {/* Animated Counters */}
            <div
              style={{
                display: 'flex',
                gap: '2.4rem',
                flexWrap: 'wrap',
              }}
            >
              <div>
                <b
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontSize: '2.2rem',
                    color: '#7FEAF0',
                    display: 'block',
                    lineHeight: 1,
                    marginBottom: '0.35rem',
                  }}
                >
                  {counts.courts}
                </b>
                <span
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '.66rem',
                    letterSpacing: '.08em',
                    color: '#7C8E98',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                  }}
                >
                  Courts Live
                </span>
              </div>

              <div>
                <b
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontSize: '2.2rem',
                    color: '#7FEAF0',
                    display: 'block',
                    lineHeight: 1,
                    marginBottom: '0.35rem',
                  }}
                >
                  {counts.venues}
                </b>
                <span
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '.66rem',
                    letterSpacing: '.08em',
                    color: '#7C8E98',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                  }}
                >
                  Venues Operating
                </span>
              </div>

              <div>
                <b
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontSize: '2.2rem',
                    color: '#7FEAF0',
                    display: 'block',
                    lineHeight: 1,
                    marginBottom: '0.35rem',
                  }}
                >
                  {counts.cities}
                </b>
                <span
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '.66rem',
                    letterSpacing: '.08em',
                    color: '#7C8E98',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                  }}
                >
                  Cities · MMR &amp; Hyderabad
                </span>
              </div>

              <div>
                <b
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontSize: '2.2rem',
                    color: '#7FEAF0',
                    display: 'block',
                    lineHeight: 1,
                    marginBottom: '0.35rem',
                  }}
                >
                  {counts.clubs}+
                </b>
                <span
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '.66rem',
                    letterSpacing: '.08em',
                    color: '#7C8E98',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                  }}
                >
                  Clubs by 2028
                </span>
              </div>
            </div>
          </div>

          <div
            className="hero-visual"
            style={{
              flex: '1 1 380px',
              minWidth: '280px',
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'relative',
                borderRadius: '22px',
                overflow: 'hidden',
                boxShadow: '0 40px 90px rgba(0, 0, 0, 0.6)',
                border: '1px solid rgba(79, 227, 237, 0.25)',
                aspectRatio: '4 / 5',
              }}
            >
              <img
                className="hero-court-image"
                src="/uploads/WhatsApp%20Image%202026-08-17%20at%207.48.33%20AM.jpeg"
                alt="ProPlayX indoor padel court"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  display: 'block',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(180deg, transparent 55%, rgba(6, 10, 15, 0.85) 100%)',
                }}
              ></div>
              <div
                style={{
                  position: 'absolute',
                  bottom: '1.4rem',
                  left: '1.4rem',
                  right: '1.4rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '.7rem',
                }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#4FE3ED',
                    animation: 'pulseDot 1.8s ease infinite',
                    flexShrink: 0,
                  }}
                ></span>
                <span
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '.68rem',
                    letterSpacing: '.08em',
                    color: '#DCEBEE',
                    fontWeight: 600,
                  }}
                >
                  Covered Padel Court · Built by ProPlayX
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
