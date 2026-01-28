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

export default function ISO27001Page() {
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
            ISO 27001 Consulting & Certification
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-sm md:text-xl text-gray-200 max-w-4xl text-left"
          >
            Leverage the expertise of qualified ISO 27001 compliance auditors
            and get certified – raise your business to international standards.
          </motion.p>

          <motion.div whileHover={{ scale: 1.06 }}>
            <Link href="/contact">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition mt-6 shadow-lg">
                Get ISO 27001 Certified Today
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
              What is ISO 27001?
            </h1>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              ISO 27001 provides guidelines for protecting data using an
              Information Security Management System (ISMS).
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={reveal} className="ml-10">
              <h2 className="text-2xl font-semibold mb-6">
                Why ISO 27001 Matters
              </h2>

              <ul className="space-y-4 text-gray-800 dark:text-muted-foreground">
                <li>• Data confidentiality & integrity</li>
                <li>• Regulatory compliance</li>
                <li>• Customer trust</li>
                <li>• Reduced incidents</li>
                <li>• Global credibility</li>
              </ul>
            </motion.div>

            {/* 3D Floating Image */}
            <motion.div
              variants={reveal}
              className="flex justify-center md:justify-end mr-20 perspective-[1200px]"
            >
              <motion.img
                src="/assets/services/iso-27001.webp"
                alt="ISO 27001 Consulting"
                className="w-full max-w-md rounded-xl shadow-xl"
                animate={floating3D.animate}
                transition={floating3D.transition}
                style={{ transformStyle: "preserve-3d" }}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ================= ISO 27001 SERVICE SNAPSHOT ================= */}
      <motion.section
        className="py-24 px-6 bg-slate-50 dark:bg-slate-950"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={reveal} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-sky-600 dark:text-sky-400">
              ISO 27001 Engagement Snapshot
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
              A compliance-first consulting model designed for fast
              certification, reduced risk, and long-term governance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {["Plan", "Implement", "Certify & Operate"].map((phase, idx) => (
              <motion.div
                key={phase}
                variants={reveal}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 180, damping: 16 }}
                className="relative rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-md hover:shadow-xl"
              >
                <div className="absolute -top-4 -right-4 h-10 w-10 rounded-full bg-gradient-to-br from-sky-500 to-indigo-500 text-white flex items-center justify-center font-bold shadow-lg">
                  {idx + 1}
                </div>

                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {phase}
                </h3>

                {phase === "Plan" && (
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li>• Scope definition & asset inventory</li>
                    <li>• GAP analysis against ISO clauses</li>
                    <li>• Risk register creation</li>
                    <li>• ISMS roadmap design</li>
                  </ul>
                )}

                {phase === "Implement" && (
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li>• Annex-A control implementation</li>
                    <li>• Policy & SOP development</li>
                    <li>• Technical security controls</li>
                    <li>• Employee awareness training</li>
                  </ul>
                )}

                {phase === "Certify & Operate" && (
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li>• Internal audit execution</li>
                    <li>• Stage-1 & Stage-2 audit support</li>
                    <li>• Corrective action handling</li>
                    <li>• Continuous compliance monitoring</li>
                  </ul>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={reveal}
            className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            {[
              "ISMS Documentation",
              "Risk Register",
              "Audit Evidence Pack",
              "Certification Readiness Report",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur px-4 py-4 text-center text-sm text-gray-700 dark:text-gray-300 shadow-sm"
              >
                {item}
              </div>
            ))}
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
            Our ISO 27001 Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {[
              ["GAP Analysis", "Assess compliance and identify gaps."],
              [
                "Risk Assessment & Treatment",
                "Develop ISMS risk mitigation strategies.",
              ],
              [
                "Policies & Procedures",
                "Create security policies aligned with Annex A.",
              ],
              ["Penetration Testing", "Validate control effectiveness."],
              [
                "Awareness Training",
                "Train employees on ISMS security practices.",
              ],
              [
                "Certification Audit Support",
                "Full audit preparation and guidance.",
              ],
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
              How Our ISO 27001 Engagement Works
            </h2>

            <p className="mt-4 max-w-3xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
              A structured approach to implement, audit, and maintain an
              ISO-aligned Information Security Management System.
            </p>

            <div className="mt-6 h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-sky-500 to-indigo-500" />
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
              <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-sky-500 to-indigo-500 rounded-full" />

              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                Engagement Process
              </h3>

              <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-lg">
                <li>• Define scope & ISMS requirements</li>
                <li>• GAP analysis & risk assessment</li>
                <li>• Implement controls</li>
                <li>• Internal audits & testing</li>
                <li>• Certification support</li>
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
              <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-indigo-500 to-cyan-500 rounded-full" />

              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                Continuous Improvement
              </h3>

              <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-lg">
                <li>• Executive risk reporting</li>
                <li>• Staff training</li>
                <li>• Control enhancements</li>
                <li>• Post-cert monitoring</li>
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
          Achieve ISO 27001 Certification with Confidence
        </motion.h2>

        <motion.p
          variants={reveal}
          className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground"
        >
          Protect your data and prove your business adheres to international
          standards.
        </motion.p>

        <motion.div variants={reveal} whileHover={{ scale: 1.08 }}>
          <Link href="/contact">
            <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-xl">
              Speak With an ISO Expert
            </button>
          </Link>
        </motion.div>
      </motion.section>
    </main>
  );
}
