import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { playClickSound } from '../utils/audio';

const COMPARISON_ROWS = [
  {
    feature: 'Infrastructure Investment',
    foco: 'Funded by Franchise Partner',
    fofo: 'Funded by Franchise Partner',
  },
  {
    feature: 'Day-to-Day Operations',
    foco: '100% Managed by ProPlayX',
    fofo: 'Managed by Franchise Partner',
  },
  {
    feature: 'Staff & Coach Hiring',
    foco: 'ProPlayX Certified Coaches & Staff',
    fofo: 'Franchise Partner (Trained by ProPlayX)',
  },
  {
    feature: 'Booking Software & App',
    foco: 'Included (Blu Racquet Club Platform)',
    fofo: 'Included (Blu Racquet Club Platform)',
  },
  {
    feature: 'Tournaments & Leagues',
    foco: 'Organized by ProPlayX Central Team',
    fofo: 'Franchise Partner with ProPlayX playbook',
  },
  {
    feature: 'Commercial Partnership Structure',
    foco: 'Pre-agreed Operational Profit Share Ratio',
    fofo: '100% Retained by Partner (8% Brand & Tech Service Fee)',
  },
  {
    feature: 'Time Commitment Needed',
    foco: 'Turnkey Management (Run by ProPlayX Team)',
    fofo: '15 – 30 hours / week (Self-Run Club)',
  },
];

