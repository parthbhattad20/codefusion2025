"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const outcomes = [
  {
    title: "Protect customer data and revenue",
    description:
      "Identify payment processing flaws, data exposure, and checkout vulnerabilities before they lead to fraud or breaches.",
  },
  {
    title: "Prevent fraud and abuse",
    description:
      "Uncover business logic flaws in pricing, discounts, inventory, and order workflows that enable financial manipulation.",
  },
  {
    title: "Meet PCI DSS requirements",
    description:
      "Demonstrate compliance with payment card security standards through validated testing and documented evidence.",
  },
  {
    title: "Build customer trust",
    description:
      "CVSS-scored findings with business impact analysis to prioritize fixes that protect brand reputation and customer confidence.",
  },
];

const complianceBadges = [
  "PCI DSS",
  "GDPR",
  "CCPA",
  "SOC 2",
  "ISO 27001",
  "OWASP Top 10",
];

const methodology = [
  {
    title: "Platform & Infrastructure Assessment",
    description:
      "Analyze e-commerce platform architecture, hosting environment, CDN configuration, and third-party integrations.",
  },
  {
    title: "Payment Security Validation",
    description:
      "Test payment gateway integration, tokenization, PCI DSS controls, and transaction processing workflows.",
  },
  {
    title: "Business Logic Testing",
    description:
      "Identify pricing manipulation, cart abuse, inventory bypass, coupon fraud, and order workflow vulnerabilities.",
  },
  {
    title: "Authentication & Access Control",
    description:
      "Assess customer account security, admin panels, session management, and privilege escalation risks.",
  },
  {
    title: "Risk Assessment & Remediation",
    description:
      "CVSS-scored findings with revenue impact analysis and prioritized remediation guidance for development teams.",
  },
];

const processSteps = [
  {
    title: "Scope",
    description: "Define platform, payment flows, and testing boundaries.",
  },
  {
    title: "Recon",
    description: "Map checkout process, APIs, and third-party services.",
  },
  {
    title: "Test",
    description: "Execute payment, logic, and infrastructure testing.",
  },
  {
    title: "Exploit",
    description: "Demonstrate financial impact with proof-of-concept.",
  },
  {
    title: "Report",
    description: "Deliver findings with PCI DSS compliance mapping.",
  },
];

const testCategories = [
  {
    title: "Payment Security",
    items: ["Gateway integration", "Card data handling", "PCI DSS controls", "Tokenization"],
  },
  {
    title: "Business Logic",
    items: ["Price manipulation", "Cart abuse", "Coupon fraud", "Inventory bypass"],
  },
  {
    title: "Customer Data",
    items: ["PII exposure", "Account takeover", "Data leakage", "Storage security"],
  },
  {
    title: "Platform Security",
    items: ["Admin access", "API security", "Session handling", "Input validation"],
  },
  {
    title: "Third-Party Risks",
    items: ["Plugin vulns", "Payment SDKs", "Shipping APIs", "Analytics tracking"],
  },
];

const deliverables = [
  "Executive summary with revenue risk analysis",
  "Technical report with e-commerce specific vulnerabilities",
  "Payment processing and PCI DSS compliance findings",
  "Checkout workflow and transaction security issues",
  "Price manipulation and business logic abuse scenarios",
  "Cart tampering and inventory management vulnerabilities",
  "Authentication and customer account security flaws",
  "Admin panel and privileged access control weaknesses",
  "Third-party integration and plugin security risks",
  "CVSS v3.1 risk ratings with financial impact assessment",
  "PCI DSS requirement mapping and compliance evidence",
  "Developer-focused remediation with platform-specific guidance",
];

const useCases = [
  {
    title: "Retail & Consumer Goods",
    description:
      "Secure high-volume online stores, promotional campaigns, and customer loyalty programs against fraud.",
  },
  {
    title: "Fashion & Apparel",
    description:
      "Protect seasonal sales, limited edition releases, and flash sale events from bot attacks and abuse.",
  },
  {
    title: "Digital Products & Services",
    description:
      "Validate license key generation, subscription management, and digital delivery workflows.",
  },
  {
    title: "B2B E-Commerce",
    description:
      "Secure enterprise procurement portals, volume pricing, and multi-user account management systems.",
  },
];

