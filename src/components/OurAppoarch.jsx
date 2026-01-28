"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Search, Shield, Wrench } from "lucide-react";
import { motion } from "framer-motion";

export default function Approach() {
  const approaches = [
    {
      icon: Search,
      title: "Find",
      description:
        "Discover hidden vulnerabilities using advanced scanning, penetration testing, and AI-driven threat intelligence.",
      color: "blue",
    },
    {
      icon: Wrench,
      title: "Fix",
      description:
        "Deliver prioritized, actionable remediation guidance and support to eliminate security weaknesses effectively.",
      color: "violet",
    },
    {
      icon: Shield,
      title: "Fortify",
      description:
        "Strengthen defenses with continuous monitoring, security hardening, and strategic advisory services.",
      color: "cyan",
    },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 40, scale: 0.97 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="mb-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Card className="p-8 shadow-sm hover:shadow-lg transition-shadow duration-500 border-border/60">
          <CardContent className="p-0">
            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold mb-10 text-center text-primary flex flex-col lg:flex-row items-center justify-center gap-2"
            >
              Our Approach:
              <span className="hidden lg:flex items-center gap-1 text-muted-foreground font-medium">
                Find <ChevronRight className="w-4 h-4 opacity-60" />
                Fix <ChevronRight className="w-4 h-4 opacity-60" />
                Fortify
              </span>
            </motion.h2>

            {/* Cards */}
            <motion.ul
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 text-lg text-center"
            >
              {approaches.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.li key={index} variants={card}>
                    <motion.div
                      whileHover={{
                        y: -10,
                        scale: 1.03,
                      }}
                      transition={{ type: "spring", stiffness: 220, damping: 22 }}
                      className="group h-full"
                    >
                      <Card className="p-6 h-full shadow-sm hover:shadow-xl transition-all duration-300 border-border/60 relative overflow-hidden">
                        {/* Hover glow */}
                        <div
                          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none
                          bg-gradient-to-br from-${item.color}-500/10 to-transparent`}
                        />

                        <CardContent className="p-0 flex flex-col items-center relative z-10">
                          {/* Icon */}
                          <motion.div
                            whileHover={{ rotate: 8, scale: 1.15 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="mb-4"
                          >
                            <Icon
                              className={`w-10 h-10 text-${item.color}-500`}
                            />
                          </motion.div>

                          {/* Title */}
                          <h3 className="font-semibold text-xl mb-3 transition-colors duration-300 group-hover:text-primary">
                            {item.title}
                          </h3>

                          {/* Description */}
                          <p className="text-muted-foreground text-sm leading-relaxed transition-colors duration-300 group-hover:text-foreground">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.li>
                );
              })}
            </motion.ul>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
