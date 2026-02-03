"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const outcomes = [
  {
    title: "Prevent data breaches",
    description:
      "Identify insecure data storage, weak encryption, and authentication flaws before attackers exploit them.",
  },
  {
    title: "Accelerate secure releases",
    description:
      "Catch vulnerabilities early in the SDLC to avoid costly post-release patches and emergency fixes.",
  },
  {
    title: "Meet compliance requirements",
    description:
      "Demonstrate security controls aligned to OWASP MASVS, PCI DSS, GDPR, HIPAA, and industry standards.",
  },
  {
    title: "Reduce business risk",
    description:
      "CVSS-scored findings with business impact analysis to prioritize remediation on critical issues.",
  },
];

const complianceBadges = [
  "OWASP MASVS",
  "PCI DSS",
  "GDPR",
  "HIPAA",
  "NIST",
  "ISO 27001",
];

const methodology = [
  {
    title: "Reconnaissance & Mapping",
    description:
      "Analyze application architecture, identify entry points, map API endpoints, and understand data flows.",
  },
  {
    title: "Static & Dynamic Analysis",
    description:
      "Reverse engineer binaries, decompile code, and perform runtime manipulation to uncover hidden vulnerabilities.",
  },
  {
    title: "Exploitation & Validation",
    description:
      "Demonstrate real-world impact through proof-of-concept attacks on authentication, APIs, and business logic.",
  },
  {
    title: "Risk Assessment & Reporting",
    description:
      "CVSS-scored findings mapped to OWASP Mobile Top 10 with detailed remediation guidance.",
  },
  {
    title: "Developer Support",
    description:
      "Technical workshops and on-call expert assistance to verify fixes and close security gaps.",
  },
];

const processSteps = [
  {
    title: "Scope",
    description: "Define platforms, features, and testing depth.",
  },
  {
    title: "Analyze",
    description: "Static code review and binary reverse engineering.",
  },
  {
    title: "Test",
    description: "Runtime manipulation and API security validation.",
  },
  {
    title: "Exploit",
    description: "Controlled demonstrations of real-world impact.",
  },
  {
    title: "Report",
    description: "Deliver findings with developer-friendly remediation.",
  },
];

const testCategories = [
  {
    title: "Data Security",
    items: ["Local storage", "Keychain/Keystore", "SQLite databases", "File permissions"],
  },
  {
    title: "Authentication & Sessions",
    items: ["Biometric bypass", "Token validation", "Session management", "OAuth flows"],
  },
  {
    title: "Network & APIs",
    items: ["TLS pinning", "API authorization", "Insecure comms", "Backend logic"],
  },
  {
    title: "Platform Security",
    items: ["Jailbreak detection", "Code obfuscation", "IPC mechanisms", "WebView security"],
  },
  {
    title: "Business Logic",
    items: ["Payment flows", "Premium features", "Entitlement checks", "Rate limiting"],
  },
];

const deliverables = [
  "Executive summary with business risk analysis",
  "Technical report with proof-of-concept evidence",
  "CVSS v3.1 risk ratings and OWASP Mobile Top 10 mapping",
  "Detailed remediation guidance for developers",
  "Screen recordings and traffic captures",
  "Source code references and affected components",
  "Compliance mapping to MASVS and regulatory frameworks",
  "Attack path visualizations and exploit chains",
  "Retest validation report with fix verification",
  "Developer security workshop (optional)",
  "30-day post-assessment expert support",
  "Secure coding recommendations and best practices",
];

const useCases = [
  {
    title: "Financial Services",
    description:
      "Secure mobile banking apps, payment gateways, and customer portals against fraud and data theft.",
  },
  {
    title: "Healthcare & Telemedicine",
    description:
      "Protect patient health records (PHI) and ensure HIPAA compliance for clinical mobile apps.",
  },
  {
    title: "E-Commerce & Retail",
    description:
      "Validate payment processing security and prevent customer data breaches in shopping apps.",
  },
  {
    title: "Enterprise & SaaS",
    description:
      "Secure corporate mobile apps with SSO, MDM integration, and multi-tenant data isolation.",
  },
];

const engagementTiers = [
  {
    title: "Quick Security Audit",
    description:
      "Automated scanning with manual validation to identify common vulnerabilities and quick wins.",
    bullets: ["Pre-release checks", "OWASP coverage", "5-7 business days"],
  },
  {
    title: "Comprehensive Penetration Test",
    description:
      "Full manual testing including reverse engineering, runtime exploitation, and business logic analysis.",
    bullets: ["Annual assessment", "Zero false positives", "Executive reporting"],
  },
  {
    title: "Continuous Security Program",
    description:
      "Ongoing testing throughout development lifecycle with regression testing and security metrics.",
    bullets: ["Quarterly testing", "DevSecOps integration", "Security dashboard"],
  },
];

