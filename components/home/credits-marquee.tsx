const TITLES = [
  'The Ark',
  'Foreign Form',
  'Self Conclusion',
  'Trippin Stacia',
  'Block Boys',
  'Into the Woods',
  'The Pendragon Cycle',
  'Radium Girls',
  'Tequila',
  'Vic & Nimi',
]

export function CreditsMarquee() {
  const items = [...TITLES, ...TITLES]
  return (
    <section
      aria-label="Selected credits"
      className="overflow-hidden border-y border-border/60 bg-ink-soft py-6 sm:py-8"
    >
      <div className="marquee-track flex w-max items-center gap-10 sm:gap-16">
        {items.map((title, i) => (
          <div key={i} className="flex items-center gap-10 sm:gap-16">
            <span className="font-serif text-2xl italic text-foreground/70 sm:text-4xl">
              {title}
            </span>
            <span className="text-brass" aria-hidden>
              ✦
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
