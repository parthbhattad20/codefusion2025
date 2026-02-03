"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const outcomes = [
  {
    title: "Architectural Risk Mitigation",
    description:
      "Identify and eliminate fundamental security design flaws in your infrastructure before they can be exploited by attackers or lead to compliance violations.",
  },
  {
    title: "Defense-in-Depth Implementation",
    description:
      "Ensure multiple layers of security controls work together effectively, providing redundant protection against sophisticated multi-stage attacks.",
  },
  {
    title: "Compliance Architecture Alignment",
    description:
      "Align your security architecture with ISO 27001, NIST CSF, PCI DSS, and GDPR requirements through proper control design and implementation.",
  },
  {
    title: "Scalable Security Design",
    description:
      "Create security architectures that grow with your business while maintaining robust protection and operational efficiency at scale.",
  },
  {
    title: "Zero Trust Foundation",
    description:
      "Establish Zero Trust principles as the foundation of your security architecture with never trust, always verify approach and microsegmentation.",
  },
  {
    title: "Cost-Effective Security",
    description:
      "Optimize security investments by focusing on high-impact controls, eliminating redundancies, and aligning spending with actual risk levels.",
  },
];

const complianceBadges = [
  "ISO 27001",
  "NIST CSF",
  "PCI DSS",
  "GDPR",
  "TOGAF",
  "Zero Trust",
];

const methodology = [
  {
    title: "Architecture Discovery & Mapping",
    description:
      "Comprehensive documentation of current security architecture including network topology, security zones, data flows, trust boundaries, and existing controls across on-premises and cloud environments.",
  },
  {
    title: "Threat Modeling & Analysis",
    description:
      "Systematic identification of potential attack vectors, threat actors, and attack scenarios using STRIDE, PASTA, and MITRE ATT&CK frameworks to understand how adversaries could exploit your architecture.",
  },
  {
    title: "Security Control Assessment",
    description:
      "Evaluate effectiveness of existing security controls across all layers including network, application, data, and identity, identifying gaps in protection mechanisms and control coverage.",
  },
  {
    title: "Risk Quantification & Prioritization",
    description:
      "Quantify security risks based on likelihood and business impact using FAIR methodology, prioritizing remediation efforts based on risk exposure and organizational risk tolerance.",
  },
  {
    title: "Architecture Design & Recommendations",
    description:
      "Design improved security architecture incorporating defense-in-depth, Zero Trust principles, microsegmentation, and industry best practices aligned with business objectives and compliance requirements.",
  },
  {
    title: "Implementation Roadmap & Governance",
    description:
      "Create detailed implementation plans with timelines, dependencies, resource requirements, success metrics, and ongoing governance framework for continuous architecture improvement.",
  },
];

const processSteps = [
  {
    title: "Discovery",
    description: "Architecture mapping and documentation.",
  },
  {
    title: "Modeling",
    description: "Threat modeling and attack analysis.",
  },
  {
    title: "Assessment",
    description: "Control evaluation and gap analysis.",
  },
  {
    title: "Analysis",
    description: "Risk quantification and prioritization.",
  },
  {
    title: "Design",
    description: "Improved architecture design.",
  },
  {
    title: "Roadmap",
    description: "Implementation planning and governance.",
  },
];

const securityCategories = [
  {
    title: "Network Security",
    items: ["Segmentation", "Access controls", "Firewall design", "VPN architecture"],
  },
  {
    title: "Cloud Security",
    items: ["Multi-cloud", "Container security", "Serverless", "Cloud-native"],
  },
  {
    title: "Identity Security",
    items: ["IAM architecture", "Zero Trust", "Privileged access", "Federation"],
  },
  {
    title: "Data Security",
    items: ["Classification", "Encryption", "DLP", "Data governance"],
  },
];

const deliverables = [
  "Security Architecture Assessment Report with executive summary and technical findings",
  "Current state architecture diagrams showing security zones, trust boundaries, and data flows",
  "Threat model documentation identifying attack vectors, threat actors, and attack scenarios",
  "Risk assessment matrix with likelihood, impact, and prioritized remediation recommendations",
  "Future state architecture design with defense-in-depth and Zero Trust implementation",
  "Security control gap analysis mapped to compliance frameworks and industry standards",
  "Implementation roadmap with phases, timelines, dependencies, and resource requirements",
  "Network segmentation design with microsegmentation and least privilege access controls",
  "Identity and access management architecture with authentication and authorization flows",
  "Data protection architecture including classification, encryption, and DLP strategies",
  "Cloud security architecture for multi-cloud and hybrid environments",
  "Security governance framework with policies, procedures, and ongoing assessment criteria",
];

