'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Plus, Minus } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScanSearch, Brain, Layers, LinkIcon, ArrowBigLeft } from 'lucide-react';
import Image from 'next/image';


const Vaultix = () => {
   
  return (
    <div className="min-h-screen bg-background text-foreground py-16 mt-10 lg:mt-20">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <Link href="/products" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200">
            <ArrowBigLeft className="mr-2" />
            Back to Products
          </Link>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-20">


  <div className="space-y-6">
  <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-primary tracking-tight">
   Vaultix - State of Art Next-Gen ITSM Platform
  </h1>

 
    <div className="text-lg md:text-2xl font-medium text-foreground">
  <ul className="list-disc pl-5 space-y-2">

      <li>Unified asset management,</li>
      <li>SBOM tracking, and</li>
      <li>intelligent ticket resolution for modern enterprises.</li>
    </ul>
  </div>

  {/* Description */}
  <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
    Vaultix helps organizations streamline IT service management with powerful
    asset tracking, ticketing, and compliance-driven workflows—giving teams
    complete visibility and operational efficiency.
  </p>

    <Link href="/contact?subject=Vumas%20Demo" passHref>
            <Button size="lg" className="bg-gradient-to-r from-violet-500 to-blue-600 text-foreground font-semibold hover:opacity-90 transition duration-300 text-lg shadow-md rounded-full px-10 cursor-pointer">
              Get a Demo
            </Button>
          </Link>

</div>

          {/* <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg aspect-video relative"> */}
          <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg relative 
                w-full h-[350px] md:h-[350px] lg:h-[400px] px-6">
            <Image 
                src="/assets/products/Vumas.png"
                alt="Vaultix Dashboard"
                fill
                className="object-contain md:object-cover"
            />
            </div>
            
        </div>



           {/* ================= WHY VAULTIX ================= */}
<section className="relative py-24  bg-muted/40 overflow-hidden text-foreground  border-y border-border"> 
{/* bg-background */}
  {/* Background */}
  {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900" />
  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 via-black to-purple-900/20" /> */}

  <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
  {/* <div className="bg-card rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-700"> */}

    {/* LEFT CONTENT */}
    <div>
      <h2 className="text-3xl md:text-4xl text-primary font-extrabold leading-tight">
        Why Vaultix is Critical <br /> for Modern Enterprises?
      </h2>

      <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
        As enterprises adopt cloud, DevOps, and SaaS at scale, IT visibility and
        control become increasingly complex. Vaultix provides a unified platform
        to manage assets, risks, and service workflows with automation and
        compliance at its core.
      </p>
    </div>

    {/* RIGHT ACCORDION */}
    <div className="divide-y divide-border
">
      {[
        {
          title: 'Unrestricted Access & Asset Sprawl',
          desc:
            'Disconnected tools and unmanaged assets lead to excessive access and hidden risks. Vaultix centralizes asset ownership, permissions, and dependencies across environments.',
        },
        {
          title: 'Lack of End-to-End Visibility',
          desc:
            'Organizations struggle to track assets, software dependencies, and tickets in one place. Vaultix delivers real-time visibility across IT, cloud, and software supply chains.',
        },
        {
          title: 'Manual & Reactive Operations',
          desc:
            'Manual audits, ticket creation, and compliance checks slow teams down. Vaultix automates discovery, SBOM generation, ticketing, and remediation workflows.',
        },
      ].map((item, index) => (
        <details
          key={index}
          className="group py-6 cursor-pointer"
          open={index === 2}
        >
          <summary className="flex items-center justify-between list-none">
            <span className="text-xl font-semibold">
              {item.title}
            </span>
            <span className="text-2xl transition-transform duration-300 group-open:rotate-180">
              +
            </span>
          </summary>

          <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl">
            {item.desc}
          </p>
        </details>
      ))}
    </div>
  </div>
</section>



               {/* Key Features Section */}
<section className="py-16 px-6 md:px-12 mb-24  text-foreground">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-primary tracking-tight mb-12">
    Key Features of Vaultix 
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">

    {/* Feature Card */}
    <div className="bg-card rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-700">
      <div className="flex items-center mb-4 mt-4">
        <Layers className="w-6 h-6 text-muted-foreground mr-3" />
        <h3 className="text-lg font-semibold">Curated Threat Feeds</h3>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed ">
        Access hand-picked threat data tailored to your industry, updated in real time from trusted sources.
      </p>
    </div>

    <div className="bg-card rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-700">
      <div className="flex items-center mb-4 mt-4">
        <Brain className="w-6 h-6 text-muted-foreground mr-3" />
        <h3 className="text-lg font-semibold">Dark Web Monitoring</h3>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">
        Monitor underground forums, marketplaces, and leak sites for mentions of your brand, employees, and assets.
      </p>
    </div>

    <div className="bg-card rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-700">
      <div className="flex items-center mb-4 mt-4">
        <ScanSearch className="w-6 h-6 text-muted-foreground mr-3" />
        <h3 className="text-lg font-semibold">IOC Tracking & Alerts</h3>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">
        Get real-time alerts on indicators of compromise and track malicious infrastructure targeting your environment.
      </p>
    </div>

    <div className="bg-card rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-700">
      <div className="flex items-center mb-4 mt-4">
        <LinkIcon className="w-6 h-6 text-muted-foreground mr-3" />
        <h3 className="text-lg font-semibold">Executive Threat Briefings</h3>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">
        Weekly reports summarizing threats relevant to your business with action steps for leadership.
      </p>
    </div>

  </div>
</section>


            {/* ================= VAULTIX CHALLENGES ================= */}
<section className="relative py-24 mb-20   bg-muted/40
 overflow-hidden text-foreground border-y border-border">
  {/* Background */}
  {/* <div className="absolute inset-0 bg-black" />
  <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900 opacity-90" /> */}

  <div className="relative max-w-7xl mx-auto px-6 text-center">

    {/* Heading */}
    <h2 className="text-2xl md:text-4xl font-extrabold mb-4 text-primary tracking-tight">
      Common ITSM & Asset Management Challenges
    </h2>

    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-20">
      Addressing core IT visibility, workflow, and compliance challenges is
      critical to maintaining operational efficiency and reducing enterprise
      risk.
    </p>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

      {/* Card 1 */}
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 flex items-center justify-center border border-white/20 rounded-lg">
          <span className="text-red-500 text-3xl font-bold">!</span>
        </div>
        <h3 className="text-2xl font-semibold">Tool Sprawl & Alert Noise</h3>
        <p className="text-muted-foreground leading-relaxed">
          Multiple disconnected tools generate excessive alerts without
          context, causing teams to miss critical asset and security issues.
        </p>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 flex items-center justify-center border border-white/20 rounded-lg">
          <span className="text-blue-400 text-3xl font-bold">⏱</span>
        </div>
        <h3 className="text-2xl font-semibold">Delayed Incident Resolution</h3>
        <p className="text-muted-foreground leading-relaxed">
          Manual ticket creation and unclear ownership slow down response
          times, impacting SLAs and business continuity.
        </p>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 flex items-center justify-center border border-white/20 rounded-lg">
          <span className="text-purple-400 text-3xl font-bold">⚠</span>
        </div>
        <h3 className="text-2xl font-semibold">Compliance & Audit Gaps</h3>
        <p className="text-muted-foreground leading-relaxed">
          Lack of real-time asset inventory and SBOM visibility leads to audit
          failures, licensing risks, and regulatory non-compliance.
        </p>
      </div>

    </div>
  </div>
</section>




          {/* ================= VAULTIX COVERAGE ================= */}
<section className="relative py-20 overflow-hidden text-foreground">
  {/* Background Image */}
  <div className="absolute inset-0">
    <Image
      src="/assets/products/background.jpg" // Use any professional IT/cybersecurity image
      alt="Enterprise IT Assets Background"
      fill
      className="object-cover object-center opacity-10"
      priority
    />
  </div>

  <div className="relative max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-20">
      <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
        Comprehensive Coverage of Enterprise IT Assets
      </h2>
      <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
        With Vaultix, organizations gain unified visibility and control across
        critical IT, cloud, and security ecosystems.
      </p>
    </div>

    {/* Layout */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

      {/* LEFT – 2x2 Cards */}
      <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-border">
          <h3 className="text-2xl font-bold mb-4">IT Assets</h3>
          <p className="text-muted-foreground leading-relaxed">
            Gain full visibility into hardware, network devices, and endpoints
            across on-prem and hybrid environments.
          </p>
        </div>

        <div className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-border">
          <h3 className="text-2xl font-bold mb-4">Software & SBOM</h3>
          <p className="text-muted-foreground leading-relaxed">
            Track installed software, dependencies, and SBOM data to identify
            vulnerabilities, license risks, and supply-chain exposure.
          </p>
        </div>

        <div className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-border">
          <h3 className="text-2xl font-bold mb-4">Cloud & Virtual Assets</h3>
          <p className="text-muted-foreground leading-relaxed">
            Automatically discover and monitor VMs, containers, and cloud
            resources across AWS, Azure, and GCP.
          </p>
        </div>

        <div className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-border">
          <h3 className="text-2xl font-bold mb-4">ITSM Workflows</h3>
          <p className="text-muted-foreground leading-relaxed">
            Integrate asset intelligence with intelligent ticketing, SLA
            tracking, and automated remediation workflows.
          </p>
        </div>
      </div>

      {/* RIGHT – Tall Card */}
      <div className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-border flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold mb-6">
            Other Supported Integrations
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Vaultix integrates seamlessly with leading security, cloud, and IT
            operations tools—ensuring no asset, alert, or workflow operates in
            isolation.
          </p>
        </div>

        {/* Mock Integration Preview */}
        <div className="bg-black/5 rounded-xl p-6 border border-border">
          <p className="text-sm text-muted-foreground mb-2">Integrated Platforms</p>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li>• SIEM & SOAR platforms</li>
            <li>• EDR / XDR solutions</li>
            <li>• Cloud providers</li>
            <li>• Ticketing & workflow tools</li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</section>



{/* Intelligent Ticket Management for Faster Response */}
<section className="py-24 bg-muted/40 text-foreground border-y border-border">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-6">
      Intelligent Ticket Management for Faster Response
    </h2>

    <p className="text-center text-lg text-muted-foreground mb-16 max-w-3xl mx-auto">
      Integrated automation, SLA tracking, and audit-ready workflows
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[
        { number: 1, title: 'Scan', desc: 'Continuous vulnerability and asset scanning to detect issues' },
        { number: 2, title: 'Auto-ticket', desc: 'Automatically create tickets from scan findings with context and severity' },
        { number: 3, title: 'Prioritize', desc: 'Risk-based prioritization using business impact and exposure' },
        { number: 4, title: 'Assign', desc: 'Ownership assignment to teams or individuals aligned with ITSM' },
        { number: 5, title: 'SLA Timers', desc: 'Track SLAs per ticket aligned to business risk and compliance' },
        { number: 6, title: 'Escalate', desc: 'Automated escalation on SLA breaches with audit trail preserved' },
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


                 {/* why vaultix stand out */}
        
        <section className=" rounded-lg py-16 px-6 md:px-12 mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary tracking-tight mb-12">
            Why Vaultix Stands Out 
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-600 p-6 mb-4">
                <Layers className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Focused Intelligence</h3>
              <p className="text-muted-foreground">Feeds customized for your sector and assets ensure relevance and actionability.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-600 p-6 mb-4">
                <Brain className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Deep Visibility</h3>
              <p className="text-muted-foreground">Uncover hidden threats from the dark web and obscure sources not seen by typical scanners.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center rounded-full bg-green-100 text-green-600 p-6 mb-4">
                <ScanSearch className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Proactive Response</h3>
              <p className="text-muted-foreground">Receive timely alerts and guidance, helping you stay steps ahead of attackers.</p>
            </div>
          </div>
        </section>


       {/* ================= VAULTIX FAQ ================= */}
<section className="relative py-24  bg-muted/40 text-foreground overflow-hidden border-y border-border">
  {/* Background */}
  {/* <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black" /> */}

  <div className="relative max-w-5xl mx-auto px-6">
    {/* Heading */}
    <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-16 text-primary tracking-tight">
      Frequently Asked Questions
    </h2>

    <div className="divide-y divide-white/19">
      
      {/* FAQ 1 */}
      <details className="group py-6" open>
        <summary className="flex items-center justify-between cursor-pointer list-none">
          <span className="text-lg md:text-xl font-semibold">
            What is Vaultix and why is it important?
          </span>
          <span className="ml-4">
            <Plus className="group-open:hidden w-6 h-6" />
            <Minus className="hidden group-open:block w-6 h-6" />
          </span>
        </summary>
        <p className="mt-4 text-muted-foreground leading-relaxed text-base md:text-lg">
          Vaultix is a unified ITSM and asset visibility platform that helps
          organizations discover, manage, and secure IT, cloud, and software
          assets. It is critical for modern enterprises because it eliminates
          blind spots, reduces operational risk, and enables automated,
          compliance-ready workflows.
        </p>
      </details>

      {/* FAQ 2 */}
      <details className="group py-6">
        <summary className="flex items-center justify-between cursor-pointer list-none">
          <span className="text-lg md:text-xl font-semibold">
            How does Vaultix provide unified asset visibility?
          </span>
          <span className="ml-4">
            <Plus className="group-open:hidden w-6 h-6" />
            <Minus className="hidden group-open:block w-6 h-6" />
          </span>
        </summary>
        <p className="mt-4 text-muted-foreground leading-relaxed text-base md:text-lg">
          Vaultix continuously discovers hardware, installed software, SBOMs,
          cloud resources, virtual machines, containers, and unmanaged assets.
          The platform maintains a real-time inventory that automatically
          updates as environments change.
        </p>
      </details>

      {/* FAQ 3 */}
      <details className="group py-6">
        <summary className="flex items-center justify-between cursor-pointer list-none">
          <span className="text-lg md:text-xl font-semibold">
            How does Vaultix help with vulnerability and risk management?
          </span>
          <span className="ml-4">
            <Plus className="group-open:hidden w-6 h-6" />
            <Minus className="hidden group-open:block w-6 h-6" />
          </span>
        </summary>
        <p className="mt-4 text-muted-foreground leading-relaxed text-base md:text-lg">
          Vaultix correlates asset intelligence, SBOM data, and exposure context
          to prioritize vulnerabilities based on business impact. This allows
          teams to remediate the most critical risks faster and more effectively.
        </p>
      </details>

      {/* FAQ 4 */}
      <details className="group py-6">
        <summary className="flex items-center justify-between cursor-pointer list-none">
          <span className="text-lg md:text-xl font-semibold">
            How does Vaultix support compliance and audits?
          </span>
          <span className="ml-4">
            <Plus className="group-open:hidden w-6 h-6" />
            <Minus className="hidden group-open:block w-6 h-6" />
          </span>
        </summary>
        <p className="mt-4 text-muted-foreground leading-relaxed text-base md:text-lg">
          Vaultix provides continuous monitoring, audit-ready reports, historical
          asset tracking, and policy enforcement. This simplifies regulatory
          compliance, internal audits, and security assessments.
        </p>
      </details>

      {/* FAQ 5 */}
      <details className="group py-6">
        <summary className="flex items-center justify-between cursor-pointer list-none">
          <span className="text-lg md:text-xl font-semibold">
            Can Vaultix integrate with existing IT and security tools?
          </span>
          <span className="ml-4">
            <Plus className="group-open:hidden w-6 h-6" />
            <Minus className="hidden group-open:block w-6 h-6" />
          </span>
        </summary>
        <p className="mt-4 text-muted-foreground leading-relaxed text-base md:text-lg">
          Yes. Vaultix integrates with ITSM platforms, SIEM/SOAR tools, cloud
          providers, identity systems, and ticketing solutions to enable seamless
          automation and cross-team collaboration.
        </p>
      </details>

    </div>
  </div>
</section>


        {/* Call to Action */}
        <div className="text-center py-12">
          <h2 className="text-3xl font-bold text-primary tracking-tight mb-6">
            Empower Your Threat Intelligence Today
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Learn how Vaultix can elevate your security strategy with deeper, contextual threat intelligence.
          </p>
          <Link href="/contact?subject=Vumas%20Demo" passHref>
            <Button size="lg" className="bg-gradient-to-r from-violet-500 to-blue-600 text-foreground font-semibold hover:opacity-90 transition duration-300 text-lg shadow-md rounded-full px-8">
              Request a Vaultix Demo
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Vaultix;
