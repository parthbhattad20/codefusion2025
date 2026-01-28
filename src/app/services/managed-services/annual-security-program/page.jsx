"use client";

import Link from "next/link";
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

export default function AnnualSecurityProgramPage() {
  return (
    <main className="w-full bg-background text-foreground overflow-x-hidden">
      {/* ================= HERO ================= */}
      <section className="relative h-screen overflow-hidden bg-[#05080f]">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/assets/videos/main.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="absolute inset-0 bg-black/60" />

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
              ANNUAL SECURITY PROGRAM (ASP)
            </motion.div>

            <motion.h1
              variants={sectionReveal}
              className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
            >
              Secure Your SaaS with a Dedicated 24/7 Cybersecurity Team
            </motion.h1>

            <motion.p
              variants={sectionReveal}
              className="mt-6 text-lg md:text-xl text-gray-300"
            >
              Focus on building and scaling your SaaS while we manage end‑to‑end
              cybersecurity, compliance, and continuous protection — without the
              overhead of an in‑house team.
            </motion.p>

            <motion.div
              variants={sectionReveal}
              className="mt-10 flex justify-center gap-4"
            >
              <Link
                href="/contact"
                className="rounded-full bg-cyan-600 px-8 py-3 text-white font-medium hover:bg-cyan-500 transition"
              >
                Book a Free Consultation
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= WHY ASP ================= */}
      <motion.section
        className="py-24 px-6"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={sectionReveal}
            className="text-center text-3xl md:text-4xl font-bold text-primary mb-14"
          >
            Why ASP Should Be Your Go‑To SaaS Security Program
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "Complete Cybersecurity Management",
                desc: "From secure code reviews to 24/7 monitoring, we manage everything.",
              },
              {
                title: "Cost‑Effective Security",
                desc: "Reduce security costs by up to 50% without compromising protection.",
              },
              {
                title: "Faster Product Releases",
                desc: "Secure coding and regular assessments enable confident, rapid launches.",
              },
              {
                title: "Reduced Downtime",
                desc: "We prevent security disruptions before they impact your productivity.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={cardReveal}
                className="bg-background border border-border rounded-2xl p-6"
              >
                <h3 className="font-semibold text-lg mb-3 text-primary">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      {/* ================= ASP SERVICE DEEP DIVE ================= */}
      <motion.section
        className="py-28 px-6 relative overflow-hidden"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* background accents */}
        <div className="absolute -top-40 right-0 w-[420px] h-[420px] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[360px] h-[360px] bg-blue-500/10 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Heading */}
          <motion.div variants={sectionReveal} className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary">
              What the Annual Security Program Covers
            </h2>

            <p className="mt-5 max-w-3xl mx-auto text-lg text-muted-foreground">
              A structured, long-term cybersecurity engagement designed to help
              SaaS teams maintain strong security posture throughout the year —
              across development, infrastructure, operations, and compliance
              readiness.
            </p>
          </motion.div>

          {/* Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* LEFT – Program characteristics */}
            <motion.div variants={sectionReveal} className="space-y-6">
              {[
                {
                  label: "Security Approach",
                  value: "Continuous risk-based security management",
                },
                {
                  label: "Response Capability",
                  value: "Rapid incident handling and escalation",
                },
                {
                  label: "Standards Alignment",
                  value: "Industry security standards and best practices",
                },
                {
                  label: "Coverage Model",
                  value:
                    "Application, cloud, infrastructure, and process security",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl border border-border bg-background/70 backdrop-blur-md shadow-sm"
                >
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="mt-2 text-lg font-semibold text-cyan-600 dark:text-cyan-400">
                    {item.value}
                  </p>
                </div>
              ))}

              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-600 text-white shadow-lg">
                <h4 className="text-lg font-semibold mb-2">
                  Built for SaaS environments
                </h4>
                <p className="text-sm text-white/90 leading-relaxed">
                  The program is designed to support modern SaaS architectures,
                  frequent releases, cloud-native infrastructure, and evolving
                  compliance requirements.
                </p>
              </div>
            </motion.div>

            {/* RIGHT – Detailed scope */}
            <motion.div
              variants={stagger}
              className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {[
                {
                  title: "Security Architecture Review",
                  desc: "Periodic evaluation of application design, cloud setup, authentication flows, and data handling to identify structural security gaps.",
                },
                {
                  title: "Secure Development Lifecycle Support",
                  desc: "Integration of security practices into development workflows, including code review guidance, dependency risk checks, and release validation.",
                },
                {
                  title: "Infrastructure & Cloud Security Oversight",
                  desc: "Configuration review of servers, containers, cloud services, network controls, and access management policies.",
                },
                {
                  title: "Vulnerability Management Program",
                  desc: "Ongoing discovery, prioritization, tracking, and remediation support for security vulnerabilities.",
                },
                {
                  title: "Incident Readiness & Handling",
                  desc: "Preparation of response procedures and support during active security incidents to limit operational impact.",
                },
                {
                  title: "Compliance Preparation Support",
                  desc: "Assistance with security documentation, control implementation, and audit readiness for common regulatory frameworks.",
                },
              ].map((service, i) => (
                <motion.div
                  key={i}
                  variants={cardReveal}
                  whileHover={{
                    y: -8,
                    boxShadow: "0 25px 60px rgba(0,0,0,0.15)",
                  }}
                  className="group relative p-7 rounded-2xl border border-border bg-background transition-all overflow-hidden"
                >
                  {/* hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_60%)]" />

                  <h3 className="text-lg font-semibold text-primary mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ================= CORE SERVICES ================= */}
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
            ASP – Core Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Comprehensive Vulnerability Assessment",
                desc: "Automated scans plus expert‑led testing to uncover hidden risks.",
              },
              {
                title: "Secure Development & Configuration",
                desc: "Secure coding practices and hardened configurations from day one.",
              },
              {
                title: "Server Optimization & Hardening",
                desc: "High‑performance, hardened servers built for resilience.",
              },
              {
                title: "Compliance & Data Privacy",
                desc: "SOC2, ISO 27001, GDPR, HIPAA & PCI DSS compliance support.",
              },
              {
                title: "Proactive Threat Management",
                desc: "Threat hunting, bug bounty management, and incident response.",
              },
              {
                title: "Continuous Security Monitoring",
                desc: "24/7 monitoring with real‑time alerts and rapid response.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={cardReveal}
                className="bg-background border border-border rounded-2xl p-6"
              >
                <h3 className="font-semibold text-lg mb-3 text-primary">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ================= TESTIMONIAL ================= */}
      <motion.section
        className="py-24 px-6"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            variants={sectionReveal}
            className="text-xl text-muted-foreground italic"
          >
            “Choosing ASP has been one of the best decisions for our SaaS. It
            gives us complete protection and peace of mind.”
          </motion.p>
          <motion.p
            variants={sectionReveal}
            className="mt-6 font-semibold text-primary"
          >
            Megan Roos — Product Owner, Insurance SaaS (UAE)
          </motion.p>
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
          Secure Your SaaS with ASP
        </motion.h2>

        <motion.p
          variants={sectionReveal}
          className="mb-8 max-w-2xl mx-auto text-lg text-muted-foreground"
        >
          Let our experts handle cybersecurity while you focus on growth,
          innovation, and customers.
        </motion.p>

        <motion.div variants={sectionReveal} whileHover={{ scale: 1.08 }}>
          <Link
            href="/contact"
            className="px-10 py-3 rounded-full text-lg font-semibold bg-primary text-primary-foreground shadow-md"
          >
            Get Started with ASP
          </Link>
        </motion.div>
      </motion.section>
    </main>
  );
}
