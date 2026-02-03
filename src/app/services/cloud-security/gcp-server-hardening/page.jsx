"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const outcomes = [
  {
    title: "Safeguard Cloud Data",
    description:
      "Implement robust encryption, access controls, and data protection mechanisms to safeguard sensitive information across Google Cloud Platform.",
  },
  {
    title: "Ensure Service Continuity",
    description:
      "Maintain high availability and business continuity with effective backup strategies, disaster recovery planning, and resilient infrastructure.",
  },
  {
    title: "Optimize Cloud Costs",
    description:
      "Balance security requirements with cost efficiency by implementing right-sized security controls and eliminating resource waste.",
  },
  {
    title: "Strengthen Incident Response",
    description:
      "Enhance threat detection, monitoring capabilities, and incident response procedures to quickly identify and mitigate security incidents.",
  },
];

const complianceBadges = [
  "CIS GCP Benchmark",
  "Google Cloud Best Practices",
  "ISO 27001",
  "SOC 2",
  "NIST CSF",
  "PCI DSS",
];

const methodology = [
  {
    title: "GCP Security Assessment",
    description:
      "Comprehensive evaluation of Google Cloud environment including Compute Engine VMs, Cloud IAM, VPC configurations, and GCP service security settings.",
  },
  {
    title: "Identity & Access Management",
    description:
      "Harden Cloud IAM with least-privilege policies, service account management, organization policy constraints, and workload identity federation.",
  },
  {
    title: "Network Security Hardening",
    description:
      "Configure VPC firewall rules, Cloud Armor, private Google access, VPC Service Controls, and implement network segmentation with proper traffic controls.",
  },
  {
    title: "Compute Engine Hardening",
    description:
      "Apply OS-level security configurations, disable unnecessary services, implement OS Login, shielded VMs, and harden system settings.",
  },
  {
    title: "Continuous Security Monitoring",
    description:
      "Implement Security Command Center, vulnerability scanning, patch management, and continuous security monitoring using GCP native tools.",
  },
];

const processSteps = [
  {
    title: "Discover",
    description: "GCP resources, projects, configurations.",
  },
  {
    title: "Assess",
    description: "Security gaps, vulnerabilities, compliance.",
  },
  {
    title: "Harden",
    description: "IAM, network, VMs, encryption, monitoring.",
  },
  {
    title: "Validate",
    description: "Testing, verification, SCC checks.",
  },
  {
    title: "Monitor",
    description: "Continuous security, threat detection, updates.",
  },
];

const securityCategories = [
  {
    title: "Identity & Access",
    items: ["Cloud IAM", "Service accounts", "Organization policies", "Workload identity"],
  },
  {
    title: "Network Security",
    items: ["VPC firewall", "Cloud Armor", "Private access", "VPC Service Controls"],
  },
  {
    title: "Compute Security",
    items: ["OS hardening", "Shielded VMs", "OS Login", "Patch management"],
  },
  {
    title: "Data Protection",
    items: ["Cloud KMS", "Storage encryption", "Secret Manager", "Backup strategies"],
  },
];

const deliverables = [
  "GCP security assessment report with risk ratings and prioritization",
  "Compute Engine VM and OS-level hardening configurations",
  "Cloud IAM policy review and least-privilege access recommendations",
  "Network security review including VPC firewall rules and Cloud Armor",
  "Vulnerability assessment and patch management strategy",
  "Cloud KMS and encryption implementation guide",
  "Security Command Center configuration and policy setup",
  "Security monitoring and logging configuration (Cloud Logging, Cloud Monitoring)",
  "CIS GCP benchmark and Google best practices compliance mapping",
  "Incident response procedures for GCP environments",
  "GCP security best practices documentation",
  "Automated security validation scripts and organization policy definitions",
];

const useCases = [
  {
    title: "GCP Cloud Migration",
    description:
      "Secure Google Cloud adoption with proper server hardening from initial migration through production deployment and ongoing operations.",
  },
  {
    title: "Multi-Cloud Security",
    description:
      "Implement consistent security controls across GCP and other cloud platforms with unified hardening standards and monitoring.",
  },
  {
    title: "Compliance & Audit Readiness",
    description:
      "Prepare for security audits and compliance certifications with comprehensive GCP hardening aligned to CIS and regulatory frameworks.",
  },
  {
    title: "Security Incident Remediation",
    description:
      "Remediate security incidents and implement hardening controls to prevent future compromises in Google Cloud environments.",
  },
];

