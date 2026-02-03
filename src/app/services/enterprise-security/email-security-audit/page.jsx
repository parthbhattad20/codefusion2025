"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const outcomes = [
  {
    title: "Phishing Attack Prevention",
    description:
      "Identify and block sophisticated phishing attempts, spear-phishing, and business email compromise (BEC) attacks before they reach users.",
  },
  {
    title: "Email Spoofing Detection",
    description:
      "Comprehensive analysis of SPF, DKIM, and DMARC configurations to prevent email spoofing and domain impersonation attacks.",
  },
  {
    title: "Malware Protection Assessment",
    description:
      "Evaluate attachment scanning, URL protection, and malware detection capabilities to safeguard against malicious payloads.",
  },
  {
    title: "Data Leakage Prevention",
    description:
      "Audit email encryption, DLP policies, and content filtering to prevent sensitive data exfiltration through email channels.",
  },
];

const complianceBadges = [
  "DMARC",
  "SPF",
  "DKIM",
  "ISO 27001",
  "NIST CSF",
  "GDPR",
];

const methodology = [
  {
    title: "Infrastructure Assessment",
    description:
      "Comprehensive review of email servers, gateways, and security appliances including configuration analysis and vulnerability scanning.",
  },
  {
    title: "Authentication & Authorization",
    description:
      "Evaluation of email authentication protocols (SPF, DKIM, DMARC), multi-factor authentication, and access control mechanisms.",
  },
  {
    title: "Content Security Analysis",
    description:
      "Testing of anti-malware, anti-phishing, URL protection, and data loss prevention (DLP) capabilities through simulated attacks.",
  },
  {
    title: "User Awareness Testing",
    description:
      "Phishing simulation campaigns and security awareness assessments to identify human vulnerabilities in email security.",
  },
  {
    title: "Policy & Compliance Review",
    description:
      "Audit of email security policies, incident response procedures, and compliance with industry standards and regulations.",
  },
];

const processSteps = [
  {
    title: "Discovery",
    description: "Email infrastructure mapping and asset inventory.",
  },
  {
    title: "Assessment",
    description: "Configuration analysis and vulnerability testing.",
  },
  {
    title: "Testing",
    description: "Simulated attacks and phishing campaigns.",
  },
  {
    title: "Analysis",
    description: "Risk evaluation and impact assessment.",
  },
  {
    title: "Reporting",
    description: "Findings documentation and remediation guidance.",
  },
];

const securityCategories = [
  {
    title: "Authentication",
    items: ["SPF", "DKIM", "DMARC", "Email spoofing"],
  },
  {
    title: "Content Security",
    items: ["Anti-malware", "URL protection", "DLP", "Encryption"],
  },
  {
    title: "User Protection",
    items: ["Phishing simulation", "Awareness training", "Zero-day threats", "BEC prevention"],
  },
  {
    title: "Infrastructure",
    items: ["Server hardening", "Gateway security", "Archiving", "Monitoring"],
  },
];

const deliverables = [
  "Comprehensive email security audit report with executive summary",
  "Detailed vulnerability findings with CVSS scores and risk ratings",
  "SPF, DKIM, and DMARC configuration analysis and recommendations",
  "Phishing simulation results and user awareness assessment",
  "Malware protection and content filtering evaluation",
  "Data loss prevention (DLP) policy review and gaps identification",
  "Compliance mapping against industry standards (GDPR, HIPAA, etc.)",
  "Step-by-step remediation guidance with technical implementation details",
  "Email security best practices and hardening recommendations",
  "Incident response procedure review and improvement suggestions",
  "Security awareness training program recommendations",
  "Post-audit consultation and implementation support",
];

const useCases = [
  {
    title: "Pre-Breach Security Validation",
    description:
      "Conduct comprehensive email security assessment before potential mergers, acquisitions, or regulatory audits to ensure robust protection.",
  },
  {
    title: "Compliance Requirements",
    description:
      "Meet GDPR, HIPAA, PCI DSS, and other regulatory requirements for email security controls, encryption, and data protection.",
  },
  {
    title: "Post-Incident Investigation",
    description:
      "Following email-based security incidents, perform thorough audit to identify root causes and prevent future phishing or malware attacks.",
  },
  {
    title: "Zero-Trust Implementation",
    description:
      "Audit existing email security controls and identify gaps in zero-trust architecture implementation for email communications.",
  },
];

