"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const outcomes = [
  {
    title: "Ensure regulatory compliance",
    description:
      "Satisfy EU Digital Operational Resilience Act requirements and demonstrate ICT risk management maturity to regulators.",
  },
  {
    title: "Strengthen cyber resilience",
    description:
      "Build robust operational resilience capabilities that protect financial services from ICT-related disruptions and incidents.",
  },
  {
    title: "Manage third-party risk",
    description:
      "Implement comprehensive oversight of ICT third-party service providers and critical technology dependencies.",
  },
  {
    title: "Reduce operational disruption",
    description:
      "Minimize business impact through effective incident response, business continuity, and resilience testing programs.",
  },
];

const complianceBadges = [
  "DORA",
  "EBA Guidelines",
  "ESMA",
  "EIOPA",
  "NIS2",
  "GDPR",
];

const methodology = [
  {
    title: "ICT Asset & Service Identification",
    description:
      "Inventory critical ICT assets, systems, and services. Map dependencies and identify business-critical functions requiring resilience.",
  },
  {
    title: "Risk Assessment & Gap Analysis",
    description:
      "Evaluate ICT risk management maturity against DORA requirements. Identify gaps in governance, controls, and resilience capabilities.",
  },
  {
    title: "Governance & Control Implementation",
    description:
      "Deploy ICT risk management framework, security controls, incident response procedures, and third-party oversight mechanisms.",
  },
  {
    title: "Resilience Testing & Validation",
    description:
      "Conduct threat-led penetration testing, scenario-based testing, and resilience simulations to validate operational resilience.",
  },
  {
    title: "Continuous Monitoring & Reporting",
    description:
      "Establish ongoing ICT risk monitoring, incident reporting to regulators, and continuous compliance validation processes.",
  },
];

const processSteps = [
  {
    title: "Identify",
    description: "ICT assets, critical services, dependencies.",
  },
  {
    title: "Assess",
    description: "Risk gaps, maturity, compliance mapping.",
  },
  {
    title: "Protect",
    description: "Security controls, governance framework.",
  },
  {
    title: "Test",
    description: "Resilience testing, incident simulations.",
  },
  {
    title: "Monitor",
    description: "Continuous risk, vendor oversight.",
  },
];

const doraPillars = [
  {
    title: "ICT Risk Management",
    items: ["Risk framework", "Governance", "Controls", "Documentation"],
  },
  {
    title: "Incident Management",
    items: ["Detection", "Response", "Recovery", "Reporting"],
  },
  {
    title: "Resilience Testing",
    items: ["TLPT", "Scenario testing", "Recovery testing", "Validation"],
  },
  {
    title: "Third-Party Risk",
    items: ["Vendor oversight", "Contracts", "Monitoring", "Exit plans"],
  },
];

const deliverables = [
  "DORA gap assessment report with compliance roadmap",
  "ICT risk management framework and governance documentation",
  "Critical ICT services and dependency mapping",
  "ICT risk register and treatment plan",
  "Incident response and major incident reporting procedures",
  "Business continuity and disaster recovery plans",
  "Digital operational resilience testing program",
  "Threat-led penetration testing (TLPT) framework",
  "Third-party ICT service provider risk register",
  "Vendor management and oversight procedures",
  "ICT-related incident reporting to regulators",
  "Ongoing compliance monitoring and validation",
];

const useCases = [
  {
    title: "Banks & Credit Institutions",
    description:
      "Comprehensive DORA compliance for banks, credit institutions, and building societies managing complex ICT environments.",
  },
  {
    title: "Investment Firms",
    description:
      "Digital resilience programs for investment firms, portfolio managers, and securities trading platforms.",
  },
  {
    title: "Insurance Companies",
    description:
      "ICT risk management and operational resilience for insurance and reinsurance undertakings.",
  },
  {
    title: "ICT Third-Party Providers",
    description:
      "DORA compliance for critical ICT service providers serving financial entities under regulatory oversight.",
  },
];

const engagementTiers = [
  {
    title: "DORA Readiness Assessment",
    description:
      "Current state evaluation against DORA requirements with detailed gap analysis and compliance roadmap.",
    bullets: ["4-6 weeks", "Gap report", "Compliance roadmap"],
  },
  {
    title: "Full DORA Implementation",
    description:
      "End-to-end DORA compliance program from ICT risk management through resilience testing and regulatory readiness.",
    bullets: ["6-12 months", "Complete framework", "Regulatory support"],
  },
  {
    title: "Managed Resilience",
    description:
      "Ongoing operational resilience management with continuous monitoring, testing, and regulatory reporting support.",
    bullets: ["Annual program", "Continuous monitoring", "Regulatory liaison"],
  },
];

