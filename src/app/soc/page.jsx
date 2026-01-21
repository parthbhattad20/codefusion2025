'use client';

import Link from 'next/link'; 
import {
  ShieldCheck,
  Brain,
  Radar,
  Cloud,
  Bell,
  Server,
  Lock,
} from "lucide-react";

export default function SOCPage() {
  return (
    <main className="w-full bg-background text-foreground">

     {/* ================= HERO ================= */}
<section
  className="relative mt-10 py-32 px-6
             bg-[url('/assets/soc.jpg')]
             bg-cover bg-center bg-no-repeat"
>
  {/* Strong dark + blue overlay (important for this image) */}
  <div className="absolute inset-0 bg-gradient-to-r
                  from-black/90 via-black/70 to-indigo-900/40"></div>

  {/* Subtle grid / tech feel */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.25),_transparent_60%)]"></div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto text-center">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold
                   bg-clip-text text-transparent
                   bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-300 mt-38">
      AI Security Operations Center
    </h1>

    <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
      An AI-native SOC delivering continuous threat detection,
      intelligent response, and real-time cyber defense
      across enterprise environments.
    </p>
  </div>
</section>


     {/* ================= OVERVIEW ================= */}
<section className="py-24 px-6 bg-background dark:bg-dark-background">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

    {/* Left Text Block */}
    <div>
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-blue-900">
        Built for Modern Security Teams
      </h2>
      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
        As enterprises expand across cloud, hybrid, and on-prem environments,
        traditional SOCs struggle to scale. Vulnuris AI SOC centralizes telemetry,
        automates decision-making, and reduces analyst fatigue — giving your
        security team intelligence and speed.
      </p>
      
    </div>

    {/* Right Card Block */}
    <div className="bg-foreground/5 dark:bg-white/10 rounded-2xl p-10 border border-border shadow-lg hover:-translate-y-1 transition-transform duration-300">
      <ul className="space-y-5">
        {[
          { label: "Centralized Security Visibility" },
          { label: "Autonomous AI-driven Analysis" },
          { label: "Automated Containment Workflows" },
          { label: "Compliance-ready Reporting" },
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-1 text-violet-600">
              {/* Check icon */}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-muted-foreground font-medium">{item.label}</span>
          </li>
        ))}
      </ul>
    </div>

  </div>
</section>


   {/* ================= KEY PERFORMANCE METRICS ================= */}
<section className="py-28 px-6 border-t border-border bg-background">
  <div className="max-w-6xl mx-auto text-center">

    {/* Heading */}
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6
                   bg-clip-text bg-gradient-to-r from-violet-500 to-blue-900 text-transparent">
      AI SOC Performance Impact
    </h2>

    {/* Subheading */}
    <p className="text-muted-foreground max-w-3xl mx-auto mb-14 text-lg">
      Measurable security outcomes delivered through autonomous detection,
      intelligent correlation, and automated response — validated across
      enterprise environments.
    </p>

    {/* Metrics Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {[
        {
          value: "95%",
          label: "Reduction in False Positives",
          desc: "AI-driven correlation eliminates alert noise and analyst fatigue."
        },
        {
          value: "< 1 sec",
          label: "Mean Time to Detect (MTTD)",
          desc: "Real-time behavioral analytics identify threats instantly."
        },
        {
          value: "50%",
          label: "Lower SOC Operational Cost",
          desc: "Automation reduces reliance on large analyst teams."
        },
      ].map((item, i) => (
        <div
          key={i}
          className="relative p-6 rounded-2xl bg-foreground/5 dark:bg-white/10
                     border border-border shadow-lg backdrop-blur-md
                     transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
        >
          {/* Metric Value */}
          <p className="text-3xl md:text-2xl font-extrabold mb-3
                        bg-clip-text text-transparent
                        bg-gradient-to-r from-violet-400 to-blue-600">
            {item.value}
          </p>

          {/* Metric Label */}
          <p className="text-lg font-semibold mb-2">
            {item.label}
          </p>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed">
            {item.desc}
          </p>

        </div>
      ))}
    </div>
  </div>
</section>


