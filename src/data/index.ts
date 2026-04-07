// ─── Services ───────────────────────────────────────────────────────────────
export const services = [
  {
    id: 1,
    icon: 'Code2',
    title: 'Web Development',
    description:
      'High-performance websites and web apps built with modern frameworks. From landing pages to complex SaaS platforms — fast, scalable, and pixel-perfect.',
    features: ['Next.js / React', 'TypeScript', 'Performance optimized', 'SEO-ready'],
    color: 'from-emerald-500/20 to-cyan-500/20',
    borderColor: 'border-emerald-500/30',
  },
  {
    id: 2,
    icon: 'Search',
    title: 'SEO Optimization',
    description:
      'Dominate search rankings with data-driven SEO strategies. Technical audits, content optimization, and link building that delivers measurable results.',
    features: ['Technical SEO', 'Content strategy', 'Link building', 'Analytics setup'],
    color: 'from-violet-500/20 to-purple-500/20',
    borderColor: 'border-violet-500/30',
  },
  {
    id: 3,
    icon: 'Megaphone',
    title: 'Online Advertising',
    description:
      'ROI-focused ad campaigns across Google, Meta, and beyond. We optimize every dollar of your budget to maximize conversions and minimize cost.',
    features: ['Google Ads', 'Meta Ads', 'Retargeting', 'A/B testing'],
    color: 'from-orange-500/20 to-rose-500/20',
    borderColor: 'border-orange-500/30',
  },
  {
    id: 4,
    icon: 'CalendarCheck',
    title: 'Online Booking & Management',
    description:
      'Streamline your business with smart booking systems and management tools. Reduce no-shows, automate reminders, and focus on what matters most.',
    features: ['Booking systems', 'CRM integration', 'Automation', 'Analytics'],
    color: 'from-sky-500/20 to-blue-500/20',
    borderColor: 'border-sky-500/30',
  },
]

// ─── Pricing ─────────────────────────────────────────────────────────────────
export const pricingPlans = [
  {
    name: 'Starter',
    price: '$499',
    period: '/month',
    description: 'Perfect for small businesses just getting started online.',
    features: [
      '5-page website',
      'Basic SEO setup',
      'Google Analytics',
      'Monthly report',
      'Email support',
      '1 revision round',
    ],
    notIncluded: ['Ad campaigns', 'Booking system', 'Priority support'],
    cta: 'Get started',
    highlighted: false,
  },
  {
    name: 'Growth',
    price: '$1,299',
    period: '/month',
    description: 'For growing businesses ready to scale their digital presence.',
    features: [
      'Up to 15 pages',
      'Full SEO strategy',
      'Google + Meta Ads',
      'Weekly reports',
      'Priority support',
      'Unlimited revisions',
      'Online booking setup',
    ],
    notIncluded: ['Custom integrations'],
    cta: 'Most popular',
    highlighted: true,
  },
  {
    name: 'Premium',
    price: '$2,999',
    period: '/month',
    description: 'Full-service digital growth for established businesses.',
    features: [
      'Unlimited pages',
      'Enterprise SEO',
      'Multi-platform ads',
      'Dedicated manager',
      '24/7 support',
      'Custom integrations',
      'Full booking suite',
      'Quarterly strategy call',
    ],
    notIncluded: [],
    cta: 'Contact us',
    highlighted: false,
  },
]

// ─── Testimonials ────────────────────────────────────────────────────────────
export const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'CEO, BloomCo',
    avatar: 'SM',
    rating: 5,
    content:
      'NexaGrowth completely transformed our online presence. Within 3 months our organic traffic tripled and our booking rate went through the roof. Truly exceptional work.',
    color: 'bg-violet-500',
  },
  {
    id: 2,
    name: 'James Okafor',
    role: 'Founder, TechPulse',
    avatar: 'JO',
    rating: 5,
    content:
      'The ad campaigns they ran for us delivered a 4x ROI in the first month alone. Their team is responsive, creative, and genuinely invested in your success.',
    color: 'bg-emerald-500',
  },
  {
    id: 3,
    name: 'Priya Sharma',
    role: 'Marketing Director, Luminos',
    avatar: 'PS',
    rating: 5,
    content:
      'We\'ve worked with 3 agencies before. NexaGrowth is on a different level — they actually explain what they\'re doing and why. Results speak for themselves.',
    color: 'bg-sky-500',
  },
  {
    id: 4,
    name: 'Thomas Brennan',
    role: 'Owner, The Local Pantry',
    avatar: 'TB',
    rating: 5,
    content:
      'The booking system they set up saved us 10 hours a week in admin. Now I can focus on running the business instead of answering emails.',
    color: 'bg-orange-500',
  },
  {
    id: 5,
    name: 'Elena Vasquez',
    role: 'CMO, Vantage Labs',
    avatar: 'EV',
    rating: 5,
    content:
      'Our website went from page 4 to page 1 on Google in 6 weeks. The SEO work was thorough, strategic, and incredibly effective.',
    color: 'bg-rose-500',
  },
  {
    id: 6,
    name: 'David Chen',
    role: 'Co-founder, Arcify',
    avatar: 'DC',
    rating: 5,
    content:
      'From design to development to launch in just 3 weeks. The website is fast, beautiful, and converting visitors at a rate we never thought possible.',
    color: 'bg-cyan-500',
  },
]

