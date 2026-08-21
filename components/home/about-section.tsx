import Image from 'next/image'
import { ABOUT, DETAILS } from '@/lib/content'
import { Reveal } from '@/components/reveal'

export function AboutSection() {
  return (
    <section id="about" className="border-t border-border/60 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden">
              <Image
                src="/coral/hs-2.avif"
                alt="Coral Mizrachi headshot"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-border/60 pt-8">
              {DETAILS.map((d) => (
                <div key={d.k}>
                  <dt className="text-[0.65rem] uppercase tracking-[0.22em] text-brass">
                    {d.k}
                  </dt>
                  <dd className="mt-1.5 text-sm text-foreground">{d.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div>
          <Reveal>
            <p className="eyebrow">About</p>
            <h2 className="mt-5 font-serif text-4xl leading-[1.02] tracking-tight text-balance text-foreground sm:text-5xl">
              An actress of two continents, chasing the truth in every role.
            </h2>
          </Reveal>
          <div className="mt-8 space-y-5">
            {ABOUT.map((para, i) => (
              <Reveal key={i} delay={80 + i * 60}>
                <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-[1.05rem]">
                  {para}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
