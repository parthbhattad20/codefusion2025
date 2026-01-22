'use client';

import Link from 'next/link';
import { ShieldAlert, Crosshair, Bug, Users, AlertTriangle, Lock, LineChart } from 'lucide-react';

export default function ISO27701Page() {
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

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/40"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-70">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
            ISO 27701 Privacy Consulting
          </h1>

          <p className="mt-6 text-sm md:text-xl text-gray-200 max-w-4xl text-left">
            Achieve compliance with ISO 27701, the international standard for Privacy Information Management Systems (PIMS). Protect personal data and enhance trust with clients and regulators.
          </p>

          <Link href="/contact">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition mt-6">
              Speak with a Privacy Expert
            </button>
          </Link>
        </div>
      </section>

      {/* ================= ISO 27701 OVERVIEW ================= */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
              What is ISO 27701?
            </h1>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              ISO 27701 is an extension to ISO 27001, focusing on privacy management. It helps organizations manage personal data responsibly, meet regulatory requirements like GDPR, and build trust with customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div className="ml-10">
              <h2 className="text-2xl font-semibold text-primary mb-6">
                Why ISO 27701 Matters
              </h2>

              <ul className="space-y-4 text-gray-800 dark:text-gray-200">
                <li>• Protect personal and sensitive data across processes</li>
                <li>• Ensure compliance with privacy regulations (GDPR, UAE PDPL, etc.)</li>
                <li>• Improve customer trust and business reputation</li>
                <li>• Integrate privacy management with existing ISO 27001 controls</li>
                <li>• Minimize privacy risks and regulatory penalties</li>
              </ul>
            </div>

            <div className="flex justify-center md:justify-end mr-20">
              <img
                src="/assets/services/iso-27001.webp"
                alt="ISO 27701 Consulting"
                className="w-full max-w-md rounded-xl shadow-lg"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= ISO 27701 SERVICES GRID ================= */}
      <section className="py-15 px-6 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-4xl font-semibold text-primary mb-14">
            Our ISO 27701 Consulting Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

            {[
              {
                title: 'Privacy Gap Analysis',
                desc: 'Evaluate your current privacy management processes against ISO 27701 requirements.'
              },
              {
                title: 'PIMS Risk Assessment',
                desc: 'Identify personal data risks and implement appropriate mitigation measures.'
              },
              {
                title: 'Policy & Procedure Development',
                desc: 'Create privacy policies and procedures aligned with ISO 27701 and relevant laws.'
              },
              {
                title: 'Staff Awareness Training',
                desc: 'Educate employees on privacy best practices and responsibilities for data protection.'
              },
              {
                title: 'Internal Audits',
                desc: 'Perform privacy internal audits to prepare for certification and ensure continuous compliance.'
              },
              {
                title: 'Certification Support',
                desc: 'Assist throughout ISO 27701 certification audits and maintain ongoing compliance.'
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

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-24 px-20 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-center text-2xl md:text-3xl font-bold text-primary mb-16">
            How Our ISO 27701 Engagement Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">

            <ul className="space-y-6 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li>• Define scope, objectives, and PIMS requirements</li>
              <li>• Perform privacy GAP analysis and risk assessment</li>
              <li>• Implement privacy controls and procedures</li>
              <li>• Conduct internal audits and staff training</li>
              <li>• Support throughout certification audits</li>
            </ul>

            <ul className="space-y-6 ml-20 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li className="font-semibold">• Continuous Privacy Improvement</li>
              <ul className="ml-10 space-y-4 text-gray-700 dark:text-muted-foreground">
                <li>○ Maintain compliance with privacy regulations</li>
                <li>○ Monitor and improve PIMS controls</li>
                <li>○ Post-certification audits & reporting</li>
                <li>○ Staff awareness & privacy culture</li>
              </ul>
              <li className="font-semibold ml-5">• Trust & Regulatory Assurance</li>
            </ul>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 text-center bg-gray-50 dark:bg-background transition-colors">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Achieve ISO 27701 Certification Confidently
        </h2>

        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Protect personal data, meet privacy regulations, and build trust with clients. Let our experts guide you to full ISO 27701 compliance.
        </p>

        <Link href="/contact">
          <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-md hover:shadow-lg transition-all duration-300">
            Speak With a Privacy Expert
          </button>
        </Link>
      </section>

    </main>
  );
}
