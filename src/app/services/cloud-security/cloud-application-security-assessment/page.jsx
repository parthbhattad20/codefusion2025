'use client';

import Link from 'next/link';

export default function CloudApplicationSecurityAssessmentPage() {
  return (
    <main className="w-full bg-gray-50 text-gray-900">

      {/* ================= HERO ================= */}
      <section
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/services/cloud-app-security.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/40"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-70">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
            Cloud Application Security Assessment
          </h1>

          <p className="mt-6 text-sm md:text-xl text-gray-200 max-w-4xl text-left">
            Expert and hassle-free Cloud Application Security Assessment (CASA)
            services to identify misconfigurations, security gaps, and threats
            across cloud applications and infrastructure in the UAE.
          </p>

          <Link href="/contact">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
              CONNECT WITH OUR EXPERTS
            </button>
          </Link>
        </div>
      </section>

      {/* ================= CASA OVERVIEW ================= */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
              What Is Cloud Application Security Assessment (CASA)?
            </h1>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              Cloud Application Security Assessment (CASA) is a framework
              introduced by Google to help organizations standardize security
              for cloud applications and infrastructure in the UAE. It evaluates
              configuration weaknesses and potential threats that could lead
              to serious security incidents if left undetected.
            </p>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              The CASA framework includes defined processes, controls, and
              policies to protect cloud applications and sensitive data,
              ensuring a secure and compliant cloud environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div className="ml-10">
              <h2 className="text-2xl font-semibold text-primary mb-6">
                Why CASA Is Important in the UAE
              </h2>

              <ul className="space-y-4 text-gray-800 dark:text-gray-200">
                <li>• Identify configuration weaknesses in cloud environments</li>
                <li>• Reduce risk of unauthorized access and data breaches</li>
                <li>• Improve compliance with UAE data security regulations</li>
                <li>• Strengthen customer trust in cloud-based services</li>
                <li>• Secure cloud-to-cloud integrations</li>
              </ul>
            </div>

            <div className="flex justify-center md:justify-end mr-20">
              <img
                src="/assets/services/cloud-app-security.jpg"
                alt="Cloud Application Security Assessment"
                className="w-full max-w-md rounded-xl shadow-lg"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= CASA SERVICES GRID ================= */}
      <section className="py-15 px-6 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-4xl font-semibold text-primary mb-14">
            Our CASA Assessment Approach
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

            {[
              {
                title: 'Policy Review',
                desc: 'Review security policies and procedures to ensure alignment with organizational and certification requirements.',
              },
              {
                title: 'Configuration Analysis',
                desc: 'Assess firewall rules, access controls, permissions, and cloud configurations to prevent misconfigurations.',
              },
              {
                title: 'Penetration Testing',
                desc: 'Identify vulnerabilities and potential attack vectors impacting cloud applications and infrastructure.',
              },
              {
                title: 'Threat Identification',
                desc: 'Evaluate potential threats that could exploit cloud weaknesses and lead to security incidents.',
              },
              {
                title: 'Risk Reduction',
                desc: 'Reduce common cloud security risks while improving the overall security posture.',
              },
              {
                title: 'Compliance Alignment',
                desc: 'Ensure CASA assessments support compliance with UAE data protection and security regulations.',
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

      {/* ================= CASA DETAILS ================= */}
      <section className="py-24 px-20 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-center text-2xl md:text-3xl font-bold text-primary mb-16">
            How Our CASA Engagement Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">

            <ul className="space-y-6 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li>• Understand cloud architecture and application scope</li>
              <li>• Review policies, processes, and security controls</li>
              <li>• Analyze cloud configuration and access management</li>
              <li>• Perform penetration testing on cloud applications</li>
              <li>• Identify risks and prioritize remediation actions</li>
            </ul>

            <ul className="space-y-6 ml-20 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li className="font-semibold">• Detailed Reporting</li>
              <ul className="ml-10 space-y-4 text-gray-700 dark:text-muted-foreground">
                <li>○ Comprehensive findings and observations</li>
                <li>○ Risk severity and impact analysis</li>
                <li>○ CASA-aligned methodology</li>
                <li>○ Actionable remediation roadmap</li>
                <li>○ Compliance-focused recommendations</li>
              </ul>
              <li className="font-semibold ml-5">• Secure Cloud Enablement</li>
            </ul>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 text-center bg-gray-50 dark:bg-background transition-colors">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Secure Your Cloud Applications with CASA
        </h2>

        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Identify security gaps, reduce risks, and strengthen trust with
          expert Cloud Application Security Assessment services in the UAE.
        </p>

        <Link href="/contact">
          <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-md hover:shadow-lg transition-all duration-300">
            Talk to a Cloud Security Expert
          </button>
        </Link>
      </section>

    </main>
  );
}
