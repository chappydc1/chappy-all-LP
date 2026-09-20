'use client'

import { useState, useEffect } from 'react'
import { genderStep, maleSteps, femaleSteps, QuizStep } from './quiz-data'

function parseBody(body: string): React.ReactNode[] {
  return body.split('\n\n').map((para, i) => {
    const parts = para.split(/(\*\*[^*]+\*\*)/)
    return (
      <p key={i} style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
        {parts.map((part, j) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={j}>{part.slice(2, -2)}</strong>
          }
          // Handle \n within a paragraph (like week headings)
          return part.split('\n').map((line, k) => (
            k === 0 ? <span key={k}>{line}</span> : <span key={k}><br />{line}</span>
          ))
        })}
      </p>
    )
  })
}

const GREEN = '#0d3d2b'
const GREEN_MED = '#1b5e3b'
const GREEN_LIGHT = '#e8f5ee'
const TEXT_DARK = '#1a1a1a'
const TEXT_MUTED = '#505050'
const BORDER = '#e5e5e5'

const btnStyle: React.CSSProperties = {
  width: '100%',
  background: GREEN,
  color: '#fff',
  border: 'none',
  borderRadius: '9999px',
  padding: '16px 24px',
  fontSize: '17px',
  fontWeight: 600,
  fontFamily: 'Poppins, sans-serif',
  cursor: 'pointer',
  marginTop: '16px',
}

