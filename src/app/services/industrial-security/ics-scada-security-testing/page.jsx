'use client';

import Link from 'next/link';
import { ShieldAlert, Crosshair, Bug, Users, AlertTriangle, Lock, LineChart } from 'lucide-react';

export default function ICS_SCADA_SecurityPage() {
  return (
    <main className="w-full bg-gray-50 text-gray-900">

      {/* ================= HERO ================= */}
      <section
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/services/ics-scada.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/40"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-70">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
            ICS/SCADA Security Testing
          </h1>

          <p className="mt-6 text-sm md:text-xl text-gray-200 max-w-4xl text-left">
            Protect your critical industrial networks from catastrophic cyberattacks. Our ICS/SCADA security assessments
            identify risks, prevent disruptions, and safeguard national and global infrastructure.
          </p>

          <Link href="/contact">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
              REQUEST SECURITY CHECK
            </button>
          </Link>
        </div>
      </section>

      {/* ================= ICS/SCADA OVERVIEW ================= */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
              What is ICS/SCADA Security Testing?
            </h1>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              ICS (Industrial Control Systems) and SCADA (Supervisory Control and Data Acquisition) systems
              control critical infrastructures such as oil & gas, power grids, water treatment, and transportation networks.
              Due to their wide implementation, they are high-value targets for cyberattacks with potentially catastrophic impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div className="ml-10">
              <h2 className="text-2xl font-semibold text-primary mb-6">
                Why ICS/SCADA Security Matters
              </h2>

              <ul className="space-y-4 text-gray-800 dark:text-gray-200">
                <li>• Prevent massive financial and operational losses</li>
                <li>• Protect national critical infrastructure</li>
                <li>• Avoid regulatory fines and reputational damage</li>
                <li>• Safeguard human lives in industrial operations</li>
                <li>• Reduce risk of cascading effects across industries</li>
              </ul>
            </div>

            <div className="flex justify-center md:justify-end mr-20">
              <img
                src="/assets/services/ics-scada-t.jpg"
                alt="ICS SCADA Security"
                className="w-full max-w-md rounded-xl shadow-lg"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= ICS/SCADA SERVICES GRID ================= */}
      <section className="py-15 px-6 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-4xl font-semibold text-primary mb-14">
            Our ICS/SCADA Security Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

            {[
              {
                title: 'Network Assessment',
                desc: 'Analyze industrial networks for vulnerabilities and weak points in ICS/SCADA systems.',
              },
              {
                title: 'System Hardening',
                desc: 'Implement security measures, patch management, and access controls to secure critical systems.',
              },
              {
                title: 'Threat Simulation',
                desc: 'Simulate real-world ICS cyberattacks to test detection and response capabilities.',
              },
              {
                title: 'Incident Response',
                desc: 'Develop rapid response plans to mitigate cyberattack impact on operations.',
              },
              {
                title: 'Compliance & Reporting',
                desc: 'Ensure adherence to industry regulations and provide detailed risk reporting.',
              },
              {
                title: 'Continuous Monitoring',
                desc: 'Monitor ICS/SCADA systems for anomalies to detect threats before they escalate.',
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

      {/* ================= ICS/SCADA DETAILS ================= */}
      <section className="py-24 px-20 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-center text-2xl md:text-3xl font-bold text-primary mb-16">
            How Our ICS/SCADA Engagement Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">

            <ul className="space-y-6 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li>• Assess industrial network and control systems for vulnerabilities</li>
              <li>• Implement security controls, segmentation, and hardening</li>
              <li>• Simulate cyberattacks to test detection and response</li>
              <li>• Monitor systems for suspicious activity continuously</li>
              <li>• Respond promptly to any detected threats to minimize impact</li>
            </ul>

            <ul className="space-y-6 ml-20 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li className="font-semibold">• Operational Continuity & Risk Mitigation</li>
              <ul className="ml-10 space-y-4 text-gray-700 dark:text-muted-foreground">
                <li>○ Reduce risk of blackouts and operational disruptions</li>
                <li>○ Maintain regulatory compliance and reputation</li>
                <li>○ Improve ICS/SCADA resilience against cyberattacks</li>
                <li>○ Protect national and global infrastructure</li>
              </ul>
              <li className="font-semibold ml-5">• Continuous Improvement & Monitoring</li>
            </ul>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 text-center bg-gray-50 dark:bg-background transition-colors">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Secure Your Industrial Infrastructure
        </h2>

        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Minimize risk and protect critical ICS/SCADA systems with expert security testing and assessment services.
        </p>

        <Link href="/contact">
          <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-md hover:shadow-lg transition-all duration-300">
            Request ICS/SCADA Security Check
          </button>
        </Link>
      </section>

    </main>
  );
}
