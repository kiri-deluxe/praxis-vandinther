import openingHours from '@/content/opening-hours.json'

interface TimeSlot {
  days: string
  hours: string
  note?: string
}

function TimeBlock({ title, slots, highlight = false }: { title: string; slots: TimeSlot[]; highlight?: boolean }) {
  return (
    <div className={`rounded-xl p-5 ${highlight ? 'bg-[#E8F2F9] border border-[#1D6FA4]/20' : 'bg-[#F5F5F7]'}`}>
      <p className="text-xs font-semibold uppercase tracking-wide text-[#6D6D72] mb-3">{title}</p>
      {slots.map((slot, i) => (
        <div key={i} className="flex justify-between items-start gap-4 mb-1 last:mb-0">
          <span className="text-sm text-[#3A3A3C]">{slot.days}</span>
          <div className="text-right">
            <span className="text-sm font-medium text-[#111112]">{slot.hours}</span>
            {slot.note && <p className="text-xs text-[#6D6D72] mt-0.5">{slot.note}</p>}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function OpeningHours() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <TimeBlock title="Termin-Sprechstunde" slots={openingHours.termin} highlight />
      <TimeBlock title="Ohne Termin" slots={openingHours.ohneTermin} />
      <TimeBlock title="Infekt-Sprechstunde" slots={openingHours.infekt} />
    </div>
  )
}
