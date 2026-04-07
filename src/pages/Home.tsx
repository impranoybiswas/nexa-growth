import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, CheckCircle2, TrendingUp, Users, Award, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import TestimonialCard from '../components/TestimonialCard'
import { services, testimonials, clientLogos, stats } from '../data'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
}

const benefits = [
  { icon: TrendingUp, title: 'Data-driven strategy', desc: 'Every decision backed by real analytics and measurable outcomes.' },
  { icon: Users, title: 'Dedicated team', desc: 'You get a specialist team, not a generalist account manager.' },
  { icon: Award, title: 'Proven results', desc: 'Average 4.8× ROI across 200+ client campaigns.' },
  { icon: Zap, title: 'Fast execution', desc: 'We move quickly — most campaigns launch within 2 weeks.' },
]

export default function Home() {
  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center section-padding overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none animate-glow-pulse" />
        <div className="absolute top-2/3 right-0 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container-max relative z-10">
          <div className="max-w-4xl">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold tracking-widest uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Digital Growth Agency
              </span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={1}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6"
            >
              Grow faster with{' '}
              <span className="gradient-text">smarter digital</span>{' '}
              strategy
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={2}
              className="text-white/50 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl"
            >
              We help ambitious businesses scale online through web development, SEO, advertising, and intelligent booking systems. Real results, no fluff.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={3}
              className="flex flex-wrap items-center gap-4"
            >
              <Link to="/contact" className="btn-primary text-base px-7 py-3.5">
                Get free consultation <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/services" className="btn-secondary text-base px-7 py-3.5">
                See our services
              </Link>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={4}
              className="flex flex-wrap items-center gap-6 mt-10"
            >
              {[
                { value: '200+', label: 'Clients' },
                { value: '4.8×', label: 'Avg. ROI' },
                { value: '98%', label: 'Retention' },
              ].map(({ value, label }) => (
                <div key={label} className="flex items-baseline gap-1.5">
                  <span className="text-2xl font-bold text-white">{value}</span>
                  <span className="text-white/40 text-sm">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Client Logos ─────────────────────────────────────────────────── */}
      <section className="py-12 border-y border-white/8">
        <div className="container-max px-6 md:px-12 lg:px-24">
          <p className="text-white/30 text-xs font-semibold tracking-widest uppercase text-center mb-8">
            Trusted by fast-growing companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {clientLogos.map(({ name, abbr }) => (
              <div
                key={name}
                className="flex items-center gap-2 text-white/20 hover:text-white/40 transition-colors duration-300"
              >
                <div className="w-7 h-7 rounded-md bg-white/8 flex items-center justify-center text-xs font-bold">
                  {abbr}
                </div>
                <span className="font-semibold text-sm tracking-tight">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Overview ─────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container-max">
          <SectionHeader
            badge="What we do"
            title="Everything you need to "
            highlight="grow online"
            subtitle="From your first website to multi-channel advertising — we handle the digital side so you can focus on the business side."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => {
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className={`glass-card p-7 border ${service.borderColor} hover:border-opacity-60 hover:-translate-y-1 transition-all duration-300 group`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5`}>
                    <span className="text-xl">
                      {service.icon === 'Code2' ? '💻' : service.icon === 'Search' ? '🔍' : service.icon === 'Megaphone' ? '📢' : '📅'}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {service.features.map((f) => (
                      <li
                        key={f}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 text-xs"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="btn-secondary inline-flex">
              View all services & pricing <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Benefits ─────────────────────────────────────────────────────── */}
      <section className="section-padding bg-dark-800/30">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                badge="Why NexaGrowth"
                title="We treat your business like "
                highlight="our own"
                subtitle="Most agencies hand you off to a junior. We build a real partnership, dig into your data, and obsess over your results."
                center={false}
              />
              <ul className="space-y-4 mt-8">
                {[
                  'Transparent reporting — see exactly where every dollar goes',
                  'No lock-in contracts — we earn your business every month',
                  'Strategy calls with senior team members, not interns',
                  'Results guaranteed or we work for free until they come',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-white/60 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="btn-primary mt-8 inline-flex">
                Learn about us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {benefits.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-5 hover:border-white/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h4 className="text-white font-semibold text-sm mb-1.5">{title}</h4>
                  <p className="text-white/40 text-xs leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card p-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{value}</div>
                <div className="text-white/40 text-sm">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────────────── */}
      <section className="section-padding bg-dark-800/30">
        <div className="container-max">
          <SectionHeader
            badge="Client stories"
            title="Don't take our word "
            highlight="for it"
            subtitle="Real results from real businesses. Here's what our clients say about working with NexaGrowth."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <TestimonialCard {...t} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container-max">
          <div className="relative glass-card p-10 md:p-16 text-center overflow-hidden glow-accent">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-cyan-500/5" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 text-balance">
                Ready to scale your{' '}
                <span className="gradient-text">digital growth?</span>
              </h2>
              <p className="text-white/50 text-lg mb-8 max-w-xl mx-auto">
                Book a free 30-minute strategy call. We'll audit your current setup and show you exactly how to grow.
              </p>
              <Link to="/contact" className="btn-primary text-base px-8 py-4 inline-flex">
                Get your free consultation <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
