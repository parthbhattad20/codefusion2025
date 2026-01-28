"use client";

import { motion } from "framer-motion";

export default function Certification() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative overflow-hidden grid grid-cols-1 md:grid-cols-2 
                 bg-gradient-to-br from-blue-900 via-blue-950 to-black
                 text-white pt-6 md:py-10 rounded-2xl mx-2 my-4 lg:mx-8 lg:my-8 shadow-2xl"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-violet-600/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-yellow-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl lg:text-4xl xl:text-5xl font-bold leading-tight"
        >
          <span className="block mb-2 text-sm tracking-widest text-violet-400 uppercase">
            Trust & Compliance
          </span>

          <span>
            <span className="text-violet-500">V</span>'re{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-yellow-400 to-yellow-700">
              ISO Certified
            </span>{" "}
            For It.
          </span>
        </motion.h2>

        <p className="mt-4 text-sm md:text-base text-white/70 max-w-md">
          Our certifications reflect our commitment to global security
          standards, compliance excellence, and operational integrity.
        </p>
      </div>

      <ul className="relative z-10 flex justify-center items-center gap-6 my-6">
        {[
          { src: "/assets/ISO-27701-certified.png", alt: "ISO 27701" },
          { src: "/assets/iso9001.png", alt: "ISO 9001" },
          { src: "/assets/iso27001.png", alt: "ISO 27001" },
        ].map((cert, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ y: -8, scale: 1.08 }}
            className="group relative"
          >
            <div className="absolute inset-0 rounded-full bg-yellow-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <img
              className="relative h-20 w-20 lg:h-28 lg:w-28 object-contain drop-shadow-xl"
              src={cert.src}
              alt={cert.alt}
            />
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
