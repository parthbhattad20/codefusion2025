"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowBigLeft,
  ShieldCheck,
  Zap,
  Plug,
  Eye,
  Lock,
  Network,
} from "lucide-react";
import { motion } from "framer-motion";

/* ===========================
   Shared Animation System
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

const cardHover = {
  whileHover: { y: -10, scale: 1.04 },
  transition: { type: "spring", stiffness: 220, damping: 18 },
};

const glowHover = {
  whileHover: {
    boxShadow: "0px 0px 45px rgba(139,92,246,0.45)",
  },
};

const VCrypt = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground py-16 mt-10 lg:mt-20 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[-20%] left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-violet-500/10 to-blue-500/10 blur-3xl" />
      </div>

      <motion.div
        className="container max-w-7xl mx-auto px-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Back */}
        
        {/* <motion.div variants={fadeUp} className="mb-10">
          <Link
            href="/products"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition"
          >
            <ArrowBigLeft className="mr-2" /> Back to Products
          </Link>
        </motion.div> */}

        {/* Hero */}
        <motion.section
          variants={fadeUp}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-28"
        >
          <div className="space-y-6">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              V-Crypt
              </span>{" "}
               – Smart SFP Edge Encryption
            </h1>

            <ul className="list-disc pl-5 space-y-2 text-lg md:text-xl">
              <li>AES-256 hardware-based encryption</li>
              <li>MACsec & IPsec support</li>
              <li>Zero-touch plug-and-play deployment</li>
            </ul>

            <p className="text-lg text-muted-foreground max-w-xl">
              V-Crypt is the world’s first Smart SFP security module that embeds
              encryption, intelligence, and telemetry directly inside the
              transceiver—transforming every network port into a secure,
              self-defending link.
            </p>

            <div className="mt-5 flex flex-wrap gap-10 justify-center">
              <a href="/contact?subject=product&subSubject=Vcrypt">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-violet-500 to-blue-600 rounded-full px-10 shadow-lg hover:shadow-violet-500/40 transition-all hover:scale-105"
                >
                  Get a Demo
                </Button>
              </a>

              <a href="/docs/V-crypt-Brochure.pdf" download>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-violet-500 to-blue-600 rounded-full px-10 shadow-lg hover:shadow-violet-500/40 transition-all hover:scale-105"
                >
                  Download Brochure
                </Button>
              </a>
            </div>
          </div>

          {/* 3D Floating Image */}
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
              className="relative w-full h-[360px] rounded-2xl overflow-hidden bg-card border border-border shadow-xl will-change-transform"
            >
              <Image
                src="/assets/products/about.jpg"
                alt="V-Crypt Smart SFP"
                fill
                className="object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/15 to-blue-500/15 pointer-events-none" />
            </motion.div>
          </div>
        </motion.section>

        {/* Why Section */}
        <motion.section
          className="py-24 mb-28"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
        >
          <div className="relative bg-gradient-to-br from-violet-500/10 via-background to-blue-500/10 border border-border rounded-3xl p-10 lg:p-14 overflow-hidden">
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div variants={fadeUp} className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                  Why V-Crypt?
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                  Traditional encryption appliances are expensive, slow to
                  deploy, and complex to manage.{" "}
                  <strong>
                    V-Crypt delivers AES-256 hardware-based encryption directly
                    at the network edge,
                  </strong>{" "}
                  ensuring secure telemetry and simplified deployment.
                </p>
              </motion.div>

              <div className="space-y-5">
                {[
                  [
                    "Zero-touch Encryption",
                    "Enable encryption instantly at the device port without additional hardware.",
                  ],
                  [
                    "Real-time Link Intelligence",
                    "Continuous monitoring, tamper alerts, and secure key management.",
                  ],
                  [
                    "Inline Data Protection",
                    "AES-256 encryption for WAN and LAN without latency.",
                  ],
                  [
                    "Vendor-Neutral Deployment",
                    "Compatible with Cisco, Juniper, MikroTik, and more.",
                  ],
                ].map(([title, desc], i) => (
                  <motion.details
                    key={i}
                    variants={fadeUp}
                    className="group bg-background/70 border border-border rounded-xl p-6 backdrop-blur"
                    {...cardHover}
                    {...glowHover}
                  >
                    <summary className="flex justify-between items-center cursor-pointer font-semibold text-lg list-none">
                      {title}
                      <span className="text-xl transition-transform group-open:rotate-180">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-muted-foreground">{desc}</p>
                  </motion.details>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Core Capabilities */}
        <motion.section variants={fadeUp} className="py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-16">
            Core Capabilities
          </h2>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              [
                Lock,
                "AES-256 Encryption",
                "Inline hardware encryption with IPsec ESP.",
              ],
              [
                Plug,
                "Plug-and-Play SFP",
                "Installs like a standard transceiver.",
              ],
              [Zap, "Line-Rate Performance", "Zero latency impact."],
              [Eye, "Traffic Visibility", "Real-time telemetry and anomalies."],
              [
                Network,
                "Vendor Neutral",
                "Works across major network vendors.",
              ],
              [
                ShieldCheck,
                "Secure Key Vault",
                "Keys stored securely inside module.",
              ],
            ].map(([Icon, title, desc], i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                {...cardHover}
                {...glowHover}
                className="bg-card p-6 rounded-2xl border border-border shadow-sm"
              >
                <Icon className="w-6 h-6 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* CTA */}
        <motion.section variants={fadeUp} className="text-center py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            You Plug It. V-Crypt Secures It.
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Secure every fiber connection with Smart SFP-based edge encryption.
          </p>

          <motion.div whileHover={{ scale: 1.12, y: -6 }}>
            <Link href="/contact?subject=product&subSubject=Vcrypt">
              <Button
                size="lg"
                className="rounded-full px-12 bg-gradient-to-r from-violet-500 to-blue-600 shadow-xl hover:shadow-blue-500/40 transition-all"
              >
                Speak with Our Experts
              </Button>
            </Link>
          </motion.div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default VCrypt;
