"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

/* ===================== DATA ===================== */

const painPoints = [
  "Concerned about rogue wireless access points?",
  "Need to secure Wi-Fi, Bluetooth, and IoT devices?",
  "Struggling with wireless compliance requirements?",
];

const outcomes = [
  {
    title: "Wireless Network Protection",
    description:
      "Comprehensive security assessment of Wi-Fi networks, access points, encryption, authentication, and management interfaces.",
  },
  {
    title: "Rogue Device Detection",
    description:
      "Identification and elimination of unauthorized access points, evil twin attacks, and impersonating wireless networks.",
  },
  {
    title: "Client Device Security",
    description:
      "Validation of laptop, mobile, and IoT device wireless configurations to prevent unauthorized access and data exposure.",
  },
  {
    title: "Compliance & Risk Reduction",
    description:
      "Meet PDPL, NESA, and regulatory requirements while reducing wireless security risks across your infrastructure.",
  },
];

const complianceBadges = [
  "WPA3 Security",
  "PDPL Compliant",
  "NESA Standards",
  "802.11 Standards",
  "Wireless Security",
  "Zero Trust",
];

const methodology = [
  {
    title: "Wireless Network Discovery",
    description:
      "Comprehensive scanning and identification of all wireless networks, access points, SSIDs, and connected devices across your environment.",
  },
  {
    title: "Access Point Security Assessment",
    description:
      "Evaluation of encryption protocols (WPA2/WPA3), authentication methods, configuration security, and management interface access.",
  },
  {
    title: "Rogue AP & Evil Twin Detection",
    description:
      "Identification of unauthorized access points, impersonating networks, and potential man-in-the-middle attack infrastructure.",
  },
  {
    title: "Signal Coverage Analysis",
    description:
      "Assessment of wireless signal propagation, coverage areas, and detection of excessive signal leakage beyond physical boundaries.",
  },
  {
    title: "Attack Simulation & Testing",
    description:
      "Controlled testing of handshake capture, weak encryption exploitation, WPS attacks, and misconfiguration vulnerabilities.",
  },
  {
    title: "Client Security Validation",
    description:
      "Testing of endpoint wireless security including laptop, mobile, IoT device configurations and connection behaviors.",
  },
];

const processSteps = [
  { title: "Discover", description: "Wireless asset mapping." },
  { title: "Assess", description: "Security evaluation." },
  { title: "Test", description: "Attack simulation." },
  { title: "Detect", description: "Rogue AP identification." },
  { title: "Harden", description: "Security improvements." },
];

const wirelessCapabilities = [
  {
    title: "Wireless Protocols",
    items: ["WiFi (802.11)", "Bluetooth", "Zigbee", "LoRaWAN"],
  },
  {
    title: "Security Testing",
    items: ["WPA2/WPA3", "Rogue AP", "Evil twin", "Signal analysis"],
  },
  {
    title: "Device Types",
    items: ["Access points", "Mobile devices", "IoT devices", "Controllers"],
  },
  {
    title: "Compliance",
    items: ["PDPL", "NESA", "802.11i", "PCI DSS"],
  },
];

const wirelessSecurityServices = [
  {
    title: "Wi-Fi Network Penetration Testing",
    desc: "Comprehensive security testing of wireless networks including WPA2/WPA3 encryption, authentication, and access control.",
  },
  {
    title: "Rogue Access Point Detection",
    desc: "Identification and elimination of unauthorized access points, evil twin networks, and impersonating wireless infrastructure.",
  },
  {
    title: "Wireless Configuration Review",
    desc: "Assessment of access point configurations, SSID security, encryption settings, and management interface protection.",
  },
  {
    title: "Signal Coverage & Leakage Analysis",
    desc: "Evaluation of wireless signal propagation, coverage areas, and detection of signals extending beyond secure perimeters.",
  },
  {
    title: "Bluetooth Security Assessment",
    desc: "Testing of Bluetooth implementations, pairing mechanisms, device discovery, and vulnerability identification.",
  },
  {
    title: "Guest Network Security",
    desc: "Security review of guest wireless networks, captive portals, isolation controls, and access restrictions.",
  },
  {
    title: "Wireless Client Testing",
    desc: "Assessment of endpoint wireless security including laptop, mobile, and IoT device configuration and behavior.",
  },
  {
    title: "IoT Wireless Security",
    desc: "Security testing of IoT devices using WiFi, Bluetooth, Zigbee, LoRaWAN, and other wireless protocols.",
  },
  {
    title: "Wireless Monitoring & Detection",
    desc: "Deployment of wireless intrusion detection systems (WIDS) and continuous monitoring for unauthorized activity.",
  },
];

