"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const outcomes = [
  {
    title: "Prevent Unauthorized Access",
    description:
      "Implement robust IAM policies, MFA enforcement, and least-privilege access controls to prevent unauthorized access to AWS resources.",
  },
  {
    title: "Reduce Attack Surface",
    description:
      "Minimize vulnerabilities by hardening EC2 instances, securing network configurations, and removing unnecessary services and ports.",
  },
  {
    title: "Ensure Compliance",
    description:
      "Align with CIS AWS benchmarks, ISO 27001, SOC 2, and other security frameworks through systematic hardening practices.",
  },
  {
    title: "Optimize Security Costs",
    description:
      "Balance security requirements with cost efficiency by implementing right-sized security controls and automation.",
  },
];

const complianceBadges = [
  "CIS AWS Benchmark",
  "AWS Well-Architected",
  "ISO 27001",
  "SOC 2",
  "NIST CSF",
  "PCI DSS",
];

const methodology = [
  {
    title: "AWS Security Assessment",
    description:
      "Comprehensive evaluation of AWS environment including EC2 instances, IAM policies, network configurations, and service security settings.",
  },
  {
    title: "Identity & Access Management",
    description:
      "Refine IAM policies to enforce least privilege access, implement MFA, review service accounts, and conduct regular access audits.",
  },
  {
    title: "Network Security Hardening",
    description:
      "Configure VPCs, security groups, network ACLs, and implement network segmentation with proper firewall rules and monitoring.",
  },
  {
    title: "Instance & OS Hardening",
    description:
      "Apply OS-level security configurations, disable unnecessary services, implement host-based firewalls, and harden system settings.",
  },
  {
    title: "Vulnerability & Patch Management",
    description:
      "Implement automated vulnerability scanning, patch management processes, and continuous security monitoring using AWS native tools.",
  },
];

const processSteps = [
  {
    title: "Discover",
    description: "AWS architecture, assets, current configurations.",
  },
  {
    title: "Assess",
    description: "Security gaps, vulnerabilities, compliance status.",
  },
  {
    title: "Harden",
    description: "IAM, network, instances, encryption, logging.",
  },
  {
    title: "Validate",
    description: "Testing, verification, compliance checks.",
  },
  {
    title: "Monitor",
    description: "Continuous security, threat detection, updates.",
  },
];

const securityCategories = [
  {
    title: "Identity & Access",
    items: ["IAM policies", "MFA enforcement", "Role-based access", "Service accounts"],
  },
  {
    title: "Network Security",
    items: ["Security groups", "Network ACLs", "VPC design", "Flow logs"],
  },
  {
    title: "Instance Security",
    items: ["OS hardening", "Patch management", "Host firewalls", "SSH keys"],
  },
  {
    title: "Data Protection",
    items: ["EBS encryption", "S3 security", "Key management", "Backup strategies"],
  },
];

const deliverables = [
  "AWS security assessment report with risk ratings and prioritization",
  "EC2 instance and OS-level hardening configurations",
  "IAM policy review and least-privilege access recommendations",
  "Network security review including VPC, security groups, and NACLs",
  "Vulnerability assessment and patch management strategy",
  "Encryption and key management implementation guide",
  "Security monitoring and logging configuration (CloudTrail, CloudWatch)",
  "CIS AWS benchmark compliance mapping and gap analysis",
  "Incident response procedures for AWS environments",
  "AWS security best practices documentation",
  "Automated security validation scripts and tools",
  "AWS security roadmap with quick wins and long-term improvements",
];

const useCases = [
  {
    title: "Cloud Migration Security",
    description:
      "Secure AWS adoption with proper server hardening from initial migration through production deployment.",
  },
  {
    title: "Legacy Infrastructure Modernization",
    description:
      "Modernize security controls for existing AWS workloads with current best practices and automated hardening.",
  },
  {
    title: "Compliance & Audit Preparation",
    description:
      "Prepare for security audits and compliance certifications with comprehensive AWS hardening aligned to frameworks.",
  },
  {
    title: "Security Incident Response",
    description:
      "Remediate security incidents and implement hardening controls to prevent future compromises in AWS environments.",
  },
];

