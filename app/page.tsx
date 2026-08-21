import { Hero } from '@/components/home/hero'
import { CreditsMarquee } from '@/components/home/credits-marquee'
import { AboutSection } from '@/components/home/about-section'
import { ArkSpotlight } from '@/components/home/ark-spotlight'
import { GalleryPreview } from '@/components/home/gallery-preview'
import { PressPreview } from '@/components/home/press-preview'

export default function HomePage() {
  return (
    <>
      <Hero />
      <CreditsMarquee />
      <AboutSection />
      <ArkSpotlight />
      <GalleryPreview />
      <PressPreview />
    </>
  )
}
