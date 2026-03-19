import type { Metadata } from 'next'
import DoctolibButton from '@/components/DoctolibButton'
import OpeningHours from '@/components/OpeningHours'

export const metadata: Metadata = {
  title: 'Startseite',
  description: 'Allgemein- und Familienmedizin für die ganze Familie in Krefeld-Elfrath. Jetzt Termin vereinbaren.',
}

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-white py-16 sm:py-24 border-b border-[#EBEBED]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#1D6FA4] mb-4 uppercase tracking-wide">Allgemeinmedizin · Krefeld-Elfrath</p>
            <h1 className="text-3xl sm:text-5xl font-semibold text-[#111112] leading-tight mb-4">
              Ihre Gesundheit in guten Händen.
            </h1>
            <p className="text-lg text-[#6D6D72] mb-8">
              Allgemein- und Familienmedizin für die ganze Familie in Krefeld-Elfrath.
            </p>
            <DoctolibButton size="lg" />
          </div>
        </div>
      </section>

      {/* Opening Hours */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-semibold text-[#111112] mb-6">Sprechzeiten</h2>
          <OpeningHours />
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-[#F5F5F7] border-t border-[#EBEBED]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold text-[#111112] mb-4">Kontakt &amp; Anschrift</h2>
              <address className="not-italic text-sm text-[#3A3A3C] space-y-1">
                <p className="font-medium">Praxis für Allgemeinmedizin Frank van Dinther</p>
                <p>Neukirchener Straße 5</p>
                <p>47829 Krefeld-Elfrath</p>
                <div className="pt-3 space-y-1">
                  <p>
                    <span className="text-[#6D6D72]">Tel: </span>
                    <a href="tel:+492151478989" className="text-[#1D6FA4] hover:underline">02151 478989</a>
                  </p>
                  <p>
                    <span className="text-[#6D6D72]">Fax: </span>
                    <span>02151 475594</span>
                  </p>
                  <p>
                    <span className="text-[#6D6D72]">E-Mail: </span>
                    <a href="mailto:info@praxis-vandinther.de" className="text-[#1D6FA4] hover:underline">info@praxis-vandinther.de</a>
                  </p>
                </div>
              </address>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-[#111112] mb-4">Online Termin</h2>
              <p className="text-sm text-[#6D6D72] mb-4">
                Neue und bestehende Patienten können bequem online über Doctolib einen Termin vereinbaren.
              </p>
              <DoctolibButton size="md" />
              <p className="text-xs text-[#6D6D72] mt-3">
                Oder besuchen Sie unser{' '}
                <a
                  href="https://www.doctolib.de/allgemeinmedizin/krefeld/frank-van-dinther?utm_medium=referral&utm_campaign=website-button&utm_content=option-5&utm_term=frank-van-dinther&utm_source=frank-van-dinther-website-button"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1D6FA4] hover:underline"
                >
                  Doctolib-Profil
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="bg-[#E8F2F9] border-t border-[#1D6FA4]/20 py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 mt-0.5">
              <div className="w-6 h-6 rounded-full bg-[#1D6FA4] flex items-center justify-center">
                <svg width="12" height="12" fill="white" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <p className="text-sm text-[#1D6FA4] font-medium">
              Akademische Lehrpraxis des IFAM der Heinrich-Heine-Universität Düsseldorf &amp; Weiterbildungspraxis der Ärztekammer Nordrhein
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
