'use client';

import Link from 'next/link';
import { ShieldAlert, Crosshair, Bug, Users, AlertTriangle, Lock, LineChart } from 'lucide-react';

export default function HIPAACompliancePage() {
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
            HIPAA Compliance Services
          </h1>

          <p className="mt-6 text-sm md:text-xl text-gray-200 max-w-4xl text-left">
            Ensure secure healthcare data transfer, build patient trust, and stay compliant with HIPAA regulations in the UAE.
          </p>

          <Link href="/contact">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition mt-6">
              Speak with an Expert
            </button>
          </Link>
        </div>
      </section>

      {/* ================= HIPAA OVERVIEW ================= */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
              What is HIPAA?
            </h1>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              HIPAA – the Health Insurance Portability and Accountability Act – protects sensitive health information and ensures secure patient data handling. It is applicable to healthcare providers, insurers, business associates, and any entity handling patient information in the UAE.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div className="ml-10">
              <h2 className="text-2xl font-semibold text-primary mb-6">
                Why HIPAA Compliance Matters
              </h2>

              <ul className="space-y-4 text-gray-800 dark:text-gray-200">
                <li>• Protect patient health information (PHI) from breaches</li>
                <li>• Avoid compliance violations and legal penalties</li>
                <li>• Build patient trust and improve reputation</li>
                <li>• Standardize secure handling of medical data across systems</li>
                <li>• Strengthen cybersecurity posture in healthcare operations</li>
              </ul>
            </div>

            <div className="flex justify-center md:justify-end mr-20">
              <img
                src="/assets/services/hipaa-overview.jpg"
                alt="HIPAA Compliance"
                className="w-full max-w-md rounded-xl shadow-lg"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= HIPAA SERVICES GRID ================= */}
      <section className="py-15 px-6 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-4xl font-semibold text-primary mb-14">
            Our HIPAA Compliance Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

            {[
              {
                title: 'Asset & Service Identification',
                desc: 'Determine what assets and employees handle PHI and how data flows across your systems.'
              },
              {
                title: 'HIPAA Gap Assessment',
                desc: 'Identify compliance gaps and vulnerabilities in your current patient data handling processes.'
              },
              {
                title: 'Cyber Risk Assessment',
                desc: 'Evaluate risks to patient information and ensure your systems meet HIPAA requirements.'
              },
              {
                title: 'Penetration Testing',
                desc: 'Detect vulnerabilities in your infrastructure and software, and prioritize remediation.'
              },
              {
                title: 'Risk Treatment Plan',
                desc: 'Create actionable plans to mitigate risks and close compliance gaps.'
              },
              {
                title: 'Policies & Procedures',
                desc: 'Implement robust security policies for handling PHI and HIPAA compliance.'
              },
              {
                title: 'Technology Implementation',
                desc: 'Deploy security controls and address gaps in systems and software.'
              },
              {
                title: 'Disaster Recovery Planning',
                desc: 'Prepare recovery strategies to maintain operations and data security during incidents.'
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

      {/* ================= HOW HIPAA WORKS ================= */}
      <section className="py-24 px-20 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-center text-2xl md:text-3xl font-bold text-primary mb-16">
            How Our HIPAA Compliance Engagement Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">

            <ul className="space-y-6 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li>• Identify assets, services, and personnel handling PHI</li>
              <li>• Conduct Gap Assessments and Cyber Risk Evaluation</li>
              <li>• Perform Penetration Testing to expose vulnerabilities</li>
              <li>• Implement Policies, Procedures, and Technical Controls</li>
              <li>• Develop Disaster Recovery and Long-Term Compliance Plans</li>
            </ul>

            <ul className="space-y-6 ml-20 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li className="font-semibold">• Continuous Improvement</li>
              <ul className="ml-10 space-y-4 text-gray-700 dark:text-muted-foreground">
                <li>○ Regular audits and compliance reviews</li>
                <li>○ Employee security awareness training</li>
                <li>○ Continuous monitoring of patient data security</li>
                <li>○ Timely remediation of vulnerabilities</li>
              </ul>
              <li className="font-semibold ml-5">• Compliance & Trust Assurance</li>
            </ul>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 text-center bg-gray-50 dark:bg-background transition-colors">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Protect Patient Data & Ensure HIPAA Compliance
        </h2>

        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Stay compliant, safeguard sensitive health information, and enhance trust with Wattlecorp HIPAA experts in the UAE.
        </p>

        <Link href="/contact">
          <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-md hover:shadow-lg transition-all duration-300">
            Speak With a HIPAA Expert
          </button>
        </Link>
      </section>

    </main>
  );
}
