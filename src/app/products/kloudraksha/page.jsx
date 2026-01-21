'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Plus, Minus, ArrowBigLeft, Cloud, ShieldCheck, FileCheck, Brain, Layers, ScanSearch } from 'lucide-react';

const KloudRaksha = () => {
  return (
    <div className="min-h-screen bg-background text-foreground py-16 mt-10 lg:mt-20">
      <div className="container max-w-7xl mx-auto px-6">

        {/* Back */}
        <div className="mb-10">
          <Link href="/products" className="inline-flex items-center text-muted-foreground hover:text-foreground transition">
            <ArrowBigLeft className="mr-2" /> Back to Products
          </Link>
        </div>

        {/* HERO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-primary">
              KloudRaksha – Cloud Security Configuration Audit Platform
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              KloudRaksha is a cutting-edge SaaS platform that simplifies and accelerates cloud security audits using automation, compliance mapping, and risk-based prioritization.
            </p>

            <ul className="list-disc pl-5 text-muted-foreground space-y-2">
              <li>Automated cloud configuration audits</li>
              <li>Compliance-ready reports</li>
              <li>Multi-cloud security visibility</li>
            </ul>

            <Link href="/contact?subject=KloudRaksha%20Demo">
              <Button size="lg" className="bg-gradient-to-r from-violet-500 to-blue-600 rounded-full px-10 shadow-md">
                Request a Demo
              </Button>
            </Link>
          </div>

       <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg relative 
                       w-full h-[350px] md:h-[350px] lg:h-[400px] px-6">
                   <Image 
                       src="/assets/products/kloudraksha.png"
                       alt="KloudRaksha Dashboard"
                       fill
                       className="object-contain md:object-cover"
                   />
                   </div>


        </div>

        {/* WHY KLOUDRAKSHA */}
        <section className="py-20 bg-muted/40 border-y border-border mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">
                Why KloudRaksha?
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl">
                Cloud environments grow fast, making manual security audits slow and inconsistent. KloudRaksha automates assessments, maps findings to global standards, and delivers actionable remediation.
              </p>
            </div>

            <div className="divide-y divide-border">
              {[
                {
                  title: 'Manual & Time-Consuming Audits',
                  desc: 'Traditional cloud audits require significant manual effort and time, slowing down security teams.'
                },
                {
                  title: 'Compliance Complexity',
                  desc: 'Managing CIS, ISO 27001, GDPR, HIPAA across multiple cloud providers is challenging without automation.'
                },
                {
                  title: 'Poor Risk Prioritization',
                  desc: 'Security teams struggle to identify and remediate the most critical misconfigurations first.'
                }
              ].map((item, i) => (
                <details key={i} className="py-6" open={i === 2}>
                  <summary className="cursor-pointer text-xl font-semibold flex justify-between">
                    {item.title}
                    <span>+</span>
                  </summary>
                  <p className="mt-4 text-muted-foreground">{item.desc}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* KEY FEATURES */}
        <section className="py-20 mb-20">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-primary mb-16">
            Key Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              { icon: Cloud, title: 'Multi-Cloud Support', desc: 'Seamless audits across AWS, Azure, and GCP environments.' },
              { icon: FileCheck, title: 'Compliance Mapping', desc: 'Mapped to CIS Benchmarks, ISO 27001, GDPR, HIPAA and more.' },
              { icon: ShieldCheck, title: 'Risk-Based Prioritization', desc: 'Focus remediation on the most critical misconfigurations.' },
              { icon: Brain, title: 'GenAI Insights (Coming Soon)', desc: 'AI-powered recommendations and automated remediation.' },
            ].map((f, i) => (
              <div key={i} className="bg-card p-6 rounded-2xl border border-border shadow-sm hover:shadow-lg transition hover:-translate-y-1">
                <f.icon className="w-6 h-6 text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= HOW KLOUDRAKSHA WORKS ================= */}
<section className="py-20 bg-muted/40 text-foreground border-y border-border mb-20">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-6">
      How KloudRaksha Works
    </h2>

    <p className="text-center text-lg text-muted-foreground mb-16 max-w-3xl mx-auto">
      Automated cloud security audits with compliance mapping and actionable insights
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[
        {
          number: 1,
          title: 'Register & Subscribe',
          desc: 'Create your KloudRaksha account and choose a subscription plan'
        },
        {
          number: 2,
          title: 'Create Scan',
          desc: 'Define organization details and select the cloud environment'
        },
        {
          number: 3,
          title: 'Secure Access',
          desc: 'Provide cloud credentials securely using read-only permissions'
        },
        {
          number: 4,
          title: 'Automated Scanning',
          desc: 'KloudRaksha scans cloud infrastructure for misconfigurations'
        },
        {
          number: 5,
          title: 'Compliance Mapping',
          desc: 'Findings mapped to CIS, ISO, GDPR, and other standards'
        },
        {
          number: 6,
          title: 'Audit-Ready Reports',
          desc: 'Download detailed reports with remediation guidance'
        },
      ].map((step) => (
        <div
          key={step.number}
          className="
            group flex items-start gap-5
            bg-card rounded-2xl p-6
            border-2 border-border
            shadow-sm hover:shadow-lg
            transition-all duration-300
            hover:-translate-y-1
          "
        >
          {/* Number Badge */}
          <div
            className="
              flex-shrink-0 w-11 h-11 rounded-full
              flex items-center justify-center
              bg-primary/10 text-primary
              font-semibold text-lg
              group-hover:bg-primary group-hover:text-primary-foreground
              transition-colors
            "
          >
            {step.number}
          </div>

          {/* Content */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-1">
              {step.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {step.desc}
            </p>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>

        {/* FAQ */}
        <section className="py-20">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-primary mb-16">
            Frequently Asked Questions
          </h2>

          <div className="max-w-4xl mx-auto divide-y divide-border">
            {[
              {
                q: 'What is KloudRaksha?',
                a: 'KloudRaksha is an automated cloud security configuration audit platform designed to simplify compliance and risk management.'
              },
              {
                q: 'Which cloud providers are supported?',
                a: 'KloudRaksha supports AWS, Microsoft Azure, and Google Cloud Platform.'
              },
              {
                q: 'Which compliance standards are covered?',
                a: 'CIS Benchmarks, ISO 27001, GDPR, HIPAA, and more.'
              }
            ].map((faq, i) => (
              <details key={i} className="py-6">
                <summary className="cursor-pointer font-semibold text-lg flex justify-between">
                  {faq.q}
                  <span>+</span>
                </summary>
                <p className="mt-4 text-muted-foreground">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center py-16">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Secure Your Cloud with Confidence
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Discover how KloudRaksha simplifies cloud security audits and compliance.
          </p>
          <Link href="/contact?subject=KloudRaksha%20Demo">
            <Button size="lg" className="bg-gradient-to-r from-violet-500 to-blue-600 rounded-full px-10 shadow-md">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default KloudRaksha;
