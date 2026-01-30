"use client";

import Link from "next/link";
import {
  ShieldCheck,
  AlertTriangle,
  Lock,
  LineChart,
  ClipboardCheck,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.12 } },
};

export default function WebAppPentestPage() {
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
        className="relative h-screen overflow-hidden"
      >
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/assets/videos/main.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-20">
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white"
          >
            Web Application Penetration Testing
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-sm md:text-xl text-gray-200 max-w-4xl"
          >
            In-depth security assessment of your web applications to identify
            vulnerabilities, business logic flaws, and compliance gaps using
            real-world attacker simulation.
          </motion.p>

          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-3 bg-gradient-to-r from-violet-500 to-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              GET STARTED
            </motion.button>
          </Link>
        </div>
      </motion.section>

      {/* ================= OVERVIEW ================= */}
      <motion.section
        variants={fadeUp}
        whileInView="show"
        viewport={{ once: true }}
        className="relative py-16 px-5 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-background dark:to-background overflow-hidden"
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
            SECURITY OVERVIEW
          </motion.span>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-foreground">
            What We Do
          </h2>

          {/* Glass Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-12 max-w-5xl mx-auto rounded-2xl bg-white/80 dark:bg-muted/40 backdrop-blur-md shadow-xl border border-gray-200 dark:border-border p-8 md:p-10"
          >
            <p className="text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              We deliver comprehensive application security testing designed to
              uncover real-world vulnerabilities across web applications, APIs,
              mobile apps, and cloud services. Our approach mirrors how modern
              attackers operate — validating exploitability, impact, and attack
              paths rather than relying solely on automated scans.
            </p>

            <div className="my-6 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <p className="text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              By combining manual penetration testing, threat modeling, and
              secure architecture review, we help you understand which
              vulnerabilities truly matter, how they can be exploited, and how
              to remediate them effectively. This enables informed risk
              prioritization, reduced attack surface, and measurable security
              improvements.
            </p>

            <div className="my-6 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <p className="text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              Our testing aligns with industry-recognized frameworks and
              regulatory requirements including OWASP Top 10, SANS Top 25, PCI
              DSS, GDPR, HIPAA, HL7, NIST, and ISO/IEC 27001 & 27002. We provide
              clear remediation recommendations, proof-of-concept validation,
              and up to one month of post-assessment mitigation support.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* ================= DETAILED SERVICE INFO CONTAINER (ADDED) ================= */}
      <motion.section
        variants={fadeUp}
        whileInView="show"
        viewport={{ once: true }}
        className="py-10 px-6 bg-gray-100 dark:bg-muted/30"
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
                  How Our Web App Pentest Works
                </h3>

                <p className="text-gray-700 dark:text-muted-foreground mb-4 leading-relaxed">
                  Our Web Application Penetration Testing follows a strict
                  attacker-centric methodology designed to uncover security
                  weaknesses, logic flaws, and misconfigurations that automated
                  scanners typically miss.
                </p>

                <ul className="space-y-3 text-gray-700 dark:text-muted-foreground">
                  <li>✔ Application scope & asset mapping</li>
                  <li>✔ Manual + automated vulnerability discovery</li>
                  <li>✔ Business logic & access control testing</li>
                  <li>✔ Exploitation to validate real impact</li>
                  <li>✔ CVSS-based risk classification</li>
                  <li>✔ Retesting after fixes (optional)</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  What You Get
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Executive summary with business risk impact",
                    "Detailed vulnerability descriptions with affected endpoints",
                    "Developer-focused technical report",
                    "Step-by-step attack reproduction guidance",
                    "Proof-of-concept screenshots and payloads",
                    "CVSS v3.1 severity scoring and risk prioritization",
                    "Authentication & authorization flaw analysis",
                    "Business logic and workflow abuse findings",
                    "Mapped OWASP Top 10 & CWE references",
                    "Compliance alignment (PCI DSS, ISO 27001, GDPR, HIPAA)",
                    
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

      {/* ================= KEY BENEFITS ================= */}
      <motion.section
        variants={fadeUp}
        whileInView="show"
        viewport={{ once: true }}
        className="py-20 px-6 bg-gray-50 dark:bg-background"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl font-bold text-primary mb-14">
            Business Benefits
          </h2>

          <motion.div
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {[
              {
                title: "Simulated Real-World Attacks",
                desc: "Evaluate your real security posture using hacker-like techniques.",
              },
              {
                title: "Faster Secure Development",
                desc: "Improve developer speed and code quality with secure coding insights.",
              },
              {
                title: "Lower Testing & Compliance Cost",
                desc: "Reduce testing and compliance costs without compromising security.",
              },
              {
                title: "Early Vulnerability Detection",
                desc: "Identify and fix issues early in the SDLC.",
              },
              {
                title: "Continuous Security Visibility",
                desc: "Dashboards to monitor your web application security posture.",
              },
              {
                title: "Release Without Delay",
                desc: "Prevent security testing from delaying application releases.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="bg-white dark:bg-muted border rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all"
              >
                <h3 className="font-semibold text-lg mb-3 text-blue-600 dark:text-blue-400">
                  {item.title}
                </h3>
                <p className="text-gray-700 dark:text-muted-foreground text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ================= METHODOLOGY ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        variants={fadeUp}
        className="py-10 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-background dark:to-background"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-primary">
              Our Penetration Testing Methodology
            </h2>

            <p className="mt-4 max-w-3xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
              A structured, battle-tested approach to uncover vulnerabilities
              and validate real-world attack scenarios.
            </p>

            <div className="mt-6 h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-violet-500 to-indigo-500" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="relative p-8 rounded-2xl border border-gray-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl shadow-lg hover:shadow-2xl"
            >
              <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-indigo-500 to-fuchsia-500 rounded-full" />

              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                Discovery & Exploitation
              </h3>

              <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-lg">
                <li>• Information gathering</li>
                <li>• Threat modelling</li>
                <li>• Application mapping</li>
                <li>• Vulnerability detection</li>
                <li>• Manual exploitation</li>
                <li>• Privilege escalation</li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="relative p-8 rounded-2xl border border-gray-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl shadow-lg hover:shadow-2xl"
            >
              <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-indigo-500 to-fuchsia-500 rounded-full" />

              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                Reporting & Remediation
              </h3>

              <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-lg">
                <li>• Result analysis</li>
                <li>• Developer-friendly reporting</li>
                <li>• Security briefing workshop</li>
                <li>• Mitigation support</li>
                <li>• Complimentary retesting</li>
                <li>• Executive summary report</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ================= WHAT WE TEST ================= */}
      <motion.section
        variants={fadeUp}
        whileInView="show"
        viewport={{ once: true }}
        className="relative py-10 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-background dark:to-background"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-primary">
              What Do We Test?
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive security validation across application, API, and
              infrastructure layers.
            </p>
            <div className="mt-6 h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-violet-500 to-indigo-500" />
          </div>

          <motion.div
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
          >
            {[
              "OWASP Top 10 & SANS Top 25",
              "Broken Access Control & IDOR",
              "SQL Injection & XSS",
              "Business Logic Vulnerabilities",
              "Secure Communication & Encryption",
              "API & Web Services Security",
              "Source Code Review",
              "Updates, CVEs & Misconfigurations",
              "PII & Sensitive Data Exposure",
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-violet-500/40 to-cyan-500/40"
              >
                <div className="relative h-full rounded-2xl bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl p-6 border border-gray-200/60 dark:border-slate-800 shadow-lg hover:shadow-2xl transition-all">
                  <div className="absolute top-4 right-4 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 opacity-80 group-hover:scale-125 transition-transform" />

                  <p className="text-base font-semibold text-gray-800 dark:text-gray-100 leading-relaxed">
                    {item}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ================= DELIVERABLES ================= */}
      <motion.section
        variants={fadeUp}
        whileInView="show"
        viewport={{ once: true }}
        className="py-10 px-6 text-center bg-gray-50 dark:bg-background"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
          Web App Pen Test Deliverables
        </h2>

        <p className="max-w-4xl mx-auto text-lg text-gray-700 dark:text-muted-foreground mb-10">
          Developer-friendly reports, remediation workshops, retesting, secure
          badge, and up to one-year on-call advisory support.
        </p>

        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-md hover:shadow-lg transition"
          >
            Talk to a Security Expert
          </motion.button>
        </Link>
      </motion.section>
    </motion.main>
  );
}
