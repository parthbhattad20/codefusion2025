"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

/* ===================== DATA ===================== */

const painPoints = [
  "Need to comply with India's DPDPA regulations?",
  "Uncertain about consent management requirements?",
  "Concerned about data breach penalties?",
];

const outcomes = [
  {
    title: "Regulatory Compliance Assurance",
    description:
      "Ensure full compliance with India's Digital Personal Data Protection Act through structured governance and lawful data processing frameworks.",
  },
  {
    title: "Consent-Based Processing",
    description:
      "Implement robust consent management mechanisms that meet DPDPA requirements for lawful, transparent personal data collection and use.",
  },
  {
    title: "Data Principal Rights Management",
    description:
      "Enable individuals to exercise their rights including access, correction, erasure, and grievance handling under DPDPA provisions.",
  },
  {
    title: "Breach Prevention & Response",
    description:
      "Reduce data breach risks through security controls and establish incident notification procedures to meet DPDPA reporting obligations.",
  },
];

const complianceBadges = [
  "DPDPA 2023",
  "India Privacy",
  "Consent Management",
  "Data Protection",
  "ISO 27001",
];

const methodology = [
  {
    title: "Identify - Personal Data Inventory",
    description:
      "Comprehensive identification and cataloging of personal data processing activities, data categories, and data principals across the organization.",
  },
  {
    title: "Map - Data Flow & Storage Analysis",
    description:
      "Document data flows, processing locations, cross-border transfers, and storage repositories to understand the complete data lifecycle.",
  },
  {
    title: "Consent - Lawful Processing Framework",
    description:
      "Design and implement consent mechanisms, purpose specifications, and lawful bases for processing aligned with DPDPA requirements.",
  },
  {
    title: "Secure - Technical & Organizational Controls",
    description:
      "Deploy security safeguards including encryption, access controls, data minimization, and organizational measures to protect personal data.",
  },
  {
    title: "Monitor - Ongoing Compliance & Audits",
    description:
      "Establish continuous compliance monitoring, regular audits, accountability documentation, and regulatory reporting mechanisms.",
  },
];

const processSteps = [
  { title: "Identify", description: "Personal data & processing activities." },
  { title: "Map", description: "Data flows & storage locations." },
  { title: "Consent", description: "Lawful consent design." },
  { title: "Secure", description: "Technical & organizational controls." },
  { title: "Monitor", description: "Ongoing compliance & audits." },
];

const dpdpaRequirements = [
  {
    title: "Lawful Processing",
    items: ["Valid consent", "Purpose limitation", "Data minimization", "Transparency"],
  },
  {
    title: "Data Principal Rights",
    items: ["Access rights", "Correction", "Erasure", "Grievance redressal"],
  },
  {
    title: "Security & Protection",
    items: ["Safeguards", "Breach prevention", "Incident response", "Accountability"],
  },
  {
    title: "Cross-Border Transfers",
    items: ["Transfer restrictions", "Country allowlist", "Compliance validation", "Documentation"],
  },
];

const deliverables = [
  "DPDPA readiness assessment and gap analysis report",
  "Personal data inventory and processing register",
  "Consent management framework and workflows",
  "Data principal rights management procedures",
  "Privacy policy and data protection notices",
  "Breach notification and incident response procedures",
  "Data Protection Officer (DPO) appointment documentation",
  "Cross-border data transfer compliance framework",
  "Technical and organizational security measures documentation",
  "Audit and compliance validation reports",
  "Employee training materials and awareness programs",
  "Vendor data processing agreements and assessments",
];

const useCases = [
  {
    title: "Technology & SaaS Companies",
    description:
      "DPDPA compliance for software-as-a-service providers, technology platforms, and digital service companies processing Indian user data.",
  },
  {
    title: "E-commerce & Retail",
    description:
      "Consumer data protection and consent management for online retailers, marketplaces, and e-commerce platforms operating in India.",
  },
  {
    title: "Financial Services & Fintech",
    description:
      "Personal financial data protection compliance for banks, NBFCs, payment processors, and fintech platforms under DPDPA regulations.",
  },
  {
    title: "Healthcare & Medical Services",
    description:
      "Patient data protection and health information privacy compliance for hospitals, clinics, telemedicine, and healthcare technology providers.",
  },
  {
    title: "Education & EdTech",
    description:
      "Student and parent data protection for educational institutions, online learning platforms, and education technology companies.",
  },
  {
    title: "Telecommunications & ISPs",
    description:
      "Subscriber data protection and communication privacy compliance for telecom operators, internet service providers, and network companies.",
  },
];

