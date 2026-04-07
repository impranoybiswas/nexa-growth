import { Link } from 'react-router-dom'
import { ArrowRight, Clock } from 'lucide-react'

interface BlogCardProps {
  id: number
  slug: string
  title: string
  excerpt: string
  category: string
  readTime: string
  date: string
  color: string
  featured?: boolean
}

export default function BlogCard({
  slug,
  title,
  excerpt,
  category,
  readTime,
  date,
  color,
  featured = false,
}: BlogCardProps) {
  return (
    <article className={`glass-card overflow-hidden group hover:border-white/20 transition-all duration-300 hover:-translate-y-1 ${featured ? 'md:col-span-2' : ''}`}>
      {/* Image placeholder */}
      <div className={`h-48 bg-gradient-to-br ${color} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="absolute bottom-4 left-4">
          <span className="px-2.5 py-1 rounded-full bg-dark-900/70 text-white/80 text-xs font-medium backdrop-blur-sm">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-3 text-white/30 text-xs mb-3">
          <span>{date}</span>
          <span>·</span>
          <Clock className="w-3 h-3" />
          <span>{readTime} read</span>
        </div>

        <h3 className="text-white font-semibold text-lg leading-snug mb-3 group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>

        <p className="text-white/50 text-sm leading-relaxed mb-4 line-clamp-2">
          {excerpt}
        </p>

        <Link
          to={`/blog/${slug}`}
          className="inline-flex items-center gap-1.5 text-accent text-sm font-medium hover:gap-2.5 transition-all duration-300"
        >
          Read more <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  )
}
