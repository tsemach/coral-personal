import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-svh overflow-hidden bg-ink film-grain">
      {/* Portrait */}
      <div className="absolute inset-0">
        <Image
          src="/coral/about-portrait.avif"
          alt="Coral Mizrachi, black and white portrait"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_28%] opacity-80 sm:object-[70%_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/20 to-transparent" />
      </div>

      {/* Copy */}
      <div className="relative z-10 mx-auto flex min-h-svh max-w-7xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-24">
        <p className="eyebrow reveal-up mb-5" style={{ animationDelay: '0.05s' }}>
          Actress · NYC · Israel · Serbia
        </p>
        <h1 className="reveal-up font-serif text-[3.4rem] font-medium leading-[0.86] tracking-tight text-foreground sm:text-[6rem] lg:text-[8.5rem]">
          Coral
          <br />
          <span className="text-brass">Mizrachi</span>
        </h1>
        <p
          className="reveal-up mt-8 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          style={{ animationDelay: '0.15s' }}
        >
          Working across the US, Europe and the Middle East. Known for Lati Meir
          in Syfy&apos;s Saturn-nominated series{' '}
          <span className="text-foreground">The Ark</span>.
        </p>

        <div
          className="reveal-up mt-10 flex flex-wrap items-center gap-4"
          style={{ animationDelay: '0.25s' }}
        >
          <Link
            href="/reel"
            className="group inline-flex items-center gap-3 bg-brass px-7 py-3.5 text-sm font-medium uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-brass-deep"
          >
            Watch the reel
          </Link>
          <Link
            href="/resume"
            className="inline-flex items-center gap-3 border border-border-strong px-7 py-3.5 text-sm font-medium uppercase tracking-[0.14em] text-foreground transition-colors hover:border-brass hover:text-brass"
          >
            View resume
          </Link>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 right-5 z-10 hidden items-center gap-3 text-muted-foreground sm:right-8 sm:flex">
        <span className="text-[0.65rem] uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown className="size-4 animate-bounce" />
      </div>
    </section>
  )
}
