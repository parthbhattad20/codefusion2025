"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

/* ===================== DATA ===================== */

const painPoints = [
  "Managing critical industrial infrastructure?",
  "Worried about OT cyber threats and downtime?",
  "Need to ensure safety and compliance?",
];

const outcomes = [
  {
    title: "Infrastructure Protection",
    description:
      "Safeguard critical OT systems controlling oil & gas, manufacturing, energy, transportation, and maritime operations from cyber threats.",
  },
  {
    title: "Safety & Compliance",
    description:
      "Ensure regulatory compliance and prevent safety hazards through comprehensive OT security assessments and risk mitigation strategies.",
  },
  {
    title: "Operational Continuity",
    description:
      "Minimize downtime and operational disruption with proactive security measures designed for industrial environments.",
  },
  {
    title: "Risk Optimization",
    description:
      "Focus security investments on critical assets while maintaining production continuity and equipment integrity.",
  },
];

const complianceBadges = [
  "IEC 62443",
  "NIST CSF",
  "ISA/IEC Standards",
  "NERC CIP",
  "OT Security",
  "SCADA Protection",
];

const methodology = [
  {
    title: "Asset Discovery & Classification",
    description:
      "Comprehensive identification of controllers, sensors, HMIs, field devices, and industrial communication networks across facilities.",
  },
  {
    title: "Network Zoning & Segmentation",
    description:
      "Evaluation and design of network segmentation between IT and OT systems with firewall placement and access controls.",
  },
  {
    title: "Industrial Protocol Analysis",
    description:
      "Inspection of OT communication patterns to detect unsafe commands, abnormal behavior, and protocol vulnerabilities.",
  },
  {
    title: "Secure Architecture Review",
    description:
      "Assessment of industrial network design, remote access controls, and vendor connectivity security.",
  },
  {
    title: "Controlled Vulnerability Testing",
    description:
      "Carefully scoped security testing to identify weaknesses without impacting live operations or safety systems.",
  },
  {
    title: "Incident Response Planning",
    description:
      "Development of response procedures aligned with operational requirements and safety considerations.",
  },
];

const processSteps = [
  { title: "Assess", description: "OT environment analysis." },
  { title: "Secure", description: "Implement controls." },
  { title: "Monitor", description: "Real-time detection." },
  { title: "Respond", description: "Rapid remediation." },
  { title: "Optimize", description: "Continuous improvement." },
];

const otCapabilities = [
  {
    title: "OT Systems",
    items: ["SCADA", "DCS", "PLC", "HMI"],
  },
  {
    title: "Industries",
    items: ["Oil & Gas", "Energy", "Manufacturing", "Maritime"],
  },
  {
    title: "Protocols",
    items: ["Modbus", "DNP3", "OPC", "Profinet"],
  },
  {
    title: "Standards",
    items: ["IEC 62443", "NIST", "NERC CIP", "ISA"],
  },
];

const otSecurityServices = [
  {
    title: "OT Asset Discovery",
    desc: "Identification and classification of OT devices, control systems, and communication paths across industrial facilities.",
  },
  {
    title: "Network Segmentation",
    desc: "Design and implementation of security zones, conduits, and access control between IT and OT networks.",
  },
  {
    title: "Protocol Security Testing",
    desc: "Security assessment of industrial protocols including Modbus, DNP3, OPC, Profinet, and proprietary systems.",
  },
  {
    title: "SCADA Security",
    desc: "Comprehensive security review of SCADA systems, HMIs, historians, and engineering workstations.",
  },
  {
    title: "ICS Penetration Testing",
    desc: "Controlled security testing of industrial control systems with strict safety safeguards and operational considerations.",
  },
  {
    title: "Remote Access Security",
    desc: "Assessment and hardening of remote access solutions for operators, vendors, and third-party maintenance.",
  },
  {
    title: "Safety System Protection",
    desc: "Security evaluation of Safety Instrumented Systems (SIS), Emergency Shutdown (ESD), and safety PLCs.",
  },
  {
    title: "OT Monitoring & Detection",
    desc: "Deployment of continuous monitoring solutions for industrial networks with anomaly detection and threat intelligence.",
  },
  {
    title: "IEC 62443 Compliance",
    desc: "Gap assessment, control implementation, and compliance support for IEC 62443 industrial cybersecurity standards.",
  },
];

