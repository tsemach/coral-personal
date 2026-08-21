import Link from 'next/link'
import { Mail } from 'lucide-react'
import { NAV, SOCIAL } from '@/lib/content'
import { InstagramIcon } from '@/components/icons'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-ink">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-4">Let&apos;s work together</p>
            <Link
              href="/contact"
              className="font-serif text-4xl leading-[0.95] tracking-tight text-foreground transition-colors hover:text-brass sm:text-6xl"
            >
              Get in touch
            </Link>
            <a
              href={`mailto:${SOCIAL.email}`}
              className="mt-6 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="size-4" />
              {SOCIAL.email}
            </a>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-brass"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col-reverse items-start justify-between gap-6 border-t border-border/60 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Coral Mizrachi. Non-Union.
          </p>
          <div className="flex items-center gap-5">
            <a
              href={SOCIAL.imdb}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:text-brass"
              aria-label="IMDb"
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
              <InstagramIcon className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
