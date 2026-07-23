'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Professional Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Leadership and Extra Curriculars', href: '#involvement' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b border-[color:var(--line)] bg-white">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6">
        <a href="#" className="text-base font-semibold text-[color:var(--foreground)]">
          Adrian Sohrabi
        </a>

        <div className="hidden lg:flex items-center gap-5 xl:gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-sm text-[color:var(--muted)] hover:text-[color:var(--foreground)]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="lg:hidden text-[color:var(--foreground)]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-[color:var(--line)] px-6 py-4 lg:hidden flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[color:var(--muted)] hover:text-[color:var(--foreground)]"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
