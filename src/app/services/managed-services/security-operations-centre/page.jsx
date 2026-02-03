"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

/* ===================== DATA ===================== */

const painPoints = [
  "Struggling with 24/7 security monitoring?",
  "Need expert threat detection and response?",
  "Concerned about cyber attacks and breaches?",
];

const outcomes = [
  {
    title: "Continuous Threat Monitoring",
    description:
      "24/7/365 security monitoring of networks, endpoints, servers, cloud platforms, and applications using advanced SIEM and analytics.",
  },
  {
    title: "Rapid Incident Response",
    description:
      "Automated alerting combined with human-led investigation to rapidly contain malware, intrusions, and data exfiltration attempts.",
  },
  {
    title: "Proactive Threat Hunting",
    description:
      "Expert threat hunters proactively identify hidden attackers using behavioral analytics and adversary simulation techniques.",
  },
  {
    title: "Compliance & Reporting",
    description:
      "Centralized log management, forensic analysis, executive dashboards, and compliance reporting for regulatory requirements.",
  },
];

const complianceBadges = [
  "24/7 Monitoring",
  "SIEM",
  "Threat Hunting",
  "Incident Response",
  "Forensics",
  "SOC Operations",
];

const methodology = [
  {
    title: "Deploy - SOC Infrastructure Setup",
    description:
      "Implementation of SIEM platforms, security monitoring tools, log aggregation, and integration with existing IT infrastructure.",
  },
  {
    title: "Monitor - Continuous Threat Detection",
    description:
      "Real-time monitoring of security events, network traffic analysis, endpoint monitoring, and automated threat detection across all assets.",
  },
  {
    title: "Analyze - Threat Intelligence & Investigation",
    description:
      "Security event triage, threat intelligence correlation, behavioral analysis, and deep investigation of suspicious activities.",
  },
  {
    title: "Respond - Incident Containment & Remediation",
    description:
      "Rapid incident response workflows, threat containment procedures, forensic analysis, and coordinated remediation activities.",
  },
  {
    title: "Optimize - Security Posture Improvement",
    description:
      "Regular security assessments, vulnerability coordination, process refinement, and continuous SOC maturity enhancement.",
  },
];

const processSteps = [
  { title: "Deploy", description: "SOC infrastructure setup." },
  { title: "Monitor", description: "Continuous threat detection." },
  { title: "Analyze", description: "Threat intelligence & investigation." },
  { title: "Respond", description: "Incident containment & remediation." },
  { title: "Optimize", description: "Security posture improvement." },
];

const socCapabilities = [
  {
    title: "Security Monitoring",
    items: ["24/7 operations", "SIEM platforms", "Real-time alerts", "Log analysis"],
  },
  {
    title: "Threat Detection",
    items: ["Behavioral analytics", "Threat intelligence", "Anomaly detection", "Pattern recognition"],
  },
  {
    title: "Incident Response",
    items: ["Rapid containment", "Forensic analysis", "Root cause analysis", "Remediation"],
  },
  {
    title: "Reporting & Compliance",
    items: ["Executive dashboards", "Trend analysis", "Audit trails", "Compliance reports"],
  },
];

const deliverables = [
  "24/7 security operations center monitoring",
  "SIEM platform deployment and management",
  "Real-time threat detection and alerting",
  "Security event correlation and analysis",
  "Incident response playbooks and procedures",
  "Threat hunting and behavioral analytics",
  "Log management and centralized aggregation",
  "Forensic analysis and evidence collection",
  "Vulnerability coordination with IT teams",
  "Monthly security posture reports",
  "Executive dashboards and KPI tracking",
  "Compliance audit support and documentation",
];

const useCases = [
  {
    title: "Financial Services & Banking",
    description:
      "24/7 SOC operations for fraud detection, transaction monitoring, and regulatory compliance in banking and financial institutions.",
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
    title: "Technology & SaaS",
    description:
      "Cloud security monitoring, application security, and multi-tenant protection for software and technology companies.",
  },
  {
    title: "Manufacturing & Industrial",
    description:
      "OT security monitoring, industrial control system protection, and supply chain security for manufacturing organizations.",
  },
  {
    title: "Government & Critical Infrastructure",
    description:
      "Mission-critical security operations, advanced threat defense, and regulatory compliance for government agencies.",
  },
];

