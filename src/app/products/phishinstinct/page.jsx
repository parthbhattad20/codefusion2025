'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  ArrowBigLeft,
  ShieldCheck,
  MailWarning,
  BarChart3,
  Brain,
  Gamepad2,
  Layers,
  ScanSearch,
  Plus,
  Minus,
} from 'lucide-react';

const PhishInstinct = () => {
  return (
    <div className="min-h-screen bg-background text-foreground py-16 mt-10 lg:mt-20">
      <div className="container max-w-7xl mx-auto px-6">

        {/* Back */}
        <div className="mb-10">
          <Link href="/products" className="inline-flex items-center text-muted-foreground hover:text-foreground transition">
            <ArrowBigLeft className="mr-2" /> Back to Products
          </Link>
        </div>

        {/* ================= HERO ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-20">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-5xl font-extrabold text-primary tracking-tight">
              PhishInstinct – Build a Human Firewall
            </h1>

            <ul className="list-disc pl-5 text-lg md:text-2xl">
              <li>Realistic phishing simulations</li>
              <li>Behavior-driven security awareness</li>
              <li>Measurable risk reduction</li>
            </ul>

            <p className="text-lg text-muted-foreground max-w-xl">
              PhishInstinct is an advanced phishing simulation and awareness
              platform designed to transform employee behavior and make people
              your first line of defense against phishing attacks.
            </p>

            <Link href="/contact?subject=PhishInstinct%20Demo">
              <Button size="lg" className="bg-gradient-to-r from-violet-500 to-blue-600 rounded-full px-10">
                Get a Demo
              </Button>
            </Link>
          </div>

          <div className="relative w-full h-[350px] lg:h-[400px] bg-card rounded-xl shadow-lg overflow-hidden">
            <Image
              src="/assets/products/phishinstinct.png"
              alt="PhishInstinct Dashboard"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* ================= WHY PHISHINSTINCT ================= */}
        <section className="relative py-24 bg-muted/40 border-y border-border mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary">
                Why PhishInstinct is Critical for Organizations
              </h2>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl">
                Phishing attacks are becoming more sophisticated and
                compliance-driven testing is mandatory. PhishInstinct enables
                organizations to proactively identify human risk and reduce
                phishing-related incidents.
              </p>
            </div>

            <div className="divide-y divide-border">
              {[{
                title: 'Compliance Pressure',
                desc: 'Regulations demand continuous phishing simulations and awareness testing.'
              },{
                title: 'Human Vulnerabilities',
                desc: 'Employees still fall for convincing phishing emails and impersonation attacks.'
              },{
                title: 'No Risk Visibility',
                desc: 'Security teams lack clear insight into who is most likely to click.'
              }].map((item, i) => (
                <details key={i} className="group py-6" open={i === 2}>
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <span className="text-xl font-semibold">{item.title}</span>
                    <span className="text-2xl transition-transform group-open:rotate-180">+</span>
                  </summary>
                  <p className="mt-4 text-muted-foreground max-w-xl">{item.desc}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ================= KEY FEATURES ================= */}
        <section className="py-16 mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Key Features of PhishInstinct
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            <Feature icon={<MailWarning />} title="Realistic Simulations" desc="Launch realistic phishing campaigns that mirror real-world attacks." />
            <Feature icon={<Brain />} title="User Behavior Analytics" desc="Track clicks, credential submissions, and reporting behavior." />
            <Feature icon={<Layers />} title="Custom Templates" desc="Create or upload phishing templates tailored to your organization." />
            <Feature icon={<Gamepad2 />} title="Gamified Micro Learning" desc="Interactive training modules that change user behavior." />
          </div>
        </section>

        {/* ================= CHALLENGES ================= */}
        <section className="relative py-24 bg-muted/40 border-y border-border mb-24 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">
            Common Phishing & Awareness Challenges
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-16">
            Organizations struggle with ineffective training, lack of
            visibility, and increasing phishing sophistication.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Challenge title="Sophisticated Attacks" desc="Modern phishing emails look identical to internal communication." />
            <Challenge title="Ineffective Training" desc="Traditional awareness programs fail to change behavior." />
            <Challenge title="Costly Mistakes" desc="A single click can lead to data breaches and financial loss." />
          </div>
        </section>

       {/* ================= PHISHINSTINCT COVERAGE ================= */}
<section className="relative py-20 overflow-hidden mb-24 text-foreground">
  {/* Background Image */}
  <div className="absolute inset-0">
    <Image
      src="/assets/products/background.jpg"
      alt="Security Awareness Coverage Background"
      fill
      className="object-cover object-center opacity-10"
      priority
    />
  </div>

  <div className="relative max-w-7xl mx-auto px-6">

    {/* Section Heading */}
    <div className="text-center mb-20">
      <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
        Comprehensive Coverage of Human Phishing Risk
      </h2>
      <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
        PhishInstinct provides end-to-end visibility into employee behavior,
        phishing exposure, and awareness maturity across your organization.
      </p>
    </div>

    {/* Layout */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

      {/* LEFT – 2x2 Cards */}
      <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
        <Coverage
          title="Employees"
          desc="Train and assess users across departments, roles, and locations."
        />
        <Coverage
          title="Email & Attachments"
          desc="Simulate phishing links, credential forms, and malicious attachments."
        />
        <Coverage
          title="Compliance & Audits"
          desc="Generate audit-ready reports aligned with regulatory requirements."
        />
        <Coverage
          title="Risk Scoring"
          desc="Measure human risk levels and track improvement over time."
        />
      </div>

      {/* RIGHT – Tall Card */}
      <div className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-border flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold mb-6">
            Supported Integrations
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-8">
            PhishInstinct integrates seamlessly with your existing security and
            IT ecosystem for streamlined operations and reporting.
          </p>
        </div>

        <div className="bg-black/5 rounded-xl p-6 border border-border">
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li>• Email gateways</li>
            <li>• Identity & IAM platforms</li>
            <li>• SIEM & SOAR tools</li>
            <li>• Compliance & reporting systems</li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</section>


        {/* ================= HOW PHISHINSTINCT WORKS ================= */}
<section className="py-24 bg-muted/40 border-y border-border mb-24 text-foreground">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-20">
      <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
        How PhishInstinct Works
      </h2>
      <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
        PhishInstinct follows a structured, automated approach to simulate
        real-world phishing attacks, measure user behavior, and deliver
        actionable insights for continuous risk reduction.
      </p>
    </div>

    {/* Steps */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      {/* Step 1 */}
      <div className="group bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <span className="text-sm font-semibold text-primary">Step 1</span>
        <h3 className="text-xl font-semibold mt-2 mb-3">
          Access Phishing Template Library
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          Choose from an extensive library of realistic phishing templates
          designed to mimic real-world attack scenarios across industries.
        </p>
      </div>

      {/* Step 2 */}
      <div className="group bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <span className="text-sm font-semibold text-primary">Step 2</span>
        <h3 className="text-xl font-semibold mt-2 mb-3">
          Customize or Create Campaigns
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          Upload or build custom templates with realistic elements such as
          login forms, attachments, and branding to match your environment.
        </p>
      </div>

      {/* Step 3 */}
      <div className="group bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <span className="text-sm font-semibold text-primary">Step 3</span>
        <h3 className="text-xl font-semibold mt-2 mb-3">
          Launch Targeted Simulations
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          Create phishing campaigns with custom sender details, subject lines,
          and delivery patterns. Target specific user groups or the entire
          organization.
        </p>
      </div>

      {/* Step 4 */}
      <div className="group bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <span className="text-sm font-semibold text-primary">Step 4</span>
        <h3 className="text-xl font-semibold mt-2 mb-3">
          Track User Interactions
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          Automatically track user actions such as email opens, link clicks,
          credential submissions, and phishing reports in real time.
        </p>
      </div>

      {/* Step 5 */}
      <div className="group bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <span className="text-sm font-semibold text-primary">Step 5</span>
        <h3 className="text-xl font-semibold mt-2 mb-3">
          Analyze Behavior & Risk Trends
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          Use smart visualizations and behavioral analytics to identify high-risk
          users, trends, and areas requiring targeted awareness training.
        </p>
      </div>

      {/* Step 6 */}
      <div className="group bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <span className="text-sm font-semibold text-primary">Step 6</span>
        <h3 className="text-xl font-semibold mt-2 mb-3">
          Generate Compliance & Management Reports
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          Produce quick, audit-ready reports to demonstrate compliance,
          awareness maturity, and continuous improvement to stakeholders.
        </p>
      </div>

    </div>
  </div>
</section>


        {/* ================= FAQ ================= */}
        <section className="py-24 bg-muted/40 border-y border-border mb-24">
          <h2 className="text-center text-3xl md:text-4xl font-extrabold text-primary mb-16">
            Frequently Asked Questions
          </h2>

          <div className="divide-y divide-border max-w-4xl mx-auto">
            {[{
              q: 'What is PhishInstinct?',
              a: 'PhishInstinct is a phishing simulation and awareness platform that helps reduce human risk.'
            },{
              q: 'Does it support compliance?',
              a: 'Yes, it provides audit-ready reports for regulatory requirements.'
            },{
              q: 'Can campaigns be automated?',
              a: 'Absolutely. Campaigns can be scheduled and fully automated.'
            }].map((faq, i) => (
              <details key={i} className="group py-6">
                <summary className="flex justify-between cursor-pointer list-none">
                  <span className="font-semibold text-lg">{faq.q}</span>
                  <span className="ml-4">
                    <Plus className="group-open:hidden" />
                    <Minus className="hidden group-open:block" />
                  </span>
                </summary>
                <p className="mt-4 text-muted-foreground">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ================= CTA ================= */}
        <div className="text-center py-16">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Turn Employees into Your Strongest Defense
          </h2>
          <p className="text-muted-foreground mb-8">
            Reduce phishing risk with instinct-driven security awareness.
          </p>
          <Link href="/contact?subject=PhishInstinct%20Demo">
            <Button size="lg" className="bg-gradient-to-r from-violet-500 to-blue-600 rounded-full px-10">
              Request a Demo
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Feature = ({ icon, title, desc }) => (
  <div className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg transition">
    <div className="mb-4 text-primary">{icon}</div>
    <h3 className="font-semibold text-lg mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm">{desc}</p>
  </div>
);

const Challenge = ({ title, desc }) => (
  <div className="flex flex-col items-center space-y-4">
    <div className="w-16 h-16 border border-border rounded-lg flex items-center justify-center text-primary font-bold">!</div>
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-muted-foreground text-center max-w-sm">{desc}</p>
  </div>
);

const Coverage = ({ title, desc }) => (
  <div className="bg-card/80 p-8 rounded-2xl border border-border">
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-muted-foreground">{desc}</p>
  </div>
);

export default PhishInstinct;