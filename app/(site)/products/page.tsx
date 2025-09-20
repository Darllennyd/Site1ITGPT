import { products } from '@/content/products'
import Section from '@/components/Section'
import GlowCard from '@/components/GlowCard'
import Link from 'next/link'

export default function ProductsPage(){
  return (
    <Section title="Продукты и сервисы" subtitle="White-label и stand-alone решения под вашу экосистему">
      <div className="grid md:grid-cols-3 gap-6">
        {products.map(p=>(
          <GlowCard key={p.slug}>
            <div className="text-lg font-medium">{p.name}</div>
            <p className="mt-2 text-white/70">{p.description}</p>
            <ul className="mt-3 text-white/70 list-disc pl-5 space-y-1">
              {p.bullets.map(b=><li key={b}>{b}</li>)}
            </ul>
            <div className="mt-4">
              <Link className="text-neon-blue" href={`/products/${p.slug}`}>Подробнее →</Link>
            </div>
          </GlowCard>
        ))}
      </div>
    </Section>
  )
}
