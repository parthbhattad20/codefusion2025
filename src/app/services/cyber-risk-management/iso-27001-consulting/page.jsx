"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const outcomes = [
  {
    title: "Demonstrate information security",
    description:
      "Prove systematic protection of confidentiality, integrity, and availability of critical business information.",
  },
  {
    title: "Meet compliance requirements",
    description:
      "Satisfy regulatory obligations and customer security questionnaires with internationally recognized certification.",
  },
  {
    title: "Build customer trust",
    description:
      "Win enterprise contracts and partnerships by demonstrating commitment to world-class security standards.",
  },
  {
    title: "Reduce security incidents",
    description:
      "Implement risk-based controls that systematically reduce likelihood and impact of security breaches.",
  },
];

const complianceBadges = [
  "ISO 27001:2022",
  "GDPR",
  "SOC 2",
  "PCI DSS",
  "HIPAA",
  "NIS2",
];

const methodology = [
  {
    title: "Scope & Gap Analysis",
    description:
      "Define ISMS boundaries, inventory information assets, and assess current controls against ISO 27001 Annex A requirements.",
  },
  {
    title: "Risk Assessment & Treatment",
    description:
      "Identify information security risks, evaluate likelihood and impact, and develop risk treatment plans aligned to business objectives.",
  },
  {
    title: "ISMS Implementation",
    description:
      "Deploy policies, procedures, and technical controls across 93 Annex A control objectives with evidence documentation.",
  },
  {
    title: "Internal Audit & Review",
    description:
      "Conduct internal audits, management reviews, and control effectiveness testing to validate ISMS readiness.",
  },
  {
    title: "Certification Support",
    description:
      "Stage 1 and Stage 2 audit preparation, auditor liaison, and corrective action management for successful certification.",
  },
];

const processSteps = [
  {
    title: "Plan",
    description: "Scope definition, asset inventory, gap analysis.",
  },
  {
    title: "Implement",
    description: "Control deployment, policy creation, training.",
  },
  {
    title: "Audit",
    description: "Internal audits, management review, testing.",
  },
  {
    title: "Certify",
    description: "Stage 1/2 audits, corrective actions, certification.",
  },
  {
    title: "Maintain",
    description: "Continuous monitoring, annual surveillance audits.",
  },
];

const controlCategories = [
  {
    title: "Organizational Controls",
    items: ["Policies", "Roles", "Asset mgmt", "Supplier security"],
  },
  {
    title: "People Controls",
    items: ["Screening", "Training", "Awareness", "Disciplinary"],
  },
  {
    title: "Physical Controls",
    items: ["Secure areas", "Equipment", "Disposal", "Clear desk"],
  },
  {
    title: "Technological Controls",
    items: ["Access control", "Cryptography", "Network security", "Logging"],
  },
];

const deliverables = [
  "Information Security Management System (ISMS) documentation",
  "Information Security Policy and supporting policies",
  "Risk Assessment and Risk Treatment Plan",
  "Statement of Applicability (SoA) with control justifications",
  "93 Annex A control implementation evidence",
  "Security awareness training materials and records",
  "Internal audit reports and findings register",
  "Management review meeting minutes and decisions",
  "Incident response and business continuity procedures",
  "Certification audit preparation and support",
  "Corrective action plans and closure evidence",
  "Post-certification surveillance audit support",
];

const useCases = [
  {
    title: "Technology & SaaS",
    description:
      "Win enterprise customers and demonstrate security maturity for cloud-based platforms and software services.",
  },
  {
    title: "Financial Services",
    description:
      "Meet regulatory requirements and prove information security controls for banking and payment processors.",
  },
  {
    title: "Healthcare & Life Sciences",
    description:
      "Protect patient data and demonstrate compliance with health information security regulations.",
  },
  {
    title: "Manufacturing & Supply Chain",
    description:
      "Secure intellectual property and meet customer security requirements in global supply chains.",
  },
];

const engagementTiers = [
  {
    title: "Gap Assessment",
    description:
      "Current state analysis against ISO 27001 requirements with prioritized roadmap to certification.",
    bullets: ["2-4 weeks", "Gap report", "Implementation roadmap"],
  },
  {
    title: "Full Implementation",
    description:
      "End-to-end ISMS design, control implementation, and certification audit support with expert guidance.",
    bullets: ["3-6 months", "Complete ISMS", "Certification support"],
  },
  {
    title: "Managed Compliance",
    description:
      "Ongoing ISMS management with continuous monitoring, surveillance audits, and recertification support.",
    bullets: ["Annual program", "Surveillance audits", "Continuous improvement"],
  },
];

