"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

/* ===================== DATA ===================== */

const painPoints = [
  "Facing sophisticated network attacks?",
  "Need 24/7 security monitoring and response?",
  "Struggling with compliance and risk management?",
];

const outcomes = [
  {
    title: "Perimeter Defense",
    description:
      "Comprehensive protection with firewalls, gateways, and traffic filtering to control external access and prevent unauthorized entry.",
  },
  {
    title: "Threat Detection & Response",
    description:
      "24/7 monitoring with intrusion detection, abnormal traffic analysis, and rapid incident response across all network zones.",
  },
  {
    title: "Network Segmentation",
    description:
      "Strategic isolation of users, servers, cloud workloads, and critical systems to contain threats and minimize lateral movement.",
  },
  {
    title: "Compliance & Risk Reduction",
    description:
      "Meet regulatory requirements while reducing business risk through vulnerability assessment, penetration testing, and security hardening.",
  },
];

const complianceBadges = [
  "ISO 27001",
  "NIST CSF",
  "PCI DSS",
  "SOC 2",
  "Network Security",
  "Zero Trust",
];

const methodology = [
  {
    title: "Network Architecture Assessment",
    description:
      "Comprehensive review of network design, segmentation, routing, and security controls across on-premises and cloud environments.",
  },
  {
    title: "Vulnerability Scanning & Testing",
    description:
      "Automated and manual testing to identify weaknesses in network devices, configurations, and security controls before attackers exploit them.",
  },
  {
    title: "Penetration Testing",
    description:
      "Real-world attack simulations to test perimeter defenses, internal segmentation, and incident response capabilities.",
  },
  {
    title: "Security Monitoring & Detection",
    description:
      "Deployment of intrusion detection systems, traffic analysis, and behavioral monitoring for continuous threat visibility.",
  },
  {
    title: "Access Control & Authentication",
    description:
      "Implementation of secure VPNs, multi-factor authentication, network access control, and identity-based security policies.",
  },
  {
    title: "Incident Response & Containment",
    description:
      "Rapid identification, isolation, and remediation of compromised systems with minimal business disruption.",
  },
];

const processSteps = [
  { title: "Assess", description: "Network security audit." },
  { title: "Test", description: "Vulnerability & penetration." },
  { title: "Monitor", description: "24/7 threat detection." },
  { title: "Respond", description: "Rapid containment." },
  { title: "Harden", description: "Continuous improvement." },
];

const networkCapabilities = [
  {
    title: "Defense Layers",
    items: ["Firewalls", "IDS/IPS", "WAF", "DDoS protection"],
  },
  {
    title: "Security Services",
    items: ["Pen testing", "Vulnerability scan", "MDR", "SOC"],
  },
  {
    title: "Network Types",
    items: ["Enterprise LAN", "WAN", "Cloud", "Hybrid"],
  },
  {
    title: "Compliance",
    items: ["ISO 27001", "PCI DSS", "SOC 2", "NIST"],
  },
];

const networkSecurityServices = [
  {
    title: "Network Vulnerability Assessment",
    desc: "Comprehensive scanning and analysis of network infrastructure, devices, and configurations to identify security weaknesses.",
  },
  {
    title: "Network Penetration Testing",
    desc: "Real-world attack simulation targeting network perimeter, internal segmentation, wireless security, and remote access.",
  },
  {
    title: "Firewall Security Review",
    desc: "Assessment of firewall rules, policies, configurations, and effectiveness across perimeter and internal network boundaries.",
  },
  {
    title: "Network Segmentation Design",
    desc: "Architecture design and implementation of security zones, VLANs, access controls, and isolation between network segments.",
  },
  {
    title: "Intrusion Detection & Prevention",
    desc: "Deployment and tuning of IDS/IPS systems for threat detection, traffic analysis, and automated blocking of malicious activity.",
  },
  {
    title: "VPN & Remote Access Security",
    desc: "Security assessment and hardening of VPN infrastructure, remote access solutions, and multi-factor authentication.",
  },
  {
    title: "Wireless Network Security",
    desc: "Security review of WiFi networks, authentication mechanisms, encryption, rogue access point detection, and wireless policies.",
  },
  {
    title: "Security Monitoring (MDR)",
    desc: "Managed Detection and Response with 24/7 monitoring, threat hunting, incident response, and security operations support.",
  },
  {
    title: "Cloud Network Security",
    desc: "Security assessment of cloud network architecture, security groups, network ACLs, and hybrid cloud connectivity.",
  },
];

