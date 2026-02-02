"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const containerBenefits = [
  "Secure containerized applications against runtime attacks and escape vulnerabilities",
  "Improve IT security posture with comprehensive container lifecycle protection",
  "Detect vulnerabilities across build, deployment, and runtime phases",
  "Protect both cloud and on-premises container environments",
  "Strengthen CI/CD pipelines and container runtime hosts",
];

const securityCapabilities = [
  {
    title: "Image Security Assessment",
    description: "Scan container images for vulnerabilities, exposed secrets, and insecure configurations.",
  },
  {
    title: "Orchestration Security",
    description: "RBAC policies, secrets management, network policy enforcement, and cluster hardening.",
  },
  {
    title: "Runtime Monitoring & Protection",
    description: "Detect suspicious container behavior, privilege escalations, and runtime threats.",
  },
  {
    title: "CI/CD Pipeline Security",
    description: "Secure build pipelines, image signing, registry security, and deployment controls.",
  },
  {
    title: "Infrastructure Protection",
    description: "Protect container hosts, platforms, and underlying infrastructure components.",
  },
  {
    title: "Compliance & Governance",
    description: "Meet regulatory standards with policy enforcement and audit-ready reporting.",
  },
];

const containerPhases = [
  {
    title: "Build Phase",
    description: "Secure Dockerfiles, base images, and build processes.",
  },
  {
    title: "Deploy Phase",
    description: "Configuration review, secrets injection, deployment security.",
  },
  {
    title: "Runtime Phase",
    description: "Container behavior monitoring, threat detection, runtime protection.",
  },
  {
    title: "Orchestration Phase",
    description: "Kubernetes security, service mesh, networking policies.",
  },
];

const securityFeatures = [
  {
    title: "Vulnerability Management",
    items: ["CVE scanning", "SBOM analysis", "Dependency tracking"],
  },
  {
    title: "Configuration Security",
    items: ["Dockerfile review", "Kubernetes hardening", "Network policies"],
  },
  {
    title: "Runtime Protection",
    items: ["Behavior monitoring", "Threat detection", "Anomaly detection"],
  },
  {
    title: "Compliance & Governance",
    items: ["Policy enforcement", "Audit logging", "Compliance reporting"],
  },
];

const containerDeliverables = [
  "Container Security Assessment Report with risk scoring",
  "Vulnerability analysis of container images and dependencies",
  "Dockerfile security review with secure configuration guidance",
  "Kubernetes cluster security assessment and hardening recommendations",
  "Runtime security monitoring configuration and threat detection setup",
  "CI/CD pipeline security review and security gate recommendations",
  "Container registry security assessment and access control review",
  "Secrets management evaluation and secure injection practices",
  "Network security and service mesh configuration review",
  "Compliance gap analysis against CIS Benchmarks and industry standards",
  "Remediation roadmap with prioritized security fixes",
  "Executive dashboard with container security metrics and KPIs",
];

const useCases = [
  {
    title: "Microservices & Cloud-Native Applications",
    description: "Secure containerized microservices architectures with end-to-end security assessment.",
  },
  {
    title: "DevOps & CI/CD Pipelines",
    description: "Integrate container security into development workflows with automated scanning.",
  },
  {
    title: "Kubernetes & Container Orchestration",
    description: "Protect Kubernetes clusters, workloads, and orchestration platforms.",
  },
  {
    title: "Financial & Regulated Industries",
    description: "Meet compliance requirements for container security in regulated environments.",
  },
];

const engagementTiers = [
  {
    title: "Container Image Security Scan",
    description: "Quick assessment of container images for vulnerabilities and misconfigurations.",
    bullets: ["1-2 weeks", "Image scanning", "Vulnerability report"],
  },
  {
    title: "Comprehensive Container Security Assessment",
    description: "End-to-end container security assessment covering build, deploy, and runtime phases.",
    bullets: ["3-4 weeks", "Full lifecycle review", "Runtime protection"],
  },
  {
    title: "Container Security Program",
    description: "Ongoing container security monitoring with continuous scanning and policy enforcement.",
    bullets: ["Quarterly assessments", "Continuous monitoring", "DevSecOps integration"],
  },
];

