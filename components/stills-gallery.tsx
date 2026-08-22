'use client'

import { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import type { Still } from '@/lib/content'

export function StillsGallery({ stills }: { stills: Still[] }) {
  const [active, setActive] = useState<number | null>(null)

  const close = useCallback(() => setActive(null), [])
  const next = useCallback(
    () => setActive((a) => (a === null ? a : (a + 1) % stills.length)),
    [stills.length],
  )
  const prev = useCallback(
    () =>
      setActive((a) =>
        a === null ? a : (a - 1 + stills.length) % stills.length,
      ),
    [stills.length],
  )

  useEffect(() => {
    if (active === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active, close, next, prev])

  return (
    <>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {stills.map((still, i) => (
          <Reveal key={still.src} delay={(i % 2) * 80}>
            <button
              type="button"
              onClick={() => setActive(i)}
              className="group relative block w-full overflow-hidden border border-border bg-ink-soft"
              aria-label={`Open ${still.production} still — ${still.caption} — full-frame`}
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={still.src || '/placeholder.svg'}
                  alt={`${still.production} production still — ${still.caption}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
                <span className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/15" />
              </div>
              <div className="flex items-baseline justify-between gap-4 border-t border-border px-4 py-3">
                <span className="font-serif text-base text-foreground">
                  {still.caption}
                </span>
                <span className="text-[0.7rem] uppercase tracking-[0.22em] text-brass">
                  {still.production}
                </span>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Still viewer"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-5 top-5 flex size-11 items-center justify-center text-muted-foreground transition-colors hover:text-brass"
            aria-label="Close"
          >
            <X className="size-6" />
          </button>

          {stills.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                prev()
              }}
              className="absolute left-3 flex size-11 items-center justify-center text-muted-foreground transition-colors hover:text-brass sm:left-8"
              aria-label="Previous still"
            >
              <ChevronLeft className="size-8" />
            </button>
          )}

          <figure
            className="relative flex max-h-[85vh] w-auto max-w-[92vw] flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={stills[active].src || '/placeholder.svg'}
              alt={`${stills[active].production} production still — ${stills[active].caption}`}
              width={1600}
              height={900}
              className="max-h-[80vh] w-auto object-contain"
              priority
            />
            <figcaption className="mt-4 flex items-baseline justify-center gap-3 text-center">
              <span className="font-serif text-lg text-foreground">
                {stills[active].caption}
              </span>
              <span className="text-[0.7rem] uppercase tracking-[0.22em] text-brass">
                {stills[active].production}
              </span>
            </figcaption>
          </figure>

          {stills.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                next()
              }}
              className="absolute right-3 flex size-11 items-center justify-center text-muted-foreground transition-colors hover:text-brass sm:right-8"
              aria-label="Next still"
            >
              <ChevronRight className="size-8" />
            </button>
          )}
        </div>
      )}
    </>
  )
}
