'use client';

import Link from 'next/link';
import { ShieldAlert, Crosshair, Bug, Users, AlertTriangle, Lock, LineChart } from 'lucide-react';

export default function CyberSecurityConsultingPage() {
  return (
    <main className="w-full bg-gray-50 text-gray-900">

      {/* ================= HERO ================= */}
      <section className="relative h-screen overflow-hidden">

  {/* VIDEO BACKGROUND */}
  <video
    className="absolute top-0 left-0 w-full h-full object-cover"
    src="/assets/videos/iso27001.mp4"
    autoPlay
    loop
    muted
    playsInline
  />

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/40"></div>


        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-70">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
            Cyber Security Strategic Consulting
          </h1>

          <p className="mt-6 text-sm md:text-xl text-gray-200 max-w-4xl text-left">
            Build secure, long-lasting strategies to protect your digital assets and safeguard your business in the UAE.
          </p>

          <Link href="/contact">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition mt-6">
              Get Your Free Consultation
            </button>
          </Link>
        </div>
      </section>

      {/* ================= CONSULTING OVERVIEW ================= */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
              Cyber Security Strategic Consulting in the UAE
            </h1>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              Only a hacker could tell you how to hack a system; imagine a team of hackers preparing a kit that highlights all potential vulnerabilities. Our consulting services compile the information you need to build a robust security strategy, protecting your digital assets, resources, and money. Ideal for NESA (SIA), ISR, ISO 27001, ADSIC, ADHICS, and PCI DSS compliance in the UAE.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div className="ml-10">
              <h2 className="text-2xl font-semibold text-primary mb-6">
                Why Strategic Consulting Matters
              </h2>

              <ul className="space-y-4 text-gray-800 dark:text-gray-200">
                <li>• Protect your digital assets and business-critical data</li>
                <li>• Develop long-term, effective cybersecurity strategies</li>
                <li>• Receive expert guidance from world-class consultants in the UAE</li>
                <li>• Ensure compliance with regional and international standards</li>
                <li>• Prevent financial and reputational losses</li>
              </ul>
            </div>

            <div className="flex justify-center md:justify-end mr-20">
              <img
                src="/assets/services/cyber-overview.jpg"
                alt="Cyber Security Consulting"
                className="w-full max-w-md rounded-xl shadow-lg"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= CONSULTING SERVICES GRID ================= */}
      <section className="py-15 px-6 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-4xl font-semibold text-primary mb-14">
            Our Cyber Security Consulting Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

            {[
              {
                title: 'Strategy Development',
                desc: 'Create brilliant, long-term cybersecurity strategies tailored to your business.'
              },
              {
                title: 'Risk Assessment',
                desc: 'Identify vulnerabilities and risks to your digital assets for proactive mitigation.'
              },
              {
                title: 'Compliance Guidance',
                desc: 'Ensure adherence to NESA (SIA), ISR, ISO 27001, ADSIC, ADHICS, and PCI DSS standards.'
              },
              {
                title: 'Feasible Solutions',
                desc: 'Flexible consulting solutions for small to large businesses with digital assets.'
              },
              {
                title: 'Implementation Roadmaps',
                desc: 'Practical step-by-step plans to secure systems, networks, and sensitive data.'
              },
              {
                title: 'Continuous Advisory',
                desc: 'Ongoing support to keep your cybersecurity strategy robust and adaptive.'
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white dark:bg-muted border border-gray-200 dark:border-border rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <h3 className="font-semibold text-lg mb-3 text-blue-600 dark:text-blue-400 group-hover:text-violet-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-700 dark:text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= HOW CONSULTING WORKS ================= */}
      <section className="py-24 px-20 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-center text-2xl md:text-3xl font-bold text-primary mb-16">
            How Our Cyber Security Consulting Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">

            <ul className="space-y-6 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li>• Analyze your business from all angles to identify vulnerabilities</li>
              <li>• Develop a world-class security consulting kit</li>
              <li>• Guide you in protecting every bit of data and asset</li>
              <li>• Provide feasible solutions for small, medium, and large businesses</li>
              <li>• Ensure long-term, sustainable cybersecurity strategies</li>
            </ul>

            <ul className="space-y-6 ml-20 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li className="font-semibold">• Expert Advisory & Implementation</li>
              <ul className="ml-10 space-y-4 text-gray-700 dark:text-muted-foreground">
                <li>○ Advice from experienced cybersecurity professionals in the UAE</li>
                <li>○ Roadmaps for NESA, ISR, ISO 27001, ADSIC, ADHICS, PCI DSS compliance</li>
                <li>○ Protection of your most valuable digital assets</li>
                <li>○ Continuous monitoring and updates for evolving threats</li>
              </ul>
              <li className="font-semibold ml-5">• Free Consultation</li>
            </ul>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 text-center bg-gray-50 dark:bg-background transition-colors">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Build a Secure Future for Your Digital Assets
        </h2>

        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Get a world-class cybersecurity consulting report and strategy to safeguard your business with Wattlecorp experts in the UAE.
        </p>

        <Link href="/contact">
          <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-md hover:shadow-lg transition-all duration-300">
            Get Your Free Consultation
          </button>
        </Link>
      </section>

    </main>
  );
}