const coreResponsibilities = [
  {
    category: "Asset Protection",
    items: [
      "Industrial asset inventory and classification",
      "Controller and field device security hardening",
      "Configuration management and change tracking",
      "Secure firmware and software updates",
    ],
  },
  {
    category: "Network Security",
    items: [
      "IT/OT network segmentation and zoning",
      "Industrial firewall configuration",
      "Protocol filtering and deep packet inspection",
      "Secure remote access architecture",
    ],
  },
  {
    category: "Monitoring & Detection",
    items: [
      "OT network traffic monitoring",
      "Behavioral anomaly detection",
      "Industrial protocol analysis",
      "Security event correlation and alerting",
    ],
  },
  {
    category: "Incident Response",
    items: [
      "OT-specific incident response procedures",
      "Safety-first remediation strategies",
      "Production continuity planning",
      "Vendor coordination and support",
    ],
  },
];

const deliverables = [
  "Comprehensive OT asset inventory",
  "Network architecture security assessment",
  "Industrial protocol vulnerability analysis",
  "Network segmentation recommendations",
  "Remote access security evaluation",
  "SCADA/ICS security review",
  "Safety system protection analysis",
  "Security monitoring implementation plan",
  "Incident response playbooks",
  "IEC 62443 compliance gap assessment",
  "Risk mitigation roadmap",
  "Executive security briefing",
];

const useCases = [
  {
    title: "Oil & Gas",
    description:
      "Protection for upstream, midstream, and downstream operations including refineries, pipelines, and offshore platforms.",
  },
  {
    title: "Power & Energy",
    description:
      "Security for generation, transmission, and distribution systems including substations, control centers, and smart grid infrastructure.",
  },
  {
    title: "Manufacturing",
    description:
      "Industrial security for production lines, robotics, quality control systems, and manufacturing execution systems (MES).",
  },
  {
    title: "Water & Wastewater",
    description:
      "Protection for treatment plants, distribution networks, SCADA systems, and environmental monitoring infrastructure.",
  },
  {
    title: "Transportation",
    description:
      "Security for rail systems, airports, ports, traffic management, and critical transportation infrastructure.",
  },
  {
    title: "Maritime & Shipping",
    description:
      "Protection for vessel control systems, port operations, cargo management, and maritime communication networks.",
  },
];

const engagementTiers = [
  {
    title: "Essential OT Assessment",
    description:
      "Focused security assessment of critical OT systems with network review, vulnerability identification, and basic recommendations.",
    bullets: ["Asset discovery", "Network review", "Vulnerability scan", "Security report"],
  },
  {
    title: "Advanced OT Security",
    description:
      "Comprehensive OT security program with penetration testing, segmentation design, monitoring deployment, and compliance support.",
    bullets: ["Full assessment", "Penetration testing", "Segmentation", "Monitoring"],
  },
  {
    title: "Enterprise OT Program",
    description:
      "Ongoing OT security program with continuous monitoring, incident response, compliance management, and managed security services.",
    bullets: ["Security program", "Managed services", "Compliance", "24/7 monitoring"],
  },
];