// ─── Team ────────────────────────────────────────────────────────────────────
export const team = [
  {
    name: 'Alex Rivera',
    role: 'Founder & CEO',
    bio: '10+ years in digital marketing and growth strategy.',
    avatar: 'AR',
    color: 'bg-accent',
  },
  {
    name: 'Nina Kowalski',
    role: 'Head of SEO',
    bio: 'Former Google analyst. Built strategies for Fortune 500 brands.',
    avatar: 'NK',
    color: 'bg-violet-500',
  },
  {
    name: 'Marcus Webb',
    role: 'Lead Developer',
    bio: 'Full-stack engineer with a love for performance and clean code.',
    avatar: 'MW',
    color: 'bg-sky-500',
  },
  {
    name: 'Yuki Tanaka',
    role: 'Ads Strategist',
    bio: 'Managed $5M+ in ad spend across Google, Meta, and TikTok.',
    avatar: 'YT',
    color: 'bg-orange-500',
  },
]

// ─── Stats ───────────────────────────────────────────────────────────────────
export const stats = [
  { value: '200+', label: 'Clients served' },
  { value: '98%', label: 'Client retention rate' },
  { value: '4.8×', label: 'Average ROI' },
  { value: '$12M+', label: 'Revenue generated' },
]

// ─── Blog Posts ──────────────────────────────────────────────────────────────
export const blogPosts = [
  {
    id: 1,
    slug: 'seo-trends-2024',
    title: '7 SEO Trends That Will Dominate in 2024',
    excerpt:
      'Search is evolving fast. AI overviews, zero-click results, and Core Web Vitals are reshaping how businesses get found. Here\'s what you need to know.',
    category: 'SEO',
    readTime: '5 min',
    date: 'Mar 18, 2024',
    image: 'seo',
    color: 'from-violet-600 to-purple-700',
  },
  {
    id: 2,
    slug: 'meta-ads-roi',
    title: 'How to Actually Get ROI From Meta Ads in 2024',
    excerpt:
      'Most businesses waste money on Meta ads. We\'ve spent $5M+ across campaigns — here are the strategies that consistently deliver 3–5x returns.',
    category: 'Advertising',
    readTime: '7 min',
    date: 'Mar 10, 2024',
    image: 'ads',
    color: 'from-orange-600 to-rose-600',
  },
  {
    id: 3,
    slug: 'web-performance-matters',
    title: 'Why Your Website Speed is Killing Your Conversions',
    excerpt:
      'A 1-second delay in page load can reduce conversions by 7%. We break down exactly how to audit and fix performance issues — no developer required.',
    category: 'Web Dev',
    readTime: '6 min',
    date: 'Feb 28, 2024',
    image: 'web',
    color: 'from-emerald-600 to-cyan-600',
  },
  {
    id: 4,
    slug: 'online-booking-small-business',
    title: 'The Small Business Guide to Online Booking Systems',
    excerpt:
      'Stop losing clients to clunky booking processes. We compare the top systems and show you how to set one up in under a day.',
    category: 'Tools',
    readTime: '4 min',
    date: 'Feb 20, 2024',
    image: 'booking',
    color: 'from-sky-600 to-blue-700',
  },
  {
    id: 5,
    slug: 'content-strategy-growth',
    title: 'Content That Converts: A Framework for Growth',
    excerpt:
      'Content marketing isn\'t about publishing more — it\'s about publishing the right things. This framework helped our clients double organic leads.',
    category: 'Content',
    readTime: '8 min',
    date: 'Feb 12, 2024',
    image: 'content',
    color: 'from-pink-600 to-rose-500',
  },
  {
    id: 6,
    slug: 'google-ads-mistakes',
    title: '5 Google Ads Mistakes That Are Wasting Your Budget',
    excerpt:
      'From broad match keywords to poor landing pages — we see the same mistakes over and over. Here\'s how to fix them before your next campaign.',
    category: 'Advertising',
    readTime: '5 min',
    date: 'Jan 30, 2024',
    image: 'google',
    color: 'from-amber-600 to-orange-500',
  },
]

// ─── Client Logos ────────────────────────────────────────────────────────────
export const clientLogos = [
  { name: 'BloomCo', abbr: 'BC' },
  { name: 'TechPulse', abbr: 'TP' },
  { name: 'Luminos', abbr: 'LM' },
  { name: 'Vantage', abbr: 'VG' },
  { name: 'Arcify', abbr: 'AC' },
  { name: 'Cloudex', abbr: 'CX' },
  { name: 'Helio', abbr: 'HE' },
  { name: 'Prism', abbr: 'PR' },
]

// ─── Awards ──────────────────────────────────────────────────────────────────
export const awards = [
  { year: '2024', title: 'Top Digital Agency', org: 'Clutch.co' },
  { year: '2023', title: 'Best SEO Campaign', org: 'Search Awards' },
  { year: '2023', title: 'Fastest Growing Agency', org: 'Agency 50' },
  { year: '2022', title: 'Excellence in Web Design', org: 'Awwwards' },
]
