'use client';

import Link from 'next/link';

export default function DPOServicePage() {
  return (
    <main className="w-full bg-gray-50 text-gray-900">

      {/* ================= HERO ================= */}
      <section
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/services/dpo.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/40"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-70">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
            DPO as a Service
          </h1>

          <p className="mt-6 text-sm md:text-xl text-gray-200 max-w-4xl text-left">
            Your go-to security and compliance expert for data protection in the UAE.
          </p>

          <Link href="/contact">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
              PROTECT YOUR BUSINESS NOW
            </button>
          </Link>
        </div>
      </section>

      {/* ================= DPO OVERVIEW ================= */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
              What Is DPO in the UAE?
            </h1>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              A Data Protection Officer ensures your organization remains compliant with data privacy regulations, protecting personal data according to legal requirements in the UAE. 
            </p>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              DPO as a Service offers expert guidance, oversight, and actionable compliance strategies, often providing more flexibility and depth than an in-house DPO.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div className="ml-10">
              <h2 className="text-2xl font-semibold text-primary mb-6">
                Benefits of DPO as a Service
              </h2>

              <ul className="space-y-4 text-gray-800 dark:text-gray-200">
                <li>• Safeguard data privacy and customer rights</li>
                <li>• Provide precise compliance guidance</li>
                <li>• Monitor data processing activities</li>
                <li>• Manage risk and implement timely security measures</li>
                <li>• Foster a privacy-conscious organizational culture</li>
              </ul>
            </div>

            <div className="flex justify-center md:justify-end mr-20">
              <img
                src="/assets/services/dpo.jpg"
                alt="DPO Service"
                className="w-full max-w-md rounded-xl shadow-lg"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= DPO SERVICES GRID ================= */}
      <section className="py-15 px-6 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-4xl font-semibold text-primary mb-14">
            Our DPO as a Service Capabilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

            {[
              {
                title: 'Advisory',
                desc: 'Ensure your organization is aligned with privacy laws and regulations in the UAE through expert guidance.',
              },
              {
                title: 'Compliance Management',
                desc: 'Identify applicable compliance frameworks (e.g., GDPR) and appoint a DPO as per regulatory mandates.',
              },
              {
                title: 'Incident Response',
                desc: 'Assess and manage the impact of data privacy incidents, ensuring appropriate mitigation measures are applied.',
              },
              {
                title: 'Privacy Culture',
                desc: 'Foster a security-conscious organization with responsible data handling and awareness among employees.',
              },
              {
                title: 'Risk Management',
                desc: 'Implement strategies to address potential cyber risks and enhance secure business continuity.',
              },
              {
                title: 'Regulatory Liaison',
                desc: 'Act as the intermediary between data subjects and regulatory authorities, promoting accountability and compliance.',
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

      {/* ================= DPO DETAILS ================= */}
      <section className="py-24 px-20 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-center text-2xl md:text-3xl font-bold text-primary mb-16">
            How Our DPO Service Engagement Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">

            <ul className="space-y-6 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li>• Advisory: Ensure compliance with UAE privacy regulations</li>
              <li>• Compliance: Appoint DPO as per legal mandates</li>
              <li>• Incident Response: Manage data privacy incidents</li>
              <li>• Privacy Culture: Promote responsible data handling</li>
              <li>• Risk Management: Implement timely security strategies</li>
            </ul>

            <ul className="space-y-6 ml-20 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li className="font-semibold">• Accountability & Liaison</li>
              <ul className="ml-10 space-y-4 text-gray-700 dark:text-muted-foreground">
                <li>○ Act as intermediary with regulatory authorities</li>
                <li>○ Monitor data processing activities</li>
                <li>○ Enhance organization-wide compliance</li>
                <li>○ Build trust with stakeholders</li>
                <li>○ Maintain secure business continuity</li>
              </ul>
            </ul>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 text-center bg-gray-50 dark:bg-background transition-colors">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Protect Your Data Today
        </h2>

        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Ensure compliance, safeguard privacy, and manage risks with DPO as a Service in the UAE.
        </p>

        <Link href="/contact">
          <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-md hover:shadow-lg transition-all duration-300">
            Talk to a DPO Expert
          </button>
        </Link>
      </section>

    </main>
  );
}
