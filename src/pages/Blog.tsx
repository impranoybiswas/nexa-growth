import { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Search } from "lucide-react";
import BlogCard from "../components/BlogCard";
import { blogPosts } from "../data";

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

const categories = ["All", "SEO", "Advertising", "Web Dev", "Content", "Tools"];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = blogPosts.filter((post) => {
    const matchCat =
      activeCategory === "All" || post.category === activeCategory;
    const matchQuery =
      query === "" ||
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQuery;
  });

  return (
    <main className="pt-24">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-accent/4 rounded-full blur-[100px] pointer-events-none" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="container-max relative z-10 text-center max-w-3xl mx-auto"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold tracking-widest uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Blog
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-5">
              Insights for <span className="gradient-text">digital growth</span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed">
              Practical advice, data-backed strategies, and honest takes on SEO,
              advertising, web development, and more.
            </p>
          </motion.div>

          {/* Search bar */}
          <motion.div
            variants={fadeUp}
            className="mt-8 relative max-w-md mx-auto"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
            <input
              type="text"
              placeholder="Search articles..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="input-field pl-11"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ── Filter Tabs ───────────────────────────────────────────────────── */}
      <div className="px-6 md:px-12 lg:px-24 mb-10">
        <div className="container-max">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-accent text-dark-900"
                    : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Posts Grid ───────────────────────────────────────────────────── */}
      <section className="px-6 pb-24 md:px-12 lg:px-24">
        <div className="container-max">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-white/30 text-lg">No articles found.</p>
              <button
                onClick={() => {
                  setQuery("");
                  setActiveCategory("All");
                }}
                className="mt-4 text-accent hover:underline text-sm"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <motion.div
              layout
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((post) => (
                <motion.div key={post.id} variants={fadeUp} layout>
                  <BlogCard {...post} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}
