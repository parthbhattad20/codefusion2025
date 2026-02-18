"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const outcomes = [
  {
    title: "Meet Saudi Aramco requirements",
    description:
      "Satisfy SACS-002 cybersecurity compliance standards and pass Aramco's rigorous vendor certification process.",
  },
  {
    title: "Strengthen security posture",
    description:
      "Implement comprehensive security controls that protect critical assets and reduce cyber risk exposure.",
  },
  {
    title: "Win Aramco contracts",
    description:
      "Demonstrate cybersecurity maturity required to secure and maintain lucrative Saudi Aramco partnerships.",
  },
  {
    title: "Maintain continuous compliance",
    description:
      "Establish ongoing monitoring and improvement processes to sustain certification and security effectiveness.",
  },
];

const complianceBadges = [
  "SACS-002",
  "ISO 27001",
  "NIST CSF",
  "IEC 62443",
  "NCA ECC",
  "PDPL",
];

const methodology = [
  {
    title: "Scope & Gap Analysis",
    description:
      "Define certification boundaries, inventory critical assets, and assess current security controls against SACS-002 requirements.",
  },
  {
    title: "Risk Assessment & Treatment",
    description:
      "Identify cybersecurity risks across OT and IT environments, evaluate impact, and develop risk treatment aligned to Aramco standards.",
  },
  {
    title: "Control Implementation",
    description:
      "Deploy technical, operational, and organizational controls across all SACS-002 domains with comprehensive evidence documentation.",
  },
  {
    title: "Internal Audit & Validation",
    description:
      "Conduct internal audits, security testing, and control effectiveness validation to ensure CCC readiness.",
  },
  {
    title: "Certification Support",
    description:
      "Prepare for Aramco audits, manage evidence submission, and provide ongoing compliance and surveillance support.",
  },
];

const processSteps = [
  {
    title: "Assess",
    description: "Scope definition, asset inventory, gap analysis.",
  },
  {
    title: "Design",
    description: "Risk model, security architecture, control mapping.",
  },
  {
    title: "Implement",
    description: "Control deployment, policy creation, training.",
  },
  {
    title: "Certify",
    description: "Audit preparation, evidence submission, certification.",
  },
  {
    title: "Maintain",
    description: "Continuous monitoring, surveillance audits.",
  },
];

const controlDomains = [
  {
    title: "Governance & Risk",
    items: ["Policies", "Risk mgmt", "Compliance", "Third-party"],
  },
  {
    title: "Asset & Data Protection",
    items: ["Asset mgmt", "Data security", "Classification", "Encryption"],
  },
  {
    title: "Access & Identity",
    items: ["Access control", "Authentication", "Privilege mgmt", "Monitoring"],
  },
  {
    title: "Operations & Resilience",
    items: ["Change mgmt", "Incident response", "BC/DR", "Logging"],
  },
];

const deliverables = [
  "SACS-002 gap assessment report with prioritized remediation roadmap",
  "Cybersecurity risk assessment and risk treatment plan",
  "Information Security Management System (ISMS) documentation",
  "Cybersecurity policies and procedures aligned to SACS-002",
  "Statement of Applicability with control implementation evidence",
  "Network security architecture and segmentation documentation",
  "Access control policies and privileged access management procedures",
  "Incident response and business continuity plans",
  "Security awareness training materials and completion records",
  "Internal audit reports and non-conformity registers",
  "Certification audit preparation package and evidence repository",
  "Post-certification surveillance and continuous improvement support",
];

const useCases = [
  {
    title: "Oil & Gas Contractors",
    description:
      "Meet mandatory cybersecurity requirements for contractors providing services to Saudi Aramco operations.",
  },
  {
    title: "Technology Vendors",
    description:
      "Demonstrate security maturity for IT/OT systems, software, and technology solutions sold to Aramco.",
  },
  {
    title: "Supply Chain Partners",
    description:
      "Satisfy third-party security requirements for suppliers in Aramco's extended supply chain ecosystem.",
  },
  {
    title: "Engineering & Construction",
    description:
      "Prove cybersecurity controls for EPC firms managing critical infrastructure and industrial control systems.",
  },
];

const engagementTiers = [
  {
    title: "Readiness Assessment",
    description:
      "Current state evaluation against SACS-002 with detailed gap analysis and certification roadmap.",
    bullets: ["3-4 weeks", "Gap report", "Implementation roadmap"],
  },
  {
    title: "Full Certification",
    description:
      "End-to-end SACS-002 compliance program from gap remediation through successful Aramco certification.",
    bullets: ["4-8 months", "Complete ISMS", "Certification support"],
  },
  {
    title: "Managed Compliance",
    description:
      "Ongoing security management with continuous monitoring, surveillance audits, and recertification support.",
    bullets: ["Annual program", "Surveillance audits", "Continuous improvement"],
  },
];

