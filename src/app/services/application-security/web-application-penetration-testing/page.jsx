'use client';

import Link from 'next/link';
import {
  ShieldCheck,
  AlertTriangle,
  Lock,
  LineChart,
  ClipboardCheck,
  Users,
} from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.12 } },
};

export default function WebAppPentestPage() {
  return (
    <motion.main
      initial="hidden"
      animate="show"
      variants={stagger}
      className="w-full bg-gray-50 dark:bg-background text-gray-900 dark:text-foreground"
    >

      {/* ================= HERO ================= */}
      <motion.section
        variants={fadeUp}
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/services/wapt.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-20">
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white"
          >
            Web Application Penetration Testing
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-sm md:text-xl text-gray-200 max-w-4xl"
          >
            In-depth security assessment of your web applications to identify
            vulnerabilities, business logic flaws, and compliance gaps using
            real-world attacker simulation.
          </motion.p>

          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              GET STARTED
            </motion.button>
          </Link>
        </div>
      </motion.section>

      {/* ================= OVERVIEW ================= */}
      <motion.section
        variants={fadeUp}
        whileInView="show"
        viewport={{ once: true }}
        className="py-24 px-6 bg-gray-50 dark:bg-background"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            What We Do
          </h2>

          <p className="mt-6 max-w-5xl mx-auto text-lg text-gray-700 dark:text-muted-foreground leading-relaxed">
            Our application security testing assists in detecting vulnerabilities
            across web applications and online services. We go beyond automated
            scanners by simulating real hackers, identifying the most vulnerable
            components, prioritizing risk, and providing remediation guidance.
          </p>

          <p className="mt-6 max-w-5xl mx-auto text-lg text-gray-700 dark:text-muted-foreground leading-relaxed">
            Our testing includes OWASP Top 10, SANS Top 25, PCI, GDPR, HIPAA,
            HL7, NIST, ISO/IEC 27001 & 27002, with tailored security advice and
            up to one-month mitigation support.
          </p>
        </div>
      </motion.section>

      {/* ================= KEY BENEFITS ================= */}
      <motion.section
        variants={fadeUp}
        whileInView="show"
        viewport={{ once: true }}
        className="py-20 px-6 bg-gray-50 dark:bg-background"
      >
        <div className="max-w-7xl mx-auto">

          <h2 className="text-center text-3xl font-bold text-primary mb-14">
            Business Benefits
          </h2>

          <motion.div
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {[
              { title: 'Simulated Real-World Attacks', desc: 'Evaluate your real security posture using hacker-like techniques.' },
              { title: 'Faster Secure Development', desc: 'Improve developer speed and code quality with secure coding insights.' },
              { title: 'Lower Testing & Compliance Cost', desc: 'Reduce testing and compliance costs without compromising security.' },
              { title: 'Early Vulnerability Detection', desc: 'Identify and fix issues early in the SDLC.' },
              { title: 'Continuous Security Visibility', desc: 'Dashboards to monitor your web application security posture.' },
              { title: 'Release Without Delay', desc: 'Prevent security testing from delaying application releases.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                className="bg-white dark:bg-muted border rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all"
              >
                <h3 className="font-semibold text-lg mb-3 text-blue-600 dark:text-blue-400">
                  {item.title}
                </h3>
                <p className="text-gray-700 dark:text-muted-foreground text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </motion.section>

      {/* ================= METHODOLOGY ================= */}
      <motion.section
        variants={fadeUp}
        whileInView="show"
        viewport={{ once: true }}
        className="py-24 px-6 bg-gray-50 dark:bg-background"
      >
        <div className="max-w-7xl mx-auto">

          <h2 className="text-center text-3xl font-bold text-primary mb-16">
            Our Penetration Testing Methodology
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg">

            <motion.ul variants={fadeUp} className="space-y-4">
              <li>• Information Gathering</li>
              <li>• Threat Modelling</li>
              <li>• Application Mapping</li>
              <li>• Vulnerability Detection</li>
              <li>• Manual Exploitation</li>
              <li>• Privilege Escalation</li>
            </motion.ul>

            <motion.ul variants={fadeUp} className="space-y-4">
              <li>• Result Analysis</li>
              <li>• Developer-Friendly Reporting</li>
              <li>• Security Briefing Workshop</li>
              <li>• Mitigation Support</li>
              <li>• Complimentary Retesting</li>
              <li>• Summary Report</li>
            </motion.ul>

          </div>
        </div>
      </motion.section>

      {/* ================= WHAT WE TEST ================= */}
      <motion.section
        variants={fadeUp}
        whileInView="show"
        viewport={{ once: true }}
        className="py-24 px-6 bg-gray-50 dark:bg-background"
      >
        <div className="max-w-7xl mx-auto">

          <h2 className="text-center text-3xl font-bold text-primary mb-16">
            What Do We Test?
          </h2>

          <motion.div
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-10 text-sm"
          >
            {[
              'OWASP Top 10 & SANS Top 25',
              'Broken Access Control & IDOR',
              'SQL Injection & XSS',
              'Business Logic Vulnerabilities',
              'Secure Communication & Encryption',
              'API & Web Services Security',
              'Source Code Review',
              'Updates, CVEs & Misconfigurations',
              'PII & Sensitive Data Exposure',
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="bg-white dark:bg-muted border rounded-xl p-5 shadow-sm hover:shadow-lg transition-all"
              >
                {item}
              </motion.div>
            ))}
          </motion.div>

        </div>
      </motion.section>

      {/* ================= DELIVERABLES ================= */}
      <motion.section
        variants={fadeUp}
        whileInView="show"
        viewport={{ once: true }}
        className="py-24 px-6 text-center bg-gray-50 dark:bg-background"
      >

        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
          Web App Pen Test Deliverables
        </h2>

        <p className="max-w-4xl mx-auto text-lg text-gray-700 dark:text-muted-foreground mb-10">
          Developer-friendly reports, remediation workshops, retesting, secure
          badge, and up to one-year on-call advisory support.
        </p>

        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-md hover:shadow-lg transition"
          >
            Talk to a Security Expert
          </motion.button>
        </Link>

      </motion.section>

    </motion.main>
  );
}
