'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';



const sectionReveal = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardReveal = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function RedTeamingPage() {
  return (
    <main className="w-full bg-gray-50 dark:bg-background text-gray-900 dark:text-foreground">

      {/* ================= HERO ================= */}
      <section className="relative h-screen overflow-hidden bg-[#060001]">

        {/* Red cyber grid */}
        <div
          className="absolute inset-0 opacity-[0.08]
          bg-[linear-gradient(to_right,#ff000033_1px,transparent_1px),
              linear-gradient(to_bottom,#ff000033_1px,transparent_1px)]
          bg-[size:70px_70px]"
        />

        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/assets/services/red.webp')" }}
        />

        {/* Scan beam */}
        <motion.div
          className="absolute inset-y-0 w-[45%] bg-gradient-to-r from-transparent via-red-600/30 to-transparent"
          animate={{ x: ['-50%', '150%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />

        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/90" />

        <div className="relative z-10 h-full flex flex-col justify-center px-6 max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-6 px-5 py-2 rounded-full border border-red-500/40 bg-red-600/10 text-red-400 text-sm tracking-[0.3em] uppercase w-fit"
          >
            Offensive Security
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight max-w-4xl"
          >
            Red Teaming Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-red-200/80 max-w-3xl text-lg"
          >
            Simulate real-world cyber attacks to expose blind spots, break defenses,
            and strengthen detection before real adversaries strike.
          </motion.p>

          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10"
          >
            <Link href="/contact">
              <button className="px-10 py-4 rounded-full font-semibold text-white
                bg-gradient-to-r from-red-700 via-red-600 to-orange-600
                shadow-[0_0_40px_rgba(255,0,0,0.35)]
                hover:shadow-[0_0_70px_rgba(255,0,0,0.6)]
                transition-all">
                Speak With a Red Team Expert
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
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">

          <motion.div variants={sectionReveal} className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-red-600 dark:text-red-500">
              Red Teaming Assessments
            </h1>
            <p className="mt-6 max-w-4xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
              Red Teaming emulates advanced threat actors using stealthy techniques across
              networks, applications, cloud, and human targets.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <motion.div variants={sectionReveal} className="ml-10">
              <h2 className="text-2xl font-semibold mb-6">Why Red Teaming Matters</h2>
              <ul className="space-y-4">
                <li>• Identify real-world attack paths</li>
                <li>• Measure detection & response effectiveness</li>
                <li>• Test people, process & technology</li>
                <li>• Improve incident readiness</li>
                <li>• Validate security investments</li>
              </ul>
            </motion.div>

            <motion.div
              variants={sectionReveal}
              className="flex justify-center md:justify-end mr-20"
            >
              <motion.img
                src="/assets/services/red-t.jpg"
                alt="Red Teaming"
                className="w-full max-w-md rounded-xl shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* ================= SERVICES GRID ================= */}
      <motion.section
        className="py-20 px-6 bg-gray-100 dark:bg-muted/30"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto text-center">

          <motion.h2 variants={sectionReveal} className="text-4xl font-semibold mb-14">
            Our Red Teaming Capabilities
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

            {[
              ['External Red Teaming', 'Simulate perimeter attacks'],
              ['Internal Red Teaming', 'Post-breach movement'],
              ['Social Engineering', 'Human-layer attacks'],
              ['Cloud & Identity', 'Privilege escalation'],
              ['Adversary Simulation', 'MITRE ATT&CK'],
              ['Purple Teaming', 'Detection tuning'],
            ].map(([title, desc], i) => (
              <motion.div
                key={i}
                variants={cardReveal}
                whileHover={{ y: -10, scale: 1.03 }}
                className="bg-white dark:bg-muted border border-gray-200 dark:border-border rounded-2xl p-6 shadow-sm transition-all"
              >
                <h3 className="font-semibold text-lg mb-3 text-red-600 dark:text-red-400">
                  {title}
                </h3>
                <p className="text-gray-700 dark:text-muted-foreground text-sm">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ================= DETAILS ================= */}
      <motion.section
        className="py-24 px-20"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">

          <motion.h2 variants={sectionReveal} className="text-center text-3xl font-bold mb-16">
            How Our Red Team Engagement Works
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            <motion.ul variants={sectionReveal} className="space-y-6 text-lg">
              <li>• Define scope</li>
              <li>• Reconnaissance</li>
              <li>• Attack simulation</li>
              <li>• Control evasion</li>
              <li>• Business impact mapping</li>
            </motion.ul>

            <motion.ul variants={sectionReveal} className="space-y-6 text-lg">
              <li className="font-semibold">• Continuous improvement</li>
              <li>○ MITRE mapping</li>
              <li>○ Detection gaps</li>
              <li>○ Executive reporting</li>
              <li>○ Validation</li>
            </motion.ul>

          </div>
        </div>
      </motion.section>

      {/* ================= CTA ================= */}
      <motion.section
        className="py-24 px-6 text-center bg-gray-100 dark:bg-muted/30"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h2 variants={sectionReveal} className="text-3xl md:text-4xl font-bold mb-4">
          Think Like an Attacker. Defend Like a Pro.
        </motion.h2>

        <motion.p variants={sectionReveal} className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Validate your defenses with real-world Red Teaming by Vulnuris experts.
        </motion.p>

        <motion.div variants={sectionReveal} whileHover={{ scale: 1.08 }}>
          <Link href="/contact">
            <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-xl">
              Talk to a Red Team Expert
            </button>
          </Link>
        </motion.div>
      </motion.section>

    </main>
  );
}
