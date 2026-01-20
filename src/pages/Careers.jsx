import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'

// Shared Navigation Component
export function PageNavigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src="/images/logos/gim-logo.webp" 
            alt="Good Impressions" 
            className="h-10 group-hover:scale-105 transition-transform"
          />
        </Link>
        <div className="flex items-center gap-6">
          <Link to="/" className="text-slate hover:text-terracotta transition-colors font-medium text-sm">
            Home
          </Link>
          <Link to="/careers" className="text-terracotta font-medium text-sm">
            Careers
          </Link>
        </div>
      </div>
    </nav>
  )
}

// Shared Footer Component
export function PageFooter() {
  return (
    <footer className="py-12 px-6 bg-ink text-cream border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="/images/logos/gim-logo.webp" 
              alt="Good Impressions" 
              className="h-8 brightness-0 invert"
            />
          </Link>
          <div className="flex items-center gap-6 text-sm text-cream/60">
            <Link to="/privacy" className="hover:text-cream transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-cream transition-colors">Terms</Link>
            <Link to="/careers" className="hover:text-cream transition-colors">Careers</Link>
          </div>
          <p className="text-sm text-cream/40">
            © {new Date().getFullYear()} Good Impressions Media
          </p>
        </div>
      </div>
    </footer>
  )
}

function Careers() {
  const heroRef = useRef(null)
  const valuesRef = useRef(null)
  const rolesRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const valuesInView = useInView(valuesRef, { once: true, margin: '-100px' })
  const rolesInView = useInView(rolesRef, { once: true, margin: '-100px' })

  const testimonials = [
    { quote: "The productivity and kindness of this team are off the charts", role: "Project Manager" },
    { quote: "Since starting, my job satisfaction has shot through the roof", role: "Project Manager" },
    { quote: "I honestly cannot imagine working in a more positive culture", role: "Project Manager" },
    { quote: "This is the first time in eight years I can confidently say I'm happy at work", role: "Advisor" },
    { quote: "This place is a rocket ship and the best place to have an impact as a marketer", role: "Campaign Manager" },
    { quote: "Working here has been the best surprise of my professional life", role: "Contractor" },
  ]

  const values = [
    {
      title: "Impact first",
      description: "Impact is our north star. We turn down projects if we don't think we can help. We teach clients so they're less dependent on us. We celebrate the wins because they really matter.",
      icon: "🎯"
    },
    {
      title: "Own it",
      description: "We take complete ownership of outcomes and push through obstacles until we deliver results we're proud of. If we see a problem, we bring it up.",
      icon: "💪"
    },
    {
      title: "Better and faster",
      description: "We're constantly searching for approaches that are orders of magnitude better. We leverage AI to work smarter and faster, always looking for win-wins.",
      icon: "⚡"
    },
    {
      title: "Radically helpful",
      description: "We're as helpful as possible to our clients because they're doing impactful work. We're helpful to the team because we succeed or fail together.",
      icon: "🤝"
    },
    {
      title: "Overcommunicate",
      description: "Most problems can be solved with more frequent and effective communication. We're transparent and say what we think even if others may disagree.",
      icon: "💬"
    },
    {
      title: "Constantly improve",
      description: "We're hungry for feedback. We want to get better because getting better is how we help more people and animals.",
      icon: "📈"
    },
  ]

  return (
    <div className="min-h-screen bg-cream">
      <PageNavigation />

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 px-6 bg-gradient-to-b from-sage/20 to-cream">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            className="text-terracotta font-medium tracking-wide uppercase text-sm"
          >
            Careers
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-medium text-ink mt-4 mb-6 leading-tight"
          >
            Join the team bringing <span className="italic text-terracotta">for-profit growth techniques</span> to socially impactful projects.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-slate text-lg mb-8"
          >
            A workplace that's positive, productive, and impact-first.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            href="#open-roles"
            className="inline-flex items-center gap-2 bg-terracotta text-cream px-8 py-4 rounded-full font-medium text-lg hover:bg-ink transition-colors"
          >
            See open positions
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.a>
        </div>
      </section>

      {/* Team Testimonials */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="p-6 rounded-2xl bg-cream/50 border border-ink/5"
              >
                <p className="text-ink font-medium mb-4 italic">"{item.quote}"</p>
                <span className="text-slate text-sm">{item.role}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-6 bg-terracotta text-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-medium mb-4">
            If you have a track record of success and are tired of work that's not aligned with your values,
          </h2>
          <p className="text-cream/80 text-xl italic">We'd like to hear from you</p>
        </div>
      </section>

      {/* Core Values */}
      <section ref={valuesRef} className="py-24 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <span className="text-sage font-medium tracking-wide uppercase text-sm">What drives us</span>
            <h2 className="font-display text-4xl sm:text-5xl font-medium text-ink mt-4">
              Our core values
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white border border-ink/10 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="font-display text-xl font-medium text-ink mb-3">{value.title}</h3>
                <p className="text-slate leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section ref={rolesRef} id="open-roles" className="py-24 px-6 bg-ink text-cream">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={rolesInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <span className="text-ochre font-medium tracking-wide uppercase text-sm">Join us</span>
            <h2 className="font-display text-4xl sm:text-5xl font-medium mt-4">
              Open roles
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={rolesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="bg-white/10 rounded-2xl p-8 mb-8"
          >
            <p className="text-cream/80 mb-6">
              <strong className="text-cream">Want us to refer you to our clients?</strong><br />
              We regularly connect strong candidates with organizations we work with. Check the box in the form to opt in and we'll reach out if we see a good match.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={rolesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <a
              href="https://docs.google.com/forms/d/1tq1gF_ntO2hoDrQKXeeaDyXsaD4bGebCFlopPf-I3iI/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display text-xl font-medium mb-1">Expression of Interest</h3>
                  <div className="flex items-center gap-4 text-sm text-cream/60">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Remote
                    </span>
                    <span>General</span>
                  </div>
                </div>
                <svg className="w-6 h-6 text-terracotta group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={rolesInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="mt-8 text-center text-cream/60"
          >
            Don't see what you're looking for? Get in touch at{' '}
            <a href="mailto:contact@goodimpressionsmedia.com" className="text-terracotta hover:underline">
              contact@goodimpressionsmedia.com
            </a>
          </motion.p>
        </div>
      </section>

      <PageFooter />
    </div>
  )
}

export default Careers

