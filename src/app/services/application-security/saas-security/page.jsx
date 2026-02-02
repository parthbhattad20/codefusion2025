"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const outcomes = [
  {
    title: "Protect multi-tenant data",
    description:
      "Identify tenant isolation flaws, broken access controls, and data leakage vulnerabilities before they impact thousands of customers.",
  },
  {
    title: "Prevent account takeover",
    description:
      "Uncover authentication bypasses, session management flaws, and privilege escalation risks in SaaS platforms.",
  },
  {
    title: "Meet compliance requirements",
    description:
      "Demonstrate security controls aligned to SOC 2, ISO 27001, GDPR, and industry-specific compliance frameworks.",
  },
  {
    title: "Build customer trust",
    description:
      "CVSS-scored findings with business impact analysis to prioritize fixes that protect customer data and brand reputation.",
  },
];

const complianceBadges = [
  "SOC 2",
  "ISO 27001",
  "GDPR",
  "HIPAA",
  "PCI DSS",
  "CCPA",
];

const methodology = [
  {
    title: "Architecture & Tenant Isolation Review",
    description:
      "Analyze multi-tenant architecture, data segregation controls, and shared resource security mechanisms.",
  },
  {
    title: "Authentication & Authorization Testing",
    description:
      "Test SSO integration, RBAC implementation, API authentication, and privilege escalation scenarios.",
  },
  {
    title: "Business Logic & Subscription Security",
    description:
      "Identify billing manipulation, feature unlock bypasses, and subscription management vulnerabilities.",
  },
  {
    title: "API & Integration Security",
    description:
      "Assess REST/GraphQL APIs, third-party integrations, webhooks, and OAuth flow security.",
  },
  {
    title: "Risk Assessment & Remediation",
    description:
      "CVSS-scored findings with customer impact analysis and prioritized remediation guidance for development teams.",
  },
];

const processSteps = [
  {
    title: "Scope",
    description: "Define platform features, user roles, and testing depth.",
  },
  {
    title: "Map",
    description: "Enumerate tenants, APIs, and integration points.",
  },
  {
    title: "Test",
    description: "Execute isolation, RBAC, and business logic tests.",
  },
  {
    title: "Exploit",
    description: "Demonstrate cross-tenant impact with proof-of-concept.",
  },
  {
    title: "Report",
    description: "Deliver findings with SOC 2 compliance mapping.",
  },
];

const testCategories = [
  {
    title: "Tenant Isolation",
    items: ["Data segregation", "Cross-tenant access", "Shared resources", "Database isolation"],
  },
  {
    title: "Authentication & SSO",
    items: ["SAML/OAuth flaws", "MFA bypass", "Session hijacking", "Account takeover"],
  },
  {
    title: "Authorization & RBAC",
    items: ["Privilege escalation", "Role manipulation", "Feature access", "Admin bypass"],
  },
  {
    title: "Subscription & Billing",
    items: ["Plan manipulation", "Feature unlocking", "Billing bypass", "Trial abuse"],
  },
  {
    title: "API & Integrations",
    items: ["API authorization", "Webhook security", "OAuth tokens", "Third-party risks"],
  },
];

const deliverables = [
  "Executive summary with customer impact analysis",
  "Technical report with SaaS-specific vulnerabilities",
  "Tenant isolation and data segregation findings",
  "Authentication and SSO integration security issues",
  "Role-based access control (RBAC) vulnerabilities",
  "Subscription and billing logic manipulation scenarios",
  "API security and integration vulnerabilities",
  "Business logic flaws and feature unlock bypasses",
  "Session management and account takeover risks",
  "CVSS v3.1 risk ratings with multi-tenant impact assessment",
  "SOC 2 and ISO 27001 requirement mapping",
  "Developer-focused remediation with framework-specific guidance",
];

