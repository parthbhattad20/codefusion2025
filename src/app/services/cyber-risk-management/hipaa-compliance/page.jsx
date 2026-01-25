"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const reveal = {
  hidden: { opacity: 0, y: 30, z: -40 },
  show: {
    opacity: 1,
    y: 0,
    z: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const floating3D = {
  animate: {
    rotateX: [0, 8, 0, -8, 0],
    rotateY: [0, -10, 0, 10, 0],
    y: [0, -10, 0, 10, 0],
  },
  transition: {
    duration: 10,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export default function HIPAACompliancePage() {
  return (
    <main className="w-full bg-white text-gray-900 dark:bg-background dark:text-foreground">
      {/* ================= HERO ================= */}
      <section className="relative h-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/assets/videos/iso27001.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-black/70"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-70">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white"
          >
            HIPAA Compliance Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-sm md:text-xl text-gray-200 max-w-4xl text-left"
          >
            Ensure secure healthcare data transfer, build patient trust, and
            stay compliant with HIPAA regulations in the UAE.
          </motion.p>

          <motion.div whileHover={{ scale: 1.06 }}>
            <Link href="/contact">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition mt-6 shadow-lg">
                Speak with an Expert
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
          <motion.div variants={reveal} className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
              What is HIPAA?
            </h1>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              HIPAA – the Health Insurance Portability and Accountability Act –
              protects sensitive health information and ensures secure patient
              data handling.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={reveal} className="ml-10">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-foreground">
                Why HIPAA Compliance Matters
              </h2>

              <ul className="space-y-4 text-gray-800 dark:text-muted-foreground">
                <li>• Protect patient health information (PHI)</li>
                <li>• Avoid compliance penalties</li>
                <li>• Build patient trust</li>
                <li>• Secure healthcare systems</li>
                <li>• Strengthen cybersecurity posture</li>
              </ul>
            </motion.div>

            {/* 3D Floating Image */}
            <motion.div
              variants={reveal}
              className="flex justify-center md:justify-end mr-20 perspective-[1200px]"
            >
              <motion.img
                src="/assets/services/hipaa-overview.jpg"
                alt="HIPAA Compliance"
                className="w-full max-w-md rounded-xl shadow-xl"
                animate={floating3D.animate}
                transition={floating3D.transition}
                style={{ transformStyle: "preserve-3d" }}
              />
            </motion.div>
          </div>
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
            variants={reveal}
            className="text-4xl font-semibold mb-14 text-gray-900 dark:text-foreground"
          >
            Our HIPAA Compliance Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {[
              [
                "Asset & Service Identification",
                "Determine what assets and employees handle PHI.",
              ],
              [
                "HIPAA Gap Assessment",
                "Identify compliance gaps and vulnerabilities.",
              ],
              [
                "Cyber Risk Assessment",
                "Evaluate risks to patient information.",
              ],
              ["Penetration Testing", "Detect infrastructure vulnerabilities."],
              ["Risk Treatment Plan", "Create actionable mitigation plans."],
              ["Policies & Procedures", "Implement security policies for PHI."],
              ["Technology Implementation", "Deploy security controls."],
              [
                "Disaster Recovery Planning",
                "Prepare incident recovery strategies.",
              ],
            ].map(([title, desc], i) => (
              <motion.div
                key={i}
                variants={reveal}
                whileHover={{ rotateX: 6, rotateY: -6, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 120, damping: 14 }}
                className="bg-white dark:bg-muted border border-gray-200 dark:border-border rounded-2xl p-6 shadow-md cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
              >
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

      {/* ================= HOW IT WORKS ================= */}
      <motion.section
        className="py-24 px-20"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={reveal}
            className="text-center text-2xl md:text-3xl font-bold mb-16 text-gray-900 dark:text-foreground"
          >
            How Our HIPAA Compliance Engagement Works
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <motion.ul
              variants={reveal}
              className="space-y-6 text-gray-800 dark:text-muted-foreground text-lg leading-relaxed"
            >
              <li>• Identify PHI assets</li>
              <li>• Perform risk assessments</li>
              <li>• Conduct penetration testing</li>
              <li>• Implement controls</li>
              <li>• Maintain compliance</li>
            </motion.ul>

            <motion.ul
              variants={reveal}
              className="space-y-6 ml-20 text-gray-800 dark:text-muted-foreground text-lg leading-relaxed"
            >
              <li className="font-semibold">• Continuous Improvement</li>
              <li>○ Regular audits</li>
              <li>○ Employee training</li>
              <li>○ Continuous monitoring</li>
              <li>○ Rapid remediation</li>
            </motion.ul>
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
          variants={reveal}
          className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-foreground"
        >
          Protect Patient Data & Ensure HIPAA Compliance
        </motion.h2>

        <motion.p
          variants={reveal}
          className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground"
        >
          Stay compliant, safeguard sensitive health information, and enhance
          trust with Wattlecorp HIPAA experts.
        </motion.p>

        <motion.div variants={reveal} whileHover={{ scale: 1.08 }}>
          <Link href="/contact">
            <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-xl">
              Speak With a HIPAA Expert
            </button>
          </Link>
        </motion.div>
      </motion.section>
    </main>
  );
}
