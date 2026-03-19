import type { Metadata } from 'next'
import documents from '@/content/documents.json'

export const metadata: Metadata = {
  title: 'Für Studierende',
  description: 'Informationen zur akademischen Lehrpraxis des IFAM der HHU Düsseldorf und Weiterbildungspraxis der Ärztekammer Nordrhein.',
}

export default function StudierendePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-semibold text-[#111112] mb-3">Für Studierende &amp; Weiterbildung</h1>
        <p className="text-[#6D6D72] text-lg max-w-2xl">
          Unsere Praxis ist anerkannte Lehr- und Weiterbildungsstätte für angehende Ärztinnen und Ärzte.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
        <div className="bg-[#E8F2F9] rounded-xl p-6 border border-[#1D6FA4]/20">
          <div className="w-10 h-10 bg-[#1D6FA4] rounded-lg flex items-center justify-center mb-4">
            <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
              <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
              <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
            </svg>
          </div>
          <h2 className="text-base font-semibold text-[#111112] mb-2">Akademische Lehrpraxis</h2>
          <p className="text-sm text-[#3A3A3C]">
            Wir sind anerkannte akademische Lehrpraxis des Instituts für Allgemeinmedizin (IFAM) der{' '}
            <strong>Heinrich-Heine-Universität Düsseldorf</strong>. Medizinstudierende können bei uns ihre Famulatur und das Praktische Jahr absolvieren.
          </p>
        </div>

        <div className="bg-[#F5F5F7] rounded-xl p-6">
          <div className="w-10 h-10 bg-[#3A3A3C] rounded-lg flex items-center justify-center mb-4">
            <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/>
            </svg>
          </div>
          <h2 className="text-base font-semibold text-[#111112] mb-2">Weiterbildungspraxis</h2>
          <p className="text-sm text-[#3A3A3C]">
            Unsere Praxis ist von der{' '}
            <strong>Ärztekammer Nordrhein</strong> als Weiterbildungspraxis für das Fach Allgemeinmedizin anerkannt. Wir bilden Ärztinnen und Ärzte in Weiterbildung aus.
          </p>
        </div>
      </div>

      {/* Documents */}
      <div>
        <h2 className="text-xl font-semibold text-[#111112] mb-6">Dokumente &amp; Downloads</h2>
        <div className="space-y-3">
          {documents.documents.map((doc) => (
            <div key={doc.id} className="flex items-center justify-between gap-4 bg-white border border-[#EBEBED] rounded-xl p-4 hover:border-[#1D6FA4]/40 transition-colors">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  <svg width="20" height="20" fill="none" stroke="#1D6FA4" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#111112]">{doc.title}</p>
                  <p className="text-xs text-[#6D6D72] mt-0.5">{doc.description}</p>
                </div>
              </div>
              <a
                href={doc.file}
                download
                className="flex-shrink-0 text-xs font-medium text-[#1D6FA4] hover:underline flex items-center gap-1"
              >
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download
              </a>
            </div>
          ))}
        </div>
        <p className="text-xs text-[#6D6D72] mt-4">
          Weitere Informationen erhalten Sie direkt in der Praxis oder per E-Mail an{' '}
          <a href="mailto:info@praxis-vandinther.de" className="text-[#1D6FA4] hover:underline">info@praxis-vandinther.de</a>.
        </p>
      </div>
    </div>
  )
}
