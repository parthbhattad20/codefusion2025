"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const outcomes = [
  {
    title: "Strategic Security Leadership",
    description:
      "Expert cybersecurity guidance without full-time CISO costs, providing executive-level strategic planning and risk management.",
  },
  {
    title: "Accelerated Compliance",
    description:
      "Faster compliance achievement and audit readiness through expert program management aligned with ISO 27001, SOC 2, and regulatory requirements.",
  },
  {
    title: "Risk Reduction",
    description:
      "Significantly reduced risk exposure through comprehensive threat analysis, vulnerability management, and security control implementation.",
  },
  {
    title: "Enhanced Governance",
    description:
      "Improved security governance, policy frameworks, and risk management processes aligned with business objectives and board expectations.",
  },
];

const complianceBadges = [
  "ISO 27001",
  "SOC 2",
  "NIST CSF",
  "PCI DSS",
  "HIPAA",
  "GDPR",
];

const methodology = [
  {
    title: "Security Assessment & Analysis",
    description:
      "Comprehensive evaluation of current security posture, identifying gaps in controls, policies, and compliance requirements with detailed risk assessment.",
  },
  {
    title: "Strategic Planning & Roadmap",
    description:
      "Development of customized cybersecurity strategy aligned with business goals, including security roadmap, budget planning, and prioritized initiatives.",
  },
  {
    title: "Policy & Framework Development",
    description:
      "Creation of security policies, procedures, standards, and governance frameworks tailored to organizational needs and compliance requirements.",
  },
  {
    title: "Implementation & Oversight",
    description:
      "Hands-on guidance for security control implementation, team training, vendor management, and technology selection with continuous oversight.",
  },
  {
    title: "Monitoring & Reporting",
    description:
      "Ongoing security metrics tracking, risk reporting, board-level communication, and executive briefings on security program status and incidents.",
  },
];

const processSteps = [
  {
    title: "Assessment",
    description: "Posture evaluation, gap analysis.",
  },
  {
    title: "Strategy",
    description: "Roadmap development, planning.",
  },
  {
    title: "Governance",
    description: "Policies, frameworks, standards.",
  },
  {
    title: "Implementation",
    description: "Control deployment, oversight.",
  },
  {
    title: "Monitoring",
    description: "Metrics, reporting, optimization.",
  },
];

const securityCategories = [
  {
    title: "Strategic Leadership",
    items: ["Security strategy", "Risk management", "Board reporting", "Budget planning"],
  },
  {
    title: "Governance & Policy",
    items: ["Policy development", "Standards", "Procedures", "Compliance frameworks"],
  },
  {
    title: "Risk & Compliance",
    items: ["Risk assessment", "Audit support", "Regulatory alignment", "Third-party risk"],
  },
  {
    title: "Incident Response",
    items: ["IR planning", "Crisis management", "Breach response", "Recovery coordination"],
  },
];

const deliverables = [
  "Comprehensive security strategy and roadmap document",
  "Executive risk assessment report with prioritized recommendations",
  "Complete security policy and procedure documentation suite",
  "Compliance gap analysis with remediation timeline",
  "Incident response and disaster recovery plans",
  "Board-level security metrics dashboard and reporting",
  "Security awareness training program and materials",
  "Vendor and third-party risk management framework",
  "Security architecture and technology recommendations",
  "Annual security budget planning and justification",
  "Security team organizational structure and hiring guidance",
  "Ongoing strategic consultation and executive support",
];

const useCases = [
  {
    title: "Growing Organizations",
    description:
      "Companies experiencing rapid growth needing strategic security leadership to scale security programs alongside business expansion.",
  },
  {
    title: "Compliance Preparation",
    description:
      "Organizations preparing for SOC 2, ISO 27001, HIPAA, or other compliance audits requiring expert program management and documentation.",
  },
  {
    title: "Digital Transformation",
    description:
      "Enterprises undergoing cloud migration, digital transformation, or technology modernization requiring security architecture guidance.",
  },
  {
    title: "Post-Incident Recovery",
    description:
      "Organizations recovering from security breaches needing expert guidance to rebuild security programs and restore stakeholder confidence.",
  },
];

const engagementTiers = [
  {
    title: "Advisory vCISO",
    description:
      "Part-time strategic guidance for organizations with existing security teams needing executive-level oversight and direction.",
    bullets: ["Monthly consultations", "Strategic planning", "Quarterly reviews"],
  },
  {
    title: "Leadership vCISO",
    description:
      "Dedicated virtual CISO providing comprehensive security program management, policy development, and compliance oversight.",
    bullets: ["Weekly sessions", "Full program management", "Compliance support"],
  },
  {
    title: "Executive vCISO",
    description:
      "Full-time virtual CISO coverage with daily operational oversight, board presentations, and 24/7 incident response support.",
    bullets: ["Daily oversight", "Board presentations", "24/7 support"],
  },
];

