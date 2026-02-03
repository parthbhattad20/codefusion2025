"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const outcomes = [
  {
    title: "Reduced Attack Surface",
    description:
      "Minimize server vulnerabilities by removing unnecessary services, ports, and configurations that attackers commonly exploit.",
  },
  {
    title: "Enhanced Security Posture",
    description:
      "Strengthen server defenses with industry-standard hardening practices aligned with CIS benchmarks and security frameworks.",
  },
  {
    title: "Compliance Achievement",
    description:
      "Meet regulatory requirements including PCI DSS, ISO 27001, NIST, and HIPAA through systematic server hardening.",
  },
  {
    title: "Performance Optimization",
    description:
      "Maintain optimal server performance while implementing security controls that don't negatively impact business operations.",
  },
];

const complianceBadges = [
  "CIS Benchmarks",
  "ISO 27001",
  "NIST",
  "PCI DSS",
  "HIPAA",
  "SOC 2",
];

const methodology = [
  {
    title: "Server Assessment & Inventory",
    description:
      "Comprehensive baseline assessment of all servers including OS versions, installed services, running processes, and current security configurations.",
  },
  {
    title: "Vulnerability Analysis",
    description:
      "Identify security weaknesses, misconfigurations, unnecessary services, and compliance gaps using automated tools and manual review.",
  },
  {
    title: "Hardening Implementation",
    description:
      "Apply security configurations for operating systems, services, network settings, access controls, and application-level protections.",
  },
  {
    title: "Security Validation & Testing",
    description:
      "Test hardened configurations for security effectiveness, functionality, performance impact, and compliance with security benchmarks.",
  },
  {
    title: "Documentation & Monitoring",
    description:
      "Document all changes, create rollback procedures, establish monitoring guidelines, and provide ongoing maintenance recommendations.",
  },
];

const processSteps = [
  {
    title: "Assessment",
    description: "Server inventory, baseline analysis.",
  },
  {
    title: "Planning",
    description: "Hardening strategy, risk analysis.",
  },
  {
    title: "Implementation",
    description: "Configuration changes, security controls.",
  },
  {
    title: "Validation",
    description: "Testing, performance checks.",
  },
  {
    title: "Documentation",
    description: "Reporting, monitoring setup.",
  },
];

const securityCategories = [
  {
    title: "Operating System",
    items: ["User accounts", "File permissions", "Kernel hardening", "Service management"],
  },
  {
    title: "Network Security",
    items: ["Firewall rules", "Port management", "SSL/TLS config", "Network segmentation"],
  },
  {
    title: "Access Control",
    items: ["Authentication", "Authorization", "Privilege management", "MFA implementation"],
  },
  {
    title: "Monitoring & Logging",
    items: ["Audit logging", "SIEM integration", "Alert configuration", "Log retention"],
  },
];

const deliverables = [
  "Comprehensive server hardening report with executive summary",
  "Detailed configuration changes with before/after comparisons",
  "CIS benchmark compliance assessment and scoring",
  "Hardening checklist with step-by-step implementation guide",
  "Security baseline documentation for future reference",
  "Rollback procedures and recovery scripts",
  "Performance impact analysis and optimization recommendations",
  "Monitoring and alerting configuration documentation",
  "Network diagram showing hardened infrastructure",
  "Compliance framework mapping (PCI DSS, ISO 27001, NIST)",
  "Security best practices and ongoing maintenance guide",
  "Post-hardening support and consultation",
];

const useCases = [
  {
    title: "Infrastructure Migration",
    description:
      "Secure servers during cloud migration or data center relocation with comprehensive hardening before production deployment.",
  },
  {
    title: "Regulatory Compliance",
    description:
      "Achieve and maintain compliance with PCI DSS, HIPAA, SOC 2, and other regulatory requirements through systematic hardening.",
  },
  {
    title: "Legacy System Security",
    description:
      "Secure legacy servers and applications that cannot be immediately replaced, extending their secure operational lifespan.",
  },
  {
    title: "Post-Incident Hardening",
    description:
      "Comprehensive server hardening after security incidents to prevent similar attacks and strengthen overall infrastructure security.",
  },
];

