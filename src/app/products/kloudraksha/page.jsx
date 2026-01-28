"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowBigLeft,
  Cloud,
  ShieldCheck,
  FileCheck,
  Brain,
} from "lucide-react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const KloudRaksha = () => {
  return (
    <div className="min-h-screen bg-background text-foreground py-16 mt-10 lg:mt-20 overflow-hidden">
      <motion.div
        className="container max-w-7xl mx-auto px-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={fadeUp} className="mb-10">
          <Link
            href="/products"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition"
          >
            <ArrowBigLeft className="mr-2" /> Back to Products
          </Link>
        </motion.div>

        <motion.section
          variants={fadeUp}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-24"
        >
          <div className="space-y-6">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-primary">
              KloudRaksha – Cloud Security Configuration Audit Platform
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              KloudRaksha simplifies and accelerates cloud security audits using
              automation, compliance mapping, and risk-based prioritization.
            </p>

            <ul className="list-disc pl-5 text-muted-foreground space-y-2">
              <li>Automated cloud configuration audits</li>
              <li>Compliance-ready reports</li>
              <li>Multi-cloud security visibility</li>
            </ul>

            <div className="mt-5 flex flex-wrap gap-6">
              <Link href="/contact?subject=KloudRaksha%20Demo">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-violet-500 to-blue-600 rounded-full px-12 shadow-md transition hover:scale-105"
                >
                  Get a Demo
                </Button>
              </Link>

              <a href="/docs/KloudRaksha-Brochure.pdf" download>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-violet-500 to-blue-600 rounded-full px-12 shadow-md hover:scale-105"
                >
                  Download Brochure
                </Button>
              </a>
            </div>
          </div>

          {/* 3D Animated Image Container */}
          <div style={{ perspective: 1200 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              animate={{
                rotateY: [0, 12, 0, -12, 0],
                rotateX: [0, -8, 0, 8, 0],
                y: [0, -12, 0, 12, 0],
              }}
              transition={{
                opacity: { duration: 0.8, ease: "easeOut" },
                scale: { duration: 0.8, ease: "easeOut" },
                y: { duration: 14, ease: "easeInOut", repeat: Infinity },
                rotateX: { duration: 14, ease: "easeInOut", repeat: Infinity },
                rotateY: { duration: 14, ease: "easeInOut", repeat: Infinity },
              }}
              whileHover={{ scale: 1.05 }}
              className="relative bg-gray-200 rounded-xl overflow-hidden shadow-xl w-full h-[350px] lg:h-[400px] will-change-transform"
            >
              <Image
                src="/assets/products/kloudraksha.png"
                alt="KloudRaksha Dashboard"
                fill
                className="object-contain md:object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 pointer-events-none" />
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          variants={fadeUp}
          whileInView="show"
          initial="hidden"
          viewport={{ once: true }}
          className="py-24 bg-muted/40 border-y border-border mb-24"
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6 leading-tight">
                  Why KloudRaksha?
                </h2>
                <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                  Manual audits are slow and inconsistent. KloudRaksha automates
                  assessments, maps findings to standards, and delivers
                  actionable remediation.
                </p>
              </div>

              <div className="space-y-5">
                {[
                  [
                    "Manual & Time-Consuming Audits",
                    "Traditional audits require significant effort and time.",
                  ],
                  [
                    "Compliance Complexity",
                    "Managing CIS, ISO, GDPR, HIPAA across clouds is difficult manually.",
                  ],
                  [
                    "Poor Risk Prioritization",
                    "Teams struggle to identify critical misconfigurations.",
                  ],
                ].map(([title, desc], i) => (
                  <motion.details
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="
                      group rounded-xl border border-border
                      bg-background/60 backdrop-blur-sm
                      px-6 py-5
                      transition-all duration-300
                      hover:border-primary/40 hover:shadow-sm
                    "
                  >
                    <summary className="cursor-pointer text-lg font-semibold flex justify-between items-center list-none">
                      <span>{title}</span>
                      <span className="text-muted-foreground group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      {desc}
                    </p>
                  </motion.details>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section variants={fadeUp} className="py-20 mb-24">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-primary mb-16">
            Key Features
          </h2>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              {
                icon: Cloud,
                title: "Multi-Cloud Support",
                desc: "AWS, Azure, GCP audits.",
              },
              {
                icon: FileCheck,
                title: "Compliance Mapping",
                desc: "CIS, ISO, GDPR, HIPAA.",
              },
              {
                icon: ShieldCheck,
                title: "Risk Prioritization",
                desc: "Fix what matters most.",
              },
              {
                icon: Brain,
                title: "GenAI Insights",
                desc: "AI recommendations (coming soon).",
              },
            ].map((f, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="bg-card p-6 rounded-2xl border border-border shadow-sm hover:shadow-xl"
              >
                <f.icon className="w-6 h-6 text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          variants={fadeUp}
          className="relative py-32 bg-gradient-to-b from-muted/40 to-background border-y border-border mb-28 overflow-hidden"
        >
          {/* Ambient glow */}
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-6">
            {/* Heading */}
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight">
                How KloudRaksha Works
              </h2>

              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Automated cloud security audits with intelligent compliance
                mapping across your infrastructure.
              </p>

              <div className="mt-6 h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-violet-500 to-cyan-500" />
            </div>

            {/* Steps */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-10"
            >
              {[
                "Cloud environment discovery",
                "Asset inventory & configuration analysis",
                "Security posture assessment",
                "Compliance framework mapping (ISO, SOC2, PCI, etc.)",
                "Risk prioritization & remediation guidance",
                "Continuous monitoring & audit reporting",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-violet-500/40 to-cyan-500/40"
                >
                  <div className="relative flex gap-6 items-start bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl p-7 border border-border shadow-lg hover:shadow-2xl transition-all overflow-hidden">
                    {/* Glow layer */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-violet-500/10 to-cyan-500/10" />

                    {/* Step badge */}
                    <div className="relative shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 text-white flex items-center justify-center font-bold text-lg shadow-md">
                      {i + 1}
                    </div>

                    {/* Content */}
                    <div className="relative">
                      <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">
                        Step {i + 1}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

      <motion.section variants={fadeUp} className="py-24">
  <div className="max-w-4xl mx-auto px-6">

    <h2 className="text-center text-3xl md:text-4xl font-semibold text-primary mb-14">
      Frequently Asked Questions
    </h2>

    <div className="space-y-4">
      {[
        [
          "What is KloudRaksha?",
          "KloudRaksha is an automated cloud security configuration audit platform designed to continuously assess and improve your cloud security posture.",
        ],
        ["Which clouds are supported?", "AWS, Azure, and Google Cloud Platform (GCP)."],
        [
          "Which compliance standards are supported?",
          "CIS benchmarks, ISO/IEC 27001, GDPR, and HIPAA compliance frameworks are supported.",
        ],
      ].map(([q, a], i) => (
        <motion.details
          key={i}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08 }}
          className="group rounded-xl border border-border bg-background hover:bg-muted/40 transition-colors"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-5 text-lg font-medium text-foreground">
            {q}
            <span className="ml-4 text-muted-foreground transition-transform group-open:rotate-45">
              +
            </span>
          </summary>

          <div className="px-6 pb-5 text-muted-foreground leading-relaxed">
            {a}
          </div>
        </motion.details>
      ))}
    </div>

  </div>
</motion.section>


        <motion.section variants={fadeUp} className="text-center py-20">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Secure Your Cloud with Confidence
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Discover how KloudRaksha simplifies cloud security audits.
          </p>
          <motion.div whileHover={{ scale: 1.08, y: -4 }}>
            <Link href="/contact?subject=KloudRaksha%20Demo">
              <Button
                size="lg"
                className="bg-gradient-to-r from-violet-500 to-blue-600 rounded-full px-10 shadow-lg"
              >
                Get Started
              </Button>
            </Link>
          </motion.div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default KloudRaksha;
