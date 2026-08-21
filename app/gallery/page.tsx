import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { GalleryGrid } from '@/components/gallery-grid'
import { HEADSHOTS } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Gallery — Coral Mizrachi',
  description: 'Headshots and stills of actress Coral Mizrachi.',
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
          <GalleryGrid images={HEADSHOTS} />
        </div>
      </section>
    </>
  )
}
