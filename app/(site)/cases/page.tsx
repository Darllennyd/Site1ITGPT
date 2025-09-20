import { cases } from '@/content/cases'
import Section from '@/components/Section'
import GlowCard from '@/components/GlowCard'
import Link from 'next/link'

export default function CasesPage(){
  return (
    <Section title="Портфолио (кейсы)" subtitle="Al Chiroq • Oltin Baliq • Foyda+">
      <div className="grid md:grid-cols-3 gap-6">
        {cases.map(c=>(
          <GlowCard key={c.slug}>
            <div className="text-lg font-medium">{c.name}</div>
            <p className="mt-2 text-white/70">{c.summary}</p>
            <div className="mt-4">
              <Link className="text-neon-blue" href={`/cases/${c.slug}`}>Смотреть кейс →</Link>
            </div>
          </GlowCard>
        ))}
      </div>
    </Section>
  )
}
