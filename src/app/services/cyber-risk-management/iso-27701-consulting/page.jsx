"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const outcomes = [
  {
    title: "Demonstrate privacy compliance",
    description:
      "Prove systematic protection of personal data privacy aligned to GDPR, CCPA, and global privacy regulations.",
  },
  {
    title: "Build on ISO 27001 foundation",
    description:
      "Extend existing ISMS with privacy-specific controls through integrated management system approach.",
  },
  {
    title: "Win customer trust",
    description:
      "Differentiate in competitive markets by demonstrating certified commitment to privacy protection and responsible data handling.",
  },
  {
    title: "Reduce privacy risks",
    description:
      "Implement risk-based privacy controls that systematically reduce likelihood and impact of data protection incidents.",
  },
];

const complianceBadges = [
  "ISO 27701:2019",
  "GDPR",
  "CCPA",
  "UAE PDPL",
  "ISO 27001",
  "Privacy Shield",
];

const methodology = [
  {
    title: "Privacy Scoping & Gap Analysis",
    description:
      "Define PIMS boundaries, map personal data flows, identify controller/processor roles, and assess current privacy controls.",
  },
  {
    title: "Privacy Risk Assessment",
    description:
      "Conduct Data Protection Impact Assessments (DPIAs), identify privacy risks, and develop risk treatment plans.",
  },
  {
    title: "PIMS Implementation",
    description:
      "Deploy privacy controls, consent mechanisms, data subject rights processes, and vendor management frameworks.",
  },
  {
    title: "Privacy Documentation",
    description:
      "Create privacy policies, procedures, records of processing activities (ROPA), and privacy notice templates.",
  },
  {
    title: "Certification Support",
    description:
      "Internal privacy audits, management reviews, and certification audit preparation for ISO 27701 assessment.",
  },
];

const processSteps = [
  {
    title: "Discover",
    description: "Data mapping, controllers/processors, scope definition.",
  },
  {
    title: "Design",
    description: "PIMS structure, policies, lawful basis, DPIA planning.",
  },
  {
    title: "Implement",
    description: "Privacy controls, consent flows, vendor governance.",
  },
  {
    title: "Audit",
    description: "Internal audits, readiness assessment, testing.",
  },
  {
    title: "Certify",
    description: "Certification audit support and evidence review.",
  },
];

const privacyCategories = [
  {
    title: "Data Subject Rights",
    items: ["Access requests", "Erasure/deletion", "Portability", "Objection"],
  },
  {
    title: "Lawful Processing",
    items: ["Consent mgmt", "Legitimate interest", "Contract necessity", "Legal obligation"],
  },
  {
    title: "Privacy by Design",
    items: ["Data minimization", "Purpose limitation", "Storage limitation", "Accuracy"],
  },
  {
    title: "Accountability",
    items: ["ROPA", "DPIAs", "Privacy notices", "Breach notification"],
  },
];

const deliverables = [
  "Privacy Information Management System (PIMS) documentation",
  "Personal data inventory and data flow mapping",
  "Records of Processing Activities (ROPA) for controllers and processors",
  "Data Protection Impact Assessments (DPIA) templates and reports",
  "Privacy policies, notices, and consent management frameworks",
  "Data subject rights request handling procedures",
  "Vendor and third-party processor management framework",
  "Privacy breach notification and incident response procedures",
  "Privacy training materials and awareness programs",
  "Internal privacy audit reports and findings",
  "ISO 27701 compliance evidence and audit readiness package",
  "GDPR, CCPA, and regional privacy law compliance mapping",
];

const useCases = [
  {
    title: "Technology & Cloud Services",
    description:
      "Demonstrate privacy compliance for data processors and controllers handling customer personal data at scale.",
  },
  {
    title: "Healthcare & Life Sciences",
    description:
      "Protect patient privacy beyond HIPAA with internationally recognized privacy management certification.",
  },
  {
    title: "Financial Services",
    description:
      "Meet privacy expectations for banking, insurance, and financial data with certified privacy controls.",
  },
  {
    title: "E-Commerce & Marketing",
    description:
      "Build customer trust through certified privacy practices for personal data collection and processing.",
  },
];

