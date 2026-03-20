'use client'

import { useRef, useEffect } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  easeOut,
} from 'framer-motion'
import Image from 'next/image'
import { Calendar, Phone, Stethoscope, Plus, GraduationCap, Award, House } from 'lucide-react'

const DOCTOLIB =
  'https://www.doctolib.de/allgemeinmedizin/krefeld/frank-van-dinther/booking/new-patient?specialityId=1286&source=profile'

const qualifications = [
  { icon: Stethoscope,  label: 'Facharzt für Allgemeinmedizin' },
  { icon: Plus,         label: 'Zusatzbezeichnung Manuelle Medizin / Chirotherapie' },
  { icon: GraduationCap,label: 'Lehrpraxis HHU Düsseldorf (IFAM)' },
  { icon: Award,        label: 'Weiterbildungsermächtigung Ärztekammer Nordrhein' },
  { icon: House,        label: 'Hausbesuche im Bedarfsfall' },
]

export default function HeroScrollTransition() {
  const containerRef      = useRef<HTMLDivElement>(null)
  const heroPhotoRef      = useRef<HTMLDivElement>(null)   // placeholder in sticky hero
  const s2PhotoRef        = useRef<HTMLDivElement>(null)   // placeholder in section 2

  /* ─── live bounds as MotionValues so derived transforms react to resize ─── */
  const hL = useMotionValue(0)
  const hT = useMotionValue(0)
  const hW = useMotionValue(480)
  const hH = useMotionValue(600)

  const sL = useMotionValue(0)
  const sT = useMotionValue(0)
  const sW = useMotionValue(280)
  const sH = useMotionValue(373)

  /* ─── measure hero placeholder (stable: hero is sticky) ─── */
  useEffect(() => {
    const update = () => {
      const r = heroPhotoRef.current?.getBoundingClientRect()
      if (!r) return
      hL.set(r.left); hT.set(r.top); hW.set(r.width); hH.set(r.height)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [hL, hT, hW, hH])

  /* ─── measure s2 placeholder continuously (moves with scroll) ─── */
  useEffect(() => {
    const update = () => {
      const r = s2PhotoRef.current?.getBoundingClientRect()
      if (!r) return
      sL.set(r.left); sT.set(r.top); sW.set(r.width); sH.set(r.height)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [sL, sT, sW, sH])

  /* ─── scroll progress through the entire container ─── */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  /* ─── phase 1: hero text (0 → 30%) ─── */
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0], { ease: easeOut })
  const heroY       = useTransform(scrollYProgress, [0, 0.3], [0, -20])

  /* ─── phase 2: photo eased progress (20% → 70%) ─── */
  const p = useTransform(scrollYProgress, [0.2, 0.7], [0, 1], { ease: easeOut })

  /* derived fixed-photo geometry */
  const fixedL  = useTransform(() => hL.get() + (sL.get() - hL.get()) * p.get())
  const fixedT  = useTransform(() => hT.get() + (sT.get() - hT.get()) * p.get())
  const fixedW  = useTransform(() => hW.get() + (sW.get() - hW.get()) * p.get())
  const fixedH  = useTransform(() => hH.get() + (sH.get() - hH.get()) * p.get())
  const fixedBR = useTransform(p, [0, 1], ['0px', '20px'])

  /* fixed photo: visible only during transition (cross-fade with statics) */
  const fixedOpacity    = useTransform(scrollYProgress, [0.1, 0.2, 0.75, 0.85], [0, 1, 1, 0])
  const heroImgOpacity  = useTransform(scrollYProgress, [0.1, 0.2], [1, 0])
  const s2ImgOpacity    = useTransform(scrollYProgress, [0.75, 0.85], [0, 1])

  /* ─── phase 3: section 2 text (65% → 100%) ─── */
  const s2Opacity = useTransform(scrollYProgress, [0.65, 1.0], [0, 1], { ease: easeOut })
  const s2Y       = useTransform(scrollYProgress, [0.65, 1.0], [20, 0])

  return (
    <div ref={containerRef} style={{ position: 'relative', isolation: 'isolate' }}>

      {/* ══════════════ STICKY HERO ══════════════ */}
      <section style={{
        position: 'sticky', top: 0,
        height: '100vh', overflow: 'hidden',
        background: '#EEEAE7', zIndex: 1,
        display: 'flex', alignItems: 'center',
      }}>
        {/* Blob */}
        <div style={{
          position: 'absolute', right: '-5%', top: '-10%',
          width: '65%', aspectRatio: '1/1',
          background: 'radial-gradient(circle, #EDE8FE 0%, #e4dffc 30%, transparent 70%)',
          borderRadius: '50%', pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8 sm:gap-0">

            {/* ── Hero text (fades out) ── */}
            <motion.div
              className="order-2 sm:order-1 flex flex-col items-start"
              style={{ gap: 32, paddingBottom: 40, position: 'relative', zIndex: 3, opacity: heroOpacity, y: heroY }}
            >
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

              <h1 className="hero-headline" style={{
                fontSize: 'clamp(38px, 5.5vw, 56px)', fontWeight: 600,
                lineHeight: 1.05, letterSpacing: '-0.02em', color: '#131313', margin: 0,
              }}>
                <span style={{ color: '#643BF8' }}>Medizin</span>
                {', die sich Zeit nimmt.'}
              </h1>

              <p className="hero-body" style={{ fontSize: 17, color: '#131313', lineHeight: 1.65, maxWidth: 400, margin: 0 }}>
                Persönliche Betreuung für die ganze Familie — verständlich, nah und mit echtem Interesse an Ihrer Gesundheit.
              </p>

              <div className="hero-buttons" style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%', maxWidth: 340 }}>
                <a href={DOCTOLIB} target="_blank" rel="noopener noreferrer" className="btn-primary"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, background: '#643BF8', color: '#fff', borderRadius: 999, padding: '14px 24px', fontSize: 15, fontWeight: 500, letterSpacing: '0.06em' }}>
                  <Calendar size={18} strokeWidth={1.5} />
                  Termin vereinbaren
                </a>
                <a href="tel:+492151478989" className="btn-outline"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, border: '1.5px solid #643BF8', color: '#643BF8', borderRadius: 999, padding: '13px 24px', fontSize: 15, fontWeight: 500, letterSpacing: '0.06em', background: 'transparent' }}>
                  <Phone size={17} strokeWidth={1.5} />
                  02151 – 478989
                </a>
              </div>
            </motion.div>

            {/* ── Hero photo placeholder ── */}
            <div className="order-1 sm:order-2" style={{ display: 'flex', justifyContent: 'center', zIndex: 1 }}>
              <motion.div
                ref={heroPhotoRef}
                style={{ position: 'relative', width: '100%', maxWidth: 480, opacity: heroImgOpacity }}
              >
                <Image
                  src="/images/arzt.png"
                  alt="Dr. Frank van Dinther"
                  width={480} height={600}
                  sizes="(max-width: 640px) 80vw, 40vw"
                  style={{ objectFit: 'contain', objectPosition: 'bottom', width: '100%', height: 'auto' }}
                  priority
                />
                <div className="hero-quote hidden sm:block" style={{
                  position: 'absolute', bottom: '18%', right: '-8%',
                  background: '#EDE8FE', borderRadius: 20, padding: '16px 20px', maxWidth: 220,
                  boxShadow: '4px 4px 12px rgba(0,0,0,0.08)',
                }}>
                  <p style={{ fontSize: 11, fontStyle: 'italic', color: '#131313', lineHeight: 1.5, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                    „Gute Medizin braucht Zeit — und die nehme ich mir für alle Patient*innen."
                  </p>
                </div>
              </motion.div>
            </div>

          </div>

          {/* Trust bar */}
          <div className="hero-stats" style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
            maxWidth: 700, margin: '48px auto 0',
            borderTop: '1px solid rgba(100,59,248,0.15)', paddingTop: 32,
            position: 'relative', zIndex: 3,
          }}>
            {[
              { num: '30+',       label: 'Jahre als Hausarzt in Krefeld-Elfrath' },
              { num: 'HHU',       label: 'Akademische Lehrpraxis Düsseldorf' },
              { num: 'Inklusiv',  label: 'Alle Menschen sind willkommen' },
            ].map((stat, i) => (
              <div key={stat.num} style={{ textAlign: 'center', padding: '0 24px', borderRight: i < 2 ? '1px solid rgba(100,59,248,0.15)' : 'none' }}>
                <div style={{ fontSize: 24, fontWeight: 600, color: '#131313', letterSpacing: '-0.01em', lineHeight: 1.2 }}>{stat.num}</div>
                <div style={{ fontSize: 13, color: '#8A8A8A', marginTop: 6, lineHeight: 1.4 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Wave over photo */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, lineHeight: 0, zIndex: 2, pointerEvents: 'none' }}>
          <svg viewBox="0 0 1440 220" fill="#E5E1E2" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
            style={{ width: '100%', height: 'clamp(120px, 18vw, 220px)', display: 'block' }}>
            <path d="M0,100 C320,20 800,180 1440,60 L1440,220 L0,220 Z" />
          </svg>
        </div>
      </section>

      {/* ══════════════ SCROLL SPACER ══════════════ */}
      <div aria-hidden style={{ height: '150vh', background: '#E5E1E2' }} />

      {/* ══════════════ SECTION 2 ══════════════ */}
      {/* position: sticky zIndex: 2 so it slides up OVER the hero */}
      <section style={{ position: 'sticky', top: 0, background: '#FFFFFF', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '80px 24px 100px', zIndex: 2 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-12">

            {/* Photo placeholder – hidden until animation deposits photo */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <motion.div
                ref={s2PhotoRef}
                style={{
                  position: 'relative',
                  width: '100%', maxWidth: 280,
                  aspectRatio: '3/4',
                  borderRadius: 20, overflow: 'hidden',
                  background: '#EDE8FE',
                  opacity: s2ImgOpacity,
                }}
              >
                <Image
                  src="/images/arzt.png"
                  alt="Dr. Frank van Dinther"
                  fill
                  sizes="(max-width: 640px) 80vw, 280px"
                  style={{ objectFit: 'contain', objectPosition: 'bottom center' }}
                />
              </motion.div>
            </div>

            {/* Text block (fades in) */}
            <motion.div
              style={{ display: 'flex', flexDirection: 'column', gap: 24, opacity: s2Opacity, y: s2Y }}
            >
              <p style={{ fontSize: 11, fontWeight: 400, color: '#8A8A8A', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                Über mich
              </p>
              <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 600, color: '#131313', letterSpacing: '-0.02em', lineHeight: 1.1, margin: 0 }}>
                Ihr Arzt in Krefeld seit über 20 Jahren.
              </h2>
              <p style={{ fontSize: 17, color: '#131313', lineHeight: 1.65, margin: 0 }}>
                Als Facharzt für Allgemeinmedizin begleite ich meine Patienten umfassend — von der Vorsorge bis zur Behandlung, für die ganze Familie.
              </p>

              {/* Qualification pills */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 8 }}>
                {qualifications.map((q) => (
                  <div key={q.label} className="qual-pill" style={{
                    display: 'flex', alignItems: 'center', gap: 12,
                    background: '#EDE8FE', border: '1px solid #643BF8',
                    borderRadius: 999, padding: '12px 20px',
                  }}>
                    <q.icon size={18} strokeWidth={1.5} className="qual-icon" style={{ color: '#643BF8', flexShrink: 0 }} />
                    <span className="qual-label" style={{ fontSize: 15, fontWeight: 500, color: '#131313', letterSpacing: '0.06em', lineHeight: 1 }}>
                      {q.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════ FIXED PHOTO (animation layer) ══════════════ */}
      {/* Desktop only — hidden on mobile via sm: breakpoint trick */}
      <motion.div
        className="hidden sm:block"
        style={{
          position: 'fixed',
          left: fixedL,
          top: fixedT,
          width: fixedW,
          height: fixedH,
          borderRadius: fixedBR,
          overflow: 'hidden',
          zIndex: 20,
          opacity: fixedOpacity,
          pointerEvents: 'none',
          willChange: 'transform',
        }}
      >
        <Image
          src="/images/arzt.png"
          alt="Dr. Frank van Dinther"
          fill
          sizes="50vw"
          style={{ objectFit: 'contain', objectPosition: 'bottom center' }}
          priority
        />
      </motion.div>

    </div>
  )
}
