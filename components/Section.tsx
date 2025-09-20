import { ReactNode } from 'react'
export default function Section({title, subtitle, children}: {title: string; subtitle?: string; children: ReactNode}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
      {subtitle && <p className="mt-2 text-white/70">{subtitle}</p>}
      <div className="mt-8 grid gap-6">{children}</div>
    </section>
  )
}
