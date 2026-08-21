import type { Metadata } from 'next'
import { ArrowUpRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { ReelPlayer } from '@/components/reel-player'
import { REELS, REEL_LINK } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Reel — Coral Mizrachi',
  description:
    'Showreels, trailers, and clips for actress Coral Mizrachi, including The Ark and Foreign Form.',
}

export default function ReelPage() {
  return (
    <>
      <PageHero
        eyebrow="Watch"
        title="Reel"
        intro="Showreels, trailers and selected clips. Tap any title to play — the new 2026 showreel arrives shortly."
      />

      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <ReelPlayer reels={REELS} />

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
