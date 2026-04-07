import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowUpRight } from 'lucide-react'

type FormData = {
  name: string
  email: string
  company: string
  service: string
  message: string
}

const contactInfo = [
  { icon: Mail, label: 'Email us', value: 'hello@nexagrowth.com', href: 'mailto:hello@nexagrowth.com' },
  { icon: Phone, label: 'Call us', value: '+1 (555) 000-1234', href: 'tel:+15550001234' },
  { icon: MapPin, label: 'Find us', value: 'New York, NY 10001', href: '#' },
]

const services = [
  'Web Development',
  'SEO Optimization',
  'Online Advertising',
  'Booking System',
  'Full Growth Package',
  'Not sure yet',
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>()

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 1200))
    setSubmitted(true)
  }

  return (
    <main className="pt-24">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="container-max relative z-10 text-center max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold tracking-widest uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Get in touch
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-5">
              Let's grow your{' '}
              <span className="gradient-text">business together</span>
            </h1>
            <p className="text-white/50 text-lg">
              Tell us about your goals. We'll put together a tailored strategy — completely free, no strings attached.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Main content ─────────────────────────────────────────────────── */}
      <section className="px-6 pb-24 md:px-12 lg:px-24">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* ── Sidebar ── */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact cards */}
              {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-5 flex items-center gap-4 hover:border-white/20 transition-all duration-300 group block"
                >
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs mb-0.5">{label}</p>
                    <p className="text-white font-medium text-sm">{value}</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/20 ml-auto group-hover:text-accent transition-colors" />
                </motion.a>
              ))}

              {/* Office map placeholder */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="glass-card overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-dark-600 to-dark-700 relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                  <div className="relative text-center">
                    <MapPin className="w-8 h-8 text-accent mx-auto mb-2" />
                    <p className="text-white/50 text-sm">New York, NY</p>
                    <p className="text-white/30 text-xs">Open Mon–Fri, 9am–6pm EST</p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-white/60 text-sm font-medium">NexaGrowth HQ</p>
                  <p className="text-white/30 text-xs mt-1">123 Growth Avenue, Suite 400<br />New York, NY 10001</p>
                </div>
              </motion.div>

              {/* Social proof */}
              <div className="glass-card p-5">
                <p className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-4">Avg response time</p>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-white font-semibold">Under 2 hours</span>
                </div>
                <p className="text-white/30 text-xs mt-3">We typically respond to all inquiries within 2 business hours during working days.</p>
              </div>
            </div>

            {/* ── Form ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="glass-card p-8 md:p-10">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center mb-2">
                      <CheckCircle2 className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-white text-2xl font-bold">Message received!</h3>
                    <p className="text-white/50 max-w-sm">
                      Thanks for reaching out. One of our team members will get back to you within 2 business hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-secondary mt-4"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-white text-2xl font-bold mb-2">Send us a message</h2>
                    <p className="text-white/40 text-sm mb-8">Fill in the form and we'll get back to you within 2 hours.</p>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-white/60 text-xs font-medium mb-1.5">Your name *</label>
                          <input
                            {...register('name', { required: 'Name is required' })}
                            placeholder="Alex Johnson"
                            className={`input-field ${errors.name ? 'border-rose-500/50' : ''}`}
                          />
                          {errors.name && <p className="text-rose-400 text-xs mt-1">{errors.name.message}</p>}
                        </div>
                        <div>
                          <label className="block text-white/60 text-xs font-medium mb-1.5">Email address *</label>
                          <input
                            {...register('email', {
                              required: 'Email is required',
                              pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email' },
                            })}
                            placeholder="alex@company.com"
                            className={`input-field ${errors.email ? 'border-rose-500/50' : ''}`}
                          />
                          {errors.email && <p className="text-rose-400 text-xs mt-1">{errors.email.message}</p>}
                        </div>
                      </div>

                      <div>
                        <label className="block text-white/60 text-xs font-medium mb-1.5">Company name</label>
                        <input
                          {...register('company')}
                          placeholder="Your company (optional)"
                          className="input-field"
                        />
                      </div>

                      <div>
                        <label className="block text-white/60 text-xs font-medium mb-1.5">Service you're interested in</label>
                        <select {...register('service')} className="input-field">
                          <option value="">Select a service...</option>
                          {services.map((s) => (
                            <option key={s} value={s} className="bg-dark-700 text-white">{s}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-white/60 text-xs font-medium mb-1.5">Your message *</label>
                        <textarea
                          {...register('message', { required: 'Message is required' })}
                          rows={5}
                          placeholder="Tell us about your business and what you're looking to achieve..."
                          className={`input-field resize-none ${errors.message ? 'border-rose-500/50' : ''}`}
                        />
                        {errors.message && <p className="text-rose-400 text-xs mt-1">{errors.message.message}</p>}
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary w-full justify-center py-4 text-base disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-4 h-4 border-2 border-dark-900/30 border-t-dark-900 rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send message <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>

                      <p className="text-white/25 text-xs text-center">
                        By submitting this form you agree to our privacy policy. We'll never share your details.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
