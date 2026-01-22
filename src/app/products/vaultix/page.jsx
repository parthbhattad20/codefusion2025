"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus, Minus, ScanSearch, Brain, Layers, LinkIcon, ArrowBigLeft } from "lucide-react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const cardHover = {
  whileHover: { y: -10, scale: 1.04 },
  transition: { type: "spring", stiffness: 220, damping: 16 },
};

const glowHover = {
  whileHover: {
    boxShadow: "0px 0px 50px rgba(139,92,246,0.45)",
  },
};

const Vaultix = () => {
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <div className="min-h-screen bg-background text-foreground py-16 mt-10 lg:mt-20 overflow-hidden">
      <motion.div
        className="container max-w-7xl mx-auto px-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={fadeUp} className="mb-10">
          <Link href="/products" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors">
            <ArrowBigLeft className="mr-2" /> Back to Products
          </Link>
        </motion.div>

        <motion.section variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Vaultix
              </span>{" "}
              – State of Art Next-Gen ITSM Platform
            </h1>

            <ul className="list-disc pl-5 text-lg md:text-xl space-y-1">
              <li>Unified asset management</li>
              <li>SBOM tracking</li>
              <li>Intelligent ticket resolution</li>
            </ul>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Vaultix helps organizations streamline IT service management with powerful asset tracking, ticketing, and compliance-driven workflows.
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <a href="/contact?subject=Vaultix%20Demo">
                <Button size="lg" className="bg-gradient-to-r from-violet-500 to-blue-600 rounded-full px-10 shadow-lg hover:shadow-violet-500/40 transition-all">
                  Get a Demo
                </Button>
              </a>

              <a
                href="/docs/Vaultix-Brochure.pdf"
                download
                className="bg-gradient-to-r from-violet-500 to-blue-600 text-white font-semibold shadow-lg rounded-full px-6 py-3 inline-flex items-center hover:shadow-violet-500/40 transition-all"
              >
                Download Brochure
              </a>
            </div>
          </div>

          <motion.div
            style={{ y: parallaxY }}
            initial={{ opacity: 0, scale: 0.95, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            whileHover={{ scale: 1.05 }}
            className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl w-full h-[350px] lg:h-[420px]"
          >
            <Image src="/assets/products/Vumas.png" alt="Vaultix Dashboard" fill className="object-contain md:object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-transparent to-cyan-500/20" />
          </motion.div>
        </motion.section>

        <motion.section variants={fadeUp} className="py-24 bg-muted/40 border-y border-border mb-32">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                Why Vaultix is Critical for <span className="text-primary">Modern Enterprises</span>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
                Vaultix provides a unified platform to manage assets, risks, and workflows with automation and compliance at its core.
              </p>
            </div>

            <div className="space-y-6">
              {[
                ["Unrestricted Access & Asset Sprawl", "Disconnected tools create excessive access and hidden risks. Vaultix centralizes ownership and permissions."],
                ["Lack of End-to-End Visibility", "Track assets, dependencies and tickets in one platform with real-time intelligence."],
                ["Manual & Reactive Operations", "Automate discovery, SBOM generation, ticketing and remediation workflows."],
              ].map(([title, desc], i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  {...cardHover}
                  {...glowHover}
                  className="relative bg-background/70 backdrop-blur-xl border border-border rounded-xl p-6 shadow-sm overflow-hidden"
                >
                  <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-gradient-to-r from-violet-500/10 to-cyan-500/10" />
                  <h3 className="relative text-lg font-semibold mb-2">{title}</h3>
                  <p className="relative text-muted-foreground leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section variants={fadeUp} className="py-20 mb-32">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Key Features of Vaultix
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              [Layers, "Curated Threat Feeds", "Tailored industry threat intelligence."],
              [Brain, "Dark Web Monitoring", "Monitor underground forums and leak sites."],
              [ScanSearch, "IOC Tracking & Alerts", "Track malicious infrastructure."],
              [LinkIcon, "Executive Threat Briefings", "Weekly leadership reports."],
            ].map(([Icon, title, desc], i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                {...cardHover}
                {...glowHover}
                className="bg-card p-6 rounded-2xl border border-border shadow-sm relative overflow-hidden backdrop-blur-xl"
              >
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-gradient-to-br from-violet-500/10 to-cyan-500/10" />
                <div className="relative flex items-center mb-4">
                  <Icon className="w-6 h-6 text-primary mr-3" />
                  <h3 className="font-semibold">{title}</h3>
                </div>
                <p className="relative text-muted-foreground text-sm">{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section variants={fadeUp} className="relative py-28 mb-32">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-cyan-500/5 blur-3xl" />

          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-16 text-center">
              Common ITSM & Asset Management <span className="text-primary">Challenges</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                ["Tool Sprawl", "Multiple disconnected tools create alert fatigue and blind spots across infrastructure."],
                ["Delayed Resolution", "Manual ticket creation and unclear ownership slows incident response times."],
                ["Compliance Gaps", "Lack of SBOM and asset visibility leads to audit failures and regulatory risks."],
              ].map(([t, d], i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.15 }}
                  {...cardHover}
                  {...glowHover}
                  className="relative group rounded-3xl p-[1px] bg-gradient-to-br from-violet-500/40 to-cyan-500/40"
                >
                  <div className="relative rounded-3xl bg-background/80 backdrop-blur-xl p-8 h-full">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-violet-500/10 rounded-full blur-2xl" />

                    <h3 className="text-xl font-semibold mb-3">{t}</h3>
                    <p className="text-muted-foreground leading-relaxed">{d}</p>

                    <motion.div
                      className="mt-6 h-[2px] w-full bg-gradient-to-r from-violet-500 to-cyan-500"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                      style={{ transformOrigin: "left" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section variants={fadeUp} className="py-24 bg-muted/40 border-y border-border mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Intelligent Ticket Management
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <motion.div
                key={n}
                variants={fadeUp}
                {...cardHover}
                {...glowHover}
                className="flex items-start gap-4 bg-card p-6 rounded-xl border border-border shadow-sm relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-gradient-to-br from-violet-500/10 to-cyan-500/10" />
                <div className="relative w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                  {n}
                </div>
                <div className="relative">
                  <h3 className="font-semibold">Step {n}</h3>
                  <p className="text-muted-foreground text-sm">Automated workflow stage.</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section variants={fadeUp} className="text-center py-24">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Empower Your IT Operations
          </h2>
          <p className="text-muted-foreground mb-10">
            Discover how Vaultix modernizes enterprise IT management.
          </p>

          <motion.div whileHover={{ scale: 1.12, y: -6 }}>
            <Link href="/contact?subject=Vaultix%20Demo">
              <Button size="lg" className="bg-gradient-to-r from-violet-500 to-blue-600 rounded-full px-12 shadow-xl hover:shadow-violet-500/50 transition-all">
                Request a Demo
              </Button>
            </Link>
          </motion.div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default Vaultix;
