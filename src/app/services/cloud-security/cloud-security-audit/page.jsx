"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const outcomes = [
  {
    title: "Secure cloud infrastructure",
    description:
      "Protect cloud workloads, data, and configurations across AWS, Azure, GCP, and hybrid environments with comprehensive security controls.",
  },
  {
    title: "Prevent cloud misconfigurations",
    description:
      "Identify and remediate insecure cloud configurations, exposed resources, and policy gaps before they lead to security incidents.",
  },
  {
    title: "Maintain cloud compliance",
    description:
      "Achieve and maintain compliance with industry standards including ISO 27001, SOC 2, HIPAA, and cloud-specific frameworks.",
  },
  {
    title: "Enable secure cloud adoption",
    description:
      "Accelerate cloud migration and modernization with security built-in from architecture design through deployment and operations.",
  },
];

const complianceBadges = [
  "AWS Well-Architected",
  "Azure Security",
  "GCP Security",
  "CIS Benchmarks",
  "ISO 27017",
  "CSA CCM",
];

const methodology = [
  {
    title: "Cloud Security Assessment",
    description:
      "Evaluate cloud security posture, identify misconfigurations, assess IAM policies, and analyze network security across all cloud platforms.",
  },
  {
    title: "Secure Architecture Design",
    description:
      "Design cloud-native security architectures with network segmentation, identity controls, encryption, and resilience built-in from the start.",
  },
  {
    title: "Security Controls Implementation",
    description:
      "Deploy security groups, WAF rules, encryption, logging, monitoring, and automated security controls across cloud infrastructure.",
  },
  {
    title: "Workload & Data Protection",
    description:
      "Secure compute workloads, containers, serverless functions, databases, and storage with encryption, access controls, and isolation.",
  },
  {
    title: "Continuous Cloud Security",
    description:
      "Implement continuous security monitoring, threat detection, compliance validation, and automated response for cloud environments.",
  },
];

const processSteps = [
  {
    title: "Assess",
    description: "Security posture, misconfigurations, risk analysis.",
  },
  {
    title: "Design",
    description: "Architecture, network design, security controls.",
  },
  {
    title: "Implement",
    description: "IAM, encryption, monitoring, automation.",
  },
  {
    title: "Protect",
    description: "Workloads, data, applications, infrastructure.",
  },
  {
    title: "Monitor",
    description: "Threat detection, compliance, optimization.",
  },
];

const securityCategories = [
  {
    title: "Identity & Access",
    items: ["IAM policies", "MFA", "SSO", "Service accounts"],
  },
  {
    title: "Network Security",
    items: ["VPC design", "Security groups", "WAF", "DDoS protection"],
  },
  {
    title: "Data Protection",
    items: ["Encryption", "Key management", "Backup", "DLP"],
  },
  {
    title: "Compliance & Governance",
    items: ["Policy enforcement", "Audit logging", "Standards", "Reporting"],
  },
];

const deliverables = [
  "Cloud security assessment report with risk ratings and prioritization",
  "Cloud security architecture design and network diagrams",
  "IAM policy review and least-privilege access recommendations",
  "Misconfiguration findings with remediation guidance",
  "Network security review including VPC, security groups, and WAF",
  "Encryption and key management implementation guide",
  "Container and serverless security recommendations",
  "Cloud security monitoring and logging strategy",
  "Threat detection and incident response procedures",
  "Compliance mapping against cloud security frameworks (CIS, CSA)",
  "DevSecOps integration and automation recommendations",
  "Cloud security roadmap with quick wins and long-term improvements",
];

const useCases = [
  {
    title: "Cloud Migration & Modernization",
    description:
      "Secure cloud adoption with security architecture design, migration planning, and post-migration security validation.",
  },
  {
    title: "Multi-Cloud & Hybrid Environments",
    description:
      "Unified security strategy across AWS, Azure, GCP, and on-premises infrastructure with consistent controls and visibility.",
  },
  {
    title: "DevOps & CI/CD Security",
    description:
      "Integrate security into development pipelines with automated scanning, policy enforcement, and secure deployment practices.",
  },
  {
    title: "SaaS & Cloud-Native Applications",
    description:
      "Secure microservices, containers, serverless architectures, and API-driven applications in cloud environments.",
  },
];

const engagementTiers = [
  {
    title: "Cloud Security Review",
    description:
      "Quick assessment of cloud security posture identifying critical misconfigurations and high-risk exposures.",
    bullets: ["1-2 weeks", "Security assessment", "Priority findings"],
  },
  {
    title: "Comprehensive Cloud Security",
    description:
      "Complete cloud security implementation including architecture design, control deployment, and compliance validation.",
    bullets: ["4-8 weeks", "Full implementation", "Architecture design"],
  },
  {
    title: "Managed Cloud Security",
    description:
      "Ongoing cloud security management with continuous monitoring, threat detection, and optimization.",
    bullets: ["Ongoing", "24/7 monitoring", "Quarterly reviews"],
  },
];

