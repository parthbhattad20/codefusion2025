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
  show: { transition: { staggerChildren: 0.12 } },
};

export default function SourceCodeReviewPage() {
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
            Deep testing of source code to identify weaknesses before hackers
            exploit them. Secure your applications at the atomic level of
            software security.
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
  variants={fadeUp}
  className="relative py-10 px-6 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-background dark:to-background transition-colors overflow-hidden"
>
  {/* Decorative Glow */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 blur-3xl rounded-full" />
  </div>

  <div className="relative max-w-7xl mx-auto">
    {/* Header / Hero */}
    <div className="text-center mb-20">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-block mb-5 px-4 py-1 text-sm font-semibold tracking-wider text-primary bg-primary/10 rounded-full"
      >
        SECURE CODE ANALYSIS
      </motion.span>

      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-foreground tracking-tight">
        What is Secure Source Code Review?
      </h1>

      <p className="mt-8 max-w-5xl mx-auto text-xl leading-relaxed text-gray-700 dark:text-muted-foreground">
        Secure source code review is a proactive security practice that involves
        analyzing application source code at a logical and architectural level
        to uncover vulnerabilities, insecure design patterns, and flawed
        assumptions before attackers can exploit them. It focuses on identifying
        security issues at their root cause rather than detecting symptoms at
        runtime.
      </p>

      <p className="mt-6 max-w-5xl mx-auto text-xl leading-relaxed text-gray-700 dark:text-muted-foreground">
        By reviewing code early in the development lifecycle, organizations
        reduce breach risk, minimize costly rework, and prevent vulnerabilities
        from ever reaching production. Secure code review shifts security from a
        reactive response to an intentional design decision.
      </p>

      {/* Text-only CTA */}
      <p className="mt-6 max-w-5xl mx-auto text-xl leading-relaxed text-gray-700 dark:text-muted-foreground">
        The most effective way to secure software is to fix vulnerabilities
        before the application is deployed — not after an incident occurs.
      </p>
    </div>

    {/* Existing Content (UNCHANGED STRUCTURE) */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <motion.div variants={fadeUp} className="ml-28">
        <h2 className="text-2xl font-semibold text-primary mb-6">
          Vulnerabilities We Identify
        </h2>

        <ul className="space-y-4 text-gray-800 dark:text-muted-foreground">
          <li>• Injection flaws (SQL, NoSQL, OS command)</li>
          <li>• Cross-Site Scripting (XSS)</li>
          <li>• Cross-Site Request Forgery (CSRF)</li>
          <li>• Insecure authentication and authorization logic</li>
          <li>• Broken access control and privilege escalation</li>
          <li>• Logic flaws and improper data validation</li>
        </ul>
      </motion.div>

      <motion.div
        variants={fadeUp}
        whileHover={{ scale: 1.05 }}
        className="flex justify-center md:justify-end mr-20"
      >
        <img
          src="/assets/services/wapt.webp"
          alt="Source Code Review"
          className="w-full max-w-md rounded-xl shadow-lg transition"
        />
      </motion.div>
    </div>
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

          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {[
              {
                title: "Early Vulnerability Detection",
                desc: "Identify security flaws at the earliest stage to reduce remediation cost and risk.",
              },
              {
                title: "Business & Reputation Protection",
                desc: "Prevent breaches that could damage customer trust and brand reputation.",
              },
              {
                title: "Compliance & Legal Readiness",
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
                variants={fadeUp}
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
        variants={fadeUp}
        className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-background dark:to-background"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-primary">
              How Our Source Code Review Works
            </h2>

            <p className="mt-4 max-w-3xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
              Deep security analysis to uncover vulnerabilities hidden within
              your application logic.
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
                Review & Analysis
              </h3>

              <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-lg">
                <li>• Assess application architecture and codebase</li>
                <li>• Perform manual and automated code analysis</li>
                <li>• Identify vulnerabilities at the root level</li>
                <li>• Validate security controls and logic flows</li>
                <li>• Prioritize risks based on business impact</li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="relative p-8 rounded-2xl border border-gray-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl shadow-lg hover:shadow-2xl"
            >
              <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-indigo-500 to-fuchsia-500 rounded-full" />

              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                Reporting & Continuous Monitoring
              </h3>

              <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-lg mb-6">
                <li>• Detailed vulnerability findings</li>
                <li>• Secure coding recommendations</li>
                <li>• Developer-friendly remediation guidance</li>
                <li>• Risk severity & impact analysis</li>
              </ul>

              <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                Continuous assessments to proactively identify new
                vulnerabilities as the codebase evolves.
              </p>
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
    </main>
  );
}
