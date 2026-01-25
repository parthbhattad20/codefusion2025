'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const heroFade = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export default function CyberForensicsPage() {
  return (
    <main className="w-full bg-gray-50 dark:bg-background text-gray-900 dark:text-foreground">

      <section className="relative h-screen overflow-hidden bg-[#05070d]">

        <div
          className="absolute inset-0 opacity-[0.08]
          bg-[linear-gradient(to_right,#38bdf833_1px,transparent_1px),
              linear-gradient(to_bottom,#38bdf833_1px,transparent_1px)]
          bg-[size:90px_90px]"
        />

        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/assets/services/cyber.jpg')" }}
        />

        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/65 to-black/90" />

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 h-full flex flex-col justify-center px-6 max-w-7xl mx-auto"
        >
          <motion.div
            variants={heroFade}
            className="inline-block mb-6 px-5 py-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 text-cyan-300 text-sm tracking-widest uppercase"
          >
            Digital Investigation
          </motion.div>

          <motion.h1
            variants={heroFade}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight max-w-5xl"
          >
            Digital & Cyber <br /> Forensics Services
          </motion.h1>

          <motion.p
            variants={heroFade}
            className="mt-6 text-gray-300 max-w-3xl text-lg"
          >
            Rapid incident response, legal-grade evidence preservation, and deep cyber investigations to uncover the truth behind security breaches.
          </motion.p>

          <motion.div variants={heroFade} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }} className="mt-10">
            <Link href="/contact">
              <button className="px-10 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-500 shadow-[0_0_35px_rgba(34,211,238,0.45)] hover:shadow-[0_0_55px_rgba(34,211,238,0.7)] transition-all">
                Speak With an Expert
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <motion.section variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">

          <motion.h1 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-cyan-600 dark:text-cyan-400">
            Cyber & Digital Forensics Services
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-4 text-lg font-semibold text-sky-600 dark:text-sky-400">
            Expert Investigation & Incident Response
          </motion.p>

          <motion.p variants={fadeUp} className="mt-6 max-w-4xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
            We identify root causes of cyber incidents, preserve digital evidence, and provide legally defensible reports to support compliance, litigation, and law enforcement investigations.
          </motion.p>

        </div>
      </motion.section>

      <motion.section variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <motion.div variants={fadeUp} className="ml-6">
            <h2 className="text-2xl font-semibold text-primary mb-6">
              Why Choose Our Cyber Forensics Experts
            </h2>

            <ul className="space-y-4 text-gray-800 dark:text-gray-200">
              <li>• Rapid incident response</li>
              <li>• Legal & compliance evidence preservation</li>
              <li>• Malware & threat analysis</li>
              <li>• Network & device forensics</li>
              <li>• Court-ready forensic reporting</li>
            </ul>
          </motion.div>

          <motion.img
            variants={fadeUp}
            src="/assets/services/cyber_f.jpg"
            alt="Cyber Forensics"
            className="w-full max-w-md rounded-xl shadow-xl mx-auto"
          />
        </div>
      </motion.section>

      <motion.section variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">

          <motion.h2 variants={fadeUp} className="text-3xl font-semibold mb-16">
            Our Digital Forensics Services
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">

            {[
              ['Incident Response', 'Rapid containment and breach analysis'],
              ['Computer Forensics', 'Endpoint and server investigations'],
              ['Mobile Device Forensics', 'Smartphones and portable media'],
              ['Email & Social Media Forensics', 'Communication analysis and recovery'],
              ['Database & eDiscovery', 'Structured data investigations'],
              ['Malware Analysis', 'Reverse engineering malicious code'],
            ].map(([title, desc], i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="bg-white dark:bg-muted border border-gray-200 dark:border-border rounded-2xl p-6 shadow-sm hover:shadow-xl transition"
              >
                <h3 className="font-semibold text-lg mb-3 text-cyan-600 dark:text-cyan-400">
                  {title}
                </h3>
                <p className="text-gray-700 dark:text-muted-foreground text-sm leading-relaxed">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-8 mt-16">

            <div className="bg-gradient-to-br from-cyan-600 to-blue-600 text-white p-8 rounded-xl text-left shadow-lg">
              <h3 className="font-semibold mb-3">Digital Evidence Preservation</h3>
              <p className="text-sm leading-relaxed">
                Bit-by-bit forensic imaging with strict chain of custody for legal admissibility.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-600 to-blue-600 text-white p-8 rounded-xl text-left shadow-lg">
              <h3 className="font-semibold mb-3">Expert Forensics Consulting</h3>
              <p className="text-sm leading-relaxed">
                Strategic guidance to investigate breaches and harden your security posture.
              </p>
            </div>

          </motion.div>

        </div>
      </motion.section>

      <motion.section variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="py-24 px-6">
        <div className="max-w-7xl mx-auto">

          <motion.h2 variants={fadeUp} className="text-center text-2xl md:text-3xl font-bold mb-16">
            Cyber Forensics Process & Lifecycle
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">

            <motion.ul variants={fadeUp} className="space-y-6 text-lg text-gray-800 dark:text-gray-200">
              <li>• Incident scoping & investigation planning</li>
              <li>• Forensic data acquisition & imaging</li>
              <li>• OS & deleted data analysis</li>
              <li>• Malware detection</li>
              <li>• Evidence preservation</li>
              <li>• Stakeholder reporting</li>
            </motion.ul>

            <motion.ul variants={fadeUp} className="space-y-6 text-lg text-gray-800 dark:text-gray-200">
              <li>• Device & network forensics</li>
              <li>• Email & social investigations</li>
              <li>• Database & eDiscovery</li>
              <li>• Expert witness support</li>
              <li>• Post-incident remediation guidance</li>
            </motion.ul>

          </div>
        </div>
      </motion.section>

      <motion.section variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="py-24 px-6 text-center">

        <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-4">
          Strengthen Your Cyber Forensics Readiness
        </motion.h2>

        <motion.p variants={fadeUp} className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Prepare for incidents with expert-driven forensic investigation and response.
        </motion.p>

        <motion.div variants={fadeUp} whileHover={{ scale: 1.08 }}>
          <Link href="/contact">
            <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-xl">
              Talk to a Forensics Expert
            </button>
          </Link>
        </motion.div>

      </motion.section>

    </main>
  );
}
