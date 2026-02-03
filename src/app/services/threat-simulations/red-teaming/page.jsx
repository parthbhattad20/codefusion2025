"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

/* ===================== DATA ===================== */

const painPoints = [
  "Are your defenses truly effective against real attacks?",
  "Need to test detection and response capabilities?",
  "Want to validate security investments?",
];

const outcomes = [
  {
    title: "Real-World Attack Simulation",
    description:
      "Advanced adversary emulation using real attacker tactics, techniques, and procedures to expose critical security gaps.",
  },
  {
    title: "Detection & Response Testing",
    description:
      "Measure your security operations center's ability to detect, analyze, and respond to sophisticated multi-stage attacks.",
  },
  {
    title: "Defense Validation",
    description:
      "Test people, processes, and technology under realistic attack conditions to identify weaknesses before real adversaries do.",
  },
  {
    title: "Risk Prioritization",
    description:
      "Business impact analysis showing which vulnerabilities pose the greatest risk to your organization's critical assets.",
  },
];

const complianceBadges = [
  "MITRE ATT&CK",
  "NIST CSF",
  "Adversary Simulation",
  "Purple Teaming",
  "Threat Modeling",
  "Attack Emulation",
];

const methodology = [
  {
    title: "Reconnaissance & Planning",
    description:
      "Deep intelligence gathering on your organization, employees, infrastructure, and attack surface using OSINT and passive techniques.",
  },
  {
    title: "Initial Access & Compromise",
    description:
      "Multi-vector attack attempts including phishing, external exploitation, physical access, and supply chain targeting.",
  },
  {
    title: "Lateral Movement & Escalation",
    description:
      "Stealthy navigation through networks, privilege escalation, credential harvesting, and persistence establishment.",
  },
  {
    title: "Objective Achievement",
    description:
      "Demonstration of business impact through data exfiltration, system compromise, or other goal-oriented activities.",
  },
  {
    title: "Detection Evasion",
    description:
      "Active bypassing of security controls, EDR, SIEM, and monitoring systems to test blue team detection capabilities.",
  },
  {
    title: "Continuous Purple Teaming",
    description:
      "Collaborative defense improvement with blue team to enhance detection, tune alerts, and validate security controls.",
  },
];

const processSteps = [
  { title: "Recon", description: "Target profiling." },
  { title: "Access", description: "Initial compromise." },
  { title: "Escalate", description: "Privilege elevation." },
  { title: "Move", description: "Lateral navigation." },
  { title: "Achieve", description: "Impact objectives." },
];

const redTeamCapabilities = [
  {
    title: "Attack Vectors",
    items: ["Network", "Cloud", "Physical", "Social engineering"],
  },
  {
    title: "Techniques",
    items: ["MITRE ATT&CK", "Stealth", "Evasion", "Persistence"],
  },
  {
    title: "Objectives",
    items: ["Data exfil", "System access", "Lateral movement", "Persistence"],
  },
  {
    title: "Frameworks",
    items: ["MITRE", "NIST", "Cyber Kill Chain", "Diamond Model"],
  },
];

const redTeamServices = [
  {
    title: "External Red Teaming",
    desc: "Simulation of external threat actors attempting to breach perimeter defenses through network, web, and remote access vectors.",
  },
  {
    title: "Internal Red Teaming",
    desc: "Assumed breach scenarios testing lateral movement, privilege escalation, and data exfiltration within your network.",
  },
  {
    title: "Cloud Attack Simulation",
    desc: "Testing of AWS, Azure, GCP security with cloud-native attack techniques, IAM exploitation, and container escapes.",
  },
  {
    title: "Social Engineering Operations",
    desc: "Realistic phishing, vishing, pretexting, and physical security testing to evaluate human layer defenses.",
  },
  {
    title: "Purple Team Exercises",
    desc: "Collaborative red and blue team engagements to improve detection, tune security controls, and validate defensive capabilities.",
  },
  {
    title: "Adversary Simulation",
    desc: "Emulation of specific threat actor TTPs based on MITRE ATT&CK framework and real-world threat intelligence.",
  },
  {
    title: "Physical Security Testing",
    desc: "Testing of physical access controls, badge systems, tailgating prevention, and security awareness through controlled operations.",
  },
  {
    title: "Supply Chain Attack Simulation",
    desc: "Testing third-party vendor security, software supply chain vulnerabilities, and trusted relationship exploitation.",
  },
  {
    title: "Assumed Breach Assessment",
    desc: "Starting from compromised internal position to test detection, response, and containment capabilities.",
  },
];

