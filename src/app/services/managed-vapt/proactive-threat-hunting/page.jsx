"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

/* ===================== DATA ===================== */

const painPoints = [
  "Worried about undetected threats in your environment?",
  "Need to identify attack paths before exploitation?",
  "Want to stay ahead of evolving cyber threats?",
];

const outcomes = [
  {
    title: "Early Attack Path Discovery",
    description:
      "Identify potential attack vectors, entry points, and security gaps before malicious actors can exploit them to compromise your systems.",
  },
  {
    title: "Understanding Attacker Methodologies",
    description:
      "Gain deep insights into tactics, techniques, and procedures (TTPs) used by threat actors targeting your industry and infrastructure.",
  },
  {
    title: "Reduced Breach Impact",
    description:
      "Minimize potential damage by discovering and eliminating threats proactively, reducing incident response time from weeks to hours.",
  },
  {
    title: "Strengthened Security Posture",
    description:
      "Continuously improve defenses through threat intelligence insights, security gap remediation, and detection capability enhancement.",
  },
];

const complianceBadges = [
  "Proactive Defense",
  "MITRE ATT&CK",
  "Threat Intelligence",
  "Attack Simulation",
  "Zero Trust",
  "Continuous Hunting",
];

const methodology = [
  {
    title: "Asset & Threat Landscape Analysis",
    description:
      "Comprehensive inventory of critical assets, data flows, and potential threat actors targeting your industry to establish baseline security posture.",
  },
  {
    title: "Attack Surface Discovery",
    description:
      "Systematic identification of exposed services, misconfigurations, shadow IT, and security weaknesses across network, cloud, and application layers.",
  },
  {
    title: "Attack Path Mapping",
    description:
      "Model potential attack chains from initial access through privilege escalation, lateral movement, and data exfiltration using MITRE ATT&CK framework.",
  },
  {
    title: "Proactive Threat Detection",
    description:
      "Deploy custom detection rules, behavioral analytics, and threat hunting queries to identify suspicious activities before they escalate.",
  },
  {
    title: "Threat Validation & Analysis",
    description:
      "Deep investigation of findings to confirm genuine threats, assess business impact, and determine scope of potential compromise.",
  },
  {
    title: "Remediation & Hardening",
    description:
      "Provide actionable recommendations for threat elimination, security control improvements, and architectural hardening to prevent future attacks.",
  },
];

const processSteps = [
  { title: "Analyze", description: "Asset & threat landscape." },
  { title: "Discover", description: "Attack surface mapping." },
  { title: "Model", description: "Attack path analysis." },
  { title: "Detect", description: "Proactive threat hunting." },
  { title: "Harden", description: "Security improvements." },
];

const huntingCapabilities = [
  {
    title: "Detection Focus",
    items: ["Entry points", "Attack paths", "Misconfigurations", "Weak controls"],
  },
  {
    title: "Analysis Methods",
    items: ["Threat modeling", "Attack simulation", "Gap analysis", "Risk scoring"],
  },
  {
    title: "Coverage Areas",
    items: ["Network perimeter", "Cloud infrastructure", "Applications", "Identities"],
  },
  {
    title: "Frameworks",
    items: ["MITRE ATT&CK", "Kill Chain", "Zero Trust", "NIST CSF"],
  },
];

