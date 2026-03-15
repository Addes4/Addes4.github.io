'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Involvement', href: '#involvement' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-[color:var(--line)] bg-[rgba(244,239,230,0.82)] backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-6 px-6">
        <a href="#" aria-label="Home" className="flex min-w-0 items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[color:var(--line)] bg-white text-sm font-semibold text-[color:var(--accent)]">
            AS
          </span>
          <span className="min-w-0">
            <span className="block truncate text-[1.1rem] font-semibold leading-none text-[color:var(--foreground)]">
              Adrian Sohrabi
            </span>
            <span className="hidden text-[10px] font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)] sm:block">
              Engineering Mathematics
            </span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--muted)] hover:text-[color:var(--foreground)]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-[color:var(--line)] bg-white text-[color:var(--foreground)] md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="px-6 pb-5 md:hidden">
          <div className="paper-card paper-card-strong flex flex-col gap-5 px-6 py-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--muted)] hover:text-[color:var(--foreground)]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
