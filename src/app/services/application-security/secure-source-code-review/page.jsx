"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const outcomes = [
  {
    title: "Prevent production vulnerabilities",
    description:
      "Identify injection flaws, broken authentication, and logic errors before code reaches production environments.",
  },
  {
    title: "Reduce remediation costs",
    description:
      "Fix vulnerabilities early in development when they're 10-100x cheaper to remediate than post-deployment.",
  },
  {
    title: "Meet compliance requirements",
    description:
      "Demonstrate secure SDLC practices aligned to PCI DSS, HIPAA, SOC 2, and regulatory frameworks.",
  },
  {
    title: "Improve code quality",
    description:
      "CVSS-scored findings with secure coding guidance to strengthen development practices and reduce technical debt.",
  },
];

const complianceBadges = [
  "OWASP ASVS",
  "PCI DSS",
  "HIPAA",
  "SOC 2",
  "ISO 27001",
  "NIST SSDF",
];

const methodology = [
  {
    title: "Architecture & Threat Modeling",
    description:
      "Analyze application architecture, data flows, and trust boundaries to identify security-critical components.",
  },
  {
    title: "Static Analysis & Manual Review",
    description:
      "Combine automated SAST tools with expert manual code review to uncover complex vulnerabilities.",
  },
  {
    title: "Security Logic Validation",
    description:
      "Assess authentication, authorization, cryptography, and business logic for design and implementation flaws.",
  },
  {
    title: "Vulnerability Classification",
    description:
      "CVSS-scored findings mapped to CWE/SANS Top 25 with exploitability analysis and real-world impact.",
  },
  {
    title: "Remediation & Training",
    description:
      "Developer-friendly fix guidance with code examples and secure coding workshops to prevent recurrence.",
  },
];

const processSteps = [
  {
    title: "Scope",
    description: "Define code repositories, languages, and review depth.",
  },
  {
    title: "Analyze",
    description: "Static analysis combined with manual code review.",
  },
  {
    title: "Validate",
    description: "Verify findings and assess exploitability.",
  },
  {
    title: "Report",
    description: "Deliver prioritized findings with remediation guidance.",
  },
  {
    title: "Support",
    description: "Developer workshops and fix validation.",
  },
];

const testCategories = [
  {
    title: "Injection Vulnerabilities",
    items: ["SQL injection", "Command injection", "LDAP injection", "XPath/XXE"],
  },
  {
    title: "Authentication & Access",
    items: ["Broken auth", "Session flaws", "Access control", "Crypto errors"],
  },
  {
    title: "Data Security",
    items: ["Sensitive exposure", "Hardcoded secrets", "Insecure storage", "PII handling"],
  },
  {
    title: "Logic & Validation",
    items: ["Business logic", "Input validation", "Race conditions", "TOCTOU"],
  },
  {
    title: "Dependencies & Config",
    items: ["Vulnerable libs", "Insecure defaults", "Secret management", "Third-party code"],
  },
];

const deliverables = [
  "Executive summary with business risk analysis",
  "Technical report with vulnerable code snippets and line references",
  "SQL, NoSQL, command, and LDAP injection vulnerabilities",
  "Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF) findings",
  "Broken authentication and authorization logic",
  "Cryptographic weaknesses and hardcoded secrets",
  "Insecure deserialization and XML external entity (XXE) flaws",
  "Business logic vulnerabilities and race conditions",
  "Input validation failures and improper error handling",
  "CVSS v3.1 risk ratings mapped to CWE/SANS Top 25",
  "Developer-focused remediation with secure code examples",
  "Automated SAST findings with manual validation and prioritization",
];

const useCases = [
  {
    title: "Financial Services",
    description:
      "Secure payment processing logic, transaction handling, and financial data protection in banking applications.",
  },
  {
    title: "Healthcare & Life Sciences",
    description:
      "Protect patient health information (PHI) and ensure HIPAA compliance for clinical application code.",
  },
  {
    title: "SaaS & Technology",
    description:
      "Validate multi-tenant isolation, subscription logic, and API security in cloud-native applications.",
  },
  {
    title: "E-Commerce & Retail",
    description:
      "Secure checkout flows, payment integration, and customer data handling in commerce platforms.",
  },
];

const engagementTiers = [
  {
    title: "Quick Security Audit",
    description:
      "Automated SAST scanning with manual validation to identify critical vulnerabilities and quick wins.",
    bullets: ["Pre-release review", "High/critical only", "5-7 business days"],
  },
  {
    title: "Comprehensive Code Review",
    description:
      "Deep manual analysis of security-critical components with business logic validation and threat modeling.",
    bullets: ["Annual assessment", "Full codebase", "Executive reporting"],
  },
  {
    title: "Continuous Code Security",
    description:
      "Ongoing security reviews integrated into CI/CD with regression testing and security metrics tracking.",
    bullets: ["Per-release review", "DevSecOps ready", "Security dashboard"],
  },
];