const coreResponsibilities = [
  {
    category: "Reconnaissance & Planning",
    items: [
      "OSINT intelligence gathering",
      "Target employee profiling",
      "Infrastructure mapping",
      "Attack vector identification",
    ],
  },
  {
    category: "Attack Execution",
    items: [
      "Multi-vector initial access attempts",
      "Privilege escalation and persistence",
      "Lateral movement and network navigation",
      "Objective achievement and impact demonstration",
    ],
  },
  {
    category: "Evasion & Stealth",
    items: [
      "EDR and antivirus bypass",
      "SIEM and logging evasion",
      "Network monitoring circumvention",
      "Security control testing",
    ],
  },
  {
    category: "Detection Testing",
    items: [
      "Blue team detection capability measurement",
      "Incident response time tracking",
      "Alert fidelity assessment",
      "SOC effectiveness evaluation",
    ],
  },
];

const deliverables = [
  "Comprehensive red team assessment report",
  "MITRE ATT&CK technique mapping",
  "Attack chain documentation",
  "Detection gap analysis",
  "Privilege escalation paths identified",
  "Lateral movement findings",
  "Data exfiltration scenarios",
  "Business impact assessment",
  "SOC effectiveness metrics",
  "Remediation recommendations",
  "Purple team collaboration sessions",
  "Executive-level briefing",
];

const useCases = [
  {
    title: "Enterprise Security Validation",
    description:
      "Comprehensive red teaming for large organizations to test defense-in-depth strategies and validate security investments.",
  },
  {
    title: "Financial Services",
    description:
      "High-security red team exercises for banks and financial institutions testing fraud prevention and data protection controls.",
  },
  {
    title: "Critical Infrastructure",
    description:
      "Red team operations for energy, utilities, and critical infrastructure organizations protecting against advanced persistent threats.",
  },
  {
    title: "Technology Companies",
    description:
      "Advanced adversary simulation for tech companies protecting intellectual property, source code, and product development.",
  },
  {
    title: "Healthcare Organizations",
    description:
      "HIPAA-compliant red teaming for hospitals and healthcare systems protecting patient data and medical device infrastructure.",
  },
  {
    title: "Government Agencies",
    description:
      "High-assurance red team exercises for government organizations defending against nation-state level threats.",
  },
];

const engagementTiers = [
  {
    title: "Focused Red Team",
    description:
      "Targeted red team assessment focusing on specific attack vectors or critical systems with 2-3 week engagement.",
    bullets: ["Single vector", "2-3 week duration", "Basic reporting", "Remediation guidance"],
  },
  {
    title: "Comprehensive Red Team",
    description:
      "Full-scope adversary simulation with multiple attack vectors, lateral movement, and detection testing over 4-6 weeks.",
    bullets: ["Multi-vector", "4-6 week duration", "MITRE mapping", "Purple teaming"],
  },
  {
    title: "Continuous Red Team",
    description:
      "Ongoing red team program with quarterly exercises, continuous detection validation, and purple team collaboration.",
    bullets: ["Quarterly exercises", "Continuous testing", "Purple team", "Managed program"],
  },
];