const cloudServices = [
  {
    title: "Cloud Security Assessment",
    desc: "Comprehensive evaluation of cloud security posture, configurations, and compliance across all platforms.",
  },
  {
    title: "Cloud Architecture Security",
    desc: "Secure cloud architecture design with network segmentation, encryption, and resilience built-in.",
  },
  {
    title: "Identity & Access Management",
    desc: "IAM policy design, least-privilege access, MFA implementation, and identity governance.",
  },
  {
    title: "Network Security & Segmentation",
    desc: "VPC design, security groups, network ACLs, WAF configuration, and micro-segmentation.",
  },
  {
    title: "Data Protection & Encryption",
    desc: "Encryption at rest and in transit, key management, data classification, and DLP strategies.",
  },
  {
    title: "Container & Kubernetes Security",
    desc: "Container image scanning, Kubernetes security hardening, and runtime protection.",
  },
  {
    title: "Serverless Security",
    desc: "Lambda/Azure Functions security, API Gateway protection, and event-driven architecture security.",
  },
  {
    title: "Cloud Compliance & Governance",
    desc: "Policy enforcement, compliance frameworks, audit logging, and regulatory alignment.",
  },
  {
    title: "Cloud Threat Detection",
    desc: "Real-time monitoring, SIEM integration, anomaly detection, and threat intelligence.",
  },
  {
    title: "DevSecOps & CI/CD Security",
    desc: "Security integration into DevOps pipelines with automated scanning and policy enforcement.",
  },
  {
    title: "Cloud Incident Response",
    desc: "Incident detection, forensics, containment procedures, and recovery planning for cloud environments.",
  },
  {
    title: "Multi-Cloud Security Strategy",
    desc: "Unified security approach across AWS, Azure, GCP, and hybrid environments.",
  },
];

const faqs = [
  {
    question: "What cloud platforms do you support?",
    answer:
      "We provide cloud security services for all major cloud platforms including Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP), and hybrid cloud environments. Our team has deep expertise in platform-specific security services like AWS Security Hub, Azure Security Center, and GCP Security Command Center, as well as cloud-agnostic security solutions. We also support multi-cloud strategies where organizations use multiple cloud providers simultaneously.",
  },
  {
    question: "How do you secure cloud infrastructure?",
    answer:
      "Our cloud security approach includes multiple layers: (1) Identity and Access Management with least-privilege IAM policies and MFA, (2) Network security with VPC design, security groups, and WAF, (3) Data protection with encryption at rest and in transit, (4) Workload security for VMs, containers, and serverless functions, (5) Continuous monitoring with SIEM and threat detection, and (6) Compliance validation against industry frameworks. We follow the shared responsibility model, securing what you control while leveraging cloud provider security features.",
  },
  {
    question: "What's the difference between cloud security and traditional security?",
    answer:
      "Cloud security differs in several key ways: (1) Shared responsibility where the cloud provider secures the infrastructure while you secure your configurations and data, (2) API-driven management requiring programmatic security controls, (3) Dynamic and ephemeral resources that scale automatically, (4) Identity-centric security versus network perimeter-based approaches, (5) Cloud-native services like serverless that require different security models, and (6) Multi-tenant environments with data isolation concerns. Cloud security requires expertise in cloud platforms, infrastructure-as-code, and automation.",
  },
  {
    question: "How do you help with cloud compliance?",
    answer:
      "We help achieve and maintain cloud compliance through: (1) Gap analysis against relevant frameworks (ISO 27001, SOC 2, HIPAA, PCI DSS, CIS Benchmarks), (2) Control implementation aligned with compliance requirements, (3) Audit logging and evidence collection for compliance validation, (4) Policy enforcement with automated compliance checks, (5) Documentation including policies, procedures, and architecture diagrams, and (6) Ongoing monitoring to maintain compliance. We leverage cloud-native compliance services like AWS Config, Azure Policy, and GCP Security Health Analytics for continuous validation.",
  },
];

