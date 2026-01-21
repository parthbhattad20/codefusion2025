'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Briefcase, ClipboardCheck, AlertTriangle, Users, LineChart, Lock } from 'lucide-react';

export default function CyberForensicsPage() {
  return (
    <main className="w-full bg-gray-50 text-gray-900">

      {/* ================= HERO ================= */}
      <section
        className="relative h-screen w-full object-cover bg-repeat mt-5"
        style={{ backgroundImage: "url('/assets/services/cyber.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/40"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-70">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
            Digital & Cyber Forensics Services
          </h1>

          <p className="mt-6 text-sm md:text-xl text-gray-200 max-w-4xl text-left">
            Our team of Computer Digital Forensics Investigators and Forensics Security Consultants are the Digital Forensics Experts you seek. During a breach, it's essential to move quickly and contain the threat while preserving evidence for legal action.
          </p>

          <Link href="/contact">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition mt-10">
              SPEAK WITH AN EXPERT
            </button>
          </Link>
        </div>
      </section>

      {/* ================= CYBER FORENSICS PROGRAM ================= */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
              Cyber & Digital Forensics Services
            </h1>

            <p className="mt-4 text-lg font-semibold text-sky-600 dark:text-sky-400">
              Expert Forensics Investigation & Incident Response
            </p>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              Our Digital Forensics Investigators determine the root cause of breaches, preserve evidence, and help organizations respond effectively. We document the legal chain of custody, extract data (including deleted or hidden files), and provide actionable insights for compliance, legal, or law enforcement purposes.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Left Column */}
            <div className='ml-10'>
              <h2 className="text-2xl font-semibold text-primary mb-6">
                Why Choose Our Cyber Forensics Experts
              </h2>

              <ul className="space-y-4 text-gray-800 dark:text-gray-200">
                <li className="font-semibold">• Rapid Incident Response</li>
                <li className="font-semibold">• Legal & Compliance Evidence Preservation</li>
                <li className="font-semibold">• Malware & Threat Analysis</li>
                <li className="font-semibold">• Digital Device & Network Forensics</li>
                <li className="font-semibold">• Expert Reporting for Legal Proceedings</li>
              </ul>
            </div>

            {/* Right Image */}
            <div className="flex justify-center md:justify-end mr-20">
              <img
                src="/assets/services/cyber_f.jpg"
                alt="Cyber Forensics"
                className="w-full max-w-md rounded-xl shadow-lg dark:shadow-blue-900/30 transition-all"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= FORENSICS SERVICES GRID ================= */}
      <section className="py-15 px-6 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-4xl font-semibold text-primary mb-14">
            Our Digital Forensics Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {[
              {
                title: "Incident Response",
                desc: "Quickly contain and analyze breaches to minimize impact."
              },
              {
                title: "Computer Forensics",
                desc: "Analyze servers, endpoints, and workstations for compromised data."
              },
              {
                title: "Mobile & Device Forensics",
                desc: "Investigate smartphones, tablets, and portable storage devices."
              },
              {
                title: "Email & Social Media Forensics",
                desc: "Recover and analyze data for compliance and legal requirements."
              },
              {
                title: "Database & eDiscovery Forensics",
                desc: "Assess databases and ensure proper evidence collection."
              },
              {
                title: "Malware Analysis",
                desc: "Investigate malicious code and its impact on your network."
              }
            ].map((item, i) => (
              <div key={i} className="ml-10 border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md transition hover:scale-[1.03] hover:-translate-y-2">
                <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">{item.title}</h3>
                <p className="text-gray-700 dark:text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Bottom Highlight Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-300 text-white p-8 rounded-lg text-left">
              <h3 className="font-semibold mb-3">Digital Evidence Preservation</h3>
              <p className="text-sm leading-relaxed">
                We document the legal chain of custody and create bit-by-bit copies of digital evidence to maintain integrity for investigations or court proceedings.
              </p>
            </div>

            <div className="bg-blue-300 text-white p-8 rounded-lg text-left">
              <h3 className="font-semibold mb-3">Expert Cyber Forensics Consulting</h3>
              <p className="text-sm leading-relaxed">
                Our team provides guidance for investigating incidents, analyzing breaches, and taking proactive steps to strengthen your organization’s cybersecurity posture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES DETAILS ================= */}
      <section className="py-24 px-20 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-sky-600 dark:text-sky-400 mb-16">
            Cyber Forensics Process & Lifecycle
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">

            {/* Left Column */}
            <ul className="space-y-6 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li>• Incident scoping and investigation planning</li>
              <li>• Data acquisition & forensic imaging (bit-by-bit copy)</li>
              <li>• Analysis of operating system & hidden/deleted data</li>
              <li>• Malware & threat detection</li>
              <li>• Evidence preservation for legal and compliance purposes</li>
              <li>• Reporting findings to stakeholders or authorities</li>
            </ul>

            {/* Right Column */}
            <ul className="space-y-6 ml-20 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li>• Digital device forensics: computers, servers, mobile devices</li>
              <li>• Email & social media forensics</li>
              <li>• Database forensics & eDiscovery</li>
              <li>• Expert witness testimony</li>
              <li>• Post-incident consulting & recommendations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 text-center tracking-tight bg-gray-50 dark:bg-background transition-colors">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Strengthen Your Cyber Forensics Readiness
        </h2>

        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Get expert cyber forensics guidance tailored to your organization’s incident response and compliance needs.
        </p>

        <Link href="/contact">
          <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white dark:text-white shadow-md hover:shadow-lg hover:opacity-90 transition-all duration-300">
            Talk to a Forensics Expert
          </button>
        </Link>
      </section>

    </main>
  );
}
