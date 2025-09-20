import Link from 'next/link'
import { company } from '@/content/company'
import { partners } from '@/content/partners'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="text-lg font-semibold">NovaTel Integrations</div>
          <p className="mt-2 text-white/70">{company.tagline}</p>
          <div className="mt-4 text-sm text-white/60">© {new Date().getFullYear()} NovaTel</div>
        </div>
        <div>
          <div className="font-medium mb-2">Партнёры</div>
          <ul className="space-y-2">
            {partners.featured.map(p => (
              <li key={p.name}><Link className="hover:text-neon-blue" href={p.url} target="_blank">{p.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-medium mb-2">Контакты</div>
          <ul className="text-white/80 space-y-1">
            <li>{company.contacts.email}</li>
            <li>{company.contacts.phone}</li>
            <li>{company.contacts.address}</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
