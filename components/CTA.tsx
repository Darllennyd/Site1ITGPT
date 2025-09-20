'use client'
import { useRouter } from 'next/navigation'
import { company } from '@/content/company'

export default function CTA() {
  const r = useRouter()
  return (
    <button
      onClick={() => r.push('/contact')}
      className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/15 border border-white/20 shadow-neon"
    >
      {company.cta.button}
    </button>
  )
}
