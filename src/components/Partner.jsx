"use client";

import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Partner() {
  const benefits = [
    "Scalable, intuitive security solutions tailored to your needs.",
    "Real-time threat intelligence and actionable remediation reports.",
    "Proven expertise trusted by security teams across diverse industries.",
    "Dedicated expert guidance and responsive support when you need it.",
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
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
    <section className="mb-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-2xl mx-auto"
      >
        <motion.div
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200, damping: 22 }}
        >
          <Card className="p-8 shadow-md hover:shadow-2xl transition-shadow duration-300 border-border/60 relative overflow-hidden">
            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10" />

            <CardHeader className="p-0 mb-6 text-center relative z-10">
              <CardTitle className="text-3xl font-bold text-primary">
                Why Partner with Vulnuris?
              </CardTitle>
            </CardHeader>

            <CardContent className="p-0 relative z-10">
              <motion.ul
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="list-none space-y-4 text-lg"
              >
                {benefits.map((itemText, i) => (
                  <motion.li
                    key={i}
                    variants={item}
                    whileHover={{ x: 8 }}
                    transition={{ type: "spring", stiffness: 220, damping: 20 }}
                    className="flex items-start cursor-pointer group"
                  >
                    <motion.span
                      whileHover={{ rotate: 12, scale: 1.4 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="text-primary mr-3 mt-1"
                    >
                      ✓
                    </motion.span>

                    <span className="group-hover:text-primary transition-colors duration-300">
                      {itemText}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className="text-center mt-24 mb-10"
      >
        <motion.h3
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="text-3xl font-semibold mb-4 bg-clip-text bg-gradient-to-br from-slate-500 to-slate-950 dark:from-slate-300 dark:to-slate-700 text-transparent"
        >
          Ready to Fortify Your Defenses?
        </motion.h3>

        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          Join us on the journey to secure the future. Let's work together to{" "}
          <strong className="text-primary">Find</strong>,{" "}
          <strong className="text-primary">Fix</strong>, and{" "}
          <strong className="text-primary">Fortify</strong>.
        </p>

        <motion.div
          whileHover={{ scale: 1.08, y: -4 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 220, damping: 18 }}
        >
          <Button
            size="lg"
            className="px-8 py-3 rounded-full bg-gradient-to-b from-violet-500 to-violet-600 text-white focus:ring-2 focus:ring-violet-400 hover:shadow-2xl dark:hover:shadow-violet-900 transition-shadow duration-300 text-lg font-bold"
          >
            Become a Partner
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
