"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

/* ===================== DATA ===================== */

const painPoints = [
  "Managing thousands of connected IoT devices?",
  "Worried about device compromise and botnets?",
  "Need to secure firmware and communications?",
];

const outcomes = [
  {
    title: "Device-Level Protection",
    description:
      "Secure every IoT device with cryptographic identity, secure boot, firmware integrity verification, and trusted update mechanisms.",
  },
  {
    title: "Network Security",
    description:
      "Implement network segmentation, encrypted communications, anomaly detection, and traffic monitoring for IoT ecosystems.",
  },
  {
    title: "Scalable Security",
    description:
      "Deploy security controls that scale from hundreds to millions of devices across consumer, enterprise, and industrial environments.",
  },
  {
    title: "Compliance & Standards",
    description:
      "Meet IoT security requirements for ETSI EN 303 645, NIST IoT, FDA medical device security, and industry-specific frameworks.",
  },
];

const complianceBadges = [
  "ETSI EN 303 645",
  "NIST IoT",
  "IEC 62443",
  "FDA Guidance",
  "IoT Security",
  "Zero Trust IoT",
];

const methodology = [
  {
    title: "IoT Asset Discovery & Inventory",
    description:
      "Comprehensive identification and classification of all connected devices including sensors, cameras, controllers, wearables, and embedded systems.",
  },
  {
    title: "Device Security Assessment",
    description:
      "Evaluation of device hardware, firmware, boot process, cryptographic implementations, and communication protocols for vulnerabilities.",
  },
  {
    title: "Network Architecture Review",
    description:
      "Assessment of IoT network segmentation, gateway security, protocol security, and isolation from enterprise networks.",
  },
  {
    title: "Firmware & Update Security",
    description:
      "Analysis of firmware update mechanisms, secure boot implementation, code signing, and over-the-air (OTA) update security.",
  },
  {
    title: "Cloud & Backend Protection",
    description:
      "Security assessment of IoT cloud platforms, device management systems, APIs, and data storage infrastructure.",
  },
  {
    title: "Continuous Monitoring & Response",
    description:
      "Deployment of behavioral monitoring, anomaly detection, and incident response capabilities for IoT environments.",
  },
];

const processSteps = [
  { title: "Discover", description: "IoT asset inventory." },
  { title: "Assess", description: "Device & firmware analysis." },
  { title: "Secure", description: "Implement protections." },
  { title: "Monitor", description: "Continuous detection." },
  { title: "Update", description: "Secure patch management." },
];

const iotCapabilities = [
  {
    title: "Device Security",
    items: ["Secure boot", "Firmware integrity", "Crypto identity", "Hardware security"],
  },
  {
    title: "Communication",
    items: ["TLS/DTLS", "MQTT/CoAP", "LoRaWAN", "Zigbee/BLE"],
  },
  {
    title: "IoT Types",
    items: ["Consumer IoT", "Industrial IoT", "Medical devices", "Smart buildings"],
  },
  {
    title: "Standards",
    items: ["ETSI 303 645", "NIST IoT", "IEC 62443", "FDA"],
  },
];

const iotSecurityServices = [
  {
    title: "IoT Device Security Assessment",
    desc: "Comprehensive security testing of IoT devices including hardware analysis, firmware reverse engineering, and protocol security.",
  },
  {
    title: "Firmware Security & Reverse Engineering",
    desc: "Binary analysis, vulnerability identification, backdoor detection, and secure coding recommendations for embedded firmware.",
  },
  {
    title: "Secure Boot & Trust Chain",
    desc: "Implementation and verification of secure boot, trusted execution environments, and hardware root of trust for IoT devices.",
  },
  {
    title: "IoT Protocol Security",
    desc: "Security assessment of MQTT, CoAP, AMQP, LoRaWAN, Zigbee, Bluetooth LE, and custom IoT protocols.",
  },
  {
    title: "Cloud IoT Platform Security",
    desc: "Security review of AWS IoT, Azure IoT Hub, Google Cloud IoT, and custom device management platforms.",
  },
  {
    title: "OTA Update Security",
    desc: "Assessment of over-the-air firmware update mechanisms, code signing, rollback protection, and update authentication.",
  },
  {
    title: "Industrial IoT (IIoT) Security",
    desc: "Security for industrial sensors, actuators, edge gateways, and integration with SCADA/ICS environments.",
  },
  {
    title: "Medical IoT Device Security",
    desc: "FDA premarket cybersecurity guidance compliance, risk assessment, and security testing for connected medical devices.",
  },
  {
    title: "IoT Penetration Testing",
    desc: "Real-world attack simulation including device compromise, communication interception, and backend exploitation.",
  },
];