const engagementTiers = [
  {
    title: "Quick Security Review",
    description:
      "Rapid assessment of critical AWS security configurations identifying high-risk exposures and immediate hardening opportunities.",
    bullets: ["1-2 weeks", "Security scan", "Priority findings"],
  },
  {
    title: "Comprehensive Hardening",
    description:
      "Complete AWS server hardening including EC2 instances, IAM, network security, and compliance validation.",
    bullets: ["4-6 weeks", "Full hardening", "CIS compliance"],
  },
  {
    title: "Managed AWS Security",
    description:
      "Ongoing AWS security management with continuous hardening, monitoring, vulnerability management, and optimization.",
    bullets: ["Ongoing", "24/7 monitoring", "Monthly reviews"],
  },
];

const hardeningServices = [
  {
    title: "EC2 Instance Hardening",
    desc: "OS-level security configurations, service minimization, host-based firewalls, and system hardening.",
  },
  {
    title: "IAM Policy Hardening",
    desc: "Least-privilege access enforcement, role optimization, MFA implementation, and access reviews.",
  },
  {
    title: "Network Security Hardening",
    desc: "Security group optimization, NACL configuration, VPC design, and network segmentation.",
  },
  {
    title: "Encryption & Key Management",
    desc: "EBS encryption, S3 bucket security, KMS configuration, and encryption at rest/transit.",
  },
  {
    title: "Patch Management",
    desc: "Automated patching workflows, vulnerability remediation, and AWS Systems Manager integration.",
  },
  {
    title: "Security Monitoring",
    desc: "CloudTrail logging, CloudWatch alerts, GuardDuty configuration, and Security Hub integration.",
  },
  {
    title: "Backup & Recovery",
    desc: "AWS Backup configuration, disaster recovery planning, and data protection strategies.",
  },
  {
    title: "Compliance Hardening",
    desc: "CIS benchmark alignment, AWS Config rules, compliance automation, and audit logging.",
  },
  {
    title: "Container Security",
    desc: "ECS/EKS hardening, container image scanning, and runtime security for containerized workloads.",
  },
  {
    title: "Serverless Security",
    desc: "Lambda function hardening, API Gateway security, and serverless architecture protection.",
  },
  {
    title: "Database Security",
    desc: "RDS hardening, encryption, access controls, and database security best practices.",
  },
  {
    title: "S3 Bucket Hardening",
    desc: "Bucket policies, access controls, encryption, versioning, and data protection for S3 storage.",
  },
];

const faqs = [
  {
    question: "What is AWS server hardening and why is it important?",
    answer:
      "AWS server hardening is the process of securing AWS infrastructure by minimizing attack surfaces, implementing security best practices, and enforcing proper configurations. It's critical because cloud misconfigurations are a leading cause of data breaches. Hardening includes securing EC2 instances, IAM policies, network configurations, and data encryption. It helps prevent unauthorized access, reduces vulnerabilities, ensures compliance with security frameworks, and protects against evolving cloud threats. Proper hardening is essential for maintaining a strong security posture in AWS environments.",
  },
  {
    question: "How does AWS server hardening differ from traditional server hardening?",
    answer:
      "AWS server hardening involves cloud-specific considerations beyond traditional server hardening: (1) Shared Responsibility Model - understanding what AWS secures vs. what you must secure, (2) API-driven management requiring programmatic security controls, (3) Dynamic infrastructure with auto-scaling requiring automated hardening, (4) Cloud-native services like IAM, security groups, and KMS, (5) Multi-tenancy requiring proper isolation and data protection, (6) Integration with AWS security services like GuardDuty and Security Hub. AWS hardening combines traditional OS-level hardening with cloud-specific controls and automation.",
  },
  {
    question: "What AWS services and resources do you harden?",
    answer:
      "We harden all critical AWS resources including: EC2 instances (OS-level and instance configurations), IAM (users, roles, policies, groups), VPC and networking (security groups, NACLs, subnets), S3 buckets (policies, encryption, access controls), RDS databases (encryption, access, backups), Lambda functions (permissions, environment variables), ECS/EKS containers (runtime security, image scanning), CloudTrail and CloudWatch (logging and monitoring), KMS (key management and encryption), and AWS Config (compliance rules). Our hardening covers compute, network, storage, database, and management layers.",
  },
  {
    question: "How do you ensure AWS hardening doesn't break applications?",
    answer:
      "We follow a systematic approach to prevent service disruption: (1) Comprehensive discovery and documentation of current configurations and dependencies, (2) Testing hardening changes in non-production environments first, (3) Phased implementation with validation at each step, (4) Application-aware hardening that considers business requirements, (5) Rollback procedures for each change, (6) Close collaboration with DevOps and application teams, and (7) Post-implementation validation and monitoring. We balance security improvements with operational requirements to maintain availability while strengthening security posture.",
  },
];

