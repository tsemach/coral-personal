import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { GalleryGrid } from '@/components/gallery-grid'
import { StillsGallery } from '@/components/stills-gallery'
import { Reveal } from '@/components/reveal'
import { HEADSHOTS } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Gallery — Coral Mizrachi',
  description: 'Headshots and production stills of actress Coral Mizrachi.',
}

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Headshots & Stills"
        title="Gallery"
        intro="Select any image to view it full-frame. Use the arrow keys to move through the set."
      />

      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="mb-8 flex items-center gap-4 text-[0.72rem] uppercase tracking-[0.28em] text-muted-foreground">
              <span>Headshots</span>
              <span className="h-px flex-1 bg-border" aria-hidden="true" />
            </h2>
          </Reveal>
          <GalleryGrid images={HEADSHOTS} />

          <Reveal>
            <h2 className="mb-8 mt-20 flex items-center gap-4 text-[0.72rem] uppercase tracking-[0.28em] text-muted-foreground sm:mt-28">
              <span>Production Stills</span>
              <span className="h-px flex-1 bg-border" aria-hidden="true" />
            </h2>
          </Reveal>
          <StillsGallery />
        </div>
      </section>
    </>
  )
}