const proactiveHuntingServices = [
  {
    title: "Attack Surface Discovery",
    desc: "Comprehensive identification of exposed assets, services, and potential entry points across network, cloud, and application infrastructure.",
  },
  {
    title: "Attack Path Analysis",
    desc: "Map potential attack chains from initial access to objectives, identifying critical chokepoints and security control gaps.",
  },
  {
    title: "Threat Modeling & Simulation",
    desc: "Model threat actor behaviors, simulate attack scenarios, and validate security controls against real-world adversary techniques.",
  },
  {
    title: "Security Gap Assessment",
    desc: "Identify misconfigurations, unpatched vulnerabilities, weak authentication, and other security weaknesses before exploitation.",
  },
  {
    title: "Lateral Movement Analysis",
    desc: "Assess internal network segmentation, privilege escalation risks, and potential paths for attacker lateral movement.",
  },
  {
    title: "Data Exfiltration Risk Assessment",
    desc: "Identify sensitive data locations, egress points, and potential exfiltration channels that attackers could exploit.",
  },
  {
    title: "Insider Threat Prevention",
    desc: "Proactive detection of insider risk indicators, privilege abuse patterns, and anomalous user behavior before incidents occur.",
  },
  {
    title: "Cloud Security Posture Assessment",
    desc: "Multi-cloud security analysis covering misconfigurations, excessive permissions, and cloud-native attack vectors in AWS/Azure/GCP.",
  },
  {
    title: "Continuous Threat Intelligence",
    desc: "Leverage global threat feeds, dark web monitoring, and industry-specific intelligence to anticipate emerging threats.",
  },
];

const coreResponsibilities = [
  {
    category: "Discovery & Mapping",
    items: [
      "Comprehensive attack surface discovery and inventory",
      "Critical asset identification and data flow mapping",
      "External and internal exposure assessment",
      "Shadow IT and unauthorized service detection",
    ],
  },
  {
    category: "Threat Analysis",
    items: [
      "Threat actor profiling and TTP analysis",
      "Attack path modeling using MITRE ATT&CK",
      "Security control gap identification",
      "Risk prioritization and impact assessment",
    ],
  },
  {
    category: "Proactive Detection",
    items: [
      "Custom detection rule development and deployment",
      "Behavioral anomaly hunting and investigation",
      "Attack simulation and purple team exercises",
      "Threat hunting campaign execution",
    ],
  },
  {
    category: "Hardening & Improvement",
    items: [
      "Security architecture hardening recommendations",
      "Detection capability enhancement",
      "Incident response playbook development",
      "Continuous security posture optimization",
    ],
  },
];

const deliverables = [
  "Comprehensive attack surface discovery report",
  "Attack path analysis and threat modeling",
  "Security gap assessment and risk prioritization",
  "MITRE ATT&CK coverage analysis",
  "Custom detection rule development",
  "Proactive threat hunting campaigns",
  "Behavioral anomaly analysis",
  "Cloud security posture assessment",
  "Lateral movement risk analysis",
  "Data exfiltration risk assessment",
  "Security hardening recommendations",
  "Executive threat landscape briefings",
];

const useCases = [
  {
    title: "Financial Services",
    description:
      "Proactive defense against fraud schemes, insider threats, account takeovers, and sophisticated attacks targeting financial infrastructure.",
  },
  {
    title: "Healthcare Organizations",
    description:
      "Anticipate ransomware attacks, medical device compromises, patient data theft, and research IP exfiltration before they occur.",
  },
  {
    title: "Technology & SaaS",
    description:
      "Identify supply chain risks, cloud infrastructure vulnerabilities, API weaknesses, and IP theft vectors before exploitation.",
  },
  {
    title: "Manufacturing & Industrial",
    description:
      "Discover operational technology vulnerabilities, industrial espionage risks, and supply chain attack paths in manufacturing environments.",
  },
  {
    title: "Retail & E-commerce",
    description:
      "Proactively detect payment fraud risks, point-of-sale vulnerabilities, customer data exposure, and e-commerce attack vectors.",
  },
  {
    title: "Government & Defense",
    description:
      "Identify espionage risks, insider threat indicators, advanced persistent threat (APT) attack paths, and classified data exposure.",
  },
];

const engagementTiers = [
  {
    title: "Essential Proactive Hunting",
    description:
      "Quarterly attack surface assessments with threat modeling, basic gap analysis, and security recommendations.",
    bullets: ["Quarterly assessments", "Attack surface mapping", "Gap analysis", "Email support"],
  },
  {
    title: "Advanced Proactive Hunting",
    description:
      "Monthly threat hunting campaigns with continuous monitoring, attack path analysis, and dedicated security analysts.",
    bullets: ["Monthly campaigns", "Attack path analysis", "Custom detection", "Dedicated analysts"],
  },
  {
    title: "Elite Proactive Defense",
    description:
      "Continuous proactive defense operations with real-time threat modeling, advanced simulation, and embedded security team.",
    bullets: ["Continuous hunting", "Attack simulation", "Threat intel", "Embedded team"],
  },
];

