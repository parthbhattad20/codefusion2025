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
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const floating3D = {
  animate: {
    rotateX: [0, 7, 0, -7, 0],
    rotateY: [0, -10, 0, 10, 0],
    y: [0, -12, 0, 12, 0],
  },
  transition: { duration: 14, repeat: Infinity, ease: 'easeInOut' },
};

export default function BlackBoxTestingPage() {
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
            Real-World Attack Simulation
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight"
          >
            Black Box Penetration Testing
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
            Discover how a real attacker could hack your business — safely. Our expert Black Box Penetration Testing services replicate real-world cyber attacks without prior system knowledge.
          </motion.p>

          <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.96 }} className="mt-10">
            <Link href="/contact">
              <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition">
                Request a Pentest
              </button>
            </Link>
          </motion.div>

        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <motion.section
        className="py-24 px-6"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-120px' }}
      >
        <div className="max-w-7xl mx-auto">

          <motion.div variants={sectionReveal} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
              What is Black Box Penetration Testing?
            </h2>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              Black Box Penetration Testing is a real-world security assessment conducted without any internal knowledge of application code, architecture, or system design — except a target URL and legal permission.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <motion.div variants={sectionReveal} className="ml-10">
              <h3 className="text-2xl font-semibold mb-6">
                Why Black Box Testing Matters
              </h3>

              <ul className="space-y-4 text-gray-800 dark:text-muted-foreground">
                <li>• Simulates real-world hacker behavior</li>
                <li>• Provides unbiased security insights</li>
                <li>• Identifies exploitable vulnerabilities</li>
                <li>• Tests exposed attack surfaces</li>
                <li>• Helps prioritize real business risks</li>
              </ul>
            </motion.div>

            <motion.div
              variants={sectionReveal}
              className="flex justify-center md:justify-end mr-20 perspective-[1200px]"
            >
              <motion.img
                src="/assets/services/black_box.jpg"
                alt="Black Box Penetration Testing"
                className="w-full max-w-md rounded-xl shadow-xl"
                animate={floating3D.animate}
                transition={floating3D.transition}
                style={{ transformStyle: 'preserve-3d' }}
              />
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* ================= SERVICES GRID ================= */}
      <motion.section
        className="py-20 px-6"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto text-center">

          <motion.h2 variants={sectionReveal} className="text-4xl font-semibold mb-14">
            Benefits of Black Box Penetration Testing
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

            {[
              ['Realistic Attack Simulation', 'Replicates how attackers exploit exposed applications and infrastructure.'],
              ['Unbiased Results', 'No insider knowledge ensures realistic vulnerability discovery.'],
              ['Critical Vulnerability Detection', 'Identifies XSS, CSRF, injections, and misconfigurations.'],
              ['Business Logic Testing', 'Manual testing uncovers complex workflow flaws.'],
              ['Actionable Remediation', 'Clear guidance enables faster vulnerability fixes.'],
              ['Regulatory Readiness', 'Supports compliance expectations across UAE industries.'],
            ].map(([title, desc], i) => (
              <motion.div
                key={i}
                variants={cardReveal}
                whileHover={{
                  rotateX: 8,
                  rotateY: -8,
                  y: -12,
                }}
                transition={{ type: 'spring', stiffness: 180, damping: 14 }}
                className="relative bg-white dark:bg-muted border border-gray-200 dark:border-border rounded-2xl p-6 shadow-md cursor-pointer overflow-hidden group perspective-[800px]"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
                  <div className="absolute inset-[-2px] rounded-2xl bg-gradient-to-br from-blue-500/40 via-violet-500/40 to-cyan-500/40 blur-md" />
                </div>

                <h3 className="relative font-semibold text-lg mb-3 text-blue-600 dark:text-blue-400">
                  {title}
                </h3>
                <p className="relative text-gray-700 dark:text-muted-foreground text-sm leading-relaxed">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ================= PROCESS ================= */}
      <motion.section
        className="py-24 px-20"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">

          <motion.h2 variants={sectionReveal} className="text-center text-2xl md:text-3xl font-bold mb-16">
            How Our Black Box Testing Works
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">

            <motion.ul variants={sectionReveal} className="space-y-6 text-gray-800 dark:text-muted-foreground text-lg leading-relaxed">
              <li>• Reconnaissance scanning</li>
              <li>• Attack surface discovery</li>
              <li>• VAPT execution</li>
              <li>• Manual exploitation</li>
              <li>• Impact analysis</li>
            </motion.ul>

            <motion.ul variants={sectionReveal} className="space-y-6 ml-20 text-gray-800 dark:text-muted-foreground text-lg leading-relaxed">
              <li className="font-semibold">• Reporting & Remediation</li>
              <li>○ Proof of exploitation</li>
              <li>○ Severity scoring</li>
              <li>○ Developer guidance</li>
              <li>○ Retesting</li>
              <li className="font-semibold">• Continuous Security Validation</li>
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
          Test Your Defenses Before Attackers Do
        </motion.h2>

        <motion.p variants={sectionReveal} className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Identify real attack paths with expert-led Black Box Penetration Testing by Vulnuris.
        </motion.p>

        <motion.div variants={sectionReveal} whileHover={{ scale: 1.08 }}>
          <Link href="/contact">
            <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-xl">
              Speak With a Security Expert
            </button>
          </Link>
        </motion.div>
      </motion.section>

    </main>
  );
}
