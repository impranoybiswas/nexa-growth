import { Star } from 'lucide-react'

interface TestimonialCardProps {
  name: string
  role: string
  avatar: string
  rating: number
  content: string
  color: string
  delay?: number
}

export default function TestimonialCard({
  name,
  role,
  avatar,
  rating,
  content,
  color,
  delay = 0,
}: TestimonialCardProps) {
  return (
    <div
      className="glass-card p-6 flex flex-col gap-4 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Stars */}
      <div className="flex items-center gap-1">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
        ))}
      </div>

      {/* Content */}
      <p className="text-white/70 text-sm leading-relaxed flex-1">"{content}"</p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-white/8">
        <div
          className={`w-9 h-9 rounded-full ${color} flex items-center justify-center text-white text-xs font-bold`}
        >
          {avatar}
        </div>
        <div>
          <p className="text-white text-sm font-semibold">{name}</p>
          <p className="text-white/40 text-xs">{role}</p>
        </div>
      </div>
    </div>
  )
}
