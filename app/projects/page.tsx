import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { ProjectCarousel } from '@/components/project-carousel'
import { InlineVideo } from '@/components/inline-video'
import { PROJECTS } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Projects — Coral Mizrachi',
  description:
    'Selected projects and roles: The Ark, Foreign Form, Self Conclusion, Tequila, and more.',
}

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected Work"
        title="Projects"
        intro="A closer look at the roles and productions — from Syfy's The Ark to independent film, festival shorts, and music videos across three continents."
      />

      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl space-y-px overflow-hidden border border-border bg-border">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 60}>
              <article className="bg-background p-8 sm:p-12">
                {/* Header: number, title and meta at the top of the box */}
                <header className="mb-8">
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 className="mt-3 font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl">
                    {p.title}
                  </h2>
                  {p.role && (
                    <p className="mt-3 text-sm uppercase tracking-[0.15em] text-brass">
                      as {p.role}
                    </p>
                  )}
                  <p className="mt-2 text-sm text-muted-foreground">{p.meta}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {p.director}
                  </p>
                </header>

                {/* Media (left) and description (right) start on the same line */}
                <div className="grid gap-8 lg:grid-cols-12">
                  <div className="lg:col-span-4">
                    {p.slides && (
                      <ProjectCarousel slides={p.slides} title={p.title} />
                    )}
                    {!p.slides && p.image && (
                      <div className="overflow-hidden border border-border-strong bg-secondary">
                        <Image
                          src={p.image.src || '/placeholder.svg'}
                          alt={`${p.title} — still`}
                          width={p.image.w}
                          height={p.image.h}
                          sizes="(min-width: 1024px) 30vw, 100vw"
                          className="h-auto w-full object-cover"
                        />
                      </div>
                    )}
                    {!p.slides && p.videoUrl && (
                      <div
                        className={p.image ? 'mt-6' : undefined}
                      >
                        <InlineVideo url={p.videoUrl} title={p.title} />
                      </div>
                    )}
                  </div>

                  <div className="lg:col-span-8">
                    <p className="text-pretty text-base leading-relaxed text-foreground/85">
                      {p.body}
                    </p>
                    {p.accolades && p.accolades.length > 0 && (
                      <ul className="mt-6 flex flex-wrap gap-2">
                        {p.accolades.map((a) => (
                          <li
                            key={a}
                            className="border border-border-strong px-3 py-1.5 text-xs uppercase tracking-[0.12em] text-brass"
                          >
                            {a}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
