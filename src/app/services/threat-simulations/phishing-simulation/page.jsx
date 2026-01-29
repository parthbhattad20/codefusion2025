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

export default function PhishingSimulationPage() {
  return (
    <main className="w-full bg-white text-gray-900 dark:bg-background dark:text-foreground">
      {/* ================= HERO ================= */}
      <section className="relative h-screen overflow-hidden bg-[#070b14]">
        {/* Email grid */}
        <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,#38bdf822_1px,transparent_1px),linear-gradient(to_bottom,#38bdf822_1px,transparent_1px)] bg-[size:70px_70px]" />

        {/* Background image */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/videos/main.mp4" type="video/mp4" />
        </video>

        {/* Inbox scan beam */}
        <motion.div
          className="absolute inset-y-0 w-[35%] bg-gradient-to-r from-transparent via-sky-400/15 to-transparent"
          animate={{ x: ["-40%", "140%"] }}
          transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative z-10 h-full flex flex-col justify-center px-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-6 px-4 py-2 rounded-full border border-primary bg-primary-400/10 text-blue-300 text-sm tracking-widest"
          >
            HUMAN FIREWALL PROGRAM
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight max-w-5xl"
          >
            Phishing Simulation <br /> & Awareness Training
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-gray-300 max-w-3xl text-lg"
          >
            Reduce human cyber risk with realistic phishing simulations and
            targeted security awareness training.
          </motion.p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="mt-10"
          >
            <Link href="/contact">
              <button className="px-10 py-4 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 hover:bg-sky-500 transition text-white font-semibold shadow-lg">
                Start Phishing Simulation
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ================= WHY ================= */}
      <motion.section
        className="py-24 px-6"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div variants={sectionReveal} className="ml-6">
            <h2 className="text-2xl font-semibold text-primary mb-6">
              Why Phishing Simulation Matters
            </h2>

            <ul className="space-y-4 text-gray-800 dark:text-gray-200">
              <li>• Identify vulnerable employees</li>
              <li>• Reduce ransomware & credential theft risk</li>
              <li>• Improve security culture</li>
              <li>• Meet compliance requirements</li>
              <li>• Continuous training & metrics</li>
            </ul>
          </motion.div>

          <motion.div
            variants={sectionReveal}
            className="flex justify-center md:justify-end mr-10 perspective-[1200px]"
          >
            <motion.img
              src="/assets/services/phishing.webp"
              alt="Phishing Simulation"
              className="w-full max-w-md rounded-xl shadow-xl"
              animate={floating3D.animate}
              transition={floating3D.transition}
              style={{ transformStyle: "preserve-3d" }}
            />
          </motion.div>
        </div>
      </motion.section>
      {/* ================= IN-DEPTH INFO ================= */}
      <motion.section
        className="relative py-28 px-6 overflow-hidden
             bg-white dark:bg-[#070b14]
             text-gray-900 dark:text-white"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.06]
               bg-[linear-gradient(to_right,#38bdf822_1px,transparent_1px),
                   linear-gradient(to_bottom,#38bdf822_1px,transparent_1px)]
               bg-[size:70px_70px]"
        />

        {/* scan beam */}
        <motion.div
          className="absolute inset-y-0 w-[30%]
               bg-gradient-to-r from-transparent via-primary-400/10 to-transparent"
          animate={{ x: ["-40%", "140%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <motion.div variants={sectionReveal}>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-primary">
              Inside Our Phishing Simulation Platform
            </h2>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
              Our phishing simulation platform replicates real attacker behavior
              using controlled, safe campaigns that mirror modern threat
              techniques such as brand impersonation, credential harvesting,
              malicious attachments, and urgency-based social engineering.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-8">
              This allows security teams to measure true human risk across the
              organization and continuously strengthen the human layer of
              defense — the most exploited attack surface in modern breaches.
            </p>

            <div className="space-y-4 text-gray-800 dark:text-gray-200">
              <div className="flex gap-3">
                <span className="text-sky-500 font-bold">▸</span>
                Simulates real-world attacker infrastructure and email
                techniques
              </div>
              <div className="flex gap-3">
                <span className="text-sky-500 font-bold">▸</span>
                Delivers zero real malware or system impact
              </div>
              <div className="flex gap-3">
                <span className="text-sky-500 font-bold">▸</span>
                Fully auditable, compliant, and privacy-safe by design
              </div>
            </div>
          </motion.div>

          {/* RIGHT PANEL */}
          <motion.div
            variants={sectionReveal}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 160, damping: 20 }}
            className="relative rounded-2xl p-10
                 bg-white/70 dark:bg-white/5
                 backdrop-blur-xl
                 border border-gray-200 dark:border-sky-400/20
                 shadow-lg dark:shadow-[0_0_40px_rgba(56,189,248,0.12)]"
          >
            <h3 className="text-2xl font-semibold mb-8 text-primary">
              Security Metrics We Analyze
            </h3>

            <div className="space-y-5 text-gray-700 dark:text-gray-300 text-lg">
              <div className="flex justify-between border-b border-gray-200 dark:border-white/10 pb-2">
                <span>Email open rate</span>
                <span className="text-sky-500">Engagement vector</span>
              </div>

              <div className="flex justify-between border-b border-gray-200 dark:border-white/10 pb-2">
                <span>Malicious link clicks</span>
                <span className="text-amber-500">Threat exposure</span>
              </div>

              <div className="flex justify-between border-b border-gray-200 dark:border-white/10 pb-2">
                <span>Credential submission</span>
                <span className="text-red-500">Critical vulnerability</span>
              </div>

              <div className="flex justify-between border-b border-gray-200 dark:border-white/10 pb-2">
                <span>Phish reporting rate</span>
                <span className="text-emerald-600">User maturity</span>
              </div>

              <div className="flex justify-between">
                <span>Departmental risk mapping</span>
                <span className="text-indigo-500">Attack surface model</span>
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
            Phishing Simulation Capabilities
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {[
              [
                "Realistic Emails",
                "Credential theft, malware & ransomware scenarios",
              ],
              ["Risk Scoring", "Track employee susceptibility"],
              ["Automated Campaigns", "Recurring simulations"],
              ["Instant Training", "On-failure education"],
              ["Compliance Reporting", "ISO, SOC2, PCI"],
              ["Executive Dashboards", "Leadership visibility"],
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
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-transparent via-sky-500/10 to-transparent" />

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
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-primary">
              How Our Phishing Simulation Works
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
              We simulate real-world phishing attacks to measure employee
              readiness, identify risk exposure, and strengthen your
              organization’s human firewall.
            </p>

            <div className="mt-6 h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
            {/* Process Card */}
            <motion.div
              variants={sectionReveal}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="relative p-8 rounded-2xl border border-gray-200 dark:border-slate-800
                   bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl
                   shadow-lg hover:shadow-2xl"
            >
              <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-violet-500 to-fuchsia-500 rounded-full" />

              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                Simulation & Training Process
              </h3>

              <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-lg">
                <li>• Design realistic phishing scenarios</li>
                <li>• Launch controlled simulations</li>
                <li>• Track clicks & credential submissions</li>
                <li>• Deliver targeted security training</li>
              </ul>
            </motion.div>

            {/* Outcome Card */}
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
                Measurement & Risk Reduction
              </h3>

              <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-lg">
                <li>• Measure employee security awareness improvement</li>
                <li>• Identify high-risk users & departments</li>
                <li>• Executive-ready reporting dashboards</li>
                <li>• Continuous reduction of phishing risk</li>
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
          className="text-3xl md:text-4xl font-bold mb-4 text-primary"
        >
          Stop Phishing Before It Starts
        </motion.h2>

        <motion.p
          variants={sectionReveal}
          className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground"
        >
          Turn your employees into a strong line of cyber defense.
        </motion.p>

        <motion.div variants={sectionReveal} whileHover={{ scale: 1.08 }}>
          <Link href="/contact">
            <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-xl">
              Talk to a Security Expert
            </button>
          </Link>
        </motion.div>
      </motion.section>
    </main>
  );
}
