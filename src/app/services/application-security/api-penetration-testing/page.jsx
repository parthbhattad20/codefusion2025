"use client";

import Link from "next/link";
import {
  ShieldAlert,
  Server,
  Lock,
  Bug,
  Network,
  LineChart,
} from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.12 } },
};

export default function APIPenTestingPage() {
  return (
    <main className="w-full bg-gray-50 dark:bg-background text-gray-900 dark:text-foreground">
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
            API Penetration Testing
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-sm md:text-xl text-gray-200 max-w-4xl text-left"
          >
            Application Programming Interface (API) Penetration Testing services
            to protect the first line of defense of your applications. We attack
            APIs like real hackers to uncover vulnerabilities, business logic
            flaws, and data exposure risks.
          </motion.p>

          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-3 bg-gradient-to-r from-violet-500 to-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Secure Your APIs Now
            </motion.button>
          </Link>
        </div>
      </motion.section>

      {/* ================= OVERVIEW ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        variants={fadeUp}
        className="py-24 px-6 bg-gray-50 dark:bg-background transition-colors"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
              API Security Testing Services
            </h2>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              APIs are the connective tissue of modern applications. Our API
              penetration testing team digs deep into your API ecosystem,
              penetrates real attack paths, and reports critical security flaws
              that automated scanners fail to detect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp}>
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Why API Penetration Testing Matters
              </h3>

              <ul className="space-y-4 text-gray-800 dark:text-gray-200">
                <li>• Simulate real-world API attacks</li>
                <li>• Detect business logic vulnerabilities</li>
                <li>• Prevent data leakage and abuse</li>
                <li>• Improve API development quality</li>
                <li>• Ensure compliance with security standards</li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
              className="flex justify-center md:justify-end"
            >
              <img
                src="/assets/services/wapt.webp"
                alt="API Security Testing"
                className="w-full max-w-md rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ================= DETAILED SERVICE INFO CONTAINER (ADDED) ================= */}
      <motion.section
        variants={fadeUp}
        whileInView="show"
        viewport={{ once: true }}
        className="py-24 px-6 bg-gray-100 dark:bg-muted/30"
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
                  How Our API Penetration Testing Works
                </h3>

                <p className="text-gray-700 dark:text-muted-foreground mb-4 leading-relaxed">
                  Our API penetration testing follows an attacker-centric methodology to identify authorization bypasses, mass assignment issues, injection flaws, and sensitive data exposure across REST, SOAP, and GraphQL endpoints.
                </p>

                <ul className="space-y-3 text-gray-700 dark:text-muted-foreground">
                  <li>✔ API inventory & scope definition</li>
                  <li>✔ Authentication & token handling review</li>
                  <li>✔ Business logic & rate-limit testing</li>
                  <li>✔ Manual + automated vulnerability discovery</li>
                  <li>✔ Safe exploitation to validate real impact</li>
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
                    "Developer-focused technical report",
                    "Proof-of-concept attack traces",
                    "CVSS severity scoring",
                    "Compliance mapping (PCI, ISO, GDPR)",
                    "Prioritized remediation roadmap",
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

      {/* ================= SERVICES GRID ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        variants={stagger}
        className="py-16 px-6 bg-gray-50 dark:bg-background transition-colors"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            variants={fadeUp}
            className="text-4xl font-semibold text-primary mb-14"
          >
            Our API Penetration Testing Capabilities
          </motion.h2>

          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "OWASP API Top 10",
                desc: "Assessment against OWASP API Top 10 vulnerabilities including authorization, authentication, and injection flaws.",
              },
              {
                title: "Business Logic Testing",
                desc: "Identify design and implementation flaws that enable unintended API behavior.",
              },
              {
                title: "REST, SOAP & GraphQL",
                desc: "Comprehensive testing for REST, SOAP, RPC, and GraphQL APIs.",
              },
              {
                title: "Authentication & Authorization",
                desc: "Validate token handling, session management, and access control enforcement.",
              },
              {
                title: "Data Exposure & PII",
                desc: "Detect excessive data exposure and sensitive information leakage.",
              },
              {
                title: "Rate Limiting & Abuse",
                desc: "Test protection against brute force, abuse, and denial-of-service risks.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="bg-white dark:bg-muted border border-gray-200 dark:border-border rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <h3 className="font-semibold text-lg mb-3 from-violet-500 to-indigo-500">
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
        variants={fadeUp}
        className="py-28 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-background dark:to-background"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-primary">
              How Our API Penetration Testing Works
            </h2>

            <p className="mt-4 max-w-3xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
              A methodical approach to uncovering vulnerabilities, validating
              business logic, and strengthening API security.
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
                Penetration Testing Process
              </h3>

              <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-lg">
                <li>• Information gathering & threat modeling</li>
                <li>• API mapping and business logic analysis</li>
                <li>• Manual and automated vulnerability testing</li>
                <li>• Exploitation of security weaknesses</li>
                <li>• Risk-based impact analysis</li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="relative p-8 rounded-2xl border border-gray-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl shadow-lg hover:shadow-2xl"
            >
              <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-indigo-500 to-fuchsia-500 rounded-full" />

              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                Continuous Improvement & Support
              </h3>

              <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-lg">
                <li>• Developer-friendly remediation reports</li>
                <li>• 1:1 security workshops</li>
                <li>• Compliance-aligned documentation</li>
                <li>• Complimentary retesting</li>
                <li>• Up to 1-year on-call advisory</li>
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
        className="py-24 px-6 text-center bg-gray-50 dark:bg-background transition-colors"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Secure Your APIs Before Attackers Do
        </h2>

        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Identify real API risks, protect sensitive data, and strengthen your
          application security posture.
        </p>

        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-md hover:shadow-xl transition-all duration-300"
          >
            Talk to an API Security Expert
          </motion.button>
        </Link>
      </motion.section>
    </main>
  );
}
