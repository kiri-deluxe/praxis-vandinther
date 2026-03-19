import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutz',
}

export default function DatenschutzPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-semibold text-[#111112] mb-8">Datenschutzerklärung</h1>
      <div className="text-sm text-[#3A3A3C] space-y-6">
        <div>
          <h2 className="text-base font-semibold text-[#111112] mb-2">1. Datenschutz auf einen Blick</h2>
          <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-[#111112] mb-2">2. Verantwortliche Stelle</h2>
          <p>Frank van Dinther<br />
          Neukirchener Straße 5<br />
          47829 Krefeld<br />
          E-Mail: <a href="mailto:info@praxis-vandinther.de" className="text-[#1D6FA4] hover:underline">info@praxis-vandinther.de</a></p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-[#111112] mb-2">3. Datenerfassung auf dieser Website</h2>
          <p>Diese Website erhebt keine personenbezogenen Daten über Besucher. Es werden keine Cookies gesetzt und keine Tracking-Dienste verwendet. Wenn Sie uns per E-Mail kontaktieren, werden Ihre Daten ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.</p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-[#111112] mb-2">4. Externe Links</h2>
          <p>Diese Website enthält Links zu Doctolib (doctolib.de). Für die Datenschutzpraktiken von Doctolib ist Doctolib S.A.S. verantwortlich. Bitte beachten Sie die Datenschutzerklärung von Doctolib.</p>
        </div>
      </div>
    </div>
  )
}
