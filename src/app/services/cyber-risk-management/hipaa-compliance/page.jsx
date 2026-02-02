"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const outcomes = [
  {
    title: "Protect patient health information",
    description:
      "Safeguard Protected Health Information (PHI) through comprehensive administrative, physical, and technical safeguards.",
  },
  {
    title: "Avoid costly penalties",
    description:
      "Prevent HIPAA violations and regulatory fines through proactive compliance management and risk mitigation.",
  },
  {
    title: "Build patient trust",
    description:
      "Demonstrate commitment to privacy and security, strengthening patient confidence and organizational reputation.",
  },
  {
    title: "Secure healthcare systems",
    description:
      "Implement robust security controls that protect electronic health records, medical devices, and healthcare IT infrastructure.",
  },
];

const complianceBadges = [
  "HIPAA",
  "HITECH",
  "Privacy Rule",
  "Security Rule",
  "Breach Notification",
  "FDA",
];

const methodology = [
  {
    title: "PHI Inventory & Mapping",
    description:
      "Identify systems, applications, and data flows containing Protected Health Information. Map workforce roles with PHI access.",
  },
  {
    title: "HIPAA Risk Assessment",
    description:
      "Conduct comprehensive risk analysis evaluating administrative, physical, and technical safeguards against HIPAA Security Rule requirements.",
  },
  {
    title: "Safeguard Implementation",
    description:
      "Deploy required and addressable safeguards including access controls, encryption, audit controls, and transmission security.",
  },
  {
    title: "Security Testing & Validation",
    description:
      "Perform penetration testing, vulnerability assessments, and control effectiveness validation to verify safeguard implementation.",
  },
  {
    title: "Ongoing Compliance Management",
    description:
      "Establish continuous monitoring, workforce training, incident response procedures, and audit readiness programs.",
  },
];

const processSteps = [
  {
    title: "Identify",
    description: "Systems, workforce roles, PHI data flows.",
  },
  {
    title: "Assess",
    description: "Administrative, technical, physical safeguards.",
  },
  {
    title: "Secure",
    description: "Access control, encryption, network protection.",
  },
  {
    title: "Test",
    description: "Penetration testing, control validation.",
  },
  {
    title: "Maintain",
    description: "Audits, training, continuous monitoring.",
  },
];

const hipaaSafeguards = [
  {
    title: "Administrative Safeguards",
    items: ["Security mgmt", "Workforce security", "Training", "Contingency"],
  },
  {
    title: "Physical Safeguards",
    items: ["Facility access", "Workstation security", "Device controls", "Media disposal"],
  },
  {
    title: "Technical Safeguards",
    items: ["Access control", "Audit controls", "Integrity", "Transmission security"],
  },
  {
    title: "Privacy Requirements",
    items: ["Notice", "Authorization", "Minimum necessary", "Accounting"],
  },
];

const deliverables = [
  "HIPAA gap assessment report with prioritized remediation roadmap",
  "Protected Health Information (PHI) inventory and data flow mapping",
  "HIPAA Security Rule risk analysis documentation",
  "Administrative safeguards policies and procedures",
  "Physical safeguards implementation plan and evidence",
  "Technical safeguards configuration and validation",
  "Privacy Rule compliance documentation and Notice of Privacy Practices",
  "Breach notification procedures and incident response plan",
  "Business Associate Agreement (BAA) templates and vendor management",
  "Workforce HIPAA training program and completion records",
  "Audit controls and logging implementation",
  "Ongoing compliance monitoring and annual review program",
];

const useCases = [
  {
    title: "Healthcare Providers",
    description:
      "HIPAA compliance for hospitals, clinics, physician practices, and healthcare delivery organizations managing patient records.",
  },
  {
    title: "Health Plans & Payers",
    description:
      "Security and privacy programs for health insurance companies, HMOs, and Medicare/Medicaid managed care organizations.",
  },
  {
    title: "Healthcare Clearinghouses",
    description:
      "Compliance programs for entities that process nonstandard health information into standard formats for claims processing.",
  },
  {
    title: "Business Associates",
    description:
      "HIPAA compliance for vendors, contractors, and service providers that access, process, or store PHI on behalf of covered entities.",
  },
];

