'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeDiagonalLeft = {
  hidden: { opacity: 0, x: -60, y: 60 },
  show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.7 } },
};

const fadeDiagonalRight = {
  hidden: { opacity: 0, x: 60, y: 60 },
  show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.7 } },
};

const zoomFade = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

export default function AzureServerHardeningPage() {
  return (
    <main className="w-full bg-gray-50 text-gray-900 dark:bg-background dark:text-foreground">

      {/* HERO */}
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
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/45 to-black/70" />

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-24"
        >
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white"
          >
            Azure Server Hardening Services
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-sm md:text-xl text-gray-200 max-w-4xl text-left"
          >
            Hardening your Azure cloud server in the UAE with a comprehensive cybersecurity strategy.
          </motion.p>

          <Link href="/contact">
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: '0 0 30px rgba(56,189,248,0.6)',
              }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-8 py-3 bg-gradient-to-r from-sky-500 to-blue-700 text-white rounded-lg font-semibold transition"
            >
              TALK TO OUR CLOUD EXPERT
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* OVERVIEW */}
      <motion.section
        variants={zoomFade}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-120px' }}
        className="py-24 px-6 bg-gray-50 dark:bg-background"
      >
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
            What Is Azure Cloud Server Hardening?
          </h1>
          <p className="mt-6 max-w-4xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
            Azure environments are powerful but vulnerable. Server hardening minimizes attack surfaces.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeDiagonalLeft}>
            <h2 className="text-2xl font-semibold text-primary mb-6">
              Benefits of Azure Server Hardening
            </h2>
            <ul className="space-y-4">
              <li>• Prevent unauthorized access</li>
              <li>• Stop lateral movement</li>
              <li>• Improve compliance</li>
              <li>• DDoS protection</li>
              <li>• Cost optimization</li>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeDiagonalRight}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            <img
              src="/assets/services/phishing.webp"
              className="rounded-xl shadow-xl max-w-md mx-auto"
              alt="Azure"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* SERVICES GRID */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-16 px-6 bg-gray-50 dark:bg-background"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-primary mb-14">
            Our Azure Capabilities
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              'IAM Security',
              'Network Security Groups',
              'Azure Security Center',
              'Patch Management',
              'Compliance & Governance',
              'Continuous Monitoring',
            ].map((title, i) => (
              <motion.div
                key={i}
                variants={zoomFade}
                whileHover={{
                  y: -12,
                  scale: 1.04,
                  boxShadow: '0 25px 50px rgba(59,130,246,0.25)',
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

      {/* CTA */}
      <motion.section
        variants={zoomFade}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-24 px-6 text-center bg-gray-50 dark:bg-background"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Secure Your Azure Cloud Today
        </h2>

        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Protect your Azure workloads with expert server hardening services.
        </p>

        <Link href="/contact">
          <motion.button
            whileHover={{
              scale: 1.15,
              boxShadow: '0 0 35px rgba(139,92,246,0.6)',
            }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-md"
          >
            Talk to an Azure Security Expert
          </motion.button>
        </Link>
      </motion.section>
    </main>
  );
}