const engagementTiers = [
  {
    title: "Quick Security Review",
    description:
      "Rapid assessment of critical GCP security configurations identifying high-risk exposures and immediate hardening opportunities.",
    bullets: ["1-2 weeks", "Security scan", "Priority findings"],
  },
  {
    title: "Comprehensive Hardening",
    description:
      "Complete GCP server hardening including Compute Engine, Cloud IAM, network security, and CIS benchmark compliance validation.",
    bullets: ["4-6 weeks", "Full hardening", "CIS compliance"],
  },
  {
    title: "Managed GCP Security",
    description:
      "Ongoing GCP security management with continuous hardening, Security Command Center monitoring, vulnerability management, and optimization.",
    bullets: ["Ongoing", "24/7 monitoring", "Monthly reviews"],
  },
];

const hardeningServices = [
  {
    title: "Compute Engine Hardening",
    desc: "OS-level security configurations, service minimization, OS Login, shielded VMs, and system hardening for Linux and Windows VMs.",
  },
  {
    title: "Cloud IAM Hardening",
    desc: "Least-privilege policies, service account management, organization policy constraints, and workload identity federation.",
  },
  {
    title: "VPC Firewall Rules",
    desc: "Firewall rule optimization, ingress/egress controls, priority management, and network micro-segmentation.",
  },
  {
    title: "Cloud Armor Configuration",
    desc: "WAF rules, DDoS protection, rate limiting, custom security policies, and threat intelligence integration.",
  },
  {
    title: "Cloud Storage Security",
    desc: "Bucket policies, uniform bucket-level access, encryption, retention policies, and data protection for Cloud Storage.",
  },
  {
    title: "Security Command Center",
    desc: "SCC configuration, security findings, compliance monitoring, and threat detection across GCP resources.",
  },
  {
    title: "Cloud KMS & Encryption",
    desc: "Key management, encryption at rest/transit, key rotation, Cloud HSM, and encryption key lifecycle management.",
  },
  {
    title: "Patch Management",
    desc: "OS patch management, VM Manager integration, automated patching workflows, and vulnerability remediation.",
  },
  {
    title: "VPC Service Controls",
    desc: "Security perimeter configuration, context-aware access, private Google access, and data exfiltration prevention.",
  },
  {
    title: "GKE Security",
    desc: "Google Kubernetes Engine hardening, pod security policies, binary authorization, and container security.",
  },
  {
    title: "Cloud SQL Security",
    desc: "Database hardening, encryption, private IP, automated backups, and database security best practices.",
  },
  {
    title: "Organization Policies",
    desc: "Policy constraints, resource restrictions, compliance automation, and governance framework implementation.",
  },
];

const faqs = [
  {
    question: "What is GCP server hardening and why is it essential?",
    answer:
      "GCP server hardening is the process of securing Google Cloud infrastructure by minimizing attack surfaces, implementing Google Cloud best practices, and enforcing proper configurations. It's essential because cloud misconfigurations are a leading cause of data breaches. Hardening includes securing Compute Engine VMs, Cloud IAM, network configurations, storage buckets, and data encryption. It helps prevent unauthorized access, reduces vulnerabilities, ensures compliance with security frameworks, and protects against evolving cloud threats. Proper hardening is critical for maintaining a strong security posture in GCP environments, especially given the shared responsibility model where you control your configurations and data security.",
  },
  {
    question: "How does GCP hardening differ from AWS or Azure hardening?",
    answer:
      "While all cloud platforms share similar security principles, GCP hardening involves Google-specific services and configurations: (1) Cloud IAM and organization policies instead of AWS IAM or Azure RBAC, (2) VPC Service Controls for data exfiltration prevention, unique to GCP, (3) Shielded VMs with Secure Boot and vTPM, (4) OS Login for SSH key management through Cloud IAM, (5) Security Command Center for centralized security monitoring, (6) Google-specific compliance frameworks and best practices, (7) Organization resource hierarchy (organizations, folders, projects) requiring different policy structures. GCP hardening combines traditional OS-level security with Google Cloud-native controls and unique Google innovations in cloud security.",
  },
  {
    question: "What GCP services and resources do you harden?",
    answer:
      "We harden all critical GCP resources including: Compute Engine VMs (OS hardening, shielded VMs, OS Login), Cloud IAM (users, service accounts, organization policies), VPC (firewall rules, Cloud Armor, VPC Service Controls), Cloud Storage (bucket policies, encryption, access controls), Cloud SQL (encryption, private IP, backups), Google Kubernetes Engine (GKE security, pod policies), Cloud KMS (key management, encryption), Cloud Functions (permissions, environment variables), Secret Manager (secret lifecycle, access controls), and Cloud Logging/Monitoring (audit logs, alerting). Our hardening covers compute, identity, network, storage, database, and management layers with GCP-specific security controls.",
  },
  {
    question: "How do you ensure GCP hardening doesn't disrupt operations?",
    answer:
      "We follow a systematic approach to prevent service disruption: (1) Comprehensive discovery and documentation of current GCP projects, resources, and dependencies, (2) Testing hardening changes in non-production projects first, (3) Phased implementation with validation at each step using organization policies in dry-run mode, (4) Application-aware hardening that considers business requirements and SLAs, (5) Rollback procedures for each change using Deployment Manager or Terraform, (6) Close collaboration with DevOps, SREs, and application teams, (7) Post-implementation validation using Security Command Center and Cloud Monitoring. We balance security improvements with operational requirements, leveraging Google Cloud's native tools to maintain availability while strengthening security posture.",
  },
];

