"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -70 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 70 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const cardAnim = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function CloudSecurityPage() {
  return (
    <main className="w-full bg-gray-50 dark:bg-background text-gray-900 dark:text-foreground">
      {/* ================= HERO ================= */}
      <section className="relative h-screen overflow-hidden mt-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/videos/main.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/55 to-black/80"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
        >
          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-32"
          >
            Cloud Security Services
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-3 text-sm md:text-xl text-gray-200 max-w-4xl text-left"
          >
            Secure your cloud infrastructure, applications, and data with
            enterprise-grade cloud security consulting. Our experts protect AWS,
            Azure, and Google Cloud environments.
          </motion.p>

          <Link href="/contact">
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 30px rgba(59,130,246,0.7)",
              }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg font-semibold"
            >
              SPEAK WITH AN EXPERT
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-24 px-6"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
            Cloud Security Consulting & Protection
          </h2>

          <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
            Our Cloud Security Services help organizations securely adopt cloud
            technologies while maintaining compliance, visibility, and control.
          </p>
        </div>
      </motion.section>

      {/* ================= WHY CLOUD SECURITY ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-24 px-6"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeLeft} className="ml-10">
            <h2 className="text-2xl font-semibold text-primary mb-6">
              Why Cloud Security Matters
            </h2>

            <ul className="space-y-4 text-gray-800 dark:text-gray-200">
              <li>• Prevent cloud misconfigurations</li>
              <li>• Protect sensitive data and workloads</li>
              <li>• Maintain regulatory compliance</li>
              <li>• Detect threats in real time</li>
              <li>• Reduce cloud attack surface</li>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeRight}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="flex justify-center md:justify-end mr-20"
          >
            <img
              src="/assets/services/cloud_security.webp"
              alt="Cloud Security"
              className="w-full max-w-lg rounded-xl shadow-lg dark:shadow-blue-900/30"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* ================= SERVICES GRID ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-24 px-6"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-primary mb-14">
            Our Cloud Security Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              [
                "Cloud Security Assessment",
                "Identify risks and misconfigurations.",
              ],
              [
                "Cloud Compliance & Governance",
                "Ensure regulatory compliance.",
              ],
              [
                "Cloud Identity & Access Management",
                "Least privilege IAM strategies.",
              ],
              [
                "Cloud Workload Protection",
                "Secure VMs, containers & serverless.",
              ],
              ["Cloud Threat Detection", "Real-time monitoring & detection."],
              [
                "Secure Cloud Architecture",
                "Design secure scalable architectures.",
              ],
            ].map(([title, desc], i) => (
              <motion.div
                key={i}
                variants={cardAnim}
                whileHover={{
                  y: -12,
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(99,102,241,0.25)",
                }}
                className="bg-white dark:bg-muted border border-gray-200 dark:border-border rounded-2xl p-6 shadow-md transition"
              >
                <h3 className="font-semibold text-lg mb-3 text-blue-600 dark:text-blue-400">
                  {title}
                </h3>
                <p className="text-gray-700 dark:text-muted-foreground text-sm">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ================= DETAILS ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        className="py-28 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-background dark:to-background"
      >
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-sky-600 dark:text-sky-400">
              What Our Cloud Security Covers
            </h2>

            <p className="mt-4 max-w-3xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
              Comprehensive protection across infrastructure, applications,
              data, and operations.
            </p>

            <div className="mt-6 h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-sky-500 to-indigo-500" />
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Coverage Area 1 */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="relative p-8 rounded-2xl border border-gray-200 dark:border-slate-800
                   bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl
                   shadow-lg hover:shadow-2xl"
            >
              <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-sky-500 to-indigo-500 rounded-full" />

              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                Infrastructure & Operations
              </h3>

              <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-lg">
                <li>• Cloud infrastructure security</li>
                <li>• Secure DevOps & CI/CD pipelines</li>
                <li>• Data encryption & key management</li>
                <li>• Logging, monitoring & alerting</li>
                <li>• Cloud incident response</li>
              </ul>
            </motion.div>

            {/* Coverage Area 2 */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="relative p-8 rounded-2xl border border-gray-200 dark:border-slate-800
                   bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl
                   shadow-lg hover:shadow-2xl"
            >
              <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-indigo-500 to-cyan-500 rounded-full" />

              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                Platforms & Architecture
              </h3>

              <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-lg">
                <li>• AWS, Azure & GCP security</li>
                <li>• Cloud risk management</li>
                <li>• Zero Trust cloud architecture</li>
                <li>• Multi-cloud & hybrid security</li>
                <li>• Ongoing cloud security monitoring</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ================= CTA ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-24 px-6 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Secure Your Cloud Environment
        </h2>

        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Protect your cloud infrastructure with expert-led cloud security
          solutions.
        </p>

        <Link href="/contact">
          <motion.button
            whileHover={{
              scale: 1.12,
              boxShadow: "0 0 35px rgba(139,92,246,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-md"
          >
            Talk to a Cloud Security Expert
          </motion.button>
        </Link>
      </motion.section>
    </main>
  );
}
