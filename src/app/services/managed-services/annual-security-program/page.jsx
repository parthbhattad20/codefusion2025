"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

/* ===================== DATA ===================== */

const painPoints = [
  "Struggling with continuous security management?",
  "Need year-round cybersecurity coverage?",
  "Want to reduce security overhead costs?",
];

const outcomes = [
  {
    title: "Complete Cybersecurity Management",
    description:
      "End-to-end security coverage from secure code reviews to 24/7 monitoring, vulnerability management, and incident response.",
  },
  {
    title: "Cost-Effective Security",
    description:
      "Reduce security costs by up to 50% compared to building an in-house team while maintaining enterprise-grade protection.",
  },
  {
    title: "Faster Product Releases",
    description:
      "Secure coding practices and regular assessments enable confident, rapid product launches without compromising security.",
  },
  {
    title: "Reduced Downtime",
    description:
      "Proactive security measures and continuous monitoring prevent security disruptions before they impact your productivity.",
  },
];

const complianceBadges = [
  "SOC 2",
  "ISO 27001",
  "GDPR",
  "HIPAA",
  "PCI DSS",
  "Annual Coverage",
];

const methodology = [
  {
    title: "Security Architecture Review",
    description:
      "Quarterly evaluation of application design, cloud infrastructure, authentication flows, and data handling to identify structural security gaps and optimization opportunities.",
  },
  {
    title: "Secure Development Lifecycle Support",
    description:
      "Integration of security practices into development workflows, including code review guidance, dependency risk checks, SAST/DAST integration, and release validation.",
  },
  {
    title: "Infrastructure & Cloud Security Oversight",
    description:
      "Monthly configuration review of servers, containers, Kubernetes clusters, cloud services, network controls, and access management policies.",
  },
  {
    title: "Vulnerability Management Program",
    description:
      "Continuous discovery, prioritization, tracking, and remediation support for security vulnerabilities with SLA-based response times.",
  },
  {
    title: "Incident Readiness & Handling",
    description:
      "Preparation of incident response procedures, tabletop exercises, and dedicated support during active security incidents to limit operational impact.",
  },
  {
    title: "Compliance Preparation Support",
    description:
      "Assistance with security documentation, control implementation, evidence collection, and audit readiness for regulatory frameworks.",
  },
];

const processSteps = [
  { title: "Assess", description: "Initial security baseline." },
  { title: "Secure", description: "Implement security controls." },
  { title: "Monitor", description: "Continuous oversight." },
  { title: "Respond", description: "Incident management." },
  { title: "Improve", description: "Ongoing optimization." },
];

const securityCapabilities = [
  {
    title: "Application Security",
    items: ["Code reviews", "SAST/DAST", "API security", "Dependency checks"],
  },
  {
    title: "Cloud Security",
    items: ["AWS/Azure/GCP", "Config review", "IAM policies", "Compliance"],
  },
  {
    title: "Infrastructure",
    items: ["Server hardening", "Network security", "Container security", "K8s"],
  },
  {
    title: "Compliance",
    items: ["Documentation", "Audits", "Controls", "Frameworks"],
  },
];

const aspServices = [
  {
    title: "Security Architecture Review",
    desc: "Periodic evaluation of application design, cloud setup, authentication flows, and data handling to identify structural security gaps.",
  },
  {
    title: "Secure Development Lifecycle Support",
    desc: "Integration of security practices into development workflows, including code review guidance and dependency risk checks.",
  },
  {
    title: "Infrastructure & Cloud Security Oversight",
    desc: "Configuration review of servers, containers, cloud services, network controls, and access management policies.",
  },
  {
    title: "Vulnerability Management Program",
    desc: "Ongoing discovery, prioritization, tracking, and remediation support for security vulnerabilities across your environment.",
  },
  {
    title: "Incident Readiness & Handling",
    desc: "Preparation of response procedures and dedicated support during active security incidents to limit operational impact.",
  },
  {
    title: "Compliance Preparation Support",
    desc: "Assistance with security documentation, control implementation, and audit readiness for common regulatory frameworks.",
  },
  {
    title: "Secure Coding & Configuration",
    desc: "Best practices implementation, code security reviews, and hardened configurations from development through production.",
  },
  {
    title: "Server Optimization & Hardening",
    desc: "High-performance, hardened servers built for resilience with security-first configuration and continuous monitoring.",
  },
  {
    title: "Proactive Threat Management",
    desc: "Threat hunting, bug bounty program management, penetration testing coordination, and continuous security validation.",
  },
];

