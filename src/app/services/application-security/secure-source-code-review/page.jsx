'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Code, ShieldAlert, Bug, FileSearch, LineChart, Lock } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.12 } },
};

export default function SourceCodeReviewPage() {
  return (
    <main className="w-full bg-gray-50 text-gray-900 dark:bg-background dark:text-foreground">

      {/* ================= HERO ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/services/wapt.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-20">
          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
            Secure Source Code Review Services
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 text-sm md:text-xl text-gray-200 max-w-4xl text-left">
            Deep testing of source code to identify weaknesses before hackers exploit them.
            Secure your applications at the atomic level of software security.
          </motion.p>

          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 mt-6 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Schedule Code Review
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
              What is Secure Source Code Review?
            </h1>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              Source code review improves the quality and security of software applications
              through in-depth code-level analysis. It helps identify vulnerabilities early
              in the development lifecycle and ensures secure applications are released into production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <motion.div variants={fadeUp} className="ml-10">
              <h2 className="text-2xl font-semibold text-primary mb-6">
                Vulnerabilities We Identify
              </h2>

              <ul className="space-y-4 text-gray-800 dark:text-gray-200">
                <li>• Buffer Overflows</li>
                <li>• Injection Attacks</li>
                <li>• Cross-Site Scripting (XSS)</li>
                <li>• Cross-Site Request Forgery (CSRF)</li>
                <li>• Insecure Authentication & Authorization</li>
                <li>• Logic & Data Validation Flaws</li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              className="flex justify-center md:justify-end mr-20"
            >
              <img
                src="/assets/services/wapt.webp"
                alt="Source Code Review"
                className="w-full max-w-md rounded-xl shadow-lg transition"
              />
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* ================= WHY YOU NEED IT ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-120px' }}
        variants={stagger}
        className="py-16 px-6 bg-gray-50 dark:bg-background transition-colors"
      >
        <div className="max-w-7xl mx-auto text-center">

          <motion.h2 variants={fadeUp} className="text-4xl font-semibold text-primary mb-14">
            Why Do You Need a Source Code Review?
          </motion.h2>

          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

            {[
              {
                title: 'Early Vulnerability Detection',
                desc: 'Identify security flaws at the earliest stage to reduce remediation cost and risk.',
              },
              {
                title: 'Business & Reputation Protection',
                desc: 'Prevent breaches that could damage customer trust and brand reputation.',
              },
              {
                title: 'Compliance & Legal Readiness',
                desc: 'Meet regulatory and security compliance requirements with confidence.',
              },
              {
                title: 'Secure Production Releases',
                desc: 'Ensure secure code before deployment into production environments.',
              },
              {
                title: 'Improved Code Quality',
                desc: 'Enhance maintainability, performance, and security best practices.',
              },
              {
                title: 'Reduced Long-Term Risk',
                desc: 'Fix issues early to avoid costly security incidents later.',
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

      {/* ================= ENGAGEMENT PROCESS ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-120px' }}
        variants={fadeUp}
        className="py-24 px-20 bg-gray-50 dark:bg-background transition-colors"
      >
        <div className="max-w-7xl mx-auto">

          <h2 className="text-center text-2xl md:text-3xl font-bold text-primary mb-16">
            How Our Source Code Review Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">

            <ul className="space-y-6 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li>• Assess application architecture and codebase</li>
              <li>• Perform manual and automated code analysis</li>
              <li>• Identify vulnerabilities at the root level</li>
              <li>• Validate security controls and logic flows</li>
              <li>• Prioritize risks based on business impact</li>
            </ul>

            <ul className="space-y-6 ml-20 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li className="font-semibold">• Report</li>
              <ul className="ml-10 space-y-4 text-gray-700 dark:text-muted-foreground">
                <li>○ Detailed vulnerability findings</li>
                <li>○ Secure coding recommendations</li>
                <li>○ Developer-friendly remediation guidance</li>
                <li>○ Risk severity & impact analysis</li>
              </ul>
              <li className="font-semibold ml-5">• Monitor</li>
              <p className="ml-10 text-gray-700 dark:text-muted-foreground">
                Continuous assessments to proactively identify new vulnerabilities
                as the codebase evolves.
              </p>
            </ul>

          </div>
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
          Secure Code. Secure Applications.
        </h2>

        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Identify vulnerabilities early and build secure applications
          with Vulnuris Secure Source Code Review Services.
        </p>

        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-md hover:shadow-xl transition-all duration-300"
          >
            Talk to a Security Expert
          </motion.button>
        </Link>
      </motion.section>

    </main>
  );
}