const faqs = [
  {
    question: "What is Red Teaming?",
    answer:
      "Red Teaming is an advanced security assessment that simulates real-world adversaries attempting to compromise your organization. Unlike penetration testing which focuses on finding vulnerabilities, red teaming tests your entire security program including people, processes, and technology. We use the same tactics, techniques, and procedures (TTPs) as real attackers - mapped to MITRE ATT&CK framework - to attempt unauthorized access, lateral movement, privilege escalation, and data exfiltration. The goal is to measure how effectively your security operations can detect, analyze, and respond to sophisticated attacks, while identifying gaps in your defensive capabilities.",
  },
  {
    question: "How is Red Teaming different from Penetration Testing?",
    answer:
      "Penetration testing is technical vulnerability assessment with the goal of finding as many security issues as possible. Red teaming simulates advanced adversaries with specific objectives (data theft, system access) using stealthy techniques to avoid detection. Pen testing typically takes 1-3 weeks and is loud/obvious. Red teaming runs 4-12 weeks and prioritizes stealth. Pen testing measures technical vulnerabilities. Red teaming measures detection, response, and overall security program effectiveness. Pen testing focuses on IT security. Red teaming includes physical security, social engineering, and operational security. Both are valuable but serve different purposes - pen testing finds issues, red teaming validates your ability to defend against real attacks.",
  },
  {
    question: "What attack techniques do you use?",
    answer:
      "Our red team operations use real-world attacker techniques mapped to MITRE ATT&CK framework including: initial access via phishing, external exploitation, supply chain compromise; execution through malware, scripts, and living-off-the-land binaries; persistence mechanisms including backdoors, scheduled tasks, and registry modifications; privilege escalation using credential dumping, token manipulation, and exploitation; lateral movement with pass-the-hash, remote desktop, and admin shares; data exfiltration over command and control channels; and defense evasion through obfuscation, process injection, and security tool bypass. All techniques are executed ethically under strict rules of engagement with full legal authorization.",
  },
  {
    question: "Will you notify our security team during the engagement?",
    answer:
      "This depends on engagement type and objectives. Traditional 'black box' red teaming has no notification - we simulate unknown attackers to test real detection capabilities. Purple team exercises are collaborative with security team knowledge to improve defenses. Assumed breach scenarios often have partial notification about scope but not timing or methods. We always have emergency contacts for critical findings that pose immediate risk. The notification approach is defined in rules of engagement during scoping. Most organizations benefit from true stealth testing initially, followed by collaborative purple team sessions to improve based on findings.",
  },
  {
    question: "What are the rules of engagement for red team operations?",
    answer:
      "Rules of engagement (RoE) define legal boundaries and operational constraints including: authorized scope (in-scope systems, networks, facilities, personnel); prohibited actions (production disruption, data destruction, certain attack types); notification procedures for critical findings; emergency stop conditions; testing windows and timelines; evidence collection and documentation requirements; and communication protocols. RoE are defined collaboratively during scoping, documented formally, legally reviewed, approved by executive leadership, and strictly followed throughout engagement. We never exceed authorized scope or perform destructive actions. All activities are logged for accountability.",
  },
  {
    question: "How do you measure success in a red team engagement?",
    answer:
      "Success isn't measured by whether we breach your organization (we usually do) but by the security improvements gained from the exercise. Key success metrics include: detection capability - did your SOC identify suspicious activity? Response effectiveness - how quickly did you investigate and contain? Attack path identification - which vulnerabilities created the greatest risk? Business impact understanding - what critical assets were accessible? Defensive improvements - did findings lead to measurable security enhancements? Post-engagement, we track metrics like mean time to detect (MTTD), mean time to respond (MTTR), detection coverage percentage, and security control effectiveness. A successful engagement provides actionable intelligence that significantly improves your security posture.",
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

const IconCrosshair = ({ className }) => (
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
    <line x1="22" y1="12" x2="18" y2="12" />
    <line x1="6" y1="12" x2="2" y2="12" />
    <line x1="12" y1="6" x2="12" y2="2" />
    <line x1="12" y1="22" x2="12" y2="18" />
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

export default function RedTeamingPage() {
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
          <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#ff000033_1px,transparent_1px),linear-gradient(to_bottom,#ff000033_1px,transparent_1px)] bg-[size:70px_70px]" />
          <div className="absolute -left-24 top-16 h-64 w-64 rounded-full bg-red-500/20 blur-3xl" />
          <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
        </div>

        <Container className="relative z-10 flex min-h-[86vh] flex-col justify-center">
          <motion.div variants={fadeUp} className="max-w-3xl">
            <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
              Offensive Security
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              Red Teaming Services
            </h1>
            <p className="mt-4 text-lg text-white/85 md:text-xl">
              Simulate real-world cyber attacks to expose blind spots, break defenses, and strengthen detection.
            </p>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Advanced adversary emulation using MITRE ATT&CK techniques to test people, processes, and technology.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/contact"
                aria-label="Speak With a Red Team Expert"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <motion.span
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  whileTap={reduceMotion ? undefined : { y: 0 }}
                  className="inline-flex items-center"
                >
                  Speak With a Red Team Expert
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
              title="Advanced adversary simulation for defense validation."
              subtitle="Test your security program against real-world attack techniques to measure detection, response, and resilience."
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
              eyebrow="Standards & Frameworks"
              title="Aligned with adversary simulation frameworks."
              subtitle="Expert red teaming following MITRE ATT&CK, NIST CSF, and industry-leading threat emulation methodologies."
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
              title="Red Team Attack Chain Framework"
              subtitle="Comprehensive adversary simulation following the cyber kill chain to test your entire security program."
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
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">Red team attack lifecycle</h3>
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
              title="Our Red Teaming Capabilities"
              subtitle="Comprehensive adversary simulation from external attacks to purple team collaboration and defense validation."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {redTeamServices.map((item) => (
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
                title="Why Choose Red Teaming Services"
                subtitle="Specialized expertise for simulating advanced adversaries and validating your security operations effectiveness."
              />
              <div className="mt-8">
                <div className="relative rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-900/70">
                  <div className="pointer-events-none absolute -inset-1 rounded-[22px] bg-gradient-to-r from-red-500/30 via-orange-500/20 to-transparent opacity-70" />
                  <div className="relative overflow-hidden rounded-2xl bg-slate-950/5 p-4 dark:bg-slate-950">
                    <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-red-500/20 blur-2xl" />
                    <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-orange-500/20 blur-2xl" />
                    <img
                      src="/assets/services/red-t.jpg"
                      alt="Red Teaming Services"
                      className="w-full rounded-xl shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="grid gap-4">
                {redTeamCapabilities.map((capability) => (
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
              title="How Our Red Team Engagement Works"
              subtitle="A structured framework for simulating advanced adversaries and measuring your defensive capabilities."
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
              title="Trusted red team expertise since 2017."
              subtitle="We've conducted advanced adversary simulations for enterprise, finance, government, and critical infrastructure."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Red team specialists",
                  description: "Deep expertise in MITRE ATT&CK, adversary emulation, and real-world attack techniques with proven defense validation.",
                  Icon: IconTarget,
                },
                {
                  title: "Ethical & controlled",
                  description: "Strictly authorized operations with clear rules of engagement, emergency protocols, and professional conduct.",
                  Icon: IconShield,
                },
                {
                  title: "Purple team collaboration",
                  description: "Post-engagement purple teaming to improve detection, tune security controls, and validate defensive improvements.",
                  Icon: IconCrosshair,
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
              subtitle="Comprehensive red team assessment, MITRE ATT&CK mapping, and purple team collaboration sessions."
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
              title="Red teaming for diverse high-security sectors."
              subtitle="Tailored adversary simulation for enterprise, finance, critical infrastructure, technology, healthcare, and government."
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
              title="Flexible red team programs for every need."
              subtitle="Choose from focused, comprehensive, or continuous red team operations based on your security maturity."
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
              title="Common questions about red teaming."
              subtitle="Clear answers to help you understand adversary simulation, attack techniques, and defensive validation."
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
              Think Like an Attacker. Defend Like a Pro.
            </h2>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Validate your defenses with real-world Red Teaming by Vulnuris experts.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                aria-label="Talk to a Red Team Expert"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Talk to a Red Team Expert
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
            Validate your defenses
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