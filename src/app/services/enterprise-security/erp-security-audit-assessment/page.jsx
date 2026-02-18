"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const outcomes = [
    {
        title: "ERP System Protection",
        description:
            "Comprehensive security assessment of ERP systems to prevent unauthorized access, data breaches, and system compromise.",
    },
    {
        title: "Data Integrity Assurance",
        description:
            "Evaluate data handling processes, backup mechanisms, and integrity controls to ensure business-critical information remains secure.",
    },
    {
        title: "Access Control Validation",
        description:
            "Audit user roles, permissions, and segregation of duties to prevent privilege escalation and unauthorized data access.",
    },
    {
        title: "Compliance Verification",
        description:
            "Ensure ERP implementations meet regulatory requirements including SOX, GDPR, HIPAA, and industry-specific compliance standards.",
    },
];

const complianceBadges = [
    "SOX",
    "GDPR",
    "ISO 27001",
    "NIST",
    "PCI DSS",
    "HIPAA",
];

const methodology = [
    {
        title: "ERP Infrastructure Assessment",
        description:
            "Comprehensive review of ERP servers, databases, application servers, and supporting infrastructure including configuration analysis.",
    },
    {
        title: "Access Control & Authorization",
        description:
            "Evaluation of user authentication, role-based access control (RBAC), multi-factor authentication, and privilege management.",
    },
    {
        title: "Data Security Analysis",
        description:
            "Testing of data encryption, backup security, data masking, and protection against unauthorized data extraction or modification.",
    },
    {
        title: "Integration Security Testing",
        description:
            "Assessment of API security, third-party integrations, data flows, and secure communication between ERP modules and external systems.",
    },
    {
        title: "Business Logic Validation",
        description:
            "Audit of ERP business processes, workflow security, transaction controls, and protection against business logic flaws.",
    },
];

const processSteps = [
    {
        title: "Discovery",
        description: "ERP system mapping and asset inventory.",
    },
    {
        title: "Assessment",
        description: "Configuration and access control review.",
    },
    {
        title: "Testing",
        description: "Vulnerability testing and data security validation.",
    },
    {
        title: "Analysis",
        description: "Risk evaluation and compliance verification.",
    },
    {
        title: "Reporting",
        description: "Findings documentation and remediation guidance.",
    },
];

const securityCategories = [
    {
        title: "Access Control",
        items: ["User authentication", "RBAC", "MFA", "Privileges"],
    },
    {
        title: "Data Security",
        items: ["Encryption", "Backup security", "Data masking", "Integrity"],
    },
    {
        title: "System Security",
        items: ["Server hardening", "Patch management", "Configuration", "Monitoring"],
    },
    {
        title: "Integration",
        items: ["API security", "Third-party risks", "Data flows", "Communication"],
    },
];

const deliverables = [
    "Comprehensive ERP security audit report with executive summary",
    "Detailed vulnerability findings with CVSS scores and risk ratings",
    "Access control and authorization assessment results",
    "Data security and encryption evaluation findings",
    "Integration security testing results and API vulnerabilities",
    "Compliance mapping against SOX, GDPR, and other regulatory requirements",
    "Business logic and workflow security analysis",
    "Step-by-step remediation guidance with technical implementation details",
    "ERP security best practices and hardening recommendations",
    "User access review and role optimization suggestions",
    "Post-audit consultation and implementation support",
    "Continuous monitoring and improvement recommendations",
];

const useCases = [
    {
        title: "ERP Implementation Security",
        description:
            "Conduct comprehensive security assessment before ERP system deployment to ensure secure configuration and compliance.",
    },
    {
        title: "Regulatory Compliance",
        description:
            "Meet SOX, GDPR, HIPAA, and other regulatory requirements for ERP system security, data protection, and access controls.",
    },
    {
        title: "Post-Implementation Review",
        description:
            "Following ERP system deployment or upgrades, perform thorough security audit to identify configuration issues and vulnerabilities.",
    },
    {
        title: "Third-Party Integration Security",
        description:
            "Audit security of ERP integrations with external systems, APIs, and third-party applications to prevent data breaches.",
    },
];

