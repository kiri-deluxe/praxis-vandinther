import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#F5F5F7] border-t border-[#EBEBED] mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <p className="text-sm font-semibold text-[#111112] mb-2">Praxis van Dinther</p>
            <p className="text-sm text-[#6D6D72]">Allgemeinmedizin für die ganze Familie in Krefeld-Elfrath.</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-[#111112] mb-2">Kontakt</p>
            <p className="text-sm text-[#6D6D72]">Neukirchener Straße 5<br />47829 Krefeld-Elfrath</p>
            <a href="tel:+4921514789890" className="text-sm text-[#1D6FA4] hover:underline block mt-1">02151 478989</a>
          </div>
          <div>
            <p className="text-sm font-semibold text-[#111112] mb-2">Navigation</p>
            <div className="flex flex-col gap-1">
              <Link href="/leistungen" className="text-sm text-[#6D6D72] hover:text-[#1D6FA4]">Leistungen</Link>
              <Link href="/studierende" className="text-sm text-[#6D6D72] hover:text-[#1D6FA4]">Studierende</Link>
              <Link href="/kontakt" className="text-sm text-[#6D6D72] hover:text-[#1D6FA4]">Kontakt</Link>
              <Link href="/impressum" className="text-sm text-[#6D6D72] hover:text-[#1D6FA4]">Impressum</Link>
              <Link href="/datenschutz" className="text-sm text-[#6D6D72] hover:text-[#1D6FA4]">Datenschutz</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-[#EBEBED] mt-8 pt-6 text-center">
          <p className="text-xs text-[#6D6D72]">© {new Date().getFullYear()} Praxis für Allgemeinmedizin Frank van Dinther · Krefeld</p>
        </div>
      </div>
    </footer>
  )
}
