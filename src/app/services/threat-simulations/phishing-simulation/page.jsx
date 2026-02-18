"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

/* ===================== DATA ===================== */

const painPoints = [
  "Employees falling for phishing attacks?",
  "Need to reduce human cyber risk?",
  "Struggling with security awareness compliance?",
];

const outcomes = [
  {
    title: "Human Risk Assessment",
    description:
      "Realistic phishing simulations that identify vulnerable employees and measure true human risk across your organization.",
  },
  {
    title: "Security Awareness Training",
    description:
      "Targeted training delivered at the moment of failure to educate employees and build a strong security culture.",
  },
  {
    title: "Risk Reduction & Metrics",
    description:
      "Continuous measurement and reduction of phishing susceptibility with executive dashboards and compliance reporting.",
  },
  {
    title: "Compliance & Reporting",
    description:
      "Meet ISO 27001, SOC 2, PCI DSS, and regulatory requirements with comprehensive phishing simulation documentation.",
  },
];

const complianceBadges = [
  "ISO 27001",
  "SOC 2",
  "PCI DSS",
  "NIST CSF",
  "Security Awareness",
  "Human Firewall",
];

const methodology = [
  {
    title: "Campaign Design & Planning",
    description:
      "Creation of realistic phishing scenarios based on current threat intelligence, targeting credential theft, malware, and social engineering.",
  },
  {
    title: "Controlled Simulation Launch",
    description:
      "Safe, ethical phishing campaigns that replicate real attacker techniques including brand impersonation and urgency-based tactics.",
  },
  {
    title: "Behavioral Tracking & Analysis",
    description:
      "Monitoring of email opens, link clicks, credential submissions, and phishing report rates to measure employee susceptibility.",
  },
  {
    title: "Instant Training Delivery",
    description:
      "Automated security awareness training delivered immediately upon simulation failure to educate at the teachable moment.",
  },
  {
    title: "Risk Scoring & Mapping",
    description:
      "Identification of high-risk users, departments, and attack surfaces with comprehensive vulnerability scoring.",
  },
  {
    title: "Continuous Improvement",
    description:
      "Recurring campaigns with progressive difficulty to build lasting security awareness and reduce organizational risk.",
  },
];

const processSteps = [
  { title: "Design", description: "Realistic scenarios." },
  { title: "Launch", description: "Controlled campaigns." },
  { title: "Track", description: "User behavior." },
  { title: "Train", description: "Instant education." },
  { title: "Measure", description: "Risk reduction." },
];

const phishingCapabilities = [
  {
    title: "Attack Types",
    items: ["Credential theft", "Malware delivery", "CEO fraud", "Brand impersonation"],
  },
  {
    title: "Metrics Tracked",
    items: ["Open rate", "Click rate", "Submission rate", "Report rate"],
  },
  {
    title: "Training Methods",
    items: ["On-failure", "Video modules", "Interactive", "Microlearning"],
  },
  {
    title: "Compliance",
    items: ["ISO 27001", "SOC 2", "PCI DSS", "NIST"],
  },
];

const phishingServices = [
  {
    title: "Phishing Campaign Simulation",
    desc: "Realistic, controlled phishing attacks using current threat techniques to test employee security awareness and response.",
  },
  {
    title: "Credential Harvesting Testing",
    desc: "Simulation of fake login pages and credential theft attempts to identify employees susceptible to credential phishing.",
  },
  {
    title: "Malware & Ransomware Simulation",
    desc: "Safe testing of malicious attachment awareness with zero real malware to measure employee vigilance.",
  },
  {
    title: "CEO Fraud & BEC Testing",
    desc: "Business email compromise simulations targeting financial departments with executive impersonation and urgency tactics.",
  },
  {
    title: "Security Awareness Training",
    desc: "Comprehensive training modules covering phishing recognition, password security, social engineering, and cyber hygiene.",
  },
  {
    title: "Risk Scoring & Analytics",
    desc: "Detailed metrics on employee susceptibility, department risk levels, and organizational vulnerability trends.",
  },
  {
    title: "Automated Campaign Management",
    desc: "Recurring phishing simulations with progressive difficulty and automated training delivery for continuous improvement.",
  },
  {
    title: "Executive Reporting Dashboards",
    desc: "Real-time visibility into organizational security posture with executive-ready reports and compliance documentation.",
  },
  {
    title: "Compliance Support",
    desc: "Documentation and reporting for ISO 27001, SOC 2, PCI DSS, and regulatory security awareness requirements.",
  },
];

