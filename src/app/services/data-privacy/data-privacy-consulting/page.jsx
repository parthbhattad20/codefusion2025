'use client';

import Link from 'next/link';

export default function DataPrivacyPage() {
  return (
    <main className="w-full bg-gray-50 text-gray-900">

      {/* ================= HERO ================= */}
      <section
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/services/data-privacy.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/40"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-70">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
            Data Privacy Consulting
          </h1>

          <p className="mt-6 text-sm md:text-xl text-gray-200 max-w-4xl text-left">
            Stay ahead with comprehensive data privacy compliance services in UAE, protecting sensitive information and ensuring regulatory adherence.
          </p>

          <Link href="/contact">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
              BOOK YOUR CONSULTATION
            </button>
          </Link>
        </div>
      </section>

      {/* ================= DATA PRIVACY OVERVIEW ================= */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
              What is Data Privacy?
            </h1>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              Data privacy ensures the protection of sensitive information, including personal, financial, and health data, from cyber threats. It includes legal frameworks, policies, data governance, and global compliance standards.
            </p>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              Proper data privacy practices build trust, reduce risks, and ensure regulatory compliance across UAE and global markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div className="ml-10">
              <h2 className="text-2xl font-semibold text-primary mb-6">
                Why Data Privacy Matters
              </h2>

              <ul className="space-y-4 text-gray-800 dark:text-gray-200">
                <li>• Protect sensitive and personal information from breaches</li>
                <li>• Build customer trust and retain user engagement</li>
                <li>• Comply with UAE and international regulations</li>
                <li>• Reduce risks of fines and reputational loss</li>
                <li>• Support sustainable business practices and global expansion</li>
              </ul>
            </div>

            <div className="flex justify-center md:justify-end mr-20">
              <img
                src="/assets/services/data-privacy-t.jpg"
                alt="Data Privacy Consulting"
                className="w-full max-w-md rounded-xl shadow-lg"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= DATA PRIVACY SERVICES GRID ================= */}
      <section className="py-15 px-6 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-4xl font-semibold text-primary mb-14">
            Our Data Privacy Services in UAE
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

            {[
              {
                title: 'Risk Assessment',
                desc: 'Identify data privacy risks through comprehensive security and compliance assessments.',
              },
              {
                title: 'Policy Implementation',
                desc: 'Develop and enforce data protection policies and procedures tailored to your organization.',
              },
              {
                title: 'Cybersecurity Compliance',
                desc: 'Ensure adherence to UAE and international data privacy regulations and standards.',
              },
              {
                title: 'GDPR & Global Standards',
                desc: 'Comply with GDPR, HIPAA, ISO 27001, PDPL, and other global data privacy laws.',
              },
              {
                title: 'DPO as a Service',
                desc: 'Hire a Data Protection Officer to monitor compliance, implement policies, and safeguard data.',
              },
              {
                title: 'Continuous Monitoring',
                desc: 'Proactively track vulnerabilities and maintain compliance with evolving privacy regulations.',
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

      {/* ================= DATA PRIVACY DETAILS ================= */}
      <section className="py-24 px-20 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-center text-2xl md:text-3xl font-bold text-primary mb-16">
            How Our Data Privacy Consulting Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">

            <ul className="space-y-6 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li>• Assess: Evaluate your data collection, processing, and storage practices</li>
              <li>• Report: Provide detailed insights on risks and compliance gaps</li>
              <li>• Implement: Apply tailored privacy policies, staff training, and security measures</li>
              <li>• Monitor: Continuously track compliance and emerging vulnerabilities</li>
            </ul>

            <ul className="space-y-6 ml-20 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li className="font-semibold">• Regulatory Coverage</li>
              <ul className="ml-10 space-y-4 text-gray-700 dark:text-muted-foreground">
                <li>○ UAE standards: ADHICS, SIA, Federal Data Protection Law</li>
                <li>○ Global: GDPR, HIPAA, ISO 27001/27002, PDPL, DPDP, CCPA</li>
                <li>○ DPO as a Service for continuous oversight</li>
                <li>○ Customized compliance roadmap and reporting</li>
                <li>○ Ongoing guidance for secure data management</li>
              </ul>
            </ul>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 text-center bg-gray-50 dark:bg-background transition-colors">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Secure Your Business With Data Privacy
        </h2>

        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Protect your sensitive data, meet compliance requirements, and gain customer trust with expert data privacy consulting in UAE.
        </p>

        <Link href="/contact">
          <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-md hover:shadow-lg transition-all duration-300">
            Talk to a Data Privacy Expert
          </button>
        </Link>
      </section>

    </main>
  );
}
