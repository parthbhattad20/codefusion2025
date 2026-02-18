"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const outcomes = [
  {
    title: "Board-ready risk clarity",
    description:
      "Translate findings into business impact and exposure so leadership can prioritize confidently.",
  },
  {
    title: "Measurable reduction in attack surface",
    description:
      "Evidence-based severity and closure tracking for critical workflows.",
  },
  {
    title: "Compliance-ready assurance",
    description:
      "Mapped to OWASP Top 10, PCI DSS, ISO 27001, SOC 2, GDPR, and DPDPA.",
  },
  {
    title: "Release velocity without blind spots",
    description:
      "Security validation aligned with your SDLC to keep releases on schedule.",
  },
];

const complianceBadges = [
  "OWASP Top 10",
  "PCI DSS",
  "ISO 27001",
  "SOC 2",
  "GDPR",
  "DPDPA",
];

const methodology = [
  {
    title: "Scope & Threat Modeling",
    description:
      "Align on crown-jewel workflows, business impact, and realistic adversary paths.",
  },
  {
    title: "Manual + Assisted Testing",
    description:
      "Human-led testing with targeted automation for depth without noise.",
  },
  {
    title: "Exploit Validation",
    description:
      "Prove impact with safe, controlled demonstrations and evidence capture.",
  },
  {
    title: "Executive Reporting",
    description:
      "Board-level summary plus technical detail for engineering actionability.",
  },
  {
    title: "Fix & Retest",
    description:
      "Remediation support and verification to close audit findings.",
  },
];

const processSteps = [
  {
    title: "Scope",
    description: "Define crown jewels, environments, and success criteria.",
  },
  {
    title: "Test",
    description: "Manual-led testing across critical workflows and APIs.",
  },
  {
    title: "Report",
    description: "Executive summary + technical evidence and risk ratings.",
  },
  {
    title: "Fix",
    description: "Remediation guidance prioritized by business impact.",
  },
  {
    title: "Retest",
    description: "Verification and retest certificate for assurance.",
  },
];

const testCategories = [
  {
    title: "Auth & Session",
    items: ["MFA flows", "Account lifecycle", "Session integrity", "Token misuse"],
  },
  {
    title: "Access Control",
    items: ["Role enforcement", "Object-level access", "Privilege boundaries"],
  },
  {
    title: "Input & Injection",
    items: ["Injection vectors", "XSS exposure", "Unsafe deserialization"],
  },
  {
    title: "API & Business Logic",
    items: ["Schema abuse", "Rate limits", "Workflow bypasses"],
  },
  {
    title: "Config & Exposure",
    items: ["CORS & headers", "Secret leakage", "Sensitive data handling"],
  },
];

const deliverables = [
  "Executive summary with business impact",
  "Technical report with evidence and repro steps",
  "Risk ratings aligned to CVSS and business context",
  "Remediation guidance with prioritization",
  "Jira-ready tickets with clear ownership",
  "Retest certificate after fixes",
];

const useCases = [
  {
    title: "Regulated FinTech",
    description:
      "Support PCI DSS and SOC 2 audits with verified testing across payment flows.",
  },
  {
    title: "Enterprise SaaS",
    description:
      "Validate tenant isolation, admin workflows, and privileged access controls.",
  },
  {
    title: "Healthcare & Life Sciences",
    description:
      "Protect PHI and verify privacy controls across portals and APIs.",
  },
  {
    title: "Global Marketplaces",
    description:
      "Assess fraud vectors, pricing manipulation, and vendor impersonation risk.",
  },
];

const engagementTiers = [
  {
    title: "Assurance Sprint",
    description:
      "Focused assessment for a critical release, acquisition, or regulatory checkpoint.",
    bullets: ["2-3 week delivery", "Priority workflows", "Executive briefing"],
  },
  {
    title: "Comprehensive Assessment",
    description:
      "Full-coverage testing across web apps, APIs, and supporting services.",
    bullets: ["Broader scope", "Risk-based prioritization", "Retest included"],
  },
  {
    title: "Continuous Assurance",
    description:
      "Quarterly or release-aligned testing with trend reporting.",
    bullets: ["Ongoing cadence", "Leadership metrics", "Program alignment"],
  },
];

const faqs = [
  {
    question: "How do you align with compliance requirements?",
    answer:
      "We map findings and controls to OWASP Top 10, PCI DSS, ISO 27001, SOC 2, GDPR, and DPDPA with audit-ready evidence.",
  },
  {
    question: "Will this disrupt production systems?",
    answer:
      "Testing is planned with your teams, using safe techniques, rate limits, and non-production environments where possible.",
  },
  {
    question: "What does the board receive?",
    answer:
      "A concise executive summary with impact, exposure, and remediation progress that can be shared in leadership reviews.",
  },
  {
    question: "Do you retest after fixes?",
    answer:
      "Yes. Retesting is included to confirm closures and provide a retest certificate.",
  },
];