const coreResponsibilities = [
  {
    category: "Simulation Design",
    items: [
      "Realistic phishing email creation",
      "Brand impersonation and social engineering",
      "Credential harvesting page development",
      "Malicious attachment simulation (safe)",
    ],
  },
  {
    category: "Behavioral Analysis",
    items: [
      "Email open rate tracking",
      "Malicious link click monitoring",
      "Credential submission detection",
      "Phishing report rate measurement",
    ],
  },
  {
    category: "Training Delivery",
    items: [
      "Instant on-failure training modules",
      "Video-based security awareness content",
      "Interactive learning experiences",
      "Microlearning reinforcement campaigns",
    ],
  },
  {
    category: "Risk Management",
    items: [
      "Employee risk scoring and ranking",
      "Department vulnerability mapping",
      "Executive dashboard reporting",
      "Compliance documentation generation",
    ],
  },
];

const deliverables = [
  "Comprehensive phishing simulation plan",
  "Realistic phishing campaign emails",
  "Credential harvesting landing pages",
  "Malware simulation attachments",
  "Employee susceptibility analysis",
  "Department risk scoring",
  "Click and submission rate reports",
  "Phishing report rate metrics",
  "Security awareness training modules",
  "Executive risk dashboard",
  "Compliance reporting (ISO, SOC 2, PCI)",
  "Continuous improvement recommendations",
];

const useCases = [
  {
    title: "Enterprise Organizations",
    description:
      "Large-scale phishing simulations for corporations with thousands of employees across multiple departments and locations.",
  },
  {
    title: "Financial Services",
    description:
      "High-security phishing awareness for banks and financial institutions protecting against CEO fraud and wire transfer scams.",
  },
  {
    title: "Healthcare Organizations",
    description:
      "HIPAA-compliant security awareness training for hospitals and healthcare providers protecting patient data.",
  },
  {
    title: "Professional Services",
    description:
      "Phishing simulation for law firms, accounting firms, and consulting practices handling sensitive client information.",
  },
  {
    title: "Technology Companies",
    description:
      "Advanced phishing awareness for tech companies protecting intellectual property and product development data.",
  },
  {
    title: "Government Agencies",
    description:
      "Security awareness training for government organizations meeting compliance requirements and protecting classified information.",
  },
];

const engagementTiers = [
  {
    title: "Essential Phishing Program",
    description:
      "Basic phishing simulation with quarterly campaigns, standard templates, and basic reporting for small organizations.",
    bullets: ["Quarterly campaigns", "Standard templates", "Basic reporting", "Email training"],
  },
  {
    title: "Advanced Awareness Program",
    description:
      "Comprehensive phishing simulation with monthly campaigns, custom scenarios, advanced analytics, and integrated training.",
    bullets: ["Monthly campaigns", "Custom scenarios", "Advanced analytics", "Full training"],
  },
  {
    title: "Enterprise Security Culture",
    description:
      "Ongoing security awareness with continuous campaigns, personalized training, executive dashboards, and managed services.",
    bullets: ["Continuous campaigns", "Personalized training", "Executive dashboards", "Managed services"],
  },
];