const testingServices = [
  {
    title: "Security Strategy Development",
    desc: "Comprehensive cybersecurity strategy aligned with business objectives, risk tolerance, and regulatory requirements.",
  },
  {
    title: "Risk Assessment & Management",
    desc: "Enterprise risk assessment, threat modeling, vulnerability management, and risk treatment planning.",
  },
  {
    title: "Compliance Program Management",
    desc: "SOC 2, ISO 27001, PCI DSS, HIPAA, and GDPR compliance program development, management, and audit preparation.",
  },
  {
    title: "Security Policy Development",
    desc: "Creation of comprehensive security policies, procedures, standards, and guidelines for all security domains.",
  },
  {
    title: "Incident Response Planning",
    desc: "Development of incident response plans, playbooks, crisis management procedures, and tabletop exercises.",
  },
  {
    title: "Security Awareness Training",
    desc: "Customized security awareness programs, training materials, and phishing simulation campaigns.",
  },
  {
    title: "Third-Party Risk Management",
    desc: "Vendor risk assessment, third-party security reviews, contract security requirements, and ongoing monitoring.",
  },
  {
    title: "Security Architecture Review",
    desc: "Evaluation of security architecture, technology stack, and recommendations for security tool selection.",
  },
  {
    title: "Board & Executive Reporting",
    desc: "Board-level security presentations, executive dashboards, and risk communication tailored for leadership.",
  },
  {
    title: "Security Team Development",
    desc: "Security team structure design, hiring guidance, skill development, and performance management.",
  },
  {
    title: "Budget & Resource Planning",
    desc: "Security budget development, ROI analysis, resource allocation, and investment prioritization.",
  },
  {
    title: "Merger & Acquisition Support",
    desc: "Security due diligence for M&A activities, integration planning, and risk assessment for acquisitions.",
  },
];

const faqs = [
  {
    question: "What is a Virtual CISO and how does it work?",
    answer:
      "A Virtual CISO (vCISO) is an outsourced Chief Information Security Officer who provides strategic cybersecurity leadership and executive-level guidance without being a full-time employee. Unlike traditional CISOs, virtual CISOs work with multiple organizations, providing expert security leadership on a part-time or fractional basis. This model gives organizations access to senior-level security expertise at a fraction of the cost of hiring a full-time executive. Virtual CISOs develop security strategies, manage compliance programs, oversee security teams, report to boards, and provide the same strategic value as an in-house CISO. The arrangement is flexible, scalable, and provides immediate access to proven security leadership without long recruitment cycles or full-time overhead costs.",
  },
  {
    question: "How much does a Virtual CISO cost compared to a full-time CISO?",
    answer:
      "Virtual CISO services typically range from $5,000 to $25,000 per month depending on engagement scope, complexity, and time commitment. In contrast, hiring a full-time CISO costs $200,000 to $400,000+ annually in salary alone, plus benefits, equity, bonuses, and overhead—often totaling $250,000 to $500,000 per year. For this investment, you get proven expertise immediately without recruitment costs, onboarding time, or the risk of a bad hire. Virtual CISOs bring experience from multiple organizations and industries, providing broader perspective than most individual hires. The cost-effectiveness is especially significant for small to mid-sized organizations that need strategic security leadership but cannot justify or afford a full-time executive salary.",
  },
  {
    question: "What's the difference between a Virtual CISO and a security consultant?",
    answer:
      "A Virtual CISO provides ongoing strategic leadership and acts as a true member of your executive team, taking ownership of your security program and being accountable for results. They attend board meetings, make executive decisions, manage budgets, and represent security interests at the leadership level. Security consultants typically provide project-based advice or specific technical services without the strategic ownership or ongoing accountability. Virtual CISOs develop long-term security strategies, build security programs from the ground up, and guide organizations through complex compliance and risk management challenges. They become deeply embedded in your organization, understanding your business, culture, and specific challenges. Consultants provide valuable expertise for specific projects, but Virtual CISOs provide the continuous strategic leadership that drives security program maturity.",
  },
  {
    question: "How quickly can a Virtual CISO deliver results?",
    answer:
      "Most organizations see measurable improvements within 30-90 days, including better risk visibility, prioritized security roadmaps, policy frameworks, and improved security governance. Initial assessments and strategic planning typically complete within the first month, with quick wins identified and addressed immediately. Comprehensive security program transformation takes 6-12 months, including policy development, control implementation, team training, and compliance achievement. Unlike hiring a full-time CISO which takes 3-6 months for recruitment and onboarding, Virtual CISOs start delivering value immediately with no learning curve. They bring proven frameworks, templates, and methodologies that accelerate program development. Timeline depends on current security maturity, organizational size, and specific goals, but the value starts from day one.",
  },
];

