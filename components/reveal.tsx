'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = 'div',
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: React.ElementType
}) {
  const ref = useRef<HTMLElement | null>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (
      typeof window === 'undefined' ||
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setShown(true)
      return
    }

    // Reveal immediately if the element is already in or above the viewport
    // on mount (covers above-the-fold content and no-scroll scenarios).
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight * 0.92) {
      setShown(true)
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true)
            io.disconnect()
          }
        })
      },
      { threshold: 0, rootMargin: '0px 0px -10% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={cn(
        'transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform',
        shown ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
