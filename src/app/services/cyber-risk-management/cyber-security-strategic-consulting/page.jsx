"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const outcomes = [
  {
    title: "Protect critical assets",
    description:
      "Safeguard digital assets, business-critical data, and intellectual property through strategic risk management and control implementation.",
  },
  {
    title: "Build resilient security",
    description:
      "Develop comprehensive, long-term cybersecurity strategies that adapt to evolving threats and business requirements.",
  },
  {
    title: "Ensure regulatory compliance",
    description:
      "Satisfy NESA (SIA), ISR, ISO 27001, ADSIC, ADHICS, and PCI DSS requirements with expert guidance and structured implementation.",
  },
  {
    title: "Prevent financial loss",
    description:
      "Reduce cyber risk exposure and avoid costly breaches, incidents, and regulatory penalties through proactive security measures.",
  },
];

const complianceBadges = [
  "NESA (SIA)",
  "ISR",
  "ISO 27001",
  "ADSIC",
  "ADHICS",
  "PCI DSS",
];

const methodology = [
  {
    title: "Business Risk Assessment",
    description:
      "Evaluate business context, critical assets, threat landscape, and cybersecurity maturity to establish baseline security posture.",
  },
  {
    title: "Strategy & Governance Design",
    description:
      "Develop security governance framework, policies, and target architecture aligned with business objectives and risk appetite.",
  },
  {
    title: "Compliance & Regulatory Alignment",
    description:
      "Map security controls to applicable regulatory requirements including NESA, ISR, ISO 27001, and industry-specific standards.",
  },
  {
    title: "Implementation Roadmap",
    description:
      "Create prioritized, phased implementation plan with resource requirements, timelines, and control deployment sequences.",
  },
  {
    title: "Continuous Improvement",
    description:
      "Establish security metrics, KPIs, audit programs, and continuous monitoring to sustain and improve security effectiveness.",
  },
];

const processSteps = [
  {
    title: "Assess",
    description: "Business risk, assets, threat landscape.",
  },
  {
    title: "Design",
    description: "Security governance, target architecture.",
  },
  {
    title: "Align",
    description: "Compliance, regulatory mapping.",
  },
  {
    title: "Execute",
    description: "Roadmap, control implementation.",
  },
  {
    title: "Sustain",
    description: "KPIs, audits, continuous improvement.",
  },
];

const strategyDomains = [
  {
    title: "Governance & Risk",
    items: ["Policy framework", "Risk mgmt", "Compliance", "Third-party"],
  },
  {
    title: "Architecture & Controls",
    items: ["Security design", "Network security", "Access control", "Encryption"],
  },
  {
    title: "Operations & Response",
    items: ["Security ops", "Incident response", "BC/DR", "Monitoring"],
  },
  {
    title: "People & Culture",
    items: ["Awareness", "Training", "Roles & responsibilities", "Culture"],
  },
];

const deliverables = [
  "Cybersecurity maturity assessment report with gap analysis",
  "Enterprise cybersecurity risk register and risk treatment plan",
  "Security governance framework and policy documentation",
  "Compliance mapping to NESA (SIA), ISR, ISO 27001, ADSIC, ADHICS, PCI DSS",
  "3-12 month strategic security roadmap with prioritized initiatives",
  "Security architecture design and technology recommendations",
  "Investment and resource planning guidance with ROI analysis",
  "Executive security posture presentation and board reporting",
  "Control implementation guidelines and best practices",
  "Security metrics and KPI framework for ongoing measurement",
  "Vendor evaluation criteria and third-party risk management guidance",
  "Incident response and business continuity strategy",
];

const useCases = [
  {
    title: "Enterprise Organizations",
    description:
      "Comprehensive security strategy development for large organizations with complex IT environments and regulatory requirements.",
  },
  {
    title: "Financial Services",
    description:
      "Specialized consulting for banks, payment processors, and financial institutions navigating strict compliance mandates.",
  },
  {
    title: "Healthcare & Life Sciences",
    description:
      "Security strategy aligned with healthcare regulations, patient data protection, and medical device security.",
  },
  {
    title: "Critical Infrastructure",
    description:
      "OT/ICS security strategy for energy, utilities, manufacturing, and industrial organizations protecting operational technology.",
  },
];

const engagementTiers = [
  {
    title: "Strategy Assessment",
    description:
      "Current state security maturity evaluation with strategic recommendations and prioritized improvement roadmap.",
    bullets: ["2-4 weeks", "Maturity report", "Strategic roadmap"],
  },
  {
    title: "Full Strategy Development",
    description:
      "End-to-end cybersecurity strategy design from assessment through implementation roadmap and governance framework.",
    bullets: ["6-12 weeks", "Complete strategy", "Implementation plan"],
  },
  {
    title: "Advisory Retainer",
    description:
      "Ongoing strategic advisory services with continuous security guidance, program oversight, and executive support.",
    bullets: ["Annual program", "Monthly advisory", "Executive briefings"],
  },
];