const painPoints = [
  "Do you have strategic security leadership?",
  "Are you compliance-ready?",
  "Can you communicate risk to the board?",
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
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IconTrendingUp = ({ className }) => (
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
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
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

export default function VirtualCISOPage() {
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
      <Section className="pt-24 sm:pt-28 md:pt-0 pb-14 mt-20 ">
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
          <div className="absolute -left-20 top-20 h-56 w-56 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="absolute -right-24 bottom-6 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />
        </div>

        <Container className="relative z-10 flex min-h-[86vh] flex-col justify-center">
          <motion.div variants={fadeUp} className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
              Executive Cybersecurity Leadership
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              Virtual CISO Services
            </h1>
            <p className="mt-4 text-lg text-white/80 md:text-xl">
              Strategic cybersecurity leadership without full-time costs. Expert guidance to protect your organization, ensure compliance, and align security with business objectives.
            </p>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Comprehensive executive security services including strategy development, risk management, compliance oversight, and board-level reporting.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/contact?subject=services&subSubject=Virtual%20CISO"
                aria-label="Request Virtual CISO"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <motion.span
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  whileTap={reduceMotion ? undefined : { y: 0 }}
                  className="inline-flex items-center"
                >
                  Request Virtual CISO
                </motion.span>
              </Link>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12 max-w-4xl">
            <div className="grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80 md:grid-cols-3">
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
              title="Executive security leadership that drives results."
              subtitle="Strategic guidance and program management delivering measurable security improvements and compliance achievement."
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
                        <IconShield className="h-5 w-5" />
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
              eyebrow="Compliance & Frameworks"
              title="Aligned with industry standards and regulations."
              subtitle="Expert guidance for achieving and maintaining compliance across all major frameworks and requirements."
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
              title="Proven approach to security leadership."
              subtitle="We build comprehensive security programs—from strategy to implementation and continuous improvement."
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
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">Virtual CISO engagement process</h3>
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
              eyebrow="vCISO Services"
              title="Comprehensive executive security leadership."
              subtitle="From strategic planning to operational oversight, covering all aspects of security program management."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {testingServices.map((item) => (
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

      {/* Security Coverage Section with Image */}
      <Section className="bg-white dark:bg-slate-950">
        <Container>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
          >
            <div>
              <SectionHeader
                align="left"
                eyebrow="Leadership Coverage"
                title="Complete security program oversight."
                subtitle="We provide end-to-end security leadership from strategic planning to operational execution."
              />
              <div className="mt-8">
                <div className="relative rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-900/70">
                  <div className="pointer-events-none absolute -inset-1 rounded-[22px] bg-gradient-to-r from-violet-500/30 via-blue-600/20 to-transparent opacity-70" />
                  <div className="relative overflow-hidden rounded-2xl bg-slate-950/5 p-6 dark:bg-slate-950">
                    <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-violet-500/20 blur-2xl" />
                    <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-blue-600/20 blur-2xl" />
                    <div className="relative">
                      <Image
                        src="/assets/services/vCiso.webp"
                        alt="Virtual CISO Security Coverage"
                        width={500}
                        height={400}
                        className="w-full h-auto rounded-lg"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="grid gap-4">
                {securityCategories.map((category) => (
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
              title="Expert virtual CISO leadership."
              subtitle="We combine executive security expertise with proven program management and deep industry knowledge."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Certified security executives",
                  description: "CISO-certified professionals with decades of enterprise security leadership experience across multiple industries and frameworks.",
                  Icon: IconShield,
                },
                {
                  title: "Flexible engagement models",
                  description: "Scalable services from part-time advisory to full executive coverage, adapting to your needs and budget constraints.",
                  Icon: IconUsers,
                },
                {
                  title: "Proven track record",
                  description: "Demonstrated success helping organizations achieve compliance, reduce risk, and build mature security programs.",
                  Icon: IconTrendingUp,
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
              title="Comprehensive security program documentation."
              subtitle="Everything needed to build, manage, and mature your organizational security program."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {deliverables.map((item) => (
                <motion.div key={item} variants={fadeUp}>
                  <Card>
                    <div className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-violet-500" />
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
              eyebrow="Use Cases"
              title="Virtual CISO for diverse organizational needs."
              subtitle="Tailored security leadership addressing unique challenges across industries and organizational stages."
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
              title="Flexible virtual CISO programs."
              subtitle="From strategic advisory to full executive coverage, tailored to your organizational needs."
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
              title="Common questions about Virtual CISO services."
              subtitle="Clear answers to help you understand virtual security leadership."
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
                    <span className="text-slate-500">{openFaq === index ? "−" : "+"}</span>
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
              Get strategic security leadership today.
            </h2>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Expert virtual CISO services delivering compliance, risk reduction, and program maturity.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact?subject=services&subSubject=Virtual%20CISO"
                aria-label="Speak With a Virtual CISO"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Speak With a Virtual CISO
              </Link>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Mobile CTA */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200/70 bg-white/95 px-4 py-3 shadow-lg backdrop-blur-md transition md:hidden dark:border-slate-800/70 dark:bg-slate-950/90 ${showMobileCta ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
          }`}
        role="region"
        aria-label="Quick action"
      >
        <div className="flex items-center justify-between gap-3">
          <div className="text-xs font-semibold text-slate-700 dark:text-slate-200">
            Ready for virtual CISO services?
          </div>
          <Link
            href="/contact?subject=services&subSubject=Virtual%20CISO"
            aria-label="Request vCISO"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white"
          >
            Get Started
          </Link>
        </div>
      </div>
    </motion.main>
  );
}