'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const sectionReveal = {
  hidden: { opacity: 0, y: 40, filter: 'blur(6px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0)', transition: { duration: 0.8 } },
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
              Focus on building and scaling your SaaS while we manage end‑to‑end cybersecurity, compliance, and continuous protection — without the overhead of an in‑house team.
            </motion.p>

            <motion.div variants={sectionReveal} className="mt-10 flex justify-center gap-4">
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
              { title: 'Complete Cybersecurity Management', desc: 'From secure code reviews to 24/7 monitoring, we manage everything.' },
              { title: 'Cost‑Effective Security', desc: 'Reduce security costs by up to 50% without compromising protection.' },
              { title: 'Faster Product Releases', desc: 'Secure coding and regular assessments enable confident, rapid launches.' },
              { title: 'Reduced Downtime', desc: 'We prevent security disruptions before they impact your productivity.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={cardReveal}
                className="bg-background border border-border rounded-2xl p-6"
              >
                <h3 className="font-semibold text-lg mb-3 text-primary">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
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
              { title: 'Comprehensive Vulnerability Assessment', desc: 'Automated scans plus expert‑led testing to uncover hidden risks.' },
              { title: 'Secure Development & Configuration', desc: 'Secure coding practices and hardened configurations from day one.' },
              { title: 'Server Optimization & Hardening', desc: 'High‑performance, hardened servers built for resilience.' },
              { title: 'Compliance & Data Privacy', desc: 'SOC2, ISO 27001, GDPR, HIPAA & PCI DSS compliance support.' },
              { title: 'Proactive Threat Management', desc: 'Threat hunting, bug bounty management, and incident response.' },
              { title: 'Continuous Security Monitoring', desc: '24/7 monitoring with real‑time alerts and rapid response.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={cardReveal}
                className="bg-background border border-border rounded-2xl p-6"
              >
                <h3 className="font-semibold text-lg mb-3 text-primary">{item.title}</h3>
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
            “Choosing ASP has been one of the best decisions for our SaaS. It gives us complete protection and peace of mind.”
          </motion.p>
          <motion.p variants={sectionReveal} className="mt-6 font-semibold text-primary">
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
          Let our experts handle cybersecurity while you focus on growth, innovation, and customers.
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
