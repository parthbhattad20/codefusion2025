"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

/* ===================== DATA ===================== */

const painPoints = [
  "Operating critical infrastructure with legacy systems?",
  "Concerned about industrial cyberattack risks?",
  "Need to secure OT without disrupting operations?",
];

const outcomes = [
  {
    title: "Prevent Catastrophic Disruptions",
    description:
      "Identify and eliminate vulnerabilities in critical infrastructure before they can be exploited to cause massive operational, financial, and safety incidents.",
  },
  {
    title: "Protect National Infrastructure",
    description:
      "Safeguard power grids, water treatment, oil & gas, manufacturing, and transportation systems from nation-state actors and cybercriminals.",
  },
  {
    title: "Maintain Operational Continuity",
    description:
      "Implement security controls designed for industrial environments that prioritize safety, availability, and controlled risk reduction.",
  },
  {
    title: "Achieve Regulatory Compliance",
    description:
      "Meet NERC CIP, IEC 62443, NIST 800-82, and industry-specific requirements with comprehensive security documentation and controls.",
  },
];

const complianceBadges = [
  "IEC 62443",
  "NERC CIP",
  "NIST 800-82",
  "ISA/IEC",
  "OT Security",
  "Safety Critical",
];

const methodology = [
  {
    title: "Industrial Asset Discovery",
    description:
      "Comprehensive identification and classification of PLCs, RTUs, HMIs, SCADA servers, field devices, and industrial protocols across OT networks.",
  },
  {
    title: "Network Architecture Assessment",
    description:
      "Evaluation of IT/OT segmentation, zone/conduit design, firewall placement, DMZ configuration, and remote access pathways.",
  },
  {
    title: "Protocol Security Analysis",
    description:
      "Deep inspection of Modbus, DNP3, OPC, PROFINET, EtherNet/IP, and other industrial protocols for authentication weaknesses and unsafe commands.",
  },
  {
    title: "Controlled Penetration Testing",
    description:
      "Carefully scoped security testing designed to identify exploitable vulnerabilities without impacting production systems or safety controls.",
  },
  {
    title: "Incident Response Planning",
    description:
      "Development of OT-specific incident response procedures aligned with operational continuity, safety requirements, and regulatory obligations.",
  },
  {
    title: "Security Hardening Implementation",
    description:
      "Deployment of defense-in-depth controls including system patches, access controls, monitoring, and change management aligned with industrial lifecycles.",
  },
];

const processSteps = [
  { title: "Discover", description: "Asset & network inventory." },
  { title: "Assess", description: "Architecture & risk analysis." },
  { title: "Test", description: "Controlled penetration testing." },
  { title: "Harden", description: "Security control implementation." },
  { title: "Monitor", description: "Continuous OT monitoring." },
];

const securityCapabilities = [
  {
    title: "OT Asset Security",
    items: ["PLCs", "RTUs", "HMIs", "SCADA servers"],
  },
  {
    title: "Industrial Protocols",
    items: ["Modbus", "DNP3", "OPC", "PROFINET"],
  },
  {
    title: "Network Zones",
    items: ["IT/OT segmentation", "DMZ design", "Remote access", "Air gaps"],
  },
  {
    title: "Compliance",
    items: ["IEC 62443", "NERC CIP", "NIST 800-82", "ISA"],
  },
];

