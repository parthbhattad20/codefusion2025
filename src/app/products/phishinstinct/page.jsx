"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowBigLeft,
  MailWarning,
  Brain,
  Gamepad2,
  Layers,
  Plus,
  Minus,
} from "lucide-react";
import { motion } from "framer-motion";

/* ===========================
   Animation Variants (Shared)
   =========================== */

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const PhishInstinct = () => {
  return (
    <div className="min-h-screen bg-background text-foreground py-16 mt-10 lg:mt-20 overflow-hidden">
      <motion.div
        className="container max-w-7xl mx-auto px-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Back */}
        <motion.div variants={fadeUp} className="mb-10">
          <Link
            href="/products"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition"
          >
            <ArrowBigLeft className="mr-2" /> Back to Products
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.section
          variants={fadeUp}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-24"
        >
          <div className="space-y-6">
            <h1 className="text-3xl md:text-5xl font-extrabold text-primary tracking-tight">
              PhishInstinct – Build a Human Firewall
            </h1>

            <ul className="list-disc pl-5 text-lg md:text-xl space-y-1">
              <li>Realistic phishing simulations</li>
              <li>Behavior-driven security awareness</li>
              <li>Measurable risk reduction</li>
            </ul>

            <p className="text-lg text-muted-foreground max-w-xl">
              Advanced phishing simulation and awareness platform designed to
              transform employee behavior into your strongest security layer.
            </p>

            <div className="mt-6 flex flex-wrap gap-6">
              <Link href="/contact?subject=PhishInstinct%20Demo">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-violet-500 to-blue-600 rounded-full px-10 shadow-lg hover:scale-105"
                >
                  Get a Demo
                </Button>
              </Link>

              <a href="/docs/PhishInstinct-Brochure.pdf" download>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-violet-500 to-blue-600 rounded-full px-10 shadow-lg hover:scale-105"
                >
                  Download Brochure
                </Button>
              </a>
            </div>
          </div>

          {/* 3D Animated Image */}
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
                src="/assets/products/phishinstinct.png"
                alt="PhishInstinct Dashboard"
                fill
                className="object-contain md:object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 pointer-events-none" />
            </motion.div>
          </div>
        </motion.section>

        {/* Why Section */}
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
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary leading-tight">
                  Why PhishInstinct is Critical
                </h2>
                <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
                  Proactively identify human risk, meet compliance requirements,
                  and reduce phishing incidents across your organization.
                </p>
              </div>

              <div className="space-y-5">
                {[
                  [
                    "Compliance Pressure",
                    "Continuous simulations required by regulations.",
                  ],
                  [
                    "Human Vulnerabilities",
                    "Employees remain primary attack vector.",
                  ],
                  [
                    "No Risk Visibility",
                    "Lack of measurable user risk insight.",
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

        {/* Features */}
        <motion.section variants={fadeUp} className="py-16 mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Key Features
          </h2>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            {[
              {
                icon: MailWarning,
                title: "Realistic Simulations",
                desc: "Mirror real-world attacks.",
              },
              {
                icon: Brain,
                title: "Behavior Analytics",
                desc: "Track risky actions.",
              },
              {
                icon: Layers,
                title: "Custom Templates",
                desc: "Tailored campaigns.",
              },
              {
                icon: Gamepad2,
                title: "Gamified Learning",
                desc: "Interactive training.",
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

        {/* How It Works */}
        <motion.section
          variants={fadeUp}
          className="py-20 bg-muted/40 border-y border-border mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-6">
            How PhishInstinct Works
          </h2>

          <p className="text-center text-lg text-muted-foreground mb-16 max-w-3xl mx-auto">
            Continuous phishing simulations with automated measurement and
            training cycles.
          </p>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <motion.div
                key={n}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="group flex items-start gap-5 bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg"
              >
                <div className="w-11 h-11 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold group-hover:bg-primary group-hover:text-white transition">
                  {n}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Step {n}</h3>
                  <p className="text-muted-foreground">
                    Simulate, measure, train, and report continuously.
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* FAQ */}
        <motion.section variants={fadeUp} className="py-20 mb-24">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-primary mb-16">
            Frequently Asked Questions
          </h2>

          <div className="max-w-4xl mx-auto divide-y divide-border">
            {[
              [
                "What is PhishInstinct?",
                "Phishing simulation and security awareness platform.",
              ],
              [
                "Does it support compliance?",
                "Yes, audit-ready reporting is included.",
              ],
              [
                "Is automation supported?",
                "Yes, campaigns and training cycles can be scheduled.",
              ],
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

        {/* CTA */}
        <motion.section variants={fadeUp} className="text-center py-20">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Turn Employees Into Your Strongest Defense
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Reduce phishing risk with instinct-driven security awareness.
          </p>

          <motion.div whileHover={{ scale: 1.08, y: -4 }}>
            <Link href="/contact?subject=PhishInstinct%20Demo">
              <Button
                size="lg"
                className="bg-gradient-to-r from-violet-500 to-blue-600 rounded-full px-10 shadow-lg"
              >
                Request a Demo
              </Button>
            </Link>
          </motion.div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default PhishInstinct;
