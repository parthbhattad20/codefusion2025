'use client';

import Link from 'next/link';

export default function GCPServerHardeningPage() {
  return (
    <main className="w-full bg-gray-50 text-gray-900">

      {/* ================= HERO ================= */}
      <section
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/services/gcp-hardening.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/40"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-70">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
            GCP Server Hardening Services
          </h1>

          <p className="mt-6 text-sm md:text-xl text-gray-200 max-w-4xl text-left">
            Keep your Google Cloud Platform secure with expert server hardening strategies for UAE businesses.
          </p>

          <Link href="/contact">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
              TALK TO OUR CLOUD EXPERT
            </button>
          </Link>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
              What Is Cloud Server Hardening for GCP?
            </h1>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              Google Cloud Platform (GCP) provides powerful cloud infrastructure, but securing
              your assets remains the responsibility of your business. Server hardening for GCP
              ensures access control, audit readiness, and adherence to best practices from the
              Center for Internet Security (CIS).
            </p>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              Proper hardening protects sensitive information, ensures confidentiality and integrity,
              supports compliance, optimizes costs, and enhances incident response capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div className="ml-10">
              <h2 className="text-2xl font-semibold text-primary mb-6">
                Benefits of GCP Server Hardening
              </h2>

              <ul className="space-y-4 text-gray-800 dark:text-gray-200">
                <li>• Safeguard data with robust encryption and access controls</li>
                <li>• Ensure service continuity and effective backups</li>
                <li>• Optimize operational costs and cloud resource usage</li>
                <li>• Strengthen incident response and threat mitigation</li>
                <li>• Demonstrate compliance and organizational resilience</li>
              </ul>
            </div>

            <div className="flex justify-center md:justify-end mr-20">
              <img
                src="/assets/services/gcp-hardening.jpg"
                alt="GCP Server Hardening"
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
            Our GCP Server Hardening Capabilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

            {[
              {
                title: 'Discovery & Mapping',
                desc: 'Identify and categorize all cloud assets based on type and criticality.',
              },
              {
                title: 'Vulnerability Assessment',
                desc: 'Detect vulnerabilities using advanced tools and industry best practices.',
              },
              {
                title: 'Penetration Testing',
                desc: 'Validate vulnerabilities to determine real-world impact and risk.',
              },
              {
                title: 'Access & Identity Management',
                desc: 'Enforce least privilege and monitor user roles to prevent unauthorized access.',
              },
              {
                title: 'Reporting & Remediation',
                desc: 'Deliver detailed reports with actionable steps to secure your GCP environment.',
              },
              {
                title: 'Continuous Monitoring',
                desc: 'Maintain real-time oversight to detect threats and respond efficiently.',
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
            How Our GCP Server Hardening Engagement Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">

            <ul className="space-y-6 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li>• Discover and map all cloud assets</li>
              <li>• Perform vulnerability assessments</li>
              <li>• Conduct penetration testing for real-world validation</li>
              <li>• Apply access controls and secure configurations</li>
              <li>• Monitor and remediate continuously</li>
            </ul>

            <ul className="space-y-6 ml-20 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li className="font-semibold">• Secure Cloud Operations</li>
              <ul className="ml-10 space-y-4 text-gray-700 dark:text-muted-foreground">
                <li>○ CIS benchmark alignment</li>
                <li>○ Threat detection & mitigation</li>
                <li>○ Backup and disaster recovery readiness</li>
                <li>○ Cost-efficient resource utilization</li>
                <li>○ Enhanced incident response</li>
              </ul>
              <li className="font-semibold ml-5">• Compliance & Organizational Resilience</li>
            </ul>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 text-center bg-gray-50 dark:bg-background transition-colors">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Protect Your GCP Cloud Infrastructure Today
        </h2>

        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Ensure your Google Cloud environment is hardened, compliant, and secure with our expert services.
        </p>

        <Link href="/contact">
          <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-md hover:shadow-lg transition-all duration-300">
            Talk to a GCP Security Expert
          </button>
        </Link>
      </section>

    </main>
  );
}