const icsScadaServices = [
  {
    title: "Industrial Network Assessment",
    desc: "Comprehensive security evaluation of OT networks, control systems, and industrial protocols with minimal operational impact.",
  },
  {
    title: "IT/OT Segmentation Review",
    desc: "Assessment of network segmentation, zone/conduit architecture, firewall rules, and data flow controls between enterprise and industrial networks.",
  },
  {
    title: "SCADA System Security Testing",
    desc: "Security assessment of SCADA servers, historian databases, engineering workstations, and operator interfaces.",
  },
  {
    title: "PLC & RTU Security Hardening",
    desc: "Configuration review and hardening of programmable logic controllers, remote terminal units, and distributed control systems.",
  },
  {
    title: "Industrial Protocol Analysis",
    desc: "Deep inspection of Modbus, DNP3, OPC, PROFINET, and other protocols for authentication weaknesses, command injection, and replay attacks.",
  },
  {
    title: "Remote Access Security",
    desc: "Assessment of vendor remote access, VPN configurations, jump servers, and third-party connections to industrial environments.",
  },
  {
    title: "Safety System Verification",
    desc: "Security testing of safety instrumented systems (SIS), emergency shutdown systems (ESD), and safety PLCs without compromising safety functions.",
  },
  {
    title: "Wireless & IoT Security",
    desc: "Security assessment of wireless networks, industrial IoT devices, and sensor networks in manufacturing and utilities environments.",
  },
  {
    title: "ICS Incident Response Planning",
    desc: "Development of operational technology incident response procedures aligned with safety requirements and business continuity.",
  },
];

const coreResponsibilities = [
  {
    category: "Asset Discovery & Mapping",
    items: [
      "Comprehensive OT asset inventory and classification",
      "Network topology mapping and data flow analysis",
      "Industrial protocol identification and enumeration",
      "Vendor and firmware version documentation",
    ],
  },
  {
    category: "Security Assessment",
    items: [
      "IT/OT segmentation and zone architecture review",
      "Protocol-level vulnerability identification",
      "Access control and authentication analysis",
      "Controlled penetration testing in production environments",
    ],
  },
  {
    category: "Hardening & Protection",
    items: [
      "Security baseline configuration for OT devices",
      "Patch management strategy for legacy systems",
      "Defense-in-depth control implementation",
      "Secure remote access design and deployment",
    ],
  },
  {
    category: "Monitoring & Response",
    items: [
      "OT-specific security monitoring deployment",
      "Anomaly detection for industrial protocols",
      "Incident response procedure development",
      "Continuous compliance validation and reporting",
    ],
  },
];

const deliverables = [
  "Comprehensive OT asset inventory and network map",
  "IT/OT segmentation architecture review",
  "Industrial protocol security analysis",
  "Controlled penetration testing report",
  "PLC/RTU/SCADA security assessment",
  "Remote access security evaluation",
  "Safety system security verification",
  "Security hardening recommendations",
  "Incident response playbook for OT",
  "Regulatory compliance gap analysis",
  "Risk prioritization and remediation roadmap",
  "Executive briefing on critical findings",
];

const useCases = [
  {
    title: "Energy & Utilities",
    description:
      "Security for power generation, transmission, distribution, water treatment, and renewable energy systems with NERC CIP compliance.",
  },
  {
    title: "Oil & Gas",
    description:
      "Protection of upstream, midstream, and downstream operations including pipelines, refineries, offshore platforms, and terminal facilities.",
  },
  {
    title: "Manufacturing",
    description:
      "Security for discrete and process manufacturing, including automotive, pharmaceutical, food & beverage, and chemical production.",
  },
  {
    title: "Transportation",
    description:
      "Critical infrastructure protection for rail systems, airports, seaports, traffic management, and logistics operations.",
  },
  {
    title: "Building Automation",
    description:
      "Security for smart buildings, HVAC systems, access control, and integrated facility management in commercial and government facilities.",
  },
  {
    title: "Critical Infrastructure",
    description:
      "Government and defense applications including military installations, emergency services, and national security operations.",
  },
];

const engagementTiers = [
  {
    title: "Essential OT Security",
    description:
      "Annual security assessment with network mapping, basic hardening recommendations, and compliance gap analysis.",
    bullets: ["Annual assessment", "Asset inventory", "Gap analysis", "Basic hardening"],
  },
  {
    title: "Advanced OT Security",
    description:
      "Bi-annual assessments with penetration testing, protocol analysis, incident response planning, and continuous monitoring.",
    bullets: ["Bi-annual testing", "Protocol analysis", "IR planning", "Monitoring setup"],
  },
  {
    title: "Enterprise OT Security",
    description:
      "Continuous security program with quarterly assessments, 24/7 monitoring, dedicated OT security team, and managed services.",
    bullets: ["Continuous program", "24/7 monitoring", "Dedicated team", "Managed services"],
  },
];

