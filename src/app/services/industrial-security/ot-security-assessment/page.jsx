'use client';

import Link from 'next/link';
import { ShieldAlert, Crosshair, Bug, Users, AlertTriangle, Lock, LineChart } from 'lucide-react';

export default function OTSecurityPage() {
  return (
    <main className="w-full bg-gray-50 text-gray-900">

      {/* ================= HERO ================= */}
      <section
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/services/ot-security.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/40"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-70">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
            OT Security & Risk Assessment
          </h1>

          <p className="mt-6 text-sm md:text-xl text-gray-200 max-w-4xl text-left">
            Protect your critical industrial infrastructure from cyber threats with our comprehensive OT security assessments.
            We help you identify risks, secure operations, and maintain business continuity.
          </p>

          <Link href="/contact">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
              REQUEST SECURITY CHECK
            </button>
          </Link>
        </div>
      </section>

      {/* ================= OT SECURITY OVERVIEW ================= */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
              What is OT Security Assessment?
            </h1>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              Operational Technology (OT) systems manage and monitor industrial processes in sectors like oil & gas, manufacturing, energy, transportation, and maritime.
              Our OT security assessments identify vulnerabilities in these systems to prevent operational disruptions, financial loss, or safety hazards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div className="ml-10">
              <h2 className="text-2xl font-semibold text-primary mb-6">
                Why OT Security Matters
              </h2>

              <ul className="space-y-4 text-gray-800 dark:text-gray-200">
                <li>• Protect critical infrastructure from cyber threats</li>
                <li>• Ensure compliance with industry regulations</li>
                <li>• Prevent downtime and operational disruptions</li>
                <li>• Maintain business reputation and customer trust</li>
                <li>• Optimize allocation of security resources</li>
              </ul>
            </div>

            <div className="flex justify-center md:justify-end mr-20">
              <img
                src="/assets/services/ot-security-t.jpg"
                alt="OT Security Assessment"
                className="w-full max-w-md rounded-xl shadow-lg"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= OT SECURITY SERVICES GRID ================= */}
      <section className="py-15 px-6 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-4xl font-semibold text-primary mb-14">
            Our OT Security Assessment Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

            {[
              {
                title: 'Assess',
                desc: 'Identify vulnerabilities and risks in your OT environment to prevent potential cyber incidents.',
              },
              {
                title: 'Secure',
                desc: 'Implement security controls, access management, patching, and network segmentation.',
              },
              {
                title: 'Monitor',
                desc: 'Continuously monitor OT systems for suspicious activity to detect threats in real time.',
              },
              {
                title: 'Respond',
                desc: 'Fix security issues quickly and effectively to minimize operational and financial impact.',
              },
              {
                title: 'Compliance',
                desc: 'Ensure OT systems meet regulatory requirements and industry best practices.',
              },
              {
                title: 'Optimization',
                desc: 'Optimize security resources on critical assets and improve incident response readiness.',
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

      {/* ================= OT SECURITY DETAILS ================= */}
      <section className="py-24 px-20 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-center text-2xl md:text-3xl font-bold text-primary mb-16">
            How Our OT Security Engagement Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">

            <ul className="space-y-6 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li>• Conduct OT environment assessment and risk identification</li>
              <li>• Implement security measures and access controls</li>
              <li>• Monitor OT systems for anomalies or intrusions</li>
              <li>• Respond to detected threats and mitigate impact</li>
              <li>• Provide compliance reporting and best practice recommendations</li>
            </ul>

            <ul className="space-y-6 ml-20 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li className="font-semibold">• Continuous Security Improvement</li>
              <ul className="ml-10 space-y-4 text-gray-700 dark:text-muted-foreground">
                <li>○ Security control validation</li>
                <li>○ Threat detection enhancement</li>
                <li>○ Operational risk reporting</li>
                <li>○ Staff awareness and training</li>
                <li>○ Incident response planning</li>
              </ul>
              <li className="font-semibold ml-5">• Operational Continuity & Risk Reduction</li>
            </ul>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 text-center bg-gray-50 dark:bg-background transition-colors">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Protect Your Critical Infrastructure Today
        </h2>

        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Reduce operational risks and ensure business continuity with professional OT security assessments by our experts.
        </p>

        <Link href="/contact">
          <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-md hover:shadow-lg transition-all duration-300">
            Request OT Security Check
          </button>
        </Link>
      </section>

    </main>
  );
}
