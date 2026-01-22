'use client';

import Link from 'next/link';
import { ShieldAlert, Crosshair, Bug, Users, AlertTriangle, Lock, LineChart } from 'lucide-react';

export default function PCIDSSPage() {
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
            PCI DSS Compliance Services
          </h1>

          <p className="mt-6 text-sm md:text-xl text-gray-200 max-w-4xl text-left">
            Protect cardholder data, secure payment services, and mitigate fraud with expert PCI DSS compliance services in the UAE.
          </p>

          <Link href="/contact">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition mt-6">
              Speak with an Expert
            </button>
          </Link>
        </div>
      </section>

      {/* ================= PCI DSS OVERVIEW ================= */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
              What is PCI DSS?
            </h1>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              The Payment Card Industry Data Security Standard (PCI DSS) is a set of security standards developed to protect cardholder data and prevent fraud. It is applicable to any organization handling debit or credit card transactions, ensuring secure payment processing and customer trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div className="ml-10">
              <h2 className="text-2xl font-semibold text-primary mb-6">
                Why PCI DSS Compliance Matters
              </h2>

              <ul className="space-y-4 text-gray-800 dark:text-gray-200">
                <li>• Protect cardholder data and reduce risk of breaches</li>
                <li>• Detect and prevent fraudulent transactions</li>
                <li>• Build greater customer trust and loyalty</li>
                <li>• Ensure secure and compliant payment systems</li>
                <li>• Minimize legal, financial, and reputational risks</li>
              </ul>
            </div>

            <div className="flex justify-center md:justify-end mr-20">
              <img
                src="/assets/services/pci-overview.jpg"
                alt="PCI DSS Compliance"
                className="w-full max-w-md rounded-xl shadow-lg"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= PCI DSS SERVICES GRID ================= */}
      <section className="py-15 px-6 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-4xl font-semibold text-primary mb-14">
            Our PCI DSS Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

            {[
              {
                title: 'PCI DSS Gap Assessment',
                desc: 'Evaluate your current security measures against PCI DSS requirements to identify gaps.'
              },
              {
                title: 'Cyber Risk Assessment',
                desc: 'Identify potential risks to cardholder data and ensure robust security controls.'
              },
              {
                title: 'Risk Treatment Plan',
                desc: 'Develop actionable strategies to close gaps and achieve compliance.'
              },
              {
                title: 'Policies & Procedures',
                desc: 'Create information security policies to protect cardholder data and prevent fraud.'
              },
              {
                title: 'Technology Implementation',
                desc: 'Set up firewalls, authentication, anti-virus, and other measures to safeguard data.'
              },
              {
                title: 'Security Testing',
                desc: 'Regular vulnerability assessments and penetration testing to maintain PCI DSS compliance.'
              },
              {
                title: 'Implementation Reviews',
                desc: 'Conduct internal audits to detect deviations and ensure adherence to PCI DSS standards.'
              },
              {
                title: 'PCI DSS Internal Audits',
                desc: 'Perform comprehensive audits to verify compliance with PCI DSS requirements.'
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

      {/* ================= HOW PCI DSS WORKS ================= */}
      <section className="py-24 px-20 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-center text-2xl md:text-3xl font-bold text-primary mb-16">
            How Our PCI DSS Engagement Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">

            <ul className="space-y-6 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li>• Conduct PCI DSS Gap Assessment and Cyber Risk Evaluation</li>
              <li>• Implement Policies, Procedures, and Technical Controls</li>
              <li>• Perform Security Testing and Internal Audits</li>
              <li>• Develop Risk Treatment and Compliance Plans</li>
              <li>• Continuous Monitoring and Implementation Reviews</li>
            </ul>

            <ul className="space-y-6 ml-20 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li className="font-semibold">• Continuous Compliance</li>
              <ul className="ml-10 space-y-4 text-gray-700 dark:text-muted-foreground">
                <li>○ Regular audits to detect deviations</li>
                <li>○ Maintain secure cardholder data environment</li>
                <li>○ Prevent data breaches and fraud</li>
                <li>○ Ensure trust with customers and partners</li>
              </ul>
              <li className="font-semibold ml-5">• Risk Reduction & Trust Assurance</li>
            </ul>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 text-center bg-gray-50 dark:bg-background transition-colors">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Protect Cardholder Data & Ensure PCI DSS Compliance
        </h2>

        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Safeguard your customers’ payment data, prevent fraud, and maintain trust with Wattlecorp PCI DSS experts in the UAE.
        </p>

        <Link href="/contact">
          <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-md hover:shadow-lg transition-all duration-300">
            Speak With a PCI DSS Expert
          </button>
        </Link>
      </section>

    </main>
  );
}