const mobileServices = [
  {
    title: "iOS Application Testing",
    desc: "Jailbreak detection bypass, Keychain analysis, and Swift/Objective-C reverse engineering.",
  },
  {
    title: "Android Application Testing",
    desc: "Root detection bypass, runtime manipulation with Frida, and Kotlin/Java code analysis.",
  },
  {
    title: "API Security Testing",
    desc: "REST, GraphQL, and WebSocket testing for broken authentication and data exposure.",
  },
  {
    title: "Backend Security Review",
    desc: "Server-side logic testing, database security, and cloud infrastructure assessment.",
  },
  {
    title: "Binary Analysis",
    desc: "Reverse engineering, code obfuscation review, and hardcoded secrets detection.",
  },
  {
    title: "Runtime Instrumentation",
    desc: "Dynamic testing with Frida, objection, and custom hooks to bypass security controls.",
  },
  {
    title: "Network Traffic Analysis",
    desc: "TLS/SSL validation, certificate pinning bypass, and man-in-the-middle testing.",
  },
  {
    title: "Business Logic Testing",
    desc: "Payment flow manipulation, privilege escalation, and feature unlock bypasses.",
  },
  {
    title: "Third-Party SDK Analysis",
    desc: "Assess security risks from integrated libraries, SDKs, and analytics frameworks.",
  },
];

const faqs = [
  {
    question: "What's the difference between mobile app testing and web app testing?",
    answer:
      "Mobile app testing requires reverse engineering compiled binaries, analyzing local data storage, testing platform-specific security controls (Keychain, Biometrics), and validating mobile-specific attack vectors like IPC exploitation and runtime manipulation. Web testing focuses on server-side vulnerabilities and browser-based attacks.",
  },
  {
    question: "Will testing affect our app store presence or user experience?",
    answer:
      "All testing is conducted in controlled environments using development builds or TestFlight/beta versions. We never test production apps without explicit authorization. Our testing methodology ensures zero impact on live users and app store ratings.",
  },
  {
    question: "Do we need to provide source code?",
    answer:
      "Source code access enables more comprehensive testing (white box), but we can perform effective security assessments with just the compiled binary (black box). Grey box testing with partial source code access offers the best balance of depth and efficiency.",
  },
  {
    question: "How do you handle sensitive data during mobile app testing?",
    answer:
      "All testers sign NDAs and follow strict data handling protocols. We can work with sanitized test data or production data under controlled conditions. Test evidence is encrypted and permanently destroyed after engagement completion. All findings are delivered through secure channels.",
  },
];