const codeReviewServices = [
  {
    title: "Java/Spring Security Review",
    desc: "Security assessment for Java applications including Spring Security, authentication, and authorization logic.",
  },
  {
    title: ".NET/C# Code Analysis",
    desc: "ASP.NET Core, Entity Framework, and authentication framework security review.",
  },
  {
    title: "Python/Django Security",
    desc: "Django ORM injection, authentication middleware, and Python-specific vulnerability analysis.",
  },
  {
    title: "Node.js/JavaScript Review",
    desc: "Express, Nest.js, and JavaScript security including prototype pollution and async vulnerabilities.",
  },
  {
    title: "PHP/Laravel Security",
    desc: "Laravel Eloquent, authentication, and PHP-specific injection and deserialization flaws.",
  },
  {
    title: "Go/Rust Security Analysis",
    desc: "Memory safety, concurrency issues, and secure coding patterns for Go and Rust applications.",
  },
  {
    title: "Mobile Code Review",
    desc: "Swift, Kotlin, React Native security including authentication, storage, and API integration.",
  },
  {
    title: "Infrastructure as Code",
    desc: "Terraform, CloudFormation, Kubernetes manifests for misconfigurations and security risks.",
  },
  {
    title: "Cryptography Implementation",
    desc: "Custom crypto, key management, random number generation, and encryption implementation review.",
  },
];

const faqs = [
  {
    question: "What's the difference between SAST tools and manual code review?",
    answer:
      "SAST (Static Application Security Testing) tools automate vulnerability scanning but produce false positives and miss complex logic flaws. Our manual review validates SAST findings, eliminates false positives, and identifies business logic vulnerabilities, authentication bypasses, and design flaws that automated tools cannot detect. We combine both approaches for comprehensive coverage.",
  },
  {
    question: "Do we need to provide access to our source code repository?",
    answer:
      "Yes, we need read access to your code repository (GitHub, GitLab, Bitbucket, etc.) or a code archive. All reviewers sign NDAs and follow strict confidentiality protocols. Code is analyzed in secure environments and never shared or retained after engagement completion. We can work with air-gapped environments if required.",
  },
  {
    question: "How long does a code review take?",
    answer:
      "Timeline depends on codebase size and complexity. A focused review of 10-20K lines of code typically takes 1-2 weeks. Larger applications (100K+ lines) may require 3-4 weeks. We provide estimated timelines after initial scoping based on your specific codebase and security requirements.",
  },
  {
    question: "Can you review code in any programming language?",
    answer:
      "We specialize in Java, .NET/C#, Python, JavaScript/Node.js, PHP, Go, Rust, Swift, and Kotlin. We also review Infrastructure as Code (Terraform, CloudFormation), containerization (Docker, Kubernetes), and cloud-native applications. If you use other languages, contact us to discuss our capabilities for your specific technology stack.",
  },
];

