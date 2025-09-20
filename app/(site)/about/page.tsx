import { company } from '@/content/company'
import Section from '@/components/Section'
import GlowCard from '@/components/GlowCard'

export default function AboutPage(){
  return (
    <>
      <Section title="О компании" subtitle={company.tagline}>
        <GlowCard>
          <p className="text-white/80">
            Мы — телеком-интегратор, создающий цифровые экосистемы и независимые stand-alone решения.
            Наши продукты встраиваются в инфраструктуру заказчика, обеспечивая гибкость, масштабирование и поддержку 2–3+ лет.
          </p>
        </GlowCard>
        <div className="grid md:grid-cols-2 gap-6">
          <GlowCard>
            <div className="font-medium mb-2">Миссия</div>
            <p className="text-white/70">Ускорять цифровую трансформацию клиентов без компромиссов по скорости и качеству.</p>
          </GlowCard>
          <GlowCard>
            <div className="font-medium mb-2">Ценности</div>
            <ul className="text-white/70 list-disc pl-5 space-y-1">
              {company.values.map(v=><li key={v}>{v}</li>)}
            </ul>
          </GlowCard>
        </div>
      </Section>
    </>
  )
}