const engagementTiers = [
    {
        title: "ERP Security Quick Assessment",
        description:
            "Rapid evaluation of critical ERP security controls including access management and basic configuration within 2-3 weeks.",
        bullets: ["2-3 weeks", "Basic assessment", "Critical controls"],
    },
    {
        title: "Comprehensive ERP Audit",
        description:
            "Full-scope ERP security evaluation covering infrastructure, data security, integrations, and compliance requirements.",
        bullets: ["4-6 weeks", "Complete audit", "Advanced testing"],
    },
    {
        title: "Continuous ERP Monitoring",
        description:
            "Ongoing ERP security monitoring with quarterly audits, access reviews, and continuous compliance validation.",
        bullets: ["Quarterly", "Ongoing monitoring", "Proactive security"],
    },
];

const testingServices = [
    {
        title: "Access Control Testing",
        desc: "User authentication, role-based access control, privilege escalation prevention, and segregation of duties validation.",
    },
    {
        title: "Data Security Assessment",
        desc: "Data encryption, backup security, data integrity controls, and protection against unauthorized data access or modification.",
    },
    {
        title: "Integration Security Testing",
        desc: "API security, third-party integration risks, secure data flows, and communication channel protection.",
    },
    {
        title: "Configuration Management",
        desc: "System hardening, patch management, security configurations, and vulnerability management processes.",
    },
    {
        title: "Business Logic Testing",
        desc: "Workflow security, transaction controls, business process validation, and protection against logic-based attacks.",
    },
    {
        title: "Compliance Verification",
        desc: "SOX controls, GDPR requirements, industry regulations, and audit trail validation.",
    },
    {
        title: "Performance Security",
        desc: "Security impact on system performance, scalability testing, and secure load handling.",
    },
    {
        title: "Disaster Recovery",
        desc: "Backup security, recovery procedures, business continuity, and incident response validation.",
    },
];

const faqs = [
    {
        question: "What is ERP security audit and why is it important?",
        answer:
            "An ERP security audit is a comprehensive assessment of Enterprise Resource Planning system security, covering access controls, data protection, integration security, and compliance requirements. ERP systems contain critical business data and processes, making them prime targets for cyber attacks. A thorough audit helps prevent data breaches, ensures regulatory compliance, and protects business operations. ERP security is crucial because these systems often contain sensitive financial data, customer information, and intellectual property. Security vulnerabilities in ERP systems can lead to financial losses, regulatory penalties, and reputational damage. Regular audits ensure that ERP implementations remain secure as business needs evolve and new threats emerge.",
    },
    {
        question: "How long does an ERP security audit take?",
        answer:
            "The duration depends on the ERP system complexity, number of modules, user base size, and integration scope. A basic ERP security assessment typically takes 2-3 weeks, including access control review and basic testing. A comprehensive audit covering multiple ERP modules, complex integrations, and extensive testing usually requires 4-6 weeks. This includes: initial system discovery and documentation (1-2 weeks), detailed security testing and assessment (2-3 weeks), analysis and reporting (1 week). Factors affecting timeline include ERP system size, number of customizations, integration complexity, and whether production testing is allowed. We provide detailed timeline estimates during scoping discussions.",
    },
    {
        question: "Will the ERP audit disrupt business operations?",
        answer:
            "Professional ERP security audits are designed to minimize business disruption while providing comprehensive testing. We use read-only assessment techniques, passive monitoring, and controlled testing methods that don't interfere with normal ERP operations. For active testing, we coordinate with your team and schedule during maintenance windows. Most ERP audits can be conducted during normal business hours without service interruption. We establish clear communication channels and can pause testing if any issues arise. The goal is thorough security evaluation with minimal impact on business productivity and ERP system availability.",
    },
    {
        question: "What ERP systems do you support for security audits?",
        answer:
            "We provide ERP security audit services for all major ERP platforms including SAP, Oracle ERP, Microsoft Dynamics, Infor, Epicor, and custom ERP implementations. Our certified security professionals have extensive experience with various ERP architectures, from on-premise deployments to cloud-based ERP systems. We understand the unique security challenges of each platform, including specific vulnerabilities, configuration requirements, and compliance considerations. Whether your ERP system is hosted on-premises, in the cloud, or hybrid environment, we can conduct comprehensive security assessments tailored to your specific ERP platform and business requirements.",
    },
];