const painPoints = [
  "Are our AWS servers properly secured?",
  "Do we have cloud misconfigurations?",
  "Are we meeting AWS security benchmarks?",
];

const IconAws = ({ className }) => (
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
    <path d="M3 12h18M3 6h18M3 18h18" />
    <path d="M8 12v6M16 12v6" />
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

const AwsSecurityIllustration = () => (
  <svg viewBox="0 0 420 320" className="h-full w-full" aria-hidden="true">
    <defs>
      <linearGradient id="aws-gradient" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#FF9900" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#232F3E" stopOpacity="0.3" />
      </linearGradient>
      <linearGradient id="shield-gradient" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#FF9900" />
        <stop offset="100%" stopColor="#146eb4" />
      </linearGradient>
    </defs>
    
    {/* AWS Infrastructure layers */}
    <rect x="60" y="80" width="300" height="160" rx="12" fill="url(#aws-gradient)" stroke="#FF9900" strokeOpacity="0.4" strokeWidth="2" />
    
    {/* Central shield */}
    <path d="M210 100l40 16v26c0 24-13 37-40 45-27-8-40-21-40-45v-26l40-16z" stroke="#FF9900" strokeWidth="3" fill="none" />
    <circle cx="210" cy="145" r="20" fill="#FF9900" fillOpacity="0.2" />
    <path d="M203 145l5 5 10-12" stroke="#FF9900" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    
    {/* Security components */}
    <g transform="translate(85, 100)">
      <rect width="40" height="30" rx="4" fill="url(#shield-gradient)" fillOpacity="0.2" stroke="#146eb4" strokeWidth="2" />
      <text x="20" y="20" fontSize="8" fill="#146eb4" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">IAM</text>
    </g>
    
    <g transform="translate(295, 100)">
      <rect width="40" height="30" rx="4" fill="url(#shield-gradient)" fillOpacity="0.2" stroke="#FF9900" strokeWidth="2" />
      <text x="20" y="20" fontSize="8" fill="#FF9900" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">VPC</text>
    </g>
    
    <g transform="translate(85, 190)">
      <rect width="40" height="30" rx="4" fill="url(#shield-gradient)" fillOpacity="0.2" stroke="#146eb4" strokeWidth="2" />
      <text x="20" y="20" fontSize="7" fill="#146eb4" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">EC2</text>
    </g>
    
    <g transform="translate(295, 190)">
      <rect width="40" height="30" rx="4" fill="url(#shield-gradient)" fillOpacity="0.2" stroke="#FF9900" strokeWidth="2" />
      <text x="20" y="20" fontSize="7" fill="#FF9900" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">KMS</text>
    </g>
    
    {/* Connection lines */}
    <path d="M125 125L170 145M250 145L295 125M125 205L170 165M250 165L295 205" stroke="#94a3b8" strokeOpacity="0.5" strokeDasharray="4 6" strokeWidth="2" />
    
    {/* AWS Logo representation */}
    <g transform="translate(190, 245)">
      <text fontSize="12" fill="#232F3E" fontFamily="sans-serif" textAnchor="middle" fontWeight="700">AWS</text>
    </g>
  </svg>
);

export default function AwsServerHardeningPage() {
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
          <div className="absolute -left-20 top-20 h-56 w-56 rounded-full bg-orange-500/20 blur-3xl" />
          <div className="absolute -right-24 bottom-6 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />
        </div>

        <Container className="relative z-10 flex min-h-[86vh] flex-col justify-center">
          <motion.div variants={fadeUp} className="max-w-3xl">
            <h1 className="mt-8 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              AWS Server Hardening Services
            </h1>
            <p className="mt-4 text-lg text-white/80 md:text-xl">
              Strengthen your AWS cloud infrastructure with expert server hardening services protecting EC2 instances, IAM, and cloud workloads.
            </p>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Comprehensive AWS security implementation covering identity management, network hardening, vulnerability management, and compliance aligned with CIS benchmarks.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/contact?subject=services&subSubject=AWS%20Server%20Hardening"
                aria-label="Talk to AWS Security Expert"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <motion.span
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  whileTap={reduceMotion ? undefined : { y: 0 }}
                  className="inline-flex items-center"
                >
                  Talk to AWS Security Expert
                </motion.span>
              </Link>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12 max-w-4xl">
            <div className="grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80 md:grid-cols-3">
              {painPoints.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
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
              title="AWS security that protects your cloud infrastructure."
              subtitle="Harden servers, reduce attack surface, and maintain compliance across AWS environments."
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
              title="AWS hardening aligned with industry frameworks."
              subtitle="Comprehensive server hardening following AWS best practices and security benchmarks."
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
              title="Structured approach to AWS server hardening."
              subtitle="We secure AWS infrastructure systematically—from assessment to continuous monitoring."
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
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">AWS hardening implementation process</h3>
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
              title="Complete AWS server hardening services."
              subtitle="From EC2 instance hardening to continuous security monitoring across your AWS environment."
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

      {/* Security Coverage Section with AWS Image */}
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
                title="Comprehensive AWS security framework."
                subtitle="We protect all layers of AWS infrastructure from identity to data with systematic hardening."
              />
              <div className="mt-8">
                <div className="relative rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-900/70">
                  <div className="pointer-events-none absolute -inset-1 rounded-[22px] bg-gradient-to-r from-orange-500/30 via-blue-600/20 to-transparent opacity-70" />
                  <div className="relative overflow-hidden rounded-2xl bg-slate-950/5 p-6 dark:bg-slate-950">
                    <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-orange-500/20 blur-2xl" />
                    <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-blue-600/20 blur-2xl" />
                    <div className="relative">
                      <Image
                        src="/assets/services/aws.png"
                        alt="AWS Server Hardening"
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
              title="AWS security expertise with proven methodologies."
              subtitle="We combine deep AWS platform knowledge with security best practices and automation."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "AWS-certified experts",
                  description: "Deep expertise in AWS security architecture, IAM, networking, and compliance with certifications and real-world experience.",
                  Icon: IconAws,
                },
                {
                  title: "Security-first approach",
                  description: "Systematic hardening methodology following AWS Well-Architected Framework and CIS benchmarks for comprehensive protection.",
                  Icon: IconShield,
                },
                {
                  title: "Automated hardening",
                  description: "Infrastructure-as-code security with automated scanning, policy enforcement, and continuous validation using AWS native tools.",
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
              title="Complete AWS hardening documentation and implementation."
              subtitle="Everything needed for secure AWS operations and continuous compliance."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {deliverables.map((item) => (
                <motion.div key={item} variants={fadeUp}>
                  <Card>
                    <div className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-orange-500" />
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
              title="AWS hardening for diverse security needs."
              subtitle="Tailored hardening approaches addressing unique AWS security challenges."
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
              title="Flexible AWS hardening programs."
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
              title="Common questions about AWS server hardening."
              subtitle="Clear answers to help you understand AWS hardening requirements and best practices."
            />
            <div className="mt-8 space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-slate-200/70 bg-white/80 p-5 dark:border-slate-800/70 dark:bg-slate-900/70"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between text-left text-sm font-semibold text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 dark:text-white"
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
              Secure your AWS environment with confidence.
            </h2>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Expert AWS server hardening protecting EC2 instances and cloud workloads.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact?subject=services&subSubject=AWS%20Server%20Hardening"
                aria-label="Talk to AWS Security Expert"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Talk to AWS Security Expert
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
            Ready for AWS hardening?
          </div>
          <Link
            href="/contact?subject=services&subSubject=AWS%20Server%20Hardening"
            aria-label="Talk to AWS Security Expert"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white"
          >
            Get Started
          </Link>
        </div>
      </div>
    </motion.main>
  );
}