const coreResponsibilities = [
  {
    category: "Security Governance",
    items: [
      "Annual security roadmap planning and execution",
      "Security policy development and maintenance",
      "Risk assessment and management frameworks",
      "Security metrics and KPI tracking",
    ],
  },
  {
    category: "Development Security",
    items: [
      "Secure code review and SAST/DAST integration",
      "Security requirements for new features",
      "Dependency vulnerability management",
      "Pre-release security validation",
    ],
  },
  {
    category: "Infrastructure Security",
    items: [
      "Cloud security architecture review",
      "Server and container hardening",
      "Network segmentation and access controls",
      "Configuration management and drift detection",
    ],
  },
  {
    category: "Operations & Response",
    items: [
      "24/7 security monitoring and alerting",
      "Incident response and forensics",
      "Vulnerability remediation support",
      "Compliance audit preparation",
    ],
  },
];

const deliverables = [
  "Annual security roadmap and planning",
  "Quarterly security architecture reviews",
  "Monthly vulnerability assessments",
  "Secure code review and SAST/DAST integration",
  "Cloud security configuration audits",
  "Infrastructure hardening and optimization",
  "24/7 security monitoring and alerting",
  "Incident response planning and support",
  "Compliance documentation and audit support",
  "Security awareness training programs",
  "Monthly security status reports",
  "Executive security dashboards",
];

const useCases = [
  {
    title: "SaaS & Cloud-Native Applications",
    description:
      "Comprehensive security program for SaaS platforms, covering application security, cloud infrastructure, and compliance readiness.",
  },
  {
    title: "Fintech & Payment Platforms",
    description:
      "PCI DSS and financial compliance support with secure development practices and continuous security validation.",
  },
  {
    title: "Healthcare & Medical Technology",
    description:
      "HIPAA-compliant security program with patient data protection, medical device security, and regulatory audit support.",
  },
  {
    title: "E-commerce & Retail",
    description:
      "Payment security, customer data protection, and PCI compliance for online retailers and marketplace platforms.",
  },
  {
    title: "Enterprise SaaS",
    description:
      "Multi-tenant security, SOC 2 compliance, enterprise customer requirements, and continuous security maturity improvement.",
  },
  {
    title: "Startups & Scale-ups",
    description:
      "Cost-effective security program that scales with growth, enabling faster product development without security compromises.",
  },
];

const engagementTiers = [
  {
    title: "ASP Starter",
    description:
      "Essential security program for early-stage SaaS with quarterly assessments, code reviews, and compliance preparation.",
    bullets: ["Quarterly reviews", "Code security", "Compliance prep", "Monthly reports"],
  },
  {
    title: "ASP Professional",
    description:
      "Comprehensive security program with monthly assessments, continuous monitoring, and dedicated security support.",
    bullets: ["Monthly assessments", "24/7 monitoring", "Incident response", "Compliance support"],
  },
  {
    title: "ASP Enterprise",
    description:
      "Complete security operations with on-site engineers, advanced threat management, and executive-level reporting.",
    bullets: ["On-site support", "Advanced threat defense", "Full compliance", "Executive reports"],
  },
];

