"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const reveal = {
  hidden: { opacity: 0, y: 30, z: -40 },
  show: {
    opacity: 1,
    y: 0,
    z: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const floating3D = {
  animate: {
    rotateX: [0, 8, 0, -8, 0],
    rotateY: [0, -10, 0, 10, 0],
    y: [0, -10, 0, 10, 0],
  },
  transition: {
    duration: 10,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export default function DoraCompliancePage() {
  return (
    <main className="w-full bg-white text-gray-900 dark:bg-background dark:text-foreground">
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

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-black/70"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-70">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white"
          >
            DORA Compliance Consulting
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-sm md:text-xl text-gray-200 max-w-4xl text-left"
          >
            Keep your financial business safe from threats and achieve robust
            digital operational resilience with Wattlecorp experts.
          </motion.p>

          <motion.div whileHover={{ scale: 1.06 }}>
            <Link href="/contact">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition mt-6 shadow-lg">
                Request a DORA Assessment
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <motion.section
        className="py-24 px-6"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={reveal} className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
              What is DORA Compliance?
            </h1>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              The Digital Operational Resilience Act (DORA) is an EU regulation
              designed to ensure cybersecurity resilience in the financial
              sector.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={reveal} className="ml-10">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-foreground">
                Why DORA Compliance Matters
              </h2>

              <ul className="space-y-4 text-gray-800 dark:text-muted-foreground">
                <li>• Secure financial services infrastructure</li>
                <li>• Implement strong risk management</li>
                <li>• Remediate vulnerabilities</li>
                <li>• Continuous threat monitoring</li>
                <li>• Regulatory trust</li>
              </ul>
            </motion.div>

            {/* 3D Floating Image */}
            <motion.div
              variants={reveal}
              className="flex justify-center md:justify-end mr-20 perspective-[1200px]"
            >
              <motion.img
                src="/assets/services/dora.jpg"
                alt="DORA Compliance"
                className="w-full max-w-md rounded-xl shadow-xl"
                animate={floating3D.animate}
                transition={floating3D.transition}
                style={{ transformStyle: "preserve-3d" }}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
      {/* ================= DORA COMPLIANCE SNAPSHOT ================= */}
      <motion.section
        className="py-24 px-6 bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900 dark:to-slate-950"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={reveal} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400">
              DORA Compliance Implementation Snapshot
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
              A resilience-driven compliance model to help financial
              institutions meet EU Digital Operational Resilience Act (DORA)
              requirements.
            </p>
          </motion.div>

          {/* Phases */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-16">
            {[
              ["Identify", "ICT assets, critical services, threat landscape"],
              ["Assess", "Risk gaps, maturity level, compliance mapping"],
              ["Protect", "Security controls & governance framework"],
              ["Test", "Resilience testing & incident simulations"],
              ["Monitor", "Continuous risk & vendor oversight"],
            ].map(([title, desc], i) => (
              <motion.div
                key={i}
                variants={reveal}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 180, damping: 16 }}
                className="rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-md hover:shadow-xl transition"
              >
                <div className="mb-3 text-sm font-semibold text-indigo-500">
                  Step {i + 1}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Deliverables */}
          <motion.div variants={reveal}>
            <div className="rounded-3xl border border-gray-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur p-10 shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                What You Receive
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "DORA gap assessment report",
                  "ICT risk management framework",
                  "Critical service dependency mapping",
                  "Incident response & reporting procedures",
                  "Resilience testing plan",
                  "Third-party risk register",
                  "Compliance evidence pack",
                  "Regulatory readiness report",
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

      {/* ================= SERVICES ================= */}
      <motion.section
        className="py-20 px-6"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            variants={reveal}
            className="text-4xl font-semibold mb-14 text-gray-900 dark:text-foreground"
          >
            Our DORA Compliance Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {[
              "Assessment",
              "Reporting",
              "Monitoring",
              "Compliance Guidance",
              "Risk Management",
              "Advisory Support",
            ].map((title, i) => (
              <motion.div
                key={i}
                variants={reveal}
                whileHover={{
                  rotateX: 6,
                  rotateY: -6,
                  scale: 1.03,
                }}
                transition={{ type: "spring", stiffness: 120, damping: 14 }}
                className="bg-white dark:bg-muted border border-gray-200 dark:border-border rounded-2xl p-6 shadow-md cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
              >
                <h3 className="font-semibold text-lg mb-3 text-blue-600 dark:text-blue-400">
                  {title}
                </h3>
                <p className="text-gray-700 dark:text-muted-foreground text-sm leading-relaxed">
                  Enterprise-grade cybersecurity consulting tailored for
                  financial institutions.
                </p>
              </motion.div>
            ))}
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
        <motion.h2
          variants={reveal}
          className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-foreground"
        >
          Achieve Digital Operational Resilience
        </motion.h2>

        <motion.p
          variants={reveal}
          className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground"
        >
          Protect your financial business and ensure compliance with DORA
          standards.
        </motion.p>

        <motion.div variants={reveal} whileHover={{ scale: 1.08 }}>
          <Link href="/contact">
            <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-xl">
              Request a DORA Assessment
            </button>
          </Link>
        </motion.div>
      </motion.section>
    </main>
  );
}