export function QuizFlow() {
  const [stepIndex, setStepIndex] = useState(0)
  const [gender, setGender] = useState<'male' | 'female' | null>(null)
  const [struggle, setStruggle] = useState('')
  const [multiSelected, setMultiSelected] = useState<string[]>([])
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({})

  const steps: QuizStep[] = [genderStep, ...(gender ? (gender === 'male' ? maleSteps : femaleSteps) : [])]
  const currentStep = steps[stepIndex]

  function advance() {
    setMultiSelected([])
    setStepIndex(i => Math.min(i + 1, steps.length - 1))
  }

  function goBack() {
    setMultiSelected([])
    setStepIndex(i => Math.max(i - 1, 0))
  }

  function saveAnswer(id: string, value: string | string[]) {
    setAnswers(a => ({ ...a, [id]: value }))
  }

  // Rendering helpers
  function renderImageSingle(step: Extract<QuizStep, { type: 'image-single' }>) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', width: '100%' }}>
        <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '26px', fontWeight: 600, color: GREEN, textAlign: 'center', margin: 0 }}>
          {step.question}
        </h1>
        {step.subtitle && (
          <p style={{ color: TEXT_MUTED, fontSize: '14px', textAlign: 'center', margin: 0 }}>{step.subtitle}</p>
        )}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(0, 160px))',
          gap: '16px',
          justifyContent: 'center',
          width: '100%',
          marginTop: '8px',
        }}>
          {step.options.map(opt => (
            <button
              key={opt.label}
              onClick={() => {
                saveAnswer(step.id, opt.value ?? opt.label)
                if (step.id === 'gender') {
                  // Set gender and jump directly to step 1; calling advance() here
                  // would use a stale `steps` closure that still only has genderStep.
                  setGender((opt.value ?? opt.label).toLowerCase() as 'male' | 'female')
                  setMultiSelected([])
                  setStepIndex(1)
                } else {
                  advance()
                }
              }}
              style={{
                width: '100%',
                border: `1px solid ${BORDER}`,
                borderRadius: '10px',
                background: '#fff',
                cursor: 'pointer',
                padding: 0,
                overflow: 'hidden',
                transition: 'border-color 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = GREEN_MED)}
              onMouseLeave={e => (e.currentTarget.style.borderColor = BORDER)}
            >
              <img
                src={opt.imageUrl}
                alt={opt.label}
                style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', display: 'block' }}
              />
              <div style={{ padding: '10px 8px', fontFamily: 'Roboto, sans-serif', fontSize: '14px', fontWeight: 500, color: TEXT_DARK, textAlign: 'center' }}>
                {opt.label}
              </div>
            </button>
          ))}
        </div>
      </div>
    )
  }

  function renderImageMulti(step: Extract<QuizStep, { type: 'image-multi' }>) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', width: '100%' }}>
        <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '26px', fontWeight: 600, color: GREEN, textAlign: 'center', margin: 0 }}>
          {step.question}
        </h1>
        {step.subtitle && (
          <p style={{ color: TEXT_MUTED, fontSize: '14px', textAlign: 'center', margin: 0 }}>{step.subtitle}</p>
        )}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(0, 160px))',
          gap: '16px',
          justifyContent: 'center',
          width: '100%',
          marginTop: '8px',
        }}>
          {step.options.map(opt => {
            const selected = multiSelected.includes(opt.label)
            return (
              <button
                key={opt.label}
                onClick={() => {
                  setMultiSelected(prev =>
                    prev.includes(opt.label) ? prev.filter(l => l !== opt.label) : [...prev, opt.label]
                  )
                }}
                style={{
                  width: '100%',
                  border: `2px solid ${selected ? GREEN : BORDER}`,
                  borderRadius: '10px',
                  background: selected ? GREEN_LIGHT : '#fff',
                  cursor: 'pointer',
                  padding: 0,
                  overflow: 'hidden',
                }}
              >
                <img
                  src={opt.imageUrl}
                  alt={opt.label}
                  style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', display: 'block' }}
                />
                <div style={{ padding: '10px 8px', fontFamily: 'Roboto, sans-serif', fontSize: '13px', fontWeight: 500, color: TEXT_DARK, textAlign: 'center' }}>
                  {opt.label}
                </div>
              </button>
            )
          })}
        </div>
        <button style={btnStyle} onClick={() => { saveAnswer(step.id, multiSelected); advance() }}>
          {step.continueLabel}
        </button>
      </div>
    )
  }

  function renderEmojiSingle(step: Extract<QuizStep, { type: 'emoji-single' }>) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', width: '100%' }}>
        <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '26px', fontWeight: 600, color: GREEN, textAlign: 'center', margin: 0 }}>
          {step.question}
        </h1>
        {step.subtitle && (
          <p style={{ color: TEXT_MUTED, fontSize: '14px', textAlign: 'center', margin: 0 }}>{step.subtitle}</p>
        )}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%', maxWidth: '420px' }}>
          {step.options.map(opt => (
            <button
              key={opt.label}
              onClick={() => {
                saveAnswer(step.id, opt.value ?? opt.label)
                if (step.id === 'struggle') setStruggle(opt.label)
                advance()
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '14px 20px',
                border: `1px solid ${BORDER}`,
                borderRadius: '10px',
                background: '#fff',
                cursor: 'pointer',
                fontFamily: 'Roboto, sans-serif',
                fontSize: '16px',
                color: TEXT_DARK,
                textAlign: 'left',
                transition: 'border-color 0.15s, background 0.15s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = GREEN_MED
                e.currentTarget.style.background = '#f0faf5'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = BORDER
                e.currentTarget.style.background = '#fff'
              }}
            >
              <span style={{ fontSize: '24px' }}>{opt.emoji}</span>
              <span>{opt.label}</span>
            </button>
          ))}
        </div>
      </div>
    )
  }

  function renderInterstitial(step: Extract<QuizStep, { type: 'interstitial' }>) {
    const body = step.bodyTemplate.replace('{struggle}', struggle || 'fatigue')
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', width: '100%', maxWidth: '480px', margin: '0 auto' }}>
        <div style={{ fontFamily: 'Roboto, sans-serif', fontSize: '18px', color: TEXT_DARK, textAlign: 'center', lineHeight: '1.7' }}>
          {body.split('\n\n').map((para, i) => (
            <p key={i} style={{ marginBottom: '1rem' }}>{para}</p>
          ))}
        </div>
        <button style={btnStyle} onClick={advance}>{step.continueLabel}</button>
      </div>
    )
  }

  function renderInfo(step: Extract<QuizStep, { type: 'info' }>) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', width: '100%', maxWidth: '480px', margin: '0 auto' }}>
        {step.imageUrl && (
          <img
            src={step.imageUrl}
            alt={step.imageAlt ?? ''}
            style={{ width: '100%', maxWidth: '400px', borderRadius: '12px', objectFit: 'cover', display: 'block' }}
          />
        )}
        {step.title && (
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '22px', fontWeight: 700, color: GREEN, textAlign: 'center', margin: 0 }}>
            {step.title}
          </h2>
        )}
        <div style={{ fontFamily: 'Roboto, sans-serif', fontSize: '16px', color: TEXT_DARK, width: '100%' }}>
          {parseBody(step.body)}
        </div>
        <button style={btnStyle} onClick={advance}>{step.continueLabel}</button>
      </div>
    )
  }

  function renderSocialProof(step: Extract<QuizStep, { type: 'social-proof' }>) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', width: '100%', maxWidth: '500px', margin: '0 auto' }}>
        <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '24px', fontWeight: 700, color: GREEN, textAlign: 'center', margin: 0 }}>
          {step.heading}
        </h2>
        <img
          src={step.imageUrl}
          alt="Social proof"
          style={{ width: '100%', maxWidth: '500px', borderRadius: '12px', objectFit: 'cover', display: 'block' }}
        />
        <button style={btnStyle} onClick={advance}>{step.continueLabel}</button>
      </div>
    )
  }

  function renderLoading(step: Extract<QuizStep, { type: 'loading' }>) {
    return <LoadingStep step={step} onDone={advance} />
  }

  function renderResults(step: Extract<QuizStep, { type: 'results' }>) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', width: '100%', maxWidth: '480px', margin: '0 auto' }}>
        <p style={{ color: TEXT_MUTED, fontFamily: 'Roboto, sans-serif', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>
          Your Results
        </p>
        <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '26px', fontWeight: 700, color: GREEN, textAlign: 'center', margin: 0 }}>
          Your lymphatic system is {step.congestionPercent}% congested.
        </h1>
        <p style={{ color: TEXT_MUTED, fontFamily: 'Roboto, sans-serif', fontSize: '14px', textAlign: 'center', margin: 0 }}>
          Based on your quiz answers
        </p>

        {/* Congestion meter */}
        <div style={{ width: '100%' }}>
          <div style={{ height: '16px', background: '#e5e5e5', borderRadius: '9999px', overflow: 'hidden', marginBottom: '6px' }}>
            <div style={{ height: '100%', width: `${step.congestionPercent}%`, background: `linear-gradient(90deg, #f59e0b, #dc2626)`, borderRadius: '9999px' }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: TEXT_MUTED }}>
            {['0%', '25%', '50%', '75%', '100%'].map(l => <span key={l}>{l}</span>)}
          </div>
        </div>

        {/* Warning badge */}
        <div style={{ background: '#fef2f2', border: '1px solid #fca5a5', borderRadius: '8px', padding: '12px 16px', width: '100%', textAlign: 'center', fontFamily: 'Roboto, sans-serif', fontSize: '14px', color: '#b91c1c', fontWeight: 600 }}>
          ⚠ Severely Congested — Immediate attention recommended
        </div>

        {/* Areas affected */}
        <div style={{ width: '100%' }}>
          <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '18px', fontWeight: 600, color: GREEN, marginBottom: '12px' }}>
            Areas Affected
          </h3>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <img
              src={step.bodyDiagramUrl}
              alt="Body diagram showing affected areas"
              style={{ width: '120px', borderRadius: '8px', objectFit: 'contain' }}
            />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignContent: 'flex-start' }}>
              {step.areasAffected.map(area => (
                <span key={area} style={{ background: GREEN_LIGHT, color: GREEN, border: `1px solid ${GREEN_MED}`, borderRadius: '9999px', padding: '4px 14px', fontFamily: 'Roboto, sans-serif', fontSize: '14px', fontWeight: 500 }}>
                  {area}
                </span>
              ))}
              <p style={{ width: '100%', fontFamily: 'Roboto, sans-serif', fontSize: '14px', color: TEXT_MUTED, margin: '8px 0 0' }}>
                Duration: {step.duration}
              </p>
            </div>
          </div>
        </div>

        {/* Timeline chart */}
        <div style={{ width: '100%', background: '#f9fafb', border: `1px solid ${BORDER}`, borderRadius: '12px', padding: '20px' }}>
          <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', fontWeight: 600, color: GREEN, marginBottom: '16px', textAlign: 'center' }}>
            Estimated Time to Full Drainage
          </h3>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-end', justifyContent: 'center', height: '80px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '60px', height: '40px', background: GREEN, borderRadius: '6px 6px 0 0' }} />
              <span style={{ fontSize: '11px', color: TEXT_MUTED, fontFamily: 'Roboto, sans-serif', textAlign: 'center' }}>~{step.daysWithSupport} days<br/>with Lymphoria</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '60px', height: '70px', background: '#e5e5e5', borderRadius: '6px 6px 0 0' }} />
              <span style={{ fontSize: '11px', color: TEXT_MUTED, fontFamily: 'Roboto, sans-serif', textAlign: 'center' }}>Without<br/>support</span>
            </div>
          </div>
          <p style={{ textAlign: 'center', fontFamily: 'Poppins, sans-serif', fontSize: '28px', fontWeight: 700, color: GREEN, margin: '16px 0 4px' }}>
            ~{step.daysWithSupport} days with Lymphoria
          </p>
          <p style={{ textAlign: 'center', fontFamily: 'Roboto, sans-serif', fontSize: '14px', color: TEXT_MUTED, margin: 0 }}>
            vs never without support — it only gets worse
          </p>
        </div>

        <a
          href={step.ctaUrl}
          style={{ ...btnStyle, marginTop: '8px', display: 'block', textAlign: 'center', textDecoration: 'none' }}
        >
          {step.ctaLabel}
        </a>
      </div>
    )
  }

  function renderStep() {
    if (!currentStep) return null
    switch (currentStep.type) {
      case 'image-single': return renderImageSingle(currentStep)
      case 'image-multi': return renderImageMulti(currentStep)
      case 'emoji-single': return renderEmojiSingle(currentStep)
      case 'interstitial': return renderInterstitial(currentStep)
      case 'info': return renderInfo(currentStep)
      case 'social-proof': return renderSocialProof(currentStep)
      case 'loading': return renderLoading(currentStep)
      case 'results': return renderResults(currentStep)
    }
  }

  return (
    <main style={{ minHeight: '100vh', background: '#fff', paddingBottom: '60px' }}>
      {/* Fixed progress bar */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '3px', background: '#e5e5e5', zIndex: 100 }}>
        <div
          style={{
            height: '100%',
            width: `${currentStep?.progress ?? 0}%`,
            background: GREEN,
            transition: 'width 0.4s ease',
          }}
        />
      </div>

      <div style={{ maxWidth: '560px', margin: '0 auto', padding: '24px 16px 40px' }}>
        {/* Back button */}
        {stepIndex > 0 && (
          <button
            onClick={goBack}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '22px',
              color: TEXT_MUTED,
              padding: '0 0 16px',
              display: 'block',
            }}
            aria-label="Go back"
          >
            ←
          </button>
        )}

        {renderStep()}
      </div>
    </main>
  )
}

