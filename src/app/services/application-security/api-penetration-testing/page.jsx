"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const outcomes = [
  {
    title: "Prevent data breaches",
    description:
      "Identify broken authorization, excessive data exposure, and authentication flaws before attackers exploit them.",
  },
  {
    title: "Protect business logic",
    description:
      "Uncover workflow manipulation, rate-limit bypasses, and abuse scenarios that automated scanners miss.",
  },
  {
    title: "Meet compliance requirements",
    description:
      "Demonstrate security controls aligned to OWASP API Top 10, PCI DSS, GDPR, and regulatory standards.",
  },
  {
    title: "Reduce attack surface",
    description:
      "CVSS-scored findings with business context to prioritize remediation across microservices and integrations.",
  },
];

const complianceBadges = [
  "OWASP API Top 10",
  "PCI DSS",
  "GDPR",
  "HIPAA",
  "SOC 2",
  "ISO 27001",
];

const methodology = [
  {
    title: "Discovery & Enumeration",
    description:
      "Map API endpoints, identify authentication mechanisms, and document data flows across REST, GraphQL, and SOAP.",
  },
  {
    title: "Authentication Analysis",
    description:
      "Test JWT validation, OAuth flows, API key management, and session handling for security weaknesses.",
  },
  {
    title: "Authorization Testing",
    description:
      "Validate object-level and function-level access controls through BOLA/BFLA exploitation attempts.",
  },
  {
    title: "Business Logic Validation",
    description:
      "Identify workflow manipulation, mass assignment, and rate-limit bypass scenarios with real impact.",
  },
  {
    title: "Risk Assessment & Remediation",
    description:
      "CVSS-scored findings with developer-friendly fixes and post-assessment validation support.",
  },
];

const processSteps = [
  {
    title: "Scope",
    description: "Define API inventory, authentication, and testing depth.",
  },
  {
    title: "Map",
    description: "Enumerate endpoints and document request/response flows.",
  },
  {
    title: "Test",
    description: "Execute authorization, injection, and logic abuse tests.",
  },
  {
    title: "Exploit",
    description: "Demonstrate real-world impact with proof-of-concept.",
  },
  {
    title: "Report",
    description: "Deliver prioritized findings with remediation guidance.",
  },
];

const testCategories = [
  {
    title: "Authorization",
    items: ["BOLA/IDOR", "BFLA", "Mass assignment", "Privilege escalation"],
  },
  {
    title: "Authentication",
    items: ["JWT flaws", "OAuth bypasses", "API key security", "Session handling"],
  },
  {
    title: "Data Security",
    items: ["Excessive exposure", "PII leakage", "Sensitive endpoints", "Response filtering"],
  },
  {
    title: "Injection & Input",
    items: ["SQL injection", "NoSQL injection", "Command injection", "XSS in APIs"],
  },
  {
    title: "Logic & Rate Limits",
    items: ["Workflow abuse", "Business logic", "Rate limiting", "Resource exhaustion"],
  },
];

const deliverables = [
  "Executive summary with business risk analysis",
  "Technical report with affected endpoints and parameters",
  "BOLA/BFLA findings with authorization bypass demonstrations",
  "Authentication and token handling vulnerabilities",
  "Mass assignment and excessive data exposure issues",
  "Injection vulnerabilities (SQL, NoSQL, command, XSS)",
  "Business logic abuse and workflow manipulation scenarios",
  "Rate-limit and resource exhaustion findings",
  "CVSS v3.1 risk ratings mapped to OWASP API Top 10",
  "Proof-of-concept request/response traces",
  "Developer-focused remediation guidance with code examples",
  "Retest validation report with fix verification",
];

const useCases = [
  {
    title: "Financial Services",
    description:
      "Secure payment APIs, banking integrations, and financial data endpoints against fraud and data theft.",
  },
  {
    title: "Healthcare & Telemedicine",
    description:
      "Protect patient health records and ensure HIPAA compliance for medical data APIs and integrations.",
  },
  {
    title: "E-Commerce & Retail",
    description:
      "Validate cart manipulation, payment processing, and customer data protection in commerce APIs.",
  },
  {
    title: "SaaS & Technology",
    description:
      "Secure multi-tenant APIs, third-party integrations, and microservices architectures at scale.",
  },
];

const engagementTiers = [
  {
    title: "API Security Audit",
    description:
      "Automated scanning with manual validation to identify common OWASP API Top 10 vulnerabilities.",
    bullets: ["Quick assessment", "Core endpoints", "5-7 business days"],
  },
  {
    title: "Comprehensive API Pentest",
    description:
      "Full manual testing including authorization bypass, business logic analysis, and deep exploitation.",
    bullets: ["Annual testing", "All endpoints", "Executive reporting"],
  },
  {
    title: "Continuous API Security",
    description:
      "Ongoing testing integrated into CI/CD with regression testing and security metrics tracking.",
    bullets: ["Quarterly testing", "DevSecOps ready", "Security dashboard"],
  },
];

