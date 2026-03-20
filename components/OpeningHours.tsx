import openingHours from '@/content/opening-hours.json'

interface TimeSlot {
  days: string
  hours: string
  note?: string
}

function TimeBlock({ title, slots, accent = false }: { title: string; slots: TimeSlot[]; accent?: boolean }) {
  return (
    <div style={{
      background: accent ? '#EDE8FE' : '#fff',
      border: accent ? '1px solid #643BF8' : '1px solid rgba(100,59,248,0.08)',
      borderRadius: 24,
      padding: '24px',
    }}>
      {accent && (
        <div style={{ width: 24, height: 3, background: '#643BF8', borderRadius: 999, marginBottom: 16 }} />
      )}
      <p style={{
        fontSize: 10, fontWeight: 600, letterSpacing: '0.09em', textTransform: 'uppercase',
        color: accent ? '#643BF8' : '#8A8A8A', marginBottom: 18,
      }}>
        {title}
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {slots.map((slot, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
            <span style={{ fontSize: 13, color: '#8A8A8A', fontWeight: 400 }}>{slot.days}</span>
            <div style={{ textAlign: 'right' }}>
              <span style={{ fontSize: 14, fontWeight: 600, color: '#131313', letterSpacing: '-0.01em', fontVariantNumeric: 'tabular-nums' }}>
                {slot.hours}
              </span>
              {slot.note && (
                <p style={{ fontSize: 11, color: '#8A8A8A', marginTop: 2 }}>{slot.note}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function OpeningHours() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      <TimeBlock title="Termin-Sprechstunde" slots={openingHours.termin} accent />
      <TimeBlock title="Ohne Termin"          slots={openingHours.ohneTermin} />
      <TimeBlock title="Infekt-Sprechstunde"  slots={openingHours.infekt} />
    </div>
  )
}
