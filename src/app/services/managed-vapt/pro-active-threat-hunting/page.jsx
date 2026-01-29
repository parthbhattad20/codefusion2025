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

export default function ProactiveThreatHuntingPage() {
  return (
    <main className="w-full bg-white text-gray-900 dark:bg-background dark:text-foreground">
      {/* ================= HERO ================= */}
      <section className="relative h-screen overflow-hidden bg-[#05070d]">
        {/* Cyber grid */}
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#6366f122_1px,transparent_1px),linear-gradient(to_bottom,#6366f122_1px,transparent_1px)] bg-[size:90px_90px]" />

        {/* Background video */}
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
          className="absolute inset-y-0 w-[40%] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent"
          animate={{ x: ["-40%", "140%"] }}
          transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative z-10 h-full flex flex-col justify-center px-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-6 px-4 py-2 rounded-full border border-primary bg-primary-400/10 text-blue-300 text-sm tracking-widest"
          >
            ADVANCED CYBER DEFENSE
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight max-w-4xl"
          >
            Proactive <br /> Threat Hunting
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-gray-300 max-w-3xl text-lg"
          >
            Secure your business from future attacks by uncovering threats,
            entry points, and attack methodologies before damage occurs.
          </motion.p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="mt-10"
          >
            <Link href="/contact">
              <button className="px-10 py-4 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 hover:bg-blue-500 transition text-white font-semibold shadow-lg">
                Get Protected
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
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
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-primary dark:text-primary">
              What is Proactive Threat Hunting?
            </h1>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-gray-400">
              Proactive Threat Hunting uncovers weaknesses, attack paths, and
              vulnerabilities across your infrastructure, enabling businesses to
              anticipate attacks and respond before damage occurs.
            </p>

            <div className="mt-6 h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
            {/* Why Card */}
            <motion.div
              variants={sectionReveal}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="relative p-8 rounded-2xl border border-gray-200 dark:border-slate-800
                   bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl
                   shadow-lg hover:shadow-2xl"
            >
              <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-indigo-500 to-fuchsia-500 rounded-full" />

              <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                Why Proactive Threat Hunting Matters
              </h2>

              <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-lg">
                <li>• Identify entry points before exploitation</li>
                <li>• Understand attacker methodologies</li>
                <li>• Reduce breach impact and response time</li>
                <li>• Strengthen compliance posture</li>
                <li>• Stay ahead of evolving threats</li>
              </ul>
            </motion.div>

            {/* Image Card */}
            <motion.div
              variants={sectionReveal}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="relative p-6 rounded-2xl border border-gray-200 dark:border-slate-800
                   bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl
                   shadow-lg hover:shadow-2xl flex items-center justify-center"
            >
              <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-indigo-500 to-fuchsia-500 rounded-full" />

              <motion.img
                src="/assets/services/proactive-threat-hunting-2.jpeg"
                alt="Proactive Threat Hunting"
                className="w-full max-w-md rounded-xl shadow-md"
                animate={floating3D.animate}
                transition={floating3D.transition}
                style={{ transformStyle: "preserve-3d" }}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
      {/* ================= PROACTIVE THREAT HUNTING OPERATIONS MODEL ================= */}
      <motion.section
        className="py-28 px-6 bg-white dark:bg-background"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <motion.div variants={sectionReveal} className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold
                   bg-gradient-to-r from-indigo-500 to-fuchsia-500
                   bg-clip-text text-transparent"
            >
              Proactive Threat Hunting Framework
            </h2>

            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600 dark:text-muted-foreground">
              A continuous, analyst-driven methodology used to uncover stealthy
              attackers, misconfigurations, and unknown attack paths across
              modern infrastructures.
            </p>
          </motion.div>

          {/* Main panel */}
          <motion.div
            variants={sectionReveal}
            className="relative rounded-3xl
                 border border-indigo-500/25 dark:border-fuchsia-500/25
                 bg-white/80 dark:bg-[#050b16]
                 backdrop-blur-xl
                 p-10 shadow-[0_30px_80px_rgba(139,92,246,0.18)]
                 overflow-hidden"
          >
            {/* soft gradient glow */}
            <div
              className="absolute inset-0
                   bg-gradient-to-br from-indigo-500/10 via-transparent to-fuchsia-500/10
                   dark:from-indigo-500/20 dark:to-fuchsia-500/20
                   pointer-events-none"
            />

            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Telemetry */}
              <div>
                <h3
                  className="text-sm tracking-widest uppercase mb-4
                       bg-gradient-to-r from-indigo-500 to-fuchsia-500
                       bg-clip-text text-transparent"
                >
                  Telemetry Collected
                </h3>

                {[
                  "Endpoint process & memory activity",
                  "Network flow and DNS traffic",
                  "Authentication & identity events",
                  "Cloud and SaaS audit logs",
                  "Email & web gateway telemetry",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={cardReveal}
                    className="mb-3 rounded-xl
                         border border-indigo-500/20 dark:border-fuchsia-500/20
                         bg-white dark:bg-white/5
                         px-4 py-3 backdrop-blur shadow-sm"
                  >
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Analysis */}
              <div>
                <h3
                  className="text-sm tracking-widest uppercase mb-4
                       bg-gradient-to-r from-indigo-500 to-fuchsia-500
                       bg-clip-text text-transparent"
                >
                  Hunting & Analysis
                </h3>

                {[
                  "Behavioral anomaly detection",
                  "MITRE ATT&CK technique mapping",
                  "Privilege escalation analysis",
                  "Persistence mechanism discovery",
                  "Lateral movement tracking",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={cardReveal}
                    className="mb-3 rounded-xl
                         border border-indigo-500/20 dark:border-fuchsia-500/20
                         bg-white dark:bg-white/5
                         px-4 py-3 backdrop-blur shadow-sm"
                  >
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Outcomes */}
              <div>
                <h3
                  className="text-sm tracking-widest uppercase mb-4
                       bg-gradient-to-r from-indigo-500 to-fuchsia-500
                       bg-clip-text text-transparent"
                >
                  Operational Outcomes
                </h3>

                {[
                  "Confirmed attacker presence or clean validation",
                  "Root-cause and kill-chain reconstruction",
                  "Containment and eradication guidance",
                  "Detection logic & SIEM rule improvements",
                  "Risk prioritization for remediation",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={cardReveal}
                    className="mb-3 rounded-xl
                         border border-indigo-500/20 dark:border-fuchsia-500/20
                         bg-white dark:bg-white/5
                         px-4 py-3 backdrop-blur shadow-sm"
                  >
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
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
            className="text-4xl font-semibold mb-14 text-primary"
          >
            Our Proactive Threat Hunting Process
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {[
              [
                "Hypothesize",
                "Analyze assets, vulnerabilities, and threat actors",
              ],
              ["Detect", "Apply advanced detection techniques"],
              ["Investigate", "Validate threats and assess scope"],
              ["Respond", "Contain and remediate attacks"],
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
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <h3 className="font-semibold text-lg mb-3 text-primary dark:text-primary">
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
          className="text-3xl md:text-4xl font-bold mb-4 text-primary"
        >
          Stay Ahead of Cyber Threats
        </motion.h2>

        <motion.p
          variants={sectionReveal}
          className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground"
        >
          Detect, investigate, and respond before attackers strike your
          business.
        </motion.p>

        <motion.div variants={sectionReveal} whileHover={{ scale: 1.08 }}>
          <Link href="/contact">
            <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-xl">
              Start Proactive Hunting
            </button>
          </Link>
        </motion.div>
      </motion.section>
    </main>
  );
}
