'use client';

import Link from 'next/link';
import { ShieldAlert, Crosshair, Bug, Users, AlertTriangle, Lock, LineChart } from 'lucide-react';

export default function ManagedThreatHuntingPage() {
  return (
    <main className="w-full bg-gray-50 text-gray-900">

      {/* ================= HERO ================= */}
      <section
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/services/threat-hunting.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/40"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-70">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
            Managed Threat Hunting
          </h1>

          <p className="mt-6 text-sm md:text-xl text-gray-200 max-w-4xl text-left">
            Proactively detect and respond to cyber threats in your UAE operations with expert-managed threat hunting services.
          </p>

          <Link href="/contact">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
              START HUNTING
            </button>
          </Link>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
              What is Managed Threat Hunting?
            </h1>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              Managed Threat Hunting helps organizations proactively identify and mitigate cyber threats.
              Using expert professionals, advanced tools, and threat intelligence, we detect anomalies and emerging threats
              across your networks and systems in the UAE, improving your overall security posture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div className="ml-10">
              <h2 className="text-2xl font-semibold text-primary mb-6">
                Benefits of Managed Threat Hunting
              </h2>

              <ul className="space-y-4 text-gray-800 dark:text-gray-200">
                <li>• Early detection of threats that traditional security solutions may miss</li>
                <li>• Faster and more effective incident response</li>
                <li>• Reduced dwell time of attackers in your network</li>
                <li>• Detailed reports to support legal and regulatory compliance in the UAE</li>
                <li>• Continuous improvement of your organization's security posture</li>
              </ul>
            </div>

            <div className="flex justify-center md:justify-end mr-20">
              <img
                src="/assets/services/threat-hunting-t.jpg"
                alt="Managed Threat Hunting"
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
            Our Managed Threat Hunting Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

            {[
              {
                title: 'Monitor',
                desc: 'Check for suspicious activity in your network and systems using advanced techniques.',
              },
              {
                title: 'Detect',
                desc: 'Identify threats from the collected data to reveal vulnerabilities or anomalies.',
              },
              {
                title: 'Investigate',
                desc: 'Determine the scope, severity, and impact of discovered threats.',
              },
              {
                title: 'Remediate',
                desc: 'Fix vulnerabilities and mitigate threats to secure your organization and business continuity.',
              },
              {
                title: 'Threat Intelligence',
                desc: 'Utilize intelligence to uncover emerging cyber threats specific to UAE businesses.',
              },
              {
                title: 'Continuous Improvement',
                desc: 'Enhance detection and response strategies over time to strengthen security posture.',
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
            How Our Managed Threat Hunting Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">

            <ul className="space-y-6 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li>• Continuous monitoring for anomalies and suspicious behavior</li>
              <li>• Detection of threats and vulnerabilities across networks and systems</li>
              <li>• Investigation of scope and potential impact of identified threats</li>
              <li>• Remediation to prevent attacks and ensure business continuity</li>
              <li>• Reporting to support compliance and legal requirements in the UAE</li>
            </ul>

            <ul className="space-y-6 ml-20 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li className="font-semibold">• Early Threat Detection</li>
              <ul className="ml-10 space-y-4 text-gray-700 dark:text-muted-foreground">
                <li>○ Reduce dwell time of attackers</li>
                <li>○ Enable faster, informed incident response</li>
                <li>○ Mitigate emerging cyber threats proactively</li>
                <li>○ Strengthen your organization's overall security posture</li>
              </ul>
              <li className="font-semibold ml-5">• Regulatory Compliance & Reporting</li>
            </ul>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 text-center bg-gray-50 dark:bg-background transition-colors">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Proactively Protect Your Business
        </h2>

        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Detect, investigate, and remediate cyber threats before they impact your UAE operations with our expert Managed Threat Hunting services.
        </p>

        <Link href="/contact">
          <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-md hover:shadow-lg transition-all duration-300">
            Start Threat Hunting
          </button>
        </Link>
      </section>

    </main>
  );
}