const faqs = [
  {
    question: "What is Phishing Simulation?",
    answer:
      "Phishing Simulation is a security awareness training method that sends controlled, fake phishing emails to employees to test their ability to recognize and respond to phishing attacks. Unlike real phishing, simulations are completely safe - they contain no real malware and don't steal actual credentials. Instead, they measure how many employees click malicious links, submit credentials on fake login pages, or report suspicious emails. This identifies vulnerable users and departments, allowing targeted training to reduce organizational risk. The goal is to transform employees from the weakest link into a strong human firewall.",
  },
  {
    question: "How realistic are your phishing simulations?",
    answer:
      "Our phishing simulations replicate real-world attacker techniques including brand impersonation (Microsoft, Google, banks), urgency-based social engineering (account suspension, password expiration), credential harvesting with realistic fake login pages, malicious attachment simulation (invoice, resume, shipping notification), CEO fraud and business email compromise, and current threat intelligence. We use the same tactics real attackers use but in a completely safe, controlled environment. Emails are designed to be challenging enough to test awareness but ethical and compliant with privacy regulations. All simulations are clearly marked as training exercises after user interaction.",
  },
  {
    question: "Will employees know it's a simulation?",
    answer:
      "During the simulation, employees should not know it's fake - that's essential for accurate measurement. However, immediately after they click a link or submit credentials, we reveal it's a simulation and provide instant training. Users who report the email as suspicious receive positive reinforcement. This 'teachable moment' approach is proven most effective for building lasting awareness. We also send announcement emails before starting the program to inform employees that security awareness training will include simulations, and provide clear policies around the ethical use of the program. This transparency builds trust while maintaining simulation effectiveness.",
  },
  {
    question: "What metrics do you track and report?",
    answer:
      "We track comprehensive behavioral metrics: email open rate (engagement), malicious link click rate (vulnerability), credential submission rate (critical risk), attachment open rate (malware susceptibility), and phishing report rate (security maturity). We provide department-level risk scoring to identify high-risk areas, individual user risk scores to enable targeted training, trend analysis showing improvement over time, and comparison to industry benchmarks. Executive dashboards provide real-time visibility into organizational security posture. All metrics support compliance requirements for ISO 27001, SOC 2, PCI DSS, and other frameworks requiring security awareness training.",
  },
  {
    question: "How does the training work?",
    answer:
      "Training is delivered at the optimal moment - immediately after simulation failure. When an employee clicks a malicious link or submits credentials, they're redirected to a brief training module explaining what happened and how to recognize similar attacks. Training includes video modules covering phishing recognition, password security, social engineering, and data protection; interactive scenarios with real-world examples; microlearning reinforcement emails; and progressive campaigns with increasing difficulty. We also offer comprehensive security awareness training covering all aspects of cybersecurity beyond phishing. Training is tracked and reported for compliance, with certificates available upon completion.",
  },
  {
    question: "How often should we run phishing simulations?",
    answer:
      "We recommend monthly phishing campaigns for most organizations to maintain awareness and track improvement trends. Quarterly campaigns work for small organizations or those starting their awareness program. High-risk industries (finance, healthcare, government) should consider bi-weekly or even weekly campaigns. The key is consistency - recurring simulations with progressive difficulty build lasting security awareness better than one-time events. We also recommend varying campaign types, targeting different attack vectors, sending at different times and days, and adjusting difficulty based on results. Our automated platform makes continuous campaigns easy to manage while providing comprehensive analytics and training.",
  },
];

/* ===================== ICONS ===================== */

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

