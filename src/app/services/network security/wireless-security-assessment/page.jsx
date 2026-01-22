'use client';

import Link from 'next/link';
import { ShieldAlert, Crosshair, Bug, Users, AlertTriangle, Lock, LineChart } from 'lucide-react';

export default function WirelessSecurityPage() {
  return (
    <main className="w-full bg-gray-50 text-gray-900">

      {/* ================= HERO ================= */}
      <section
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/services/wireless.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/40"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-70">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
            Wireless Security Assessment
          </h1>

          <p className="mt-6 text-sm md:text-xl text-gray-200 max-w-4xl text-left">
            Strengthen the front door to your organization. Our Wireless Penetration Testing identifies vulnerabilities
            in Wi-Fi, Bluetooth, and other wireless devices to secure your UAE operations.
          </p>

          <Link href="/contact">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
              REQUEST A PENTEST
            </button>
          </Link>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
              What is Wireless Penetration Testing?
            </h1>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              Wireless penetration testing identifies vulnerabilities in your wireless infrastructure, including Wi-Fi networks,
              Bluetooth devices, access points, printers, keyboards, and other wireless devices. This helps organizations
              in the UAE secure their external infrastructure before attackers can exploit it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div className="ml-10">
              <h2 className="text-2xl font-semibold text-primary mb-6">
                Why Wireless Security Testing Matters
              </h2>

              <ul className="space-y-4 text-gray-800 dark:text-gray-200">
                <li>• Identify vulnerabilities in wireless networks and devices</li>
                <li>• Prevent attackers from accessing corporate networks via Wi-Fi or Bluetooth</li>
                <li>• Ensure compliance with UAE cybersecurity regulations such as PDPL and NESA</li>
                <li>• Strengthen your organization’s security posture and business integrity</li>
                <li>• Remediate threats before they are exploited by attackers</li>
              </ul>
            </div>

            <div className="flex justify-center md:justify-end mr-20">
              <img
                src="/assets/services/wireless-t.jpg"
                alt="Wireless Security Assessment"
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
            Our Wireless Security Assessment Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

            {[
              {
                title: 'Define Scope',
                desc: 'Work with experts to define the type and depth of the wireless penetration test.',
              },
              {
                title: 'Reconnaissance',
                desc: 'Gather information about wireless networks using advanced intelligence-gathering techniques.',
              },
              {
                title: 'VAPT',
                desc: 'Assess vulnerabilities and perform penetration testing safely while ensuring compliance with UAE frameworks.',
              },
              {
                title: 'Report',
                desc: 'Document findings comprehensively to guide technical teams in strengthening wireless security.',
              },
              {
                title: 'Compliance & Risk Management',
                desc: 'Ensure adherence to PDPL, NESA, and other regulatory requirements while mitigating risks.',
              },
              {
                title: 'Continuous Improvement',
                desc: 'Provide actionable recommendations to improve the security posture of wireless infrastructure.',
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
            How Our Wireless Security Assessment Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">

            <ul className="space-y-6 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li>• Define scope with the testing team to tailor the strategy</li>
              <li>• Conduct reconnaissance to gather detailed wireless network information</li>
              <li>• Perform penetration tests on wireless networks and devices safely</li>
              <li>• Identify vulnerabilities and assess potential impact</li>
              <li>• Document results in a comprehensive report for remediation</li>
            </ul>

            <ul className="space-y-6 ml-20 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li className="font-semibold">• Enhance Security & Compliance</li>
              <ul className="ml-10 space-y-4 text-gray-700 dark:text-muted-foreground">
                <li>○ Improve wireless security posture across your organization</li>
                <li>○ Ensure compliance with PDPL, NESA, and UAE cybersecurity frameworks</li>
                <li>○ Detect and remediate potential threats before exploitation</li>
                <li>○ Increase organizational awareness of wireless vulnerabilities</li>
              </ul>
              <li className="font-semibold ml-5">• Continuous Monitoring & Recommendations</li>
            </ul>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 text-center bg-gray-50 dark:bg-background transition-colors">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Secure Your Wireless Infrastructure
        </h2>

        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Protect your Wi-Fi networks, Bluetooth devices, and wireless endpoints with comprehensive testing by UAE experts.
        </p>

        <Link href="/contact">
          <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-md hover:shadow-lg transition-all duration-300">
            Request Wireless PenTest
          </button>
        </Link>
      </section>

    </main>
  );
}
