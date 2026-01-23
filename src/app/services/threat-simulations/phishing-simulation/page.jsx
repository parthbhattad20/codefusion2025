'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const sectionReveal = {
  hidden: { opacity: 0, y: 50, filter: 'blur(8px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardReveal = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const floating3D = {
  animate: {
    rotateX: [0, 6, 0, -6, 0],
    rotateY: [0, -8, 0, 8, 0],
    y: [0, -10, 0, 10, 0],
  },
  transition: { duration: 14, repeat: Infinity, ease: 'easeInOut' },
};

export default function PhishingSimulationPage() {
  return (
    <main className="w-full bg-white text-gray-900 dark:bg-background dark:text-foreground">

      {/* ================= HERO ================= */}
      <section className="relative h-screen overflow-hidden bg-[#070b14]">

        {/* Email grid */}
        <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,#38bdf822_1px,transparent_1px),linear-gradient(to_bottom,#38bdf822_1px,transparent_1px)] bg-[size:70px_70px]" />

        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('/assets/services/phishing.webp')" }}
        />

        {/* Inbox scan beam */}
        <motion.div
          className="absolute inset-y-0 w-[35%] bg-gradient-to-r from-transparent via-sky-400/15 to-transparent"
          animate={{ x: ['-40%', '140%'] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
        />

        <div className="relative z-10 h-full flex flex-col justify-center px-6 max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-6 px-4 py-2 rounded-full border border-sky-400/30 bg-sky-400/10 text-sky-300 text-sm tracking-widest"
          >
            HUMAN FIREWALL PROGRAM
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight max-w-5xl"
          >
            Phishing Simulation <br /> & Awareness Training
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-gray-300 max-w-3xl text-lg"
          >
            Reduce human cyber risk with realistic phishing simulations and targeted security awareness training.
          </motion.p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }} className="mt-10">
            <Link href="/contact">
              <button className="px-10 py-4 rounded-full bg-sky-600 hover:bg-sky-500 transition text-white font-semibold shadow-lg">
                Start Phishing Simulation
              </button>
            </Link>
          </motion.div>

        </div>
      </section>

      {/* ================= WHY ================= */}
      <motion.section
        className="py-24 px-6"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <motion.div variants={sectionReveal} className="ml-6">
            <h2 className="text-2xl font-semibold text-primary mb-6">
              Why Phishing Simulation Matters
            </h2>

            <ul className="space-y-4 text-gray-800 dark:text-gray-200">
              <li>• Identify vulnerable employees</li>
              <li>• Reduce ransomware & credential theft risk</li>
              <li>• Improve security culture</li>
              <li>• Meet compliance requirements</li>
              <li>• Continuous training & metrics</li>
            </ul>
          </motion.div>

          <motion.div
            variants={sectionReveal}
            className="flex justify-center md:justify-end mr-10 perspective-[1200px]"
          >
            <motion.img
              src="/assets/services/phishing.webp"
              alt="Phishing Simulation"
              className="w-full max-w-md rounded-xl shadow-xl"
              animate={floating3D.animate}
              transition={floating3D.transition}
              style={{ transformStyle: 'preserve-3d' }}
            />
          </motion.div>

        </div>
      </motion.section>

      {/* ================= SERVICES GRID ================= */}
      <motion.section
        className="py-20 px-6"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto text-center">

          <motion.h2 variants={sectionReveal} className="text-4xl font-semibold mb-14">
            Phishing Simulation Capabilities
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

            {[
              ['Realistic Emails', 'Credential theft, malware & ransomware scenarios'],
              ['Risk Scoring', 'Track employee susceptibility'],
              ['Automated Campaigns', 'Recurring simulations'],
              ['Instant Training', 'On-failure education'],
              ['Compliance Reporting', 'ISO, SOC2, PCI'],
              ['Executive Dashboards', 'Leadership visibility'],
            ].map(([title, desc], i) => (
              <motion.div
                key={i}
                variants={cardReveal}
                whileHover={{
                  y: -6,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                }}
                className="relative group bg-white dark:bg-muted border border-gray-200 dark:border-border rounded-2xl p-6 shadow-sm overflow-hidden transition-all duration-300"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-transparent via-sky-500/10 to-transparent" />

                <h3 className="font-semibold text-lg mb-3 text-sky-600 dark:text-sky-400">
                  {title}
                </h3>
                <p className="text-gray-700 dark:text-muted-foreground text-sm leading-relaxed">
                  {desc}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </motion.section>

      {/* ================= PROCESS ================= */}
      <motion.section
        className="py-20 px-6"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">

          <motion.h2 variants={sectionReveal} className="text-center text-3xl font-bold mb-16">
            How Our Phishing Simulation Works
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg">

            <motion.ul variants={sectionReveal} className="space-y-6 text-gray-800 dark:text-gray-200">
              <li>• Design realistic phishing scenarios</li>
              <li>• Launch simulations</li>
              <li>• Track clicks & submissions</li>
              <li>• Deliver training</li>
            </motion.ul>

            <motion.ul variants={sectionReveal} className="space-y-6 text-gray-800 dark:text-gray-200">
              <li>• Measure improvement</li>
              <li>• Identify high-risk users</li>
              <li>• Executive reporting</li>
              <li>• Continuous risk reduction</li>
            </motion.ul>

          </div>
        </div>
      </motion.section>

      {/* ================= CTA ================= */}
      <motion.section
        className="py-24 px-6 text-center"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h2 variants={sectionReveal} className="text-3xl md:text-4xl font-bold mb-4">
          Stop Phishing Before It Starts
        </motion.h2>

        <motion.p variants={sectionReveal} className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Turn your employees into a strong line of cyber defense.
        </motion.p>

        <motion.div variants={sectionReveal} whileHover={{ scale: 1.08 }}>
          <Link href="/contact">
            <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-sky-600 to-blue-600 text-white shadow-xl">
              Talk to a Security Expert
            </button>
          </Link>
        </motion.div>
      </motion.section>

    </main>
  );
}
