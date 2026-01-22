'use client';

import Link from 'next/link';
import { ShieldAlert, Crosshair, Bug, Users, AlertTriangle, Lock, LineChart } from 'lucide-react';

export default function AramcoCCCPage() {
  return (
    <main className="w-full bg-gray-50 text-gray-900">

      {/* ================= HERO ================= */}
     <section className="relative h-screen overflow-hidden">

  {/* VIDEO BACKGROUND */}
  <video
    className="absolute top-0 left-0 w-full h-full object-cover"
    src="/assets/videos/iso27001.mp4"
    autoPlay
    loop
    muted
    playsInline
  />

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/40"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-70">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
            Aramco Cybersecurity Compliance (CCC)
          </h1>

          <p className="mt-6 text-sm md:text-xl text-gray-200 max-w-4xl text-left">
            Boost your security posture, ensure compliance, strengthen cybersecurity, and partner confidently with Saudi Aramco.
          </p>

          <Link href="/contact">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition mt-6">
              Speak with an Expert
            </button>
          </Link>
        </div>
      </section>

      {/* ================= ARAMCO CCC OVERVIEW ================= */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
              What Is Aramco CCC?
            </h1>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              Saudi Aramco introduced the Cybersecurity Compliance Certification (CCC) to ensure that all third-party vendors and supply chain partners follow stringent security requirements under SACS-002. This protects sensitive data and ensures robust cybersecurity standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div className="ml-10">
              <h2 className="text-2xl font-semibold text-primary mb-6">
                Why ARAMCO CCC Matters
              </h2>

              <ul className="space-y-4 text-gray-800 dark:text-gray-200">
                <li>• Mitigate cyber risks and vulnerabilities</li>
                <li>• Meet strict Saudi Aramco supply chain security standards</li>
                <li>• Strengthen your cybersecurity posture and operational readiness</li>
                <li>• Gain credibility and competitive advantage as a certified vendor</li>
                <li>• Ensure ongoing compliance through audits and continuous monitoring</li>
              </ul>
            </div>

            <div className="flex justify-center md:justify-end mr-20">
              <img
                src="/assets/services/aramco-ccc-audit.jpg"
                alt="ARAMCO CCC Consulting"
                className="w-full max-w-md rounded-xl shadow-lg"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= ARAMCO CCC SERVICES GRID ================= */}
      <section className="py-15 px-6 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-4xl font-semibold text-primary mb-14">
            Our ARAMCO CCC Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

            {[
              {
                title: 'Initial Evaluation',
                desc: 'Thorough assessment of your operations to ensure they align with Aramco security, quality, and environmental requirements.'
              },
              {
                title: 'CCC Gap Assessment',
                desc: 'Identify vulnerabilities in your information security measures against the Aramco CCC standard.'
              },
              {
                title: 'Cyber Risk Assessment',
                desc: 'Evaluate data security and privacy risks and align them with CCC requirements.'
              },
              {
                title: 'Risk Treatment Plan',
                desc: 'Draft plans to mitigate risks and close security gaps per SACS-002 guidelines.'
              },
              {
                title: 'Policies & Procedures',
                desc: 'Develop strategies to maintain privacy and security for CCC or CCC+ compliance.'
              },
              {
                title: 'Internal Audits & Reviews',
                desc: 'Regular audits to ensure adherence to policies and maintain compliance standards.'
              },
              {
                title: 'Technology Implementation',
                desc: 'Guidance to apply technical controls to close security gaps.'
              },
              {
                title: 'Security Awareness Training',
                desc: 'Employee training sessions to reinforce CCC requirements and prevent potential leaks.'
              }
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

      {/* ================= HOW ARAMCO CCC WORKS ================= */}
      <section className="py-24 px-20 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-center text-2xl md:text-3xl font-bold text-primary mb-16">
            How Our ARAMCO CCC Engagement Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">

            <ul className="space-y-6 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li>• Initial evaluation of systems and operations</li>
              <li>• Gap assessment against SACS-002 requirements</li>
              <li>• Risk assessment and mitigation planning</li>
              <li>• Implementation of policies, procedures, and technical controls</li>
              <li>• Internal audits and ongoing compliance reviews</li>
            </ul>

            <ul className="space-y-6 ml-20 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li className="font-semibold">• Continuous Security Improvement</li>
              <ul className="ml-10 space-y-4 text-gray-700 dark:text-muted-foreground">
                <li>○ Maintain CCC compliance continuously</li>
                <li>○ Monitor and strengthen cybersecurity posture</li>
                <li>○ Conduct regular audits and training</li>
                <li>○ Ensure readiness for certification and recertification</li>
              </ul>
              <li className="font-semibold ml-5">• Competitive Advantage & Reputation</li>
            </ul>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 text-center bg-gray-50 dark:bg-background transition-colors">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Simplify Your ARAMCO CCC Journey
        </h2>

        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Protect your data, ensure regulatory compliance, and gain the competitive advantage of being ARAMCO CCC certified.
        </p>

        <Link href="/contact">
          <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-md hover:shadow-lg transition-all duration-300">
            Speak With a Compliance Expert
          </button>
        </Link>
      </section>

    </main>
  );
}
