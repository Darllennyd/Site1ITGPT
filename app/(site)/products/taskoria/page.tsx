import Section from '@/components/Section'
import GlowCard from '@/components/GlowCard'

export default function TaskoriaPage(){
  return (
    <Section title="Taskoria" subtitle="CPI-платформа задач с монетизацией">
      <GlowCard>
        <p className="text-white/80">
          Пользователь регистрируется, выполняет задания и получает вознаграждение. Поддержка CPI/CPA-кампаний, антифрод,
          геймификация, реферальная система, дашборды. White-label.
        </p>
      </GlowCard>
      <div className="grid md:grid-cols-3 gap-6">
        {['Антифрод и скоринг','Геймификация (уровни, квесты)','Отчёты и API'].map(f=>(
          <GlowCard key={f}><div className="font-medium">{f}</div></GlowCard>
        ))}
      </div>
    </Section>
  )
}
