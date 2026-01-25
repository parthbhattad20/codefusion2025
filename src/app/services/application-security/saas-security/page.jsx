'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldAlert, Lock, LineChart, Users, AlertTriangle } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.12 } },
};

export default function SaaSSecurityPage() {
  return (
    <main className="w-full bg-gray-50 text-gray-900 dark:bg-background dark:text-foreground">

      {/* ================= HERO ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="relative h-screen overflow-hidden"
       
      >

<video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/assets/videos/main.mp4" type="video/mp4" />
  </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
            Secure Your SaaS Better
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 max-w-4xl text-lg md:text-xl text-gray-200">
            Ensure not even a single vulnerability is left in your SaaS application.
            Protect your cloud-based platform, users, and data from evolving cyber threats.
          </motion.p>

          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 mt-6 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Secure Your SaaS Today
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
              Understanding the Need for SaaS Cybersecurity
            </h1>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              Software as a Service (SaaS) applications are cloud-based platforms
              accessed over the internet without local installations. With nearly
              30,000 SaaS organizations worldwide and a market expected to reach
              700 billion USD by 2030, the security risks and data exposure associated
              with SaaS platforms are growing rapidly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <motion.div variants={fadeUp} className="ml-10">
              <h2 className="text-2xl font-semibold text-primary mb-6">
                SaaS Security Challenges
              </h2>

              <ul className="space-y-4 text-gray-800 dark:text-gray-200">
                <li>• Large volumes of sensitive user and business data</li>
                <li>• Increased attack surface due to cloud exposure</li>
                <li>• Multiple technologies and integrations</li>
                <li>• High dependency of businesses on SaaS platforms</li>
                <li>• Rising cyberattacks targeting SaaS environments</li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              className="flex justify-center md:justify-end mr-20"
            >
              <img
                src="/assets/services/saas.jpg"
                alt="SaaS Security"
                className="w-full max-w-md rounded-xl shadow-lg transition"
              />
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* ================= WHY SAAS SECURITY ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-120px' }}
        variants={stagger}
        className="py-16 px-6 bg-gray-50 dark:bg-background transition-colors"
      >
        <div className="max-w-7xl mx-auto text-center">

          <motion.h2 variants={fadeUp} className="text-4xl font-semibold text-primary mb-14">
            Why Must You Prioritize SaaS Security?
          </motion.h2>

          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

            {[
              {
                title: 'Business Dependency',
                desc: 'Organizations rely on SaaS applications for nearly 70% of their daily business operations.',
              },
              {
                title: 'Complex Technology Stack',
                desc: 'SaaS platforms are built using diverse technologies, increasing security complexity.',
              },
              {
                title: 'Shared Responsibility',
                desc: 'Security is often overlooked by users, making providers responsible for protection.',
              },
              {
                title: 'Regulatory Compliance',
                desc: 'Meet global compliance requirements such as GDPR and PCI DSS.',
              },
              {
                title: 'High-Value Data',
                desc: 'SaaS platforms store valuable and sensitive customer and business data.',
              },
              {
                title: 'Proactive Risk Reduction',
                desc: 'Prevent breaches before they impact users and reputation.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                className="bg-white dark:bg-muted border border-gray-200 dark:border-border rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all group"
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

      {/* ================= SECURITY APPROACH ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-120px' }}
        variants={fadeUp}
        className="py-24 px-20 bg-gray-50 dark:bg-background transition-colors"
      >
        <div className="max-w-7xl mx-auto">

          <h2 className="text-center text-2xl md:text-3xl font-bold text-primary mb-16">
            How We Secure Your SaaS Application
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">

            <ul className="space-y-6 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li>• Authenticate users with strong access controls</li>
              <li>• Encrypt data during storage, transmission, and processing</li>
              <li>• Monitor applications in real time for threats</li>
              <li>• Detect and contain incidents at the earliest stage</li>
              <li>• Continuously improve security posture</li>
            </ul>

            <ul className="space-y-6 ml-20 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li className="font-semibold">• Continuous Updates</li>
              <ul className="ml-10 space-y-4 text-gray-700 dark:text-muted-foreground">
                <li>○ Timely patching of dependencies</li>
                <li>○ Fixing vulnerable code paths</li>
                <li>○ Security hardening</li>
                <li>○ Threat intelligence updates</li>
              </ul>
              <li className="font-semibold ml-5">• Resilient SaaS Architecture</li>
            </ul>

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
            Trusted by SaaS & Technology Leaders
          </motion.h2>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">

            {[
              {
                quote: 'Wattlecorp strengthened our IT consulting services. Their zero-trust architecture gave us a real edge with clients.',
                role: 'Director',
                company: 'IT Consulting Services Company, Dubai',
              },
              {
                quote: 'Their team identified issues in just 3 days and worked closely with our developers to secure sensitive data.',
                role: 'CEO',
                company: 'Global Fintech Company',
              },
              {
                quote: 'Wattlecorp built a security framework that protects our customers and keeps us ahead of risks.',
                role: 'Chief Technology Officer',
                company: 'Fintech Solutions Company, Dubai',
              },
              {
                quote: 'Secure cloud migration and encryption were delivered exactly as we needed.',
                role: 'Founder & CEO',
                company: 'HRMS Company, UAE',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="bg-white dark:bg-muted p-6 rounded-xl shadow-md hover:shadow-xl transition"
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
          Build Trust with Secure SaaS
        </h2>

        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Secure your SaaS application against modern threats and
          compliance challenges with enterprise-grade cybersecurity.
        </p>

        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-md hover:shadow-xl transition-all duration-300"
          >
            Talk to a SaaS Security Expert
          </motion.button>
        </Link>
      </motion.section>

    </main>
  );
}
