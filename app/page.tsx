import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Calendar, Phone, Stethoscope, Plus, GraduationCap, Award, House,
  FlaskConical, ShieldCheck, Heart, ClipboardList, Luggage,
  MapPin, Mail, ChevronRight,
} from 'lucide-react'
import FadeIn from '@/components/FadeIn'
import OpeningHours from '@/components/OpeningHours'

const DOCTOLIB = 'https://www.doctolib.de/allgemeinmedizin/krefeld/frank-van-dinther/booking/new-patient?specialityId=1286&source=profile'

export const metadata: Metadata = {
  title: 'Startseite – Praxis van Dinther',
  description: 'Allgemein- und Familienmedizin für die ganze Familie in Krefeld-Elfrath. Jetzt Termin vereinbaren.',
}

const qualifications = [
  { icon: Stethoscope, label: 'Facharzt für Allgemeinmedizin' },
  { icon: Plus,        label: 'Zusatzbezeichnung Manuelle Medizin / Chirotherapie' },
  { icon: GraduationCap, label: 'Lehrpraxis HHU Düsseldorf (IFAM)' },
  { icon: Award,       label: 'Weiterbildungsermächtigung Ärztekammer Nordrhein' },
  { icon: House,       label: 'Hausbesuche im Bedarfsfall' },
]

const leistungen = [
  {
    icon: FlaskConical,
    title: 'Diagnostik',
    items: ['Labor', 'EKG & Belastungs-EKG', 'Langzeitblutdruckmessung', 'Lungenfunktionstest', 'Sonografie (Schilddrüse, Thorax, Abdomen, Weichteile)'],
  },
  {
    icon: ShieldCheck,
    title: 'Vorsorge',
    items: ['Check-up 35', 'Darmkrebs- & Prostatakrebs-Früherkennung', 'Hautkrebs-Screening', 'Bauchaortenaneurysma', 'Jugendgesundheitsuntersuchung', 'Demenzfrüherkennung'],
  },
  {
    icon: Heart,
    title: 'Kassenleistungen',
    items: ['Impfungen (STIKO)', 'Chirotherapie', 'Psychosomatische Grundversorgung', 'Kleine Chirurgie', 'Wärme / Elektro / Inhalation'],
  },
  {
    icon: ClipboardList,
    title: 'DMP',
    items: ['Diabetes Typ 2', 'Koronare Herzkrankheit (KHK)', 'Asthma', 'COPD'],
  },
  {
    icon: Luggage,
    title: 'IGeL & Reisemedizin',
    items: ['Erweiterter Check-up', 'Erweiterte Blutuntersuchungen & PSA', 'Ultraschall auf Wunsch', 'Reisemedizin & Sporttauglichkeit', 'Atteste & Gutachten'],
  },
]

