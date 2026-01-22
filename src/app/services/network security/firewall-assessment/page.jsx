'use client';

import Link from 'next/link';
import { ShieldAlert, Crosshair, Bug, Users, AlertTriangle, Lock, LineChart } from 'lucide-react';

export default function FirewallAuditPage() {
  return (
    <main className="w-full bg-gray-50 text-gray-900">

      {/* ================= HERO ================= */}
      <section
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/services/firewall.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/40"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-70">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
            Firewall Security Audit
          </h1>

          <p className="mt-6 text-sm md:text-xl text-gray-200 max-w-4xl text-left">
            Ensure your network’s frontier guardian is secure. Our Firewall Security Audit identifies misconfigurations,
            vulnerabilities, and strengthens your defenses against unauthorized access and network attacks.
          </p>

          <Link href="/contact">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
              REQUEST AUDIT
            </button>
          </Link>
        </div>
      </section>

      {/* ================= FIREWALL AUDIT OVERVIEW ================= */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
              What is a Firewall Security Audit?
            </h1>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              A firewall audit assesses the configuration and rules of your firewall—hardware, software, or both—to ensure
              your network is protected against unauthorized access, Denial-of-Service (DoS) attacks, and other threats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div className="ml-10">
              <h2 className="text-2xl font-semibold text-primary mb-6">
                Why Firewall Audits Matter
              </h2>

              <ul className="space-y-4 text-gray-800 dark:text-gray-200">
                <li>• Strengthen your network security and firewall implementation</li>
                <li>• Identify and fix misconfigurations in rules and policies</li>
                <li>• Improve visibility into incoming and outgoing traffic</li>
                <li>• Maintain compliance and regulatory requirements</li>
                <li>• Enhance security awareness within your organization</li>
              </ul>
            </div>

            <div className="flex justify-center md:justify-end mr-20">
              <img
                src="/assets/services/firewall-t.jpg"
                alt="Firewall Security Audit"
                className="w-full max-w-md rounded-xl shadow-lg"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= FIREWALL AUDIT SERVICES GRID ================= */}
      <section className="py-15 px-6 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-4xl font-semibold text-primary mb-14">
            Our Firewall Security Audit Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

            {[
              {
                title: 'Review Documentation',
                desc: 'Audit firewall configuration documentation to ensure security policies are correctly implemented.',
              },
              {
                title: 'Test Rules',
                desc: 'Verify that incoming and outgoing network rules are configured properly and unauthorized traffic is blocked.',
              },
              {
                title: 'Review Logs',
                desc: 'Analyze firewall logs for suspicious activities and potential security vulnerabilities.',
              },
              {
                title: 'Assess Vulnerabilities',
                desc: 'Perform vulnerability assessments to identify exploitable weaknesses in the firewall.',
              },
              {
                title: 'Compliance & Reporting',
                desc: 'Ensure firewall policies meet regulatory compliance and provide detailed security reports.',
              },
              {
                title: 'Continuous Improvement',
                desc: 'Provide recommendations and improvements for firewall security posture over time.',
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

      {/* ================= FIREWALL AUDIT DETAILS ================= */}
      <section className="py-24 px-20 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-center text-2xl md:text-3xl font-bold text-primary mb-16">
            How Our Firewall Audit Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">

            <ul className="space-y-6 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li>• Review firewall documentation to understand implemented policies</li>
              <li>• Test and validate network rules for proper configuration</li>
              <li>• Analyze logs for suspicious or unusual activity</li>
              <li>• Conduct vulnerability assessments on firewall hardware/software</li>
              <li>• Provide remediation and recommendations for improvement</li>
            </ul>

            <ul className="space-y-6 ml-20 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li className="font-semibold">• Enhanced Security & Compliance</li>
              <ul className="ml-10 space-y-4 text-gray-700 dark:text-muted-foreground">
                <li>○ Strengthen network defenses and security posture</li>
                <li>○ Ensure regulatory and compliance adherence</li>
                <li>○ Detect and mitigate potential network breaches</li>
                <li>○ Improve organizational awareness of security risks</li>
              </ul>
              <li className="font-semibold ml-5">• Continuous Monitoring & Improvement</li>
            </ul>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 text-center bg-gray-50 dark:bg-background transition-colors">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Protect Your Network Frontier
        </h2>

        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Ensure your firewall is properly configured and secure your organization from cyber threats.
        </p>

        <Link href="/contact">
          <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-md hover:shadow-lg transition-all duration-300">
            Request Firewall Audit
          </button>
        </Link>
      </section>

    </main>
  );
}
