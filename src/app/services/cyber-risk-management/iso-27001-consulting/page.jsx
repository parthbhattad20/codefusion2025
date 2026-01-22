'use client';

import Link from 'next/link';
import { ShieldAlert, Crosshair, Bug, Users, AlertTriangle, Lock, LineChart } from 'lucide-react';

export default function ISO27001Page() {
  return (
    <main className="w-full bg-gray-50 text-gray-900">

      {/* ================= HERO WITH VIDEO ================= */}
      <section className="relative h-screen overflow-hidden">
        {/* VIDEO BACKGROUND */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/assets/videos/iso27001.mp4" // path to your video
          autoPlay
          loop
          muted
          playsInline
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/40"></div>

        {/* HERO CONTENT */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-70">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
            ISO 27001 Consulting & Certification
          </h1>

          <p className="mt-6 text-sm md:text-xl text-gray-200 max-w-4xl text-left">
            Leverage the expertise of qualified ISO 27001 compliance auditors in UAE and get certified – raise your business to international standards. Quick turnaround, hassle-free process!
          </p>

          <Link href="/contact">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition mt-6">
              Get ISO 27001 Certified Today
            </button>
          </Link>
        </div>
      </section>

      {/* ================= ISO 27001 OVERVIEW ================= */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
              What is ISO 27001?
            </h1>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              The ISO framework is a collection of policies and processes regarding information security. ISO 27001 provides guidelines to organizations for protecting their data systematically and economically by adopting an Information Security Management System (ISMS). It defines how businesses should handle risks related to data security threats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div className="ml-10">
              <h2 className="text-2xl font-semibold text-primary mb-6">
                Why ISO 27001 Matters
              </h2>

              <ul className="space-y-4 text-gray-800 dark:text-gray-200">
                <li>• Ensure data confidentiality, integrity, and availability</li>
                <li>• Maintain compliance with dynamic regulations in UAE</li>
                <li>• Gain competitive edge and customer trust</li>
                <li>• Save costs by preventing security incidents</li>
                <li>• Demonstrate international standards compliance</li>
              </ul>
            </div>

            <div className="flex justify-center md:justify-end mr-20">
              <img
                src="/assets/services/iso-27001.webp"
                alt="ISO 27001 Consulting"
                className="w-full max-w-md rounded-xl shadow-lg"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= ISO 27001 SERVICES GRID ================= */}
      <section className="py-15 px-6 bg-gray-50 dark:bg-background transition-colors">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-4xl font-semibold text-primary mb-14">
            Our ISO 27001 Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

            {[
              {
                title: 'GAP Analysis',
                desc: 'Assess ISO 27001 compliance, identify gaps, and show the present state of compliance.'
              },
              {
                title: 'Risk Assessment & Treatment',
                desc: 'Conduct ISMS risk assessments and develop risk treatment plans to mitigate threats.'
              },
              {
                title: 'Policies & Procedures',
                desc: 'Create information security procedures and policies aligned with Annex A of ISO 27001.'
              },
              {
                title: 'Penetration Testing',
                desc: 'Test the stability of ISO 27001 controls with vulnerability tests.'
              },
              {
                title: 'Awareness Training',
                desc: 'Train employees on ISMS security requirements to maintain organizational readiness.'
              },
              {
                title: 'Certification Audit Support',
                desc: 'Guide your organization through the ISO 27001 certification audit process.'
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
            How Our ISO 27001 Engagement Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">

            <ul className="space-y-6 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li>• Define scope, objectives, and ISMS requirements</li>
              <li>• Perform GAP analysis and risk assessment</li>
              <li>• Develop risk treatment plan & implement controls</li>
              <li>• Conduct internal audits and regular penetration testing</li>
              <li>• Support through certification audit</li>
            </ul>

            <ul className="space-y-6 ml-20 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              <li className="font-semibold">• Continuous Improvement</li>
              <ul className="ml-10 space-y-4 text-gray-700 dark:text-muted-foreground">
                <li>○ Executive-level risk reporting</li>
                <li>○ Staff awareness & training</li>
                <li>○ Technology control implementations</li>
                <li>○ Post-certification monitoring & updates</li>
              </ul>
              <li className="font-semibold ml-5">• Compliance & Security Assurance</li>
            </ul>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 text-center bg-gray-50 dark:bg-background transition-colors">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Achieve ISO 27001 Certification with Confidence
        </h2>

        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Protect your data and prove your business adheres to international standards. Let our experts guide you every step of the way.
        </p>

        <Link href="/contact">
          <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-md hover:shadow-lg transition-all duration-300">
            Speak With an ISO Expert
          </button>
        </Link>
      </section>

    </main>
  );
}
