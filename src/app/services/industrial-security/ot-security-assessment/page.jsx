"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const sectionReveal = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0)", transition: { duration: 0.8 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardReveal = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function OTSecurityPage() {
  return (
    <main className="w-full bg-background text-foreground overflow-x-hidden">
      {/* ================= HERO ================= */}
      <section className="relative h-screen overflow-hidden bg-[#05080f]">
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#22d3ee22_1px,transparent_1px),linear-gradient(to_bottom,#22d3ee22_1px,transparent_1px)] bg-[size:90px_90px]" />

        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/videos/main.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-600/10" />

        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="max-w-4xl text-center"
          >
            <motion.div
              variants={sectionReveal}
              className="inline-block mb-6 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-sm tracking-widest"
            >
              OPERATIONAL TECHNOLOGY SECURITY
            </motion.div>

            <motion.h1
              variants={sectionReveal}
              className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
            >
              OT Security & Risk Assessment
            </motion.h1>

            <motion.p
              variants={sectionReveal}
              className="mt-6 text-lg md:text-xl text-gray-300"
            >
              Protect your critical industrial infrastructure from cyber threats
              with comprehensive OT security assessments and risk mitigation
              strategies.
            </motion.p>

            <motion.div
              variants={sectionReveal}
              className="mt-10 flex justify-center gap-4"
            >
              <Link
                href="/contact"
                className="rounded-full bg-cyan-600 px-8 py-3 text-white font-medium hover:bg-cyan-500 transition"
              >
                Request Security Check
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <motion.section
        className="py-24 px-6"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={sectionReveal} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              What is OT Security Assessment?
            </h2>
            <p className="mt-6 max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed">
              Operational Technology systems control industrial environments
              such as oil & gas, manufacturing, energy, transportation, and
              maritime operations. Our OT assessments uncover vulnerabilities
              that could lead to safety hazards, downtime, or financial loss.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={sectionReveal} className="ml-10">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Why OT Security Matters
              </h3>

              <ul className="space-y-4 text-muted-foreground">
                <li>• Protect critical infrastructure from cyber threats</li>
                <li>• Ensure regulatory compliance</li>
                <li>• Prevent downtime and operational disruption</li>
                <li>• Preserve reputation and trust</li>
                <li>• Optimize security investments</li>
              </ul>
            </motion.div>

            <motion.div
              variants={sectionReveal}
              className="flex justify-center md:justify-end mr-20"
            >
              <img
                src="/assets/services/n-security.jpg"
                alt="OT Security Assessment"
                className="w-full max-w-md rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
      {/* ================= OT SECURITY DEEP DIVE ================= */}
      <motion.section
        className="py-28 px-6 relative overflow-hidden bg-gradient-to-b from-white to-slate-50 dark:from-background dark:to-background"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* ambient glow */}
        <div className="absolute -top-32 right-0 w-[420px] h-[420px] bg-cyan-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[360px] h-[360px] bg-blue-500/10 rounded-full blur-[140px]" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <motion.div variants={sectionReveal} className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary">
              OT-Focused Cybersecurity Architecture
            </h2>

            <p className="mt-5 max-w-3xl mx-auto text-lg text-muted-foreground">
              Operational Technology environments require security strategies
              that prioritize safety, uptime, and system stability while
              reducing cyber risk across industrial processes and control
              systems.
            </p>

            <div className="mt-6 h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-blue-600" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* LEFT – Security model */}
            <motion.div variants={sectionReveal} className="space-y-8">
              <div className="p-8 rounded-2xl border border-border bg-background/80 backdrop-blur-md shadow-sm">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  OT Security Model
                </h3>

                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    • Asset discovery of controllers, sensors, HMIs, and field
                    devices
                  </li>
                  <li>
                    • Network zoning and segmentation between IT and OT systems
                  </li>
                  <li>• Secure remote access for operators and vendors</li>
                  <li>
                    • Monitoring of industrial protocols and command traffic
                  </li>
                  <li>
                    • Configuration and change tracking for critical systems
                  </li>
                  <li>
                    • Incident handling designed to avoid operational disruption
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-600 text-white shadow-lg">
                <h3 className="text-lg font-semibold mb-3">
                  Designed for safety-critical operations
                </h3>
                <p className="text-white/90 leading-relaxed text-sm">
                  All assessments and controls are implemented with strict
                  safeguards to protect human safety, equipment integrity, and
                  production continuity.
                </p>
              </div>
            </motion.div>

            {/* RIGHT – Capabilities */}
            <motion.div
              variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-2 gap-8"
            >
              {[
                {
                  title: "Industrial Asset Visibility",
                  desc: "Identification and classification of OT devices, control systems, and communication paths across facilities.",
                },
                {
                  title: "Secure Architecture Review",
                  desc: "Evaluation of network segmentation, firewall placement, and access design in industrial environments.",
                },
                {
                  title: "Protocol & Traffic Analysis",
                  desc: "Inspection of OT communication patterns to detect unsafe commands and abnormal behavior.",
                },
                {
                  title: "Controlled Vulnerability Testing",
                  desc: "Carefully scoped testing to identify weaknesses without impacting live operations.",
                },
                {
                  title: "Incident Readiness Planning",
                  desc: "Preparation of response procedures aligned with operational and safety requirements.",
                },
                {
                  title: "Long-Term Risk Reduction",
                  desc: "Security hardening recommendations aligned with industrial best practices and lifecycle management.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={cardReveal}
                  whileHover={{
                    y: -8,
                    boxShadow: "0 25px 55px rgba(0,0,0,0.15)",
                  }}
                  className="relative p-7 rounded-2xl border border-border bg-background transition-all overflow-hidden"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_60%)]" />

                  <h4 className="text-lg font-semibold text-primary mb-3">
                    {item.title}
                  </h4>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ================= SERVICES GRID ================= */}
      <motion.section
        className="py-24 px-6 bg-muted/30"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            variants={sectionReveal}
            className="text-3xl md:text-4xl font-semibold text-primary mb-14"
          >
            Our OT Security Assessment Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Assess",
                desc: "Identify vulnerabilities and risks in your OT environment.",
              },
              {
                title: "Secure",
                desc: "Apply access control, segmentation, patching, and protection.",
              },
              {
                title: "Monitor",
                desc: "Real-time threat detection across OT networks.",
              },
              {
                title: "Respond",
                desc: "Rapid remediation to minimize business impact.",
              },
              {
                title: "Compliance",
                desc: "Meet regulatory and industry standards.",
              },
              {
                title: "Optimization",
                desc: "Focus resources on critical assets.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={cardReveal}
                whileHover={{
                  y: -8,
                  boxShadow: "0 25px 45px rgba(0,0,0,0.15)",
                }}
                className="relative group bg-background border border-border rounded-2xl p-6 transition-all overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <h3 className="font-semibold text-lg mb-3 text-primary">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ================= PROCESS ================= */}
      <motion.section
        className="py-28 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-background dark:to-background"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <motion.div variants={sectionReveal} className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              How Our OT Security Engagement Works
            </h2>

            <p className="mt-4 max-w-3xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
              We secure operational technology environments without disrupting
              production, safety, or reliability.
            </p>

            <div className="mt-6 h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-violet-500 to-indigo-500" />
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Technical Process */}
            <motion.div
              variants={sectionReveal}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="relative p-8 rounded-2xl border border-gray-200 dark:border-slate-800
                   bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl
                   shadow-lg hover:shadow-2xl"
            >
              <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-violet-500 to-indigo-500 rounded-full" />

              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                Security Implementation & Monitoring
              </h3>

              <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-lg">
                <li>• OT environment assessment</li>
                <li>• Security controls implementation</li>
                <li>• Continuous system monitoring</li>
                <li>• Incident response and mitigation</li>
                <li>• Compliance reporting</li>
              </ul>
            </motion.div>

            {/* Improvement & Continuity */}
            <motion.div
              variants={sectionReveal}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="relative p-8 rounded-2xl border border-gray-200 dark:border-slate-800
                   bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl
                   shadow-lg hover:shadow-2xl"
            >
              <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-indigo-500 to-fuchsia-500 rounded-full" />

              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                Continuous Improvement & Operational Resilience
              </h3>

              <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-lg">
                <li>• Control validation</li>
                <li>• Advanced threat detection enhancement</li>
                <li>• Operational risk analysis</li>
                <li>• Staff security awareness</li>
                <li>• Incident planning & readiness</li>
                <li className="pt-3 font-semibold text-gray-900 dark:text-white">
                  Operational continuity & long-term risk reduction
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ================= CTA ================= */}
      <motion.section
        className="py-28 px-6 text-center border-t border-border"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h2
          variants={sectionReveal}
          className="text-3xl md:text-4xl font-bold text-primary mb-4"
        >
          Protect Your Critical Infrastructure Today
        </motion.h2>

        <motion.p
          variants={sectionReveal}
          className="mb-8 max-w-2xl mx-auto text-lg text-muted-foreground"
        >
          Reduce operational risks and ensure continuity with professional OT
          security assessments.
        </motion.p>

        <motion.div variants={sectionReveal} whileHover={{ scale: 1.08 }}>
          <Link
            href="/contact"
            className="px-10 py-3 rounded-full text-lg font-semibold bg-primary text-primary-foreground shadow-md"
          >
            Request OT Security Check
          </Link>
        </motion.div>
      </motion.section>
    </main>
  );
}
