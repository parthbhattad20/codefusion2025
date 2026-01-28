"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const sectionReveal = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0)", transition: { duration: 0.8 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardReveal = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function SOCPage() {
  return (
    <main className="w-full bg-background text-foreground overflow-x-hidden">
      {/* ================= HERO ================= */}
      <section className="relative h-screen overflow-hidden bg-[#05080f]">
        {/* background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/assets/videos/main.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/70" />

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
              SECURITY MONITORING 24×7
            </motion.div>

            <motion.h1
              variants={sectionReveal}
              className="text-4xl md:text-6xl font-extrabold text-white"
            >
              Security Operations Centre (SOC)
            </motion.h1>

            <motion.p
              variants={sectionReveal}
              className="mt-6 text-lg md:text-xl text-gray-300"
            >
              A dedicated team of professional hackers working 24×7 to monitor,
              detect, and stop cyber attacks before they cause damage.
            </motion.p>

            <motion.div variants={sectionReveal} className="mt-10">
              <Link
                href="/contact"
                className="rounded-full bg-cyan-600 px-10 py-4 text-white font-medium hover:bg-cyan-500 transition"
              >
                Get Started
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <motion.section
        className="py-28 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-background dark:to-background"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <motion.div variants={sectionReveal} className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              What is a Security Operations Centre?
            </h2>

            <p className="mt-6 max-w-4xl mx-auto text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              A Security Operations Centre (SOC) is a centralized cybersecurity
              unit with skilled professionals and advanced tools that
              continuously monitor your systems to detect threats, prevent
              breaches, and protect digital assets 24×7.
            </p>

            <div className="mt-6 h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-violet-500 to-indigo-500" />
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
            {/* Why SOC */}
            <motion.div
              variants={sectionReveal}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="relative p-8 rounded-2xl border border-gray-200 dark:border-slate-800
                   bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl
                   shadow-lg hover:shadow-2xl"
            >
              <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-violet-500 to-indigo-500 rounded-full" />

              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                Why SOC is Important
              </h3>

              <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-lg">
                <li>• Continuous 24×7 security monitoring</li>
                <li>• Early detection of cyber attacks</li>
                <li>• Prevention of data breaches and financial loss</li>
                <li>• Protection of brand reputation</li>
                <li>• Hassle-free security investment</li>
              </ul>
            </motion.div>

            {/* Image Card */}
            <motion.div
              variants={sectionReveal}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="relative p-6 rounded-2xl border border-gray-200 dark:border-slate-800
                   bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl
                   shadow-lg hover:shadow-2xl flex items-center justify-center"
            >
              <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-indigo-500 to-fuchsia-500 rounded-full" />

              <img
                src="/assets/services/soc.jpg"
                alt="Security Operations Centre"
                className="w-full max-w-md rounded-xl shadow-md"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ================= WATTLECORP SOC ================= */}
      <motion.section
        className="py-24 px-6 bg-muted/30"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            variants={sectionReveal}
            className="text-3xl md:text-4xl font-semibold text-primary mb-14"
          >
            Wattlecorp SOC Expertise
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "SOC Setup",
                desc: "Developing on-site or off-site Security Operations Centres.",
              },
              {
                title: "Operational Efficiency",
                desc: "Ensuring smooth and effective security operations.",
              },
              {
                title: "Emergency Protocols",
                desc: "Building strong response plans for active attacks.",
              },
              {
                title: "Expert Team Training",
                desc: "Continuous education of professional hackers.",
              },
              {
                title: "Security Analysis",
                desc: "Regular assessments and checks.",
              },
              {
                title: "278+ Activities",
                desc: "Comprehensive SOC operations — call us to learn more.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={cardReveal}
                whileHover={{ y: -10 }}
                className="bg-background border border-border rounded-2xl p-6"
              >
                <h3 className="font-semibold text-lg mb-3 text-primary">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ================= SOC PILLARS ================= */}
      <motion.section
        className="py-24 px-20"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={sectionReveal}
            className="text-center text-2xl md:text-3xl font-bold text-primary mb-16"
          >
            How Our SOC Protects You
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <motion.div variants={cardReveal}>
              <h3 className="text-xl font-semibold text-primary mb-3">Power</h3>
              <p className="text-muted-foreground">
                Our power team stops hackers with strong defense strategies.
              </p>
            </motion.div>
            <motion.div variants={cardReveal}>
              <h3 className="text-xl font-semibold text-primary mb-3">
                Monitor
              </h3>
              <p className="text-muted-foreground">
                Pro-active monitoring with continuous threat analysis.
              </p>
            </motion.div>
            <motion.div variants={cardReveal}>
              <h3 className="text-xl font-semibold text-primary mb-3">
                Report
              </h3>
              <p className="text-muted-foreground">
                Clear attack reports to prevent future losses.
              </p>
            </motion.div>
          </div>
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
        <motion.h2
          variants={sectionReveal}
          className="text-3xl md:text-4xl font-bold text-primary mb-4"
        >
          Your Free SOC Consultation is One Click Away
        </motion.h2>

        <motion.p
          variants={sectionReveal}
          className="mb-8 max-w-2xl mx-auto text-lg text-muted-foreground"
        >
          Book a consultation to get personalized SOC recommendations for your
          business.
        </motion.p>

        <motion.div variants={sectionReveal} whileHover={{ scale: 1.08 }}>
          <Link
            href="/contact"
            className="px-10 py-3 rounded-full text-lg font-semibold bg-primary text-primary-foreground"
          >
            Book Now
          </Link>
        </motion.div>
      </motion.section>
    </main>
  );
}
