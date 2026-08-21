import type { Metadata } from 'next'
import { Play, ArrowUpRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { REELS, REEL_LINK } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Reel — Coral Mizrachi',
  description:
    'Showreels, trailers, and clips for actress Coral Mizrachi, including The Ark and Foreign Form.',
}

export default function ReelPage() {
  const [featured, ...rest] = REELS

  return (
    <>
      <PageHero
        eyebrow="Watch"
        title="Reel"
        intro="Showreels, trailers and selected clips. New 2026 showreel featured below."
      />

      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          {/* Featured reel */}
          <Reveal>
            <a
              href={REEL_LINK}
              target="_blank"
              rel="noreferrer"
              className="group relative block aspect-[16/9] w-full overflow-hidden border border-border bg-ink-soft"
            >
              <div className="film-grain absolute inset-0" aria-hidden />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 text-center">
                <span className="flex size-20 items-center justify-center rounded-full border border-brass/60 text-brass transition-all duration-500 group-hover:scale-110 group-hover:bg-brass group-hover:text-primary-foreground">
                  <Play className="size-7 translate-x-0.5" fill="currentColor" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-brass">
                    {featured.category}
                  </p>
                  <h2 className="mt-2 font-serif text-2xl tracking-tight text-foreground sm:text-4xl">
                    {featured.title}
                  </h2>
                  <p className="mt-2 font-mono text-sm text-muted-foreground">
                    {featured.length}
                  </p>
                </div>
              </div>
            </a>
          </Reveal>

          {/* Reel list */}
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {rest.map((reel, i) => (
              <Reveal key={reel.title} delay={(i % 2) * 60}>
                <a
                  href={REEL_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-6 border border-border bg-background p-6 transition-colors hover:border-brass/60 hover:bg-card"
                >
                  <div className="flex items-center gap-5">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border-strong text-foreground transition-colors group-hover:border-brass group-hover:text-brass">
                      <Play className="size-4 translate-x-px" fill="currentColor" />
                    </span>
                    <div>
                      <p className="text-[0.7rem] uppercase tracking-[0.18em] text-brass">
                        {reel.category}
                      </p>
                      <h3 className="mt-1 font-serif text-lg leading-snug text-foreground">
                        {reel.title}
                      </h3>
                    </div>
                  </div>
                  <span className="shrink-0 font-mono text-sm text-muted-foreground">
                    {reel.length}
                  </span>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <a
              href={REEL_LINK}
              target="_blank"
              rel="noreferrer"
              className="group mt-12 inline-flex items-center gap-2 border-b border-border-strong pb-1 text-sm uppercase tracking-[0.14em] text-foreground transition-colors hover:border-brass hover:text-brass"
            >
              Watch everything on the reel channel
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
