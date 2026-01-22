'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
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

const stagger = {
  show: { transition: { staggerChildren: 0.12 } },
};

export default function AwsServerHardeningPage() {
  return (
    <main className="w-full bg-gray-50 text-gray-900 dark:bg-background dark:text-foreground">

      {/* ================= HERO ================= */}
      <motion.section
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/services/aws-hardening.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/60"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-24">
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white"
          >
            AWS Server Hardening Services
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-sm md:text-xl text-gray-200 max-w-4xl text-left"
          >
            Strengthen your AWS cloud fortress toward a better security posture in the UAE
            with expert AWS Server Hardening services.
          </motion.p>

          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(59,130,246,0.6)' }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold transition"
            >
              TALK TO OUR CLOUD EXPERT
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
              What Is AWS Server Hardening?
            </h1>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              Server hardening is the process of minimizing the attack surface of a server
              to make it less vulnerable to cyber threats. AWS (Amazon Web Services)
              enables organizations in the UAE to access scalable virtual computing
              resources without investing in heavy on-premise infrastructure.
            </p>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              Due to the rapid adoption of AWS across the UAE, cloud threats are constantly
              evolving. AWS Server Hardening helps secure cloud environments by implementing
              proper ISMS practices, asset classification, and AWS shared responsibility
              principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <motion.div variants={fadeLeft} className="ml-10">
              <h2 className="text-2xl font-semibold text-primary mb-6">
                Benefits of AWS Server Hardening
              </h2>

              <ul className="space-y-4 text-gray-800 dark:text-gray-200">
                <li>• Prevent unauthorized access and data breaches</li>
                <li>• Improve compliance with security standards and regulations</li>
                <li>• Strengthen cloud security posture across AWS services</li>
                <li>• Ensure end-to-end data protection</li>
                <li>• Optimize technical and cost resources</li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeRight}
              whileHover={{ scale: 1.05 }}
              className="flex justify-center md:justify-end mr-20"
            >
              <img
                src="/assets/services/aws-hardening.jpg"
                alt="AWS Server Hardening"
                className="w-full max-w-md rounded-xl shadow-lg transition"
              />
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* ================= SERVICES GRID ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-120px' }}
        variants={stagger}
        className="py-16 px-6 bg-gray-50 dark:bg-background transition-colors"
      >
        <div className="max-w-7xl mx-auto text-center">

          <motion.h2 variants={fadeUp} className="text-4xl font-semibold text-primary mb-14">
            Our AWS Server Hardening Approach
          </motion.h2>

          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

            {[
              {
                title: 'Identity & Access Management (IAM)',
                desc: 'Refine IAM policies to enforce least privilege access and conduct regular audits.',
              },
              {
                title: 'Secure Network & Encryption',
                desc: 'Configure VPCs, security groups, and network ACLs with full encryption and key rotation.',
              },
              {
                title: 'Vulnerability Management',
                desc: 'Utilize AWS Inspector and Systems Manager to identify and mitigate vulnerabilities.',
              },
              {
                title: 'Patch Management',
                desc: 'Implement a robust patch management process for AWS services and operating systems.',
              },
              {
                title: 'Shared Responsibility Alignment',
                desc: 'Ensure AWS shared responsibility practices are properly implemented.',
              },
              {
                title: 'Continuous Security Improvement',
                desc: 'Reduce attack surface through continuous monitoring and security optimization.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -10, scale: 1.04 }}
                transition={{ type: 'spring', stiffness: 220, damping: 16 }}
                className="bg-white dark:bg-muted border border-gray-200 dark:border-border rounded-2xl p-6 shadow-sm hover:shadow-2xl group"
              >
                <h3 className="font-semibold text-lg mb-3 text-blue-600 dark:text-blue-400 group-hover:text-cyan-500 transition-colors">
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

      {/* ================= DETAILS ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-120px' }}
        variants={fadeUp}
        className="py-24 px-20 bg-gray-50 dark:bg-background transition-colors"
      >
        <div className="max-w-7xl mx-auto">

          <h2 className="text-center text-2xl md:text-3xl font-bold text-primary mb-16">
            How Our AWS Server Hardening Engagement Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">

            <ul className="space-y-6 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li>• Understand AWS architecture and deployed services</li>
              <li>• Identify assets and assess security configurations</li>
              <li>• Implement IAM, network, and encryption controls</li>
              <li>• Apply patching and vulnerability remediation</li>
              <li>• Reduce attack surface across AWS workloads</li>
            </ul>

            <ul className="space-y-6 ml-20 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li className="font-semibold">• Secure Cloud Operations</li>
              <ul className="ml-10 space-y-4 text-gray-700 dark:text-muted-foreground">
                <li>○ Hardened AWS configurations</li>
                <li>○ Continuous vulnerability management</li>
                <li>○ Improved compliance posture</li>
                <li>○ Optimized security costs</li>
                <li>○ Long-term risk reduction</li>
              </ul>
              <li className="font-semibold ml-5">• Resilient AWS Infrastructure</li>
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
          Secure Your AWS Environment with Confidence
        </h2>

        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Strengthen your AWS cloud security with expert server hardening services
          tailored for organizations in the UAE.
        </p>

        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-md hover:shadow-xl transition-all duration-300"
          >
            Talk to an AWS Security Expert
          </motion.button>
        </Link>
      </motion.section>

    </main>
  );
}
