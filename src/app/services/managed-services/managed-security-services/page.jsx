'use client';

import Link from 'next/link';
import { ShieldAlert, Crosshair, Bug, Users, AlertTriangle, Lock, LineChart } from 'lucide-react';

export default function ManagedSecurityPage() {
  return (
    <main className="w-full bg-gray-50 text-gray-900">

      {/* ================= HERO ================= */}
      <section
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/services/managed-security.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/40"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-70">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
            Managed Security Services
          </h1>

          <p className="mt-6 text-sm md:text-xl text-gray-200 max-w-4xl text-left">
            From security operations to on-site management, Wattlecorp provides comprehensive managed security services in the UAE to protect your business and digital assets.
          </p>

          <Link href="/contact">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
              Start Your Security Journey
            </button>
          </Link>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
              Securing Your Business End-to-End
            </h1>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              Modern technology has exponentially increased the attack surface. Wattlecorp’s Managed Security Services (MSS) help UAE businesses detect vulnerabilities, prevent cyberattacks, and maintain compliance, letting you focus on operations while we handle your security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div className="ml-10">
              <h2 className="text-2xl font-semibold text-primary mb-6">
                Why Choose Managed Security Services
              </h2>

              <ul className="space-y-4 text-gray-800 dark:text-gray-200">
                <li>• End-to-end security coverage from SOC to on-site management</li>
                <li>• Continuous monitoring and proactive threat detection</li>
                <li>• Incident response and vulnerability mitigation</li>
                <li>• Compliance with UAE regulations and international standards</li>
                <li>• Tailored solutions for your business needs and industry</li>
              </ul>
            </div>

            <div className="flex justify-center md:justify-end mr-20">
              <img
                src="/assets/services/managed-security-t.jpg"
                alt="Managed Security Services"
                className="w-full max-w-md rounded-xl shadow-lg"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="py-15 px-6 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-4xl font-semibold text-primary mb-14">
            Our Managed Security Capabilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

            {[
              {
                title: 'Security Operations & Monitoring',
                desc: '24/7 monitoring of network, digital assets, and traffic logs for rapid detection and response.',
              },
              {
                title: 'Cyber Vulnerability Management',
                desc: 'Identify, assess, and mitigate vulnerabilities across systems and applications.',
              },
              {
                title: 'Managed Detection & Response (MDR)',
                desc: 'Advanced threat mitigation to support your in-house security team.',
              },
              {
                title: 'Cyber Threat Intelligence',
                desc: 'Data-driven insights to proactively detect and prevent adversary attacks.',
              },
              {
                title: 'Compliance & Risk Consulting',
                desc: 'Ensure adherence to UAE cybersecurity regulations while strengthening security posture.',
              },
              {
                title: 'End-to-End Managed Services',
                desc: 'Tailored security solutions covering operations, on-site support, and continuous improvement.',
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

      {/* ================= DETAILS ================= */}
      <section className="py-24 px-20 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-center text-2xl md:text-3xl font-bold text-primary mb-16">
            How Our Managed Security Services Work
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">

            <ul className="space-y-6 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li>• Discovery & Service Planning: Analyze IT environment, incidents, and business goals.</li>
              <li>• SLA Creation: Define obligations, commitments, and responsibilities between MSP and client.</li>
              <li>• Knowledge Transition: Document IT assets, configurations, policies, and processes.</li>
              <li>• Service Delivery: Provide managed services with detailed reporting and visibility.</li>
            </ul>

            <ul className="space-y-6 ml-20 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li className="font-semibold">• Comprehensive Security Coverage</li>
              <ul className="ml-10 space-y-4 text-gray-700 dark:text-muted-foreground">
                <li>○ Security Infrastructure & Event Management (SIEM)</li>
                <li>○ Cyber Vulnerability Management</li>
                <li>○ Managed Detection & Response (MDR)</li>
                <li>○ Cyber Threat Intelligence</li>
                <li>○ Compliance & Risk Reporting</li>
              </ul>
              <li className="font-semibold ml-5">• Tailored & Professional Services</li>
            </ul>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 text-center bg-gray-50 dark:bg-background transition-colors">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Protect Your Business with Expert Managed Security
        </h2>

        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Hand over your security to Wattlecorp and focus on your core business while we proactively monitor, detect, and mitigate threats for your UAE operations.
        </p>

        <Link href="/contact">
          <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-md hover:shadow-lg transition-all duration-300">
            Start Your Security Journey
          </button>
        </Link>
      </section>

    </main>
  );
}
