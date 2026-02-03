"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const outcomes = [
  {
    title: "Enhanced Security Posture",
    description:
      "Strengthen your Microsoft 365 environment against modern cyber threats with comprehensive security controls, identity protection, and continuous monitoring.",
  },
  {
    title: "Data Protection & Compliance",
    description:
      "Ensure sensitive data is protected with DLP policies, encryption, and governance controls while maintaining compliance with GDPR, HIPAA, and ISO 27001.",
  },
  {
    title: "Identity & Access Security",
    description:
      "Secure user identities with Azure AD/Entra ID configuration, multi-factor authentication, conditional access policies, and password protection.",
  },
  {
    title: "Threat Detection & Response",
    description:
      "Proactively detect and respond to security threats using Microsoft Defender suite with 24/7 monitoring, threat intelligence, and rapid incident response.",
  },
  {
    title: "Operational Efficiency",
    description:
      "Reduce IT burden and improve productivity while maintaining strong security controls, automated threat response, and streamlined compliance reporting.",
  },
  {
    title: "Risk Mitigation",
    description:
      "Identify and mitigate security risks before they impact business operations through comprehensive assessments, penetration testing, and continuous validation.",
  },
];

const complianceBadges = [
  "ISO 27001",
  "GDPR",
  "HIPAA",
  "SOC 2",
  "NIST",
  "PCI DSS",
];

const methodology = [
  {
    title: "Assessment & Discovery",
    description:
      "Comprehensive evaluation of your current Microsoft 365 security posture, tenant configuration, license utilization, and potential vulnerabilities across all workloads.",
  },
  {
    title: "Security Baseline Configuration",
    description:
      "Implement Microsoft security baselines, configure security policies, enable security defaults, and optimize protection mechanisms across Exchange, SharePoint, Teams, and OneDrive.",
  },
  {
    title: "Identity & Access Management",
    description:
      "Configure Azure AD/Entra ID security features, implement multi-factor authentication, set up conditional access policies, and establish password protection mechanisms.",
  },
  {
    title: "Data Protection Implementation",
    description:
      "Deploy data loss prevention policies, configure sensitivity labels, implement encryption standards, and establish information governance controls.",
  },
  {
    title: "Threat Protection Setup",
    description:
      "Enable and configure Microsoft Defender for Office 365, Defender for Endpoint, implement anti-phishing policies, and establish threat intelligence integration.",
  },
  {
    title: "Monitoring & Response",
    description:
      "Establish continuous security monitoring, configure Microsoft Sentinel, implement automated response workflows, and validate incident response procedures.",
  },
];

const processSteps = [
  {
    title: "Assessment",
    description: "Security posture evaluation.",
  },
  {
    title: "Configuration",
    description: "Security policies setup.",
  },
  {
    title: "Protection",
    description: "Identity and data security.",
  },
  {
    title: "Monitoring",
    description: "Continuous threat detection.",
  },
  {
    title: "Validation",
    description: "Testing and compliance reporting.",
  },
];

const securityCategories = [
  {
    title: "Identity Security",
    items: ["Azure AD/Entra ID", "MFA", "Conditional Access", "Password policies"],
  },
  {
    title: "Email Security",
    items: ["Defender for Office 365", "Anti-phishing", "Anti-malware", "Safe Links"],
  },
  {
    title: "Endpoint Security",
    items: ["Defender for Endpoint", "Intune", "Device compliance", "Threat protection"],
  },
  {
    title: "Data Protection",
    items: ["DLP policies", "Encryption", "Sensitivity labels", "Information governance"],
  },
];

const deliverables = [
  "Microsoft 365 Security Assessment Report with executive summary",
  "Security configuration documentation and baseline settings",
  "Identity protection implementation guide with conditional access policies",
  "Data loss prevention policy framework and sensitivity label taxonomy",
  "Compliance readiness assessment mapped to industry standards",
  "Incident response playbook with automated response workflows",
  "Security monitoring dashboard configuration and alerting rules",
  "Employee security awareness training materials and phishing simulations",
  "Threat detection and response procedures documentation",
  "Security posture improvement roadmap with prioritized recommendations",
  "Microsoft Defender configuration guide for all workloads",
  "Post-implementation support and quarterly security reviews",
];

const useCases = [
  {
    title: "Cloud Migration Security",
    description:
      "Secure migration to Microsoft 365 with zero-trust implementation, identity federation, and comprehensive security controls for hybrid environments.",
  },
  {
    title: "Remote Workforce Protection",
    description:
      "Enable secure remote access with identity protection, endpoint security, and secure collaboration for distributed teams working from anywhere.",
  },
  {
    title: "Regulatory Compliance",
    description:
      "Achieve and maintain compliance with GDPR, HIPAA, ISO 27001, and SOC 2 requirements through automated controls and continuous monitoring.",
  },
  {
    title: "Data Breach Prevention",
    description:
      "Prevent data breaches with advanced threat protection, data loss prevention, encryption, and comprehensive monitoring across all Microsoft 365 services.",
  },
];

