"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const sectionReveal = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardReveal = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const floating3D = {
  animate: {
    rotateX: [0, 6, 0, -6, 0],
    rotateY: [0, -8, 0, 8, 0],
    y: [0, -10, 0, 10, 0],
  },
  transition: { duration: 12, repeat: Infinity, ease: "easeInOut" },
};

export default function DPDPACompliancePage() {
  return (
    <main className="w-full bg-white text-gray-900 dark:bg-background dark:text-foreground">
      {/* ================= PREMIUM HERO ================= */}
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
          className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:60px_60px]" />

        <motion.div
          className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-12"
          animate={{ x: ["-30%", "30%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-32">
          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-6 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm text-white tracking-wide"
          >
            India Digital Personal Data Protection Act
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight"
          >
            DPDPA Compliance Services
          </motion.h1>

          {/* Accent line */}
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full my-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-sm md:text-xl text-gray-200 max-w-4xl text-center"
          >
            Achieve compliance with India’s Digital Personal Data Protection Act
            (DPDPA) using structured governance, consent management, and
            risk-based security controls.
          </motion.p>

          {/* CTA */}
          <motion.div
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
            className="mt-10"
          >
            <Link href="/contact">
              <button className="px-10 py-4 bg-gradient-to-r from-indigo-700 to-fuchsia-400 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition">
                Consult DPDPA Expert
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
              What is DPDPA?
            </h1>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              The Digital Personal Data Protection Act (DPDPA) of India governs
              lawful processing, storage, and protection of personal data.
            </p>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              It enforces consent-based processing, individual rights,
              accountability, breach reporting, and strong penalties for
              non-compliance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={sectionReveal} className="ml-10">
              <h2 className="text-2xl font-semibold mb-6 text-primary">
                Why DPDPA Compliance Matters
              </h2>

              <ul className="space-y-4 text-gray-800 dark:text-muted-foreground">
                <li>• Protect personal data of Indian data principals</li>
                <li>• Avoid statutory penalties</li>
                <li>• Build stakeholder trust</li>
                <li>• Reduce breach risks</li>
                <li>• Enable cross-border operations</li>
              </ul>
            </motion.div>

            {/* 3D Floating Image */}
            <motion.div
              variants={sectionReveal}
              className="flex justify-center md:justify-end mr-20 perspective-[1200px]"
            >
              <motion.img
                src="/assets/services/dpdpa.avif"
                alt="DPDPA Compliance"
                className="w-full max-w-md rounded-xl shadow-xl"
                animate={floating3D.animate}
                transition={floating3D.transition}
                style={{ transformStyle: "preserve-3d" }}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ================= DPDPA COMPLIANCE SNAPSHOT ================= */}
      <motion.section
        className="py-24 px-6 bg-orange-50 dark:bg-neutral-950 border-t border-b border-orange-200 dark:border-neutral-800"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <motion.div variants={sectionReveal} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-primary">
              DPDPA Compliance Framework
            </h2>

            <p className="mt-4 max-w-3xl mx-auto text-orange-900/80 dark:text-gray-300 text-lg">
              A governance-driven compliance model aligned with India’s Digital
              Personal Data Protection Act.
            </p>
          </motion.div>

          {/* Lifecycle */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-16">
            {[
              ["Identify", "Personal data & processing activities"],
              ["Map", "Data flows & storage locations"],
              ["Consent", "Lawful consent design"],
              ["Secure", "Technical & organizational controls"],
              ["Monitor", "Ongoing compliance & audits"],
            ].map(([title, desc], i) => (
              <motion.div
                key={i}
                variants={cardReveal}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 160, damping: 16 }}
                className="rounded-2xl border border-orange-200 dark:border-neutral-700
                     bg-white dark:bg-neutral-900 p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="mb-2 text-xs font-semibold tracking-wide text-primary dark:text-primary">
                  Phase {i + 1}
                </div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {title}
                </h3>

                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Deliverables */}
          <motion.div variants={sectionReveal}>
            <div
              className="rounded-3xl border border-orange-200 dark:border-neutral-700
                      bg-white dark:bg-neutral-900 p-10 shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-primary dark:text-primary mb-6">
                What You Receive
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "DPDPA readiness assessment report",
                  "Personal data inventory",
                  "Consent management framework",
                  "Data principal rights workflows",
                  "Breach notification procedures",
                  "Privacy policy & notices",
                  "DPO & governance structure",
                  "Audit & compliance documentation",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-orange-200 dark:border-neutral-700
                         px-4 py-3 text-sm bg-orange-100/60 dark:bg-neutral-800
                         text-gray-900 dark:text-gray-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ================= SERVICES ================= */}
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
            Our DPDPA Compliance Capabilities
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {[
              [
                "DPDPA Gap Assessment",
                "Identify compliance gaps across data processing activities.",
              ],
              ["Consent Management", "Design lawful consent mechanisms."],
              [
                "Data Principal Rights",
                "Enable access, correction, erasure & grievance handling.",
              ],
              [
                "Privacy Policy & Notices",
                "Implement DPDPA-compliant documentation.",
              ],
              [
                "Breach Response Planning",
                "Prepare notification & incident workflows.",
              ],
              [
                "DPO & Governance Support",
                "Establish accountability frameworks.",
              ],
            ].map(([title, desc], i) => (
              <motion.div
                key={i}
                variants={cardReveal}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
                }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative bg-white dark:bg-muted border border-gray-200 dark:border-border rounded-2xl p-6 shadow-sm cursor-pointer overflow-hidden group"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
                  <div className="absolute inset-[-1px] rounded-2xl blur-sm" />
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
          className="text-3xl md:text-4xl font-bold mb-4 text-primary"
        >
          Comply With Confidence Under DPDPA
        </motion.h2>

        <motion.p
          variants={sectionReveal}
          className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground"
        >
          Protect personal data, meet legal obligations, and build trust with
          structured DPDPA compliance.
        </motion.p>

        <motion.div variants={sectionReveal} whileHover={{ scale: 1.08 }}>
          <Link href="/contact">
            <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-xl">
              Talk to a DPDPA Expert
            </button>
          </Link>
        </motion.div>
      </motion.section>
    </main>
  );
}
