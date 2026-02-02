"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

/* ===================== DATA ===================== */

const painPoints = [
  "Customers asking for SOC 2 before signing?",
  "Unsure whether you need Type I or Type II?",
  "Concerned about audit delays or failure?",
];

const outcomes = [
  {
    title: "Increased Customer Trust",
    description:
      "Demonstrate strong security and compliance posture through an independent SOC 2 attestation validated by third-party auditors.",
  },
  {
    title: "Reduced Vendor Risk",
    description:
      "Provide stakeholders with clear evidence of control effectiveness across systems and processes, building confidence in your services.",
  },
  {
    title: "Regulatory & Enterprise Readiness",
    description:
      "Meet enterprise, regulatory, and governance expectations with confidence through standardized SOC 2 compliance.",
  },
  {
    title: "Scalable Compliance Program",
    description:
      "Build controls that evolve with your business, cloud infrastructure, and customer demands across all service models.",
  },
];

const complianceBadges = [
  "SOC 2 Type I",
  "SOC 2 Type II",
  "AICPA",
  "SSAE 18",
  "Trust Services",
];

const methodology = [
  {
    title: "Scoping & Discovery",
    description:
      "Define systems, services, data flows, and Trust Services Criteria in scope. Identify critical assets handling sensitive data like PHI and PII.",
  },
  {
    title: "Readiness Assessment",
    description:
      "Identify control gaps and remediation actions before the formal audit. Address weaknesses early to streamline the certification process.",
  },
  {
    title: "Audit Planning & System Description",
    description:
      "Prepare comprehensive system descriptions and align audit boundaries with business operations. Submit documentation to guide auditor review.",
  },
  {
    title: "Fieldwork & Evidence Collection",
    description:
      "Collect and validate logs, policies, access reviews, and operational evidence. Auditors conduct interviews and sample testing to verify controls.",
  },
  {
    title: "Reporting & Attestation",
    description:
      "Review draft report, finalize management assertions and representation letters, and receive the final SOC 2 attestation report.",
  },
];

const processSteps = [
  { title: "Scope", description: "Define systems & trust categories." },
  { title: "Readiness", description: "Identify and fix gaps." },
  { title: "Planning", description: "System description & controls." },
  { title: "Fieldwork", description: "Evidence & testing." },
  { title: "Reporting", description: "Final SOC 2 report." },
];

const trustServicesCriteria = [
  {
    title: "Security (Mandatory)",
    items: ["Access control", "Monitoring", "Incident response", "Encryption"],
    description: "The foundation of all controls. Protects information and systems from unauthorized access.",
  },
  {
    title: "Availability",
    items: ["Uptime", "DR", "Resilience", "Performance"],
    description: "Ensures systems are accessible and operational as committed or agreed upon.",
  },
  {
    title: "Processing Integrity",
    items: ["Accuracy", "Completeness", "Timeliness", "Reliability"],
    description: "Guarantees data processing is accurate, complete, and delivered as intended.",
  },
  {
    title: "Confidentiality",
    items: ["Sensitive data", "Encryption", "Restrictions", "Proprietary info"],
    description: "Protects confidential information from unauthorized disclosure.",
  },
  {
    title: "Privacy",
    items: ["PII", "GDPR", "CCPA", "Data lifecycle"],
    description: "Governs collection, use, retention, disclosure, and disposal of personal information.",
  },
];

const deliverables = [
  "SOC 2 readiness & gap assessment report",
  "Trust Services Criteria control mapping",
  "Comprehensive system description document",
  "Evidence preparation & validation support",
  "Auditor coordination and liaison assistance",
  "Draft report review and feedback",
  "Final SOC 2 attestation report (Type I or Type II)",
  "Management assertion and representation letters",
  "Remediation roadmap & ongoing compliance guidance",
  "Control matrix and documentation package",
];