const painPoints = [
  "Board asks: Are we exposed?",
  "Can we prove we tested?",
  "What is the remediation plan?",
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

const IconPulse = ({ className }) => (
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
    <path d="M3 12h4l2-6 4 12 2-6h4" />
  </svg>
);

const IconTarget = ({ className }) => (
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
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <path d="M12 7v5l3 3" />
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

const WhatWeTestIllustration = () => (
  <svg viewBox="0 0 420 320" className="h-full w-full" aria-hidden="true">
    <defs>
      <linearGradient id="panel" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#0f172a" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.2" />
      </linearGradient>
      <linearGradient id="pulse" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#22d3ee" />
        <stop offset="100%" stopColor="#6366f1" />
      </linearGradient>
    </defs>
    <rect x="30" y="28" width="280" height="180" rx="14" fill="url(#panel)" stroke="#94a3b8" strokeOpacity="0.4" />
    <rect x="48" y="48" width="246" height="18" rx="8" fill="#0f172a" fillOpacity="0.2" />
    <rect x="48" y="78" width="210" height="12" rx="6" fill="#0f172a" fillOpacity="0.15" />
    <rect x="48" y="98" width="180" height="12" rx="6" fill="#0f172a" fillOpacity="0.15" />
    <rect x="48" y="130" width="110" height="18" rx="8" fill="url(#pulse)" fillOpacity="0.45" />
    <circle cx="320" cy="90" r="40" fill="url(#pulse)" fillOpacity="0.2" />
    <path
      d="M320 54l22 10v16c0 16-9 28-22 32-13-4-22-16-22-32V64l22-10z"
      stroke="#22d3ee"
      strokeWidth="2"
      fill="none"
    />
    <path d="M310 88l8 8 14-16" stroke="#22d3ee" strokeWidth="2" fill="none" />
    <circle cx="80" cy="250" r="18" fill="#0f172a" fillOpacity="0.08" stroke="#94a3b8" strokeOpacity="0.4" />
    <circle cx="200" cy="250" r="18" fill="#0f172a" fillOpacity="0.08" stroke="#94a3b8" strokeOpacity="0.4" />
    <circle cx="320" cy="250" r="18" fill="#0f172a" fillOpacity="0.08" stroke="#94a3b8" strokeOpacity="0.4" />
    <path d="M98 250h84M218 250h84" stroke="#94a3b8" strokeOpacity="0.5" strokeDasharray="4 6" />
  </svg>
);

export default function WebAppPentestPage() {
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
      <Section className="pt-24 sm:pt-28 md:pt-0 pb-14">
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
          <div className="absolute -left-20 top-20 h-56 w-56 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute -right-24 bottom-6 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
        </div>

        <Container className="relative z-10 flex min-h-[86vh] flex-col justify-center">
          <motion.div variants={fadeUp} className="max-w-3xl ">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
              Web Application Penetration Testing
            </div>
            <h1 className="mt-16 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              Expose real-world risk before it reaches your customers or the board.
            </h1>
            <p className="mt-4 text-lg text-white/80 md:text-xl">
              CISO-grade testing that proves impact, quantifies exposure, and delivers board-ready reporting.
            </p>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Manual-led testing aligned to compliance frameworks, engineered for measurable outcomes.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/contact?subject=services&subSubject=Web%20Application%20Security%20Assessment"
                aria-label="Request Security Assessment"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <motion.span
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  whileTap={reduceMotion ? undefined : { y: 0 }}
                  className="inline-flex items-center"
                >
                  Request Security Assessment
                </motion.span>
              </Link>

            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12 max-w-4xl">
            <div className="grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80 md:grid-cols-3">
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
              title="Security assurance that leadership can act on."
              subtitle="Move from vulnerability lists to risk decisions with measurable outcomes and prioritization."
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

      <Section className="bg-slate-50 dark:bg-slate-950/70">
        <Container>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-120px" }}>
            <SectionHeader
              eyebrow="Trust & Compliance"
              title="Assurance aligned to the frameworks your auditors expect."
              subtitle="Testing evidence mapped to industry and regulatory standards for board and audit committees."
            />
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {complianceBadges.map((badge) => (
                <Badge key={badge}>{badge}</Badge>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

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
              title="A disciplined, attacker-led methodology."
              subtitle="We mirror real adversaries while keeping tests safe, controlled, and measurable."
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
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">Engagement process</h3>
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
                eyebrow="What We Test"
                title="Coverage across the attack surface that matters."
                subtitle="Focus on the exploit paths most likely to lead to data loss, fraud, or systemic outage."
              />
              <div className="mt-8">
                <div className="relative rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-900/70">
                  <div className="pointer-events-none absolute -inset-1 rounded-[22px] bg-gradient-to-r from-cyan-500/30 via-indigo-500/20 to-transparent opacity-70" />
                  <div className="relative overflow-hidden rounded-2xl bg-slate-950/5 p-4 dark:bg-slate-950">
                    <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-cyan-500/20 blur-2xl" />
                    <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-indigo-500/20 blur-2xl" />
                    <WhatWeTestIllustration />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="grid gap-4">
                {testCategories.map((category) => (
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
              title="Security outcomes built for executive confidence."
              subtitle="Senior testers, attacker mindset, and compliance-ready reporting that scales across teams."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Senior-led testing",
                  description: "Experienced testers validate exploitability end-to-end.",
                  Icon: IconTarget,
                },
                {
                  title: "Evidence-driven reporting",
                  description: "Clear evidence so engineering can remediate quickly and confidently.",
                  Icon: IconPulse,
                },
                {
                  title: "Retest included",
                  description: "Verification of fixes and a retest certificate for assurance.",
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
              title="What you get"
              subtitle="Actionable outputs for executives, engineering, and compliance teams."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {deliverables.map((item) => (
                <motion.div key={item} variants={fadeUp}>
                  <Card>
                    <div className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-cyan-500" />
                      <p className="text-sm text-slate-700 dark:text-slate-300">{item}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      <Section className="bg-white dark:bg-slate-950">
        <Container>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
          >
            <SectionHeader
              eyebrow="Industry Use Cases"
              title="Aligned to the risk realities of modern enterprises."
              subtitle="Designed for high-impact environments where availability and trust are non-negotiable."
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

      <Section className="bg-slate-50 dark:bg-slate-950/70">
        <Container>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-120px" }}>
            <SectionHeader
              eyebrow="Proof"
              title="Evidence over assumptions."
              subtitle="Typical engagements uncover critical findings in authentication, access control, and business logic."
            />
            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {[
                {
                  title: "Critical findings",
                  value: "Industry estimates suggest 30-40% of apps contain exploitable access control gaps.",
                },
                {
                  title: "Remediation speed",
                  value: "Clients typically close prioritized issues 2-3x faster with Jira-ready tickets.",
                },
                {
                  title: "Audit readiness",
                  value: "Board-ready reporting reduces audit cycle friction and accelerates sign-off.",
                },
              ].map((item) => (
                <Card key={item.title} className="h-full">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    {item.title}
                  </div>
                  <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">{item.value}</p>
                </Card>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-slate-200/70 bg-white/80 p-5 dark:border-slate-800/70 dark:bg-slate-900/70">
              <div className="grid gap-6 md:grid-cols-3">
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">Case study snapshot</p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    Global SaaS provider reduced high-risk findings by 62% in one release cycle.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">Scope</p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    4 apps, 18 APIs, and a privileged admin console.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">Outcome</p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    Board briefing delivered with remediation roadmap and retest certificate.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>

      <Section className="bg-white dark:bg-slate-950">
        <Container>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
          >
            <SectionHeader
              eyebrow="Pricing Approach"
              title="Engagement tiers built for enterprise reality."
              subtitle="Choose the scope and cadence that fits your release and risk profile."
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

      <Section className="bg-slate-50 dark:bg-slate-950/70">
        <Container>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-120px" }}>
            <SectionHeader
              eyebrow="FAQ"
              title="Answers for security and executive stakeholders."
              subtitle="Short responses to keep decisions moving."
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
              Move from uncertainty to assurance in weeks.
            </h2>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Get a scope-aligned assessment, executive reporting, and a remediation plan that your board can trust.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact?subject=services&subSubject=Web%20Application%20Security%20Assessment"
                aria-label="Request Security Assessment"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Request Security Assessment
              </Link>
            </div>
          </motion.div>
        </Container>
      </Section>

      <div
        className={`fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200/70 bg-white/95 px-4 py-3 shadow-lg backdrop-blur-md transition md:hidden dark:border-slate-800/70 dark:bg-slate-950/90 ${showMobileCta ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
          }`}
        role="region"
        aria-label="Quick action"
      >
        <div className="flex items-center justify-between gap-3">
          <div className="text-xs font-semibold text-slate-700 dark:text-slate-200">
            Ready for a security assessment?
          </div>
          <Link
            href="/contact?subject=services&subSubject=Web%20Application%20Security%20Assessment"
            aria-label="Request Security Assessment"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white"
          >
            Request Security Assessment
          </Link>
        </div>
      </div>
    </motion.main>
  );
}
