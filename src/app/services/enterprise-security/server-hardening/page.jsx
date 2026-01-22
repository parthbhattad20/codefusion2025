'use client';

import Link from 'next/link';

export default function ServerHardeningPage() {
  return (
    <main className="w-full bg-gray-50 text-gray-900">

      {/* ================= HERO ================= */}
      <section
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/services/server-hardening.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/40"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-70">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
            Server Hardening Services
          </h1>

          <p className="mt-6 text-sm md:text-xl text-gray-200 max-w-4xl text-left">
            Some servers are hard — and they’re our client’s.
            Our Server Hardening services in the UAE secure Windows and Linux servers
            using battle-tested, pro-hacker-grade hardening techniques.
          </p>

          <Link href="/contact">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
              Hardening Servers
            </h1>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              Servers demand absolute protection. Our Server Hardening team in the UAE
              follows a comprehensive security checklist to secure servers against
              real-world attack techniques without compromising performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div className="ml-10">
              <h2 className="text-2xl font-semibold text-primary mb-6">
                Why Server Hardening Matters
              </h2>

              <ul className="space-y-4 text-gray-800 dark:text-gray-200">
                <li>• Close server loopholes and misconfigurations</li>
                <li>• Reduce attack surface significantly</li>
                <li>• Protect critical infrastructure assets</li>
                <li>• Maintain performance while improving security</li>
                <li>• Meet compliance and security benchmarks</li>
              </ul>
            </div>

            <div className="flex justify-center md:justify-end mr-20">
              <img
                src="/assets/services/server-hardening.jpg"
                alt="Server Hardening"
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
            Our Server Hardening Capabilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

            {[
              {
                title: 'Harder',
                desc: 'Implement robust protocols that make your servers as durable as a diamond.',
              },
              {
                title: 'Optimal',
                desc: 'Configure servers with optimal security and performance settings.',
              },
              {
                title: 'Optimisation',
                desc: 'Optimize server scaling, resources, and cost without reducing security.',
              },
              {
                title: 'Windows Hardening',
                desc: 'Secure Windows servers using industry best practices and benchmarks.',
              },
              {
                title: 'Linux Hardening',
                desc: 'Harden Linux servers across distributions with precision configurations.',
              },
              {
                title: 'Configuration Alignment',
                desc: 'Fine-tune even the most minute server configuration points.',
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
            How Our Server Hardening Engagement Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">

            <ul className="space-y-6 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li>• Review server roles, OS, and architecture</li>
              <li>• Align configurations with security benchmarks</li>
              <li>• Disable unnecessary services and ports</li>
              <li>• Implement access controls and logging</li>
              <li>• Validate performance and stability</li>
            </ul>

            <ul className="space-y-6 ml-20 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li className="font-semibold">• Value-Added Enhancements</li>
              <ul className="ml-10 space-y-4 text-gray-700 dark:text-muted-foreground">
                <li>○ Server scaling optimization</li>
                <li>○ Resource utilization review</li>
                <li>○ Cost optimization strategies</li>
                <li>○ Security posture documentation</li>
                <li>○ Ongoing hardening guidance</li>
              </ul>
              <li className="font-semibold ml-5">• Performance Without Compromise</li>
            </ul>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 text-center bg-gray-50 dark:bg-background transition-colors">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Yes, Your Free Consultation Is Just a Click Away
        </h2>

        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Secure your Windows and Linux servers with expert-led
          Server Hardening services in the UAE.
        </p>

        <Link href="/contact">
          <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-md hover:shadow-lg transition-all duration-300">
            Book a Free Consultation
          </button>
        </Link>
      </section>

    </main>
  );
}