const engagementTiers = [
  {
    title: "Basic Server Hardening",
    description:
      "Essential hardening for small server environments with standard OS configurations and basic security controls.",
    bullets: ["Up to 5 servers", "Standard OS hardening", "Basic compliance"],
  },
  {
    title: "Comprehensive Hardening",
    description:
      "Full-scale hardening for medium to large environments covering operating systems, applications, and network configurations.",
    bullets: ["Up to 25 servers", "Advanced hardening", "Full compliance"],
  },
  {
    title: "Enterprise Hardening Program",
    description:
      "Ongoing hardening service with automation, continuous monitoring, and regular security updates for enterprise environments.",
    bullets: ["Unlimited servers", "Automation", "Continuous monitoring"],
  },
];

const testingServices = [
  {
    title: "Windows Server Hardening",
    desc: "Comprehensive hardening of Windows Server environments using CIS benchmarks and Microsoft security best practices.",
  },
  {
    title: "Linux Server Hardening",
    desc: "Secure Linux servers across all major distributions (Ubuntu, CentOS, RHEL, Debian) with distribution-specific hardening.",
  },
  {
    title: "Database Server Security",
    desc: "Harden database servers including SQL Server, Oracle, MySQL, PostgreSQL with encryption and access controls.",
  },
  {
    title: "Web Server Hardening",
    desc: "Secure web servers (IIS, Apache, Nginx) against common attacks with proper configuration and SSL/TLS implementation.",
  },
  {
    title: "Cloud Server Hardening",
    desc: "Harden cloud infrastructure on AWS, Azure, and GCP with cloud-specific security controls and configurations.",
  },
  {
    title: "Container Security",
    desc: "Secure Docker containers and Kubernetes clusters with hardening best practices and runtime protection.",
  },
  {
    title: "Network Device Hardening",
    desc: "Harden network infrastructure including firewalls, switches, routers, and load balancers.",
  },
  {
    title: "Application Server Security",
    desc: "Secure application servers (Tomcat, JBoss, WebLogic) with configuration hardening and security updates.",
  },
  {
    title: "File Server Hardening",
    desc: "Secure file servers and NAS devices with access controls, encryption, and audit logging.",
  },
  {
    title: "Email Server Security",
    desc: "Harden email servers (Exchange, Postfix) with anti-spam, encryption, and authentication controls.",
  },
  {
    title: "DNS Server Hardening",
    desc: "Secure DNS infrastructure against DNS attacks, cache poisoning, and unauthorized zone transfers.",
  },
  {
    title: "Directory Services Hardening",
    desc: "Harden Active Directory and LDAP servers with security policies, replication security, and access controls.",
  },
];

const faqs = [
  {
    question: "What is server hardening and why is it important?",
    answer:
      "Server hardening is the process of securing a server by reducing its attack surface and strengthening its defenses against cyber threats. This involves removing unnecessary services, applying security patches, configuring firewalls, implementing strong access controls, and following industry security benchmarks like CIS. Hardening is critical because default server configurations often prioritize functionality over security, leaving systems vulnerable to attacks. A properly hardened server significantly reduces the risk of breaches, data theft, and service disruptions. It's especially important for compliance with regulations like PCI DSS, HIPAA, and ISO 27001 which require documented security controls and baseline configurations.",
  },
  {
    question: "How long does server hardening take?",
    answer:
      "The duration depends on the number of servers, complexity of the environment, and hardening requirements. A single server typically takes 1-2 days for basic hardening, including assessment, implementation, and testing. For multiple servers, we can parallelize the work, typically hardening 5-10 servers per week depending on complexity. Enterprise environments with 25+ servers may require 2-4 weeks for comprehensive hardening. The timeline includes: initial assessment (1-2 days), hardening implementation (2-5 days per server batch), testing and validation (1-2 days), and documentation (1-2 days). We provide detailed project timelines during scoping based on your specific infrastructure and requirements.",
  },
  {
    question: "Will server hardening affect system performance or applications?",
    answer:
      "Professional server hardening is designed to enhance security while maintaining or improving performance. Most hardening changes have minimal to no performance impact - disabling unnecessary services often improves performance by freeing resources. We carefully test all changes in non-production environments first, monitor performance metrics throughout implementation, and can roll back any changes that cause issues. Some security controls like encryption or detailed logging may have minor performance overhead (typically less than 5%), but we optimize configurations to minimize impact. We work closely with your team to understand application requirements and ensure hardening doesn't disrupt critical business operations. Our approach balances security with functionality and performance.",
  },
  {
    question: "What's the difference between server hardening and vulnerability management?",
    answer:
      "Server hardening and vulnerability management are complementary but different security practices. Hardening is proactive - it involves configuring servers securely from the start by removing unnecessary features, implementing security controls, and following best practices to prevent vulnerabilities. Vulnerability management is reactive - it identifies and patches known vulnerabilities in software and configurations. Think of hardening as building a strong foundation with secure defaults, while vulnerability management is ongoing maintenance to fix newly discovered issues. Best practice is to harden servers first to establish a secure baseline, then maintain that security through continuous vulnerability scanning and patch management. Together, they provide comprehensive server security.",
  },
];

