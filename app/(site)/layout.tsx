import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { company } from '@/content/company'

export const metadata: Metadata = {
  title: `${company.name} — цифровые экосистемы и white-label`,
  description: company.tagline,
  openGraph: {
    title: company.name,
    description: company.tagline,
    images: ['/og-preview.jpg']
  },
  metadataBase: new URL('https://your-vercel-domain.example')
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
