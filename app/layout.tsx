import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    template: '%s | Praxis van Dinther · Allgemeinmedizin Krefeld',
    default: 'Praxis für Allgemeinmedizin Frank van Dinther · Krefeld',
  },
  description: 'Allgemein- und Familienmedizin für die ganze Familie in Krefeld-Elfrath. Jetzt Termin vereinbaren über Doctolib.',
  keywords: ['Arztpraxis', 'Allgemeinmedizin', 'Krefeld', 'Hausarzt', 'Frank van Dinther', 'Elfrath'],
  openGraph: {
    title: 'Praxis für Allgemeinmedizin Frank van Dinther · Krefeld',
    description: 'Allgemein- und Familienmedizin für die ganze Familie in Krefeld-Elfrath.',
    locale: 'de_DE',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