const painPoints = [
  "Are your servers secure by default?",
  "Do you meet compliance requirements?",
  "Can you withstand targeted attacks?",
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

const IconServer = ({ className }) => (
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
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
    <line x1="6" y1="6" x2="6.01" y2="6" />
    <line x1="6" y1="18" x2="6.01" y2="18" />
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
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
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

export default function ServerHardeningPage() {
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
              Infrastructure Security Engineering
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              Server Hardening Services
            </h1>
            <p className="mt-4 text-lg text-white/80 md:text-xl">
              Minimize attack surfaces and strengthen server defenses. Expert hardening services following CIS benchmarks and industry best practices.
            </p>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Comprehensive server security covering operating systems, applications, network configurations, and access controls with compliance-focused implementation.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/contact"
                aria-label="Request Server Hardening"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <motion.span
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  whileTap={reduceMotion ? undefined : { y: 0 }}
                  className="inline-flex items-center"
                >
                  Request Server Hardening
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
              title="Secure servers from the ground up."
              subtitle="Systematic hardening that reduces vulnerabilities while maintaining performance and operational efficiency."
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
              title="Hardening aligned with industry benchmarks."
              subtitle="Server configurations following CIS, NIST, and compliance frameworks for maximum security."
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
              title="Structured approach to server hardening."
              subtitle="We secure your infrastructure systematically—from assessment to validation and ongoing monitoring."
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
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">Server hardening process</h3>
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
              eyebrow="Hardening Services"
              title="Comprehensive server security solutions."
              subtitle="From Windows to Linux, cloud to on-premise, covering all aspects of server infrastructure."
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
                title="Complete server infrastructure hardening."
                subtitle="We secure all layers of your server environment from operating system to applications."
              />
              <div className="mt-8">
                <div className="relative rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-900/70">
                  <div className="pointer-events-none absolute -inset-1 rounded-[22px] bg-gradient-to-r from-violet-500/30 via-blue-600/20 to-transparent opacity-70" />
                  <div className="relative overflow-hidden rounded-2xl bg-slate-950/5 p-6 dark:bg-slate-950">
                    <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-violet-500/20 blur-2xl" />
                    <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-blue-600/20 blur-2xl" />
                    <div className="relative">
                      <Image
                        src="/assets/services/cloud.jpg"
                        alt="Server Hardening Coverage"
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
              title="Expert-led server hardening."
              subtitle="We combine deep technical expertise with proven methodologies and industry best practices."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Certified hardening specialists",
                  description: "CIS-certified professionals with extensive experience hardening enterprise server environments across all platforms.",
                  Icon: IconShield,
                },
                {
                  title: "Performance-focused approach",
                  description: "Security implementations that maintain or improve server performance while strengthening defenses.",
                  Icon: IconServer,
                },
                {
                  title: "Comprehensive coverage",
                  description: "End-to-end hardening from operating system to applications, covering on-premise and cloud infrastructure.",
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
              title="Comprehensive hardening documentation."
              subtitle="Everything needed to understand, maintain, and verify hardened server configurations."
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
              title="Server hardening for diverse needs."
              subtitle="Tailored hardening solutions addressing unique infrastructure security challenges."
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
              title="Flexible hardening programs."
              subtitle="From targeted server hardening to enterprise-wide security implementations."
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
              title="Common questions about server hardening."
              subtitle="Clear answers to help you understand server hardening services."
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
              Secure your servers before attackers find weaknesses.
            </h2>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Comprehensive server hardening with expert implementation and ongoing support.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                aria-label="Speak With a Hardening Specialist"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Speak With a Hardening Specialist
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
            Ready for server hardening?
          </div>
          <Link
            href="/contact"
            aria-label="Request Hardening"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white"
          >
            Get Started
          </Link>
        </div>
      </div>
    </motion.main>
  );
}