const useCases = [
  {
    title: "Digital Transformation Security",
    description:
      "Secure digital transformation initiatives with modern architecture that supports cloud adoption, DevOps, and agile development while maintaining strong security posture.",
  },
  {
    title: "Cloud Migration Architecture",
    description:
      "Design secure cloud architectures for AWS, Azure, and GCP migrations with proper segmentation, identity management, and data protection controls for hybrid environments.",
  },
  {
    title: "Regulatory Compliance",
    description:
      "Achieve and maintain compliance with PCI DSS, HIPAA, SOC 2, and GDPR through security architecture that implements required controls and supports audit requirements.",
  },
  {
    title: "Mergers & Acquisitions Security",
    description:
      "Assess and integrate security architectures during M&A activities, identifying risks, normalizing controls, and creating unified security design for combined entities.",
  },
];

const engagementTiers = [
  {
    title: "Architecture Assessment",
    description:
      "Focused review of current security architecture with gap analysis, threat modeling, and high-level recommendations for improvement.",
    bullets: ["2-3 weeks", "Current state review", "Gap analysis"],
  },
  {
    title: "Comprehensive Review",
    description:
      "Complete security architecture evaluation with detailed threat modeling, risk quantification, future state design, and implementation roadmap.",
    bullets: ["4-6 weeks", "Full assessment", "Design included"],
  },
  {
    title: "Enterprise Architecture Program",
    description:
      "Ongoing architecture governance with quarterly reviews, continuous improvement, CISO advisory, and architecture evolution support.",
    bullets: ["Continuous", "Quarterly reviews", "Advisory support"],
  },
];

const testingServices = [
  {
    title: "Security Architecture Assessment",
    desc: "Comprehensive evaluation of current security architecture design, implementation, and effectiveness across all technology layers and business units.",
  },
  {
    title: "Threat Modeling Services",
    desc: "Systematic threat identification using STRIDE, PASTA, and MITRE ATT&CK frameworks to understand attack vectors and adversary tactics.",
  },
  {
    title: "Zero Trust Architecture Design",
    desc: "Design and implement Zero Trust security models with never trust always verify principles, microsegmentation, and least privilege access.",
  },
  {
    title: "Network Security Architecture",
    desc: "Design secure network architectures with proper segmentation, DMZ design, firewall ruleset optimization, and secure remote access.",
  },
  {
    title: "Cloud Security Architecture",
    desc: "Secure AWS, Azure, GCP, and multi-cloud environments with proper security controls, identity management, and compliance configurations.",
  },
  {
    title: "Identity & Access Architecture",
    desc: "Design robust IAM systems with SSO, MFA, privileged access management, and identity governance for enterprise environments.",
  },
  {
    title: "Data Protection Architecture",
    desc: "Implement comprehensive data protection with classification, encryption at rest and in transit, DLP, and data governance frameworks.",
  },
  {
    title: "Application Security Architecture",
    desc: "Secure application design patterns, API security architecture, secure SDLC integration, and application-layer security controls.",
  },
  {
    title: "Compliance Architecture Review",
    desc: "Ensure security architecture meets PCI DSS, HIPAA, SOC 2, ISO 27001, and GDPR regulatory requirements and industry standards.",
  },
  {
    title: "Container & Kubernetes Security",
    desc: "Secure containerized environments with container image security, runtime protection, orchestration security, and service mesh integration.",
  },
  {
    title: "DevSecOps Architecture",
    desc: "Integrate security into DevOps pipelines with secure CI/CD, infrastructure as code security, and automated security testing.",
  },
  {
    title: "Security Operations Architecture",
    desc: "Design SOC architecture with SIEM, SOAR, threat intelligence, incident response workflows, and security orchestration.",
  },
];

const faqs = [
  {
    question: "How long does a security architecture review take?",
    answer:
      "Duration depends on environment complexity and scope. A focused architecture assessment typically takes 2-3 weeks, covering current state documentation, threat modeling, and gap analysis. Comprehensive reviews with future state design take 4-6 weeks, including detailed threat modeling, risk quantification, architecture design, and implementation roadmap. Large enterprise assessments spanning multiple business units and complex hybrid environments may require 8-12 weeks. The timeline includes: discovery and mapping (1-2 weeks), threat modeling and assessment (2-3 weeks), design and planning (2-3 weeks), and documentation (1 week).",
  },
  {
    question: "What frameworks do you use for security architecture?",
    answer:
      "We use industry-leading frameworks and methodologies including NIST Cybersecurity Framework for risk management, ISO 27001 for information security management, Zero Trust Architecture principles (NIST SP 800-207), TOGAF for enterprise architecture, defense-in-depth for layered security, STRIDE and PASTA for threat modeling, MITRE ATT&CK for threat intelligence, and FAIR for risk quantification. We also align with cloud security frameworks from CSA, CIS Controls, and cloud provider best practices from AWS Well-Architected, Azure Security Benchmark, and Google Cloud Security Foundations.",
  },
  {
    question: "Do you provide implementation services?",
    answer:
      "Yes, we offer both assessment-only engagements and full implementation services. For clients who prefer assessment and recommendations only, we provide detailed architecture designs, implementation roadmaps, and configuration guides that your internal teams can execute. For clients requiring implementation support, we offer phased implementation services including network segmentation, Zero Trust implementation, cloud security architecture deployment, IAM system configuration, and security control implementation. We can also provide hybrid approaches with our team handling complex components while training your staff on ongoing management.",
  },
  {
    question: "How often should security architecture reviews be conducted?",
    answer:
      "We recommend annual comprehensive security architecture reviews as a baseline, with more frequent assessments during significant changes. Quarterly reviews are advisable for rapidly evolving environments with frequent technology changes, cloud migrations, or high-risk industries. Immediate reviews should be conducted before major cloud migrations, after security incidents or breaches, during mergers and acquisitions, when adopting new technologies (containers, serverless, IoT), and before launching new products or services. Continuous architecture governance with quarterly check-ins is ideal for large enterprises to ensure ongoing alignment with security best practices.",
  },
];

