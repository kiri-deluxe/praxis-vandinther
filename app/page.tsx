import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Calendar, Phone,
  FlaskConical, ShieldCheck, Heart, ClipboardList, Luggage,
  MapPin, Mail, ChevronRight,
} from 'lucide-react'
import FadeIn from '@/components/FadeIn'
import OpeningHours from '@/components/OpeningHours'
import HeroScrollTransition from '@/components/HeroScrollTransition'

const DOCTOLIB = 'https://www.doctolib.de/allgemeinmedizin/krefeld/frank-van-dinther/booking/new-patient?specialityId=1286&source=profile'

export const metadata: Metadata = {
  title: 'Startseite – Praxis van Dinther',
  description: 'Allgemein- und Familienmedizin für die ganze Familie in Krefeld-Elfrath. Jetzt Termin vereinbaren.',
}

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

      {/* ══════════════════ HERO + SECTION 2 (scroll transition) ══════════════════ */}
      <HeroScrollTransition />

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