const engagementTiers = [
  {
    title: "DPDPA Readiness Assessment",
    description:
      "Current state evaluation against DPDPA requirements with detailed gap analysis and prioritized compliance roadmap.",
    bullets: ["4-6 weeks", "Gap assessment", "Compliance roadmap", "Priority recommendations"],
  },
  {
    title: "Full DPDPA Implementation",
    description:
      "End-to-end DPDPA compliance program from data inventory through consent management, rights enablement, and breach procedures.",
    bullets: ["6-12 months", "Complete framework", "Training programs", "Documentation package"],
  },
  {
    title: "Managed Compliance Program",
    description:
      "Ongoing DPDPA compliance management with continuous monitoring, regular audits, regulatory updates, and DPO support.",
    bullets: ["Annual program", "Continuous monitoring", "Quarterly audits", "Regulatory liaison"],
  },
];

const dpdpaServices = [
  {
    title: "DPDPA Gap Assessment",
    desc: "Comprehensive evaluation of current data processing activities against DPDPA requirements with detailed gap identification and remediation planning.",
  },
  {
    title: "Consent Management Framework",
    desc: "Design and implementation of lawful consent mechanisms including consent recording, withdrawal processes, and purpose specification.",
  },
  {
    title: "Data Principal Rights Enablement",
    desc: "Establish processes for handling access, correction, erasure, nomination, and grievance requests from data principals under DPDPA.",
  },
  {
    title: "Privacy Policy Development",
    desc: "Creation of DPDPA-compliant privacy policies, data protection notices, and transparency documentation for data principals.",
  },
  {
    title: "Data Breach Response Planning",
    desc: "Incident response procedures, breach assessment protocols, and notification workflows meeting DPDPA reporting requirements.",
  },
  {
    title: "Data Protection Officer Support",
    desc: "DPO appointment assistance, accountability framework establishment, and ongoing DPO function support for DPDPA compliance.",
  },
  {
    title: "Cross-Border Transfer Compliance",
    desc: "Assessment and documentation of international data transfers ensuring compliance with DPDPA cross-border transfer provisions.",
  },
  {
    title: "Security Controls Implementation",
    desc: "Technical and organizational security measures including encryption, access controls, data minimization, and protection safeguards.",
  },
  {
    title: "Training & Awareness Programs",
    desc: "Employee training on DPDPA requirements, data handling responsibilities, and privacy-conscious organizational culture development.",
  },
];

const dpdpaPrinciples = [
  {
    category: "Lawful Processing Obligations",
    items: [
      "Valid consent from data principals for processing",
      "Clear purpose specification and limitation",
      "Data minimization and collection limitation",
      "Notice and transparency requirements",
    ],
  },
  {
    category: "Data Principal Rights",
    items: [
      "Right to access personal data being processed",
      "Right to correction of inaccurate data",
      "Right to erasure and data deletion",
      "Right to grievance redressal and complaint mechanisms",
    ],
  },
  {
    category: "Data Fiduciary Obligations",
    items: [
      "Reasonable security safeguards implementation",
      "Data breach notification to authorities and principals",
      "Data retention and deletion requirements",
      "Accuracy and completeness of personal data",
    ],
  },
  {
    category: "Accountability & Governance",
    items: [
      "Data Protection Officer (DPO) appointment where required",
      "Data protection impact assessments for high-risk processing",
      "Transparency and accountability documentation",
      "Regular compliance audits and reviews",
    ],
  },
];

