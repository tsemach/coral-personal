import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const ACCOLADES = [
  '2024 & 2025 Saturn Awards Nominee',
  '#1 Show on Syfy Channel',
  'Streaming on Syfy & Peacock',
]

export function ArkSpotlight() {
  return (
    <section className="relative overflow-hidden bg-ink px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <p className="eyebrow">Now Streaming · Featured Role</p>
          <h2 className="mt-5 font-serif text-5xl leading-[0.95] tracking-tight text-foreground sm:text-7xl">
            The Ark
          </h2>
          <p className="mt-4 text-sm uppercase tracking-[0.18em] text-brass">
            as Lati Meir · Created by Dean Devlin
          </p>
          <p className="mt-7 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            One hundred years in the future, the crew of Ark One fights to
            survive long enough to find humanity a new home. Coral plays Lati
            Meir, an agriculturist who jumps ship to Ark 1 and must prove her
            loyalty — all while carrying a secret mission she cannot reveal.
          </p>

          <ul className="mt-8 flex flex-col gap-3">
            {ACCOLADES.map((a) => (
              <li
                key={a}
                className="flex items-center gap-3 text-sm text-foreground"
              >
                <span className="h-px w-6 bg-brass" aria-hidden />
                {a}
              </li>
            ))}
          </ul>

          <Link
            href="/projects"
            className="group mt-10 inline-flex items-center gap-2 border-b border-border-strong pb-1 text-sm uppercase tracking-[0.14em] text-foreground transition-colors hover:border-brass hover:text-brass"
          >
            Explore all projects
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>

        <Reveal delay={120} className="order-1 lg:order-2">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm">
            <div className="absolute -inset-3 border border-border/60" aria-hidden />
            <Image
              src="/coral/ark-poster.avif"
              alt="The Ark — official poster"
              fill
              sizes="(max-width: 1024px) 90vw, 30vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
