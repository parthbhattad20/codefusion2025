"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function AramcoCCCPage() {
  return (
    <main className="w-full bg-gray-50 dark:bg-background text-gray-600 dark:text-gray-100">
      {/* ================= HERO ================= */}
      <section className="relative h-screen overflow-hidden">
        {/* VIDEO BACKGROUND */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/assets/videos/main.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* CYBER OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-slate-900/70 to-black/90" />

        {/* GRID EFFECT */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold  text-white">
            Aramco Cybersecurity Compliance (CCC)
          </h1>

          <p className="mt-6 max-w-4xl text-lg text-gray-200">
            Boost your security posture, ensure compliance, strengthen
            cybersecurity, and partner confidently with Saudi Aramco.
          </p>

          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-10 py-3 bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white rounded-full font-semibold "
            >
              Speak with an Expert
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-24 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">
              What Is Aramco CCC?
            </h2>

            <p className="mt-6 max-w-4xl mx-auto text-lg text-gray-700 dark:text-gray-300">
              Saudi Aramco introduced the Cybersecurity Compliance Certification
              (CCC) to ensure that all third-party vendors and supply chain
              partners follow stringent security requirements under SACS-002.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeLeft}>
              <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">
                Why ARAMCO CCC Matters
              </h3>

              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li>• Mitigate cyber risks and vulnerabilities</li>
                <li>• Meet strict Saudi Aramco security standards</li>
                <li>• Strengthen cybersecurity posture</li>
                <li>• Gain credibility as a certified vendor</li>
                <li>• Maintain continuous compliance</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeRight} className="flex justify-center">
              <img
                src="/assets/services/cyber_f.jpg"
                alt="ARAMCO CCC Consulting"
                className="w-full max-w-md rounded-xl shadow-xl border-2 border-indigo-500/30"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ================= ARAMCO CCC SERVICE SNAPSHOT ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-24 px-6 relative overflow-hidden
             bg-gray-50 dark:bg-black/90"
      >
        {/* cyber glow background */}
        <div
          className="absolute inset-0
               bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.18),transparent_60%)]
               dark:bg-[radial-gradient(circle_at_top,rgba(217,70,239,0.18),transparent_60%)]"
        />

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold
                     bg-gradient-to-r from-indigo-500 to-fuchsia-500
                     bg-clip-text text-transparent"
            >
              ARAMCO CCC Compliance Snapshot
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-gray-700 dark:text-gray-300 text-lg">
              A security-first methodology aligned with SACS-002 to achieve,
              validate, and continuously maintain Saudi Aramco cybersecurity
              compliance.
            </p>
          </div>

          {/* phases */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {[
              [
                "Assess",
                "Scope definition, asset inventory, CCC gap assessment",
              ],
              ["Design", "Risk model, security architecture, control mapping"],
              ["Implement", "Technical controls, policies, awareness training"],
              ["Certify", "Internal audit, evidence prep, Aramco readiness"],
            ].map(([title, desc], i) => (
              <motion.div
                key={i}
                whileHover={{
                  y: -10,
                  boxShadow: "0 0 35px rgba(139,92,246,0.35)",
                }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative rounded-xl
                     border border-indigo-500/30
                     bg-white dark:bg-neutral-950
                     p-6 text-left"
              >
                <div
                  className="absolute -top-3 -right-3 w-9 h-9 rounded-full
                       bg-gradient-to-r from-indigo-500 to-fuchsia-500
                       text-white font-bold flex items-center justify-center
                       shadow-[0_0_18px_rgba(139,92,246,0.8)]"
                >
                  {i + 1}
                </div>

                <h3
                  className="text-lg font-semibold
                         bg-gradient-to-r from-indigo-500 to-fuchsia-500
                         bg-clip-text text-transparent mb-2"
                >
                  {title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* deliverables */}
          <motion.div
            variants={fadeUp}
            className="rounded-2xl
                 border border-indigo-500/30
                 bg-white/80 dark:bg-neutral-950/80
                 backdrop-blur
                 p-10
                 shadow-[0_0_45px_rgba(139,92,246,0.25)]"
          >
            <h3
              className="text-2xl font-semibold mb-6
                     bg-gradient-to-r from-indigo-500 to-fuchsia-500
                     bg-clip-text text-transparent"
            >
              Compliance Deliverables
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "CCC gap assessment report",
                "SACS-002 control mapping",
                "Cyber risk register",
                "Risk treatment plan",
                "Security policy framework",
                "Internal audit report",
                "Technical control validation",
                "Certification readiness pack",
              ].map((item, i) => (
                <div
                  key={i}
                  className="border border-indigo-500/25 rounded-lg px-4 py-3 text-sm
                       text-gray-800 dark:text-gray-200
                       bg-white/70 dark:bg-black/60
                       hover:border-fuchsia-500/60 transition"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ================= SERVICES GRID ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20 px-6"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-14 bg-gradient-to-r from-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">
            Our ARAMCO CCC Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              [
                "Initial Evaluation",
                "Assessment of operations vs Aramco requirements",
              ],
              ["CCC Gap Assessment", "Identify security gaps vs CCC standard"],
              ["Cyber Risk Assessment", "Evaluate data & privacy risks"],
              ["Risk Treatment Plan", "Mitigation strategy per SACS-002"],
              ["Policies & Procedures", "Privacy and security documentation"],
              ["Internal Audits & Reviews", "Ongoing compliance checks"],
              ["Technology Implementation", "Security control deployment"],
              [
                "Security Awareness Training",
                "Employee cybersecurity training",
              ],
            ].map(([title, desc], i) => (
              <motion.div
                key={i}
                whileHover={{
                  y: -12,
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(139,92,246,0.4)",
                }}
                transition={{ type: "spring", stiffness: 250 }}
                className="bg-white dark:bg-neutral-900 border border-indigo-500/30 rounded-xl p-6 shadow-md relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-gradient-to-r from-indigo-500/10 to-fuchsia-500/10" />

                <h3 className="relative text-lg font-semibold mb-2 bg-gradient-to-r from-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">
                  {title}
                </h3>
                <p className="relative text-sm text-gray-700 dark:text-gray-300">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ================= PROCESS ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-28 px-6 relative"
      >
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">
              How Our ARAMCO CCC Engagement Works
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A structured, compliance-driven approach to achieving and
              maintaining ARAMCO CCC readiness.
            </p>

            <div className="mt-6 h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500" />
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Phase 1 */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="relative p-8 rounded-2xl border border-indigo-500/30
                   bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl
                   shadow-lg hover:shadow-2xl hover:shadow-indigo-500/20"
            >
              <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-indigo-500 to-fuchsia-500 rounded-full" />

              <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">
                Assessment & Implementation
              </h3>

              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li>• Initial evaluation</li>
                <li>• Gap assessment</li>
                <li>• Risk mitigation planning</li>
                <li>• Policy & control implementation</li>
                <li>• Internal audits</li>
              </ul>
            </motion.div>

            {/* Phase 2 */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="relative p-8 rounded-2xl border border-indigo-500/30
                   bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl
                   shadow-lg hover:shadow-2xl hover:shadow-fuchsia-500/20"
            >
              <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-indigo-500 to-fuchsia-500 rounded-full" />

              <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">
                Continuous Security Improvement
              </h3>

              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li>• Compliance monitoring</li>
                <li>• Cyber posture strengthening</li>
                <li>• Regular training</li>
                <li>• Certification readiness</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ================= CTA ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-24 px-6 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">
          Simplify Your ARAMCO CCC Journey
        </h2>

        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
          Protect your data, ensure regulatory compliance, and gain competitive
          advantage.
        </p>

        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white shadow-lg shadow-indigo-500/30"
          >
            Speak With a Compliance Expert
          </motion.button>
        </Link>
      </motion.section>
    </main>
  );
}