const engagementTiers = [
  {
    title: "SOC Essentials",
    description:
      "Core security monitoring with 24/7 threat detection, basic incident response, SIEM management, and monthly reporting.",
    bullets: ["24/7 monitoring", "Basic SIEM", "Incident alerts", "Monthly reports"],
  },
  {
    title: "Advanced SOC",
    description:
      "Comprehensive SOC operations with threat hunting, behavioral analytics, forensic analysis, and dedicated security analysts.",
    bullets: ["Threat hunting", "Forensics", "Dedicated analysts", "Weekly reports"],
  },
  {
    title: "Enterprise SOC",
    description:
      "Complete security operations with on-site analysts, advanced threat intelligence, custom playbooks, and executive reporting.",
    bullets: ["On-site team", "Custom playbooks", "Threat intel", "Executive reports"],
  },
];

const socServices = [
  {
    title: "Real-Time Security Monitoring",
    desc: "Continuous monitoring of network traffic, endpoints, servers, cloud platforms, and applications using advanced SIEM tooling.",
  },
  {
    title: "Incident Detection & Response",
    desc: "Automated alerting combined with human-led investigation to rapidly contain malware, intrusions, and data exfiltration attempts.",
  },
  {
    title: "Threat Hunting",
    desc: "Proactive identification of hidden attackers using behavioral analytics and adversary simulation techniques.",
  },
  {
    title: "Log Management & Forensics",
    desc: "Centralized log correlation, evidence collection, and forensic analysis for compliance and post-incident reporting.",
  },
  {
    title: "Vulnerability Coordination",
    desc: "Direct collaboration with IT teams to remediate discovered vulnerabilities and reduce future risk exposure.",
  },
  {
    title: "Security Intelligence & Analytics",
    desc: "Advanced threat intelligence integration, security event correlation, and predictive analytics for proactive defense.",
  },
  {
    title: "Compliance Monitoring",
    desc: "Continuous compliance monitoring, audit trail management, and regulatory reporting for industry frameworks.",
  },
  {
    title: "Executive Security Reporting",
    desc: "Clear dashboards and periodic reports detailing incidents, trends, and overall security posture for leadership.",
  },
  {
    title: "SOC Setup & Optimization",
    desc: "Development of on-site or off-site Security Operations Centres with continuous process improvement and maturity enhancement.",
  },
];

const coreResponsibilities = [
  {
    category: "Monitor & Detect",
    items: [
      "24/7 security event monitoring across all assets",
      "Real-time threat detection and automated alerting",
      "SIEM platform management and log correlation",
      "Network traffic analysis and anomaly detection",
    ],
  },
  {
    category: "Investigate & Hunt",
    items: [
      "Security event triage and investigation",
      "Proactive threat hunting and behavioral analysis",
      "Threat intelligence integration and correlation",
      "Advanced persistent threat (APT) detection",
    ],
  },
  {
    category: "Respond & Remediate",
    items: [
      "Rapid incident response and threat containment",
      "Forensic analysis and evidence collection",
      "Root cause investigation and remediation coordination",
      "Post-incident reporting and lessons learned",
    ],
  },
  {
    category: "Report & Optimize",
    items: [
      "Executive dashboards and security KPI tracking",
      "Monthly security posture reports and trend analysis",
      "Compliance audit support and documentation",
      "SOC process optimization and maturity improvement",
    ],
  },
];