const coreResponsibilities = [
  {
    category: "Device Security",
    items: [
      "Hardware security module (HSM) integration",
      "Secure boot and measured boot verification",
      "Firmware encryption and code signing",
      "Device identity and authentication mechanisms",
    ],
  },
  {
    category: "Communication Security",
    items: [
      "TLS/DTLS implementation and configuration",
      "IoT protocol security (MQTT, CoAP, AMQP)",
      "Certificate management and PKI infrastructure",
      "Encrypted data transmission and storage",
    ],
  },
  {
    category: "Platform Security",
    items: [
      "Cloud IoT platform security configuration",
      "API security and access control",
      "Device provisioning and lifecycle management",
      "Backend infrastructure hardening",
    ],
  },
  {
    category: "Monitoring & Response",
    items: [
      "IoT behavioral anomaly detection",
      "Device compromise identification",
      "Security event correlation and alerting",
      "Incident response for IoT environments",
    ],
  },
];

const deliverables = [
  "Comprehensive IoT device inventory",
  "Device security assessment report",
  "Firmware vulnerability analysis",
  "Secure boot implementation guidance",
  "IoT protocol security review",
  "Cloud platform security assessment",
  "OTA update security evaluation",
  "Network segmentation recommendations",
  "Device authentication architecture",
  "Security monitoring implementation",
  "Compliance gap analysis (ETSI, NIST, FDA)",
  "Executive IoT security briefing",
];

const useCases = [
  {
    title: "Consumer IoT",
    description:
      "Security for smart home devices, wearables, connected appliances, and consumer electronics with privacy and data protection.",
  },
  {
    title: "Industrial IoT (IIoT)",
    description:
      "Protection for industrial sensors, edge gateways, predictive maintenance systems, and integration with manufacturing operations.",
  },
  {
    title: "Healthcare & Medical Devices",
    description:
      "FDA-compliant security for connected medical devices, patient monitoring systems, and hospital IoT infrastructure.",
  },
  {
    title: "Smart Buildings & Cities",
    description:
      "Security for building automation, HVAC systems, access control, lighting, and smart city infrastructure.",
  },
  {
    title: "Connected Vehicles",
    description:
      "Automotive IoT security for connected cars, telematics, fleet management, and vehicle-to-everything (V2X) communication.",
  },
  {
    title: "Agriculture & Environmental",
    description:
      "Security for precision agriculture sensors, environmental monitoring, livestock tracking, and irrigation control systems.",
  },
];

const engagementTiers = [
  {
    title: "Essential IoT Security",
    description:
      "Single device/product assessment with firmware analysis, protocol testing, and basic security recommendations.",
    bullets: ["Device assessment", "Firmware analysis", "Protocol testing", "Security report"],
  },
  {
    title: "Advanced IoT Security",
    description:
      "Comprehensive IoT ecosystem assessment with cloud platform review, network security, and continuous monitoring setup.",
    bullets: ["Full ecosystem", "Cloud platform", "Network security", "Monitoring"],
  },
  {
    title: "Enterprise IoT Security",
    description:
      "Ongoing IoT security program with device certification, secure development lifecycle, and managed security services.",
    bullets: ["Security program", "Device certification", "Secure SDLC", "Managed services"],
  },
];

