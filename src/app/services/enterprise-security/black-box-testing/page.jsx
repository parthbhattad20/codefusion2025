"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const outcomes = [
  {
    title: "Realistic Attack Simulation",
    description:
      "Replicate how real attackers exploit exposed applications and infrastructure without any internal knowledge or system access.",
  },
  {
    title: "Unbiased Security Assessment",
    description:
      "No insider knowledge ensures realistic vulnerability discovery, providing authentic insights into your external attack surface.",
  },
  {
    title: "Critical Vulnerability Detection",
    description:
      "Identify exploitable vulnerabilities including XSS, CSRF, SQL injection, authentication bypasses, and misconfigurations.",
  },
  {
    title: "Business Logic Testing",
    description:
      "Manual testing uncovers complex workflow flaws, authorization issues, and logic vulnerabilities automated scanners miss.",
  },
];

const complianceBadges = [
  "OWASP Top 10",
  "SANS Top 25",
  "PCI DSS",
  "ISO 27001",
  "NIST",
  "CWE",
];

const methodology = [
  {
    title: "Reconnaissance & Discovery",
    description:
      "External attack surface scanning, subdomain enumeration, technology fingerprinting, and publicly exposed asset discovery without internal access.",
  },
  {
    title: "Vulnerability Assessment",
    description:
      "Comprehensive security testing for OWASP Top 10, authentication flaws, injection vulnerabilities, and misconfigurations from an external perspective.",
  },
  {
    title: "Manual Exploitation Testing",
    description:
      "Expert-led manual testing to exploit discovered vulnerabilities, test business logic, and validate real-world attack scenarios.",
  },
  {
    title: "Authentication & Authorization",
    description:
      "Test authentication mechanisms, session management, password policies, multi-factor authentication, and access control enforcement.",
  },
  {
    title: "Impact Analysis & Reporting",
    description:
      "Document proof-of-concept exploits, assess business impact, prioritize risks, and provide actionable remediation guidance.",
  },
];

const processSteps = [
  {
    title: "Reconnaissance",
    description: "External scanning, asset discovery.",
  },
  {
    title: "Assessment",
    description: "Vulnerability testing, OWASP Top 10.",
  },
  {
    title: "Exploitation",
    description: "Manual testing, proof-of-concept.",
  },
  {
    title: "Analysis",
    description: "Impact assessment, risk scoring.",
  },
  {
    title: "Reporting",
    description: "Documentation, remediation guidance.",
  },
];

const securityCategories = [
  {
    title: "Web Application",
    items: ["XSS", "CSRF", "SQL Injection", "Auth bypass"],
  },
  {
    title: "API Security",
    items: ["REST APIs", "GraphQL", "Authentication", "Authorization"],
  },
  {
    title: "Business Logic",
    items: ["Workflow flaws", "Race conditions", "Payment bypass", "Privilege escalation"],
  },
  {
    title: "Infrastructure",
    items: ["Misconfigurations", "Exposed services", "Network security", "SSL/TLS"],
  },
];

const deliverables = [
  "Comprehensive penetration testing report with executive summary",
  "Detailed vulnerability findings with CVSS scores and risk ratings",
  "Proof-of-concept exploits demonstrating real-world attack scenarios",
  "Step-by-step reproduction guidance for identified vulnerabilities",
  "Business impact analysis for each security finding",
  "Prioritized remediation recommendations with technical guidance",
  "OWASP Top 10 and compliance framework mapping",
  "Screenshots and evidence of successful exploitation",
  "Network diagrams showing attack paths and exposed services",
  "Remediation verification retest (included in engagement)",
  "Security best practices and hardening recommendations",
  "Post-engagement consultation and developer support",
];

const useCases = [
  {
    title: "Pre-Production Security Testing",
    description:
      "Validate security before launching new applications, features, or infrastructure to production environments.",
  },
  {
    title: "Compliance & Audit Requirements",
    description:
      "Meet PCI DSS, ISO 27001, SOC 2, and regulatory requirements for external penetration testing and security validation.",
  },
  {
    title: "Third-Party Security Validation",
    description:
      "Independent security assessment for investors, partners, or customers requiring proof of security controls.",
  },
  {
    title: "Post-Incident Security Review",
    description:
      "Comprehensive security testing after security incidents to identify additional vulnerabilities and prevent future breaches.",
  },
];