const engagementTiers = [
  {
    title: "Email Security Quick Scan",
    description:
      "Rapid assessment of critical email security controls including SPF/DKIM/DMARC and basic phishing protection within 1-2 weeks.",
    bullets: ["1-2 weeks", "Basic assessment", "Essential controls"],
  },
  {
    title: "Comprehensive Email Audit",
    description:
      "Full-scope email security evaluation covering infrastructure, policies, user awareness, and simulated attack scenarios.",
    bullets: ["3-4 weeks", "Complete audit", "Advanced testing"],
  },
  {
    title: "Continuous Email Monitoring",
    description:
      "Ongoing email security monitoring with quarterly audits, phishing simulations, and continuous improvement recommendations.",
    bullets: ["Quarterly", "Ongoing monitoring", "Proactive security"],
  },
];

const testingServices = [
  {
    title: "Authentication Testing",
    desc: "SPF, DKIM, DMARC configuration validation, email spoofing prevention, and domain authentication assessment.",
  },
  {
    title: "Phishing Assessment",
    desc: "Spear-phishing simulation, user awareness testing, and business email compromise (BEC) vulnerability analysis.",
  },
  {
    title: "Malware Protection",
    desc: "Attachment scanning, URL protection, sandboxing capabilities, and zero-day malware detection evaluation.",
  },
  {
    title: "Data Loss Prevention",
    desc: "Content filtering, encryption policies, sensitive data detection, and exfiltration prevention testing.",
  },
  {
    title: "Infrastructure Security",
    desc: "Email server hardening, gateway security, archiving systems, and monitoring/logging capabilities review.",
  },
  {
    title: "Policy & Compliance",
    desc: "Security policy evaluation, incident response procedures, regulatory compliance, and governance assessment.",
  },
  {
    title: "User Awareness Training",
    desc: "Phishing recognition training, security awareness programs, and behavioral analysis for email threats.",
  },
  {
    title: "Encryption & Privacy",
    desc: "Email encryption protocols, privacy controls, secure communication channels, and confidentiality protection.",
  },
];

const faqs = [
  {
    question: "What is an email security audit and why is it important?",
    answer:
      "An email security audit is a comprehensive assessment of your organization's email infrastructure, policies, and controls to identify vulnerabilities that could lead to phishing attacks, malware infections, data breaches, or business email compromise. Email remains the primary attack vector for cyber criminals, with 90% of successful breaches starting with a phishing email. A thorough audit helps prevent costly security incidents, ensures compliance with regulations, and protects sensitive communications. The audit covers technical controls, user awareness, policy effectiveness, and real-world attack simulations to provide a complete security posture evaluation.",
  },
  {
    question: "How long does an email security audit take?",
    answer:
      "The duration depends on the scope and complexity of your email environment. A basic email security scan typically takes 1-2 weeks, including infrastructure assessment, configuration review, and basic testing. A comprehensive audit covering multiple domains, complex infrastructure, and extensive testing usually requires 3-4 weeks. This includes: initial discovery and assessment (1 week), detailed testing and simulations (1-2 weeks), analysis and reporting (1 week). Factors affecting timeline include number of email domains, complexity of infrastructure, size of user base, and whether phishing simulations are included. We provide detailed timeline estimates during scoping discussions.",
  },
  {
    question: "Will the audit disrupt our email operations?",
    answer:
      "Professional email security audits are designed to minimize disruption while providing comprehensive testing. We use read-only assessment techniques, passive monitoring, and controlled testing methods that don't interfere with normal email operations. For active testing like phishing simulations, we coordinate timing with your team and use safe, educational approaches. Most audits can be conducted during normal business hours without service interruption. We establish clear communication channels and can pause testing if any issues arise. The goal is thorough security evaluation with minimal business impact.",
  },
  {
    question: "What are SPF, DKIM, and DMARC, and why are they important?",
    answer:
      "SPF (Sender Policy Framework), DKIM (DomainKeys Identified Mail), and DMARC (Domain-based Message Authentication, Reporting, and Conformance) are email authentication protocols that prevent email spoofing and phishing attacks. SPF specifies which mail servers are authorized to send email for your domain. DKIM uses cryptographic signatures to verify email authenticity. DMARC combines SPF and DKIM results with sender policies to prevent domain impersonation. Together, they protect against business email compromise (BEC) attacks where criminals impersonate executives or trusted partners. Proper implementation can block up to 90% of spoofing attempts and significantly reduce phishing success rates.",
  },
];

