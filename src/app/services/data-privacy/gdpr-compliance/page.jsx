  "use client";

  import { useEffect, useState } from "react";
  import Link from "next/link";
  import { motion, useReducedMotion } from "framer-motion";

  /* ===================== DATA ===================== */

  const painPoints = [
    "Struggling with data privacy compliance?",
    "Need to protect sensitive information?",
    "Concerned about regulatory penalties?",
  ];

  const outcomes = [
    {
      title: "Comprehensive Data Protection",
      description:
        "Protect sensitive personal, financial, and health data from cyber threats through robust privacy controls and security measures.",
    },
    {
      title: "Regulatory Compliance Assurance",
      description:
        "Ensure full compliance with GDPR, HIPAA, PDPL, ISO, and other global data protection regulations to avoid penalties and legal risks.",
    },
    {
      title: "Customer Trust & Confidence",
      description:
        "Build strong customer relationships and brand reputation through transparent data handling practices and privacy commitment.",
    },
    {
      title: "Risk Mitigation & Governance",
      description:
        "Reduce financial and reputational risks through comprehensive privacy risk assessments and data governance frameworks.",
    },
  ];

  const complianceBadges = [
    "GDPR",
    "HIPAA",
    "ISO 27001",
    "UAE PDPL",
    "CCPA",
    "Data Privacy",
  ];

  const methodology = [
    {
      title: "Discover - Identify Personal & Sensitive Data",
      description:
        "Comprehensive data discovery to identify all personal and sensitive information across your organization's systems and processes.",
    },
    {
      title: "Classify - Map Data Flows & Ownership",
      description:
        "Document complete data flows, processing activities, ownership, and create Record of Processing Activities (RoPA) documentation.",
    },
    {
      title: "Assess - Evaluate Privacy Risks",
      description:
        "Conduct thorough privacy risk assessments and Data Protection Impact Assessments (DPIAs) to identify compliance gaps.",
    },
    {
      title: "Protect - Apply Controls & Policies",
      description:
        "Implement technical and organizational controls, privacy policies, consent mechanisms, and data protection frameworks.",
    },
    {
      title: "Monitor - Continuous Compliance Tracking",
      description:
        "Ongoing monitoring, compliance audits, incident response procedures, and continuous improvement of data protection practices.",
    },
  ];

  const processSteps = [
    { title: "Discover", description: "Identify personal & sensitive data." },
    { title: "Classify", description: "Map data flows & ownership." },
    { title: "Assess", description: "Evaluate privacy risks." },
    { title: "Protect", description: "Apply controls & policies." },
    { title: "Monitor", description: "Continuous compliance tracking." },
  ];

  const privacyCapabilities = [
    {
      title: "Risk Assessment",
      items: ["Privacy risks", "DPIAs", "Gap analysis", "Control testing"],
    },
    {
      title: "Policy Development",
      items: ["Privacy policies", "Data governance", "Consent framework", "Documentation"],
    },
    {
      title: "Compliance Management",
      items: ["GDPR readiness", "HIPAA compliance", "PDPL alignment", "ISO standards"],
    },
    {
      title: "Continuous Monitoring",
      items: ["Audits", "Incident response", "Training", "Reporting"],
    },
  ];

  const deliverables = [
    "Personal data inventory & mapping",
    "Privacy risk assessment report",
    "GDPR / HIPAA / PDPL readiness assessment",
    "Data retention & deletion policies",
    "Consent & user rights framework",
    "Incident response procedures",
    "Third-party data sharing controls",
    "Compliance audit documentation",
    "Data processing agreements (DPAs)",
    "Privacy by design guidelines",
    "Employee training materials",
    "Executive compliance dashboard",
  ];

  const useCases = [
    {
      title: "Healthcare Organizations",
      description:
        "Patient data protection and HIPAA compliance for hospitals, clinics, medical practices, and healthcare technology providers.",
    },
    {
      title: "Financial Services",
      description:
        "Customer data privacy and financial information protection for banks, insurance companies, and fintech platforms.",
    },
    {
      title: "SaaS & Technology",
      description:
        "Data processor compliance for cloud service providers, software companies, and technology platforms handling customer data.",
    },
    {
      title: "E-commerce & Retail",
      description:
        "Consumer privacy protection and customer data handling compliance for online retailers and e-commerce businesses.",
    },
    {
      title: "Professional Services",
      description:
        "Client data protection for law firms, consulting companies, accounting firms, and professional service organizations.",
    },
    {
      title: "Government & Public Sector",
      description:
        "Citizen data protection and public sector privacy compliance for government agencies and municipal organizations.",
    },
  ];

  const engagementTiers = [
    {
      title: "Privacy Essentials",
      description:
        "Foundational privacy services including regulatory advisory, compliance framework setup, and basic risk assessment support.",
      bullets: ["Quarterly reviews", "Basic compliance", "Risk assessment", "Policy templates"],
    },
    {
      title: "Comprehensive Privacy",
      description:
        "Full-service privacy engagement with continuous monitoring, regular audits, training programs, and proactive risk management.",
      bullets: ["Monthly reviews", "Full compliance", "Training programs", "Continuous monitoring"],
    },
    {
      title: "Enterprise Privacy Program",
      description:
        "Dedicated privacy resources with embedded team support, 24/7 incident response, executive reporting, and strategic counsel.",
      bullets: ["Weekly touchpoints", "Dedicated resources", "24/7 response", "Executive reporting"],
    },
  ];

  const privacyServices = [
    {
      title: "Risk Assessment",
      desc: "Identify data privacy risks through comprehensive assessments of data processing activities and security controls.",
    },
    {
      title: "Policy Implementation",
      desc: "Develop and enforce data protection policies, privacy notices, consent frameworks, and governance procedures.",
    },
    {
      title: "Cybersecurity Compliance",
      desc: "Meet applicable data protection regulations through security controls, encryption, and access management.",
    },
    {
      title: "GDPR & Global Standards",
      desc: "Ensure compliance with GDPR, HIPAA, ISO 27001, UAE PDPL, CCPA, and other international privacy frameworks.",
    },
    {
      title: "DPO as a Service",
      desc: "Dedicated data protection officer leadership providing expert privacy guidance and regulatory oversight.",
    },
    {
      title: "Continuous Monitoring",
      desc: "Ongoing vulnerability tracking, compliance monitoring, and incident response to maintain data protection posture.",
    },
    {
      title: "Privacy Impact Assessments",
      desc: "Comprehensive DPIAs for high-risk processing activities, identifying privacy risks and mitigation measures.",
    },
    {
      title: "Data Breach Management",
      desc: "72-hour breach notification protocols, authority reporting, data subject communication, and remediation.",
    },
    {
      title: "Privacy Training & Awareness",
      desc: "Employee training programs, privacy awareness campaigns, and role-specific data protection training.",
    },
  ];

  const coreResponsibilities = [
    {
      category: "Assess Data Practices",
      items: [
        "Comprehensive data inventory and classification",
        "Current state privacy assessment and gap analysis",
        "Data flow mapping and processing activity documentation",
        "Privacy risk identification and compliance review",
      ],
    },
    {
      category: "Report Risks & Gaps",
      items: [
        "Privacy risk assessment report with findings",
        "Regulatory compliance gap analysis",
        "Data protection impact assessments (DPIAs)",
        "Remediation roadmap and recommendations",
      ],
    },
    {
      category: "Implement Controls & Training",
      items: [
        "Privacy policy and framework implementation",
        "Technical and organizational controls deployment",
        "Employee privacy awareness training programs",
        "Data protection governance structure setup",
      ],
    },
    {
      category: "Monitor Continuously",
      items: [
        "Ongoing compliance monitoring and audits",
        "Incident response and breach management",
        "Regular privacy control testing and validation",
        "Continuous improvement and regulatory updates",
      ],
    },
  ];

  const faqs = [
    {
      question: "What is data privacy and why does it matter?",
      answer:
        "Data privacy refers to the protection of personal information from unauthorized access, use, or disclosure. It matters because it protects individuals' fundamental rights, builds customer trust, ensures regulatory compliance, reduces legal and financial risks, and demonstrates organizational responsibility. With increasing data breaches and strict privacy regulations like GDPR and PDPL, proper data privacy practices are essential for business operations and reputation.",
    },
    {
      question: "What regulations apply to my organization?",
      answer:
        "Applicable regulations depend on your location, industry, and customer base. Common frameworks include GDPR (for EU/EEA data), UAE PDPL (for UAE operations), HIPAA (for US healthcare), CCPA/CPRA (for California residents), UK GDPR and Data Protection Act, and industry-specific standards like ISO 27001, ISO 27701, and PCI DSS. We help identify which regulations apply to your specific business context and ensure comprehensive compliance.",
    },
    {
      question: "How long does a data privacy assessment take?",
      answer:
        "A comprehensive data privacy assessment typically takes 4-8 weeks depending on organizational size and complexity. The process includes data discovery and inventory (1-2 weeks), data flow mapping and documentation (1-2 weeks), privacy risk assessment and gap analysis (1-2 weeks), and report preparation with recommendations (1-2 weeks). For smaller organizations or focused assessments, timelines can be shorter. We provide a detailed timeline after initial scoping.",
    },
    {
      question: "What is included in your data privacy consulting?",
      answer:
        "Our comprehensive data privacy consulting includes: initial privacy assessment and gap analysis, personal data inventory and mapping, privacy risk assessment and DPIAs, regulatory compliance roadmap, privacy policy and framework development, data retention and deletion procedures, consent management implementation, incident response planning, employee training programs, vendor data processing agreements, ongoing compliance monitoring, and executive reporting dashboards. Services are tailored to your specific needs and regulatory requirements.",
    },
    {
      question: "Do you provide ongoing privacy support?",
      answer:
        "Yes, we offer continuous data privacy support through managed services and DPO as a Service engagements. This includes regular compliance monitoring, policy updates for new regulations, incident response support, employee training refreshers, privacy control testing, vendor oversight, data subject request handling, authority liaison when needed, and quarterly or monthly compliance reviews. We ensure your privacy program evolves with changing regulations and business needs.",
    },
    {
      question: "How do you help with GDPR and PDPL compliance?",
      answer:
        "We provide end-to-end GDPR and UAE PDPL compliance support including: regulatory applicability assessment, Records of Processing Activities (RoPA) documentation, Data Protection Impact Assessments (DPIAs), lawful basis determination for processing, data subject rights procedures (access, erasure, portability), cross-border transfer mechanisms (SCCs, BCRs), breach notification procedures (72-hour rule), privacy by design implementation, and DPO appointment when required. We ensure you meet all legal obligations under these frameworks.",
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

  /* ===================== DATA PRIVACY ILLUSTRATION ===================== */

  const DataPrivacyIllustration = () => (
    <svg viewBox="0 0 420 340" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="privacy-panel" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="privacy-pulse" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      
      {/* Central shield */}
      <rect x="150" y="90" width="120" height="140" rx="14" fill="url(#privacy-panel)" stroke="#60a5fa" strokeOpacity="0.5" strokeWidth="2" />
      
      {/* Privacy text */}
      <text x="210" y="130" fontSize="20" fill="#3b82f6" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">DATA</text>
      <text x="210" y="150" fontSize="20" fill="#3b82f6" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">PRIVACY</text>
      
      {/* Lock icon */}
      <rect x="200" y="170" width="20" height="25" rx="2" fill="#3b82f6" fillOpacity="0.3" />
      <circle cx="210" cy="170" r="8" fill="none" stroke="#3b82f6" strokeWidth="2.5" />
      <circle cx="210" cy="185" r="2.5" fill="#3b82f6" />
      
      {/* Compliance badges */}
      <circle cx="70" cy="110" r="28" fill="url(#privacy-pulse)" fillOpacity="0.2" stroke="#60a5fa" strokeWidth="2" />
      <text x="70" y="108" fontSize="9" fill="#60a5fa" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">GDPR</text>
      <text x="70" y="120" fontSize="8" fill="#60a5fa" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">Compliant</text>
      
      <circle cx="350" cy="110" r="28" fill="url(#privacy-pulse)" fillOpacity="0.2" stroke="#60a5fa" strokeWidth="2" />
      <text x="350" y="108" fontSize="9" fill="#60a5fa" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">HIPAA</text>
      <text x="350" y="120" fontSize="8" fill="#60a5fa" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">Ready</text>
      
      <circle cx="70" cy="230" r="28" fill="url(#privacy-pulse)" fillOpacity="0.2" stroke="#60a5fa" strokeWidth="2" />
      <text x="70" y="228" fontSize="9" fill="#60a5fa" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">ISO</text>
      <text x="70" y="240" fontSize="8" fill="#60a5fa" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">27001</text>
      
      <circle cx="350" cy="230" r="28" fill="url(#privacy-pulse)" fillOpacity="0.2" stroke="#60a5fa" strokeWidth="2" />
      <text x="350" y="228" fontSize="9" fill="#60a5fa" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">PDPL</text>
      <text x="350" y="240" fontSize="8" fill="#60a5fa" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">UAE</text>
      
      {/* Connection lines */}
      <path d="M98 110h30M278 110h45M98 230h30M278 230h45" stroke="#94a3b8" strokeOpacity="0.4" strokeWidth="2" />
      <path d="M130 130l-30 80M130 210l-30-80M290 130l30 80M290 210l30-80" stroke="#94a3b8" strokeOpacity="0.3" strokeDasharray="4 6" strokeWidth="2" />
      
      {/* Data protection layers */}
      <circle cx="210" cy="270" r="3" fill="#3b82f6" />
      <circle cx="195" cy="280" r="2.5" fill="#60a5fa" />
      <circle cx="225" cy="280" r="2.5" fill="#60a5fa" />
      <text x="210" y="300" fontSize="9" fill="#94a3b8" fontFamily="sans-serif" textAnchor="middle">Protected Data</text>
    </svg>
  );

  /* ===================== PAGE COMPONENT ===================== */

  export default function DataPrivacyPage() {
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
                Data Protection & Privacy Compliance
              </div>
              <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
                Data Privacy Consulting
              </h1>
              <p className="mt-4 text-lg text-white/85 md:text-xl">
                Stay ahead with comprehensive data privacy compliance services that protect sensitive information and ensure regulatory adherence.
              </p>
              <p className="mt-3 text-sm text-white/70 md:text-base">
                Expert data privacy consulting for GDPR, HIPAA, PDPL, and global privacy compliance with comprehensive risk assessment, policy implementation, and continuous monitoring.
              </p>
              <div className="mt-7 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  aria-label="Book Your Consultation"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                >
                  <motion.span
                    whileHover={reduceMotion ? undefined : { y: -2 }}
                    whileTap={reduceMotion ? undefined : { y: 0 }}
                    className="inline-flex items-center"
                  >
                    Book Your Consultation
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
                title="Data privacy solutions that protect and comply."
                subtitle="Expert data protection services for organizations across healthcare, finance, technology, and regulated industries."
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
                subtitle="Expert guidance across GDPR, HIPAA, PDPL, ISO, and international data protection frameworks."
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
                title="Data Privacy Compliance Framework"
                subtitle="A structured governance model to control personal data usage, reduce regulatory exposure, and strengthen customer trust."
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
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">Privacy compliance lifecycle</h3>
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
                title="Our Data Privacy Services"
                subtitle="Comprehensive data protection services from risk assessment to continuous monitoring and compliance support."
              />
              <div className="mt-10 grid gap-5 md:grid-cols-3">
                {privacyServices.map((item) => (
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
                  title="Why Data Privacy Matters"
                  subtitle="Protect sensitive information, build trust, and ensure compliance with robust data protection practices."
                />
                <div className="mt-8">
                  <div className="relative rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-900/70">
                    <div className="pointer-events-none absolute -inset-1 rounded-[22px] bg-gradient-to-r from-blue-500/30 via-cyan-500/20 to-transparent opacity-70" />
                    <div className="relative overflow-hidden rounded-2xl bg-slate-950/5 p-4 dark:bg-slate-950">
                      <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-blue-500/20 blur-2xl" />
                      <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-cyan-500/20 blur-2xl" />
                      <img
                        src="/assets/services/cyber.jpg"
                        alt="Data Privacy Consulting"
                        className="w-full rounded-xl shadow-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="grid gap-4">
                  {privacyCapabilities.map((capability) => (
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
                title="How Our Data Privacy Consulting Works"
                subtitle="A structured consulting framework to assess, implement, and continuously improve your organization's data protection posture."
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
                title="Trusted data privacy expertise since 2017."
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
                    description: "Comprehensive privacy services across healthcare, financial services, SaaS, e-commerce, and technology sectors with tailored solutions.",
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
                subtitle="Comprehensive documentation, policies, and compliance support for complete data privacy governance."
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
                title="Data privacy solutions for diverse sectors."
                subtitle="Tailored privacy consulting for healthcare, finance, technology, and regulated organizations."
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
                title="Flexible privacy programs for every organizational need."
                subtitle="Choose from essential, comprehensive, or enterprise privacy services based on your compliance requirements."
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
                title="Common questions about data privacy consulting."
                subtitle="Clear answers to help you understand data privacy requirements, services, and compliance frameworks."
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
                Secure Your Business With Data Privacy
              </h2>
              <p className="mt-3 text-sm text-white/70 md:text-base">
                Protect sensitive data, meet compliance requirements, and gain customer trust.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  aria-label="Talk to a Data Privacy Expert"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                >
                  Talk to a Data Privacy Expert
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