const engagementTiers = [
  {
    title: "Privacy Gap Assessment",
    description:
      "Current state analysis of privacy controls against ISO 27701 and GDPR requirements with roadmap.",
    bullets: ["2-4 weeks", "Gap report", "Privacy roadmap"],
  },
  {
    title: "Full PIMS Implementation",
    description:
      "Complete Privacy Information Management System design, control deployment, and certification support.",
    bullets: ["3-6 months", "Complete PIMS", "Certification ready"],
  },
  {
    title: "Managed Privacy Program",
    description:
      "Ongoing PIMS management with continuous monitoring, DPIAs, and surveillance audit support.",
    bullets: ["Annual program", "Continuous DPIAs", "Privacy optimization"],
  },
];

const privacyServices = [
  {
    title: "PIMS Design & Implementation",
    desc: "Complete Privacy Information Management System aligned to ISO 27701 and GDPR requirements.",
  },
  {
    title: "Data Mapping & Flow Analysis",
    desc: "Comprehensive personal data inventory, processing activities mapping, and cross-border transfer assessment.",
  },
  {
    title: "DPIA & Privacy Risk Assessment",
    desc: "Data Protection Impact Assessments with risk evaluation and privacy treatment recommendations.",
  },
  {
    title: "Privacy Policy Development",
    desc: "Privacy notices, cookie policies, consent frameworks, and data subject rights procedures.",
  },
  {
    title: "Consent Management Framework",
    desc: "Consent collection, withdrawal, and record-keeping mechanisms compliant with GDPR standards.",
  },
  {
    title: "Vendor Privacy Assessment",
    desc: "Third-party processor evaluation, data processing agreements, and vendor privacy governance.",
  },
  {
    title: "Privacy Training & Awareness",
    desc: "Employee training on privacy principles, GDPR obligations, and data protection responsibilities.",
  },
  {
    title: "Certification Audit Support",
    desc: "ISO 27701 certification preparation, auditor liaison, and compliance evidence management.",
  },
  {
    title: "GDPR Compliance Integration",
    desc: "Combined ISO 27701 and GDPR compliance program with unified privacy management approach.",
  },
];

const faqs = [
  {
    question: "What's the relationship between ISO 27701 and ISO 27001?",
    answer:
      "ISO 27701 is an extension to ISO 27001 that adds privacy-specific requirements. You must have ISO 27001 certification (or be pursuing it) before implementing ISO 27701. The standards work together: ISO 27001 provides information security management, while ISO 27701 adds privacy information management on top of that foundation. Many organizations pursue both certifications simultaneously.",
  },
  {
    question: "How does ISO 27701 relate to GDPR compliance?",
    answer:
      "ISO 27701 provides a structured framework to achieve GDPR compliance, but certification alone doesn't guarantee GDPR compliance. ISO 27701 covers privacy controls, data subject rights, consent management, and accountability measures that align with GDPR requirements. Many organizations use ISO 27701 as their privacy management framework to demonstrate GDPR compliance to customers and regulators.",
  },
  {
    question: "Do we need to be ISO 27001 certified first?",
    answer:
      "Yes, ISO 27701 requires an existing or parallel ISO 27001 implementation. You cannot certify to ISO 27701 without ISO 27001. However, you can implement both standards together if you're starting fresh. Organizations often pursue integrated certification where both audits occur during the same assessment period.",
  },
  {
    question: "What's included in a PIMS (Privacy Information Management System)?",
    answer:
      "A PIMS includes privacy policies and procedures, personal data inventories, Records of Processing Activities (ROPA), Data Protection Impact Assessments (DPIAs), consent management frameworks, data subject rights processes, vendor management procedures, privacy training materials, and breach notification procedures. It extends your existing ISMS with privacy-specific controls and documentation.",
  },
];

