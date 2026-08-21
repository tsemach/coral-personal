'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV } from '@/lib/content'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-500',
        scrolled || open
          ? 'border-b border-border bg-ink/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:h-20 sm:px-8">
        <Link href="/" className="group flex flex-col leading-none">
          <span className="font-serif text-lg font-medium tracking-tight text-foreground sm:text-xl">
            Coral Mizrachi
          </span>
          <span className="mt-0.5 text-[0.6rem] uppercase tracking-[0.32em] text-muted-foreground">
            Actress
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => {
            const active =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'relative text-[0.78rem] uppercase tracking-[0.18em] transition-colors',
                  active
                    ? 'text-brass'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {item.label}
                {active && (
                  <span className="absolute -bottom-2 left-0 h-px w-full bg-brass" />
                )}
              </Link>
            )
          })}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center text-foreground md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          'grid overflow-hidden bg-ink/95 backdrop-blur-md transition-[grid-template-rows] duration-400 md:hidden',
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <nav aria-label="Mobile" className="min-h-0">
          <ul className="flex flex-col px-5 pb-6 pt-2">
            {NAV.map((item) => {
              const active =
                item.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.href)
              return (
                <li key={item.href} className="border-b border-border/60">
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center justify-between py-4 font-serif text-2xl',
                      active ? 'text-brass' : 'text-foreground',
                    )}
                  >
                    {item.label}
                    <span className="text-xs tracking-widest text-muted-foreground">
                      {String(NAV.indexOf(item) + 1).padStart(2, '0')}
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
