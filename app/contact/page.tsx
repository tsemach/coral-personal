import type { Metadata } from 'next'
import { Mail } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { ContactForm } from '@/components/contact-form'
import { AGENTS, SOCIAL } from '@/lib/content'
import { InstagramIcon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Contact — Coral Mizrachi',
  description:
    'Get in touch with Coral Mizrachi and view worldwide representation for casting inquiries.',
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Casting & Inquiries"
        title="Contact"
        intro="For auditions, bookings, and press — reach out directly or through representation below."
      />

      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-12">
          {/* Form */}
          <div className="lg:col-span-7">
            <Reveal>
              <ContactForm />
            </Reveal>
          </div>

          {/* Details + representation */}
          <div className="lg:col-span-5 lg:border-l lg:border-border lg:pl-14">
            <Reveal delay={80}>
              <div className="space-y-10">
                <div>
                  <h2 className="eyebrow mb-4">Direct</h2>
                  <a
                    href={`mailto:${SOCIAL.email}`}
                    className="flex items-center gap-3 font-serif text-xl text-foreground transition-colors hover:text-brass"
                  >
                    <Mail className="size-5 text-brass" />
                    {SOCIAL.email}
                  </a>
                  <div className="mt-5 flex items-center gap-5">
                    <a
                      href={SOCIAL.imdb}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:text-brass"
                    >
                      IMDb
                    </a>
                    <a
                      href={SOCIAL.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground transition-colors hover:text-brass"
                      aria-label="Instagram"
                    >
                      <InstagramIcon className="size-5" />
                    </a>
                  </div>
                </div>

                <div>
                  <h2 className="eyebrow mb-5">Representation</h2>
                  <ul className="space-y-6">
                    {AGENTS.map((a) => (
                      <li
                        key={a.region}
                        className="border-t border-border pt-4"
                      >
                        <p className="text-xs uppercase tracking-[0.2em] text-brass">
                          {a.region}
                        </p>
                        <p className="mt-2 font-serif text-lg text-foreground">
                          {a.name}
                        </p>
                        <a
                          href={`mailto:${a.email}`}
                          className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {a.email}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
