import Section from '@/components/Section'
import GlowCard from '@/components/GlowCard'

export default function UzPlayPage(){
  return (
    <Section title="UzPlay" subtitle="Прокси-сервис и управление трафиком для компаний">
      <GlowCard>
        <p className="text-white/80">
          Управление пулами IP, квотами и лимитами, биллинг, SDK и REST-интеграции. Комплаенс и отчётность для big data задач.
        </p>
      </GlowCard>
      <div className="grid md:grid-cols-3 gap-6">
        {['Пулы IP и геораспределение','Лимиты и квоты','SDK/REST интеграция'].map(f=>(
          <GlowCard key={f}><div className="font-medium">{f}</div></GlowCard>
        ))}
      </div>
    </Section>
  )
}
