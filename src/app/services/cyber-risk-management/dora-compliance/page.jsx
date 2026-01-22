'use client';

import Link from 'next/link';
import { ShieldAlert, Crosshair, Bug, Users, AlertTriangle, Lock, LineChart } from 'lucide-react';

export default function DoraCompliancePage() {
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
            DORA Compliance Consulting
          </h1>

          <p className="mt-6 text-sm md:text-xl text-gray-200 max-w-4xl text-left">
            Keep your financial business safe from threats and achieve robust digital operational resilience with Wattlecorp experts.
          </p>

          <Link href="/contact">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition mt-6">
              Request a DORA Assessment
            </button>
          </Link>
        </div>
      </section>

      {/* ================= DORA OVERVIEW ================= */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
              What is DORA Compliance?
            </h1>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              The Digital Operational Resilience Act (DORA) is an EU regulation designed to ensure cybersecurity resilience in the financial sector. It provides a comprehensive risk management framework for information and communication technology (ICT). Even in its draft form, early adoption is recommended for financial organizations to remediate vulnerabilities—including low and medium-rated ones—proactively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div className="ml-10">
              <h2 className="text-2xl font-semibold text-primary mb-6">
                Why DORA Compliance Matters
              </h2>

              <ul className="space-y-4 text-gray-800 dark:text-gray-200">
                <li>• Secure your financial services organization from all types of vulnerabilities</li>
                <li>• Implement safe and sound risk management processes</li>
                <li>• Identify and remediate vulnerabilities at every level</li>
                <li>• Monitor continuously to prevent emerging threats</li>
                <li>• Build trust with customers and regulatory bodies</li>
              </ul>
            </div>

            <div className="flex justify-center md:justify-end mr-20">
              <img
                src="/assets/services/dora.jpg"
                alt="DORA Compliance"
                className="w-full max-w-md rounded-xl shadow-lg"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= DORA SERVICES GRID ================= */}
      <section className="py-15 px-6 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-4xl font-semibold text-primary mb-14">
            Our DORA Compliance Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

            {[
              {
                title: 'Assessment',
                desc: 'We evaluate your security posture and identify vulnerabilities, even at the root level.'
              },
              {
                title: 'Reporting',
                desc: 'Curate comprehensive vulnerability reports to help you understand and remediate risks.'
              },
              {
                title: 'Monitoring',
                desc: 'Proactively monitor for new vulnerabilities to maintain continuous compliance.'
              },
              {
                title: 'Compliance Guidance',
                desc: 'Assist financial organizations in meeting all DORA prerequisites and regulations.'
              },
              {
                title: 'Risk Management',
                desc: 'Implement safe and sound risk management processes to mitigate operational threats.'
              },
              {
                title: 'Advisory Support',
                desc: 'Expert support from cybersecurity professionals to guide you through DORA compliance.'
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

      {/* ================= HOW DORA COMPLIANCE WORKS ================= */}
      <section className="py-24 px-20 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-center text-2xl md:text-3xl font-bold text-primary mb-16">
            How Our DORA Compliance Consulting Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">

            <ul className="space-y-6 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li>• Assess your organization’s cybersecurity posture to identify vulnerabilities</li>
              <li>• Curate detailed reports highlighting risks and remediation steps</li>
              <li>• Implement continuous monitoring to detect new threats</li>
              <li>• Ensure adherence to DORA requirements for financial institutions</li>
              <li>• Provide expert guidance to maintain operational resilience</li>
            </ul>

            <ul className="space-y-6 ml-20 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li className="font-semibold">• Professional Insight & Support</li>
              <ul className="ml-10 space-y-4 text-gray-700 dark:text-muted-foreground">
                <li>○ Listen to clients and guide organizations in compliance</li>
                <li>○ Fix vulnerabilities proactively to meet regulatory standards</li>
                <li>○ Work closely with development teams to secure sensitive data</li>
                <li>○ Provide continuous evaluation and updates for evolving risks</li>
              </ul>
            </ul>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 text-center bg-gray-50 dark:bg-background transition-colors">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Achieve Digital Operational Resilience
        </h2>

        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Protect your financial business and ensure compliance with DORA standards with Wattlecorp’s expert consulting services.
        </p>

        <Link href="/contact">
          <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-md hover:shadow-lg transition-all duration-300">
            Request a DORA Assessment
          </button>
        </Link>
      </section>

    </main>
  );
}
