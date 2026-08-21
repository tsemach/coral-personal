import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { RESUME, TRAINING, SKILLS, DETAILS } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Resume — Coral Mizrachi',
  description:
    'Acting resume for Coral Mizrachi: television, film, and theatre credits, training, and special skills.',
}

export default function ResumePage() {
  return (
    <>
      <PageHero
        eyebrow="Curriculum Vitae"
        title="Resume"
        intro="Film · Television · Theatre. Trained at the American Academy of Dramatic Arts, New York."
      />

      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          {/* Physical stats strip */}
          <Reveal>
            <dl className="grid grid-cols-2 gap-y-8 border-b border-border pb-12 sm:grid-cols-3 lg:grid-cols-6">
              {DETAILS.map((d) => (
                <div key={d.k}>
                  <dt className="text-[0.65rem] uppercase tracking-[0.2em] text-brass">
                    {d.k}
                  </dt>
                  <dd className="mt-1.5 text-sm text-foreground">{d.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          {/* Credits */}
          <div className="mt-16 space-y-16">
            {RESUME.map((group) => (
              <Reveal key={group.section}>
                <div>
                  <div className="flex items-baseline gap-4">
                    <h2 className="font-serif text-2xl italic text-foreground sm:text-3xl">
                      {group.section}
                    </h2>
                    <span className="h-px flex-1 bg-border" aria-hidden />
                  </div>

                  <ul className="mt-6 divide-y divide-border/70">
                    {group.credits.map((c) => (
                      <li
                        key={`${c.title}-${c.role}`}
                        className="grid grid-cols-1 gap-1 py-5 sm:grid-cols-12 sm:gap-4"
                      >
                        <span className="font-serif text-lg text-foreground sm:col-span-4">
                          {c.title}
                        </span>
                        <span className="text-sm text-brass sm:col-span-3">
                          {c.role}
                        </span>
                        <span className="text-sm text-muted-foreground sm:col-span-3">
                          {c.company}
                        </span>
                        <span className="text-sm text-muted-foreground sm:col-span-2 sm:text-right">
                          {c.director}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Training + skills */}
          <div className="mt-20 grid gap-14 border-t border-border pt-16 lg:grid-cols-2">
            <Reveal>
              <div>
                <h2 className="eyebrow mb-8">Training</h2>
                <ul className="space-y-8">
                  {TRAINING.map((t) => (
                    <li key={t.school}>
                      <p className="font-serif text-lg text-foreground">
                        {t.school}
                      </p>
                      <p className="mt-1 text-sm text-brass">{t.note}</p>
                      {t.lines.length > 0 && (
                        <ul className="mt-3 space-y-1.5">
                          {t.lines.map((line) => (
                            <li
                              key={line}
                              className="text-sm leading-relaxed text-muted-foreground"
                            >
                              {line}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div>
                <h2 className="eyebrow mb-8">Special Skills</h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {SKILLS}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