const cccServices = [
  {
    title: "SACS-002 Gap Assessment",
    desc: "Comprehensive evaluation of current security controls against all SACS-002 requirements and Aramco expectations.",
  },
  {
    title: "Cybersecurity Risk Assessment",
    desc: "Risk identification, analysis, and treatment planning for IT, OT, and industrial control system environments.",
  },
  {
    title: "ISMS Design & Implementation",
    desc: "Information Security Management System design aligned to SACS-002 and ISO 27001 integration.",
  },
  {
    title: "Security Policy Development",
    desc: "Cybersecurity policies, standards, procedures, and work instructions covering all SACS-002 domains.",
  },
  {
    title: "Technical Control Implementation",
    desc: "Network security, access controls, encryption, monitoring, and security technology deployment.",
  },
  {
    title: "Security Architecture Review",
    desc: "Network segmentation, defense-in-depth design, and industrial control system security architecture.",
  },
  {
    title: "Incident Response & BC/DR",
    desc: "Incident response procedures, business continuity planning, and disaster recovery program development.",
  },
  {
    title: "Security Awareness Training",
    desc: "Customized cybersecurity training programs for employees, contractors, and third-party personnel.",
  },
  {
    title: "Certification Audit Support",
    desc: "Aramco audit preparation, evidence management, auditor liaison, and certification project management.",
  },
];

const faqs = [
  {
    question: "What is Saudi Aramco's CCC certification?",
    answer:
      "The Cybersecurity Compliance Certification (CCC) is Saudi Aramco's mandatory certification for third-party vendors and contractors. It verifies compliance with SACS-002 (Saudi Aramco Cybersecurity Standard) which establishes minimum security requirements for protecting Aramco's information assets, systems, and networks. All vendors must achieve and maintain CCC to conduct business with Saudi Aramco.",
  },
  {
    question: "How long does Aramco CCC certification take?",
    answer:
      "Typical timeline is 4-8 months from project initiation to certification, depending on organization size, existing security maturity, and scope complexity. This includes gap assessment (3-4 weeks), control implementation (3-5 months), internal audits (3-4 weeks), and certification audit (4-6 weeks). Organizations with mature security programs may certify faster, while those starting from baseline may need 8-12 months.",
  },
  {
    question: "Do we need ISO 27001 for Aramco CCC?",
    answer:
      "While not strictly mandatory, ISO 27001 certification significantly streamlines the CCC process as SACS-002 is heavily based on ISO 27001 controls. Many organizations pursue both certifications simultaneously through an integrated management system approach. If you're ISO 27001 certified, you've already addressed many SACS-002 requirements and primarily need to implement Aramco-specific controls and documentation.",
  },
  {
    question: "What happens after CCC certification?",
    answer:
      "Certification is valid for 3 years with annual surveillance audits to verify ongoing compliance. You must maintain your cybersecurity program through continuous monitoring, regular risk assessments, management reviews, internal audits, and timely incident response. Security controls must be continuously monitored and improved. After 3 years, you undergo recertification to renew for another 3-year cycle.",
  },
];

