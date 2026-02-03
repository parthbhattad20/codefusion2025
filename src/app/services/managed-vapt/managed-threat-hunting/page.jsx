"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

/* ===================== DATA ===================== */

const painPoints = [
  "Missing advanced threats with traditional tools?",
  "Need proactive threat detection capabilities?",
  "Concerned about unknown attacker presence?",
];

const outcomes = [
  {
    title: "Early Threat Detection",
    description:
      "Proactively identify advanced persistent threats, insider threats, and sophisticated attackers before they cause damage to your organization.",
  },
  {
    title: "Reduced Dwell Time",
    description:
      "Minimize the time attackers remain undetected in your environment from industry average of 200+ days to under 24 hours.",
  },
  {
    title: "Faster Incident Response",
    description:
      "Accelerate threat containment and remediation with immediate actionable intelligence and expert-led investigation support.",
  },
  {
    title: "Improved Security Posture",
    description:
      "Continuously strengthen defenses through threat intelligence insights, detection rule optimization, and security gap identification.",
  },
];

const complianceBadges = [
  "24/7 Hunting",
  "MITRE ATT&CK",
  "Threat Intel",
  "Behavioral Analytics",
  "Expert Led",
  "Zero-Day Detection",
];

const methodology = [
  {
    title: "Hypothesis Development",
    description:
      "Create threat hypotheses based on intelligence feeds, vulnerability disclosures, attack patterns, and organizational risk profile to guide hunting missions.",
  },
  {
    title: "Data Collection & Analysis",
    description:
      "Aggregate telemetry from endpoints, networks, cloud platforms, and applications for comprehensive behavioral analysis and anomaly detection.",
  },
  {
    title: "Hunting Execution",
    description:
      "Conduct systematic searches using MITRE ATT&CK framework, behavioral analytics, and custom detection logic to uncover hidden threats.",
  },
  {
    title: "Threat Investigation",
    description:
      "Deep-dive forensic analysis to validate findings, determine scope of compromise, identify indicators of compromise, and assess business impact.",
  },
  {
    title: "Containment & Remediation",
    description:
      "Coordinate rapid response actions including threat isolation, artifact collection, attacker eviction, and system recovery with minimal disruption.",
  },
  {
    title: "Intelligence & Optimization",
    description:
      "Document findings, update threat intelligence, improve detection rules, and enhance security controls based on hunting discoveries.",
  },
];

const processSteps = [
  { title: "Hypothesize", description: "Develop threat scenarios." },
  { title: "Collect", description: "Gather telemetry data." },
  { title: "Hunt", description: "Search for threats." },
  { title: "Investigate", description: "Validate findings." },
  { title: "Respond", description: "Contain and remediate." },
];

const huntingCapabilities = [
  {
    title: "Detection Methods",
    items: ["Behavioral analytics", "Anomaly detection", "Pattern matching", "Threat intel"],
  },
  {
    title: "Data Sources",
    items: ["Endpoint telemetry", "Network traffic", "Cloud logs", "Auth events"],
  },
  {
    title: "Hunting Focus",
    items: ["APTs", "Insider threats", "Lateral movement", "Data exfiltration"],
  },
  {
    title: "Frameworks",
    items: ["MITRE ATT&CK", "Cyber Kill Chain", "Diamond Model", "TTP mapping"],
  },
];

const threatHuntingServices = [
  {
    title: "Advanced Persistent Threat (APT) Hunting",
    desc: "Proactive search for sophisticated nation-state actors, advanced malware, and long-term compromises using behavioral analytics.",
  },
  {
    title: "Insider Threat Detection",
    desc: "Identify malicious insiders, compromised accounts, and privilege abuse through user behavior analytics and anomaly detection.",
  },
  {
    title: "Lateral Movement Tracking",
    desc: "Detect attackers moving through your network by analyzing authentication patterns, network connections, and privilege escalation.",
  },
  {
    title: "Data Exfiltration Detection",
    desc: "Identify unauthorized data transfers, DNS tunneling, covert channels, and staged exfiltration through traffic analysis.",
  },
  {
    title: "Zero-Day Threat Hunting",
    desc: "Hunt for unknown exploits, novel attack techniques, and emerging threats using heuristic analysis and threat intelligence.",
  },
  {
    title: "Cloud Threat Hunting",
    desc: "Multi-cloud threat detection across AWS, Azure, and GCP focusing on misconfigurations, API abuse, and cloud-native attacks.",
  },
  {
    title: "Ransomware Hunting",
    desc: "Early detection of ransomware operators, encryption activities, and backup tampering before widespread damage occurs.",
  },
  {
    title: "Supply Chain Attack Detection",
    desc: "Identify compromised dependencies, malicious software updates, and third-party risks through software composition analysis.",
  },
  {
    title: "Threat Intelligence Integration",
    desc: "Leverage global threat feeds, dark web intelligence, and industry-specific indicators to prioritize hunting missions.",
  },
];

