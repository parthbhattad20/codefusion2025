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

export default function ManagedThreatHuntingPage() {
  return (
    <main className="w-full bg-white text-gray-900 dark:bg-background dark:text-foreground">
      {/* ================= HERO ================= */}
      <section className="relative h-screen overflow-hidden bg-[#05070d]">
        {/* Cyber grid */}
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#7c3aed22_1px,transparent_1px),linear-gradient(to_bottom,#7c3aed22_1px,transparent_1px)] bg-[size:90px_90px]" />

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

        {/* Scan beam */}
        <motion.div
          className="absolute inset-y-0 w-[40%] bg-gradient-to-r from-transparent via-violet-500/10 to-transparent"
          animate={{ x: ["-40%", "140%"] }}
          transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative z-10 h-full flex flex-col justify-center px-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-6 px-4 py-2 rounded-full border border-violet-400/30 bg-violet-400/10 text-violet-300 text-sm tracking-widest"
          >
            CYBER DEFENSE OPERATIONS
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight max-w-4xl"
          >
            Managed <br /> Threat Hunting
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-gray-300 max-w-3xl text-lg"
          >
            Proactively detect, investigate, and eliminate advanced cyber
            threats before they impact your operations.
          </motion.p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="mt-10"
          >
            <Link href="/contact">
              <button className="px-10 py-4 rounded-full bg-violet-600 hover:bg-violet-500 transition text-white font-semibold shadow-lg">
                Start Threat Hunting
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
              What is Managed Threat Hunting?
            </h1>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-gray-400">
              Managed Threat Hunting proactively searches for hidden attackers
              using behavioral analytics, threat intelligence, and human
              expertise to identify advanced threats missed by traditional
              tools.
            </p>

            <div className="mt-6 h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500" />
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
                Why Managed Threat Hunting Matters
              </h2>

              <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-lg">
                <li>• Early detection of advanced threats</li>
                <li>• Reduced attacker dwell time</li>
                <li>• Faster incident response</li>
                <li>• Regulatory compliance support</li>
                <li>• Improved security maturity</li>
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
                src="/assets/services/cyber.jpg"
                alt="Managed Threat Hunting"
                className="w-full max-w-md rounded-xl shadow-md"
                animate={floating3D.animate}
                transition={floating3D.transition}
                style={{ transformStyle: "preserve-3d" }}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
      {/* ================= THREAT HUNTING OPERATIONS CONSOLE (LIGHT) ================= */}
      <motion.section
        className="py-28 px-6 bg-gradient-to-b from-white to-violet-50 dark:from-background dark:to-background"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <motion.div variants={sectionReveal} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-violet-600 dark:text-violet-400">
              Threat Hunting Operations Model
            </h2>

            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600 dark:text-muted-foreground">
              A structured framework used by security teams to uncover stealthy
              threats that bypass traditional automated detection.
            </p>
          </motion.div>

          {/* Main Panel */}
          <motion.div
            variants={sectionReveal}
            className="relative rounded-3xl border border-violet-200 dark:border-violet-500/20
                 bg-white/70 dark:bg-muted/40
                 backdrop-blur-xl p-10 shadow-[0_30px_80px_rgba(139,92,246,0.15)]"
          >
            {/* soft glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.08),transparent_60%)] pointer-events-none" />

            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Data Sources */}
              <div>
                <h3 className="text-sm tracking-widest uppercase text-violet-500 mb-4">
                  Data Sources
                </h3>

                {[
                  "Endpoint telemetry",
                  "Network traffic metadata",
                  "Authentication logs",
                  "Cloud & SaaS activity logs",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={cardReveal}
                    className="mb-3 rounded-xl border border-gray-200 dark:border-border
                         bg-white dark:bg-background px-4 py-3 shadow-sm"
                  >
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Techniques */}
              <div>
                <h3 className="text-sm tracking-widest uppercase text-violet-500 mb-4">
                  Hunting Techniques
                </h3>

                {[
                  "Behavioral anomaly analysis",
                  "MITRE ATT&CK mapping",
                  "Privilege escalation detection",
                  "Lateral movement tracking",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={cardReveal}
                    className="mb-3 rounded-xl border border-gray-200 dark:border-border
                         bg-white dark:bg-background px-4 py-3 shadow-sm"
                  >
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Outcomes */}
              <div>
                <h3 className="text-sm tracking-widest uppercase text-violet-500 mb-4">
                  Outcomes
                </h3>

                {[
                  "Confirmed threat identification",
                  "Root-cause analysis",
                  "Containment recommendations",
                  "Detection rule improvements",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={cardReveal}
                    className="mb-3 rounded-xl border border-gray-200 dark:border-border
                         bg-white dark:bg-background px-4 py-3 shadow-sm"
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
            Our Managed Threat Hunting Process
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {[
              ["Monitor", "Collect telemetry across endpoints and networks"],
              ["Detect", "Identify abnormal behavior patterns"],
              ["Investigate", "Validate attacker presence"],
              ["Remediate", "Safely eliminate threats"],
              ["Threat Intelligence", "Use global attacker insights"],
              ["Continuous Improvement", "Improve detection models"],
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

                <h3 className="font-semibold text-lg mb-3 text-violet-600 dark:text-violet-400">
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
          Hunt Threats Before They Become Breaches
        </motion.h2>

        <motion.p
          variants={sectionReveal}
          className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground"
        >
          Deploy elite threat hunters across your infrastructure today.
        </motion.p>

        <motion.div variants={sectionReveal} whileHover={{ scale: 1.08 }}>
          <Link href="/contact">
            <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-xl">
              Talk to a Threat Hunter
            </button>
          </Link>
        </motion.div>
      </motion.section>
    </main>
  );
}