const useCases = [
  {
    title: "SaaS & Cloud Providers",
    description:
      "Meet customer and enterprise security assurance requirements for cloud-based services across SaaS, PaaS, and IaaS models.",
  },
  {
    title: "Fintech & Regulated Industries",
    description:
      "Demonstrate operational and data security controls to satisfy regulatory oversight and financial reporting requirements.",
  },
  {
    title: "Healthcare & HIPAA-Covered Entities",
    description:
      "Prove PHI protection capabilities and HIPAA alignment through independent SOC 2 validation for healthcare service providers.",
  },
  {
    title: "Vendor Due Diligence",
    description:
      "Provide SOC 2 reports during customer security reviews, RFPs, and third-party risk assessments to accelerate sales cycles.",
  },
  {
    title: "Post-Incident Assurance",
    description:
      "Rebuild stakeholder trust after security or compliance incidents through independent validation of remediated controls.",
  },
  {
    title: "IT & ITES Organizations",
    description:
      "Showcase security maturity and operational resilience for IT services, managed service providers, and outsourcing firms.",
  },
];

const engagementTiers = [
  {
    title: "SOC 2 Type I",
    description:
      "Evaluate design and implementation of controls at a specific point in time. Ideal for initial compliance validation.",
    bullets: ["Point-in-time assessment", "Design validation", "Early assurance", "Foundation building"],
  },
  {
    title: "SOC 2 Type II",
    description:
      "Assess operational effectiveness of controls over 6–12 months. Demonstrates consistent control execution over time.",
    bullets: ["6-12 month period", "Evidence-based testing", "High assurance", "Enterprise ready"],
  },
  {
    title: "Continuous Compliance Advisory",
    description:
      "Ongoing advisory and audit readiness support year-round with quarterly reviews and control maturity tracking.",
    bullets: ["Quarterly reviews", "Control monitoring", "Risk tracking", "Annual renewal support"],
  },
];

const soc2Services = [
  {
    title: "Gap Assessment & Readiness",
    desc: "Comprehensive evaluation of current security controls against SOC 2 requirements with detailed remediation roadmap.",
  },
  {
    title: "Control Design & Implementation",
    desc: "Design and implementation of security controls, policies, and procedures aligned with Trust Services Criteria.",
  },
  {
    title: "System Description Development",
    desc: "Creation of detailed system descriptions outlining infrastructure, processes, and control environment for audit.",
  },
  {
    title: "Evidence Collection Support",
    desc: "Assistance with gathering, organizing, and validating evidence including logs, policies, and operational records.",
  },
  {
    title: "Auditor Coordination",
    desc: "Liaison with independent auditors, managing audit timelines, and facilitating smooth fieldwork execution.",
  },
  {
    title: "Report Review & Finalization",
    desc: "Expert review of draft reports, management assertion preparation, and final attestation report validation.",
  },
  {
    title: "Training & Awareness",
    desc: "Staff training on SOC 2 requirements, control execution, and compliance responsibilities across the organization.",
  },
  {
    title: "Annual Surveillance & Monitoring",
    desc: "Ongoing compliance monitoring, control testing, and readiness preparation for annual SOC 2 renewals.",
  },
  {
    title: "Multi-Criteria Expansion",
    desc: "Strategic addition of Availability, Processing Integrity, Confidentiality, or Privacy criteria to existing SOC 2 reports.",
  },
];

const faqs = [
  {
    question: "What is SOC 2 compliance?",
    answer:
      "SOC 2 is an independent attestation framework developed by the American Institute of Certified Public Accountants (AICPA) that evaluates how service organizations manage and protect customer data using the Trust Services Criteria. It provides standardized assurance over security, availability, processing integrity, confidentiality, and privacy controls.",
  },
  {
    question: "What is the difference between Type I and Type II?",
    answer:
      "SOC 2 Type I evaluates the design and implementation of controls at a specific point in time, verifying that controls are properly designed and in place. SOC 2 Type II evaluates operational effectiveness over a defined period (typically 6–12 months), testing real-world evidence to confirm controls function consistently as intended. Type II provides stronger assurance and is preferred by enterprise clients.",
  },
  {
    question: "How long does a SOC 2 audit take?",
    answer:
      "A SOC 2 audit typically takes 6–8 weeks to several months depending on organizational readiness, scope complexity, available resources, company size, and current security maturity. The timeline includes scoping, planning, fieldwork, and reporting phases. Organizations with strong existing controls and documentation can complete audits more quickly.",
  },
  {
    question: "Will this disrupt operations?",
    answer:
      "No. SOC 2 audits are evidence-based and do not involve intrusive testing that disrupts business operations. Auditors review documentation, interview staff, and examine evidence such as logs and policies. The process is designed to assess controls without interfering with day-to-day operations, though internal resources will need to dedicate time to evidence collection and interviews.",
  },
  {
    question: "Which Trust Services Criteria should I include?",
    answer:
      "Security is mandatory for all SOC 2 reports. Additional criteria—Availability, Processing Integrity, Confidentiality, and Privacy—should be selected based on your services, customer expectations, and contractual commitments. Organizations often start with Security only and add criteria over time as they mature. Consider what assurances your customers require and what controls are most critical to your service delivery.",
  },
  {
    question: "How much does SOC 2 compliance cost?",
    answer:
      "SOC 2 costs vary widely based on several factors: the type and number of Trust Services Criteria in scope, environment size, report type (Type I or Type II), number of applications and systems, and employee count. Initial audits are typically more expensive, with potential cost reductions of 10–20% in subsequent years. After a scoping session, we provide tailored cost estimates based on your specific requirements.",
  },
];