const isoServices = [
  {
    title: "ISMS Design & Implementation",
    desc: "Complete Information Security Management System design aligned to ISO 27001:2022 requirements.",
  },
  {
    title: "Risk Assessment & Treatment",
    desc: "Comprehensive information security risk assessment with treatment plans and control recommendations.",
  },
  {
    title: "Policy & Procedure Development",
    desc: "Information security policies, procedures, and work instructions for all 93 Annex A controls.",
  },
  {
    title: "Control Implementation Support",
    desc: "Technical and organizational control deployment with evidence collection and documentation.",
  },
  {
    title: "Internal ISMS Audits",
    desc: "Internal audit execution, non-conformity identification, and corrective action management.",
  },
  {
    title: "Certification Audit Preparation",
    desc: "Stage 1 and Stage 2 audit readiness assessment, auditor liaison, and certification support.",
  },
  {
    title: "Security Awareness Training",
    desc: "Employee training programs on information security policies, procedures, and responsibilities.",
  },
  {
    title: "Surveillance & Recertification",
    desc: "Annual surveillance audit support and triennial recertification project management.",
  },
  {
    title: "Integrated Management Systems",
    desc: "Combined ISO 27001, ISO 9001, and ISO 27701 implementation for unified compliance.",
  },
];

const faqs = [
  {
    question: "How long does ISO 27001 certification take?",
    answer:
      "Typical timeline is 3-6 months from project start to certification, depending on organization size, complexity, and existing security maturity. This includes gap analysis (2-4 weeks), ISMS implementation (2-3 months), internal audits (2-4 weeks), and certification audits (4-6 weeks). Organizations with mature security programs may certify faster, while those starting from scratch may need 6-9 months.",
  },
  {
    question: "What's the difference between Stage 1 and Stage 2 audits?",
    answer:
      "Stage 1 is a documentation review where auditors assess your ISMS design, policies, and procedures for conformance to ISO 27001. Stage 2 is an implementation audit where auditors verify controls are actually implemented and effective through interviews, testing, and evidence review. Both stages must pass for certification to be granted.",
  },
  {
    question: "Do we need to implement all 93 Annex A controls?",
    answer:
      "No, you only implement controls that are applicable and necessary to treat your identified risks. The Statement of Applicability (SoA) documents which controls you implement and justifies exclusions. However, you must demonstrate why excluded controls are not relevant to your ISMS scope and risk profile.",
  },
  {
    question: "What happens after we get certified?",
    answer:
      "Certification lasts 3 years, but you'll have annual surveillance audits (typically 1-2 days) to verify ongoing compliance. You must maintain your ISMS through continuous monitoring, management reviews, internal audits, and corrective actions. After 3 years, you undergo recertification (similar to initial certification) to renew for another 3-year cycle.",
  },
];