const painPoints = [
  "Are our emails being spoofed or intercepted?",
  "How vulnerable are we to phishing attacks?",
  "Is our email encryption protecting sensitive data?",
];

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
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

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

const IconSearch = ({ className }) => (
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
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
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

export default function EmailSecurityAuditPage() {
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
              Enterprise Email Protection
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              Email Security Audit Services
            </h1>
            <p className="mt-4 text-lg text-white/80 md:text-xl">
              Comprehensive assessment of your email infrastructure to prevent phishing, spoofing, and data breaches. Protect your communications with expert-led security audits.
            </p>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Evaluate SPF/DKIM/DMARC configurations, test anti-phishing controls, and assess malware protection across your entire email ecosystem.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/contact?subject=Email%20Security%20Audit"
                aria-label="Request an Email Audit"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <motion.span
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  whileTap={reduceMotion ? undefined : { y: 0 }}
                  className="inline-flex items-center"
                >
                  Request an Email Audit
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
              title="Comprehensive email threat protection."
              subtitle="Identify and eliminate email-based security risks before they compromise your organization."
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
                        <IconTarget className="h-5 w-5" />
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
              eyebrow="Security Standards"
              title="Email security compliance frameworks."
              subtitle="Comprehensive email security testing aligned with industry standards and best practices."
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
              title="Structured email security assessment approach."
              subtitle="Systematic evaluation of your email infrastructure from authentication to content protection."
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
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">Email security audit process</h3>
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
              eyebrow="Testing Services"
              title="Complete email security assessment coverage."
              subtitle="From authentication protocols to user awareness, covering all aspects of email protection."
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

      {/* Security Coverage Section with Email Security Image */}
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
                eyebrow="Testing Coverage"
                title="Complete email ecosystem protection."
                subtitle="We assess every layer of your email security from infrastructure to end-user protection."
              />
              <div className="mt-8">
                <div className="relative rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-900/70">
                  <div className="pointer-events-none absolute -inset-1 rounded-[22px] bg-gradient-to-r from-violet-500/30 via-blue-600/20 to-transparent opacity-70" />
                  <div className="relative overflow-hidden rounded-2xl bg-slate-950/5 p-6 dark:bg-slate-950">
                    <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-violet-500/20 blur-2xl" />
                    <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-blue-600/20 blur-2xl" />
                    <div className="relative">
                      <Image
                        src="/assets/services/email-security.jpg"
                        alt="Email Security Audit"
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
              title="Expert email security specialists."
              subtitle="We combine deep technical expertise with real-world attack knowledge to secure your email communications."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Email security experts",
                  description: "Certified specialists with extensive experience in email infrastructure, authentication protocols, and threat prevention.",
                  Icon: IconTarget,
                },
                {
                  title: "Real-world testing",
                  description: "Simulated phishing campaigns and attack scenarios that mirror actual cyber criminal tactics and techniques.",
                  Icon: IconShield,
                },
                {
                  title: "Compliance expertise",
                  description: "Deep knowledge of email security standards, regulatory requirements, and industry best practices.",
                  Icon: IconSearch,
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
              title="Comprehensive email security documentation."
              subtitle="Everything needed to understand and strengthen your email security posture."
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
              title="Email security audits for diverse needs."
              subtitle="Tailored assessments addressing unique email security challenges across different scenarios."
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
              title="Flexible email security assessment programs."
              subtitle="From quick scans to comprehensive audits and ongoing monitoring services."
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
              title="Common questions about email security audits."
              subtitle="Clear answers to help you understand email security assessment and protection."
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
              Secure your email communications today.
            </h2>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Prevent phishing attacks and data breaches with comprehensive email security audits.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact?subject=Email%20Security%20Audit"
                aria-label="Speak With an Email Security Expert"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Speak With an Email Security Expert
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
            Ready for email security audit?
          </div>
          <Link
            href="/contact?subject=Email%20Security%20Audit"
            aria-label="Request an Audit"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white"
          >
            Get Started
          </Link>
        </div>
      </div>
    </motion.main>
  );
}
