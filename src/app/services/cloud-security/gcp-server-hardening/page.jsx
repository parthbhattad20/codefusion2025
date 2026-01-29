"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function GCPServerHardeningPage() {
  return (
    <main className="w-full bg-gray-50 dark:bg-background text-gray-900 dark:text-gray-100">
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
        <div className="absolute inset-0 bg-black/70" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            GCP Server Hardening Services
          </h1>

          <p className="mt-6 max-w-4xl text-lg text-gray-200">
            Keep your Google Cloud Platform secure with expert server hardening
            strategies for businesses.
          </p>

          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-8 py-3 bg-gradient-to-r from-violet-500 to-blue-600 text-white rounded-lg font-semibold shadow-lg"
            >
              TALK TO OUR CLOUD EXPERT
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="py-24 px-6"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-primary">
            What Is Cloud Server Hardening for GCP?
          </h2>

          <p className="mt-6 max-w-4xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            Google Cloud Platform (GCP) provides powerful cloud infrastructure,
            but securing your assets remains the responsibility of your
            business. Server hardening ensures access control, audit readiness,
            and adherence to CIS benchmarks.
          </p>

          <p className="mt-4 max-w-4xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            Proper hardening protects sensitive information, ensures
            confidentiality and integrity, supports compliance, optimizes costs,
            and enhances incident response capabilities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <motion.div variants={fadeLeft} className="text-left">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Benefits of GCP Server Hardening
              </h3>

              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li>
                  • Safeguard data with robust encryption and access controls
                </li>
                <li>• Ensure service continuity and effective backups</li>
                <li>• Optimize operational costs and cloud resource usage</li>
                <li>• Strengthen incident response and threat mitigation</li>
                <li>• Demonstrate compliance and organizational resilience</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeRight} className="flex justify-center">
              <img
                src="/assets/services/nt.jpg"
                alt="GCP Server Hardening"
                className="w-full max-w-md rounded-xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ================= SERVICES GRID ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="py-20 px-6"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-primary mb-14">
            Our GCP Server Hardening Capabilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              [
                "Discovery & Mapping",
                "Identify and categorize all cloud assets based on type and criticality.",
              ],
              [
                "Vulnerability Assessment",
                "Detect vulnerabilities using advanced tools and best practices.",
              ],
              [
                "Penetration Testing",
                "Validate vulnerabilities to determine real-world risk.",
              ],
              [
                "Access & Identity Management",
                "Enforce least privilege and monitor user roles.",
              ],
              [
                "Reporting & Remediation",
                "Deliver actionable security improvement plans.",
              ],
              [
                "Continuous Monitoring",
                "Detect threats in real time and respond efficiently.",
              ],
            ].map(([title, desc], i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10, scale: 1.04 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-xl p-6 shadow-md"
              >
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  {title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ================= DETAILED SERVICE INFO CONTAINER – GCP SERVER HARDENING ================= */}
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
                  How Our GCP Server Hardening Works
                </h3>

                <p className="text-gray-700 dark:text-muted-foreground mb-4 leading-relaxed">
                  Our GCP Server Hardening service secures your Google Cloud
                  infrastructure by applying industry best practices, CIS
                  benchmarks, and cloud-native security controls. We minimize
                  attack surfaces, eliminate misconfigurations, and strengthen
                  your servers against real-world threats.
                </p>

                <ul className="space-y-3 text-gray-700 dark:text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-indigo-500">✔</span>Secure Compute
                    Engine VM configurations
                  </li>
                  <li className="flex gap-2">
                    <span className="text-indigo-500">✔</span>IAM roles &
                    least-privilege access enforcement
                  </li>
                  <li className="flex gap-2">
                    <span className="text-indigo-500">✔</span>Network firewall
                    rules & VPC security review
                  </li>
                  <li className="flex gap-2">
                    <span className="text-indigo-500">✔</span>OS-level hardening
                    & patch management
                  </li>
                  <li className="flex gap-2">
                    <span className="text-indigo-500">✔</span>Logging,
                    monitoring & alerting enablement
                  </li>
                  <li className="flex gap-2">
                    <span className="text-indigo-500">✔</span>Compliance
                    alignment (CIS, ISO, SOC)
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
                    "Hardened GCP VM & server configurations",
                    "IAM & access control review report",
                    "Firewall & network security validation",
                    "Identified risks & misconfigurations",
                    "Compliance-ready hardening checklist",
                    "Actionable remediation & best practices",
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
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        className="py-28 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-background dark:to-background"
      >
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-primary">
              GCP Hardening & Risk Reduction
            </h2>

            <p className="mt-4 max-w-3xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
              A structured, security-first approach to protecting your Google
              Cloud infrastructure.
            </p>

            <div className="mt-6 h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-sky-500 to-indigo-500" />
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Process */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="relative p-8 rounded-2xl border border-gray-200 dark:border-slate-800
                   bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl
                   shadow-lg hover:shadow-2xl"
            >
              <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-indigo-500 to-fuchsia-500 rounded-full" />

              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                Engagement Process
              </h3>

              <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-lg">
                <li>• Discover and map all cloud assets</li>
                <li>• Perform vulnerability assessments</li>
                <li>• Conduct penetration testing</li>
                <li>• Apply secure configurations</li>
                <li>• Monitor and remediate continuously</li>
              </ul>
            </motion.div>

            {/* Operations */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="relative p-8 rounded-2xl border border-gray-200 dark:border-slate-800
                   bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl
                   shadow-lg hover:shadow-2xl"
            >
              <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-indigo-500 to-fuchsia-500 rounded-full" />

              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                Secure Cloud Operations
              </h3>

              <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-lg">
                <li>• CIS benchmark alignment</li>
                <li>• Threat detection & mitigation</li>
                <li>• Backup & disaster recovery</li>
                <li>• Cost optimization</li>
                <li>• Enhanced incident response</li>
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
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Protect Your GCP Cloud Infrastructure Today
        </h2>

        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
          Ensure your Google Cloud environment is hardened, compliant, and
          secure with our expert services.
        </p>

        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-lg"
          >
            Talk to a GCP Security Expert
          </motion.button>
        </Link>
      </motion.section>
    </main>
  );
}
