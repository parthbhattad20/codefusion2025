"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const sectionReveal = {
  hidden: { opacity: 0, y: 50, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
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
  transition: { duration: 12, repeat: Infinity, ease: "easeInOut" },
};

export default function ERPSecurityAuditPage() {
  return (
    <main className="w-full bg-white text-gray-900 dark:bg-background dark:text-foreground">
      {/* ================= HERO ================= */}
      <section className="relative h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/videos/main.mp4" type="video/mp4" />
        </video>

        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/65 to-black/85"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:70px_70px]" />

        <motion.div
          className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-12"
          animate={{ x: ["-30%", "30%"] }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-6 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm text-white tracking-wide"
          >
            Enterprise System Protection
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight"
          >
            ERP Security Audit & Consulting Services
          </motion.h1>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full my-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-sm md:text-xl text-gray-200 max-w-4xl text-center"
          >
            Securing your ERP systems from bad actors and cyber risks.
          </motion.p>

          <motion.div
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.96 }}
            className="mt-10"
          >
            <Link href="/contact">
              <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition">
                Secure Your ERP Systems Today
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
          <motion.div variants={sectionReveal} className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-primary dark:text-primary">
              What Is ERP Security Assessment?
            </h1>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              ERP systems unify core business processes. ERP security protects
              these systems from unauthorized access and malicious activity.
            </p>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              With ERP platforms storing highly sensitive financial and customer
              data, security is mission-critical for enterprises.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={sectionReveal} className="ml-10">
              <h2 className="text-2xl font-semibold mb-6 text-primary">
                Why ERP Security Matters
              </h2>

              <ul className="space-y-4 text-gray-800 dark:text-muted-foreground">
                <li>• Protect sensitive business data</li>
                <li>• Prevent unauthorized dashboard access</li>
                <li>• Reduce operational disruption</li>
                <li>• Meet regulatory requirements</li>
                <li>• Secure mission-critical platforms</li>
              </ul>
            </motion.div>

            <motion.div
              variants={sectionReveal}
              className="flex justify-center md:justify-end mr-20 perspective-[1200px]"
            >
              <motion.img
                src="/assets/services/erp.jpg"
                alt="ERP Security Audit"
                className="w-full max-w-md rounded-xl shadow-xl"
                animate={floating3D.animate}
                transition={floating3D.transition}
                style={{ transformStyle: "preserve-3d" }}
              />
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
            className="text-4xl font-semibold mb-14 text-primary"
          >
            Common Cyber Risks Affecting ERP Systems
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {[
              [
                "Ransomware Attacks",
                "Encrypt ERP data causing severe disruption.",
              ],
              [
                "Phishing Attacks",
                "Credential theft through malicious emails.",
              ],
              ["Insider Threats", "Internal misuse or data leakage."],
              ["Zero-Day Attacks", "Exploitation of unknown vulnerabilities."],
              ["Unauthorized Access", "Weak access controls."],
              ["Data Breaches", "Exposure of sensitive records."],
            ].map(([title, desc], i) => (
              <motion.div
                key={i}
                variants={cardReveal}
                whileHover={{
                  y: -8,
                  boxShadow: "0 18px 40px rgba(0,0,0,0.08)",
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-white dark:bg-muted border border-gray-200 dark:border-border rounded-2xl p-6 shadow-sm cursor-pointer"
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

      {/* ================= DETAILED SERVICE INFO CONTAINER – ERP SECURITY AUDIT & CONSULTING SERVICES ================= */}
      <motion.section
        variants={fadeUp}
        whileInView="show"
        viewport={{ once: true }}
        className="py-24 px-6 bg-gray-100 dark:bg-muted/30"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            className="relative overflow-hidden rounded-3xl
                 border border-indigo-500/25 dark:border-fuchsia-500/25
                 bg-white dark:bg-background shadow-xl"
          >
            {/* light gradient overlay – REQUIRED COLORS */}
            <div
              className="absolute inset-0 bg-gradient-to-br
                   from-indigo-500/10 via-transparent to-fuchsia-500/10
                   dark:from-indigo-500/15 dark:to-fuchsia-500/15"
            />

            <div className="relative p-10 md:p-14 grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* LEFT CONTENT */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-indigo-600 dark:text-fuchsia-400 mb-6">
                  How Our ERP Security Audit & Consulting Works
                </h3>

                <p className="text-gray-700 dark:text-muted-foreground mb-4 leading-relaxed">
                  Our ERP Security Audit & Consulting Services assess and
                  strengthen the security of your enterprise resource planning
                  systems. We identify configuration gaps, access risks, and
                  process weaknesses across critical ERP modules while aligning
                  security controls with business operations and compliance
                  needs.
                </p>

                <ul className="space-y-3 text-gray-700 dark:text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-indigo-500">✔</span>ERP landscape &
                    architecture assessment
                  </li>
                  <li className="flex gap-2">
                    <span className="text-indigo-500">✔</span>User access, roles
                    & segregation of duties review
                  </li>
                  <li className="flex gap-2">
                    <span className="text-indigo-500">✔</span>Configuration &
                    customization security analysis
                  </li>
                  <li className="flex gap-2">
                    <span className="text-indigo-500">✔</span>Application,
                    database & integration security checks
                  </li>
                  <li className="flex gap-2">
                    <span className="text-indigo-500">✔</span>Risk
                    identification across critical business processes
                  </li>
                  <li className="flex gap-2">
                    <span className="text-indigo-500">✔</span>Security roadmap &
                    governance recommendations
                  </li>
                </ul>
              </div>

              {/* RIGHT CONTENT */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  What You Get
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "ERP security audit & risk report",
                    "Access control & SoD findings",
                    "Configuration & process gap analysis",
                    "Compliance mapping (ISO / SOX / PCI)",
                    "Actionable remediation roadmap",
                    "Ongoing ERP security consulting guidance",
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.03 }}
                      className="rounded-xl
                           border border-indigo-500/25 dark:border-fuchsia-500/25
                           px-4 py-3 text-sm
                           text-gray-700 dark:text-gray-200
                           bg-white/80 dark:bg-black/40
                           backdrop-blur transition"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
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
          <motion.div variants={sectionReveal} className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-primary dark:text-primary">
              How We Secure Your ERP Systems
            </h2>

            <p className="mt-4 max-w-3xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
              End-to-end protection for mission-critical ERP platforms to ensure
              data integrity, business continuity, and regulatory compliance.
            </p>

            <div className="mt-6 h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div className="relative p-8 rounded-2xl border bg-white/80 dark:bg-slate-900/70 shadow-lg">
              <h3 className="text-xl font-semibold mb-6">
                Core ERP Security Controls
              </h3>
              <ul className="space-y-4">
                <li>• Security policy enforcement</li>
                <li>• Vulnerability mitigation</li>
                <li>• Activity monitoring</li>
                <li>• Backup implementation</li>
                <li>• Continuous risk reduction</li>
              </ul>
            </motion.div>

            <motion.div className="relative p-8 rounded-2xl border bg-white/80 dark:bg-slate-900/70 shadow-lg">
              <h3 className="text-xl font-semibold mb-6">
                Prevent, Detect & Respond
              </h3>
              <ul className="space-y-4">
                <li>• Security posture assessment</li>
                <li>• Vulnerability discovery</li>
                <li>• Remediation support</li>
                <li>• Retesting & validation</li>
                <li>• Continuous monitoring</li>
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
          Secure Your ERP Environment with Confidence
        </motion.h2>

        <motion.p
          variants={sectionReveal}
          className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground"
        >
          Protect ERP systems from ransomware, insider threats, and data
          breaches with expert audits worldwide.
        </motion.p>

        <motion.div variants={sectionReveal} whileHover={{ scale: 1.08 }}>
          <Link href="/contact">
            <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-xl">
              Talk to an ERP Security Expert
            </button>
          </Link>
        </motion.div>
      </motion.section>
    </main>
  );
}
