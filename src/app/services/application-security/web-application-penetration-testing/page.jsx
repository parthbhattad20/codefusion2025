'use client';

import Link from 'next/link';
import {
  ShieldCheck,
  AlertTriangle,
  Lock,
  LineChart,
  ClipboardCheck,
  Users,
} from 'lucide-react';

export default function WebAppPentestPage() {
  return (
    <main className="w-full bg-gray-50 dark:bg-background text-gray-900 dark:text-foreground">

      {/* ================= HERO ================= */}
      <section
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/services/wapt.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
            Web Application Penetration Testing
          </h1>

          <p className="mt-6 text-sm md:text-xl text-gray-200 max-w-4xl">
            In-depth security assessment of your web applications to identify
            vulnerabilities, business logic flaws, and compliance gaps using
            real-world attacker simulation.
          </p>

          <Link href="/contact">
            <button className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
              GET STARTED
            </button>
          </Link>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-background">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            What We Do
          </h2>

          <p className="mt-6 max-w-5xl mx-auto text-lg text-gray-700 dark:text-muted-foreground leading-relaxed">
            Our application security testing assists in detecting vulnerabilities
            across web applications and online services. We go beyond automated
            scanners by simulating real hackers, identifying the most vulnerable
            components, prioritizing risk, and providing remediation guidance.
          </p>

          <p className="mt-6 max-w-5xl mx-auto text-lg text-gray-700 dark:text-muted-foreground leading-relaxed">
            Our testing includes OWASP Top 10, SANS Top 25, PCI, GDPR, HIPAA,
            HL7, NIST, ISO/IEC 27001 & 27002, with tailored security advice and
            up to one-month mitigation support.
          </p>
        </div>
      </section>

      {/* ================= KEY BENEFITS ================= */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-background">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-center text-3xl font-bold text-primary mb-14">
            Business Benefits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {[
              {
                title: 'Simulated Real-World Attacks',
                desc: 'Evaluate your real security posture using hacker-like techniques.',
              },
              {
                title: 'Faster Secure Development',
                desc: 'Improve developer speed and code quality with secure coding insights.',
              },
              {
                title: 'Lower Testing & Compliance Cost',
                desc: 'Reduce testing and compliance costs without compromising security.',
              },
              {
                title: 'Early Vulnerability Detection',
                desc: 'Identify and fix issues early in the SDLC.',
              },
              {
                title: 'Continuous Security Visibility',
                desc: 'Dashboards to monitor your web application security posture.',
              },
              {
                title: 'Release Without Delay',
                desc: 'Prevent security testing from delaying application releases.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white dark:bg-muted border rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <h3 className="font-semibold text-lg mb-3 text-blue-600 dark:text-blue-400">
                  {item.title}
                </h3>
                <p className="text-gray-700 dark:text-muted-foreground text-sm">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= METHODOLOGY ================= */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-background">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-center text-3xl font-bold text-primary mb-16">
            Our Penetration Testing Methodology
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg">

            <ul className="space-y-4">
              <li>• Information Gathering</li>
              <li>• Threat Modelling</li>
              <li>• Application Mapping</li>
              <li>• Vulnerability Detection</li>
              <li>• Manual Exploitation</li>
              <li>• Privilege Escalation</li>
            </ul>

            <ul className="space-y-4">
              <li>• Result Analysis</li>
              <li>• Developer-Friendly Reporting</li>
              <li>• Security Briefing Workshop</li>
              <li>• Mitigation Support</li>
              <li>• Complimentary Retesting</li>
              <li>• Summary Report</li>
            </ul>

          </div>
        </div>
      </section>

      {/* ================= WHAT WE TEST ================= */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-background">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-center text-3xl font-bold text-primary mb-16">
            What Do We Test?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">

            {[
              'OWASP Top 10 & SANS Top 25',
              'Broken Access Control & IDOR',
              'SQL Injection & XSS',
              'Business Logic Vulnerabilities',
              'Secure Communication & Encryption',
              'API & Web Services Security',
              'Source Code Review',
              'Updates, CVEs & Misconfigurations',
              'PII & Sensitive Data Exposure',
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white dark:bg-muted border rounded-xl p-5 shadow-sm"
              >
                {item}
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= DELIVERABLES ================= */}
      <section className="py-24 px-6 text-center bg-gray-50 dark:bg-background">

        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
          Web App Pen Test Deliverables
        </h2>

        <p className="max-w-4xl mx-auto text-lg text-gray-700 dark:text-muted-foreground mb-10">
          Developer-friendly reports, remediation workshops, retesting, secure
          badge, and up to one-year on-call advisory support.
        </p>

        <Link href="/contact">
          <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-md hover:shadow-lg transition">
            Talk to a Security Expert
          </button>
        </Link>

      </section>

    </main>
  );
}