const engagementTiers = [
  {
    title: "HIPAA Readiness Assessment",
    description:
      "Current state evaluation against HIPAA Security and Privacy Rules with detailed gap analysis and compliance roadmap.",
    bullets: ["3-5 weeks", "Gap report", "Compliance roadmap"],
  },
  {
    title: "Full HIPAA Implementation",
    description:
      "End-to-end HIPAA compliance program from risk analysis through safeguard implementation and audit readiness.",
    bullets: ["4-8 months", "Complete program", "Audit support"],
  },
  {
    title: "Managed Compliance",
    description:
      "Ongoing HIPAA compliance management with continuous monitoring, annual risk assessments, and regulatory guidance.",
    bullets: ["Annual program", "Continuous monitoring", "Training & audits"],
  },
];

const hipaaServices = [
  {
    title: "HIPAA Gap Assessment",
    desc: "Comprehensive evaluation of administrative, physical, and technical safeguards against Security Rule requirements.",
  },
  {
    title: "Security Rule Risk Analysis",
    desc: "Required risk analysis identifying vulnerabilities and threats to electronic Protected Health Information (ePHI).",
  },
  {
    title: "Privacy Rule Compliance",
    desc: "Privacy policies, Notice of Privacy Practices, authorization forms, and minimum necessary procedures.",
  },
  {
    title: "Technical Safeguard Implementation",
    desc: "Access controls, encryption, audit logging, integrity controls, and transmission security deployment.",
  },
  {
    title: "Physical & Administrative Safeguards",
    desc: "Facility access controls, workstation security, security management processes, and workforce training programs.",
  },
  {
    title: "Breach Notification & Incident Response",
    desc: "Breach assessment procedures, notification processes, and incident response plans compliant with Breach Notification Rule.",
  },
  {
    title: "Business Associate Management",
    desc: "Business Associate Agreement (BAA) templates, vendor risk assessments, and third-party compliance oversight.",
  },
  {
    title: "HIPAA Security Testing",
    desc: "Penetration testing, vulnerability assessments, and safeguard effectiveness validation for healthcare environments.",
  },
  {
    title: "Audit Readiness & Documentation",
    desc: "Compliance evidence collection, policy documentation, and preparation for OCR audits and investigations.",
  },
];

const faqs = [
  {
    question: "What is HIPAA and who must comply?",
    answer:
      "The Health Insurance Portability and Accountability Act (HIPAA) is a federal law that establishes privacy and security standards for Protected Health Information (PHI). HIPAA applies to covered entities (healthcare providers, health plans, and healthcare clearinghouses) and their business associates (vendors and contractors that access PHI). Compliance is mandatory for any organization that creates, receives, maintains, or transmits PHI in electronic form.",
  },
  {
    question: "What are the main HIPAA requirements?",
    answer:
      "HIPAA has three main rules: (1) Privacy Rule - governs use and disclosure of PHI, requires Notice of Privacy Practices, patient rights, and minimum necessary standard; (2) Security Rule - establishes administrative, physical, and technical safeguards for electronic PHI (ePHI), including access controls, encryption, audit controls, and risk analysis; (3) Breach Notification Rule - requires notification to patients, HHS, and potentially media when PHI is breached. All three rules work together to protect patient information.",
  },
  {
    question: "How long does HIPAA compliance implementation take?",
    answer:
      "Timeline varies based on organization size, complexity, and current security posture. A focused gap assessment typically takes 3-5 weeks, while full HIPAA compliance implementation requires 4-8 months. Key factors affecting timeline include: number of systems containing PHI, existing security controls, workforce size requiring training, and technical infrastructure complexity. Organizations should prioritize high-risk gaps first, particularly access controls, encryption, and audit logging.",
  },
  {
    question: "What is a HIPAA risk analysis and why is it required?",
    answer:
      "The HIPAA Security Rule requires covered entities and business associates to conduct an accurate and thorough risk analysis of potential risks and vulnerabilities to ePHI. The risk analysis must identify where ePHI is created, received, maintained, or transmitted; identify potential threats and vulnerabilities; assess current security measures; determine likelihood and impact of potential risks; and document findings and remediation plans. This is not a one-time activity - risk analyses should be conducted regularly and whenever there are environmental or operational changes.",
  },
];

