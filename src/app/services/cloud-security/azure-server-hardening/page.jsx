"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeDiagonalLeft = {
  hidden: { opacity: 0, x: -60, y: 60 },
  show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.7 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeDiagonalRight = {
  hidden: { opacity: 0, x: 60, y: 60 },
  show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.7 } },
};

const zoomFade = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

export default function AzureServerHardeningPage() {
  return (
    <main className="w-full bg-gray-50 text-gray-900 dark:bg-background dark:text-foreground">
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

        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/45 to-black/70" />

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-24"
        >
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white"
          >
            Azure Server Hardening Services
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-sm md:text-xl text-gray-200 max-w-4xl"
          >
            Hardening your Azure cloud server with enterprise-grade
            cybersecurity protection.
          </motion.p>

          <Link href="/contact">
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 30px rgba(56,189,248,0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-10 py-3 bg-gradient-to-r from-violet-600 to-blue-600 text-white rounded-full font-semibold transition"
            >
              TALK TO OUR CLOUD EXPERT
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <motion.section
        variants={zoomFade}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        className="py-24 px-6"
      >
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-primary dark:text-primary">
            What Is Azure Cloud Server Hardening?
          </h1>
          <p className="mt-6 max-w-4xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
            Azure environments are powerful but vulnerable. Server hardening
            minimizes attack surfaces and prevents misconfigurations.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div variants={fadeDiagonalLeft}>
            <h2 className="text-2xl font-semibold text-primary mb-6">
              Benefits of Azure Server Hardening
            </h2>
            <ul className="space-y-4">
              <li>• Prevent unauthorized access</li>
              <li>• Stop lateral movement</li>
              <li>• Improve compliance</li>
              <li>• DDoS protection</li>
              <li>• Cost optimization</li>
            </ul>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={fadeDiagonalRight}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="flex justify-center"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border dark:border-slate-800 bg-white/80 dark:bg-slate-900/70 backdrop-blur">
              <img
                src="/assets/services/azure.jpg"
                alt="Azure Server Hardening"
                loading="lazy"
                className="w-[420px] max-w-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/assets/services/fallback.jpg";
                }}
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ================= DETAILED SERVICE INFO CONTAINER – AZURE SERVER HARDENING ================= */}
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
                  How Our Azure Server Hardening Works
                </h3>

                <p className="text-gray-700 dark:text-muted-foreground mb-4 leading-relaxed">
                  Our Azure Server Hardening service secures Azure virtual
                  machines and cloud workloads by applying Microsoft security
                  best practices and industry benchmarks. We reduce attack
                  surfaces, enforce least-privilege access, and harden
                  configurations to protect your Azure environment.
                </p>

                <ul className="space-y-3 text-gray-700 dark:text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-indigo-500">✔</span>Azure VM &
                    OS-level security assessment
                  </li>
                  <li className="flex gap-2">
                    <span className="text-indigo-500">✔</span>Entra ID (Azure
                    AD) roles & access hardening
                  </li>
                  <li className="flex gap-2">
                    <span className="text-indigo-500">✔</span>Network security
                    (NSGs & Azure Firewall)
                  </li>
                  <li className="flex gap-2">
                    <span className="text-indigo-500">✔</span>Patch management &
                    vulnerability mitigation
                  </li>
                  <li className="flex gap-2">
                    <span className="text-indigo-500">✔</span>Logging,
                    monitoring & Defender configuration
                  </li>
                  <li className="flex gap-2">
                    <span className="text-indigo-500">✔</span>CIS & Microsoft
                    security baseline alignment
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
                    "Azure server hardening assessment report",
                    "Hardened Azure VM & OS configurations",
                    "Secure identity & network setup",
                    "Risk & exposure reduction summary",
                    "CIS & Microsoft baseline compliance mapping",
                    "Post-hardening validation checklist",
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

      {/* ================= SERVICES GRID ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-16 px-6"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-primary mb-14">
            Our Azure Capabilities
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              "IAM Security",
              "Network Security Groups",
              "Azure Security Center",
              "Patch Management",
              "Compliance & Governance",
              "Continuous Monitoring",
            ].map((title, i) => (
              <motion.div
                key={i}
                variants={zoomFade}
                whileHover={{
                  y: -12,
                  scale: 1.04,
                  boxShadow: "0 25px 50px rgba(59,130,246,0.25)",
                }}
                className="bg-white dark:bg-muted border rounded-2xl p-6 shadow-md transition"
              >
                <h3 className="font-semibold text-lg text-blue-600 dark:text-blue-400">
                  {title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ================= CTA ================= */}
      <motion.section
        variants={zoomFade}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-24 px-6 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Secure Your Azure Cloud Today
        </h2>

        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Protect your Azure workloads with expert server hardening services.
        </p>

        <Link href="/contact">
          <motion.button
            whileHover={{
              scale: 1.15,
              boxShadow: "0 0 35px rgba(139,92,246,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-md"
          >
            Talk to an Azure Security Expert
          </motion.button>
        </Link>
      </motion.section>
    </main>
  );
}
