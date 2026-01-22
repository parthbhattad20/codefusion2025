"use client";

import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="h-[500px]" />;

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

  return (
    <>
      {/* Main Footer */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-6 md:gap-3 gap-y-8 max-w-[92%] mx-auto pt-6 md:pt-10 font-primary"
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
                <Link href={itemLink.url} className="relative inline-block pb-1">
                  {itemLink.name}
                  <Underline />
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div variants={item} className="flex flex-col gap-3 items-start">
          <h2 className="text-xl font-semibold mb-2">Services</h2>
          <ul className="space-y-2 text-sm">
            {[
              ["Virtual CISO", "/services/virtual-ciso"],
              ["GRC Advisory and Audit", "/services/grc-advisory"],
              ["Cloud Security", "/services/cloud-security"],
              ["Application Security", "/services/application-security"],
              ["Network Security", "/services/network-security"],
              ["Cyber Forensics", "/services/cyber-forensics"],
              ["VAPT", "/services/vapt"],
              ["Red Teaming", "/services/red-teaming"],
              ["Phishing Simulation", "/services/phishing-simulation"],
              ["IoT Security", "/services/iot-security"],
              ["AI Soc", "/services/ai-soc"],
            ].map(([name, url]) => (
              <li key={name} className="relative group">
                <Link href={url} className="relative inline-block pb-1">
                  {name}
                  <Underline />
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Products */}
        <motion.div variants={item} className="flex flex-col gap-3 items-start">
          <h2 className="text-xl font-semibold mb-2">Products</h2>
          <ul className="space-y-2 text-sm">
            {[
              { name: "Vaultix", url: "/products/vumas" },
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
              { name: "LinkedIn", icon: <Linkedin size={18} />, color: "hover:text-blue-500" },
              { name: "Instagram", icon: <Instagram size={18} />, color: "hover:text-pink-500" },
              { name: "Facebook", icon: <Facebook size={18} />, color: "hover:text-blue-600" },
            ].map((itemSocial) => (
              <li key={itemSocial.name} className="relative group">
                <Link
                  href="https://www.linkedin.com/company/vulnuris/"
                  target="_blank"
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
          {["ISO-27701-certified.png", "iso9001.png", "iso27001.png"].map((img) => (
            <img
              key={img}
              src={`/assets/${img}`}
              className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain opacity-90 hover:opacity-100 transition"
              alt="certification"
            />
          ))}
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