const faqs = [
  {
    question: "What is a Security Operations Centre (SOC)?",
    answer:
      "A Security Operations Centre (SOC) is a centralized cybersecurity unit staffed with skilled security professionals who use advanced tools to continuously monitor your IT infrastructure 24/7. The SOC team detects threats, investigates security incidents, responds to attacks, and protects your digital assets from cyber threats. It acts as your organization's nerve center for cybersecurity, combining people, processes, and technology to defend against modern cyber attacks and data breaches.",
  },
  {
    question: "Why does my organization need a SOC?",
    answer:
      "Organizations need a SOC for several critical reasons: (1) Cyber threats operate 24/7 and can cause significant damage in minutes, requiring continuous monitoring, (2) Early detection of attacks prevents data breaches and reduces financial losses, (3) Expert security analysts provide faster and more effective incident response than traditional IT teams, (4) SOC operations protect brand reputation and customer trust, (5) Compliance frameworks often require continuous security monitoring and incident response capabilities. A SOC provides enterprise-grade security without the cost of building an in-house security team.",
  },
  {
    question: "How quickly can your SOC respond to security incidents?",
    answer:
      "Our Security Operations Centre operates 24/7/365 with dedicated security analysts continuously monitoring your environment. For critical security alerts, our average response time is under 15 minutes from initial detection to analyst engagement. We follow established incident response playbooks to rapidly triage, investigate, contain, and remediate threats. Our SOC uses automated alerting, SIEM correlation, and human expertise to ensure fast and effective response. For high-severity incidents, we immediately escalate to senior analysts and can coordinate with your IT teams for containment.",
  },
  {
    question: "What technologies does your SOC use?",
    answer:
      "Our SOC leverages industry-leading security technologies including SIEM platforms (Splunk, QRadar, Microsoft Sentinel), log management tools, endpoint detection and response (EDR) solutions, network traffic analysis (NTA) systems, threat intelligence platforms, security orchestration and automated response (SOAR) tools, and behavioral analytics engines. We integrate with your existing security infrastructure including firewalls, IDS/IPS, antivirus, cloud security tools, and identity management systems. All tools are managed, tuned, and optimized by our security engineers.",
  },
  {
    question: "What kind of reporting does your SOC provide?",
    answer:
      "We provide comprehensive security reporting at multiple levels: (1) Real-time alerts for critical security incidents requiring immediate action, (2) Daily summaries of security events and analyst activities, (3) Weekly reports on threat trends and security posture, (4) Monthly executive reports with KPIs, metrics, security trends, and improvement recommendations, (5) Quarterly security posture assessments and compliance reports, (6) Ad-hoc incident reports with forensic analysis and remediation steps. All reports are customized to your organization's needs and include clear visualizations through executive dashboards.",
  },
  {
    question: "Can you integrate with our existing security tools?",
    answer:
      "Yes, our SOC integrates seamlessly with your existing security infrastructure. We connect with firewalls, intrusion detection/prevention systems, endpoint protection platforms, cloud security tools, identity management systems, ticketing systems, and other security solutions. During onboarding, our engineers conduct a technology assessment, establish API integrations, configure log forwarding to our SIEM, and ensure complete visibility across your environment. We can also recommend tool consolidation or upgrades to improve your security architecture and reduce operational complexity.",
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

/* ===================== SOC ILLUSTRATION ===================== */

const SOCIllustration = () => (
  <svg viewBox="0 0 420 340" className="h-full w-full" aria-hidden="true">
    <defs>
      <linearGradient id="soc-panel" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.2" />
      </linearGradient>
      <linearGradient id="soc-pulse" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#0ea5e9" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
    </defs>
    
    {/* Central SOC command center */}
    <rect x="150" y="90" width="120" height="140" rx="14" fill="url(#soc-panel)" stroke="#0ea5e9" strokeOpacity="0.5" strokeWidth="2" />
    
    {/* SOC text */}
    <text x="210" y="125" fontSize="18" fill="#06b6d4" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">SECURITY</text>
    <text x="210" y="145" fontSize="18" fill="#06b6d4" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">OPERATIONS</text>
    <text x="210" y="165" fontSize="18" fill="#06b6d4" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">CENTRE</text>
    
    {/* 24/7 badge */}
    <circle cx="210" cy="200" r="18" fill="url(#soc-pulse)" fillOpacity="0.3" stroke="#06b6d4" strokeWidth="2.5" />
    <text x="210" y="207" fontSize="12" fill="#06b6d4" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">24/7</text>
    
    {/* Four SOC functions */}
    <circle cx="70" cy="110" r="28" fill="url(#soc-pulse)" fillOpacity="0.2" stroke="#0ea5e9" strokeWidth="2" />
    <text x="70" y="105" fontSize="8" fill="#0ea5e9" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">MONITOR</text>
    <text x="70" y="118" fontSize="8" fill="#0ea5e9" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">& DETECT</text>
    
    <circle cx="350" cy="110" r="28" fill="url(#soc-pulse)" fillOpacity="0.2" stroke="#0ea5e9" strokeWidth="2" />
    <text x="350" y="105" fontSize="8" fill="#0ea5e9" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">THREAT</text>
    <text x="350" y="118" fontSize="8" fill="#0ea5e9" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">HUNTING</text>
    
    <circle cx="70" cy="230" r="28" fill="url(#soc-pulse)" fillOpacity="0.2" stroke="#0ea5e9" strokeWidth="2" />
    <text x="70" y="225" fontSize="8" fill="#0ea5e9" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">INCIDENT</text>
    <text x="70" y="238" fontSize="8" fill="#0ea5e9" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">RESPONSE</text>
    
    <circle cx="350" cy="230" r="28" fill="url(#soc-pulse)" fillOpacity="0.2" stroke="#0ea5e9" strokeWidth="2" />
    <text x="350" y="225" fontSize="8" fill="#0ea5e9" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">FORENSICS</text>
    <text x="350" y="238" fontSize="8" fill="#0ea5e9" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">& REPORTS</text>
    
    {/* Connection lines */}
    <path d="M98 110h30M278 110h45M98 230h30M278 230h45" stroke="#94a3b8" strokeOpacity="0.4" strokeWidth="2" />
    <path d="M130 130l-30 80M130 210l-30-80M290 130l30 80M290 210l30-80" stroke="#94a3b8" strokeOpacity="0.3" strokeDasharray="4 6" strokeWidth="2" />
    
    {/* SIEM indicator */}
    <circle cx="185" cy="65" r="2.5" fill="#06b6d4" />
    <circle cx="210" cy="55" r="2.5" fill="#06b6d4" />
    <circle cx="235" cy="65" r="2.5" fill="#06b6d4" />
    <text x="210" y="40" fontSize="8" fill="#06b6d4" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">SIEM POWERED</text>
    
    {/* Protected assets */}
    <circle cx="210" cy="270" r="3" fill="#06b6d4" />
    <circle cx="195" cy="280" r="2.5" fill="#0ea5e9" />
    <circle cx="225" cy="280" r="2.5" fill="#0ea5e9" />
    <text x="210" y="300" fontSize="9" fill="#94a3b8" fontFamily="sans-serif" textAnchor="middle">Protected Assets</text>
  </svg>
);

/* ===================== PAGE COMPONENT ===================== */

export default function SOCPage() {
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
              Security Monitoring 24×7
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              Security Operations Centre (SOC)
            </h1>
            <p className="mt-4 text-lg text-white/85 md:text-xl">
              A dedicated team of security professionals working 24×7 to monitor, detect, and stop cyber attacks before they cause damage.
            </p>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Expert SOC operations with SIEM platforms, threat hunting, incident response, and continuous security monitoring.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/contact?subject=Security%20Opeartions%20Centre"
                aria-label="Get Started"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <motion.span
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  whileTap={reduceMotion ? undefined : { y: 0 }}
                  className="inline-flex items-center"
                >
                  Get Started
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
              title="Enterprise-grade SOC operations."
              subtitle="Expert security operations center services for continuous monitoring, threat detection, and rapid incident response."
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
              eyebrow="SOC Capabilities"
              title="Comprehensive security operations coverage."
              subtitle="Expert SOC services with 24/7 monitoring, SIEM platforms, threat hunting, and incident response capabilities."
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
              title="Security Operations Centre Framework"
              subtitle="A comprehensive SOC operations model spanning deployment, monitoring, analysis, response, and continuous optimization."
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
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">SOC operations lifecycle</h3>
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
              title="Inside Our Security Operations Centre"
              subtitle="Fully operational, intelligence-driven SOC delivering continuous monitoring, rapid incident response, and proactive cyber defense."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {socServices.map((item) => (
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
                eyebrow="Why SOC Matters"
                title="Why Your Organization Needs a SOC"
                subtitle="Continuous security monitoring, early threat detection, and expert incident response to protect your digital assets."
              />
              <div className="mt-8">
                <div className="relative rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-900/70">
                  <div className="pointer-events-none absolute -inset-1 rounded-[22px] bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-transparent opacity-70" />
                  <div className="relative overflow-hidden rounded-2xl bg-slate-950/5 p-4 dark:bg-slate-950">
                    <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-cyan-500/20 blur-2xl" />
                    <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-blue-500/20 blur-2xl" />
                    <img
                      src="/assets/services/soc.jpg"
                      alt="Security Operations Centre"
                      className="w-full rounded-xl shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="grid gap-4">
                {socCapabilities.map((capability) => (
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
              title="How Our SOC Protects You"
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
              title="Trusted SOC expertise since 2017."
              subtitle="We've protected organizations across UAE, GCC, and international markets with enterprise-grade security operations."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Expert security analysts",
                  description: "Certified SOC analysts and incident responders with deep expertise in SIEM platforms, threat hunting, and forensic analysis.",
                  Icon: IconShield,
                },
                {
                  title: "Multi-industry experience",
                  description: "Comprehensive SOC services across financial services, healthcare, technology, retail, and critical infrastructure sectors.",
                  Icon: IconUsers,
                },
                {
                  title: "Proactive threat defense",
                  description: "Advanced threat hunting, behavioral analytics, and continuous SOC optimization to stay ahead of emerging threats.",
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
              subtitle="Comprehensive SOC coverage, monitoring, threat detection, and incident response capabilities."
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
              title="SOC services for diverse sectors."
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
              title="Flexible SOC programs for every organizational need."
              subtitle="Choose from essential, advanced, or enterprise SOC services based on your requirements."
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
              title="Common questions about SOC services."
              subtitle="Clear answers to help you understand security operations center capabilities and service delivery."
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
              Your Free SOC Consultation is One Click Away
            </h2>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Book a consultation to get personalized SOC recommendations for your business.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact?subject=Security%20Opeartions%20Centre"
                aria-label="Book Now"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Book Now
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
            Start your SOC today
          </div>
          <Link
            href="/contact?subject=Security%20Opeartions%20Centre"
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