const engagementTiers = [
  {
    title: "Pre-Launch Security Audit",
    description:
      "Comprehensive testing before going live to identify critical payment and checkout vulnerabilities.",
    bullets: ["New platforms", "PCI DSS readiness", "1-2 weeks"],
  },
  {
    title: "Annual Security Assessment",
    description:
      "Full penetration test covering platform, payments, and business logic with PCI DSS compliance validation.",
    bullets: ["Yearly compliance", "Full coverage", "Executive reporting"],
  },
  {
    title: "Continuous Commerce Security",
    description:
      "Ongoing testing aligned to release cycles with automated scanning and quarterly manual validation.",
    bullets: ["Per-release testing", "Black Friday prep", "Security metrics"],
  },
];

const ecommerceServices = [
  {
    title: "Shopify Security Testing",
    desc: "Security assessment for Shopify stores including custom apps, checkout extensions, and payment flows.",
  },
  {
    title: "WooCommerce / WordPress",
    desc: "WordPress and WooCommerce plugin security, theme vulnerabilities, and payment gateway integration testing.",
  },
  {
    title: "Magento / Adobe Commerce",
    desc: "Magento security assessment including admin panel, payment processing, and custom module vulnerabilities.",
  },
  {
    title: "Custom E-Commerce Platforms",
    desc: "Bespoke platform security testing for custom-built shopping carts and checkout systems.",
  },
  {
    title: "Payment Gateway Integration",
    desc: "Stripe, PayPal, Square, and custom payment processor integration security validation.",
  },
  {
    title: "Mobile Commerce Apps",
    desc: "iOS and Android shopping app security including payment SDK integration and account security.",
  },
  {
    title: "Marketplace Platforms",
    desc: "Multi-vendor marketplace security including seller onboarding, commission logic, and dispute resolution.",
  },
  {
    title: "Subscription & Recurring Billing",
    desc: "Subscription management, recurring payment security, and billing logic vulnerability testing.",
  },
  {
    title: "Headless Commerce APIs",
    desc: "API security for headless commerce architectures, JAMstack deployments, and microservices.",
  },
];

const faqs = [
  {
    question: "Will testing disrupt our live e-commerce operations?",
    answer:
      "We conduct testing in controlled environments using staging/development instances whenever possible. For production testing, we coordinate with your team to test during low-traffic periods, use rate limiting, and employ non-destructive techniques. We never submit real payment transactions during testing and work closely with you to minimize any customer impact.",
  },
  {
    question: "Do you test third-party plugins and extensions?",
    answer:
      "Yes, we assess security risks from third-party plugins, themes, payment gateways, shipping calculators, and other extensions. We identify vulnerable components, outdated versions, and insecure configurations that could compromise your platform. This is particularly important for platforms like WordPress/WooCommerce and Shopify that rely heavily on extensions.",
  },
  {
    question: "How do you validate PCI DSS compliance?",
    answer:
      "While we don't perform official PCI DSS certification audits, our testing aligns with PCI DSS requirements and identifies vulnerabilities that would cause compliance failures. We map findings to specific PCI DSS requirements and provide evidence to support your compliance program. For official PCI DSS certification, you'll need a Qualified Security Assessor (QSA).",
  },
  {
    question: "Can you test fraud prevention and abuse scenarios?",
    answer:
      "Yes, business logic testing is a core component of e-commerce security. We test for price manipulation, cart abuse, coupon stacking, inventory bypass, shipping cost manipulation, and other fraud scenarios. We also assess rate limiting, bot detection, and anti-automation controls to prevent abuse at scale.",
  },
];