const doraServices = [
  {
    title: "DORA Gap Assessment",
    desc: "Comprehensive evaluation of ICT risk management capabilities against all DORA regulatory requirements.",
  },
  {
    title: "ICT Risk Management Framework",
    desc: "Design and implementation of ICT risk governance, policies, procedures, and control frameworks.",
  },
  {
    title: "Incident Response & Reporting",
    desc: "Major incident response procedures and regulatory reporting mechanisms for ICT-related incidents.",
  },
  {
    title: "Digital Resilience Testing",
    desc: "Threat-led penetration testing (TLPT), scenario-based testing, and operational resilience validation.",
  },
  {
    title: "Third-Party Risk Management",
    desc: "ICT service provider oversight, contract management, and critical dependency risk management.",
  },
  {
    title: "Business Continuity Planning",
    desc: "ICT business continuity plans, disaster recovery strategies, and recovery time objective validation.",
  },
  {
    title: "Information Sharing Arrangements",
    desc: "Cyber threat intelligence sharing frameworks and participation in information sharing mechanisms.",
  },
  {
    title: "Regulatory Compliance Support",
    desc: "Ongoing liaison with competent authorities, regulatory submissions, and compliance validation.",
  },
  {
    title: "ICT Training & Awareness",
    desc: "Staff training on ICT risk management, incident response, and digital operational resilience responsibilities.",
  },
];

const faqs = [
  {
    question: "What is DORA and who does it apply to?",
    answer:
      "The Digital Operational Resilience Act (DORA) is an EU regulation that establishes uniform requirements for ICT risk management in the financial sector. It applies to financial entities including banks, investment firms, insurance companies, payment institutions, crypto-asset service providers, and critical ICT third-party service providers. DORA becomes directly applicable across all EU member states from January 17, 2025, with no national transposition required.",
  },
  {
    question: "What are the key requirements of DORA?",
    answer:
      "DORA has five main pillars: (1) ICT Risk Management - comprehensive framework for identifying, managing, and mitigating ICT risks; (2) ICT-Related Incident Management - classification, response, recovery, and regulatory reporting of major incidents; (3) Digital Operational Resilience Testing - regular testing including advanced threat-led penetration testing (TLPT); (4) ICT Third-Party Risk Management - oversight and monitoring of critical service providers; (5) Information Sharing - participation in threat intelligence sharing arrangements.",
  },
  {
    question: "How long does DORA compliance implementation take?",
    answer:
      "Timeline varies based on organizational size, complexity, and current ICT risk management maturity. A focused gap assessment typically takes 4-6 weeks, while full DORA implementation requires 6-12 months. Organizations should focus on high-priority gaps first, particularly incident reporting procedures, resilience testing programs, and third-party risk management. Many financial entities are implementing DORA in phases to meet the January 2025 deadline.",
  },
  {
    question: "What is Threat-Led Penetration Testing (TLPT)?",
    answer:
      "TLPT is an advanced testing framework required by DORA for certain financial entities. It simulates real-world cyber attacks using intelligence-led scenarios that reflect actual threat actor tactics, techniques, and procedures (TTPs). TLPT involves red team testing by external testers, with participation from internal blue teams and independent threat intelligence providers. Testing scope covers people, processes, and technology across critical functions. Financial entities must conduct TLPT at least every three years.",
  },
];

const painPoints = [
  "Are we ready for DORA compliance?",
  "How do we test digital resilience?",
  "How do we manage third-party ICT risk?",
];

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
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
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
  <span className="rounded-full border border-slate-200/70 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200">
    {children}
  </span>
);

