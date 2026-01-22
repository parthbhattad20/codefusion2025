'use client';

import Link from 'next/link';
import { ShieldAlert, Crosshair, Bug, Users, AlertTriangle, Lock, LineChart } from 'lucide-react';

export default function ProactiveThreatHuntingPage() {
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
            Proactive Threat Hunting
          </h1>

          <p className="mt-6 text-sm md:text-xl text-gray-200 max-w-4xl text-left">
            Secure your UAE business from future attacks by uncovering threats, entry points, and attack methodologies before they cause damage.
          </p>

          <Link href="/contact">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
              GET PROTECTED!
            </button>
          </Link>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
              What is Proactive Threat Hunting?
            </h1>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              Proactive Threat Hunting uncovers weaknesses, attack paths, and vulnerabilities in your organization’s systems and networks.
              It allows UAE businesses to learn from past breaches, anticipate future attacks, and respond faster to mitigate potential damage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div className="ml-10">
              <h2 className="text-2xl font-semibold text-primary mb-6">
                Why Proactive Threat Hunting Matters
              </h2>

              <ul className="space-y-4 text-gray-800 dark:text-gray-200">
                <li>• Identify vulnerabilities and entry points before attackers exploit them</li>
                <li>• Understand attack methodologies to strengthen defenses</li>
                <li>• Improve response speed and reduce overall damage</li>
                <li>• Enhance overall security posture and compliance</li>
                <li>• Stay ahead of evolving cyber threats in the UAE</li>
              </ul>
            </div>

            <div className="flex justify-center md:justify-end mr-20">
              <img
                src="/assets/services/threat-hunting-t.jpg"
                alt="Proactive Threat Hunting"
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
            Our Proactive Threat Hunting Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

            {[
              {
                title: 'Hypothesize',
                desc: 'Analyze assets, vulnerabilities, and potential threat actors to form threat hypotheses.',
              },
              {
                title: 'Detect',
                desc: 'Develop methodologies to detect threats using advanced techniques and intelligence.',
              },
              {
                title: 'Investigate',
                desc: 'Assess incidents to determine if threats are legitimate and evaluate their impact.',
              },
              {
                title: 'Respond',
                desc: 'Mitigate, remediate, and look for related instances to prevent future attacks.',
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
            How Our Proactive Threat Hunting Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">

            <ul className="space-y-6 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li>• Hypothesize potential threats based on assets, vulnerabilities, and threat actors</li>
              <li>• Detect threats using various proactive methodologies</li>
              <li>• Investigate incidents to confirm legitimacy and scope</li>
              <li>• Respond to threats by mitigating, remediating, and searching for related risks</li>
            </ul>

            <ul className="space-y-6 ml-20 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li className="font-semibold">• Security Posture Improvement</li>
              <ul className="ml-10 space-y-4 text-gray-700 dark:text-muted-foreground">
                <li>○ Identify weak points before exploitation</li>
                <li>○ Reduce damage and overall risk from cyber attacks</li>
                <li>○ Learn attacker methodologies to enhance defense strategies</li>
                <li>○ Ensure compliance with UAE cybersecurity regulations</li>
              </ul>
              <li className="font-semibold ml-5">• Future Attack Prevention</li>
            </ul>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 text-center bg-gray-50 dark:bg-background transition-colors">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Stay Ahead of Cyber Threats
        </h2>

        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Detect, investigate, and respond proactively to protect your UAE business from future cyber attacks with our expert Proactive Threat Hunting services.
        </p>

        <Link href="/contact">
          <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-md hover:shadow-lg transition-all duration-300">
            Start Proactive Hunting
          </button>
        </Link>
      </section>

    </main>
  );
}
