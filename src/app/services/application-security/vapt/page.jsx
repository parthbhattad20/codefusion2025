"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const outcomes = [
  {
    title: "Proactive threat detection",
    description:
      "Identify and remediate vulnerabilities before they become exploitable attack vectors.",
  },
  {
    title: "Attack surface reduction",
    description:
      "Comprehensive coverage across infrastructure, applications, networks, and cloud environments.",
  },
  {
    title: "Compliance-ready evidence",
    description:
      "Documentation aligned to ISO 27001, SOC 2, PCI DSS, GDPR, and industry standards.",
  },
  {
    title: "Risk-based prioritization",
    description:
      "CVSS scoring and business context to focus remediation on what matters most.",
  },
];

const complianceBadges = [
  "ISO 27001",
  "SOC 2",
  "PCI DSS",
  "GDPR",
  "DPDPA",
  "NIST",
];

const methodology = [
  {
    title: "Asset Discovery & Scoping",
    description:
      "Map your attack surface across internal and external systems, applications, and infrastructure.",
  },
  {
    title: "Automated & Manual Testing",
    description:
      "Combine industry-leading tools with expert manual validation to uncover hidden vulnerabilities.",
  },
  {
    title: "Safe Exploitation & Validation",
    description:
      "Controlled proof-of-concept testing to demonstrate real-world impact without causing damage.",
  },
  {
    title: "Risk Analysis & Reporting",
    description:
      "CVSS-scored findings with executive summaries and detailed technical documentation.",
  },
  {
    title: "Remediation Support",
    description:
      "Actionable guidance and optional retesting to verify fixes and close security gaps.",
  },
];

const processSteps = [
  {
    title: "Scope",
    description: "Define assets, environments, and testing objectives.",
  },
  {
    title: "Assess",
    description: "Identify vulnerabilities using automated and manual techniques.",
  },
  {
    title: "Exploit",
    description: "Validate exploitability with safe, controlled demonstrations.",
  },
  {
    title: "Report",
    description: "Deliver risk-rated findings with remediation roadmap.",
  },
  {
    title: "Retest",
    description: "Verify fixes and provide closure certificates.",
  },
];

const testCategories = [
  {
    title: "Network & Infrastructure",
    items: ["Firewall configs", "Network segmentation", "Service hardening", "Protocol abuse"],
  },
  {
    title: "Web Applications",
    items: ["OWASP Top 10", "Business logic", "API security", "Authentication"],
  },
  {
    title: "Cloud & Containers",
    items: ["IAM policies", "Storage configs", "Container escape", "Serverless security"],
  },
  {
    title: "Mobile Applications",
    items: ["Data storage", "API endpoints", "Code analysis", "Runtime exploitation"],
  },
  {
    title: "Wireless & Physical",
    items: ["WiFi security", "Rogue APs", "Physical access", "Badge cloning"],
  },
];

const deliverables = [
  "Executive summary with business impact analysis",
  "Comprehensive technical report with evidence",
  "CVSS risk ratings and severity classifications",
  "Prioritized remediation roadmap",
  "Proof-of-concept demonstrations and screenshots",
  "Compliance mapping to relevant frameworks",
  "Attack chain visualizations",
  "Retest verification report",
  "Security posture scoring and trends",
  "Jira/ServiceNow-ready tickets",
  "Network topology and attack surface maps",
  "Post-engagement consultation and Q&A",
];

const useCases = [
  {
    title: "Financial Services",
    description:
      "Meet PCI DSS requirements and protect payment infrastructure from evolving threats.",
  },
  {
    title: "Healthcare & Life Sciences",
    description:
      "Safeguard PHI and ensure HIPAA compliance across clinical and administrative systems.",
  },
  {
    title: "Technology & SaaS",
    description:
      "Secure multi-tenant architectures and validate customer data isolation controls.",
  },
  {
    title: "Critical Infrastructure",
    description:
      "Protect OT/ICS environments and ensure resilience against nation-state threats.",
  },
];

const engagementTiers = [
  {
    title: "Vulnerability Assessment",
    description:
      "Automated scanning with manual validation to identify and prioritize security weaknesses.",
    bullets: ["Quarterly scans", "Risk scoring", "Trend analysis"],
  },
  {
    title: "Penetration Testing",
    description:
      "Manual exploitation testing to validate vulnerabilities and demonstrate real-world impact.",
    bullets: ["Annual or bi-annual", "Full exploitation", "Executive reporting"],
  },
  {
    title: "Continuous VAPT",
    description:
      "Ongoing assessment program with regular testing cadence and security metrics tracking.",
    bullets: ["Monthly/quarterly", "Regression testing", "Security dashboard"],
  },
];

const vaptServices = [
  {
    title: "External Network Testing",
    desc: "Test internet-facing assets for exploitable vulnerabilities from an attacker's perspective.",
  },
  {
    title: "Internal Network Testing",
    desc: "Assess insider threat scenarios and lateral movement possibilities within your network.",
  },
  {
    title: "Web Application Testing",
    desc: "Deep analysis of web applications for injection flaws, authentication bypasses, and logic errors.",
  },
  {
    title: "Mobile Application Testing",
    desc: "iOS and Android security testing including reverse engineering and runtime analysis.",
  },
  {
    title: "API Security Testing",
    desc: "REST, GraphQL, and SOAP API testing for authorization flaws and data exposure.",
  },
  {
    title: "Cloud Security Assessment",
    desc: "AWS, Azure, and GCP configuration reviews and penetration testing.",
  },
  {
    title: "Wireless Security Testing",
    desc: "WiFi, Bluetooth, and wireless protocol security assessments.",
  },
  {
    title: "Red Team Exercises",
    desc: "Multi-layered attack simulations testing people, process, and technology.",
  },
  {
    title: "Phishing Simulations",
    desc: "Measure and improve employee security awareness through realistic phishing campaigns.",
  },
];

