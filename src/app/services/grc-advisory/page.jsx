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

export default function GRCPage() {
  return (
    <main className="w-full bg-gray-50 dark:bg-background text-gray-900 dark:text-foreground">

      {/* Hero */}
      <section className="relative h-screen overflow-hidden bg-[#070b12]">

        <div
          className="absolute inset-0 opacity-[0.06]
          bg-[linear-gradient(to_right,#60a5fa22_1px,transparent_1px),
              linear-gradient(to_bottom,#60a5fa22_1px,transparent_1px)]
          bg-[size:90px_90px]"
        />

        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/assets/services/grc.jpg')" }}
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
            className="inline-block mb-6 px-5 py-2 rounded-full border border-blue-400/40 bg-blue-500/10 text-blue-300 text-sm tracking-widest uppercase"
          >
            Governance · Risk · Compliance
          </motion.div>

          <motion.h1
            variants={heroFade}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight max-w-5xl"
          >
            GRC Advisory & <br /> Audit Services
          </motion.h1>

          <motion.p
            variants={heroFade}
            className="mt-6 text-gray-300 max-w-3xl text-lg"
          >
            Establish strong governance, manage cyber risk, and achieve regulatory compliance with enterprise-grade GRC advisory.
          </motion.p>

          <motion.div
            variants={heroFade}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="mt-10"
          >
            <Link href="/contact">
              <button className="px-10 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-500 shadow-[0_0_35px_rgba(96,165,250,0.45)] hover:shadow-[0_0_55px_rgba(96,165,250,0.7)] transition-all">
                Speak With an Expert
              </button>
            </Link>
          </motion.div>

        </motion.div>
      </section>

      {/* Overview */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-24 px-6"
      >
        <div className="max-w-7xl mx-auto text-center">

          <motion.h1 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
            GRC Advisory & Audit Services
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-4 text-lg font-semibold text-sky-600 dark:text-sky-400">
            Governance • Risk • Compliance
          </motion.p>

          <motion.p variants={fadeUp} className="mt-6 max-w-4xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
            End-to-end GRC programs to reduce regulatory exposure, strengthen internal controls, and build stakeholder trust.
          </motion.p>

        </div>
      </motion.section>

      {/* Why GRC */}
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
              Why Vulnuris GRC Advisory
            </h2>

            <ul className="space-y-3 text-gray-800 dark:text-gray-200">
              <li>• Policy and framework development</li>
              <li>• Enterprise risk assessment</li>
              <li>• Compliance mapping & control design</li>
              <li>• Audit readiness programs</li>
              <li>• Continuous compliance monitoring</li>
            </ul>
          </motion.div>

          <motion.img
            variants={fadeUp}
            src="/assets/services/grc.jpg"
            alt="GRC Advisory"
            className="w-full max-w-md rounded-xl shadow-xl mx-auto"
          />

        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-24 px-6"
      >
        <div className="max-w-7xl mx-auto text-center">

          <motion.h2 variants={fadeUp} className="text-3xl font-semibold mb-16">
            GRC Advisory & Audit Capabilities
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">

            {[
              ['Governance Frameworks', 'ISO 27001, NIST, COBIT aligned frameworks'],
              ['Risk Management', 'Cyber and operational risk assessment'],
              ['Compliance Advisory', 'ISO, SOC2, PCI DSS, GDPR, HIPAA'],
              ['Audit Services', 'Internal and external audit execution'],
              ['Third-Party Risk', 'Vendor risk monitoring'],
              ['Continuous Compliance', 'Always audit-ready posture'],
            ].map(([title, desc], i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="bg-white dark:bg-muted border border-gray-200 dark:border-border rounded-2xl p-6 shadow-sm hover:shadow-xl transition"
              >
                <h3 className="font-semibold text-lg mb-3 text-blue-600 dark:text-blue-400">
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

      {/* Details */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-24 px-6"
      >
        <div className="max-w-7xl mx-auto">

          <motion.h2 variants={fadeUp} className="text-center text-2xl md:text-3xl font-bold mb-16">
            What Are GRC Advisory & Audit Services?
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">

            <motion.ul variants={fadeUp} className="space-y-5 text-lg text-gray-800 dark:text-gray-200">
              <li>• Establish governance structures</li>
              <li>• Manage enterprise risks</li>
              <li>• Align controls with regulations</li>
              <li>• Prepare for certifications</li>
              <li>• Improve reporting transparency</li>
            </motion.ul>

            <motion.ul variants={fadeUp} className="space-y-5 text-lg text-gray-800 dark:text-gray-200">
              <li>• Continuous risk monitoring</li>
              <li>• Policy lifecycle management</li>
              <li>• Vendor risk governance</li>
              <li>• Board-level reporting</li>
              <li>• Control effectiveness testing</li>
            </motion.ul>

          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-24 px-6 text-center"
      >

        <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-4">
          Build Trust Through Strong Governance
        </motion.h2>

        <motion.p variants={fadeUp} className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Strengthen governance, reduce risk, and achieve compliance with Vulnuris GRC services.
        </motion.p>

        <motion.div variants={fadeUp} whileHover={{ scale: 1.08 }}>
          <Link href="/contact">
            <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl">
              Talk to a GRC Expert
            </button>
          </Link>
        </motion.div>

      </motion.section>

    </main>
  );
}
