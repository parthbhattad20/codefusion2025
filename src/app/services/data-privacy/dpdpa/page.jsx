'use client';

import Link from 'next/link';

export default function DPDPACompliancePage() {
  return (
    <main className="w-full bg-gray-50 text-gray-900">

      {/* ================= HERO ================= */}
      <section
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/services/dpdpa.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/40"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-70">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
            DPDPA Compliance Services
          </h1>

          <p className="mt-6 text-sm md:text-xl text-gray-200 max-w-4xl text-left">
            Achieve compliance with India’s Digital Personal Data Protection Act (DPDPA) and safeguard personal data
            with structured governance, consent management, and risk-based security controls.
          </p>

          <Link href="/contact">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
              CONSULT DPDPA EXPERT
            </button>
          </Link>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
              What is DPDPA?
            </h1>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              The Digital Personal Data Protection Act (DPDPA) of India governs the lawful processing,
              storage, and protection of personal data. It establishes clear obligations for organizations
              handling personal data of individuals in India.
            </p>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              DPDPA focuses on consent-based processing, individual rights, accountability, breach reporting,
              and strong penalties for non-compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div className="ml-10">
              <h2 className="text-2xl font-semibold text-primary mb-6">
                Why DPDPA Compliance Matters
              </h2>

              <ul className="space-y-4 text-gray-800 dark:text-gray-200">
                <li>• Protect personal data of Indian data principals</li>
                <li>• Meet statutory compliance and avoid penalties</li>
                <li>• Build trust with customers and stakeholders</li>
                <li>• Reduce risk of data breaches and misuse</li>
                <li>• Enable secure cross-border business operations</li>
              </ul>
            </div>

            <div className="flex justify-center md:justify-end mr-20">
              <img
                src="/assets/services/dpdpa-t.jpg"
                alt="DPDPA Compliance"
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
            Our DPDPA Compliance Capabilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

            {[
              {
                title: 'DPDPA Gap Assessment',
                desc: 'Identify compliance gaps across data collection, consent, processing, and retention.',
              },
              {
                title: 'Consent Management',
                desc: 'Design consent mechanisms aligned with lawful, informed, and purpose-limited processing.',
              },
              {
                title: 'Data Principal Rights',
                desc: 'Implement mechanisms for access, correction, erasure, and grievance redressal.',
              },
              {
                title: 'Privacy Policy & Notices',
                desc: 'Draft and implement DPDPA-compliant privacy notices and internal policies.',
              },
              {
                title: 'Breach Response Planning',
                desc: 'Prepare incident response and data breach notification workflows.',
              },
              {
                title: 'DPO & Governance Support',
                desc: 'Support governance frameworks, accountability, and compliance oversight.',
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

      {/* ================= PROCESS ================= */}
      <section className="py-24 px-20 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-center text-2xl md:text-3xl font-bold text-primary mb-16">
            How Our DPDPA Engagement Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">

            <ul className="space-y-6 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li>• Identify personal data flows and processing activities</li>
              <li>• Classify data and assess lawful processing requirements</li>
              <li>• Implement consent, retention, and security controls</li>
              <li>• Align governance with DPDPA accountability principles</li>
              <li>• Validate compliance and readiness</li>
            </ul>

            <ul className="space-y-6 ml-20 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li className="font-semibold">• Compliance Outcomes</li>
              <ul className="ml-10 space-y-4 text-gray-700 dark:text-muted-foreground">
                <li>○ Reduced regulatory and legal exposure</li>
                <li>○ Clear consent and data handling processes</li>
                <li>○ Improved breach preparedness</li>
                <li>○ Executive-ready compliance reporting</li>
                <li>○ Sustainable privacy governance</li>
              </ul>
            </ul>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 text-center bg-gray-50 dark:bg-background transition-colors">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Comply With Confidence Under DPDPA
        </h2>

        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Protect personal data, meet legal obligations, and build trust with structured DPDPA compliance.
        </p>

        <Link href="/contact">
          <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-md hover:shadow-lg transition-all duration-300">
            Talk to a DPDPA Expert
          </button>
        </Link>
      </section>

    </main>
  );
}