const coreResponsibilities = [
  {
    category: "Perimeter Protection",
    items: [
      "Firewall configuration and rule optimization",
      "Gateway security and DMZ architecture",
      "DDoS protection and traffic filtering",
      "External attack surface reduction",
    ],
  },
  {
    category: "Network Segmentation",
    items: [
      "Security zone design and implementation",
      "VLAN isolation and access control",
      "East-west traffic monitoring",
      "Lateral movement prevention",
    ],
  },
  {
    category: "Threat Detection",
    items: [
      "Intrusion detection system (IDS) deployment",
      "Network traffic analysis and anomaly detection",
      "Threat intelligence integration",
      "Security event correlation and alerting",
    ],
  },
  {
    category: "Incident Response",
    items: [
      "Rapid threat identification and containment",
      "Compromised system isolation",
      "Malicious traffic blocking",
      "Post-incident analysis and remediation",
    ],
  },
];

const deliverables = [
  "Comprehensive network security assessment",
  "Vulnerability scan results and analysis",
  "Penetration testing report with findings",
  "Firewall rule review and optimization",
  "Network segmentation recommendations",
  "IDS/IPS deployment and tuning plan",
  "Remote access security evaluation",
  "Wireless network security review",
  "Security monitoring implementation",
  "Incident response playbooks",
  "Compliance gap analysis",
  "Executive security briefing",
];

const useCases = [
  {
    title: "Enterprise Networks",
    description:
      "Comprehensive security for large corporate networks with multiple locations, data centers, and cloud integrations.",
  },
  {
    title: "Financial Services",
    description:
      "High-security network protection meeting PCI DSS, SOC 2, and regulatory requirements for banks and financial institutions.",
  },
  {
    title: "Healthcare Organizations",
    description:
      "HIPAA-compliant network security for hospitals, clinics, and healthcare providers protecting patient data and medical systems.",
  },
  {
    title: "E-commerce & Retail",
    description:
      "PCI DSS compliant network security for online retailers, payment processing, and point-of-sale systems.",
  },
  {
    title: "Government & Critical Infrastructure",
    description:
      "High-assurance network security for government agencies and critical infrastructure meeting stringent compliance requirements.",
  },
  {
    title: "Cloud & Hybrid Environments",
    description:
      "Security for AWS, Azure, GCP, and hybrid cloud networks with secure connectivity and cloud-native security controls.",
  },
];

const engagementTiers = [
  {
    title: "Essential Network Security",
    description:
      "Focused assessment with vulnerability scanning, basic penetration testing, and security recommendations for small networks.",
    bullets: ["Vulnerability scan", "Network assessment", "Security report", "Recommendations"],
  },
  {
    title: "Advanced Network Security",
    description:
      "Comprehensive security program with penetration testing, segmentation design, monitoring deployment, and compliance support.",
    bullets: ["Full pen testing", "Segmentation", "IDS/IPS", "Compliance"],
  },
  {
    title: "Enterprise Network Security",
    description:
      "Ongoing security program with managed detection and response, 24/7 monitoring, incident response, and continuous improvement.",
    bullets: ["MDR/SOC", "24/7 monitoring", "Incident response", "Managed services"],
  },
];

