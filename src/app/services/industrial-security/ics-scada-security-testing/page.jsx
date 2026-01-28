"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const sectionReveal = {
  hidden: { opacity: 0, y: 50, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9 },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardReveal = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const floating3D = {
  animate: {
    rotateX: [0, 6, 0, -6, 0],
    rotateY: [0, -8, 0, 8, 0],
    y: [0, -10, 0, 10, 0],
  },
  transition: { duration: 14, repeat: Infinity, ease: "easeInOut" },
};

export default function ICS_SCADA_SecurityPage() {
  return (
    <main className="w-full bg-white text-gray-900 dark:bg-background dark:text-foreground">
      {/* ================= HERO ================= */}
      <section className="relative h-screen overflow-hidden bg-[#05070d]">
        {/* Industrial grid */}
        <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,#00ffff22_1px,transparent_1px),linear-gradient(to_bottom,#00ffff22_1px,transparent_1px)] bg-[size:80px_80px]" />

        {/* Background image */}
        <div className="absolute inset-0 bg-cover bg-center opacity-30" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/videos/main.mp4" type="video/mp4" />
        </video>

        {/* Scan beam */}
        <motion.div
          className="absolute inset-y-0 w-[40%] bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent"
          animate={{ x: ["-40%", "140%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative z-10 h-full flex flex-col justify-center px-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-6 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-sm tracking-widest"
          >
            INDUSTRIAL CYBERSECURITY
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight max-w-4xl"
          >
            ICS / SCADA <br /> Security Testing
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-gray-300 max-w-3xl text-lg"
          >
            Protect your critical industrial networks from catastrophic
            cyberattacks. Our ICS/SCADA security assessments identify risks,
            prevent disruptions, and safeguard national and global
            infrastructure.
          </motion.p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="mt-10"
          >
            <Link href="/contact">
              <button className="px-10 py-4 rounded-full bg-cyan-600 hover:bg-cyan-500 transition text-white font-semibold shadow-lg">
                Request Security Check
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
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={sectionReveal} className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
              What is ICS/SCADA Security Testing?
            </h1>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              ICS and SCADA systems control critical infrastructures such as oil
              & gas, power grids, water treatment, and transportation networks.
              Due to their wide implementation, they are high-value targets for
              cyberattacks with potentially catastrophic impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={sectionReveal} className="ml-10">
              <h2 className="text-2xl font-semibold mb-6">
                Why ICS/SCADA Security Matters
              </h2>

              <ul className="space-y-4 text-gray-800 dark:text-gray-200">
                <li>• Prevent massive financial and operational losses</li>
                <li>• Protect national critical infrastructure</li>
                <li>• Avoid regulatory fines and reputational damage</li>
                <li>• Safeguard human lives in industrial operations</li>
                <li>• Reduce cascading industry risks</li>
              </ul>
            </motion.div>

            <motion.div
              variants={sectionReveal}
              className="flex justify-center md:justify-end mr-20 perspective-[1200px]"
            >
              <motion.img
                src="/assets/services/wapt.webp"
                alt="ICS SCADA Security"
                className="w-full max-w-md rounded-xl shadow-xl"
                animate={floating3D.animate}
                transition={floating3D.transition}
                style={{ transformStyle: "preserve-3d" }}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ================= ICS / SCADA SECURITY DEEP DIVE ================= */}
      <motion.section
        className="py-28 px-6 relative overflow-hidden bg-gradient-to-b from-white to-slate-50 dark:from-background dark:to-background"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* ambient industrial glow */}
        <div className="absolute -top-32 right-0 w-[420px] h-[420px] bg-cyan-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[360px] h-[360px] bg-blue-500/10 rounded-full blur-[140px]" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <motion.div variants={sectionReveal} className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-600 dark:text-blue-400">
              Industrial-Grade Cybersecurity for Operational Technology
            </h2>

            <p className="mt-5 max-w-3xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
              ICS and SCADA environments require a fundamentally different
              security approach than traditional IT systems. Our methodology
              prioritizes safety, availability, and controlled risk reduction
              across industrial operations.
            </p>

            <div className="mt-6 h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-blue-600" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* LEFT – OT Security Model */}
            <motion.div variants={sectionReveal} className="space-y-8">
              <div className="p-8 rounded-2xl border border-gray-200 dark:border-border bg-white/80 dark:bg-muted/40 backdrop-blur-md shadow-sm">
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                  OT-Focused Security Model
                </h3>

                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li>
                    • Asset discovery of controllers, PLCs, HMIs, and field
                    devices
                  </li>
                  <li>• Network segmentation between IT and OT environments</li>
                  <li>• Secure remote access for engineers and vendors</li>
                  <li>
                    • Protocol-aware traffic inspection (Modbus, DNP3, OPC,
                    etc.)
                  </li>
                  <li>
                    • Change monitoring for critical system configurations
                  </li>
                  <li>
                    • Incident handling designed to avoid operational disruption
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-600 text-white shadow-lg">
                <h3 className="text-lg font-semibold mb-3">
                  Built for safety-critical environments
                </h3>
                <p className="text-white/90 leading-relaxed text-sm">
                  Security testing is conducted with strict operational
                  safeguards to prevent downtime, equipment damage, or unsafe
                  system behavior during assessments.
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
                  desc: "Identification and classification of controllers, field devices, and communication paths across plant networks.",
                },
                {
                  title: "Secure Architecture Review",
                  desc: "Evaluation of network zoning, firewall placement, and remote access design for industrial environments.",
                },
                {
                  title: "Protocol-Level Risk Analysis",
                  desc: "Inspection of industrial protocols to identify unsafe commands, weak authentication, and misuse scenarios.",
                },
                {
                  title: "Controlled Penetration Testing",
                  desc: "Carefully scoped testing to identify exploitable weaknesses without impacting production systems.",
                },
                {
                  title: "Incident Readiness Planning",
                  desc: "Development of response procedures aligned with operational continuity and safety requirements.",
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
                  className="relative p-7 rounded-2xl border border-gray-200 dark:border-border bg-white dark:bg-muted transition-all overflow-hidden"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_60%)]" />

                  <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">
                    {item.title}
                  </h4>

                  <p className="text-sm text-gray-700 dark:text-muted-foreground leading-relaxed">
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
        className="py-20 px-6"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            variants={sectionReveal}
            className="text-4xl font-semibold mb-14"
          >
            Our ICS/SCADA Security Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {[
              [
                "Network Assessment",
                "Analyze industrial networks for vulnerabilities and weak points.",
              ],
              [
                "System Hardening",
                "Patch management and secure access controls.",
              ],
              [
                "Threat Simulation",
                "Real-world industrial cyberattack simulation.",
              ],
              ["Incident Response", "Rapid operational containment planning."],
              [
                "Compliance & Reporting",
                "Regulatory alignment and risk documentation.",
              ],
              [
                "Continuous Monitoring",
                "24/7 anomaly detection for OT systems.",
              ],
            ].map(([title, desc], i) => (
              <motion.div
                key={i}
                variants={cardReveal}
                whileHover={{
                  y: -6,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                }}
                className="relative group bg-white dark:bg-muted border border-gray-200 dark:border-border rounded-2xl p-6 shadow-sm overflow-hidden transition-all duration-300"
              >
                {/* top light sweep */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

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

      {/* ================= DETAILS ================= */}
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
              How Our ICS / SCADA Engagement Works
            </h2>

            <p className="mt-4 max-w-3xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
              Securing industrial environments requires specialized expertise.
              We protect operational technology while maintaining safety,
              uptime, and compliance.
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
                Security Assessment & Protection
              </h3>

              <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-lg">
                <li>• Assess industrial networks and control systems</li>
                <li>• Implement segmentation and system hardening</li>
                <li>• Simulate real-world cyberattacks</li>
                <li>• Continuous monitoring of OT environments</li>
                <li>• Rapid threat detection and response</li>
              </ul>
            </motion.div>

            {/* Business Impact */}
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
                Operational Continuity & Resilience
              </h3>

              <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-lg">
                <li>• Prevent blackouts and production disruptions</li>
                <li>• Maintain regulatory and industry compliance</li>
                <li>• Improve system reliability and resilience</li>
                <li>• Protect critical national infrastructure</li>
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
          variants={sectionReveal}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Secure Your Industrial Infrastructure
        </motion.h2>

        <motion.p
          variants={sectionReveal}
          className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground"
        >
          Minimize risk and protect critical ICS/SCADA systems with expert
          security testing services.
        </motion.p>

        <motion.div variants={sectionReveal} whileHover={{ scale: 1.08 }}>
          <Link href="/contact">
            <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-xl">
              Request ICS/SCADA Security Check
            </button>
          </Link>
        </motion.div>
      </motion.section>
    </main>
  );
}
