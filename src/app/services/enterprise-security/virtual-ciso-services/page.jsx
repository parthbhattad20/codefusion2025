'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const sectionReveal = {
  hidden: { opacity: 0, y: 50, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardReveal = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const floating3D = {
  animate: {
    rotateX: [0, 6, 0, -6, 0],
    rotateY: [0, -8, 0, 8, 0],
    y: [0, -10, 0, 10, 0],
  },
  transition: { duration: 12, repeat: Infinity, ease: 'easeInOut' },
};

export default function VCISOPage() {
  return (
    <main className="w-full bg-white text-gray-900 dark:bg-background dark:text-foreground">

      {/* ================= HERO ================= */}
      <section className="relative h-screen overflow-hidden">

      <video
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src="/assets/videos/main.mp4" type="video/mp4" />
</video>


        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/65 to-black/85"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:70px_70px]" />

        <motion.div
          className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-12"
          animate={{ x: ['-30%', '30%'] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
        />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-32">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-6 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm text-white tracking-wide"
          >
            Executive Cybersecurity Leadership
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight"
          >
            Virtual CISO Services
          </motion.h1>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full my-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-sm md:text-xl text-gray-200 max-w-4xl text-center"
          >
            Vulnuris Virtual CISO Program services assist executives and security teams in safeguarding information assets while supporting business operations. We provide certified virtual CISOs and dedicated expert support as part of your team, saving you time and money on hiring security talent.
          </motion.p>

          <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.96 }} className="mt-10">
            <Link href="/contact">
              <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition">
                Speak With an Expert
              </button>
            </Link>
          </motion.div>

        </div>
      </section>

      {/* ================= VCISO PROGRAM SERVICES ================= */}
      <motion.section
        className="py-24 px-6"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-120px' }}
      >
        <div className="max-w-7xl mx-auto">

          <motion.div variants={sectionReveal} className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-primary">
              Virtual CISO (VCISO) Program Services
            </h1>

            <p className="mt-4 text-lg font-semibold text-sky-800 dark:text-sky-200">
              VCISO Advisory Services: CISO CERTIFIED experts
            </p>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              Vulnuris is an award-winning, independent security consulting firm providing organizations that
              require an experienced CISO, with a Virtual Chief Information Security Officer and a team
              to drive critical initiatives and oversee an entire security program as well as the technologies
              required to protect the organization and its customers from modern security threats while meeting
              regulatory compliance requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <motion.div variants={sectionReveal} className="ml-10">
              <h2 className="text-2xl font-semibold mb-6">
                Why Vulnuris Virtual CISO Services
              </h2>

              <ul className="space-y-4 text-gray-800 dark:text-muted-foreground">
                <li className="font-semibold">• Accelerate security program maturity</li>
                <li className="ml-6">○ Program development</li>
                <li className="ml-6">○ Policy and standards</li>
                <li className="ml-6">○ Compliance</li>
                <li className="ml-6">○ Governance</li>
                <li className="ml-6">○ Security</li>
                <li>• Access to a team of experts</li>
                <li>• Improve compliance and avoid penalties</li>
                <li>• Reduce security risk and business continuity</li>
                <li>• Decrease overhead cost of hiring a full-time CISO</li>
              </ul>
            </motion.div>

            <motion.div
              variants={sectionReveal}
              className="flex justify-center md:justify-end mr-20 perspective-[1200px]"
            >
              <motion.img
                src="/assets/services/vCiso.webp"
                alt="VCISO Security"
                className="w-full max-w-md rounded-xl shadow-xl"
                animate={floating3D.animate}
                transition={floating3D.transition}
                style={{ transformStyle: 'preserve-3d' }}
              />
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* ================= VCISO SERVICES GRID ================= */}
      <motion.section
        className="py-20 px-6"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto text-center">

          <motion.h2 variants={sectionReveal} className="text-4xl font-semibold mb-14">
            Virtual CISO (VCISO) Program: Protect Your Organization
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

            {[
              ['Virtual CISO/vCISO', 'Board-level cyber security leadership, strategy and monthly reporting.'],
              ['Governance, Risk & Compliance', 'Align GRC using NIST, PCI/DSS, ISO, GDPR and others.'],
              ['IT Security Operations', 'SOC strategy and 24x7 cyber risk monitoring.'],
              ['Security Awareness Education', 'Empower employees against cyber threats.'],
              ['Penetration Testing & Phishing', 'Understand vulnerabilities clearly.'],
              ['Third Party Risk Management', 'Vendor security assessments managed by VCISO team.'],
            ].map(([title, desc], i) => (
              <motion.div
                key={i}
                variants={cardReveal}
                whileHover={{
                  y: -8,
                  boxShadow: '0 18px 40px rgba(0,0,0,0.08)',
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="bg-white dark:bg-muted border border-gray-200 dark:border-border rounded-2xl p-6 shadow-sm cursor-pointer"
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

      {/* ================= VCISO DETAILS ================= */}
      <motion.section
        className="py-24 px-20"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">

          <motion.h2 variants={sectionReveal} className="text-center text-2xl md:text-3xl font-bold mb-16">
            What are our Virtual CISO (VCISO) Services?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">

            <motion.ul variants={sectionReveal} className="space-y-6 text-gray-800 dark:text-muted-foreground text-lg">
              <li>• Virtual CISO provides expert security guidance</li>
              <li>• Align cybersecurity with business strategy</li>
              <li>• Enterprise risk management integration</li>
              <li>• Threat analysis and updates</li>
              <li>• Compliance anticipation</li>
              <li>• Team leadership and control implementation</li>
            </motion.ul>

            <motion.ul variants={sectionReveal} className="space-y-6 ml-20 text-gray-800 dark:text-muted-foreground text-lg">
              <li className="font-semibold">• Ongoing GRC Management</li>
              <li>○ Risk & compliance management</li>
              <li>○ Vendor programs</li>
              <li>○ Executive engagement</li>
              <li>○ Threat intelligence</li>
              <li className="font-semibold mt-4">• Crisis Management</li>
            </motion.ul>

          </div>
        </div>
      </motion.section>

      {/* ================= CTA ================= */}
      <motion.section
        className="py-24 px-6 text-center"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h2 variants={sectionReveal} className="text-3xl md:text-4xl font-bold mb-4">
          Strengthen Your Security Leadership
        </motion.h2>

        <motion.p variants={sectionReveal} className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Get expert cybersecurity guidance tailored to your organization’s risk profile and compliance needs.
        </motion.p>

        <motion.div variants={sectionReveal} whileHover={{ scale: 1.08 }}>
          <Link href="/contact">
            <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-xl">
              Talk to a vCISO Expert
            </button>
          </Link>
        </motion.div>
      </motion.section>

    </main>
  );
}