{/* ================= AI SOC WORKFLOW ================= */}
<section className="py-28 px-6 bg-foreground/5 dark:bg-white/5 border-t border-border">
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-6
                   bg-clip-text bg-gradient-to-r from-violet-500 to-blue-900 text-transparent">
      How the AI SOC Works
    </h2>

    {/* Subheading */}
    <p className="text-muted-foreground max-w-4xl mx-auto text-center mb-16 text-lg">
      A continuous, AI-driven security lifecycle that detects threats,
      prioritizes risk, and responds in real time — with human oversight
      where it matters.
    </p>

    {/* Workflow Steps */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {[
        {
          step: "01",
          title: "Signal Ingestion",
          desc: "Telemetry collected from endpoints, network, cloud, identity, email, and applications.",
          icon: <Radar className="w-6 h-6 text-violet-600" />,
        },
        {
          step: "02",
          title: "AI Correlation & Analysis",
          desc: "Agentic AI correlates events, removes noise, and identifies real threats.",
          icon: <Brain className="w-6 h-6 text-blue-600" />,
        },
        {
          step: "03",
          title: "Risk Prioritization",
          desc: "Threats are scored based on impact, exploitability, and business context.",
          icon: <ShieldCheck className="w-6 h-6 text-green-600" />,
        },
        {
          step: "04",
          title: "Automated Response",
          desc: "Playbooks trigger containment actions while notifying SOC analysts.",
          icon: <Bell className="w-6 h-6 text-red-600" />,
        },
      ].map((item, i) => (
        <div
          key={i}
          className="relative p-6 rounded-2xl bg-background dark:bg-white/10
                     border border-border shadow-lg backdrop-blur-md
                     hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
        >
          

          {/* Icon */}
          <div className="mb-4">{item.icon}</div>

          {/* Title */}
          <h3 className="font-semibold text-lg mb-2">
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

    {/* ================= CAPABILITIES ================= */}
<section className="py-24 px-6 bg-background dark:bg-dark-background">
  <div className="max-w-6xl mx-auto">
    
    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-14
                   bg-clip-text bg-gradient-to-r from-violet-500 to-blue-900 text-transparent">
      Core SOC Capabilities
    </h2>

    {/* Capabilities Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        {
          iconColor: "from-violet-500 to-purple-600",
          icon: "Brain",
          title: "Agentic AI Intelligence",
          desc: "AI agents that reason, correlate signals, and act autonomously.",
        },
        {
          iconColor: "from-blue-500 to-cyan-600",
          icon: "Radar",
          title: "Behavior-Based Detection",
          desc: "Detect unknown threats using advanced behavioral analytics.",
        },
        {
          iconColor: "from-red-500 to-orange-600",
          icon: "Bell",
          title: "Automated Incident Response",
          desc: "Immediate response through predefined security playbooks.",
        },
        {
          iconColor: "from-cyan-500 to-blue-600",
          icon: "Cloud",
          title: "Cloud & Hybrid Security",
          desc: "Consistent protection across cloud and on-prem environments.",
        },
        {
          iconColor: "from-orange-500 to-yellow-600",
          icon: "Server",
          title: "Unified Telemetry",
          desc: "Single pane of glass for endpoints, networks, and identities.",
        },
        {
          iconColor: "from-green-500 to-teal-600",
          icon: "Lock",
          title: "Governance & Compliance",
          desc: "Built-in support for regulatory and compliance frameworks.",
        },
      ].map((item, i) => {
        // Dynamically map icons
        const IconComponent = {
          Brain: Brain,
          Radar: Radar,
          Bell: Bell,
          Cloud: Cloud,
          Server: Server,
          Lock: Lock,
        }[item.icon];

        return (
          <div
            key={i}
            className="relative p-6 rounded-2xl bg-foreground/5 dark:bg-white/10 border border-border shadow-lg backdrop-blur-md hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300"
          >
            {/* Icon + Title */}
            <div className="flex items-center gap-3 mb-4">
              <IconComponent className={`w-6 h-6 text-gradient bg-clip-text`} />
              <h3 className="font-semibold text-lg md:text-xl">{item.title}</h3>
            </div>

            {/* Description */}
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              {item.desc}
            </p>

          </div>
        );
      })}
    </div>
  </div>
</section>


      {/* ================= CTA ================= */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold bg-clip-text bg-gradient-to-r from-violet-500 to-blue-900 text-transparent mb-4">
            Strengthen Your SOC Operations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Move from alert-driven security to intelligent, automated defense
            powered by AI.
          </p>

          <Link href="/contact">
          <button size="lg" className="px-8 py-2 rounded-full bg-gradient-to-b from-violet-500 to-violet-600 text-white focus:ring-2 focus:ring-violet-400 hover:shadow-xl dark:hover:shadow-violet-900 transition duration-200 text-lg font-bold">
            Request a Demo
          </button>
          </Link>
        </div>
      </section>

    </main>
  );
}
