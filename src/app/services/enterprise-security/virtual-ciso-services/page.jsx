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
  hidden: { opacity: 0, y: 25 },
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

export default function VCISOPage() {
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
            Executive Cybersecurity Leadership
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight"
          >
            Virtual CISO Services
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
            Vulnuris Virtual CISO Program services assist executives and
            security teams in safeguarding information assets while supporting
            business operations. We provide certified virtual CISOs and
            dedicated expert support as part of your team, saving you time and
            money on hiring security talent.
          </motion.p>

          <motion.div
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.96 }}
            className="mt-10"
          >
            <Link href="/contact">
              <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition">
                Speak With an Expert
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ================= VCISO PROGRAM SERVICES ================= */}
      <motion.section
        className="py-24 px-6"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={sectionReveal} className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-primary">
              Virtual CISO (VCISO) Program Services
            </h1>

            <p className="mt-4 text-lg font-semibold text-sky-800 dark:text-sky-200">
              VCISO Advisory Services: CISO CERTIFIED experts
            </p>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              Vulnuris is an award-winning, independent security consulting firm
              providing organizations that require an experienced CISO, with a
              Virtual Chief Information Security Officer and a team to drive
              critical initiatives and oversee an entire security program as
              well as the technologies required to protect the organization and
              its customers from modern security threats while meeting
              regulatory compliance requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={sectionReveal} className="ml-10">
              <h2 className="text-2xl font-semibold mb-6">
                Why Vulnuris Virtual CISO Services
              </h2>

              <ul className="space-y-4 text-gray-800 dark:text-muted-foreground">
                <li className="font-semibold">
                  • Accelerate security program maturity
                </li>
                <li className="ml-6">○ Program development</li>
                <li className="ml-6">○ Policy and standards</li>
                <li className="ml-6">○ Compliance</li>
                <li className="ml-6">○ Governance</li>
                <li className="ml-6">○ Security</li>
                <li>• Access to a team of experts</li>
                <li>• Improve compliance and avoid penalties</li>
                <li>• Reduce security risk and business continuity</li>
                <li>• Decrease overhead cost of hiring a full-time CISO</li>
              </ul>
            </motion.div>

            <motion.div
              variants={sectionReveal}
              className="flex justify-center md:justify-end mr-20 perspective-[1200px]"
            >
              <motion.img
                src="/assets/services/vCiso.webp"
                alt="VCISO Security"
                className="w-full max-w-md rounded-xl shadow-xl"
                animate={floating3D.animate}
                transition={floating3D.transition}
                style={{ transformStyle: "preserve-3d" }}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ================= DETAILED SERVICE INFO CONTAINER – VIRTUAL CISO ================= */}
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
                 bg-white dark:bg-background
                 shadow-xl"
          >
            {/* light gradient overlay – SAME COLORS */}
            <div
              className="absolute inset-0 bg-gradient-to-br
                   from-indigo-500/10 via-transparent to-fuchsia-500/10
                   dark:from-indigo-500/15 dark:to-fuchsia-500/15"
            />

            <div className="relative p-10 md:p-14 grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* LEFT CONTENT */}
              <div>
                <h3
                  className="text-2xl md:text-3xl font-bold
                       bg-gradient-to-r from-indigo-500 to-fuchsia-500
                       bg-clip-text text-transparent mb-6"
                >
                  How Our Virtual CISO Service Works
                </h3>

                <p className="text-gray-800 dark:text-gray-200 mb-4 leading-relaxed">
                  Our Virtual CISO (vCISO) service provides strategic security
                  leadership without the cost of a full-time executive. We work
                  as an extension of your leadership team to design, implement,
                  and continuously improve your cybersecurity posture.
                </p>

                <ul className="space-y-3 text-gray-800 dark:text-gray-200">
                  {[
                    "Security posture & gap assessment",
                    "Cybersecurity strategy & roadmap planning",
                    "Policy, process & governance development",
                    "Risk management & threat prioritization",
                    "Compliance alignment & audit readiness",
                    "Continuous advisory & leadership reporting",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-indigo-500 font-bold">✔</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* RIGHT CONTENT */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  What You Get
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Dedicated Virtual CISO advisor",
                    "Customized security roadmap",
                    "Information security policies",
                    "Risk & compliance dashboards",
                    "Board-level security reports",
                    "Ongoing strategic guidance",
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="rounded-xl
                           border border-indigo-500/25 dark:border-fuchsia-500/25
                           px-4 py-3 text-sm
                           text-gray-800 dark:text-gray-200
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

      {/* ================= VCISO SERVICES GRID ================= */}
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
            Virtual CISO (VCISO) Program: Protect Your Organization
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {[
              [
                "Virtual CISO/vCISO",
                "Board-level cyber security leadership, strategy and monthly reporting.",
              ],
              [
                "Governance, Risk & Compliance",
                "Align GRC using NIST, PCI/DSS, ISO, GDPR and others.",
              ],
              [
                "IT Security Operations",
                "SOC strategy and 24x7 cyber risk monitoring.",
              ],
              [
                "Security Awareness Education",
                "Empower employees against cyber threats.",
              ],
              [
                "Penetration Testing & Phishing",
                "Understand vulnerabilities clearly.",
              ],
              [
                "Third Party Risk Management",
                "Vendor security assessments managed by VCISO team.",
              ],
            ].map(([title, desc], i) => (
              <motion.div
                key={i}
                variants={cardReveal}
                whileHover={{
                  y: -8,
                  boxShadow: "0 18px 40px rgba(0,0,0,0.08)",
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-white dark:bg-muted border border-gray-200 dark:border-border rounded-2xl p-6 shadow-sm cursor-pointer"
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

      {/* ================= VCISO DETAILS ================= */}
      <motion.section
        className="py-28 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-background dark:to-background"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <motion.div variants={sectionReveal} className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              What Are Our Virtual CISO (vCISO) Services?
            </h2>

            <p className="mt-4 max-w-3xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
              Executive-level cybersecurity leadership without the cost of a
              full-time CISO. We align security strategy with business goals and
              manage risk across your organization.
            </p>

            <div className="mt-6 h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-violet-500 to-indigo-500" />
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Core Services */}
            <motion.div
              variants={sectionReveal}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="relative p-8 rounded-2xl border border-gray-200 dark:border-slate-800
                   bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl
                   shadow-lg hover:shadow-2xl"
            >
              <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-violet-500 to-indigo-500 rounded-full" />

              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                Strategic Security Leadership
              </h3>

              <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-lg">
                <li>• Expert cybersecurity guidance</li>
                <li>• Alignment with business strategy</li>
                <li>• Enterprise risk management integration</li>
                <li>• Threat analysis and intelligence updates</li>
                <li>• Compliance readiness & anticipation</li>
                <li>• Security team leadership & control implementation</li>
              </ul>
            </motion.div>

            {/* GRC & Crisis */}
            <motion.div
              variants={sectionReveal}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="relative p-8 rounded-2xl border border-gray-200 dark:border-slate-800
                   bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl
                   shadow-lg hover:shadow-2xl"
            >
              <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-indigo-500 to-fuchsia-500 rounded-full" />

              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                Governance, Risk & Crisis Management
              </h3>

              <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-lg">
                <li>• Risk & compliance management (GRC)</li>
                <li>• Vendor security programs</li>
                <li>• Executive & board-level engagement</li>
                <li>• Continuous threat intelligence</li>
                <li>• Incident & crisis management leadership</li>
              </ul>
            </motion.div>
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
          Strengthen Your Security Leadership
        </motion.h2>

        <motion.p
          variants={sectionReveal}
          className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground"
        >
          Get expert cybersecurity guidance tailored to your organization’s risk
          profile and compliance needs.
        </motion.p>

        <motion.div variants={sectionReveal} whileHover={{ scale: 1.08 }}>
          <Link href="/contact">
            <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-xl">
              Talk to a vCISO Expert
            </button>
          </Link>
        </motion.div>
      </motion.section>
    </main>
  );
}
