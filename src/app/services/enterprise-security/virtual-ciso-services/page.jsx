'use client';

import Link from 'next/link';
import { ShieldCheck, Briefcase, ClipboardCheck, AlertTriangle, Users, LineChart, Lock } from 'lucide-react';

export default function VCISOPage() {
  return (
    <main className="w-full bg-gray-50 text-gray-900">

     {/* ================= HERO ================= */}
<section
  className="relative h-screen bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/assets/img.jpg')" }}
>
  {/* Lighter overlay for clarity */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/40"></div>

  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-70">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
      Virtual CISO Services
    </h1>

    <p className="mt-6 text-sm md:text-xl text-gray-200 max-w-4xl text-left">
      Vulnuris Virtual CISO Program services assist executives and security teams in safeguarding information assets while supporting business operations. We provide certified virtual CISOs and dedicated expert support as part of your team, saving you time and money on hiring security talent.
    </p>

    <Link href="/contact">
      <button className=" px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
        SPEAK WITH AN EXPERT
      </button>
    </Link>
  </div>
</section>


     {/* ================= VCISO PROGRAM SERVICES ================= */}
<section className="py-24 px-6 bg-gray-50 dark:bg-background transition-colors">
  <div className="max-w-7xl mx-auto">

    {/* ===== Heading ===== */}
    <div className="text-center mb-16">
      <h1 className="text-3xl md:text-4xl font-bold text-primary">
        Virtual CISO (VCISO) Program Services
      </h1>

      <p className="mt-4 text-lg font-semibold text-sky-800 dark:text-sky-200">
        VCISO Advisory Services: CISO CERTIFIED experts
      </p>

      <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
        Vulnuris is an award-winning, independent security consulting firm providing organizations that
        require an experienced CISO, with a Virtual Chief Information Security Officer and a team
        to drive critical initiatives and oversee an entire security program as well as the technologies
        required to protect the organization and its customers from modern security threats while meeting
        regulatory compliance requirements.
      </p>
    </div>

    {/* ===== Content Grid ===== */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

      {/* Left Content */}
      <div className='ml-10'>
        <h2 className="text-2xl font-semibold text-primary mb-6">
          Why Vulnuris Virtual CISO Services
        </h2>

        <ul className="space-y-4 text-gray-800 dark:text-gray-200">
          <li className="font-semibold">
            • Accelerate security program maturity
          </li>

          <ul className="ml-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>○ Program development</li>
            <li>○ Policy and standards</li>
            <li>○ Compliance</li>
            <li>○ Governance</li>
            <li>○ Security</li>
          </ul>

          <li>• Access to a team of experts</li>
          <li>• Improve compliance and avoid penalties</li>
          <li>• Reduce security risk and business continuity</li>
          <li>• Decrease the overhead cost of hiring a full-time CISO</li>
        </ul>
      </div>

      {/* Right Image */}
      <div className="flex justify-center md:justify-end mr-20">
        <img
          src="/assets/services/vCiso.webp"
          alt="VCISO Security"
          className="w-full max-w-md rounded-xl shadow-lg 
                     dark:shadow-blue-900/30 transition-all"
        />
      </div>

    </div>
  </div>
</section>



      {/* ================= VCISO SERVICES GRID ================= */}
<section className="py-15 px-6 bg-gray-50 dark:bg-background transition-colors">
  <div className="max-w-7xl mx-auto text-center">


    {/* Heading */}
    <h2 className="text-4xl font-semibold text-primary mb-14">
      Virtual CISO (VCISO) Program: Protect Your Organization
    </h2>

    {/* Top 6 Services */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

  {[
    {
      title: "Virtual CISO/vCISO",
      desc: "VCISO service: you retain a board-level cyber security consultant, providing strategic leadership, security strategy & corporate security consulting for your business. The VCISO team will provide monthly report.",
    },
    {
      title: "Governance, Risk & Compliance",
      desc: "VCISO will align your GRC activities to business performance drivers, using frameworks such as NIST, PCI/DSS, ISO, GDPR, NYDFS, and others with our IT security consulting program.",
    },
    {
      title: "IT Security Operations",
      desc: "The VCISO will provide a strategy for your SOC, CyberSecOp managed SOC is a 24x7 Security Operations Center (SOC) - managed security identifies cyber risks before they cost damage to your organization.",
    },
    {
      title: "Security Awareness Education",
      desc: "Reveal your organization's employees' strengths and weaknesses, and empower them against cyber criminals.",
    },
    {
      title: "Penetration Testing & Phishing",
      desc: "Effective security starts with a clear understanding of your vulnerabilities.",
    },
    {
      title: "Third Party Risk Management",
      desc: "Comprehensive vendor/third-party security assessment services. Your VCISO team manages this.",
    },
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

      {/* ================= VCISO SERVICES DETAILS ================= */}
<section className="py-24 px-20 bg-gray-50 dark:bg-background transition-colors">
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <h2 className="text-center text-2xl md:text-3xl font-bold text-primary mb-16">
      What are our Virtual CISO (VCISO) Services?
    </h2>

    {/* Content Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">

      {/* Left Column */}
      <ul className="space-y-6 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
        <li>
          • <span className="font-semibold">A Virtual CISO</span> is designed to provide expert security
          guidance through:
        </li>

        <li>
          • Understanding the organization’s strategy and business environment
        </li>

        <li>
          • Aligning cybersecurity risk management with enterprise risk management
        </li>

        <li>
          • Providing threat analysis and strategy updates in real-time
        </li>

        <li>
          • Anticipating future security and compliance challenges
        </li>

        <li>
          • Overseeing mid-level and analyst/engineering teams
        </li>

        <li>
          • Driving the implementation of all approved administrative, technical and
          physical controls to achieve reasonable security
        </li>
      </ul>

      {/* Right Column */}
      <ul className="space-y-6 ml-20 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
        <li className="font-semibold">
          • Ongoing Governance Risk & Compliance Management
        </li>

        <ul className="ml-10 space-y-4 text-gray-700 dark:text-muted-foreground">
          <li>○ Ongoing Risk Management</li>
          <li>○ Ongoing Compliance Management</li>
          <li>○ Ongoing Vendor Management Program</li>
          <li>○ Ongoing Managing and directing IT and the security teams</li>
          <li>○ Ongoing Engaging with executive management</li>
          <li>○ Ongoing Running risk assessments on operational security</li>
          <li>○ Ongoing threat intelligence and managing enterprise security</li>
        </ul>

        <li className="font-semibold ml-5">
          • Crisis Management
        </li>
      </ul>

    </div>
  </div>
</section>


      {/* ================= CTA ================= */}
<section className="py-24 px-6 text-center tracking-tight 
  bg-gray-50 dark:bg-background transition-colors">

  <h2 className="text-3xl md:text-4xl font-bold mb-4
    text-primary ">
    Strengthen Your Security Leadership
  </h2>

  <p className="mb-8 max-w-2xl mx-auto text-lg
    text-gray-700 dark:text-muted-foreground">
    Get expert cybersecurity guidance tailored to your organization’s
    risk profile and compliance needs.
  </p>

  <Link href="/contact">
    <button className="
      px-10 py-3 rounded-full text-lg font-semibold
      bg-gradient-to-r from-violet-500 to-blue-600
      text-white dark:text-white
      shadow-md hover:shadow-lg
      hover:opacity-90 transition-all duration-300
    ">
      Talk to a vCISO Expert
    </button>
  </Link>

</section>


    </main>
  );
}
