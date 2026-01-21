'use client';

import Link from 'next/link';
import {
  ShieldCheck,
  ClipboardCheck,
  AlertTriangle,
  Users,
  LineChart,
  Lock,
} from 'lucide-react';

export default function GRCPage() {
  return (
    <main className="w-full bg-gray-50 dark:bg-background text-gray-900 dark:text-foreground transition-colors">

      {/* ================= HERO ================= */}
      <section
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/services/grc.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-70">
            GRC Advisory & Audit Services
          </h1>

          <p className="mt-6 text-sm md:text-xl text-gray-200 max-w-4xl text-left">
            Vulnuris GRC Advisory and Audit services help organizations establish strong governance,
            manage cybersecurity risks, and achieve regulatory compliance.
          </p>

          <Link href="/contact">
            <button className="mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition">
              SPEAK WITH AN EXPERT
            </button>
          </Link>
        </div>
      </section>

      {/* ================= GRC OVERVIEW ================= */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
              GRC Advisory & Audit Services
            </h1>

            <p className="mt-4 text-lg font-semibold text-sky-600 dark:text-sky-400">
              Governance • Risk • Compliance
            </p>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              Vulnuris provides end-to-end GRC advisory services to help organizations
              meet regulatory obligations, reduce operational risk, and demonstrate trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <div className="ml-10">
              <h2 className="text-2xl font-semibold text-primary mb-6">
                Why Vulnuris GRC Advisory
              </h2>

              <ul className="space-y-4 text-gray-800 dark:text-gray-200">
                <li className="font-semibold">• Strengthen governance and accountability</li>

                <ul className="ml-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>○ Policy and framework development</li>
                  <li>○ Risk identification and assessment</li>
                  <li>○ Compliance mapping</li>
                  <li>○ Control design and implementation</li>
                  <li>○ Audit readiness</li>
                </ul>

                <li>• Reduce regulatory and operational risk</li>
                <li>• Improve audit outcomes</li>
                <li>• Align security controls with business goals</li>
                <li>• Ongoing compliance monitoring</li>
              </ul>
            </div>

            {/* Right Image */}
            <div className="flex justify-center md:justify-end mr-20">
              <img
                src="/assets/services/grc.jpg"
                alt="GRC Advisory"
                className="w-full max-w-md rounded-xl shadow-lg dark:shadow-blue-900/30 transition-all"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-4xl font-semibold text-primary mb-14">
            GRC Advisory & Audit Capabilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {[
              {
                title: "Governance Frameworks",
                desc: "ISO 27001, NIST, COBIT aligned governance frameworks."
              },
              {
                title: "Risk Assessment & Management",
                desc: "Identify and prioritize cybersecurity and operational risks."
              },
              {
                title: "Compliance Advisory",
                desc: "ISO, SOC 2, PCI DSS, GDPR, HIPAA, RBI compliance."
              },
              {
                title: "Internal & External Audits",
                desc: "Audit planning, evidence collection, remediation."
              },
              {
                title: "Third-Party Risk Management",
                desc: "Vendor risk assessment and monitoring."
              },
              {
                title: "Continuous Compliance",
                desc: "Always audit-ready with ongoing control testing."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white dark:bg-muted border border-gray-200 dark:border-border rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2"
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

          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-600 text-white p-8 rounded-lg text-left">
              <h3 className="font-semibold mb-3">Audit Readiness</h3>
              <p className="text-sm">
                Prepare confidently for internal and external audits.
              </p>
            </div>

            <div className="bg-blue-600 text-white p-8 rounded-lg text-left">
              <h3 className="font-semibold mb-3">Regulatory Compliance</h3>
              <p className="text-sm">
                Meet global and industry-specific regulatory requirements.
              </p>
            </div>
          </div> */}

        </div>
      </section>

      {/* ================= DETAILS ================= */}
      <section className="py-10 px-6 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-center text-3xl font-bold text-sky-600 dark:text-sky-400 mb-16">
            What are GRC Advisory & Audit Services?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg">

            <ul className="space-y-6 text-gray-800 dark:text-gray-200">
              <li>• Establish governance and accountability</li>
              <li>• Manage cybersecurity and operational risks</li>
              <li>• Map controls to regulations</li>
              <li>• Prepare for audits and certifications</li>
              <li>• Improve transparency and reporting</li>
            </ul>

            <ul className="space-y-6 text-gray-800 dark:text-gray-200">
              <li className="font-semibold">• Ongoing GRC Management</li>
              <li>• Continuous risk assessments</li>
              <li>• Policy updates & control testing</li>
              <li>• Vendor risk oversight</li>
              <li>• Executive & board reporting</li>
            </ul>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 text-center bg-gray-50 dark:bg-background transition-colors">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Build Trust Through Strong Governance
        </h2>

        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Strengthen governance, reduce risk, and achieve compliance with Vulnuris GRC services.
        </p>

        <Link href="/contact">
          <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-md hover:shadow-lg transition">
            Talk to a GRC Expert
          </button>
        </Link>
      </section>

    </main>
  );
}