const faqs = [
  {
    question: "What is IoT Security?",
    answer:
      "IoT Security focuses on protecting internet-connected devices, communication channels, and backend infrastructure across the entire IoT ecosystem. This includes device hardware security, firmware protection, secure boot mechanisms, encrypted communications, device authentication, cloud platform security, and continuous monitoring. IoT security is challenging because devices often have limited processing power, long lifecycles, physical accessibility to attackers, and operate in untrusted environments. Our approach covers device-level security, network protection, platform hardening, and operational monitoring to ensure comprehensive protection.",
  },
  {
    question: "What types of IoT devices can you secure?",
    answer:
      "We secure all types of IoT devices including consumer IoT (smart home devices, wearables, connected appliances), industrial IoT (sensors, actuators, edge gateways, PLCs), medical devices (patient monitors, infusion pumps, imaging equipment), building automation (HVAC, access control, lighting), connected vehicles (telematics, infotainment), and environmental sensors. We have experience with various chip architectures (ARM, MIPS, x86), operating systems (Linux, FreeRTOS, Zephyr), and communication protocols (WiFi, Bluetooth, Zigbee, LoRaWAN, cellular).",
  },
  {
    question: "How do you test IoT device firmware security?",
    answer:
      "Our firmware security assessment includes binary analysis, reverse engineering, vulnerability identification, backdoor detection, cryptographic implementation review, and secure coding analysis. We extract firmware from devices, analyze boot processes, identify hardcoded credentials, test update mechanisms, and evaluate encryption implementations. We use specialized tools for ARM/MIPS disassembly, emulation, and dynamic analysis. We also assess secure boot chains, code signing, and rollback protection. For devices with accessible debug interfaces (JTAG, UART), we perform hardware-level analysis to identify additional attack vectors.",
  },
  {
    question: "Can you help us achieve IoT security compliance?",
    answer:
      "Yes, we provide comprehensive compliance support for IoT security standards including ETSI EN 303 645 (consumer IoT baseline requirements), NIST IoT security guidelines, IEC 62443 (industrial IoT), FDA premarket cybersecurity guidance (medical devices), and industry-specific frameworks. Our deliverables include gap assessments, control implementation guidance, security documentation, threat modeling, and audit preparation. We help implement required security controls such as unique device credentials, secure update mechanisms, vulnerability disclosure policies, and security event logging. Many clients have achieved certification with our support.",
  },
  {
    question: "How do you secure IoT cloud platforms and APIs?",
    answer:
      "We assess IoT cloud platforms (AWS IoT, Azure IoT Hub, Google Cloud IoT) and custom device management systems for authentication weaknesses, authorization flaws, API vulnerabilities, insecure configurations, and data protection issues. We test device provisioning processes, certificate management, shadow/twin synchronization, rule engines, and integration points. We also evaluate API rate limiting, input validation, injection vulnerabilities, and access control. Our recommendations include least-privilege IAM policies, certificate rotation, API security hardening, and DDoS protection for IoT endpoints.",
  },
  {
    question: "What is the process for securing existing IoT deployments?",
    answer:
      "For existing IoT deployments, we start with device discovery and inventory to identify all connected devices and their security posture. We then conduct risk assessment prioritizing devices based on criticality, exposure, and vulnerability. Next, we implement compensating controls such as network segmentation, gateway firewalls, and behavioral monitoring for devices that cannot be patched. We develop secure update procedures for firmware patches and work with vendors on vulnerability remediation. Finally, we deploy continuous monitoring to detect compromised devices and anomalous behavior. The process typically takes 6-12 weeks depending on deployment size and complexity.",
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

const IconCpu = ({ className }) => (
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
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <path d="M9 2v2M15 2v2M9 20v2M15 20v2M20 9h2M20 15h2M2 9h2M2 15h2" />
  </svg>
);

const IconWifi = ({ className }) => (
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
    <path d="M5 12.55a11 11 0 0 1 14.08 0" />
    <path d="M1.42 9a16 16 0 0 1 21.16 0" />
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
    <line x1="12" y1="20" x2="12.01" y2="20" />
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
      <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-400">
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
  <span className="rounded-full border border-cyan-200/70 bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-700 dark:border-cyan-700/50 dark:bg-cyan-900/30 dark:text-cyan-300">
    {children}
  </span>
);

/* ===================== PAGE COMPONENT ===================== */

export default function IoTSecurityPage() {
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
          <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#06b6d422_1px,transparent_1px),linear-gradient(to_bottom,#06b6d422_1px,transparent_1px)] bg-[size:90px_90px]" />
          <div className="absolute -left-24 top-16 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        </div>

        <Container className="relative z-10 flex min-h-[86vh] flex-col justify-center">
          <motion.div variants={fadeUp} className="max-w-3xl">
            <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
              Internet of Things Security
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              IoT Security Services
            </h1>
            <p className="mt-4 text-lg text-white/85 md:text-xl">
              Protecting connected devices, networks, and data across the entire Internet of Things ecosystem.
            </p>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              From device firmware to cloud platforms, comprehensive security for billions of connected devices.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/contact"
                aria-label="Talk to an Expert"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <motion.span
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  whileTap={reduceMotion ? undefined : { y: 0 }}
                  className="inline-flex items-center"
                >
                  Talk to an Expert
                </motion.span>
              </Link>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12 max-w-4xl">
            <div className="grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80 backdrop-blur-sm md:grid-cols-3">
              {painPoints.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
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
              title="Enterprise-grade IoT security architecture."
              subtitle="Multi-layer protection for devices, communications, platforms, and operations across the IoT lifecycle."
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
                      <div className="rounded-full bg-cyan-500/10 p-3 text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-400">
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
              title="Aligned with IoT security standards."
              subtitle="Expert IoT security following ETSI EN 303 645, NIST IoT guidelines, IEC 62443, and FDA medical device security."
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
              title="Multi-Layer IoT Security Protection Model"
              subtitle="Comprehensive security designed to protect devices, communications, backend services, and operations throughout the IoT lifecycle."
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
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">IoT security lifecycle</h3>
              <div className="relative mt-6">
                <div className="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-cyan-300 to-transparent md:block dark:via-cyan-700" />
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
                        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
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
              title="Our IoT Security Capabilities"
              subtitle="Comprehensive IoT security from device firmware to cloud platforms and continuous monitoring."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {iotSecurityServices.map((item) => (
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
                title="Why Choose IoT Security Services"
                subtitle="Specialized expertise for securing billions of connected devices across consumer, enterprise, and industrial environments."
              />
              <div className="mt-8">
                <div className="relative rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-900/70">
                  <div className="pointer-events-none absolute -inset-1 rounded-[22px] bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-transparent opacity-70" />
                  <div className="relative overflow-hidden rounded-2xl bg-slate-950/5 p-4 dark:bg-slate-950">
                    <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-cyan-500/20 blur-2xl" />
                    <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-blue-500/20 blur-2xl" />
                    <img
                      src="/assets/services/wapt.webp"
                      alt="IoT Security Services"
                      className="w-full rounded-xl shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="grid gap-4">
                {iotCapabilities.map((capability) => (
                  <motion.div key={capability.title} variants={fadeUp}>
                    <Card>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
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
              title="How Our IoT Security Service Works"
              subtitle="A structured framework for securing devices, communications, platforms, and operations."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {coreResponsibilities.map((responsibility) => (
                <motion.div key={responsibility.category} variants={fadeUp}>
                  <Card className="h-full">
                    <h3 className="text-lg font-semibold text-cyan-600 dark:text-cyan-400 mb-4">
                      {responsibility.category}
                    </h3>
                    <ul className="space-y-3">
                      {responsibility.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                          <IconCheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-600 dark:text-cyan-400" />
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
              title="Trusted IoT security expertise since 2017."
              subtitle="We've secured IoT deployments across consumer electronics, industrial systems, and healthcare in UAE, GCC, and globally."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "IoT security specialists",
                  description: "Deep expertise in device firmware, embedded systems, IoT protocols, and secure hardware with comprehensive testing capabilities.",
                  Icon: IconCpu,
                },
                {
                  title: "Scalable solutions",
                  description: "Security architectures that scale from hundreds to millions of devices across consumer, enterprise, and industrial environments.",
                  Icon: IconWifi,
                },
                {
                  title: "Compliance ready",
                  description: "Expert support for ETSI EN 303 645, NIST IoT, IEC 62443, FDA medical device security, and industry-specific compliance.",
                  Icon: IconClipboard,
                },
              ].map((item) => (
                <motion.div key={item.title} variants={fadeUp}>
                  <Card className="h-full">
                    <div className="mb-4 inline-flex rounded-full bg-cyan-500/10 p-3 text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-400">
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
              subtitle="Comprehensive IoT security assessment, implementation guidance, and compliance documentation."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {deliverables.map((item) => (
                <motion.div key={item} variants={fadeUp}>
                  <Card>
                    <div className="flex items-start gap-3">
                      <IconCheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-600 dark:text-cyan-400" />
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
              title="IoT security for diverse sectors."
              subtitle="Tailored security for consumer IoT, industrial systems, healthcare, smart buildings, and connected vehicles."
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
              title="Flexible IoT security programs for every need."
              subtitle="Choose from essential, advanced, or enterprise IoT security based on your device ecosystem."
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
              title="Common questions about IoT security."
              subtitle="Clear answers to help you understand device security, firmware protection, and IoT compliance."
            />
            <div className="mt-8 space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-slate-200/70 bg-white/80 p-5 dark:border-slate-800/70 dark:bg-slate-900/70"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between text-left text-sm font-semibold text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:text-white"
                    aria-expanded={openFaq === index}
                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  >
                    <span>{faq.question}</span>
                    <span className="text-cyan-600 dark:text-cyan-400">{openFaq === index ? "–" : "+"}</span>
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
              Secure Your IoT Ecosystem Today
            </h2>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              From device-level protection to cloud monitoring, we help you build secure and resilient IoT systems.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                aria-label="Get Started"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Get Started
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
            Secure your IoT devices
          </div>
          <Link
            href="/contact"
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