const coreResponsibilities = [
  {
    category: "Proactive Hunting",
    items: [
      "Hypothesis-driven threat hunting campaigns",
      "Behavioral anomaly analysis and investigation",
      "MITRE ATT&CK technique mapping and detection",
      "Custom hunting queries and detection logic",
    ],
  },
  {
    category: "Threat Investigation",
    items: [
      "Deep-dive forensic analysis of suspicious activity",
      "Indicator of Compromise (IOC) identification",
      "Attack timeline reconstruction and scoping",
      "Threat actor attribution and profiling",
    ],
  },
  {
    category: "Response Coordination",
    items: [
      "Rapid threat containment and isolation",
      "Incident response team coordination",
      "Remediation strategy development",
      "Post-hunt security recommendations",
    ],
  },
  {
    category: "Continuous Improvement",
    items: [
      "Detection rule optimization and tuning",
      "Threat intelligence feed integration",
      "Security gap identification and remediation",
      "Hunting playbook development and refinement",
    ],
  },
];

const deliverables = [
  "24/7 proactive threat hunting operations",
  "Hypothesis-driven hunting campaigns",
  "Behavioral anomaly detection and analysis",
  "MITRE ATT&CK framework-based detection",
  "Endpoint and network telemetry analysis",
  "Cloud environment threat hunting (AWS/Azure/GCP)",
  "Insider threat detection and investigation",
  "Advanced persistent threat (APT) hunting",
  "Threat intelligence integration and correlation",
  "Custom detection rule development",
  "Monthly threat hunting reports",
  "Executive threat landscape briefings",
];

const useCases = [
  {
    title: "Financial Services & Banking",
    description:
      "Detect advanced fraud schemes, account takeovers, insider trading, and nation-state attacks targeting financial infrastructure.",
  },
  {
    title: "Healthcare & Life Sciences",
    description:
      "Identify ransomware operators, medical device compromises, patient data theft, and research IP exfiltration attempts.",
  },
  {
    title: "Technology & SaaS",
    description:
      "Hunt for supply chain attacks, cloud infrastructure compromises, API abuse, and intellectual property theft targeting tech companies.",
  },
  {
    title: "Critical Infrastructure",
    description:
      "Detect nation-state actors, industrial espionage, operational technology threats, and attacks on essential services.",
  },
  {
    title: "Government & Defense",
    description:
      "Advanced threat hunting for APTs, espionage campaigns, insider threats, and adversaries targeting classified information.",
  },
  {
    title: "Retail & E-commerce",
    description:
      "Identify payment card theft, point-of-sale compromises, customer data breaches, and e-commerce fraud operations.",
  },
];

const engagementTiers = [
  {
    title: "Essential Hunting",
    description:
      "Quarterly threat hunting campaigns with hypothesis-driven searches, basic anomaly detection, and threat reports.",
    bullets: ["Quarterly hunts", "Basic detection", "Threat reports", "Email support"],
  },
  {
    title: "Advanced Hunting",
    description:
      "Monthly threat hunting with continuous monitoring, advanced analytics, custom detection rules, and dedicated hunters.",
    bullets: ["Monthly hunts", "24/7 monitoring", "Custom rules", "Dedicated hunters"],
  },
  {
    title: "Elite Threat Hunting",
    description:
      "Continuous threat hunting operations with real-time analysis, advanced threat intelligence, and embedded security team.",
    bullets: ["Continuous hunting", "Real-time analysis", "Threat intel", "Embedded team"],
  },
];

