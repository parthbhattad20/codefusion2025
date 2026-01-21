'use client';

import Link from 'next/link';
import { ShieldAlert, Crosshair, Bug, Users, AlertTriangle, Lock, LineChart } from 'lucide-react';

export default function RedTeamingPage() {
  return (
    <main className="w-full bg-gray-50 text-gray-900">

      {/* ================= HERO ================= */}
      <section
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/services/red.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/40"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-70">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
            Red Teaming Services
          </h1>

          <p className="mt-6 text-sm md:text-xl text-gray-200 max-w-4xl text-left">
            Vulnuris Red Teaming services simulate real-world cyber attacks to test your organization’s people,
            processes, and technology. We help you understand how attackers think, move, and breach defenses.
          </p>

          <Link href="/contact">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
              SPEAK WITH AN EXPERT
            </button>
          </Link>
        </div>
      </section>

      {/* ================= RED TEAMING OVERVIEW ================= */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
              Red Teaming Assessments
            </h1>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              Red Teaming goes beyond traditional penetration testing by emulating advanced threat actors
              using stealthy attack techniques across networks, applications, cloud, and human targets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div className="ml-10">
              <h2 className="text-2xl font-semibold text-primary mb-6">
                Why Red Teaming Matters
              </h2>

              <ul className="space-y-4 text-gray-800 dark:text-gray-200">
                <li>• Identify real-world attack paths and blind spots</li>
                <li>• Measure effectiveness of detection and response</li>
                <li>• Test people, process, and technology together</li>
                <li>• Improve incident response readiness</li>
                <li>• Validate security investments and controls</li>
              </ul>
            </div>

            <div className="flex justify-center md:justify-end mr-20">
              <img
                src="/assets/services/red-t.jpg"
                alt="Red Teaming"
                className="w-full max-w-md rounded-xl shadow-lg"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= RED TEAMING SERVICES GRID ================= */}
      <section className="py-15 px-6 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-4xl font-semibold text-primary mb-14">
            Our Red Teaming Capabilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

            {[ 
              {
                title: 'External Red Teaming',
                desc: 'Simulate attacks from outside the organization to test perimeter and exposure risks.',
              },
              {
                title: 'Internal Red Teaming',
                desc: 'Assess insider threat scenarios and post-compromise lateral movement.',
              },
              {
                title: 'Social Engineering',
                desc: 'Phishing, vishing, and physical intrusion to test human defenses.',
              },
              {
                title: 'Cloud & Identity Attacks',
                desc: 'Evaluate identity abuse, misconfigurations, and privilege escalation in cloud environments.',
              },
              {
                title: 'Adversary Simulation',
                desc: 'Emulate APT groups using MITRE ATT&CK techniques.',
              },
              {
                title: 'Purple Team Collaboration',
                desc: 'Collaborative exercises to improve detection and response with blue teams.',
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

      {/* ================= RED TEAMING DETAILS ================= */}
      <section className="py-24 px-20 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-center text-2xl md:text-3xl font-bold text-sky-600 dark:text-sky-400 mb-16">
            How Our Red Team Engagement Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">

            <ul className="space-y-6 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li>• Define scope, objectives, and rules of engagement</li>
              <li>• Perform reconnaissance and threat modeling</li>
              <li>• Execute stealthy attack simulations</li>
              <li>• Evade detection and bypass controls where possible</li>
              <li>• Document attack paths and business impact</li>
            </ul>

            <ul className="space-y-6 ml-20 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li className="font-semibold">• Continuous Security Improvement</li>
              <ul className="ml-10 space-y-4 text-gray-700 dark:text-muted-foreground">
                <li>○ MITRE ATT&CK–mapped reporting</li>
                <li>○ Detection & response gap analysis</li>
                <li>○ Executive-level risk reporting</li>
                <li>○ Blue team training support</li>
                <li>○ Remediation validation</li>
              </ul>
              <li className="font-semibold ml-5">• Crisis & Breach Readiness</li>
            </ul>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 text-center bg-gray-50 dark:bg-background transition-colors">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Think Like an Attacker. Defend Like a Pro.
        </h2>

        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Validate your defenses with real-world Red Teaming by Vulnuris experts.
        </p>

        <Link href="/contact">
          <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-md hover:shadow-lg transition-all duration-300">
            Talk to a Red Team Expert
          </button>
        </Link>
      </section>

    </main>
  );
}