const faqs = [
  {
    question: "What is container security and why is it important?",
    answer: "Container security protects containerized applications throughout their lifecycle—from image creation to runtime execution. Containers share the host OS kernel, making them vulnerable to container escape attacks and lateral movement. Proper container security prevents data breaches, ensures compliance, and protects against supply chain attacks that can compromise your entire infrastructure through a single vulnerable container.",
  },
  {
    question: "How does container security differ from traditional security?",
    answer: "Container security addresses unique challenges like immutable infrastructure, ephemeral workloads, shared kernel risks, and complex orchestration environments. Unlike traditional security that focuses on static servers, container security must protect dynamic, scalable, and frequently changing environments with automated security controls integrated into CI/CD pipelines and orchestration platforms.",
  },
  {
    question: "What container platforms do you support?",
    answer: "We support all major container platforms including Docker, Kubernetes (EKS, AKS, GKE, OpenShift), container runtimes (containerd, CRI-O), and serverless container platforms (AWS Fargate, Azure Container Instances, Google Cloud Run). Our assessment covers container images, orchestrators, registries, build pipelines, and runtime environments across hybrid and multi-cloud deployments.",
  },
  {
    question: "How do you integrate container security into DevOps workflows?",
    answer: "We integrate security into every phase of the container lifecycle: (1) Build phase with secure Dockerfiles and automated vulnerability scanning, (2) Deployment phase with image signing and policy enforcement, (3) Runtime phase with behavior monitoring and threat detection, (4) Orchestration phase with Kubernetes security controls. We provide security-as-code templates, CI/CD plugins, and automated security gates for seamless DevSecOps implementation.",
  },
];

