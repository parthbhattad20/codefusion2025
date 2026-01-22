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
                  className="bg-gradient-to-r from-violet-500 to-blue-600 rounded-full px-10 shadow-md"
                >
                  Get a Demo
                </Button>
              </Link>

              <a
                href="/docs/KloudRaksha-Brochure.pdf"
                download
                className="bg-gradient-to-r from-violet-500 to-blue-600 text-white font-semibold transition hover:opacity-90 shadow-md rounded-full px-6 py-3 inline-flex items-center"
              >
                Download Brochure
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.03 }}
            className="relative bg-gray-200 rounded-xl overflow-hidden shadow-xl w-full h-[350px] lg:h-[400px]"
          >
            <Image
              src="/assets/products/kloudraksha.png"
              alt="KloudRaksha Dashboard"
              fill
              className="object-contain md:object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 pointer-events-none" />
          </motion.div>
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
                  assessments, maps findings to standards, and delivers actionable
                  remediation.
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
              { icon: Cloud, title: "Multi-Cloud Support", desc: "AWS, Azure, GCP audits." },
              { icon: FileCheck, title: "Compliance Mapping", desc: "CIS, ISO, GDPR, HIPAA." },
              { icon: ShieldCheck, title: "Risk Prioritization", desc: "Fix what matters most." },
              { icon: Brain, title: "GenAI Insights", desc: "AI recommendations (coming soon)." },
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
          className="py-20 bg-muted/40 border-y border-border mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-6">
            How KloudRaksha Works
          </h2>

          <p className="text-center text-lg text-muted-foreground mb-16 max-w-3xl mx-auto">
            Automated cloud security audits with compliance mapping
          </p>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <motion.div
                key={num}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="group flex items-start gap-5 bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg"
              >
                <div className="w-11 h-11 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold group-hover:bg-primary group-hover:text-white transition">
                  {num}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Step {num}</h3>
                  <p className="text-muted-foreground">
                    Automated secure workflow stage.
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        
        <motion.section variants={fadeUp} className="py-20">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-primary mb-16">
            Frequently Asked Questions
          </h2>

          <div className="max-w-4xl mx-auto divide-y divide-border">
            {[
              ["What is KloudRaksha?", "Automated cloud security configuration audit platform."],
              ["Which clouds?", "AWS, Azure, GCP supported."],
              ["Compliance standards?", "CIS, ISO 27001, GDPR, HIPAA."],
            ].map(([q, a], i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="py-6"
              >
                <summary className="cursor-pointer font-semibold text-lg flex justify-between">
                  {q}
                  <span>+</span>
                </summary>
                <p className="mt-4 text-muted-foreground">{a}</p>
              </motion.details>
            ))}
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
