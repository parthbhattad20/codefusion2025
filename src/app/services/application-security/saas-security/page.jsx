"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code,
  ShieldAlert,
  Bug,
  FileSearch,
  LineChart,
  Lock,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

// Container animation
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

// Item animation
const itemFadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function SourceCodeReviewPage() {
  return (
    <motion.main
      initial="hidden"
      animate="show"
      variants={stagger}
      className="w-full bg-gray-50 text-gray-900 dark:bg-background dark:text-foreground"
    >
      {/* ================= HERO ================= */}
      <motion.section
        variants={fadeUp}
        className="relative h-screen overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/videos/main.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-20">
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white"
          >
            Secure Source Code Review Services
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-sm md:text-xl text-gray-200 max-w-4xl text-left"
          >
            <p>Over 70% of exploitable security flaws are introduced during
            development, making source code one of the most critical enterprise
            attack surfaces. </p>
            Vulnuris simulates real-world attacker behavior at
            the code level to identify injection flaws, broken authentication
            and authorization logic, cryptographic weaknesses, hardcoded
            secrets, and business logic errors—helping you prevent incidents,
            protect sensitive data, meet compliance requirements, and ship
            secure software with confidence.
          </motion.p>

          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 mt-6 bg-gradient-to-r from-violet-500 to-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Schedule Code Review
            </motion.button>
          </Link>
        </div>
      </motion.section>

      {/* ================= OVERVIEW ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        variants={stagger}
        className="py-12 px-6 bg-gray-50 dark:bg-background transition-colors"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeUp} className="relative text-center mb-20">
            {/* Section Label */}
            <span className="inline-block mb-5 px-4 py-1 text-sm font-semibold tracking-wider text-primary bg-primary/10 rounded-full">
              SOURCE CODE REVIEW
            </span>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary dark:text-primary tracking-tight">
              Understanding the Need for Source Code Security
            </h1>

            {/* Content Card */}
            <div className="mt-10 max-w-5xl mx-auto rounded-2xl bg-white/80 dark:bg-muted/40 backdrop-blur-md shadow-xl border border-gray-200 dark:border-border p-8 md:p-10">
              <p className="text-xl leading-relaxed text-gray-700 dark:text-muted-foreground">
                Software as a Service (SaaS) platforms are cloud-native
                applications accessed over the internet without local
                installations. While this model enables rapid scalability and
                global accessibility, it also concentrates sensitive customer
                data, business logic, and critical infrastructure behind exposed
                web interfaces and APIs.
              </p>

              <div className="my-6 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

              <p className="text-xl leading-relaxed text-gray-700 dark:text-muted-foreground">
                With tens of thousands of SaaS providers worldwide and a market
                projected to exceed{" "}
                <span className="font-semibold">USD 700 billion by 2030</span>,
                attackers increasingly target SaaS platforms for data theft,
                account takeover, privilege escalation, and abuse of
                multi-tenant architectures. A single vulnerability can impact
                thousands of customers simultaneously.
              </p>

              <div className="my-6 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

              <p className="text-xl leading-relaxed text-gray-700 dark:text-muted-foreground">
                SaaS cybersecurity must go beyond basic cloud security controls.
                It requires continuous assessment of authentication flows,
                role-based access controls, APIs, business logic, and tenant
                isolation mechanisms. Identifying weaknesses early helps prevent
                large-scale breaches, compliance failures, and irreversible loss
                of customer trust.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp} className="ml-10">
              <h2 className="text-2xl font-semibold text-primary mb-6">
                Source Code Security Challenges
              </h2>

              <ul className="space-y-4 text-gray-800 dark:text-gray-200">
                <li>• Hidden vulnerabilities in application logic</li>
                <li>• Insecure coding practices and patterns</li>
                <li>• Authentication and authorization flaws</li>
                <li>• Hardcoded secrets and credential exposure</li>
                <li>• Data validation and sanitization issues</li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
              className="flex justify-center md:justify-end mr-20"
            >
              <img
                src="/assets/services/saas.jpg"
                alt="Source Code Security"
                className="w-full max-w-md rounded-xl shadow-lg transition"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ================= DETAILED SERVICE INFO CONTAINER ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
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
                  How Our Source Code Review Works
                </h3>

                <p className="text-gray-700 dark:text-muted-foreground mb-4 leading-relaxed">
                  Our secure code review follows a rigorous manual and automated
                  analysis process to identify insecure coding patterns, logic
                  flaws, cryptographic weaknesses, and data handling risks
                  before they reach production.
                </p>

                <ul className="space-y-3 text-gray-700 dark:text-muted-foreground">
                  <li>✔ Codebase scoping and architecture review</li>
                  <li>✔ Static analysis (SAST) + manual inspection</li>
                  <li>✔ Authentication and authorization flow validation</li>
                  <li>✔ Business logic and data validation testing</li>
                  <li>✔ Secure dependency and library analysis</li>
                  <li>✔ CVSS-based risk classification</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  What You Get
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Executive security summary",
                    "Developer-friendly technical findings",
                    "Annotated vulnerable code snippets",
                    "CVSS v3.1 severity scoring",
                    "Compliance mapping (ISO 27001, PCI DSS, SOC 2)",
                    "Prioritized remediation roadmap",
                    "Root-cause analysis of security flaws",
                    "Authentication and authorization logic review",
                    "Insecure data handling and validation findings",
                    "Hardcoded secrets and credential exposure analysis",
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

      {/* ================= WHY YOU NEED IT ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        variants={stagger}
        className="py-10 px-6 bg-gray-50 dark:bg-background transition-colors"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            variants={fadeUp}
            className="text-4xl font-semibold text-primary mb-14"
          >
            Why Do You Need a Source Code Review?
          </motion.h2>

          <motion.div
            variants={container}
            className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16"
          >
            {[
              {
                title: "Early Vulnerability Detection",
                desc: "Identify security flaws at the earliest stage to reduce remediation cost and risk.",
              },
              {
                title: "Business and Reputation Protection",
                desc: "Prevent breaches that could damage customer trust and brand reputation.",
              },
              {
                title: "Compliance and Legal Readiness",
                desc: "Meet regulatory and security compliance requirements with confidence.",
              },
              {
                title: "Secure Production Releases",
                desc: "Ensure secure code before deployment into production environments.",
              },
              {
                title: "Improved Code Quality",
                desc: "Enhance maintainability, performance, and security best practices.",
              },
              {
                title: "Reduced Long-Term Risk",
                desc: "Fix issues early to avoid costly security incidents later.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemFadeUp}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="bg-white dark:bg-muted border border-gray-200 dark:border-border rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all group"
              >
                <h3 className="font-semibold text-lg mb-3 text-blue-600 dark:text-blue-400 group-hover:text-violet-600 transition-colors">
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

      {/* ================= ENGAGEMENT PROCESS ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        variants={stagger}
        className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-background dark:to-background"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeUp} className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-primary">
              How Our Source Code Review Works
            </h2>

            <p className="mt-4 max-w-3xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
              Deep security analysis to uncover vulnerabilities hidden within
              your application logic.
            </p>

            <div className="mt-6 h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-violet-500 to-indigo-500" />
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
                Review & Analysis
              </h3>

              <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-lg">
                <li>• Assess application architecture and codebase</li>
                <li>• Perform manual and automated code analysis</li>
                <li>• Identify vulnerabilities at the root level</li>
                <li>• Validate security controls and logic flows</li>
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
                Reporting and Continuous Monitoring
              </h3>

              <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-lg mb-6">
                <li>• Detailed vulnerability findings</li>
                <li>• Secure coding recommendations</li>
                <li>• Developer-friendly remediation guidance</li>
                <li>• Risk severity and impact analysis</li>
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
        className="py-10 px-6 text-center bg-gray-50 dark:bg-background transition-colors"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Secure Code. Secure Applications.
        </h2>

        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Identify vulnerabilities early and build secure applications with
          Vulnuris Secure Source Code Review Services.
        </p>

        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-md hover:shadow-xl transition-all duration-300"
          >
            Talk to a Security Expert
          </motion.button>
        </Link>
      </motion.section>
    </motion.main>
  );
}
