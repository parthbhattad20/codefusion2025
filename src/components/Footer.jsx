"use client";

import { Facebook, Instagram, Linkedin, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [openService, setOpenService] = useState(null);

  useEffect(() => setMounted(true), []);

  // Combined services from both navbar and original footer
  const servicesMegaMenu = {
    "Application Security": [
      "VAPT",
      "Web Application Penetration Testing",
      "Mobile App Penetration Testing",
      "API Penetration Testing",
      "Secure Source Code Review",
      "Ecommerce Security",
      "SaaS Security",
    ],
    "Cyber Risk Management": [
      "ISO 27001 Consulting",
      "ISO 27701 Consulting",
      "Aramco CCC",
      "Dora Compliance",
      "HIPAA Compliance",
      "PCI DSS Compliance",
      "Cyber Security Strategic Consulting",
      "GRC Advisory and Audit",
    ],
    "Enterprise Security": [
      "Virtual CISO Services",
      "Black Box Testing",
      "Email Security Audit",
      "Server Hardening",
      "Microsoft 365 Security",
      "ERP Security Audit Assessment",
      "Security Architecture Review",
    ],
    "Cloud Security": [
      "Cloud Security Audit",
      "Cloud Application Security Assessment",
      "AWS Server Hardening",
      "Azure Server Hardening",
      "GCP Server Hardening",
      "Container Security",
    ],
    "Data Privacy": [
      "DPO as a Service",
      "GDPR Compliance",
      "Data Privacy Consulting",
      "DPDPA",
    ],
    "Managed Services": [
      "Managed Security Services",
      "Security Operations Centre",
      "Annual Security Program",
      "AI SOC",
    ],
    "Industrial Security": [
      "IoT Penetration Testing",
      "OT Security Assessment",
      "ICS Scada Security Testing",
    ],
    "Network Security": [
      "Firewall Assessment",
      "Network Penetration Testing",
      "Wireless Security Assessment",
    ],
    "Managed VAPT": ["Managed Threat Hunting", "Pro active threat hunting"],
    "Threat Simulations": ["Phishing Simulation", "Red Teaming"],
    "Cyber Forensics": [
      "Digital Forensics",
      "Incident Response",
      "Malware Analysis",
    ],
  };

  const slugify = (text) =>
    text
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

  const Underline = () => (
    <span
      className="absolute left-1/2 bottom-0 h-0.5 w-full bg-primary 
      scale-x-0 origin-center -translate-x-1/2 
      group-hover:scale-x-100 transition-transform duration-300"
    />
  );

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  if (!mounted) return <div className="h-[500px]" />;

  return (
    <>
      {/* Main Footer */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-6 md:gap-3 gap-y-8 max-w-[92%] mx-auto pt-6 md:pt-10 font-primary"
      >
        {/* Logo */}
        <motion.div variants={item} className="flex flex-col items-start">
          <p className="text-sm mb-8 mr-8 w-full max-w-xs text-left text-muted-foreground">
            Professional cybersecurity solutions protecting your digital assets
            since 2017.
            <br />
            Formarly Known as Newtonsapple Security Solutions LLP
          </p>

          <div className="relative w-28 h-14 md:w-36 md:h-18 lg:w-48 lg:h-24">
            <Image
              src={
                theme === "light"
                  ? "/assets/vulnuris_logo_full1.png"
                  : "/assets/vulnuris_logo_full2.png"
              }
              alt="logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>

        {/* Links */}
        <motion.div variants={item} className="flex flex-col gap-3 items-start">
          <h2 className="text-xl font-semibold mb-2">Links</h2>
          <ul className="space-y-2 text-sm">
            {[
              { name: "Blog", url: "/blogs" },
              { name: "FAQs", url: "/faqs" },
              { name: "Terms", url: "/terms" },
              { name: "Sitemap", url: "/sitemap" },
              { name: "Privacy Policy", url: "/privacy-policy" },
            ].map((itemLink) => (
              <li key={itemLink.name} className="relative group">
                <Link
                  href={itemLink.url}
                  className="relative inline-block pb-1"
                >
                  {itemLink.name}
                  <Underline />
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Services with Dropdown */}
        <motion.div variants={item} className="flex flex-col gap-3 items-start">
          <h2 className="text-xl font-semibold mb-2">Services</h2>
          <ul
            className="space-y-2 text-sm w-full max-h-[500px] overflow-y-auto pr-2 
            [&::-webkit-scrollbar]:w-1.5
            [&::-webkit-scrollbar-track]:bg-transparent
            [&::-webkit-scrollbar-thumb]:bg-primary/20
            [&::-webkit-scrollbar-thumb]:rounded-full
            hover:[&::-webkit-scrollbar-thumb]:bg-primary/40"
          >
            {/* Standalone AI SOC Service */}
            <li className="relative group pb-2 border-b border-border/30">
              <Link
                href="/services/ai-soc"
                className="relative inline-block pb-1 font-semibold text-foreground hover:text-primary transition-colors"
              >
                AI SOC
                <span className="absolute left-0 bottom-0 h-0.5 w-full bg-primary scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            </li>

            {Object.keys(servicesMegaMenu).map((category) => (
              <li key={category} className="relative">
                <button
                  onClick={() =>
                    setOpenService(openService === category ? null : category)
                  }
                  className="relative inline-flex items-center gap-1.5 pb-1 group w-full text-left hover:text-primary transition-colors"
                >
                  <span className="flex-1 text-sm font-medium">{category}</span>
                  <motion.span
                    animate={{ rotate: openService === category ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={14} className="opacity-60" />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {openService === category && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden mt-2 ml-3 border-l-2 border-primary/30 pl-3"
                    >
                      <motion.ul
                        className="space-y-2"
                        initial="hidden"
                        animate="show"
                        variants={{
                          show: { transition: { staggerChildren: 0.05 } },
                        }}
                      >
                        {servicesMegaMenu[category].map((service) => (
                          <motion.li
                            key={service}
                            variants={{
                              hidden: { opacity: 0, x: -10 },
                              show: { opacity: 1, x: 0 },
                            }}
                            className="relative group"
                          >
                            <Link
                              href={`/services/${slugify(category)}/${slugify(service)}`}
                              className="text-xs text-muted-foreground hover:text-primary transition-colors block relative pb-1"
                            >
                              {service}
                              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-primary scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
                            </Link>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Products */}
        <motion.div variants={item} className="flex flex-col gap-3 items-start">
          <h2 className="text-xl font-semibold mb-2">Products</h2>
          <ul className="space-y-2 text-sm">
            {[
              { name: "Vaultix", url: "/products/vaultix" },
              { name: "Phishinstinct", url: "/products/phishinstinct" },
              { name: "Kloudraksha", url: "/products/kloudraksha" },
              { name: "Vcrypt", url: "/products/vcrypt" },
            ].map((p) => (
              <li key={p.name} className="relative group">
                <Link href={p.url} className="relative inline-block pb-1">
                  {p.name}
                  <Underline />
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Social */}
        <motion.div variants={item} className="flex flex-col gap-3 items-start">
          <h3 className="text-xl font-semibold mb-2">Social</h3>
          <ul className="space-y-3">
            {[
              {
                name: "LinkedIn",
                icon: <Linkedin size={18} />,
                color: "hover:text-blue-500",
                url: "https://www.linkedin.com/company/vulnuris/",
              },
              {
                name: "Instagram",
                icon: <Instagram size={18} />,
                color: "hover:text-pink-500",
                url: "https://www.instagram.com/vulnuris/",
              },
              {
                name: "Facebook",
                icon: <Facebook size={18} />,
                color: "hover:text-blue-600",
                url: "https://www.facebook.com/vulnuris/",
              },
            ].map((itemSocial) => (
              <li key={itemSocial.name} className="relative group">
                <Link
                  href={itemSocial.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative flex items-center gap-3 pb-1 transition-colors ${itemSocial.color}`}
                >
                  {itemSocial.icon}
                  <span>{itemSocial.name}</span>
                  <Underline />
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Certifications */}
        <motion.div
          variants={item}
          className="flex justify-start gap-6 items-center mt-6 md:mt-0 lg:mt-[-11rem] lg:col-start-4 lg:col-span-2"
        >
          {["ISO-27701-certified.png", "iso9001.png", "iso27001.png"].map(
            (img) => (
              <motion.img
                key={img}
                whileHover={{ scale: 1.05 }}
                src={`/assets/${img}`}
                className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain opacity-90 hover:opacity-100 transition"
                alt="certification"
              />
            ),
          )}
        </motion.div>
      </motion.div>

      {/* Offices */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-[92%] mx-auto mt-12 pt-5 border-t-2 border-border pb-10"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-sm gap-4">
          {[
            ["India", "Nitaan Towers, Aundh, Pune, Maharashtra 411007"],
            ["Kuwait", "Panasonic Tower,\nKuwait City, Kuwait"],
            ["USA", "12310 Pinecrest Road,\nSuite #306, Reston, VA 20191"],
            ["UAE", "Vulnuris Security Solutions FZCO,\nA1, IFZA, Dubai, UAE"],
          ].map(([country, address], idx) => (
            <div
              key={country}
              className={`p-2 ${idx !== 0 ? "border-l border-border lg:border-l-2" : ""}`}
            >
              <h5 className="font-semibold mb-2">{country}</h5>
              <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                {address}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-[92%] mx-auto pb-8 flex justify-center items-center"
      >
        <p className="text-sm text-center text-muted-foreground">
          © 2026 VULNURIS. All rights reserved.
        </p>
      </motion.div>
    </>
  );
}
