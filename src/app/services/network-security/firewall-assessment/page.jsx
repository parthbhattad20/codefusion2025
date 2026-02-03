"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

/* ===================== DATA ===================== */

const painPoints = [
  "Are your firewall rules creating security gaps?",
  "Need to validate network perimeter defenses?",
  "Want to ensure compliance with security standards?",
];

const outcomes = [
  {
    title: "Rule Optimization",
    description:
      "Comprehensive analysis of firewall rules to identify misconfigurations, redundancies, and security gaps that expose your network.",
  },
  {
    title: "Traffic Visibility",
    description:
      "Deep inspection of network traffic patterns to ensure proper segmentation, access control, and threat detection capabilities.",
  },
  {
    title: "Compliance Validation",
    description:
      "Verification that firewall configurations align with industry standards, regulatory requirements, and security best practices.",
  },
  {
    title: "Attack Surface Reduction",
    description:
      "Identification and remediation of unnecessary exposure points, excessive permissions, and exploitable access paths.",
  },
];

const complianceBadges = [
  "PCI DSS",
  "HIPAA",
  "SOC 2",
  "ISO 27001",
  "NIST CSF",
  "CIS Controls",
];

const methodology = [
  {
    title: "Environment Discovery",
    description:
      "Identify firewall devices, network zones, routing paths, and protected assets across data centers, cloud, and branch networks.",
  },
  {
    title: "Rulebase Analysis",
    description:
      "Review thousands of rules to detect excessive permissions, unused entries, shadowed rules, and risky access patterns.",
  },
  {
    title: "Access Path Validation",
    description:
      "Verify which systems are reachable from external and internal networks and whether those paths are justified.",
  },
  {
    title: "Logging & Detection Review",
    description:
      "Ensure security events are properly logged, retained, and capable of triggering alerts during attacks.",
  },
  {
    title: "Change Control Assessment",
    description:
      "Analyze how firewall changes are requested, approved, and deployed to reduce configuration drift.",
  },
  {
    title: "Risk Classification",
    description:
      "Findings are prioritized based on exploitability and business impact with clear remediation guidance.",
  },
];

const processSteps = [
  { title: "Discover", description: "Map network topology." },
  { title: "Analyze", description: "Review rule sets." },
  { title: "Validate", description: "Test access paths." },
  { title: "Assess", description: "Evaluate controls." },
  { title: "Report", description: "Prioritize risks." },
];

const firewallCapabilities = [
  {
    title: "Firewall Types",
    items: ["Traditional", "NGFW", "Cloud", "WAF"],
  },
  {
    title: "Analysis Areas",
    items: ["Rules", "Policies", "Logs", "Segmentation"],
  },
  {
    title: "Security Focus",
    items: ["Access control", "Threat detection", "Compliance", "Best practices"],
  },
  {
    title: "Platforms",
    items: ["Palo Alto", "Fortinet", "Cisco", "Check Point"],
  },
];

const firewallServices = [
  {
    title: "Perimeter Firewall Audit",
    desc: "Comprehensive assessment of edge firewalls protecting your network from external threats and unauthorized access.",
  },
  {
    title: "Internal Segmentation Review",
    desc: "Analysis of internal firewall policies ensuring proper network segmentation and lateral movement prevention.",
  },
  {
    title: "Cloud Firewall Assessment",
    desc: "Evaluation of cloud security groups, network ACLs, and cloud-native firewall configurations in AWS, Azure, GCP.",
  },
  {
    title: "Next-Gen Firewall Optimization",
    desc: "Advanced analysis of NGFW features including application control, threat prevention, and SSL inspection.",
  },
  {
    title: "Rule Cleanup & Optimization",
    desc: "Identification and removal of unused, redundant, or overly permissive rules to reduce attack surface.",
  },
  {
    title: "Compliance Gap Analysis",
    desc: "Verification of firewall configurations against PCI DSS, HIPAA, SOC 2, and other regulatory requirements.",
  },
  {
    title: "Logging & Monitoring Review",
    desc: "Assessment of firewall logging capabilities, SIEM integration, and security event correlation.",
  },
  {
    title: "Change Management Assessment",
    desc: "Review of firewall change control processes, approval workflows, and configuration management practices.",
  },
  {
    title: "Multi-Vendor Analysis",
    desc: "Comprehensive audit across diverse firewall platforms ensuring consistent security posture organization-wide.",
  },
];