const painPoints = [
  "Do we meet ISO 27001 requirements?",
  "How do we prove security to customers?",
  "What controls do we need to implement?",
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

const ISO27001Illustration = () => (
  <svg viewBox="0 0 420 320" className="h-full w-full" aria-hidden="true">
    <defs>
      <linearGradient id="iso-panel" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#0f172a" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.2" />
      </linearGradient>
      <linearGradient id="iso-pulse" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#38bdf8" />
        <stop offset="100%" stopColor="#0ea5e9" />
      </linearGradient>
    </defs>
    {/* Central certificate */}
    <rect x="130" y="60" width="160" height="200" rx="12" fill="url(#iso-panel)" stroke="#94a3b8" strokeOpacity="0.4" strokeWidth="2" />
    
    {/* Certificate header */}
    <rect x="150" y="80" width="120" height="30" rx="6" fill="#0ea5e9" fillOpacity="0.3" />
    <text x="210" y="100" fontSize="12" fill="#0ea5e9" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">ISO 27001</text>
    
    {/* Certificate lines */}
    <rect x="150" y="130" width="100" height="6" rx="3" fill="#94a3b8" fillOpacity="0.4" />
    <rect x="150" y="150" width="80" height="6" rx="3" fill="#94a3b8" fillOpacity="0.4" />
    <rect x="150" y="170" width="90" height="6" rx="3" fill="#94a3b8" fillOpacity="0.4" />
    
    {/* Seal/Badge */}
    <circle cx="210" cy="215" r="25" fill="url(#iso-pulse)" fillOpacity="0.3" stroke="#0ea5e9" strokeWidth="2" />
    <path d="M210 195l5 7 7-10" stroke="#0ea5e9" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    
    {/* ISMS cycle indicators */}
    <circle cx="80" cy="120" r="20" fill="url(#iso-pulse)" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="2" />
    <text x="80" y="125" fontSize="10" fill="#38bdf8" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">P</text>
    
    <circle cx="340" cy="120" r="20" fill="url(#iso-pulse)" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="2" />
    <text x="340" y="125" fontSize="10" fill="#38bdf8" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">D</text>
    
    <circle cx="80" cy="200" r="20" fill="url(#iso-pulse)" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="2" />
    <text x="80" y="205" fontSize="10" fill="#38bdf8" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">C</text>
    
    <circle cx="340" cy="200" r="20" fill="url(#iso-pulse)" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="2" />
    <text x="340" y="205" fontSize="10" fill="#38bdf8" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">A</text>
    
    {/* Connection arrows */}
    <path d="M100 120h20M300 120h20M100 200h20M300 200h20" stroke="#94a3b8" strokeOpacity="0.5" strokeDasharray="4 6" strokeWidth="2" />
  </svg>
);

export default function ISO27001Page() {
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
            <h1 className="mt-16 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              Achieve ISO 27001 certification with expert guidance.
            </h1>
            <p className="mt-4 text-lg text-white/80 md:text-xl">
              Comprehensive ISO 27001 consulting that designs, implements, and certifies your Information Security Management System (ISMS) to internationally recognized standards.
            </p>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Expert-led implementation aligned to ISO 27001:2022 with gap analysis, risk assessment, control deployment, and certification audit support.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/contact?subject=ISO%2027001%20Consulting"
                aria-label="Get ISO 27001 Certified"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <motion.span
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  whileTap={reduceMotion ? undefined : { y: 0 }}
                  className="inline-flex items-center"
                >
                  Get ISO 27001 Certified
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
              title="ISO 27001 certification that proves security maturity."
              subtitle="Demonstrate systematic information security management to customers, regulators, and stakeholders."
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
              title="ISO 27001 certification that supports broader compliance."
              subtitle="Build a foundation that satisfies multiple regulatory and contractual security requirements."
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
              title="Structured approach to ISMS design and certification."
              subtitle="We follow ISO 27001 requirements systematically—from gap analysis to certification audit support."
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
              title="End-to-end ISO 27001 implementation and certification support."
              subtitle="From initial gap analysis to post-certification surveillance, we guide you through every phase."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {isoServices.map((item) => (
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
                eyebrow="Annex A Controls"
                title="Comprehensive coverage of 93 ISO 27001 control objectives."
                subtitle="We help you implement and document all applicable Annex A controls across four control categories."
              />
              <div className="mt-8">
                <div className="relative rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-900/70">
                  <div className="pointer-events-none absolute -inset-1 rounded-[22px] bg-gradient-to-r from-sky-500/30 via-cyan-500/20 to-transparent opacity-70" />
                  <div className="relative overflow-hidden rounded-2xl bg-slate-950/5 p-4 dark:bg-slate-950">
                    <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-sky-500/20 blur-2xl" />
                    <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-cyan-500/20 blur-2xl" />
                    <ISO27001Illustration />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="grid gap-4">
                {controlCategories.map((category) => (
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
              title="ISO 27001 expertise that ensures first-time certification success."
              subtitle="We've guided dozens of organizations through successful ISO 27001 certification."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Certification track record",
                  description: "100% first-time certification pass rate with major certification bodies including BSI, LRQA, and DNV.",
                  Icon: IconAward,
                },
                {
                  title: "Practical implementation",
                  description: "Controls designed for real-world operations—not just compliance checkboxes—with evidence that satisfies auditors.",
                  Icon: IconClipboard,
                },
                {
                  title: "Post-certification support",
                  description: "Ongoing surveillance audit preparation and continuous improvement support to maintain certification.",
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
              title="Complete ISMS documentation and certification evidence."
              subtitle="Everything you need for successful certification and ongoing compliance management."
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
              title="ISO 27001 certification for diverse industries."
              subtitle="Industry-specific ISMS implementation that addresses sector-specific security requirements."
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
              title="Flexible ISO 27001 programs for every maturity level."
              subtitle="From initial gap assessment to full managed compliance, we adapt to your needs."
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
              title="Common questions about ISO 27001 certification."
              subtitle="Clear answers to help you understand the certification process and requirements."
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
              Get ISO 27001 certified with confidence.
            </h2>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Expert implementation and certification support with a proven track record of first-time success.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact?subject=ISO%2027001%20Consulting"
                aria-label="Speak With an ISO Expert"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Speak With an ISO Expert
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
            Ready to get certified?
          </div>
          <Link
            href="/contact?subject=ISO%2027001%20Consulting"
            aria-label="Speak With an ISO Expert"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white"
          >
            Get Started
          </Link>
        </div>
      </div>
    </motion.main>
  );
}