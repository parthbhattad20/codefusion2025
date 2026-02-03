"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

/* ===================== DATA ===================== */

const painPoints = [
  "Struggling with GDPR or privacy compliance?",
  "Need expert DPO guidance without full-time hire?",
  "Concerned about data breach penalties?",
];

const outcomes = [
  {
    title: "Regulatory Compliance Assurance",
    description:
      "Ensure full compliance with GDPR, UAE PDPL, and other privacy regulations through expert DPO oversight and guidance.",
  },
  {
    title: "Data Protection Governance",
    description:
      "Establish robust data protection frameworks, policies, and procedures that align with legal requirements and industry standards.",
  },
  {
    title: "Risk Mitigation & Incident Response",
    description:
      "Proactively identify privacy risks and respond effectively to data breaches with established incident response protocols.",
  },
  {
    title: "Privacy-First Culture",
    description:
      "Build organizational awareness and accountability around data privacy through training, policies, and continuous oversight.",
  },
];

const complianceBadges = [
  "GDPR",
  "UAE PDPL",
  "ISO 27701",
  "CCPA",
  "Data Privacy",
];

const methodology = [
  {
    title: "Discover - Data Inventory & Mapping",
    description:
      "Comprehensive data inventory, processing mapping, and Record of Processing Activities (RoPA) documentation to understand data flows.",
  },
  {
    title: "Evaluate - Privacy Risk Assessment",
    description:
      "Identify privacy risks, regulatory exposure, and compliance gaps through thorough Data Protection Impact Assessments (DPIAs).",
  },
  {
    title: "Govern - Policy & Framework Implementation",
    description:
      "Establish privacy policies, governance frameworks, roles, responsibilities, and accountability structures across the organization.",
  },
  {
    title: "Operate - Compliance Controls & Monitoring",
    description:
      "Implement ongoing compliance controls, incident handling procedures, data subject rights management, and continuous monitoring.",
  },
  {
    title: "Sustain - Audits & Regulatory Liaison",
    description:
      "Conduct regular audits, compliance reporting, authority liaison, and continuous improvement of data protection practices.",
  },
];

const processSteps = [
  { title: "Discover", description: "Data inventory & processing mapping." },
  { title: "Evaluate", description: "Privacy risks & regulatory exposure." },
  { title: "Govern", description: "Policies, roles & accountability." },
  { title: "Operate", description: "Incident handling & controls." },
  { title: "Sustain", description: "Audits, reporting & liaison." },
];

const dpoCapabilities = [
  {
    title: "Privacy Advisory",
    items: ["GDPR compliance", "UAE PDPL guidance", "Regulatory alignment", "Legal counsel"],
  },
  {
    title: "Compliance Management",
    items: ["Framework selection", "DPO appointment", "Policy development", "Documentation"],
  },
  {
    title: "Incident Response",
    items: ["Breach assessment", "Authority notification", "Subject communication", "Remediation"],
  },
  {
    title: "Risk Management",
    items: ["Privacy risks", "DPIAs", "Continuity planning", "Cyber resilience"],
  },
];

const deliverables = [
  "Data processing inventory (Record of Processing Activities)",
  "Privacy risk assessment and DPIA reports",
  "Regulatory compliance mapping and gap analysis",
  "DPO appointment documentation and registration",
  "Privacy policies and data protection procedures",
  "Incident response playbooks and breach protocols",
  "Data subject rights management procedures",
  "Authority communication templates and reports",
  "Employee privacy training materials and programs",
  "Executive compliance dashboard and KPI tracking",
  "Vendor data processing agreements (DPA templates)",
  "Privacy by design and default guidelines",
];

