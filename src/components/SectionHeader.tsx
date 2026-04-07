interface SectionHeaderProps {
  badge?: string
  title: string
  highlight?: string
  subtitle?: string
  center?: boolean
}

export default function SectionHeader({
  badge,
  title,
  highlight,
  subtitle,
  center = true,
}: SectionHeaderProps) {
  const titleParts = highlight ? title.split(highlight) : [title]

  return (
    <div className={`mb-12 md:mb-16 ${center ? 'text-center' : ''}`}>
      {badge && (
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold tracking-widest uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
        {titleParts[0]}
        {highlight && <span className="gradient-text">{highlight}</span>}
        {titleParts[1]}
      </h2>
      {subtitle && (
        <p className={`text-white/50 text-lg leading-relaxed ${center ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
