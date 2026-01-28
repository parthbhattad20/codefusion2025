"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const sectionReveal = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0)", transition: { duration: 0.8 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardReveal = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ManagedSecurityPage() {
  return (
    <main className="w-full bg-background text-foreground overflow-x-hidden">
      {/* ================= HERO ================= */}
      <section className="relative h-screen overflow-hidden bg-[#05080f]">
        {/* animated grid */}
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#22d3ee22_1px,transparent_1px),linear-gradient(to_bottom,#22d3ee22_1px,transparent_1px)] bg-[size:90px_90px]" />

        {/* background image */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/assets/videos/main.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* glow blobs */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[120px]" />

        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="max-w-4xl text-center"
          >
            <motion.div
              variants={sectionReveal}
              className="inline-block mb-6 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-sm tracking-widest"
            >
              MANAGED CYBER DEFENSE
            </motion.div>

            <motion.h1
              variants={sectionReveal}
              className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
            >
              Managed Security Services
            </motion.h1>

            <motion.p
              variants={sectionReveal}
              className="mt-6 text-lg md:text-xl text-gray-300"
            >
              From security operations to on-site management, we provide
              continuous, enterprise-grade protection for your digital assets .
            </motion.p>

            <motion.div
              variants={sectionReveal}
              className="mt-10 flex justify-center gap-4"
            >
              <Link
                href="/contact"
                className="rounded-full bg-cyan-600 px-8 py-3 text-white font-medium hover:bg-cyan-500 transition"
              >
                Start Your Security Journey
              </Link>

              
            </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Securing Your Business End-to-End
            </h2>

            <p className="mt-6 max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed">
              Modern technology has exponentially increased the attack surface.
              Our Managed Security Services detect vulnerabilities, prevent
              cyberattacks, and ensure regulatory compliance — allowing you to
              focus on operations while we handle your security.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={sectionReveal} className="ml-10">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Why Choose Managed Security Services
              </h3>

              <ul className="space-y-4 text-muted-foreground">
                <li>• End-to-end SOC & on-site coverage</li>
                <li>• Continuous threat monitoring</li>
                <li>• Incident response & mitigation</li>
                <li>• Regulatory compliance support</li>
                <li>• Industry-specific protection models</li>
              </ul>
            </motion.div>

            <motion.div
              variants={sectionReveal}
              className="flex justify-center md:justify-end mr-20"
            >
              <img
                src="/assets/services/vapt.jpg"
                alt="Managed Security"
                className="w-full max-w-md rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ================= SERVICES GRID ================= */}
      <motion.section
        className="py-24 px-6 bg-muted/30"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            variants={sectionReveal}
            className="text-3xl md:text-4xl font-semibold text-primary mb-14"
          >
            Our Managed Security Capabilities
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Security Operations & Monitoring",
                desc: "24/7 monitoring of networks, assets and logs.",
              },
              {
                title: "Cyber Vulnerability Management",
                desc: "Continuous identification and remediation of weaknesses.",
              },
              {
                title: "Managed Detection & Response (MDR)",
                desc: "Advanced threat containment & response workflows.",
              },
              {
                title: "Cyber Threat Intelligence",
                desc: "Data-driven adversary tracking & forecasting.",
              },
              {
                title: "Compliance & Risk Consulting",
                desc: "Regulatory alignment & security posture optimization.",
              },
              {
                title: "End-to-End Managed Services",
                desc: "SOC, tooling, processes & on-site support combined.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={cardReveal}
                whileHover={{
                  y: -10,
                  boxShadow: "0 30px 60px rgba(0,0,0,0.18)",
                }}
                className="relative group bg-background border border-border rounded-2xl p-6 transition-all overflow-hidden"
              >
                {/* shimmer border */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.12),transparent)]" />

                {/* subtle glow line */}
                <div className="absolute left-0 top-0 h-full w-[2px] bg-cyan-500/40 scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500" />

                <h3 className="font-semibold text-lg mb-3 text-primary">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ================= PROCESS ================= */}
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
              How Our Managed Security Services Work
            </h2>

            <p className="mt-4 max-w-3xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
              We deliver continuous, enterprise-grade security operations
              tailored to your organization’s risk profile and business goals.
            </p>

            <div className="mt-6 h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-violet-500 to-indigo-500" />
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Service Lifecycle */}
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
                Service Onboarding & Delivery
              </h3>

              <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-lg">
                <li>• Discovery & service planning</li>
                <li>• SLA definition & governance model</li>
                <li>• Knowledge transition & environment handover</li>
                <li>• Continuous service delivery & reporting</li>
              </ul>
            </motion.div>

            {/* Coverage */}
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
                Comprehensive Coverage & Professional Services
              </h3>

              <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-lg">
                <li>• SIEM & SOC operations</li>
                <li>• Vulnerability management</li>
                <li>• Managed Detection & Response (MDR)</li>
                <li>• Threat intelligence integration</li>
                <li>• Compliance & executive reporting</li>

                <li className="pt-3 font-semibold text-gray-900 dark:text-white">
                  Tailored professional security services
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ================= CTA ================= */}
      <motion.section
        className="py-28 px-6 text-center border-t border-border"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h2
          variants={sectionReveal}
          className="text-3xl md:text-4xl font-bold text-primary mb-4"
        >
          Protect Your Business with Expert Managed Security
        </motion.h2>

        <motion.p
          variants={sectionReveal}
          className="mb-8 max-w-2xl mx-auto text-lg text-muted-foreground"
        >
          Focus on your core operations while we continuously protect, monitor,
          and defend your infrastructure.
        </motion.p>

        <motion.div variants={sectionReveal} whileHover={{ scale: 1.08 }}>
          <Link
            href="/contact"
            className="px-10 py-3 rounded-full text-lg font-semibold bg-primary text-primary-foreground shadow-md"
          >
            Start Your Security Journey
          </Link>
        </motion.div>
      </motion.section>
    </main>
  );
}