const useCases = [
  {
    title: "UAE & GCC Organizations",
    description:
      "Compliance with UAE Personal Data Protection Law (PDPL) and regional privacy regulations for businesses operating in the Gulf.",
  },
  {
    title: "GDPR-Regulated Entities",
    description:
      "European data protection compliance for organizations processing EU citizen data or operating in European markets.",
  },
  {
    title: "Healthcare & Medical Services",
    description:
      "Patient data protection and health information privacy compliance for hospitals, clinics, and healthcare technology providers.",
  },
  {
    title: "Financial Services & Fintech",
    description:
      "Customer data protection and financial privacy compliance for banks, payment processors, and fintech platforms.",
  },
  {
    title: "SaaS & Cloud Service Providers",
    description:
      "Data processor compliance for technology companies handling customer data across cloud infrastructure and applications.",
  },
  {
    title: "E-commerce & Retail",
    description:
      "Consumer privacy protection and customer data handling compliance for online retailers and e-commerce platforms.",
  },
];

const engagementTiers = [
  {
    title: "DPO Essentials",
    description:
      "Foundational DPO services including regulatory advisory, compliance framework setup, and basic incident response support.",
    bullets: ["Quarterly reviews", "Basic compliance", "Incident support", "Policy templates"],
  },
  {
    title: "Comprehensive DPO",
    description:
      "Full-service DPO engagement with continuous monitoring, regular audits, training programs, and proactive risk management.",
    bullets: ["Monthly reviews", "Full compliance", "Training programs", "Continuous monitoring"],
  },
  {
    title: "Enterprise DPO Program",
    description:
      "Dedicated DPO resources with embedded team support, 24/7 incident response, executive reporting, and strategic privacy counsel.",
    bullets: ["Weekly touchpoints", "Dedicated resources", "24/7 response", "Executive reporting"],
  },
];

const dpoServices = [
  {
    title: "Regulatory Compliance Advisory",
    desc: "Expert guidance on GDPR, UAE PDPL, CCPA, and other privacy regulations ensuring organizational alignment with legal requirements.",
  },
  {
    title: "Data Protection Impact Assessments",
    desc: "Comprehensive DPIAs for high-risk processing activities, identifying privacy risks and recommending mitigation measures.",
  },
  {
    title: "Privacy Policy Development",
    desc: "Creation of privacy notices, data protection policies, employee guidelines, and vendor agreements aligned with regulations.",
  },
  {
    title: "Data Breach Management",
    desc: "72-hour breach notification protocols, authority reporting, data subject communication, and incident remediation coordination.",
  },
  {
    title: "Data Subject Rights Management",
    desc: "Processes for handling access requests, erasure, portability, rectification, and objection rights under privacy laws.",
  },
  {
    title: "Records of Processing Activities",
    desc: "Comprehensive data inventory and RoPA documentation mapping all personal data processing across the organization.",
  },
  {
    title: "Privacy Training & Awareness",
    desc: "Employee training programs, privacy awareness campaigns, and role-specific data protection training for staff.",
  },
  {
    title: "Vendor & Third-Party Management",
    desc: "Data processing agreement review, vendor privacy assessments, and third-party data transfer compliance validation.",
  },
  {
    title: "Privacy Audits & Reviews",
    desc: "Regular compliance audits, control testing, gap assessments, and continuous improvement recommendations.",
  },
];

const coreResponsibilities = [
  {
    category: "Advisory & Guidance",
    items: [
      "Interpretation of privacy regulations and legal requirements",
      "Privacy-by-design consultation for new projects and systems",
      "Strategic privacy counsel for executive leadership",
      "Data protection framework selection and implementation",
    ],
  },
  {
    category: "Compliance Management",
    items: [
      "Regulatory compliance monitoring and gap remediation",
      "Privacy policy development and documentation maintenance",
      "Data processing inventory (RoPA) creation and updates",
      "Cross-border data transfer compliance (SCCs, BCRs)",
    ],
  },
  {
    category: "Risk & Incident Response",
    items: [
      "Data Protection Impact Assessments (DPIA) execution",
      "Privacy risk identification and mitigation strategies",
      "Data breach assessment and authority notification",
      "Incident response coordination and remediation oversight",
    ],
  },
  {
    category: "Stakeholder Liaison",
    items: [
      "Data protection authority communication and reporting",
      "Data subject request handling and response coordination",
      "Vendor and third-party privacy compliance oversight",
      "Executive reporting and compliance dashboard management",
    ],
  },
];

