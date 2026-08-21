'use client'

import { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function GalleryGrid({ images }: { images: string[] }) {
  const [active, setActive] = useState<number | null>(null)

  const close = useCallback(() => setActive(null), [])
  const next = useCallback(
    () => setActive((a) => (a === null ? a : (a + 1) % images.length)),
    [images.length],
  )
  const prev = useCallback(
    () =>
      setActive((a) =>
        a === null ? a : (a - 1 + images.length) % images.length,
      ),
    [images.length],
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
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {images.map((src, i) => (
          <Reveal key={src} delay={(i % 3) * 60}>
            <button
              type="button"
              onClick={() => setActive(i)}
              className="group relative block w-full overflow-hidden border border-border bg-ink-soft"
              aria-label={`Open image ${i + 1} in fullscreen`}
            >
              <Image
                src={src || '/placeholder.svg'}
                alt={`Coral Mizrachi — headshot ${i + 1}`}
                width={1000}
                height={1333}
                className="h-auto w-full object-cover transition-all duration-700 group-hover:scale-[1.03]"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
              <span className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/20" />
            </button>
          </Reveal>
        ))}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
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
            aria-label="Previous image"
          >
            <ChevronLeft className="size-8" />
          </button>

          <div
            className="relative max-h-[85vh] w-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[active] || '/placeholder.svg'}
              alt={`Coral Mizrachi — headshot ${active + 1}`}
              width={1000}
              height={1333}
              className="max-h-[85vh] w-auto object-contain"
              priority
            />
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            className="absolute right-3 flex size-11 items-center justify-center text-muted-foreground transition-colors hover:text-brass sm:right-8"
            aria-label="Next image"
          >
            <ChevronRight className="size-8" />
          </button>
        </div>
      )}
    </>
  )
}
