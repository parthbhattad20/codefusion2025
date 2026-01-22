'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const products = [
  {
    name: "Vaultix",
    tagline: "Streamline Your IT Service Management",
    features: [
      "Asset management",
      "Software Bill Of Materials",
      "Ticket Management",
    ],
    imageSrc: "./assets/products/Vumas.png",
    imageAlt: "Vaultix dashboard",
    link: "https://vaultix.in",
  },
  {
    name: "Phishinstinct",
    tagline: "Train your employees and test their awareness against phishing attacks.",
    features: [
      "Customizable phishing templates",
      "Automated campaign scheduling",
      "Detailed reporting and analytics",
      "Integrated awareness training modules",
    ],
    imageSrc: "./assets/products/Phishinstinct.png",
    imageAlt: "Phishinstinct interface",
    link: "https://phishinstinct.com",
  },
  {
    name: "Kloudraksha",
    tagline: "Secure, optimise and protect your cloud infrastructure.",
    features: [
      "Cloud Configuration Audits",
      "Multi-Cloud Support",
      "Automated Remediation and Continuous Monitoring",
      "Customizable Reports",
    ],
    imageSrc: "./assets/products/kloudraksha.png",
    imageAlt: "Kloudraksha dashboard",
    link: "https://kloudraksha.com",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground px-6 py-16 mt-10 lg:mt-20 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={container}
        initial="hidden"
        animate="show"
      >
        
        <motion.div variants={fadeUp} className="text-center mb-24">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text bg-gradient-to-br from-violet-500 to-blue-900 text-transparent">
            Our Security Products
          </h1>

          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            Integrated software solutions designed to give you visibility, context, and control over your security posture.
          </p>
        </motion.div>

       
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-120px' }}
          className="space-y-24 md:space-y-32"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center"
            >
              {/* Text */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 180, damping: 22 }}
                className={`space-y-6 ${index % 2 !== 0 ? 'md:order-last' : ''}`}
              >
                <h2 className="text-3xl md:text-4xl font-bold">{product.name}</h2>
                <p className="text-lg text-muted-foreground">{product.tagline}</p>

                <ul className="space-y-3">
                  {product.features.map((feature, fIndex) => (
                    <motion.li
                      key={fIndex}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: fIndex * 0.08 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  whileHover={{ scale: 1.06, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                >
                  <Link href={product.link}>
                    <Button
                      size="lg"
                      variant="secondary"
                      className="rounded-full font-bold bg-gradient-to-br from-violet-500 to-violet-800 text-white focus:ring-2 focus:ring-violet-400 hover:shadow-xl dark:hover:shadow-violet-900 transition duration-200"
                    >
                      Learn More
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>

              
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                whileHover={{ scale: 1.03 }}
                className={`${index % 2 !== 0 ? '' : 'md:order-last'}`}
              >
                <div className="relative overflow-hidden rounded-xl shadow-xl border border-border">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="rounded-xl w-full h-auto object-cover"
                  />

                  {/* soft glow */}
                  <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 pointer-events-none" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mt-32 mb-10 border-t border-border pt-16"
        >
          <h3 className="text-3xl font-semibold mb-4 bg-clip-text bg-gradient-to-br from-slate-500 to-slate-950 dark:from-slate-300 dark:to-slate-700 text-transparent">
            Integrate Your Defenses
          </h3>

          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Discover how Vulnuris products and services work together to provide layered security.
          </p>

          <motion.div
            whileHover={{ scale: 1.08, y: -4 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 220, damping: 18 }}
          >
            <Link href="/contact?subject=Platform%20Demo">
              <Button
                size="lg"
                className="px-8 py-2 rounded-full bg-gradient-to-b from-violet-500 to-violet-600 text-white focus:ring-2 focus:ring-violet-400 hover:shadow-xl dark:hover:shadow-violet-900 transition duration-200 text-lg font-bold"
              >
                Request a Free Demo
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
