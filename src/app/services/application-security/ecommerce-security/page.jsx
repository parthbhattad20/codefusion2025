'use client';

import Link from 'next/link';
import { ShieldAlert, Lock, Bug, LineChart, Users, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.12 } },
};

export default function EcommerceSecurityPage() {
  return (
    <main className="w-full bg-gray-50 dark:bg-background text-gray-900 dark:text-foreground">

      {/* ================= HERO ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/services/wapt.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/30 to-black/45"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-20">
          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
            E-commerce Security Services
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-sm md:text-xl text-gray-200 max-w-4xl text-left"
          >
            Secure your webshop from cyber risks in the UAE.
            Protect customer data, payment systems, and business reputation
            with enterprise-grade e-commerce security solutions.
          </motion.p>

          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 mt-6 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Protect Your Ecommerce Now
            </motion.button>
          </Link>
        </div>
      </motion.section>

      {/* ================= OVERVIEW ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-120px' }}
        variants={fadeUp}
        className="py-24 px-6 bg-gray-50 dark:bg-background transition-colors"
      >
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
              What is E-commerce Security?
            </h1>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              E-commerce security refers to global security standards that ensure
              safe online purchasing experiences. With the rapid growth of online
              shopping in the UAE, securing customer data, transactions, and
              business systems is critical to protect against cyber threats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <motion.div variants={fadeUp} className="ml-10">
              <h2 className="text-2xl font-semibold text-primary mb-6">
                What We Protect
              </h2>

              <ul className="space-y-4 text-gray-800 dark:text-gray-200">
                <li>• Customer personal and payment data</li>
                <li>• Seller and business information</li>
                <li>• Web and mobile e-commerce applications</li>
                <li>• Transaction integrity and privacy</li>
                <li>• Backend systems and integrations</li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
              className="flex justify-center md:justify-end mr-20"
            >
              <img
                src="/assets/services/wapt.webp"
                alt="Ecommerce Security"
                className="w-full max-w-md rounded-xl shadow-lg"
              />
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* ================= WHY SECURITY MATTERS ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-120px' }}
        variants={stagger}
        className="py-16 px-6 bg-gray-50 dark:bg-background transition-colors"
      >
        <div className="max-w-7xl mx-auto text-center">

          <motion.h2 variants={fadeUp} className="text-4xl font-semibold text-primary mb-14">
            Why Secure Your E-commerce in the UAE?
          </motion.h2>

          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

            {[
              { title: 'Rising Cyber Threats', desc: 'Over 33 billion user accounts are expected to be breached, and the number is rising rapidly.' },
              { title: 'Growing Online Shoppers', desc: 'The UAE e-commerce market is expanding fast, making it a prime target for attackers.' },
              { title: 'Protect Customer Trust', desc: 'Security breaches damage trust, brand reputation, and customer loyalty.' },
              { title: 'Prevent Financial Loss', desc: 'Stop fraud, data theft, and downtime that impact revenue.' },
              { title: 'Regulatory & Compliance Needs', desc: 'Meet security and data protection requirements in the UAE.' },
              { title: 'Business Continuity', desc: 'Ensure uninterrupted and secure online operations.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                className="bg-white dark:bg-muted border border-gray-200 dark:border-border rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <h3 className="font-semibold text-lg mb-3 text-blue-600 dark:text-blue-400 group-hover:text-violet-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-700 dark:text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}

          </motion.div>
        </div>
      </motion.section>

      {/* ================= SECURITY PROCESS ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-120px' }}
        variants={fadeUp}
        className="py-24 px-20 bg-gray-50 dark:bg-background transition-colors"
      >
        <div className="max-w-7xl mx-auto">

          <h2 className="text-center text-2xl md:text-3xl font-bold text-primary mb-16">
            How We Secure Your E-commerce Platform
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">

            <motion.ul variants={fadeUp} className="space-y-6 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li>• Scan your e-commerce web or mobile application</li>
              <li>• Identify vulnerabilities and security gaps</li>
              <li>• Conduct comprehensive penetration testing</li>
              <li>• Analyze attack impact and exploitability</li>
              <li>• Validate real-world threat scenarios</li>
            </motion.ul>

            <motion.ul variants={fadeUp} className="space-y-6 ml-20 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li className="font-semibold">• Report</li>
              <ul className="ml-10 space-y-4 text-gray-700 dark:text-muted-foreground">
                <li>○ Clear and actionable vulnerability reports</li>
                <li>○ Practical remediation recommendations</li>
                <li>○ Risk prioritization</li>
                <li>○ Timely security insights</li>
              </ul>
              <li className="font-semibold ml-5">• Continuous Protection</li>
            </motion.ul>

          </div>
        </div>
      </motion.section>

      {/* ================= TESTIMONIALS ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-120px' }}
        variants={stagger}
        className="py-24 px-6 bg-gray-50 dark:bg-background transition-colors"
      >
        <div className="max-w-7xl mx-auto text-center">

          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-primary mb-16">
            Trusted by UAE Businesses
          </motion.h2>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">

            {[
              {
                quote: 'Wattlecorp secured our payment systems and customer data. Their real-time monitoring lets us focus on growth, not threats.',
                role: 'Chief Technology Officer',
                company: 'Online Retail Solutions Company, Abu Dhabi',
              },
              {
                quote: 'In Dubai’s competitive market, trust is everything. Wattlecorp built a security framework that keeps us ahead of risks.',
                role: 'Chief Technology Officer',
                company: 'Fintech Solutions Company, Dubai',
              },
              {
                quote: 'Their team identified issues in just 3 days and worked closely with our developers to secure sensitive data.',
                role: 'CEO',
                company: 'Fintech Company, Dubai',
              },
              {
                quote: 'Wattlecorp delivered exactly what we needed to protect our clients’ data and online assets.',
                role: 'Founder & CEO',
                company: 'HRMS Company, UAE',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="bg-white dark:bg-muted p-6 rounded-xl shadow-md hover:shadow-xl transition-all"
              >
                <p className="text-gray-700 dark:text-muted-foreground mb-4">
                  “{item.quote}”
                </p>
                <p className="font-semibold text-sm">{item.role}</p>
                <p className="text-sm text-gray-500">{item.company}</p>
              </motion.div>
            ))}

          </motion.div>
        </div>
      </motion.section>

      {/* ================= CTA ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="py-24 px-6 text-center bg-gray-50 dark:bg-background transition-colors"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Secure Your Online Store Before Attackers Do
        </h2>

        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Protect your e-commerce business in the UAE with proactive,
          enterprise-grade security services.
        </p>

        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-md hover:shadow-xl transition-all duration-300"
          >
            Speak with a Security Expert
          </motion.button>
        </Link>
      </motion.section>

    </main>
  );
}
