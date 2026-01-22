'use client';

import Link from 'next/link';
import {
  ShieldAlert,
  Server,
  Lock,
  Bug,
  Network,
  LineChart,
} from 'lucide-react';

export default function APIPenTestingPage() {
  return (
    <main className="w-full bg-gray-50 text-gray-900">

      {/* ================= HERO ================= */}
      <section
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/services/wapt.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/40"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
            API Penetration Testing
          </h1>

          <p className="mt-6 text-sm md:text-xl text-gray-200 max-w-4xl text-left">
            Application Programming Interface (API) Penetration Testing services
            to protect the first line of defense of your applications.
            We attack APIs like real hackers to uncover vulnerabilities,
            business logic flaws, and data exposure risks.
          </p>

          <Link href="/contact">
            <button className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
              Secure Your APIs Now
            </button>
          </Link>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
              API Security Testing Services
            </h2>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              APIs are the connective tissue of modern applications.
              Our API penetration testing team digs deep into your API ecosystem,
              penetrates real attack paths, and reports critical security flaws
              that automated scanners fail to detect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div className="ml-6">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Why API Penetration Testing Matters
              </h3>

              <ul className="space-y-4 text-gray-800 dark:text-gray-200">
                <li>• Simulate real-world API attacks</li>
                <li>• Detect business logic vulnerabilities</li>
                <li>• Prevent data leakage and abuse</li>
                <li>• Improve API development quality</li>
                <li>• Ensure compliance with security standards</li>
              </ul>
            </div>

            <div className="flex justify-center md:justify-end">
              <img
                src="/assets/services/wapt.webp"
                alt="API Security Testing"
                className="w-full max-w-md rounded-xl shadow-lg"
              />
            </div>

          </div>
        </div>
      </section>

    
      {/* ================= SERVICES GRID ================= */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-4xl font-semibold text-primary mb-14">
            Our API Penetration Testing Capabilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {[
              {
                title: 'OWASP API Top 10',
                desc: 'Assessment against OWASP API Top 10 vulnerabilities including authorization, authentication, and injection flaws.',
              },
              {
                title: 'Business Logic Testing',
                desc: 'Identify design and implementation flaws that enable unintended API behavior.',
              },
              {
                title: 'REST, SOAP & GraphQL',
                desc: 'Comprehensive testing for REST, SOAP, RPC, and GraphQL APIs.',
              },
              {
                title: 'Authentication & Authorization',
                desc: 'Validate token handling, session management, and access control enforcement.',
              },
              {
                title: 'Data Exposure & PII',
                desc: 'Detect excessive data exposure and sensitive information leakage.',
              },
              {
                title: 'Rate Limiting & Abuse',
                desc: 'Test protection against brute force, abuse, and denial-of-service risks.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white dark:bg-muted border border-gray-200 dark:border-border rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <h3 className="font-semibold text-lg mb-3 text-blue-600 dark:text-blue-400">
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

      {/* ================= ENGAGEMENT PROCESS ================= */}
      <section className="py-24 px-6 md:px-20 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-center text-2xl md:text-3xl font-bold text-primary mb-16">
            How Our API Penetration Testing Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">

            <ul className="space-y-6 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li>• Information gathering & threat modeling</li>
              <li>• API mapping and business logic analysis</li>
              <li>• Manual and automated vulnerability testing</li>
              <li>• Exploitation of security weaknesses</li>
              <li>• Risk-based impact analysis</li>
            </ul>

            <ul className="space-y-6 md:ml-16 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li className="font-semibold">• Continuous Improvement</li>
              <ul className="ml-8 space-y-4 text-gray-700 dark:text-muted-foreground">
                <li>○ Developer-friendly remediation reports</li>
                <li>○ 1:1 security workshops</li>
                <li>○ Compliance-aligned documentation</li>
                <li>○ Complimentary retesting</li>
                <li>○ Up to 1-year on-call advisory</li>
              </ul>
            </ul>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 text-center bg-gray-50 dark:bg-background transition-colors">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Secure Your APIs Before Attackers Do
        </h2>

        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Identify real API risks, protect sensitive data,
          and strengthen your application security posture.
        </p>

        <Link href="/contact">
          <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-md hover:shadow-lg transition-all duration-300">
            Talk to an API Security Expert
          </button>
        </Link>
      </section>

    </main>
  );
}
