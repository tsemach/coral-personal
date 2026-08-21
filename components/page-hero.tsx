export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string
  title: string
  intro?: string
}) {
  return (
    <section className="border-b border-border/60 px-5 pb-14 pt-32 sm:px-8 sm:pb-20 sm:pt-44">
      <div className="mx-auto max-w-7xl">
        <p className="eyebrow reveal-up">{eyebrow}</p>
        <h1 className="reveal-up mt-5 font-serif text-5xl leading-[0.92] tracking-tight text-balance text-foreground sm:text-7xl lg:text-8xl">
          {title}
        </h1>
        {intro && (
          <p className="reveal-up mt-7 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {intro}
          </p>
        )}
      </div>
    </section>
  )
}
