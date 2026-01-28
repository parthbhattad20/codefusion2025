'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const sectionReveal = {
  hidden: { opacity: 0, y: 40, filter: 'blur(6px)' },
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
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const floating3D = {
  animate: {
    rotateX: [0, 6, 0, -6, 0],
    rotateY: [0, -8, 0, 8, 0],
    y: [0, -10, 0, 10, 0],
  },
  transition: { duration: 12, repeat: Infinity, ease: 'easeInOut' },
};

export default function DPOServicePage() {
  return (
    <main className="w-full bg-white text-gray-900 dark:bg-background dark:text-foreground">

      {/* ================= HERO ================= */}
      <section className="relative h-screen overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center"
       
        />
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
          className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:60px_60px]" />

        <motion.div
          className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-12"
          animate={{ x: ['-30%', '30%'] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-32">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-6 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm text-white tracking-wide"
          >
            UAE Data Protection & Compliance
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight"
          >
            DPO as a Service
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
            Your go-to security and compliance expert for data protection.
          </motion.p>

          <motion.div
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
            className="mt-10"
          >
            <Link href="/contact">
              <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition">
                Protect Your Business Now
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ================= DPO OVERVIEW ================= */}
      <motion.section
        className="py-24 px-6"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-120px' }}
      >
        <div className="max-w-7xl mx-auto">

          <motion.div variants={sectionReveal} className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
              What Is DPO ?
            </h1>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              A Data Protection Officer ensures your organization remains compliant with data privacy regulations, protecting personal data according to legal requirements.
            </p>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              DPO as a Service offers expert guidance, oversight, and actionable compliance strategies, often providing more flexibility and depth than an in-house DPO.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <motion.div variants={sectionReveal} className="ml-10">
              <h2 className="text-2xl font-semibold mb-6">
                Benefits of DPO as a Service
              </h2>

              <ul className="space-y-4 text-gray-800 dark:text-muted-foreground">
                <li>• Safeguard data privacy and customer rights</li>
                <li>• Provide precise compliance guidance</li>
                <li>• Monitor data processing activities</li>
                <li>• Manage risk and implement timely security measures</li>
                <li>• Foster a privacy-conscious organizational culture</li>
              </ul>
            </motion.div>

            <motion.div
              variants={sectionReveal}
              className="flex justify-center md:justify-end mr-20 perspective-[1200px]"
            >
              <motion.img
                src="/assets/services/dpo.png"
                alt="DPO Service"
                className="w-full max-w-md rounded-xl shadow-xl"
                animate={floating3D.animate}
                transition={floating3D.transition}
                style={{ transformStyle: 'preserve-3d' }}
              />
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* ================= DPO SERVICES GRID ================= */}
      <motion.section
        className="py-20 px-6"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto text-center">

          <motion.h2 variants={sectionReveal} className="text-4xl font-semibold mb-14">
            Our DPO as a Service Capabilities
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

            {[
              ['Advisory', 'Ensure your organization aligns with UAE privacy regulations.'],
              ['Compliance Management', 'Identify frameworks and appoint DPO per mandates.'],
              ['Incident Response', 'Assess and manage data privacy incidents.'],
              ['Privacy Culture', 'Build responsible data handling awareness.'],
              ['Risk Management', 'Address cyber risks and continuity planning.'],
              ['Regulatory Liaison', 'Coordinate with authorities and data subjects.'],
            ].map(([title, desc], i) => (
              <motion.div
                key={i}
                variants={cardReveal}
                whileHover={{ y: -10, boxShadow: '0 20px 50px rgba(0,0,0,0.15)' }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="relative bg-white dark:bg-muted border border-gray-200 dark:border-border rounded-2xl p-6 shadow-sm cursor-pointer overflow-hidden group"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
                  <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-r from-blue-500/40 via-violet-500/40 to-blue-500/40 blur-sm" />
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

      {/* ================= DPO DETAILS ================= */}
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
        How Our DPO Service Engagement Works
      </h2>

      <p className="mt-4 max-w-3xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
        A structured engagement model to manage privacy compliance, regulatory coordination, and long-term data protection governance.
      </p>

      <div className="mt-6 h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" />
    </motion.div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

      {/* Core Responsibilities */}
      <motion.div
        variants={sectionReveal}
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
        className="relative p-8 rounded-2xl border border-gray-200 dark:border-slate-800
                   bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl
                   shadow-lg hover:shadow-2xl"
      >
        <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-indigo-500 to-violet-500 rounded-full" />

        <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
          Core Responsibilities
        </h3>

        <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-lg">
          <li>• Advisory on privacy regulations</li>
          <li>• Compliance management</li>
          <li>• Incident response</li>
          <li>• Privacy culture enablement</li>
          <li>• Risk mitigation strategies</li>
        </ul>
      </motion.div>

      {/* Accountability & Liaison */}
      <motion.div
        variants={sectionReveal}
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
        className="relative p-8 rounded-2xl border border-gray-200 dark:border-slate-800
                   bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl
                   shadow-lg hover:shadow-2xl"
      >
        <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-violet-500 to-fuchsia-500 rounded-full" />

        <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
          Accountability & Liaison
        </h3>

        <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-lg">
          <li>• Regulatory coordination</li>
          <li>• Data processing monitoring</li>
          <li>• Compliance reporting</li>
          <li>• Stakeholder trust</li>
          <li>• Secure continuity</li>
        </ul>
      </motion.div>

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
          Protect Your Data Today
        </motion.h2>

        <motion.p variants={sectionReveal} className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Ensure compliance, safeguard privacy, and manage risks with DPO as a Service..
        </motion.p>

        <motion.div variants={sectionReveal} whileHover={{ scale: 1.08 }}>
          <Link href="/contact">
            <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-xl">
              Talk to a DPO Expert
            </button>
          </Link>
        </motion.div>
      </motion.section>

    </main>
  );
}
