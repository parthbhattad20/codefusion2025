'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.15 } },
};

export default function VAPTPage() {
  return (
    <motion.main
      initial="hidden"
      animate="show"
      variants={stagger}
      className="w-full bg-gray-50 dark:bg-background text-gray-900 dark:text-foreground"
    >

      {/* ================= HERO ================= */}
      <motion.section
        variants={fadeUp}
        className="relative h-screen bg-contain bg-center bg-no-repeat mt-20 bg-black"
        // style={{ backgroundImage: "url('/assets/services/vapt.jpg')" }}
      >
         <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/assets/videos/main.mp4" 
          autoPlay
          loop
          muted
          playsInline
        />
       
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-black/70"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <motion.h1
            variants={fadeUp}
            className="text-3xl md:text-5xl lg:text-5xl font-extrabold text-white mt-50"
          >
            Vulnerability Assessment & Penetration Testing
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-sm md:text-xl text-gray-200 max-w-4xl text-left"
          >
            To ensure your data is secure, your business needs to complete Vulnerability Assessment,
            Penetration Testing, and Cyber Vulnerability Assessments.
          </motion.p>

          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="mt-5 px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              SPEAK WITH AN EXPERT
            </motion.button>
          </Link>
        </div>
      </motion.section>

      {/* ================= VAPT OVERVIEW ================= */}
      <motion.section
        variants={fadeUp}
        whileInView="show"
        viewport={{ once: true }}
        className="py-24 px-6 bg-gray-50 dark:bg-background transition-colors"
      >
        <div className="max-w-7xl mx-auto text-center">

          <h1 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
            Vulnerability Assessment & Penetration Testing (VAPT)
          </h1>

          <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
            Comprehensive Vulnerability Assessment and Penetration Testing (VAPT) is essential
            to securing your organization. Our multidisciplinary approach examines security
            from every angle — technology, people, and processes.
          </p>

          <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
            Adequate security starts with a clear understanding of your vulnerabilities.
            We help you identify weak points and take corrective action before attackers
            exploit them to sabotage your business or steal confidential data.
          </p>
        </div>
      </motion.section>

      {/* ================= WHY VAPT ================= */}
      <motion.section
        variants={fadeUp}
        whileInView="show"
        viewport={{ once: true }}
        className="py-24 px-6 bg-gray-50 dark:bg-background"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div className="ml-10">
            <h2 className="text-2xl font-semibold text-primary mb-6">
              Why Vulnerability Assessment & Penetration Testing
            </h2>

            <ul className="space-y-4 text-gray-800 dark:text-gray-200">
              <li>• Identify security weaknesses before attackers</li>
              <li>• Reduce the risk of data breaches</li>
              <li>• Improve security posture and compliance</li>
              <li>• Protect business-critical systems</li>
              <li>• Strengthen incident response readiness</li>
            </ul>
          </div>

          <motion.div
            whileHover={{ scale: 1.04 }}
            transition={{ type: 'spring', stiffness: 180, damping: 18 }}
            className="flex justify-center md:justify-end mr-20"
          >
            <img
              src="/assets/services/vCiso.webp"
              alt="VAPT Services"
              className="w-full max-w-md rounded-xl shadow-lg dark:shadow-blue-900/30"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* ================= SERVICES GRID ================= */}
      <motion.section
        variants={fadeUp}
        whileInView="show"
        viewport={{ once: true }}
        className="py-15 px-6 bg-gray-50 dark:bg-background"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-primary mb-16">
            Vulnerability Assessment | Penetration Testing
          </h2>

          <motion.div
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16"
          >
            {[
              { title: "Vulnerability Assessment", desc: "Identify and prioritize vulnerabilities across internal and external systems." },
              { title: "Penetration Testing", desc: "Exploit identified vulnerabilities to demonstrate real-world attack impact." },
              { title: "Application Security Testing", desc: "Detect security flaws in web and mobile applications." },
              { title: "Phishing Assessments", desc: "Measure employee awareness against phishing attacks." },
              { title: "Red Team Security Testing", desc: "Simulate real-world attackers using multi-layered attack scenarios." },
              { title: "Third-Party Risk Testing", desc: "Assess vendor and third-party security exposure." }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                className="
                  bg-white dark:bg-muted
                  border border-gray-200 dark:border-border
                  rounded-2xl p-6
                  shadow-sm hover:shadow-xl
                  transition-all duration-300
                  group
                "
              >
                <h3 className="
                  font-semibold text-lg mb-3
                  text-blue-600 dark:text-blue-400
                  group-hover:text-violet-600 dark:group-hover:text-violet-400
                  transition-colors
                ">
                  {item.title}
                </h3>

                <p className="text-gray-700 dark:text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ================= VAPT DETAILS ================= */}
      <motion.section
        variants={fadeUp}
        whileInView="show"
        viewport={{ once: true }}
        className="py-24 px-20 bg-gray-50 dark:bg-background"
      >
        <div className="max-w-7xl mx-auto">

          <h2 className="text-center text-2xl md:text-3xl font-bold text-sky-600 dark:text-sky-400 mb-16">
            What Is Vulnerability Assessment & Penetration Testing?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            <ul className="space-y-6 text-lg text-gray-800 dark:text-gray-200">
              <li>• Continuous scanning to detect vulnerabilities</li>
              <li>• Identification and prioritization based on risk impact</li>
              <li>• Determining remediation actions</li>
              <li>• Internal & external security assessments</li>
            </ul>

            <ul className="space-y-6 text-lg text-gray-800 dark:text-gray-200 ml-20">
              <li>• Network & infrastructure testing</li>
              <li>• Web application testing</li>
              <li>• Internal & external penetration testing</li>
              <li>• Vulnerability management program</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* ================= CTA ================= */}
      <motion.section
        variants={fadeUp}
        whileInView="show"
        viewport={{ once: true }}
        className="py-24 px-6 text-center bg-gray-50 dark:bg-background"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Don’t Leave Vulnerabilities for Hackers
        </h2>

        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-muted-foreground">
          Like a real threat actor, we simulate attacks to test how well your organization
          can withstand modern cyber threats.
        </p>

        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-blue-600 text-white shadow-md hover:opacity-90 transition"
          >
            Talk to a VAPT Expert
          </motion.button>
        </Link>
      </motion.section>

    </motion.main>
  );
}
