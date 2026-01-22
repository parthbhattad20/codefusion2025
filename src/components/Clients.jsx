"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Clients() {
  const techPartners = [
    { src: "/assets/tech/kali.png", alt: "Kali-Partner logo", w: 100, h: 30 },
    { src: "/assets/tech/nessus.png", alt: "Nessus-Partner logo", w: 140, h: 70 },
    { src: "/assets/tech/phished.png", alt: "Phished-Partner logo", w: 140, h: 70 },
    { src: "/assets/tech/portswigger.png", alt: "Port-swigger-Partner logo", w: 150, h: 80 },
    { src: "/assets/tech/tech partner 2.png", alt: "Tech-Partner logo", w: 140, h: 70 },
  ];

  const strategicPartners = [
    { src: "/assets/partners/alnoorain.png", alt: "Alnoorain company logo", w: 140, h: 70 },
    { src: "/assets/partners/dcode.png", alt: "Dcode company logo", w: 140, h: 70 },
    { src: "/assets/partners/spiere.png", alt: "Spiere company logo", w: 140, h: 70 },
    { src: "/assets/partners/Thinkinfinity.png", alt: "Thinkinfinity company logo", w: 140, h: 70 },
  ];

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="mb-20 px-4">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12"
      >
        {/* Technology Partners */}
        <motion.div variants={item} className="text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-6 text-primary"
          >
            Our Technology Partners
          </motion.h2>

          <p className="text-lg text-muted-foreground mb-6">
            From innovative startups to established enterprises, organizations rely on Vulnuris to safeguard their digital assets.
          </p>

          <motion.div className="flex flex-wrap justify-center md:justify-start gap-6 items-center">
            {techPartners.map((img, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -6, scale: 1.12 }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
                className="relative group"
              >
                <div className="absolute inset-0 rounded-lg bg-violet-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <Image
                  width={img.w}
                  height={img.h}
                  src={img.src}
                  alt={img.alt}
                  className="relative opacity-80 group-hover:opacity-100 transition duration-300"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonial */}
          <motion.div
            variants={item}
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 22 }}
            className="mt-8 p-5 bg-accent border-l-4 border-primary rounded-r-lg shadow-sm hover:shadow-lg cursor-pointer"
          >
            <blockquote className="italic text-accent-foreground">
              "Vulnuris transformed our security posture. Their insights are invaluable."
            </blockquote>
            <p className="text-sm text-accent-foreground/80 mt-2">
              – CISO, Global Tech Firm
            </p>
          </motion.div>
        </motion.div>

        {/* Strategic Partners */}
        <motion.div variants={item} className="text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-6 text-primary"
          >
            Our Strategic Partners
          </motion.h2>

          <p className="text-lg text-muted-foreground mb-6">
            <span className="text-violet-800 font-semibold">We</span> collaborate with leading technology providers and security innovators to deliver comprehensive solutions.
          </p>

          <motion.div className="flex flex-wrap justify-center md:justify-start gap-6 items-center">
            {strategicPartners.map((img, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -6, scale: 1.12 }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
                className="relative group"
              >
                <div className="absolute inset-0 rounded-lg bg-cyan-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <Image
                  width={img.w}
                  height={img.h}
                  src={img.src}
                  alt={img.alt}
                  className="relative opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
