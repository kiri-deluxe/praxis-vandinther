import type { Metadata } from 'next'
import DoctolibButton from '@/components/DoctolibButton'

export const metadata: Metadata = {
  title: 'Leistungen',
  description: 'Unser Leistungsspektrum: Diagnostik, Vorsorge, Kassenleistungen, Disease Management Programme und IGeL-Leistungen.',
}

const sections = [
  {
    title: 'Diagnostik',
    icon: '🔬',
    items: [
      'Labor',
      'EKG / Belastungs-EKG',
      'Langzeitblutdruckmessung',
      'Lungenfunktionstest',
      'Sonografie (Schilddrüse, Thorax, Abdomen, Weichteile)',
    ],
  },
  {
    title: 'Vorsorge',
    icon: '🩺',
    items: [
      'Darmkrebs-Früherkennung',
      'Prostatakrebs-Früherkennung',
      'Hautkrebs-Screening',
      'Check-up 35',
      'Bauchaortenaneurysma-Screening',
      'Jugendgesundheitsuntersuchungen (J1/J2)',
      'Demenzfrüherkennung',
    ],
  },
  {
    title: 'Kassenleistungen',
    icon: '💳',
    items: [
      'Impfungen gemäß STIKO-Empfehlungen',
      'Chirotherapie',
      'Psychosomatische Grundversorgung',
      'Kleine Chirurgie',
      'Physikalische Therapie (Wärme, Elektro, Inhalation)',
    ],
  },
  {
    title: 'Disease Management Programme (DMP)',
    icon: '📋',
    items: [
      'Diabetes mellitus Typ 2',
      'Koronare Herzkrankheit (KHK)',
      'Asthma bronchiale',
      'COPD',
    ],
  },
  {
    title: 'IGeL – Individuelle Gesundheitsleistungen',
    icon: '✨',
    items: [
      'Erweiterter Check-up',
      'Erweiterte Blutuntersuchungen',
      'PSA-Bestimmung',
      'Ultraschall auf Wunsch',
      'Reisemedizinische Beratung und Impfungen',
      'Sporttauglichkeitsuntersuchung',
      'Atteste und ärztliche Bescheinigungen',
    ],
  },
]

export default function LeistungenPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-semibold text-[#111112] mb-3">Unsere Leistungen</h1>
        <p className="text-[#6D6D72] text-lg max-w-2xl">
          Wir bieten Ihnen ein umfassendes Spektrum an medizinischen Leistungen – von der Vorsorge bis zur Behandlung akuter und chronischer Erkrankungen.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {sections.map((section) => (
          <div key={section.title} className="bg-[#F5F5F7] rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{section.icon}</span>
              <h2 className="text-base font-semibold text-[#111112]">{section.title}</h2>
            </div>
            <ul className="space-y-2">
              {section.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[#3A3A3C]">
                  <span className="text-[#1D6FA4] mt-0.5 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-[#E8F2F9] rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-base font-semibold text-[#111112] mb-1">Fragen zu unseren Leistungen?</h2>
          <p className="text-sm text-[#6D6D72]">Wir beraten Sie gerne – vereinbaren Sie jetzt Ihren Termin.</p>
        </div>
        <DoctolibButton size="md" />
      </div>
    </div>
  )
}
