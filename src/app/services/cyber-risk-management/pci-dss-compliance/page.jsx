"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const outcomes = [
  {
    title: "Secure payment card data",
    description:
      "Protect cardholder data with technical and operational controls aligned to PCI DSS v4.0 requirements.",
  },
  {
    title: "Prevent payment fraud",
    description:
      "Implement multi-layered security controls that detect, prevent, and respond to payment card fraud attempts.",
  },
  {
    title: "Maintain compliance status",
    description:
      "Achieve and sustain PCI DSS compliance through continuous monitoring, testing, and validation processes.",
  },
  {
    title: "Reduce breach liability",
    description:
      "Minimize financial exposure from card data breaches with comprehensive security controls and audit-ready documentation.",
  },
];

const complianceBadges = [
  "PCI DSS v4.0",
  "SAQ A-EP",
  "SAQ D",
  "PA-DSS",
  "P2PE",
  "AOC Ready",
];

const methodology = [
  {
    title: "Cardholder Data Environment (CDE) Scoping",
    description:
      "Define CDE boundaries, map payment flows, identify system components, and segment payment infrastructure from general networks.",
  },
  {
    title: "Gap Analysis & Risk Assessment",
    description:
      "Assess current controls against 12 PCI DSS requirements, identify vulnerabilities, and prioritize remediation based on risk.",
  },
  {
    title: "Security Controls Implementation",
    description:
      "Deploy network segmentation, encryption, access controls, logging, and monitoring solutions across payment infrastructure.",
  },
  {
    title: "Testing & Validation",
    description:
      "Conduct vulnerability scans (ASV), penetration testing, and validation of security controls per PCI DSS requirements.",
  },
  {
    title: "Compliance Documentation & AOC Support",
    description:
      "Prepare Self-Assessment Questionnaire (SAQ), Attestation of Compliance (AOC), and supporting evidence for QSA audits.",
  },
];

const processSteps = [
  {
    title: "Scope",
    description: "CDE mapping, payment flows, system inventory.",
  },
  {
    title: "Assess",
    description: "Gap analysis, vulnerability assessment, risk evaluation.",
  },
  {
    title: "Remediate",
    description: "Control implementation, security hardening, segmentation.",
  },
  {
    title: "Test",
    description: "ASV scans, penetration tests, control validation.",
  },
  {
    title: "Validate",
    description: "SAQ completion, AOC preparation, QSA audit support.",
  },
];

const pciRequirements = [
  {
    title: "Network Security",
    items: ["Firewalls", "Network segmentation", "DMZ architecture", "Wireless security"],
  },
  {
    title: "Data Protection",
    items: ["Encryption at rest", "Encryption in transit", "Key management", "Data retention"],
  },
  {
    title: "Access Control",
    items: ["MFA", "Role-based access", "User provisioning", "Password policies"],
  },
  {
    title: "Monitoring & Testing",
    items: ["Log management", "File integrity", "Vulnerability scans", "Pen testing"],
  },
];

const deliverables = [
  "PCI DSS v4.0 gap analysis report with prioritized remediation roadmap",
  "Cardholder Data Environment (CDE) network diagrams and data flow maps",
  "PCI DSS compliance assessment report against all 12 requirements",
  "Network segmentation architecture and implementation guide",
  "Encryption and key management policies and procedures",
  "Access control policies with role-based access control (RBAC) framework",
  "Vulnerability management program with ASV scan reports",
  "Penetration testing reports for internal and external networks",
  "Security incident response plan for payment card breaches",
  "PCI DSS policies, procedures, and standards documentation",
  "Self-Assessment Questionnaire (SAQ) completion for applicable validation",
  "Attestation of Compliance (AOC) support and audit-ready evidence package",
];

const useCases = [
  {
    title: "E-Commerce & Retail",
    description:
      "Secure online payment processing, protect customer card data, and maintain PCI compliance for digital transactions.",
  },
  {
    title: "Payment Service Providers",
    description:
      "Achieve PCI DSS Level 1 compliance for payment gateways, processors, and financial service applications.",
  },
  {
    title: "Hospitality & Travel",
    description:
      "Protect payment card data in hotel, restaurant, and travel booking systems with PCI DSS controls.",
  },
  {
    title: "Healthcare Organizations",
    description:
      "Secure patient payment processing and medical billing systems while maintaining HIPAA and PCI DSS compliance.",
  },
];

