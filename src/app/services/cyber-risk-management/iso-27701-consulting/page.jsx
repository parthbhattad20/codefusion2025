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

export default function ISO27701Page() {
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
            ISO 27701 Privacy Consulting
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-sm md:text-xl text-gray-200 max-w-4xl text-left"
          >
            Achieve compliance with ISO 27701, the international standard for
            Privacy Information Management Systems (PIMS).
          </motion.p>

          <motion.div whileHover={{ scale: 1.06 }}>
            <Link href="/contact">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition mt-6 shadow-lg">
                Speak with a Privacy Expert
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
              What is ISO 27701?
            </h1>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              ISO 27701 is an extension to ISO 27001 that focuses on privacy
              management and responsible handling of personal data.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={reveal} className="ml-10">
              <h2 className="text-2xl font-semibold mb-6">
                Why ISO 27701 Matters
              </h2>

              <ul className="space-y-4 text-gray-800 dark:text-muted-foreground">
                <li>• Protect sensitive personal data</li>
                <li>• Comply with GDPR & UAE PDPL</li>
                <li>• Improve customer trust</li>
                <li>• Integrate with ISO 27001</li>
                <li>• Reduce privacy risks</li>
              </ul>
            </motion.div>

            {/* 3D Floating Image */}
            <motion.div
              variants={reveal}
              className="flex justify-center md:justify-end mr-20 perspective-[1200px]"
            >
              <motion.img
                src="/assets/services/27701.jpg"
                alt="ISO 27701 Consulting"
                className="w-full max-w-md rounded-xl shadow-xl"
                animate={floating3D.animate}
                transition={floating3D.transition}
                style={{ transformStyle: "preserve-3d" }}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ================= ISO 27701 PRIVACY SERVICE SNAPSHOT ================= */}
      <motion.section
        className="py-24 px-6 bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-slate-900 dark:to-slate-950"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={reveal} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-fuchsia-600 dark:text-fuchsia-400">
              ISO 27701 Privacy Implementation Snapshot
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
              A structured privacy-engineering approach to build, certify, and
              operate a compliant Privacy Information Management System (PIMS).
            </p>
          </motion.div>

          {/* Flow steps */}
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {[
              [
                "Discover",
                "Data mapping, controllers & processors, scope definition",
              ],
              [
                "Design",
                "PIMS structure, policies, lawful basis, DPIA planning",
              ],
              [
                "Implement",
                "Privacy controls, consent flows, vendor governance",
              ],
              ["Certify", "Audit readiness, evidence, certification support"],
            ].map(([title, desc], i) => (
              <motion.div
                key={i}
                variants={reveal}
                whileHover={{ y: -8 }}
                className="rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-md hover:shadow-xl transition"
              >
                <div className="mb-3 text-sm font-semibold text-fuchsia-600">
                  Phase {i + 1}
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
            <div className="rounded-3xl border border-gray-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur p-10 shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Privacy Deliverables You Receive
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "PIMS framework documentation",
                  "Personal data inventory & data-flow maps",
                  "DPIA & risk assessment reports",
                  "Controller / Processor role definition",
                  "Privacy policy & consent model design",
                  "ISO 27701 audit evidence pack",
                  "Compliance mapping (GDPR, PDPL, ISO 27001)",
                  "Certification readiness report",
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
          <motion.h2 variants={reveal} className="text-4xl font-semibold mb-14">
            Our ISO 27701 Consulting Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {[
              [
                "Privacy Gap Analysis",
                "Evaluate privacy processes vs ISO 27701.",
              ],
              ["PIMS Risk Assessment", "Identify personal data risks."],
              [
                "Policy & Procedure Development",
                "Create privacy policies aligned with regulations.",
              ],
              [
                "Staff Awareness Training",
                "Educate employees on privacy best practices.",
              ],
              ["Internal Audits", "Prepare for certification readiness."],
              ["Certification Support", "End-to-end audit guidance."],
            ].map(([title, desc], i) => (
              <motion.div
                key={i}
                variants={reveal}
                whileHover={{
                  rotateX: 8,
                  rotateY: -8,
                  scale: 1.05,
                  boxShadow: "0 30px 60px rgba(0,0,0,0.18)",
                }}
                transition={{ type: "spring", stiffness: 120, damping: 14 }}
                className="bg-white dark:bg-muted border border-gray-200 dark:border-border rounded-2xl p-6 shadow-md cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
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

      {/* ================= HOW IT WORKS ================= */}
      <motion.section
        className="py-28 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-background dark:to-background"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <motion.div variants={reveal} className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              How Our ISO 27701 Engagement Works
            </h2>

            <p className="mt-4 max-w-3xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
              A privacy-focused framework to implement, audit, and maintain a
              compliant Personal Information Management System (PIMS).
            </p>

            <div className="mt-6 h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500" />
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Process */}
            <motion.div
              variants={reveal}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="relative p-8 rounded-2xl border border-gray-200 dark:border-slate-800
                   bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl
                   shadow-lg hover:shadow-2xl"
            >
              <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-fuchsia-500 to-violet-500 rounded-full" />

              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                Engagement Process
              </h3>

              <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-lg">
                <li>• Define PIMS scope</li>
                <li>• Conduct gap analysis</li>
                <li>• Implement privacy controls</li>
                <li>• Perform audits & training</li>
                <li>• Support certification</li>
              </ul>
            </motion.div>

            {/* Continuous Improvement */}
            <motion.div
              variants={reveal}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="relative p-8 rounded-2xl border border-gray-200 dark:border-slate-800
                   bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl
                   shadow-lg hover:shadow-2xl"
            >
              <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-violet-500 to-indigo-500 rounded-full" />

              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                Continuous Privacy Improvement
              </h3>

              <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-lg">
                <li>• Compliance monitoring</li>
                <li>• Control optimization</li>
                <li>• Post-cert audits</li>
                <li>• Privacy culture development</li>
              </ul>
            </motion.div>
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
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Achieve ISO 27701 Certification Confidently
        </motion.h2>

        <motion.p
          variants={reveal}
          className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground"
        >
          Protect personal data, meet privacy regulations, and build client
          trust with expert guidance.
        </motion.p>

        <motion.div variants={reveal} whileHover={{ scale: 1.08 }}>
          <Link href="/contact">
            <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-xl">
              Speak With a Privacy Expert
            </button>
          </Link>
        </motion.div>
      </motion.section>
    </main>
  );
}
