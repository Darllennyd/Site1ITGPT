import { ReactNode } from 'react'
export default function GlowCard({ children }: { children: ReactNode }) {
  return (
    <div className="relative rounded-xl p-6 border border-white/10 neon-border hover:shadow-neon transition-shadow">
      <div className="pointer-events-none absolute inset-0 glow" />
      {children}
    </div>
  )
}
