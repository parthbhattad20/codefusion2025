'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  ArrowBigLeft,
  ShieldCheck,
  Zap,
  Plug,
  Eye,
  Lock,
  Network,
  Plus,
  Minus,
  Cpu,
  Gauge,
  Layers
} from 'lucide-react';

const VCrypt = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground py-16 mt-10 lg:mt-20 overflow-hidden">

      {/* Ambient page glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[-20%] left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full
          bg-gradient-to-tr from-violet-500/10 to-blue-500/10 blur-3xl" />
      </div>

      <div className="container max-w-7xl mx-auto px-6">

        {/* Back */}
        <div className="mb-10">
          <Link
            href="/products"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition"
          >
            <ArrowBigLeft className="mr-2" /> Back to Products
          </Link>
        </div>

        {/* HERO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-28">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-5xl font-extrabold text-primary tracking-tight">
              V-Crypt – Smart SFP Edge Encryption
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
              {/* Get a Demo Button */}
              <a href="/contact?subject=V-Crypt%20Demo">
                <Button size="lg" className="bg-gradient-to-r from-violet-500 to-blue-600 text-foreground font-semibold hover:opacity-90 transition duration-300 text-base shadow-md rounded-full px-10 cursor-pointer">
                  Get a Demo
                </Button>
              </a>

              {/* V-Crypt Document Download Button */}
              <a
                href="/docs/V-crypt-Brochure.pdf"
                download
                className="bg-gradient-to-r from-violet-500 to-blue-600 text-foreground font-semibold hover:opacity-90 transition duration-300 text-base shadow-md rounded-full px-5 inline-flex items-center justify-center"
              >
                Download Brochure
              </a>
            </div>
          </div>

          {/* Hero image with glow */}
          <div
            className="relative w-full h-[360px] rounded-2xl overflow-hidden
              bg-card border border-border shadow-lg
              before:absolute before:inset-0 before:rounded-2xl
              before:bg-gradient-to-tr before:from-violet-500/10 before:to-blue-500/10
              before:blur-xl before:content-['']"
          >
            <Image
              src="/assets/products/about.jpg"
              alt="V-Crypt Smart SFP"
              fill
              className="object-contain relative z-10"
            />
          </div>
        </div>


      {/* ================= WHY V-CRYPT ================= */}
<section className="relative py-20 bg-muted/40 border-y border-border overflow-hidden text-foreground">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

    {/* LEFT CONTENT */}
    <div className="space-y-6 lg:self-center">
      <h2 className="text-3xl md:text-4xl font-bold text-primary">
        Why V-Crypt?
      </h2>
      <p className="mt-4 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
        Traditional encryption appliances are expensive, slow to deploy, and complex to manage.
        <strong> V-Crypt delivers AES-256 hardware-based encryption directly at the network edge,</strong> 
        ensuring secure, real-time telemetry, tamper alerts, and simplified deployment.
      </p>
    </div>

    {/* RIGHT ACCORDION / FEATURE CARDS */}
    <div className="divide-y divide-border">
      {[
        {
          title: 'Zero-touch Encryption',
          desc: 'Enable encryption instantly at the device port without additional racks, appliances, or configuration.'
        },
        {
          title: 'Real-time Link Intelligence',
          desc: 'Continuous monitoring, tamper alerts, and secure key management for all network ports.'
        },
        {
          title: 'Inline Data Protection',
          desc: 'AES-256 encryption for data-in-motion across WAN, LAN, and critical infrastructure without latency.'
        },
        {
          title: 'Vendor-Neutral Deployment',
          desc: 'Compatible with Cisco, Juniper, MikroTik, and other network devices for flexible integration.'
        },
      ].map((item, index) => (
        <details
          key={index}
          className="group py-6 cursor-pointer"
          open={index === 0} // first item open by default
        >
          <summary className="flex items-center justify-between list-none text-lg font-semibold">
            <span>{item.title}</span>
            <span className="text-2xl transition-transform duration-300 group-open:rotate-180">
              +
            </span>
          </summary>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-lg">
            {item.desc}
          </p>
        </details>
      ))}
    </div>

  </div>
</section>



       {/* CORE CAPABILITIES */}
