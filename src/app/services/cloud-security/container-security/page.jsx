'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

export default function ContainerSecurityPage() {
  return (
    <main className="w-full bg-gray-50 dark:bg-background text-gray-900 dark:text-gray-100">

      {/* HERO */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/services/container-security.webp')" }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            Container Security Services
          </h1>

          <p className="mt-6 max-w-4xl text-lg text-gray-200">
            Protect your containerized applications from vulnerabilities and threats with enterprise-grade container security services.
          </p>

          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg font-semibold"
            >
              CONNECT WITH OUR EXPERTS
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* OVERVIEW */}
      <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            What Is Docker Container Security?
          </h2>

          <p className="mt-6 max-w-4xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            Container security protects containerized applications across CI/CD pipelines, infrastructure, runtime and lifecycle management.
          </p>

          <p className="mt-4 max-w-4xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            A single compromised container can become an entry point to your entire infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-16 items-center">

          <motion.div variants={fadeLeft}>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              Benefits
            </h3>

            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li>• Secure containerized applications</li>
              <li>• Improve IT security posture</li>
              <li>• Detect lifecycle vulnerabilities</li>
              <li>• Protect cloud & on-prem environments</li>
              <li>• Strengthen pipelines & runtime hosts</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeRight} className="flex justify-center">
            <img
              src="/assets/services/container-security.jpg"
              className="rounded-xl shadow-xl max-w-md"
              alt="Container security"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* SERVICES */}
      <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-14 text-gray-900 dark:text-white">
            Our Capabilities
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            {[
              ['Image Security', 'Scan container images for vulnerabilities.'],
              ['Orchestration Security', 'RBAC, secrets and network policy enforcement.'],
              ['Runtime Monitoring', 'Detect suspicious behavior in real time.'],
              ['CI/CD Security', 'Secure build pipelines and image signing.'],
              ['Infrastructure Protection', 'Protect hosts and platforms.'],
              ['Compliance', 'Meet regulatory standards.'],
            ].map(([title, desc], i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-xl p-6 shadow-md"
              >
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  {title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {desc}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="py-24 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Protect Your Containers Today
        </h2>

        <p className="mt-4 max-w-xl mx-auto text-lg text-gray-700 dark:text-gray-300">
          Secure your container infrastructure with enterprise-grade security services.
        </p>

        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.12 }}
            className="mt-6 px-10 py-3 rounded-full bg-gradient-to-r from-violet-500 to-blue-600 text-white font-semibold"
          >
            Talk to a Security Expert
          </motion.button>
        </Link>
      </motion.section>

    </main>
  );
}