const painPoints = [
  "Are our container images free from vulnerabilities?",
  "Is our Kubernetes configuration securely hardened?",
  "How do we prevent container escape attacks?",
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

const IconContainer = ({ className }) => (
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
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
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

const IconKubernetes = ({ className }) => (
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
    <path d="M22 12l-10-7-10 7 10 7 10-7z" />
    <path d="M22 12l-10 7M22 12l-10-7M12 19V5" />
    <path d="M7 8.5l5 3.5M7 15.5l5-3.5" />
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

const ContainerIllustration = () => (
  <svg viewBox="0 0 420 320" className="h-full w-full" aria-hidden="true">
    <defs>
      <linearGradient id="container-grad" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#0f172a" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#6366f1" stopOpacity="0.2" />
      </linearGradient>
      <linearGradient id="container-pulse" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
    
    {/* Container stack */}
    <rect x="150" y="100" width="120" height="140" rx="8" fill="url(#container-grad)" stroke="#94a3b8" strokeOpacity="0.4" strokeWidth="2" />
    <rect x="160" y="90" width="100" height="30" rx="6" fill="url(#container-grad)" stroke="#94a3b8" strokeOpacity="0.3" strokeWidth="2" />
    <rect x="170" y="80" width="80" height="25" rx="5" fill="url(#container-grad)" stroke="#94a3b8" strokeOpacity="0.3" strokeWidth="2" />
    
    {/* Shield overlay */}
    <path d="M210 140l20 8v14c0 12-6 19-20 22-14-3-20-10-20-22v-14l20-8z" stroke="#6366f1" strokeWidth="2.5" fill="none" />
    <circle cx="210" cy="160" r="10" fill="#6366f1" fillOpacity="0.3" />
    <path d="M207 160l2 2 4-5" stroke="#6366f1" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    
    {/* Security nodes */}
    <circle cx="80" cy="100" r="20" fill="url(#container-pulse)" fillOpacity="0.2" stroke="#6366f1" strokeWidth="2" />
    <text x="80" y="105" fontSize="7" fill="#6366f1" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">IMAGE</text>
    
    <circle cx="340" cy="100" r="20" fill="url(#container-pulse)" fillOpacity="0.2" stroke="#8b5cf6" strokeWidth="2" />
    <text x="340" y="105" fontSize="7" fill="#8b5cf6" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">BUILD</text>
    
    <circle cx="80" cy="220" r="20" fill="url(#container-pulse)" fillOpacity="0.2" stroke="#6366f1" strokeWidth="2" />
    <text x="80" y="225" fontSize="7" fill="#6366f1" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">RUNTIME</text>
    
    <circle cx="340" cy="220" r="20" fill="url(#container-pulse)" fillOpacity="0.2" stroke="#8b5cf6" strokeWidth="2" />
    <text x="340" y="225" fontSize="7" fill="#8b5cf6" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">K8S</text>
    
    {/* Connection lines */}
    <path d="M100 100L155 120M265 120L320 100M100 220L155 200M265 200L320 220" stroke="#94a3b8" strokeOpacity="0.5" strokeDasharray="4 6" strokeWidth="2" />
    
    {/* Kubernetes icon */}
    <g transform="translate(195, 180)">
      <path d="M5 3l5 3.5L15 3l5 3.5v7L15 17l-5-3.5L5 17l-5-3.5v-7L5 3z" stroke="#10b981" strokeWidth="1.5" fill="none" />
      <path d="M10 6.5v7" stroke="#10b981" strokeWidth="1.5" />
    </g>
  </svg>
);

export default function ContainerSecurityPage() {
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
              Secure containerized applications with enterprise-grade security.
            </h1>
            <p className="mt-4 text-lg text-white/80 md:text-xl">
              Comprehensive container security assessment identifying vulnerabilities, misconfigurations, and runtime threats across your container infrastructure.
            </p>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              End-to-end protection covering Docker, Kubernetes, CI/CD pipelines, and runtime environments.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/contact"
                aria-label="Speak with a Container Security Expert"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <motion.span
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  whileTap={reduceMotion ? undefined : { y: 0 }}
                  className="inline-flex items-center"
                >
                  Speak with a Container Security Expert
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

      {/* Overview Section */}
      <Section className="bg-white dark:bg-slate-950">
        <Container>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
          >
            <SectionHeader
              eyebrow="Overview"
              title="What is Container Security?"
              subtitle="Protecting containerized applications across CI/CD pipelines, infrastructure, runtime and lifecycle management."
            />
            <motion.div variants={fadeUp} className="mt-8">
              <Card>
                <p className="text-base text-slate-600 dark:text-slate-300">
                  Container security protects containerized applications throughout their entire lifecycle—from image creation to runtime execution. A single compromised container can become an entry point to your entire infrastructure, making comprehensive security essential for modern cloud-native applications.
                </p>
              </Card>
            </motion.div>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <motion.div variants={fadeUp}>
                <Card className="h-full">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                    Key Benefits
                  </h3>
                  <ul className="space-y-3">
                    {containerBenefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-500" />
                        <span className="text-sm text-slate-600 dark:text-slate-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>

              <motion.div variants={fadeUp}>
                <Card className="h-full overflow-hidden">
                  <div className="relative">
                    <div className="pointer-events-none absolute -inset-1 rounded-[22px] bg-gradient-to-r from-indigo-500/20 via-purple-500/10 to-transparent opacity-60" />
                    <div className="relative rounded-xl overflow-hidden bg-slate-950/5 dark:bg-slate-950 p-4">
                      <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-indigo-500/20 blur-2xl" />
                      <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-purple-500/20 blur-2xl" />
                      <ContainerIllustration />
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* How It Works Section */}
      <Section className="bg-slate-50 dark:bg-slate-950/70">
        <Container>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-xl dark:border-slate-800/70 dark:bg-slate-900/70"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 dark:from-indigo-500/10 dark:to-purple-500/10" />
            <div className="relative grid gap-10 md:grid-cols-2">
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
                  How Our Container Security Works
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  Our Container Security service protects your containerized environments across the entire lifecycle—from image creation to runtime execution. We identify vulnerabilities, misconfigurations, and insecure practices that could lead to container escape, data exposure, or cluster compromise.
                </p>
                <ul className="space-y-3">
                  {[
                    "Secure container image & base image assessment",
                    "Dockerfile & build pipeline security review",
                    "Kubernetes cluster & workload hardening",
                    "Secrets management & sensitive data protection",
                    "Runtime security & container behavior analysis",
                    "Policy enforcement & least-privilege controls",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-1 text-indigo-500">✓</span>
                      <span className="text-sm text-slate-600 dark:text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">
                  What You Get
                </h4>
                <div className="grid gap-3">
                  {[
                    "Container image vulnerability assessment",
                    "Kubernetes security posture review",
                    "Misconfiguration & risk identification",
                    "Runtime threat detection insights",
                    "Compliance-ready security findings",
                    "Clear remediation & hardening guidance",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="rounded-xl border border-slate-200/70 bg-white/50 px-4 py-3 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-200"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Capabilities Section */}
      <Section className="bg-white dark:bg-slate-950">
        <Container>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
          >
            <SectionHeader
              eyebrow="Capabilities"
              title="Enterprise-grade container security services."
              subtitle="Comprehensive security assessment covering every aspect of container infrastructure."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {securityCapabilities.map((capability) => (
                <motion.div
                  key={capability.title}
                  variants={fadeUp}
                  whileHover={reduceMotion ? undefined : { y: -4 }}
                >
                  <Card className="h-full">
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-slate-900/5 p-2.5 text-slate-900 dark:bg-white/10 dark:text-white">
                        <IconContainer className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                          {capability.title}
                        </h3>
                        <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300">
                          {capability.description}
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

      {/* Security Coverage Section */}
      <Section className="bg-slate-50 dark:bg-slate-950/70">
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
                title="Full lifecycle container security."
                subtitle="We evaluate all critical phases of container security from build to runtime."
              />
              <div className="mt-8">
                <div className="relative rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-900/70">
                  <div className="pointer-events-none absolute -inset-1 rounded-[22px] bg-gradient-to-r from-indigo-500/30 via-purple-500/20 to-transparent opacity-70" />
                  <div className="relative overflow-hidden rounded-2xl bg-slate-950/5 p-4 dark:bg-slate-950">
                    <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-indigo-500/20 blur-2xl" />
                    <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-purple-500/20 blur-2xl" />
                    <ContainerIllustration />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="grid gap-4">
                {securityFeatures.map((feature) => (
                  <motion.div key={feature.title} variants={fadeUp}>
                    <Card>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                        {feature.title}
                      </h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {feature.items.map((item) => (
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

      {/* Lifecycle Phases Section */}
      <Section className="bg-white dark:bg-slate-950">
        <Container>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
          >
            <SectionHeader
              eyebrow="Lifecycle Security"
              title="End-to-end container protection."
              subtitle="Security assessment across every phase of the container lifecycle."
            />
            <div className="relative mt-10">
              <div className="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-slate-300 to-transparent md:block dark:via-slate-700" />
              <motion.div
                variants={stagger}
                className="grid gap-4 md:grid-cols-4"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-120px" }}
              >
                {containerPhases.map((phase) => (
                  <motion.div
                    key={phase.title}
                    variants={fadeUp}
                    whileHover={reduceMotion ? undefined : { y: -4 }}
                    className="relative"
                  >
                    <Card className="h-full">
                      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                        {phase.title}
                      </div>
                      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                        {phase.description}
                      </p>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
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
              title="Container security expertise that delivers results."
              subtitle="We combine container security knowledge with deep cloud-native and DevSecOps experience."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Full lifecycle coverage",
                  description: "End-to-end security assessment covering build, deploy, runtime, and orchestration phases.",
                  Icon: IconContainer,
                },
                {
                  title: "Kubernetes expertise",
                  description: "Deep expertise in Kubernetes security, service mesh, and cloud-native patterns.",
                  Icon: IconKubernetes,
                },
                {
                  title: "DevSecOps integration",
                  description: "Seamless security integration into CI/CD pipelines with automated controls.",
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
              title="Complete container security documentation."
              subtitle="Everything needed for container security improvement and compliance validation."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {containerDeliverables.map((item) => (
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
              title="Container security for modern organizations."
              subtitle="Industry-specific container security addressing sector requirements and use cases."
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
              title="Flexible container security programs."
              subtitle="From quick vulnerability scans to comprehensive security assessment and continuous monitoring."
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
              title="Common questions about container security."
              subtitle="Clear answers to help you understand container security requirements."
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
              Secure your containerized applications.
            </h2>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Expert container security assessment identifying risks before they become incidents.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                aria-label="Speak With a Container Security Expert"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Speak With a Container Security Expert
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
            Ready for container security?
          </div>
          <Link
            href="/contact"
            aria-label="Speak With a Container Security Expert"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white"
          >
            Get Started
          </Link>
        </div>
      </div>
    </motion.main>
  );
}