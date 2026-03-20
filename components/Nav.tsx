'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Menu, X, Calendar, Phone } from 'lucide-react'

const DOCTOLIB = 'https://www.doctolib.de/allgemeinmedizin/krefeld/frank-van-dinther/booking/new-patient?specialityId=1286&source=profile'

const navLinks = [
  { label: 'Startseite',       href: '/' },
  { label: 'Leistungen',       href: '/#leistungen' },
  { label: 'Für Studierende',  href: '/studierende' },
  { label: 'Kontakt',          href: '/kontakt' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    if (open) document.addEventListener('mousedown', handleOutside)
    return () => document.removeEventListener('mousedown', handleOutside)
  }, [open])

  return (
    <div ref={ref} style={{ position: 'fixed', top: 32, left: '50%', transform: 'translateX(-50%)', width: 'calc(100% - 32px)', maxWidth: 560, zIndex: 100 }}>
      {/* Pill navbar */}
      <nav style={{
        background: '#fff',
        borderRadius: 999,
        boxShadow: '-2px -2px 8px rgba(255,255,255,0.7), 2px 2px 10px rgba(223,223,223,0.5)',
        height: 56,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 8px 0 24px',
      }}>
        <Link href="/" onClick={() => setOpen(false)} style={{ display: 'flex', flexDirection: 'column', gap: 1, lineHeight: 1.2, textDecoration: 'none' }}>
          <span style={{ fontSize: 11, fontWeight: 400, color: '#8A8A8A', letterSpacing: '0.03em' }}>
            Praxis für Allgemeinmedizin
          </span>
          <span style={{ fontSize: 14, fontWeight: 600, color: '#131313', letterSpacing: '-0.01em' }}>
            Frank van Dinther · Krefeld
          </span>
        </Link>

        <button
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={open}
          style={{
            width: 48, height: 48, borderRadius: '50%', border: 'none', cursor: 'pointer',
            background: open ? '#643BF8' : 'transparent',
            color: open ? '#fff' : '#131313',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background 0.2s ease, color 0.2s ease',
            flexShrink: 0,
          }}
        >
          {open ? <X size={20} strokeWidth={1.75} /> : <Menu size={20} strokeWidth={1.75} />}
        </button>
      </nav>

      {/* Flyout panel */}
      <div style={{
        position: 'absolute',
        top: 'calc(100% + 8px)',
        left: 0,
        right: 0,
        background: '#fff',
        borderRadius: 28,
        boxShadow: '-2px -2px 8px rgba(255,255,255,0.7), 4px 4px 24px rgba(100,59,248,0.12)',
        padding: '8px 0 16px',
        opacity: open ? 1 : 0,
        transform: open ? 'translateY(0)' : 'translateY(-10px)',
        pointerEvents: open ? 'auto' : 'none',
        transition: 'opacity 0.25s cubic-bezier(0.16,1,0.3,1), transform 0.25s cubic-bezier(0.16,1,0.3,1)',
      }}>
        {navLinks.map(link => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            style={{ display: 'block', padding: '14px 24px', fontSize: 15, fontWeight: 400, color: '#131313' }}
            className="hover:bg-[#EDE8FE] hover:text-[#643BF8] transition-colors"
          >
            {link.label}
          </Link>
        ))}

        <div style={{ margin: '8px 16px 4px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          <a
            href={DOCTOLIB}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              background: '#643BF8', color: '#fff',
              borderRadius: 999, padding: '14px 20px',
              fontSize: 15, fontWeight: 500, letterSpacing: '0.06em',
            }}
          >
            <Calendar size={16} strokeWidth={1.75} />
            Termin vereinbaren
          </a>
          <a
            href="tel:+492151478989"
            onClick={() => setOpen(false)}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              border: '1.5px solid #643BF8', color: '#643BF8',
              borderRadius: 999, padding: '13px 20px',
              fontSize: 15, fontWeight: 500, letterSpacing: '0.06em',
              background: 'transparent',
            }}
          >
            <Phone size={15} strokeWidth={1.75} />
            02151 – 478989
          </a>
        </div>
      </div>
    </div>
  )
}