const engagementTiers = [
  {
    title: "PCI DSS Gap Assessment",
    description:
      "Current state analysis against PCI DSS v4.0 requirements with detailed gap report and remediation roadmap.",
    bullets: ["2-4 weeks", "Gap report", "Remediation roadmap"],
  },
  {
    title: "Full PCI DSS Implementation",
    description:
      "Complete security control deployment, CDE hardening, testing, and SAQ/AOC preparation for compliance validation.",
    bullets: ["3-6 months", "Full implementation", "AOC ready"],
  },
  {
    title: "Managed PCI Compliance Program",
    description:
      "Ongoing compliance management with continuous monitoring, quarterly scans, annual testing, and audit support.",
    bullets: ["Annual program", "Continuous monitoring", "Quarterly ASV scans"],
  },
];

const pciServices = [
  {
    title: "CDE Scoping & Segmentation",
    desc: "Define cardholder data environment boundaries and implement network segmentation to reduce PCI scope.",
  },
  {
    title: "PCI DSS Gap Assessment",
    desc: "Comprehensive evaluation of current controls against all 12 PCI DSS requirements with gap analysis.",
  },
  {
    title: "Security Controls Implementation",
    desc: "Deploy firewalls, encryption, access controls, logging, and monitoring solutions per PCI requirements.",
  },
  {
    title: "Vulnerability Management",
    desc: "Quarterly ASV scans, vulnerability remediation, and patch management program implementation.",
  },
  {
    title: "Penetration Testing",
    desc: "Annual internal and external penetration tests validating security of cardholder data environment.",
  },
  {
    title: "Access Control & MFA",
    desc: "Role-based access control, multi-factor authentication, and privileged access management implementation.",
  },
  {
    title: "Encryption & Key Management",
    desc: "Deploy encryption for data at rest and in transit with secure cryptographic key management practices.",
  },
  {
    title: "Log Management & Monitoring",
    desc: "Centralized logging, security information and event management (SIEM), and audit trail implementation.",
  },
  {
    title: "Incident Response Planning",
    desc: "Payment card breach response procedures, forensic investigation plans, and notification processes.",
  },
  {
    title: "SAQ & AOC Preparation",
    desc: "Self-Assessment Questionnaire completion and Attestation of Compliance preparation for validation.",
  },
  {
    title: "QSA Audit Support",
    desc: "Qualified Security Assessor (QSA) audit coordination, evidence management, and audit response support.",
  },
  {
    title: "Annual Compliance Maintenance",
    desc: "Ongoing compliance program management, quarterly scans, annual testing, and continuous improvement.",
  },
];

const faqs = [
  {
    question: "What is PCI DSS and who needs to comply?",
    answer:
      "PCI DSS (Payment Card Industry Data Security Standard) is a global security standard for organizations that store, process, or transmit payment card data. Any business that accepts credit or debit cards must comply with PCI DSS, regardless of size or transaction volume. Compliance requirements vary based on merchant level (determined by annual transaction volume) and the specific Self-Assessment Questionnaire (SAQ) that applies to your payment processing method.",
  },
  {
    question: "What are the 12 PCI DSS requirements?",
    answer:
      "PCI DSS has 12 core requirements organized into 6 goals: (1) Build and maintain secure networks with firewalls and secure configurations, (2) Protect cardholder data through encryption and secure storage, (3) Maintain vulnerability management with anti-virus and secure systems, (4) Implement strong access control measures including MFA and physical security, (5) Regularly monitor and test networks with logging and penetration testing, and (6) Maintain information security policies and procedures. PCI DSS v4.0 introduced additional customized approach options and targeted risk analysis requirements.",
  },
  {
    question: "What is the difference between SAQ A, SAQ A-EP, and SAQ D?",
    answer:
      "Self-Assessment Questionnaires (SAQs) vary based on how you process payments. SAQ A is for card-not-present merchants who outsource all payment processing to PCI-compliant third parties (e.g., payment links, hosted checkout). SAQ A-EP is for e-commerce merchants with website payment processing via iframes or redirects but no direct access to card data. SAQ D is the most comprehensive questionnaire for merchants who store, process, or transmit card data on their own systems, typically requiring full PCI DSS compliance and quarterly vulnerability scans.",
  },
  {
    question: "How often do I need to validate PCI DSS compliance?",
    answer:
      "PCI DSS compliance is an ongoing requirement with specific validation frequencies. Annual validation includes: completing your applicable SAQ, internal security assessments, and penetration testing. Quarterly requirements include: external vulnerability scans by an Approved Scanning Vendor (ASV) for SAQ D merchants. Additionally, you must maintain continuous compliance through ongoing monitoring, log reviews, and security controls. Any changes to your cardholder data environment require re-scoping and may trigger additional validation activities.",
  },
];