const faqs = [
  {
    question: "What is the Digital Personal Data Protection Act (DPDPA)?",
    answer:
      "The Digital Personal Data Protection Act (DPDPA) 2023 is India's comprehensive data protection legislation that governs the processing of personal data of individuals (data principals) by organizations (data fiduciaries). The Act establishes a consent-based framework for lawful data processing, grants rights to individuals including access, correction, and erasure, imposes security and breach notification obligations on organizations, and establishes the Data Protection Board of India to enforce compliance. DPDPA applies to processing of digital personal data within India and to processing outside India if it relates to offering goods or services to individuals in India.",
  },
  {
    question: "Who needs to comply with DPDPA?",
    answer:
      "DPDPA applies to all 'Data Fiduciaries' - organizations or individuals who determine the purpose and means of processing personal data. This includes: businesses processing customer, employee, or vendor data in India; digital platforms and online services; government entities processing citizen data; healthcare providers handling patient information; financial institutions and fintech companies; and any organization outside India offering goods/services to Indian individuals. The Act has extraterritorial application, meaning foreign companies processing Indian user data must also comply. Certain exemptions exist for personal/household activities and specific government processing.",
  },
  {
    question: "What are the key requirements under DPDPA?",
    answer:
      "DPDPA's key requirements include: (1) Lawful Processing - obtain valid, free, specific, informed, and unambiguous consent from data principals before processing; (2) Purpose Limitation - process data only for specified purposes and retain only as long as necessary; (3) Data Principal Rights - enable individuals to access, correct, erase data and file grievances; (4) Security Safeguards - implement reasonable security measures to prevent breaches; (5) Breach Notification - notify the Data Protection Board and affected individuals of data breaches; (6) Transparency - provide clear privacy notices explaining data processing; (7) Cross-Border Transfers - comply with restrictions on international data transfers; (8) Children's Data - obtain verifiable parental consent for processing children's data.",
  },
  {
    question: "What are the penalties for DPDPA non-compliance?",
    answer:
      "DPDPA provides for significant penalties enforced by the Data Protection Board of India. The Board can impose penalties up to ₹250 crores (approximately $30 million USD) depending on the nature and severity of the violation. Specific penalty amounts are prescribed for different violations including: failure to implement security safeguards, breach of data principal rights, processing without valid consent, failure to notify breaches, non-cooperation with Board investigations, and violations of children's data protection provisions. The Act also allows for directions to cease processing, data deletion, and compensation to affected data principals. Penalties are determined based on factors like nature of violation, number of affected individuals, and organization's revenue.",
  },
  {
    question: "How long does DPDPA implementation take?",
    answer:
      "DPDPA implementation timeline varies based on organizational size, existing privacy practices, and data processing complexity. A focused readiness assessment typically takes 4-6 weeks to identify gaps and create a compliance roadmap. Full DPDPA implementation generally requires 6-12 months including data inventory, consent mechanism design, rights management processes, policy development, security controls, and training. Organizations should prioritize high-risk areas first, particularly consent management, data breach procedures, and data principal rights workflows. Ongoing compliance requires continuous monitoring, regular audits, and adaptation to regulatory guidance issued by the Data Protection Board.",
  },
  {
    question: "What is the difference between DPDPA and GDPR?",
    answer:
      "While both are data protection laws, DPDPA and GDPR have key differences. DPDPA is consent-focused, requiring explicit consent for most processing, while GDPR recognizes six lawful bases including legitimate interests. DPDPA has simpler compliance obligations compared to GDPR's detailed requirements. DPDPA focuses on digital personal data whereas GDPR covers all personal data. DPDPA has specific provisions for deemed consent in certain situations and different data principal rights (e.g., right to nomination). Cross-border transfer rules differ, with DPDPA allowing transfers only to approved countries. Enforcement mechanisms and penalty structures also vary. Organizations operating in both jurisdictions need dual compliance strategies.",
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
      <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-orange-600 dark:border-orange-400/20 dark:bg-orange-400/10 dark:text-orange-400">
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
  <span className="rounded-full border border-orange-200/70 bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700 dark:border-orange-700/50 dark:bg-orange-900/30 dark:text-orange-300">
    {children}
  </span>
);

/* ===================== DPDPA ILLUSTRATION ===================== */

const DPDPAIllustration = () => (
  <svg viewBox="0 0 420 340" className="h-full w-full" aria-hidden="true">
    <defs>
      <linearGradient id="dpdpa-panel" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#f97316" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#fb923c" stopOpacity="0.2" />
      </linearGradient>
      <linearGradient id="dpdpa-pulse" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#fb923c" />
        <stop offset="100%" stopColor="#f97316" />
      </linearGradient>
    </defs>
    
    {/* Central DPDPA emblem */}
    <rect x="145" y="90" width="130" height="140" rx="14" fill="url(#dpdpa-panel)" stroke="#fb923c" strokeOpacity="0.5" strokeWidth="2" />
    
    {/* DPDPA text */}
    <text x="210" y="130" fontSize="22" fill="#f97316" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">DPDPA</text>
    <text x="210" y="155" fontSize="10" fill="#94a3b8" fontFamily="sans-serif" textAnchor="middle">Digital Personal Data</text>
    <text x="210" y="170" fontSize="10" fill="#94a3b8" fontFamily="sans-serif" textAnchor="middle">Protection Act</text>
    
    {/* India flag colors indicator */}
    <circle cx="210" cy="195" r="18" fill="url(#dpdpa-pulse)" fillOpacity="0.3" stroke="#f97316" strokeWidth="2.5" />
    <path d="M210 187l5 3v7c0 3-2 5-5 6-3-1-5-3-5-6v-7l5-3z" fill="#f97316" />
    <circle cx="210" cy="195" r="4" fill="#1e40af" />
    
    {/* Four DPDPA requirement circles */}
    <circle cx="70" cy="110" r="28" fill="url(#dpdpa-pulse)" fillOpacity="0.2" stroke="#fb923c" strokeWidth="2" />
    <text x="70" y="105" fontSize="8" fill="#fb923c" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">LAWFUL</text>
    <text x="70" y="118" fontSize="8" fill="#fb923c" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">PROCESSING</text>
    
    <circle cx="350" cy="110" r="28" fill="url(#dpdpa-pulse)" fillOpacity="0.2" stroke="#fb923c" strokeWidth="2" />
    <text x="350" y="105" fontSize="7" fill="#fb923c" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">DATA PRINCIPAL</text>
    <text x="350" y="118" fontSize="7" fill="#fb923c" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">RIGHTS</text>
    
    <circle cx="70" cy="230" r="28" fill="url(#dpdpa-pulse)" fillOpacity="0.2" stroke="#fb923c" strokeWidth="2" />
    <text x="70" y="225" fontSize="8" fill="#fb923c" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">SECURITY &</text>
    <text x="70" y="238" fontSize="8" fill="#fb923c" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">PROTECTION</text>
    
    <circle cx="350" cy="230" r="28" fill="url(#dpdpa-pulse)" fillOpacity="0.2" stroke="#fb923c" strokeWidth="2" />
    <text x="350" y="225" fontSize="7" fill="#fb923c" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">CROSS-BORDER</text>
    <text x="350" y="238" fontSize="7" fill="#fb923c" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">TRANSFERS</text>
    
    {/* Connection lines */}
    <path d="M98 110h30M278 110h45M98 230h30M278 230h45" stroke="#94a3b8" strokeOpacity="0.4" strokeWidth="2" />
    <path d="M130 130l-30 80M130 210l-30-80M290 130l30 80M290 210l30-80" stroke="#94a3b8" strokeOpacity="0.3" strokeDasharray="4 6" strokeWidth="2" />
    
    {/* India 2023 indicator */}
    <circle cx="185" cy="65" r="2.5" fill="#f97316" />
    <circle cx="210" cy="55" r="2.5" fill="#f97316" />
    <circle cx="235" cy="65" r="2.5" fill="#f97316" />
    <text x="210" y="40" fontSize="8" fill="#f97316" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">INDIA 2023</text>
    
    {/* Consent indicator */}
    <path d="M210 230 L210 270" stroke="#fb923c" strokeWidth="2" markerEnd="url(#arrow)" />
    <text x="210" y="290" fontSize="9" fill="#94a3b8" fontFamily="sans-serif" textAnchor="middle">Consent-Based</text>
  </svg>
);

/* ===================== PAGE COMPONENT ===================== */

export default function DPDPACompliancePage() {
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
          <div className="absolute -left-24 top-16 h-64 w-64 rounded-full bg-orange-500/20 blur-3xl" />
          <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl" />
        </div>

        <Container className="relative z-10 flex min-h-[86vh] flex-col justify-center">
          <motion.div variants={fadeUp} className="max-w-3xl">
            <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
              India Digital Personal Data Protection Act
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              DPDPA Compliance Services
            </h1>
            <p className="mt-4 text-lg text-white/85 md:text-xl">
              Achieve compliance with India's Digital Personal Data Protection Act using structured governance, consent management, and risk-based security controls.
            </p>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Expert DPDPA implementation with gap assessment, consent framework design, data principal rights enablement, and breach response planning for Indian organizations.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/contact?subject=services&subSubject=DPDPA"
                aria-label="Consult DPDPA Expert"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <motion.span
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  whileTap={reduceMotion ? undefined : { y: 0 }}
                  className="inline-flex items-center"
                >
                  Consult DPDPA Expert
                </motion.span>
              </Link>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12 max-w-4xl">
            <div className="grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80 backdrop-blur-sm md:grid-cols-3">
              {painPoints.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
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
              title="DPDPA compliance that protects personal data and builds trust."
              subtitle="Expert guidance for technology companies, e-commerce, financial services, and organizations processing Indian user data."
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
                      <div className="rounded-full bg-orange-500/10 p-3 text-orange-600 dark:bg-orange-400/10 dark:text-orange-400">
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
              eyebrow="Regulatory Framework"
              title="Aligned with India's data protection legislation."
              subtitle="Comprehensive compliance with DPDPA 2023 requirements and data protection best practices."
            />
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {complianceBadges.map((badge) => (
                <Badge key={badge}>{badge}</Badge>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Overview Section with Image */}
      <Section className="bg-white dark:bg-slate-950">
        <Container>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            className="grid gap-10 lg:grid-cols-2 lg:items-center"
          >
            <motion.div variants={fadeUp}>
              <SectionHeader
                align="left"
                eyebrow="Understanding DPDPA"
                title="What is India's Digital Personal Data Protection Act?"
                subtitle="The DPDPA governs lawful processing, storage, and protection of personal data with consent-based frameworks and strong accountability."
              />
              <div className="mt-6 space-y-4 text-slate-700 dark:text-slate-300">
                <p>
                  The Digital Personal Data Protection Act (DPDPA) 2023 establishes comprehensive requirements for organizations processing personal data of Indian individuals.
                </p>
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                    Why DPDPA Compliance Matters
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <IconCheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-600 dark:text-orange-400" />
                      <span>Protect personal data of Indian data principals</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <IconCheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-600 dark:text-orange-400" />
                      <span>Avoid statutory penalties up to ₹250 crores</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <IconCheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-600 dark:text-orange-400" />
                      <span>Build stakeholder and customer trust</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <IconCheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-600 dark:text-orange-400" />
                      <span>Reduce data breach risks and incidents</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <IconCheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-600 dark:text-orange-400" />
                      <span>Enable compliant cross-border operations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-orange-500/20 to-amber-500/20 blur-2xl" />
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="/assets/services/dpdpa.avif"
                    alt="DPDPA Compliance"
                    width={500}
                    height={400}
                    className="w-full max-w-md rounded-2xl"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Methodology Section */}
      <Section className="bg-slate-50 dark:bg-slate-950/70">
        <Container>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
          >
            <SectionHeader
              eyebrow="Methodology"
              title="Structured DPDPA compliance framework."
              subtitle="A governance-driven model aligned with India's Digital Personal Data Protection Act requirements."
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

            <div className="mt-10 rounded-2xl border border-slate-200/70 bg-white p-5 dark:border-slate-800/70 dark:bg-slate-900/50">
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">DPDPA implementation lifecycle</h3>
              <div className="relative mt-6">
                <div className="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-orange-300 to-transparent md:block dark:via-orange-700" />
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
                        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400">
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
      <Section className="bg-white dark:bg-slate-950">
        <Container>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
          >
            <SectionHeader
              eyebrow="Services"
              title="Comprehensive DPDPA compliance capabilities."
              subtitle="From gap assessment to ongoing compliance management, we provide full-spectrum DPDPA support."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {dpdpaServices.map((item) => (
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

      {/* DPDPA Requirements Section */}
      <Section className="bg-slate-50 dark:bg-slate-950/70">
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
                eyebrow="DPDPA Requirements"
                title="Four pillars of DPDPA compliance."
                subtitle="Lawful processing, data principal rights, security protection, and cross-border transfer compliance."
              />
              <div className="mt-8">
                <div className="relative rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-900/70">
                  <div className="pointer-events-none absolute -inset-1 rounded-[22px] bg-gradient-to-r from-orange-500/30 via-amber-500/20 to-transparent opacity-70" />
                  <div className="relative overflow-hidden rounded-2xl bg-slate-950/5 p-4 dark:bg-slate-950">
                    <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-orange-500/20 blur-2xl" />
                    <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-amber-500/20 blur-2xl" />
                    <DPDPAIllustration />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="grid gap-4">
                {dpdpaRequirements.map((requirement) => (
                  <motion.div key={requirement.title} variants={fadeUp}>
                    <Card>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400">
                        {requirement.title}
                      </h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {requirement.items.map((item) => (
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

      {/* DPDPA Principles Section */}
      <Section className="bg-white dark:bg-slate-950">
        <Container>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
          >
            <SectionHeader
              eyebrow="Compliance Obligations"
              title="Key DPDPA requirements and obligations."
              subtitle="Comprehensive coverage of lawful processing, rights management, security, and accountability requirements."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {dpdpaPrinciples.map((principle) => (
                <motion.div key={principle.category} variants={fadeUp}>
                  <Card className="h-full">
                    <h3 className="text-lg font-semibold text-orange-600 dark:text-orange-400 mb-4">
                      {principle.category}
                    </h3>
                    <ul className="space-y-3">
                      {principle.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                          <IconCheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-600 dark:text-orange-400" />
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
              title="Trusted DPDPA compliance expertise since 2017."
              subtitle="We've guided Indian organizations across technology, e-commerce, finance, and healthcare through privacy compliance programs."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "India privacy expertise",
                  description: "Deep knowledge of DPDPA requirements, Data Protection Board guidelines, and Indian privacy landscape with proven implementation experience.",
                  Icon: IconShield,
                },
                {
                  title: "Multi-sector experience",
                  description: "Comprehensive DPDPA services across technology, e-commerce, fintech, healthcare, education, and telecommunications sectors.",
                  Icon: IconUsers,
                },
                {
                  title: "Consent-first approach",
                  description: "Specialized expertise in consent management, data principal rights, and privacy-by-design aligned with DPDPA's consent-based framework.",
                  Icon: IconClipboard,
                },
              ].map((item) => (
                <motion.div key={item.title} variants={fadeUp}>
                  <Card className="h-full">
                    <div className="mb-4 inline-flex rounded-full bg-orange-500/10 p-3 text-orange-600 dark:bg-orange-400/10 dark:text-orange-400">
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
              title="Complete DPDPA compliance documentation and support."
              subtitle="Everything you need for regulatory compliance, data principal rights, and ongoing privacy governance."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {deliverables.map((item) => (
                <motion.div key={item} variants={fadeUp}>
                  <Card>
                    <div className="flex items-start gap-3">
                      <IconCheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-600 dark:text-orange-400" />
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
              title="DPDPA compliance for diverse sectors and organizations."
              subtitle="Tailored implementation for technology, e-commerce, finance, healthcare, education, and telecom companies."
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
              title="Flexible DPDPA programs for every organizational need."
              subtitle="Choose from readiness assessment, full implementation, or managed compliance based on your requirements."
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
              title="Common questions about DPDPA compliance."
              subtitle="Clear answers to help you understand India's Digital Personal Data Protection Act and implementation requirements."
            />
            <div className="mt-8 space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-slate-200/70 bg-white/80 p-5 dark:border-slate-800/70 dark:bg-slate-900/70"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between text-left text-sm font-semibold text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 dark:text-white"
                    aria-expanded={openFaq === index}
                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  >
                    <span>{faq.question}</span>
                    <span className="text-orange-600 dark:text-orange-400">{openFaq === index ? "–" : "+"}</span>
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
              Comply with confidence under DPDPA.
            </h2>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Protect personal data, meet legal obligations, and build trust with structured DPDPA compliance.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact?subject=services&subSubject=DPDPA"
                aria-label="Talk to a DPDPA Expert"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Talk to a DPDPA Expert
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
            Ready for DPDPA compliance?
          </div>
          <Link
            href="/contact?subject=services&subSubject=DPDPA"
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