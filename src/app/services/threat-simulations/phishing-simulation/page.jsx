'use client';

import Link from 'next/link';
import { ShieldAlert, MailWarning, Users, LineChart, Lock, Radar } from 'lucide-react';

export default function PhishingSimulationPage() {
  return (
    <main className="w-full bg-gray-50 dark:bg-background text-gray-900 dark:text-foreground transition-colors">

      {/* ================= HERO ================= */}
      <section
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/services/phishing.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
            Phishing Simulation & Awareness Training
          </h1>

          <p className="mt-6 text-sm md:text-xl text-gray-200 max-w-4xl">
            Reduce human cyber risk with realistic phishing simulations and security awareness training.
            Test, train, and protect your employees from modern social‑engineering attacks.
          </p>

          <Link href="/contact">
            <button className="mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition">
              START PHISHING SIMULATION
            </button>
          </Link>
        </div>
      </section>

      {/* ================= WHY PHISHING SIMULATION ================= */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div className="ml-6">
            <h2 className="text-2xl font-semibold text-primary mb-6">
              Why Phishing Simulation Matters
            </h2>

            <ul className="space-y-4 text-gray-800 dark:text-gray-200">
              <li>• Identify employees vulnerable to phishing attacks</li>
              <li>• Reduce ransomware & credential theft risk</li>
              <li>• Improve security awareness culture</li>
              <li>• Meet compliance & audit requirements</li>
              <li>• Continuous employee security training</li>
            </ul>
          </div>

          <div className="flex justify-center md:justify-end mr-10">
            <img
              src="/assets/services/phishing.webp"
              alt="Phishing Simulation"
              className="w-full max-w-md rounded-xl shadow-lg dark:shadow-blue-900/30"
            />
          </div>
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-primary mb-14">
            Phishing Simulation Capabilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {[{
              title: 'Realistic Phishing Emails',
              desc: 'Simulate real‑world phishing emails including credential theft, malware, and ransomware lures.'
            },{
              title: 'Employee Risk Scoring',
              desc: 'Measure employee susceptibility with clear metrics and improvement tracking.'
            },{
              title: 'Automated Campaigns',
              desc: 'Run recurring phishing simulations without manual effort.'
            },{
              title: 'Instant Training',
              desc: 'Employees receive immediate training when they fall for a phishing email.'
            },{
              title: 'Compliance Reporting',
              desc: 'Generate reports for ISO, SOC 2, PCI‑DSS, and internal audits.'
            },{
              title: 'Executive Dashboards',
              desc: 'Visual dashboards for management and security leadership.'
            }].map((item, i) => (
              <div key={i} className="bg-white dark:bg-muted border border-gray-200 dark:border-border rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2">
                <h3 className="font-semibold text-lg mb-3 text-blue-600 dark:text-blue-400">
                  {item.title}
                </h3>
                <p className="text-gray-700 dark:text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-600 text-white p-8 rounded-lg text-left">
              <h3 className="font-semibold mb-3">Phishing Trend Analysis</h3>
              <p className="text-sm">
                Track attack trends and employee improvement across campaigns.
              </p>
            </div>

            <div className="bg-blue-600 text-white p-8 rounded-lg text-left">
              <h3 className="font-semibold mb-3">Human Risk Reduction</h3>
              <p className="text-sm">
                Turn employees from the weakest link into a strong security defense.
              </p>
            </div>
          </div> */}
        </div>
      </section>

      {/* ================= DETAILS ================= */}
      <section className="py-15 px-6 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl font-bold text-sky-600 dark:text-sky-400 mb-16">
            How Our Phishing Simulation Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg">
            <ul className="space-y-6 text-gray-800 dark:text-gray-200">
              <li>• Design realistic phishing scenarios</li>
              <li>• Launch simulated attacks to employees</li>
              <li>• Track clicks, submissions, and reports</li>
              <li>• Deliver instant awareness training</li>
            </ul>

            <ul className="space-y-6 text-gray-800 dark:text-gray-200">
              <li>• Measure improvement over time</li>
              <li>• Identify high‑risk users</li>
              <li>• Provide executive‑ready reports</li>
              <li>• Continuously reduce human risk</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 text-center bg-gray-50 dark:bg-background transition-colors">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Stop Phishing Before It Starts
        </h2>
        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Strengthen your human firewall with phishing simulation and awareness training.
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
