'use client';

import Link from 'next/link';

export default function ContainerSecurityPage() {
  return (
    <main className="w-full bg-gray-50 text-gray-900">

      {/* ================= HERO ================= */}
      <section
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/services/container-security.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/40"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-70">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
            Container Security Services
          </h1>

          <p className="mt-6 text-sm md:text-xl text-gray-200 max-w-4xl text-left">
            Protect your containerized applications from vulnerabilities and threats with expert container security services in the UAE.
          </p>

          <Link href="/contact">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
              CONNECT WITH OUR EXPERTS
            </button>
          </Link>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
              What Is Docker Container Security?
            </h1>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              Container security is critical for protecting containerized applications from attacks, covering the entire environment including CI/CD pipelines, infrastructure, runtime, and lifecycle management.
            </p>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              A single compromised container can serve as an entry point into your organization's broader environment in the UAE, making proper security practices essential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div className="ml-10">
              <h2 className="text-2xl font-semibold text-primary mb-6">
                Benefits of Container Security Services
              </h2>

              <ul className="space-y-4 text-gray-800 dark:text-gray-200">
                <li>• Secure your containerized applications and related infrastructure</li>
                <li>• Enhance your organization’s overall IT security posture</li>
                <li>• Identify vulnerabilities across the container lifecycle</li>
                <li>• Protect cloud, hybrid, and on-premises environments</li>
                <li>• Strengthen build pipelines and runtime hosts</li>
              </ul>
            </div>

            <div className="flex justify-center md:justify-end mr-20">
              <img
                src="/assets/services/container-security.jpg"
                alt="Container Security"
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
            Our Container Security Capabilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

            {[
              {
                title: 'Image Security Assessment',
                desc: 'Scan container images for vulnerabilities, outdated packages, and misconfigurations while removing unnecessary components.',
              },
              {
                title: 'Orchestration Platform Security',
                desc: 'Implement RBAC, network policies, secret management, and restrict unnecessary permissions in container orchestration platforms.',
              },
              {
                title: 'Runtime Security Monitoring',
                desc: 'Monitor container runtime to detect, alert, and respond to suspicious activities in real-time.',
              },
              {
                title: 'CI/CD Pipeline Security',
                desc: 'Integrate security testing into the CI/CD pipeline and sign container images to prevent tampering.',
              },
              {
                title: 'Infrastructure Protection',
                desc: 'Secure hosts, platforms, and container applications across cloud, hybrid, and on-prem environments.',
              },
              {
                title: 'Compliance & Risk Management',
                desc: 'Ensure containers meet security standards and regulatory requirements in the UAE.',
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
            How Our Container Security Engagement Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">

            <ul className="space-y-6 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li>• Conduct image security assessments for vulnerabilities and misconfigurations</li>
              <li>• Secure orchestration platforms with RBAC, network policies, and secret management</li>
              <li>• Monitor runtime for suspicious activities and respond promptly</li>
              <li>• Integrate security testing into CI/CD pipelines and verify image authenticity</li>
              <li>• Protect infrastructure across cloud, hybrid, and on-premises environments</li>
            </ul>

            <ul className="space-y-6 ml-20 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li className="font-semibold">• Lifecycle Security & Compliance</li>
              <ul className="ml-10 space-y-4 text-gray-700 dark:text-muted-foreground">
                <li>○ Continuous monitoring and alerting</li>
                <li>○ Risk mitigation and remediation guidance</li>
                <li>○ Regulatory compliance assurance</li>
                <li>○ CI/CD pipeline security integration</li>
                <li>○ Container image signing and verification</li>
              </ul>
              <li className="font-semibold ml-5">• Enhanced IT Security Posture</li>
            </ul>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 text-center bg-gray-50 dark:bg-background transition-colors">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Protect Your Containers Today
        </h2>

        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Ensure your containerized applications are secure, compliant, and resilient with our expert container security services.
        </p>

        <Link href="/contact">
          <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-md hover:shadow-lg transition-all duration-300">
            Talk to a Container Security Expert
          </button>
        </Link>
      </section>

    </main>
  );
}