const painPoints = [
  "Are we ready for SACS-002 compliance?",
  "How do we prove security to Aramco?",
  "What controls are mandatory for certification?",
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

const AramcoIllustration = () => (
  <svg viewBox="0 0 420 320" className="h-full w-full" aria-hidden="true">
    <defs>
      <linearGradient id="aramco-panel" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#0f172a" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.2" />
      </linearGradient>
      <linearGradient id="aramco-pulse" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#38bdf8" />
        <stop offset="100%" stopColor="#0ea5e9" />
      </linearGradient>
    </defs>
    {/* Central shield with CCC */}
    <path d="M210 50l60 25v50c0 42-28 75-60 85-32-10-60-43-60-85V75l60-25z" 
          fill="url(#aramco-panel)" stroke="#94a3b8" strokeOpacity="0.4" strokeWidth="2" />
    
    {/* CCC Text */}
    <text x="210" y="115" fontSize="24" fill="#0ea5e9" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">CCC</text>
    <text x="210" y="135" fontSize="10" fill="#94a3b8" fontFamily="sans-serif" textAnchor="middle">SACS-002</text>
    
    {/* Checkmark */}
    <path d="M195 145l10 10 20-25" stroke="#0ea5e9" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    
    {/* Control domain indicators */}
    <circle cx="80" cy="100" r="22" fill="url(#aramco-pulse)" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="2" />
    <text x="80" y="106" fontSize="10" fill="#38bdf8" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">GOV</text>
    
    <circle cx="340" cy="100" r="22" fill="url(#aramco-pulse)" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="2" />
    <text x="340" y="106" fontSize="10" fill="#38bdf8" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">DATA</text>
    
    <circle cx="80" cy="190" r="22" fill="url(#aramco-pulse)" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="2" />
    <text x="80" y="196" fontSize="10" fill="#38bdf8" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">IAM</text>
    
    <circle cx="340" cy="190" r="22" fill="url(#aramco-pulse)" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="2" />
    <text x="340" y="196" fontSize="10" fill="#38bdf8" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">OPS</text>
    
    {/* Connection lines */}
    <path d="M102 100h48M270 100h48M102 190h48M270 190h48" stroke="#94a3b8" strokeOpacity="0.5" strokeDasharray="4 6" strokeWidth="2" />
    
    {/* Security layers */}
    <rect x="160" y="220" width="100" height="8" rx="4" fill="#94a3b8" fillOpacity="0.3" />
    <rect x="170" y="235" width="80" height="8" rx="4" fill="#94a3b8" fillOpacity="0.3" />
    <rect x="180" y="250" width="60" height="8" rx="4" fill="#94a3b8" fillOpacity="0.3" />
  </svg>
);

export default function AramcoCCCPage() {
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
      <Section className="pt-24 sm:pt-28 md:pt-0 pb-14 mt-12">
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
            <h1 className="mt-16 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              Achieve Saudi Aramco CCC certification with expert SACS-002 compliance.
            </h1>
            <p className="mt-4 text-lg text-white/80 md:text-xl">
              Comprehensive Aramco Cybersecurity Compliance Certification consulting that implements, validates, and certifies your security controls to SACS-002 requirements.
            </p>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Expert-led SACS-002 implementation with gap assessment, risk management, technical controls deployment, and Aramco certification audit support.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/contact?subject=series&subSubject=Aramco%20CCC%20Certification"
                aria-label="Get Aramco CCC Certified"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <motion.span
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  whileTap={reduceMotion ? undefined : { y: 0 }}
                  className="inline-flex items-center"
                >
                  Get Aramco CCC Certified
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
              title="Aramco CCC certification that proves cybersecurity maturity."
              subtitle="Demonstrate SACS-002 compliance to Saudi Aramco and strengthen your security posture across IT and OT environments."
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
              eyebrow="Standards & Frameworks"
              title="SACS-002 compliance aligned with global security standards."
              subtitle="Build cybersecurity controls that satisfy Aramco requirements and support broader compliance objectives."
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
              title="Structured approach to SACS-002 compliance and certification."
              subtitle="We follow Aramco's requirements systematically—from gap analysis to certification audit support and beyond."
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
              title="End-to-end SACS-002 implementation and CCC certification support."
              subtitle="From initial readiness assessment to post-certification maintenance, we guide you through every phase of Aramco compliance."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {cccServices.map((item) => (
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

      {/* Control Coverage Section */}
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
                eyebrow="SACS-002 Control Domains"
                title="Comprehensive coverage across all SACS-002 security domains."
                subtitle="We implement and validate controls across governance, asset protection, access management, and operational resilience."
              />
              <div className="mt-8">
                <div className="relative rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-900/70">
                  <div className="pointer-events-none absolute -inset-1 rounded-[22px] bg-gradient-to-r from-sky-500/30 via-cyan-500/20 to-transparent opacity-70" />
                  <div className="relative overflow-hidden rounded-2xl bg-slate-950/5 p-4 dark:bg-slate-950">
                    <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-sky-500/20 blur-2xl" />
                    <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-cyan-500/20 blur-2xl" />
                    <AramcoIllustration />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="grid gap-4">
                {controlDomains.map((domain) => (
                  <motion.div key={domain.title} variants={fadeUp}>
                    <Card>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                        {domain.title}
                      </h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {domain.items.map((item) => (
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
              title="Aramco CCC expertise that ensures first-time certification success."
              subtitle="We've guided organizations across oil & gas, technology, and supply chain sectors through successful SACS-002 certification."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Aramco certification track record",
                  description: "Proven success with CCC certification across contractors, vendors, and supply chain partners serving Saudi Aramco.",
                  Icon: IconAward,
                },
                {
                  title: "IT and OT security expertise",
                  description: "Deep experience securing both information technology and operational technology environments to SACS-002 standards.",
                  Icon: IconClipboard,
                },
                {
                  title: "Post-certification support",
                  description: "Ongoing surveillance audit preparation, compliance monitoring, and continuous security improvement to maintain certification.",
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
              title="Complete SACS-002 documentation and certification evidence."
              subtitle="Everything you need for successful Aramco certification and ongoing compliance management."
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
              title="Aramco CCC certification for diverse vendor categories."
              subtitle="Industry-specific SACS-002 compliance that addresses sector-specific security requirements and Aramco expectations."
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
              title="Flexible Aramco CCC programs for every maturity level."
              subtitle="From initial readiness assessment to full managed compliance, we adapt to your organization's needs and timeline."
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
              title="Common questions about Aramco CCC certification."
              subtitle="Clear answers to help you understand the SACS-002 compliance and certification process."
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
              Get Aramco CCC certified with confidence.
            </h2>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Expert SACS-002 implementation and certification support with proven success across Saudi Aramco's vendor ecosystem.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact?subject=series&subSubject=Aramco%20CCC%20Certification"
                aria-label="Speak With an Aramco CCC Expert"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Speak With an Aramco CCC Expert
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
            Ready for CCC certification?
          </div>
          <Link
            href="/contact?subject=series&subSubject=Aramco%20CCC%20Certification"
            aria-label="Speak With an Aramco CCC Expert"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white"
          >
            Get Started
          </Link>
        </div>
      </div>
    </motion.main>
  );
}