const painPoints = [
  "Is our payment processing secure?",
  "Can attackers manipulate prices or inventory?",
  "Are we PCI DSS compliant?",
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

const IconCart = ({ className }) => (
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
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
  </svg>
);

const IconCreditCard = ({ className }) => (
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
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="M2 10h20" />
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

const EcommerceSecurityIllustration = () => (
  <svg viewBox="0 0 420 320" className="h-full w-full" aria-hidden="true">
    <defs>
      <linearGradient id="ecom-panel" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#0f172a" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.2" />
      </linearGradient>
      <linearGradient id="ecom-pulse" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#f97316" />
      </linearGradient>
    </defs>
    {/* Shopping cart */}
    <circle cx="210" cy="160" r="50" fill="url(#ecom-panel)" stroke="#94a3b8" strokeOpacity="0.4" strokeWidth="2" />
    <g transform="translate(185, 140)">
      <circle cx="10" cy="35" r="4" fill="#f59e0b" />
      <circle cx="40" cy="35" r="4" fill="#f59e0b" />
      <path d="M5 5h10l5 20h20l5-15H15" stroke="#f59e0b" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    
    {/* Payment card */}
    <rect x="280" y="100" width="100" height="60" rx="8" fill="url(#ecom-pulse)" fillOpacity="0.2" stroke="#f59e0b" strokeWidth="2" />
    <rect x="290" y="115" width="80" height="8" rx="4" fill="#f59e0b" fillOpacity="0.3" />
    <rect x="290" y="135" width="50" height="6" rx="3" fill="#94a3b8" fillOpacity="0.4" />
    <rect x="290" y="145" width="60" height="6" rx="3" fill="#94a3b8" fillOpacity="0.4" />
    
    {/* Security shield */}
    <g transform="translate(60, 130)">
      <circle cx="30" cy="30" r="35" fill="url(#ecom-pulse)" fillOpacity="0.2" />
      <path d="M30 5l20 9v15c0 14-8 22-20 26-12-4-20-12-20-26V14l20-9z" stroke="#f59e0b" strokeWidth="2" fill="none" />
      <path d="M22 28l6 6 12-14" stroke="#f59e0b" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    
    {/* Connection lines */}
    <path d="M125 160h30M260 160h20M210 210v-50" stroke="#94a3b8" strokeOpacity="0.5" strokeDasharray="4 6" strokeWidth="2" />
    
    {/* Lock icon */}
    <g transform="translate(195, 75)">
      <rect x="0" y="8" width="30" height="20" rx="3" stroke="#10b981" strokeWidth="2" fill="none" />
      <path d="M7 8V5a8 8 0 0116 0v3" stroke="#10b981" strokeWidth="2" fill="none" />
      <circle cx="15" cy="18" r="2" fill="#10b981" />
    </g>
  </svg>
);

export default function EcommerceSecurityPage() {
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
          <div className="absolute inset-0 bg-linear-to-b from-slate-900/80 via-slate-900/60 to-slate-950" />
          <div className="absolute -left-20 top-20 h-56 w-56 rounded-full bg-amber-500/20 blur-3xl" />
          <div className="absolute -right-24 bottom-6 h-64 w-64 rounded-full bg-orange-500/20 blur-3xl" />
        </div>

        <Container className="relative z-10 flex min-h-[86vh] flex-col justify-center">
          <motion.div variants={fadeUp} className="max-w-3xl">
            <h1 className="mt-16 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              Secure your e-commerce platform before fraud impacts revenue.
            </h1>
            <p className="mt-4 text-lg text-white/80 md:text-xl">
              Comprehensive e-commerce security testing that protects payment flows, customer data, and business logic from attackers targeting checkout processes, pricing manipulation, and account takeover.
            </p>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Expert-led testing aligned to PCI DSS requirements with business logic validation to prevent fraud and abuse.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/contact?subject=services&subSubject=E-Commerce%20Security%20Assessment"
                aria-label="Request E-Commerce Security Assessment"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <motion.span
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  whileTap={reduceMotion ? undefined : { y: 0 }}
                  className="inline-flex items-center"
                >
                  Request Security Assessment
                </motion.span>
              </Link>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12 max-w-4xl">
            <div className="grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80 md:grid-cols-3">
              {painPoints.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
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
              title="E-commerce security that protects revenue and customer trust."
              subtitle="Identify payment, fraud, and business logic vulnerabilities before they impact your bottom line."
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
                        <IconCart className="h-5 w-5" />
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
              eyebrow="Compliance & Standards"
              title="Testing aligned to payment security and privacy regulations."
              subtitle="Demonstrate PCI DSS compliance and protect customer data for privacy law requirements."
            />
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {complianceBadges.map((badge) => (
                <Badge key={badge}>{badge}</Badge>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Methodology Section - continuing in next part due to length */}
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
              title="Attacker-centric testing focused on revenue impact."
              subtitle="We test e-commerce platforms the way fraudsters do—targeting payments, pricing logic, and customer accounts."
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
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">Testing process</h3>
              <div className="relative mt-6">
                <div className="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-linear-to-r from-transparent via-slate-300 to-transparent md:block dark:via-slate-700" />
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

      {/* Services, Coverage, Why Vulnuris, Deliverables, Use Cases, Tiers, FAQ, and CTA sections follow the same pattern */}
      {/* Omitted for brevity but would follow exact same structure as previous pages */}
      
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
              title="Platform-specific security expertise for all e-commerce systems."
              subtitle="From Shopify to custom platforms, we secure every type of online store."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {ecommerceServices.map((item) => (
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

      {/* Testing Coverage Section */}
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
                eyebrow="Testing Coverage"
                title="Comprehensive analysis of e-commerce attack vectors."
                subtitle="We test the vulnerabilities that lead to fraud, data theft, and revenue loss."
              />
              <div className="mt-8">
                <div className="relative rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-900/70">
                  <div className="pointer-events-none absolute -inset-1 rounded-[22px] bg-linear-to-r from-amber-500/30 via-orange-500/20 to-transparent opacity-70" />
                  <div className="relative overflow-hidden rounded-2xl bg-slate-950/5 p-4 dark:bg-slate-950">
                    <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-amber-500/20 blur-2xl" />
                    <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-orange-500/20 blur-2xl" />
                    <EcommerceSecurityIllustration />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="grid gap-4">
                {testCategories.map((category) => (
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
              title="E-commerce expertise that protects revenue and reputation."
              subtitle="We understand online retail—from payment flows to promotional abuse to customer account security."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "E-commerce specialization",
                  description: "Our testers understand shopping cart logic, payment gateways, inventory systems, and the fraud patterns unique to online retail.",
                  Icon: IconCart,
                },
                {
                  title: "Business logic focus",
                  description: "We identify pricing manipulation, coupon abuse, and checkout bypasses that automated scanners cannot detect.",
                  Icon: IconShield,
                },
                {
                  title: "PCI DSS expertise",
                  description: "Clear guidance on payment security requirements with evidence to support your compliance program and assessments.",
                  Icon: IconCreditCard,
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
              title="Comprehensive reports with revenue impact analysis."
              subtitle="From executive summaries to PCI DSS compliance evidence, we provide actionable intelligence."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {deliverables.map((item) => (
                <motion.div key={item} variants={fadeUp}>
                  <Card>
                    <div className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-amber-500" />
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
              title="Specialized testing for diverse e-commerce verticals."
              subtitle="Industry-specific threat modeling and fraud prevention for different online retail models."
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
              title="Flexible security programs for every business stage."
              subtitle="From pre-launch to peak season preparation, we adapt to your e-commerce calendar."
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
              title="Common questions about e-commerce security testing."
              subtitle="Clear answers to help you understand our approach to protecting online stores."
            />
            <div className="mt-8 space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-slate-200/70 bg-white/80 p-5 dark:border-slate-800/70 dark:bg-slate-900/70"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between text-left text-sm font-semibold text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 dark:text-white"
                    aria-expanded={openFaq === index}
                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  >
                    <span>{faq.question}</span>
                    <span className="text-slate-500">{openFaq === index ? "–" : "+"}</span>
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
            className="rounded-3xl border border-slate-200/70 bg-linear-to-r from-slate-900 via-slate-950 to-slate-900 px-6 py-10 text-center text-white shadow-xl dark:border-slate-800/70"
          >
            <h2 className="text-3xl font-semibold md:text-4xl">
              Protect your revenue before fraudsters exploit your checkout.
            </h2>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Get expert e-commerce security testing with PCI DSS validation and business logic abuse prevention.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact?subject=services&subSubject=E-Commerce%20Security%20Assessment"
                aria-label="Request E-Commerce Security Assessment"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Request Security Assessment
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
            Ready to secure your store?
          </div>
          <Link
            href="/contact?subject=services&subSubject=E-Commerce%20Security%20Assessment"
            aria-label="Request E-Commerce Security Assessment"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white"
          >
            Request Assessment
          </Link>
        </div>
      </div>
    </motion.main>
  );
}