'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const sectionReveal = {
  hidden: { opacity: 0, y: 40, filter: 'blur(6px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardReveal = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const floating3D = {
  animate: {
    rotateX: [0, 6, 0, -6, 0],
    rotateY: [0, -8, 0, 8, 0],
    y: [0, -10, 0, 10, 0],
  },
  transition: { duration: 12, repeat: Infinity, ease: 'easeInOut' },
};

export default function GDPRCompliancePage() {
  return (
    <main className="w-full bg-white text-gray-900 dark:bg-background dark:text-foreground">

      {/* ================= HERO ================= */}
      <section className="relative h-screen overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center"
        />
        <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/assets/videos/main.mp4" type="video/mp4" />
  </video>

        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:60px_60px]" />

        <motion.div
          className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-12"
          animate={{ x: ['-30%', '30%'] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-32">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-6 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm text-white tracking-wide"
          >
            EU & EEA Data Protection Framework
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight"
          >
            GDPR Compliance Consulting
          </motion.h1>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full my-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-sm md:text-xl text-gray-200 max-w-4xl text-center"
          >
            Get expert GDPR compliance services to protect data privacy and expand your business securely in EU & EEA regions.
          </motion.p>

          <motion.div
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
            className="mt-10"
          >
            <Link href="/contact">
              <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition">
                Protect Your Data Privacy Now
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ================= GDPR OVERVIEW ================= */}
      <motion.section
        className="py-24 px-6"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-120px' }}
      >
        <div className="max-w-7xl mx-auto">

          <motion.div variants={sectionReveal} className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
              What Is GDPR Compliance?
            </h1>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              GDPR (General Data Protection Regulation) protects personal data of individuals in the EU & EEA.
              Organizations in the UAE must comply to avoid penalties and build trust with customers.
            </p>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              GDPR compliance is not just a legal requirement but a cornerstone of ethical business practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <motion.div variants={sectionReveal} className="ml-10">
              <h2 className="text-2xl font-semibold mb-6">
                Why GDPR Compliance Matters
              </h2>

              <ul className="space-y-4 text-gray-800 dark:text-muted-foreground">
                <li>• Protect personal data from breaches and cyber threats</li>
                <li>• Avoid hefty fines up to 20M EUR or 4% of global turnover</li>
                <li>• Gain trust and credibility with EU/EEA customers</li>
                <li>• Ensure accountability and transparency in data processing</li>
                <li>• Strengthen organizational security and privacy culture</li>
              </ul>
            </motion.div>

            <motion.div
              variants={sectionReveal}
              className="flex justify-center md:justify-end mr-20 perspective-[1200px]"
            >
              <motion.img
                src="/assets/services/gdpr.webp"
                alt="GDPR Compliance"
                className="w-full max-w-md rounded-xl shadow-xl"
                animate={floating3D.animate}
                transition={floating3D.transition}
                style={{ transformStyle: 'preserve-3d' }}
              />
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* ================= GDPR SERVICES GRID ================= */}
      <motion.section
        className="py-20 px-6"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto text-center">

          <motion.h2 variants={sectionReveal} className="text-4xl font-semibold mb-14">
            Our GDPR Compliance Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

            {[
              ['GDPR Gap Assessment', 'Identify gaps in your data protection processes and compliance measures.'],
              ['Data Mapping & Classification', 'Understand how personal data flows through collection, storage, and processing.'],
              ['Consent Management', 'Evaluate how your organization obtains and manages user consent.'],
              ['Security Measures & Protocols', 'Protect business and customer data from unauthorized access.'],
              ['Incident Response & Reporting', 'Ensure swift transparent action during breaches.'],
              ['DPO as a Service', 'Appoint a DPO to oversee GDPR compliance and risk management.'],
            ].map(([title, desc], i) => (
              <motion.div
                key={i}
                variants={cardReveal}
                whileHover={{ y: -10, boxShadow: '0 20px 50px rgba(0,0,0,0.15)' }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="relative bg-white dark:bg-muted border border-gray-200 dark:border-border rounded-2xl p-6 shadow-sm cursor-pointer overflow-hidden group"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
                  <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-r from-blue-500/40 via-violet-500/40 to-blue-500/40 blur-sm" />
                </div>

                <h3 className="relative font-semibold text-lg mb-3 text-blue-600 dark:text-blue-400">
                  {title}
                </h3>
                <p className="relative text-gray-700 dark:text-muted-foreground text-sm leading-relaxed">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ================= GDPR DETAILS ================= */}
      <motion.section
        className="py-24 px-20"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">

          <motion.h2 variants={sectionReveal} className="text-center text-2xl md:text-3xl font-bold mb-16">
            How Our GDPR Compliance Process Works
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">

            <motion.ul variants={sectionReveal} className="space-y-6 text-gray-800 dark:text-muted-foreground text-lg leading-relaxed">
              <li>• Assess data practices</li>
              <li>• Report vulnerabilities</li>
              <li>• Implement corrective controls</li>
              <li>• Monitor compliance continuously</li>
            </motion.ul>

            <motion.ul variants={sectionReveal} className="space-y-6 ml-20 text-gray-800 dark:text-muted-foreground text-lg leading-relaxed">
              <li className="font-semibold">• Tailored Roadmap</li>
              <li>○ UAE-specific compliance guidance</li>
              <li>○ Ongoing technical support</li>
              <li>○ Compliance certification support</li>
              <li>○ Risk management strategy</li>
              <li>○ Long-term governance</li>
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
          Achieve GDPR Compliance Today
        </motion.h2>

        <motion.p variants={sectionReveal} className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Protect customer data, stay compliant, and strengthen your global business reputation with expert GDPR consulting.
        </motion.p>

        <motion.div variants={sectionReveal} whileHover={{ scale: 1.08 }}>
          <Link href="/contact">
            <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-xl">
              Talk to a GDPR Expert
            </button>
          </Link>
        </motion.div>
      </motion.section>

    </main>
  );
}