const useCases = [
  {
    title: "B2B SaaS Platforms",
    description:
      "Secure enterprise SaaS applications with complex RBAC, SSO integration, and multi-organization tenancy.",
  },
  {
    title: "Collaboration & Productivity",
    description:
      "Protect shared workspaces, document collaboration, and team communication platforms from cross-tenant leaks.",
  },
  {
    title: "CRM & Marketing Automation",
    description:
      "Validate customer data isolation, campaign security, and integration security for marketing platforms.",
  },
  {
    title: "Financial & Analytics SaaS",
    description:
      "Secure sensitive financial data, reporting dashboards, and API access in analytics and fintech platforms.",
  },
];

const engagementTiers = [
  {
    title: "Pre-Launch Security Audit",
    description:
      "Comprehensive testing before GA release to identify critical tenant isolation and authentication flaws.",
    bullets: ["New platforms", "SOC 2 readiness", "2-3 weeks"],
  },
  {
    title: "Annual Security Assessment",
    description:
      "Full penetration test covering multi-tenancy, APIs, and integrations with SOC 2 compliance validation.",
    bullets: ["Yearly compliance", "Full coverage", "Executive reporting"],
  },
  {
    title: "Continuous SaaS Security",
    description:
      "Ongoing testing aligned to release cycles with regression testing and security metrics tracking.",
    bullets: ["Per-release testing", "Feature launch prep", "Security dashboard"],
  },
];

const saasServices = [
  {
    title: "Multi-Tenant Architecture Security",
    desc: "Tenant isolation testing, data segregation validation, and shared resource security assessment.",
  },
  {
    title: "SSO & Identity Integration",
    desc: "SAML, OAuth 2.0, OpenID Connect testing including IdP integration and federation security.",
  },
  {
    title: "RBAC & Permission Systems",
    desc: "Role-based access control testing, privilege escalation, and organizational hierarchy security.",
  },
  {
    title: "Subscription & Billing Security",
    desc: "Plan manipulation, feature gating, trial abuse, and payment integration vulnerability testing.",
  },
  {
    title: "SaaS API Security",
    desc: "REST, GraphQL, and WebSocket API testing for multi-tenant authorization and data exposure.",
  },
  {
    title: "Webhook & Integration Security",
    desc: "Third-party integration security, webhook validation, and OAuth token management testing.",
  },
  {
    title: "Admin Panel & Super User Testing",
    desc: "Administrative interface security, super admin privilege testing, and tenant management controls.",
  },
  {
    title: "Data Export & Portability",
    desc: "Data export functionality testing to prevent cross-tenant data leakage and unauthorized access.",
  },
  {
    title: "SaaS Mobile App Security",
    desc: "Mobile client security for SaaS platforms including offline data storage and sync mechanisms.",
  },
];

const faqs = [
  {
    question: "What makes SaaS security testing different from web app testing?",
    answer:
      "SaaS security requires specific focus on multi-tenant isolation, where a vulnerability could expose data from thousands of customers simultaneously. We test tenant boundaries, shared resource access, organization hierarchies, and cross-tenant data leakage scenarios that don't exist in single-tenant applications. We also assess subscription logic, feature gating, and SSO integrations critical to SaaS platforms.",
  },
  {
    question: "How do you test without accessing customer data?",
    answer:
      "We work with test accounts across multiple tenant environments to validate isolation controls. Testing is conducted using synthetic data and test organizations. We never access production customer data without explicit authorization and documented approval. All testing follows strict data handling protocols aligned to your compliance requirements.",
  },
  {
    question: "Can you help with SOC 2 compliance?",
    answer:
      "While we're not SOC 2 auditors, our testing directly supports your SOC 2 compliance program by identifying vulnerabilities in security controls that map to SOC 2 Trust Service Criteria. We provide evidence of security testing, vulnerability findings, and remediation documentation that your auditors can review. Our reports include explicit SOC 2 requirement mapping.",
  },
  {
    question: "Do you test SSO and identity federation?",
    answer:
      "Yes, SSO security is critical for SaaS platforms. We test SAML, OAuth 2.0, and OpenID Connect implementations for authentication bypasses, token manipulation, and federation vulnerabilities. We also assess Just-In-Time (JIT) provisioning, SCIM integration, and identity provider configuration security.",
  },
];

