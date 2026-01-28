"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Impact() {
  const cards = [
    {
      title: "Reduced Compliance Risk for Global Healthcare Organization",
      description:
        "A healthcare client operating in the Middle East needed HIPAA compliance training. Newtons Apple built a scalable program and provided continuous support.",
      result:
        "Result: Improved HIPAA awareness and reduced risk across current and future employees.",
      image: "/assets/Impact/health_1.png",
    },
    {
      title: "Strengthened Security for Leading Manufacturing Company",
      description:
        "A major Indian manufacturer partnered with us for a deep IT asset assessment, revealing critical vulnerabilities. Our long-term engagement introduced regular testing and patch management.",
      result:
        "Result: Significant improvement in cybersecurity maturity, enabling focus on core business.",
      image: "/assets/Impact/manufacture.png",
    },
    {
      title: "PII & IP Protection for Leading EdTech Company",
      description:
        "We secured both web and mobile e-learning platforms handling sensitive PII. Custom privacy policies and content protection protocols were implemented.",
      result:
        "Result: Trusted learning environment with secure user data and trainer IP protection.",
      image: "/assets/Impact/edtech.png",
    },
    {
      title: "Security Overhaul for IoT Solutions Provider",
      description:
        "An IoT company faced mounting threats. We performed a full security audit and introduced a robust vulnerability management program.",
      result:
        "Result: Safer products and stronger client confidence through proactive cybersecurity.",
      image: "/assets/Impact/iot.png",
    },
    {
      title: "Resilience Recovery for Financial Institution",
      description:
        "After a cyberattack, we executed a full forensic audit and implemented a defense-in-depth model with continuous testing.",
      result:
        "Result: Fast recovery, hardened security, and better breach prevention posture.",
      image: "/assets/Impact/fintech.png",
    },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40, scale: 0.97 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="mb-20 px-4">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-4xl font-bold mb-12 text-center text-primary"
      >
        Impact Delivered
      </motion.h2>

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="flex flex-wrap justify-center gap-6"
      >
        {cards.map((card, index) => (
          <motion.div key={index} variants={item}>
            <motion.div
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
              className="group h-full"
            >
              <Card className="shadow-lg hover:shadow-2xl transition-shadow duration-300 w-full sm:w-[400px] relative overflow-hidden border-border/60">
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10" />

                <CardHeader className="flex flex-col items-center relative z-10">
                  <motion.div
                    whileHover={{ rotate: 6, scale: 1.12 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    className="w-20 h-20 rounded-md overflow-hidden mb-4 shadow-md"
                  >
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </motion.div>

                  <CardTitle className="text-xl font-semibold text-center transition-colors duration-300 group-hover:text-primary">
                    {card.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10">
                  <p className="mb-4 text-muted-foreground leading-relaxed transition-colors duration-300 group-hover:text-foreground">
                    {card.description}
                  </p>

                  <p className="text-sm font-medium text-primary transition-all duration-300 group-hover:translate-x-1">
                    {card.result}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