const faqs = [
  {
    question: "What is ICS/SCADA Security Testing?",
    answer:
      "ICS/SCADA Security Testing is specialized cybersecurity assessment designed for industrial control systems and supervisory control and data acquisition environments. Unlike traditional IT security testing, ICS/SCADA assessments prioritize operational safety, system availability, and controlled risk reduction. We identify vulnerabilities in PLCs, RTUs, HMIs, SCADA servers, and industrial protocols while ensuring testing activities don't disrupt production or compromise safety systems. Our methodology follows IEC 62443, NIST 800-82, and industry best practices for operational technology security.",
  },
  {
    question: "How do you test without disrupting production operations?",
    answer:
      "We use a carefully controlled methodology that prioritizes operational continuity and safety. All testing activities are planned during maintenance windows or approved downtime when possible. We use passive network monitoring, read-only protocol analysis, and isolated test environments for invasive testing. Active penetration testing is conducted with explicit authorization, safety controls in place, and immediate rollback procedures. We work closely with operations teams to understand system interdependencies, establish testing boundaries, and maintain emergency stop procedures throughout the engagement.",
  },
  {
    question: "What industrial protocols and systems do you support?",
    answer:
      "We support all major industrial protocols including Modbus TCP/RTU, DNP3, OPC Classic/UA, PROFINET, EtherNet/IP, BACnet, and proprietary vendor protocols. Our team has experience with PLCs from Siemens, Allen-Bradley, Schneider Electric, ABB, and other major vendors. We assess SCADA systems from GE, Schneider, Siemens, and open-source platforms. We also evaluate DCS systems, HMI/SCADA workstations, historians, safety instrumented systems (SIS), and field devices across energy, manufacturing, and critical infrastructure sectors.",
  },
  {
    question: "Can you help us achieve IEC 62443 or NERC CIP compliance?",
    answer:
      "Yes, compliance support is a core component of our ICS/SCADA security services. We provide comprehensive gap assessments against IEC 62443 (all parts), NERC CIP standards (CIP-002 through CIP-014), NIST 800-82, and ISA/IEC standards. Our deliverables include security level assessments, zone/conduit documentation, control validation, risk assessments, and audit-ready documentation. We help implement required security controls, develop policies and procedures, and prepare for third-party audits. Many clients have achieved successful certification with our support.",
  },
  {
    question: "What is the difference between IT and OT security testing?",
    answer:
      "OT security testing prioritizes availability and safety over confidentiality, while IT testing prioritizes data protection. OT environments often run legacy systems that cannot be patched or rebooted easily, requiring compensating controls. OT testing must account for physical safety implications—a vulnerability exploit could cause equipment damage, environmental harm, or endanger human life. OT networks use specialized industrial protocols that require protocol-specific security analysis. Testing methodologies, tools, and success criteria are fundamentally different. We recommend specialized OT security expertise rather than applying traditional IT security approaches.",
  },
  {
    question: "How long does an ICS/SCADA security assessment take?",
    answer:
      "Timeline depends on environment complexity, number of sites, and testing scope. A typical single-site assessment takes 4-8 weeks including planning, discovery, testing, and reporting. Multi-site assessments or enterprise programs may take 3-6 months. Initial planning and scoping requires 1-2 weeks to understand system architecture, operational constraints, and testing windows. We work within your maintenance schedules and operational calendars. For critical infrastructure, we recommend phased approaches that spread testing across multiple maintenance windows to minimize operational risk and allow thorough analysis.",
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

const IconSettings = ({ className }) => (
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
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v6m0 6v6M5.5 5.5l4.2 4.2m5.6 5.6l4.2 4.2M1 12h6m6 0h6M5.5 18.5l4.2-4.2m5.6-5.6l4.2-4.2" />
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

export default function ICS_SCADA_SecurityPage() {
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
          <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,#06b6d422_1px,transparent_1px),linear-gradient(to_bottom,#06b6d422_1px,transparent_1px)] bg-[size:80px_80px]" />
          <div className="absolute -left-24 top-16 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
          
          {/* Scan beam effect */}
          <motion.div
            className="absolute inset-y-0 w-[40%] bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent"
            animate={{ x: ["-40%", "140%"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <Container className="relative z-10 flex min-h-[86vh] flex-col justify-center">
          <motion.div variants={fadeUp} className="max-w-3xl">
            <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
              Industrial Cybersecurity
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              ICS / SCADA Security Testing
            </h1>
            <p className="mt-4 text-lg text-white/85 md:text-xl">
              Protect your critical industrial networks from catastrophic cyberattacks with specialized OT security testing.
            </p>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Expert security assessments for power grids, oil & gas, manufacturing, and critical infrastructure.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/contact"
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
              title="Industrial-grade cybersecurity for operational technology."
              subtitle="Protect critical infrastructure, maintain operations, and achieve compliance without disrupting production."
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
              title="Aligned with industrial security standards."
              subtitle="Expert OT security assessments following IEC 62443, NERC CIP, NIST 800-82, and industry best practices."
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
              title="Industrial-Grade Cybersecurity for Operational Technology"
              subtitle="A specialized framework designed for OT environments prioritizing safety, availability, and controlled risk reduction."
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
              title="Our ICS/SCADA Security Capabilities"
              subtitle="Comprehensive OT security from network assessment to protocol analysis and continuous monitoring."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {icsScadaServices.map((item) => (
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
                title="Why Choose ICS/SCADA Security Testing"
                subtitle="Specialized OT security expertise designed for safety-critical industrial environments."
              />
              <div className="mt-8">
                <div className="relative rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-900/70">
                  <div className="pointer-events-none absolute -inset-1 rounded-[22px] bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-transparent opacity-70" />
                  <div className="relative overflow-hidden rounded-2xl bg-slate-950/5 p-4 dark:bg-slate-950">
                    <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-cyan-500/20 blur-2xl" />
                    <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-blue-500/20 blur-2xl" />
                    <img
                      src="/assets/services/wapt.webp"
                      alt="ICS SCADA Security"
                      className="w-full rounded-xl shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="grid gap-4">
                {securityCapabilities.map((capability) => (
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
              title="How Our ICS/SCADA Security Service Works"
              subtitle="A structured framework for industrial security assessment with minimal operational impact."
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
              subtitle="We've secured critical infrastructure across energy, manufacturing, and utilities in UAE, GCC, and globally."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "OT security specialists",
                  description: "Deep expertise in industrial protocols, SCADA systems, PLCs, and safety-critical environments with minimal operational impact.",
                  Icon: IconCpu,
                },
                {
                  title: "Safety-first approach",
                  description: "Controlled testing methodologies designed for production environments prioritizing operational continuity and safety.",
                  Icon: IconShield,
                },
                {
                  title: "Regulatory compliance",
                  description: "Expert support for IEC 62443, NERC CIP, NIST 800-82, and industry-specific compliance with audit-ready documentation.",
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
              subtitle="Comprehensive OT security assessment, hardening recommendations, and compliance documentation."
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
              title="ICS/SCADA security for critical sectors."
              subtitle="Tailored security for energy, oil & gas, manufacturing, transportation, and critical infrastructure."
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
              subtitle="Choose from essential, advanced, or enterprise OT security based on your operational requirements."
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
              title="Common questions about ICS/SCADA security."
              subtitle="Clear answers to help you understand OT security testing, industrial protocols, and compliance."
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
              Secure Your Industrial Infrastructure
            </h2>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Minimize risk and protect critical ICS/SCADA systems with expert OT security testing.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                aria-label="Request ICS/SCADA Security Check"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Request ICS/SCADA Security Check
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
            href="/contact"
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