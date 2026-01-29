"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const sectionReveal = {
  hidden: { opacity: 0, y: 50, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardReveal = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const floating3D = {
  animate: {
    rotateX: [0, 6, 0, -6, 0],
    rotateY: [0, -8, 0, 8, 0],
    y: [0, -10, 0, 10, 0],
  },
  transition: { duration: 12, repeat: Infinity, ease: "easeInOut" },
};

export default function EmailSecurityAuditPage() {
  return (
    <main className="w-full bg-white text-gray-900 dark:bg-background dark:text-foreground">
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

        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/65 to-black/85"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:70px_70px]" />

        <motion.div
          className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-12"
          animate={{ x: ["-30%", "30%"] }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-6 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm text-white tracking-wide"
          >
            Enterprise Email Threat Protection
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight"
          >
            Email Security Audit Services
          </motion.h1>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full my-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-sm md:text-xl text-gray-200 max-w-4xl text-center"
          >
            Securing your electronic communication channels across modern
            organizations. Our Email Security Audit services protect inboxes
            from phishing, malware, and data leakage.
          </motion.p>

          <motion.div
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.96 }}
            className="mt-10"
          >
            <Link href="/contact">
              <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition">
                Protect Your Inbox
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
        viewport={{ once: true, margin: "-120px" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={sectionReveal} className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-primary dark:text-primary">
              What is Email Security?
            </h1>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              Email security safeguards communication from unauthorized access
              and attacks. Human error contributes to nearly 90% of email-based
              security incidents across organizations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={sectionReveal} className="ml-10">
              <h2 className="text-2xl font-semibold mb-6">
                Why Email Security Matters
              </h2>

              <ul className="space-y-4 text-gray-800 dark:text-muted-foreground">
                <li>• Primary business communication channel</li>
                <li>• Phishing is the top attack vector</li>
                <li>• Human error causes breaches</li>
                <li>• Ransomware & data loss risk</li>
                <li>• Reduced business disruption</li>
              </ul>
            </motion.div>

            <motion.div
              variants={sectionReveal}
              className="flex justify-center md:justify-end mr-20 perspective-[1200px]"
            >
              <motion.img
                src="/assets/services/email-security.jpg"
                alt="Email Security Audit"
                className="w-full max-w-md rounded-xl shadow-xl"
                animate={floating3D.animate}
                transition={floating3D.transition}
                style={{ transformStyle: "preserve-3d" }}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ================= DETAILED SERVICE INFO CONTAINER – EMAIL SECURITY AUDIT ================= */}
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
                  How Our Email Security Audit Works
                </h3>

                <p className="text-gray-700 dark:text-muted-foreground mb-4 leading-relaxed">
                  Our Email Security Audit evaluates your organization’s email
                  ecosystem to identify weaknesses that attackers commonly
                  exploit for phishing, spoofing, malware delivery, and business
                  email compromise (BEC). The assessment focuses on
                  configuration, policy, and user-level risks.
                </p>

                <ul className="space-y-3 text-gray-700 dark:text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-indigo-500">✔</span>Email
                    infrastructure & gateway review
                  </li>
                  <li className="flex gap-2">
                    <span className="text-indigo-500">✔</span>SPF, DKIM & DMARC
                    configuration analysis
                  </li>
                  <li className="flex gap-2">
                    <span className="text-indigo-500">✔</span>Phishing &
                    spoofing risk assessment
                  </li>
                  <li className="flex gap-2">
                    <span className="text-indigo-500">✔</span>Malware &
                    attachment protection checks
                  </li>
                  <li className="flex gap-2">
                    <span className="text-indigo-500">✔</span>User awareness &
                    policy evaluation
                  </li>
                  <li className="flex gap-2">
                    <span className="text-indigo-500">✔</span>Risk scoring &
                    prioritized improvements
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
                    "Email security posture report",
                    "SPF / DKIM / DMARC findings",
                    "Phishing & BEC risk analysis",
                    "Misconfiguration evidence",
                    "Compliance-aligned recommendations",
                    "Step-by-step remediation guidance",
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
        className="py-20 px-6"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            variants={sectionReveal}
            className="text-4xl font-semibold mb-14 text-primary"
          >
            Our Email Security Audit Approach
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {[
              ["Train", "Educate employees on phishing resilience."],
              ["Filter", "Block spoofed and malicious emails."],
              ["Secure", "Encrypt sensitive communications."],
              ["Respond", "Detect and neutralize threats fast."],
              ["Threat Analysis", "Investigate malware and phishing trends."],
              ["Configuration Review", "Audit SPF, DKIM, DMARC & servers."],
            ].map(([title, desc], i) => (
              <motion.div
                key={i}
                variants={cardReveal}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white dark:bg-muted border border-gray-200 dark:border-border rounded-2xl p-6 shadow-md cursor-pointer overflow-hidden group"
              >
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute -left-full top-0 w-full h-full bg-gradient-to-r from-transparent via-blue-400/20 to-transparent group-hover:left-full transition-all duration-700" />
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
                  <div className="absolute inset-[-2px] rounded-2xl bg-gradient-to-br from-blue-500/40 via-violet-500/40 to-cyan-500/40 blur-md" />
                </div>

                <h3 className="relative font-semibold text-lg mb-3 text-blue-600 dark:text-blue-400">
                  {title}
                </h3>
                <p className="relative text-gray-700 dark:text-muted-foreground text-sm leading-relaxed">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ================= DETAILS ================= */}
      <motion.section
        className="py-28 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-background dark:to-background"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={sectionReveal} className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-primary">
              Our Audit Methodology
            </h2>

            <p className="mt-4 max-w-3xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
              A comprehensive evaluation of your email infrastructure to prevent
              phishing, spoofing, business email compromise, and data leakage.
            </p>

            <div className="mt-6 h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div className="relative p-8 rounded-2xl border bg-white/80 dark:bg-slate-900/70 shadow-lg">
              <h3 className="text-xl font-semibold mb-6">
                Audit & Risk Assessment
              </h3>
              <ul className="space-y-3">
                <li>• Infrastructure assessment</li>
                <li>• Threat exposure review</li>
                <li>• Staff awareness analysis</li>
                <li>• Misconfiguration detection</li>
                <li>• Incident readiness evaluation</li>
              </ul>
            </motion.div>

            <motion.div className="relative p-8 rounded-2xl border bg-white/80 dark:bg-slate-900/70 shadow-lg">
              <h3 className="text-xl font-semibold mb-6">
                Reporting & Continuous Protection
              </h3>
              <ul className="space-y-3">
                <li>• Detailed security findings</li>
                <li>• Risk scoring & prioritization</li>
                <li>• Remediation roadmap</li>
                <li>• Security awareness upgrades</li>
                <li>• Continuous protection strategy</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ================= CTA ================= */}
      <motion.section className="py-24 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Secure Every Email Before It Becomes a Threat
        </h2>

        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Protect your organization from phishing, malware, and data breaches
          with expert-led Email Security Audits.
        </p>

        <Link href="/contact">
          <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-xl">
            Talk to an Email Security Expert
          </button>
        </Link>
      </motion.section>
    </main>
  );
}
