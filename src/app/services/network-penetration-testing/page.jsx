'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Briefcase, ClipboardCheck, AlertTriangle, Users, LineChart, Lock } from 'lucide-react';

export default function NetworkSecurityPage() {
  return (
    <main className="w-full bg-gray-50 text-gray-900">

  <section
  className="relative h-screen bg-contain bg-center bg-no-repeat mt-20
             bg-black"
  style={{ backgroundImage: "url('/assets/services/n-security.jpg')" }}
>
  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/40"></div>

  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-60">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
      Computer Network Security Consulting
    </h1>
    <p className="mt-4 text-sm md:text-xl text-gray-200 max-w-4xl text-left">
      We understand network security and implement robust policies and best practices to prevent misuse of your computer network. Our expert cyber security consultants stop cybercriminals before they start.
    </p>
    <Link href="/contact">
      <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
        SPEAK WITH AN EXPERT
      </button>
    </Link>
  </div>
</section>

      {/* ================= NETWORK SECURITY SERVICES ================= */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
              Network Security Consulting Services
            </h1>
            <p className="mt-4 text-lg font-semibold text-sky-600 dark:text-sky-400">
              Comprehensive IT, Cyber, & Network Security Services
            </p>
            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              Protect your organization against cyber threats with our network security consulting services. We help businesses defend against attacks, assess vulnerabilities, and strengthen IT infrastructures with managed security and MDR solutions.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div className='ml-10'>
              <h2 className="text-2xl font-semibold text-primary mb-6">
                Why Choose Our Network Security Services
              </h2>
              <ul className="space-y-4 text-gray-800 dark:text-gray-200">
                <li className="font-semibold">• Defend growing networks</li>
                <ul className="ml-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>○ Identify and assess vulnerabilities</li>
                  <li>○ Penetration testing and consulting</li>
                  <li>○ Cybersecurity operations and monitoring</li>
                  <li>○ Network support and testing</li>
                </ul>
                <li>• Protect employees, data, and brands</li>
                <li>• Improve compliance and reduce security risk</li>
                <li>• Rapid incident response and threat detection</li>
                <li>• End-to-end IT and network protection strategy</li>
              </ul>
            </div>

            {/* Right Image */}
            <div className="flex justify-center md:justify-end mr-20">
              <img
                src="/assets/services/nt.jpg"
                alt="Network Security"
                className="w-full max-w-md rounded-xl shadow-lg dark:shadow-blue-900/30 transition-all"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= NETWORK SERVICES GRID ================= */}
      <section className="py-15 px-6 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto text-center">

          {/* Heading */}
          <h2 className="text-4xl font-semibold text-primary mb-14">
            Network Security & Managed IT Services
          </h2>

          {/* Top Services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {[
              { title: "Vulnerability Scanning & Assessment", desc: "Locate weak points in your network before they can be exploited." },
              { title: "Network Support & Testing", desc: "Technical assessments of network security and business risk." },
              { title: "Penetration Testing & Consulting", desc: "Simulate attacks to uncover hidden vulnerabilities." },
              { title: "Network Security Monitoring", desc: "24x7 monitoring to detect threats and maintain uptime." },
              { title: "Managed IT Security Services", desc: "Complete IT infrastructure protection and compliance." },
              { title: "Cybersecurity Services", desc: "Protect your assets against evolving cyber threats." }
            ].map((item, i) => (
              <div
                key={i}
                className="ml-10 border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md transition hover:scale-[1.03] hover:-translate-y-2"
              >
                <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 dark:text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Highlight Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-300 text-white p-8 rounded-lg text-left">
              <h3 className="font-semibold mb-3">Comprehensive Network Assessment</h3>
              <p className="text-sm leading-relaxed">
                Assess the full scale of your network, detect vulnerabilities, and strengthen defenses with professional consulting.
              </p>
            </div>
            <div className="bg-blue-300 text-white p-8 rounded-lg text-left">
              <h3 className="font-semibold mb-3">Managed Security Operations</h3>
              <p className="text-sm leading-relaxed">
                Monitor, detect, and respond to threats in real-time across all network layers with our managed security services.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= NETWORK SERVICES DETAILS ================= */}
      <section className="py-24 px-20 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-center text-2xl md:text-3xl font-bold text-sky-600 dark:text-sky-400 mb-16">
            What is Network Security?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <ul className="space-y-6 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li>• Network security involves policies, processes, and practices to prevent unauthorized access, misuse, or disruption of computer networks.</li>
              <li>• Protect your data by controlling access, monitoring threats, and securing IT infrastructures.</li>
              <li>• Includes both public and private networks across organizations, enterprises, and individuals.</li>
              <li>• Typical measures include unique IDs, passwords, authentication, monitoring, and preventive controls.</li>
            </ul>

            <ul className="space-y-6 ml-20 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li>• Ensures availability, integrity, and confidentiality of network resources.</li>
              <li>• Covers network devices, endpoints, cloud services, and user activity.</li>
              <li>• Combines proactive threat detection, vulnerability management, and incident response.</li>
              <li>• Vital for businesses to stay compliant and protect against evolving cyber threats.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 text-center tracking-tight bg-gray-50 dark:bg-background transition-colors">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Strengthen Your Network Security
        </h2>
        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Get expert cybersecurity guidance tailored to your organization’s network, risk profile, and compliance needs.
        </p>
        <Link href="/contact">
          <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white dark:text-white shadow-md hover:shadow-lg hover:opacity-90 transition-all duration-300">
            Talk to a Network Security Expert
          </button>
        </Link>
      </section>

    </main>
  );
}
