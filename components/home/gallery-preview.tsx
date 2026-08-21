import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { HEADSHOTS } from '@/lib/content'
import { Reveal } from '@/components/reveal'

export function GalleryPreview() {
  const shots = HEADSHOTS.slice(0, 4)
  return (
    <section className="border-t border-border/60 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Gallery</p>
            <h2 className="mt-5 font-serif text-4xl leading-[0.98] tracking-tight text-foreground sm:text-6xl">
              Headshots &amp; stills
            </h2>
          </div>
          <Link
            href="/gallery"
            className="group inline-flex items-center gap-2 border-b border-border-strong pb-1 text-sm uppercase tracking-[0.14em] text-foreground transition-colors hover:border-brass hover:text-brass"
          >
            View full gallery
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {shots.map((src, i) => (
            <Reveal key={src} delay={i * 90}>
              <div className="group relative aspect-[3/4] overflow-hidden">
                <Image
                  src={src}
                  alt={`Coral Mizrachi headshot ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/10" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