const faqs = [
  {
    question: "What is OT Security?",
    answer:
      "OT (Operational Technology) Security focuses on protecting industrial control systems, SCADA networks, and critical infrastructure from cyber threats. OT systems control physical processes in industries like manufacturing, energy, oil & gas, and water treatment. Unlike IT security, OT security prioritizes safety, uptime, and operational continuity alongside confidentiality and integrity. Our approach includes asset discovery, network segmentation, protocol security, controlled vulnerability testing, and continuous monitoring - all designed to protect operations without disrupting production or compromising safety.",
  },
  {
    question: "Why is OT security different from IT security?",
    answer:
      "OT environments have unique requirements: systems often run 24/7 for years without patching, downtime can cause safety hazards or massive financial loss, devices use specialized industrial protocols, and physical safety is the top priority. OT security must account for legacy systems that can't be easily updated, air-gapped networks that still need protection, and the reality that a security incident could impact physical processes. Our testing methodology is specifically designed for OT environments - we never disrupt operations, always coordinate with operations teams, and implement controls that enhance security without impacting production.",
  },
  {
    question: "What OT systems and protocols do you support?",
    answer:
      "We support all major OT systems including SCADA, DCS, PLC, HMI, historians, and engineering workstations. Our protocol expertise covers Modbus TCP/RTU, DNP3, OPC UA/DA, Profinet, EtherNet/IP, BACnet, IEC 60870-5-104, IEC 61850, and many proprietary industrial protocols. We work with systems from Siemens, Rockwell/Allen-Bradley, Schneider Electric, ABB, Honeywell, Emerson, GE, and other major vendors. Our team has experience across diverse industries including oil & gas, power generation, manufacturing, water treatment, and transportation.",
  },
  {
    question: "Can you help us achieve IEC 62443 compliance?",
    answer:
      "Yes, we provide comprehensive IEC 62443 compliance support including gap assessments, security level (SL) determination, zone and conduit design, technical control implementation, and audit preparation. We help implement requirements across all four pillars: general (62443-1), policies and procedures (62443-2), system requirements (62443-3), and component requirements (62443-4). Our deliverables include detailed gap analysis, control implementation roadmap, policy templates, and ongoing compliance monitoring. Many of our clients have achieved IEC 62443 certification with our guidance.",
  },
  {
    question: "How do you test OT systems without causing downtime?",
    answer:
      "Our OT testing methodology prioritizes safety and operational continuity. We start with passive monitoring and asset discovery that doesn't interact with systems. We coordinate all activities with operations teams and conduct testing during planned maintenance windows when possible. For active testing, we use controlled, non-disruptive techniques specifically designed for OT environments. We maintain constant communication with plant personnel, have immediate rollback procedures, and never test safety systems or critical processes without extensive planning and approval. All testing plans are reviewed and approved by your operations team before execution.",
  },
  {
    question: "What is the typical timeline for an OT security assessment?",
    answer:
      "Timeline varies based on environment complexity and scope. A focused assessment of a single facility typically takes 4-6 weeks including planning, on-site work, and reporting. Comprehensive multi-site assessments range from 8-16 weeks. The process includes initial scoping and planning (1 week), passive monitoring and asset discovery (1-2 weeks), active security testing during maintenance windows (1-2 weeks), analysis and validation (1-2 weeks), and final reporting with remediation roadmap (1 week). We work closely with your operations schedule to minimize any impact on production.",
  },
];

/* ===================== ICONS ===================== */

const IconShield = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 3l7 3v5c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-3z" />
    <path d="M9.5 12l2 2 3.5-3.5" />
  </svg>
);

const IconClipboard = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="8" y="2" width="8" height="4" rx="1" />
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const IconAward = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

const IconCheckCircle = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const IconCpu = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <path d="M9 2v2M15 2v2M9 20v2M15 20v2M20 9h2M20 15h2M2 9h2M2 15h2" />
  </svg>
);

const IconFactory = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M2 20h20M3 10l6-6 4 4 4-4 4 4v10H3V10z" />
    <path d="M9 14h2M13 14h2" />
  </svg>
);

/* ===================== UI PRIMITIVES ===================== */

const Section = ({ className = "", children, id }) => (
  <section id={id} className={`relative py-16 ${className}`}>
    {children}
  </section>
);

const Container = ({ className = "", children }) => (
  <div className={`mx-auto w-full max-w-6xl px-6 ${className}`}>{children}</div>
);