const painPoints = [
  "Are there vulnerabilities hiding in our code?",
  "Will our app pass security compliance?",
  "How secure is our authentication logic?",
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

const IconCode = ({ className }) => (
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
    <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
  </svg>
);

const IconBug = ({ className }) => (
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
    <path d="M8 2v4M16 2v4M12 13v-1M9 13h6M9 18h6" />
    <path d="M10 2c-1.1 0-2 .9-2 2v2h8V4c0-1.1-.9-2-2-2h-4z" />
    <rect x="4" y="8" width="16" height="12" rx="2" />
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

const CodeSecurityIllustration = () => (
  <svg viewBox="0 0 420 320" className="h-full w-full" aria-hidden="true">
    <defs>
      <linearGradient id="code-panel" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#0f172a" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#10b981" stopOpacity="0.2" />
      </linearGradient>
      <linearGradient id="code-pulse" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#34d399" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    {/* Code editor window */}
    <rect x="50" y="40" width="320" height="240" rx="12" fill="url(#code-panel)" stroke="#94a3b8" strokeOpacity="0.4" strokeWidth="2" />
    
    {/* Window controls */}
    <circle cx="70" cy="60" r="4" fill="#ef4444" />
    <circle cx="85" cy="60" r="4" fill="#f59e0b" />
    <circle cx="100" cy="60" r="4" fill="#10b981" />
    
    {/* Code lines */}
    <rect x="70" y="85" width="120" height="8" rx="4" fill="#94a3b8" fillOpacity="0.3" />
    <rect x="70" y="105" width="180" height="8" rx="4" fill="#94a3b8" fillOpacity="0.3" />
    <rect x="90" y="125" width="150" height="8" rx="4" fill="#94a3b8" fillOpacity="0.3" />
    <rect x="90" y="145" width="100" height="8" rx="4" fill="#94a3b8" fillOpacity="0.3" />
    
    {/* Highlighted vulnerability line */}
    <rect x="90" y="165" width="160" height="8" rx="4" fill="#ef4444" fillOpacity="0.4" />
    <rect x="70" y="185" width="140" height="8" rx="4" fill="#94a3b8" fillOpacity="0.3" />
    
    {/* Security check icon */}
    <circle cx="320" cy="160" r="35" fill="url(#code-pulse)" fillOpacity="0.2" stroke="#10b981" strokeWidth="2" />
    <path d="M320 130l18 8v14c0 12-8 20-18 24-10-4-18-12-18-24v-14l18-8z" stroke="#10b981" strokeWidth="2" fill="none" />
    <path d="M312 158l6 6 10-12" stroke="#10b981" strokeWidth="2" fill="none" />
    
    {/* Bug indicators */}
    <circle cx="260" cy="165" r="8" fill="#ef4444" fillOpacity="0.3" stroke="#ef4444" strokeWidth="1.5" />
    <text x="260" y="169" fontSize="10" fill="#ef4444" textAnchor="middle" fontWeight="bold">!</text>
  </svg>
);

export default function SourceCodeReviewPage() {
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
          <div className="absolute -left-20 top-20 h-56 w-56 rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="absolute -right-24 bottom-6 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
        </div>

        <Container className="relative z-10 flex min-h-[86vh] flex-col justify-center">
          <motion.div variants={fadeUp} className="max-w-3xl">
            <h1 className="mt-16 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              Find vulnerabilities in your code before attackers do.
            </h1>
            <p className="mt-4 text-lg text-white/80 md:text-xl">
              Comprehensive source code security review that uncovers injection flaws, broken authentication, cryptographic weaknesses, and business logic errors before they reach production.
            </p>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Expert manual analysis combined with automated SAST to identify vulnerabilities at the earliest—and cheapest—stage of development.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/contact?subject=Source%20Code%20Review"
                aria-label="Request Code Review"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <motion.span
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  whileTap={reduceMotion ? undefined : { y: 0 }}
                  className="inline-flex items-center"
                >
                  Request Code Review
                </motion.span>
              </Link>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12 max-w-4xl">
            <div className="grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80 md:grid-cols-3">
              {painPoints.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
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
              title="Secure code that protects your business and reputation."
              subtitle="Identify and fix vulnerabilities early when remediation is 10-100x cheaper than post-deployment fixes."
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
                        <IconCode className="h-5 w-5" />
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
              eyebrow="Compliance & Standards"
              title="Code reviews aligned to secure development frameworks."
              subtitle="Demonstrate secure SDLC practices for compliance audits and regulatory requirements."
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
              title="Deep security analysis beyond automated scanning."
              subtitle="We combine SAST tools with expert manual review to find complex vulnerabilities automated tools miss."
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
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">Review process</h3>
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
              title="Language-specific security expertise across technology stacks."
              subtitle="From Java to JavaScript, we review code in all major programming languages and frameworks."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {codeReviewServices.map((item) => (
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

      {/* Testing Coverage Section */}
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
                eyebrow="Vulnerability Coverage"
                title="Comprehensive analysis of code-level security flaws."
                subtitle="We identify the vulnerabilities that lead to data breaches, system compromise, and business disruption."
              />
              <div className="mt-8">
                <div className="relative rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-900/70">
                  <div className="pointer-events-none absolute -inset-1 rounded-[22px] bg-gradient-to-r from-emerald-500/30 via-blue-500/20 to-transparent opacity-70" />
                  <div className="relative overflow-hidden rounded-2xl bg-slate-950/5 p-4 dark:bg-slate-950">
                    <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-emerald-500/20 blur-2xl" />
                    <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-blue-500/20 blur-2xl" />
                    <CodeSecurityIllustration />
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
              title="Expert code review that finds what SAST tools miss."
              subtitle="Automated scanners generate false positives and miss complex logic flaws—our experts don't."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Security expertise",
                  description: "Our reviewers are experts in secure coding, attack patterns, and framework-specific vulnerabilities across all major languages.",
                  Icon: IconShield,
                },
                {
                  title: "Zero false positives",
                  description: "Every finding is manually validated with code context, exploitability analysis, and real-world impact assessment.",
                  Icon: IconBug,
                },
                {
                  title: "Developer-friendly fixes",
                  description: "Clear remediation guidance with secure code examples, best practices, and training to prevent future vulnerabilities.",
                  Icon: IconCode,
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
              title="Comprehensive reports with code-level remediation guidance."
              subtitle="From executive summaries to line-by-line code fixes, we provide actionable security intelligence."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {deliverables.map((item) => (
                <motion.div key={item} variants={fadeUp}>
                  <Card>
                    <div className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
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
              title="Code security for regulated and high-risk industries."
              subtitle="Industry-specific secure coding standards and compliance-focused code reviews."
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
              title="Flexible code review programs for every development stage."
              subtitle="From pre-release audits to continuous security validation in your CI/CD pipeline."
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
              title="Common questions about source code review."
              subtitle="Clear answers to help you understand our code security assessment approach."
            />
            <div className="mt-8 space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-slate-200/70 bg-white/80 p-5 dark:border-slate-800/70 dark:bg-slate-900/70"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between text-left text-sm font-semibold text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:text-white"
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
              Secure your code before vulnerabilities reach production.
            </h2>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Get expert source code review with zero false positives and developer-focused secure coding guidance.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact?subject=Source%20Code%20Review"
                aria-label="Request Code Review"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Request Code Review
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
            Ready to secure your code?
          </div>
          <Link
            href="/contact?subject=Source%20Code%20Review"
            aria-label="Request Code Review"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white"
          >
            Request Review
          </Link>
        </div>
      </div>
    </motion.main>
  );
}