const faqs = [
  {
    question: "What is Proactive Threat Hunting?",
    answer:
      "Proactive Threat Hunting is a forward-looking security approach that identifies attack paths, entry points, and security weaknesses before they can be exploited by threat actors. Unlike reactive hunting that searches for existing threats, proactive hunting focuses on discovering vulnerabilities, misconfigurations, and potential attack vectors that could be used in future attacks. We analyze your attack surface, model threat actor behaviors, and simulate attack scenarios to identify and eliminate risks before they materialize into actual incidents.",
  },
  {
    question: "How is proactive hunting different from penetration testing?",
    answer:
      "Penetration testing validates specific vulnerabilities through exploitation, while proactive threat hunting takes a broader, continuous approach to identify all potential attack paths and security gaps. Pen testing is typically a point-in-time assessment focused on technical exploitation, whereas proactive hunting provides ongoing analysis of your threat landscape, attack surface changes, and emerging threats. Proactive hunting also includes threat modeling, behavioral analysis, and detection capability development—not just vulnerability identification. We recommend combining both for comprehensive security coverage.",
  },
  {
    question: "What tools and methodologies do you use?",
    answer:
      "We use threat modeling frameworks (MITRE ATT&CK, Cyber Kill Chain), attack surface discovery tools, SIEM platforms for behavioral analysis, threat intelligence platforms, and custom detection logic. Our methodology includes asset inventory analysis, attack graph modeling, adversary simulation, and continuous monitoring. We leverage both automated scanning tools and expert manual analysis to identify attack paths that automated tools miss. Our hunters also use purple team techniques, combining offensive and defensive perspectives to validate findings and improve detection capabilities.",
  },
  {
    question: "How often should we conduct proactive threat hunting?",
    answer:
      "Frequency depends on your risk profile, industry, and rate of infrastructure change. High-risk organizations (financial, healthcare, government) should conduct continuous proactive hunting with monthly deep-dive campaigns. Medium-risk organizations benefit from quarterly assessments with targeted monthly reviews. We recommend increasing frequency during major infrastructure changes, mergers and acquisitions, or when new threat intelligence indicates elevated risk to your sector. Our engagement tiers offer flexible options from quarterly to continuous coverage.",
  },
  {
    question: "Can proactive hunting help prevent zero-day attacks?",
    answer:
      "Yes, proactive hunting significantly reduces zero-day attack risk by identifying and hardening potential attack paths before vulnerabilities are publicly disclosed. We focus on defense-in-depth strategies, reducing attack surface, improving detection capabilities, and hardening security controls so that even when zero-day vulnerabilities emerge, attackers face multiple barriers to exploitation. Our threat modeling identifies likely attack vectors in your environment, allowing us to implement compensating controls and enhanced monitoring before specific exploits are known.",
  },
  {
    question: "What deliverables do we receive from proactive hunting?",
    answer:
      "You receive comprehensive reports including attack surface analysis, attack path diagrams, threat modeling results, security gap assessments with risk prioritization, and detailed remediation recommendations. We provide MITRE ATT&CK coverage maps showing your detection capabilities, custom detection rules for identified threats, incident response playbooks for likely attack scenarios, and executive briefings on your threat landscape. All findings include business impact assessments and remediation timelines. We also deliver ongoing threat intelligence relevant to your industry and infrastructure.",
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

const IconTarget = ({ className }) => (
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
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
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

export default function ProactiveThreatHuntingPage() {
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
          <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#3b82f622_1px,transparent_1px),linear-gradient(to_bottom,#3b82f622_1px,transparent_1px)] bg-[size:90px_90px]" />
          <div className="absolute -left-24 top-16 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
          
          {/* Scan beam effect */}
          <motion.div
            className="absolute inset-y-0 w-[40%] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent"
            animate={{ x: ["-40%", "140%"] }}
            transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <Container className="relative z-10 flex min-h-[86vh] flex-col justify-center">
          <motion.div variants={fadeUp} className="max-w-3xl">
            <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
              Advanced Cyber Defense
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              Proactive Threat Hunting
            </h1>
            <p className="mt-4 text-lg text-white/85 md:text-xl">
              Secure your business from future attacks by uncovering threats, entry points, and attack methodologies before damage occurs.
            </p>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Identify attack paths, security gaps, and potential vulnerabilities before threat actors can exploit them.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/contact?subject=services&subSubject=Proactive%20Threat%20Hunting"
                aria-label="Get Protected"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <motion.span
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  whileTap={reduceMotion ? undefined : { y: 0 }}
                  className="inline-flex items-center"
                >
                  Get Protected
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
              title="Stay ahead of cyber threats before they strike."
              subtitle="Discover attack paths, understand threat methodologies, and strengthen defenses proactively."
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
              eyebrow="Capabilities"
              title="Advanced proactive defense capabilities."
              subtitle="Continuous threat modeling, attack simulation, and security gap analysis using industry frameworks."
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
              title="Proactive Threat Hunting Framework"
              subtitle="A continuous, analyst-driven methodology to uncover attack paths, entry points, and security gaps before exploitation."
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
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">Proactive defense lifecycle</h3>
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
              title="Our Proactive Threat Hunting Capabilities"
              subtitle="Comprehensive attack surface discovery, threat modeling, and security gap analysis to prevent future attacks."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {proactiveHuntingServices.map((item) => (
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
                title="Why Choose Proactive Threat Hunting"
                subtitle="Identify and eliminate threats before exploitation with continuous attack surface monitoring and threat modeling."
              />
              <div className="mt-8">
                <div className="relative rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-900/70">
                  <div className="pointer-events-none absolute -inset-1 rounded-[22px] bg-gradient-to-r from-blue-500/30 via-indigo-500/20 to-transparent opacity-70" />
                  <div className="relative overflow-hidden rounded-2xl bg-slate-950/5 p-4 dark:bg-slate-950">
                    <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-blue-500/20 blur-2xl" />
                    <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-indigo-500/20 blur-2xl" />
                    <img
                      src="/assets/services/proactive-threat-hunting-2.jpeg"
                      alt="Proactive Threat Hunting"
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
              title="How Our Proactive Hunting Service Works"
              subtitle="A structured framework for attack surface discovery, threat analysis, and continuous security improvement."
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
              title="Trusted proactive defense expertise since 2017."
              subtitle="We've helped organizations across UAE, GCC, and international markets prevent attacks through proactive threat hunting."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Proactive methodology",
                  description: "Forward-looking threat analysis using attack modeling, threat simulation, and continuous attack surface monitoring.",
                  Icon: IconTarget,
                },
                {
                  title: "Expert analysts",
                  description: "Certified security analysts with deep expertise in threat modeling, attack path analysis, and MITRE ATT&CK framework.",
                  Icon: IconUsers,
                },
                {
                  title: "Proven prevention",
                  description: "Successfully prevented attacks by identifying and eliminating security gaps before exploitation across multiple industries.",
                  Icon: IconShield,
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
              subtitle="Comprehensive attack surface analysis, threat modeling, and actionable security recommendations."
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
              title="Proactive defense for diverse sectors."
              subtitle="Tailored threat hunting for financial services, healthcare, technology, manufacturing, and critical infrastructure."
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
              title="Flexible proactive defense programs for every need."
              subtitle="Choose from essential, advanced, or elite proactive hunting based on your risk profile and infrastructure."
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
              title="Common questions about proactive threat hunting."
              subtitle="Clear answers to help you understand proactive defense, attack path analysis, and prevention strategies."
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
              Stay Ahead of Cyber Threats
            </h2>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Detect, investigate, and respond before attackers strike your business.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact?subject=services&subSubject=Proactive%20Threat%20Hunting"
                aria-label="Start Proactive Hunting"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Start Proactive Hunting
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
            href="/contact?subject=services&subSubject=Proactive%20Threat%20Hunting"
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