'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';



const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const heroFade = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export default function AISOCPage() {
  return (
    <main className="w-full bg-gray-50 dark:bg-background text-gray-900 dark:text-foreground">

      {/* ================= HERO ================= */}
      <section className="relative h-screen overflow-hidden bg-[#05070d]">

        {/* AI grid */}
        <div
          className="absolute inset-0 opacity-[0.08]
          bg-[linear-gradient(to_right,#3b82f633_1px,transparent_1px),
              linear-gradient(to_bottom,#3b82f633_1px,transparent_1px)]
          bg-[size:90px_90px]"
        />

        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('/assets/services/ai.webp')" }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/65 to-black/90" />

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 h-full flex flex-col justify-center px-6 max-w-7xl mx-auto"
        >
          <motion.div
            variants={heroFade}
            className="inline-block mb-6 px-5 py-2 rounded-full
                       border border-blue-400/40 bg-blue-500/10
                       text-blue-300 text-sm tracking-widest uppercase"
          >
            AI-Powered Security
          </motion.div>

          <motion.h1
            variants={heroFade}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight max-w-5xl"
          >
            AI Security Operations <br /> Center (AI SOC)
          </motion.h1>

          <motion.p
            variants={heroFade}
            className="mt-6 text-gray-300 max-w-3xl text-lg"
          >
            Continuously monitor, detect, and respond to cyber threats in real-time using
            artificial intelligence, automation, and advanced analytics.
          </motion.p>

          <motion.div
            variants={heroFade}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="mt-10"
          >
            <Link href="/contact">
              <button
                className="px-10 py-4 rounded-full font-semibold text-white
                           bg-gradient-to-r from-blue-600 to-cyan-500
                           shadow-[0_0_35px_rgba(59,130,246,0.45)]
                           hover:shadow-[0_0_55px_rgba(59,130,246,0.7)]
                           transition-all"
              >
                Speak With an AI SOC Expert
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-24 px-6"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
            AI Security Operations Center (AI SOC)
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 max-w-4xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
            An AI SOC uses artificial intelligence and machine learning to monitor security events,
            detect anomalies, and respond to incidents faster than traditional SOC models.
          </motion.p>

          <motion.p variants={fadeUp} className="mt-4 max-w-4xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
            It enhances visibility, reduces response time, minimizes alert fatigue, and improves your overall security posture.
          </motion.p>
        </div>
      </motion.section>

      {/* ================= WHY AI SOC ================= */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-24 px-6"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <motion.div variants={fadeUp} className="ml-6">
            <h2 className="text-2xl font-semibold text-primary mb-6">
              Why AI Security Operations Center
            </h2>

            <ul className="space-y-4 text-gray-800 dark:text-gray-200">
              <li>• 24×7 real-time threat monitoring</li>
              <li>• Faster detection using AI & machine learning</li>
              <li>• Reduced false positives and alert fatigue</li>
              <li>• Automated incident response</li>
              <li>• Improved visibility across infrastructure</li>
            </ul>
          </motion.div>

          <motion.img
            variants={fadeUp}
            src="/assets/services/ai.webp"
            alt="AI SOC"
            className="w-full max-w-md rounded-xl shadow-xl mx-auto"
          />
        </div>
      </motion.section>

      {/* ================= SERVICES GRID ================= */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-24 px-6"
      >
        <div className="max-w-7xl mx-auto text-center">

          <motion.h2 variants={fadeUp} className="text-3xl font-semibold mb-16">
            AI SOC Capabilities & Services
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              ["24×7 Security Monitoring", "Continuous monitoring of logs, endpoints, networks, and cloud environments."],
              ["AI Threat Detection", "Machine learning based detection of anomalies and advanced threats."],
              ["Incident Response", "Automated and analyst-led incident investigation and response."],
              ["SIEM & SOAR Integration", "Centralized visibility and automated workflows."],
              ["Threat Intelligence", "Correlation of global threat intelligence with internal events."],
              ["Compliance Monitoring", "Support regulatory compliance through continuous monitoring."],
            ].map(([title, desc], i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="bg-white dark:bg-muted border border-gray-200 dark:border-border
                           rounded-2xl p-6 shadow-sm hover:shadow-xl transition"
              >
                <h3 className="font-semibold text-lg mb-3 text-blue-600 dark:text-blue-400">
                  {title}
                </h3>
                <p className="text-gray-700 dark:text-muted-foreground text-sm leading-relaxed">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ================= DETAILS ================= */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-24 px-6"
      >
        <div className="max-w-7xl mx-auto">

          <motion.h2 variants={fadeUp} className="text-center text-2xl md:text-3xl font-bold mb-16">
            What Is an AI Security Operations Center?
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.ul variants={fadeUp} className="space-y-6 text-lg text-gray-800 dark:text-gray-200">
              <li>• Continuous monitoring of security events</li>
              <li>• AI-driven threat detection and correlation</li>
              <li>• Faster incident triage and investigation</li>
              <li>• Reduced manual workload for security teams</li>
            </motion.ul>

            <motion.ul variants={fadeUp} className="space-y-6 text-lg text-gray-800 dark:text-gray-200">
              <li>• Endpoint, network, and cloud visibility</li>
              <li>• Automated response and containment</li>
              <li>• Threat intelligence integration</li>
              <li>• Security reporting and dashboards</li>
            </motion.ul>
          </div>
        </div>
      </motion.section>

      {/* ================= CTA ================= */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-24 px-6 text-center"
      >
        <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-4">
          Stay Ahead of Cyber Threats with AI SOC
        </motion.h2>

        <motion.p variants={fadeUp} className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Detect, analyze, and respond to threats faster with our AI-powered Security Operations Center.
        </motion.p>

        <motion.div variants={fadeUp} whileHover={{ scale: 1.08 }}>
          <Link href="/contact">
            <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-xl">
              Talk to an AI SOC Expert
            </button>
          </Link>
        </motion.div>
      </motion.section>

    </main>
  );
}