const apiServices = [
  {
    title: "REST API Testing",
    desc: "Comprehensive security assessment of RESTful APIs including authorization, authentication, and data exposure.",
  },
  {
    title: "GraphQL API Testing",
    desc: "Query complexity analysis, introspection attacks, and authorization testing for GraphQL endpoints.",
  },
  {
    title: "SOAP & XML-RPC Testing",
    desc: "Legacy API security testing including XXE, WSDL enumeration, and SOAP injection vulnerabilities.",
  },
  {
    title: "Microservices Security",
    desc: "Inter-service authentication, service mesh security, and distributed authorization testing.",
  },
  {
    title: "Third-Party API Integration",
    desc: "Security assessment of external API dependencies, OAuth flows, and API key management.",
  },
  {
    title: "WebSocket & Real-time APIs",
    desc: "Security testing for WebSocket connections, message validation, and real-time data streams.",
  },
  {
    title: "Mobile Backend APIs",
    desc: "Mobile-specific API testing including certificate pinning bypass and device fingerprinting.",
  },
  {
    title: "API Gateway Security",
    desc: "Kong, Apigee, AWS API Gateway configuration review and security validation.",
  },
  {
    title: "Serverless API Testing",
    desc: "Lambda, Azure Functions, and Cloud Functions security assessment and IAM policy review.",
  },
];

const faqs = [
  {
    question: "What's the difference between API testing and web application testing?",
    answer:
      "API testing focuses specifically on programmatic interfaces, authentication mechanisms, authorization boundaries, and data structures. We test for API-specific vulnerabilities like BOLA, BFLA, mass assignment, and excessive data exposure that aren't typically found in traditional web app testing. API tests validate backend logic directly without the UI layer.",
  },
  {
    question: "Will testing disrupt our production APIs?",
    answer:
      "We work with your team to minimize impact through rate-limited testing, scheduled maintenance windows, and controlled test data. For production environments, we can test against staging/QA replicas or use read-only operations when possible. All testing follows safe protocols to prevent service disruption.",
  },
  {
    question: "How do you test authentication without valid credentials?",
    answer:
      "We work with your team to obtain test accounts with varying permission levels. For comprehensive testing, we need accounts representing different roles (user, admin, etc.). We can also test authentication mechanisms themselves for bypasses, token manipulation, and implementation flaws. All testing is conducted ethically with proper authorization.",
  },
  {
    question: "Do you test both internal and external APIs?",
    answer:
      "Yes, we test both internet-facing APIs and internal microservices. External API testing simulates attacks from the internet, while internal testing validates lateral movement scenarios and inter-service security. We can also assess API gateway configurations and service mesh security controls.",
  },
];

