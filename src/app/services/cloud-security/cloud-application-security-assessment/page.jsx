"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const outcomes = [
  {
    title: "Identify cloud misconfigurations",
    description:
      "Discover configuration weaknesses, insecure defaults, and policy gaps across cloud-hosted applications before they're exploited.",
  },
  {
    title: "Validate security architecture",
    description:
      "Assess cloud application design, authentication flows, API security, and integration patterns against security best practices.",
  },
  {
    title: "Reduce cloud attack surface",
    description:
      "Minimize exposure through comprehensive analysis of access controls, network configurations, and data protection mechanisms.",
  },
  {
    title: "Accelerate secure cloud adoption",
    description:
      "Enable confident cloud migration and application deployment with validated security controls and compliance alignment.",
  },
];

const complianceBadges = [
  "CASA Framework",
  "OWASP Top 10",
  "CIS Benchmarks",
  "NIST CSF",
  "ISO 27017",
  "SOC 2",
];

const methodology = [
  {
    title: "Cloud Architecture Review",
    description:
      "Analyze cloud application architecture, deployment models, service configurations, and integration patterns for security risks.",
  },
  {
    title: "Configuration & Policy Assessment",
    description:
      "Evaluate IAM policies, network configurations, encryption settings, secrets management, and compliance with security baselines.",
  },
  {
    title: "Application Security Testing",
    description:
      "Conduct authentication/authorization testing, API security validation, dependency analysis, and vulnerability scanning.",
  },
  {
    title: "Data Protection Analysis",
    description:
      "Assess encryption implementations, data classification, access controls, backup strategies, and data residency compliance.",
  },
  {
    title: "Risk Prioritization & Remediation",
    description:
      "Deliver prioritized findings with risk ratings, remediation guidance, and security improvement roadmap for cloud applications.",
  },
];

const processSteps = [
  {
    title: "Discovery",
    description: "Architecture mapping, asset inventory, threat modeling.",
  },
  {
    title: "Analysis",
    description: "Configuration review, policy assessment, vulnerability scanning.",
  },
  {
    title: "Testing",
    description: "Penetration testing, API security, authentication validation.",
  },
  {
    title: "Validation",
    description: "Control effectiveness, compliance verification, risk scoring.",
  },
  {
    title: "Remediation",
    description: "Findings report, remediation plan, security roadmap.",
  },
];

const securityCategories = [
  {
    title: "Identity & Access",
    items: ["IAM policies", "MFA", "RBAC", "Service accounts"],
  },
  {
    title: "Network Security",
    items: ["Security groups", "Network ACLs", "VPC config", "API gateways"],
  },
  {
    title: "Data Protection",
    items: ["Encryption at rest", "Encryption in transit", "Key management", "Data classification"],
  },
  {
    title: "Application Security",
    items: ["Code review", "Dependency scan", "Container security", "Runtime protection"],
  },
];

const deliverables = [
  "Cloud Application Security Assessment (CASA) comprehensive report",
  "Cloud architecture security review with design recommendations",
  "Misconfiguration findings with severity ratings and CVSS scores",
  "IAM policy analysis and least-privilege access recommendations",
  "API security assessment with authentication/authorization findings",
  "Secrets management and credential security evaluation",
  "Container and serverless security review (if applicable)",
  "Data protection analysis including encryption and key management",
  "Network security configuration assessment and hardening guide",
  "Compliance gap analysis against CASA framework and cloud best practices",
  "Prioritized remediation roadmap with quick wins and long-term fixes",
  "Executive summary with risk dashboard and improvement metrics",
];

const useCases = [
  {
    title: "SaaS & Cloud-Native Applications",
    description:
      "Secure multi-tenant SaaS platforms and cloud-native applications with comprehensive security assessment and validation.",
  },
  {
    title: "Cloud Migration & Modernization",
    description:
      "Validate security posture during cloud migration, re-architecture, and modernization initiatives before production deployment.",
  },
  {
    title: "DevOps & CI/CD Pipelines",
    description:
      "Integrate security assessments into development workflows with automated scanning and continuous security validation.",
  },
  {
    title: "Fintech & Regulated Industries",
    description:
      "Meet regulatory requirements for financial services, healthcare, and regulated sectors with compliant cloud application security.",
  },
];