const engagementTiers = [
  {
    title: "Security Assessment",
    description:
      "Comprehensive evaluation of your Microsoft 365 security posture with gap analysis and prioritized remediation recommendations.",
    bullets: ["1-2 weeks", "Security assessment", "Gap analysis"],
  },
  {
    title: "Complete Implementation",
    description:
      "Full-scope security implementation covering identity protection, data security, threat detection, and compliance configuration.",
    bullets: ["3-4 weeks", "Full implementation", "Training included"],
  },
  {
    title: "Managed Security Service",
    description:
      "Ongoing security management with 24/7 monitoring, threat hunting, incident response, and quarterly security assessments.",
    bullets: ["Continuous", "24/7 monitoring", "Dedicated support"],
  },
];

const testingServices = [
  {
    title: "Identity & Access Management",
    desc: "Azure AD/Entra ID configuration, multi-factor authentication, conditional access policies, password protection, and identity governance.",
  },
  {
    title: "Email Security Protection",
    desc: "Microsoft Defender for Office 365, anti-phishing policies, anti-malware protection, safe links, safe attachments, and email encryption.",
  },
  {
    title: "Data Loss Prevention",
    desc: "DLP policy implementation, sensitivity labels, encryption configuration, information governance, and data classification frameworks.",
  },
  {
    title: "Endpoint Security",
    desc: "Microsoft Defender for Endpoint, device compliance policies, Microsoft Intune configuration, and mobile device management.",
  },
  {
    title: "Threat Detection & Response",
    desc: "Microsoft Sentinel configuration, automated incident response, threat intelligence integration, and security orchestration.",
  },
  {
    title: "Compliance Management",
    desc: "Compliance score optimization, regulatory requirement mapping, audit preparation, and continuous compliance monitoring.",
  },
  {
    title: "Security Awareness Training",
    desc: "Employee training programs, phishing simulations, security awareness campaigns, and behavior-based security metrics.",
  },
  {
    title: "Cloud App Security",
    desc: "Microsoft Defender for Cloud Apps, shadow IT discovery, cloud app risk assessment, and cloud access security broker configuration.",
  },
  {
    title: "SharePoint & Teams Security",
    desc: "SharePoint Online security, Microsoft Teams protection, guest access controls, and collaboration security policies.",
  },
  {
    title: "Exchange Online Protection",
    desc: "Exchange Online security configuration, mail flow security, transport rules, and advanced email threat protection.",
  },
  {
    title: "Backup & Recovery",
    desc: "Microsoft 365 backup configuration, disaster recovery planning, data retention policies, and recovery testing.",
  },
  {
    title: "Security Posture Management",
    desc: "Microsoft Secure Score optimization, security recommendations implementation, and continuous security posture monitoring.",
  },
];

const faqs = [
  {
    question: "What Microsoft 365 services do you secure?",
    answer:
      "We secure all Microsoft 365 services including Exchange Online, SharePoint Online, Microsoft Teams, OneDrive for Business, Azure Active Directory (Entra ID), and all Microsoft Defender services. Our comprehensive approach covers identity protection, email security, endpoint protection, data loss prevention, compliance management, and threat detection across your entire Microsoft 365 environment. We also secure hybrid environments with on-premises Active Directory integration, Azure AD Connect configuration, and cloud app security for third-party applications.",
  },
  {
    question: "How long does a Microsoft 365 security implementation take?",
    answer:
      "Duration depends on your environment size and complexity. A security assessment typically takes 1-2 weeks, including tenant configuration review, security gap analysis, and remediation planning. Complete security implementation for small to medium organizations takes 3-4 weeks, covering identity protection, data security, threat detection, and compliance configuration. Large enterprise implementations with complex requirements may take 6-8 weeks. The timeline includes: initial assessment (1-2 weeks), security configuration (2-3 weeks), testing and validation (1 week), training (ongoing), and post-implementation support (continuous).",
  },
  {
    question: "Do you provide ongoing security monitoring and management?",
    answer:
      "Yes, we offer 24/7 security monitoring and managed security services through our Enterprise Security Program tier. This includes continuous security monitoring using Microsoft Sentinel, automated threat detection and response, proactive threat hunting, incident response services, regular security assessments, compliance monitoring and reporting, security posture optimization, and dedicated security analysts. We also provide monthly executive reporting, quarterly security reviews, and continuous improvement recommendations to ensure your Microsoft 365 environment remains secure against evolving threats.",
  },
  {
    question: "Can you help achieve compliance with specific regulations?",
    answer:
      "Absolutely. We specialize in helping organizations achieve and maintain compliance with various regulations including GDPR (General Data Protection Regulation), HIPAA (Health Insurance Portability and Accountability Act), ISO 27001 (Information Security Management), SOC 2 (Service Organization Control), PCI DSS (Payment Card Industry Data Security Standard), and industry-specific regulations. We implement appropriate security controls, configure compliance policies, establish audit trails, create compliance documentation, and provide ongoing compliance monitoring. Our team maps Microsoft 365 security features to specific regulatory requirements and helps prepare for compliance audits.",
  },
];

