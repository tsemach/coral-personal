import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { PRESS } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Press — Coral Mizrachi',
  description:
    'Interviews and features on Coral Mizrachi across Skope, Bold Journey, Voyage, Shoutout Atlanta, and more.',
}

export default function PressPage() {
  return (
    <>
      <PageHero
        eyebrow="Interviews & Features"
        title="Press"
        intro="Conversations about the craft, the journey between continents, and telling the truth on stage and on screen."
      />

      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
            {PRESS.map((item, i) => (
              <Reveal key={item.headline + i} delay={(i % 2) * 60}>
                <article className="flex h-full flex-col justify-between gap-8 bg-background p-8 sm:p-10">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-brass">
                      {item.outlet}
                    </p>
                    <h2 className="mt-4 font-serif text-2xl leading-snug tracking-tight text-foreground">
                      {item.headline}
                    </h2>
                  </div>
                  <blockquote className="border-l border-border-strong pl-5 font-serif text-lg font-light italic leading-relaxed text-pretty text-foreground/80">
                    {item.quote}
                  </blockquote>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
