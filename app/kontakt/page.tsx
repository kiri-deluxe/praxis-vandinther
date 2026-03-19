import type { Metadata } from 'next'
import OpeningHours from '@/components/OpeningHours'
import holidays from '@/content/holidays.json'

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Adresse, Telefon, Öffnungszeiten und Anfahrt zur Praxis für Allgemeinmedizin Frank van Dinther in Krefeld-Elfrath.',
}

export default function KontaktPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-semibold text-[#111112] mb-10">Kontakt &amp; Anfahrt</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Contact details */}
        <div className="space-y-6">
          <div>
            <h2 className="text-base font-semibold text-[#111112] mb-3">Adresse</h2>
            <address className="not-italic text-sm text-[#3A3A3C] space-y-1">
              <p className="font-medium">Praxis für Allgemeinmedizin Frank van Dinther</p>
              <p>Neukirchener Straße 5</p>
              <p>47829 Krefeld-Elfrath</p>
            </address>
          </div>

          <div>
            <h2 className="text-base font-semibold text-[#111112] mb-3">Telefon &amp; Fax</h2>
            <div className="text-sm space-y-1">
              <p>
                <span className="text-[#6D6D72]">Praxis: </span>
                <a href="tel:+492151478989" className="text-[#1D6FA4] hover:underline font-medium">02151 478989</a>
              </p>
              <p>
                <span className="text-[#6D6D72]">Service: </span>
                <a href="tel:+4921515350714" className="text-[#1D6FA4] hover:underline font-medium">02151 5350714</a>
              </p>
              <p>
                <span className="text-[#6D6D72]">Fax: </span>
                <span>02151 475594</span>
              </p>
              <p className="pt-1">
                <span className="text-[#6D6D72]">E-Mail: </span>
                <a href="mailto:info@praxis-vandinther.de" className="text-[#1D6FA4] hover:underline">info@praxis-vandinther.de</a>
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-base font-semibold text-[#111112] mb-3">ÖPNV</h2>
            <p className="text-sm text-[#3A3A3C]">
              Straßenbahn 042 / Bus 058<br />
              Haltestelle: <strong>Neukirchener Straße</strong>
            </p>
          </div>
        </div>

        {/* Map */}
        <div>
          <h2 className="text-base font-semibold text-[#111112] mb-3">Karte</h2>
          <div className="rounded-xl overflow-hidden border border-[#EBEBED] h-64 sm:h-80">
            <iframe
              title="Praxis van Dinther auf Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.0!2d6.5800!3d51.3600!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sNeukirchener+Stra%C3%9Fe+5%2C+47829+Krefeld!5e0!3m2!1sde!2sde!4v1000000000000!5m2!1sde!2sde"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* Opening Hours */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold text-[#111112] mb-6">Sprechzeiten</h2>
        <OpeningHours />
      </div>

      {/* Holidays */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold text-[#111112] mb-4">Betriebsferien {holidays.year}</h2>
        <div className="bg-[#F5F5F7] rounded-xl p-6">
          <ul className="space-y-2">
            {holidays.periods.map((period, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-[#3A3A3C]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1D6FA4] flex-shrink-0" />
                {period.label}
              </li>
            ))}
          </ul>
          <p className="text-xs text-[#6D6D72] mt-4">In der Betriebsferienzeit wird eine Vertretung organisiert. Bitte informieren Sie sich rechtzeitig.</p>
        </div>
      </div>

      {/* Emergency */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-6">
        <h2 className="text-base font-semibold text-red-800 mb-3 flex items-center gap-2">
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 20 20" className="text-red-600">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          Notfall
        </h2>
        <div className="text-sm text-red-700 space-y-1">
          <p>
            <strong>Kassenärztlicher Bereitschaftsdienst:</strong>{' '}
            <a href="tel:116117" className="font-bold hover:underline">116 117</a>
            <span className="text-xs ml-2 text-red-600">(außerhalb der Sprechzeiten)</span>
          </p>
          <p>
            <strong>Notarzt / Rettungsdienst:</strong>{' '}
            <a href="tel:112" className="font-bold hover:underline">112</a>
          </p>
        </div>
      </div>
    </div>
  )
}