const painPoints = [
  "Are our cloud configurations secure?",
  "Do we have cloud security blind spots?",
  "How do we maintain cloud compliance?",
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

const CloudSecurityIllustration = () => (
  <svg viewBox="0 0 420 320" className="h-full w-full" aria-hidden="true">
    <defs>
      <linearGradient id="cloud-gradient" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#0f172a" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
      </linearGradient>
      <linearGradient id="security-gradient" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
    
    {/* Cloud layers */}
    <ellipse cx="210" cy="160" rx="80" ry="50" fill="url(#cloud-gradient)" stroke="#94a3b8" strokeOpacity="0.4" strokeWidth="2" />
    <ellipse cx="170" cy="145" rx="50" ry="35" fill="url(#cloud-gradient)" stroke="#94a3b8" strokeOpacity="0.3" strokeWidth="2" />
    <ellipse cx="250" cy="145" rx="50" ry="35" fill="url(#cloud-gradient)" stroke="#94a3b8" strokeOpacity="0.3" strokeWidth="2" />
    
    {/* Central shield */}
    <path d="M210 125l30 12v20c0 18-10 28-30 34-20-6-30-16-30-34v-20l30-12z" stroke="#3b82f6" strokeWidth="2.5" fill="none" />
    <circle cx="210" cy="160" r="15" fill="#3b82f6" fillOpacity="0.3" />
    <path d="M205 160l3 3 6-8" stroke="#3b82f6" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    
    {/* Security layers */}
    <circle cx="90" cy="110" r="25" fill="url(#security-gradient)" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="2" />
    <text x="90" y="115" fontSize="8" fill="#3b82f6" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">IAM</text>
    
    <circle cx="330" cy="110" r="25" fill="url(#security-gradient)" fillOpacity="0.2" stroke="#8b5cf6" strokeWidth="2" />
    <text x="330" y="115" fontSize="8" fill="#8b5cf6" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">NET</text>
    
    <circle cx="90" cy="210" r="25" fill="url(#security-gradient)" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="2" />
    <text x="90" y="215" fontSize="8" fill="#3b82f6" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">DATA</text>
    
    <circle cx="330" cy="210" r="25" fill="url(#security-gradient)" fillOpacity="0.2" stroke="#8b5cf6" strokeWidth="2" />
    <text x="330" y="215" fontSize="8" fill="#8b5cf6" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">APP</text>
    
    {/* Connection lines */}
    <path d="M115 110L160 140M250 140L305 110M115 210L160 180M250 180L305 210" stroke="#94a3b8" strokeOpacity="0.5" strokeDasharray="4 6" strokeWidth="2" />
    
    {/* Lock icon */}
    <g transform="translate(195, 100)">
      <rect x="0" y="8" width="30" height="20" rx="3" stroke="#10b981" strokeWidth="2" fill="none" />
      <path d="M7 8V5a8 8 0 0116 0v3" stroke="#10b981" strokeWidth="2" fill="none" />
    </g>
  </svg>
);

export default function CloudSecurityPage() {
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
            <h1 className="mt-10 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              Secure cloud infrastructure with expert cloud security services.
            </h1>
            <p className="mt-4 text-lg text-white/80 md:text-xl">
              Comprehensive cloud security consulting protecting AWS, Azure, and GCP environments with security architecture, compliance, and continuous monitoring.
            </p>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Expert-led cloud security implementation covering identity management, network security, data protection, and workload security across all major cloud platforms.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/contact?subject=services&subSubject=Cloud%20%20Security%20Audit"
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
              title="Cloud security that protects your infrastructure."
              subtitle="Secure cloud environments, prevent misconfigurations, and maintain compliance across all platforms."
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
              eyebrow="Cloud Security Standards"
              title="Multi-cloud security aligned with industry frameworks."
              subtitle="Comprehensive security across AWS, Azure, GCP, and hybrid environments following best practices."
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
              title="Structured approach to cloud security implementation."
              subtitle="We secure cloud environments systematically—from assessment to continuous monitoring."
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
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">Cloud security implementation process</h3>
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
              title="End-to-end cloud security services."
              subtitle="From architecture design to continuous monitoring, we secure every layer of your cloud infrastructure."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {cloudServices.map((item) => (
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
                title="Comprehensive cloud security framework."
                subtitle="We protect all layers of cloud infrastructure from identity to data across all major platforms."
              />
              <div className="mt-8">
                <div className="relative rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-900/70">
                  <div className="pointer-events-none absolute -inset-1 rounded-[22px] bg-gradient-to-r from-blue-500/30 via-violet-500/20 to-transparent opacity-70" />
                  <div className="relative overflow-hidden rounded-2xl bg-slate-950/5 p-4 dark:bg-slate-950">
                    <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-blue-500/20 blur-2xl" />
                    <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-violet-500/20 blur-2xl" />
                    <CloudSecurityIllustration />
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
              title="Cloud security expertise across all platforms."
              subtitle="We combine deep cloud platform knowledge with security best practices and automation."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Multi-cloud expertise",
                  description: "Deep experience securing AWS, Azure, GCP, and hybrid environments with platform-specific and unified security strategies.",
                  Icon: IconCloud,
                },
                {
                  title: "Security-first architecture",
                  description: "Cloud architecture design with security, compliance, and resilience built-in from the start using Well-Architected principles.",
                  Icon: IconShield,
                },
                {
                  title: "DevSecOps integration",
                  description: "Security automation in CI/CD pipelines with infrastructure-as-code scanning, policy enforcement, and continuous validation.",
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
              title="Complete cloud security documentation and implementation."
              subtitle="Everything needed for secure cloud operations and continuous compliance."
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
              title="Cloud security for modern organizations."
              subtitle="Industry-specific cloud security addressing unique challenges and compliance requirements."
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
              title="Flexible cloud security programs."
              subtitle="From quick assessments to comprehensive managed security services."
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
              title="Common questions about cloud security."
              subtitle="Clear answers to help you understand cloud security requirements and best practices."
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
              Secure your cloud infrastructure with confidence.
            </h2>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Expert cloud security protecting AWS, Azure, GCP, and hybrid environments.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact?subject=services&subSubject=Cloud%20%20Security%20Audit"
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
            href="/contact?subject=services&subSubject=Cloud%20%20Security%20Audit"
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