const engagementTiers = [
  {
    title: "Rapid Cloud Security Review",
    description:
      "Quick assessment of cloud application security posture focusing on critical misconfigurations and high-risk issues.",
    bullets: ["1-2 weeks", "Configuration review", "High-priority findings"],
  },
  {
    title: "Comprehensive CASA Assessment",
    description:
      "Complete cloud application security assessment including architecture review, penetration testing, and compliance validation.",
    bullets: ["3-5 weeks", "Full CASA methodology", "Detailed remediation plan"],
  },
  {
    title: "Continuous Cloud Security Program",
    description:
      "Ongoing cloud application security monitoring with periodic assessments, continuous scanning, and security optimization.",
    bullets: ["Quarterly assessments", "Continuous monitoring", "DevSecOps integration"],
  },
];

const casaServices = [
  {
    title: "Cloud Architecture Security Review",
    desc: "Comprehensive evaluation of cloud application architecture, design patterns, and security controls alignment.",
  },
  {
    title: "Configuration & Policy Assessment",
    desc: "Deep analysis of cloud configurations, IAM policies, network security groups, and compliance with security baselines.",
  },
  {
    title: "Authentication & Authorization Testing",
    desc: "Validation of identity management, SSO implementations, MFA configurations, and access control mechanisms.",
  },
  {
    title: "API Security Assessment",
    desc: "Testing of REST/GraphQL APIs, authentication flows, authorization logic, rate limiting, and input validation.",
  },
  {
    title: "Secrets & Credential Management",
    desc: "Analysis of secret storage, key management, credential rotation, and secure configuration practices.",
  },
  {
    title: "Container & Serverless Security",
    desc: "Assessment of container images, Kubernetes configurations, serverless functions, and runtime security controls.",
  },
  {
    title: "Data Protection & Encryption",
    desc: "Validation of encryption implementations, key management, data classification, and privacy controls.",
  },
  {
    title: "Network Security & Segmentation",
    desc: "Review of VPC configurations, security groups, network ACLs, and micro-segmentation strategies.",
  },
  {
    title: "Vulnerability & Dependency Scanning",
    desc: "Automated scanning of application dependencies, container images, and infrastructure-as-code templates.",
  },
  {
    title: "Penetration Testing",
    desc: "Manual security testing simulating real-world attacks against cloud applications and infrastructure.",
  },
  {
    title: "Compliance & Framework Alignment",
    desc: "Gap analysis against CASA framework, CIS benchmarks, OWASP, and industry-specific requirements.",
  },
  {
    title: "DevSecOps Integration",
    desc: "Security testing integration into CI/CD pipelines with automated scanning and policy enforcement.",
  },
];

const faqs = [
  {
    question: "What is Cloud Application Security Assessment (CASA)?",
    answer:
      "CASA is a security framework introduced by Google to standardize cloud application security assessments. It provides a structured methodology for evaluating the security of cloud-hosted applications across architecture, configurations, access controls, data protection, and compliance. CASA assessments identify misconfigurations, vulnerabilities, and security gaps that could expose cloud applications to threats, helping organizations secure their cloud infrastructure before incidents occur.",
  },
  {
    question: "How is CASA different from traditional application security testing?",
    answer:
      "CASA is specifically designed for cloud-native applications and addresses unique cloud security challenges. Unlike traditional application security testing that focuses primarily on code vulnerabilities, CASA encompasses cloud architecture review, configuration assessment, IAM policy validation, serverless security, container security, and cloud-specific attack vectors. It evaluates both the application layer and the underlying cloud infrastructure, providing comprehensive security coverage for modern cloud deployments.",
  },
  {
    question: "What cloud platforms does your CASA assessment cover?",
    answer:
      "Our CASA assessments cover all major cloud platforms including AWS, Azure, Google Cloud Platform (GCP), and multi-cloud environments. We assess platform-specific services like AWS Lambda, Azure Functions, Google Cloud Run, managed Kubernetes (EKS, AKS, GKE), serverless databases, API gateways, and cloud storage. We also evaluate hybrid cloud configurations and cloud-to-cloud integrations. Our methodology adapts to each platform's unique security features and controls.",
  },
  {
    question: "How long does a CASA assessment take and what's the process?",
    answer:
      "A comprehensive CASA assessment typically takes 3-5 weeks depending on application complexity and scope. The process includes: (1) Discovery phase with architecture review and asset inventory, (2) Configuration analysis of cloud resources and policies, (3) Security testing including vulnerability scanning and penetration testing, (4) Compliance validation against frameworks and standards, and (5) Reporting with prioritized findings and remediation guidance. We provide a detailed timeline during scoping and can accelerate timelines for rapid assessments focused on critical issues.",
  },
];