const painPoints = [
  "Are our payment systems secure?",
  "Do we meet PCI DSS requirements?",
  "How do we reduce breach liability?",
];

const IconCreditCard = ({ className }) => (
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
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="M2 10h20" />
  </svg>
);

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

const IconLock = ({ className }) => (
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
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path d="M12 17v-2M7 11V7a5 5 0 0110 0v4" />
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

const PCIDSSIllustration = () => (
  <svg viewBox="0 0 420 320" className="h-full w-full" aria-hidden="true">
    <defs>
      <linearGradient id="payment-panel" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#0f172a" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
      </linearGradient>
      <linearGradient id="payment-pulse" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
    {/* Central payment shield */}
    <circle cx="210" cy="160" r="60" fill="url(#payment-panel)" stroke="#94a3b8" strokeOpacity="0.4" strokeWidth="2" />
    <path d="M210 120l30 12v20c0 18-10 28-30 34-20-6-30-16-30-34v-20l30-12z" stroke="#3b82f6" strokeWidth="2.5" fill="none" />
    <rect x="195" y="150" width="30" height="20" rx="3" stroke="#3b82f6" strokeWidth="2" fill="none" />
    <path d="M195 160h30" stroke="#3b82f6" strokeWidth="2" />
    
    {/* Security control nodes */}
    <circle cx="80" cy="100" r="25" fill="url(#payment-pulse)" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="2" />
    <circle cx="340" cy="100" r="25" fill="url(#payment-pulse)" fillOpacity="0.2" stroke="#8b5cf6" strokeWidth="2" />
    <circle cx="80" cy="220" r="25" fill="url(#payment-pulse)" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="2" />
    <circle cx="340" cy="220" r="25" fill="url(#payment-pulse)" fillOpacity="0.2" stroke="#8b5cf6" strokeWidth="2" />
    
    {/* Control labels */}
    <text x="80" y="105" fontSize="9" fill="#3b82f6" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">ENCRYPT</text>
    <text x="340" y="105" fontSize="9" fill="#8b5cf6" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">ACCESS</text>
    <text x="80" y="225" fontSize="9" fill="#3b82f6" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">MONITOR</text>
    <text x="340" y="225" fontSize="9" fill="#8b5cf6" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">TEST</text>
    
    {/* Connection lines */}
    <path d="M105 100L155 140M255 140L315 100M105 220L155 180M255 180L315 220" stroke="#94a3b8" strokeOpacity="0.5" strokeDasharray="4 6" strokeWidth="2" />
    
    {/* Firewall overlay */}
    <g transform="translate(195, 80)">
      <rect x="0" y="0" width="30" height="6" fill="#10b981" opacity="0.8" />
      <rect x="0" y="8" width="30" height="6" fill="#10b981" opacity="0.6" />
      <rect x="0" y="16" width="30" height="6" fill="#10b981" opacity="0.4" />
    </g>
  </svg>
);

export default function PCIDSSPage() {
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
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-950" />
          <div className="absolute -left-20 top-20 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute -right-24 bottom-6 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
        </div>

        <Container className="relative z-10 flex min-h-[86vh] flex-col justify-center">
          <motion.div variants={fadeUp} className="max-w-3xl">
            <h1 className="mt-16 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              Achieve PCI DSS compliance with expert payment security guidance.
            </h1>
            <p className="mt-4 text-lg text-white/80 md:text-xl">
              Comprehensive PCI DSS consulting that secures cardholder data environments, implements payment controls, and validates compliance to protect your business.
            </p>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Expert-led implementation of PCI DSS v4.0 requirements including network segmentation, encryption, access controls, and continuous monitoring.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/contact?subject=services&subSubject=PCI%20DSS%20Compliance"
                aria-label="Speak with a PCI DSS Expert"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <motion.span
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  whileTap={reduceMotion ? undefined : { y: 0 }}
                  className="inline-flex items-center"
                >
                  Speak with a PCI DSS Expert
                </motion.span>
              </Link>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12 max-w-4xl">
            <div className="grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80 md:grid-cols-3">
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
              title="PCI DSS compliance that protects payment card data."
              subtitle="Secure cardholder data environments and reduce breach liability with validated security controls."
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
                        <IconCreditCard className="h-5 w-5" />
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
              eyebrow="Payment Security Standards"
              title="PCI DSS v4.0 compliance for payment card security."
              subtitle="Build a payment security framework aligned with the latest PCI Security Standards Council requirements."
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
              title="Structured approach to PCI DSS implementation and validation."
              subtitle="We follow PCI DSS requirements systematically—from CDE scoping to compliance attestation."
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
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">Payment security implementation process</h3>
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
              title="End-to-end PCI DSS implementation and compliance validation."
              subtitle="From CDE scoping to AOC preparation, we guide you through every payment security requirement."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {pciServices.map((item) => (
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

      {/* PCI Requirements Coverage Section */}
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
                eyebrow="PCI DSS Requirements"
                title="Comprehensive payment security framework."
                subtitle="We help you implement all 12 PCI DSS requirements across network security, data protection, and access control."
              />
              <div className="mt-8">
                <div className="relative rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-900/70">
                  <div className="pointer-events-none absolute -inset-1 rounded-[22px] bg-gradient-to-r from-blue-500/30 via-purple-500/20 to-transparent opacity-70" />
                  <div className="relative overflow-hidden rounded-2xl bg-slate-950/5 p-4 dark:bg-slate-950">
                    <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-blue-500/20 blur-2xl" />
                    <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-purple-500/20 blur-2xl" />
                    <PCIDSSIllustration />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="grid gap-4">
                {pciRequirements.map((category) => (
                  <motion.div key={category.title} variants={fadeUp}>
                    <Card>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                        {category.title}
                      </h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {category.items.map((item) => (
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
              title="Payment security expertise that ensures compliance success."
              subtitle="We combine PCI DSS knowledge with deep payment security and fraud prevention experience."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "CDE scoping & segmentation",
                  description: "Expert cardholder data environment boundary definition and network segmentation that reduces PCI scope and compliance costs.",
                  Icon: IconShield,
                },
                {
                  title: "Payment security controls",
                  description: "Technical implementation of encryption, tokenization, access controls, and monitoring solutions that protect payment data.",
                  Icon: IconLock,
                },
                {
                  title: "Validation & audit support",
                  description: "SAQ/AOC preparation, QSA audit coordination, and ongoing compliance management for maintained validation status.",
                  Icon: IconCreditCard,
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
              title="Complete PCI DSS documentation and compliance evidence."
              subtitle="Everything needed for PCI DSS validation and ongoing payment security compliance."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {deliverables.map((item) => (
                <motion.div key={item} variants={fadeUp}>
                  <Card>
                    <div className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
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
              title="PCI DSS compliance for payment-processing industries."
              subtitle="Industry-specific payment security implementation addressing sector requirements and use cases."
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
              title="Flexible PCI DSS programs for every compliance need."
              subtitle="From gap assessment to full managed payment security compliance."
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
              title="Common questions about PCI DSS compliance."
              subtitle="Clear answers to help you understand payment security requirements."
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
              Get PCI DSS compliant with confidence.
            </h2>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Expert payment security implementation protecting cardholder data and reducing breach liability.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact?subject=services&subSubject=PCI%20DSS%20Compliance"
                aria-label="Speak With a PCI DSS Expert"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Speak With a PCI DSS Expert
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
            Ready for payment security?
          </div>
          <Link
            href="/contact?subject=services&subSubject=PCI%20DSS%20Compliance"
            aria-label="Speak With a PCI DSS Expert"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white"
          >
            Get Started
          </Link>
        </div>
      </div>
    </motion.main>
  );
}