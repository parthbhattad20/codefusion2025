'use client';

import Link from 'next/link';

export default function ERPSecurityAuditPage() {
  return (
    <main className="w-full bg-gray-50 text-gray-900">

      {/* ================= HERO ================= */}
      <section
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/services/erp-security.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/40"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-70">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
            ERP Security Audit & Consulting Services
          </h1>

          <p className="mt-6 text-sm md:text-xl text-gray-200 max-w-4xl text-left">
            Securing your ERP systems from bad actors and cyber risks across
            the UAE and Dubai.
          </p>

          <Link href="/contact">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
              Secure Your ERP Systems Today
            </button>
          </Link>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
              What Is ERP Security Assessment?
            </h1>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              ERP (Enterprise Resource Planning) systems help organizations in
              the UAE unify and manage core business processes efficiently.
              ERP security involves a set of measures designed to protect these
              systems from unintended usage by malicious actors.
            </p>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              ERP systems store critical and sensitive business data, including
              financial and customer information. With a market size exceeding
              $74 billion as of 2023, securing ERP platforms is vital for most
              industries operating in the UAE.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div className="ml-10">
              <h2 className="text-2xl font-semibold text-primary mb-6">
                Why ERP Security Matters
              </h2>

              <ul className="space-y-4 text-gray-800 dark:text-gray-200">
                <li>• Protect sensitive financial and customer data</li>
                <li>• Prevent unauthorized access to ERP dashboards</li>
                <li>• Reduce operational and business disruption</li>
                <li>• Meet regulatory and compliance requirements in the UAE</li>
                <li>• Secure widely used enterprise systems</li>
              </ul>
            </div>

            <div className="flex justify-center md:justify-end mr-20">
              <img
                src="/assets/services/erp-security.jpg"
                alt="ERP Security Audit"
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
            Common Cyber Risks Affecting ERP Systems
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

            {[
              {
                title: 'Ransomware Attacks',
                desc: 'Encrypt ERP data into an unusable state, causing severe business disruption.',
              },
              {
                title: 'Phishing Attacks',
                desc: 'Malicious emails trick employees into sharing credentials or clicking harmful links.',
              },
              {
                title: 'Insider Threats',
                desc: 'Employees may intentionally or unintentionally inject malicious code or leak data.',
              },
              {
                title: 'Zero-Day Attacks',
                desc: 'Exploitation of unknown vulnerabilities without immediate patches available.',
              },
              {
                title: 'Unauthorized Access',
                desc: 'Weak access controls allow attackers to compromise ERP dashboards.',
              },
              {
                title: 'Data Breaches',
                desc: 'Sensitive business and customer data may be exposed or stolen.',
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
            How We Secure Your ERP Systems
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">

            <ul className="space-y-6 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li>• Protect ERP systems with strong security policies</li>
              <li>• Patch and mitigate application vulnerabilities</li>
              <li>• Monitor ERP activity for malicious behavior</li>
              <li>• Implement backup strategies to prevent data loss</li>
              <li>• Reduce risk through continuous security improvements</li>
            </ul>

            <ul className="space-y-6 ml-20 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li className="font-semibold">• Prevent, Detect & Respond</li>
              <ul className="ml-10 space-y-4 text-gray-700 dark:text-muted-foreground">
                <li>○ Security posture assessment</li>
                <li>○ Vulnerability identification</li>
                <li>○ Remediation guidance</li>
                <li>○ Retesting after fixes</li>
                <li>○ Continuous monitoring support</li>
              </ul>
              <li className="font-semibold ml-5">• Workforce & Access Protection</li>
            </ul>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 text-center bg-gray-50 dark:bg-background transition-colors">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Secure Your ERP Environment with Confidence
        </h2>

        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Protect your ERP systems from ransomware, insider threats, and data
          breaches with expert ERP security audits in the UAE.
        </p>

        <Link href="/contact">
          <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-md hover:shadow-lg transition-all duration-300">
            Talk to an ERP Security Expert
          </button>
        </Link>
      </section>

    </main>
  );
}