const SectionHeader = ({ eyebrow, title, subtitle, align = "center" }) => (
  <div
    className={
      align === "left" ? "text-left" : align === "right" ? "text-right" : "text-center"
    }
  >
    {eyebrow ? (
      <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-400">
        {eyebrow}
      </div>
    ) : null}
    <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white">
      {title}
    </h2>
    {subtitle ? (
      <p className="mt-3 text-base md:text-lg text-slate-600 dark:text-slate-300">
        {subtitle}
      </p>
    ) : null}
  </div>
);

const Card = ({ className = "", children }) => (
  <div
    className={`rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur-md transition dark:border-slate-800/70 dark:bg-slate-900/70 ${className}`}
  >
    {children}
  </div>
);

const Badge = ({ children }) => (
  <span className="rounded-full border border-cyan-200/70 bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-700 dark:border-cyan-700/50 dark:bg-cyan-900/30 dark:text-cyan-300">
    {children}
  </span>
);

/* ===================== PAGE COMPONENT ===================== */

export default function OTSecurityPage() {
  const reduceMotion = useReducedMotion();
  const [showMobileCta, setShowMobileCta] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setShowMobileCta(window.scrollY > 520);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.6, ease: "easeOut" },
    },
  };

  const stagger = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: reduceMotion ? 0 : 0.12 },
    },
  };

  return (
    <motion.main
      initial="hidden"
      animate="show"
      variants={stagger}
      className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white"
    >
      {/* Hero Section */}
      <Section className="pt-24 sm:pt-28 md:pt-0 pb-14 mt-20">
        <div className="absolute inset-0 overflow-hidden">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src="/assets/videos/main.mp4"
            autoPlay
            muted
            loop
            playsInline
            poster="/assets/img.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/85 via-slate-900/70 to-slate-950" />
          <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#06b6d422_1px,transparent_1px),linear-gradient(to_bottom,#06b6d422_1px,transparent_1px)] bg-[size:90px_90px]" />
          <div className="absolute -left-24 top-16 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        </div>

        <Container className="relative z-10 flex min-h-[86vh] flex-col justify-center">
          <motion.div variants={fadeUp} className="max-w-3xl">
            <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
              Operational Technology Security
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              OT Security & Risk Assessment
            </h1>
            <p className="mt-4 text-lg text-white/85 md:text-xl">
              Protect your critical industrial infrastructure from cyber threats with comprehensive OT security assessments.
            </p>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Safeguarding SCADA, ICS, and industrial control systems across oil & gas, manufacturing, energy, and critical infrastructure.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/contact?subject=OT%20Security%20Assessment"
                aria-label="Request Security Check"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <motion.span
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  whileTap={reduceMotion ? undefined : { y: 0 }}
                  className="inline-flex items-center"
                >
                  Request Security Check
                </motion.span>
              </Link>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12 max-w-4xl">
            <div className="grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80 backdrop-blur-sm md:grid-cols-3">
              {painPoints.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Outcomes Section */}
      <Section className="bg-white dark:bg-slate-950">
        <Container>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
          >
            <SectionHeader
              eyebrow="Outcomes"
              title="Comprehensive OT security for critical infrastructure."
              subtitle="Multi-layer protection prioritizing safety, uptime, and system stability while reducing cyber risk across industrial processes."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {outcomes.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  whileHover={reduceMotion ? undefined : { y: -4 }}
                >
                  <Card>
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-cyan-500/10 p-3 text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-400">
                        <IconAward className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Compliance Badges Section */}
      <Section className="bg-slate-50 dark:bg-slate-950/70">
        <Container>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-120px" }}>
            <SectionHeader
              eyebrow="Standards & Frameworks"
              title="Aligned with OT security standards."
              subtitle="Expert OT security following IEC 62443, NIST CSF, NERC CIP, and industry-specific industrial cybersecurity frameworks."
            />
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {complianceBadges.map((badge) => (
                <Badge key={badge}>{badge}</Badge>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Methodology Section */}
      <Section className="bg-white dark:bg-slate-950">
        <Container>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
          >
            <SectionHeader
              eyebrow="Methodology"
              title="OT-Focused Cybersecurity Architecture"
              subtitle="Comprehensive security designed to protect industrial systems without impacting production, safety, or reliability."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {methodology.map((item) => (
                <motion.div key={item.title} variants={fadeUp}>
                  <Card>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                      {item.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-slate-200/70 bg-slate-50 p-5 dark:border-slate-800/70 dark:bg-slate-900/50">
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">OT security lifecycle</h3>
              <div className="relative mt-6">
                <div className="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-cyan-300 to-transparent md:block dark:via-cyan-700" />
                <motion.div
                  variants={stagger}
                  className="grid gap-4 md:grid-cols-5"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-120px" }}
                >
                  {processSteps.map((step) => (
                    <motion.div
                      key={step.title}
                      variants={fadeUp}
                      whileHover={reduceMotion ? undefined : { y: -4 }}
                      className="relative"
                    >
                      <Card className="h-full">
                        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
                          {step.title}
                        </div>
                        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                          {step.description}
                        </p>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Services Section */}
      <Section className="bg-slate-50 dark:bg-slate-950/70">
        <Container>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
          >
            <SectionHeader
              eyebrow="Services"
              title="Our OT Security Assessment Services"
              subtitle="Comprehensive OT security from asset discovery to continuous monitoring and incident response."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {otSecurityServices.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  whileHover={reduceMotion ? undefined : { y: -4 }}
                >
                  <Card className="h-full">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                      {item.desc}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Image + Capabilities Section */}
      <Section className="bg-white dark:bg-slate-950">
        <Container>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
          >
            <div>
              <SectionHeader
                align="left"
                eyebrow="Why It Matters"
                title="Why Choose OT Security Services"
                subtitle="Specialized expertise for securing critical industrial infrastructure across oil & gas, energy, manufacturing, and transportation."
              />
              <div className="mt-8">
                <div className="relative rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-900/70">
                  <div className="pointer-events-none absolute -inset-1 rounded-[22px] bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-transparent opacity-70" />
                  <div className="relative overflow-hidden rounded-2xl bg-slate-950/5 p-4 dark:bg-slate-950">
                    <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-cyan-500/20 blur-2xl" />
                    <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-blue-500/20 blur-2xl" />
                    <img
                      src="/assets/services/n-security.jpg"
                      alt="OT Security Assessment"
                      className="w-full rounded-xl shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="grid gap-4">
                {otCapabilities.map((capability) => (
                  <motion.div key={capability.title} variants={fadeUp}>
                    <Card>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
                        {capability.title}
                      </h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {capability.items.map((item) => (
                          <Badge key={item}>{item}</Badge>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Core Responsibilities Section */}
      <Section className="bg-slate-50 dark:bg-slate-950/70">
        <Container>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
          >
            <SectionHeader
              eyebrow="Process"
              title="How Our OT Security Engagement Works"
              subtitle="A structured framework for securing operational technology without disrupting production or safety."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {coreResponsibilities.map((responsibility) => (
                <motion.div key={responsibility.category} variants={fadeUp}>
                  <Card className="h-full">
                    <h3 className="text-lg font-semibold text-cyan-600 dark:text-cyan-400 mb-4">
                      {responsibility.category}
                    </h3>
                    <ul className="space-y-3">
                      {responsibility.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                          <IconCheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-600 dark:text-cyan-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Why Vulnuris Section */}
      <Section className="bg-white dark:bg-slate-950">
        <Container>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
          >
            <SectionHeader
              eyebrow="Why Vulnuris"
              title="Trusted OT security expertise since 2017."
              subtitle="We've secured critical infrastructure across energy, manufacturing, and maritime operations in UAE, GCC, and globally."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "OT security specialists",
                  description: "Deep expertise in industrial control systems, SCADA security, and OT protocols with proven experience across critical industries.",
                  Icon: IconFactory,
                },
                {
                  title: "Safety-first approach",
                  description: "All assessments designed with strict safeguards to protect human safety, equipment integrity, and production continuity.",
                  Icon: IconShield,
                },
                {
                  title: "Compliance ready",
                  description: "Expert support for IEC 62443, NERC CIP, NIST CSF, and industry-specific OT security compliance requirements.",
                  Icon: IconClipboard,
                },
              ].map((item) => (
                <motion.div key={item.title} variants={fadeUp}>
                  <Card className="h-full">
                    <div className="mb-4 inline-flex rounded-full bg-cyan-500/10 p-3 text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-400">
                      <item.Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                      {item.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Deliverables Section */}
      <Section className="bg-slate-50 dark:bg-slate-950/70">
        <Container>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
          >
            <SectionHeader
              eyebrow="Deliverables"
              title="What You Get"
              subtitle="Comprehensive OT security assessment, implementation guidance, and compliance documentation."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {deliverables.map((item) => (
                <motion.div key={item} variants={fadeUp}>
                  <Card>
                    <div className="flex items-start gap-3">
                      <IconCheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-600 dark:text-cyan-400" />
                      <p className="text-sm text-slate-700 dark:text-slate-300">{item}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Use Cases Section */}
      <Section className="bg-white dark:bg-slate-950">
        <Container>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
          >
            <SectionHeader
              eyebrow="Industry Applications"
              title="OT security for diverse critical sectors."
              subtitle="Tailored security for oil & gas, energy, manufacturing, water treatment, transportation, and maritime operations."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {useCases.map((item) => (
                <motion.div key={item.title} variants={fadeUp}>
                  <Card className="h-full">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                      {item.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Engagement Tiers Section */}
      <Section className="bg-slate-50 dark:bg-slate-950/70">
        <Container>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
          >
            <SectionHeader
              eyebrow="Engagement Options"
              title="Flexible OT security programs for every need."
              subtitle="Choose from essential, advanced, or enterprise OT security based on your infrastructure complexity."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {engagementTiers.map((tier) => (
                <motion.div key={tier.title} variants={fadeUp}>
                  <Card className="h-full">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {tier.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                      {tier.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {tier.bullets.map((bullet) => (
                        <Badge key={bullet}>{bullet}</Badge>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-white dark:bg-slate-950">
        <Container>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-120px" }}>
            <SectionHeader
              eyebrow="FAQ"
              title="Common questions about OT security."
              subtitle="Clear answers to help you understand industrial cybersecurity, SCADA protection, and ICS security."
            />
            <div className="mt-8 space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-slate-200/70 bg-white/80 p-5 dark:border-slate-800/70 dark:bg-slate-900/70"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between text-left text-sm font-semibold text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:text-white"
                    aria-expanded={openFaq === index}
                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  >
                    <span>{faq.question}</span>
                    <span className="text-cyan-600 dark:text-cyan-400">{openFaq === index ? "–" : "+"}</span>
                  </button>
                  {openFaq === index ? (
                    <div className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                      {faq.answer}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-slate-50 dark:bg-slate-950/70">
        <Container>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            className="rounded-3xl border border-slate-200/70 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 px-6 py-10 text-center text-white shadow-xl dark:border-slate-800/70"
          >
            <h2 className="text-3xl font-semibold md:text-4xl">
              Protect Your Critical Infrastructure Today
            </h2>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Reduce operational risks and ensure continuity with professional OT security assessments.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact?subject=OT%20Security%20Assessment"
                aria-label="Request OT Security Check"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Request OT Security Check
              </Link>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Mobile CTA */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200/70 bg-white/95 px-4 py-3 shadow-lg backdrop-blur-md transition md:hidden dark:border-slate-800/70 dark:bg-slate-950/90 ${
          showMobileCta ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
        }`}
        role="region"
        aria-label="Quick action"
      >
        <div className="flex items-center justify-between gap-3">
          <div className="text-xs font-semibold text-slate-700 dark:text-slate-200">
            Secure your OT infrastructure
          </div>
          <Link
            href="/contact?subject=OT%20Security%20Assessment"
            aria-label="Get Started"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white dark:bg-white dark:text-slate-900"
          >
            Get Started
          </Link>
        </div>
      </div>
    </motion.main>
  );
}