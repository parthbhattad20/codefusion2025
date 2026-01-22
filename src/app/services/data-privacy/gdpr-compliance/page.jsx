'use client';

import Link from 'next/link';

export default function GDPRCompliancePage() {
  return (
    <main className="w-full bg-gray-50 text-gray-900">

      {/* ================= HERO ================= */}
      <section
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/services/gdpr.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/40"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-70">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
            GDPR Compliance Consulting
          </h1>

          <p className="mt-6 text-sm md:text-xl text-gray-200 max-w-4xl text-left">
            Get expert GDPR compliance services to protect data privacy and expand your business securely in EU & EEA regions.
          </p>

          <Link href="/contact">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
              PROTECT YOUR DATA PRIVACY NOW
            </button>
          </Link>
        </div>
      </section>

      {/* ================= GDPR OVERVIEW ================= */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
              What Is GDPR Compliance?
            </h1>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              GDPR (General Data Protection Regulation) protects personal data of individuals in the EU & EEA. 
              Organizations in the UAE must comply to avoid penalties and build trust with customers.
            </p>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              GDPR compliance is not just a legal requirement but a cornerstone of ethical business practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div className="ml-10">
              <h2 className="text-2xl font-semibold text-primary mb-6">
                Why GDPR Compliance Matters
              </h2>

              <ul className="space-y-4 text-gray-800 dark:text-gray-200">
                <li>• Protect personal data from breaches and cyber threats</li>
                <li>• Avoid hefty fines up to 20M EUR or 4% of global turnover</li>
                <li>• Gain trust and credibility with EU/EEA customers</li>
                <li>• Ensure accountability and transparency in data processing</li>
                <li>• Strengthen organizational security and privacy culture</li>
              </ul>
            </div>

            <div className="flex justify-center md:justify-end mr-20">
              <img
                src="/assets/services/gdpr-t.jpg"
                alt="GDPR Compliance"
                className="w-full max-w-md rounded-xl shadow-lg"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= GDPR SERVICES GRID ================= */}
      <section className="py-15 px-6 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-4xl font-semibold text-primary mb-14">
            Our GDPR Compliance Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

            {[
              {
                title: 'GDPR Gap Assessment',
                desc: 'Identify gaps in your data protection processes and compliance measures.',
              },
              {
                title: 'Data Mapping & Classification',
                desc: 'Understand how personal data flows through collection, storage, and processing.',
              },
              {
                title: 'Consent Management',
                desc: 'Evaluate how your organization obtains, stores, and manages user consent.',
              },
              {
                title: 'Security Measures & Protocols',
                desc: 'Protect business and customer data from breaches and unauthorized access.',
              },
              {
                title: 'Incident Response & Reporting',
                desc: 'Ensure swift, transparent action in case of data breaches or privacy incidents.',
              },
              {
                title: 'DPO as a Service',
                desc: 'Appoint a Data Protection Officer to oversee GDPR compliance and risk management.',
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

      {/* ================= GDPR DETAILS ================= */}
      <section className="py-24 px-20 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-center text-2xl md:text-3xl font-bold text-primary mb-16">
            How Our GDPR Compliance Process Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">

            <ul className="space-y-6 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li>• Assess: Evaluate data collection, storage, and processing practices</li>
              <li>• Report: Generate comprehensive reports on vulnerabilities and non-compliance</li>
              <li>• Implement: Collaborate with your team to apply corrective actions and training</li>
              <li>• Monitor: Continuously track compliance and emerging security risks</li>
            </ul>

            <ul className="space-y-6 ml-20 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li className="font-semibold">• Tailored Roadmap</li>
              <ul className="ml-10 space-y-4 text-gray-700 dark:text-muted-foreground">
                <li>○ Specific recommendations for GDPR compliance in UAE</li>
                <li>○ Ongoing technical support throughout the process</li>
                <li>○ Secure compliance badge to showcase your commitment</li>
                <li>○ Guidance on risk management and secure business continuity</li>
                <li>○ Long-term support to maintain compliance</li>
              </ul>
            </ul>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 text-center bg-gray-50 dark:bg-background transition-colors">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Achieve GDPR Compliance Today
        </h2>

        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Protect your customers’ data, stay compliant, and strengthen your global business reputation with expert GDPR consulting in UAE.
        </p>

        <Link href="/contact">
          <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-md hover:shadow-lg transition-all duration-300">
            Talk to a GDPR Expert
          </button>
        </Link>
      </section>

    </main>
  );
}