const faqs = [
  {
    question: "What's the difference between vulnerability assessment and penetration testing?",
    answer:
      "Vulnerability Assessment identifies and catalogs security weaknesses using automated tools and manual validation. Penetration Testing goes further by actively exploiting vulnerabilities to demonstrate real-world impact and attack chains. We recommend both approaches for comprehensive security validation.",
  },
  {
    question: "Will testing disrupt our production systems?",
    answer:
      "We work closely with your team to minimize impact. Testing is scheduled during maintenance windows when possible, uses rate limiting, and follows safe testing protocols. For production environments, we can use non-production replicas or employ passive testing techniques.",
  },
  {
    question: "How do you handle sensitive data during testing?",
    answer:
      "All testers sign NDAs and follow strict data handling protocols. Test data is encrypted in transit and at rest, and is permanently destroyed after engagement completion. We can work with sanitized data sets for sensitive environments.",
  },
  {
    question: "What happens if you find a critical vulnerability?",
    answer:
      "Critical findings trigger our emergency notification protocol. You'll receive immediate notification with details and temporary mitigation steps. We prioritize critical issues in reporting and can provide emergency remediation support.",
  },
];

const painPoints = [
  "Are we exposed to real-world attacks?",
  "Do we meet compliance requirements?",
  "What should we fix first?",
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

const VAPTIllustration = () => (
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

export default function VAPTPage() {
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
          <motion.div variants={fadeUp} className="max-w-3xl">
            
            <h1 className="mt-16 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              Find and fix vulnerabilities before attackers do.
            </h1>
            <p className="mt-4 text-lg text-white/80 md:text-xl">
              Comprehensive VAPT services that simulate real-world attacks to identify security gaps across your entire digital infrastructure.
            </p>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Manual-led testing with automated tooling, aligned to industry frameworks and compliance requirements.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/contact?subject=VAPT%20Assessment"
                aria-label="Request VAPT Assessment"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <motion.span
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  whileTap={reduceMotion ? undefined : { y: 0 }}
                  className="inline-flex items-center"
                >
                  Request VAPT Assessment
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
              title="Security validation that reduces risk and builds confidence."
              subtitle="Transform vulnerability data into actionable intelligence with prioritized remediation guidance."
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
              eyebrow="Compliance & Standards"
              title="Testing aligned to regulatory and industry frameworks."
              subtitle="Evidence-based reporting mapped to the standards your auditors and stakeholders expect."
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
              title="A proven, risk-based testing approach."
              subtitle="Combining automated discovery with expert manual validation to uncover vulnerabilities automated tools miss."
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
          >
            <SectionHeader
              eyebrow="Services"
              title="Comprehensive coverage across your attack surface."
              subtitle="From network infrastructure to cloud environments, we test what matters most."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {vaptServices.map((item) => (
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
                eyebrow="Testing Coverage"
                title="Deep analysis across all critical attack vectors."
                subtitle="We test the vulnerabilities that lead to data breaches, system compromise, and business disruption."
              />
              <div className="mt-8">
                <div className="relative rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-900/70">
                  <div className="pointer-events-none absolute -inset-1 rounded-[22px] bg-gradient-to-r from-cyan-500/30 via-indigo-500/20 to-transparent opacity-70" />
                  <div className="relative overflow-hidden rounded-2xl bg-slate-950/5 p-4 dark:bg-slate-950">
                    <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-cyan-500/20 blur-2xl" />
                    <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-indigo-500/20 blur-2xl" />
                    <VAPTIllustration />
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
              title="Expert-led testing that goes beyond automated scans."
              subtitle="Real attackers don't rely on scripts alone—neither do we."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Attacker mindset",
                  description: "Our testers think like real adversaries, uncovering attack chains automated tools miss.",
                  Icon: IconTarget,
                },
                {
                  title: "Zero false positives",
                  description: "Every finding is manually validated with proof-of-concept demonstrations.",
                  Icon: IconPulse,
                },
                {
                  title: "Actionable remediation",
                  description: "Clear fix guidance prioritized by risk and business impact, not just severity scores.",
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
              title="Comprehensive reporting for all stakeholders."
              subtitle="From executive summaries to technical remediation guides, we provide the documentation you need."
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
              title="Tailored testing for regulated and high-risk environments."
              subtitle="Industry-specific threat modeling and compliance-focused assessments."
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
              title="Flexible programs that fit your security maturity."
              subtitle="From one-time assessments to continuous security validation programs."
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
              title="Common questions about VAPT services."
              subtitle="Clear answers to help you make informed security decisions."
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
              Don't wait for a breach to find your vulnerabilities.
            </h2>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Get a comprehensive VAPT assessment with actionable findings and expert remediation guidance.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact?subject=VAPT%20Assessment"
                aria-label="Request VAPT Assessment"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Request VAPT Assessment
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
            Ready to secure your infrastructure?
          </div>
          <Link
            href="/contact?subject=VAPT%20Assessment"
            aria-label="Request VAPT Assessment"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white"
          >
            Request Assessment
          </Link>
        </div>
      </div>
    </motion.main>
  );
}