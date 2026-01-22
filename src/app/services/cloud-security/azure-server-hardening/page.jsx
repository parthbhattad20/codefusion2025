'use client';

import Link from 'next/link';

export default function AzureServerHardeningPage() {
  return (
    <main className="w-full bg-gray-50 text-gray-900">

      {/* ================= HERO ================= */}
      <section
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/services/azure-hardening.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/40"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-70">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
            Azure Server Hardening Services
          </h1>

          <p className="mt-6 text-sm md:text-xl text-gray-200 max-w-4xl text-left">
            Hardening your Azure cloud server in the UAE with a comprehensive
            cybersecurity strategy to defend against modern threats.
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
              What Is Azure Cloud Server Hardening?
            </h1>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              Azure is Microsoft’s cloud computing platform offering services such as
              storage, networking, analytics, virtual computing, PaaS, SaaS, and IaaS.
              It enables organizations across the UAE to build, deploy, and manage
              applications efficiently.
            </p>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              Despite being more secure than traditional on-premise systems, Azure
              environments are still vulnerable to threats such as access token abuse,
              lateral movement, and SSRF attacks. Azure server hardening helps minimize
              these risks by strengthening configurations and security controls.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div className="ml-10">
              <h2 className="text-2xl font-semibold text-primary mb-6">
                Benefits of Azure Server Hardening
              </h2>

              <ul className="space-y-4 text-gray-800 dark:text-gray-200">
                <li>• Prevent unauthorized access and credential abuse</li>
                <li>• Mitigate lateral movement and SSRF attacks</li>
                <li>• Improve compliance with PDPL, NESA, and ISO 27001</li>
                <li>• Strengthen protection against DDoS attacks</li>
                <li>• Optimize cloud resource utilization and costs</li>
              </ul>
            </div>

            <div className="flex justify-center md:justify-end mr-20">
              <img
                src="/assets/services/azure-hardening.jpg"
                alt="Azure Server Hardening"
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
            Our Azure Server Hardening Capabilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

            {[
              {
                title: 'Identity & Access Management (IAM)',
                desc: 'Implement strong authentication and RBAC with least privilege access.',
              },
              {
                title: 'Network Security Groups (NSGs)',
                desc: 'Configure inbound and outbound traffic rules to restrict unnecessary communication.',
              },
              {
                title: 'Azure Security Center',
                desc: 'Enable advanced threat detection, VA/PT, and intelligent security insights.',
              },
              {
                title: 'Patch Management',
                desc: 'Ensure regular security patches across all Azure services and workloads.',
              },
              {
                title: 'Compliance & Governance',
                desc: 'Align Azure environments with UAE regulatory and security standards.',
              },
              {
                title: 'Continuous Monitoring',
                desc: 'Proactively monitor Azure workloads to detect and respond to threats.',
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
            How Our Azure Server Hardening Engagement Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">

            <ul className="space-y-6 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li>• Review Azure architecture and deployed services</li>
              <li>• Identify vulnerabilities and misconfigurations</li>
              <li>• Implement IAM, NSGs, and security controls</li>
              <li>• Apply patching and remediation measures</li>
              <li>• Reduce attack surface across Azure workloads</li>
            </ul>

            <ul className="space-y-6 ml-20 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li className="font-semibold">• Secure Azure Operations</li>
              <ul className="ml-10 space-y-4 text-gray-700 dark:text-muted-foreground">
                <li>○ Hardened Azure configurations</li>
                <li>○ Continuous threat detection</li>
                <li>○ Improved regulatory compliance</li>
                <li>○ Optimized security investments</li>
                <li>○ Long-term risk reduction</li>
              </ul>
              <li className="font-semibold ml-5">• Resilient Cloud Infrastructure</li>
            </ul>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 text-center bg-gray-50 dark:bg-background transition-colors">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Secure Your Azure Cloud Environment Today
        </h2>

        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Protect your Azure workloads with expert server hardening services
          designed for UAE businesses.
        </p>

        <Link href="/contact">
          <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-md hover:shadow-lg transition-all duration-300">
            Talk to an Azure Security Expert
          </button>
        </Link>
      </section>

    </main>
  );
}