const IconClipboard = ({ className }) => (
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
    <rect x="8" y="2" width="8" height="4" rx="1" />
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const IconAward = ({ className }) => (
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
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

const IconCheckCircle = ({ className }) => (
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
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const IconMail = ({ className }) => (
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
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const IconUsers = ({ className }) => (
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
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

/* ===================== UI PRIMITIVES ===================== */

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
      <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-600 dark:border-sky-400/20 dark:bg-sky-400/10 dark:text-sky-400">
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
  <span className="rounded-full border border-sky-200/70 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 dark:border-sky-700/50 dark:bg-sky-900/30 dark:text-sky-300">
    {children}
  </span>
);

/* ===================== PAGE COMPONENT ===================== */

export default function PhishingSimulationPage() {
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
      <Section className="pt-24 sm:pt-28 md:pt-0 pb-14 mt-20">
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
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/85 via-slate-900/70 to-slate-950" />
          <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#38bdf822_1px,transparent_1px),linear-gradient(to_bottom,#38bdf822_1px,transparent_1px)] bg-[size:70px_70px]" />
          <div className="absolute -left-24 top-16 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl" />
          <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        </div>

        <Container className="relative z-10 flex min-h-[86vh] flex-col justify-center">
          <motion.div variants={fadeUp} className="max-w-3xl">
            <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
              Human Firewall Program
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              Phishing Simulation & Awareness Training
            </h1>
            <p className="mt-4 text-lg text-white/85 md:text-xl">
              Reduce human cyber risk with realistic phishing simulations and targeted security awareness training.
            </p>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Transform employees into your strongest line of defense with continuous testing, training, and metrics.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/contact?subject=services&subSubject=Phishing%20Simulation"
                aria-label="Start Phishing Simulation"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <motion.span
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  whileTap={reduceMotion ? undefined : { y: 0 }}
                  className="inline-flex items-center"
                >
                  Start Phishing Simulation
                </motion.span>
              </Link>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12 max-w-4xl">
            <div className="grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80 backdrop-blur-sm md:grid-cols-3">
              {painPoints.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
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
              title="Build your human firewall with awareness training."
              subtitle="Reduce phishing risk through realistic simulations, instant training, and continuous measurement of security awareness."
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
                      <div className="rounded-full bg-sky-500/10 p-3 text-sky-600 dark:bg-sky-400/10 dark:text-sky-400">
                        <IconAward className="h-5 w-5" />
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

      {/* Compliance Badges Section */}
      <Section className="bg-slate-50 dark:bg-slate-950/70">
        <Container>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-120px" }}>
            <SectionHeader
              eyebrow="Standards & Frameworks"
              title="Aligned with security awareness standards."
              subtitle="Expert phishing simulation following ISO 27001, SOC 2, PCI DSS, and NIST security awareness requirements."
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
              title="Phishing Simulation & Training Framework"
              subtitle="Comprehensive approach to testing, training, and reducing human cyber risk across your organization."
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
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">Phishing simulation lifecycle</h3>
              <div className="relative mt-6">
                <div className="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-sky-300 to-transparent md:block dark:via-sky-700" />
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
                        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
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
              title="Phishing Simulation Capabilities"
              subtitle="Comprehensive phishing testing from campaign design to training delivery and compliance reporting."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {phishingServices.map((item) => (
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

      {/* Image + Capabilities Section */}
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
                eyebrow="Why It Matters"
                title="Why Choose Phishing Simulation Services"
                subtitle="Specialized expertise for reducing human cyber risk through realistic testing and targeted security awareness training."
              />
              <div className="mt-8">
                <div className="relative rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-900/70">
                  <div className="pointer-events-none absolute -inset-1 rounded-[22px] bg-gradient-to-r from-sky-500/30 via-blue-500/20 to-transparent opacity-70" />
                  <div className="relative overflow-hidden rounded-2xl bg-slate-950/5 p-4 dark:bg-slate-950">
                    <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-sky-500/20 blur-2xl" />
                    <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-blue-500/20 blur-2xl" />
                    <img
                      src="/assets/services/phishing.webp"
                      alt="Phishing Simulation & Security Awareness"
                      className="w-full rounded-xl shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="grid gap-4">
                {phishingCapabilities.map((capability) => (
                  <motion.div key={capability.title} variants={fadeUp}>
                    <Card>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
                        {capability.title}
                      </h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {capability.items.map((item) => (
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

      {/* Core Responsibilities Section */}
      <Section className="bg-slate-50 dark:bg-slate-950/70">
        <Container>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
          >
            <SectionHeader
              eyebrow="Process"
              title="How Our Phishing Simulation Works"
              subtitle="A structured framework for testing employee security awareness and building lasting cyber resilience."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {coreResponsibilities.map((responsibility) => (
                <motion.div key={responsibility.category} variants={fadeUp}>
                  <Card className="h-full">
                    <h3 className="text-lg font-semibold text-sky-600 dark:text-sky-400 mb-4">
                      {responsibility.category}
                    </h3>
                    <ul className="space-y-3">
                      {responsibility.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                          <IconCheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-600 dark:text-sky-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Why Vulnuris Section */}
      <Section className="bg-white dark:bg-slate-950">
        <Container>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
          >
            <SectionHeader
              eyebrow="Why Vulnuris"
              title="Trusted security awareness expertise since 2017."
              subtitle="We've helped organizations across finance, healthcare, technology, and government build strong security cultures."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Phishing simulation specialists",
                  description: "Deep expertise in realistic phishing campaigns, behavioral analysis, and security awareness training with proven risk reduction.",
                  Icon: IconMail,
                },
                {
                  title: "Ethical & compliant",
                  description: "Safe, privacy-respecting simulations designed to educate and empower employees, not embarrass or punish them.",
                  Icon: IconShield,
                },
                {
                  title: "Compliance ready",
                  description: "Expert support for ISO 27001, SOC 2, PCI DSS, and regulatory security awareness training requirements.",
                  Icon: IconClipboard,
                },
              ].map((item) => (
                <motion.div key={item.title} variants={fadeUp}>
                  <Card className="h-full">
                    <div className="mb-4 inline-flex rounded-full bg-sky-500/10 p-3 text-sky-600 dark:bg-sky-400/10 dark:text-sky-400">
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
      <Section className="bg-slate-50 dark:bg-slate-950/70">
        <Container>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
          >
            <SectionHeader
              eyebrow="Deliverables"
              title="What You Get"
              subtitle="Comprehensive phishing simulation platform, training modules, and executive reporting."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {deliverables.map((item) => (
                <motion.div key={item} variants={fadeUp}>
                  <Card>
                    <div className="flex items-start gap-3">
                      <IconCheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-sky-600 dark:text-sky-400" />
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
      <Section className="bg-white dark:bg-slate-950">
        <Container>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
          >
            <SectionHeader
              eyebrow="Industry Applications"
              title="Phishing simulation for diverse sectors."
              subtitle="Tailored security awareness for enterprise, finance, healthcare, professional services, technology, and government."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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
      <Section className="bg-slate-50 dark:bg-slate-950/70">
        <Container>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
          >
            <SectionHeader
              eyebrow="Engagement Options"
              title="Flexible phishing simulation programs for every need."
              subtitle="Choose from essential, advanced, or enterprise security awareness based on your organization size."
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
      <Section className="bg-white dark:bg-slate-950">
        <Container>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-120px" }}>
            <SectionHeader
              eyebrow="FAQ"
              title="Common questions about phishing simulation."
              subtitle="Clear answers to help you understand security awareness training, simulation ethics, and risk reduction."
            />
            <div className="mt-8 space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-slate-200/70 bg-white/80 p-5 dark:border-slate-800/70 dark:bg-slate-900/70"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between text-left text-sm font-semibold text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:text-white"
                    aria-expanded={openFaq === index}
                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  >
                    <span>{faq.question}</span>
                    <span className="text-sky-600 dark:text-sky-400">{openFaq === index ? "–" : "+"}</span>
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
      <Section className="bg-slate-50 dark:bg-slate-950/70">
        <Container>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            className="rounded-3xl border border-slate-200/70 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 px-6 py-10 text-center text-white shadow-xl dark:border-slate-800/70"
          >
            <h2 className="text-3xl font-semibold md:text-4xl">
              Stop Phishing Before It Starts
            </h2>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Turn your employees into a strong line of cyber defense with continuous awareness training.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact?subject=services&subSubject=Phishing%20Simulation"
                aria-label="Talk to a Security Expert"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Talk to a Security Expert
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
            Build your human firewall
          </div>
          <Link
            href="/contact?subject=services&subSubject=Phishing%20Simulation"
            aria-label="Get Started"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white dark:bg-white dark:text-slate-900"
          >
            Get Started
          </Link>
        </div>
      </div>
    </motion.main>
  );
}