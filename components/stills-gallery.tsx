'use client'

import { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { STILLS } from '@/lib/content'

export function StillsGallery() {
  const [active, setActive] = useState<number | null>(null)

  const close = useCallback(() => setActive(null), [])
  const next = useCallback(
    () => setActive((a) => (a === null ? a : (a + 1) % STILLS.length)),
    [],
  )
  const prev = useCallback(
    () =>
      setActive((a) =>
        a === null ? a : (a - 1 + STILLS.length) % STILLS.length,
      ),
    [],
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
      {/* Masonry columns keep every frame at its native cinematic ratio */}
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {STILLS.map((still, i) => (
          <button
            key={still.src}
            type="button"
            onClick={() => setActive(i)}
            className="group relative block w-full overflow-hidden border border-border bg-ink-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass"
            aria-label={`Open production still ${i + 1} of ${STILLS.length} full-frame`}
          >
            <Image
              src={still.src || '/placeholder.svg'}
              alt={`Coral Mizrachi — production still ${i + 1}`}
              width={still.w}
              height={still.h}
              className="w-full transition-transform duration-700 group-hover:scale-[1.04]"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
            <span className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/15" />
            <span className="pointer-events-none absolute bottom-3 left-3 font-mono text-[0.65rem] uppercase tracking-[0.25em] text-bone opacity-0 drop-shadow transition-opacity duration-500 group-hover:opacity-100">
              {String(i + 1).padStart(2, '0')}
            </span>
          </button>
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

          <figure
            className="relative flex max-h-[85vh] w-auto max-w-[92vw] flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={STILLS[active].src || '/placeholder.svg'}
              alt={`Coral Mizrachi — production still ${active + 1}`}
              width={STILLS[active].w}
              height={STILLS[active].h}
              className="max-h-[80vh] w-auto object-contain"
              priority
            />
            <figcaption className="mt-4 text-center font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Production Still — {String(active + 1).padStart(2, '0')} /{' '}
              {String(STILLS.length).padStart(2, '0')}
            </figcaption>
          </figure>

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
        </div>
      )}
    </>
  )
}