const DORAIllustration = () => (
  <svg viewBox="0 0 420 320" className="h-full w-full" aria-hidden="true">
    <defs>
      <linearGradient id="dora-panel" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#0f172a" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.2" />
      </linearGradient>
      <linearGradient id="dora-pulse" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#38bdf8" />
        <stop offset="100%" stopColor="#0ea5e9" />
      </linearGradient>
    </defs>
    
    {/* Central DORA emblem */}
    <rect x="160" y="100" width="100" height="120" rx="12" fill="url(#dora-panel)" stroke="#94a3b8" strokeOpacity="0.4" strokeWidth="2" />
    
    {/* DORA text */}
    <text x="210" y="145" fontSize="20" fill="#0ea5e9" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">DORA</text>
    <text x="210" y="165" fontSize="10" fill="#94a3b8" fontFamily="sans-serif" textAnchor="middle">Digital Operational</text>
    <text x="210" y="180" fontSize="10" fill="#94a3b8" fontFamily="sans-serif" textAnchor="middle">Resilience Act</text>
    
    {/* Compliance seal */}
    <circle cx="210" cy="200" r="15" fill="url(#dora-pulse)" fillOpacity="0.3" stroke="#0ea5e9" strokeWidth="2" />
    <path d="M205 200l3 3 6-6" stroke="#0ea5e9" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    
    {/* Four pillars */}
    <circle cx="80" cy="100" r="25" fill="url(#dora-pulse)" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="2" />
    <text x="80" y="98" fontSize="9" fill="#38bdf8" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">ICT</text>
    <text x="80" y="110" fontSize="9" fill="#38bdf8" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">RISK</text>
    
    <circle cx="340" cy="100" r="25" fill="url(#dora-pulse)" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="2" />
    <text x="340" y="98" fontSize="8" fill="#38bdf8" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">INCIDENT</text>
    <text x="340" y="110" fontSize="8" fill="#38bdf8" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">MGMT</text>
    
    <circle cx="80" cy="220" r="25" fill="url(#dora-pulse)" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="2" />
    <text x="80" y="218" fontSize="8" fill="#38bdf8" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">TESTING</text>
    <text x="80" y="230" fontSize="8" fill="#38bdf8" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">& TLPT</text>
    
    <circle cx="340" cy="220" r="25" fill="url(#dora-pulse)" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="2" />
    <text x="340" y="218" fontSize="8" fill="#38bdf8" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">3RD PARTY</text>
    <text x="340" y="230" fontSize="8" fill="#38bdf8" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">RISK</text>
    
    {/* Connection lines */}
    <path d="M105 100h30M285 100h30M105 220h30M285 220h30" stroke="#94a3b8" strokeOpacity="0.5" strokeWidth="2" />
    <path d="M135 120l-25 80M135 200l-25-80M285 120l25 80M285 200l25-80" stroke="#94a3b8" strokeOpacity="0.5" strokeDasharray="4 6" strokeWidth="2" />
    
    {/* EU stars */}
    <circle cx="190" cy="75" r="2" fill="#0ea5e9" />
    <circle cx="230" cy="75" r="2" fill="#0ea5e9" />
    <circle cx="210" cy="65" r="2" fill="#0ea5e9" />
  </svg>
);