const painPoints = [
  "Are we HIPAA compliant?",
  "How do we protect patient health information?",
  "What safeguards must we implement?",
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

const HIPAAIllustration = () => (
  <svg viewBox="0 0 420 320" className="h-full w-full" aria-hidden="true">
    <defs>
      <linearGradient id="hipaa-panel" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#0f172a" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.2" />
      </linearGradient>
      <linearGradient id="hipaa-pulse" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#38bdf8" />
        <stop offset="100%" stopColor="#0ea5e9" />
      </linearGradient>
    </defs>
    
    {/* Central HIPAA shield */}
    <path d="M210 60l70 30v60c0 50-35 90-70 100-35-10-70-50-70-100V90l70-30z" 
          fill="url(#hipaa-panel)" stroke="#94a3b8" strokeOpacity="0.4" strokeWidth="2" />
    
    {/* HIPAA text */}
    <text x="210" y="145" fontSize="22" fill="#0ea5e9" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">HIPAA</text>
    <text x="210" y="165" fontSize="9" fill="#94a3b8" fontFamily="sans-serif" textAnchor="middle">Protected Health Information</text>
    
    {/* Medical cross */}
    <rect x="205" y="110" width="10" height="25" rx="2" fill="#0ea5e9" fillOpacity="0.6" />
    <rect x="198" y="117" width="24" height="10" rx="2" fill="#0ea5e9" fillOpacity="0.6" />
    
    {/* Three safeguard pillars */}
    <rect x="60" y="90" width="50" height="140" rx="8" fill="url(#hipaa-pulse)" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="2" />
    <text x="85" y="115" fontSize="8" fill="#38bdf8" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">ADMIN</text>
    <text x="85" y="200" fontSize="7" fill="#38bdf8" fontFamily="sans-serif" textAnchor="middle">Security</text>
    <text x="85" y="210" fontSize="7" fill="#38bdf8" fontFamily="sans-serif" textAnchor="middle">Management</text>
    
    <rect x="185" y="190" width="50" height="70" rx="8" fill="url(#hipaa-pulse)" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="2" />
    <text x="210" y="215" fontSize="8" fill="#38bdf8" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">PHYSICAL</text>
    <text x="210" y="240" fontSize="7" fill="#38bdf8" fontFamily="sans-serif" textAnchor="middle">Facility</text>
    <text x="210" y="250" fontSize="7" fill="#38bdf8" fontFamily="sans-serif" textAnchor="middle">Access</text>
    
    <rect x="310" y="90" width="50" height="140" rx="8" fill="url(#hipaa-pulse)" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="2" />
    <text x="335" y="115" fontSize="8" fill="#38bdf8" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">TECHNICAL</text>
    <text x="335" y="200" fontSize="7" fill="#38bdf8" fontFamily="sans-serif" textAnchor="middle">Access</text>
    <text x="335" y="210" fontSize="7" fill="#38bdf8" fontFamily="sans-serif" textAnchor="middle">Controls</text>
    
    {/* Connection lines */}
    <path d="M110 160h70M240 160h70M210 180l0 10" stroke="#94a3b8" strokeOpacity="0.5" strokeWidth="2" />
    
    {/* Privacy & Security Rules */}
    <circle cx="150" cy="50" r="18" fill="url(#hipaa-pulse)" fillOpacity="0.3" stroke="#0ea5e9" strokeWidth="1.5" />
    <text x="150" y="54" fontSize="8" fill="#0ea5e9" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">Privacy</text>
    
    <circle cx="270" cy="50" r="18" fill="url(#hipaa-pulse)" fillOpacity="0.3" stroke="#0ea5e9" strokeWidth="1.5" />
    <text x="270" y="54" fontSize="8" fill="#0ea5e9" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">Security</text>
  </svg>
);

export default function HIPAACompliancePage() {
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
              Achieve HIPAA compliance and protect patient health information.
            </h1>
            <p className="mt-4 text-lg text-white/80 md:text-xl">
              Comprehensive HIPAA consulting that implements Privacy Rule, Security Rule, and Breach Notification requirements to safeguard Protected Health Information.
            </p>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Expert-led implementation with risk analysis, safeguard deployment, workforce training, and audit readiness for healthcare providers and business associates.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/contact"
                aria-label="Get HIPAA Compliant"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <motion.span
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  whileTap={reduceMotion ? undefined : { y: 0 }}
                  className="inline-flex items-center"
                >
                  Get HIPAA Compliant
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
              title="HIPAA compliance that protects patients and organizations."
              subtitle="Meet federal privacy and security requirements while building trust through comprehensive PHI protection."
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
              title="HIPAA aligned with healthcare security and privacy standards."
              subtitle="Build compliance programs that satisfy Privacy Rule, Security Rule, and support broader healthcare regulations."
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
              title="Structured approach to HIPAA compliance implementation."
              subtitle="We systematically address Privacy Rule, Security Rule, and Breach Notification requirements through proven methodologies."
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
              title="End-to-end HIPAA compliance and PHI protection services."
              subtitle="From initial gap assessment to ongoing compliance management, we guide healthcare organizations through every HIPAA requirement."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {hipaaServices.map((item) => (
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

      {/* HIPAA Safeguards Section */}
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
                eyebrow="HIPAA Safeguards"
                title="Comprehensive coverage across all safeguard categories."
                subtitle="We implement administrative, physical, technical, and privacy safeguards to protect Protected Health Information."
              />
              <div className="mt-8">
                <div className="relative rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-900/70">
                  <div className="pointer-events-none absolute -inset-1 rounded-[22px] bg-gradient-to-r from-sky-500/30 via-cyan-500/20 to-transparent opacity-70" />
                  <div className="relative overflow-hidden rounded-2xl bg-slate-950/5 p-4 dark:bg-slate-950">
                    <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-sky-500/20 blur-2xl" />
                    <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-cyan-500/20 blur-2xl" />
                    <HIPAAIllustration />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="grid gap-4">
                {hipaaSafeguards.map((safeguard) => (
                  <motion.div key={safeguard.title} variants={fadeUp}>
                    <Card>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                        {safeguard.title}
                      </h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {safeguard.items.map((item) => (
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
              title="Healthcare expertise that ensures HIPAA compliance success."
              subtitle="We've guided healthcare providers, payers, and business associates through successful HIPAA compliance programs."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Healthcare sector experience",
                  description: "Deep expertise in healthcare privacy, security, and compliance for providers, payers, and healthcare technology vendors.",
                  Icon: IconAward,
                },
                {
                  title: "Technical safeguard implementation",
                  description: "Proven expertise deploying access controls, encryption, audit logging, and security technologies in healthcare environments.",
                  Icon: IconClipboard,
                },
                {
                  title: "OCR audit readiness",
                  description: "Comprehensive documentation and evidence collection to prepare for Office for Civil Rights audits and investigations.",
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
              title="Complete HIPAA compliance documentation and evidence."
              subtitle="Everything you need for regulatory compliance, audit readiness, and ongoing PHI protection."
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
              title="HIPAA compliance for diverse healthcare entities."
              subtitle="Tailored implementation for covered entities and business associates across the healthcare ecosystem."
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
              title="Flexible HIPAA programs for every implementation stage."
              subtitle="From initial readiness assessment to full implementation and ongoing managed compliance services."
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
              title="Common questions about HIPAA compliance."
              subtitle="Clear answers to help you understand HIPAA requirements and implementation processes."
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
              Protect patient data with comprehensive HIPAA compliance.
            </h2>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Expert implementation of Privacy Rule, Security Rule, and Breach Notification requirements for healthcare organizations.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                aria-label="Speak With a HIPAA Expert"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Speak With a HIPAA Expert
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
            Ready for HIPAA compliance?
          </div>
          <Link
            href="/contact"
            aria-label="Speak With a HIPAA Expert"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white"
          >
            Get Started
          </Link>
        </div>
      </div>
    </motion.main>
  );
}