const coreResponsibilities = [
  {
    category: "Access Point Security",
    items: [
      "WPA2/WPA3 encryption validation",
      "Authentication mechanism testing",
      "Management interface security review",
      "Firmware and configuration assessment",
    ],
  },
  {
    category: "Rogue Device Detection",
    items: [
      "Unauthorized access point identification",
      "Evil twin and honeypot detection",
      "MAC address spoofing detection",
      "Signal source triangulation",
    ],
  },
  {
    category: "Attack Simulation",
    items: [
      "Handshake capture and analysis",
      "WPS PIN attack testing",
      "Deauthentication attack simulation",
      "Man-in-the-middle attack testing",
    ],
  },
  {
    category: "Monitoring & Hardening",
    items: [
      "Wireless intrusion detection deployment",
      "Signal coverage optimization",
      "Security policy implementation",
      "Continuous monitoring recommendations",
    ],
  },
];

const deliverables = [
  "Comprehensive wireless network inventory",
  "Access point security assessment",
  "Rogue device detection report",
  "Encryption and authentication review",
  "Signal coverage analysis",
  "WPA2/WPA3 security evaluation",
  "Bluetooth security assessment",
  "Guest network security review",
  "Client device configuration analysis",
  "Wireless monitoring recommendations",
  "PDPL/NESA compliance gap analysis",
  "Executive wireless security briefing",
];

const useCases = [
  {
    title: "Enterprise Wireless",
    description:
      "Comprehensive security for corporate WiFi networks with multiple access points, locations, and guest network access.",
  },
  {
    title: "Healthcare Facilities",
    description:
      "HIPAA-compliant wireless security for hospitals protecting patient data and medical device wireless communications.",
  },
  {
    title: "Retail & Hospitality",
    description:
      "PCI DSS compliant wireless security for point-of-sale systems, guest WiFi, and customer wireless services.",
  },
  {
    title: "Education Institutions",
    description:
      "Security for campus-wide wireless networks, student access, guest networks, and BYOD device management.",
  },
  {
    title: "Manufacturing & Industrial",
    description:
      "Wireless security for industrial IoT devices, warehouse operations, and manufacturing floor wireless systems.",
  },
  {
    title: "Government & Critical Infrastructure",
    description:
      "High-security wireless protection for government agencies and critical infrastructure meeting compliance requirements.",
  },
];

const engagementTiers = [
  {
    title: "Essential Wireless Assessment",
    description:
      "Focused wireless security assessment covering access points, encryption, and basic rogue AP detection for small networks.",
    bullets: ["AP assessment", "Encryption test", "Rogue detection", "Security report"],
  },
  {
    title: "Advanced Wireless Security",
    description:
      "Comprehensive wireless penetration testing with signal analysis, attack simulation, client testing, and compliance support.",
    bullets: ["Full pen testing", "Signal analysis", "Attack simulation", "Compliance"],
  },
  {
    title: "Enterprise Wireless Program",
    description:
      "Ongoing wireless security with continuous monitoring, WIDS deployment, quarterly assessments, and managed security services.",
    bullets: ["WIDS monitoring", "Quarterly testing", "Incident response", "Managed services"],
  },
];