const coreResponsibilities = [
  {
    category: "Architecture Review",
    items: [
      "Network topology mapping",
      "Zone and interface analysis",
      "Routing and NAT configuration",
      "High availability and redundancy",
    ],
  },
  {
    category: "Policy Assessment",
    items: [
      "Rule base comprehensive review",
      "Access control validation",
      "Service object verification",
      "Security policy effectiveness",
    ],
  },
  {
    category: "Security Controls",
    items: [
      "Intrusion prevention validation",
      "Application control review",
      "SSL/TLS inspection analysis",
      "Threat prevention effectiveness",
    ],
  },
  {
    category: "Operational Review",
    items: [
      "Logging and monitoring assessment",
      "Change management processes",
      "Backup and recovery procedures",
      "Documentation and runbooks",
    ],
  },
];

const deliverables = [
  "Executive summary report",
  "Detailed technical findings",
  "Rule base analysis spreadsheet",
  "Network topology diagrams",
  "Risk-ranked vulnerability list",
  "Compliance gap assessment",
  "Configuration recommendations",
  "Rule optimization guide",
  "Security best practices",
  "Remediation action plan",
  "Technical appendices",
  "Executive presentation deck",
];

const useCases = [
  {
    title: "Enterprise Networks",
    description:
      "Comprehensive firewall audits for large organizations with complex multi-site networks and diverse security requirements.",
  },
  {
    title: "Financial Services",
    description:
      "PCI DSS-focused firewall assessments for banks and payment processors ensuring cardholder data protection.",
  },
  {
    title: "Healthcare Organizations",
    description:
      "HIPAA-compliant firewall audits for hospitals and healthcare systems protecting patient data and medical records.",
  },
  {
    title: "Cloud Migrations",
    description:
      "Security validation during cloud transitions ensuring firewall policies translate correctly to cloud environments.",
  },
  {
    title: "Merger & Acquisition",
    description:
      "Due diligence firewall assessments evaluating network security posture during M&A activities.",
  },
  {
    title: "Regulatory Compliance",
    description:
      "Firewall configuration reviews for organizations needing SOC 2, ISO 27001, or industry-specific compliance.",
  },
];

const engagementTiers = [
  {
    title: "Focused Firewall Audit",
    description:
      "Targeted assessment of specific firewall devices or security zones with 1-2 week engagement timeline.",
    bullets: ["Single device/zone", "1-2 week duration", "Basic reporting", "Quick wins focus"],
  },
  {
    title: "Comprehensive Audit",
    description:
      "Full-scope firewall assessment across entire network infrastructure with detailed analysis over 3-4 weeks.",
    bullets: ["Multi-device/zone", "3-4 week duration", "Detailed findings", "Full remediation plan"],
  },
  {
    title: "Continuous Review Program",
    description:
      "Ongoing firewall assessment with quarterly audits, change validation, and continuous security optimization.",
    bullets: ["Quarterly audits", "Change monitoring", "Ongoing optimization", "Managed program"],
  },
];

