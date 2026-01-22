'use client';

import Link from 'next/link';
import { ShieldCheck, Bug, Code, Lock, AlertTriangle, Layers, LineChart } from 'lucide-react';

export default function ApplicationSecurityPage() {
  return (
    <main className="w-full bg-gray-50 text-gray-900">

      {/* ================= HERO ================= */}
      <section
        className="relative h-screen bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: "url('/assets/services/application.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/40"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-70">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
            Application Security Services
          </h1>

          <p className="mt-6 text-sm md:text-xl text-gray-200 max-w-4xl text-left">
            Vulnuris Application Security services help organizations identify, fix, and prevent security vulnerabilities
            across web, mobile, and API-based applications. We secure your software throughout the entire SDLC.
          </p>

          <Link href="/contact">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
              SPEAK WITH AN EXPERT
            </button>
          </Link>
        </div>
      </section>

      {/* ================= APPLICATION SECURITY OVERVIEW ================= */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
              Application Security (AppSec)
            </h1>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              Application Security focuses on protecting software applications from vulnerabilities that attackers exploit.
              This includes web apps, mobile apps, APIs, and cloud-native applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div className="ml-10">
              <h2 className="text-2xl font-semibold text-primary mb-6">
                Why Application Security Matters
              </h2>

              <ul className="space-y-4 text-gray-800 dark:text-gray-200">
                <li>• Prevent data breaches and unauthorized access</li>
                <li>• Secure customer and business-critical data</li>
                <li>• Reduce financial and reputational risk</li>
                <li>• Meet compliance requirements (PCI DSS, ISO, GDPR)</li>
                <li>• Build secure software from design to deployment</li>
              </ul>
            </div>

            <div className="flex justify-center md:justify-end mr-20">
              <img
                src="/assets/img.jpg"
                alt="Application Security"
                className="w-full max-w-md rounded-xl shadow-lg"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= APPLICATION SECURITY SERVICES GRID ================= */}
      <section className="py-15 px-6 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-4xl font-semibold text-primary mb-14">
            Application Security Services We Offer
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

            {[ 
              {
                title: 'Static Application Security Testing (SAST)',
                desc: 'Analyze source code to identify security flaws early in the development lifecycle.',
              },
              {
                title: 'Dynamic Application Security Testing (DAST)',
                desc: 'Test running applications to detect real-world vulnerabilities from an attacker’s perspective.',
              },
              {
                title: 'API Security Testing',
                desc: 'Identify authentication, authorization, and data exposure risks in APIs.',
              },
              {
                title: 'Secure Code Review',
                desc: 'Manual and automated review of application code to detect logic and design flaws.',
              },
              {
                title: 'DevSecOps Enablement',
                desc: 'Integrate security into CI/CD pipelines to enable continuous security testing.',
              },
              {
                title: 'Vulnerability Remediation Support',
                desc: 'Guidance to fix vulnerabilities efficiently and reduce reoccurrence.',
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

      {/* ================= APPLICATION SECURITY DETAILS ================= */}
      <section className="py-24 px-20 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-center text-2xl md:text-3xl font-bold text-sky-600 dark:text-sky-400 mb-16">
            How Our Application Security Program Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">

            <ul className="space-y-6 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li>• Identify vulnerabilities using automated and manual testing</li>
              <li>• Prioritize risks based on exploitability and business impact</li>
              <li>• Provide detailed remediation guidance for developers</li>
              <li>• Retest applications to validate fixes</li>
              <li>• Enable secure SDLC and DevSecOps practices</li>
            </ul>

            <ul className="space-y-6 ml-20 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li className="font-semibold">• Continuous Application Risk Management</li>
              <ul className="ml-10 space-y-4 text-gray-700 dark:text-muted-foreground">
                <li>○ Secure design and architecture review</li>
                <li>○ Ongoing vulnerability monitoring</li>
                <li>○ Secure deployment validation</li>
                <li>○ Developer security training</li>
                <li>○ Compliance-ready reporting</li>
              </ul>
              <li className="font-semibold ml-5">• Incident & Breach Support</li>
            </ul>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 text-center bg-gray-50 dark:bg-background transition-colors">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Secure Your Applications Before Attackers Do
        </h2>

        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Build secure, resilient applications with Vulnuris Application Security expertise.
        </p>

        <Link href="/contact">
          <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-md hover:shadow-lg transition-all duration-300">
            Talk to an AppSec Expert
          </button>
        </Link>
      </section>

    </main>
  );
}
