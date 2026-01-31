"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemFadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function VAPTPage() {
  return (
    <motion.main
      initial="hidden"
      animate="show"
      variants={stagger}
      className="w-full bg-gray-50 dark:bg-background text-gray-900 dark:text-foreground"
    >
      {/* ================= HERO ================= */}
      <motion.section
        variants={fadeUp}
        className="relative h-screen bg-contain bg-center bg-no-repeat mt-20 bg-black"
      >
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/assets/videos/main.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-black/70"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <motion.h1
            variants={fadeUp}
            className="text-3xl md:text-5xl lg:text-5xl font-extrabold text-white mt-50"
          >
            Vulnerability Assessment and Penetration Testing
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-sm md:text-xl text-gray-200 max-w-4xl text-left"
          >
            <p>
              {" "}
              Over 70% of enterprise breaches originate from exploitable
              vulnerabilities across applications, APIs, and infrastructure.
            </p>
            Vulnuris simulates real-world attacker behavior to uncover
            authentication bypasses, business logic abuse, insecure
            configurations, exposed APIs, and privilege escalation paths—helping
            organizations prevent incidents, protect sensitive data, meet
            compliance mandates, and ship secure systems with confidence.
          </motion.p>

          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="mt-5 px-8 py-3 bg-gradient-to-r from-violet-500 to-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              SPEAK WITH AN EXPERT
            </motion.button>
          </Link>
        </div>
      </motion.section>

      {/* ================= VAPT OVERVIEW ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="relative py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-background dark:to-background transition-colors overflow-hidden"
      >
        {/* Decorative Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 blur-3xl rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          {/* Section Label */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4 px-4 py-1 text-sm font-semibold tracking-wider text-primary bg-primary/10 rounded-full"
          >
            SECURITY SERVICES
          </motion.span>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-foreground leading-tight">
            Vulnerability Assessment and
            <span className="block text-primary mt-2">
              Penetration Testing (VAPT)
            </span>
          </h1>

          {/* Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-12 max-w-5xl mx-auto rounded-2xl bg-white/80 dark:bg-muted/40 backdrop-blur-md shadow-xl border border-gray-200 dark:border-border p-8 md:p-10"
          >
            <p className="text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              Vulnerability Assessment and Penetration Testing (VAPT) is not
              just about finding security gaps — it's about understanding how
              real attackers think and act. Our structured, risk-based approach
              evaluates your applications, infrastructure, networks, and cloud
              environments from an attacker's perspective.
            </p>

            <div className="my-6 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <p className="text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              We go beyond automated scans. By combining manual testing,
              industry-proven methodologies, and real-world attack simulations,
              we uncover critical vulnerabilities that automated tools often
              miss. This enables you to prioritize risks, strengthen defenses,
              and maintain compliance with security standards.
            </p>

            <div className="my-6 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <p className="text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              Security should be proactive, not reactive. Identifying weaknesses
              early helps prevent data breaches, financial losses, reputational
              damage, and regulatory penalties. Our reports include clear risk
              ratings, proof-of-concept evidence, and actionable remediation
              guidance aligned with your business goals.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* ================= WHY VAPT ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="py-16 px-6 bg-gray-50 dark:bg-background"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="ml-10">
            <h2 className="text-2xl font-semibold text-primary mb-6">
              Why Vulnerability Assessment and Penetration Testing
            </h2>

            <ul className="space-y-4 text-gray-800 dark:text-gray-200">
              <li>• Identify security weaknesses before attackers</li>
              <li>• Reduce the risk of data breaches</li>
              <li>• Improve security posture and compliance</li>
              <li>• Protect business-critical systems</li>
              <li>• Strengthen incident response readiness</li>
            </ul>
          </div>

          <motion.div
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 180, damping: 18 }}
            className="flex justify-center md:justify-end mr-20"
          >
            <img
              src="/assets/services/vCiso.webp"
              alt="VAPT Services"
              className="w-full max-w-md rounded-xl shadow-lg dark:shadow-blue-900/30"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* ================= SERVICES GRID ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        variants={stagger}
        className="py-12 px-6 bg-gray-50 dark:bg-background"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-semibold text-primary mb-12"
          >
            Vulnerability Assessment | Penetration Testing
          </motion.h2>

          <motion.div
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12"
          >
            {[
              {
                title: "Vulnerability Assessment",
                desc: "Identify and prioritize vulnerabilities across internal and external systems.",
              },
              {
                title: "Penetration Testing",
                desc: "Exploit identified vulnerabilities to demonstrate real-world attack impact.",
              },
              {
                title: "Application Security Testing",
                desc: "Detect security flaws in web and mobile applications.",
              },
              {
                title: "Phishing Assessments",
                desc: "Measure employee awareness against phishing attacks.",
              },
              {
                title: "Red Team Security Testing",
                desc: "Simulate real-world attackers using multi-layered attack scenarios.",
              },
              {
                title: "Third-Party Risk Testing",
                desc: "Assess vendor and third-party security exposure.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemFadeUp}
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="bg-white dark:bg-muted border border-gray-200 dark:border-border rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <h3 className="font-semibold text-lg mb-3 text-blue-600 dark:text-blue-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-700 dark:text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ================= DETAILED SERVICE INFO CONTAINER (UPDATED) ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="py-16 px-6 bg-gray-100 dark:bg-muted/30"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            className="relative overflow-hidden rounded-3xl border border-gray-200 dark:border-border bg-white dark:bg-background shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-violet-500/10 dark:from-blue-500/20 dark:to-violet-500/20" />

            <div className="relative p-10 md:p-14 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6">
                  How Our VAPT Service Works
                </h3>

                <p className="text-gray-700 dark:text-muted-foreground mb-4 leading-relaxed">
                  Our Vulnerability Assessment and Penetration Testing service
                  follows a structured, compliance‑aligned methodology designed
                  to uncover real‑world security risks across your
                  infrastructure, applications, and human layer.
                </p>

                <ul className="space-y-3 text-gray-700 dark:text-muted-foreground">
                  <li>✔ Asset discovery and scope definition</li>
                  <li>✔ Automated and manual vulnerability analysis</li>
                  <li>✔ Safe exploitation to validate impact</li>
                  <li>✔ Risk scoring using CVSS standards</li>
                  <li>✔ Actionable remediation guidance</li>
                  <li>✔ Retesting after fixes (optional)</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  What You Get
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Executive summary report",
                    "Technical vulnerability report",
                    "Proof‑of‑concept screenshots",
                    "CVSS risk ratings",
                    "Compliance mapping (ISO/SOC2/PCI‑DSS)",
                    "Remediation roadmap",
                    "Attack chain analysis",
                    "Retest verification report",
                    "Security posture scoring",
                    "Prioritized fix recommendations",
                    "Network topology diagrams",
                    "Post-assessment consultation",
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.03 }}
                      className="rounded-xl border border-gray-200 dark:border-border px-4 py-3 text-sm text-gray-700 dark:text-muted-foreground bg-gray-50 dark:bg-muted"
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

      {/* ================= VAPT DETAILS ================= */}

      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        variants={stagger}
        className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-background dark:to-background"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-primary dark:text-primary">
              What Is Vulnerability Assessment and Penetration Testing?
            </h2>

            <p className="mt-4 max-w-3xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
              A structured approach to identifying, prioritizing, and
              eliminating security weaknesses before attackers exploit them.
            </p>

            <div className="mt-6 h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-sky-500 to-indigo-500" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="relative p-8 rounded-2xl border border-gray-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl shadow-lg hover:shadow-2xl"
            >
              <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-indigo-500 to-fuchsia-500 rounded-full" />

              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                Vulnerability Assessment
              </h3>

              <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-lg">
                <li>• Continuous scanning to detect vulnerabilities</li>
                <li>• Risk-based prioritization</li>
                <li>• Determining remediation actions</li>
                <li>• Internal & external security assessments</li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="relative p-8 rounded-2xl border border-gray-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl shadow-lg hover:shadow-2xl"
            >
              <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-indigo-500 to-fuchsia-500 rounded-full" />

              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                Penetration Testing
              </h3>

              <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-lg">
                <li>• Network and infrastructure testing</li>
                <li>• Web application testing</li>
                <li>• Internal and external penetration testing</li>
                <li>• Vulnerability management program</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ================= CTA ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="py-16 px-6 text-center bg-gray-50 dark:bg-background"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Don't Leave Vulnerabilities for Hackers
        </h2>

        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Like a real threat actor, we simulate attacks to test how well your
          organization can withstand modern cyber threats.
        </p>

        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-md hover:opacity-90 transition"
          >
            Talk to a VAPT Expert
          </motion.button>
        </Link>
      </motion.section>
    </motion.main>
  );
}