const painPoints = [
  "Are our cloud apps securely configured?",
  "Do we have cloud security blind spots?",
  "How do we validate cloud security posture?",
];

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

const CASAIllustration = () => (
  <svg viewBox="0 0 420 320" className="h-full w-full" aria-hidden="true">
    <defs>
      <linearGradient id="cloud-panel" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#0f172a" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#6366f1" stopOpacity="0.2" />
      </linearGradient>
      <linearGradient id="cloud-pulse" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
    
    {/* Central cloud with shield */}
    <ellipse cx="210" cy="160" rx="70" ry="45" fill="url(#cloud-panel)" stroke="#94a3b8" strokeOpacity="0.4" strokeWidth="2" />
    <ellipse cx="180" cy="150" rx="40" ry="30" fill="url(#cloud-panel)" stroke="#94a3b8" strokeOpacity="0.3" strokeWidth="2" />
    <ellipse cx="240" cy="150" rx="40" ry="30" fill="url(#cloud-panel)" stroke="#94a3b8" strokeOpacity="0.3" strokeWidth="2" />
    
    {/* Shield overlay */}
    <path d="M210 135l25 10v18c0 15-8 24-25 28-17-4-25-13-25-28v-18l25-10z" stroke="#6366f1" strokeWidth="2.5" fill="none" />
    <circle cx="210" cy="160" r="12" fill="#6366f1" fillOpacity="0.3" />
    <path d="M206 160l2.5 2.5 5-7" stroke="#6366f1" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    
    {/* Security nodes */}
    <circle cx="80" cy="100" r="22" fill="url(#cloud-pulse)" fillOpacity="0.2" stroke="#6366f1" strokeWidth="2" />
    <text x="80" y="105" fontSize="8" fill="#6366f1" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">IAM</text>
    
    <circle cx="340" cy="100" r="22" fill="url(#cloud-pulse)" fillOpacity="0.2" stroke="#8b5cf6" strokeWidth="2" />
    <text x="340" y="105" fontSize="8" fill="#8b5cf6" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">API</text>
    
    <circle cx="80" cy="220" r="22" fill="url(#cloud-pulse)" fillOpacity="0.2" stroke="#6366f1" strokeWidth="2" />
    <text x="80" y="225" fontSize="8" fill="#6366f1" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">DATA</text>
    
    <circle cx="340" cy="220" r="22" fill="url(#cloud-pulse)" fillOpacity="0.2" stroke="#8b5cf6" strokeWidth="2" />
    <text x="340" y="225" fontSize="8" fill="#8b5cf6" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">NET</text>
    
    {/* Connection lines */}
    <path d="M102 100L155 140M255 140L318 100M102 220L155 180M255 180L318 220" stroke="#94a3b8" strokeOpacity="0.5" strokeDasharray="4 6" strokeWidth="2" />
    
    {/* Lock overlay */}
    <g transform="translate(195, 120)">
      <rect x="0" y="8" width="30" height="20" rx="3" stroke="#10b981" strokeWidth="2" fill="none" />
      <path d="M7 8V5a8 8 0 0116 0v3" stroke="#10b981" strokeWidth="2" fill="none" />
    </g>
  </svg>
);

