"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

export default function ContainerSecurityPage() {
  return (
    <main className="w-full bg-gray-50 dark:bg-background text-gray-900 dark:text-gray-100">
      {/* HERO */}
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
            Container Security Services
          </h1>

          <p className="mt-6 max-w-4xl text-lg text-gray-200">
            Protect your containerized applications from vulnerabilities and
            threats with enterprise-grade container security services.
          </p>

          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="mt-6 px-8 py-3 bg-gradient-to-r from-violet-500 to-blue-600 text-white rounded-lg font-semibold"
            >
              CONNECT WITH OUR EXPERTS
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* OVERVIEW */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-24 px-6"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-primary">
            What Is Docker Container Security?
          </h2>

          <p className="mt-6 max-w-4xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            Container security protects containerized applications across CI/CD
            pipelines, infrastructure, runtime and lifecycle management.
          </p>

          <p className="mt-4 max-w-4xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            A single compromised container can become an entry point to your
            entire infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-16 items-center">
          <motion.div variants={fadeLeft}>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              Benefits
            </h3>

            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li>• Secure containerized applications</li>
              <li>• Improve IT security posture</li>
              <li>• Detect lifecycle vulnerabilities</li>
              <li>• Protect cloud & on-prem environments</li>
              <li>• Strengthen pipelines & runtime hosts</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeRight} className="flex justify-center">
            <img
              src="/assets/services/cloud_security.webp"
              className="rounded-xl shadow-xl max-w-md"
              alt="Container security"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* ================= DETAILED SERVICE INFO CONTAINER – CONTAINER SECURITY ================= */}
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
                  How Our Container Security Works
                </h3>

                <p className="text-gray-700 dark:text-muted-foreground mb-4 leading-relaxed">
                  Our Container Security service protects your containerized
                  environments across the entire lifecycle—from image creation
                  to runtime execution. We identify vulnerabilities,
                  misconfigurations, and insecure practices that could lead to
                  container escape, data exposure, or cluster compromise.
                </p>

                <ul className="space-y-3 text-gray-700 dark:text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-indigo-500">✔</span>Secure container
                    image & base image assessment
                  </li>
                  <li className="flex gap-2">
                    <span className="text-indigo-500">✔</span>Dockerfile & build
                    pipeline security review
                  </li>
                  <li className="flex gap-2">
                    <span className="text-indigo-500">✔</span>Kubernetes cluster
                    & workload hardening
                  </li>
                  <li className="flex gap-2">
                    <span className="text-indigo-500">✔</span>Secrets management
                    & sensitive data protection
                  </li>
                  <li className="flex gap-2">
                    <span className="text-indigo-500">✔</span>Runtime security &
                    container behavior analysis
                  </li>
                  <li className="flex gap-2">
                    <span className="text-indigo-500">✔</span>Policy enforcement
                    & least-privilege controls
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
                    "Container image vulnerability assessment",
                    "Kubernetes security posture review",
                    "Misconfiguration & risk identification",
                    "Runtime threat detection insights",
                    "Compliance-ready security findings",
                    "Clear remediation & hardening guidance",
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

      {/* SERVICES */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20 px-6"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-14 text-gray-900 dark:text-primary">
            Our Capabilities
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              ["Image Security", "Scan container images for vulnerabilities."],
              [
                "Orchestration Security",
                "RBAC, secrets and network policy enforcement.",
              ],
              [
                "Runtime Monitoring",
                "Detect suspicious behavior in real time.",
              ],
              ["CI/CD Security", "Secure build pipelines and image signing."],
              ["Infrastructure Protection", "Protect hosts and platforms."],
              ["Compliance", "Meet regulatory standards."],
            ].map(([title, desc], i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-xl p-6 shadow-md"
              >
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  {title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-24 text-center px-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary dark:primary">
          Protect Your Containers Today
        </h2>

        <p className="mt-4 max-w-xl mx-auto text-lg text-gray-700 dark:text-gray-300">
          Secure your container infrastructure with enterprise-grade security
          services.
        </p>

        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.12 }}
            className="mt-6 px-10 py-3 rounded-full bg-gradient-to-r from-violet-500 to-blue-600 text-white font-semibold"
          >
            Talk to a Security Expert
          </motion.button>
        </Link>
      </motion.section>
    </main>
  );
}
