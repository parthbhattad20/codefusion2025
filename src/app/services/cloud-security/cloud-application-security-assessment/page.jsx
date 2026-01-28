"use client";

import Link from "next/link";
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

const zoomCard = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function CloudApplicationSecurityAssessmentPage() {
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
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/55 to-black/80"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-24"
        >
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white"
          >
            Cloud Application Security Assessment
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-sm md:text-xl text-gray-200 max-w-4xl text-left"
          >
            Expert and hassle-free CASA services to identify misconfigurations,
            security gaps, and threats across cloud applications.
          </motion.p>

          <Link href="/contact">
            <motion.button
              whileHover={{
                scale: 1.08,
                boxShadow: "0 0 30px rgba(59,130,246,0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-8 py-3 bg-gradient-to-r from-sky-500 to-blue-700 text-white rounded-lg font-semibold transition"
            >
              CONNECT WITH OUR EXPERTS
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* ================= CASA OVERVIEW ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        className="py-24 px-6 bg-gray-50 dark:bg-background"
      >
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
            What Is Cloud Application Security Assessment (CASA)?
          </h1>

          <p className="mt-6 max-w-4xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
            CASA is a framework introduced by Google to standardize cloud
            security and identify configuration weaknesses before they become
            critical incidents.
          </p>

          <p className="mt-4 max-w-4xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
            It ensures strong controls, policies, and processes for cloud
            application security.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeLeft}>
            <h2 className="text-2xl font-semibold text-primary mb-6">
              Why CASA Is Important
            </h2>

            <ul className="space-y-4 text-gray-800 dark:text-gray-200">
              <li>• Identify configuration weaknesses</li>
              <li>• Reduce breach risks</li>
              <li>• Improve regulatory compliance</li>
              <li>• Strengthen customer trust</li>
              <li>• Secure cloud integrations</li>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeRight}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            <img
              src="/assets/services/application.png"
              alt="CASA"
              className="rounded-xl shadow-xl max-w-md mx-auto"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* ================= CASA SERVICES GRID ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-16 px-6 bg-gray-50 dark:bg-background"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-primary mb-14">
            Our CASA Assessment Approach
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              "Policy Review",
              "Configuration Analysis",
              "Penetration Testing",
              "Threat Identification",
              "Risk Reduction",
              "Compliance Alignment",
            ].map((title, i) => (
              <motion.div
                key={i}
                variants={zoomCard}
                whileHover={{
                  y: -12,
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(99,102,241,0.25)",
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

      {/* ================= DETAILED SERVICE INFO CONTAINER – CLOUD APPLICATION SECURITY ASSESSMENT ================= */}
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
      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 via-transparent to-indigo-500/10 dark:from-fuchsia-500/20 dark:to-indigo-500/20" />

      <div className="relative p-10 md:p-14 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* LEFT CONTENT */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-fuchsia-600 dark:text-blue-400 mb-6">
            How Our Cloud Application Security Assessment Works
          </h3>

          <p className="text-gray-700 dark:text-muted-foreground mb-4 leading-relaxed">
            Our Cloud Application Security Assessment evaluates the security of cloud-hosted applications across
            their architecture, code, configurations, and integrations. We identify vulnerabilities, misconfigurations,
            and design flaws that could expose your applications to modern cloud-based threats.
          </p>

          <ul className="space-y-3 text-gray-700 dark:text-muted-foreground">
            <li>✔ Cloud application architecture review</li>
            <li>✔ Authentication, authorization & API security checks</li>
            <li>✔ Secure configuration & secrets management analysis</li>
            <li>✔ Data protection & encryption validation</li>
            <li>✔ Dependency, container & runtime security review</li>
            <li>✔ Risk assessment & remediation planning</li>
          </ul>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            What You Get
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Cloud application security assessment report",
              "Identified vulnerabilities & misconfigurations",
              "API & integration security findings",
              "Threat & risk impact analysis",
              "Best-practice & framework alignment",
              "Prioritized remediation recommendations",
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


      {/* ================= CASA DETAILS ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        variants={fadeUp}
        className="py-28 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-background dark:to-background"
      >
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-primary">
              Our Cloud Security Assessment Approach
            </h2>

            <p className="mt-4 max-w-3xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
              A structured methodology designed to identify risks, validate
              controls, and ensure regulatory compliance.
            </p>

            <div className="mt-6 h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-violet-500 to-indigo-500" />
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Assessment Process */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="relative p-8 rounded-2xl border border-gray-200 dark:border-slate-800
                   bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl
                   shadow-lg hover:shadow-2xl"
            >
              <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-violet-500 to-indigo-500 rounded-full" />

              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                Assessment & Testing
              </h3>

              <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-lg">
                <li>• Understand cloud architecture</li>
                <li>• Review policies and controls</li>
                <li>• Analyze access management</li>
                <li>• Perform penetration testing</li>
                <li>• Prioritize remediation</li>
              </ul>
            </motion.div>

            {/* Reporting */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="relative p-8 rounded-2xl border border-gray-200 dark:border-slate-800
                   bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl
                   shadow-lg hover:shadow-2xl"
            >
              <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-indigo-500 to-cyan-500 rounded-full" />

              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                Reporting & Compliance
              </h3>

              <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-lg">
                <li>• Detailed reporting</li>
                <li>• Risk severity analysis</li>
                <li>• CASA-aligned methodology</li>
                <li>• Remediation roadmap</li>
                <li>• Compliance recommendations</li>
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
        className="py-24 px-6 text-center bg-gray-50 dark:bg-background"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Secure Your Cloud Applications with CASA
        </h2>

        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Identify security gaps, reduce risks, and strengthen trust with expert
          CASA services.
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
