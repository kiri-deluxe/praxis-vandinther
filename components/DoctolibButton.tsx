interface DoctolibButtonProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function DoctolibButton({ size = 'md', className = '' }: DoctolibButtonProps) {
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <a
      href="https://www.doctolib.de/allgemeinmedizin/krefeld/frank-van-dinther/booking/new-patient?specialityId=1286&source=profile"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 bg-[#1D6FA4] text-white font-medium rounded-xl hover:bg-[#1a5f8e] transition-colors shadow-sm ${sizes[size]} ${className}`}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
      Termin vereinbaren
    </a>
  )
}
