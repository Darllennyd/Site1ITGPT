import { company } from '@/content/company'
import CTA from './CTA'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid bg-[size:16px_16px] opacity-20" />
      <div className="absolute -top-40 -left-40 size-[600px] rounded-full blur-3xl bg-glow opacity-40" />
      <div className="mx-auto max-w-7xl px-4 py-24">
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
          Мы создаём <span className="text-neon-blue">цифровые экосистемы</span> и<br/>
          независимые <span className="text-neon-violet">white-label</span> решения.
        </h1>
        <p className="mt-6 text-lg text-white/80 max-w-3xl">
          {company.tagline}
        </p>
        <div className="mt-8">
          <CTA />
        </div>
        <div className="mt-10 text-sm text-white/60">
          Телеком • Web3 • SaaS • Прокси-сервисы • Поддержка 2–3+ лет
        </div>
      </div>
    </section>
  )
}
