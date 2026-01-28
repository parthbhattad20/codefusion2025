"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const sectionReveal = {
  hidden: { opacity: 0, y: 50, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9 },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardReveal = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const floating3D = {
  animate: {
    rotateX: ["0deg", "6deg", "0deg", "-6deg", "0deg"],
    rotateY: ["0deg", "-8deg", "0deg", "8deg", "0deg"],
    y: [0, -10, 0, 10, 0],
  },
  transition: { duration: 14, repeat: Infinity, ease: "easeInOut" },
};

export default function FirewallAuditPage() {
  return (
    <main className="w-full bg-white text-gray-900 dark:bg-background dark:text-foreground">
      {/* ================= HERO ================= */}
      <section className="relative h-screen overflow-hidden bg-[#0b0707]">
        {/* Firewall grid */}
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#ff450022_1px,transparent_1px),linear-gradient(to_bottom,#ff450022_1px,transparent_1px)] bg-[size:90px_90px]" />

        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/videos/main.mp4" type="video/mp4" />
        </video>

        {/* Breach scan beam */}
        <motion.div
          className="absolute inset-x-0 h-[35%] bg-gradient-to-b from-transparent via-red-500/15 to-transparent"
          animate={{ y: ["-40%", "140%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        {/* Shield pulse glow */}
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,80,80,0.08),transparent_65%)]"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        <div className="relative z-10 h-full flex flex-col justify-center px-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-6 px-4 py-2 rounded-full border border-red-400/30 bg-red-400/10 text-red-300 text-sm tracking-widest"
          >
            NETWORK DEFENSE
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight max-w-4xl"
          >
            Firewall <br /> Security Audit
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-gray-300 max-w-3xl text-lg"
          >
            Identify misconfigurations, eliminate exposure, and fortify your
            network perimeter against unauthorized access and cyber attacks.
          </motion.p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="mt-10"
          >
            <Link href="/contact">
              <button className="px-10 py-4 rounded-full bg-red-600 hover:bg-red-500 transition text-white font-semibold shadow-lg">
                Request Audit
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <motion.section
        className="py-24 px-6"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={sectionReveal} className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
              What is a Firewall Security Audit?
            </h1>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              A firewall audit evaluates your firewall rules, configurations,
              and traffic handling to ensure your network is protected from
              unauthorized access, denial-of-service attacks, and internal
              misconfigurations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={sectionReveal} className="ml-10">
              <h2 className="text-2xl font-semibold mb-6">
                Why Firewall Audits Matter
              </h2>

              <ul className="space-y-4 text-gray-800 dark:text-gray-200">
                <li>• Strengthen network perimeter security</li>
                <li>• Detect rule misconfigurations</li>
                <li>• Improve traffic visibility</li>
                <li>• Maintain compliance</li>
                <li>• Reduce breach probability</li>
              </ul>
            </motion.div>

            <motion.div
              variants={sectionReveal}
              className="flex justify-center md:justify-end mr-20 perspective-[1200px]"
            >
              <motion.img
                src="/assets/services/cyber_f.jpg"
                alt="Firewall Security Audit"
                className="w-full max-w-md rounded-xl shadow-xl"
                animate={floating3D.animate}
                transition={floating3D.transition}
                style={{ transformStyle: "preserve-3d" }}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ================= FIREWALL AUDIT WORKFLOW ================= */}
      <motion.section
        className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-[#fff5f5] to-white dark:from-background dark:to-background"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* background glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-500/10 blur-[160px] rounded-full" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
          {/* LEFT – Sticky intro panel */}
          <motion.div
            variants={sectionReveal}
            className="lg:sticky lg:top-32 self-start"
          >
            <span className="inline-block mb-4 px-4 py-1 rounded-full text-sm bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400">
              Firewall Audit Framework
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
              How We Audit and Strengthen
              <br />
              Your Network Perimeter
            </h2>

            <p className="mt-6 text-lg text-gray-700 dark:text-muted-foreground max-w-md">
              A firewall audit is not a single scan. It is a structured
              technical review of architecture, rules, access paths, and
              operational controls that determine how traffic is truly handled.
            </p>

            <div className="mt-10 p-6 rounded-2xl border border-red-200 dark:border-border bg-white/70 dark:bg-muted/40 backdrop-blur shadow-sm">
              <p className="text-sm text-gray-700 dark:text-muted-foreground">
                This methodology applies to:
              </p>
              <ul className="mt-3 space-y-2 text-sm text-gray-800 dark:text-gray-300">
                <li>• Traditional firewalls</li>
                <li>• Next-generation firewalls (NGFW)</li>
                <li>• Cloud security groups & gateways</li>
                <li>• Internal segmentation firewalls</li>
              </ul>
            </div>
          </motion.div>

          {/* RIGHT – Timeline workflow */}
          <motion.div variants={stagger} className="relative">
            {/* vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-red-300 via-red-400 to-orange-400" />

            {[
              {
                step: "01",
                title: "Environment Discovery",
                desc: "Identify firewall devices, network zones, routing paths, and protected assets across data centers, cloud, and branch networks.",
              },
              {
                step: "02",
                title: "Rulebase & Policy Analysis",
                desc: "Review thousands of rules to detect excessive permissions, unused entries, shadowed rules, and risky access patterns.",
              },
              {
                step: "03",
                title: "Access Path Validation",
                desc: "Verify which systems are reachable from external and internal networks and whether those paths are justified.",
              },
              {
                step: "04",
                title: "Logging & Detection Review",
                desc: "Ensure security events are properly logged, retained, and capable of triggering alerts during attacks.",
              },
              {
                step: "05",
                title: "Change Control Assessment",
                desc: "Analyze how firewall changes are requested, approved, and deployed to reduce configuration drift.",
              },
              {
                step: "06",
                title: "Risk Classification & Reporting",
                desc: "Findings are prioritized based on exploitability and business impact with clear remediation guidance.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={cardReveal}
                className="relative pl-16 pb-14"
              >
                {/* dot */}
                <div className="absolute left-[9px] top-2 w-4 h-4 rounded-full bg-red-500 border-4 border-white dark:border-background shadow" />

                <div className="bg-white dark:bg-muted border border-gray-200 dark:border-border rounded-xl p-6 shadow-sm hover:shadow-md transition">
                  <div className="text-sm font-semibold text-red-600 dark:text-red-400">
                    Step {item.step}
                  </div>

                  <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-gray-700 dark:text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ================= SERVICES GRID ================= */}
      <motion.section
        className="py-20 px-6"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            variants={sectionReveal}
            className="text-4xl font-semibold mb-14"
          >
            Our Firewall Audit Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {[
              [
                "Review Documentation",
                "Verify firewall policies and configurations",
              ],
              ["Test Rules", "Validate traffic filtering accuracy"],
              ["Review Logs", "Analyze suspicious activity"],
              ["Assess Vulnerabilities", "Identify exploitable weaknesses"],
              ["Compliance & Reporting", "Ensure regulatory alignment"],
              ["Continuous Improvement", "Enhance security posture"],
            ].map(([title, desc], i) => (
              <motion.div
                key={i}
                variants={cardReveal}
                whileHover={{
                  y: -6,
                  rotateX: "6deg",
                  rotateY: "-6deg",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                }}
                className="relative group bg-white dark:bg-muted border border-gray-200 dark:border-border rounded-2xl p-6 shadow-sm overflow-hidden transition-all duration-300"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-red-500/10 to-orange-500/10" />

                <h3 className="font-semibold text-lg mb-3 text-blue-600 dark:text-blue-400">
                  {title}
                </h3>
                <p className="text-gray-700 dark:text-muted-foreground text-sm leading-relaxed">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ================= CTA ================= */}
      <motion.section
        className="py-24 px-6 text-center"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h2
          variants={sectionReveal}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Protect Your Network Frontier
        </motion.h2>

        <motion.p
          variants={sectionReveal}
          className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground"
        >
          Ensure your firewall stands strong against evolving cyber threats.
        </motion.p>

        <motion.div variants={sectionReveal} whileHover={{ scale: 1.08 }}>
          <Link href="/contact">
            <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-xl">
              Request Firewall Audit
            </button>
          </Link>
        </motion.div>
      </motion.section>
    </main>
  );
}