const painPoints = [
  "Is our mobile app vulnerable to data theft?",
  "Can attackers bypass our authentication?",
  "Are we compliant with mobile security standards?",
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

const IconMobile = ({ className }) => (
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
    <rect x="7" y="2" width="10" height="20" rx="2" />
    <path d="M12 18h.01" />
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

const MobileSecurityIllustration = () => (
  <svg viewBox="0 0 420 320" className="h-full w-full" aria-hidden="true">
    <defs>
      <linearGradient id="mobile-panel" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#0f172a" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#6366f1" stopOpacity="0.2" />
      </linearGradient>
      <linearGradient id="mobile-pulse" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    {/* Mobile device outline */}
    <rect x="140" y="20" width="140" height="260" rx="18" fill="url(#mobile-panel)" stroke="#94a3b8" strokeOpacity="0.4" strokeWidth="2" />
    {/* Screen */}
    <rect x="155" y="50" width="110" height="190" rx="8" fill="#0f172a" fillOpacity="0.2" />
    {/* Lock icon */}
    <circle cx="210" cy="130" r="25" fill="url(#mobile-pulse)" fillOpacity="0.2" />
    <rect x="200" y="125" width="20" height="15" rx="2" stroke="#8b5cf6" strokeWidth="2" fill="none" />
    <path d="M205 125v-5a5 5 0 0110 0v5" stroke="#8b5cf6" strokeWidth="2" fill="none" />
    {/* Status indicators */}
    <circle cx="80" cy="140" r="18" fill="#0f172a" fillOpacity="0.08" stroke="#94a3b8" strokeOpacity="0.4" />
    <circle cx="340" cy="140" r="18" fill="#0f172a" fillOpacity="0.08" stroke="#94a3b8" strokeOpacity="0.4" />
    {/* Connection lines */}
    <path d="M98 140h37M283 140h39" stroke="#94a3b8" strokeOpacity="0.5" strokeDasharray="4 6" />
    {/* Code symbols */}
    <text x="70" y="145" fontSize="14" fill="#8b5cf6" fontFamily="monospace">&lt;/&gt;</text>
    <text x="330" y="145" fontSize="14" fill="#3b82f6" fontFamily="monospace">{ }</text>
  </svg>
);

export default function MobileAppSecurityPage() {
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
          <div className="absolute -left-20 top-20 h-56 w-56 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="absolute -right-24 bottom-6 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
        </div>

        <Container className="relative z-10 flex min-h-[86vh] flex-col justify-center">
          <motion.div variants={fadeUp} className="max-w-3xl">
            <h1 className="mt-16 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              Secure your mobile apps before attackers find the vulnerabilities.
            </h1>
            <p className="mt-4 text-lg text-white/80 md:text-xl">
              Comprehensive mobile application security testing that uncovers insecure data storage, authentication bypasses, API flaws, and business logic vulnerabilities across iOS and Android platforms.
            </p>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Expert-led testing combining reverse engineering, runtime manipulation, and OWASP MASVS validation to prevent data breaches and ensure compliance.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/contact?subject=Mobile%20App%20Security%20Assessment"
                aria-label="Request Mobile Security Assessment"
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
              title="Mobile security that protects data and accelerates delivery."
              subtitle="Identify and fix vulnerabilities before they reach production and expose sensitive user data."
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
                        <IconMobile className="h-5 w-5" />
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
              title="Testing aligned to mobile security frameworks and regulations."
              subtitle="Demonstrate security controls for auditors, app stores, and regulatory compliance requirements."
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
              title="Attacker-centric testing that mirrors real-world threats."
              subtitle="We think like attackers—reverse engineering binaries, manipulating runtime behavior, and exploiting trust boundaries."
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
              title="Complete mobile security coverage for iOS and Android."
              subtitle="From binary reverse engineering to backend API testing, we assess every attack vector."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {mobileServices.map((item) => (
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
                title="Comprehensive analysis of mobile-specific attack vectors."
                subtitle="We test the vulnerabilities that lead to data theft, account takeover, and unauthorized access."
              />
              <div className="mt-8">
                <div className="relative rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-900/70">
                  <div className="pointer-events-none absolute -inset-1 rounded-[22px] bg-gradient-to-r from-violet-500/30 via-blue-500/20 to-transparent opacity-70" />
                  <div className="relative overflow-hidden rounded-2xl bg-slate-950/5 p-4 dark:bg-slate-950">
                    <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-violet-500/20 blur-2xl" />
                    <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-blue-500/20 blur-2xl" />
                    <MobileSecurityIllustration />
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
              title="Expert mobile security testing that goes beyond automated tools."
              subtitle="Real attackers reverse engineer your app and exploit runtime behavior—our testing mirrors those techniques."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Deep technical expertise",
                  description: "Our testers are experts in iOS and Android internals, reverse engineering, and mobile exploitation frameworks.",
                  Icon: IconCode,
                },
                {
                  title: "Zero false positives",
                  description: "Every vulnerability is manually validated with working proof-of-concept demonstrations and reproducible steps.",
                  Icon: IconShield,
                },
                {
                  title: "Developer-focused remediation",
                  description: "Clear fix guidance with code snippets, platform-specific recommendations, and post-fix validation support.",
                  Icon: IconMobile,
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
              title="Comprehensive documentation for developers and executives."
              subtitle="From technical remediation guides to business risk summaries, we provide actionable intelligence."
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
              eyebrow="Industry Applications"
              title="Specialized testing for regulated mobile environments."
              subtitle="Industry-specific threat modeling and compliance-focused mobile security assessments."
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
              title="Flexible testing programs for every development stage."
              subtitle="From pre-launch audits to continuous security validation throughout your release cycle."
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
              title="Common questions about mobile security testing."
              subtitle="Clear answers to help you understand our mobile app penetration testing approach."
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
              Secure your mobile apps before they reach millions of users.
            </h2>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Get expert mobile security testing with zero false positives and actionable developer-focused remediation.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact?subject=Mobile%20App%20Security%20Assessment"
                aria-label="Request Mobile Security Assessment"
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
            Ready to secure your mobile apps?
          </div>
          <Link
            href="/contact?subject=Mobile%20App%20Security%20Assessment"
            aria-label="Request Mobile Security Assessment"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white"
          >
            Request Assessment
          </Link>
        </div>
      </div>
    </motion.main>
  );
}