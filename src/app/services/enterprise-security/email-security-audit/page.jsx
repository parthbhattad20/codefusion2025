'use client';

import Link from 'next/link';

export default function EmailSecurityAuditPage() {
  return (
    <main className="w-full bg-gray-50 text-gray-900">

      {/* ================= HERO ================= */}
      <section
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/services/email-security.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/40"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-70">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
            Email Security Audit Services
          </h1>

          <p className="mt-6 text-sm md:text-xl text-gray-200 max-w-4xl text-left">
            Securing your electronic communication channels from bad actors in the UAE.
            Our Email Security Audit services help enterprises protect their inboxes
            from phishing, malware, and data leakage.
          </p>

          <Link href="/contact">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
              Protect Your Inbox
            </button>
          </Link>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
              What is Email Security in the UAE?
            </h1>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              Email security refers to a combination of technical and non-technical practices
              used to safeguard electronic communication from unauthorized access and attacks.
              In the UAE, human error remains the biggest risk — contributing to nearly 90% of
              email-based security incidents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div className="ml-10">
              <h2 className="text-2xl font-semibold text-primary mb-6">
                Why Email Security Matters
              </h2>

              <ul className="space-y-4 text-gray-800 dark:text-gray-200">
                <li>• Email is the primary business communication channel</li>
                <li>• Phishing remains the most common attack vector</li>
                <li>• Human error enables large-scale breaches</li>
                <li>• Email attacks lead to ransomware & data loss</li>
                <li>• Strong email security reduces business risk</li>
              </ul>
            </div>

            <div className="flex justify-center md:justify-end mr-20">
              <img
                src="/assets/services/email-audit.jpg"
                alt="Email Security Audit"
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
            Our Email Security Audit Approach
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

            {[
              {
                title: 'Train',
                desc: 'Educate employees on email security awareness and phishing resilience.',
              },
              {
                title: 'Filter',
                desc: 'Implement advanced filtering to block malicious and spoofed emails.',
              },
              {
                title: 'Secure',
                desc: 'Encrypt sensitive emails and apply data protection controls.',
              },
              {
                title: 'Respond',
                desc: 'Monitor email threats and respond quickly to security incidents.',
              },
              {
                title: 'Threat Analysis',
                desc: 'Analyze phishing, malware, and attachment-based threats.',
              },
              {
                title: 'Configuration Review',
                desc: 'Assess SPF, DKIM, DMARC, and mail server configurations.',
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
            How Our Email Security Audit Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">

            <ul className="space-y-6 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li>• Assess current email infrastructure & policies</li>
              <li>• Review phishing & malware exposure</li>
              <li>• Analyze employee security awareness</li>
              <li>• Identify misconfigurations and gaps</li>
              <li>• Evaluate incident response readiness</li>
            </ul>

            <ul className="space-y-6 ml-20 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li className="font-semibold">• Reporting & Improvement</li>
              <ul className="ml-10 space-y-4 text-gray-700 dark:text-muted-foreground">
                <li>○ Detailed audit findings</li>
                <li>○ Risk impact analysis</li>
                <li>○ Remediation recommendations</li>
                <li>○ Security awareness guidance</li>
                <li>○ Ongoing email protection strategy</li>
              </ul>
              <li className="font-semibold ml-5">• Continuous Email Protection</li>
            </ul>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 text-center bg-gray-50 dark:bg-background transition-colors">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Secure Every Email Before It Becomes a Threat
        </h2>

        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Protect your organization from phishing, malware, and data breaches
          with expert-led Email Security Audits.
        </p>

        <Link href="/contact">
          <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-md hover:shadow-lg transition-all duration-300">
            Talk to an Email Security Expert
          </button>
        </Link>
      </section>

    </main>
  );
}
