'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Cpu,
  Wifi,
  Lock,
  Radar,
  Server,
} from 'lucide-react';

const sectionReveal = {
  hidden: { opacity: 0, y: 40, filter: 'blur(6px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0)', transition: { duration: 0.8 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardReveal = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function IoTSecurityPage() {
  return (
    <main className="w-full bg-background text-foreground overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative h-screen overflow-hidden bg-[#05080f]">

        {/* animated grid */}
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#38bdf822_1px,transparent_1px),linear-gradient(to_bottom,#38bdf822_1px,transparent_1px)] bg-[size:90px_90px]" />

        {/* background image */}
       
<video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/assets/videos/main.mp4" type="video/mp4" />
  </video>
        {/* glow layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-600/10" />

        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="max-w-4xl text-center"
          >
            <motion.div
              variants={sectionReveal}
              className="inline-block mb-6 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-sm tracking-widest"
            >
              INTERNET OF THINGS SECURITY
            </motion.div>

            <motion.h1
              variants={sectionReveal}
              className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
            >
              IoT Security Services
            </motion.h1>

            <motion.p
              variants={sectionReveal}
              className="mt-6 text-lg md:text-xl text-gray-300"
            >
              Protecting connected devices, networks, and data across the entire
              Internet of Things ecosystem.
            </motion.p>

            <motion.div
              variants={sectionReveal}
              className="mt-10 flex justify-center gap-4"
            >
              <Link
                href="/contact"
                className="rounded-full bg-cyan-600 px-8 py-3 text-white font-medium hover:bg-cyan-500 transition"
              >
                Talk to an Expert
              </Link>
              
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= WHAT IS IOT SECURITY ================= */}
      <motion.section
        className="py-24 px-6"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <motion.div variants={sectionReveal}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              What is IoT Security?
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              IoT Security focuses on protecting internet-connected devices such as
              sensors, cameras, smart appliances, industrial controllers, and
              embedded systems from cyber threats.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our solutions ensure authentication, secure communication, firmware
              integrity, and continuous monitoring.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            className="grid grid-cols-2 gap-6"
          >
            {[Cpu, Wifi, Lock, Radar].map((Icon, index) => (
              <motion.div
                key={index}
                variants={cardReveal}
                whileHover={{
                  y: -6,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                }}
                className="relative group rounded-2xl border border-border p-6 flex flex-col items-center text-center bg-background transition-all overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <Icon className="h-10 w-10 text-primary" />
                <p className="mt-4 font-medium">Secure Devices</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ================= SERVICES ================= */}
      <motion.section
        className="py-24 px-6 bg-muted/30"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">

          <motion.h2
            variants={sectionReveal}
            className="text-3xl md:text-4xl font-bold text-center text-primary"
          >
            Our IoT Security Services
          </motion.h2>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              { icon: ShieldCheck, title: 'IoT Risk Assessment', desc: 'Identify vulnerabilities in devices, firmware, and protocols.' },
              { icon: Server, title: 'Secure Firmware & Updates', desc: 'Encrypted firmware, secure boot and OTA updates.' },
              { icon: Wifi, title: 'Network Protection', desc: 'Segmentation, firewalls, and anomaly detection.' },
              { icon: Lock, title: 'Device Authentication', desc: 'Strong identity and access control.' },
              { icon: Radar, title: 'Threat Monitoring', desc: 'Continuous detection of abnormal behavior.' },
              { icon: Cpu, title: 'Industrial IoT Security', desc: 'Protect SCADA, PLCs, and automation systems.' },
            ].map((service, i) => (
              <motion.div
                key={i}
                variants={cardReveal}
                whileHover={{
                  y: -8,
                  boxShadow: '0 25px 45px rgba(0,0,0,0.15)',
                }}
                className="relative group rounded-2xl border border-border p-8 bg-background transition-all overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <service.icon className="h-10 w-10 text-primary" />
                <h3 className="mt-6 text-xl font-semibold">{service.title}</h3>
                <p className="mt-4 text-muted-foreground">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ================= WHY CHOOSE US ================= */}
      <motion.section
        className="py-24 px-6"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto text-center">

          <motion.h2 variants={sectionReveal} className="text-3xl md:text-4xl font-bold text-primary">
            Why Choose Our IoT Security?
          </motion.h2>

          <motion.p variants={sectionReveal} className="mt-6 text-muted-foreground max-w-3xl mx-auto">
            We combine deep IoT expertise, real-world attack simulations, and
            industry best practices to secure your ecosystem end-to-end.
          </motion.p>

          <motion.div variants={stagger} className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              'End-to-End Protection',
              'Industry Standards Compliance',
              'Scalable for Millions of Devices',
              '24/7 Security Monitoring'
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={cardReveal}
                whileHover={{
                  y: -6,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                }}
                className="relative group rounded-xl border border-border p-6 font-medium bg-background transition-all overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                {item}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ================= CTA ================= */}
      <motion.section
        className="py-28 px-6 text-center border-t border-border"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h2 variants={sectionReveal} className="text-3xl md:text-4xl font-bold text-primary mb-6">
          Secure Your IoT Ecosystem Today
        </motion.h2>

        <motion.p variants={sectionReveal} className="text-muted-foreground max-w-2xl mx-auto mb-10">
          From device-level protection to cloud-level monitoring, we help you build secure and resilient IoT systems.
        </motion.p>

        <motion.div variants={sectionReveal} whileHover={{ scale: 1.08 }}>
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium"
          >
            Get Started
          </Link>
        </motion.div>
      </motion.section>

    </main>
  );
}