const painPoints = [
  "Are our GCP VMs properly secured?",
  "Do we have GCP misconfigurations?",
  "Are we meeting CIS GCP benchmarks?",
];

const IconGcp = ({ className }) => (
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
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
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

const GcpSecurityIllustration = () => (
  <svg viewBox="0 0 420 320" className="h-full w-full" aria-hidden="true">
    <defs>
      <linearGradient id="gcp-gradient" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#4285F4" stopOpacity="0.2" />
        <stop offset="50%" stopColor="#34A853" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#FBBC04" stopOpacity="0.3" />
      </linearGradient>
      <linearGradient id="gcp-shield-gradient" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#4285F4" />
        <stop offset="50%" stopColor="#34A853" />
        <stop offset="100%" stopColor="#EA4335" />
      </linearGradient>
    </defs>
    
    {/* GCP Infrastructure layers */}
    <rect x="60" y="80" width="300" height="160" rx="12" fill="url(#gcp-gradient)" stroke="#4285F4" strokeOpacity="0.4" strokeWidth="2" />
    
    {/* Central shield */}
    <path d="M210 100l40 16v26c0 24-13 37-40 45-27-8-40-21-40-45v-26l40-16z" stroke="#4285F4" strokeWidth="3" fill="none" />
    <circle cx="210" cy="145" r="20" fill="#4285F4" fillOpacity="0.2" />
    <path d="M203 145l5 5 10-12" stroke="#34A853" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    
    {/* Security components */}
    <g transform="translate(85, 100)">
      <rect width="40" height="30" rx="4" fill="url(#gcp-shield-gradient)" fillOpacity="0.2" stroke="#4285F4" strokeWidth="2" />
      <text x="20" y="20" fontSize="8" fill="#4285F4" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">IAM</text>
    </g>
    
    <g transform="translate(295, 100)">
      <rect width="40" height="30" rx="4" fill="url(#gcp-shield-gradient)" fillOpacity="0.2" stroke="#34A853" strokeWidth="2" />
      <text x="20" y="20" fontSize="8" fill="#34A853" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">VPC</text>
    </g>
    
    <g transform="translate(85, 190)">
      <rect width="40" height="30" rx="4" fill="url(#gcp-shield-gradient)" fillOpacity="0.2" stroke="#FBBC04" strokeWidth="2" />
      <text x="20" y="20" fontSize="8" fill="#EA4335" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">GCE</text>
    </g>
    
    <g transform="translate(295, 190)">
      <rect width="40" height="30" rx="4" fill="url(#gcp-shield-gradient)" fillOpacity="0.2" stroke="#EA4335" strokeWidth="2" />
      <text x="20" y="20" fontSize="8" fill="#4285F4" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">KMS</text>
    </g>
    
    {/* Connection lines */}
    <path d="M125 125L170 145M250 145L295 125M125 205L170 165M250 165L295 205" stroke="#94a3b8" strokeOpacity="0.5" strokeDasharray="4 6" strokeWidth="2" />
    
    {/* GCP Logo representation */}
    <g transform="translate(190, 245)">
      <text fontSize="12" fill="#4285F4" fontFamily="sans-serif" textAnchor="middle" fontWeight="700">GCP</text>
    </g>
  </svg>
);

export default function GcpServerHardeningPage() {
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
          <div className="absolute -right-24 bottom-6 h-64 w-64 rounded-full bg-green-500/20 blur-3xl" />
        </div>

        <Container className="relative z-10 flex min-h-[86vh] flex-col justify-center">
          <motion.div variants={fadeUp} className="max-w-3xl">
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              GCP Server Hardening Services
            </h1>
            <p className="mt-4 text-lg text-white/80 md:text-xl">
              Secure your Google Cloud Platform infrastructure with expert server hardening services protecting Compute Engine, Cloud IAM, and GCP workloads.
            </p>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Comprehensive GCP security implementation covering identity management, network hardening, vulnerability management, and compliance aligned with CIS benchmarks.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/contact?subject=GCP%20Server%20Hardening"
                aria-label="Talk to GCP Security Expert"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <motion.span
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  whileTap={reduceMotion ? undefined : { y: 0 }}
                  className="inline-flex items-center"
                >
                  Talk to GCP Security Expert
                </motion.span>
              </Link>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12 max-w-4xl">
            <div className="grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80 md:grid-cols-3">
              {painPoints.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
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
              title="GCP security that protects your cloud infrastructure."
              subtitle="Harden servers, safeguard data, and maintain compliance across Google Cloud environments."
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

      {/* Compliance Section */}
      <Section className="bg-slate-50 dark:bg-slate-950/70">
        <Container>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-120px" }}>
            <SectionHeader
              eyebrow="Security Standards"
              title="GCP hardening aligned with Google best practices."
              subtitle="Comprehensive server hardening following CIS benchmarks and security frameworks."
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
              title="Structured approach to GCP server hardening."
              subtitle="We secure Google Cloud infrastructure systematically—from assessment to continuous monitoring."
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
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">GCP hardening implementation process</h3>
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
              title="Complete GCP server hardening services."
              subtitle="From Compute Engine hardening to continuous security monitoring across your GCP environment."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {hardeningServices.map((item) => (
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

      {/* Security Coverage Section with GCP Image */}
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
                eyebrow="Hardening Coverage"
                title="Comprehensive GCP security framework."
                subtitle="We protect all layers of Google Cloud infrastructure from identity to data with systematic hardening."
              />
              <div className="mt-8">
                <div className="relative rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-900/70">
                  <div className="pointer-events-none absolute -inset-1 rounded-[22px] bg-gradient-to-r from-blue-500/30 via-green-500/20 to-transparent opacity-70" />
                  <div className="relative overflow-hidden rounded-2xl bg-slate-950/5 p-6 dark:bg-slate-950">
                    <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-blue-500/20 blur-2xl" />
                    <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-green-500/20 blur-2xl" />
                    <div className="relative">
                      <Image
                        src="/assets/services/nt.jpg"
                        alt="GCP Server Hardening"
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
              title="GCP security expertise with proven methodologies."
              subtitle="We combine deep Google Cloud platform knowledge with security best practices and automation."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "GCP-certified experts",
                  description: "Deep expertise in GCP security architecture, Cloud IAM, networking, and compliance with Google certifications and real-world experience.",
                  Icon: IconGcp,
                },
                {
                  title: "Google security-first",
                  description: "Systematic hardening methodology following Google Cloud best practices and CIS benchmarks for comprehensive protection.",
                  Icon: IconShield,
                },
                {
                  title: "Automated hardening",
                  description: "Infrastructure-as-code security with organization policies, automated scanning, and continuous validation using Security Command Center.",
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
              title="Complete GCP hardening documentation and implementation."
              subtitle="Everything needed for secure GCP operations and continuous compliance."
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
              eyebrow="Use Cases"
              title="GCP hardening for diverse security needs."
              subtitle="Tailored hardening approaches addressing unique Google Cloud security challenges."
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
              title="Flexible GCP hardening programs."
              subtitle="From quick security reviews to comprehensive managed hardening services."
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
              title="Common questions about GCP server hardening."
              subtitle="Clear answers to help you understand GCP hardening requirements and best practices."
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
              Secure your GCP environment with confidence.
            </h2>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Expert GCP server hardening protecting Compute Engine and cloud workloads with Google security excellence.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact?subject=GCP%20Server%20Hardening"
                aria-label="Talk to GCP Security Expert"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Talk to GCP Security Expert
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
            Ready for GCP hardening?
          </div>
          <Link
            href="/contact?subject=GCP%20Server%20Hardening"
            aria-label="Talk to GCP Security Expert"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white"
          >
            Get Started
          </Link>
        </div>
      </div>
    </motion.main>
  );
}