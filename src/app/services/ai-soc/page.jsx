'use client';

import Link from 'next/link';

export default function AISOCPage() {
  return (
    <main className="w-full bg-gray-50 dark:bg-background text-gray-900 dark:text-foreground">

      {/* ================= HERO ================= */}
      <section
        className="relative h-screen bg-contain bg-center bg-no-repeat mt-20 bg-black"
        style={{ backgroundImage: "url('/assets/services/ai.webp')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-3xl md:text-5xl lg:text-5xl font-extrabold text-white mt-50">
            AI Security Operations Center (AI SOC)
          </h1>

          <p className="mt-6 text-sm md:text-xl text-gray-200 max-w-4xl text-left">
            Our AI-powered Security Operations Center continuously monitors, detects,
            and responds to cyber threats in real time using advanced analytics
            and automation.
          </p>

          <Link href="/contact">
            <button className="mt-5 px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
              SPEAK WITH AN EXPERT
            </button>
          </Link>
        </div>
      </section>

      {/* ================= AI SOC OVERVIEW ================= */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto text-center">

          <h1 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
            AI Security Operations Center (AI SOC)
          </h1>

          <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
            An AI SOC uses artificial intelligence and machine learning to
            monitor security events, detect anomalies, and respond to incidents
            faster than traditional SOC models.
          </p>

          <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
            Our AI SOC enhances threat visibility, reduces response time,
            minimizes alert fatigue, and improves your overall cybersecurity posture.
          </p>
        </div>
      </section>

      {/* ================= WHY AI SOC ================= */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div className="ml-10">
            <h2 className="text-2xl font-semibold text-primary mb-6">
              Why AI Security Operations Center
            </h2>

            <ul className="space-y-4 text-gray-800 dark:text-gray-200">
              <li>• 24×7 real-time threat monitoring</li>
              <li>• Faster detection using AI & machine learning</li>
              <li>• Reduced false positives and alert fatigue</li>
              <li>• Automated incident response</li>
              <li>• Improved visibility across infrastructure</li>
            </ul>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end mr-20">
            <img
              src="/assets/services/ai.webp"
              alt="AI SOC Services"
              className="w-full max-w-md rounded-xl shadow-lg dark:shadow-blue-900/30"
            />
          </div>
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="py-15 px-6 bg-gray-50 dark:bg-background">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl font-semibold text-primary mb-16">
            AI SOC Capabilities & Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

            {[
              {
                title: "24×7 Security Monitoring",
                desc: "Continuous monitoring of logs, endpoints, networks, and cloud environments."
              },
              {
                title: "AI Threat Detection",
                desc: "Machine learning–based detection of anomalies and advanced threats."
              },
              {
                title: "Incident Response",
                desc: "Automated and analyst-led incident investigation and response."
              },
              {
                title: "SIEM & SOAR Integration",
                desc: "Centralized visibility and automated workflows using SIEM and SOAR platforms."
              },
              {
                title: "Threat Intelligence",
                desc: "Correlation of global threat intelligence with internal security events."
              },
              {
                title: "Compliance Monitoring",
                desc: "Support for regulatory compliance through continuous monitoring and reporting."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="
                  bg-white dark:bg-muted
                  border border-gray-200 dark:border-border
                  rounded-2xl p-6
                  shadow-sm hover:shadow-xl
                  transition-all duration-300
                  hover:-translate-y-2
                  group
                "
              >
                <h3 className="
                  font-semibold text-lg mb-3
                  text-blue-600 dark:text-blue-400
                  group-hover:text-violet-600 dark:group-hover:text-violet-400
                  transition-colors
                ">
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

      {/* ================= AI SOC DETAILS ================= */}
      <section className="py-24 px-20 bg-gray-50 dark:bg-background">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-center text-2xl md:text-3xl font-bold text-sky-600 dark:text-sky-400 mb-16">
            What Is an AI Security Operations Center?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            <ul className="space-y-6 text-lg text-gray-800 dark:text-gray-200">
              <li>• Continuous monitoring of security events</li>
              <li>• AI-driven threat detection and correlation</li>
              <li>• Faster incident triage and investigation</li>
              <li>• Reduced manual workload for security teams</li>
            </ul>

            <ul className="space-y-6 text-lg text-gray-800 dark:text-gray-200 ml-20">
              <li>• Endpoint, network, and cloud visibility</li>
              <li>• Automated response and containment</li>
              <li>• Threat intelligence integration</li>
              <li>• Security reporting and dashboards</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 text-center bg-gray-50 dark:bg-background">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Stay Ahead of Cyber Threats with AI SOC
        </h2>

        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Detect, analyze, and respond to threats faster with our AI-powered
          Security Operations Center.
        </p>

        <Link href="/contact">
          <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-md hover:opacity-90 transition">
            Talk to an AI SOC Expert
          </button>
        </Link>
      </section>

    </main>
  );
}
