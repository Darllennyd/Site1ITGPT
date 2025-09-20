import Section from '@/components/Section'
import GlowCard from '@/components/GlowCard'

export default function HotelAIPage(){
  return (
    <Section title="HotelAI" subtitle="SaaS-ассистент в Telegram WebApp">
      <GlowCard>
        <p className="text-white/80">
          Роли: администратор, горничная, инженер, гость. Автопостановка задач (уборка, ремонт, обслуживание), уведомления, SLA.
          Мини-CRM под отель, отчётность по сменам и номерам.
        </p>
      </GlowCard>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {['Роли и маршрутизация','WebApp-интерфейсы','Сбор метрик и отчёты','Уведомления','SLA-статусы','Экспорт в BI'].map(f=>(
          <GlowCard key={f}><div className="font-medium">{f}</div></GlowCard>
        ))}
      </div>
    </Section>
  )
}