const faqs = [
  {
    question: "What is the Annual Security Program (ASP)?",
    answer:
      "The Annual Security Program is a structured, long-term cybersecurity engagement designed to help SaaS teams maintain strong security posture throughout the year. It covers development security, infrastructure protection, operations monitoring, and compliance readiness. Unlike one-time assessments, ASP provides continuous security management with quarterly reviews, monthly vulnerability assessments, ongoing monitoring, and dedicated support—all without the overhead of building an in-house security team.",
  },
  {
    question: "How is ASP different from traditional security consulting?",
    answer:
      "Traditional security consulting typically involves one-time projects or periodic assessments. ASP provides year-round security coverage with continuous monitoring, regular assessments, and always-on support. You get a dedicated security team that understands your architecture, integrates with your development workflow, and provides proactive threat management. ASP also includes incident response support, compliance preparation, and security optimization—all as part of a comprehensive annual program rather than separate projects.",
  },
  {
    question: "What does ASP cost compared to hiring a security team?",
    answer:
      "ASP typically costs 40-60% less than building an equivalent in-house security team. A single experienced security engineer can cost $150,000-$250,000 annually, plus benefits and overhead. With ASP, you get access to a team of specialists (application security, cloud security, compliance, incident response) for a fraction of that cost. You also avoid recruitment challenges, training costs, and the risk of key person dependencies. Most SaaS companies find ASP provides better security coverage at lower total cost.",
  },
  {
    question: "How quickly can you onboard us to the ASP program?",
    answer:
      "Initial onboarding typically takes 2-3 weeks. We start with a security baseline assessment to understand your current architecture, identify immediate risks, and establish security priorities. During onboarding, we integrate with your development tools, configure monitoring, set up communication channels, and create your security roadmap. You'll receive your first security status report within 30 days. Emergency security support is available immediately upon contract signing if needed.",
  },
  {
    question: "Can ASP help us achieve SOC 2 or ISO 27001 compliance?",
    answer:
      "Yes, compliance preparation is a core component of ASP. We help you implement security controls required for SOC 2, ISO 27001, GDPR, HIPAA, and PCI DSS. This includes gap assessments, control documentation, evidence collection, policy development, and audit preparation. We work closely with your chosen auditor to ensure smooth certification. Many of our ASP clients have successfully achieved SOC 2 Type II and ISO 27001 certification with our support.",
  },
  {
    question: "What happens if we have a security incident during the program?",
    answer:
      "ASP includes dedicated incident response support. If a security incident occurs, you have immediate access to our incident response team 24/7. We help with threat containment, forensic analysis, remediation planning, and recovery coordination. We also conduct post-incident reviews to prevent recurrence. For ASP Enterprise clients, we can provide on-site incident response support within hours. Incident response is included in your annual program—no additional fees during security emergencies.",
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
      <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-400">
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
  <span className="rounded-full border border-cyan-200/70 bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-700 dark:border-cyan-700/50 dark:bg-cyan-900/30 dark:text-cyan-300">
    {children}
  </span>
);

/* ===================== PAGE COMPONENT ===================== */

export default function AnnualSecurityProgramPage() {
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
          <div className="absolute -left-24 top-16 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        </div>

        <Container className="relative z-10 flex min-h-[86vh] flex-col justify-center">
          <motion.div variants={fadeUp} className="max-w-3xl">
            <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
              Annual Security Program (ASP)
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              Secure Your SaaS with a Dedicated 24/7 Cybersecurity Team
            </h1>
            <p className="mt-4 text-lg text-white/85 md:text-xl">
              Focus on building and scaling your SaaS while we manage end-to-end cybersecurity, compliance, and continuous protection.
            </p>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Year-round security coverage without the overhead of an in-house team. Save up to 50% on security costs.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/contact?subject=services&subSubject=Annual%20Security%20Program"
                aria-label="Book a Free Consultation"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <motion.span
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  whileTap={reduceMotion ? undefined : { y: 0 }}
                  className="inline-flex items-center"
                >
                  Book a Free Consultation
                </motion.span>
              </Link>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12 max-w-4xl">
            <div className="grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80 backdrop-blur-sm md:grid-cols-3">
              {painPoints.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
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
              title="Why ASP Should Be Your Go-To SaaS Security Program"
              subtitle="Complete cybersecurity management, cost-effective protection, and faster product releases with reduced downtime."
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
                      <div className="rounded-full bg-cyan-500/10 p-3 text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-400">
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
              eyebrow="Standards & Frameworks"
              title="Aligned with industry security standards."
              subtitle="Expert security operations across SOC 2, ISO 27001, GDPR, HIPAA, and PCI DSS compliance frameworks."
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
              title="What the Annual Security Program Covers"
              subtitle="A structured, long-term cybersecurity engagement designed to help SaaS teams maintain strong security posture throughout the year."
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
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">Annual security lifecycle</h3>
              <div className="relative mt-6">
                <div className="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-cyan-300 to-transparent md:block dark:via-cyan-700" />
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
                        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
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
              title="ASP – Core Services"
              subtitle="Comprehensive security coverage from application security to infrastructure hardening and compliance support."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {aspServices.map((item) => (
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
                title="Why Choose Annual Security Program"
                subtitle="Year-round security coverage with continuous monitoring, regular assessments, and expert support without in-house overhead."
              />
              <div className="mt-8">
                <div className="relative rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-900/70">
                  <div className="pointer-events-none absolute -inset-1 rounded-[22px] bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-transparent opacity-70" />
                  <div className="relative overflow-hidden rounded-2xl bg-slate-950/5 p-4 dark:bg-slate-950">
                    <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-cyan-500/20 blur-2xl" />
                    <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-blue-500/20 blur-2xl" />
                    <img
                      src="/assets/services/vapt.jpg"
                      alt="Annual Security Program"
                      className="w-full rounded-xl shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="grid gap-4">
                {securityCapabilities.map((capability) => (
                  <motion.div key={capability.title} variants={fadeUp}>
                    <Card>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
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
              eyebrow="Process"
              title="How the Annual Security Program Works"
              subtitle="A structured security framework with continuous coverage, regular assessments, and proactive threat management."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {coreResponsibilities.map((responsibility) => (
                <motion.div key={responsibility.category} variants={fadeUp}>
                  <Card className="h-full">
                    <h3 className="text-lg font-semibold text-cyan-600 dark:text-cyan-400 mb-4">
                      {responsibility.category}
                    </h3>
                    <ul className="space-y-3">
                      {responsibility.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                          <IconCheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-600 dark:text-cyan-400" />
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
              title="Trusted SaaS security expertise since 2017."
              subtitle="We've helped SaaS companies across UAE, GCC, and international markets achieve security excellence."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "SaaS security specialists",
                  description: "Deep expertise in cloud-native security, DevSecOps integration, and modern SaaS architecture protection.",
                  Icon: IconShield,
                },
                {
                  title: "Cost-effective programs",
                  description: "Save up to 50% compared to in-house teams while getting enterprise-grade security coverage and expertise.",
                  Icon: IconUsers,
                },
                {
                  title: "Compliance ready",
                  description: "Expert support for SOC 2, ISO 27001, GDPR, HIPAA, and PCI DSS with audit preparation and documentation.",
                  Icon: IconClipboard,
                },
              ].map((item) => (
                <motion.div key={item.title} variants={fadeUp}>
                  <Card className="h-full">
                    <div className="mb-4 inline-flex rounded-full bg-cyan-500/10 p-3 text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-400">
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
              title="What You Get"
              subtitle="Comprehensive security coverage, regular assessments, continuous monitoring, and expert support throughout the year."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {deliverables.map((item) => (
                <motion.div key={item} variants={fadeUp}>
                  <Card>
                    <div className="flex items-start gap-3">
                      <IconCheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-600 dark:text-cyan-400" />
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
              title="Annual security programs for diverse SaaS sectors."
              subtitle="Tailored security coverage for SaaS platforms, fintech, healthcare, e-commerce, and enterprise applications."
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
              title="Flexible annual programs for every SaaS need."
              subtitle="Choose from starter, professional, or enterprise security programs based on your requirements and growth stage."
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

      {/* Testimonial Section */}
      <Section className="bg-white dark:bg-slate-950">
        <Container>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="rounded-2xl border border-slate-200/70 bg-slate-50 p-8 dark:border-slate-800/70 dark:bg-slate-900/50">
              <p className="text-xl text-slate-700 italic dark:text-slate-300">
                "Choosing ASP has been one of the best decisions for our SaaS. It gives us complete protection and peace of mind."
              </p>
              <p className="mt-6 font-semibold text-cyan-600 dark:text-cyan-400">
                Megan Roos — Product Owner, Insurance SaaS (UAE)
              </p>
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
              title="Common questions about the Annual Security Program."
              subtitle="Clear answers to help you understand ASP coverage, costs, and value for your SaaS business."
            />
            <div className="mt-8 space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-slate-200/70 bg-white/80 p-5 dark:border-slate-800/70 dark:bg-slate-900/70"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between text-left text-sm font-semibold text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:text-white"
                    aria-expanded={openFaq === index}
                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  >
                    <span>{faq.question}</span>
                    <span className="text-cyan-600 dark:text-cyan-400">{openFaq === index ? "–" : "+"}</span>
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
              Secure Your SaaS with ASP
            </h2>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Let our experts handle cybersecurity while you focus on growth, innovation, and customers.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact?subject=services&subSubject=Annual%20Security%20Program"
                aria-label="Get Started with ASP"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Get Started with ASP
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
            Secure your SaaS today
          </div>
          <Link
            href="/contact?subject=services&subSubject=Annual%20Security%20Program"
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