const painPoints = [
  "Do we handle personal data responsibly?",
  "Are we GDPR and privacy law compliant?",
  "How do we prove privacy to customers?",
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

const IconUserCheck = ({ className }) => (
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
    <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 11l-3 3-2-2" />
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

const ISO27701Illustration = () => (
  <svg viewBox="0 0 420 320" className="h-full w-full" aria-hidden="true">
    <defs>
      <linearGradient id="privacy-panel" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#0f172a" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#c026d3" stopOpacity="0.2" />
      </linearGradient>
      <linearGradient id="privacy-pulse" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#d946ef" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>
    {/* Central privacy shield */}
    <circle cx="210" cy="160" r="60" fill="url(#privacy-panel)" stroke="#94a3b8" strokeOpacity="0.4" strokeWidth="2" />
    <path d="M210 120l30 12v20c0 18-10 28-30 34-20-6-30-16-30-34v-20l30-12z" stroke="#d946ef" strokeWidth="2.5" fill="none" />
    <circle cx="210" cy="160" r="15" fill="#d946ef" fillOpacity="0.3" />
    <path d="M205 160l3 3 6-8" stroke="#d946ef" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    
    {/* Data flow nodes */}
    <circle cx="80" cy="100" r="25" fill="url(#privacy-pulse)" fillOpacity="0.2" stroke="#d946ef" strokeWidth="2" />
    <circle cx="340" cy="100" r="25" fill="url(#privacy-pulse)" fillOpacity="0.2" stroke="#a855f7" strokeWidth="2" />
    <circle cx="80" cy="220" r="25" fill="url(#privacy-pulse)" fillOpacity="0.2" stroke="#d946ef" strokeWidth="2" />
    <circle cx="340" cy="220" r="25" fill="url(#privacy-pulse)" fillOpacity="0.2" stroke="#a855f7" strokeWidth="2" />
    
    {/* Privacy labels */}
    <text x="80" y="105" fontSize="9" fill="#d946ef" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">DATA</text>
    <text x="340" y="105" fontSize="9" fill="#a855f7" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">CONSENT</text>
    <text x="80" y="225" fontSize="9" fill="#d946ef" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">RIGHTS</text>
    <text x="340" y="225" fontSize="9" fill="#a855f7" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">DPIA</text>
    
    {/* Connection lines */}
    <path d="M105 100L155 140M255 140L315 100M105 220L155 180M255 180L315 220" stroke="#94a3b8" strokeOpacity="0.5" strokeDasharray="4 6" strokeWidth="2" />
    
    {/* Lock overlay */}
    <g transform="translate(195, 80)">
      <rect x="0" y="8" width="30" height="20" rx="3" stroke="#10b981" strokeWidth="2" fill="none" />
      <path d="M7 8V5a8 8 0 0116 0v3" stroke="#10b981" strokeWidth="2" fill="none" />
    </g>
  </svg>
);

export default function ISO27701Page() {
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
          <div className="absolute -left-20 top-20 h-56 w-56 rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="absolute -right-24 bottom-6 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
        </div>

        <Container className="relative z-10 flex min-h-[86vh] flex-col justify-center">
          <motion.div variants={fadeUp} className="max-w-3xl">
            <h1 className="mt-16 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              Achieve ISO 27701 privacy certification with expert guidance.
            </h1>
            <p className="mt-4 text-lg text-white/80 md:text-xl">
              Comprehensive ISO 27701 consulting that designs, implements, and certifies your Privacy Information Management System (PIMS) to international privacy standards.
            </p>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Expert-led implementation extending ISO 27001 with privacy-specific controls aligned to GDPR, CCPA, and global data protection regulations.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/contact?subject=ISO%2027701%20Consulting"
                aria-label="Speak with a Privacy Expert"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <motion.span
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  whileTap={reduceMotion ? undefined : { y: 0 }}
                  className="inline-flex items-center"
                >
                  Speak with a Privacy Expert
                </motion.span>
              </Link>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12 max-w-4xl">
            <div className="grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80 md:grid-cols-3">
              {painPoints.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
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
              title="ISO 27701 certification that proves privacy commitment."
              subtitle="Demonstrate systematic privacy management to customers, regulators, and data subjects globally."
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
                        <IconLock className="h-5 w-5" />
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
              eyebrow="Privacy Standards & Regulations"
              title="ISO 27701 certification supporting global privacy compliance."
              subtitle="Build a privacy framework that aligns with GDPR, CCPA, and regional data protection laws."
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
              title="Structured approach to PIMS design and privacy certification."
              subtitle="We follow ISO 27701 requirements systematically—from data mapping to certification support."
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
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">Privacy implementation process</h3>
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
              title="End-to-end ISO 27701 privacy implementation and certification."
              subtitle="From data mapping to DPIA management, we guide you through every privacy requirement."
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

      {/* Privacy Controls Coverage Section */}
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
                eyebrow="Privacy Controls"
                title="Comprehensive privacy management framework."
                subtitle="We help you implement GDPR-aligned privacy controls across data subject rights, consent, and accountability."
              />
              <div className="mt-8">
                <div className="relative rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-900/70">
                  <div className="pointer-events-none absolute -inset-1 rounded-[22px] bg-gradient-to-r from-fuchsia-500/30 via-purple-500/20 to-transparent opacity-70" />
                  <div className="relative overflow-hidden rounded-2xl bg-slate-950/5 p-4 dark:bg-slate-950">
                    <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-fuchsia-500/20 blur-2xl" />
                    <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-purple-500/20 blur-2xl" />
                    <ISO27701Illustration />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="grid gap-4">
                {privacyCategories.map((category) => (
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
              title="Privacy expertise that ensures certification success."
              subtitle="We combine ISO 27701 knowledge with deep GDPR and global privacy law experience."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "ISO 27001 + Privacy integration",
                  description: "Seamless integration of ISO 27701 with existing ISO 27001 implementation for unified security and privacy management.",
                  Icon: IconShield,
                },
                {
                  title: "GDPR alignment expertise",
                  description: "Privacy controls designed to satisfy GDPR, CCPA, and regional privacy laws with documented compliance mapping.",
                  Icon: IconUserCheck,
                },
                {
                  title: "Practical privacy operations",
                  description: "DPIA templates, consent mechanisms, and data subject rights processes that work in real business operations.",
                  Icon: IconLock,
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
              title="Complete PIMS documentation and privacy evidence."
              subtitle="Everything needed for ISO 27701 certification and ongoing privacy compliance."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {deliverables.map((item) => (
                <motion.div key={item} variants={fadeUp}>
                  <Card>
                    <div className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-fuchsia-500" />
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
              title="ISO 27701 certification for privacy-critical industries."
              subtitle="Industry-specific PIMS implementation addressing sector-specific privacy requirements."
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
              title="Flexible ISO 27701 programs for every privacy maturity level."
              subtitle="From gap assessment to full managed privacy compliance."
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
              title="Common questions about ISO 27701 certification."
              subtitle="Clear answers to help you understand privacy certification requirements."
            />
            <div className="mt-8 space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-slate-200/70 bg-white/80 p-5 dark:border-slate-800/70 dark:bg-slate-900/70"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between text-left text-sm font-semibold text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500 dark:text-white"
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
              Get ISO 27701 privacy certified with confidence.
            </h2>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Expert privacy implementation extending ISO 27001 with GDPR-aligned privacy controls.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact?subject=ISO%2027701%20Consulting"
                aria-label="Speak With a Privacy Expert"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Speak With a Privacy Expert
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
            Ready for privacy certification?
          </div>
          <Link
            href="/contact?subject=ISO%2027701%20Consulting"
            aria-label="Speak With a Privacy Expert"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white"
          >
            Get Started
          </Link>
        </div>
      </div>
    </motion.main>
  );
}