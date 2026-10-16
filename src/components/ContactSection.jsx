import React, { useState, useEffect } from 'react';
import { contactInfo } from '../data/content';
import confetti from 'canvas-confetti';
import { playClickSound } from '../utils/audio';

export default function ContactSection({ prefilledSpec }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    requirement: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (prefilledSpec) {
      setFormData((prev) => ({
        ...prev,
        requirement: 'Court Construction & Design',
        message: `Interactive Court Design Specification:\n${prefilledSpec}`,
      }));
    }
  }, [prefilledSpec]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    playClickSound();
    setSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitted(true);
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#4FE3ED', '#0E8F9C', '#25D366', '#FFFFFF'],
        });
      } else {
        setErrorMessage(result.error || 'Failed to submit inquiry. Please try again.');
      }
    } catch (err) {
      console.warn('Network issue or backend unavailable, using mailto fallback', err);
      const subject = encodeURIComponent(`Inquiry from ${formData.fullName} - ProPlayX`);
      const body = encodeURIComponent(
        `Name: ${formData.fullName}\nPhone: ${formData.phone}\nRequirement: ${formData.requirement}\nNotes: ${formData.message}`
      );
      window.location.href = `mailto:${contactInfo.fallbackEmail}?subject=${subject}&body=${body}`;
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({ fullName: '', phone: '', requirement: '', message: '' });
    setSubmitted(false);
    setErrorMessage('');
  };

  return (
    <section id="contact" style={{ padding: '6.5rem 0', background: '#0b1420' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ maxWidth: '640px', marginBottom: '3rem' }}>
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
            <span
              style={{
                width: '22px',
                height: '1px',
                background: '#4FE3ED',
                display: 'inline-block',
              }}
            ></span>
            Net — Let's Talk
          </div>
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(2rem, 3.6vw, 2.9rem)',
              margin: 0,
              color: '#F7F9FA',
              letterSpacing: '-.01em',
              lineHeight: 1.15,
            }}
          >
            Contact ProPlayX
          </h2>
          <p style={{ color: '#9FB2BC', fontSize: '1rem', lineHeight: 1.6, marginTop: '.6rem' }}>
            Ready to build or convert your space? Our sports infrastructure engineers respond within 24 hours.
          </p>
        </div>

        <div
          style={{
            borderRadius: '18px',
            overflow: 'hidden',
            boxShadow: '0 30px 70px rgba(0, 0, 0, 0.45)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          }}
        >
          {/* Left Column: Contact Details */}
          <div
            style={{
              background: 'linear-gradient(165deg, #05080c 0%, #0b1420 100%)',
              color: '#F7F9FA',
              padding: '3rem',
              borderRight: '1px solid rgba(79, 227, 237, 0.15)',
            }}
          >
            <h3
              style={{
                color: '#F7F9FA',
                margin: '0 0 .6rem',
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: '1.4rem',
                fontWeight: 700,
              }}
            >
              Reach out
            </h3>
            <p
              style={{
                color: '#9FB2BC',
                margin: '0 0 2rem',
                fontSize: '.94rem',
                lineHeight: 1.6,
              }}
            >
              Have land, space, or want to build a facility? Talk with our team.
            </p>

            <div
              style={{
                display: 'flex',
                gap: '1rem',
                marginBottom: '1.6rem',
                alignItems: 'flex-start',
              }}
            >
              <i
                className="fas fa-phone-alt"
                style={{
                  color: '#4FE3ED',
                  fontSize: '1.05rem',
                  marginTop: '3px',
                  width: '20px',
                }}
              ></i>
              <div>
                <strong
                  style={{
                    display: 'block',
                    fontSize: '.74rem',
                    letterSpacing: '.06em',
                    fontFamily: "'Manrope', sans-serif",
                    color: '#7FEAF0',
                    marginBottom: '.25rem',
                    textTransform: 'uppercase',
                  }}
                >
                  Phone
                </strong>
                <p style={{ margin: 0, color: '#9FB2BC', fontSize: '.92rem' }}>
                  {contactInfo.phone}
                </p>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                gap: '1rem',
                marginBottom: '1.6rem',
                alignItems: 'flex-start',
              }}
            >
              <i
                className="fas fa-envelope"
                style={{
                  color: '#4FE3ED',
                  fontSize: '1.05rem',
                  marginTop: '3px',
                  width: '20px',
                }}
              ></i>
              <div>
                <strong
                  style={{
                    display: 'block',
                    fontSize: '.74rem',
                    letterSpacing: '.06em',
                    fontFamily: "'Manrope', sans-serif",
                    color: '#7FEAF0',
                    marginBottom: '.25rem',
                    textTransform: 'uppercase',
                  }}
                >
                  Email
                </strong>
                <p style={{ margin: 0, color: '#9FB2BC', fontSize: '.92rem' }}>
                  <a href={`mailto:${contactInfo.email}`} style={{ color: 'inherit' }}>
                    {contactInfo.email}
                  </a>
                </p>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                gap: '1rem',
                alignItems: 'flex-start',
              }}
            >
              <i
                className="fas fa-map-marker-alt"
                style={{
                  color: '#4FE3ED',
                  fontSize: '1.05rem',
                  marginTop: '3px',
                  width: '20px',
                }}
              ></i>
              <div>
                <strong
                  style={{
                    display: 'block',
                    fontSize: '.74rem',
                    letterSpacing: '.06em',
                    fontFamily: "'Manrope', sans-serif",
                    color: '#7FEAF0',
                    marginBottom: '.25rem',
                    textTransform: 'uppercase',
                  }}
                >
                  Registered Office
                </strong>
                <p style={{ margin: 0, color: '#9FB2BC', fontSize: '.92rem', lineHeight: 1.5 }}>
                  {contactInfo.address}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div style={{ background: '#fff', padding: '3rem' }}>
            {/* Interactive Pre-fill notification badge */}
            {prefilledSpec && !submitted && (
              <div
                style={{
                  background: 'rgba(14, 143, 156, 0.1)',
                  border: '1px solid #0E8F9C',
                  padding: '.75rem 1rem',
                  borderRadius: '8px',
                  marginBottom: '1.5rem',
                  fontSize: '.82rem',
                  color: '#0E8F9C',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '.6rem',
                }}
              >
                <i className="fas fa-wand-magic-sparkles"></i>
                <span>Auto-attached your customized court design specifications!</span>
              </div>
            )}

            {submitted ? (
              <div
                style={{
                  textAlign: 'center',
                  padding: '2rem 1rem',
                  animation: 'fadeUp 0.5s ease',
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: '#DCF3E1',
                    color: '#1E7A45',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    margin: '0 auto 1.5rem',
                  }}
                >
                  <i className="fas fa-check"></i>
                </div>
                <h3
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontSize: '1.5rem',
                    color: '#10161C',
                    margin: '0 0 0.8rem',
                  }}
                >
                  Inquiry Received!
                </h3>
                <p style={{ color: '#5B6670', fontSize: '.95rem', lineHeight: 1.6, margin: '0 0 2rem' }}>
                  Thank you, <strong>{formData.fullName}</strong>. Your requirement has been registered in our system. A ProPlayX sports facility director will reach out within 24 hours.
                </p>
                <button
                  onClick={resetForm}
                  style={{
                    background: '#0b1420',
                    color: '#4FE3ED',
                    border: 'none',
                    padding: '.8rem 1.6rem',
                    borderRadius: '4px',
                    fontWeight: 700,
                    fontSize: '.85rem',
                    cursor: 'pointer',
                  }}
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {errorMessage && (
                  <div
                    style={{
                      background: '#fee2e2',
                      color: '#b91c1c',
                      padding: '.75rem 1rem',
                      borderRadius: '4px',
                      fontSize: '.85rem',
                      marginBottom: '1.2rem',
                    }}
                  >
                    {errorMessage}
                  </div>
                )}

                <div style={{ marginBottom: '1.4rem' }}>
                  <label
                    htmlFor="fullName"
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: '.7rem',
                      letterSpacing: '.08em',
                      color: '#5B6670',
                      marginBottom: '.4rem',
                      display: 'block',
                      textTransform: 'uppercase',
                      fontWeight: 700,
                    }}
                  >
                    Full Name *
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    style={{
                      width: '100%',
                      border: 'none',
                      borderBottom: '1.5px solid rgba(16, 22, 28, 0.18)',
                      padding: '.65rem .1rem',
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: '.95rem',
                      background: 'transparent',
                      outline: 'none',
                    }}
                  />
                </div>

                <div style={{ marginBottom: '1.4rem' }}>
                  <label
                    htmlFor="phone"
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: '.7rem',
                      letterSpacing: '.08em',
                      color: '#5B6670',
                      marginBottom: '.4rem',
                      display: 'block',
                      textTransform: 'uppercase',
                      fontWeight: 700,
                    }}
                  >
                    WhatsApp / Mobile Number *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter WhatsApp number (+91...)"
                    required
                    style={{
                      width: '100%',
                      border: 'none',
                      borderBottom: '1.5px solid rgba(16, 22, 28, 0.18)',
                      padding: '.65rem .1rem',
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: '.95rem',
                      background: 'transparent',
                      outline: 'none',
                    }}
                  />
                </div>

                <div style={{ marginBottom: '1.4rem' }}>
                  <label
                    htmlFor="requirement"
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: '.7rem',
                      letterSpacing: '.08em',
                      color: '#5B6670',
                      marginBottom: '.4rem',
                      display: 'block',
                      textTransform: 'uppercase',
                      fontWeight: 700,
                    }}
                  >
                    Contact For *
                  </label>
                  <select
                    id="requirement"
                    name="requirement"
                    value={formData.requirement}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      border: 'none',
                      borderBottom: '1.5px solid rgba(16, 22, 28, 0.18)',
                      padding: '.65rem .1rem',
                      fontSize: '.95rem',
                      background: 'transparent',
                      outline: 'none',
                      color: formData.requirement ? '#10161C' : '#8B98A1',
                    }}
                  >
                    <option value="">Select requirement</option>
                    <option value="Single Court Construction (₹4.89L Capex Package)">
                      Single Court Turnkey Construction (₹4.89L Package)
                    </option>
                    <option value="Option A: FOCO Franchise (75/25 Profit Share)">
                      Option A: FOCO Franchise (75% / 25% Net Profit Share)
                    </option>
                    <option value="Option B: Facility Operations (10% Top-Line Fee)">
                      Option B: Turnkey Facility Operations (10% Gross Fee)
                    </option>
                    <option value="Land / Space Monetization (~2,000+ sq ft)">
                      Land / Space Monetization Partnership (~2,000+ sq ft)
                    </option>
                    <option value="Custom Multi-Sport Arena / Padel / Badminton">
                      Custom Multi-Sport Arena / Padel / Badminton
                    </option>
                    <option value="School / College / Corporate Sports Infra">
                      School / College / Corporate Sports Infra
                    </option>
                  </select>
                </div>

                {/* Additional Details Textarea */}
                <div style={{ marginBottom: '1.8rem' }}>
                  <label
                    htmlFor="message"
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: '.7rem',
                      letterSpacing: '.08em',
                      color: '#5B6670',
                      marginBottom: '.4rem',
                      display: 'block',
                      textTransform: 'uppercase',
                      fontWeight: 700,
                    }}
                  >
                    Project Details / Location / Land Area
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Specify city, area in sq ft, rooftop/ground, or budget expectations..."
                    style={{
                      width: '100%',
                      border: '1.5px solid rgba(16, 22, 28, 0.12)',
                      borderRadius: '6px',
                      padding: '.65rem .8rem',
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: '.9rem',
                      background: '#FAFCFD',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    background: '#4FE3ED',
                    color: '#060a0f',
                    border: '1px solid #4FE3ED',
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '.84rem',
                    letterSpacing: '.06em',
                    padding: '.95rem 1.6rem',
                    borderRadius: '4px',
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '.55rem',
                    cursor: 'pointer',
                    opacity: submitting ? 0.7 : 1,
                    boxShadow: '0 8px 20px rgba(79, 227, 237, 0.25)',
                  }}
                >
                  {submitting ? 'Submitting...' : 'Submit Turnkey Inquiry'}{' '}
                  <i className="fas fa-arrow-right"></i>
                </button>

                <p
                  style={{
                    fontSize: '.72rem',
                    color: '#8B98A1',
                    marginTop: '.9rem',
                    textAlign: 'center',
                  }}
                >
                  Inquiries route automatically to {contactInfo.fallbackEmail}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
