'use client';

import Link from 'next/link';
import {
  ShieldCheck,
  Brain,
  Radar,
  Cloud,
  Bell,
  Server,
  Lock,
} from "lucide-react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const cardHover = {
  whileHover: {
    y: -12,
    scale: 1.05,
    boxShadow: "0px 25px 60px rgba(99,102,241,0.25)",
  },
  transition: { type: "spring", stiffness: 260, damping: 20 },
};

export default function SOCPage() {
  return (
    <motion.main
      className="w-full bg-background text-foreground"
      variants={container}
      initial="hidden"
      animate="show"
    >

      {/* ================= HERO ================= */}
      <section
        className="relative mt-10 py-32 px-6 h-screen bg-[url('/assets/soc.jpg')] bg-cover bg-center bg-no-repeat overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-indigo-900/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.25),_transparent_60%)]" />

        <motion.div variants={fadeUp} className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-300 mt-38">
            AI Security Operations Center
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            An AI-native SOC delivering continuous threat detection,
            intelligent response, and real-time cyber defense
            across enterprise environments.
          </p>
        </motion.div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="py-24 px-6 bg-background">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={fadeUp}>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-blue-900">
              Built for Modern Security Teams
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              As enterprises expand across cloud, hybrid, and on-prem environments,
              traditional SOCs struggle to scale. Vulnuris AI SOC centralizes telemetry,
              automates decision-making, and reduces analyst fatigue — giving your
              security team intelligence and speed.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            {...cardHover}
            className="bg-foreground/5 dark:bg-white/10 rounded-2xl p-10 border border-border shadow-lg relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-blue-500/10 opacity-0 hover:opacity-100 transition" />
            <ul className="space-y-5 relative">
              {[
                "Centralized Security Visibility",
                "Autonomous AI-driven Analysis",
                "Automated Containment Workflows",
                "Compliance-ready Reporting",
              ].map((label, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 text-violet-600">
                    ✓
                  </span>
                  <span className="text-muted-foreground font-medium">{label}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= KEY PERFORMANCE METRICS ================= */}
      <section className="py-28 px-6 border-t border-border bg-background">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center"
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 bg-clip-text bg-gradient-to-r from-violet-500 to-blue-900 text-transparent">
            AI SOC Performance Impact
          </motion.h2>

          <motion.p variants={fadeUp} className="text-muted-foreground max-w-3xl mx-auto mb-14 text-lg">
            Measurable security outcomes delivered through autonomous detection,
            intelligent correlation, and automated response — validated across
            enterprise environments.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { value: "95%", label: "Reduction in False Positives", desc: "AI-driven correlation eliminates alert noise and analyst fatigue." },
              { value: "< 1 sec", label: "Mean Time to Detect (MTTD)", desc: "Real-time behavioral analytics identify threats instantly." },
              { value: "50%", label: "Lower SOC Operational Cost", desc: "Automation reduces reliance on large analyst teams." },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                {...cardHover}
                className="relative p-6 rounded-2xl bg-foreground/5 border border-border shadow-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-blue-500/10 opacity-0 hover:opacity-100 transition" />
                <p className="text-3xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-blue-600 relative">
                  {item.value}
                </p>
                <p className="text-lg font-semibold mb-2 relative">{item.label}</p>
                <p className="text-sm text-muted-foreground leading-relaxed relative">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= AI SOC WORKFLOW ================= */}
      <section className="py-28 px-6 bg-foreground/5 border-t border-border">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-6 bg-clip-text bg-gradient-to-r from-violet-500 to-blue-900 text-transparent">
            How the AI SOC Works
          </motion.h2>

          <motion.p variants={fadeUp} className="text-muted-foreground max-w-4xl mx-auto text-center mb-16 text-lg">
            A continuous, AI-driven security lifecycle that detects threats,
            prioritizes risk, and responds in real time — with human oversight
            where it matters.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "Signal Ingestion", desc: "Telemetry collected from endpoints, network, cloud, identity, email, and applications.", icon: <Radar className="w-6 h-6 text-violet-600" /> },
              { title: "AI Correlation & Analysis", desc: "Agentic AI correlates events, removes noise, and identifies real threats.", icon: <Brain className="w-6 h-6 text-blue-600" /> },
              { title: "Risk Prioritization", desc: "Threats are scored based on impact, exploitability, and business context.", icon: <ShieldCheck className="w-6 h-6 text-green-600" /> },
              { title: "Automated Response", desc: "Playbooks trigger containment actions while notifying SOC analysts.", icon: <Bell className="w-6 h-6 text-red-600" /> },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                {...cardHover}
                className="relative p-6 rounded-2xl bg-background border border-border shadow-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-blue-500/10 opacity-0 hover:opacity-100 transition" />
                <div className="mb-4 relative">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-2 relative">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed relative">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= AI SOC CAPABILITIES ================= */}
<section className="py-28 px-6 border-t border-border bg-background">
  <motion.div
    variants={container}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="max-w-7xl mx-auto"
  >
    <motion.h2
      variants={fadeUp}
      className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-blue-900"
    >
      AI SOC Core Capabilities
    </motion.h2>

    <motion.p
      variants={fadeUp}
      className="text-muted-foreground max-w-4xl mx-auto text-center mb-16 text-lg"
    >
      Advanced AI-powered capabilities designed to detect, investigate,
      and respond to cyber threats across cloud, hybrid, and on-prem
      environments.
    </motion.p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "Cloud & Hybrid Monitoring",
          desc: "Continuous visibility across AWS, Azure, GCP, and hybrid infrastructures.",
          icon: <Cloud className="w-7 h-7 text-violet-600" />,
        },
        {
          title: "Threat Intelligence Fusion",
          desc: "AI enriches alerts using global threat feeds and behavioral context.",
          icon: <Radar className="w-7 h-7 text-blue-600" />,
        },
        {
          title: "Identity & Access Protection",
          desc: "Detects anomalous login behavior, privilege misuse, and insider threats.",
          icon: <Lock className="w-7 h-7 text-indigo-600" />,
        },
        {
          title: "Endpoint & Network Security",
          desc: "Monitors endpoints, servers, and network traffic in real time.",
          icon: <Server className="w-7 h-7 text-green-600" />,
        },
        {
          title: "AI-Driven Alert Triage",
          desc: "Automatically prioritizes critical threats and suppresses false positives.",
          icon: <Brain className="w-7 h-7 text-cyan-600" />,
        },
        {
          title: "Automated Incident Response",
          desc: "Executes containment actions while keeping analysts in control.",
          icon: <ShieldCheck className="w-7 h-7 text-emerald-600" />,
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          variants={fadeUp}
          {...cardHover}
          className="relative p-6 rounded-2xl bg-foreground/5 dark:bg-white/10 border border-border shadow-lg overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-blue-500/10 opacity-0 hover:opacity-100 transition" />
          <div className="mb-4 relative">{item.icon}</div>
          <h3 className="text-lg font-semibold mb-2 relative">{item.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed relative">
            {item.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </motion.div>
</section>

{/* ================= WHO BENEFITS ================= */}
<section className="py-28 px-6 bg-foreground/5 border-t border-border">
  <motion.div
    variants={container}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="max-w-7xl mx-auto"
  >
    <motion.h2
      variants={fadeUp}
      className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-blue-900"
    >
      Who Benefits from AI SOC
    </motion.h2>

    <motion.p
      variants={fadeUp}
      className="text-muted-foreground max-w-4xl mx-auto text-center mb-16 text-lg"
    >
      Designed for organizations that require scalable, intelligent,
      and always-on security without expanding analyst headcount.
    </motion.p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {[
        {
          title: "Enterprise Security Teams",
          desc: "Reduce alert fatigue, accelerate investigations, and improve SOC efficiency.",
        },
        {
          title: "Cloud-First Organizations",
          desc: "Gain unified security visibility across dynamic cloud and hybrid environments.",
        },
        {
          title: "Compliance-Driven Industries",
          desc: "Support regulatory requirements with continuous monitoring and audit-ready reports.",
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          variants={fadeUp}
          {...cardHover}
          className="relative p-8 rounded-2xl bg-background border border-border shadow-lg overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-blue-500/10 opacity-0 hover:opacity-90 transition" />
          <h3 className="text-xl font-bold mb-4 relative">{item.title}</h3>
          <p className="text-muted-foreground leading-relaxed relative">
            {item.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </motion.div>
</section>


      {/* ================= CTA ================= */}
      <section className="py-24 px-6 border-t border-border">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold bg-clip-text bg-gradient-to-r from-violet-500 to-blue-900 text-transparent mb-4">
            Strengthen Your SOC Operations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Move from alert-driven security to intelligent, automated defense
            powered by AI.
          </p>

          <Link href="/contact?subject=services&subSubject=SOC">
            <button className="px-10 py-3 rounded-full bg-gradient-to-r from-violet-500 to-blue-600 text-white font-bold shadow-lg hover:shadow-2xl transition">
              Request a Demo
            </button>
          </Link>
        </motion.div>
      </section>

    </motion.main>
  );
}