export default function Home() {
  return (
    <div style={{ background: '#EEEAE7' }}>

      {/* ══════════════════ HERO ══════════════════ */}
      <section style={{ position: 'relative', overflow: 'hidden', minHeight: '100svh', display: 'flex', alignItems: 'center' }}>

        {/* Purple ellipse blob (background decoration) */}
        <div style={{
          position: 'absolute',
          right: '-5%',
          top: '-10%',
          width: '65%',
          aspectRatio: '1/1',
          background: 'radial-gradient(circle, #EDE8FE 0%, #e4dffc 30%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', padding: '0 24px', paddingTop: 120, paddingBottom: 60, position: 'relative', zIndex: 1 }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8 sm:gap-0">

            {/* ── Text column ── */}
            <div className="order-2 sm:order-1 flex flex-col items-start" style={{ gap: 32, paddingBottom: 40 }}>

              {/* Status badge */}
              <div className="hero-badge" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: '#EDE8FE', border: '1px solid #643BF8',
                borderRadius: 999, padding: '8px 14px',
              }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', flexShrink: 0 }} />
                <span style={{ fontSize: 13, color: '#643BF8', fontWeight: 400 }}>
                  Praxis geöffnet · Online-Termine verfügbar
                </span>
              </div>

              {/* Headline */}
              <h1
                className="hero-headline"
                style={{ fontSize: 'clamp(38px, 5.5vw, 56px)', fontWeight: 600, lineHeight: 1.05, letterSpacing: '-0.02em', color: '#131313', margin: 0 }}
              >
                <span style={{ color: '#643BF8' }}>Medizin</span>
                {', die sich Zeit nimmt.'}
              </h1>

              {/* Body */}
              <p className="hero-body" style={{ fontSize: 17, fontWeight: 400, color: '#131313', lineHeight: 1.65, maxWidth: 400, margin: 0 }}>
                Persönliche Betreuung für die ganze Familie — verständlich, nah und mit echtem Interesse an Ihrer Gesundheit.
              </p>

              {/* Buttons */}
              <div className="hero-buttons" style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%', maxWidth: 340 }}>
                <a
                  href={DOCTOLIB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                    background: '#643BF8', color: '#fff',
                    borderRadius: 999, padding: '14px 24px',
                    fontSize: 15, fontWeight: 500, letterSpacing: '0.06em',
                  }}
                >
                  <Calendar size={18} strokeWidth={1.5} />
                  Termin vereinbaren
                </a>
                <a
                  href="tel:+492151478989"
                  className="btn-outline"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                    border: '1.5px solid #643BF8', color: '#643BF8',
                    borderRadius: 999, padding: '13px 24px',
                    fontSize: 15, fontWeight: 500, letterSpacing: '0.06em',
                    background: 'transparent',
                  }}
                >
                  <Phone size={17} strokeWidth={1.5} />
                  02151 – 478989
                </a>
              </div>
            </div>

            {/* ── Photo column ── */}
            <div className="order-1 sm:order-2" style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <div className="hero-photo" style={{ position: 'relative', width: '100%', maxWidth: 480 }}>
                <Image
                  src="/images/arzt.png"
                  alt="Dr. Frank van Dinther"
                  width={480}
                  height={600}
                  sizes="(max-width: 640px) 80vw, 40vw"
                  style={{ objectFit: 'contain', objectPosition: 'bottom', width: '100%', height: 'auto' }}
                  priority
                />

                {/* Floating quote card */}
                <div className="hero-quote hidden sm:block" style={{
                  position: 'absolute',
                  bottom: '18%',
                  right: '-8%',
                  background: '#EDE8FE',
                  borderRadius: 20,
                  padding: '16px 20px',
                  maxWidth: 220,
                  boxShadow: '4px 4px 12px rgba(0,0,0,0.08)',
                }}>
                  <p style={{ fontSize: 11, fontStyle: 'italic', color: '#131313', lineHeight: 1.5, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                    „Gute Medizin braucht Zeit — und die nehme ich mir für alle Patient*innen."
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Trust bar */}
          <div className="hero-stats" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            maxWidth: 700,
            margin: '48px auto 0',
            borderTop: '1px solid rgba(100,59,248,0.15)',
            paddingTop: 32,
          }}>
            {[
              { num: '30+',      label: 'Jahre als Hausarzt in Krefeld-Elfrath' },
              { num: 'HHU',      label: 'Akademische Lehrpraxis Düsseldorf' },
              { num: 'Inklusiv', label: 'Alle Menschen sind willkommen' },
            ].map((stat, i) => (
              <div
                key={stat.num}
                style={{
                  textAlign: 'center',
                  padding: '0 24px',
                  borderRight: i < 2 ? '1px solid rgba(100,59,248,0.15)' : 'none',
                }}
              >
                <div style={{ fontSize: 24, fontWeight: 600, color: '#131313', letterSpacing: '-0.01em', lineHeight: 1.2 }}>
                  {stat.num}
                </div>
                <div style={{ fontSize: 13, color: '#8A8A8A', marginTop: 6, lineHeight: 1.4 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Wave transition to next section */}
        <div style={{ position: 'absolute', bottom: -1, left: 0, right: 0, lineHeight: 0 }}>
          <svg viewBox="0 0 1440 60" fill="#E5E1E2" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: 60, display: 'block' }}>
            <path d="M0,30 C360,70 1080,0 1440,35 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* ══════════════════ ÜBER DEN ARZT ══════════════════ */}
      <section style={{ background: '#E5E1E2', padding: '80px 24px 100px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <div style={{
              background: '#EEEAE7',
              borderRadius: 56,
              padding: 'clamp(32px, 5vw, 80px)',
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: 40,
            }} className="sm:grid-cols-2 sm:items-center sm:gap-12" id="ueber">

              {/* Photo with masked container */}
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: 380,
                  aspectRatio: '3/4',
                  borderRadius: 40,
                  overflow: 'hidden',
                  background: '#EDE8FE',
                }}>
                  <Image
                    src="/images/arzt.png"
                    alt="Dr. Frank van Dinther"
                    fill
                    sizes="(max-width: 640px) 80vw, 380px"
                    style={{ objectFit: 'contain', objectPosition: 'bottom center' }}
                  />
                </div>
              </div>

              {/* Text + qualifications */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <p style={{ fontSize: 11, fontWeight: 400, color: '#8A8A8A', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                    Ihr Hausarzt
                  </p>
                  <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 600, color: '#131313', letterSpacing: '-0.02em', lineHeight: 1.05 }}>
                    Frank van Dinther
                  </h2>
                  <div style={{ fontSize: 17, fontWeight: 400, color: '#131313', lineHeight: 1.65, display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <p>Als Facharzt für Allgemeinmedizin mit Zusatzbezeichnung Manuelle Medizin betreue ich meine Patientinnen und Patienten seit Jahrzehnten mit Sorgfalt, Empathie und medizinischer Kompetenz.</p>
                    <p>Mir ist wichtig, dass Sie sich bei mir gut aufgehoben fühlen — ob bei einem akuten Anliegen, einer chronischen Erkrankung oder einer Vorsorgeuntersuchung.</p>
                  </div>
                </div>

                {/* Qualification pills */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {qualifications.map((q, i) => (
                    <FadeIn key={q.label} delay={i * 60}>
                      <div className="qual-pill" style={{
                        display: 'flex', alignItems: 'center', gap: 12,
                        background: '#EDE8FE', border: '1px solid #643BF8',
                        borderRadius: 999, padding: '12px 20px',
                        cursor: 'default',
                      }}>
                        <q.icon size={18} strokeWidth={1.5} className="qual-icon" style={{ color: '#643BF8', flexShrink: 0 }} />
                        <span className="qual-label" style={{ fontSize: 15, fontWeight: 500, color: '#131313', letterSpacing: '0.06em', lineHeight: 1 }}>
                          {q.label}
                        </span>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>

            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════ LEISTUNGEN ══════════════════ */}
      <section id="leistungen" style={{ background: '#EEEAE7', padding: '100px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <div style={{ marginBottom: 56 }}>
              <p style={{ fontSize: 11, fontWeight: 400, color: '#8A8A8A', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 10 }}>
                Was wir für Sie tun
              </p>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 600, color: '#131313', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                Leistungsspektrum
              </h2>
            </div>
          </FadeIn>

          {/* Desktop: grid tiles */}
          <div className="hidden sm:grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {leistungen.map((l, i) => (
              <FadeIn key={l.title} delay={i * 60}>
                <div className="service-tile" style={{
                  background: '#fff',
                  borderRadius: 28,
                  padding: '28px 24px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                  border: '1px solid rgba(100,59,248,0.08)',
                }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 14,
                    background: '#EDE8FE', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    color: '#643BF8', flexShrink: 0,
                  }}>
                    <l.icon size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p style={{ fontSize: 16, fontWeight: 600, color: '#131313', letterSpacing: '-0.01em', marginBottom: 12 }}>
                      {l.title}
                    </p>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
                      {l.items.map(item => (
                        <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                          <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#643BF8', flexShrink: 0, marginTop: 7 }} />
                          <span style={{ fontSize: 13, color: '#8A8A8A', lineHeight: 1.5 }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Mobile: accordion */}
          <div className="flex flex-col sm:hidden" style={{ gap: 8 }}>
            {leistungen.map((l) => (
              <details
                key={l.title}
                style={{
                  background: '#fff',
                  borderRadius: 20,
                  border: '1px solid rgba(100,59,248,0.1)',
                  overflow: 'hidden',
                }}
              >
                <summary style={{
                  display: 'flex', alignItems: 'center', gap: 14,
                  padding: '16px 20px',
                  cursor: 'pointer',
                  userSelect: 'none',
                }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 12,
                    background: '#EDE8FE', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    color: '#643BF8', flexShrink: 0,
                  }}>
                    <l.icon size={17} strokeWidth={1.5} />
                  </div>
                  <span style={{ fontSize: 15, fontWeight: 600, color: '#131313', flex: 1 }}>{l.title}</span>
                  <ChevronRight size={16} strokeWidth={1.5} style={{ color: '#8A8A8A', transition: 'transform 0.2s', flexShrink: 0 }} />
                </summary>
                <div style={{ padding: '0 20px 16px 70px' }}>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {l.items.map(item => (
                      <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                        <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#643BF8', flexShrink: 0, marginTop: 7 }} />
                        <span style={{ fontSize: 13, color: '#8A8A8A', lineHeight: 1.5 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ SPRECHZEITEN ══════════════════ */}
      <section style={{ background: '#E5E1E2', padding: '100px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <p style={{ fontSize: 11, fontWeight: 400, color: '#8A8A8A', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 10 }}>
              Wann Sie uns finden
            </p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 600, color: '#131313', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: 48 }}>
              Sprechzeiten
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <OpeningHours />
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════ KONTAKT ══════════════════ */}
      <section style={{ background: '#EEEAE7', padding: '100px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <p style={{ fontSize: 11, fontWeight: 400, color: '#8A8A8A', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 10 }}>
              So finden Sie uns
            </p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 600, color: '#131313', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: 48 }}>
              Kontakt &amp; Anfahrt
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FadeIn>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  {
                    icon: MapPin,
                    label: 'Adresse',
                    content: <p style={{ fontSize: 15, color: '#131313', lineHeight: 1.6 }}>Neukirchener Straße 5<br />47829 Krefeld-Elfrath</p>,
                  },
                  {
                    icon: Phone,
                    label: 'Telefon',
                    content: (
                      <div>
                        <a href="tel:+492151478989" style={{ fontSize: 15, color: '#643BF8', fontWeight: 500, display: 'block' }}>02151 – 478989</a>
                        <p style={{ fontSize: 13, color: '#8A8A8A', marginTop: 4 }}>Service: 02151 5350714 · Fax: 02151 5350715</p>
                      </div>
                    ),
                  },
                  {
                    icon: Mail,
                    label: 'E-Mail',
                    content: <a href="mailto:info@praxis-vandinther.de" style={{ fontSize: 15, color: '#643BF8', fontWeight: 500 }}>info@praxis-vandinther.de</a>,
                  },
                ].map(({ icon: Icon, label, content }) => (
                  <div key={label} style={{
                    display: 'flex', alignItems: 'flex-start', gap: 16,
                    background: '#fff', borderRadius: 20, padding: '20px 24px',
                    border: '1px solid rgba(100,59,248,0.08)',
                  }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 12, background: '#EDE8FE',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#643BF8', flexShrink: 0,
                    }}>
                      <Icon size={17} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p style={{ fontSize: 11, color: '#8A8A8A', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 6 }}>{label}</p>
                      {content}
                    </div>
                  </div>
                ))}

                <Link href="/kontakt" style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 14, color: '#643BF8', fontWeight: 500, padding: '4px 0' }}>
                  Betriebsferien, Notfall &amp; mehr <ChevronRight size={14} strokeWidth={1.5} />
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <div style={{ borderRadius: 28, overflow: 'hidden', border: '1px solid rgba(100,59,248,0.1)', minHeight: 360, boxShadow: '4px 4px 20px rgba(100,59,248,0.06)' }}>
                <iframe
                  title="Praxis van Dinther – Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2498.6!2d6.582!3d51.340!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8b79c65200001%3A0x1!2sNeukirchener+Stra%C3%9Fe+5%2C+47829+Krefeld!5e0!3m2!1sde!2sde!4v1710000000000!5m2!1sde!2sde"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block', minHeight: 360 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══════════════════ FINAL CTA ══════════════════ */}
      <section style={{ background: '#131313', padding: '100px 24px' }}>
        <FadeIn>
          <div style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(30px, 4.5vw, 48px)', fontWeight: 600, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.05, marginBottom: 16 }}>
              Bereit für Ihren Termin?
            </h2>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, marginBottom: 40 }}>
              Buchen Sie bequem und rund um die Uhr online über Doctolib — für neue und bestehende Patienten.
            </p>
            <a
              href={DOCTOLIB}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                background: '#643BF8', color: '#fff',
                borderRadius: 999, padding: '16px 36px',
                fontSize: 15, fontWeight: 500, letterSpacing: '0.06em',
                boxShadow: '0 4px 24px rgba(100,59,248,0.4)',
              }}
            >
              <Calendar size={18} strokeWidth={1.5} />
              Jetzt Termin buchen
            </a>
            <p style={{ marginTop: 20, fontSize: 14, color: 'rgba(255,255,255,0.3)' }}>
              Oder anrufen:{' '}
              <a href="tel:+492151478989" style={{ color: 'rgba(255,255,255,0.5)' }}>02151 – 478989</a>
            </p>
          </div>
        </FadeIn>
      </section>

    </div>
  )
}