const consultingServices = [
  {
    title: "Cybersecurity Strategy Development",
    desc: "Comprehensive security strategy aligned with business objectives, risk appetite, and regulatory requirements.",
  },
  {
    title: "Risk Assessment & Management",
    desc: "Enterprise risk identification, analysis, and treatment planning with executive risk reporting and oversight.",
  },
  {
    title: "Security Governance Framework",
    desc: "Policy, standards, procedures, and governance structures for enterprise-wide security management.",
  },
  {
    title: "Compliance & Regulatory Advisory",
    desc: "Expert guidance on NESA (SIA), ISR, ISO 27001, ADSIC, ADHICS, PCI DSS, and other compliance requirements.",
  },
  {
    title: "Security Architecture Design",
    desc: "Target security architecture, technology roadmap, and control framework aligned to zero-trust principles.",
  },
  {
    title: "Implementation Roadmap Planning",
    desc: "Prioritized, phased security improvement roadmap with resource requirements and implementation guidance.",
  },
  {
    title: "Security Program Optimization",
    desc: "Assessment and improvement of existing security programs, controls, and operational processes.",
  },
  {
    title: "Third-Party Risk Management",
    desc: "Vendor security assessment frameworks, supply chain risk management, and third-party governance.",
  },
  {
    title: "Executive Advisory & Reporting",
    desc: "C-suite security guidance, board reporting, and strategic security leadership support.",
  },
];

const faqs = [
  {
    question: "What is cybersecurity strategic consulting?",
    answer:
      "Cybersecurity strategic consulting helps organizations develop comprehensive, long-term security strategies aligned with business objectives. It goes beyond tactical security implementations to address governance, risk management, compliance, architecture, and organizational security maturity. Strategic consultants provide expert guidance on building resilient security programs that protect critical assets while enabling business growth and innovation.",
  },
  {
    question: "How long does a security strategy engagement take?",
    answer:
      "Timeline varies based on scope and organizational complexity. A focused strategy assessment typically takes 2-4 weeks, while full strategy development requires 6-12 weeks. Comprehensive engagements including implementation planning may extend to 3-4 months. Organizations often maintain ongoing advisory relationships for continuous strategic guidance and program oversight.",
  },
  {
    question: "Do we need consulting if we already have a security team?",
    answer:
      "Yes, strategic consulting complements internal teams by providing specialized expertise, independent perspective, and executive-level strategic guidance. External consultants bring experience across multiple organizations and industries, knowledge of emerging threats and best practices, and objective assessment of security maturity. Many organizations engage consultants to accelerate security program development, validate existing strategies, or provide specialized expertise in areas like compliance or architecture.",
  },
  {
    question: "What compliance frameworks do you support?",
    answer:
      "We provide strategic guidance across NESA (SIA), ISR, ISO 27001, ADSIC, ADHICS, and PCI DSS, plus additional frameworks including NIST CSF, CIS Controls, NCA ECC, PDPL, and industry-specific standards. Our approach maps controls across multiple frameworks to maximize compliance efficiency and avoid duplicative efforts. We help organizations understand how different standards relate and build integrated compliance programs.",
  },
];