const faqs = [
  {
    question: "What is Network Security?",
    answer:
      "Network Security protects the integrity, confidentiality, and availability of computer networks and data. It involves multiple layers of defense at the edge and within the network, including firewalls, intrusion detection/prevention systems, network segmentation, access controls, and continuous monitoring. Our approach combines preventive controls (firewalls, segmentation), detective controls (IDS/IPS, monitoring), and responsive controls (incident response, containment) to protect against unauthorized access, attacks, and data breaches while ensuring business continuity.",
  },
  {
    question: "What's included in a network security assessment?",
    answer:
      "Our network security assessment includes comprehensive vulnerability scanning of all network devices, manual penetration testing of perimeter and internal systems, firewall rule review and optimization, network architecture analysis, wireless security testing, VPN and remote access review, and evaluation of segmentation and access controls. We test for misconfigurations, weak authentication, unpatched systems, insecure protocols, and potential attack paths. Deliverables include detailed findings with risk ratings, remediation recommendations, and an executive summary with strategic guidance.",
  },
  {
    question: "How is network penetration testing different from vulnerability scanning?",
    answer:
      "Vulnerability scanning is automated and identifies known security weaknesses in systems and configurations. It's comprehensive and fast but limited to known vulnerabilities. Penetration testing is manual and simulates real-world attacks, combining multiple vulnerabilities, testing business logic, attempting privilege escalation, and demonstrating actual impact. Pen testing validates if vulnerabilities are exploitable, tests detection and response capabilities, and uncovers attack chains that automated scanning misses. We recommend quarterly vulnerability scanning combined with annual penetration testing for comprehensive coverage.",
  },
  {
    question: "Can you help with PCI DSS or other compliance requirements?",
    answer:
      "Yes, we provide comprehensive compliance support for PCI DSS (payment card industry), ISO 27001, SOC 2, HIPAA, and other frameworks. Our services include gap assessments against compliance requirements, network segmentation for cardholder data environments, firewall and security configuration aligned with standards, penetration testing for compliance validation, vulnerability scanning programs, and audit preparation with documentation and evidence. Many clients achieve and maintain compliance certification with our ongoing support and quarterly security assessments.",
  },
  {
    question: "What is Managed Detection and Response (MDR)?",
    answer:
      "MDR is our 24/7 security monitoring service that provides continuous threat detection, analysis, and response for your network. Our security operations center monitors network traffic, logs, and security events; performs threat hunting; investigates alerts; responds to incidents; and provides detailed reporting. Unlike traditional monitoring that just alerts you to problems, MDR includes active response - we contain threats, block malicious traffic, and guide remediation. It's ideal for organizations that need enterprise-grade security but don't have resources for a full in-house SOC.",
  },
  {
    question: "How long does a network security assessment take?",
    answer:
      "Timeline depends on network size and complexity. A small network assessment (single location, <50 devices) typically takes 1-2 weeks. Medium networks (multiple locations, 50-500 devices) require 2-4 weeks. Large enterprise networks (1000+ devices, multiple data centers) range from 4-8 weeks. The process includes scoping and planning (3-5 days), automated vulnerability scanning (1-3 days running scans), manual penetration testing (5-10 days depending on scope), analysis and validation (3-5 days), and final reporting with remediation roadmap (3-5 days). We work during off-hours when needed to minimize impact.",
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

const IconNetwork = ({ className }) => (
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
    <rect x="16" y="16" width="6" height="6" rx="1" />
    <rect x="2" y="16" width="6" height="6" rx="1" />
    <rect x="9" y="2" width="6" height="6" rx="1" />
    <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3M12 12V8" />
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
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
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
      <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-400">
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
  <span className="rounded-full border border-blue-200/70 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:border-blue-700/50 dark:bg-blue-900/30 dark:text-blue-300">
    {children}
  </span>
);

/* ===================== PAGE COMPONENT ===================== */

export default function NetworkSecurityPage() {
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
          <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#3b82f622_1px,transparent_1px),linear-gradient(to_bottom,#3b82f622_1px,transparent_1px)] bg-[size:80px_80px]" />
          <div className="absolute -left-24 top-16 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
        </div>

        <Container className="relative z-10 flex min-h-[86vh] flex-col justify-center">
          <motion.div variants={fadeUp} className="max-w-3xl">
            <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
              Network Defense
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              Computer Network Security Consulting
            </h1>
            <p className="mt-4 text-lg text-white/85 md:text-xl">
              Design and secure enterprise networks using modern cyber-defense strategies to stop attackers before they breach.
            </p>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Comprehensive IT, cyber, and network security with vulnerability assessment, penetration testing, and managed security services.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/contact"
                aria-label="Speak With an Expert"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <motion.span
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  whileTap={reduceMotion ? undefined : { y: 0 }}
                  className="inline-flex items-center"
                >
                  Speak With an Expert
                </motion.span>
              </Link>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12 max-w-4xl">
            <div className="grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80 backdrop-blur-sm md:grid-cols-3">
              {painPoints.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
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
              title="Comprehensive network security architecture."
              subtitle="Multi-layer defense protecting your infrastructure from modern cyber threats with prevention, detection, and response."
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
                      <div className="rounded-full bg-blue-500/10 p-3 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400">
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
              title="Aligned with network security standards."
              subtitle="Expert network security following ISO 27001, NIST CSF, PCI DSS, SOC 2, and industry-specific compliance frameworks."
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
              title="Network Security Control Model"
              subtitle="Layered approach to defending enterprise networks with prevention, visibility, and fast containment."
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
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">Network security lifecycle</h3>
              <div className="relative mt-6">
                <div className="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-blue-300 to-transparent md:block dark:via-blue-700" />
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
                        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
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
              title="Network Security & Managed IT Services"
              subtitle="Comprehensive network security from vulnerability assessment to 24/7 monitoring and incident response."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {networkSecurityServices.map((item) => (
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
                title="Why Choose Network Security Services"
                subtitle="Specialized expertise for protecting enterprise networks, data centers, and cloud infrastructure from cyber threats."
              />
              <div className="mt-8">
                <div className="relative rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-900/70">
                  <div className="pointer-events-none absolute -inset-1 rounded-[22px] bg-gradient-to-r from-blue-500/30 via-violet-500/20 to-transparent opacity-70" />
                  <div className="relative overflow-hidden rounded-2xl bg-slate-950/5 p-4 dark:bg-slate-950">
                    <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-blue-500/20 blur-2xl" />
                    <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-violet-500/20 blur-2xl" />
                    <img
                      src="/assets/services/nt.jpg"
                      alt="Network Security Services"
                      className="w-full rounded-xl shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="grid gap-4">
                {networkCapabilities.map((capability) => (
                  <motion.div key={capability.title} variants={fadeUp}>
                    <Card>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
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
              title="How Our Network Security Service Works"
              subtitle="A structured framework for protecting networks with perimeter defense, segmentation, monitoring, and response."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {coreResponsibilities.map((responsibility) => (
                <motion.div key={responsibility.category} variants={fadeUp}>
                  <Card className="h-full">
                    <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">
                      {responsibility.category}
                    </h3>
                    <ul className="space-y-3">
                      {responsibility.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                          <IconCheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600 dark:text-blue-400" />
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
              title="Trusted network security expertise since 2017."
              subtitle="We've secured enterprise networks across finance, healthcare, government, and e-commerce in UAE, GCC, and globally."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Network security specialists",
                  description: "Deep expertise in enterprise networks, cloud security, perimeter defense, and security architecture with proven experience.",
                  Icon: IconNetwork,
                },
                {
                  title: "24/7 monitoring & response",
                  description: "Managed Detection and Response (MDR) with continuous monitoring, threat hunting, and rapid incident response capabilities.",
                  Icon: IconActivity,
                },
                {
                  title: "Compliance ready",
                  description: "Expert support for ISO 27001, PCI DSS, SOC 2, HIPAA, and industry-specific network security compliance requirements.",
                  Icon: IconClipboard,
                },
              ].map((item) => (
                <motion.div key={item.title} variants={fadeUp}>
                  <Card className="h-full">
                    <div className="mb-4 inline-flex rounded-full bg-blue-500/10 p-3 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400">
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
              subtitle="Comprehensive network security assessment, implementation guidance, and compliance documentation."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {deliverables.map((item) => (
                <motion.div key={item} variants={fadeUp}>
                  <Card>
                    <div className="flex items-start gap-3">
                      <IconCheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
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
              title="Network security for diverse sectors."
              subtitle="Tailored security for enterprise, financial services, healthcare, e-commerce, government, and cloud environments."
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
              title="Flexible network security programs for every need."
              subtitle="Choose from essential, advanced, or enterprise network security based on your infrastructure complexity."
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
              title="Common questions about network security."
              subtitle="Clear answers to help you understand network protection, penetration testing, and security monitoring."
            />
            <div className="mt-8 space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-slate-200/70 bg-white/80 p-5 dark:border-slate-800/70 dark:bg-slate-900/70"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between text-left text-sm font-semibold text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-white"
                    aria-expanded={openFaq === index}
                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  >
                    <span>{faq.question}</span>
                    <span className="text-blue-600 dark:text-blue-400">{openFaq === index ? "–" : "+"}</span>
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
              Strengthen Your Network Security
            </h2>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Get tailored cybersecurity guidance for your infrastructure, compliance needs, and risk profile.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                aria-label="Talk to a Network Security Expert"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Talk to a Network Security Expert
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
            Secure your network
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