const painPoints = [
  "Is our Microsoft 365 environment secure?",
  "Are we compliant with regulations?",
  "How do we protect against modern threats?",
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

export default function Microsoft365SecurityPage() {
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
              Cloud Productivity Security
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              Microsoft 365 Security Services
            </h1>
            <p className="mt-4 text-lg text-white/80 md:text-xl">
              Comprehensive security solutions for your Microsoft 365 environment, protecting identities, data, and productivity tools from modern cyber threats.
            </p>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Expert security implementation covering Azure AD/Entra ID, Microsoft Defender, data loss prevention, compliance management, and continuous threat monitoring.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/contact?subject=Microsoft%20365%20Security"
                aria-label="Secure Your M365 Environment"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <motion.span
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  whileTap={reduceMotion ? undefined : { y: 0 }}
                  className="inline-flex items-center"
                >
                  Secure Your M365 Environment
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
              title="Transform your Microsoft 365 security posture."
              subtitle="Comprehensive protection that safeguards your business while maintaining productivity and compliance."
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
              eyebrow="Compliance Standards"
              title="Meet regulatory requirements with confidence."
              subtitle="Achieve and maintain compliance with industry-leading security standards and regulations."
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
              title="Proven approach to Microsoft 365 security."
              subtitle="Systematic implementation process ensuring comprehensive protection across your entire environment."
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
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">Implementation process</h3>
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
              eyebrow="Security Services"
              title="Comprehensive Microsoft 365 protection."
              subtitle="Complete security coverage for all Microsoft 365 workloads and services."
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

      {/* Security Coverage Section with Image */}
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
                eyebrow="Security Coverage"
                title="Complete Microsoft 365 protection."
                subtitle="Secure every layer of your cloud productivity environment from identity to data."
              />
              <div className="mt-8">
                <div className="relative rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-900/70">
                  <div className="pointer-events-none absolute -inset-1 rounded-[22px] bg-gradient-to-r from-violet-500/30 via-blue-600/20 to-transparent opacity-70" />
                  <div className="relative overflow-hidden rounded-2xl bg-slate-950/5 p-6 dark:bg-slate-950">
                    <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-violet-500/20 blur-2xl" />
                    <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-blue-600/20 blur-2xl" />
                    <div className="relative">
                      <Image
                        src="/assets/services/nt.jpg"
                        alt="Microsoft 365 Security Coverage"
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
              title="Microsoft 365 security experts."
              subtitle="Deep expertise in Microsoft security technologies combined with proven implementation methodologies."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Microsoft certified experts",
                  description: "Team of Microsoft certified security professionals with extensive experience in Azure AD, Defender, and compliance solutions.",
                  Icon: IconTarget,
                },
                {
                  title: "Comprehensive approach",
                  description: "End-to-end security implementation covering identity, data, endpoints, and compliance with continuous monitoring and support.",
                  Icon: IconShield,
                },
                {
                  title: "Proven track record",
                  description: "Successfully secured hundreds of Microsoft 365 environments across healthcare, finance, government, and enterprise sectors.",
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
              title="Comprehensive security documentation."
              subtitle="Everything needed to understand, maintain, and improve your Microsoft 365 security."
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
              title="Microsoft 365 security for diverse needs."
              subtitle="Tailored security solutions addressing unique cloud security challenges."
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
              title="Flexible security programs."
              subtitle="From assessment to managed security services, choose the right level of protection."
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
              title="Common questions about Microsoft 365 security."
              subtitle="Clear answers to help you understand our security services."
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
              Secure your Microsoft 365 environment today.
            </h2>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Protect your business with comprehensive Microsoft 365 security solutions.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact?subject=Microsoft%20365%20Security"
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
        className={`fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200/70 bg-white/95 px-4 py-3 shadow-lg backdrop-blur-md transition md:hidden dark:border-slate-800/70 dark:bg-slate-950/90 ${showMobileCta ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
          }`}
        role="region"
        aria-label="Quick action"
      >
        <div className="flex items-center justify-between gap-3">
          <div className="text-xs font-semibold text-slate-700 dark:text-slate-200">
            Ready to secure your M365?
          </div>
          <Link
            href="/contact?subject=Microsoft%20365%20Security"
            aria-label="Get Started"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white"
          >
            Get Started
          </Link>
        </div>
      </div>
    </motion.main>
  );
}