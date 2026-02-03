"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

/* ===================== DATA ===================== */

const painPoints = [
  "Facing increasing cyber threats and attacks?",
  "Need 24/7 security operations coverage?",
  "Concerned about security team resources?",
];

const outcomes = [
  {
    title: "Continuous Threat Monitoring",
    description:
      "24/7/365 security operations center monitoring of networks, endpoints, and cloud infrastructure with real-time threat detection and response.",
  },
  {
    title: "Rapid Incident Response",
    description:
      "Expert security analysts and incident responders ready to contain and remediate threats with average response times under 15 minutes.",
  },
  {
    title: "Comprehensive Security Coverage",
    description:
      "End-to-end protection spanning vulnerability management, threat hunting, compliance monitoring, and on-site security engineering.",
  },
  {
    title: "Regulatory Compliance Support",
    description:
      "Continuous compliance monitoring, audit support, and documentation for ISO, SOC2, GDPR, and industry-specific frameworks.",
  },
];

const complianceBadges = [
  "ISO 27001",
  "SOC 2",
  "GDPR",
  "PCI DSS",
  "NIST",
  "24/7 SOC",
];

const methodology = [
  {
    title: "Deploy - Security Infrastructure Setup",
    description:
      "Implementation of SIEM, SOAR, EDR, and security monitoring tools with integration into existing IT infrastructure and workflows.",
  },
  {
    title: "Monitor - Continuous Threat Detection",
    description:
      "24/7 monitoring of security events, log analysis, anomaly detection, and threat intelligence correlation across all assets.",
  },
  {
    title: "Analyze - Threat Intelligence & Hunting",
    description:
      "Proactive threat hunting, behavioral analytics, and correlation of global threat feeds with internal telemetry data.",
  },
  {
    title: "Respond - Incident Containment & Remediation",
    description:
      "Rapid incident response workflows, threat containment, forensic analysis, and remediation with minimal business disruption.",
  },
  {
    title: "Optimize - Continuous Security Improvement",
    description:
      "Regular security assessments, vulnerability management, patch validation, and security posture optimization programs.",
  },
];

const processSteps = [
  { title: "Deploy", description: "Security infrastructure setup." },
  { title: "Monitor", description: "Continuous threat detection." },
  { title: "Analyze", description: "Threat intelligence & hunting." },
  { title: "Respond", description: "Incident containment & remediation." },
  { title: "Optimize", description: "Continuous security improvement." },
];

const securityCapabilities = [
  {
    title: "SOC Operations",
    items: ["24/7 monitoring", "SIEM/SOAR", "Log analysis", "Alert triage"],
  },
  {
    title: "Threat Detection",
    items: ["EDR/XDR", "Behavioral analytics", "Threat hunting", "Intelligence"],
  },
  {
    title: "Incident Response",
    items: ["Containment", "Forensics", "Remediation", "Recovery"],
  },
  {
    title: "Compliance",
    items: ["Audits", "Reporting", "Documentation", "Frameworks"],
  },
];

const deliverables = [
  "24/7 Security Operations Center (SOC) monitoring",
  "SIEM and SOAR platform management",
  "Endpoint detection and response (EDR/XDR)",
  "Vulnerability scanning and patch management",
  "Threat intelligence integration and analysis",
  "Incident response playbooks and procedures",
  "Security event correlation and alerting",
  "Compliance audit support and documentation",
  "Monthly security posture reports",
  "Executive dashboards and KPI tracking",
  "On-site security engineering support",
  "Security awareness training programs",
];

