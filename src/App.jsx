import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion'

// Navigation Component
function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Results', href: '#results' },
    { name: 'Approach', href: '#approach' },
    { name: 'Testimonials', href: '#testimonials' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-cream/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-terracotta rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <span className="font-display text-white text-lg font-semibold">G</span>
          </div>
          <span className="font-display text-xl font-semibold text-ink hidden sm:block">
            Good Impressions
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate hover:text-terracotta transition-colors font-medium text-sm tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-ink text-cream px-5 py-2.5 rounded-full font-medium text-sm hover:bg-terracotta transition-colors"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
        >
          <span className={`w-6 h-0.5 bg-ink transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-ink transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-ink transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cream border-t border-ink/10"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-ink text-lg font-medium py-2"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-terracotta text-cream px-6 py-3 rounded-full font-medium text-center mt-2"
              >
                Get in touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

// Hero Section
function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={ref} className="min-h-screen relative overflow-hidden gradient-bg noise-overlay">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] border border-terracotta/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] border border-sage/20 rounded-full"
        />
      </div>

      <motion.div style={{ y, opacity }} className="relative pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 mb-8"
          >
            <span className="w-2 h-2 bg-sage rounded-full animate-pulse" />
            <span className="text-slate text-sm font-medium tracking-wide uppercase">
              Marketing for mission-driven orgs
            </span>
          </motion.div>

          {/* Main headline */}
          <div className="mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-ink leading-[1.1] tracking-tight"
            >
              Outreach for
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[1.1] tracking-tight"
            >
              <span className="text-terracotta">socially impactful</span>
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-ink leading-[1.1] tracking-tight"
            >
              projects
            </motion.h1>
          </div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-slate text-lg sm:text-xl max-w-2xl mb-12 leading-relaxed"
          >
            We help mission-driven organizations reach the right people—filling programs, 
            amplifying research, and getting interventions into the hands of those who need them most.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="group bg-terracotta text-cream px-8 py-4 rounded-full font-medium text-lg hover:bg-ink transition-colors inline-flex items-center gap-3"
            >
              Ask for support
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#results"
              className="px-8 py-4 rounded-full font-medium text-lg border-2 border-ink/20 text-ink hover:border-ink transition-colors"
            >
              See our work
            </a>
          </motion.div>

          {/* Trusted by logos */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-20 pt-12 border-t border-ink/10"
          >
            <p className="text-slate text-sm uppercase tracking-wider mb-6">Proud to have worked with</p>
            <div className="flex flex-wrap items-center gap-8 opacity-60">
              {['BlueDot Impact', 'Open Philanthropy', 'GiveDirectly', 'Epoch AI', 'One for the World'].map((name, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 + i * 0.1 }}
                  className="font-display text-lg text-ink/70"
                >
                  {name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-ink/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-ink/30 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}

// Services Section
function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const services = [
    {
      icon: '📣',
      title: 'Paid Advertising',
      description: 'Drive engagement with your content, research, services, courses, programs, fellowships, and events.',
      color: 'terracotta'
    },
    {
      icon: '🎯',
      title: 'Conversion Optimization',
      description: 'Identify and fix elements that prevent visitors from taking desired actions on your platforms.',
      color: 'sage'
    },
    {
      icon: '🎙️',
      title: 'Influencer & Podcast',
      description: 'Secure appearances on podcasts and social channels to reach your target audiences.',
      color: 'ochre'
    },
    {
      icon: '🎬',
      title: 'Video Editing',
      description: 'Optimize existing video content for social platforms with strategic edits and recommendations.',
      color: 'slate'
    },
    {
      icon: '📊',
      title: 'Analytics & Measurement',
      description: 'Accurately measure marketing impact by accounting for technical limitations and counterfactuals.',
      color: 'terracotta'
    },
    {
      icon: '📚',
      title: 'Shared Resources',
      description: 'Practical guides distilling lessons learned, paired with input from outside experts.',
      color: 'sage'
    },
  ]

  return (
    <section id="services" ref={ref} className="py-24 sm:py-32 px-6 bg-ink text-cream relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-terracotta font-medium tracking-wide uppercase text-sm">What we do</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium mt-4 max-w-3xl leading-tight">
            Services that <span className="italic text-ochre">amplify</span> your impact
          </h2>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all cursor-default"
            >
              <div className="text-4xl mb-6">{service.icon}</div>
              <h3 className="font-display text-2xl font-medium mb-3">{service.title}</h3>
              <p className="text-cream/70 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-cream/60 text-center max-w-2xl mx-auto"
        >
          Need something not listed? We guide organizations to the most effective outreach channels—even ones we don't service.
        </motion.p>
      </div>
    </section>
  )
}

// Results Section
function Results() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const results = [
    {
      metric: '265',
      unit: '',
      description: 'AI safety course participants recruited from frontier AI companies',
      cost: '$261 each',
      client: 'BlueDot Impact'
    },
    {
      metric: '99%',
      unit: '',
      description: 'Cost reduction for animal cruelty whistleblower recruitment',
      cost: '$706 vs $100,000',
      client: 'Legal Impact for Chickens'
    },
    {
      metric: '€10K+',
      unit: '',
      description: 'Saved by identifying non-counterfactual ad spend',
      cost: '3-hour audit',
      client: 'Effective Giving'
    },
    {
      metric: '1,268',
      unit: '',
      description: 'Course registrants for healthcare training',
      cost: '$0.22 each',
      client: 'HealthLearn'
    },
  ]

  return (
    <section id="results" ref={ref} className="py-24 sm:py-32 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sage font-medium tracking-wide uppercase text-sm">Proof of impact</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium text-ink mt-4">
            Real results, <span className="italic text-terracotta">real change</span>
          </h2>
        </motion.div>

        {/* Results grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {results.map((result, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group p-8 sm:p-10 rounded-3xl bg-white border border-ink/10 hover-lift"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="font-display text-5xl sm:text-6xl font-semibold text-terracotta">
                    {result.metric}
                  </span>
                </div>
                <span className="text-xs uppercase tracking-wider text-slate bg-cream px-3 py-1 rounded-full">
                  {result.client}
                </span>
              </div>
              <p className="text-ink text-lg mb-4 leading-relaxed">{result.description}</p>
              <div className="flex items-center gap-2 text-sage font-medium">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {result.cost}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Approach Section
function Approach() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const approaches = [
    {
      title: 'We prioritize impact',
      description: "We turn down projects if we can't meaningfully help and may suggest alternatives that lead to more impact."
    },
    {
      title: 'We own outcomes',
      description: "We take complete responsibility for results and push through obstacles until we deliver work we're proud of."
    },
    {
      title: 'We subsidize',
      description: "We've raised dedicated funding so our fees don't get in the way of running the most impactful projects."
    },
    {
      title: 'We teach',
      description: 'We train clients who want to learn so they can build internal capacity and be less dependent on us.'
    },
    {
      title: 'We overcommunicate',
      description: "We tell you directly if we don't succeed, and we may tell you in advance why something may not work."
    },
  ]

  return (
    <section id="approach" ref={ref} className="py-24 sm:py-32 px-6 bg-sage/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column - header */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32"
          >
            <span className="text-terracotta font-medium tracking-wide uppercase text-sm">Our philosophy</span>
            <h2 className="font-display text-4xl sm:text-5xl font-medium text-ink mt-4 mb-6 leading-tight">
              An <span className="italic">unusual</span> approach to marketing
            </h2>
            <p className="text-slate text-lg leading-relaxed">
              We're not a typical agency. We exist to maximize impact for mission-driven 
              organizations, not to maximize our own revenue.
            </p>
          </motion.div>

          {/* Right column - approaches */}
          <div className="space-y-6">
            {approaches.map((approach, i) => (
              <motion.div
                key={approach.title}
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 sm:p-8 rounded-2xl bg-white border border-ink/5"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-terracotta/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-terracotta font-display font-semibold">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-medium text-ink mb-2">{approach.title}</h3>
                    <p className="text-slate leading-relaxed">{approach.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Testimonials Section
function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      quote: "Good Impressions is as good as it gets. They helped us develop a targeted LinkedIn whistleblower recruitment campaign which connected us with dozens of employees as part of an advocacy campaign.",
      author: "Jonas Vollmer",
      role: "COO",
      org: "Longview Philanthropy"
    },
    {
      quote: "In a few months Good Impressions helped us build an acquisition channel we can turn on and off as needed, giving us control over our growth. This has become a permanent part of our funding proposals.",
      author: "Patrick Gruban",
      role: "COO",
      org: "80,000 Hours"
    },
    {
      quote: "To spend such a small amount of money and grow this rapidly is incredible. We tripled our growth rate of newsletter subscribers, and they actually open our emails at rates higher than our organic audience.",
      author: "Niko McCarty",
      role: "Founding Editor",
      org: "Asimov Press"
    },
    {
      quote: "Since the pandemic, we hadn't found a sustainable avenue for opening new chapters, but our first Good Impressions campaign led to 7 new chapters. Ads are now our primary channel for chapter acquisition.",
      author: "Emma Cameron",
      role: "COO",
      org: "One for the World"
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="testimonials" ref={ref} className="py-24 sm:py-32 px-6 bg-ink text-cream overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-ochre font-medium tracking-wide uppercase text-sm">What clients say</span>
          <h2 className="font-display text-4xl sm:text-5xl font-medium mt-4">
            Trusted by <span className="italic text-terracotta">world-changers</span>
          </h2>
        </motion.div>

        {/* Testimonial carousel */}
        <div className="relative min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <blockquote className="font-display text-2xl sm:text-3xl md:text-4xl font-normal leading-relaxed mb-8 text-cream/90">
                "{testimonials[activeIndex].quote}"
              </blockquote>
              <div className="flex flex-col items-center">
                <span className="font-medium text-lg">{testimonials[activeIndex].author}</span>
                <span className="text-cream/60">
                  {testimonials[activeIndex].role}, {testimonials[activeIndex].org}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === activeIndex ? 'bg-terracotta w-8' : 'bg-cream/30 hover:bg-cream/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact Section
function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" ref={ref} className="py-24 sm:py-32 px-6 bg-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-terracotta/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-terracotta font-medium tracking-wide uppercase text-sm">Let's work together</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium text-ink mt-4 mb-6">
            Ready to amplify your impact?
          </h2>
          <p className="text-slate text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Tell us about your mission and goals. We'll get back to you with honest feedback 
            on whether and how we can help.
          </p>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="max-w-xl mx-auto text-left space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-ink mb-2">Your name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-ink/20 bg-white focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all"
                  placeholder="Jane Smith"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink mb-2">Organization</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-ink/20 bg-white focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all"
                  placeholder="Your org name"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-ink mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-xl border border-ink/20 bg-white focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all"
                placeholder="jane@example.org"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-ink mb-2">How can we help?</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-ink/20 bg-white focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all resize-none"
                placeholder="Tell us about your project, goals, and timeline..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-terracotta text-cream py-4 rounded-full font-medium text-lg hover:bg-ink transition-colors flex items-center justify-center gap-2 group"
            >
              Send message
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </motion.form>

          <p className="mt-8 text-slate">
            Or email us directly at{' '}
            <a href="mailto:contact@goodimpressionsmedia.com" className="text-terracotta hover:underline">
              contact@goodimpressionsmedia.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="py-12 px-6 bg-ink text-cream border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-terracotta rounded-full flex items-center justify-center">
              <span className="font-display text-white text-sm font-semibold">G</span>
            </div>
            <span className="font-display text-lg">Good Impressions</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-cream/60">
            <a href="#" className="hover:text-cream transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cream transition-colors">Terms</a>
            <a href="#" className="hover:text-cream transition-colors">Careers</a>
          </div>

          <p className="text-sm text-cream/40">
            © {new Date().getFullYear()} Good Impressions Media
          </p>
        </div>
      </div>
    </footer>
  )
}

// Main App
function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Results />
      <Approach />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

