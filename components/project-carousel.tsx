'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type Slide = { src: string; w: number; h: number }

export function ProjectCarousel({ slides, title }: { slides: Slide[]; title: string }) {
  const [index, setIndex] = useState(0)
  const count = slides.length

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + count) % count),
    [count],
  )

  if (count === 0) return null

  return (
    <div
      className="group relative overflow-hidden border border-border-strong bg-secondary"
      role="group"
      aria-roledescription="carousel"
      aria-label={`${title} — image gallery`}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') go(-1)
        if (e.key === 'ArrowRight') go(1)
      }}
      tabIndex={0}
    >
      <div className="relative">
        {slides.map((s, i) => (
          <Image
            key={s.src}
            src={s.src || '/placeholder.svg'}
            alt={`${title} — still ${i + 1} of ${count}`}
            width={s.w}
            height={s.h}
            sizes="(min-width: 1024px) 30vw, 100vw"
            priority={i === 0}
            className={`h-auto w-full object-cover transition-opacity duration-500 ${
              i === index ? 'opacity-100' : 'pointer-events-none absolute inset-0 opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Prev / Next */}
      <button
        type="button"
        onClick={() => go(-1)}
        aria-label="Previous image"
        className="absolute left-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center border border-background/30 bg-background/40 text-background backdrop-blur-sm transition hover:bg-background/70 hover:text-foreground focus-visible:opacity-100 md:opacity-0 md:group-hover:opacity-100"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        aria-label="Next image"
        className="absolute right-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center border border-background/30 bg-background/40 text-background backdrop-blur-sm transition hover:bg-background/70 hover:text-foreground focus-visible:opacity-100 md:opacity-0 md:group-hover:opacity-100"
      >
        <ChevronRight className="size-5" />
      </button>

      {/* Counter + dots */}
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-background/70 to-transparent px-4 pb-3 pt-8">
        <div className="flex gap-1.5">
          {slides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to image ${i + 1}`}
              aria-current={i === index}
              className={`h-1 rounded-full transition-all ${
                i === index ? 'w-6 bg-brass' : 'w-2 bg-background/50 hover:bg-background/80'
              }`}
            />
          ))}
        </div>
        <span className="font-mono text-xs text-background/90">
          {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
        </span>
      </div>
    </div>
  )
}
