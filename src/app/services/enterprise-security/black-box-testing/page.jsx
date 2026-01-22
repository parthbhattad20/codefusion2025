'use client';

import Link from 'next/link';

export default function BlackBoxTestingPage() {
  return (
    <main className="w-full bg-gray-50 text-gray-900">

      {/* ================= HERO ================= */}
      <section
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/services/black-box.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/40"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-70">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
            Black Box Penetration Testing
          </h1>

          <p className="mt-6 text-sm md:text-xl text-gray-200 max-w-4xl text-left">
            Discover how a real attacker could hack your business — safely.
            Our expert Black Box Penetration Testing services replicate real-world
            cyber attacks without prior system knowledge.
          </p>

          <Link href="/contact">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
              Request a Pentest
            </button>
          </Link>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
              What is Black Box Penetration Testing?
            </h2>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              Black Box Penetration Testing is a real-world security assessment
              conducted without any internal knowledge of application code,
              architecture, or system design — except a target URL and legal permission.
              This approach helps UAE organizations understand their true exposure
              to external cyber threats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div className="ml-10">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Why Black Box Testing Matters
              </h3>

              <ul className="space-y-4 text-gray-800 dark:text-gray-200">
                <li>• Simulates real-world hacker behavior</li>
                <li>• Provides unbiased security insights</li>
                <li>• Identifies exploitable vulnerabilities</li>
                <li>• Tests exposed attack surfaces</li>
                <li>• Helps prioritize real business risks</li>
              </ul>
            </div>

            <div className="flex justify-center md:justify-end mr-20">
              <img
                src="/assets/services/black-box-testing.jpg"
                alt="Black Box Penetration Testing"
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
            Benefits of Black Box Penetration Testing
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

            {[
              {
                title: 'Realistic Attack Simulation',
                desc: 'Replicates how attackers exploit exposed applications and infrastructure.'
              },
              {
                title: 'Unbiased Results',
                desc: 'No insider knowledge ensures realistic vulnerability discovery.'
              },
              {
                title: 'Critical Vulnerability Detection',
                desc: 'Identifies issues like XSS, CSRF, injection flaws, and misconfigurations.'
              },
              {
                title: 'Business Logic Testing',
                desc: 'Manual testing uncovers complex logic and workflow vulnerabilities.'
              },
              {
                title: 'Actionable Remediation',
                desc: 'Clear guidance enables faster and effective vulnerability fixes.'
              },
              {
                title: 'Regulatory Readiness',
                desc: 'Supports security and compliance expectations across UAE industries.'
              }
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
            How Our Black Box Testing Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">

            <ul className="space-y-6 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li>• Reconnaissance using active & passive scanning</li>
              <li>• Identify exposed attack vectors</li>
              <li>• Vulnerability Assessment & Penetration Testing (VAPT)</li>
              <li>• Manual exploitation & validation</li>
              <li>• Risk-based impact analysis</li>
            </ul>

            <ul className="space-y-6 ml-20 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li className="font-semibold">• Reporting & Remediation</li>
              <ul className="ml-10 space-y-4 text-gray-700 dark:text-muted-foreground">
                <li>○ Detailed vulnerability documentation</li>
                <li>○ Exploitation proof & severity ratings</li>
                <li>○ Remediation guidance for developers</li>
                <li>○ Retesting after fixes</li>
              </ul>
              <li className="font-semibold ml-5">• Continuous Security Validation</li>
            </ul>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 text-center bg-gray-50 dark:bg-background transition-colors">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Test Your Defenses Before Attackers Do
        </h2>

        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Identify real attack paths with expert-led Black Box Penetration Testing by Vulnuris.
        </p>

        <Link href="/contact">
          <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-md hover:shadow-lg transition-all duration-300">
            Speak With a Security Expert
          </button>
        </Link>
      </section>

    </main>
  );
}
