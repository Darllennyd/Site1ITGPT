import { cases } from '@/content/cases'
import Section from '@/components/Section'
import GlowCard from '@/components/GlowCard'
import MetricTable from '@/components/MetricTable'

export default function CasePage(){
  const data = cases.find(c=>c.slug==='foyda-plus')!
  return (
    <Section title={data.name} subtitle={data.summary}>
      <GlowCard>
        <MetricTable data={[
          {label:'Скачивания (Play Market)', value: data.play.downloads},
          {label:'Рейтинг', value: data.play.rating},
          {label:'Отзывы', value: data.play.reviews},
          {label:'Ссылка', value: data.play.link}
        ]}/>
      </GlowCard>
      <div className="grid md:grid-cols-3 gap-6">
        {data.highlights.map(h=>(
          <GlowCard key={h}><div className="font-medium">{h}</div></GlowCard>
        ))}
      </div>
    </Section>
  )
}