const painPoints = [
  "How do we build an effective security strategy?",
  "What security controls should we prioritize?",
  "Are we compliant with regulatory requirements?",
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

const StrategyIllustration = () => (
  <svg viewBox="0 0 420 320" className="h-full w-full" aria-hidden="true">
    <defs>
      <linearGradient id="strategy-panel" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#0f172a" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.2" />
      </linearGradient>
      <linearGradient id="strategy-pulse" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#38bdf8" />
        <stop offset="100%" stopColor="#0ea5e9" />
      </linearGradient>
    </defs>
    
    {/* Central strategy hub */}
    <circle cx="210" cy="160" r="55" fill="url(#strategy-panel)" stroke="#94a3b8" strokeOpacity="0.4" strokeWidth="2" />
    <circle cx="210" cy="160" r="35" fill="url(#strategy-pulse)" fillOpacity="0.3" stroke="#0ea5e9" strokeWidth="2" />
    
    {/* Strategy text */}
    <text x="210" y="165" fontSize="14" fill="#0ea5e9" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">STRATEGY</text>
    
    {/* Four domain circles */}
    <circle cx="100" cy="80" r="35" fill="url(#strategy-pulse)" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="2" />
    <text x="100" y="78" fontSize="9" fill="#38bdf8" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">GOVERN</text>
    <text x="100" y="90" fontSize="9" fill="#38bdf8" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">& RISK</text>
    
    <circle cx="320" cy="80" r="35" fill="url(#strategy-pulse)" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="2" />
    <text x="320" y="78" fontSize="9" fill="#38bdf8" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">ARCHITECT</text>
    <text x="320" y="90" fontSize="9" fill="#38bdf8" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">& CONTROL</text>
    
    <circle cx="100" cy="240" r="35" fill="url(#strategy-pulse)" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="2" />
    <text x="100" y="238" fontSize="9" fill="#38bdf8" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">OPERATE</text>
    <text x="100" y="250" fontSize="9" fill="#38bdf8" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">& RESPOND</text>
    
    <circle cx="320" cy="240" r="35" fill="url(#strategy-pulse)" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="2" />
    <text x="320" y="238" fontSize="9" fill="#38bdf8" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">PEOPLE</text>
    <text x="320" y="250" fontSize="9" fill="#38bdf8" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">& CULTURE</text>
    
    {/* Connection lines */}
    <path d="M135 80h40M175 160h20M135 240h40" stroke="#94a3b8" strokeOpacity="0.5" strokeWidth="2" />
    <path d="M245 160h40M285 80h0M285 240h0" stroke="#94a3b8" strokeOpacity="0.5" strokeWidth="2" />
    <path d="M180 120l-45-25M180 200l-45 25M240 120l45-25M240 200l45 25" stroke="#94a3b8" strokeOpacity="0.5" strokeDasharray="4 6" strokeWidth="2" />
  </svg>
);

export default function CyberSecurityConsultingPage() {
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
              Build cybersecurity strategy that protects and enables your business.
            </h1>
            <p className="mt-4 text-lg text-white/80 md:text-xl">
              Comprehensive strategic consulting that develops governance frameworks, risk management programs, and security roadmaps aligned with business objectives and regulatory requirements.
            </p>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Expert-led strategy development with maturity assessment, compliance alignment, architecture design, and implementation roadmap for NESA (SIA), ISR, ISO 27001, and industry standards.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/contact"
                aria-label="Get Strategic Consulting"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <motion.span
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  whileTap={reduceMotion ? undefined : { y: 0 }}
                  className="inline-flex items-center"
                >
                  Get Strategic Consulting
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
              title="Strategic consulting that transforms security posture."
              subtitle="Develop comprehensive cybersecurity strategies that protect critical assets, ensure compliance, and enable secure business growth."
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
              title="Strategy aligned with global and regional compliance requirements."
              subtitle="Build security programs that satisfy multiple regulatory frameworks through integrated compliance approaches."
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
              title="Structured approach to cybersecurity strategy development."
              subtitle="We follow proven frameworks to assess, design, align, execute, and sustain enterprise security programs."
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
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">Strategy development process</h3>
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
              title="Comprehensive strategic consulting services."
              subtitle="From strategy development to ongoing advisory, we provide expert guidance across all dimensions of cybersecurity."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {consultingServices.map((item) => (
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

      {/* Strategy Coverage Section */}
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
                eyebrow="Strategy Domains"
                title="Comprehensive coverage across all security dimensions."
                subtitle="We address governance, architecture, operations, and people to build holistic security programs."
              />
              <div className="mt-8">
                <div className="relative rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-900/70">
                  <div className="pointer-events-none absolute -inset-1 rounded-[22px] bg-gradient-to-r from-sky-500/30 via-cyan-500/20 to-transparent opacity-70" />
                  <div className="relative overflow-hidden rounded-2xl bg-slate-950/5 p-4 dark:bg-slate-950">
                    <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-sky-500/20 blur-2xl" />
                    <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-cyan-500/20 blur-2xl" />
                    <StrategyIllustration />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="grid gap-4">
                {strategyDomains.map((domain) => (
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
              title="Strategic expertise that drives security transformation."
              subtitle="We bring deep security knowledge, business acumen, and proven methodologies to develop strategies that work."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Multi-industry experience",
                  description: "Proven track record across financial services, healthcare, energy, technology, and critical infrastructure sectors.",
                  Icon: IconAward,
                },
                {
                  title: "Business-aligned strategies",
                  description: "Security strategies designed to enable business objectives—not just check compliance boxes or implement technology.",
                  Icon: IconClipboard,
                },
                {
                  title: "Ongoing strategic support",
                  description: "Continuous advisory services, executive briefings, and program oversight to sustain security effectiveness over time.",
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
              title="Complete strategic documentation and implementation guidance."
              subtitle="Everything you need to build, execute, and sustain an effective cybersecurity program."
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
              title="Strategic consulting for diverse industries and use cases."
              subtitle="Industry-specific strategy development that addresses sector-specific threats, regulations, and business requirements."
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
              title="Flexible consulting programs for every need."
              subtitle="From focused assessments to comprehensive strategy development and ongoing advisory relationships."
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
              title="Common questions about strategic consulting."
              subtitle="Clear answers to help you understand how strategic consulting can transform your security posture."
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
              Transform your security posture with strategic expertise.
            </h2>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Expert-led strategy development that protects critical assets, ensures compliance, and enables secure business growth.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                aria-label="Speak With a Strategy Expert"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Speak With a Strategy Expert
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
            Ready for strategic consulting?
          </div>
          <Link
            href="/contact"
            aria-label="Speak With a Strategy Expert"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white"
          >
            Get Started
          </Link>
        </div>
      </div>
    </motion.main>
  );
}