'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -70 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 70 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const zoomCard = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function CloudApplicationSecurityAssessmentPage() {
  return (
    <main className="w-full bg-gray-50 text-gray-900 dark:bg-background dark:text-foreground">

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
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/55 to-black/80"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-24"
        >
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white"
          >
            Cloud Application Security Assessment
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-sm md:text-xl text-gray-200 max-w-4xl text-left"
          >
            Expert and hassle-free CASA services to identify misconfigurations, security gaps, and threats across cloud applications in the UAE.
          </motion.p>

          <Link href="/contact">
            <motion.button
              whileHover={{
                scale: 1.08,
                boxShadow: '0 0 30px rgba(59,130,246,0.6)',
              }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-8 py-3 bg-gradient-to-r from-sky-500 to-blue-700 text-white rounded-lg font-semibold transition"
            >
              CONNECT WITH OUR EXPERTS
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* ================= CASA OVERVIEW ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-120px' }}
        className="py-24 px-6 bg-gray-50 dark:bg-background"
      >
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
            What Is Cloud Application Security Assessment (CASA)?
          </h1>

          <p className="mt-6 max-w-4xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
            CASA is a framework introduced by Google to standardize cloud security and identify configuration weaknesses before they become critical incidents.
          </p>

          <p className="mt-4 max-w-4xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
            It ensures strong controls, policies, and processes for cloud application security.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeLeft}>
            <h2 className="text-2xl font-semibold text-primary mb-6">
              Why CASA Is Important in the UAE
            </h2>

            <ul className="space-y-4 text-gray-800 dark:text-gray-200">
              <li>• Identify configuration weaknesses</li>
              <li>• Reduce breach risks</li>
              <li>• Improve regulatory compliance</li>
              <li>• Strengthen customer trust</li>
              <li>• Secure cloud integrations</li>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeRight}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            <img
              src="/assets/services/application.png"
              alt="CASA"
              className="rounded-xl shadow-xl max-w-md mx-auto"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* ================= CASA SERVICES GRID ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-16 px-6 bg-gray-50 dark:bg-background"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-primary mb-14">
            Our CASA Assessment Approach
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              'Policy Review',
              'Configuration Analysis',
              'Penetration Testing',
              'Threat Identification',
              'Risk Reduction',
              'Compliance Alignment',
            ].map((title, i) => (
              <motion.div
                key={i}
                variants={zoomCard}
                whileHover={{
                  y: -12,
                  scale: 1.05,
                  boxShadow: '0 25px 50px rgba(99,102,241,0.25)',
                }}
                className="bg-white dark:bg-muted border rounded-2xl p-6 shadow-md transition"
              >
                <h3 className="font-semibold text-lg text-blue-600 dark:text-blue-400">
                  {title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ================= CASA DETAILS ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-24 px-6 bg-gray-50 dark:bg-background"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 text-left">
          <ul className="space-y-6 text-lg text-gray-800 dark:text-gray-200">
            <li>• Understand cloud architecture</li>
            <li>• Review policies and controls</li>
            <li>• Analyze access management</li>
            <li>• Perform penetration testing</li>
            <li>• Prioritize remediation</li>
          </ul>

          <ul className="space-y-6 text-lg text-gray-800 dark:text-gray-200">
            <li className="font-semibold">• Detailed Reporting</li>
            <li>• Risk severity analysis</li>
            <li>• CASA-aligned methodology</li>
            <li>• Remediation roadmap</li>
            <li>• Compliance recommendations</li>
          </ul>
        </div>
      </motion.section>

      {/* ================= CTA ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-24 px-6 text-center bg-gray-50 dark:bg-background"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Secure Your Cloud Applications with CASA
        </h2>

        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Identify security gaps, reduce risks, and strengthen trust with expert CASA services.
        </p>

        <Link href="/contact">
          <motion.button
            whileHover={{
              scale: 1.12,
              boxShadow: '0 0 35px rgba(139,92,246,0.6)',
            }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-md"
          >
            Talk to a Cloud Security Expert
          </motion.button>
        </Link>
      </motion.section>
    </main>
  );
}