const painPoints = [
  "Are different tenants' data properly isolated?",
  "Can users access features they haven't paid for?",
  "Are we SOC 2 compliant?",
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

const IconCloud = ({ className }) => (
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
    <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
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
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
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

const SaaSSecurityIllustration = () => (
  <svg viewBox="0 0 420 320" className="h-full w-full" aria-hidden="true">
    <defs>
      <linearGradient id="saas-panel" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#0f172a" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#6366f1" stopOpacity="0.2" />
      </linearGradient>
      <linearGradient id="saas-pulse" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#818cf8" />
        <stop offset="100%" stopColor="#c084fc" />
      </linearGradient>
    </defs>
    {/* Central cloud */}
    <ellipse cx="210" cy="140" rx="70" ry="50" fill="url(#saas-panel)" stroke="#94a3b8" strokeOpacity="0.4" strokeWidth="2" />
    <ellipse cx="180" cy="130" rx="50" ry="35" fill="url(#saas-pulse)" fillOpacity="0.2" />
    <text x="210" y="145" fontSize="14" fill="#6366f1" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">SaaS</text>
    
    {/* Tenant nodes */}
    <circle cx="80" cy="80" r="28" fill="url(#saas-pulse)" fillOpacity="0.2" stroke="#818cf8" strokeWidth="2" />
    <circle cx="340" cy="80" r="28" fill="url(#saas-pulse)" fillOpacity="0.2" stroke="#818cf8" strokeWidth="2" />
    <circle cx="80" cy="240" r="28" fill="url(#saas-pulse)" fillOpacity="0.2" stroke="#c084fc" strokeWidth="2" />
    <circle cx="340" cy="240" r="28" fill="url(#saas-pulse)" fillOpacity="0.2" stroke="#c084fc" strokeWidth="2" />
    
    {/* Tenant labels */}
    <text x="80" y="85" fontSize="10" fill="#818cf8" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">T1</text>
    <text x="340" y="85" fontSize="10" fill="#818cf8" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">T2</text>
    <text x="80" y="245" fontSize="10" fill="#c084fc" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">T3</text>
    <text x="340" y="245" fontSize="10" fill="#c084fc" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">T4</text>
    
    {/* Connection lines */}
    <path d="M108 90L150 125" stroke="#94a3b8" strokeOpacity="0.5" strokeDasharray="4 6" strokeWidth="2" />
    <path d="M312 90L250 125" stroke="#94a3b8" strokeOpacity="0.5" strokeDasharray="4 6" strokeWidth="2" />
    <path d="M108 230L150 155" stroke="#94a3b8" strokeOpacity="0.5" strokeDasharray="4 6" strokeWidth="2" />
    <path d="M312 230L250 155" stroke="#94a3b8" strokeOpacity="0.5" strokeDasharray="4 6" strokeWidth="2" />
    
    {/* Security shield */}
    <g transform="translate(195, 100)">
      <circle cx="15" cy="15" r="20" fill="url(#saas-pulse)" fillOpacity="0.3" />
      <path d="M15 3l12 6v10c0 8-5 13-12 15-7-2-12-7-12-15V9l12-6z" stroke="#10b981" strokeWidth="2" fill="none" />
      <path d="M10 14l3 3 6-7" stroke="#10b981" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

export default function SaaSSecurityPage() {
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
          <div className="absolute -left-20 top-20 h-56 w-56 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="absolute -right-24 bottom-6 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
        </div>

        <Container className="relative z-10 flex min-h-[86vh] flex-col justify-center">
          <motion.div variants={fadeUp} className="max-w-3xl">
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              Secure your SaaS platform before tenant isolation fails.
            </h1>
            <p className="mt-4 text-lg text-white/80 md:text-xl">
              Comprehensive SaaS security testing that protects multi-tenant data, validates authentication and authorization, and prevents cross-tenant access vulnerabilities that could impact thousands of customers.
            </p>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Expert-led testing aligned to SOC 2 and ISO 27001 with multi-tenant architecture validation and business logic security.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/contact"
                aria-label="Request SaaS Security Assessment"
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
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
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
              title="SaaS security that protects thousands of customers simultaneously."
              subtitle="Identify tenant isolation, authentication, and authorization vulnerabilities before they lead to mass data breaches."
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
                        <IconCloud className="h-5 w-5" />
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
              title="Testing aligned to SaaS compliance and trust frameworks."
              subtitle="Demonstrate security controls for SOC 2, ISO 27001, and customer security questionnaires."
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
              title="Multi-tenant security testing focused on isolation and access control."
              subtitle="We test SaaS platforms the way attackers do—targeting tenant boundaries, shared resources, and privilege escalation."
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
              title="Comprehensive security coverage for SaaS platforms."
              subtitle="From tenant isolation to SSO integration, we test every critical SaaS security control."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {saasServices.map((item) => (
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
                title="Comprehensive analysis of SaaS-specific attack vectors."
                subtitle="We test the vulnerabilities that lead to cross-tenant data breaches and mass account compromise."
              />
              <div className="mt-8">
                <div className="relative rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-900/70">
                  <div className="pointer-events-none absolute -inset-1 rounded-[22px] bg-gradient-to-r from-indigo-500/30 via-purple-500/20 to-transparent opacity-70" />
                  <div className="relative overflow-hidden rounded-2xl bg-slate-950/5 p-4 dark:bg-slate-950">
                    <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-indigo-500/20 blur-2xl" />
                    <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-purple-500/20 blur-2xl" />
                    <SaaSSecurityIllustration />
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
              title="SaaS expertise that protects your entire customer base."
              subtitle="We understand multi-tenancy—from data isolation to SSO integration to subscription security."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Multi-tenant specialization",
                  description: "Our testers understand tenant isolation, shared resource security, and the unique challenges of protecting thousands of customers with a single vulnerability.",
                  Icon: IconUsers,
                },
                {
                  title: "SOC 2 alignment",
                  description: "Testing mapped to SOC 2 Trust Service Criteria with evidence packages that support your compliance program and audits.",
                  Icon: IconShield,
                },
                {
                  title: "Business impact focus",
                  description: "Clear guidance on customer impact, data exposure risk, and revenue consequences to prioritize remediation effectively.",
                  Icon: IconCloud,
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
              title="Comprehensive reports with customer impact analysis."
              subtitle="From executive summaries to SOC 2 compliance evidence, we provide actionable intelligence."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {deliverables.map((item) => (
                <motion.div key={item} variants={fadeUp}>
                  <Card>
                    <div className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
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
              title="Specialized testing for diverse SaaS verticals."
              subtitle="Industry-specific threat modeling and compliance-focused security assessments."
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
              title="Flexible security programs for every SaaS maturity stage."
              subtitle="From pre-launch to enterprise scale, we adapt to your SaaS platform needs."
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
              title="Common questions about SaaS security testing."
              subtitle="Clear answers to help you understand our approach to protecting multi-tenant platforms."
            />
            <div className="mt-8 space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-slate-200/70 bg-white/80 p-5 dark:border-slate-800/70 dark:bg-slate-900/70"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between text-left text-sm font-semibold text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:text-white"
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
              Protect your customers before tenant isolation fails.
            </h2>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Get expert SaaS security testing with SOC 2 validation and multi-tenant architecture expertise.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                aria-label="Request SaaS Security Assessment"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Request Security Assessment
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
            Ready to secure your SaaS?
          </div>
          <Link
            href="/contact"
            aria-label="Request SaaS Security Assessment"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white"
          >
            Request Assessment
          </Link>
        </div>
      </div>
    </motion.main>
  );
}