function LoadingStep({
  step,
  onDone,
}: {
  step: Extract<QuizStep, { type: 'loading' }>
  onDone: () => void
}) {
  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = []
    step.items.forEach((_, i) => {
      timers.push(setTimeout(() => setVisibleCount(i + 1), (i + 1) * 1000))
    })
    timers.push(setTimeout(onDone, step.items.length * 1000 + 1000))
    return () => timers.forEach(clearTimeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px', width: '100%', paddingTop: '40px' }}>
      <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '28px', fontWeight: 700, color: GREEN, letterSpacing: '3px', textAlign: 'center', margin: 0 }}>
        {step.title}
      </h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', maxWidth: '360px' }}>
        {step.items.map((item, i) => (
          <div
            key={item.label}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              padding: '16px',
              border: `1px solid ${BORDER}`,
              borderRadius: '10px',
              background: '#fff',
              opacity: i < visibleCount ? 1 : 0,
              transform: i < visibleCount ? 'translateY(0)' : 'translateY(8px)',
              transition: 'opacity 0.4s ease, transform 0.4s ease',
            }}
          >
            <img src={item.iconUrl} alt="" style={{ width: '28px', height: '28px', flexShrink: 0 }} />
            <span style={{ fontFamily: 'Roboto, sans-serif', fontSize: '15px', color: TEXT_DARK }}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
