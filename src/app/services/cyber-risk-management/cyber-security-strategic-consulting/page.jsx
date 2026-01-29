'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldAlert, Crosshair, Bug, Users, AlertTriangle, Lock, LineChart } from 'lucide-react';

/* ===============================
   Inline animation configs
================================ */

const sectionMotion = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  viewport: { once: true, margin: '-120px' },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const fadeItem = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function CyberSecurityConsultingPage() {
  return (
    <main className="w-full bg-gray-50 text-gray-900">

      {/* ================= HERO ================= */}
      <section className="relative h-screen overflow-hidden">

        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/assets/videos/main.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/40"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-70">

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white"
          >
            Cyber Security Strategic Consulting
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="mt-6 text-sm md:text-xl text-gray-200 max-w-4xl text-left"
          >
            Build secure, long-lasting strategies to protect your digital assets and safeguard your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/contact">
              <button className="px-8 py-3 bg-gradient-to-r from-violet-500 to-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition mt-6">
                Get Your Free Consultation
              </button>
            </Link>
          </motion.div>

        </div>
      </section>

      {/* ================= CONSULTING OVERVIEW ================= */}
      <motion.section
        {...sectionMotion}
        className="py-24 px-6 bg-gray-50 dark:bg-background transition-colors"
      >
        <div className="max-w-7xl mx-auto">

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="text-center mb-16"
          >
            <motion.h1 variants={fadeItem} className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
              Cyber Security Strategic Consulting 
            </motion.h1>

            <motion.p variants={fadeItem} className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              Only a hacker could tell you how to hack a system; imagine a team of hackers preparing a kit that highlights all potential vulnerabilities. Our consulting services compile the information you need to build a robust security strategy, protecting your digital assets, resources, and money. Ideal for NESA (SIA), ISR, ISO 27001, ADSIC, ADHICS, and PCI DSS compliance .
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <motion.div
              {...fadeItem}
              whileHover={{ y: -6 }}
              className="ml-10"
            >
              <h2 className="text-2xl font-semibold text-primary mb-6">
                Why Strategic Consulting Matters
              </h2>

              <ul className="space-y-4 text-gray-800 dark:text-gray-200">
                <li>• Protect your digital assets and business-critical data</li>
                <li>• Develop long-term, effective cybersecurity strategies</li>
                <li>• Receive expert guidance from world-class consultants</li>
                <li>• Ensure compliance with regional and international standards</li>
                <li>• Prevent financial and reputational losses</li>
              </ul>
            </motion.div>

            <motion.div
              {...fadeItem}
              whileHover={{ scale: 1.05 }}
              className="flex justify-center md:justify-end mr-20"
            >
              <img
                src="/assets/services/cyber-overview.jpg"
                alt="Cyber Security Consulting"
                className="w-full max-w-md rounded-xl shadow-lg"
              />
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* ================= STRATEGIC CONSULTING SNAPSHOT ================= */}
<motion.section
  {...sectionMotion}
  className="py-24 px-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-950"
>
  <div className="max-w-7xl mx-auto">

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <motion.h2
        variants={fadeItem}
        className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400"
      >
        Cyber Security Strategy Implementation Snapshot
      </motion.h2>

      <motion.p
        variants={fadeItem}
        className="mt-4 max-w-3xl mx-auto text-gray-600 dark:text-gray-400 text-lg"
      >
        A structured consulting framework to design, implement, and maintain
        enterprise-grade cybersecurity strategy aligned with business goals and
        regulatory requirements.
      </motion.p>
    </motion.div>

    {/* Steps */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-16"
    >
      {[
        ['Assess', 'Business risk, assets & threat landscape'],
        ['Design', 'Security governance & target architecture'],
        ['Align', 'Compliance & regulatory mapping'],
        ['Execute', 'Roadmap & control implementation'],
        ['Sustain', 'KPIs, audits & continuous improvement'],
      ].map(([title, desc], i) => (
        <motion.div
          key={i}
          variants={fadeItem}
          whileHover={{ y: -8 }}
          transition={{ type: 'spring', stiffness: 180, damping: 16 }}
          className="rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-md hover:shadow-xl transition"
        >
          <div className="mb-3 text-sm font-semibold text-blue-500">
            Phase {i + 1}
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            {title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
        </motion.div>
      ))}
    </motion.div>

    {/* Deliverables */}
    <motion.div variants={fadeItem}>
      <div className="rounded-3xl border border-gray-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur p-10 shadow-xl">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          What You Receive
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            'Cybersecurity maturity assessment report',
            'Enterprise risk register',
            'Security governance & policy framework',
            'Compliance mapping (ISO, NESA, ISR, PCI, etc.)',
            '3–12 month strategic security roadmap',
            'Technology & control architecture design',
            'Investment & resource planning guidance',
            'Executive security posture presentation',
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-200 dark:border-slate-700 px-4 py-3 text-sm bg-white dark:bg-slate-950 text-gray-700 dark:text-gray-300"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </motion.div>

  </div>
</motion.section>


      {/* ================= CONSULTING SERVICES GRID ================= */}
      <motion.section
        {...sectionMotion}
        className="py-15 px-6 bg-gray-50 dark:bg-background transition-colors"
      >
        <div className="max-w-7xl mx-auto text-center">

          <motion.h2
            {...fadeItem}
            className="text-4xl font-semibold text-primary mb-14"
          >
            Our Cyber Security Consulting Services
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16"
          >
            {[
              { title: 'Strategy Development', desc: 'Create brilliant, long-term cybersecurity strategies tailored to your business.' },
              { title: 'Risk Assessment', desc: 'Identify vulnerabilities and risks to your digital assets for proactive mitigation.' },
              { title: 'Compliance Guidance', desc: 'Ensure adherence to NESA (SIA), ISR, ISO 27001, ADSIC, ADHICS, and PCI DSS standards.' },
              { title: 'Feasible Solutions', desc: 'Flexible consulting solutions for small to large businesses with digital assets.' },
              { title: 'Implementation Roadmaps', desc: 'Practical step-by-step plans to secure systems, networks, and sensitive data.' },
              { title: 'Continuous Advisory', desc: 'Ongoing support to keep your cybersecurity strategy robust and adaptive.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeItem}
                whileHover={{
                  y: -12,
                  scale: 1.04,
                  boxShadow: '0px 25px 50px rgba(0,0,0,0.15)',
                }}
                transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                className="bg-white dark:bg-muted border border-gray-200 dark:border-border rounded-2xl p-6 shadow-sm cursor-pointer"
              >
                <h3 className="font-semibold text-lg mb-3 text-blue-600 dark:text-blue-400">
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

      
    

    </main>
  );
}
