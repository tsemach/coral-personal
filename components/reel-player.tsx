'use client'

import { useCallback, useEffect, useState } from 'react'
import { Play, ArrowUpRight, X } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import type { Reel } from '@/lib/content'

function thumb(id: string) {
  return `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`
}
function thumbFallback(id: string) {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
}

export function ReelPlayer({ reels }: { reels: Reel[] }) {
  const [featured, ...rest] = reels
  const [active, setActive] = useState<Reel | null>(null)

  const close = useCallback(() => setActive(null), [])

  useEffect(() => {
    if (!active) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active, close])

  return (
    <>
      {/* Featured */}
      <Reveal>
        <FeaturedCard reel={featured} onPlay={() => featured.youtubeId && setActive(featured)} />
      </Reveal>

      {/* Grid */}
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {rest.map((reel, i) => (
          <Reveal key={reel.title} delay={(i % 2) * 60}>
            <ReelCard reel={reel} onPlay={() => reel.youtubeId && setActive(reel)} />
          </Reveal>
        ))}
      </div>

      {/* Modal player */}
      {active?.youtubeId ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Now playing: ${active.title}`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm sm:p-8"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close video"
            className="absolute right-4 top-4 flex size-11 items-center justify-center rounded-full border border-border-strong text-foreground transition-colors hover:border-brass hover:text-brass sm:right-6 sm:top-6"
          >
            <X className="size-5" />
          </button>
          <div
            className="w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video w-full overflow-hidden border border-border-strong bg-black">
              <iframe
                key={active.youtubeId}
                src={`https://www.youtube-nocookie.com/embed/${active.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                title={active.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
            <div className="mt-4 flex items-baseline justify-between gap-4">
              <h2 className="font-serif text-lg text-foreground sm:text-xl">{active.title}</h2>
              <span className="shrink-0 font-mono text-sm text-brass">{active.category}</span>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

function FeaturedCard({ reel, onPlay }: { reel: Reel; onPlay: () => void }) {
  const playable = Boolean(reel.youtubeId)

  const inner = (
    <>
      {reel.youtubeId ? (
        <>
          <img
            src={thumb(reel.youtubeId) || '/placeholder.svg'}
            alt=""
            aria-hidden
            onError={(e) => {
              e.currentTarget.src = thumbFallback(reel.youtubeId!)
            }}
            className="absolute inset-0 h-full w-full object-cover opacity-55 transition-all duration-700 group-hover:scale-105 group-hover:opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" aria-hidden />
        </>
      ) : (
        <div className="film-grain absolute inset-0" aria-hidden />
      )}

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 text-center">
        <span
          className={`flex size-20 items-center justify-center rounded-full border transition-all duration-500 ${
            playable
              ? 'border-brass/60 text-brass group-hover:scale-110 group-hover:bg-brass group-hover:text-primary-foreground'
              : 'border-border-strong text-muted-foreground'
          }`}
        >
          <Play className="size-7 translate-x-0.5" fill="currentColor" />
        </span>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-brass">{reel.category}</p>
          <h2 className="mt-2 font-serif text-2xl tracking-tight text-foreground sm:text-4xl">
            {reel.title}
          </h2>
          <p className="mt-2 font-mono text-sm text-muted-foreground">
            {reel.pending ? 'New showreel — arriving shortly' : reel.length}
          </p>
        </div>
      </div>
    </>
  )

  const base =
    'group relative block aspect-[16/9] w-full overflow-hidden border border-border bg-ink-soft'

  if (playable) {
    return (
      <button type="button" onClick={onPlay} className={`${base} text-left`}>
        {inner}
      </button>
    )
  }
  return <div className={base}>{inner}</div>
}

function ReelCard({ reel, onPlay }: { reel: Reel; onPlay: () => void }) {
  const base =
    'group flex w-full items-center justify-between gap-6 border border-border bg-background p-6 text-left transition-colors hover:border-brass/60 hover:bg-card'

  const content = (
    <>
      <div className="flex items-center gap-5">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border-strong text-foreground transition-colors group-hover:border-brass group-hover:text-brass">
          <Play className="size-4 translate-x-px" fill="currentColor" />
        </span>
        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.18em] text-brass">{reel.category}</p>
          <h3 className="mt-1 font-serif text-lg leading-snug text-foreground">{reel.title}</h3>
        </div>
      </div>
      <span className="flex shrink-0 items-center gap-2 font-mono text-sm text-muted-foreground">
        {reel.length}
        {reel.link ? <ArrowUpRight className="size-4" /> : null}
      </span>
    </>
  )

  if (reel.youtubeId) {
    return (
      <button type="button" onClick={onPlay} className={base}>
        {content}
      </button>
    )
  }
  return (
    <a href={reel.link ?? '#'} target="_blank" rel="noreferrer" className={base}>
      {content}
    </a>
  )
}
