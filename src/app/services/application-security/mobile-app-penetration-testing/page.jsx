"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.12 } },
};

export default function MobileAppSecurityTestingPage() {
  return (
    <main className="w-full bg-gray-50 text-gray-900 dark:bg-background dark:text-foreground">
      {/* ================= HERO ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
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

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white"
          >
            Mobile Application Security Testing
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-4xl text-lg md:text-xl text-gray-200"
          >
            Deep testing of mobile applications to uncover weaknesses before
            hackers exploit them — helping you build safer, production-ready
            Android and iOS apps.
          </motion.p>

          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-3 bg-gradient-to-r from-violet-500 to-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              GET STARTED
            </motion.button>
          </Link>
        </div>
      </motion.section>

      {/* ================= WHAT WE DO ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        variants={fadeUp}
        className="relative py-10 px-6 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-background dark:to-background overflow-hidden"
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
            MOBILE SECURITY TESTING
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
              We conduct in-depth mobile application penetration testing and
              security audits across Android and iOS environments. Our
              assessments simulate real-world attack scenarios by analyzing
              application behavior at runtime, reverse engineering binaries,
              intercepting network traffic, and evaluating client–server trust
              boundaries.
            </p>

            <div className="my-6 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <p className="text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              Our certified security experts manually exploit vulnerabilities
              related to insecure data storage, improper cryptography,
              authentication and session flaws, insecure API communication, and
              business logic bypasses. We perform binary, file-system, and
              memory-level analysis to ensure accurate findings with zero false
              positives.
            </p>

            <div className="my-6 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <p className="text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              Security is most effective when addressed early in the development
              lifecycle. Our testing aligns with global standards and regulatory
              frameworks including OWASP Mobile Top 10, PCI DSS, GDPR, HIPAA,
              NIST, and ISO/IEC 27001. We deliver actionable remediation
              guidance, validated proof-of-concept evidence, and post-assessment
              support to help you reduce risk before vulnerabilities are
              exploited in production.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* ================= DETAILED SERVICE INFO CONTAINER (ADDED) ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
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
                  How Our Mobile App Security Testing Works
                </h3>

                <p className="text-gray-700 dark:text-muted-foreground mb-4 leading-relaxed">
                  Our mobile application security testing follows a structured
                  attacker-centric workflow to uncover client-side, backend, and
                  device-level vulnerabilities that traditional QA and automated
                  scanners often miss.
                </p>

                <ul className="space-y-3 text-gray-700 dark:text-muted-foreground">
                  <li>✔ Application & API scope definition</li>
                  <li>✔ Static and dynamic analysis (SAST & DAST)</li>
                  <li>✔ Runtime manipulation & instrumentation</li>
                  <li>✔ Business logic & authorization testing</li>
                  <li>✔ Secure exploitation to validate impact</li>
                  <li>✔ CVSS-based risk classification</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  What You Get
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Executive summary with business risk impact",
                    "Detailed vulnerability descriptions across Android & iOS",
                    "Affected components and insecure API endpoints",
                    "Proof-of-concept screenshots, logs, and traffic captures",
                    "Reproducible attack steps and exploitation paths",
                    "CVSS v3.1 severity scoring and risk prioritization",
                    "Insecure data storage and cryptographic misuse findings",
                    "Authentication, session, and authorization flaw analysis",
                    "Reverse engineering and binary-level assessment results",
                    "Mapped OWASP Mobile Top 10 & CWE references",
                   
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

      {/* ================= BUSINESS BENEFITS ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        variants={stagger}
        className="py-10 px-6 bg-gradient-to-b from-white to-gray-50 dark:from-background dark:to-background"
      >
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-center text-3xl md:text-4xl font-extrabold tracking-tight text-primary dark:text-primary mb-6"
          >
            Mobile App Penetration Testing
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto text-gray-600 dark:text-gray-400 mb-16 text-lg"
          >
            Measurable security, faster delivery, and enterprise-grade risk
            visibility for modern mobile applications.
          </motion.p>

          {/* Cards */}
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              "Simulate real-world hacker attacks",
              "Reduce security testing costs",
              "Accelerate secure code delivery",
              "Prevent release delays",
              "Reduce vulnerability remediation effort",
              "Improve compliance readiness",
              "Dashboards for security posture monitoring",
              "Secure coding training for developers",
              "Enterprise-grade risk visibility",
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-indigo-500/40 via-violet-500/40 to-cyan-500/40"
              >
                <div
                  className="relative h-full rounded-2xl p-6 bg-white/80 dark:bg-slate-900/70
                       backdrop-blur-xl border border-white/40 dark:border-slate-800
                       shadow-md hover:shadow-2xl transition overflow-hidden"
                >
                  {/* light sweep effect */}
                  <div className="absolute -left-full top-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-full transition-all duration-700" />

                  {/* accent dot */}
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 mb-4" />

                  <p className="relative text-gray-800 dark:text-gray-200 font-medium leading-relaxed">
                    {item}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ================= ASSESS · STANDARDS · TRANSFORM ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        variants={stagger}
        className="py-10 px-6 bg-gray-50 dark:bg-background"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: "Assess",
              desc: "Manual and dynamic testing following OWASP Mobile Security Testing Guide and MASVS to identify vulnerabilities including zero-day flaws.",
            },
            {
              title: "Standards",
              desc: "Testing aligned with NIST, OWASP, SANS using attacker-grade tools by certified experts (CREST, CEH, OSCP).",
            },
            {
              title: "Transform",
              desc: "Developer-friendly reports, 1:1 remediation workshops and up to 1-year expert on-call support.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="transition"
            >
              <h3 className="text-xl font-semibold text-primary mb-4">
                {item.title}
              </h3>
              <p className="text-gray-700 dark:text-muted-foreground">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ================= SERVICES COVERED ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        variants={fadeUp}
        className="py-20 px-6 bg-gradient-to-b from-white to-gray-50 dark:from-background dark:to-background"
      >
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-primary">
              What We Test in Mobile Applications
            </h2>

            <p className="mt-4 max-w-3xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
              A comprehensive assessment covering application logic, device
              security, backend APIs, and real-world attack vectors.
            </p>

            <div className="mt-6 h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-violet-500 to-indigo-500" />
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Application Layer */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="relative p-8 rounded-2xl border border-gray-200 dark:border-slate-800
                   bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl
                   shadow-lg hover:shadow-2xl"
            >
              <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-indigo-500 to-fuchsia-500 rounded-full" />

              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                Application & Device Security
              </h3>

              <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-lg">
                <li>• OWASP Mobile Top 10</li>
                <li>• Data storage security</li>
                <li>• Authentication & authorization</li>
                <li>• Device & jailbreak detection</li>
                <li>• Secure communication & encryption</li>
                <li>• Binary & file-level analysis</li>
                <li>• Source code review</li>
                <li>• API & web services security</li>
              </ul>
            </motion.div>

            {/* Advanced Testing */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="relative p-8 rounded-2xl border border-gray-200 dark:border-slate-800
                   bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl
                   shadow-lg hover:shadow-2xl"
            >
              <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-indigo-500 to-fuchsia-500 rounded-full" />

              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                Advanced & Infrastructure Testing
              </h3>

              <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-lg">
                <li>• Black box, grey box & white box testing</li>
                <li>• Reverse engineering & decompiling</li>
                <li>• Cryptography validation</li>
                <li>• Business logic flaws</li>
                <li>• Platform & architecture review</li>
                <li>• Updates & CVE checks</li>
                <li>• Backend & database risks</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ================= TESTING STEPS ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        variants={stagger}
        className="py-10 px-6 bg-gray-50 dark:bg-background"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-primary mb-12"
          >
            Steps Involved in Mobile Penetration Testing
          </motion.h2>

          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-gray-700 dark:text-muted-foreground">
            {[
              "Information Gathering",
              "Threat Modelling",
              "Vulnerability Detection",
              "Penetration Testing",
              "Privilege Escalation",
              "Result Analysis",
              "Reporting",
              "Security Workshop",
              "Mitigation Support",
              "Retesting",
              "Summary Report",
            ].map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="p-4 rounded-xl bg-white dark:bg-muted border border-border shadow-sm hover:shadow-lg transition"
              >
                {step}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ================= CTA ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="py-10 px-6 text-center bg-gray-50 dark:bg-background"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Secure Your Mobile Applications Today
        </h2>

        <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground mb-8">
          Identify vulnerabilities early, protect sensitive data, and meet
          global compliance requirements with enterprise-grade mobile security
          testing.
        </p>

        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-md hover:shadow-xl transition"
          >
            Talk to a Mobile Security Expert
          </motion.button>
        </Link>
      </motion.section>
    </main>
  );
}