const reportComparison = [
  {
    report: "SOC 1",
    focus: "Internal Control over Financial Reporting (ICFR)",
    purpose: "Evaluates financial reporting controls relevant to users' financial audits",
    audience: "Auditors, current clients (with NDA for prospects)",
    distribution: "Restricted – primarily for auditor-to-auditor communication",
  },
  {
    report: "SOC 2",
    focus: "Trust Services Criteria (Security, Availability, Processing Integrity, Confidentiality, Privacy)",
    purpose: "Assesses operational and data security controls of a service organization",
    audience: "Clients, regulators, management, third parties",
    distribution: "Limited distribution – often shared under NDA due to sensitive details",
  },
  {
    report: "SOC 3",
    focus: "Same as SOC 2 (Trust Services Criteria)",
    purpose: "Provides general assurance of security controls in a simplified, public-facing format",
    audience: "General public",
    distribution: "Unrestricted – can be publicly shared as a trust-building and marketing tool",
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

/* ===================== SOC 2 ILLUSTRATION ===================== */

const SOC2Illustration = () => (
  <svg viewBox="0 0 420 340" className="h-full w-full" aria-hidden="true">
    <defs>
      <linearGradient id="soc2-panel" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.2" />
      </linearGradient>
      <linearGradient id="soc2-pulse" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#a78bfa" />
        <stop offset="100%" stopColor="#7c3aed" />
      </linearGradient>
    </defs>
    
    {/* Central SOC 2 emblem */}
    <rect x="150" y="90" width="120" height="140" rx="14" fill="url(#soc2-panel)" stroke="#a78bfa" strokeOpacity="0.5" strokeWidth="2" />
    
    {/* SOC 2 text */}
    <text x="210" y="135" fontSize="24" fill="#7c3aed" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">SOC 2</text>
    <text x="210" y="160" fontSize="11" fill="#94a3b8" fontFamily="sans-serif" textAnchor="middle">Service Organization</text>
    <text x="210" y="175" fontSize="11" fill="#94a3b8" fontFamily="sans-serif" textAnchor="middle">Control Report</text>
    
    {/* Trust badge */}
    <circle cx="210" cy="200" r="18" fill="url(#soc2-pulse)" fillOpacity="0.3" stroke="#7c3aed" strokeWidth="2.5" />
    <path d="M203 200l4 4 8-8" stroke="#7c3aed" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    
    {/* Five Trust Services Criteria circles */}
    <circle cx="70" cy="100" r="28" fill="url(#soc2-pulse)" fillOpacity="0.2" stroke="#a78bfa" strokeWidth="2" />
    <text x="70" y="95" fontSize="9" fill="#a78bfa" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">SECURITY</text>
    <text x="70" y="108" fontSize="8" fill="#a78bfa" fontFamily="sans-serif" textAnchor="middle" fontWeight="500">(Required)</text>
    
    <circle cx="350" cy="100" r="28" fill="url(#soc2-pulse)" fillOpacity="0.2" stroke="#a78bfa" strokeWidth="2" />
    <text x="350" y="98" fontSize="8" fill="#a78bfa" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">AVAILABILITY</text>
    <text x="350" y="108" fontSize="8" fill="#a78bfa" fontFamily="sans-serif" textAnchor="middle" fontWeight="500">(Optional)</text>
    
    <circle cx="70" cy="240" r="28" fill="url(#soc2-pulse)" fillOpacity="0.2" stroke="#a78bfa" strokeWidth="2" />
    <text x="70" y="233" fontSize="7" fill="#a78bfa" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">PROCESSING</text>
    <text x="70" y="243" fontSize="7" fill="#a78bfa" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">INTEGRITY</text>
    <text x="70" y="253" fontSize="8" fill="#a78bfa" fontFamily="sans-serif" textAnchor="middle" fontWeight="500">(Optional)</text>
    
    <circle cx="350" cy="240" r="28" fill="url(#soc2-pulse)" fillOpacity="0.2" stroke="#a78bfa" strokeWidth="2" />
    <text x="350" y="233" fontSize="7" fill="#a78bfa" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">CONFIDENTI-</text>
    <text x="350" y="243" fontSize="7" fill="#a78bfa" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">ALITY</text>
    <text x="350" y="253" fontSize="8" fill="#a78bfa" fontFamily="sans-serif" textAnchor="middle" fontWeight="500">(Optional)</text>
    
    <circle cx="210" cy="290" r="28" fill="url(#soc2-pulse)" fillOpacity="0.2" stroke="#a78bfa" strokeWidth="2" />
    <text x="210" y="288" fontSize="8" fill="#a78bfa" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">PRIVACY</text>
    <text x="210" y="300" fontSize="8" fill="#a78bfa" fontFamily="sans-serif" textAnchor="middle" fontWeight="500">(Optional)</text>
    
    {/* Connection lines */}
    <path d="M98 100h30M278 100h45M98 240h30M278 240h45M210 230v35" stroke="#94a3b8" strokeOpacity="0.4" strokeWidth="2" />
    <path d="M130 120l-30 100M130 220l-30-100M290 120l30 100M290 220l30-100" stroke="#94a3b8" strokeOpacity="0.3" strokeDasharray="4 6" strokeWidth="2" />
    
    {/* AICPA indicator */}
    <circle cx="185" cy="65" r="2.5" fill="#7c3aed" />
    <circle cx="210" cy="55" r="2.5" fill="#7c3aed" />
    <circle cx="235" cy="65" r="2.5" fill="#7c3aed" />
    <text x="210" y="40" fontSize="8" fill="#7c3aed" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">AICPA</text>
  </svg>
);



export default function SOC2CompliancePage() {
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
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/85 via-slate-900/70 to-slate-950" />
          <div className="absolute -left-24 top-16 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
        </div>

        <Container className="relative z-10 flex min-h-[86vh] flex-col justify-center">
          <motion.div variants={fadeUp} className="max-w-3xl">
            <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
              Compliance & Trust Assurance
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              SOC 2 Compliance Services
            </h1>
            <p className="mt-4 text-lg text-white/85 md:text-xl">
              Build trust, prove resilience, and align security with your business growth through independent SOC 2 attestation.
            </p>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Expert-led SOC 2 implementation with gap assessment, control design, evidence collection, and auditor coordination for service organizations across SaaS, fintech, healthcare, and IT services.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/contact"
                aria-label="Talk to a SOC 2 Expert"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <motion.span
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  whileTap={reduceMotion ? undefined : { y: 0 }}
                  className="inline-flex items-center"
                >
                  Talk to a SOC 2 Expert
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
              title="SOC 2 compliance that builds credibility."
              subtitle="Independent assurance for modern service organizations across SaaS, cloud, fintech, and healthcare sectors."
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
              eyebrow="Standards"
              title="Aligned with AICPA Trust Services Framework."
              subtitle="SOC 2 reports provide standardized, independent assurance based on rigorous attestation standards."
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
              title="Structured approach to SOC 2 certification."
              subtitle="We guide organizations through every phase—from initial scoping to final attestation and ongoing compliance."
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
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">Audit process overview</h3>
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
              title="End-to-end SOC 2 compliance and advisory services."
              subtitle="From gap assessment to annual renewals, we provide comprehensive support throughout your SOC 2 journey."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {soc2Services.map((item) => (
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

      {/* Trust Services Criteria Section */}
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
                eyebrow="Trust Services Criteria"
                title="Comprehensive coverage across all five TSC categories."
                subtitle="Security is mandatory. Additional criteria can be added based on your service model and customer requirements."
              />
              <div className="mt-8">
                <div className="relative rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-900/70">
                  <div className="pointer-events-none absolute -inset-1 rounded-[22px] bg-gradient-to-r from-violet-500/30 via-purple-500/20 to-transparent opacity-70" />
                  <div className="relative overflow-hidden rounded-2xl bg-slate-950/5 p-4 dark:bg-slate-950">
                    <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-violet-500/20 blur-2xl" />
                    <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-purple-500/20 blur-2xl" />
                    <SOC2Illustration />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="grid gap-4">
                {trustServicesCriteria.map((criteria) => (
                  <motion.div key={criteria.title} variants={fadeUp}>
                    <Card>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
                        {criteria.title}
                      </h3>
                      <p className="mt-2 text-xs text-slate-600 dark:text-slate-400">
                        {criteria.description}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {criteria.items.map((item) => (
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

      {/* SOC Report Comparison Section */}
      <Section className="bg-slate-50 dark:bg-slate-950/70">
        <Container>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
          >
            <SectionHeader
              eyebrow="Report Types"
              title="Understanding SOC 1, SOC 2, and SOC 3 differences."
              subtitle="Each SOC report serves different purposes, audiences, and distribution needs within the attestation framework."
            />
            <div className="mt-10 overflow-x-auto">
              <div className="min-w-[768px]">
                <div className="grid grid-cols-5 gap-4 rounded-t-2xl border border-slate-200/70 bg-violet-50/50 p-4 text-xs font-semibold uppercase tracking-wider text-violet-900 dark:border-slate-800/70 dark:bg-violet-900/20 dark:text-violet-300">
                  <div>Report Type</div>
                  <div>Focus Area</div>
                  <div>Purpose</div>
                  <div>Audience</div>
                  <div>Distribution</div>
                </div>
                {reportComparison.map((item, index) => (
                  <motion.div
                    key={item.report}
                    variants={fadeUp}
                    className={`grid grid-cols-5 gap-4 border-x border-b border-slate-200/70 p-4 text-sm dark:border-slate-800/70 ${
                      index === reportComparison.length - 1 ? "rounded-b-2xl" : ""
                    } ${index % 2 === 0 ? "bg-white/50 dark:bg-slate-900/30" : "bg-slate-50/50 dark:bg-slate-900/50"}`}
                  >
                    <div className="font-semibold text-violet-600 dark:text-violet-400">{item.report}</div>
                    <div className="text-slate-700 dark:text-slate-300">{item.focus}</div>
                    <div className="text-slate-600 dark:text-slate-400">{item.purpose}</div>
                    <div className="text-slate-600 dark:text-slate-400">{item.audience}</div>
                    <div className="text-slate-600 dark:text-slate-400">{item.distribution}</div>
                  </motion.div>
                ))}
              </div>
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
              title="Trusted SOC 2 expertise since 2017."
              subtitle="We've guided service organizations across IT/ITES, SaaS, fintech, healthcare, and manufacturing through successful SOC 2 certifications."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Proactive cybersecurity approach",
                  description: "We take a proactive stance on security, working closely with clients to identify risks early and build scalable compliance programs that grow with your business.",
                  Icon: IconShield,
                },
                {
                  title: "Cross-industry experience",
                  description: "Deep expertise across IT/ITES, manufacturing, healthcare, fintech, and banking sectors with proven SOC 2 implementation success for diverse service models.",
                  Icon: IconClipboard,
                },
                {
                  title: "Dedicated support team",
                  description: "Highly skilled professionals committed to exceptional service, delivering audit readiness support, evidence validation, and ongoing compliance guidance throughout your SOC 2 lifecycle.",
                  Icon: IconAward,
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
              title="Complete SOC 2 compliance documentation and support."
              subtitle="Everything you need for audit readiness, attestation, and ongoing compliance management."
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
              title="SOC 2 compliance for diverse service organizations."
              subtitle="Tailored implementation for SaaS providers, fintech platforms, healthcare services, and IT/ITES organizations."
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
              title="Flexible SOC 2 programs for every compliance stage."
              subtitle="Choose from Type I validation, Type II operational testing, or continuous compliance advisory based on your needs."
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
              title="Common questions about SOC 2 compliance."
              subtitle="Clear answers to help you understand SOC 2 requirements, timelines, costs, and implementation considerations."
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
              Ready to start your SOC 2 journey?
            </h2>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Prepare, pass, and scale with confidence. Build credibility that drives business growth.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                aria-label="Speak with a SOC 2 Expert"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Speak with a SOC 2 Expert
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
            Start SOC 2 compliance
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