const useCases = [
  {
    title: "Financial Services",
    description:
      "Comprehensive SOC operations, fraud detection, and compliance monitoring for banks, insurance companies, and fintech platforms.",
  },
  {
    title: "Healthcare Organizations",
    description:
      "HIPAA-compliant security monitoring, patient data protection, and medical device security for hospitals and healthcare providers.",
  },
  {
    title: "E-commerce & Retail",
    description:
      "PCI DSS compliance, payment security monitoring, and customer data protection for online retailers and payment processors.",
  },
  {
    title: "SaaS & Technology",
    description:
      "Cloud security monitoring, DevSecOps integration, and multi-tenant security for software and technology companies.",
  },
  {
    title: "Manufacturing & OT",
    description:
      "Industrial control system security, operational technology monitoring, and supply chain protection for manufacturers.",
  },
  {
    title: "Government & Critical Infrastructure",
    description:
      "Mission-critical security operations, advanced threat defense, and regulatory compliance for government and critical sectors.",
  },
];

const engagementTiers = [
  {
    title: "Essential SOC",
    description:
      "Core security monitoring with 24/7 threat detection, basic incident response, and monthly reporting for growing organizations.",
    bullets: ["24/7 monitoring", "Basic SIEM", "Incident alerts", "Monthly reports"],
  },
  {
    title: "Advanced SOC",
    description:
      "Comprehensive security operations with MDR, threat hunting, vulnerability management, and dedicated security analysts.",
    bullets: ["Full SOC coverage", "Threat hunting", "Vuln management", "Dedicated analysts"],
  },
  {
    title: "Enterprise Security",
    description:
      "Complete security program with on-site engineers, advanced threat intelligence, compliance management, and executive reporting.",
    bullets: ["On-site engineers", "Threat intel", "Compliance support", "Executive reports"],
  },
];

const securityServices = [
  {
    title: "Security Operations Center (SOC)",
    desc: "Centralized 24/7 monitoring of logs, endpoints, networks, and cloud infrastructure using SIEM and SOAR platforms.",
  },
  {
    title: "Managed Detection & Response (MDR)",
    desc: "Advanced behavioral analytics and human-led threat hunting to contain sophisticated attacks before business impact.",
  },
  {
    title: "Vulnerability Management",
    desc: "Continuous scanning, risk scoring, remediation planning, and patch validation to reduce exploitable attack surface.",
  },
  {
    title: "Threat Intelligence & Hunting",
    desc: "Correlation of global threat feeds, dark-web intelligence, and internal telemetry to proactively identify adversaries.",
  },
  {
    title: "Incident Response Services",
    desc: "Rapid containment, forensic analysis, and remediation of security incidents with minimal operational disruption.",
  },
  {
    title: "Compliance & Risk Management",
    desc: "Gap assessments, audit support, documentation, and continuous control validation for regulatory frameworks.",
  },
  {
    title: "Cloud Security Monitoring",
    desc: "Multi-cloud security operations covering AWS, Azure, and GCP with cloud-native threat detection and response.",
  },
  {
    title: "Endpoint Protection Management",
    desc: "EDR/XDR deployment, configuration, tuning, and 24/7 monitoring with automated response capabilities.",
  },
  {
    title: "Security Engineering Services",
    desc: "On-site security engineers for architecture hardening, tool deployment, incident recovery, and maturity uplift.",
  },
];

const coreResponsibilities = [
  {
    category: "Monitor & Detect",
    items: [
      "24/7 security event monitoring and log analysis",
      "Real-time threat detection and anomaly identification",
      "Security information and event management (SIEM)",
      "Endpoint detection and response (EDR/XDR) monitoring",
    ],
  },
  {
    category: "Analyze & Hunt",
    items: [
      "Threat intelligence integration and correlation",
      "Proactive threat hunting and behavioral analysis",
      "Security event triage and investigation",
      "Advanced persistent threat (APT) detection",
    ],
  },
  {
    category: "Respond & Remediate",
    items: [
      "Incident response coordination and containment",
      "Forensic analysis and root cause investigation",
      "Threat remediation and system recovery",
      "Post-incident reporting and lessons learned",
    ],
  },
  {
    category: "Optimize & Report",
    items: [
      "Vulnerability management and patch coordination",
      "Security posture assessments and recommendations",
      "Compliance monitoring and audit support",
      "Executive reporting and KPI dashboards",
    ],
  },
];

