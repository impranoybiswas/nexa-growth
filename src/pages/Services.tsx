import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Check, X, ArrowRight, Zap } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import { services, pricingPlans } from '../data'

export default function Services() {
  return (
    <main className="pt-24">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
        <div className="container-max relative z-10 text-center max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold tracking-widest uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Our Services
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-5">
              Growth solutions that{' '}
              <span className="gradient-text">actually work</span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed">
              End-to-end digital services designed to help you attract more customers, convert more leads, and retain them for longer.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Service Blocks ───────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container-max">
          <div className="space-y-6">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`glass-card border ${service.borderColor} p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center hover:border-opacity-70 transition-all duration-300`}
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-2xl mb-6`}>
                    {service.icon === 'Code2' ? '💻' : service.icon === 'Search' ? '🔍' : service.icon === 'Megaphone' ? '📢' : '📅'}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-white/50 leading-relaxed">{service.description}</p>
                </div>
                <div>
                  <p className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-4">What's included</p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-accent shrink-0" />
                        <span className="text-white/70 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────────────────────────────── */}
      <section className="section-padding bg-dark-800/30">
        <div className="container-max">
          <SectionHeader
            badge="Pricing"
            title="Simple, transparent "
            highlight="pricing"
            subtitle="No hidden fees. No long-term lock-ins. Just clear packages designed to grow with you."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className={`relative glass-card p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                  plan.highlighted
                    ? 'border-accent/40 glow-accent'
                    : 'hover:border-white/20'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 bg-accent text-dark-900 text-xs font-bold rounded-full flex items-center gap-1">
                      <Zap className="w-3 h-3" /> Most popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <p className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-2">{plan.name}</p>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className={`text-4xl font-bold ${plan.highlighted ? 'text-accent' : 'text-white'}`}>
                      {plan.price}
                    </span>
                    <span className="text-white/40 text-sm">{plan.period}</span>
                  </div>
                  <p className="text-white/50 text-sm">{plan.description}</p>
                </div>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-accent shrink-0" />
                      <span className="text-white/70 text-sm">{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 opacity-40">
                      <X className="w-4 h-4 text-white/30 shrink-0" />
                      <span className="text-white/40 text-sm line-through">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={plan.highlighted ? 'btn-primary justify-center' : 'btn-secondary justify-center'}
                >
                  {plan.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-white/30 text-sm mt-8">
            Need something custom? <Link to="/contact" className="text-accent hover:underline">Let's talk →</Link>
          </p>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container-max text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Not sure which package is right for you?
          </h2>
          <p className="text-white/50 mb-8">
            Book a free 30-minute call with our team. We'll assess your business and recommend the best fit — no pressure, no pitch.
          </p>
          <Link to="/contact" className="btn-primary inline-flex text-base px-8 py-4">
            Book a free call <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  )
}