<section className="relative py-24">
  {/* Background Image */}
  <div className="absolute inset-0">
    <Image
      src="/assets/products/bg1.webp"
      alt="Enterprise IT Assets Background"
      fill
      className="object-cover object-center opacity-10"
      priority
    />
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-16">
      Core Capabilities
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { icon: Lock, title: 'AES-256 Encryption', desc: 'Inline, hardware-based encryption with IPsec ESP support.' },
        { icon: Plug, title: 'Plug-and-Play SFP', desc: 'Installs like a standard SFP with no network changes.' },
        { icon: Zap, title: 'Line-Rate Performance', desc: '100 Mbps / 1 GbE encryption with zero latency impact.' },
        { icon: Eye, title: 'Traffic Visibility', desc: 'Real-time telemetry and anomaly detection.' },
        { icon: Network, title: 'Vendor Neutral', desc: 'Compatible with Cisco, Juniper, Mikrotik, and more.' },
        { icon: ShieldCheck, title: 'Secure Key Vault', desc: 'Cryptographic keys stored securely inside the module.' }
      ].map((f, i) => (
        <div
          key={i}
          className="
            bg-card p-6 rounded-2xl border-2 border-border shadow-sm
            transition-all duration-300
            hover:-translate-y-1 hover:shadow-xl
            hover:ring-1 hover:ring-primary/20
          "
        >
          <f.icon className="w-6 h-6 text-primary mb-4 drop-shadow-[0_0_8px_rgba(139,92,246,0.35)]" />
          <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
          <p className="text-muted-foreground text-sm">{f.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>


       {/* COMPARISON – Professional Card Layout */}
<section className="py-24 bg-muted/40 border-y border-border">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-16">
    V-Crypt vs Traditional Encryption Appliances
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
    {/* Metric Card */}
    {[
      {
        metric: 'Deployment Time',
        traditional: 'Days to weeks',
        vcrypt: 'Minutes',
        icon: '⏱'
      },
      {
        metric: 'Encryption Start Point',
        traditional: 'Mid-network',
        vcrypt: 'At the device port',
        icon: '🔒'
      },
      {
        metric: 'Power Consumption',
        traditional: 'High',
        vcrypt: '< 2.5W',
        icon: '⚡'
      },
      {
        metric: 'Scalability',
        traditional: 'Limited',
        vcrypt: 'Every port secured',
        icon: '📈'
      }
    ].map((row, i) => (
      <div
        key={i}
        className="bg-card rounded-2xl p-6 shadow-md border border-border
                   hover:shadow-xl transition-transform duration-300 hover:-translate-y-1"
      >
        {/* Icon / Badge */}
        <div className="text-3xl mb-4">{row.icon}</div>

        {/* Metric Name */}
        <h3 className="text-lg font-semibold text-foreground mb-4">{row.metric}</h3>

        {/* Comparison */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground font-medium">Traditional</span>
            <span className="text-sm text-muted-foreground">{row.traditional}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground font-medium">V-Crypt</span>
            <span className="text-sm text-primary font-semibold">{row.vcrypt}</span>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>




        {/* TECHNICAL */}
        <section className="py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-16">
            Technical Architecture & Deployment
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[Cpu, Gauge, Layers].map((Icon, i) => (
              <div
                key={i}
                className="
                  bg-card p-8 rounded-2xl border-2 border-border shadow-sm
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-xl
                  hover:ring-1 hover:ring-primary/20
                "
              >
                <Icon className="w-8 h-8 text-primary mb-4 drop-shadow-[0_0_10px_rgba(139,92,246,0.35)]" />
                <h3 className="text-xl font-semibold mb-2">
                  {i === 0 ? 'Embedded Architecture' : i === 1 ? 'Ultra-Fast Deployment' : 'Centralized Management'}
                </h3>
                <p className="text-muted-foreground">
                  {i === 0
                    ? 'FPGA-based design with built-in cryptographic processing and telemetry.'
                    : i === 1
                    ? 'Drop-in SFP replacement with instant encryption.'
                    : 'Cloud or on-prem controller with unified policy and monitoring.'}
                </p>
              </div>
            ))}
          </div>
        </section>

       {/* FAQ */}
<section className="py-24 bg-muted/40 border-y border-border">
  <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-16 text-primary">
    Frequently Asked Questions
  </h2>

  <div className="max-w-4xl mx-auto divide-y divide-border">
    {[
      {
        q: 'What is V-Crypt?',
        a: 'V-Crypt is a Smart SFP security module that delivers AES-256 hardware encryption at the port level.'
      },
      {
        q: 'How is V-Crypt different from traditional appliances?',
        a: 'It embeds encryption inside the SFP, removing bulky appliances and enabling zero-touch deployment.'
      },
      {
        q: 'Is V-Crypt compliant?',
        a: 'Yes. It supports audit-ready telemetry aligned with PCI, HIPAA, and government standards.'
      }
    ].map((f, i) => (
      <details
        key={i}
        className="group py-6 transition-all duration-500 ease-in-out
          group-open:bg-muted/40 group-open:px-4 group-open:rounded-xl overflow-hidden"
      >
        <summary className="flex items-center justify-between cursor-pointer list-none select-none">
          <span className="text-lg font-semibold">{f.q}</span>
          <span className="ml-4 transition-transform duration-300 group-open:rotate-180">
            <Plus className="group-open:hidden w-6 h-6" />
            <Minus className="hidden group-open:block w-6 h-6" />
          </span>
        </summary>

        <p className="mt-4 text-muted-foreground leading-relaxed opacity-0 max-h-0 transition-all duration-500 ease-in-out
          group-open:opacity-100 group-open:max-h-96">
          {f.a}
        </p>
      </details>
    ))}
  </div>
</section>


        {/* CTA */}
        <div className="text-center py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            You Plug It. V-Crypt Secures It.
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Secure every fiber connection with Smart SFP-based edge encryption.
          </p>


            <Link href="/contact?subject=Vumas%20Demo" passHref>
          <Button
            size="lg"
            className="
              rounded-full px-12
              bg-gradient-to-r from-violet-500 to-blue-600
              shadow-lg shadow-violet-500/20
              hover:shadow-xl hover:shadow-blue-500/30
              transition-all duration-300
            "
          >
           Speak with Our Experts
          </Button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default VCrypt;
