'use client';

import Link from 'next/link';

export default function Microsoft365SecurityPage() {
  return (
    <main className="w-full bg-gray-50 text-gray-900">

      {/* ================= HERO ================= */}
      <section
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/services/microsoft-365.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/40"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-70">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
            Microsoft 365 Security Services
          </h1>

          <p className="mt-6 text-sm md:text-xl text-gray-200 max-w-4xl text-left">
            Ensure your everyday Office 365 productivity suite is secure from
            data loss, misconfigurations, and cyber risks across the UAE.
          </p>

          <Link href="/contact">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
              Secure Now
            </button>
          </Link>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
              What Is Office 365 Security?
            </h1>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              Microsoft Office 365 is the most widely used productivity suite across
              organizations worldwide, including enterprises in the UAE.
              Despite built-in security, cyber risks still arise due to improper
              email encryption, misconfigured policies, and weak access controls.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div className="ml-10">
              <h2 className="text-2xl font-semibold text-primary mb-6">
                Why Office 365 Security Matters
              </h2>

              <ul className="space-y-4 text-gray-800 dark:text-gray-200">
                <li>• Prevent data loss and information leakage</li>
                <li>• Fix misconfigured security policies</li>
                <li>• Strengthen access controls and identity security</li>
                <li>• Reduce email-based cyber risks</li>
                <li>• Maintain compliance across UAE regulations</li>
              </ul>
            </div>

            <div className="flex justify-center md:justify-end mr-20">
              <img
                src="/assets/services/microsoft-365-security.jpg"
                alt="Microsoft 365 Security"
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
            Benefits of Office 365 Security Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

            {[
              {
                title: 'Policy Configuration',
                desc: 'Implement essential security policies, controls, and threat monitoring.',
              },
              {
                title: 'Data Protection',
                desc: 'Prevent data loss through encryption, information protection, and access controls.',
              },
              {
                title: 'Compliance Assurance',
                desc: 'Ensure adherence to Office 365 compliance requirements in the UAE.',
              },
              {
                title: 'Threat Monitoring',
                desc: 'Detect and mitigate cyber threats affecting Office 365 services.',
              },
              {
                title: 'Employee Awareness',
                desc: 'Educate employees to reduce human-driven security risks.',
              },
              {
                title: 'IT Burden Reduction',
                desc: 'Allow IT teams to focus on core business while security is managed by experts.',
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
            How Our Office 365 Security Engagement Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">

            <ul className="space-y-6 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li>• Communicate to understand business requirements</li>
              <li>• Assess existing and potential Office 365 threats</li>
              <li>• Test threats to determine impact and likelihood</li>
              <li>• Configure security controls and policies</li>
              <li>• Monitor risks continuously</li>
            </ul>

            <ul className="space-y-6 ml-20 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li className="font-semibold">• Report & Retest</li>
              <ul className="ml-10 space-y-4 text-gray-700 dark:text-muted-foreground">
                <li>○ Detailed security posture reporting</li>
                <li>○ Clear remediation recommendations</li>
                <li>○ End-to-end risk mitigation support</li>
                <li>○ Retesting after fixes</li>
                <li>○ Continuous improvement guidance</li>
              </ul>
              <li className="font-semibold ml-5">• Prevention & Mitigation Focus</li>
            </ul>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 text-center bg-gray-50 dark:bg-background transition-colors">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Secure Your Microsoft 365 Environment Today
        </h2>

        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Protect your Office 365 environment from cyber risks, data loss,
          and compliance failures with Vulnuris experts in the UAE.
        </p>

        <Link href="/contact">
          <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-md hover:shadow-lg transition-all duration-300">
            Talk to a Microsoft 365 Security Expert
          </button>
        </Link>
      </section>

    </main>
  );
}