const engagementTiers = [
  {
    title: "Targeted Black Box Test",
    description:
      "Focused penetration testing of specific applications, APIs, or services with limited scope and quick turnaround.",
    bullets: ["1-2 weeks", "Single application", "OWASP Top 10"],
  },
  {
    title: "Comprehensive Black Box Test",
    description:
      "Full-scope external penetration testing covering web applications, APIs, mobile apps, and exposed infrastructure.",
    bullets: ["3-4 weeks", "Multiple targets", "Full assessment"],
  },
  {
    title: "Continuous Security Testing",
    description:
      "Ongoing black box penetration testing with quarterly assessments, regression testing, and continuous security validation.",
    bullets: ["Quarterly", "Continuous testing", "DevSecOps integration"],
  },
];

const testingServices = [
  {
    title: "Web Application Testing",
    desc: "OWASP Top 10, injection flaws, XSS, CSRF, authentication bypasses, and session management vulnerabilities.",
  },
  {
    title: "API Security Testing",
    desc: "REST API, GraphQL, SOAP security testing including authentication, authorization, and API-specific vulnerabilities.",
  },
  {
    title: "Authentication Testing",
    desc: "Password policies, MFA, session management, account enumeration, and authentication bypass testing.",
  },
  {
    title: "Authorization Testing",
    desc: "Privilege escalation, IDOR, horizontal/vertical authorization bypasses, and access control testing.",
  },
  {
    title: "Business Logic Testing",
    desc: "Workflow flaws, race conditions, payment bypasses, and application-specific logic vulnerabilities.",
  },
  {
    title: "Input Validation Testing",
    desc: "SQL injection, NoSQL injection, command injection, LDAP injection, and XML/XXE vulnerabilities.",
  },
  {
    title: "Client-Side Testing",
    desc: "XSS, DOM-based XSS, CSRF, clickjacking, and client-side security control bypasses.",
  },
  {
    title: "Infrastructure Testing",
    desc: "Exposed services, misconfigurations, SSL/TLS issues, and network-level vulnerabilities.",
  },
  {
    title: "Mobile API Testing",
    desc: "Mobile application backend APIs, mobile-specific authentication, and API security for mobile apps.",
  },
  {
    title: "File Upload Testing",
    desc: "File upload vulnerabilities, malicious file execution, path traversal, and file-based attacks.",
  },
  {
    title: "Error Handling Testing",
    desc: "Information disclosure, stack traces, verbose error messages, and sensitive data exposure.",
  },
  {
    title: "Cryptography Testing",
    desc: "Weak encryption, insecure protocols, certificate validation, and cryptographic implementation flaws.",
  },
];

const faqs = [
  {
    question: "What is black box penetration testing and how does it work?",
    answer:
      "Black box penetration testing is a security assessment conducted without any internal knowledge of the application code, architecture, or system design. Testers are given only a target URL and legal permission, simulating how a real external attacker would approach your systems. This methodology tests your security from an outsider's perspective, identifying vulnerabilities that are exploitable without insider access. Black box testing focuses on the external attack surface, testing authentication, authorization, input validation, business logic, and infrastructure security through manual and automated techniques. It provides the most realistic assessment of how vulnerable your applications are to external threats.",
  },
  {
    question: "What's the difference between black box, white box, and gray box testing?",
    answer:
      "Black box testing has zero internal knowledge—testers only know the target URL, simulating external attackers. White box testing provides full access to source code, architecture documentation, and credentials, enabling comprehensive code review and deep technical analysis. Gray box testing falls in between, typically providing limited credentials or partial system knowledge. Black box testing is most realistic for external threats, white box is best for finding all possible vulnerabilities including logic flaws in code, and gray box balances realism with depth. Many organizations use a combination: black box for external applications, white box for critical systems, and gray box for internal applications. The choice depends on your security goals, compliance requirements, and risk profile.",
  },
  {
    question: "How long does black box penetration testing take?",
    answer:
      "Duration depends on scope and complexity. A single web application typically takes 1-2 weeks, including reconnaissance, testing, exploitation, and reporting. Multiple applications or complex environments may require 3-4 weeks. Large enterprise assessments with many targets can take 6-8 weeks. The timeline includes: initial reconnaissance (1-2 days), automated and manual testing (5-10 days), exploitation and validation (2-3 days), report preparation (2-3 days), and remediation verification retest (1-2 days). We provide detailed timeline estimates during scoping. Factors affecting duration include application complexity, authentication mechanisms, number of features, API endpoints, and custom business logic requiring manual testing.",
  },
  {
    question: "Will black box testing disrupt our production environment?",
    answer:
      "Professional black box testing is designed to minimize disruption while identifying real vulnerabilities. We use controlled exploitation techniques, avoid denial-of-service attacks unless explicitly requested, test during agreed maintenance windows if needed, and coordinate with your team throughout testing. However, some testing inherently interacts with production systems—we may create test accounts, submit forms, test APIs, and probe authentication. We establish clear rules of engagement, use safe exploitation techniques, maintain communication channels for immediate issues, and can pause testing if problems arise. Most organizations conduct black box testing in production with proper safeguards, but staging environments can be used if available. The goal is realistic testing with minimal business impact.",
  },
];

