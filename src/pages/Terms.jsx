import { motion } from 'framer-motion'
import { PageNavigation, PageFooter } from './Careers'

function Terms() {
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
            Terms & Conditions
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
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl p-8 sm:p-12 border border-ink/10 space-y-8">
            <section>
              <h2 className="font-display text-2xl font-medium text-ink mb-4">Agreement to Terms</h2>
              <p className="text-slate leading-relaxed">
                By accessing or using Good Impressions Media's website and services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not access our services.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-medium text-ink mb-4">Services</h2>
              <p className="text-slate leading-relaxed">
                Good Impressions Media provides marketing and outreach services for mission-driven organizations. Our services include paid advertising campaigns, conversion rate optimization, influencer engagement, video editing, analytics, and shared resource creation. The specific scope of services will be defined in individual service agreements.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-medium text-ink mb-4">Intellectual Property</h2>
              <p className="text-slate leading-relaxed">
                All content on this website, including text, graphics, logos, and images, is the property of Good Impressions Media or its content suppliers and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-medium text-ink mb-4">User Responsibilities</h2>
              <p className="text-slate leading-relaxed mb-4">When using our website or services, you agree to:</p>
              <ul className="list-disc list-inside text-slate space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Use our services only for lawful purposes</li>
                <li>Not interfere with or disrupt our website or servers</li>
                <li>Not attempt to gain unauthorized access to any part of our systems</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-medium text-ink mb-4">Payment Terms</h2>
              <p className="text-slate leading-relaxed">
                Our baseline fee for a three-month project is $15,000. We offer discounted rates when lack of funds would get in the way of impact. Payment terms and schedules will be outlined in individual service agreements. All fees are non-refundable unless otherwise specified in writing.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-medium text-ink mb-4">Limitation of Liability</h2>
              <p className="text-slate leading-relaxed">
                Good Impressions Media shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services. Our total liability shall not exceed the amount paid by you for our services in the twelve months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-medium text-ink mb-4">Disclaimer</h2>
              <p className="text-slate leading-relaxed">
                Our services are provided "as is" without warranties of any kind, either express or implied. We do not guarantee specific results from our marketing services, as outcomes depend on many factors outside our control. We will, however, apply our best efforts and expertise to achieve your goals.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-medium text-ink mb-4">Confidentiality</h2>
              <p className="text-slate leading-relaxed">
                We respect the confidentiality of our clients' information. We will not disclose confidential information to third parties without your consent, except as required by law or as necessary to provide our services.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-medium text-ink mb-4">Termination</h2>
              <p className="text-slate leading-relaxed">
                Either party may terminate a service engagement with written notice as specified in the service agreement. Upon termination, you remain responsible for payment of all fees incurred up to the termination date.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-medium text-ink mb-4">Governing Law</h2>
              <p className="text-slate leading-relaxed">
                These Terms and Conditions shall be governed by and construed in accordance with the laws of the United States. Any disputes arising from these terms shall be resolved through good-faith negotiation or, if necessary, binding arbitration.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-medium text-ink mb-4">Changes to Terms</h2>
              <p className="text-slate leading-relaxed">
                We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to this page. Your continued use of our services after any changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-medium text-ink mb-4">Contact</h2>
              <p className="text-slate leading-relaxed">
                For questions about these Terms and Conditions, please contact us at{' '}
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

export default Terms

