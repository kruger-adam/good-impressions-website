import { motion } from 'framer-motion'
import { PageNavigation, PageFooter } from './Careers'

function Privacy() {
  return (
    <div className="min-h-screen bg-cream">
      <PageNavigation />

      {/* Hero */}
      <section className="pt-32 pb-12 px-6 bg-gradient-to-b from-ink to-ink/95 text-cream">
        <div className="max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-terracotta font-medium tracking-wide uppercase text-sm"
          >
            Legal
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-medium mt-4 mb-4"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-cream/60"
          >
            Last updated: January 2025
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-4xl mx-auto prose prose-lg prose-slate"
        >
          <div className="bg-white rounded-2xl p-8 sm:p-12 border border-ink/10 space-y-8">
            <section>
              <h2 className="font-display text-2xl font-medium text-ink mb-4">Introduction</h2>
              <p className="text-slate leading-relaxed">
                Good Impressions Media ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-medium text-ink mb-4">Information We Collect</h2>
              <p className="text-slate leading-relaxed mb-4">We may collect information about you in various ways, including:</p>
              <ul className="list-disc list-inside text-slate space-y-2">
                <li><strong>Personal Data:</strong> Name, email address, phone number, and organization name when you contact us or apply for support.</li>
                <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and referring sources.</li>
                <li><strong>Cookies:</strong> Small data files stored on your device to improve your browsing experience.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-medium text-ink mb-4">How We Use Your Information</h2>
              <p className="text-slate leading-relaxed mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-slate space-y-2">
                <li>Respond to your inquiries and provide our services</li>
                <li>Improve our website and user experience</li>
                <li>Send relevant communications about our services</li>
                <li>Analyze usage patterns to enhance our offerings</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-medium text-ink mb-4">Information Sharing</h2>
              <p className="text-slate leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as necessary to provide our services or as required by law. We may share information with trusted service providers who assist us in operating our website and conducting our business.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-medium text-ink mb-4">Data Security</h2>
              <p className="text-slate leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-medium text-ink mb-4">Your Rights</h2>
              <p className="text-slate leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-slate space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of marketing communications</li>
                <li>Withdraw consent where applicable</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-medium text-ink mb-4">Cookies</h2>
              <p className="text-slate leading-relaxed">
                We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookies through your browser settings. Disabling cookies may limit some features of our website.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-medium text-ink mb-4">Third-Party Links</h2>
              <p className="text-slate leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites and encourage you to review their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-medium text-ink mb-4">Changes to This Policy</h2>
              <p className="text-slate leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-medium text-ink mb-4">Contact Us</h2>
              <p className="text-slate leading-relaxed">
                If you have questions about this Privacy Policy or our data practices, please contact us at{' '}
                <a href="mailto:contact@goodimpressionsmedia.com" className="text-terracotta hover:underline">
                  contact@goodimpressionsmedia.com
                </a>
              </p>
            </section>
          </div>
        </motion.div>
      </section>

      <PageFooter />
    </div>
  )
}

export default Privacy