const painPoints = [
  "Are our APIs vulnerable to authorization bypasses?",
  "Can attackers access sensitive data through our endpoints?",
  "Do we meet OWASP API security standards?",
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

const IconApi = ({ className }) => (
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
    <path d="M4 12h16M12 4v16M8 8l-4 4 4 4M16 8l4 4-4 4" />
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

const APISecurityIllustration = () => (
  <svg viewBox="0 0 420 320" className="h-full w-full" aria-hidden="true">
    <defs>
      <linearGradient id="api-panel" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#0f172a" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
      </linearGradient>
      <linearGradient id="api-pulse" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#60a5fa" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
    {/* Central API node */}
    <circle cx="210" cy="160" r="45" fill="url(#api-panel)" stroke="#94a3b8" strokeOpacity="0.4" strokeWidth="2" />
    <text x="210" y="165" fontSize="16" fill="#60a5fa" fontFamily="monospace" textAnchor="middle" fontWeight="bold">API</text>
    
    {/* Connecting nodes */}
    <circle cx="80" cy="80" r="30" fill="url(#api-pulse)" fillOpacity="0.2" stroke="#60a5fa" strokeWidth="2" />
    <circle cx="340" cy="80" r="30" fill="url(#api-pulse)" fillOpacity="0.2" stroke="#60a5fa" strokeWidth="2" />
    <circle cx="80" cy="240" r="30" fill="url(#api-pulse)" fillOpacity="0.2" stroke="#60a5fa" strokeWidth="2" />
    <circle cx="340" cy="240" r="30" fill="url(#api-pulse)" fillOpacity="0.2" stroke="#60a5fa" strokeWidth="2" />
    
    {/* Connection lines */}
    <path d="M105 95L175 140" stroke="#94a3b8" strokeOpacity="0.5" strokeDasharray="4 6" strokeWidth="2" />
    <path d="M315 95L245 140" stroke="#94a3b8" strokeOpacity="0.5" strokeDasharray="4 6" strokeWidth="2" />
    <path d="M105 225L175 180" stroke="#94a3b8" strokeOpacity="0.5" strokeDasharray="4 6" strokeWidth="2" />
    <path d="M315 225L245 180" stroke="#94a3b8" strokeOpacity="0.5" strokeDasharray="4 6" strokeWidth="2" />
    
    {/* Lock icons on nodes */}
    <g transform="translate(70, 70)">
      <rect x="0" y="5" width="20" height="15" rx="2" stroke="#60a5fa" strokeWidth="1.5" fill="none" />
      <path d="M5 5v-3a5 5 0 0110 0v3" stroke="#60a5fa" strokeWidth="1.5" fill="none" />
    </g>
    
    <g transform="translate(330, 70)">
      <rect x="0" y="5" width="20" height="15" rx="2" stroke="#8b5cf6" strokeWidth="1.5" fill="none" />
      <path d="M5 5v-3a5 5 0 0110 0v3" stroke="#8b5cf6" strokeWidth="1.5" fill="none" />
    </g>
  </svg>
);

export default function APIPenTestingPage() {
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
          <div className="absolute -left-20 top-20 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute -right-24 bottom-6 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />
        </div>

        <Container className="relative z-10 flex min-h-[86vh] flex-col justify-center">
          <motion.div variants={fadeUp} className="max-w-3xl">
            <h1 className="mt-16 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              Secure your APIs before attackers find authorization bypasses.
            </h1>
            <p className="mt-4 text-lg text-white/80 md:text-xl">
              Comprehensive API security testing that exposes broken object-level authorization, authentication flaws, excessive data exposure, and business logic vulnerabilities across REST, GraphQL, and SOAP endpoints.
            </p>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Expert-led testing aligned to OWASP API Security Top 10 with manual exploitation to validate real-world impact.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/contact?subject=services&subSubject=API%20Security%20Assessment"
                aria-label="Request API Security Assessment"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <motion.span
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  whileTap={reduceMotion ? undefined : { y: 0 }}
                  className="inline-flex items-center"
                >
                  Request API Assessment
                </motion.span>
              </Link>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12 max-w-4xl">
            <div className="grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80 md:grid-cols-3">
              {painPoints.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
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
              title="API security that protects data and prevents unauthorized access."
              subtitle="Identify and fix authorization, authentication, and logic flaws before they lead to breaches."
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
                        <IconApi className="h-5 w-5" />
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
              title="Testing aligned to API security frameworks and regulations."
              subtitle="Demonstrate security controls for OWASP API Top 10 compliance and regulatory requirements."
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
              title="Attacker-centric API testing that validates real security controls."
              subtitle="We test APIs the way attackers do—mapping endpoints, exploiting authorization gaps, and validating business logic."
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
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">Testing process</h3>
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
              title="Complete API security coverage across protocols and architectures."
              subtitle="From REST to GraphQL, microservices to serverless—we test every API type."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {apiServices.map((item) => (
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
                eyebrow="Testing Coverage"
                title="Comprehensive analysis of API-specific attack vectors."
                subtitle="We test the vulnerabilities that lead to data theft, account takeover, and business logic abuse."
              />
              <div className="mt-8">
                <div className="relative rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-900/70">
                  <div className="pointer-events-none absolute -inset-1 rounded-[22px] bg-gradient-to-r from-blue-500/30 via-violet-500/20 to-transparent opacity-70" />
                  <div className="relative overflow-hidden rounded-2xl bg-slate-950/5 p-4 dark:bg-slate-950">
                    <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-blue-500/20 blur-2xl" />
                    <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-violet-500/20 blur-2xl" />
                    <APISecurityIllustration />
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
              title="Expert API security testing that finds what scanners miss."
              subtitle="Automated tools can't validate authorization logic or business workflows—our experts can."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "OWASP API expertise",
                  description: "Our testers specialize in BOLA, BFLA, mass assignment, and API-specific attack patterns that require manual validation.",
                  Icon: IconShield,
                },
                {
                  title: "Zero false positives",
                  description: "Every finding is validated with working proof-of-concept requests demonstrating actual exploitability.",
                  Icon: IconLock,
                },
                {
                  title: "Developer-focused fixes",
                  description: "Clear remediation guidance with code examples, framework-specific recommendations, and validation support.",
                  Icon: IconApi,
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
              title="Comprehensive API security documentation and remediation guidance."
              subtitle="From executive summaries to request-level proof-of-concepts, we provide actionable intelligence."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {deliverables.map((item) => (
                <motion.div key={item} variants={fadeUp}>
                  <Card>
                    <div className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
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
              title="Specialized API testing for regulated and high-risk environments."
              subtitle="Industry-specific threat modeling and compliance-focused API security assessments."
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
              title="Flexible API security programs for every development stage."
              subtitle="From quick audits to continuous security validation integrated into your CI/CD pipeline."
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
              title="Common questions about API penetration testing."
              subtitle="Clear answers to help you understand our API security testing approach."
            />
            <div className="mt-8 space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-slate-200/70 bg-white/80 p-5 dark:border-slate-800/70 dark:bg-slate-900/70"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between text-left text-sm font-semibold text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-white"
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
              Secure your APIs before authorization bypasses lead to breaches.
            </h2>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Get expert API security testing with zero false positives and developer-focused remediation guidance.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact?subject=services&subSubject=API%20Security%20Assessment"
                aria-label="Request API Security Assessment"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Request API Assessment
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
            Ready to secure your APIs?
          </div>
          <Link
            href="/contact?subject=services&subSubject=API%20Security%20Assessment"
            aria-label="Request API Security Assessment"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white"
          >
            Request Assessment
          </Link>
        </div>
      </div>
    </motion.main>
  );
}