'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function CloudSecurityPage() {
  return (
    <main className="w-full bg-gray-50 dark:bg-background text-gray-900 dark:text-foreground">

      {/* ================= HERO ================= */}
      <section
        className="relative h-screen bg-cover bg-center bg-no-repeat mt-20"
        style={{ backgroundImage: "url('/assets/services/cloud.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-55">
            Cloud Security Services
          </h1>

          <p className="mt-1 text-sm md:text-xl text-gray-200 max-w-4xl text-left">
            Secure your cloud infrastructure, applications, and data with enterprise-grade
            cloud security consulting. Our experts protect AWS, Azure, and Google Cloud
            environments against modern cyber threats.
          </p>

          <Link href="/contact">
            <button className=" px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
              SPEAK WITH AN EXPERT
            </button>
          </Link>
        </div>
      </section>

      {/* ================= CLOUD SECURITY OVERVIEW ================= */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
            Cloud Security Consulting & Protection
          </h2>

          <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
            Our Cloud Security Services help organizations securely adopt cloud technologies
            while maintaining compliance, visibility, and control. We design, implement,
            and manage secure cloud environments tailored to your business needs.
          </p>

        </div>
      </section>

      {/* ================= WHY CLOUD SECURITY ================= */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="ml-10">
            <h2 className="text-2xl font-semibold text-primary mb-6">
              Why Cloud Security Matters
            </h2>

            <ul className="space-y-4 text-gray-800 dark:text-gray-200">
              <li>• Prevent cloud misconfigurations</li>
              <li>• Protect sensitive data and workloads</li>
              <li>• Maintain regulatory compliance</li>
              <li>• Detect threats in real time</li>
              <li>• Reduce cloud attack surface</li>
            </ul>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end mr-20">
            <img
              src="/assets/services/cloud_security.webp"
              alt="Cloud Security"
              className="w-full max-w-lg rounded-xl shadow-lg dark:shadow-blue-900/30"
            />
          </div>

        </div>
      </section>

      {/* ================= CLOUD SECURITY SERVICES GRID ================= */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-4xl font-semibold text-primary mb-14">
            Our Cloud Security Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

            {[
              {
                title: "Cloud Security Assessment",
                desc: "Identify risks, misconfigurations, and vulnerabilities across cloud environments."
              },
              {
                title: "Cloud Compliance & Governance",
                desc: "Ensure compliance with ISO, SOC 2, PCI DSS, HIPAA, and regulatory standards."
              },
              {
                title: "Cloud Identity & Access Management",
                desc: "Secure user access with least-privilege IAM strategies."
              },
              {
                title: "Cloud Workload Protection",
                desc: "Protect virtual machines, containers, and serverless workloads."
              },
              {
                title: "Cloud Threat Detection",
                desc: "Monitor and detect malicious activities in real time."
              },
              {
                title: "Secure Cloud Architecture",
                desc: "Design secure, scalable cloud architectures from the ground up."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white dark:bg-muted border border-gray-200 dark:border-border rounded-2xl p-6
                shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <h3 className="font-semibold text-lg mb-3 text-blue-600 dark:text-blue-400">
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

      {/* ================= CLOUD SECURITY DETAILS ================= */}
      <section className="py-24 px-20">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-center text-2xl md:text-3xl font-bold text-sky-600 dark:text-sky-400 mb-16">
            What Our Cloud Security Covers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">

            <ul className="space-y-6 text-lg text-gray-800 dark:text-gray-200">
              <li>• Cloud infrastructure security</li>
              <li>• Secure DevOps & CI/CD pipelines</li>
              <li>• Data encryption & key management</li>
              <li>• Logging, monitoring & alerting</li>
              <li>• Cloud incident response</li>
            </ul>

            <ul className="space-y-6 ml-20 text-lg text-gray-800 dark:text-gray-200">
              <li>• AWS, Azure & GCP security</li>
              <li>• Cloud risk management</li>
              <li>• Zero Trust cloud architecture</li>
              <li>• Multi-cloud & hybrid security</li>
              <li>• Ongoing cloud security monitoring</li>
            </ul>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Secure Your Cloud Environment
        </h2>

        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Protect your cloud infrastructure with expert-led cloud security solutions.
        </p>

        <Link href="/contact">
          <button className="px-10 py-3 rounded-full text-lg font-semibold
            bg-gradient-to-r from-violet-500 to-blue-600 text-white
            shadow-md hover:shadow-lg transition-all duration-300">
            Talk to a Cloud Security Expert
          </button>
        </Link>
      </section>

    </main>
  );
}