const faqs = [
  {
    question: "What is a Firewall Security Audit?",
    answer:
      "A firewall security audit is a comprehensive evaluation of your firewall infrastructure, configurations, and policies to ensure effective network protection. We analyze firewall rules, access controls, network segmentation, logging capabilities, and operational processes to identify misconfigurations, security gaps, and compliance issues. The audit covers traditional firewalls, next-generation firewalls (NGFW), cloud security groups, and web application firewalls (WAF). We review thousands of rules to detect unused entries, overly permissive access, shadowed rules, and policy violations. The goal is to strengthen your network perimeter, improve visibility, ensure compliance, and reduce the probability of successful attacks by identifying and remediating firewall weaknesses before they can be exploited.",
  },
  {
    question: "How long does a firewall audit take?",
    answer:
      "Firewall audit duration varies based on scope and complexity. A focused audit of a single firewall or security zone typically takes 1-2 weeks and includes basic rule review and configuration assessment. A comprehensive audit covering multiple firewalls across diverse network zones usually requires 3-4 weeks for thorough analysis, testing, and documentation. Large enterprise environments with hundreds of firewalls and complex policies may need 6-8 weeks for complete assessment. The timeline includes environment discovery, data collection, rule base analysis, access path testing, compliance review, reporting, and presentation. We work efficiently to minimize disruption while ensuring thorough evaluation. Timeline is finalized during scoping based on your specific infrastructure and objectives.",
  },
  {
    question: "What firewall platforms do you support?",
    answer:
      "We audit all major firewall platforms and technologies including: Palo Alto Networks (PAN-OS, Panorama), Fortinet FortiGate, Cisco ASA/Firepower/Meraki, Check Point, Juniper SRX, pfSense, Sophos, WatchGuard, SonicWall, and cloud-native solutions like AWS Security Groups/Network ACLs, Azure Network Security Groups/Azure Firewall, GCP VPC Firewall Rules, and cloud access security brokers (CASB). We also assess web application firewalls (WAF) including AWS WAF, Azure WAF, Cloudflare, Akamai, and F5. Our methodology is platform-agnostic and adapts to your specific technology stack. We have deep expertise across traditional firewalls, next-generation firewalls (NGFW), unified threat management (UTM), and cloud security controls.",
  },
  {
    question: "Will the audit disrupt our network operations?",
    answer:
      "Firewall audits are designed to be non-disruptive to normal business operations. Most assessment activities are read-only, involving configuration review, log analysis, and policy examination without making changes. When active testing is required (like access path validation), we schedule it during maintenance windows and coordinate closely with your team. We never make unauthorized changes to production firewalls - any configuration modifications are discussed, approved, and documented. Testing is performed cautiously with rollback plans. If you prefer a completely passive audit, we can work solely from exported configurations, rule bases, and logs. Our goal is thorough security assessment with minimal operational impact and zero downtime.",
  },
  {
    question: "What compliance standards do you address?",
    answer:
      "Our firewall audits validate compliance with major regulatory frameworks and security standards including: PCI DSS requirements for network segmentation and cardholder data protection; HIPAA security rules for electronic protected health information (ePHI); SOC 2 Type II controls for network security and access management; ISO 27001 information security controls; NIST Cybersecurity Framework (CSF) for firewall protection; CIS Controls for secure configuration; GDPR data protection requirements; FISMA for federal systems; and industry-specific regulations like NERC CIP for utilities. We map firewall findings to specific compliance requirements and provide gap analysis showing what needs remediation for audit readiness. Our deliverables include compliance-ready documentation suitable for auditor review.",
  },
  {
    question: "What happens after the audit is complete?",
    answer:
      "After completing the audit, we deliver a comprehensive report with executive summary, detailed technical findings, risk-ranked recommendations, and remediation action plan. We conduct an executive briefing to present high-level results and business impact, followed by a technical deep-dive session with your security team to review findings and discuss implementation. We provide a prioritized remediation roadmap with quick wins, medium-term improvements, and long-term strategic recommendations. Most clients engage us for remediation support, whether through direct assistance implementing fixes, validation testing after changes, or ongoing advisory services. We can also establish a continuous firewall review program with quarterly assessments to maintain strong security posture. All deliverables and knowledge transfer ensure your team can maintain improvements independently.",
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

const IconLayers = ({ className }) => (
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
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const IconActivity = ({ className }) => (
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
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
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
      <div className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-red-600 dark:border-red-400/20 dark:bg-red-400/10 dark:text-red-400">
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
  <span className="rounded-full border border-red-200/70 bg-red-50 px-3 py-1 text-xs font-medium text-red-700 dark:border-red-700/50 dark:bg-red-900/30 dark:text-red-300">
    {children}
  </span>
);

/* ===================== PAGE COMPONENT ===================== */

export default function FirewallAuditPage() {
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
          <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#ff000033_1px,transparent_1px),linear-gradient(to_bottom,#ff000033_1px,transparent_1px)] bg-[size:90px_90px]" />
          <div className="absolute -left-24 top-16 h-64 w-64 rounded-full bg-red-500/20 blur-3xl" />
          <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
        </div>

        <Container className="relative z-10 flex min-h-[86vh] flex-col justify-center">
          <motion.div variants={fadeUp} className="max-w-3xl">
            <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
              Network Defense
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              Firewall Security Audit
            </h1>
            <p className="mt-4 text-lg text-white/85 md:text-xl">
              Identify misconfigurations, eliminate exposure, and fortify your network perimeter.
            </p>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Comprehensive firewall assessment to strengthen defenses against unauthorized access and cyber attacks.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/contact?subject=Firewall%20Assessment"
                aria-label="Request Firewall Audit"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <motion.span
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  whileTap={reduceMotion ? undefined : { y: 0 }}
                  className="inline-flex items-center"
                >
                  Request Firewall Audit
                </motion.span>
              </Link>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12 max-w-4xl">
            <div className="grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80 backdrop-blur-sm md:grid-cols-3">
              {painPoints.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
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
              title="Strengthen your network perimeter security."
              subtitle="Comprehensive firewall assessment to detect vulnerabilities, optimize rules, and ensure compliance."
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
                      <div className="rounded-full bg-red-500/10 p-3 text-red-600 dark:bg-red-400/10 dark:text-red-400">
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
              eyebrow="Compliance & Standards"
              title="Aligned with regulatory requirements."
              subtitle="Expert firewall audits supporting PCI DSS, HIPAA, SOC 2, ISO 27001, and industry security frameworks."
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
              title="Firewall Audit Framework"
              subtitle="Structured technical review of architecture, rules, access paths, and operational controls."
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
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">Firewall audit lifecycle</h3>
              <div className="relative mt-6">
                <div className="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-red-300 to-transparent md:block dark:via-red-700" />
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
                        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-red-600 dark:text-red-400">
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
              title="Our Firewall Audit Services"
              subtitle="Comprehensive assessment from perimeter defenses to cloud security and compliance validation."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {firewallServices.map((item) => (
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
                title="Why Choose Firewall Auditing"
                subtitle="Specialized expertise for comprehensive firewall assessment and network perimeter hardening."
              />
              <div className="mt-8">
                <div className="relative rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-900/70">
                  <div className="pointer-events-none absolute -inset-1 rounded-[22px] bg-gradient-to-r from-red-500/30 via-orange-500/20 to-transparent opacity-70" />
                  <div className="relative overflow-hidden rounded-2xl bg-slate-950/5 p-4 dark:bg-slate-950">
                    <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-red-500/20 blur-2xl" />
                    <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-orange-500/20 blur-2xl" />
                    <img
                      src="/assets/services/cyber_f.jpg"
                      alt="Firewall Security Audit"
                      className="w-full rounded-xl shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="grid gap-4">
                {firewallCapabilities.map((capability) => (
                  <motion.div key={capability.title} variants={fadeUp}>
                    <Card>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600 dark:text-red-400">
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
              title="How Our Firewall Audit Works"
              subtitle="A structured framework for comprehensive firewall assessment and security validation."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {coreResponsibilities.map((responsibility) => (
                <motion.div key={responsibility.category} variants={fadeUp}>
                  <Card className="h-full">
                    <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-4">
                      {responsibility.category}
                    </h3>
                    <ul className="space-y-3">
                      {responsibility.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                          <IconCheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-600 dark:text-red-400" />
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
              title="Trusted firewall expertise since 2017."
              subtitle="We've assessed firewall infrastructure for enterprise, finance, healthcare, and critical infrastructure."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Multi-platform expertise",
                  description: "Deep experience with Palo Alto, Fortinet, Cisco, Check Point, and cloud-native firewalls across all major platforms.",
                  Icon: IconLayers,
                },
                {
                  title: "Compliance-focused",
                  description: "PCI DSS, HIPAA, SOC 2, and ISO 27001 aligned assessments with audit-ready documentation and remediation guidance.",
                  Icon: IconShield,
                },
                {
                  title: "Non-disruptive process",
                  description: "Read-only analysis with optional testing during maintenance windows and zero production impact methodology.",
                  Icon: IconActivity,
                },
              ].map((item) => (
                <motion.div key={item.title} variants={fadeUp}>
                  <Card className="h-full">
                    <div className="mb-4 inline-flex rounded-full bg-red-500/10 p-3 text-red-600 dark:bg-red-400/10 dark:text-red-400">
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
              subtitle="Comprehensive firewall assessment report with risk-ranked findings and actionable remediation plan."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {deliverables.map((item) => (
                <motion.div key={item} variants={fadeUp}>
                  <Card>
                    <div className="flex items-start gap-3">
                      <IconCheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600 dark:text-red-400" />
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
              title="Firewall audits for diverse sectors."
              subtitle="Tailored assessments for enterprise, finance, healthcare, cloud migrations, and regulatory compliance."
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
              title="Flexible audit programs for every need."
              subtitle="Choose from focused, comprehensive, or continuous firewall review based on your security requirements."
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
              title="Common questions about firewall audits."
              subtitle="Clear answers to help you understand firewall assessment, methodology, and security validation."
            />
            <div className="mt-8 space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-slate-200/70 bg-white/80 p-5 dark:border-slate-800/70 dark:bg-slate-900/70"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between text-left text-sm font-semibold text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 dark:text-white"
                    aria-expanded={openFaq === index}
                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  >
                    <span>{faq.question}</span>
                    <span className="text-red-600 dark:text-red-400">{openFaq === index ? "–" : "+"}</span>
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
              Protect Your Network Frontier
            </h2>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Ensure your firewall stands strong against evolving cyber threats with expert assessment.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact?subject=Firewall%20Assessment"
                aria-label="Request Firewall Audit"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Request Firewall Audit
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
            Strengthen your defenses
          </div>
          <Link
            href="/contact?subject=Firewall%20Assessment"
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