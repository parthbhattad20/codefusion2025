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

// Added animation variants for the service section
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
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
            <p>
              Over 80% of modern application breaches exploit insecure APIs,
              making APIs the most critical enterprise attack surface today.
            </p>
            Vulnuris simulates real-world attacker behavior to expose broken
            object-level authorization, authentication bypasses, business logic
            abuse, excessive data exposure, and rate-limit failures—helping you
            prevent incidents, protect sensitive data, meet compliance mandates,
            and confidently secure production releases.
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
        variants={stagger}
        className="relative py-10 px-6 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-background dark:to-background transition-colors overflow-hidden"
      >
        {/* Decorative Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 blur-3xl rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.span
              variants={fadeUp}
              className="inline-block mb-4 px-4 py-1 text-sm font-semibold tracking-wider text-primary bg-primary/10 rounded-full"
            >
              API SECURITY ASSESSMENT
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-foreground"
            >
              API Security Testing Services
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground"
            >
              APIs are the backbone of modern applications and the primary
              attack surface for data breaches. Our API penetration testing
              evaluates your endpoints the way real attackers do — mapping trust
              boundaries, exploiting authorization gaps, and validating abuse
              scenarios that automated tools fail to identify.
            </motion.p>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <motion.div
              variants={fadeUp}
              className="rounded-2xl bg-white/80 dark:bg-muted/40 backdrop-blur-md border border-gray-200 dark:border-border shadow-xl p-8 md:p-10"
            >
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Why API Penetration Testing Matters
              </h3>

              <ul className="space-y-4 text-gray-800 dark:text-muted-foreground">
                <li>
                  • Identify broken object-level and function-level
                  authorization
                </li>
                <li>
                  • Detect excessive data exposure and mass assignment flaws
                </li>
                <li>
                  • Validate authentication, token handling, and session
                  security
                </li>
                <li>
                  • Test rate-limiting, abuse protection, and API throttling
                </li>
                <li>
                  • Uncover business logic abuse and workflow manipulation
                </li>
                <li>
                  • Prevent data leakage, account takeover, and API misuse
                </li>
                <li>
                  • Reduce risk across microservices and third-party
                  integrations
                </li>
              </ul>

              <div className="mt-6 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

              <p className="mt-6 text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
                Proactive API security testing helps organizations detect
                weaknesses early, reduce their attack surface, and avoid costly
                breaches caused by exposed endpoints and improper access
                controls. Addressing API risks before production is critical to
                maintaining trust and regulatory compliance.
              </p>
            </motion.div>

            {/* Right */}
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

      {/* ================= DETAILED SERVICE INFO CONTAINER (FIXED) ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="py-10 px-6 bg-gray-100 dark:bg-muted/30"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden rounded-3xl border border-gray-200 dark:border-border bg-white dark:bg-background shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-violet-500/10 dark:from-blue-500/20 dark:to-violet-500/20" />

            <div className="relative p-10 md:p-14 grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6">
                  How Our API Penetration Testing Works
                </h3>

                <p className="text-gray-700 dark:text-muted-foreground mb-4 leading-relaxed">
                  Our API penetration testing follows an attacker-centric
                  methodology to identify authorization bypasses, mass
                  assignment issues, injection flaws, and sensitive data
                  exposure across REST, SOAP, and GraphQL endpoints.
                </p>

                <ul className="space-y-3 text-gray-700 dark:text-muted-foreground">
                  <li>✔ API inventory and scope definition</li>
                  <li>✔ Authentication and token handling review</li>
                  <li>✔ Business logic and rate-limit testing</li>
                  <li>✔ Manual + automated vulnerability discovery</li>
                  <li>✔ Safe exploitation to validate real impact</li>
                  <li>✔ CVSS-based risk classification</li>
                </ul>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  What You Get
                </h4>

                <motion.div
                  variants={containerVariants}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  {[
                    "Executive summary with business impact and API risk exposure",
                    "Comprehensive API vulnerability report with affected endpoints",
                    "Broken Object Level Authorization (BOLA) findings",
                    "Broken Function Level Authorization (BFLA) analysis",
                    "Authentication and token handling weaknesses (JWT, OAuth, API keys)",
                    "Business logic abuse and workflow manipulation scenarios",
                    "Mass assignment and excessive data exposure issues",
                    "Injection flaws across REST, SOAP, and GraphQL APIs",
                    "Proof-of-concept request/response attack traces",
                    "CVSS v3.1 severity scoring and risk prioritization",
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      variants={cardItemVariants}
                      whileHover={{ scale: 1.03 }}
                      className="rounded-xl border border-gray-200 dark:border-border px-4 py-3 text-sm text-gray-700 dark:text-muted-foreground bg-gray-50 dark:bg-muted"
                    >
                      {item}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
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
        className="py-10 px-6 bg-gray-50 dark:bg-background transition-colors"
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
                title: "REST, SOAP and GraphQL",
                desc: "Comprehensive testing for REST, SOAP, RPC, and GraphQL APIs.",
              },
              {
                title: "Authentication and Authorization",
                desc: "Validate token handling, session management, and access control enforcement.",
              },
              {
                title: "Data Exposure and PII",
                desc: "Detect excessive data exposure and sensitive information leakage.",
              },
              {
                title: "Rate Limiting and Abuse",
                desc: "Test protection against brute force, abuse, and denial-of-service risks.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="bg-white dark:bg-muted border border-gray-200 dark:border-border rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group"
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
              How Our API Penetration Testing Works
            </h2>

            <p className="mt-4 max-w-3xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
              A methodical approach to uncovering vulnerabilities, validating
              business logic, and strengthening API security.
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
                Penetration Testing Process
              </h3>

              <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-lg">
                <li>• Information gathering and threat modeling</li>
                <li>• API mapping and business logic analysis</li>
                <li>• Manual and automated vulnerability testing</li>
                <li>• Exploitation of security weaknesses</li>
                <li>• Risk-based impact analysis</li>
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
                Continuous Improvement and Support
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
        className="py-10 px-6 text-center bg-gray-50 dark:bg-background transition-colors"
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
