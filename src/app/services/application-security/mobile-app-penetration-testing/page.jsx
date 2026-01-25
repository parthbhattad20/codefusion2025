'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.12 } },
};

export default function MobileAppSecurityTestingPage() {
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
            Mobile Application Security Testing
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 max-w-4xl text-lg md:text-xl text-gray-200">
            Deep testing of mobile applications to uncover weaknesses before hackers exploit them —
            helping you build safer, production-ready Android and iOS apps.
          </motion.p>

          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              GET STARTED
            </motion.button>
          </Link>
        </div>
      </motion.section>

      {/* ================= WHAT WE DO ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-120px' }}
        variants={fadeUp}
        className="py-24 px-6 bg-gray-50 dark:bg-background"
      >
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            What We Do
          </h2>

          <p className="max-w-5xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
            We perform deep penetration testing and security audits inside Android and iOS environments.
            Our certified experts manually exploit vulnerabilities, validate business logic, perform binary
            and file-level analysis, and ensure zero false positives while meeting global compliance standards
            such as PCI, GDPR, HIPAA, NIST, ISO 27001 and more.
          </p>
        </div>
      </motion.section>

      {/* ================= BUSINESS BENEFITS ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-120px' }}
        variants={stagger}
        className="py-24 px-6 bg-white dark:bg-muted"
      >
        <div className="max-w-7xl mx-auto">

          <motion.h2 variants={fadeUp} className="text-center text-3xl md:text-4xl font-bold text-primary mb-16">
            Mobile App Penetration Testing – Business Benefits
          </motion.h2>

          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              "Simulate real-world hacker attacks",
              "Reduce security testing costs",
              "Accelerate secure code delivery",
              "Prevent release delays",
              "Reduce vulnerability remediation effort",
              "Improve compliance readiness",
              "Dashboards for security posture monitoring",
              "Secure coding training for developers",
              "Enterprise-grade risk visibility",
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                className="rounded-2xl p-6 bg-gray-50 dark:bg-background border border-border shadow-sm hover:shadow-xl transition"
              >
                <p className="text-gray-700 dark:text-muted-foreground">
                  {item}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ================= ASSESS · STANDARDS · TRANSFORM ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-120px' }}
        variants={stagger}
        className="py-24 px-6 bg-gray-50 dark:bg-background"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

          {[
            {
              title: "Assess",
              desc: "Manual and dynamic testing following OWASP Mobile Security Testing Guide and MASVS to identify vulnerabilities including zero-day flaws.",
            },
            {
              title: "Standards",
              desc: "Testing aligned with NIST, OWASP, SANS using attacker-grade tools by certified experts (CREST, CEH, OSCP).",
            },
            {
              title: "Transform",
              desc: "Developer-friendly reports, 1:1 remediation workshops and up to 1-year expert on-call support.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="transition"
            >
              <h3 className="text-xl font-semibold text-primary mb-4">{item.title}</h3>
              <p className="text-gray-700 dark:text-muted-foreground">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </motion.section>

      {/* ================= SERVICES COVERED ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-120px' }}
        variants={fadeUp}
        className="py-24 px-6 bg-white dark:bg-muted"
      >
        <div className="max-w-7xl mx-auto">

          <h2 className="text-center text-3xl md:text-4xl font-bold text-primary mb-16">
            What We Test in Mobile Applications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-lg text-gray-700 dark:text-muted-foreground">

            <ul className="space-y-4">
              <li>• OWASP Mobile Top 10</li>
              <li>• Data Storage Security</li>
              <li>• Authentication & Authorization</li>
              <li>• Device & Jailbreak Detection</li>
              <li>• Secure Communication & Encryption</li>
              <li>• Binary & File-Level Analysis</li>
              <li>• Source Code Review</li>
              <li>• API & Web Services Security</li>
            </ul>

            <ul className="space-y-4">
              <li>• Black Box, Grey Box & White Box Testing</li>
              <li>• Reverse Engineering & Decompiling</li>
              <li>• Cryptography Validation</li>
              <li>• Business Logic Flaws</li>
              <li>• Platform & Architecture Review</li>
              <li>• Updates & CVE Checks</li>
              <li>• Backend & Database Risks</li>
            </ul>

          </div>
        </div>
      </motion.section>

      {/* ================= TESTING STEPS ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-120px' }}
        variants={stagger}
        className="py-24 px-6 bg-gray-50 dark:bg-background"
      >
        <div className="max-w-7xl mx-auto text-center">

          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-primary mb-12">
            Steps Involved in Mobile Penetration Testing
          </motion.h2>

          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-gray-700 dark:text-muted-foreground">
            {[
              "Information Gathering",
              "Threat Modelling",
              "Vulnerability Detection",
              "Penetration Testing",
              "Privilege Escalation",
              "Result Analysis",
              "Reporting",
              "Security Workshop",
              "Mitigation Support",
              "Retesting",
              "Summary Report",
            ].map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="p-4 rounded-xl bg-white dark:bg-muted border border-border shadow-sm hover:shadow-lg transition"
              >
                {step}
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
        className="py-24 px-6 text-center bg-gray-50 dark:bg-background"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Secure Your Mobile Applications Today
        </h2>

        <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground mb-8">
          Identify vulnerabilities early, protect sensitive data, and meet global compliance
          requirements with enterprise-grade mobile security testing.
        </p>

        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-md hover:shadow-xl transition"
          >
            Talk to a Mobile Security Expert
          </motion.button>
        </Link>
      </motion.section>

    </main>
  );
}