const faqs = [
  {
    question: "What is included in Managed Security Services?",
    answer:
      "Our Managed Security Services provide comprehensive protection including 24/7 Security Operations Center (SOC) monitoring, SIEM and SOAR platform management, endpoint detection and response (EDR/XDR), vulnerability management, threat intelligence and hunting, incident response, compliance monitoring, and on-site security engineering support. We act as an extension of your internal IT team, providing enterprise-grade security operations tailored to your organization's risk profile and business requirements.",
  },
  {
    question: "How quickly can you respond to security incidents?",
    answer:
      "Our Security Operations Center operates 24/7/365 with dedicated security analysts monitoring your environment continuously. For critical security incidents, our average response time is under 15 minutes from initial alert to analyst engagement. We follow established incident response playbooks to rapidly contain threats, conduct forensic analysis, and coordinate remediation activities. For enterprise tier clients, we provide immediate escalation to senior security engineers and can deploy on-site incident response teams within hours if needed.",
  },
  {
    question: "What technologies and tools do you use?",
    answer:
      "We leverage industry-leading security technologies including SIEM platforms (Splunk, QRadar, Sentinel), SOAR automation tools, EDR/XDR solutions (CrowdStrike, SentinelOne, Microsoft Defender), vulnerability scanners (Tenable, Qualys, Rapid7), threat intelligence platforms, and cloud security tools for AWS, Azure, and GCP. We also integrate with your existing security infrastructure and can recommend technology improvements based on your security maturity and budget. All tools are managed, tuned, and optimized by our security engineers.",
  },
  {
    question: "How do you handle compliance requirements?",
    answer:
      "We provide comprehensive compliance support including continuous monitoring against regulatory frameworks (ISO 27001, SOC 2, PCI DSS, HIPAA, GDPR, NIST), gap assessments, control validation, audit documentation, and evidence collection. Our security analysts track compliance-related events, generate required reports, and maintain audit trails. We also provide quarterly compliance reviews, support external audits, and help maintain security certifications. Custom compliance frameworks can be accommodated based on your industry requirements.",
  },
  {
    question: "What is the difference between SOC and MDR services?",
    answer:
      "Security Operations Center (SOC) provides 24/7 monitoring, log analysis, alert triage, and basic incident response using SIEM and security tools. Managed Detection and Response (MDR) adds advanced threat hunting, behavioral analytics, deep forensic investigation, and proactive threat containment. MDR includes dedicated threat hunters who actively search for sophisticated attacks that may evade traditional detection. We recommend MDR for organizations facing advanced persistent threats, handling sensitive data, or requiring defense-in-depth security operations.",
  },
  {
    question: "Can you integrate with our existing security tools?",
    answer:
      "Yes, we integrate with your existing security infrastructure including firewalls, intrusion detection systems, endpoint protection, cloud security tools, identity management platforms, and ticketing systems. Our security engineers conduct a thorough technology assessment during onboarding, establish API integrations, configure log forwarding, and ensure seamless data flow into our SIEM platform. We can also provide recommendations for tool consolidation or upgrades based on your security architecture and operational needs.",
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

const IconUsers = ({ className }) => (
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
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
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

/* ===================== SECURITY ILLUSTRATION ===================== */

const SecurityIllustration = () => (
  <svg viewBox="0 0 420 340" className="h-full w-full" aria-hidden="true">
    <defs>
      <linearGradient id="security-panel" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.2" />
      </linearGradient>
      <linearGradient id="security-pulse" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#0ea5e9" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
    </defs>
    
    {/* Central SOC emblem */}
    <rect x="150" y="90" width="120" height="140" rx="14" fill="url(#security-panel)" stroke="#0ea5e9" strokeOpacity="0.5" strokeWidth="2" />
    
    {/* SOC text */}
    <text x="210" y="130" fontSize="20" fill="#06b6d4" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">24/7</text>
    <text x="210" y="150" fontSize="20" fill="#06b6d4" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">SOC</text>
    
    {/* Shield badge */}
    <circle cx="210" cy="200" r="18" fill="url(#security-pulse)" fillOpacity="0.3" stroke="#06b6d4" strokeWidth="2.5" />
    <path d="M210 192l5 3v7c0 3-2 5-5 6-3-1-5-3-5-6v-7l5-3z" fill="#06b6d4" />
    <path d="M207 199l2 2 3-3" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    
    {/* Security capabilities */}
    <circle cx="70" cy="110" r="28" fill="url(#security-pulse)" fillOpacity="0.2" stroke="#0ea5e9" strokeWidth="2" />
    <text x="70" y="105" fontSize="8" fill="#0ea5e9" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">MONITOR</text>
    <text x="70" y="118" fontSize="8" fill="#0ea5e9" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">& DETECT</text>
    
    <circle cx="350" cy="110" r="28" fill="url(#security-pulse)" fillOpacity="0.2" stroke="#0ea5e9" strokeWidth="2" />
    <text x="350" y="105" fontSize="8" fill="#0ea5e9" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">THREAT</text>
    <text x="350" y="118" fontSize="8" fill="#0ea5e9" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">HUNTING</text>
    
    <circle cx="70" cy="230" r="28" fill="url(#security-pulse)" fillOpacity="0.2" stroke="#0ea5e9" strokeWidth="2" />
    <text x="70" y="225" fontSize="8" fill="#0ea5e9" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">INCIDENT</text>
    <text x="70" y="238" fontSize="8" fill="#0ea5e9" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">RESPONSE</text>
    
    <circle cx="350" cy="230" r="28" fill="url(#security-pulse)" fillOpacity="0.2" stroke="#0ea5e9" strokeWidth="2" />
    <text x="350" y="225" fontSize="8" fill="#0ea5e9" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">COMPLIANCE</text>
    <text x="350" y="238" fontSize="8" fill="#0ea5e9" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">REPORTING</text>
    
    {/* Connection lines */}
    <path d="M98 110h30M278 110h45M98 230h30M278 230h45" stroke="#94a3b8" strokeOpacity="0.4" strokeWidth="2" />
    <path d="M130 130l-30 80M130 210l-30-80M290 130l30 80M290 210l30-80" stroke="#94a3b8" strokeOpacity="0.3" strokeDasharray="4 6" strokeWidth="2" />
    
    {/* Metrics */}
    <circle cx="185" cy="65" r="2.5" fill="#06b6d4" />
    <circle cx="210" cy="55" r="2.5" fill="#06b6d4" />
    <circle cx="235" cy="65" r="2.5" fill="#06b6d4" />
    <text x="210" y="40" fontSize="8" fill="#06b6d4" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">99.9% UPTIME</text>
    
    {/* Security layers */}
    <circle cx="210" cy="270" r="3" fill="#06b6d4" />
    <circle cx="195" cy="280" r="2.5" fill="#0ea5e9" />
    <circle cx="225" cy="280" r="2.5" fill="#0ea5e9" />
    <text x="210" y="300" fontSize="9" fill="#94a3b8" fontFamily="sans-serif" textAnchor="middle">Protected Assets</text>
  </svg>
);

/* ===================== PAGE COMPONENT ===================== */

export default function ManagedSecurityPage() {
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
          <div className="absolute -left-24 top-16 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        </div>

        <Container className="relative z-10 flex min-h-[86vh] flex-col justify-center">
          <motion.div variants={fadeUp} className="max-w-3xl">
            <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
              Managed Cyber Defense
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              Managed Security Services
            </h1>
            <p className="mt-4 text-lg text-white/85 md:text-xl">
              From security operations to on-site management, we provide continuous, enterprise-grade protection for your digital assets.
            </p>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              24/7 SOC monitoring, threat hunting, incident response, and compliance management with expert security operations teams.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/contact"
                aria-label="Start Your Security Journey"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <motion.span
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  whileTap={reduceMotion ? undefined : { y: 0 }}
                  className="inline-flex items-center"
                >
                  Start Your Security Journey
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
              title="Enterprise-grade security operations."
              subtitle="Comprehensive security monitoring and threat defense for organizations across all industries and verticals."
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
              title="Aligned with industry security standards."
              subtitle="Expert security operations across ISO, SOC2, GDPR, PCI DSS, and industry-specific compliance frameworks."
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
              title="Managed Security Operations Framework"
              subtitle="A comprehensive security operations model spanning deployment, monitoring, analysis, response, and continuous optimization."
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
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">Security operations lifecycle</h3>
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
              title="Our Managed Security Capabilities"
              subtitle="Comprehensive security operations from SOC monitoring to on-site security engineering support."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {securityServices.map((item) => (
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
                title="Why Choose Managed Security Services"
                subtitle="End-to-end security operations with continuous monitoring, threat detection, and expert incident response."
              />
              <div className="mt-8">
                <div className="relative rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-900/70">
                  <div className="pointer-events-none absolute -inset-1 rounded-[22px] bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-transparent opacity-70" />
                  <div className="relative overflow-hidden rounded-2xl bg-slate-950/5 p-4 dark:bg-slate-950">
                    <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-cyan-500/20 blur-2xl" />
                    <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-blue-500/20 blur-2xl" />
                    <img
                      src="/assets/services/vapt.jpg"
                      alt="Managed Security Services"
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
      <Section className="bg-white dark:bg-slate-950">
        <Container>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
          >
            <SectionHeader
              eyebrow="Process"
              title="How Our Managed Security Services Work"
              subtitle="A structured security operations framework with continuous monitoring, threat detection, incident response, and optimization."
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
      <Section className="bg-slate-50 dark:bg-slate-950/70">
        <Container>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
          >
            <SectionHeader
              eyebrow="Why Vulnuris"
              title="Trusted security operations expertise since 2017."
              subtitle="We've protected organizations across UAE, GCC, and international markets with enterprise-grade security operations."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Expert security operations",
                  description: "Certified security analysts and engineers with deep expertise in SIEM, SOAR, EDR/XDR, and threat intelligence platforms.",
                  Icon: IconShield,
                },
                {
                  title: "Multi-industry experience",
                  description: "Comprehensive SOC services across financial services, healthcare, technology, retail, and critical infrastructure sectors.",
                  Icon: IconUsers,
                },
                {
                  title: "Proactive threat defense",
                  description: "Advanced threat hunting, behavioral analytics, and continuous security optimization to stay ahead of emerging threats.",
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
      <Section className="bg-white dark:bg-slate-950">
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
              subtitle="Comprehensive security operations coverage, monitoring, threat detection, and incident response capabilities."
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
      <Section className="bg-slate-50 dark:bg-slate-950/70">
        <Container>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
          >
            <SectionHeader
              eyebrow="Industry Applications"
              title="Managed security for diverse sectors."
              subtitle="Tailored security operations for financial services, healthcare, technology, and critical infrastructure."
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
      <Section className="bg-white dark:bg-slate-950">
        <Container>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
          >
            <SectionHeader
              eyebrow="Engagement Options"
              title="Flexible security programs for every organizational need."
              subtitle="Choose from essential, advanced, or enterprise security operations based on your requirements."
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
      <Section className="bg-slate-50 dark:bg-slate-950/70">
        <Container>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-120px" }}>
            <SectionHeader
              eyebrow="FAQ"
              title="Common questions about managed security services."
              subtitle="Clear answers to help you understand security operations, SOC capabilities, and service delivery."
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
      <Section className="bg-white dark:bg-slate-950">
        <Container>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            className="rounded-3xl border border-slate-200/70 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 px-6 py-10 text-center text-white shadow-xl dark:border-slate-800/70"
          >
            <h2 className="text-3xl font-semibold md:text-4xl">
              Protect Your Business with Expert Managed Security
            </h2>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Focus on your core operations while we continuously protect, monitor, and defend your infrastructure.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                aria-label="Start Your Security Journey"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Start Your Security Journey
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
            Secure your business today
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