const faqs = [
  {
    question: "What is Wireless Penetration Testing?",
    answer:
      "Wireless Penetration Testing is a security assessment that identifies vulnerabilities in wireless networks including WiFi, Bluetooth, and other wireless protocols. We test access point security, encryption strength, authentication mechanisms, rogue device detection, signal coverage, and client configurations. Testing includes both passive monitoring and active attacks (with authorization) to validate security controls. Our approach simulates real-world attacks including handshake capture, evil twin networks, deauthentication attacks, and weak encryption exploitation to identify risks before attackers do.",
  },
  {
    question: "What wireless technologies can you test?",
    answer:
      "We test all major wireless technologies including WiFi (802.11 a/b/g/n/ac/ax), WPA2/WPA3 encryption, Bluetooth and Bluetooth LE, Zigbee, LoRaWAN, cellular (4G/5G), NFC, RFID, and proprietary wireless protocols. We assess access points from Cisco, Aruba, Ubiquiti, Ruckus, Meraki, and other vendors. Testing covers enterprise wireless controllers, standalone access points, mesh networks, guest networks, and IoT wireless devices. We also evaluate wireless network management platforms and cloud-managed wireless solutions.",
  },
  {
    question: "How do you detect rogue access points?",
    answer:
      "Rogue AP detection uses a combination of techniques: wireless scanning to identify all SSIDs and MAC addresses, comparison against authorized device inventory, signal strength analysis and triangulation to locate physical devices, traffic pattern analysis to identify suspicious behavior, and validation of network ownership and authorization. We use specialized equipment to scan all wireless channels, identify hidden SSIDs, detect MAC address spoofing, and locate evil twin networks that impersonate legitimate access points. We provide detailed reporting with exact locations and recommended remediation.",
  },
  {
    question: "Can wireless testing disrupt our network operations?",
    answer:
      "Most wireless testing is non-disruptive and uses passive monitoring techniques. However, some tests like deauthentication attacks or handshake capture may cause brief (seconds) disconnections for specific clients. We always coordinate testing windows with your IT team, conduct disruptive tests during maintenance windows or off-hours, notify affected users when appropriate, and have immediate rollback procedures. For production environments, we can perform testing in phases, focus on guest networks first, or use isolated test access points. All active attacks require explicit authorization and are carefully controlled.",
  },
  {
    question: "What compliance requirements does wireless testing address?",
    answer:
      "Wireless testing supports multiple compliance requirements: PDPL (UAE data protection) wireless security controls, NESA (UAE cybersecurity standards), PCI DSS wireless network security requirements for payment environments, HIPAA wireless protection for healthcare, ISO 27001 wireless security controls, and industry-specific wireless standards. Our deliverables include compliance gap analysis, control validation, security documentation, and remediation guidance. We help implement WPA3 encryption, network segmentation, access controls, monitoring, and audit logging required for compliance.",
  },
  {
    question: "How often should we perform wireless security assessments?",
    answer:
      "We recommend quarterly wireless scans for rogue AP detection and signal coverage monitoring, annual comprehensive wireless penetration testing including attack simulation, immediate testing after network changes or new access point deployments, and continuous monitoring with wireless intrusion detection systems (WIDS) for high-security environments. More frequent testing is recommended for organizations with PCI DSS requirements (quarterly), high-risk environments like healthcare or finance, large campus deployments with many access points, or environments with frequent guest/contractor access. Continuous WIDS monitoring provides real-time alerts for rogue devices.",
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

const IconRadio = ({ className }) => (
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
    <circle cx="12" cy="12" r="2" />
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
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
      <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-400">
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
  <span className="rounded-full border border-emerald-200/70 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-700/50 dark:bg-emerald-900/30 dark:text-emerald-300">
    {children}
  </span>
);

/* ===================== PAGE COMPONENT ===================== */

export default function WirelessSecurityPage() {
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
          <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#22c55e22_1px,transparent_1px),linear-gradient(to_bottom,#22c55e22_1px,transparent_1px)] bg-[size:80px_80px]" />
          <div className="absolute -left-24 top-16 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-green-500/20 blur-3xl" />
        </div>

        <Container className="relative z-10 flex min-h-[86vh] flex-col justify-center">
          <motion.div variants={fadeUp} className="max-w-3xl">
            <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
              Wireless Defense
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              Wireless Security Assessment
            </h1>
            <p className="mt-4 text-lg text-white/85 md:text-xl">
              Identify vulnerabilities across Wi-Fi, Bluetooth, and wireless infrastructure before attackers exploit them.
            </p>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Comprehensive wireless penetration testing covering access points, encryption, rogue devices, and signal security.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/contact?subject=services&subSubject=Wireless%20Security%20Assessment"
                aria-label="Request Wireless PenTest"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <motion.span
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  whileTap={reduceMotion ? undefined : { y: 0 }}
                  className="inline-flex items-center"
                >
                  Request Wireless PenTest
                </motion.span>
              </Link>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12 max-w-4xl">
            <div className="grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80 backdrop-blur-sm md:grid-cols-3">
              {painPoints.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
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
              title="Comprehensive wireless security protection."
              subtitle="Multi-layer defense for Wi-Fi networks, access points, and wireless devices with rogue detection and encryption validation."
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
                      <div className="rounded-full bg-emerald-500/10 p-3 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400">
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
              title="Aligned with wireless security standards."
              subtitle="Expert wireless security following WPA3, 802.11 standards, PDPL, NESA, and industry-specific compliance frameworks."
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
              title="Wireless Security Control Model"
              subtitle="Practical framework to identify, validate, and secure wireless attack surfaces across enterprise environments."
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
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">Wireless security lifecycle</h3>
              <div className="relative mt-6">
                <div className="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-emerald-300 to-transparent md:block dark:via-emerald-700" />
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
                        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
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
              title="Our Wireless Security Assessment Services"
              subtitle="Comprehensive wireless security from network discovery to continuous monitoring and rogue device detection."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {wirelessSecurityServices.map((item) => (
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
                title="Why Choose Wireless Security Services"
                subtitle="Specialized expertise for protecting WiFi networks, wireless infrastructure, and connected devices from cyber threats."
              />
              <div className="mt-8">
                <div className="relative rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-900/70">
                  <div className="pointer-events-none absolute -inset-1 rounded-[22px] bg-gradient-to-r from-emerald-500/30 via-green-500/20 to-transparent opacity-70" />
                  <div className="relative overflow-hidden rounded-2xl bg-slate-950/5 p-4 dark:bg-slate-950">
                    <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-emerald-500/20 blur-2xl" />
                    <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-green-500/20 blur-2xl" />
                    <img
                      src="/assets/services/vCiso.webp"
                      alt="Wireless Security Assessment"
                      className="w-full rounded-xl shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="grid gap-4">
                {wirelessCapabilities.map((capability) => (
                  <motion.div key={capability.title} variants={fadeUp}>
                    <Card>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
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
              title="How Our Wireless Security Service Works"
              subtitle="A structured framework for securing wireless networks with encryption validation, rogue detection, and attack simulation."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {coreResponsibilities.map((responsibility) => (
                <motion.div key={responsibility.category} variants={fadeUp}>
                  <Card className="h-full">
                    <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-400 mb-4">
                      {responsibility.category}
                    </h3>
                    <ul className="space-y-3">
                      {responsibility.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                          <IconCheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
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
              title="Trusted wireless security expertise since 2017."
              subtitle="We've secured wireless networks across enterprise, healthcare, retail, and education sectors in UAE, GCC, and globally."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Wireless security specialists",
                  description: "Deep expertise in WiFi, Bluetooth, IoT wireless protocols, and rogue device detection with specialized testing equipment.",
                  Icon: IconWifi,
                },
                {
                  title: "Non-disruptive testing",
                  description: "Carefully controlled assessments designed to identify vulnerabilities without impacting production wireless operations.",
                  Icon: IconRadio,
                },
                {
                  title: "Compliance ready",
                  description: "Expert support for PDPL, NESA, PCI DSS, HIPAA, and industry-specific wireless security compliance requirements.",
                  Icon: IconClipboard,
                },
              ].map((item) => (
                <motion.div key={item.title} variants={fadeUp}>
                  <Card className="h-full">
                    <div className="mb-4 inline-flex rounded-full bg-emerald-500/10 p-3 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400">
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
              subtitle="Comprehensive wireless security assessment, rogue device detection, and compliance documentation."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {deliverables.map((item) => (
                <motion.div key={item} variants={fadeUp}>
                  <Card>
                    <div className="flex items-start gap-3">
                      <IconCheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
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
              title="Wireless security for diverse sectors."
              subtitle="Tailored security for enterprise, healthcare, retail, education, manufacturing, and government wireless networks."
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
              title="Flexible wireless security programs for every need."
              subtitle="Choose from essential, advanced, or enterprise wireless security based on your network complexity."
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
              title="Common questions about wireless security."
              subtitle="Clear answers to help you understand WiFi security, rogue AP detection, and wireless penetration testing."
            />
            <div className="mt-8 space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-slate-200/70 bg-white/80 p-5 dark:border-slate-800/70 dark:bg-slate-900/70"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between text-left text-sm font-semibold text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:text-white"
                    aria-expanded={openFaq === index}
                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  >
                    <span>{faq.question}</span>
                    <span className="text-emerald-600 dark:text-emerald-400">{openFaq === index ? "–" : "+"}</span>
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
              Secure Your Wireless Infrastructure
            </h2>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Protect your wireless networks with expert-led penetration testing and security validation.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact?subject=services&subSubject=Wireless%20Security%20Assessment"
                aria-label="Request Wireless Assessment"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Request Wireless Assessment
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
            Secure your wireless network
          </div>
          <Link
            href="/contact?subject=services&subSubject=Wireless%20Security%20Assessment"
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