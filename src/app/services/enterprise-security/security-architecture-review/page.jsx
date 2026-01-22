'use client';

import Link from 'next/link';

export default function SecurityArchitectureReviewPage() {
  return (
    <main className="w-full bg-gray-50 text-gray-900">

      {/* ================= HERO ================= */}
      <section
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/services/security-architecture.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/40"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-70">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
            Security Architecture Review & Assessment
          </h1>

          <p className="mt-6 text-sm md:text-xl text-gray-200 max-w-4xl text-left">
            Securing your workforce and business systems from bad actors
            across the UAE and Dubai.
          </p>

          <Link href="/contact">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
              Start Assessment
            </button>
          </Link>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
              What Is Security Architecture Review?
            </h1>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              Security architecture review helps examine your organization’s
              cybersecurity policies, practices, and infrastructure in the UAE.
              It ensures your systems are designed to withstand evolving cyber
              threats while maintaining business integrity.
            </p>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              Due to changing cyber risks, laws, and regulations in the UAE,
              regular security architecture reviews are crucial. The outcome
              includes a detailed report with recommendations to fix identified
              vulnerabilities and strengthen overall security posture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div className="ml-10">
              <h2 className="text-2xl font-semibold text-primary mb-6">
                Why Security Architecture Review Is Critical
              </h2>

              <ul className="space-y-4 text-gray-800 dark:text-gray-200">
                <li>• 20% of global data breaches are due to weak security architecture</li>
                <li>• Prevent injection, RCE, and MITM attacks</li>
                <li>• Detect and respond to attacks efficiently</li>
                <li>• Maintain compliance with UAE regulations</li>
                <li>• Preserve confidentiality, integrity, and availability (CIA)</li>
              </ul>
            </div>

            <div className="flex justify-center md:justify-end mr-20">
              <img
                src="/assets/services/security-architecture-review.jpg"
                alt="Security Architecture Review"
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
            Our Security Architecture Review Approach
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

            {[
              {
                title: 'Assessment',
                desc: 'Identify, classify, and assess critical assets and vulnerabilities.',
              },
              {
                title: 'Design',
                desc: 'Define security requirements and design appropriate controls.',
              },
              {
                title: 'Implementation',
                desc: 'Implement and configure security controls aligned with requirements.',
              },
              {
                title: 'Monitoring',
                desc: 'Continuously monitor systems to defend against emerging threats.',
              },
              {
                title: 'Risk Reduction',
                desc: 'Minimize attack surface and improve detection capabilities.',
              },
              {
                title: 'Compliance Alignment',
                desc: 'Ensure alignment with UAE laws and regulatory standards.',
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
            How Our Security Architecture Review Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">

            <ul className="space-y-6 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li>• Review existing security architecture and controls</li>
              <li>• Identify design gaps and misconfigurations</li>
              <li>• Evaluate risks against current threat landscape</li>
              <li>• Map controls to business and compliance needs</li>
              <li>• Deliver actionable remediation roadmap</li>
            </ul>

            <ul className="space-y-6 ml-20 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li className="font-semibold">• Continuous Improvement</li>
              <ul className="ml-10 space-y-4 text-gray-700 dark:text-muted-foreground">
                <li>○ CIA triad validation</li>
                <li>○ Architecture hardening guidance</li>
                <li>○ Risk prioritization</li>
                <li>○ Monitoring strategy</li>
                <li>○ Retesting after remediation</li>
              </ul>
              <li className="font-semibold ml-5">• Business Integrity Protection</li>
            </ul>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 text-center bg-gray-50 dark:bg-background transition-colors">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Strengthen Your Security Architecture Today
        </h2>

        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Identify weaknesses, prevent breaches, and maintain compliance
          with expert Security Architecture Review services in the UAE.
        </p>

        <Link href="/contact">
          <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-md hover:shadow-lg transition-all duration-300">
            Talk to a Security Architect
          </button>
        </Link>
      </section>

    </main>
  );
}