const painPoints = [
  "How vulnerable are we to external attacks?",
  "Are our applications truly secure?",
  "What can hackers actually exploit?",
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

export default function BlackBoxTestingPage() {
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
              Real-World Attack Simulation
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              Black Box Penetration Testing
            </h1>
            <p className="mt-4 text-lg text-white/80 md:text-xl">
              Discover how real attackers could exploit your systems—safely. Expert black box penetration testing replicating real-world cyber attacks without prior system knowledge.
            </p>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Comprehensive external security assessment covering web applications, APIs, and infrastructure with manual exploitation and actionable remediation guidance.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/contact?subject=services&subSubject=services&subSubject=Black%20Box%20Penetration%20Testing"
                aria-label="Request a Pentest"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <motion.span
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  whileTap={reduceMotion ? undefined : { y: 0 }}
                  className="inline-flex items-center"
                >
                  Request a Pentest
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
              title="Security testing from an attacker's perspective."
              subtitle="Realistic external attack simulation identifying exploitable vulnerabilities before hackers do."
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
              title="Testing aligned with industry frameworks."
              subtitle="Comprehensive black box testing following OWASP, SANS, and compliance requirements."
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
              title="Structured approach to black box testing."
              subtitle="We test your security systematically—from reconnaissance to exploitation and reporting."
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
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">Black box testing process</h3>
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
              title="Comprehensive black box security testing."
              subtitle="From web applications to APIs, covering all aspects of external security."
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

      {/* Security Coverage Section with Black Box Image */}
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
                title="Complete external attack surface testing."
                subtitle="We test all layers of your external security from web applications to infrastructure."
              />
              <div className="mt-8">
                <div className="relative rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-900/70">
                  <div className="pointer-events-none absolute -inset-1 rounded-[22px] bg-gradient-to-r from-violet-500/30 via-blue-600/20 to-transparent opacity-70" />
                  <div className="relative overflow-hidden rounded-2xl bg-slate-950/5 p-6 dark:bg-slate-950">
                    <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-violet-500/20 blur-2xl" />
                    <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-blue-600/20 blur-2xl" />
                    <div className="relative">
                      <Image
                        src="/assets/services/black_box.jpg"
                        alt="Black Box Penetration Testing"
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
              title="Expert-led penetration testing."
              subtitle="We combine offensive security expertise with proven methodologies and real-world attack simulation."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Offensive security experts",
                  description: "Certified penetration testers with real-world offensive security experience and deep knowledge of attack techniques.",
                  Icon: IconTarget,
                },
                {
                  title: "Manual exploitation",
                  description: "Expert-led manual testing beyond automated scanners, identifying business logic flaws and complex vulnerabilities.",
                  Icon: IconShield,
                },
                {
                  title: "Realistic attack scenarios",
                  description: "True black box methodology simulating real attackers without internal knowledge or privileged access.",
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
              title="Comprehensive penetration testing documentation."
              subtitle="Everything needed to understand and remediate identified vulnerabilities."
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
              title="Black box testing for diverse security needs."
              subtitle="Tailored penetration testing addressing unique application security challenges."
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
              title="Flexible penetration testing programs."
              subtitle="From targeted assessments to comprehensive continuous testing services."
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
              title="Common questions about black box testing."
              subtitle="Clear answers to help you understand black box penetration testing."
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
              Test your defenses before attackers do.
            </h2>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Identify real attack paths with expert-led black box penetration testing.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact?subject=services&subSubject=Black%20Box%20Penetration%20Testing"
                aria-label="Speak With a Security Expert"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Speak With a Security Expert
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
            Ready for penetration testing?
          </div>
          <Link
            href="/contact?subject=services&subSubject=Black%20Box%20Penetration%20Testing"
            aria-label="Request a Pentest"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white"
          >
            Get Started
          </Link>
        </div>
      </div>
    </motion.main>
  );
}