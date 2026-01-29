'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const sectionReveal = {
  hidden: { opacity: 0, y: 50, filter: 'blur(8px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9 } },
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
  transition: { duration: 14, repeat: Infinity, ease: 'easeInOut' },
};

export default function WirelessSecurityPage() {
  return (
    <main className="w-full bg-white text-gray-900 dark:bg-background dark:text-foreground">

      {/* ================= HERO ================= */}
      <section className="relative h-screen overflow-hidden bg-[#050b16]">

        {/* Wireless grid */}
        <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,#22c55e22_1px,transparent_1px),linear-gradient(to_bottom,#22c55e22_1px,transparent_1px)] bg-[size:80px_80px]" />

        {/* Background image */}
        <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/assets/videos/main.mp4" type="video/mp4" />
  </video>

        {/* Signal scan beam */}
        <motion.div
          className="absolute inset-y-0 w-[40%] bg-gradient-to-r from-transparent via-emerald-400/10 to-transparent"
          animate={{ x: ['-40%', '140%'] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />

        <div className="relative z-10 h-full flex flex-col justify-center px-6 max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-6 px-4 py-2 rounded-full border border-primary bg-primary-400/10 text-primary text-sm tracking-widest"
          >
            WIRELESS DEFENSE
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight max-w-4xl"
          >
            Wireless Security <br /> Assessment
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-gray-300 max-w-3xl text-lg"
          >
            Identify vulnerabilities across Wi-Fi, Bluetooth, and wireless infrastructure before attackers exploit them.
          </motion.p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }} className="mt-10">
            <Link href="/contact">
              <button className="px-10 py-4 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 hover:bg-blue-500 transition text-white font-semibold shadow-lg">
                Request Wireless PenTest
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
            <h1 className="text-3xl md:text-4xl font-bold text-primary dark:text-primary">
              What is Wireless Penetration Testing?
            </h1>

            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
              Wireless penetration testing identifies vulnerabilities in Wi-Fi networks, Bluetooth devices, access points,
              and wireless infrastructure to prevent unauthorized access and data compromise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <motion.div variants={sectionReveal} className="ml-10">
              <h2 className="text-2xl font-semibold mb-6 text-primary">
                Why Wireless Security Testing Matters
              </h2>

              <ul className="space-y-4 text-gray-800 dark:text-gray-200">
                <li>• Identify vulnerabilities in wireless networks</li>
                <li>• Prevent unauthorized access via Wi-Fi or Bluetooth</li>
                <li>• Ensure PDPL & NESA compliance</li>
                <li>• Strengthen overall security posture</li>
                <li>• Remediate risks before exploitation</li>
              </ul>
            </motion.div>

            <motion.div
              variants={sectionReveal}
              className="flex justify-center md:justify-end mr-20 perspective-[1200px]"
            >
              <motion.img
                src="/assets/services/vCiso.webp"
                alt="Wireless Security"
                className="w-full max-w-md rounded-xl shadow-xl"
                animate={floating3D.animate}
                transition={floating3D.transition}
                style={{ transformStyle: 'preserve-3d' }}
              />
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* ================= WIRELESS SECURITY COMMAND CENTER ================= */}
<motion.section
  className="py-28 px-6"
  variants={stagger}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
>
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <motion.div variants={sectionReveal} className="text-center mb-16">
      <h2
        className="text-3xl md:text-4xl font-bold
                   bg-gradient-to-r from-indigo-500 to-fuchsia-500
                   bg-clip-text text-transparent"
      >
        Wireless Security Control Model
      </h2>

      <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
        A practical framework to identify, validate, and secure wireless attack
        surfaces across enterprise environments.
      </p>
    </motion.div>

    {/* Main command panel */}
    <motion.div
      variants={sectionReveal}
      className="relative rounded-3xl
                 border border-indigo-500/25 dark:border-fuchsia-500/25
                 bg-white dark:bg-[#050b16]
                 p-10 shadow-2xl overflow-hidden"
    >
      {/* gradient glow */}
      <div
        className="absolute inset-0
                   bg-gradient-to-br from-indigo-500/10 via-transparent to-fuchsia-500/10
                   dark:from-indigo-500/20 dark:to-fuchsia-500/20"
      />

      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {[
          {
            title: "Access Point Security",
            desc: "Assessment of encryption, authentication methods, and management interfaces."
          },
          {
            title: "Rogue Device Detection",
            desc: "Identification of unauthorized access points and impersonating networks."
          },
          {
            title: "Client Device Exposure",
            desc: "Validation of laptop, mobile, and IoT wireless configurations."
          },
          {
            title: "Signal Coverage Analysis",
            desc: "Detection of excessive signal leakage beyond physical boundaries."
          },
          {
            title: "Attack Simulation",
            desc: "Controlled testing of handshake capture, weak encryption, and misconfigurations."
          },
          {
            title: "Monitoring & Hardening",
            desc: "Recommendations for continuous detection and wireless security controls."
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={cardReveal}
            className="rounded-2xl
                       border border-indigo-500/25 dark:border-fuchsia-500/25
                       bg-white/70 dark:bg-white/5
                       backdrop-blur-md
                       p-6
                       hover:bg-white/90 dark:hover:bg-white/10
                       transition"
          >
            <h3 className="text-lg font-semibold text-indigo-600 dark:text-fuchsia-400">
              {item.title}
            </h3>

            <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}

      </div>

    </motion.div>

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

          <motion.h2 variants={sectionReveal} className="text-4xl font-semibold mb-14 text-primary">
            Our Wireless Security Assessment Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

            {[
              ['Define Scope', 'Define testing objectives and coverage'],
              ['Reconnaissance', 'Discover wireless assets and signals'],
              ['VAPT', 'Perform safe vulnerability assessment'],
              ['Reporting', 'Detailed remediation guidance'],
              ['Compliance', 'PDPL & NESA alignment'],
              ['Continuous Improvement', 'Long-term security hardening'],
            ].map(([title, desc], i) => (
              <motion.div
                key={i}
                variants={cardReveal}
                whileHover={{
                  y: -6,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                }}
                className="relative group bg-white dark:bg-muted border border-gray-200 dark:border-border rounded-2xl p-6 shadow-sm overflow-hidden transition-all duration-300"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent" />

                <h3 className="font-semibold text-lg mb-3 text-primary dark:text-primary">
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

      {/* ================= CTA ================= */}
      <motion.section
        className="py-24 px-6 text-center"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h2 variants={sectionReveal} className="text-3xl md:text-4xl font-bold mb-4">
          Secure Your Wireless Infrastructure
        </motion.h2>

        <motion.p variants={sectionReveal} className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Protect your wireless networks with expert-led penetration testing and security validation.
        </motion.p>

        <motion.div variants={sectionReveal} whileHover={{ scale: 1.08 }}>
          <Link href="/contact">
            <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-xl">
              Request Wireless Assessment
            </button>
          </Link>
        </motion.div>
      </motion.section>

    </main>
  );
}
