import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { PRESS } from '@/lib/content'

export function PressPreview() {
  const featured = PRESS.slice(0, 3)

  return (
    <section className="border-t border-border bg-ink py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Press</p>
              <h2 className="mt-3 font-serif text-3xl font-light tracking-tight sm:text-4xl">
                In their words
              </h2>
            </div>
            <Link
              href="/press"
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-brass"
            >
              All press
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-3">
          {featured.map((item, i) => (
            <Reveal key={item.outlet} delay={i * 0.08}>
              <figure className="flex h-full flex-col justify-between gap-8 bg-background p-8">
                <blockquote className="font-serif text-xl font-light leading-relaxed text-pretty text-foreground">
                  {item.quote}
                </blockquote>
                <figcaption className="text-xs uppercase tracking-[0.2em] text-brass">
                  {item.outlet}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