const faqs = [
  {
    question: "What is Managed Threat Hunting?",
    answer:
      "Managed Threat Hunting is a proactive security service where expert analysts actively search for hidden threats in your environment that have bypassed traditional security tools. Unlike reactive security monitoring that waits for alerts, threat hunting uses hypothesis-driven investigations, behavioral analysis, and threat intelligence to find sophisticated attackers before they cause damage. Our hunters analyze endpoint telemetry, network traffic, authentication logs, and cloud activity to detect advanced persistent threats, insider threats, and zero-day attacks.",
  },
  {
    question: "How is threat hunting different from SOC monitoring?",
    answer:
      "SOC monitoring is reactive—it responds to alerts from security tools. Threat hunting is proactive—it actively searches for threats that bypass automated detection. SOC analysts triage known threats, while threat hunters investigate unknown threats using hypotheses and behavioral analytics. Threat hunting focuses on advanced attackers who use sophisticated evasion techniques. Both services are complementary: SOC provides continuous monitoring and alert response, while threat hunting finds hidden threats that SOC tools miss. We recommend combining both for comprehensive security coverage.",
  },
  {
    question: "What tools and technologies do you use for threat hunting?",
    answer:
      "We use advanced SIEM platforms (Splunk, Sentinel, QRadar), endpoint detection and response (EDR/XDR) tools like CrowdStrike and SentinelOne, network traffic analysis platforms, and threat intelligence platforms. We leverage MITRE ATT&CK framework for detection logic, custom hunting queries in SPL/KQL, behavioral analytics engines, and machine learning models for anomaly detection. Our hunters also use open-source tools like Velociraptor, YARA, Sigma rules, and threat hunting frameworks. We integrate with your existing security stack and can recommend tool improvements.",
  },
  {
    question: "How quickly can you detect threats in our environment?",
    answer:
      "For continuous threat hunting (Elite tier), we can detect advanced threats within hours compared to the industry average of 200+ days. Monthly hunting campaigns (Advanced tier) typically reduce dwell time to under 30 days. Detection speed depends on threat sophistication, data quality, and hunting frequency. We prioritize high-risk threats like ransomware operators, lateral movement, and data exfiltration for immediate investigation. Critical findings trigger immediate alerts with containment recommendations. Our goal is to find attackers before they achieve their objectives.",
  },
  {
    question: "Can threat hunting help us meet compliance requirements?",
    answer:
      "Yes, proactive threat hunting demonstrates security due diligence for frameworks like PCI DSS, HIPAA, SOC 2, ISO 27001, and NIST. Regulators increasingly expect organizations to proactively search for threats rather than only responding to alerts. We provide detailed hunting reports, threat findings documentation, and evidence of continuous security improvement for auditors. Our MITRE ATT&CK mapping helps demonstrate coverage of attack techniques. Threat hunting also identifies compliance gaps and security control weaknesses that need remediation.",
  },
  {
    question: "What happens when you find a threat during hunting?",
    answer:
      "When we identify a confirmed threat, we immediately notify your security team with detailed findings including indicators of compromise (IOCs), attack scope, affected systems, and recommended containment actions. For critical threats, we provide real-time support to isolate attackers and prevent further damage. We conduct forensic analysis to determine root cause, document the attack timeline, and identify all compromised assets. After containment, we help with remediation planning, evidence collection for investigations, and security improvements to prevent recurrence. All findings are documented in detailed threat reports.",
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

const IconSearch = ({ className }) => (
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
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
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
      <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 dark:border-violet-400/20 dark:bg-violet-400/10 dark:text-violet-400">
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
  <span className="rounded-full border border-violet-200/70 bg-violet-50 px-3 py-1 text-xs font-medium text-violet-700 dark:border-violet-700/50 dark:bg-violet-900/30 dark:text-violet-300">
    {children}
  </span>
);

/* ===================== PAGE COMPONENT ===================== */

export default function ManagedThreatHuntingPage() {
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
          <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#8b5cf622_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf622_1px,transparent_1px)] bg-[size:90px_90px]" />
          <div className="absolute -left-24 top-16 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
          
          {/* Scan beam effect */}
          <motion.div
            className="absolute inset-y-0 w-[40%] bg-gradient-to-r from-transparent via-violet-500/10 to-transparent"
            animate={{ x: ["-40%", "140%"] }}
            transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <Container className="relative z-10 flex min-h-[86vh] flex-col justify-center">
          <motion.div variants={fadeUp} className="max-w-3xl">
            <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
              Cyber Defense Operations
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              Managed Threat Hunting
            </h1>
            <p className="mt-4 text-lg text-white/85 md:text-xl">
              Proactively detect, investigate, and eliminate advanced cyber threats before they impact your operations.
            </p>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Expert-led threat hunting with behavioral analytics, threat intelligence, and MITRE ATT&CK framework.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/contact?subject=Managed%20Threat%20Hunting"
                aria-label="Start Threat Hunting"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <motion.span
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  whileTap={reduceMotion ? undefined : { y: 0 }}
                  className="inline-flex items-center"
                >
                  Start Threat Hunting
                </motion.span>
              </Link>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12 max-w-4xl">
            <div className="grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80 backdrop-blur-sm md:grid-cols-3">
              {painPoints.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
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
              title="Proactive threat detection and elimination."
              subtitle="Expert-led hunting operations to identify advanced threats, reduce dwell time, and improve security posture."
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
                      <div className="rounded-full bg-violet-500/10 p-3 text-violet-600 dark:bg-violet-400/10 dark:text-violet-400">
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
              eyebrow="Capabilities"
              title="Advanced threat hunting capabilities."
              subtitle="Continuous hunting operations using behavioral analytics, threat intelligence, and MITRE ATT&CK framework."
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
              title="Threat Hunting Operations Model"
              subtitle="A structured framework to uncover stealthy threats that bypass traditional automated detection systems."
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
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">Threat hunting lifecycle</h3>
              <div className="relative mt-6">
                <div className="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-violet-300 to-transparent md:block dark:via-violet-700" />
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
                        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
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
              title="Our Managed Threat Hunting Capabilities"
              subtitle="Comprehensive threat detection from APT hunting to insider threats and zero-day detection."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {threatHuntingServices.map((item) => (
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
                title="Why Choose Managed Threat Hunting"
                subtitle="Proactive threat detection with expert hunters, advanced analytics, and continuous monitoring."
              />
              <div className="mt-8">
                <div className="relative rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-900/70">
                  <div className="pointer-events-none absolute -inset-1 rounded-[22px] bg-gradient-to-r from-violet-500/30 via-purple-500/20 to-transparent opacity-70" />
                  <div className="relative overflow-hidden rounded-2xl bg-slate-950/5 p-4 dark:bg-slate-950">
                    <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-violet-500/20 blur-2xl" />
                    <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-purple-500/20 blur-2xl" />
                    <img
                      src="/assets/services/cyber.jpg"
                      alt="Managed Threat Hunting"
                      className="w-full rounded-xl shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="grid gap-4">
                {huntingCapabilities.map((capability) => (
                  <motion.div key={capability.title} variants={fadeUp}>
                    <Card>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
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
              title="How Our Threat Hunting Service Works"
              subtitle="A structured hunting framework with hypothesis development, investigation, and continuous improvement."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {coreResponsibilities.map((responsibility) => (
                <motion.div key={responsibility.category} variants={fadeUp}>
                  <Card className="h-full">
                    <h3 className="text-lg font-semibold text-violet-600 dark:text-violet-400 mb-4">
                      {responsibility.category}
                    </h3>
                    <ul className="space-y-3">
                      {responsibility.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                          <IconCheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-violet-600 dark:text-violet-400" />
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
              title="Trusted threat hunting expertise since 2017."
              subtitle="We've helped organizations across UAE, GCC, and international markets detect and eliminate advanced threats."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Expert threat hunters",
                  description: "Certified hunters with deep expertise in APT detection, behavioral analytics, and MITRE ATT&CK framework.",
                  Icon: IconSearch,
                },
                {
                  title: "Advanced detection",
                  description: "State-of-the-art threat hunting tools, custom detection rules, and threat intelligence integration.",
                  Icon: IconShield,
                },
                {
                  title: "Proven track record",
                  description: "Successfully detected APTs, insider threats, and zero-day attacks across financial, healthcare, and technology sectors.",
                  Icon: IconClipboard,
                },
              ].map((item) => (
                <motion.div key={item.title} variants={fadeUp}>
                  <Card className="h-full">
                    <div className="mb-4 inline-flex rounded-full bg-violet-500/10 p-3 text-violet-600 dark:bg-violet-400/10 dark:text-violet-400">
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
              subtitle="Comprehensive threat hunting coverage, regular campaigns, and expert analysis with actionable intelligence."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {deliverables.map((item) => (
                <motion.div key={item} variants={fadeUp}>
                  <Card>
                    <div className="flex items-start gap-3">
                      <IconCheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-violet-600 dark:text-violet-400" />
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
              title="Threat hunting for diverse sectors."
              subtitle="Tailored hunting operations for financial services, healthcare, technology, and critical infrastructure."
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
              title="Flexible threat hunting programs for every need."
              subtitle="Choose from essential, advanced, or elite hunting operations based on your threat landscape."
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
              title="Common questions about threat hunting."
              subtitle="Clear answers to help you understand proactive threat detection, hunting operations, and value."
            />
            <div className="mt-8 space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-slate-200/70 bg-white/80 p-5 dark:border-slate-800/70 dark:bg-slate-900/70"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between text-left text-sm font-semibold text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 dark:text-white"
                    aria-expanded={openFaq === index}
                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  >
                    <span>{faq.question}</span>
                    <span className="text-violet-600 dark:text-violet-400">{openFaq === index ? "–" : "+"}</span>
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
              Hunt Threats Before They Become Breaches
            </h2>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Deploy elite threat hunters across your infrastructure today and detect advanced threats early.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact?subject=Managed%20Threat%20Hunting"
                aria-label="Talk to a Threat Hunter"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Talk to a Threat Hunter
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
            Start hunting threats today
          </div>
          <Link
            href="/contact?subject=Managed%20Threat%20Hunting"
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