const faqs = [
  {
    question: "What is a Data Protection Officer (DPO)?",
    answer:
      "A Data Protection Officer (DPO) is an expert responsible for ensuring an organization's compliance with data privacy regulations like GDPR, UAE PDPL, and other privacy laws. The DPO monitors data processing activities, advises on privacy obligations, serves as a liaison with data protection authorities, handles data subject requests, and promotes a culture of data protection within the organization. Many regulations mandate appointing a DPO, particularly for public authorities and organizations engaged in large-scale data processing.",
  },
  {
    question: "When is a DPO required?",
    answer:
      "Under GDPR, a DPO is mandatory for: (1) public authorities or bodies, (2) organizations whose core activities involve large-scale systematic monitoring of individuals (e.g., behavioral tracking, profiling), or (3) organizations whose core activities involve large-scale processing of special category data or criminal conviction data. UAE PDPL requires designated data protection officers for organizations processing significant amounts of personal data. Even when not legally required, many organizations appoint DPOs to ensure compliance and build stakeholder trust.",
  },
  {
    question: "What are the benefits of DPO as a Service?",
    answer:
      "DPO as a Service provides expert data protection oversight without the cost and commitment of a full-time hire. Benefits include: access to specialized privacy expertise and regulatory knowledge, cost-effectiveness compared to in-house DPO salaries, flexibility to scale services based on needs, independence and objectivity in compliance assessments, continuous regulatory updates and best practice guidance, immediate incident response capabilities, and reduced liability through professional DPO oversight. It's ideal for organizations needing DPO expertise but lacking resources for dedicated staff.",
  },
  {
    question: "How does DPO as a Service work?",
    answer:
      "Our DPO as a Service engagement begins with a privacy assessment to understand your data processing landscape and compliance needs. We then serve as your designated DPO, providing ongoing advisory, compliance monitoring, incident response, and regulatory liaison. You receive regular touchpoints (monthly or quarterly based on tier), access to DPO expertise for questions and guidance, comprehensive documentation and policy support, incident response coordination, authority communication when needed, and continuous compliance monitoring. We integrate with your team while maintaining the independence required of a DPO.",
  },
  {
    question: "What regulations does your DPO service cover?",
    answer:
      "Our DPO services cover a wide range of global privacy regulations including: GDPR (General Data Protection Regulation) for EU/EEA data, UAE Personal Data Protection Law (PDPL), UK GDPR and Data Protection Act 2018, CCPA/CPRA (California privacy laws), Saudi Arabia PDPL, Qatar Data Protection Law, and other regional privacy frameworks. We stay current with evolving regulations and provide guidance on emerging privacy requirements across jurisdictions where your organization operates or processes personal data.",
  },
  {
    question: "How quickly can you respond to data breaches?",
    answer:
      "Our incident response protocols are designed for rapid mobilization. For Comprehensive and Enterprise tier clients, we provide same-day breach assessment and begin response coordination immediately upon notification. We help meet the 72-hour breach notification deadline under GDPR and other privacy laws by quickly assessing breach severity, determining notification requirements, coordinating with legal counsel, preparing authority notifications, and managing data subject communications. Our 24/7 emergency response for Enterprise clients ensures immediate support when critical incidents occur.",
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

/* ===================== DPO ILLUSTRATION ===================== */

const DPOIllustration = () => (
  <svg viewBox="0 0 420 340" className="h-full w-full" aria-hidden="true">
    <defs>
      <linearGradient id="dpo-panel" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.2" />
      </linearGradient>
      <linearGradient id="dpo-pulse" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#60a5fa" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    
    {/* Central DPO emblem */}
    <rect x="150" y="90" width="120" height="140" rx="14" fill="url(#dpo-panel)" stroke="#60a5fa" strokeOpacity="0.5" strokeWidth="2" />
    
    {/* DPO text */}
    <text x="210" y="135" fontSize="24" fill="#3b82f6" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">DPO</text>
    <text x="210" y="160" fontSize="11" fill="#94a3b8" fontFamily="sans-serif" textAnchor="middle">Data Protection</text>
    <text x="210" y="175" fontSize="11" fill="#94a3b8" fontFamily="sans-serif" textAnchor="middle">Officer</text>
    
    {/* Privacy shield badge */}
    <circle cx="210" cy="200" r="18" fill="url(#dpo-pulse)" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="2.5" />
    <path d="M210 192l5 3v7c0 3-2 5-5 6-3-1-5-3-5-6v-7l5-3z" fill="#3b82f6" />
    <path d="M207 199l2 2 3-3" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    
    {/* Four DPO capability circles */}
    <circle cx="70" cy="110" r="28" fill="url(#dpo-pulse)" fillOpacity="0.2" stroke="#60a5fa" strokeWidth="2" />
    <text x="70" y="105" fontSize="8" fill="#60a5fa" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">PRIVACY</text>
    <text x="70" y="118" fontSize="8" fill="#60a5fa" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">ADVISORY</text>
    
    <circle cx="350" cy="110" r="28" fill="url(#dpo-pulse)" fillOpacity="0.2" stroke="#60a5fa" strokeWidth="2" />
    <text x="350" y="105" fontSize="7" fill="#60a5fa" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">COMPLIANCE</text>
    <text x="350" y="118" fontSize="7" fill="#60a5fa" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">MANAGEMENT</text>
    
    <circle cx="70" cy="230" r="28" fill="url(#dpo-pulse)" fillOpacity="0.2" stroke="#60a5fa" strokeWidth="2" />
    <text x="70" y="225" fontSize="8" fill="#60a5fa" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">INCIDENT</text>
    <text x="70" y="238" fontSize="8" fill="#60a5fa" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">RESPONSE</text>
    
    <circle cx="350" cy="230" r="28" fill="url(#dpo-pulse)" fillOpacity="0.2" stroke="#60a5fa" strokeWidth="2" />
    <text x="350" y="225" fontSize="8" fill="#60a5fa" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">RISK</text>
    <text x="350" y="238" fontSize="8" fill="#60a5fa" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">MANAGEMENT</text>
    
    {/* Connection lines */}
    <path d="M98 110h30M278 110h45M98 230h30M278 230h45" stroke="#94a3b8" strokeOpacity="0.4" strokeWidth="2" />
    <path d="M130 130l-30 80M130 210l-30-80M290 130l30 80M290 210l30-80" stroke="#94a3b8" strokeOpacity="0.3" strokeDasharray="4 6" strokeWidth="2" />
    
    {/* Regulation indicators */}
    <circle cx="185" cy="65" r="2.5" fill="#3b82f6" />
    <circle cx="210" cy="55" r="2.5" fill="#3b82f6" />
    <circle cx="235" cy="65" r="2.5" fill="#3b82f6" />
    <text x="210" y="40" fontSize="8" fill="#3b82f6" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">GDPR/PDPL</text>
    
    {/* Data flow indicators */}
    <path d="M210 230 L210 270" stroke="#60a5fa" strokeWidth="2" markerEnd="url(#arrow)" />
    <text x="210" y="290" fontSize="9" fill="#94a3b8" fontFamily="sans-serif" textAnchor="middle">Data Protection</text>
  </svg>
);

/* ===================== PAGE COMPONENT ===================== */

export default function DPOServicePage() {
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
          <div className="absolute -left-24 top-16 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        </div>

        <Container className="relative z-10 flex min-h-[86vh] flex-col justify-center">
          <motion.div variants={fadeUp} className="max-w-3xl">
            <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
              Data Protection & Compliance
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              DPO as a Service
            </h1>
            <p className="mt-4 text-lg text-white/85 md:text-xl">
              Your trusted data protection and compliance expert for privacy regulations. Safeguard customer data, ensure regulatory compliance, and build stakeholder trust.
            </p>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Expert DPO services for GDPR, UAE PDPL, and global privacy compliance with comprehensive advisory, incident response, and risk management support.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/contact"
                aria-label="Talk to a DPO Expert"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <motion.span
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  whileTap={reduceMotion ? undefined : { y: 0 }}
                  className="inline-flex items-center"
                >
                  Talk to a DPO Expert
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
              title="DPO services that safeguard privacy and ensure compliance."
              subtitle="Expert data protection oversight for organizations across healthcare, finance, SaaS, and regulated industries."
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
              eyebrow="Regulatory Coverage"
              title="Aligned with global privacy regulations."
              subtitle="Expert guidance across GDPR, UAE PDPL, CCPA, and international data protection frameworks."
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
              title="Structured DPO service delivery framework."
              subtitle="A governance-driven model to operationalize privacy compliance, regulatory accountability, and continuous data protection oversight."
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
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">DPO engagement lifecycle</h3>
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
              title="Comprehensive DPO capabilities and advisory services."
              subtitle="From regulatory compliance to incident response, we provide full-spectrum data protection officer support."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {dpoServices.map((item) => (
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

      {/* DPO Capabilities Section */}
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
                eyebrow="Core Capabilities"
                title="Four pillars of DPO expertise."
                subtitle="Privacy advisory, compliance management, incident response, and risk management working together for comprehensive data protection."
              />
              <div className="mt-8">
                <div className="relative rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-900/70">
                  <div className="pointer-events-none absolute -inset-1 rounded-[22px] bg-gradient-to-r from-blue-500/30 via-cyan-500/20 to-transparent opacity-70" />
                  <div className="relative overflow-hidden rounded-2xl bg-slate-950/5 p-4 dark:bg-slate-950">
                    <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-blue-500/20 blur-2xl" />
                    <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-cyan-500/20 blur-2xl" />
                    <DPOIllustration />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="grid gap-4">
                {dpoCapabilities.map((capability) => (
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
              eyebrow="Responsibilities"
              title="How our DPO service engagement works."
              subtitle="Comprehensive data protection officer responsibilities covering advisory, compliance, risk management, and stakeholder liaison."
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
              title="Trusted data protection expertise since 2017."
              subtitle="We've guided organizations across UAE, GCC, and international markets through privacy compliance and data protection programs."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Regional privacy expertise",
                  description: "Deep knowledge of UAE PDPL, GCC privacy regulations, GDPR, and global data protection frameworks with proven compliance implementation.",
                  Icon: IconShield,
                },
                {
                  title: "Multi-industry experience",
                  description: "Comprehensive DPO services across healthcare, financial services, SaaS, e-commerce, and technology sectors with tailored privacy solutions.",
                  Icon: IconUsers,
                },
                {
                  title: "Proactive compliance approach",
                  description: "Dedicated privacy professionals committed to building sustainable data protection cultures through training, policies, and continuous oversight.",
                  Icon: IconClipboard,
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
              title="Complete DPO documentation and compliance support."
              subtitle="Everything you need for privacy compliance, regulatory reporting, and ongoing data protection governance."
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
              title="DPO services for diverse sectors and use cases."
              subtitle="Tailored data protection officer support for healthcare, finance, technology, and regulated organizations."
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
              title="Flexible DPO programs for every organizational need."
              subtitle="Choose from essential, comprehensive, or enterprise DPO services based on your privacy compliance requirements."
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
              title="Common questions about DPO as a Service."
              subtitle="Clear answers to help you understand data protection officer requirements, services, and engagement models."
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
              Protect your data with expert DPO services.
            </h2>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Ensure compliance, safeguard privacy, and manage risks with comprehensive data protection officer support.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                aria-label="Talk to a DPO Expert"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Talk to a DPO Expert
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
            Protect your data today
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