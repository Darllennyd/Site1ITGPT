import Hero from '@/components/Hero'
import GlowCard from '@/components/GlowCard'
import Section from '@/components/Section'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Section title="Ключевые направления" subtitle="Телеком • Web3 • SaaS • Прокси-сервисы">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { t: 'Телеком', d: 'Интеграция лояльности, биллинга, CRM, аналитики.' },
            { t: 'Web3', d: 'Верификация и антифрод через Reclaim, on/off-chain интеграции.' },
            { t: 'SaaS', d: 'White-label продукты: HotelAI, Taskoria.' },
            { t: 'Прокси-сервисы', d: 'UzPlay для трафика и big data.' }
          ].map(x=>(
            <GlowCard key={x.t}>
              <div className="text-lg font-medium">{x.t}</div>
              <p className="text-white/70 mt-2">{x.d}</p>
            </GlowCard>
          ))}
        </div>
      </Section>
      <Section title="Продукты и сервисы">
        <div className="grid md:grid-cols-3 gap-6">
          {[{n:'Taskoria',h:'/products/taskoria'},{n:'HotelAI',h:'/products/hotelai'},{n:'UzPlay',h:'/products/uzplay'}].map(i=>(
            <GlowCard key={i.n}>
              <div className="flex items-center justify-between">
                <div className="text-lg font-medium">{i.n}</div>
                <Link href={i.h} className="text-neon-blue">Подробнее →</Link>
              </div>
            </GlowCard>
          ))}
        </div>
      </Section>
      <Section title="Кейсы" subtitle="Доказанная эффективность на живых продуктах">
        <div className="grid md:grid-cols-3 gap-6">
          {[{n:'Al Chiroq',h:'/cases/al-chiroq'},{n:'Oltin Baliq',h:'/cases/oltin-baliq'},{n:'Foyda+',h:'/cases/foyda-plus'}].map(i=>(
            <GlowCard key={i.n}>
              <div className="flex items-center justify-between">
                <div className="text-lg font-medium">{i.n}</div>
                <Link href={i.h} className="text-neon-blue">Открыть →</Link>
              </div>
            </GlowCard>
          ))}
        </div>
      </Section>
    </>
  )
}
