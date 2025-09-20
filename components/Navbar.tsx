'use client'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'

const nav = [
  { label: 'Главная', href: '/' },
  {
    label: 'Продукты',
    href: '/products',
    children: [
      { label: 'Taskoria', href: '/products/taskoria' },
      { label: 'HotelAI', href: '/products/hotelai' },
      { label: 'UzPlay', href: '/products/uzplay' }
    ]
  },
  {
    label: 'Портфолио',
    href: '/cases',
    children: [
      { label: 'Al Chiroq', href: '/cases/al-chiroq' },
      { label: 'Oltin Baliq', href: '/cases/oltin-baliq' },
      { label: 'Foyda+', href: '/cases/foyda-plus' }
    ]
  },
  { label: 'Web3', href: '/web3' },
  { label: 'Партнёры', href: '/partners' },
  { label: 'О компании', href: '/about' },
  { label: 'Блог', href: '/blog' },
  { label: 'Контакты', href: '/contact' }
]

export default function Navbar() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="sticky top-0 z-50 backdrop-blur bg-base/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-6">
        <Link href="/" className="font-semibold tracking-wide text-neon-blue">
          NovaTel
        </Link>
        <nav className="hidden md:flex gap-4">
          {nav.map((item, i) => (
            <div
              key={item.label}
              onMouseEnter={() => setOpen(i)}
              onMouseLeave={() => setOpen(o => (o === i ? null : o))}
              className="relative"
            >
              <Link href={item.href} className="px-3 py-2 hover:text-neon-violet">{item.label}</Link>
              {item.children && open === i && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute left-0 mt-2 min-w-56 rounded-lg bg-base border border-white/10 p-2 shadow-neon"
                >
                  {item.children.map(ch => (
                    <Link key={ch.href} href={ch.href}
                      className="block rounded-md px-3 py-2 hover:bg-white/5">
                      {ch.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}
