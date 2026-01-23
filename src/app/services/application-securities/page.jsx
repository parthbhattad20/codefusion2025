'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';



const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const heroFade = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export default function ApplicationSecurityPage() {
  return (
    <main className="w-full bg-gray-50 dark:bg-background text-gray-900 dark:text-foreground">

      {/* ================= HERO ================= */}
      <section className="relative h-screen overflow-hidden bg-[#05070d]">

        {/* cyber grid */}
        <div
          className="absolute inset-0 opacity-[0.08]
          bg-[linear-gradient(to_right,#22c55e33_1px,transparent_1px),
              linear-gradient(to_bottom,#22c55e33_1px,transparent_1px)]
          bg-[size:90px_90px]"
        />

        {/* background image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('/assets/services/application.png')" }}
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/65 to-black/90" />

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 h-full flex flex-col justify-center px-6 max-w-7xl mx-auto"
        >
          <motion.div
            variants={heroFade}
            className="inline-block mb-6 px-5 py-2 rounded-full
                       border border-emerald-400/40 bg-emerald-500/10
                       text-emerald-300 text-sm tracking-widest uppercase"
          >
            Secure Software
          </motion.div>

          <motion.h1
            variants={heroFade}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight max-w-5xl"
          >
            Application Security <br /> Services
          </motion.h1>

          <motion.p
            variants={heroFade}
            className="mt-6 text-gray-300 max-w-3xl text-lg"
          >
            Identify, fix, and prevent vulnerabilities across web, mobile, and API-based applications.
            Secure your software throughout the entire SDLC.
          </motion.p>

          <motion.div
            variants={heroFade}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="mt-10"
          >
            <Link href="/contact">
              <button
                className="px-10 py-4 rounded-full font-semibold text-white
                           bg-gradient-to-r from-emerald-600 to-green-500
                           shadow-[0_0_35px_rgba(16,185,129,0.45)]
                           hover:shadow-[0_0_55px_rgba(16,185,129,0.7)]
                           transition-all"
              >
                Speak With an AppSec Expert
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-24 px-6"
      >
        <div className="max-w-7xl mx-auto text-center">

          <motion.h1 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-emerald-600 dark:text-emerald-400">
            Application Security (AppSec)
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 max-w-4xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
            Application Security protects software applications from vulnerabilities attackers exploit —
            including web apps, mobile apps, APIs, and cloud-native platforms.
          </motion.p>

        </div>
      </motion.section>

      {/* ================= WHY APPSEC ================= */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-24 px-6"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <motion.div variants={fadeUp} className="ml-6">
            <h2 className="text-2xl font-semibold text-primary mb-6">
              Why Application Security Matters
            </h2>

            <ul className="space-y-4 text-gray-800 dark:text-gray-200">
              <li>• Prevent data breaches and unauthorized access</li>
              <li>• Secure customer and business-critical data</li>
              <li>• Reduce financial and reputational risk</li>
              <li>• Meet compliance requirements (PCI DSS, ISO, GDPR)</li>
              <li>• Build secure software from design to deployment</li>
            </ul>
          </motion.div>

          <motion.img
            variants={fadeUp}
            src="/assets/img.jpg"
            alt="Application Security"
            className="w-full max-w-md rounded-xl shadow-xl mx-auto"
          />
        </div>
      </motion.section>

      {/* ================= SERVICES GRID ================= */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-24 px-6"
      >
        <div className="max-w-7xl mx-auto text-center">

          <motion.h2 variants={fadeUp} className="text-3xl font-semibold mb-16">
            Application Security Services We Offer
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">

            {[
              ['SAST', 'Analyze source code to identify security flaws early in development.'],
              ['DAST', 'Test running applications to detect real-world vulnerabilities.'],
              ['API Security Testing', 'Identify authentication and data exposure risks.'],
              ['Secure Code Review', 'Manual and automated review for logic and design flaws.'],
              ['DevSecOps Enablement', 'Integrate security into CI/CD pipelines.'],
              ['Remediation Support', 'Fix vulnerabilities efficiently and prevent reoccurrence.'],
            ].map(([title, desc], i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="bg-white dark:bg-muted border border-gray-200 dark:border-border
                           rounded-2xl p-6 shadow-sm hover:shadow-xl transition"
              >
                <h3 className="font-semibold text-lg mb-3 text-emerald-600 dark:text-emerald-400">
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

      {/* ================= DETAILS ================= */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-24 px-6"
      >
        <div className="max-w-7xl mx-auto">

          <motion.h2 variants={fadeUp} className="text-center text-2xl md:text-3xl font-bold mb-16">
            How Our Application Security Program Works
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">

            <motion.ul variants={fadeUp} className="space-y-6 text-lg text-gray-800 dark:text-gray-200">
              <li>• Automated & manual vulnerability discovery</li>
              <li>• Risk prioritization by exploitability</li>
              <li>• Developer-friendly remediation guidance</li>
              <li>• Fix validation & retesting</li>
              <li>• Secure SDLC & DevSecOps enablement</li>
            </motion.ul>

            <motion.ul variants={fadeUp} className="space-y-6 text-lg text-gray-800 dark:text-gray-200">
              <li className="font-semibold">• Continuous Risk Management</li>
              <li>○ Secure architecture reviews</li>
              <li>○ Ongoing vulnerability monitoring</li>
              <li>○ Secure deployment validation</li>
              <li>○ Compliance-ready reporting</li>
            </motion.ul>

          </div>
        </div>
      </motion.section>

      {/* ================= CTA ================= */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-24 px-6 text-center"
      >
        <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-4">
          Secure Your Applications Before Attackers Do
        </motion.h2>

        <motion.p variants={fadeUp} className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Build secure, resilient applications with Vulnuris Application Security expertise.
        </motion.p>

        <motion.div variants={fadeUp} whileHover={{ scale: 1.08 }}>
          <Link href="/contact">
            <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-emerald-600 to-green-500 text-white shadow-xl">
              Talk to an AppSec Expert
            </button>
          </Link>
        </motion.div>
      </motion.section>

    </main>
  );
}