export default function FranchiseComparator({ onSelectModel }) {
  const [activeTab, setActiveTab] = useState('comparison'); // 'comparison' | 'quiz'
  const [quizAnswers, setQuizAnswers] = useState({ involvement: null, goal: null });

  const handleQuizAnswer = (key, value) => {
    playClickSound();
    const updated = { ...quizAnswers, [key]: value };
    setQuizAnswers(updated);

    if (updated.involvement && updated.goal) {
      confetti({
        particleCount: 60,
        spread: 50,
        origin: { y: 0.65 },
        colors: ['#4FE3ED', '#0E8F9C', '#25D366'],
      });
    }
  };

  const recommendedModel =
    quizAnswers.involvement === 'turnkey' ? 'FOCO' : 'FOFO';

  const handleApply = (model) => {
    playClickSound();
    if (onSelectModel) {
      onSelectModel(`Franchise Model Inquiry: ${model}`);
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="franchise-comparator"
      style={{
        padding: '6.5rem 0',
        background: '#F7F9FA',
        color: '#10161C',
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Header */}
        <div style={{ maxWidth: '640px', marginBottom: '3rem' }}>
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
            Partnership Model — FOCO vs FOFO
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
            Choose your facility operating partnership.
          </h2>
          <p style={{ color: '#5B6670', fontSize: '1rem', lineHeight: 1.6, margin: 0 }}>
            Whether you want turnkey facility operations or want to actively build a marquee sports destination, we provide the ideal operating structure.
          </p>
        </div>

        {/* View Switcher Tabs */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem' }}>
          <button
            onClick={() => {
              playClickSound();
              setActiveTab('comparison');
            }}
            style={{
              background: activeTab === 'comparison' ? '#0b1420' : '#ECF0F3',
              color: activeTab === 'comparison' ? '#4FE3ED' : '#5B6670',
              border: 'none',
              padding: '.75rem 1.6rem',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '.85rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '.5rem',
            }}
          >
            <i className="fas fa-table-columns"></i>
            <span>Side-by-Side Comparison</span>
          </button>

          <button
            onClick={() => {
              playClickSound();
              setActiveTab('quiz');
            }}
            style={{
              background: activeTab === 'quiz' ? '#0b1420' : '#ECF0F3',
              color: activeTab === 'quiz' ? '#4FE3ED' : '#5B6670',
              border: 'none',
              padding: '.75rem 1.6rem',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '.85rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '.5rem',
            }}
          >
            <i className="fas fa-wand-magic-sparkles"></i>
            <span>Interactive Model Finder Quiz</span>
          </button>
        </div>

        {/* Tab 1: Comparison Matrix */}
        {activeTab === 'comparison' && (
          <div
            style={{
              background: '#fff',
              border: '1px solid rgba(15, 143, 156, 0.2)',
              borderRadius: '18px',
              overflow: 'hidden',
              boxShadow: '0 15px 40px rgba(11, 20, 32, 0.04)',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1.4fr 1.3fr 1.3fr',
                background: '#0b1420',
                color: '#F7F9FA',
                padding: '1.2rem 1.6rem',
                borderBottom: '1px solid rgba(79, 227, 237, 0.2)',
              }}
            >
              <div style={{ fontSize: '.76rem', color: '#7FEAF0', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '.06em' }}>
                Operational Area
              </div>
              <div>
                <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#4FE3ED', fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                  FOCO Model
                </div>
                <div style={{ fontSize: '.68rem', color: '#9FB2BC' }}>Franchise Owned, Company Operated</div>
              </div>
              <div>
                <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#F7F9FA', fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                  FOFO Model
                </div>
                <div style={{ fontSize: '.68rem', color: '#9FB2BC' }}>Franchise Owned, Franchise Operated</div>
              </div>
            </div>

            {COMPARISON_ROWS.map((row, idx) => (
              <div
                key={idx}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1.4fr 1.3fr 1.3fr',
                  padding: '1.2rem 1.6rem',
                  borderBottom: idx === COMPARISON_ROWS.length - 1 ? 'none' : '1px solid rgba(16, 22, 28, 0.08)',
                  background: idx % 2 === 0 ? '#fff' : '#FAFCFD',
                  alignItems: 'center',
                }}
              >
                <div style={{ fontWeight: 700, fontSize: '.9rem', color: '#10161C' }}>{row.feature}</div>
                <div style={{ fontSize: '.88rem', color: '#0E8F9C', fontWeight: 600 }}>{row.foco}</div>
                <div style={{ fontSize: '.88rem', color: '#5B6670', fontWeight: 600 }}>{row.fofo}</div>
              </div>
            ))}

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1.4fr 1.3fr 1.3fr',
                padding: '1.4rem 1.6rem',
                background: '#ECF0F3',
                alignItems: 'center',
              }}
            >
              <div style={{ fontSize: '.85rem', fontWeight: 700, color: '#5B6670' }}>Next Step:</div>
              <div>
                <button
                  onClick={() => handleApply('FOCO (Turnkey Management Model)')}
                  style={{
                    background: '#0b1420',
                    color: '#4FE3ED',
                    border: 'none',
                    padding: '.65rem 1.2rem',
                    borderRadius: '4px',
                    fontWeight: 700,
                    fontSize: '.8rem',
                    cursor: 'pointer',
                  }}
                >
                  Apply for FOCO &#8594;
                </button>
              </div>
              <div>
                <button
                  onClick={() => handleApply('FOFO (Self-Run Model)')}
                  style={{
                    background: '#0E8F9C',
                    color: '#fff',
                    border: 'none',
                    padding: '.65rem 1.2rem',
                    borderRadius: '4px',
                    fontWeight: 700,
                    fontSize: '.8rem',
                    cursor: 'pointer',
                  }}
                >
                  Apply for FOFO &#8594;
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Interactive Quiz */}
        {activeTab === 'quiz' && (
          <div
            style={{
              background: '#fff',
              border: '1px solid rgba(15, 143, 156, 0.2)',
              borderRadius: '18px',
              padding: '2.5rem',
              boxShadow: '0 15px 40px rgba(11, 20, 32, 0.04)',
            }}
          >
            <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '1.3rem', margin: '0 0 1.5rem', color: '#10161C' }}>
              Answer 2 quick questions to find your matching operational model:
            </h3>

            {/* Question 1 */}
            <div style={{ marginBottom: '2rem' }}>
              <span style={{ fontSize: '.84rem', fontWeight: 800, color: '#0E8F9C', textTransform: 'uppercase', letterSpacing: '.06em', display: 'block', marginBottom: '.6rem' }}>
                Step 1: Your Desired Operational Role
              </span>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                <div
                  onClick={() => handleQuizAnswer('involvement', 'turnkey')}
                  style={{
                    border: quizAnswers.involvement === 'turnkey' ? '2px solid #0E8F9C' : '1px solid rgba(16,22,28,0.15)',
                    background: quizAnswers.involvement === 'turnkey' ? '#ECF8F9' : '#fff',
                    padding: '1.2rem',
                    borderRadius: '12px',
                    cursor: 'pointer',
                  }}
                >
                  <div style={{ fontWeight: 700, fontSize: '.95rem', color: '#10161C', marginBottom: '.3rem' }}>
                    Facility Owner (Turnkey Managed)
                  </div>
                  <div style={{ fontSize: '.84rem', color: '#5B6670', lineHeight: 1.5 }}>
                    I provide the land or sports court infrastructure and want ProPlayX certified managers to run daily academy coaching, tournament scheduling, and maintenance.
                  </div>
                </div>

                <div
                  onClick={() => handleQuizAnswer('involvement', 'active')}
                  style={{
                    border: quizAnswers.involvement === 'active' ? '2px solid #0E8F9C' : '1px solid rgba(16,22,28,0.15)',
                    background: quizAnswers.involvement === 'active' ? '#ECF8F9' : '#fff',
                    padding: '1.2rem',
                    borderRadius: '12px',
                    cursor: 'pointer',
                  }}
                >
                  <div style={{ fontWeight: 700, fontSize: '.95rem', color: '#10161C', marginBottom: '.3rem' }}>
                    Active Sports Operator
                  </div>
                  <div style={{ fontSize: '.84rem', color: '#5B6670', lineHeight: 1.5 }}>
                    I want to personally operate and manage my sports venue, host local tournaments, and lead daily community engagement using your software and brand network.
                  </div>
                </div>
              </div>
            </div>

            {/* Question 2 */}
            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ fontSize: '.84rem', fontWeight: 800, color: '#0E8F9C', textTransform: 'uppercase', letterSpacing: '.06em', display: 'block', marginBottom: '.6rem' }}>
                Step 2: Day-to-Day Execution Preference
              </span>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                <div
                  onClick={() => handleQuizAnswer('goal', 'professional')}
                  style={{
                    border: quizAnswers.goal === 'professional' ? '2px solid #0E8F9C' : '1px solid rgba(16,22,28,0.15)',
                    background: quizAnswers.goal === 'professional' ? '#ECF8F9' : '#fff',
                    padding: '1.2rem',
                    borderRadius: '12px',
                    cursor: 'pointer',
                  }}
                >
                  <div style={{ fontWeight: 700, fontSize: '.95rem', color: '#10161C', marginBottom: '.3rem' }}>
                    Professional Delegation
                  </div>
                  <div style={{ fontSize: '.84rem', color: '#5B6670', lineHeight: 1.5 }}>
                    I want the facility operated by experienced sports professionals, coaches, and court managers without dealing with daily operational friction.
                  </div>
                </div>

                <div
                  onClick={() => handleQuizAnswer('goal', 'independent')}
                  style={{
                    border: quizAnswers.goal === 'independent' ? '2px solid #0E8F9C' : '1px solid rgba(16,22,28,0.15)',
                    background: quizAnswers.goal === 'independent' ? '#ECF8F9' : '#fff',
                    padding: '1.2rem',
                    borderRadius: '12px',
                    cursor: 'pointer',
                  }}
                >
                  <div style={{ fontWeight: 700, fontSize: '.95rem', color: '#10161C', marginBottom: '.3rem' }}>
                    Direct Operational Leadership
                  </div>
                  <div style={{ fontSize: '.84rem', color: '#5B6670', lineHeight: 1.5 }}>
                    I want direct management oversight of my staff and community, supported by the Blu Racquet Club platform and vendor equipment.
                  </div>
                </div>
              </div>
            </div>

            {/* Result Recommendation Card */}
            {quizAnswers.involvement && quizAnswers.goal && (
              <div
                style={{
                  background: 'linear-gradient(145deg, #0b1420 0%, #05080c 100%)',
                  color: '#F7F9FA',
                  padding: '2rem',
                  borderRadius: '16px',
                  border: '1.5px solid #4FE3ED',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1.5rem',
                }}
              >
                <div>
                  <span style={{ fontSize: '.72rem', color: '#7FEAF0', textTransform: 'uppercase', fontWeight: 800 }}>
                    Recommended Operational Model:
                  </span>
                  <h4 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '1.6rem', margin: '.2rem 0 .4rem', color: '#4FE3ED' }}>
                    {recommendedModel} Model
                  </h4>
                  <p style={{ color: '#9FB2BC', fontSize: '.9rem', margin: 0, maxWidth: '520px', lineHeight: 1.6 }}>
                    {recommendedModel === 'FOCO'
                      ? 'FOCO delivers full turnkey operational excellence: ProPlayX deploys certified coaches, organizes tournaments, and manages facility upkeep.'
                      : 'FOFO empowers you to build an active sports business with full brand backing, tournament licensing rights, and the automated booking app.'}
                  </p>
                </div>

                <button
                  onClick={() => handleApply(recommendedModel)}
                  style={{
                    background: '#4FE3ED',
                    color: '#060a0f',
                    border: 'none',
                    padding: '.9rem 1.6rem',
                    borderRadius: '4px',
                    fontWeight: 800,
                    fontSize: '.88rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '.6rem',
                  }}
                >
                  <span>Apply for {recommendedModel} Opportunity</span>
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
