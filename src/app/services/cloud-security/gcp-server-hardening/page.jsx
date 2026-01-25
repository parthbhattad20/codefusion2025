'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function GCPServerHardeningPage() {
  return (
    <main className="w-full bg-gray-50 dark:bg-background text-gray-900 dark:text-gray-100">

      {/* ================= HERO ================= */}
      <section
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
        <div className="absolute inset-0 bg-black/70" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            GCP Server Hardening Services
          </h1>

          <p className="mt-6 max-w-4xl text-lg text-gray-200">
            Keep your Google Cloud Platform secure with expert server hardening strategies for UAE businesses.
          </p>

          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg font-semibold shadow-lg"
            >
              TALK TO OUR CLOUD EXPERT
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        className="py-24 px-6"
      >
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            What Is Cloud Server Hardening for GCP?
          </h2>

          <p className="mt-6 max-w-4xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            Google Cloud Platform (GCP) provides powerful cloud infrastructure, but securing your assets remains the responsibility of your business. Server hardening ensures access control, audit readiness, and adherence to CIS benchmarks.
          </p>

          <p className="mt-4 max-w-4xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            Proper hardening protects sensitive information, ensures confidentiality and integrity, supports compliance, optimizes costs, and enhances incident response capabilities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">

            <motion.div variants={fadeLeft} className="text-left">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Benefits of GCP Server Hardening
              </h3>

              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li>• Safeguard data with robust encryption and access controls</li>
                <li>• Ensure service continuity and effective backups</li>
                <li>• Optimize operational costs and cloud resource usage</li>
                <li>• Strengthen incident response and threat mitigation</li>
                <li>• Demonstrate compliance and organizational resilience</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeRight} className="flex justify-center">
              <img
                src="/assets/services/nt.jpg"
                alt="GCP Server Hardening"
                className="w-full max-w-md rounded-xl shadow-xl"
              />
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* ================= SERVICES GRID ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        className="py-20 px-6"
      >
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-14">
            Our GCP Server Hardening Capabilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {[
              ['Discovery & Mapping', 'Identify and categorize all cloud assets based on type and criticality.'],
              ['Vulnerability Assessment', 'Detect vulnerabilities using advanced tools and best practices.'],
              ['Penetration Testing', 'Validate vulnerabilities to determine real-world risk.'],
              ['Access & Identity Management', 'Enforce least privilege and monitor user roles.'],
              ['Reporting & Remediation', 'Deliver actionable security improvement plans.'],
              ['Continuous Monitoring', 'Detect threats in real time and respond efficiently.'],
            ].map(([title, desc], i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10, scale: 1.04 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-xl p-6 shadow-md"
              >
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  {title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {desc}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </motion.section>

      {/* ================= DETAILS ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        className="py-24 px-6"
      >
        <div className="max-w-7xl mx-auto">

          <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-white mb-16">
            How Our GCP Server Hardening Engagement Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg">

            <ul className="space-y-5 text-gray-700 dark:text-gray-300">
              <li>• Discover and map all cloud assets</li>
              <li>• Perform vulnerability assessments</li>
              <li>• Conduct penetration testing</li>
              <li>• Apply secure configurations</li>
              <li>• Monitor and remediate continuously</li>
            </ul>

            <ul className="space-y-5 text-gray-700 dark:text-gray-300">
              <li className="font-semibold text-gray-900 dark:text-white">• Secure Cloud Operations</li>
              <li>○ CIS benchmark alignment</li>
              <li>○ Threat detection & mitigation</li>
              <li>○ Backup & disaster recovery</li>
              <li>○ Cost optimization</li>
              <li>○ Enhanced incident response</li>
            </ul>

          </div>
        </div>
      </motion.section>

      {/* ================= CTA ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-24 px-6 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Protect Your GCP Cloud Infrastructure Today
        </h2>

        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
          Ensure your Google Cloud environment is hardened, compliant, and secure with our expert services.
        </p>

        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-lg"
          >
            Talk to a GCP Security Expert
          </motion.button>
        </Link>
      </motion.section>

    </main>
  );
}