export default function CASAPage() {
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

  const scaleIn = {
    hidden: { opacity: 0, scale: reduceMotion ? 1 : 0.9 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: reduceMotion ? 0 : 0.5, ease: "easeOut" },
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
              Secure cloud applications with expert CASA assessment.
            </h1>
            <p className="mt-4 text-lg text-white/80 md:text-xl">
              Comprehensive Cloud Application Security Assessment identifying misconfigurations, vulnerabilities, and security gaps across your cloud infrastructure.
            </p>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Expert-led CASA framework implementation covering architecture review, configuration analysis, penetration testing, and compliance validation.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/contact?subject=Cloud%20Application%20Security%20Assessment"
                aria-label="Speak with a Cloud Security Expert"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <motion.span
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  whileTap={reduceMotion ? undefined : { y: 0 }}
                  className="inline-flex items-center"
                >
                  Speak with a Cloud Security Expert
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
              title="CASA assessment that secures cloud applications."
              subtitle="Identify misconfigurations and vulnerabilities before they become security incidents."
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
              eyebrow="Security Standards & Frameworks"
              title="CASA framework aligned with industry best practices."
              subtitle="Comprehensive assessment methodology covering cloud security standards and compliance requirements."
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
              title="Structured approach to cloud application security assessment."
              subtitle="We follow CASA framework systematically—from architecture review to remediation guidance."
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
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">Cloud security assessment process</h3>
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
              title="End-to-end cloud application security assessment."
              subtitle="From architecture review to penetration testing, we evaluate every aspect of cloud security."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {casaServices.map((item) => (
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

      {/* Security Coverage Section */}
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
                eyebrow="Security Coverage"
                title="Comprehensive cloud security assessment."
                subtitle="We evaluate all critical areas of cloud application security across identity, network, data, and application layers."
              />
              <div className="mt-8">
                <div className="relative rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-900/70">
                  <div className="pointer-events-none absolute -inset-1 rounded-[22px] bg-gradient-to-r from-indigo-500/30 via-purple-500/20 to-transparent opacity-70" />
                  <div className="relative overflow-hidden rounded-2xl bg-slate-950/5 p-4 dark:bg-slate-950">
                    <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-indigo-500/20 blur-2xl" />
                    <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-purple-500/20 blur-2xl" />
                    <CASAIllustration />
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
              title="Cloud security expertise that delivers results."
              subtitle="We combine CASA framework knowledge with deep cloud platform and application security experience."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Multi-cloud expertise",
                  description: "Deep experience across AWS, Azure, GCP, and hybrid environments with platform-specific security knowledge and best practices.",
                  Icon: IconCloud,
                },
                {
                  title: "CASA framework certified",
                  description: "Official CASA framework implementation with Google Cloud security standards and comprehensive assessment methodology.",
                  Icon: IconShield,
                },
                {
                  title: "Actionable remediation",
                  description: "Practical security recommendations with prioritized fixes, implementation guidance, and DevSecOps integration support.",
                  Icon: IconLock,
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
              title="Complete CASA documentation and security findings."
              subtitle="Everything needed for cloud application security improvement and compliance validation."
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
              title="CASA assessment for cloud-native organizations."
              subtitle="Industry-specific cloud security assessment addressing sector requirements and use cases."
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
              title="Flexible CASA programs for every cloud security need."
              subtitle="From rapid security review to comprehensive assessment and continuous monitoring."
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
              title="Common questions about CASA assessment."
              subtitle="Clear answers to help you understand cloud application security requirements."
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
              Secure your cloud applications with CASA.
            </h2>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Expert cloud security assessment identifying risks before they become incidents.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact?subject=Cloud%20Application%20Security%20Assessment"
                aria-label="Speak With a Cloud Security Expert"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Speak With a Cloud Security Expert
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
            Ready for cloud security?
          </div>
          <Link
            href="/contact?subject=Cloud%20Application%20Security%20Assessment"
            aria-label="Speak With a Cloud Security Expert"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white"
          >
            Get Started
          </Link>
        </div>
      </div>
    </motion.main>
  );
}