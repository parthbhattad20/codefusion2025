"use client";

import {
  Search,
  Brain,
  Mail,
  Target,
  Cloud,
  Bell,
  ShieldCheck,
  Zap,
  Server,
} from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export default function WhatWeDo() {
  const items = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-pink-500" />,
      title: "Vaultix",
      desc: "Protect your digital assets and sensitive data with Vaultix's robust encryption and access control platform.",
    },
    {
      icon: <Zap className="w-5 h-5 text-teal-500" />,
      title: "Phishinstinct",
      desc: "Detect, simulate, and prevent phishing attacks with Phishinstinct’s advanced AI-driven platform.",
    },
    {
      icon: <Server className="w-5 h-5 text-indigo-500" />,
      title: "Kloudraksha",
      desc: "Secure your cloud infrastructure with Kloudraksha’s real-time monitoring, threat detection, and compliance tools.",
    },
    {
      icon: <Search className="w-5 h-5 text-blue-500" />,
      title: "Security Visibility & Risk Prioritization",
      desc: "Continuously discover assets, detect vulnerabilities with AI, and prioritize risks with context using our Insight Platform.",
    },
    {
      icon: <Brain className="w-5 h-5 text-violet-500" />,
      title: "Tailored Threat Intelligence",
      desc: "Get actionable insights with curated threat feeds, dark web monitoring, and executive briefings via Vulnuris Threat Intel.",
    },
    {
      icon: <Mail className="w-5 h-5 text-red-500" />,
      title: "Phishing Simulation & Awareness",
      desc: "Empower your team with phishing simulations, automated training, and in-depth reporting through PhishGuard.",
    },
    {
      icon: <Target className="w-5 h-5 text-orange-500" />,
      title: "Offensive Security Services",
      desc: "Identify and remediate weaknesses with Penetration Testing and Vulnerability Assessments.",
    },
    {
      icon: <Cloud className="w-5 h-5 text-cyan-500" />,
      title: "Cloud Security Expertise",
      desc: "Secure your AWS, Azure, and GCP environments with expert reviews, architecture design, and real-time monitoring.",
    },
    {
      icon: <Bell className="w-5 h-5 text-green-500" />,
      title: "Incident Response & Advisory",
      desc: "Respond fast to breaches and enhance your security strategy with our Incident Response and Security Advisory services.",
    },
  ];

  return (
    <div className="flex flex-col gap-10 py-12 max-w-7xl mx-auto px-6 border-t">
      {/* Heading scroll animation */}
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-semibold text-center"
      >
        What <span className="text-violet-700">V</span> Do?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.05 }}
        className="text-muted-foreground text-center max-w-xl mx-auto"
      >
        At Vulnuris, we help organizations take control of their cybersecurity
        posture through intelligent products and expert-led services.
      </motion.p>

      {/* Cards container scroll animation */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto"
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{
              y: -6,
              transition: { duration: 0.18, ease: "easeOut" },
            }}
            className="
              group relative rounded-xl border border-border
              bg-white dark:bg-white/5
              px-7 py-7
              shadow-sm hover:shadow-md
              transition-shadow duration-300
            "
          >
            {/* Card index */}
            <span className="absolute top-4 right-5 text-5xl font-bold text-muted-foreground/10 select-none">
              {`0${index + 1}`}
            </span>

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                {/* Icon micro interaction */}
                <motion.div
                  whileHover={{ rotate: 6, x: 3 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                >
                  {item.icon}
                </motion.div>

                <div className="relative">
                  <h3 className="font-semibold text-sm">{item.title}</h3>

                  {/* underline draw animation */}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </div>
              </div>

              {/* description fade on hover */}
              <p className="text-sm text-muted-foreground leading-relaxed transition-colors duration-300 group-hover:text-foreground/90">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