const painPoints = [
    "Are ERP systems properly secured against unauthorized access?",
    "Is sensitive business data adequately protected?",
    "Do we meet regulatory compliance requirements?",
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

export default function ERPSecurityAuditPage() {
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
                            Enterprise ERP Security
                        </div>
                        <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
                            ERP Security Audit & Assessment
                        </h1>
                        <p className="mt-4 text-lg text-white/80 md:text-xl">
                            Comprehensive security evaluation of ERP systems to protect critical business data and ensure compliance. Secure your enterprise resource planning infrastructure.
                        </p>
                        <p className="mt-3 text-sm text-white/70 md:text-base">
                            Assess access controls, data security, integration risks, and compliance across SAP, Oracle, Microsoft Dynamics, and custom ERP implementations.
                        </p>
                        <div className="mt-7 flex flex-wrap gap-4">
                            <Link
                                href="/contact?subject=services&subSubject=ERP%20Security%20Audit%20Assessment"
                                aria-label="Request an ERP Audit"
                                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                            >
                                <motion.span
                                    whileHover={reduceMotion ? undefined : { y: -2 }}
                                    whileTap={reduceMotion ? undefined : { y: 0 }}
                                    className="inline-flex items-center"
                                >
                                    Request an ERP Audit
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
                            title="Secure ERP system protection."
                            subtitle="Identify and eliminate security risks in your enterprise resource planning systems before they impact business operations."
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
                            title="ERP compliance frameworks."
                            subtitle="Comprehensive ERP security testing aligned with regulatory requirements and industry standards."
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
                            title="Structured ERP security assessment approach."
                            subtitle="Systematic evaluation of ERP systems from infrastructure security to business process protection."
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
                            <h3 className="text-base font-semibold text-slate-900 dark:text-white">ERP security audit process</h3>
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
                            title="Complete ERP security assessment coverage."
                            subtitle="From access controls to integration security, covering all aspects of ERP system protection."
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

            {/* Security Coverage Section with ERP Image */}
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
                                title="Complete ERP ecosystem protection."
                                subtitle="We assess every layer of your ERP security from infrastructure to business processes."
                            />
                            <div className="mt-8">
                                <div className="relative rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-900/70">
                                    <div className="pointer-events-none absolute -inset-1 rounded-[22px] bg-gradient-to-r from-violet-500/30 via-blue-600/20 to-transparent opacity-70" />
                                    <div className="relative overflow-hidden rounded-2xl bg-slate-950/5 p-6 dark:bg-slate-950">
                                        <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-violet-500/20 blur-2xl" />
                                        <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-blue-600/20 blur-2xl" />
                                        <div className="relative">
                                            <Image
                                                src="/assets/services/erp.jpg"
                                                alt="ERP Security Audit"
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
                            title="Expert ERP security specialists."
                            subtitle="We combine deep ERP knowledge with advanced security expertise to protect your business-critical systems."
                        />
                        <div className="mt-10 grid gap-5 md:grid-cols-3">
                            {[
                                {
                                    title: "ERP security experts",
                                    description: "Certified professionals with extensive experience in SAP, Oracle, Microsoft Dynamics, and custom ERP security.",
                                    Icon: IconTarget,
                                },
                                {
                                    title: "Business process knowledge",
                                    description: "Deep understanding of ERP workflows, business logic, and how security impacts operational efficiency.",
                                    Icon: IconShield,
                                },
                                {
                                    title: "Compliance expertise",
                                    description: "Specialized knowledge in SOX, GDPR, and industry-specific regulatory requirements for ERP systems.",
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
                            title="Comprehensive ERP security documentation."
                            subtitle="Everything needed to understand and strengthen your ERP system security posture."
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
                            title="ERP security audits for diverse business needs."
                            subtitle="Tailored assessments addressing unique ERP security challenges across different scenarios."
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
                            title="Flexible ERP security assessment programs."
                            subtitle="From quick evaluations to comprehensive audits and ongoing monitoring services."
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
                            title="Common questions about ERP security audits."
                            subtitle="Clear answers to help you understand ERP system security assessment and protection."
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
                            Secure your ERP systems today.
                        </h2>
                        <p className="mt-3 text-sm text-white/70 md:text-base">
                            Protect critical business data and ensure compliance with comprehensive ERP security audits.
                        </p>
                        <div className="mt-7 flex flex-wrap justify-center gap-4">
                            <Link
                                href="/contact?subject=services&subSubject=ERP%20Security%20Audit%20Assessment"
                                aria-label="Speak With an ERP Security Expert"
                                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                            >
                                Speak With an ERP Security Expert
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
                        Ready for ERP security audit?
                    </div>
                    <Link
                        href="/contact?subject=services&subSubject=ERP%20Security%20Audit%20Assessment"
                        aria-label="Request an Audit"
                        className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </motion.main>
    );
}