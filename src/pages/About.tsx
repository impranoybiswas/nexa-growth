import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight, Trophy, Target, Heart } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import TestimonialCard from "../components/TestimonialCard";
import { team, stats, awards, testimonials } from "../data";

const ease = [0.23, 1, 0.32, 1] as [number, number, number, number];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease,
    },
  }),
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const values = [
  {
    icon: Target,
    title: "Results-first",
    desc: "We measure everything. Vanity metrics don't interest us — only outcomes that move your bottom line.",
  },
  {
    icon: Heart,
    title: "Genuine partnership",
    desc: "We're not a vendor. We embed into your goals, your challenges, and your vision for growth.",
  },
  {
    icon: Trophy,
    title: "Excellence always",
    desc: "From the first email to the final report — we hold ourselves to a standard we're proud of.",
  },
];

export default function About() {
  return (
    <main className="pt-24">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-violet-500/5 rounded-full blur-[100px] pointer-events-none" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="container-max relative z-10"
        >
          <div className="max-w-3xl">
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold tracking-widest uppercase mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                About us
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-5">
                We're the team behind your{" "}
                <span className="gradient-text">digital growth</span>
              </h1>
              <p className="text-white/50 text-lg leading-relaxed max-w-2xl">
                NexaGrowth was founded on a simple belief: every business
                deserves a digital strategy that's honest, measurable, and built
                for the long term. Since 2018, we've helped 200+ companies do
                exactly that.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ── Vision & Values ──────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeader
                badge="Our vision"
                title="Digital growth that "
                highlight="lasts"
                subtitle="We don't chase quick wins. We build systems, strategies, and relationships designed to compound over time."
                center={false}
              />
              <p className="text-white/50 leading-relaxed mb-6">
                Most agencies are transactional. We're different. We believe the
                best results come from understanding your business deeply — your
                customers, your market, your goals — and building a strategy
                that reflects all of it.
              </p>
              <p className="text-white/50 leading-relaxed">
                That's why our clients stick around. Not because they're locked
                in, but because they keep growing.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-4"
            >
              {values.map(({ icon: Icon, title, desc }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  className="glass-card p-6 flex items-start gap-5 hover:border-white/20 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────────────── */}
      <section className="section-padding bg-dark-800/30">
        <div className="container-max">
          <SectionHeader
            badge="By the numbers"
            title="Results that speak "
            highlight="for themselves"
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map(({ value, label }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="glass-card p-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {value}
                </div>
                <div className="text-white/40 text-sm">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Team ─────────────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container-max">
          <SectionHeader
            badge="The team"
            title="The people behind "
            highlight="your growth"
            subtitle="Senior specialists, not junior generalists. Every person on your account is an expert in their field."
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {team.map(({ name, role, bio, avatar, color }) => (
              <motion.div
                key={name}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className="glass-card p-6 text-center hover:border-white/20 transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 rounded-2xl ${color} flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 group-hover:scale-110 transition-transform`}
                >
                  {avatar}
                </div>
                <h4 className="text-white font-bold text-lg mb-0.5">{name}</h4>
                <p className="text-accent text-xs font-semibold mb-3">{role}</p>
                <p className="text-white/40 text-sm leading-relaxed">{bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Awards ───────────────────────────────────────────────────────── */}
      <section className="section-padding bg-dark-800/30">
        <div className="container-max">
          <SectionHeader
            badge="Recognition"
            title="Awards & "
            highlight="achievements"
            subtitle="We're proud of the recognition, but we're prouder of the results behind it."
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {awards.map(({ year, title, org }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className="glass-card p-6 hover:border-accent/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Trophy className="w-5 h-5 text-accent" />
                </div>
                <p className="text-accent text-xs font-semibold mb-1">{year}</p>
                <h4 className="text-white font-bold mb-1">{title}</h4>
                <p className="text-white/40 text-sm">{org}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container-max">
          <SectionHeader
            badge="Client stories"
            title="What our clients "
            highlight="say"
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {testimonials.slice(0, 3).map((t) => (
              <motion.div key={t.id} variants={fadeUp}>
                <TestimonialCard {...t} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="section-padding bg-dark-800/30">
        <div className="container-max text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Want to work with us?
          </h2>
          <p className="text-white/50 mb-8">
            We take on a limited number of new clients each quarter to maintain
            quality. Get in touch early.
          </p>
          <Link
            to="/contact"
            className="btn-primary inline-flex text-base px-8 py-4"
          >
            Start a conversation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
