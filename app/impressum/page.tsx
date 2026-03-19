import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum',
}

export default function ImpressumPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-semibold text-[#111112] mb-8">Impressum</h1>
      <div className="prose prose-sm max-w-none text-[#3A3A3C] space-y-6">
        <div>
          <h2 className="text-base font-semibold text-[#111112] mb-2">Angaben gemäß § 5 TMG</h2>
          <p>Frank van Dinther<br />
          Praxis für Allgemeinmedizin<br />
          Neukirchener Straße 5<br />
          47829 Krefeld</p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-[#111112] mb-2">Kontakt</h2>
          <p>Telefon: 02151 478989<br />
          Fax: 02151 475594<br />
          E-Mail: <a href="mailto:info@praxis-vandinther.de" className="text-[#1D6FA4] hover:underline">info@praxis-vandinther.de</a></p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-[#111112] mb-2">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
          <p>Berufsbezeichnung: Arzt (verliehen in Deutschland)<br />
          Zuständige Kammer: Ärztekammer Nordrhein<br />
          Zuständige Aufsichtsbehörde: Kassenärztliche Vereinigung Nordrhein</p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-[#111112] mb-2">EU-Streitschlichtung</h2>
          <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
        </div>
      </div>
    </div>
  )
}