const painPoints = [
  "Is our security architecture robust?",
  "Are we protected against advanced threats?",
  "Does our architecture support business growth?",
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

export default function SecurityArchitectureReviewPage() {
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
              Enterprise Security Architecture
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              Security Architecture Review & Assessment
            </h1>
            <p className="mt-4 text-lg text-white/80 md:text-xl">
              Comprehensive evaluation and redesign of your security architecture to protect against modern threats and ensure long-term resilience.
            </p>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Expert architecture assessment covering threat modeling, Zero Trust design, defense-in-depth implementation, and compliance alignment with detailed remediation roadmaps.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/contact?subject=Security%20Architecture%20Review"
                aria-label="Start Architecture Review"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <motion.span
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  whileTap={reduceMotion ? undefined : { y: 0 }}
                  className="inline-flex items-center"
                >
                  Start Architecture Review
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
              title="Transform your security foundation."
              subtitle="Build resilient security architecture that prevents breaches and supports business growth."
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
              eyebrow="Architecture Frameworks"
              title="Industry-standard security architecture."
              subtitle="Architecture design following ISO 27001, NIST, Zero Trust, and TOGAF frameworks."
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
              title="Systematic architecture assessment approach."
              subtitle="Proven methodology for evaluating and improving enterprise security architecture."
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
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">Architecture review process</h3>
              <div className="relative mt-6">
                <div className="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-slate-300 to-transparent md:block dark:via-slate-700" />
                <motion.div
                  variants={stagger}
                  className="grid gap-4 md:grid-cols-6"
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
              eyebrow="Architecture Services"
              title="Comprehensive security architecture expertise."
              subtitle="Complete architecture assessment and design services for modern enterprises."
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
                eyebrow="Architecture Coverage"
                title="Complete security architecture assessment."
                subtitle="Comprehensive evaluation across all technology layers and business units."
              />
              <div className="mt-8">
                <div className="relative rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-900/70">
                  <div className="pointer-events-none absolute -inset-1 rounded-[22px] bg-gradient-to-r from-violet-500/30 via-blue-600/20 to-transparent opacity-70" />
                  <div className="relative overflow-hidden rounded-2xl bg-slate-950/5 p-6 dark:bg-slate-950">
                    <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-violet-500/20 blur-2xl" />
                    <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-blue-600/20 blur-2xl" />
                    <div className="relative">
                      <Image
                        src="/assets/services/n-security.jpg"
                        alt="Security Architecture Coverage"
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
              title="Certified security architecture experts."
              subtitle="Deep expertise in enterprise security architecture and proven implementation methodologies."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Certified architects",
                  description: "CISSP, CISM, TOGAF, and SABSA certified security architects with enterprise experience in complex environments.",
                  Icon: IconTarget,
                },
                {
                  title: "Framework expertise",
                  description: "Deep knowledge of NIST CSF, ISO 27001, Zero Trust, SABSA, and defense-in-depth architecture frameworks.",
                  Icon: IconShield,
                },
                {
                  title: "Implementation focus",
                  description: "Practical, implementable architecture designs aligned with business objectives and operational constraints.",
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
              title="Comprehensive architecture documentation."
              subtitle="Everything needed to understand, implement, and maintain your security architecture."
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
              title="Architecture review for diverse needs."
              subtitle="Tailored security architecture services addressing unique enterprise challenges."
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
              title="Flexible architecture programs."
              subtitle="From focused assessments to ongoing governance, choose the right engagement level."
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
              title="Common questions about architecture review."
              subtitle="Clear answers to help you understand our security architecture services."
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
              Strengthen your security architecture today.
            </h2>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Build resilient architecture that protects your business and supports growth.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact?subject=Security%20Architecture%20Review"
                aria-label="Speak With a Security Architect"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Speak With a Security Architect
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
            Ready for architecture review?
          </div>
          <Link
            href="/contact?subject=Security%20Architecture%20Review"
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