'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-[#EBEBED] sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex flex-col leading-tight">
            <span className="text-sm text-[#111112]" style={{fontWeight: 600}}>Dr. med. Frank van Dinther</span>
            <span className="text-xs text-[#6D6D72]">Allgemeinmedizin · Krefeld</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm text-[#3A3A3C] hover:text-[#1D6FA4] transition-colors">Startseite</Link>
            <Link href="/leistungen" className="text-sm text-[#3A3A3C] hover:text-[#1D6FA4] transition-colors">Leistungen</Link>
            <Link href="/studierende" className="text-sm text-[#3A3A3C] hover:text-[#1D6FA4] transition-colors">Studierende</Link>
            <Link href="/kontakt" className="text-sm text-[#3A3A3C] hover:text-[#1D6FA4] transition-colors">Kontakt</Link>
            <a
              href="https://www.doctolib.de/allgemeinmedizin/krefeld/frank-van-dinther/booking/new-patient?specialityId=1286&source=profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium bg-[#1D6FA4] text-white px-4 py-2 rounded-lg hover:bg-[#1a5f8e] transition-colors"
            >
              Termin vereinbaren
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-[#3A3A3C]"
            aria-label="Menü öffnen"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={2}>
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-[#EBEBED] py-4 flex flex-col gap-4">
            <Link href="/" onClick={() => setOpen(false)} className="text-sm text-[#3A3A3C]">Startseite</Link>
            <Link href="/leistungen" onClick={() => setOpen(false)} className="text-sm text-[#3A3A3C]">Leistungen</Link>
            <Link href="/studierende" onClick={() => setOpen(false)} className="text-sm text-[#3A3A3C]">Studierende</Link>
            <Link href="/kontakt" onClick={() => setOpen(false)} className="text-sm text-[#3A3A3C]">Kontakt</Link>
            <a
              href="https://www.doctolib.de/allgemeinmedizin/krefeld/frank-van-dinther/booking/new-patient?specialityId=1286&source=profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium bg-[#1D6FA4] text-white px-4 py-2 rounded-lg text-center"
            >
              Termin vereinbaren
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