export default function DORACompliancePage() {
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
      <Section className="pt-24 sm:pt-28 md:pt-0 pb-14 mt-10">
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
          <div className="absolute inset-0 bg-linear-to-b from-slate-900/80 via-slate-900/60 to-slate-950" />
          <div className="absolute -left-20 top-20 h-56 w-56 rounded-full bg-sky-500/20 blur-3xl" />
          <div className="absolute -right-24 bottom-6 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
        </div>

        <Container className="relative z-10 flex min-h-[86vh] flex-col justify-center">
          <motion.div variants={fadeUp} className="max-w-3xl">
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              Achieve DORA compliance and digital operational resilience.
            </h1>
            <p className="mt-4 text-lg text-white/80 md:text-xl">
              Comprehensive EU Digital Operational Resilience Act consulting that implements ICT risk management, incident response, resilience testing, and third-party oversight.
            </p>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Expert-led DORA implementation with gap assessment, ICT risk framework, threat-led penetration testing (TLPT), and regulatory compliance support for financial entities.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/contact"
                aria-label="Get DORA Compliant"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <motion.span
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  whileTap={reduceMotion ? undefined : { y: 0 }}
                  className="inline-flex items-center"
                >
                  Get DORA Compliant
                </motion.span>
              </Link>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12 max-w-4xl">
            <div className="grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80 md:grid-cols-3">
              {painPoints.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
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
              title="DORA compliance that strengthens digital operational resilience."
              subtitle="Meet EU regulatory requirements while building robust ICT risk management and operational resilience capabilities."
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
                      <div className="rounded-full bg-slate-900/5 p-3 text-slate-900 dark:bg-white/10 dark:text-white">
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

      {/* Compliance Section */}
      <Section className="bg-slate-50 dark:bg-slate-950/70">
        <Container>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-120px" }}>
            <SectionHeader
              eyebrow="Regulatory Framework"
              title="DORA aligned with broader EU financial services regulation."
              subtitle="Build operational resilience that supports DORA, NIS2, GDPR, and sector-specific regulatory requirements."
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
              title="Structured approach to DORA compliance implementation."
              subtitle="We follow the five DORA pillars systematically—from ICT asset identification to continuous resilience monitoring."
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
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">Implementation process</h3>
              <div className="relative mt-6">
                <div className="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-slate-300 to-transparent md:block dark:via-slate-700" />
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
                        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
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
              title="End-to-end DORA compliance and resilience services."
              subtitle="From initial gap assessment to ongoing resilience management, we guide financial entities through every DORA requirement."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {doraServices.map((item) => (
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

      {/* DORA Pillars Section */}
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
                eyebrow="DORA Pillars"
                title="Comprehensive coverage across all DORA requirements."
                subtitle="We address all five DORA pillars to build complete digital operational resilience programs."
              />
              <div className="mt-8">
                <div className="relative rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-900/70">
                  <div className="pointer-events-none absolute -inset-1 rounded-[22px] bg-gradient-to-r from-sky-500/30 via-cyan-500/20 to-transparent opacity-70" />
                  <div className="relative overflow-hidden rounded-2xl bg-slate-950/5 p-4 dark:bg-slate-950">
                    <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-sky-500/20 blur-2xl" />
                    <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-cyan-500/20 blur-2xl" />
                    <DORAIllustration />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="grid gap-4">
                {doraPillars.map((pillar) => (
                  <motion.div key={pillar.title} variants={fadeUp}>
                    <Card>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                        {pillar.title}
                      </h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {pillar.items.map((item) => (
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
              title="Financial services expertise that ensures DORA compliance."
              subtitle="We've guided banks, investment firms, and insurance companies through successful digital operational resilience programs."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Financial sector experience",
                  description: "Deep expertise in financial services regulation, ICT risk management, and operational resilience for banks and investment firms.",
                  Icon: IconAward,
                },
                {
                  title: "TLPT execution capability",
                  description: "Qualified threat-led penetration testing teams with experience conducting advanced resilience testing for financial entities.",
                  Icon: IconClipboard,
                },
                {
                  title: "Regulatory liaison support",
                  description: "Ongoing support for regulatory reporting, competent authority engagement, and compliance validation throughout DORA lifecycle.",
                  Icon: IconShield,
                },
              ].map((item) => (
                <motion.div key={item.title} variants={fadeUp}>
                  <Card className="h-full">
                    <div className="mb-4 inline-flex rounded-full bg-slate-900/5 p-3 text-slate-900 dark:bg-white/10 dark:text-white">
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
              title="Complete DORA compliance documentation and evidence."
              subtitle="Everything you need for regulatory compliance, resilience validation, and ongoing operational resilience management."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {deliverables.map((item) => (
                <motion.div key={item} variants={fadeUp}>
                  <Card>
                    <div className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" />
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
              title="DORA compliance for diverse financial entities."
              subtitle="Tailored implementation for banks, investment firms, insurance companies, and critical ICT service providers."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2">
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
              title="Flexible DORA programs for every implementation stage."
              subtitle="From initial readiness assessment to full implementation and ongoing managed resilience services."
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
              title="Common questions about DORA compliance."
              subtitle="Clear answers to help you understand the Digital Operational Resilience Act and implementation requirements."
            />
            <div className="mt-8 space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-slate-200/70 bg-white/80 p-5 dark:border-slate-800/70 dark:bg-slate-900/70"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between text-left text-sm font-semibold text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:text-white"
                    aria-expanded={openFaq === index}
                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  >
                    <span>{faq.question}</span>
                    <span className="text-slate-500">{openFaq === index ? "–" : "+"}</span>
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
              Achieve DORA compliance with confidence.
            </h2>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Expert ICT risk management and operational resilience implementation for EU financial entities.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                aria-label="Speak With a DORA Expert"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Speak With a DORA Expert
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
            Ready for DORA compliance?
          </div>
          <Link
            href="/contact"
            aria-label="Speak With a DORA Expert"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white"
          >
            Get Started
          </Link>
        </div>
      </div>
    </motion.main>
  );
}