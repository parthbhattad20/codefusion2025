'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Plus, Minus } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScanSearch, Brain, Layers, LinkIcon, ArrowBigLeft } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

/* ---------------- animations ---------------- */

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const cardHover = {
  whileHover: { y: -10, scale: 1.04 },
  transition: { type: 'spring', stiffness: 220, damping: 18 },
};

/* ---------------- component ---------------- */

const Vumas = () => {
  return (
    <div className="min-h-screen bg-background text-foreground py-16 mt-10 lg:mt-20">
      <motion.div
        className="container max-w-7xl mx-auto px-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={fadeUp} className="mb-10">
          <Link href="/products" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200">
            <ArrowBigLeft className="mr-2" />
            Back to Products
          </Link>
        </motion.div>

        <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-20">

          <div className="space-y-6">
            <h1 className="text-xl md:text-6xl font-extrabold leading-tight text-primary tracking-tight">
              Vaultix - State of Art Next-Gen ITSM Platform
            </h1>

              <ul className="text-lg md:text-2xl font-medium list-disc pl-5 space-y-2 text-foreground">
                <li>Unified asset management</li>
                <li>SBOM tracking</li>
                <li>Intelligent ticket resolution for modern enterprises</li>
              </ul>


            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Vaultix helps organizations streamline IT service management with powerful
              asset tracking, ticketing, and compliance-driven workflows—giving teams
              complete visibility and operational efficiency.
            </p>

            <Link href="/contact?subject=Vumas%20Demo" passHref legacyBehavior>
              <Button size="lg" className="bg-gradient-to-r from-violet-500 to-blue-600 text-white font-semibold hover:opacity-90 transition duration-300 text-lg shadow-md rounded-full px-10 cursor-pointer">
                Get a Demo
              </Button>
            </Link>
          </div>

          {/* image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-200 rounded-lg overflow-hidden shadow-lg relative w-full h-[350px] md:h-[350px] lg:h-[400px] pl-50"
          >
            <Image
              src="/assets/products/Vumas.png"
              alt="Vaultix Dashboard"
              fill
              className="object-contain-cover"
            />
          </motion.div>
        </motion.div>

        {/* ================= WHY VAULTIX ================= */}
        <motion.section
          className="relative py-24 bg-gray-900 overflow-hidden text-white rounded-3xl mb-24"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
        >
          {/* Background */}

          <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* LEFT CONTENT */}
            <motion.div variants={fadeUp}>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Why Vaultix is Critical <br /> for Modern Enterprises?
              </h2>

              <p className="mt-6 text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl">
                As enterprises adopt cloud, DevOps, and SaaS at scale, IT visibility and
                control become increasingly complex. Vaultix provides a unified platform
                to manage assets, risks, and service workflows with automation and
                compliance at its core.
              </p>
            </motion.div>

            {/* RIGHT ACCORDION */}
            <div className="divide-y divide-white/10">
              {[
                {
                  title: 'Unrestricted Access & Asset Sprawl',
                  desc:
                    'Disconnected tools and unmanaged assets lead to excessive access and hidden risks. Vaultix centralizes asset ownership, permissions, and dependencies across environments.',
                },
                {
                  title: 'Lack of End-to-End Visibility',
                  desc:
                    'Organizations struggle to track assets, software dependencies, and tickets in one place. Vaultix delivers real-time visibility across IT, cloud, and software supply chains.',
                },
                {
                  title: 'Manual & Reactive Operations',
                  desc:
                    'Manual audits, ticket creation, and compliance checks slow teams down. Vaultix automates discovery, SBOM generation, ticketing, and remediation workflows.',
                },
              ].map((item, index) => (
                <motion.details
                  key={index}
                  variants={fadeUp}
                  className="group py-6 cursor-pointer bg-black/30 rounded-xl px-6 mb-3"
                  open={index === 2}
                  {...cardHover}
                >
                  <summary className="flex items-center justify-between list-none">
                    <span className="text-xl font-semibold">{item.title}</span>
                    <span className="text-2xl transition-transform duration-300 group-open:rotate-180">+</span>
                  </summary>

                  <p className="mt-4 text-gray-400 leading-relaxed max-w-xl">
                    {item.desc}
                  </p>
                </motion.details>
              ))}
            </div>
          </div>
        </motion.section>

        {/* key features section */}

        <motion.section
          className="mb-24 rounded-lg py-16 px-6 md:px-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-center text-primary tracking-tight mb-12">
            Key Features of Vaultix 🔍
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

            {[Layers, Brain, ScanSearch, LinkIcon].map((Icon, idx) => {
              const data = [
                ['Curated Threat Feeds', 'Access hand-picked threat data tailored to your industry, updated in real time from trusted sources.', 'text-blue-500'],
                ['Dark Web Monitoring', 'Monitor underground forums, marketplaces, and leak sites for mentions of your brand, employees, and assets.', 'text-purple-500'],
                ['IOC Tracking & Alerts', 'Get real-time alerts on indicators of compromise and track malicious infrastructure targeting your environment.', 'text-green-500'],
                ['Executive Threat Briefings', 'Weekly reports summarizing threats relevant to your business with action steps for leadership.', 'text-orange-500'],
              ][idx];

              return (
                <motion.div key={idx} variants={fadeUp} {...cardHover}>
                  <Card className="shadow-md hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-3">
                        <Icon className={`w-6 h-6 ${data[2]}`} />
                        <span>{data[0]}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">{data[1]}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}

          </div>
        </motion.section>

        {/* ================= VAULTIX CHALLENGES ================= */}
        <motion.section
          className="relative py-24 mb-20 bg-gray-900 overflow-hidden text-white rounded-3xl"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
        >
          <div className="relative max-w-7xl mx-auto px-6 text-center">

            {/* Heading */}
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-extrabold mb-4 text-primary tracking-tight">
              Common ITSM & Asset Management Challenges
            </motion.h2>

            <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-20">
              Addressing core IT visibility, workflow, and compliance challenges is
              critical to maintaining operational efficiency and reducing enterprise
              risk.
            </motion.p>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

              {[
                ['!', 'Tool Sprawl & Alert Noise', 'Multiple disconnected tools generate excessive alerts without context, causing teams to miss critical asset and security issues.', 'text-red-500'],
                ['⏱', 'Delayed Incident Resolution', 'Manual ticket creation and unclear ownership slow down response times, impacting SLAs and business continuity.', 'text-blue-400'],
                ['⚠', 'Compliance & Audit Gaps', 'Lack of real-time asset inventory and SBOM visibility leads to audit failures, licensing risks, and regulatory non-compliance.', 'text-purple-400'],
              ].map((c, i) => (
                <motion.div key={i} variants={fadeUp} {...cardHover} className="flex flex-col items-center text-center space-y-4 bg-black/40 p-8 rounded-2xl border border-white/10 shadow-xl">
                  <div className="w-16 h-16 flex items-center justify-center border border-white/20 rounded-lg">
                    <span className={`${c[3]} text-3xl font-bold`}>{c[0]}</span>
                  </div>
                  <h3 className="text-2xl font-semibold">{c[1]}</h3>
                  <p className="text-gray-400 leading-relaxed">{c[2]}</p>
                </motion.div>
              ))}

            </div>
          </div>
        </motion.section>

        {/* ================= CTA ================= */}
        <motion.section variants={fadeUp} className="border-t py-20">
          <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
            <h2 className="text-3xl font-bold text-primary tracking-tight">
              Simplify IT Operations with Vaultix
            </h2>
            <p className="text-lg text-muted-foreground">
              Gain full visibility, reduce risk, and automate workflows with a
              unified ITSM and asset management platform.
            </p>
            <Button size="lg" className="rounded-full px-10">
              Talk to an Expert
            </Button>
          </div>
        </motion.section>

        {/* why vumas stand out */}

        <motion.section variants={fadeUp} className="bg-muted rounded-lg py-16 px-6 md:px-12 mb-24">
          <h2 className="text-3xl font-bold text-center text-primary tracking-tight mb-12">
            Why Vaultix Stands Out 🧠
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[Layers, Brain, ScanSearch].map((Icon, i) => (
              <motion.div key={i} {...cardHover} className="text-center">
                <div className="inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-600 p-6 mb-4">
                  <Icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {['Focused Intelligence', 'Deep Visibility', 'Proactive Response'][i]}
                </h3>
                <p className="text-muted-foreground">
                  {[
                    'Feeds customized for your sector and assets ensure relevance and actionability.',
                    'Uncover hidden threats from the dark web and obscure sources not seen by typical scanners.',
                    'Receive timely alerts and guidance, helping you stay steps ahead of attackers.',
                  ][i]}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ================= VAULTIX FAQ ================= */}
        {/* (unchanged visually, kept as requested) */}

        {/* Call to Action */}
        <motion.div variants={fadeUp} className="text-center py-12">
          <h2 className="text-3xl font-bold text-primary tracking-tight mb-6">
            Empower Your Threat Intelligence Today
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Learn how Vumas can elevate your security strategy with deeper, contextual threat intelligence.
          </p>
          <Link href="/contact?subject=Vumas%20Demo" passHref legacyBehavior>
            <Button size="lg" className="bg-gradient-to-r from-violet-500 to-blue-600 text-white font-semibold hover:opacity-90 transition duration-300 text-lg shadow-md rounded-full px-8">
              Request a Vaultix Demo
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Vumas;
